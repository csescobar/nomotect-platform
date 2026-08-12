import * as React from 'react';
import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import { FabComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { SampleBase } from '../common/sample-base';
import * as data from './blockData.json';
import './ai-ask-assistant.css';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';
import { MarkdownConverter } from '@syncfusion/ej2-markdown-converter';
export class AskAIAssistant extends SampleBase {
    assistInstance = React.createRef();
    blockEditorInstance = React.createRef();
    dialogInstance = React.createRef();
    sidebarInstance = React.createRef();
    fabInstance = React.createRef();
    abortController;
    screenDropdownRef = null;
    historyDropdownRef = null;
    lastPromptWasTranslate = false;
    sessionChats = [];
    activeSessionId = null;
    isFirstSessionAdded = false;
    currentMode = 'Sidebar';
    notionSuggestions = data["notionSuggestions"];
    iconMapByIndex = data["iconMapByIndex"];
    imageBlockSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/RichTextEditor/SaveFile',
        path: 'https://services.syncfusion.com/react/production/RichTextEditor/'
    };
    componentDidMount() {
        if (this.fabInstance.current) {
            this.fabInstance.current.element.style.display = 'none';
            this.fabInstance.current.element.onclick = () => {
                this.toggleBackgroundState(true);
                this.moveAssistview(this.currentMode);
                this.fabInstance.current.element.style.display = 'none';
            };
        }
        const wrapper = document.getElementById('assistviewWrapper');
        if (this.sidebarInstance.current && wrapper)
            this.sidebarInstance.current.element.appendChild(wrapper);
        this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
    }
    componentWillUnmount() {
        if (this.abortController) {
            this.abortController.abort();
        }
    }
    toggleBackgroundState = (show) => {
        const editorContainer = document.querySelector('.ask-ai-editor-container');
        if (editorContainer) {
            show ? editorContainer.classList.remove('e-hidden') : editorContainer.classList.add('e-hidden');
        }
    };
    toggleIconClass = (selectorIconClass, replaceIconClass) => {
        const icon = this.assistInstance.current?.toolbarHeader?.querySelector(`.${selectorIconClass}`);
        if (icon) {
            icon.className = `e-icons ${replaceIconClass}`;
        }
    };
    updateHistoryDropdown = (sessions) => {
        const items = sessions.map((session) => ({
            text: session.title.length > 30 ? session.title.substring(0, 30) + '...' : session.title,
            id: session.id
        }));
        if (this.historyDropdownRef) {
            this.historyDropdownRef.items = items.length ? items : [{ text: 'No Chat History' }];
            this.historyDropdownRef.dataBind();
        }
    };
    persistActiveSession = () => {
        if (!this.activeSessionId || !this.assistInstance.current)
            return;
        const session = this.sessionChats.find((s) => s.id === this.activeSessionId);
        if (session)
            session.prompts = this.assistInstance.current.prompts;
    };
    createNewSession = (isAuto = false) => {
        const prompts = this.assistInstance.current?.prompts;
        if (!prompts || prompts.length === 0) {
            this.activeSessionId = null;
            if (this.assistInstance.current) {
                this.assistInstance.current.prompts = [];
                this.assistInstance.current.dataBind();
            }
            return;
        }
        if (this.activeSessionId) {
            this.persistActiveSession();
        }
        else {
            const session = {
                id: String(Date.now()),
                title: prompts[0] ? prompts[0].prompt : 'New Chat',
                prompts
            };
            this.sessionChats.push(session);
            this.activeSessionId = session.id;
            this.updateHistoryDropdown(this.sessionChats);
        }
        if (!isAuto) {
            this.activeSessionId = null;
            if (this.assistInstance.current) {
                this.assistInstance.current.prompts = [];
                this.assistInstance.current.dataBind();
            }
        }
    };
    ensureCurrentChatIsSaved = () => {
        const prompts = this.assistInstance.current?.prompts;
        if (!prompts || prompts.length === 0)
            return;
        if (this.activeSessionId) {
            this.persistActiveSession();
            return;
        }
        const session = {
            id: String(Date.now()),
            title: prompts[0] ? prompts[0].prompt : 'New Chat',
            prompts
        };
        this.sessionChats.push(session);
        this.updateHistoryDropdown(this.sessionChats);
    };
    loadSession = (sessionId) => {
        if (sessionId === this.activeSessionId)
            return;
        this.ensureCurrentChatIsSaved();
        const session = this.sessionChats.find((s) => s.id === sessionId);
        if (!session || !this.assistInstance.current)
            return;
        this.activeSessionId = sessionId;
        this.assistInstance.current.prompts = session.prompts;
        this.assistInstance.current.promptSuggestions = [];
        this.assistInstance.current.dataBind();
    };
    onPromptRequest = (args) => {
        if (this.assistInstance.current)
            this.assistInstance.current.promptSuggestions = [];
        getUserID().then((userID) => {
            try {
                this.abortController = new AbortController();
                let contentToProcess = this.blockEditorInstance.current.getDataAsHtml();
                const isDocumentAction = this.notionSuggestions.includes(args.prompt);
                const isTranslatePage = args.prompt === 'Translate this page';
                const isTranslationFollowUp = this.lastPromptWasTranslate && !isDocumentAction;
                if (isTranslatePage) {
                    this.lastPromptWasTranslate = true;
                }
                const messages = isTranslationFollowUp
                    ? [
                        {
                            role: 'system',
                            content: `
        You are an assistant for a Block Editor application.
        The user wants to translate the provided Block Editor HTML content HTML into a language they will specify.
        Rules:
        - If the user's input is a valid language name, translate ONLY the visible text inside the HTML tags into that language.
        - Preserve ALL HTML tags, attributes, and structure exactly as-is.
        - Do not translate tag names, attribute names, or attribute values.
        - Return ONLY the translated HTML with no explanation or extra text.
        - If the user's input is NOT a recognizable language, reply exactly: "Please provide a valid language name to translate the document."
                      `
                        },
                        {
                            role: 'user',
                            content: `
        Translate the document into: ${args.prompt}

        Document HTML:
        ${contentToProcess}
                      `
                        }
                    ]
                    : isDocumentAction
                        ? [
                            {
                                role: 'system',
                                content: `
        You are an assistant for a Block Editor application.
        You must answer ONLY using the provided Block Editor HTML content.

        Rules:
        - Treat the provided HTML as the complete document.
        - Do not use external knowledge.
        - Do not invent missing information.
        - Preserve the meaning of headings, lists, tables, quotes, and code blocks.
        - If the document is empty, say:
          "The document is empty."
        - If translation is requested without specifying a language, ask the user to specify the target language.
        `
                            },
                            {
                                role: 'user',
                                content: `
        Request:
        ${args.prompt}

        Document HTML:
        ${contentToProcess}
        `
                            }
                        ]
                        : [
                            {
                                role: 'user',
                                content: args.prompt
                            }
                        ];
                fetch(AI_SERVICE_URL + '/api/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        visitorId: userID,
                        messages: {
                            messages
                        }
                    }),
                    signal: this.abortController.signal
                })
                    .then((response) => {
                    if (!response.ok) {
                        return response.json().then((errorData) => {
                            throw new Error(errorData.error || 'HTTP Error ' + response.status);
                        });
                    }
                    return response.json();
                })
                    .then((result) => {
                    if (result && result.response) {
                        const aiResponse = result.response.replace('END_INSERTION', '');
                        if (isTranslationFollowUp) {
                            const isInvalidLanguage = aiResponse.includes('Please provide a valid language name to translate the document.');
                            if (!isInvalidLanguage) {
                                this.lastPromptWasTranslate = false; // valid translation — reset
                            }
                        }
                        if (this.assistInstance.current) {
                            this.assistInstance.current.addPromptResponse(aiResponse);
                            if (!this.isFirstSessionAdded && !this.activeSessionId) {
                                this.createNewSession(true);
                                this.isFirstSessionAdded = true;
                            }
                            this.assistInstance.current.promptSuggestions = [];
                        }
                    }
                })
                    .catch((error) => {
                    if (error.name === 'AbortError') {
                        return;
                    }
                    this.lastPromptWasTranslate = false;
                    setTimeout(() => {
                        const fallbackResponse = 'We could not reach the AI service; please try again later.';
                        if (this.assistInstance.current) {
                            this.assistInstance.current.addPromptResponse(fallbackResponse);
                            if (!this.isFirstSessionAdded && !this.activeSessionId) {
                                this.createNewSession(true);
                                this.isFirstSessionAdded = true;
                            }
                            this.assistInstance.current.promptSuggestions = [];
                        }
                    }, 1000);
                });
            }
            catch (error) {
                //catch error
            }
        });
    };
    moveAssistview = (mode) => {
        this.currentMode = mode;
        const wrapper = document.getElementById('assistviewWrapper');
        if (this.dialogInstance.current.visible)
            this.dialogInstance.current.hide();
        if (this.sidebarInstance.current)
            this.sidebarInstance.current.hide();
        switch (mode) {
            case 'Sidebar':
                if (this.sidebarInstance.current)
                    this.sidebarInstance.current.show();
                this.toggleBackgroundState(true);
                if (this.sidebarInstance.current && wrapper)
                    this.sidebarInstance.current.element.appendChild(wrapper);
                this.toggleIconClass('e-horizontal-line', 'e-chevron-right-double');
                break;
            case 'Floating':
                if (this.dialogInstance.current)
                    this.dialogInstance.current.show();
                const dialogElem = document.querySelector('#dialogElem');
                if (dialogElem && wrapper)
                    dialogElem.appendChild(wrapper);
                this.toggleBackgroundState(true);
                this.toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
                break;
        }
    };
    onAssistViewCreated = () => {
        this.screenDropdownRef = new DropDownButton({
            items: [{ text: 'Sidebar' }, { text: 'Floating' }],
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: (args) => {
                if (this.currentMode === args.item.text)
                    args.element.classList.add('e-selected');
            },
            select: (args) => {
                if (this.currentMode = args.item.text)
                    return;
                this.moveAssistview(args.item.text);
            }
        });
        this.screenDropdownRef.appendTo('.screen-resizer');
        this.historyDropdownRef = new DropDownButton({
            items: [{ text: 'No Chat History' }],
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: (args) => {
                if (this.activeSessionId === args.item.id)
                    args.element.classList.add('e-selected');
            },
            select: (args) => {
                if (args.item.id)
                    this.loadSession(args.item.id);
            }
        });
        this.historyDropdownRef.appendTo('.history-icon');
    };
    toolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-edit-notes') {
            this.createNewSession();
            if (this.assistInstance.current)
                this.assistInstance.current.promptSuggestions = this.notionSuggestions;
        }
        else if (args.item.iconCss === 'e-icons e-horizontal-line') {
            // Move wrapper back to dialogElem before hiding
            const dialogElem = document.querySelector('#dialogElem');
            const wrapper = document.getElementById('assistviewWrapper');
            if (dialogElem && wrapper)
                dialogElem.appendChild(wrapper);
            if (this.sidebarInstance.current)
                this.sidebarInstance.current.hide();
            if (this.dialogInstance.current)
                this.dialogInstance.current.hide();
            this.toggleBackgroundState(true);
            if (this.fabInstance.current)
                this.fabInstance.current.element.style.display = '';
        }
    };
    responseToolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-block-add-icon') {
            const dataIndex = args.dataIndex;
            if (dataIndex !== undefined && dataIndex !== null && this.assistInstance.current) {
                const prompts = this.assistInstance.current.prompts;
                if (prompts && prompts[dataIndex]) {
                    const response = prompts[dataIndex].response || "We could not reach the AI service; please try again later.";
                    const currentPrompt = prompts[dataIndex].prompt;
                    const previousPrompt = dataIndex > 0 ? prompts[dataIndex - 1].prompt : '';
                    const isTranslationResponse = (previousPrompt === 'Translate this page' ||
                        /translate this page to/i.test(currentPrompt)) &&
                        !response.includes('Please provide a valid language name to translate the document.');
                    const htmlOutput = MarkdownConverter.toHtml(response);
                    if (this.blockEditorInstance.current) {
                        const blocks = this.blockEditorInstance.current.parseHtmlToBlocks(htmlOutput);
                        this.blockEditorInstance.current.renderBlocksFromJson(blocks, isTranslationResponse ? true : false);
                    }
                }
            }
        }
    };
    suggestionItemContent = (ctx) => {
        const iconClass = this.iconMapByIndex[ctx.index] || '';
        return (<div className="suggestion-item active">
        <span className={`${iconClass} suggestion-icon`}></span>
        <span className="assist-suggestion-content">{ctx.promptSuggestion}</span>
      </div>);
    };
    bannerTemplate = `<div class="banner-content">
    <div class="e-icons e-assistview-icon"></div>
    <h3>How can I help you today ?</h3>
  </div>`;
    assistViewToolbarSettings = {
        items: [
            { iconCss: 'e-icons e-history', align: 'Right', tooltip: 'Chat History', cssClass: 'history-icon' },
            { iconCss: 'e-icons e-edit-notes', align: 'Right', tooltip: 'Start New chat' },
            { iconCss: 'e-icons e-resize', align: 'Right', tooltip: 'Switch Chat Mode', cssClass: 'screen-resizer' },
            { iconCss: 'e-icons e-horizontal-line', align: 'Right', tooltip: 'Hide Chat' }
        ],
        itemClicked: this.toolbarItemClicked
    };
    footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' },
            { iconCss: 'e-icons e-assist-send', align: 'Right' }
        ]
    };
    responseToolbarSettings = {
        items: [
            { iconCss: 'e-icons e-assist-copy', tooltip: 'Copy response' },
            { iconCss: 'e-icons e-block-add-icon', tooltip: 'Insert into this page' },
            { iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { iconCss: 'e-icons e-assist-dislike', tooltip: 'Need improvement' },
            { iconCss: 'e-icons e-assist-audio', tooltip: 'Read aloud' }
        ],
        itemClicked: this.responseToolbarItemClicked
    };
    attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    speechToTextSettings = { enable: true };
    render() {
        return (<div className='control-section'>
        <div className="ask-ai-editor e-card">
          <div className="ask-ai-editor-container">
            <div className="ask-ai-editor-page">
              <div className="ask-ai-editor-content">
                <BlockEditorComponent id='ask-ai-block-editor' height="600px" blocks={data["askAssistantData"]} users={data["users"]} imageBlockSettings={this.imageBlockSettings} ref={this.blockEditorInstance}>
                </BlockEditorComponent>
              </div>
            </div>
          </div>

          {/* Dialog: holds assistviewWrapper on initial mount (Floating mode default) */}
          <DialogComponent id="dialogElem" target=".ask-ai-editor-page" position={{ X: 'right', Y: '0' }} animationSettings={{ effect: 'FadeZoom' }} width="500px" visible={false} cssClass="custom-dialog" ref={this.dialogInstance}>
            <div id="assistviewWrapper" className="ask-ai-assistview">
              <AIAssistViewComponent id="aiAssistView" enableStreaming={true} promptSuggestions={this.notionSuggestions} promptSuggestionItemTemplate={this.suggestionItemContent} promptRequest={this.onPromptRequest} bannerTemplate={this.bannerTemplate} toolbarSettings={this.assistViewToolbarSettings} footerToolbarSettings={this.footerToolbarSettings} responseToolbarSettings={this.responseToolbarSettings} enableAttachments={true} attachmentSettings={this.attachmentSettings} speechToTextSettings={this.speechToTextSettings} created={this.onAssistViewCreated} ref={this.assistInstance}>
              <ViewsDirective>
                <ViewDirective type='Assist' name='New AI chat'></ViewDirective>
              </ViewsDirective>
              </AIAssistViewComponent>
            </div>
          </DialogComponent>

          {/* Sidebar: empty on mount; wrapper DOM-moved here on Sidebar mode */}
          <SidebarComponent id="askAiSidebar" target=".ask-ai-editor-page" width="400px" position="Right" enableGestures={false} animate={false} isOpen={false} ref={this.sidebarInstance}/>

          <FabComponent id="fabElem" iconCss="e-icons e-magic-wand" target=".ask-ai-editor-page" ref={(fab) => (this.fabInstance = fab)}/>
        </div>

        <div id="action-description">
          <p>This sample demonstrates an AI AssistView integrated with Block Editor, that supports multiple chat display modes, chat history management, file attachments, and voice-based input and output interactions.</p>
        </div>
        <div id="description">
          <p>This sample demonstrates a AI assistant integrated with Block Editor for enhanced content creation.</p>
          <ul>
            <li>Block Editor component for rich content editing with various block types.</li>
            <li>Floating and sidebar chat modes with seamless view switching.</li>
            <li>Prompt suggestions rendered using a custom item template with contextual icons.</li>
            <li>Chat session creation, persistence, and history navigation.</li>
            <li>File upload and removal support using configured attachment endpoints.</li>
            <li>Response toolbar with copy, add, like, dislike, and audio options.</li>
            <li>Speech-to-text input and text-to-speech playback for hands-free interaction.</li>
            <li>Toolbar actions for starting new chats, hiding the assistant, and resizing views.</li>
            <li>Floating action button (FAB) to restore the assistant when hidden.</li>
          </ul>
        </div>
      </div>);
    }
}
