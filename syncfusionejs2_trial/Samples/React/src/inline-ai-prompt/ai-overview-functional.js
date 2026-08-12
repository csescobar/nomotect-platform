"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ai_service_1 = require("../common/ai-service");
require("./ai-overview.css");
var initialEmailContent = '<p>\nDear Team,\n</p>\n<p>\nI hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I\'m pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.\n</p>\n<p>\nAs we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.\n</p>\n<p>\nThank you for your continued dedication and hard work on this project.\n</p>\n<p>\nBest regards,<br>\nProject Management Team\n</p>';
var commandSettings = {
    commands: [
        {
            id: 'summarize',
            label: 'Summarize',
            tooltip: 'Create a brief summary',
            prompt: 'Summarize the main points',
            iconCss: 'e-icons e-collapse-2'
        },
        {
            id: 'fix-grammar',
            label: 'Fix Grammar',
            tooltip: 'Correct grammar and spelling',
            prompt: 'Fix grammar, spelling, and punctuation errors',
            iconCss: 'e-icons e-grammar-check'
        },
        {
            id: 'make-professional',
            label: 'Make Professional',
            tooltip: 'Transform to formal business tone',
            prompt: 'Rewrite this in a professional, formal business tone',
            iconCss: 'e-icons e-annotation-edit'
        },
        {
            id: 'make-friendly',
            label: 'Make Friendly',
            tooltip: 'Make the tone more casual and friendly',
            prompt: 'Rewrite this in a friendly, casual tone',
            iconCss: 'e-icons e-ai-chat'
        }
    ],
    itemSelect: function (args) {
        // Command selection handled in component state
    }
};
var Overview = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var _a = React.useState(''), selectedCommandText = _a[0], setSelectedCommandText = _a[1];
    var _b = React.useState(false), isGlobalRequest = _b[0], setIsGlobalRequest = _b[1];
    var _c = React.useState(false), isPopupOpen = _c[0], setIsPopupOpen = _c[1];
    var inlinePromptRef = React.useRef(null);
    var emailContentRef = React.useRef(null);
    var sparkleButtonRef = React.useRef(null);
    var aiAssistantBtnRef = React.useRef(null);
    var currentHoveredParagraphRef = React.useRef(null);
    var abortControllerRef = React.useRef();
    // Synchronous ref to reliably track hovered paragraph without state delays
    var currentHoveredParagraphSyncRef = React.useRef(null);
    var attachHoverEvent = React.useCallback(function (paragraph) {
        var handleMouseEnter = function () {
            var _a;
            if (!isPopupOpen && ((_a = paragraph.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('email-body'))) {
                currentHoveredParagraphRef.current = paragraph;
                currentHoveredParagraphSyncRef.current = paragraph;
                updateSparkleButtonPosition(paragraph);
            }
        };
        paragraph.addEventListener('mouseenter', handleMouseEnter);
    }, [isPopupOpen]);
    var attachHoverEventsToChildren = React.useCallback(function (container) {
        var paragraphs = container.querySelectorAll(':scope > p');
        paragraphs.forEach(function (para) {
            var paragraph = para;
            // Remove old listener first to avoid duplicates
            var existingListener = paragraph.__hoverListener;
            if (existingListener) {
                paragraph.removeEventListener('mouseenter', existingListener);
            }
            // Attach new listener
            var handleMouseEnter = function () {
                var _a;
                if (!isPopupOpen && ((_a = paragraph.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('email-body'))) {
                    currentHoveredParagraphRef.current = paragraph;
                    currentHoveredParagraphSyncRef.current = paragraph;
                    updateSparkleButtonPosition(paragraph);
                }
            };
            paragraph.__hoverListener = handleMouseEnter;
            paragraph.addEventListener('mouseenter', handleMouseEnter);
        });
    }, [isPopupOpen]);
    var updateSparkleButtonPosition = React.useCallback(function (paragraph) {
        var _a, _b;
        var sparkleButton = (_a = sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (!sparkleButton || !((_b = emailContentRef.current) === null || _b === void 0 ? void 0 : _b.parentElement))
            return;
        var emailRect = emailContentRef.current.parentElement.getBoundingClientRect();
        var rect = paragraph.getBoundingClientRect();
        var buttonHeight = 30;
        var topPosition = rect.top - emailRect.top + rect.height / 2 - buttonHeight / 2;
        sparkleButton.style.position = 'absolute';
        sparkleButton.style.left = '20px';
        sparkleButton.style.top = topPosition + 'px';
        sparkleButton.style.display = 'block';
    }, []);
    var handleEmailInput = React.useCallback(function () {
        var _a;
        var sparkleButton = (_a = sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (sparkleButton) {
            sparkleButton.style.display = 'none';
        }
    }, []);
    var handleEmailMouseLeave = React.useCallback(function (e) {
        var _a;
        var sparkleButton = (_a = sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
        if (sparkleButton && e.relatedTarget !== sparkleButton && !sparkleButton.matches(':hover')) {
            sparkleButton.style.display = 'none';
        }
    }, []);
    var handleMutations = React.useCallback(function (mutations) {
        mutations.forEach(function (mutation) {
            mutation.addedNodes.forEach(function (node) {
                if (node.nodeName === 'P') {
                    attachHoverEvent(node);
                }
            });
        });
    }, [attachHoverEvent]);
    React.useEffect(function () {
        if (emailContentRef.current) {
            attachHoverEventsToChildren(emailContentRef.current);
            emailContentRef.current.addEventListener('input', handleEmailInput);
            emailContentRef.current.addEventListener('mouseleave', handleEmailMouseLeave);
            var mutationObserver_1 = new MutationObserver(handleMutations);
            mutationObserver_1.observe(emailContentRef.current, { childList: true, subtree: true });
            return function () {
                var _a, _b;
                (_a = emailContentRef.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('input', handleEmailInput);
                (_b = emailContentRef.current) === null || _b === void 0 ? void 0 : _b.removeEventListener('mouseleave', handleEmailMouseLeave);
                mutationObserver_1.disconnect();
            };
        }
    }, [attachHoverEventsToChildren, handleEmailInput, handleEmailMouseLeave, handleMutations]);
    var handleSparkleClick = React.useCallback(function () {
        if (currentHoveredParagraphRef.current && inlinePromptRef.current) {
            setIsGlobalRequest(false);
            inlinePromptRef.current.relateTo = currentHoveredParagraphRef.current;
            inlinePromptRef.current.dataBind();
            inlinePromptRef.current.showPopup();
        }
    }, []);
    var handleAIAssistantClick = React.useCallback(function () {
        if (inlinePromptRef.current && aiAssistantBtnRef.current) {
            setIsGlobalRequest(true);
            inlinePromptRef.current.relateTo = aiAssistantBtnRef.current.element;
            inlinePromptRef.current.dataBind();
            inlinePromptRef.current.showPopup();
        }
    }, []);
    var handleSendEmail = React.useCallback(function () {
        var _a;
        if (emailContentRef.current) {
            emailContentRef.current.innerHTML = initialEmailContent;
            attachHoverEventsToChildren(emailContentRef.current);
            var sparkleButton = (_a = sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
            if (sparkleButton) {
                sparkleButton.style.display = 'none';
            }
        }
    }, [attachHoverEventsToChildren]);
    var handlePromptRequest = React.useCallback(function (args) {
        (0, ai_service_1.getUserID)().then(function (userID) {
            try {
                abortControllerRef.current = new AbortController();
                var contentToProcess = '';
                if (isGlobalRequest) {
                    var emailContentElem = emailContentRef.current;
                    contentToProcess = emailContentElem ? emailContentElem.innerText : '';
                }
                else if (currentHoveredParagraphRef.current) {
                    contentToProcess = currentHoveredParagraphRef.current.innerText;
                }
                fetch(ai_service_1.AI_SERVICE_URL + '/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        visitorId: userID,
                        messages: {
                            messages: [
                                { role: 'system', content: 'You are a helpful assistant.' },
                                { role: 'user', content: args.prompt + ' ' + contentToProcess }
                            ]
                        }
                    }),
                    signal: abortControllerRef.current.signal
                })
                    .then(function (response) {
                    if (!response.ok) {
                        return response.json().then(function (errorData) {
                            throw new Error(errorData.error || 'HTTP Error ' + response.status);
                        });
                    }
                    return response.json();
                })
                    .then(function (result) {
                    if (result && result.response) {
                        var aiResponse = result.response.replace('END_INSERTION', '');
                        if (inlinePromptRef.current) {
                            inlinePromptRef.current.addResponse(aiResponse);
                        }
                    }
                })
                    .catch(function (error) {
                    if (error.name === 'AbortError') {
                        console.log('AI Request aborted by user.');
                        return;
                    }
                    setTimeout(function () {
                        var fallbackResponse = 'We could not reach the AI service; please try again later.';
                        if (inlinePromptRef.current) {
                            inlinePromptRef.current.addResponse(fallbackResponse);
                            setSelectedCommandText('');
                        }
                    }, 1000);
                });
            }
            catch (error) {
                console.error('Unexpected error:', error);
            }
        });
    }, [isGlobalRequest]);
    var handleResponseItemSelect = React.useCallback(function (args) {
        var _a, _b, _c, _d, _e, _f;
        if (args.command.label === 'Accept') {
            if (isGlobalRequest && emailContentRef.current) {
                var lastPrompt = (_a = inlinePromptRef.current) === null || _a === void 0 ? void 0 : _a.prompts[(((_c = (_b = inlinePromptRef.current) === null || _b === void 0 ? void 0 : _b.prompts) === null || _c === void 0 ? void 0 : _c.length) || 1) - 1];
                if (lastPrompt) {
                    emailContentRef.current.innerHTML = lastPrompt.response;
                    attachHoverEventsToChildren(emailContentRef.current);
                }
            }
            else if (currentHoveredParagraphSyncRef.current) {
                // Use synchronous ref to ensure we update the correct paragraph
                var lastPrompt = (_d = inlinePromptRef.current) === null || _d === void 0 ? void 0 : _d.prompts[(((_f = (_e = inlinePromptRef.current) === null || _e === void 0 ? void 0 : _e.prompts) === null || _f === void 0 ? void 0 : _f.length) || 1) - 1];
                if (lastPrompt) {
                    currentHoveredParagraphSyncRef.current.innerHTML = lastPrompt.response;
                }
            }
            if (inlinePromptRef.current) {
                inlinePromptRef.current.hidePopup();
            }
        }
        else if (args.command.label === 'Discard') {
            if (inlinePromptRef.current) {
                inlinePromptRef.current.hidePopup();
            }
        }
    }, [isGlobalRequest, attachHoverEventsToChildren]);
    var responseSettings = {
        itemSelect: handleResponseItemSelect
    };
    // click handlers are attached via ButtonComponent onClick props
    React.useEffect(function () {
        return function () {
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
        };
    }, []);
    // Update commandSettings itemSelect with current state
    React.useMemo(function () {
        commandSettings.itemSelect = function (args) {
            setSelectedCommandText(args.command.label || '');
        };
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "overview-inlineAIPrompt" },
                React.createElement("div", { className: "email-container" },
                    React.createElement("div", { className: "email-composer e-card" },
                        React.createElement("h3", { className: "demo-title" }, "\uD83D\uDCE7 Email Draft Assistant"),
                        React.createElement("div", { className: "email-field e-card-content" },
                            React.createElement("label", { className: "field-label" }, "To:"),
                            React.createElement("input", { type: "text", className: "field-input e-input", value: "team@company.com", readOnly: true })),
                        React.createElement("div", { className: "email-field e-card-content" },
                            React.createElement("label", { className: "field-label" }, "Subject:"),
                            React.createElement("input", { type: "text", className: "field-input e-input", value: "Project Update - Q1 Deliverables", readOnly: true })),
                        React.createElement("div", { className: "email-field-vertical e-card-content" },
                            React.createElement("div", { className: "message-header" },
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: aiAssistantBtnRef, id: "aiAssistantBtn", iconCss: "e-icons e-ai-chat", isPrimary: true, onClick: handleAIAssistantClick }, "AI Assistant")),
                            React.createElement("div", { ref: emailContentRef, className: "email-body", id: "emailContent", contentEditable: true, dangerouslySetInnerHTML: { __html: initialEmailContent } }),
                            React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: sparkleButtonRef, id: "sparkleBtn", iconCss: "e-icons e-ai-chat", isPrimary: true, style: { display: 'none' }, onClick: handleSparkleClick })),
                        React.createElement("div", { className: "email-actions e-card-content" },
                            React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "sendEmailBtn", cssClass: "e-primary", onClick: handleSendEmail }, "Send Email")))),
                React.createElement(ej2_react_interactive_chat_1.InlineAIPromptComponent, { ref: inlinePromptRef, id: "inlinePrompt", commandSettings: commandSettings, relateTo: "#emailContent", promptRequest: handlePromptRequest, responseSettings: responseSettings, open: function () { return setIsPopupOpen(true); }, close: function () {
                        currentHoveredParagraphSyncRef.current = null;
                        setIsPopupOpen(false);
                        setSelectedCommandText('');
                        setIsGlobalRequest(false);
                    } }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the overview functionalities of the Inline AI Prompt component in an email draft assistant scenario. Users can access AI assistance in two ways: hover over any paragraph to see a sparkle button for inline editing, or click the AI Assistant button to enhance the entire email content.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this example, the Inline AI Prompt component showcases the following key features:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "commandSettings"),
                    " - Defines predefined AI commands (Summarize, Fix Grammar, Make Professional, Make Friendly)"),
                React.createElement("li", null,
                    React.createElement("code", null, "relateTo"),
                    " - Positions the popup relative to the element provided in the relateTo property"),
                React.createElement("li", null,
                    React.createElement("code", null, "promptRequest"),
                    " - Processes AI requests and adds responses"),
                React.createElement("li", null,
                    React.createElement("code", null, "responseSettings"),
                    " - Handles Accept and Reject actions for AI responses"),
                React.createElement("li", null,
                    React.createElement("code", null, "showPopup"),
                    " - Programmatically opens the AI prompt popup"),
                React.createElement("li", null,
                    React.createElement("code", null, "open"),
                    " and ",
                    React.createElement("code", null, "close"),
                    " - Events for tracking popup state")))));
};
exports.default = Overview;
