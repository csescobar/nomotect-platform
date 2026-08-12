"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Overview = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
require("./ai-overview.css");
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview(props) {
        var _this = _super.call(this, props) || this;
        _this.InlineAssistRef = React.createRef();
        _this.emailContentRef = React.createRef();
        _this.sparkleButtonRef = React.createRef();
        _this.aiAssistantBtnRef = React.createRef();
        _this.currentHoveredParagraph = null;
        // Synchronous ref to reliably track hovered element without state delays
        _this.currentHoveredParagraphSyncRef = null;
        _this.initialEmailContent = '<p>\nDear Team,\n</p>\n<p>\nI hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I\'m pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.\n</p>\n<p>\nAs we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.\n</p>\n<p>\nThank you for your continued dedication and hard work on this project.\n</p>\n<p>\nBest regards,<br>\nProject Management Team\n</p>';
        _this.commandSettings = {
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
                _this.setState({ selectedCommandText: args.command.label || '' });
            }
        };
        _this.attachHoverEventsToChildren = function (container) {
            Array.from(container.children).forEach(function (child) {
                var element = child;
                // Remove old listener first to avoid duplicates
                var existingListener = element.__hoverListener;
                if (existingListener) {
                    element.removeEventListener('mouseenter', existingListener);
                }
                // Attach new listener
                var handleMouseEnter = function () {
                    var _a;
                    if (!_this.state.isPopupOpen && ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('email-body'))) {
                        _this.currentHoveredParagraph = element;
                        _this.currentHoveredParagraphSyncRef = element;
                        _this.updateSparkleButtonPosition(element);
                    }
                };
                element.__hoverListener = handleMouseEnter;
                element.addEventListener('mouseenter', handleMouseEnter);
            });
        };
        _this.attachHoverEvent = function (element) {
            // Remove old listener first to avoid duplicates
            var existingListener = element.__hoverListener;
            if (existingListener) {
                element.removeEventListener('mouseenter', existingListener);
            }
            // Attach new listener
            var handleMouseEnter = function () {
                var _a;
                if (!_this.state.isPopupOpen && ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('email-body'))) {
                    _this.currentHoveredParagraph = element;
                    _this.currentHoveredParagraphSyncRef = element;
                    _this.updateSparkleButtonPosition(element);
                }
            };
            element.__hoverListener = handleMouseEnter;
            element.addEventListener('mouseenter', handleMouseEnter);
        };
        _this.updateSparkleButtonPosition = function (element) {
            var _a;
            var sparkleButton = (_a = _this.sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
            if (!sparkleButton || !_this.emailContentRef.current)
                return;
            var emailRect = _this.emailContentRef.current.parentElement.getBoundingClientRect();
            var rect = element.getBoundingClientRect();
            var buttonHeight = 30;
            var topPosition = rect.top - emailRect.top + rect.height / 2 - buttonHeight / 2;
            sparkleButton.style.position = 'absolute';
            sparkleButton.style.left = '20px';
            sparkleButton.style.top = topPosition + 'px';
            sparkleButton.style.display = 'block';
        };
        _this.handleEmailInput = function () {
            var _a;
            var sparkleEl = (_a = _this.sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
            if (sparkleEl) {
                sparkleEl.style.display = 'none';
            }
        };
        _this.handleEmailMouseLeave = function (e) {
            var _a;
            var sparkleEl = (_a = _this.sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
            if (sparkleEl && e.relatedTarget !== sparkleEl && !sparkleEl.matches(':hover')) {
                sparkleEl.style.display = 'none';
            }
        };
        _this.handleMutations = function (mutations) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (node) {
                    if (node.nodeName === 'P') {
                        _this.attachHoverEvent(node);
                    }
                });
            });
        };
        _this.handleSparkleClick = function () {
            if (_this.currentHoveredParagraph && _this.InlineAssistRef.current) {
                _this.setState({ isGlobalRequest: false });
                _this.InlineAssistRef.current.relateTo = _this.currentHoveredParagraph;
                _this.InlineAssistRef.current.dataBind();
                _this.InlineAssistRef.current.showPopup();
            }
        };
        _this.handleAIAssistantClick = function () {
            if (_this.InlineAssistRef.current && _this.aiAssistantBtnRef.current) {
                _this.setState({ isGlobalRequest: true });
                _this.InlineAssistRef.current.relateTo = _this.aiAssistantBtnRef.current.element;
                _this.InlineAssistRef.current.dataBind();
                _this.InlineAssistRef.current.showPopup();
            }
        };
        _this.handleSendEmail = function () {
            var _a;
            if (_this.emailContentRef.current) {
                _this.emailContentRef.current.innerHTML = _this.initialEmailContent;
                _this.attachHoverEventsToChildren(_this.emailContentRef.current);
                var sparkleEl = (_a = _this.sparkleButtonRef.current) === null || _a === void 0 ? void 0 : _a.element;
                if (sparkleEl) {
                    sparkleEl.style.display = 'none';
                }
            }
        };
        _this.handlePromptRequest = function (args) {
            (0, ai_service_1.getUserID)().then(function (userID) {
                try {
                    _this.abortController = new AbortController();
                    var contentToProcess = '';
                    if (_this.state.isGlobalRequest) {
                        var emailContentElem = _this.emailContentRef.current;
                        contentToProcess = emailContentElem ? emailContentElem.innerText : '';
                    }
                    else if (_this.currentHoveredParagraph) {
                        contentToProcess = _this.currentHoveredParagraph.innerText;
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
                        signal: _this.abortController.signal
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
                            if (_this.InlineAssistRef.current) {
                                _this.InlineAssistRef.current.addResponse(aiResponse);
                            }
                        }
                    })
                        .catch(function (error) {
                        if (error.name === 'AbortError') {
                            return;
                        }
                        setTimeout(function () {
                            var fallbackResponse = 'We could not reach the AI service; please try again later.';
                            if (_this.InlineAssistRef.current) {
                                _this.InlineAssistRef.current.addResponse(fallbackResponse);
                                _this.setState({ selectedCommandText: '' });
                            }
                        }, 1000);
                    });
                }
                catch (error) {
                    //catch error
                }
            });
        };
        _this.handleResponseItemSelect = function (args) {
            var _a, _b, _c, _d, _e, _f;
            if (args.command.label === 'Accept') {
                if (_this.state.isGlobalRequest && _this.emailContentRef.current) {
                    var lastPrompt = (_a = _this.InlineAssistRef.current) === null || _a === void 0 ? void 0 : _a.prompts[(((_c = (_b = _this.InlineAssistRef.current) === null || _b === void 0 ? void 0 : _b.prompts) === null || _c === void 0 ? void 0 : _c.length) || 1) - 1];
                    if (lastPrompt) {
                        _this.emailContentRef.current.innerHTML = lastPrompt.response;
                        _this.attachHoverEventsToChildren(_this.emailContentRef.current);
                    }
                }
                else if (_this.currentHoveredParagraphSyncRef) {
                    // Use synchronous ref to ensure we update the correct paragraph
                    var lastPrompt = (_d = _this.InlineAssistRef.current) === null || _d === void 0 ? void 0 : _d.prompts[(((_f = (_e = _this.InlineAssistRef.current) === null || _e === void 0 ? void 0 : _e.prompts) === null || _f === void 0 ? void 0 : _f.length) || 1) - 1];
                    if (lastPrompt) {
                        _this.currentHoveredParagraphSyncRef.innerHTML = lastPrompt.response;
                    }
                }
                if (_this.InlineAssistRef.current) {
                    _this.InlineAssistRef.current.hidePopup();
                }
            }
            else if (args.command.label === 'Discard') {
                if (_this.InlineAssistRef.current) {
                    _this.InlineAssistRef.current.hidePopup();
                }
            }
        };
        _this.handlePopupOpen = function () {
            _this.setState({ isPopupOpen: true });
        };
        _this.handlePopupClose = function () {
            _this.currentHoveredParagraphSyncRef = null;
            _this.setState({ isPopupOpen: false, selectedCommandText: '', isGlobalRequest: false });
        };
        _this.state = {
            selectedCommandText: '',
            isGlobalRequest: false,
            isPopupOpen: false
        };
        return _this;
    }
    Overview.prototype.componentDidMount = function () {
        if (this.emailContentRef.current) {
            this.attachHoverEventsToChildren(this.emailContentRef.current);
            this.emailContentRef.current.addEventListener('input', this.handleEmailInput);
            this.emailContentRef.current.addEventListener('mouseleave', this.handleEmailMouseLeave);
            new MutationObserver(this.handleMutations).observe(this.emailContentRef.current, {
                childList: true,
                subtree: true
            });
        }
        if (this.sparkleButtonRef.current && this.sparkleButtonRef.current.element) {
            this.sparkleButtonRef.current.element.addEventListener('click', this.handleSparkleClick);
        }
        if (this.aiAssistantBtnRef.current && this.aiAssistantBtnRef.current.element) {
            this.aiAssistantBtnRef.current.element.addEventListener('click', this.handleAIAssistantClick);
        }
    };
    Overview.prototype.componentWillUnmount = function () {
        if (this.emailContentRef.current) {
            this.emailContentRef.current.removeEventListener('input', this.handleEmailInput);
            this.emailContentRef.current.removeEventListener('mouseleave', this.handleEmailMouseLeave);
        }
        if (this.sparkleButtonRef.current && this.sparkleButtonRef.current.element) {
            this.sparkleButtonRef.current.element.removeEventListener('click', this.handleSparkleClick);
        }
        if (this.aiAssistantBtnRef.current && this.aiAssistantBtnRef.current.element) {
            this.aiAssistantBtnRef.current.element.removeEventListener('click', this.handleAIAssistantClick);
        }
        if (this.abortController) {
            this.abortController.abort();
        }
    };
    Overview.prototype.render = function () {
        var responseSettings = {
            itemSelect: this.handleResponseItemSelect
        };
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "overview-inlineAIAssist" },
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
                                    React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: this.aiAssistantBtnRef, id: "aiAssistantBtn", iconCss: "e-icons e-ai-chat", isPrimary: true, title: "AI Assistant" }, "AI Assistant")),
                                React.createElement("div", { ref: this.emailContentRef, className: "email-body", id: "emailContent", contentEditable: true, dangerouslySetInnerHTML: { __html: this.initialEmailContent } }),
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: this.sparkleButtonRef, id: "sparkleBtn", iconCss: "e-icons e-ai-chat", isPrimary: true, style: { display: 'none' }, title: "AI Assistant" })),
                            React.createElement("div", { className: "email-actions e-card-content" },
                                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "sendEmailBtn", title: "Send", cssClass: "e-primary", onClick: this.handleSendEmail }, "Send Email")))),
                    React.createElement(ej2_react_interactive_chat_1.InlineAIAssistComponent, { ref: this.InlineAssistRef, id: "inlineAssist", commandSettings: this.commandSettings, relateTo: "#emailContent", promptRequest: this.handlePromptRequest, responseSettings: responseSettings, open: this.handlePopupOpen, close: this.handlePopupClose }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the overview functionalities of the Inline AI Assist component in an email draft assistant scenario. Users can access AI assistance in two ways: hover over any paragraph to see a sparkle button for inline editing, or click the AI Assistant button to enhance the entire email content.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, the Inline AI Assist component showcases the following key features:"),
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
                        " - Programmatically opens the AI Assist popup"),
                    React.createElement("li", null,
                        React.createElement("code", null, "open"),
                        " and ",
                        React.createElement("code", null, "close"),
                        " - Events for tracking popup state")))));
    };
    return Overview;
}(sample_base_1.SampleBase));
exports.Overview = Overview;
