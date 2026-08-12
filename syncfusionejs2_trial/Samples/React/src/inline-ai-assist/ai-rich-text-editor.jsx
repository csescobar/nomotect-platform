import * as React from 'react';
import { InlineAIAssistComponent } from '@syncfusion/ej2-react-interactive-chat';
// Import EJ2 RichTextEditor modules to ensure they're bundled
import { RichTextEditor, HtmlEditor, Toolbar, Image, Link, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { NodeSelection } from '@syncfusion/ej2-richtexteditor';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
import { SampleBase } from '../common/sample-base';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';
import './ai-rich-text-editor.css';
// Inject required modules for RichTextEditor
RichTextEditor.Inject(HtmlEditor, Toolbar, Image, Link, QuickToolbar);
/**
 * React component for Rich Text Editor with Inline AI Assist integration
 * Demonstrates AI-powered content editing with streaming responses
 */
export class RichTextEditorSample extends SampleBase {
    promptRef = React.createRef();
    rteEditorRef = React.createRef();
    rteInstance = null;
    abortController;
    markdownConverter;
    rteSelection;
    selectedSpanRef = null;
    commandSettings = {
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
    initialContent = `<p><strong>Introduction</strong></p>
<p>Technology has transformed the way we communicate and collaborate in both personal and professional 
    settings. Digital tools enable instant connectivity across global distances, breaking down traditional 
    barriers and creating new opportunities for innovation and growth.</p>
<p><strong>Key Benefits</strong></p>
<p>The integration of artificial intelligence into everyday applications is revolutionizing user experiences. 
    From smart assistants to predictive analytics, AI-powered features help users accomplish tasks more 
    efficiently while providing personalized recommendations based on individual preferences and behavior 
    patterns.</p>
<p><strong>Implementation Approach</strong></p>
<p>When adopting new technologies, organizations should focus on user training and change management. 
    A phased rollout allows teams to adapt gradually while providing feedback for continuous improvement. 
    Clear communication about benefits and proper support resources are essential for successful adoption 
    and long-term sustainability of technological initiatives.</p>
<p><strong>Future Outlook</strong></p>
<p>As digital transformation continues to accelerate, businesses must remain adaptable and open to 
    emerging trends. Cloud computing, automation, and data-driven decision-making will play increasingly 
    important roles in shaping competitive advantages. Organizations that embrace innovation while 
    maintaining focus on user needs will be best positioned for future success.</p>`;
    constructor(props) {
        super(props);
        this.state = {
            selectedText: '',
            selectedSpan: null,
            range: null
        };
    }
    /**
     * Initialize RichTextEditor instance after component mounts
     */
    componentDidMount() {
        // Use a small delay to ensure EJ2 library is fully loaded
        setTimeout(() => {
            this.initializeRichTextEditor();
        }, 100);
    }
    /**
     * Initialize RichTextEditor with EJ2 library
     */
    initializeRichTextEditor = () => {
        // Use imported modules directly
        this.rteSelection = new NodeSelection();
        this.markdownConverter = MarkdownConverter;
        // Create RichTextEditor instance
        this.rteInstance = new RichTextEditor({
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
            value: this.initialContent,
            toolbarClick: this.handleToolbarClick,
            created: this.handleRteCreated
        });
        if (this.rteEditorRef.current) {
            this.rteInstance.appendTo(this.rteEditorRef.current);
        }
    };
    /**
     * Handle RichTextEditor creation event
     */
    handleRteCreated = () => {
        //Rich Text Editor initialized
    };
    /**
     * Handle toolbar click event to trigger AI prompt
     */
    handleToolbarClick = (args) => {
        if (args.item.prefixIcon === 'e-icons e-ai-chat') {
            if (!this.rteInstance)
                return;
            const range = this.rteSelection.getRange(document);
            const relateToEl = range.endContainer && range.endContainer.parentElement;
            const selectedText = this.rteInstance.getSelection();
            if (selectedText && selectedText.length > 0) {
                const wrapper = document.createElement('span');
                wrapper.className = 'e-inlineaiassist-selected-text';
                // Extract the selected contents from the range (match JS sample behavior)
                const selectedContents = range.extractContents();
                wrapper.appendChild(selectedContents);
                range.insertNode(wrapper);
                this.selectedSpanRef = wrapper;
                this.setState({
                    selectedText: selectedText,
                    selectedSpan: wrapper,
                    range: range
                }, () => {
                    if (this.promptRef.current) {
                        this.promptRef.current.relateTo = relateToEl ? relateToEl : wrapper;
                        this.promptRef.current.dataBind();
                        this.promptRef.current.showPopup();
                    }
                });
            }
        }
    };
    /**
     * Handle prompt request from AI - sends selected text to AI service
     */
    handlePromptRequest = (args) => {
        if (!this.rteInstance || !args.prompt)
            return;
        // Save undo/redo stack
        if (this.rteInstance.formatter.getUndoRedoStack().length === 0) {
            this.rteInstance.formatter.saveData();
        }
        let contextPrompt = args.prompt || '';
        if (this.state.selectedText && this.state.selectedText.length > 0) {
            contextPrompt = contextPrompt + ' ' + this.state.selectedText;
        }
        const selectedSpan = this.selectedSpanRef || this.state.selectedSpan;
        if (selectedSpan) {
            if (this.promptRef.current && selectedSpan.parentElement) {
                this.promptRef.current.dataBind();
            }
            getUserID().then((userID) => {
                try {
                    this.abortController = new AbortController();
                    // Make streaming request to AI service
                    fetch(AI_SERVICE_URL + '/api/stream', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': userID
                        },
                        body: JSON.stringify({ message: contextPrompt }),
                        signal: this.abortController.signal
                    })
                        .then((response) => {
                        if (!response.ok) {
                            return response.json().then((errorData) => {
                                throw new Error(errorData.error || ('HTTP Error ' + response.status));
                            });
                        }
                        // Process streaming response
                        const reader = response.body.getReader();
                        const decoder = new TextDecoder();
                        let fullText = '';
                        const processStream = () => {
                            return reader.read().then((result) => {
                                const value = result.value;
                                const done = result.done;
                                if (done) {
                                    // Stream complete - add response to prompt component
                                    if (this.selectedSpanRef && this.selectedSpanRef.parentNode) {
                                        if (this.promptRef.current) {
                                            this.promptRef.current.addResponse(fullText, true);
                                        }
                                        const newRange = document.createRange();
                                        newRange.selectNodeContents(this.selectedSpanRef);
                                        if (this.rteInstance) {
                                            this.rteInstance.selectRange(newRange);
                                        }
                                    }
                                    return Promise.resolve();
                                }
                                // Check if selectedSpan still exists in DOM before processing
                                if (!this.selectedSpanRef || !this.selectedSpanRef.parentNode) {
                                    return Promise.resolve();
                                }
                                // Process chunk from stream
                                const chunk = decoder.decode(value, { stream: true });
                                fullText += chunk;
                                if (this.promptRef.current) {
                                    this.promptRef.current.addResponse(fullText, false);
                                }
                                // Convert markdown to HTML and display
                                if (this.markdownConverter) {
                                    const tempDiv = document.createElement('div');
                                    tempDiv.innerHTML = this.markdownConverter.toHtml(fullText);
                                    const plainText = tempDiv.textContent || tempDiv.innerText || fullText;
                                    if (this.selectedSpanRef) {
                                        this.selectedSpanRef.innerHTML = plainText;
                                    }
                                }
                                // Refresh popup position to prevent coordinate errors
                                if (this.promptRef.current && this.promptRef.current.popupObj) {
                                    this.promptRef.current.popupObj.refreshPosition();
                                }
                                return processStream();
                            });
                        };
                        return processStream();
                    })
                        .catch((error) => {
                        if (error.name === 'AbortError') {
                            return;
                        }
                        // Show fallback error message
                        setTimeout(() => {
                            if (this.selectedSpanRef && this.selectedSpanRef.parentNode) {
                                const fallbackResponse = 'We could not reach the AI service; please try again later.';
                                this.selectedSpanRef.innerHTML = fallbackResponse;
                                if (this.promptRef.current) {
                                    this.promptRef.current.addResponse(fallbackResponse);
                                }
                                const newRange = document.createRange();
                                newRange.selectNodeContents(this.selectedSpanRef);
                                if (this.rteInstance) {
                                    this.rteInstance.selectRange(newRange);
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
    handlePromptClose = () => {
        if (this.abortController) {
            this.abortController.abort();
        }
        if (this.selectedSpanRef) {
            if (this.rteInstance) {
                this.rteInstance.formatter.saveData();
            }
            this.selectedSpanRef = null;
            this.setState({ selectedSpan: null });
            if (this.rteInstance) {
                this.rteInstance.executeCommand('undo');
                this.rteInstance.clearUndoRedo();
            }
            window.getSelection().removeAllRanges();
        }
    };
    /**
     * Handle response item selection (Accept/Reject)
     */
    handleResponseItemSelect = (args) => {
        const selectedSpan = this.selectedSpanRef || this.state.selectedSpan;
        if (args.command.label === 'Accept') {
            // Accept the AI response
            if (selectedSpan && selectedSpan.parentNode) {
                const parent = selectedSpan.parentNode;
                const textContent = selectedSpan.textContent || selectedSpan.innerText;
                const textNode = document.createTextNode(textContent);
                parent.replaceChild(textNode, selectedSpan);
                // Clear synchronous ref first so close handler won't undo this change
                this.selectedSpanRef = null;
                this.setState({ selectedSpan: null });
                if (this.rteInstance) {
                    this.rteInstance.formatter.saveData();
                    this.rteInstance.formatter.enableUndo(this.rteInstance);
                }
            }
            if (this.promptRef.current) {
                this.promptRef.current.hidePopup();
            }
        }
        else if (args.command.label === 'Discard') {
            // Reject the AI response and restore original text
            if (this.rteInstance) {
                this.rteInstance.formatter.saveData();
            }
            // Clear synchronous ref so close handler doesn't attempt undo afterwards
            this.selectedSpanRef = null;
            this.setState({ selectedSpan: null });
            if (this.rteInstance) {
                this.rteInstance.executeCommand('undo');
                this.rteInstance.clearUndoRedo();
            }
            window.getSelection().removeAllRanges();
            if (this.promptRef.current) {
                this.promptRef.current.hidePopup();
            }
        }
    };
    inlineToolbarSettings = {
        itemClick: (args) => {
            if (args.item.iconCss === 'e-icons e-inline-stop') {
                if (this.abortController) {
                    this.abortController.abort();
                }
            }
        }
    };
    responseSettings = {
        itemSelect: this.handleResponseItemSelect
    };
    componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
        }
        if (this.rteInstance) {
            this.rteInstance.destroy();
        }
    }
    render() {
        return (<div className="control-pane">
        <div className="control-section">
          <div className="rte-integration-container">
            <div ref={this.rteEditorRef} id="rte-editor" style={{ width: '100%' }}/>

            <InlineAIAssistComponent ref={this.promptRef} id="inline-ai-assist" commandSettings={this.commandSettings} inlineToolbarSettings={this.inlineToolbarSettings} responseMode="Inline" promptRequest={this.handlePromptRequest} close={this.handlePromptClose} responseSettings={this.responseSettings}/>
          </div>
        </div>

        <div id="action-description">
          <p>
            This sample demonstrates the integration of the Inline AI Assist component with the Syncfusion Rich Text
            Editor. It showcases advanced customization including command settings, response settings, and footer
            toolbar options for enhanced content editing experience.
          </p>
        </div>

        <div id="description">
          <p>
            In this example, the Inline AI Assist component is seamlessly integrated with the Rich Text Editor,
            providing an advanced use-case scenario. This integration demonstrates how AI-powered assistance can
            enhance content creation and editing workflows.
          </p>
          <p>Key features demonstrated:</p>
          <ul>
            <li>
              <code>CommandSettings</code> - Custom AI command buttons (Improve, Shorten, Elaborate, Summarize)
              integrated into the interface
            </li>
            <li>
              <code>ResponseSettings</code> - Configured response behavior with dynamic suggestion updates based on
              user actions
            </li>
            <li>
              <code>ResponseMode</code> - Set to <code>'Inline'</code> mode where the AI response can be directly
              streamed or added into the editor area, allowing users to see real-time content changes
            </li>
          </ul>
        </div>
      </div>);
    }
}
