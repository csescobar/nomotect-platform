import { createElement, EventHandler, getUniqueID, isNullOrUndefined as isNOU } from '@syncfusion/ej2-base';
import { ThinkingContextBadge } from '../ai-assistview/interface';
import { Timeline, TimelineOrientation } from '@syncfusion/ej2-layouts';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import { createSpinner, showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
export var CONTEXT_TYPE_META = {
    'file': {
        iconCss: 'e-icons e-file-document',
        cssClass: 'e-context-file'
    },
    'variable': {
        iconCss: '',
        cssClass: 'e-context-variable'
    },
    'search': {
        iconCss: 'e-icons e-search',
        cssClass: 'e-context-search'
    },
    'tool': {
        iconCss: 'e-icons e-settings',
        cssClass: 'e-context-tool'
    },
    'result': {
        iconCss: 'e-icons e-circle-info',
        cssClass: 'e-context-result'
    },
    'context': {
        iconCss: '',
        cssClass: 'e-context-generic'
    }
};
/**
 * Defines the Thinking of AIAssist.
 * @hidden
 */
var AssistThinking = /** @class */ (function () {
    function AssistThinking(parent) {
        this.collapsedStates = new Map();
        this.timelineInstances = new Map();
        this.spinnerInstances = new Map();
        this.parent = parent;
    }
    AssistThinking.prototype.getModuleName = function () {
        return 'assistThinking';
    };
    AssistThinking.prototype.destroy = function () {
        //this.parent = null;
        this.collapsedStates.clear();
        // Destroy all timeline instances
        this.timelineInstances.forEach(function (timeline) {
            if (timeline) {
                timeline.destroy();
            }
        });
        this.timelineInstances.clear();
        // Hide and cleanup all spinner instances
        this.spinnerInstances.forEach(function (spinnerElement) {
            if (spinnerElement && spinnerElement.parentElement) {
                hideSpinner(spinnerElement);
            }
        });
        this.spinnerInstances.clear();
    };
    /**
     * Creates thinking wrapper for all thinking items.
     *
     * @param {ThinkingBlock} item - Gets the thinking item model.
     * @param {HTMLElement} responseWrapper - The response wrapper element.
     * @param {number} blockIndex - Index of thinking block in blocks array.
     * @returns {void} Nothing returned.
     * @hidden
     */
    AssistThinking.prototype.createThinkingWrapper = function (item, responseWrapper, blockIndex) {
        this.renderThinkingItemEle(item, responseWrapper, blockIndex);
    };
    AssistThinking.prototype.renderThinkingItemEle = function (item, responseWrapper, blockIndex) {
        var itemId = item.id || getUniqueID('e-thinking-item');
        // Store initial collapsed state - default to true (collapsed) if not specified
        var isInitiallyCollapsed = item.collapsed !== false; // true by default
        this.collapsedStates.set(itemId, isInitiallyCollapsed);
        responseWrapper.classList.add("" + (item.isActive ? 'e-thinking-active' : 'e-thinking-finished'));
        responseWrapper.id = itemId;
        // Check if blockTemplate is provided - if yes, use custom template rendering
        if (this.parent.blockTemplate) {
            this.renderThinkingWithTemplate(item, responseWrapper, blockIndex);
        }
        else {
            // Default hardcoded rendering
            // Render header with icon, title, and toggle button (spec: item first, then containerId)
            var headerEle = this.renderThinkingHeader(item, itemId);
            responseWrapper.append(headerEle);
            // Render stages body
            if (item.stages && item.stages.length > 0) {
                if (item.stages.length === 1) {
                    // Single stage: render directly as child of thinking container (no timeline wrapper)
                    var singleStageElement = this.renderSingleStageContainerElement(item.stages[0], itemId, isInitiallyCollapsed);
                    responseWrapper.append(singleStageElement);
                }
                else {
                    // Multiple stages: use Timeline component wrapped in timeline container (spec: item first, then containerId)
                    var bodyEle = this.renderThinkingBody(item, itemId, isInitiallyCollapsed);
                    responseWrapper.append(bodyEle);
                }
            }
            // Render description if present (always visible, separate from stages)
            var descEle = this.renderThinkingDescription(item);
            if (descEle) {
                responseWrapper.append(descEle);
            }
        }
        // Show spinner after DOM is fully rendered and element is attached to document
        if ((isNOU(this.parent.blockTemplate) || this.parent.blockTemplate === '') && item.isActive) {
            var activeSpanElement = responseWrapper.querySelector('.e-active-spinner');
            if (activeSpanElement && activeSpanElement.parentElement) {
                showSpinner(activeSpanElement);
            }
        }
    };
    AssistThinking.prototype.renderThinkingHeader = function (item, containerId) {
        var _this = this;
        var header = createElement('div', {
            attrs: { class: 'e-aiassist-thinking-header' }
        });
        var isDisabled = !item.collapsible || isNOU(item.stages);
        if (item.stages) {
            isDisabled = isDisabled || item.stages.length === 0;
        }
        // Default collapsed state to true (start collapsed) if not specified
        var isCollapsed = item.collapsed !== false;
        // Native button element
        var toggleButton = createElement('button', {
            attrs: {
                id: containerId + "-toggle-button",
                type: 'button',
                class: 'e-aiassist-thinking-toggle',
                'aria-expanded': (!isCollapsed).toString(),
                'aria-disabled': isDisabled.toString()
            }
        });
        if (isDisabled) {
            toggleButton.disabled = true;
        }
        // Active span
        var activeSpan = createElement('span', {
            attrs: { class: "" + (item.isActive ? 'e-active-spinner' : 'e-icons e-check') }
        });
        // Initialize Spinner component when isActive is true
        if (item.isActive) {
            // Create Syncfusion spinner using utility function (do NOT show yet - DOM not ready)
            createSpinner({ target: activeSpan, type: 'Bootstrap' });
            // Store reference for lifecycle management and cleanup
            this.spinnerInstances.set(containerId, activeSpan);
        }
        toggleButton.append(activeSpan);
        // Text span
        var textSpan = createElement('span', {
            attrs: { class: 'e-toggle-text' }
        });
        textSpan.innerHTML = item.title || 'Thinking...';
        toggleButton.append(textSpan);
        // Icon span
        var toggleIconSpan = createElement('span', {
            attrs: {
                class: "e-icons " + (isCollapsed ? 'e-chevron-right' : 'e-chevron-down') + " e-toggle-icon"
            }
        });
        if (!isDisabled) {
            toggleButton.append(toggleIconSpan);
        }
        header.append(toggleButton);
        // Click handler
        EventHandler.add(toggleButton, 'click', function () { _this.toggleCollapse(containerId, toggleButton); }, this);
        return header;
    };
    AssistThinking.prototype.renderThinkingWithTemplate = function (item, responseWrapper, blockIndex) {
        var template = this.parent.blockTemplate;
        var context = {
            block: item,
            blockIndex: blockIndex !== undefined ? blockIndex : -1
        };
        this.parent.updateContent(template, responseWrapper, context, 'blockTemplate');
    };
    AssistThinking.prototype.getMarkdownContent = function (response) {
        var htmlResponse = MarkdownConverter.toHtml(response);
        return htmlResponse;
    };
    AssistThinking.prototype.renderThinkingBody = function (item, containerId, isCollapsed) {
        // Spec: renderThinkingBody handles 2+ stages only
        if (!item.stages || item.stages.length < 2) {
            return createElement('div');
        }
        var bodyContainer = createElement('div', {
            attrs: {
                class: "e-aiassist-thinking-timeline " + (isCollapsed ? 'e-timeline-collapsed' : 'e-timeline-expanded'),
                'data-thinking-id': containerId,
                id: "e-thinking-timeline-" + containerId
            }
        });
        // Multiple stages: use Timeline component
        this.renderTimelineComponent(containerId, item.stages, bodyContainer);
        return bodyContainer;
    };
    AssistThinking.prototype.renderThinkingDescription = function (item) {
        // Spec: Extract description rendering as separate method
        if (!item.content) {
            return null;
        }
        var descEle = createElement('div', {
            attrs: {
                class: 'e-thinking-response-content'
            }
        });
        descEle.innerHTML = this.getMarkdownContent(item.content);
        return descEle;
    };
    AssistThinking.prototype.renderContentWithContextPlaceholders = function (content, editableContext) {
        var _this = this;
        if (!content || !editableContext || editableContext.length === 0) {
            return this.getMarkdownContent(content);
        }
        // Clone so we can track which context items were consumed
        var usedContextIndexes = new Set();
        var sanitizedContent = this.getMarkdownContent(content);
        var replacedContent = sanitizedContent.replace(/\{(\d+)\}/g, function (match, indexStr) {
            var index = Number(indexStr);
            var context = editableContext[parseInt(index.toString(), 10)];
            if (!context) {
                // No matching context → keep placeholder
                return match;
            }
            usedContextIndexes.add(index);
            return _this.renderInlineContextItem(context);
        });
        return replacedContent;
    };
    AssistThinking.prototype.renderInlineContextItem = function (context) {
        var typeMeta = context.type ? CONTEXT_TYPE_META[context.type] : undefined;
        var tooltipAttr = context.tooltipText ? context.tooltipText : '';
        var badge = this.renderBadgeElement(context);
        var clickableClass = context.clickable ? 'e-context-clickable' : '';
        var typeClass = !isNOU(typeMeta) ? typeMeta.cssClass : '';
        var iconHtml = createElement('span', { attrs: {
                class: "e-context-icon " + (!isNOU(typeMeta) ? typeMeta.iconCss : '')
            } });
        var contextItem = createElement('span', { attrs: {
                class: "e-inline-context-item " + typeClass + " " + clickableClass,
                title: tooltipAttr,
                'data-clickable': context.clickable ? 'true' : 'false'
            } });
        var contextName = createElement('span', { attrs: {
                class: 'e-inline-context-name'
            } });
        contextName.innerText = context.name || '';
        contextItem.append(iconHtml, contextName);
        if (badge) {
            contextItem.append(badge);
        }
        return contextItem.outerHTML;
    };
    AssistThinking.prototype.attachContextItemClickHandlers = function (container, contexts) {
        var _this = this;
        var contextItems = container.querySelectorAll('.e-inline-context-item.e-context-clickable');
        var contextMap = new Map();
        // Build context map by name (since we don't have direct reference after innerHTML)
        contexts.forEach(function (ctx) {
            if (ctx.name) {
                contextMap.set(ctx.name, ctx);
            }
        });
        contextItems.forEach(function (item) {
            var contextName = !isNOU(item.textContent) ? item.textContent.trim() : null;
            var context = contextName ? contextMap.get(contextName) : undefined;
            EventHandler.add(item, 'click', function (e) {
                if (context && context.clickable) {
                    var eventArgs = {
                        event: e,
                        contextItem: context
                    };
                    _this.parent.trigger('editableContextClicked', eventArgs);
                }
            }, _this.parent);
        });
    };
    AssistThinking.prototype.renderBadgeElement = function (context) {
        var badge = createElement('span', {
            attrs: { class: 'e-context-badge' }
        });
        if (context.badge && context.badge !== ThinkingContextBadge.None) {
            var iconName = '';
            switch (context.badge) {
                case 'success':
                    iconName = 'e-check';
                    break;
                case 'warning':
                    iconName = 'e-warning';
                    break;
                case 'failed':
                    iconName = 'e-error-treeview';
                    break;
                case 'pending':
                    iconName = 'e-pending';
                    break;
                case 'info':
                    iconName = 'e-circle-info';
                    break;
                default:
                    iconName = context.badge;
                    break;
            }
            badge.className += " e-icons " + iconName;
            return badge;
        }
        return null;
    };
    AssistThinking.prototype.renderSingleStageContainerElement = function (stage, containerId, isCollapsed) {
        var stageContainer = createElement('div', {
            attrs: {
                class: "e-single-stage-container e-stage-" + (stage.status || 'pending') + " " + (isCollapsed ? 'e-timeline-collapsed' : 'e-timeline-expanded'),
                'data-thinking-id': containerId,
                id: "e-thinking-timeline-" + containerId
            }
        });
        if (stage.iconCss) {
            var icon = createElement('span', {
                attrs: { class: "e-stage-icon " + stage.iconCss }
            });
            stageContainer.append(icon);
        }
        // Stage content
        if (stage.content) {
            var content = createElement('div', {
                attrs: { class: 'e-single-stage-content' }
            });
            content.innerHTML = this.renderContentWithContextPlaceholders(stage.content, stage.editableContext);
            stageContainer.append(content);
            // Attach click handlers to context items after DOM insertion
            if (stage.editableContext && stage.editableContext.length > 0) {
                this.attachContextItemClickHandlers(content, stage.editableContext);
            }
        }
        return stageContainer;
    };
    AssistThinking.prototype.renderTimelineComponent = function (containerId, stages, container) {
        var _this = this;
        // Create timeline wrapper element
        var timelineWrapper = createElement('div', {
            attrs: {
                class: 'e-timeline-wrapper',
                id: "timeline-" + containerId
            }
        });
        container.append(timelineWrapper);
        // Map thinking stages to Timeline items
        var timelineItems = stages.map(function (stage, index) {
            // Build detailed HTML content for timeline item
            var itemContent = '';
            // Stage content
            if (stage.content) {
                var processedContent = _this.renderContentWithContextPlaceholders(stage.content, stage.editableContext);
                itemContent += "\n                <div class=\"e-timeline-content\">\n                    " + processedContent + "\n                </div>";
            }
            return {
                content: itemContent,
                dotCss: stage.iconCss || _this.getStatusIcon(stage.status),
                cssClass: 'e-timeline-stage',
                lastIndex: stages.length,
                stage: stage,
                stageIndex: index,
                isStageInProgress: !isNOU(stage.status) ? stage.status.toLowerCase() === 'inprogress' : ''
            };
        });
        var timelineTemplate;
        if (isNOU(this.parent.itemTemplate) || this.parent.itemTemplate === '') {
            timelineTemplate = this.renderTimelineTemplate.bind(this);
        }
        else {
            timelineTemplate = this.parent.itemTemplate;
        }
        // Create and initialize Timeline component
        var timeline = new Timeline({
            items: timelineItems,
            template: timelineTemplate,
            orientation: TimelineOrientation.Vertical,
            align: 'After'
        });
        // Render Timeline into the wrapper
        timeline.appendTo(timelineWrapper);
        // Initialize spinners for inProgress stages after timeline render
        this.initializeStageSpinners(timelineWrapper, timelineItems);
        // Attach click handlers to context items after timeline render
        stages.forEach(function (stage) {
            if (stage.editableContext && stage.editableContext.length > 0) {
                // Find the content containers for this stage and attach handlers
                var contentElements = timelineWrapper.querySelectorAll('.e-timeline-content');
                contentElements.forEach(function (contentEl) {
                    _this.attachContextItemClickHandlers(contentEl, stage.editableContext);
                });
            }
        });
        // Store reference for lifecycle management and updates
        this.timelineInstances.set(containerId, timeline);
    };
    AssistThinking.prototype.renderTimelineTemplate = function (data) {
        var item = data.item;
        var itemIndex = data.itemIndex || 0;
        var stage = item.stage;
        var stageIndex = item.stageIndex !== undefined ? item.stageIndex : itemIndex;
        var isStageInProgress = item.isStageInProgress || false;
        // Get total items from the timeline (data.itemsCount should be available)
        var isLastItem = itemIndex === item.lastIndex - 1;
        // Build indicator element: spinner for inProgress, icon otherwise
        var indicatorElement = isStageInProgress
            ? "<span class=\"indicator e-stage-spinner\" id=\"e-stage-spinner-" + itemIndex + "\"></span>"
            : "<span class=\"indicator " + item.dotCss + "\"></span>";
        // Default hardcoded template
        var templateHtml = "\n            <div class='e-thinking-timeline-item-container " + (isLastItem ? 'e-timeline-last-item' : '') + "'>\n                <div class=\"progress-line\">\n                    " + indicatorElement + "\n                </div>\n                <div class=\"content\">\n                    <div class=\"content-container\">\n                        " + item.content + "\n                    </div>\n                </div>\n            </div>\n        ";
        return templateHtml;
    };
    AssistThinking.prototype.toggleCollapse = function (containerId, toggleBtn) {
        var container = this.parent.element.querySelector("#" + containerId);
        // Try to find either timeline wrapper or single stage container
        var stageElement = container.querySelector('.e-aiassist-thinking-timeline');
        if (!stageElement) {
            // No timeline wrapper found, check for direct single stage container
            stageElement = container.querySelector('.e-single-stage-container');
        }
        var currentState = this.isCollapsed(container.id);
        var newState = !currentState;
        // Update state map
        this.collapsedStates.set(container.id, newState);
        var toggleIconSpan = container.querySelector('.e-aiassist-thinking-toggle .e-toggle-icon');
        if (isNOU(toggleIconSpan)) {
            return;
        }
        // Update aria-expanded attribute (inverse of newState: newState is collapsed, aria-expanded is expanded)
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-expanded', (!newState).toString());
        }
        // Toggle CSS class for animation (smooth max-height transition)
        if (newState) {
            stageElement.classList.remove('e-timeline-expanded');
            stageElement.classList.add('e-timeline-collapsed');
            toggleIconSpan.classList.remove('e-chevron-down');
            toggleIconSpan.classList.add('e-chevron-right');
        }
        else {
            stageElement.classList.remove('e-timeline-collapsed');
            stageElement.classList.add('e-timeline-expanded');
            toggleIconSpan.classList.remove('e-chevron-right');
            toggleIconSpan.classList.add('e-chevron-down');
        }
    };
    AssistThinking.prototype.isCollapsed = function (containerId) {
        return this.collapsedStates.get(containerId) != null ? this.collapsedStates.get(containerId) : false;
    };
    AssistThinking.prototype.getStatusIcon = function (status) {
        // Map stage status to appropriate icon CSS
        // If status not provided, default to check icon (Completed state)
        if (!status) {
            return 'e-icons e-check'; // Default: check icon for completed
        }
        var normalizedStatus = status.toLowerCase();
        switch (normalizedStatus) {
            case 'completed':
                return 'e-icons e-check'; // Check icon for completed
            case 'inprogress':
                return ''; // Empty - spinner will be rendered instead
            case 'failed':
                return 'e-icons e-error-treeview'; // Error/cross icon for failed
            default:
                return 'e-icons e-check'; // Fallback to check icon
        }
    };
    AssistThinking.prototype.initializeStageSpinners = function (timelineWrapper, timelineItems) {
        var _this = this;
        // Single CSS selector query for all spinner elements - O(n) but batched
        var spinnerElements = timelineWrapper.querySelectorAll('.e-stage-spinner');
        if (spinnerElements.length === 0) {
            return; // No spinners to initialize
        }
        // Synchronous batch processing - no RAF/setTimeout overhead
        spinnerElements.forEach(function (element, index) {
            // Create spinner (synchronous DOM operation)
            createSpinner({ target: element, type: 'Bootstrap' });
            // Remove hide class immediately - spinner pane created synchronously by createSpinner
            // Use non-null assertion since we just created the pane above
            var spinnerPane = element.querySelector('.e-spinner-pane');
            // Sync call to showSpinner - already batched in single forEach
            showSpinner(element);
            // Store for lifecycle cleanup
            _this.spinnerInstances.set("e-stage-spinner-" + index, element);
        });
    };
    return AssistThinking;
}());
export { AssistThinking };
