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
exports.RichTextEditorSample = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
// Import EJ2 RichTextEditor modules to ensure they're bundled
var ej2_richtexteditor_1 = require("@syncfusion/ej2-richtexteditor");
var ej2_richtexteditor_2 = require("@syncfusion/ej2-richtexteditor");
var ej2_markdown_converter_1 = require("@syncfusion/ej2-markdown-converter");
var sample_base_1 = require("../common/sample-base");
var ai_service_1 = require("../common/ai-service");
require("./ai-rich-text-editor.css");
// Inject required modules for RichTextEditor
ej2_richtexteditor_1.RichTextEditor.Inject(ej2_richtexteditor_1.HtmlEditor, ej2_richtexteditor_1.Toolbar, ej2_richtexteditor_1.Image, ej2_richtexteditor_1.Link, ej2_richtexteditor_1.QuickToolbar);
/**
 * React component for Rich Text Editor with Inline AI Assist integration
 * Demonstrates AI-powered content editing with streaming responses
 */
var RichTextEditorSample = /** @class */ (function (_super) {
    __extends(RichTextEditorSample, _super);
    function RichTextEditorSample(props) {
        var _this = _super.call(this, props) || this;
        _this.promptRef = React.createRef();
        _this.rteEditorRef = React.createRef();
        _this.rteInstance = null;
        _this.selectedSpanRef = null;
        _this.commandSettings = {
            popupWidth: '250px',
            commands: [
                {
                    label: 'Improve Content',
                    prompt: 'Improve the clarity, coherence, and overall quality of the following content:',
                    iconCss: 'e-icons e-magic-wand'
                },
                {
                    label: 'Shorten',
                    prompt: 'Shorten the following content without losing its core message:',
                    iconCss: 'e-icons e-shorten'
                },
                {
                    label: 'Elaborate',
                    prompt: 'Expand on the following content with more detail and explanation:',
                    iconCss: 'e-icons e-elaborate'
                },
                {
                    label: 'Simplify',
                    prompt: 'Simplify the language and make the following content easier to understand:',
                    iconCss: 'e-icons e-text-wrap'
                },
                {
                    label: 'Summarize',
                    prompt: 'Summarize the following content in a concise and clear way:',
                    iconCss: 'e-icons e-collapse-2'
                },
                {
                    label: 'Check Grammar & Spelling',
                    prompt: 'Check the following content for grammar and spelling mistakes, and correct them:',
                    iconCss: 'e-icons e-grammar-check'
                }
            ]
        };
        _this.initialContent = "<p><strong>Introduction</strong></p>\n<p>Technology has transformed the way we communicate and collaborate in both personal and professional \n    settings. Digital tools enable instant connectivity across global distances, breaking down traditional \n    barriers and creating new opportunities for innovation and growth.</p>\n<p><strong>Key Benefits</strong></p>\n<p>The integration of artificial intelligence into everyday applications is revolutionizing user experiences. \n    From smart assistants to predictive analytics, AI-powered features help users accomplish tasks more \n    efficiently while providing personalized recommendations based on individual preferences and behavior \n    patterns.</p>\n<p><strong>Implementation Approach</strong></p>\n<p>When adopting new technologies, organizations should focus on user training and change management. \n    A phased rollout allows teams to adapt gradually while providing feedback for continuous improvement. \n    Clear communication about benefits and proper support resources are essential for successful adoption \n    and long-term sustainability of technological initiatives.</p>\n<p><strong>Future Outlook</strong></p>\n<p>As digital transformation continues to accelerate, businesses must remain adaptable and open to \n    emerging trends. Cloud computing, automation, and data-driven decision-making will play increasingly \n    important roles in shaping competitive advantages. Organizations that embrace innovation while \n    maintaining focus on user needs will be best positioned for future success.</p>";
        /**
         * Initialize RichTextEditor with EJ2 library
         */
        _this.initializeRichTextEditor = function () {
            // Use imported modules directly
            _this.rteSelection = new ej2_richtexteditor_2.NodeSelection();
            _this.markdownConverter = ej2_markdown_converter_1.MarkdownConverter;
            // Create RichTextEditor instance
            _this.rteInstance = new ej2_richtexteditor_1.RichTextEditor({
                quickToolbarSettings: {
                    text: [
                        { prefixIcon: 'e-icons e-ai-chat', tooltipText: 'AI Assistant' },
                        'Bold',
                        'Italic',
                        'Underline',
                        'StrikeThrough',
                        'Fontcolor',
                        'BackgroundColor',
                        '|',
                        'Unorderedlist',
                        'Orderedlist'
                    ]
                },
                value: _this.initialContent,
                toolbarClick: _this.handleToolbarClick,
                created: _this.handleRteCreated
            });
            if (_this.rteEditorRef.current) {
                _this.rteInstance.appendTo(_this.rteEditorRef.current);
            }
        };
        /**
         * Handle RichTextEditor creation event
         */
        _this.handleRteCreated = function () {
            //Rich Text Editor initialized
        };
        /**
         * Handle toolbar click event to trigger AI prompt
         */
        _this.handleToolbarClick = function (args) {
            if (args.item.prefixIcon === 'e-icons e-ai-chat') {
                if (!_this.rteInstance)
                    return;
                var range = _this.rteSelection.getRange(document);
                var relateToEl_1 = range.endContainer && range.endContainer.parentElement;
                var selectedText = _this.rteInstance.getSelection();
                if (selectedText && selectedText.length > 0) {
                    var wrapper_1 = document.createElement('span');
                    wrapper_1.className = 'e-inlineaiassist-selected-text';
                    // Extract the selected contents from the range (match JS sample behavior)
                    var selectedContents = range.extractContents();
                    wrapper_1.appendChild(selectedContents);
                    range.insertNode(wrapper_1);
                    _this.selectedSpanRef = wrapper_1;
                    _this.setState({
                        selectedText: selectedText,
                        selectedSpan: wrapper_1,
                        range: range
                    }, function () {
                        if (_this.promptRef.current) {
                            _this.promptRef.current.relateTo = relateToEl_1 ? relateToEl_1 : wrapper_1;
                            _this.promptRef.current.dataBind();
                            _this.promptRef.current.showPopup();
                        }
                    });
                }
            }
        };
        /**
         * Handle prompt request from AI - sends selected text to AI service
         */
        _this.handlePromptRequest = function (args) {
            if (!_this.rteInstance || !args.prompt)
                return;
            // Save undo/redo stack
            if (_this.rteInstance.formatter.getUndoRedoStack().length === 0) {
                _this.rteInstance.formatter.saveData();
            }
            var contextPrompt = args.prompt || '';
            if (_this.state.selectedText && _this.state.selectedText.length > 0) {
                contextPrompt = contextPrompt + ' ' + _this.state.selectedText;
            }
            var selectedSpan = _this.selectedSpanRef || _this.state.selectedSpan;
            if (selectedSpan) {
                if (_this.promptRef.current && selectedSpan.parentElement) {
                    _this.promptRef.current.dataBind();
                }
                (0, ai_service_1.getUserID)().then(function (userID) {
                    try {
                        _this.abortController = new AbortController();
                        // Make streaming request to AI service
                        fetch(ai_service_1.AI_SERVICE_URL + '/api/stream', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': userID
                            },
                            body: JSON.stringify({ message: contextPrompt }),
                            signal: _this.abortController.signal
                        })
                            .then(function (response) {
                            if (!response.ok) {
                                return response.json().then(function (errorData) {
                                    throw new Error(errorData.error || ('HTTP Error ' + response.status));
                                });
                            }
                            // Process streaming response
                            var reader = response.body.getReader();
                            var decoder = new TextDecoder();
                            var fullText = '';
                            var processStream = function () {
                                return reader.read().then(function (result) {
                                    var value = result.value;
                                    var done = result.done;
                                    if (done) {
                                        // Stream complete - add response to prompt component
                                        if (_this.selectedSpanRef && _this.selectedSpanRef.parentNode) {
                                            if (_this.promptRef.current) {
                                                _this.promptRef.current.addResponse(fullText, true);
                                            }
                                            var newRange = document.createRange();
                                            newRange.selectNodeContents(_this.selectedSpanRef);
                                            if (_this.rteInstance) {
                                                _this.rteInstance.selectRange(newRange);
                                            }
                                        }
                                        return Promise.resolve();
                                    }
                                    // Check if selectedSpan still exists in DOM before processing
                                    if (!_this.selectedSpanRef || !_this.selectedSpanRef.parentNode) {
                                        return Promise.resolve();
                                    }
                                    // Process chunk from stream
                                    var chunk = decoder.decode(value, { stream: true });
                                    fullText += chunk;
                                    if (_this.promptRef.current) {
                                        _this.promptRef.current.addResponse(fullText, false);
                                    }
                                    // Convert markdown to HTML and display
                                    if (_this.markdownConverter) {
                                        var tempDiv = document.createElement('div');
                                        tempDiv.innerHTML = _this.markdownConverter.toHtml(fullText);
                                        var plainText = tempDiv.textContent || tempDiv.innerText || fullText;
                                        if (_this.selectedSpanRef) {
                                            _this.selectedSpanRef.innerHTML = plainText;
                                        }
                                    }
                                    // Refresh popup position to prevent coordinate errors
                                    if (_this.promptRef.current && _this.promptRef.current.popupObj) {
                                        _this.promptRef.current.popupObj.refreshPosition();
                                    }
                                    return processStream();
                                });
                            };
                            return processStream();
                        })
                            .catch(function (error) {
                            if (error.name === 'AbortError') {
                                return;
                            }
                            // Show fallback error message
                            setTimeout(function () {
                                if (_this.selectedSpanRef && _this.selectedSpanRef.parentNode) {
                                    var fallbackResponse = 'We could not reach the AI service; please try again later.';
                                    _this.selectedSpanRef.innerHTML = fallbackResponse;
                                    if (_this.promptRef.current) {
                                        _this.promptRef.current.addResponse(fallbackResponse);
                                    }
                                    var newRange = document.createRange();
                                    newRange.selectNodeContents(_this.selectedSpanRef);
                                    if (_this.rteInstance) {
                                        _this.rteInstance.selectRange(newRange);
                                    }
                                }
                            }, 1000);
                        });
                    }
                    catch (error) {
                        //catch error
                    }
                });
            }
        };
        /**
         * Handle prompt close event - cleanup when popup is closed
         */
        _this.handlePromptClose = function () {
            if (_this.abortController) {
                _this.abortController.abort();
            }
            if (_this.selectedSpanRef) {
                if (_this.rteInstance) {
                    _this.rteInstance.formatter.saveData();
                }
                _this.selectedSpanRef = null;
                _this.setState({ selectedSpan: null });
                if (_this.rteInstance) {
                    _this.rteInstance.executeCommand('undo');
                    _this.rteInstance.clearUndoRedo();
                }
                window.getSelection().removeAllRanges();
            }
        };
        /**
         * Handle response item selection (Accept/Reject)
         */
        _this.handleResponseItemSelect = function (args) {
            var selectedSpan = _this.selectedSpanRef || _this.state.selectedSpan;
            if (args.command.label === 'Accept') {
                // Accept the AI response
                if (selectedSpan && selectedSpan.parentNode) {
                    var parent_1 = selectedSpan.parentNode;
                    var textContent = selectedSpan.textContent || selectedSpan.innerText;
                    var textNode = document.createTextNode(textContent);
                    parent_1.replaceChild(textNode, selectedSpan);
                    // Clear synchronous ref first so close handler won't undo this change
                    _this.selectedSpanRef = null;
                    _this.setState({ selectedSpan: null });
                    if (_this.rteInstance) {
                        _this.rteInstance.formatter.saveData();
                        _this.rteInstance.formatter.enableUndo(_this.rteInstance);
                    }
                }
                if (_this.promptRef.current) {
                    _this.promptRef.current.hidePopup();
                }
            }
            else if (args.command.label === 'Discard') {
                // Reject the AI response and restore original text
                if (_this.rteInstance) {
                    _this.rteInstance.formatter.saveData();
                }
                // Clear synchronous ref so close handler doesn't attempt undo afterwards
                _this.selectedSpanRef = null;
                _this.setState({ selectedSpan: null });
                if (_this.rteInstance) {
                    _this.rteInstance.executeCommand('undo');
                    _this.rteInstance.clearUndoRedo();
                }
                window.getSelection().removeAllRanges();
                if (_this.promptRef.current) {
                    _this.promptRef.current.hidePopup();
                }
            }
        };
        _this.inlineToolbarSettings = {
            itemClick: function (args) {
                if (args.item.iconCss === 'e-icons e-inline-stop') {
                    if (_this.abortController) {
                        _this.abortController.abort();
                    }
                }
            }
        };
        _this.responseSettings = {
            itemSelect: _this.handleResponseItemSelect
        };
        _this.state = {
            selectedText: '',
            selectedSpan: null,
            range: null
        };
        return _this;
    }
    /**
     * Initialize RichTextEditor instance after component mounts
     */
    RichTextEditorSample.prototype.componentDidMount = function () {
        var _this = this;
        // Use a small delay to ensure EJ2 library is fully loaded
        setTimeout(function () {
            _this.initializeRichTextEditor();
        }, 100);
    };
    RichTextEditorSample.prototype.componentWillUnmount = function () {
        if (this.abortController) {
            this.abortController.abort();
        }
        if (this.rteInstance) {
            this.rteInstance.destroy();
        }
    };
    RichTextEditorSample.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "rte-integration-container" },
                    React.createElement("div", { ref: this.rteEditorRef, id: "rte-editor", style: { width: '100%' } }),
                    React.createElement(ej2_react_interactive_chat_1.InlineAIAssistComponent, { ref: this.promptRef, id: "inline-ai-assist", commandSettings: this.commandSettings, inlineToolbarSettings: this.inlineToolbarSettings, responseMode: "Inline", promptRequest: this.handlePromptRequest, close: this.handlePromptClose, responseSettings: this.responseSettings }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the integration of the Inline AI Assist component with the Syncfusion Rich Text Editor. It showcases advanced customization including command settings, response settings, and footer toolbar options for enhanced content editing experience.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this example, the Inline AI Assist component is seamlessly integrated with the Rich Text Editor, providing an advanced use-case scenario. This integration demonstrates how AI-powered assistance can enhance content creation and editing workflows."),
                React.createElement("p", null, "Key features demonstrated:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "CommandSettings"),
                        " - Custom AI command buttons (Improve, Shorten, Elaborate, Summarize) integrated into the interface"),
                    React.createElement("li", null,
                        React.createElement("code", null, "ResponseSettings"),
                        " - Configured response behavior with dynamic suggestion updates based on user actions"),
                    React.createElement("li", null,
                        React.createElement("code", null, "ResponseMode"),
                        " - Set to ",
                        React.createElement("code", null, "'Inline'"),
                        " mode where the AI response can be directly streamed or added into the editor area, allowing users to see real-time content changes")))));
    };
    return RichTextEditorSample;
}(sample_base_1.SampleBase));
exports.RichTextEditorSample = RichTextEditorSample;
