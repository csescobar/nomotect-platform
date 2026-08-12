import { loadCultureFiles } from '../common/culture-loader';

import { assistantSuggestions, assistantResponses } from './promptResponseData';
import { AIAssistView, PromptRequestEventArgs } from '@syncfusion/ej2-interactive-chat';
import { Sidebar } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2-buttons';
import { Toast } from '@syncfusion/ej2-notifications';
import { ListView, SelectEventArgs as ListSelectEventArgs } from '@syncfusion/ej2-lists';
import { getAzureOpenAIAssist, type AzureOpenAIRequest } from './service';
import { marked } from 'marked';

(window as any).default = (): void => {
    loadCultureFiles();
    
    let selectedConvId: string | number | '' = '';
    let isFirstPrompt = false;
    let grpListObj: ListView | null = null;
    let isMobile = false;
    let listView: ListView | null = null;
    let azureApiKey: string = ''; // or put a dedicated Azure key here
    let azureEndpoint: string = ''; // REPLACE
    let azureDeployment: string = ''; // REPLACE with your exact deployment name
    let azureApiVersion: string = ''; // ensure supported by your resource

    //AIAssistView initialization
    let aiAssistView: AIAssistView = new AIAssistView({
        promptSuggestions: assistantSuggestions,
        promptRequest: (args) => {
            updateBannerStyle();
            execute(args.prompt);
        },
        bannerTemplate: "#bannerContent",
        enableAttachments: true,
        attachmentSettings: {
            saveUrl: 'https://ej2services.syncfusion.com/js/development/api/FileUploader/Save',
            removeUrl: 'https://ej2services.syncfusion.com/js/development/api/FileUploader/Remove'
        },
        showHeader: false,
        width: 'auto'
    });
    aiAssistView.appendTo('#aiAssistView');

    // Sidebar initialization
    const sidebar = new Sidebar({
        width: '250px',
        target: '#chatgpt',
        type: 'Push',
        enableGestures: false,
        showBackdrop: true,
        open: function () {
            document.getElementById('close').style.display = 'none';
        }
    });
    sidebar.appendTo('.left-content');

    // Applies responsive settings to the sidebar based on current window width
    function applySidebarResponsiveConfig(): void {
        isMobile = window.innerWidth <= 680;
        if (isMobile) {
            sidebar.enableDock = false;
            sidebar.type = 'Over';
            sidebar.showBackdrop = true;
            setTimeout(() => sidebar.hide(), 100);
        } else {
            sidebar.enableDock = false;
            sidebar.type = 'Push';
            sidebar.showBackdrop = false;
            setTimeout(() => sidebar.show(), 100);
        }
        sidebar.dataBind();
    }

    function handleWindowResize(): void {
        const newIsMobile = window.innerWidth <= 680;
        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            applySidebarResponsiveConfig();
        }
    }

    // Fixed header menu toggle button
    const headertogglebutton= new Button({
        iconCss: 'e-icons e-menu',
        cssClass: 'e-flat',
    });
    headertogglebutton.appendTo('#close');

    const upgradeButton = new Button({});
    upgradeButton.appendTo('#upgrade');

    const toggleBtn = new Button({
        cssClass: 'e-flat',
    });
    toggleBtn.appendTo('#toggle-btn-close');

    function setFloatingToggleIcon(): void {
        toggleBtn.iconCss = window.innerWidth <= 680 ? 'e-icons e-close' : 'e-icons e-menu';
        toggleBtn.dataBind();
    }

    // Dedicated toast for AI-related banner on first load
    const aiInfoToast = new Toast({
         position: {
            X: 'right',
            Y: 'Top',
        },
        target: '.e-view',
        timeOut: 3000,
        showCloseButton: true,
    });
    aiInfoToast .appendTo('#ai-toast');

    // General-purpose toast used by left action items
    const actionToast = new Toast({
        position: {
            X: 'right',
            Y: 'Top',
        },
        target: '.e-views',
        timeOut: 1500,
        showCloseButton: true,
    });
    actionToast.appendTo('#toast');

    // Left panel "actions" list
    const leftPanelActionsData = [
        {
            text: 'New chat',
            class: 'e-icons e-rename',
            id: 'new-chat',
        },
        {
            text: 'Search chat',
            class: 'e-icons e-search',
        },
        {
            text: 'Library',
            class: 'e-icons e-reading-view',
        },
        {
            text: 'New project',
            class: 'e-icons e-add-notes',
        },
    ];

    InitializingApp();

    function getDate(): number {
        return Date.now();
    }

    // Ensures the app localStorage root object exists
    function checkInitialLocalStorage(isClear?: boolean): void {
        if (isClear || !localStorage.getItem('aiassist-view')) {
            localStorage.setItem('aiassist-view', JSON.stringify({}));
        }
    }

    // Persists the current conversation prompts from the AIAssistView back to localStorage
    function checkAndUpdateLocalStorage(prompt: string): void {
        const appData = JSON.parse(localStorage.getItem('aiassist-view'));
        const curConvDate = getDate();
        const prompts = [];
        const orgPrompts = aiAssistView.prompts;
        for (let i = 0; i < orgPrompts.length; i++) {
            const tPrompt = {
                prompt: orgPrompts[i].prompt || "",
                response: orgPrompts[i].response || ""
            };
            prompts.push(tPrompt);
        }
        const pSuggestions: string[] = [];
        const orgPSuggestions = aiAssistView.promptSuggestions;
        for (let j = 0; j < orgPSuggestions.length; j++) {
            pSuggestions.push(orgPSuggestions[j]);
        }
        if (selectedConvId) {
            const convData = appData[selectedConvId];
            if (convData.name === convData.name) {
                const dataSource = grpListObj.dataSource as any[];
                if (dataSource) {
                    for (let k = 0; k < dataSource.length; k++) {
                        const item = dataSource[k] as any;
                        if (item && item.id === selectedConvId) {
                            item.text = convData.name;
                            break;
                        }
                    }
                }
                grpListObj.dataBind();
            }
            convData.prompts = prompts;
            convData.promptSuggestions = pSuggestions;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
        } else {
            selectedConvId = curConvDate.toString();
            const convData = {
                name: prompt,
                prompts: prompts,
                promptSuggestions: pSuggestions
            };
            appData[curConvDate] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            const itemToSelect: any = 0;
            grpListObj.selectItem(itemToSelect);
        }
    }

    // Left pane: conversations list data
    function getLeftPaneData() {
        const appData = JSON.parse(localStorage.getItem('aiassist-view'));
        const keys = Object.keys(appData);
        const items = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            const numericKey = parseInt(key);
            const convData = appData[key];
            const name = convData.name.split('\n')[0];

            items.push({
                text: name,
                id: numericKey,
                numericId: numericKey,
            });
        }
        items.sort(function (a, b) {
            return b.numericId - a.numericId;
        });
        return items;
    }

    function updateBannerStyle(): void {
        const bannerElem = document.querySelector('.banner-content') as HTMLElement;
        bannerElem.style.display = aiAssistView.prompts.length > 0 ?  'none' : 'block';
    }

    // Renames the conversation after the first prompt is submitted
    function updateConversationName(prompt: string) {
        if (isFirstPrompt && selectedConvId) {
            const aiAssistView = JSON.parse(localStorage.getItem('aiassist-view'));
            const convData = aiAssistView[selectedConvId];
            if (convData?.name === "New Conversation") {
                convData.name = prompt.slice(0, 40).trim();
                localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
                const listItem = (grpListObj.dataSource as any[]).find((item: any) => item.id === selectedConvId);
                if (listItem) {
                    listItem.text = convData.name;
                    grpListObj.dataBind();
                }
                refreshConversationList();
            }
            isFirstPrompt = false;
        }
    }

    function refreshConversationList(): void {
        grpListObj.dataSource = getLeftPaneData();
        grpListObj.dataBind();
    }

    // Loads a conversation by id or resets to an empty view when no id is provided
    function updateAIAssistViewData(id: string | number): void {
        if (id) {
            const appData = JSON.parse(localStorage.getItem('aiassist-view'));
            const convData = appData[id.toString()];

            aiAssistView.prompts = convData.prompts;
            aiAssistView.promptSuggestions = convData.promptSuggestions;
        } else {
            aiAssistView.prompts = [];
            aiAssistView.promptSuggestions = assistantSuggestions;
        }
    }

    // Clears the current conversation state and shows the initial suggestions
    function loadNewAIAssist(): void {
        selectedConvId = '';
        isFirstPrompt = true;
        aiAssistView.prompts = [];
        aiAssistView.promptSuggestions = assistantSuggestions;
        updateBannerStyle();
    }

    //Conversations ListView (left pane)
    grpListObj = new ListView({
        dataSource: getLeftPaneData(),
        fields: { id: 'id', text: 'text' },
        template:
            '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>',
        select: (args: ListSelectEventArgs) => {
            if ((args as any).event) {
                if (listView) {
                    const sel = (listView as any).getSelectedItems?.();
                    if (sel && sel.item) {
                        (listView as any).unselectItem(sel.item);
                    }
                }
                const data: any = (args as any).data;
                selectedConvId = data.id;
                updateAIAssistViewData(data.id);
                updateBannerStyle();
            }
        },
    });
    grpListObj.appendTo('#assistant-listview-grp');

    // Handles per-item delete button clicks for conversations
    document
    .getElementById('assistant-listview-grp')
    .addEventListener('click', (e) => {
        const target = e.target as HTMLElement | null;
        const btn = target?.closest('.delete-btn') as HTMLElement;
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const li = btn.closest('li') as HTMLElement;
        const item = (grpListObj as any).getItemData(li) as { id: string | number };
        const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        delete app[String(item.id)];
        localStorage.setItem('aiassist-view', JSON.stringify(app));
        (grpListObj as any).removeItem(li);
        const ds = ((grpListObj as any).dataSource as Array<{ id: string | number }>).filter(
            (d) => d.id !== item.id
        );
        (grpListObj as any).dataSource = ds;
        (grpListObj as any).dataBind();
        if (selectedConvId === item.id) {
            selectedConvId = '';
            aiAssistView.prompts = [];
            aiAssistView.promptSuggestions = assistantSuggestions;
            updateBannerStyle();
        }
    });

    function InitializingApp(): void {
        checkInitialLocalStorage();
        listView = new ListView({
            dataSource: leftPanelActionsData,
            template:
                '<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>',
            select: () => {
                if (grpListObj) {
                    const sel = (grpListObj as any).getSelectedItems?.();
                    if (sel && sel.item) {
                        (grpListObj as any).unselectItem(sel.item);
                    }
                }
            },
        });

        listView.appendTo('#left-pane-listview');

        const host = document.getElementById('left-pane-listview') as HTMLElement;
        host.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            const li = target.closest('li.e-list-item') as HTMLElement | null;
            if (!li || !listView) return;
            const data = (listView as any).getItemData(li);
            if (data && data.id === 'new-chat') {
                loadNewAIAssist();
            } else if (data) {
                actionToast.show({
                    content: `<div class="toast-content"></span> <span><b>${data.text}</b> clicked</span></div>`,
                } as any);
            }
        });
        const el = document.getElementById('close');
        el?.addEventListener('click', () => {
            sidebar.toggle();
        });
        document.getElementById('toggle-btn-close')?.addEventListener('click', () => {
            el.style.display = 'none'; 
            sidebar.toggle();
            setTimeout(() => {
                el.style.display = 'block';
            }, 300);
        });

        applySidebarResponsiveConfig();
        window.addEventListener('resize', handleWindowResize, { passive: true });
        setFloatingToggleIcon();
        window.addEventListener('resize', setFloatingToggleIcon);
        aiInfoToast.show({
            content: `<div class="ai-toast-content"><div class="ai-toast-title">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>`,
        });
    }

    async function execute(prompt: string): Promise<void> {
        try {
            aiAssistView.promptSuggestions = [];
            const finalResult: string[] = [];

            setTimeout(() => {
                const suggestionsObj = assistantResponses.find((resp:any) => resp.prompt === prompt);
                const suggestionResult = suggestionsObj
                    ? suggestionsObj.suggestions || assistantSuggestions
                    : assistantSuggestions;

                for (let i = 0; i < suggestionResult.length; i++) {
                    if (suggestionResult[i]) {
                        finalResult.push(
                            suggestionResult[i].replace('- ', '').replace('* ', '').trim()
                        );
                    }
                }
            }, 1000);

            setTimeout(async () => {
                const text = await getAzureOpenAIAssist({
                    apiKey: azureApiKey,
                    endpoint: azureEndpoint,
                    deployment: azureDeployment,
                    apiVersion: azureApiVersion,
                    prompt: prompt!
                } as AzureOpenAIRequest)
                aiAssistView.addPromptResponse(marked.parse(text));
                aiAssistView.promptSuggestions = finalResult;
                checkAndUpdateLocalStorage(prompt);
                updateConversationName(prompt);
            }, 1000);
        } catch (error) {
            const fallback =
                "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.";
            aiAssistView.addPromptResponse(fallback);
            aiAssistView.promptSuggestions = [];
            updateConversationName(prompt);
        }
    }
};