import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import * as data from './promptResponseData.json';
import './chatgpt-ui.css';

import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import {
  getAzureOpenAIAssist
} from './ai-services';
import { marked } from 'marked';
import { updateSampleSection } from '../common/sample-base';

const AIAssistant = () => {
    useEffect(() => {
            updateSampleSection();
        }, []);
    // References to Syncfusion components for imperative interactions
    const aiAssistViewRef = useRef<AIAssistViewComponent>(null);
    const sidebarRef = useRef<SidebarComponent>(null);
    const toastRef = useRef<ToastComponent>(null);
    const convListRef = useRef<ListViewComponent>(null);
    const utilListRef = useRef<ListViewComponent>(null);
    const aiToastRef = useRef<ToastComponent>(null);

    const assistantResponses: { prompt: string; response: string; suggestions?: string[] }[] =
        (data as any).assistantResponses || [];
    const assistantSuggestions: string[] = (data as any).assistantSuggestions || [];

    // Local state for tracking selected conversations and layout behaviour
    const [selectedConvId, setSelectedConvId] = useState<string | number | ''>('');
    const [isFirstPrompt, setIsFirstPrompt] = useState<boolean>(false);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [convListData, setConvListData] = useState<any[]>([]);

    // Azure OpenAI configuration values (pre-populated for demo purposes)
    const [azureApiKey] = useState('');
    const [azureEndpoint] = useState('');
    const [azureDeployment] = useState('');
    const [azureApiVersion] = useState('');

    // Static utility items displayed in the left-side navigation
    const leftpanelistData = [
        { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
        { text: 'Search chat', class: 'e-icons e-search' },
        { text: 'Library', class: 'e-icons e-reading-view' },
        { text: 'New project', class: 'e-icons e-add-notes' }
    ];

    // Banner template shown when there is no active conversation
    const bannerTemplate: string = `
    <div class="banner-content e-no-content">
      <div class="e-icons e-assistview-icon"></div>
      <h3 class="ai-assist-banner-subtitle">Hello, I'm Your Digital Assistant!</h3>
    </div>
  `;

    useEffect(() => {
        // Initialize local storage, populate default list data, and set up responsive sidebar behaviour
        checkInitialLocalStorage();
        setConvListData(getLeftPaneData());
        setSidebarConfig();
        const onResize = () => {
            const mobile = window.innerWidth <= 680;
            if (mobile !== isMobile) setSidebarConfig();
            setIsMobile(mobile);
        };
        window.addEventListener('resize', onResize, { passive: true });
        // Initial toast to highlight available AI demos
        aiToastRef.current?.show({
            content: `<div class="ai-toast-content"><div class="ai-toast-title">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>`,
        });
        return () => window.removeEventListener('resize', onResize);       
    }, []);

    useEffect(() => {
        // Attach delete button handler to each conversation list item
        const host = (convListRef.current as any)?.element as HTMLElement | undefined;
        if (!host) return;

        const clickHandler = (e: Event) => {
            const target = e.target as HTMLElement | null;
            const btn = target?.closest('.delete-btn') as HTMLElement | null;
            if (!btn) return;
            e.preventDefault();
            e.stopPropagation();

            const li = btn.closest('li') as HTMLElement;
            const item = (convListRef.current as any).getItemData(li) as { id: string | number };

            const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            delete app[String(item.id)];
            localStorage.setItem('aiassist-view', JSON.stringify(app));

            const ds = ((convListRef.current as any).dataSource as Array<{ id: string | number }>).filter(
                (d) => d.id !== item.id
            );
            (convListRef.current as any).dataSource = ds;
            (convListRef.current as any).dataBind();
            setConvListData(ds);

            if (selectedConvId === item.id) {
                setSelectedConvId('');
                if (aiAssistViewRef.current) {
                    aiAssistViewRef.current.prompts = [];
                    aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
                }
                updateBannerStyle();
            }
        };

        host.addEventListener('click', clickHandler);
        return () => host.removeEventListener('click', clickHandler);
    }, [convListData, selectedConvId, assistantSuggestions]);

    const getDate = (): number => Date.now();

    const checkInitialLocalStorage = (isClear = false): void => {
        // Ensure the local storage structure exists for conversation persistence
        if (isClear || !localStorage.getItem('aiassist-view')) {
            localStorage.setItem('aiassist-view', JSON.stringify({}));
        }
    };

    const getLeftPaneData = () => {
        // Build ListView data objects from persisted conversation metadata
        const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        const keys = Object.keys(appData);
        const items: any[] = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const numericKey = parseInt(key, 10);
            const convData = appData[key];
            if (convData) {
                const name = (convData.name || '').split('\n')[0];
                items.push({
                    text: name,
                    id: numericKey,
                    numericId: numericKey
                });
            }
        }
        items.sort((a, b) => b.numericId - a.numericId);
        return items;
    };

    const refreshConversationList = (): void => {
        // Recompute and update the sidebar chat list from storage
        setConvListData(getLeftPaneData());
    };

    const setSidebarConfig = (): void => {
        // Toggle sidebar mode based on screen size, providing responsive behaviour
        const mobile = window.innerWidth <= 680;
        setIsMobile(mobile);
        if (!sidebarRef.current) return;
        const sidebar = sidebarRef.current;
        sidebar.enableDock = false;
        sidebar.type = mobile ? 'Over' : 'Push';
        sidebar.showBackdrop = mobile;
        sidebar.dataBind();
        setTimeout(() => (mobile ? sidebar.hide() : sidebar.show()), 100);
    };

    const updateBannerStyle = (): void => {
        // Show or hide the introductory banner depending on conversation history
        const bannerElem = document.querySelector('.banner-content') as HTMLElement;
        if (!bannerElem) return;
        const prompts = aiAssistViewRef.current?.prompts || [];
        bannerElem.style.display = prompts.length > 0 ? 'none' : 'block';
    };

    const updateAIAssistViewData = (id: string | number): void => {
        // Load saved prompts and suggestions when a conversation is selected
        if (!aiAssistViewRef.current) return;
        if (id) {
            const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            const convData = appData[String(id)];
            if (convData) {
                aiAssistViewRef.current.prompts = convData.prompts || [];
                aiAssistViewRef.current.promptSuggestions = convData.promptSuggestions || assistantSuggestions;
            }
        } else {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
        }
    };

    const loadNewAIAssist = (): void => {
        // Reset the chat view without creating a new conversation entry
        setSelectedConvId('');
        setIsFirstPrompt(true);
        if (aiAssistViewRef.current) {
            aiAssistViewRef.current.prompts = [];
            aiAssistViewRef.current.promptSuggestions = assistantSuggestions;
        }
        updateBannerStyle();
        // Deselect any selected conversation
        const sel = (convListRef.current as any)?.getSelectedItems?.();
        if (sel && sel.item) {
            (convListRef.current as any).unselectItem(sel.item);
        }
    };

    const checkAndUpdateLocalStorage = (prompt: string): void => {
        // Persist conversation state, creating new entries on the first prompt
        const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        const curConvDate = getDate();
        const prompts: any[] = [];
        const orgPrompts = aiAssistViewRef.current?.prompts || [];
        for (let i = 0; i < orgPrompts.length; i++) {
            prompts.push({
                prompt: orgPrompts[i].prompt || '',
                response: orgPrompts[i].response || ''
            });
        }
        const pSuggestions: string[] = [];
        const orgPSuggestions = aiAssistViewRef.current?.promptSuggestions || [];
        for (let j = 0; j < orgPSuggestions.length; j++) {
            pSuggestions.push(orgPSuggestions[j]);
        }

        if (selectedConvId) {
            const convData = appData[String(selectedConvId)];
            if (convData) {
                const ds: any[] = convListRef.current?.dataSource as any[];
                if (ds) {
                    for (let k = 0; k < ds.length; k++) {
                        const item = ds[k];
                        if (item && item.id === selectedConvId) {
                            item.text = convData.name;
                            break;
                        }
                    }
                    convListRef.current?.dataBind();
                }
                convData.prompts = prompts;
                convData.promptSuggestions = pSuggestions;
                localStorage.setItem('aiassist-view', JSON.stringify(appData));
            }
        } else {
            // Create conversation ONLY after first prompt is sent
            const newId = String(curConvDate);
            setSelectedConvId(newId);
            const convData = {
                name: prompt,
                prompts,
                promptSuggestions: pSuggestions
            };
            appData[newId] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            setTimeout(() => convListRef.current?.selectItem({ index: 0 }), 0);
        }
    };

    const updateConversationName = (prompt: string): void => {
        // Update conversation title after the first prompt if needed
        if (isFirstPrompt && selectedConvId) {
            const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
            const convData = app[String(selectedConvId)];
            setIsFirstPrompt(false);
            localStorage.setItem('aiassist-view', JSON.stringify(app));
            refreshConversationList();
        }
    };

    const execute = async (prompt: string): Promise<void> => {
        // Main prompt handler: clears suggestions, fetches response, and updates storage/UI
        updateBannerStyle();
        try {
            aiAssistViewRef.current && (aiAssistViewRef.current.promptSuggestions = []);
            const finalResult: string[] = [];

            setTimeout(() => {
                const suggestionsObj = assistantResponses.find((resp) => resp.prompt === prompt);
                const suggestionResult = suggestionsObj ? suggestionsObj.suggestions || assistantSuggestions : assistantSuggestions;
                for (let i = 0; i < suggestionResult.length; i++) {
                    if (suggestionResult[i]) {
                        finalResult.push(suggestionResult[i].replace('- ', '').replace('* ', '').trim());
                    }
                }
            }, 1000);

            setTimeout(async () => {
                const text = await getAzureOpenAIAssist({
                    messages: prompt,
                });
                aiAssistViewRef.current?.addPromptResponse(marked.parse(text));
                if (aiAssistViewRef.current) aiAssistViewRef.current.promptSuggestions = finalResult;
                checkAndUpdateLocalStorage(prompt);
                updateConversationName(prompt);
            }, 1000);
        } catch {
            const fallback =
                "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.";
            aiAssistViewRef.current?.addPromptResponse(fallback);
            aiAssistViewRef.current && (aiAssistViewRef.current.promptSuggestions = []);
            updateConversationName(prompt);
        }
    };

    const onConvSelect = (args: any) => {
        // Handle selection of a saved conversation in the sidebar
        if (args.isInteracted) {
            const data = args.data;
            setSelectedConvId(data.id);
            updateAIAssistViewData(data.id);
            updateBannerStyle();
        }
    };

    // UPDATED: Do not create a conversation on New chat; only reset state
    const onUtilSelect = (args: any) => {
        // Deselect any selected conversation item (matches TS behavior)
        const sel = (convListRef.current as any)?.getSelectedItems?.();
        if (sel && sel.item) {
            (convListRef.current as any).unselectItem(sel.item);
        }

        const data = args.data;
        if (data && data.id === 'new-chat') {
            loadNewAIAssist();
        } else if (data) {
            toastRef.current?.show({
                content: `<div class="toast-content"><span><b>${data.text}</b> clicked</span></div>`
            } as any);
        }
    };

    const onSidebarOpen = (): void => {
        document.getElementById('close').style.display = "none";
    }

    const onSidebarClose = (): void => {
        setTimeout(() => {
            document.getElementById('close').style.display = 'block';
        }, 300);
    }

    const attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <div>
                    <div id="chatgpt">
                        <div>
                            <div className="ai-assist-header">
                                <ButtonComponent
                                    id="close"
                                    title="Expand Navigation"
                                    iconCss="e-icons e-menu"
                                    cssClass="e-flat"
                                    onClick={() => sidebarRef.current?.toggle()}
                                />
                            </div>
                            <AIAssistViewComponent
                                id="aiAssistView"
                                ref={aiAssistViewRef}
                                promptSuggestions={assistantSuggestions}
                                enableAttachments={true}
                                attachmentSettings={attachmentSettings}
                                promptRequest={(args) => {
                                    updateBannerStyle();
                                    execute(args.prompt);
                                }}
                                bannerTemplate={bannerTemplate}
                                showHeader={false}
                                width="auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <SidebarComponent
                ref={sidebarRef}
                width="250px"
                target="#chatgpt"
                type="Push"
                enableDock={false}
                enableGestures={false}
                showBackdrop={false}
                open={onSidebarOpen}
                close={onSidebarClose}
                className="left-content"
            >
                <div style={{ overflow: 'auto' }}>
                    <div className="assistantToolbar">
                        <div className="header-left">
                            <span id="icon-assist" className="header-icon e-icons e-assistview-icon"></span>
                            <span className="header-title">AI Assist</span>
                        </div>
                        <ButtonComponent
                            id="toggle-btn-close"
                            title="Collapse Navigation"
                            cssClass="e-flat"
                            iconCss={isMobile ? 'e-icons e-close' : 'e-icons e-menu'}
                            onClick={() => {
                                const el = document.getElementById('close')
                                sidebarRef.current?.toggle();
                            }}
                        />
                    </div>

                    {/* Utility ListView directly used */}
                    <ListViewComponent
                        id="left-pane-listview"
                        ref={utilListRef}
                        dataSource={leftpanelistData}
                        template={'<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>'}
                        select={onUtilSelect}
                    />

                    <div className="assistant-sidebar-content" style={{ marginTop: 10, height: 235 }}>
                        <div className="header-conversation">Chats</div>

                        {/* Conversation ListView directly used */}
                        <ListViewComponent
                            id="assistant-listview-grp"
                            ref={convListRef}
                            dataSource={convListData}
                            fields={{ id: 'id', text: 'text' }}
                            template={
                                '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>'
                            }
                            select={onConvSelect}
                        />
                    </div>

                    <div className="sign-in">
                        <span className="e-icons e-user"></span>
                        <span className="user-name">User</span>
                        <ButtonComponent id="upgrade">Upgrade</ButtonComponent>
                    </div>
                </div>
            </SidebarComponent>

            <ToastComponent
                id="toast"
                ref={toastRef}
                position={{ X: 'Right', Y: 'Top' }}
                timeOut={1500}
                showCloseButton={true}
                target=".e-views"
            />
            <ToastComponent
                id="ai-toast"
                ref={aiToastRef}
                position={{ X: 'Right', Y: 'Top' }}
                timeOut={3000}
                showCloseButton={true}
                target=".e-view"
            />
            <div id="action-description">
                <p>This sample demonstrates a AI chat assistant with conversation management. Users can create new conversations and
                    receive AI-generated responses with relevant suggestions.</p>
            </div>
            <div id="description">
                <p>The AI AssistView component in this example showcases integration of an AI usage with conversation history
                    management which include's:</p>
                <ul>
                    <li>Sidebar with organized conversation history</li>
                    <li>New Chat action to start a fresh conversation</li>
                    <li>Customizable banner interface using <code>bannerTemplate</code> for guidance messages</li>
                    <li>Intelligent follow-up suggestions after each responses via <code>promptSuggestions</code></li>
                    <li>Attachment with configurable upload endpoints</li>
                    <li>LocalStorage persistence for prompts and suggestions to retain history across sessions</li>
                    <li>Responsive sidebar behavior with toggle buttons for desktop and mobile</li>
                    <li>Toast notifications for non-chat sidebar actions</li>
                </ul>
            </div>
        </div>
    );
};

export default AIAssistant;