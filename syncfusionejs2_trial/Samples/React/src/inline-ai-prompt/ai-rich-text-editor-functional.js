"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
// Import EJ2 RichTextEditor modules to ensure they're bundled
var ej2_richtexteditor_1 = require("@syncfusion/ej2-richtexteditor");
var ej2_richtexteditor_2 = require("@syncfusion/ej2-richtexteditor");
var ej2_markdown_converter_1 = require("@syncfusion/ej2-markdown-converter");
var ai_service_1 = require("../common/ai-service");
require("./ai-rich-text-editor.css");
// Inject required modules for RichTextEditor
ej2_richtexteditor_1.RichTextEditor.Inject(ej2_richtexteditor_1.HtmlEditor, ej2_richtexteditor_1.Toolbar, ej2_richtexteditor_1.Image, ej2_richtexteditor_1.Link, ej2_richtexteditor_1.QuickToolbar);
/**
 * Functional React component for Rich Text Editor with Inline AI Prompt integration
 * Modern React hooks-based implementation with streaming AI responses
 */
var RichTextEditorFunctional = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var promptRef = React.useRef(null);
    var rteEditorRef = React.useRef(null);
    var rteInstanceRef = React.useRef(null);
    var abortControllerRef = React.useRef();
    var rteSelectionRef = React.useRef(null);
    var markdownConverterRef = React.useRef(null);
    var selectedSpanRef = React.useRef(null);
    var _a = React.useState({
        text: '',
        span: null,
        range: null
    }), selectedContent = _a[0], setSelectedContent = _a[1];
    var commandSettings = {
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
    var initialContent = "<p><strong>Introduction</strong></p>\n<p>Technology has transformed the way we communicate and collaborate in both personal and professional \n    settings. Digital tools enable instant connectivity across global distances, breaking down traditional \n    barriers and creating new opportunities for innovation and growth.</p>\n<p><strong>Key Benefits</strong></p>\n<p>The integration of artificial intelligence into everyday applications is revolutionizing user experiences. \n    From smart assistants to predictive analytics, AI-powered features help users accomplish tasks more \n    efficiently while providing personalized recommendations based on individual preferences and behavior \n    patterns.</p>\n<p><strong>Implementation Approach</strong></p>\n<p>When adopting new technologies, organizations should focus on user training and change management. \n    A phased rollout allows teams to adapt gradually while providing feedback for continuous improvement. \n    Clear communication about benefits and proper support resources are essential for successful adoption \n    and long-term sustainability of technological initiatives.</p>\n<p><strong>Future Outlook</strong></p>\n<p>As digital transformation continues to accelerate, businesses must remain adaptable and open to \n    emerging trends. Cloud computing, automation, and data-driven decision-making will play increasingly \n    important roles in shaping competitive advantages. Organizations that embrace innovation while \n    maintaining focus on user needs will be best positioned for future success.</p>";
    /**
     * Initialize Rich Text Editor instance
     */
    React.useEffect(function () {
        // Use a small delay to ensure EJ2 library is fully loaded
        var timer = setTimeout(function () {
            initializeRichTextEditor();
        }, 100);
        return function () {
            clearTimeout(timer);
            if (abortControllerRef.current) {
                abortControllerRef.current.abort();
            }
            if (rteInstanceRef.current) {
                rteInstanceRef.current.destroy();
            }
        };
    }, []);
    /**
     * Initialize RichTextEditor with EJ2 library
     */
    var initializeRichTextEditor = function () {
        if (!rteEditorRef.current) {
            console.error('RTE editor ref not available');
            return;
        }
        // Use imported modules directly
        rteSelectionRef.current = new ej2_richtexteditor_2.NodeSelection();
        markdownConverterRef.current = ej2_markdown_converter_1.MarkdownConverter;
        // Create RichTextEditor instance
        rteInstanceRef.current = new ej2_richtexteditor_1.RichTextEditor({
            quickToolbarSettings: {
                text: [
                    { prefixIcon: 'e-icons e-ai-chat' },
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
            value: initialContent,
            toolbarClick: handleToolbarClick
        });
        rteInstanceRef.current.appendTo(rteEditorRef.current);
    };
    /**
     * Handle toolbar click event to trigger AI prompt
     */
    var handleToolbarClick = function (args) {
        if (args.item.prefixIcon === 'e-icons e-ai-chat') {
            if (!rteInstanceRef.current || !rteSelectionRef.current)
                return;
            var range = rteSelectionRef.current.getRange(document);
            var relateToEl_1 = range.endContainer && range.endContainer.parentElement;
            var selectedText = rteInstanceRef.current.getSelection();
            if (selectedText && selectedText.length > 0) {
                var wrapper_1 = document.createElement('span');
                wrapper_1.className = 'e-inlineaiprompt-selected-text';
                // Extract the selected contents from the range (match JS behavior)
                var selectedContents = range.extractContents();
                wrapper_1.appendChild(selectedContents);
                range.insertNode(wrapper_1);
                selectedSpanRef.current = wrapper_1;
                setSelectedContent({
                    text: selectedText,
                    span: wrapper_1,
                    range: range
                });
                // Show popup after state update
                setTimeout(function () {
                    if (promptRef.current) {
                        promptRef.current.relateTo = relateToEl_1 ? relateToEl_1 : wrapper_1;
                        promptRef.current.dataBind();
                        promptRef.current.showPopup();
                    }
                }, 0);
            }
        }
    };
    /**
     * Handle prompt request from AI - sends selected text to AI service
     */
    var handlePromptRequest = function (args) {
        if (!rteInstanceRef.current || !args.prompt)
            return;
        // Save undo/redo stack
        if (rteInstanceRef.current.formatter.getUndoRedoStack().length === 0) {
            rteInstanceRef.current.formatter.saveData();
        }
        var contextPrompt = args.prompt || '';
        if (selectedContent.text && selectedContent.text.length > 0) {
            contextPrompt = contextPrompt + ' ' + selectedContent.text;
        }
        var selectedSpan = selectedSpanRef.current || selectedContent.span;
        if (selectedSpan) {
            if (promptRef.current && selectedSpan.parentElement) {
                promptRef.current.dataBind();
            }
            (0, ai_service_1.getUserID)().then(function (userID) {
                try {
                    abortControllerRef.current = new AbortController();
                    // Make streaming request to AI service
                    fetch(ai_service_1.AI_SERVICE_URL + '/api/stream', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': userID
                        },
                        body: JSON.stringify({ message: contextPrompt }),
                        signal: abortControllerRef.current.signal
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
                                    if (promptRef.current) {
                                        promptRef.current.addResponse(fullText, true);
                                    }
                                    var newRange = document.createRange();
                                    if (selectedSpanRef.current) {
                                        newRange.selectNodeContents(selectedSpanRef.current);
                                        if (rteInstanceRef.current) {
                                            rteInstanceRef.current.selectRange(newRange);
                                        }
                                    }
                                    return Promise.resolve();
                                }
                                // Process chunk from stream
                                var chunk = decoder.decode(value, { stream: true });
                                fullText += chunk;
                                if (promptRef.current) {
                                    promptRef.current.addResponse(fullText, false);
                                }
                                // Convert markdown to HTML and display
                                if (markdownConverterRef.current) {
                                    var tempDiv = document.createElement('div');
                                    tempDiv.innerHTML = markdownConverterRef.current.toHtml(fullText);
                                    var plainText = tempDiv.textContent || tempDiv.innerText || fullText;
                                    if (selectedSpanRef.current) {
                                        selectedSpanRef.current.innerHTML = plainText;
                                    }
                                }
                                return processStream();
                            });
                        };
                        return processStream();
                    })
                        .catch(function (error) {
                        if (error.name === 'AbortError') {
                            console.log('AI Request aborted by user.');
                            return;
                        }
                        // Show fallback error message
                        setTimeout(function () {
                            var fallbackResponse = 'We could not reach the AI service; please try again later.';
                            if (selectedSpanRef.current) {
                                selectedSpanRef.current.innerHTML = fallbackResponse;
                            }
                            if (promptRef.current) {
                                promptRef.current.addResponse(fallbackResponse);
                            }
                            var newRange = document.createRange();
                            if (selectedSpan) {
                                newRange.selectNodeContents(selectedSpan);
                                if (rteInstanceRef.current) {
                                    rteInstanceRef.current.selectRange(newRange);
                                }
                            }
                        }, 1000);
                    });
                }
                catch (error) {
                    console.error('Unexpected error:', error);
                }
            });
        }
    };
    /**
     * Handle prompt close event - cleanup when popup is closed
     */
    var handlePromptClose = function () {
        if (selectedSpanRef.current) {
            if (rteInstanceRef.current) {
                rteInstanceRef.current.formatter.saveData();
            }
            selectedSpanRef.current = null;
            setSelectedContent(function (prev) { return (__assign(__assign({}, prev), { span: null })); });
            if (rteInstanceRef.current) {
                rteInstanceRef.current.executeCommand('undo');
                rteInstanceRef.current.clearUndoRedo();
            }
            window.getSelection().removeAllRanges();
        }
    };
    /**
     * Handle response item selection (Accept/Reject)
     */
    var handleResponseItemSelect = function (args) {
        var selectedSpan = selectedContent.span;
        if (args.command.label === 'Accept') {
            // Accept the AI response
            if (selectedSpan && selectedSpan.parentNode) {
                var parent_1 = selectedSpan.parentNode;
                var textContent = selectedSpan.textContent || selectedSpan.innerText;
                var textNode = document.createTextNode(textContent);
                parent_1.replaceChild(textNode, selectedSpan);
                // Clear the synchronous ref first so the close handler doesn't undo this change
                selectedSpanRef.current = null;
                setSelectedContent(function (prev) { return (__assign(__assign({}, prev), { span: null })); });
                if (rteInstanceRef.current) {
                    rteInstanceRef.current.formatter.saveData();
                    rteInstanceRef.current.formatter.enableUndo(rteInstanceRef.current);
                }
            }
            if (promptRef.current) {
                promptRef.current.hidePopup();
            }
        }
        else if (args.command.label === 'Discard') {
            // Reject the AI response and restore original text
            if (rteInstanceRef.current) {
                rteInstanceRef.current.formatter.saveData();
            }
            // Clear the synchronous ref so the close handler doesn't also attempt undo
            selectedSpanRef.current = null;
            setSelectedContent(function (prev) { return (__assign(__assign({}, prev), { span: null })); });
            if (rteInstanceRef.current) {
                rteInstanceRef.current.executeCommand('undo');
                rteInstanceRef.current.clearUndoRedo();
            }
            window.getSelection().removeAllRanges();
            if (promptRef.current) {
                promptRef.current.hidePopup();
            }
        }
    };
    var inlineToolbarSettings = {
        itemClick: function (args) {
            if (args.item.iconCss === 'e-icons e-inline-stop') {
                if (abortControllerRef.current) {
                    abortControllerRef.current.abort();
                }
            }
        }
    };
    var responseSettings = {
        itemSelect: handleResponseItemSelect
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "rte-integration-container" },
                React.createElement("div", { ref: rteEditorRef, id: "rte-editor", style: { width: '100%' } }),
                React.createElement(ej2_react_interactive_chat_1.InlineAIPromptComponent, { ref: promptRef, id: "inline-ai-prompt", commandSettings: commandSettings, inlineToolbarSettings: inlineToolbarSettings, responseMode: "Inline", promptRequest: handlePromptRequest, close: handlePromptClose, responseSettings: responseSettings }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the integration of the Inline AI Prompt component with the Syncfusion Rich Text Editor. It showcases advanced customization including command settings, response settings, and footer toolbar options for enhanced content editing experience.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this example, the Inline AI Prompt component is seamlessly integrated with the Rich Text Editor, providing an advanced use-case scenario. This integration demonstrates how AI-powered assistance can enhance content creation and editing workflows."),
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
exports.default = RichTextEditorFunctional;
