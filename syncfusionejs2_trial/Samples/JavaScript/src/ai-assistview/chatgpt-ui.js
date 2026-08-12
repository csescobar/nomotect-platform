this.default = function () {
    
var selectedConvId = '';
var isFirstPrompt = false;
var grpListObj;
var isMobile = false;
var listView;
var azureApiKey = '';
var azureEndpoint = '';
var azureDeployment = '';
var azureApiVersion = '';

// Azure OpenAI request helper
function getAzureOpenAIResponse(req) {
        var apiKey = req.apiKey;
        var endpoint = req.endpoint;
        var deployment = req.deployment;
        var prompt = req.prompt;
        var apiVersion = req.apiVersion || '2024-07-01-preview';

        var url = endpoint.replace(/\/$/, '') +
            '/openai/deployments/' + encodeURIComponent(deployment) + '/chat/completions' +
            '?api-version=' + encodeURIComponent(apiVersion);

        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
            body: JSON.stringify({
                messages: [{ role: 'user', content: prompt }],
                temperature: 0.7,
                max_tokens: 200
            })
        })
        .then(function(res) {
            return res.json().then(function(data) {
                if (!res.ok) {
                    var apiMsg = data && data.error && data.error.message || 'HTTP ' + res.status + ' ' + res.statusText;
                    throw new Error(apiMsg);
                }
                return data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content.trim() || 'No response received.';
            }, function() {
                return {};
            });
        });
    }

//AIAssistView initialization
var aiAssistView  = new ej.interactivechat.AIAssistView({
    promptSuggestions: window.assistantSuggestions,
    promptRequest: (args) => {
        updateBannerStyle();
        execute(args.prompt);
    },
    bannerTemplate: '#bannerContent',
    enableAttachments: true,
    attachmentSettings: {
        saveUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
    },
    showHeader: false,
    width: 'auto',
});
aiAssistView.appendTo('#aiAssistView');

 // Sidebar initialization
var sidebar  = new ej.navigations.Sidebar({
    width: '250px',
    target: '#chatgpt',
    type: 'Push',
    enableGestures: false,
    showBackdrop: true,
    open: function () {
        document.getElementById('close').style.display = 'none';
    }
});
sidebar .appendTo('.left-content');

// Applies responsive settings to the sidebar based on current window width
function applySidebarResponsiveConfig() {
    isMobile = window.innerWidth <= 680;
    if (isMobile) {
        sidebar .enableDock = false;
        sidebar .type = 'Over';
        sidebar .showBackdrop = true;
        setTimeout(() => sidebar .hide(), 100);
    } else {
        sidebar .enableDock = false;
        sidebar .type = 'Push';
        sidebar .showBackdrop = false;
        setTimeout(() => sidebar .show(), 100);
    }
    sidebar .dataBind();
}
function handleWindowResize() {
    const newIsMobile = window.innerWidth <= 680;
    if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        applySidebarResponsiveConfig();
    }
}

// Fixed header menu toggle button
var headerToggleButton  = new ej.buttons.Button({
    iconCss: 'e-icons e-menu',
    cssClass: 'e-flat',
});
headerToggleButton .appendTo('#close');

var upgradeButton  = new ej.buttons.Button({});
upgradeButton .appendTo('#upgrade');

var toggleBtn = new ej.buttons.Button({
    cssClass: 'e-flat',
});
toggleBtn.appendTo('#toggle-btn-close');

function setFloatingToggleIcon() {
    toggleBtn.iconCss =
        window.innerWidth <= 680 ? 'e-icons e-close' : 'e-icons e-menu';
    toggleBtn.dataBind();
}

// Dedicated toast for AI-related banner on first load
var aiInfoToast  = new ej.notifications.Toast({
    position: {
        X: 'right',
        Y: 'Top',
    },
    target: '.e-view',
    timeOut: '3000',
    showCloseButton: true,
});
aiInfoToast .appendTo('#ai-toast');

// General-purpose toast used by left action items
var actionToast  = new ej.notifications.Toast({
    position: {
        X: 'right',
        Y: 'Top',
    },
    target: '.e-views',
    timeOut: '1500',
    showCloseButton: true,
});
actionToast .appendTo('#toast');

// Left panel "actions" list
var leftPanelActionsData  = [
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

function getDate() {
    return Date.now();
}

// Ensures the app localStorage root object exists
function checkInitialLocalStorage(isClear) {
    if (!localStorage.getItem('aiassist-view') | isClear) {
        localStorage.setItem('aiassist-view', JSON.stringify({}));
    }
}

// Persists the current conversation prompts from the AIAssistView back to localStorage
function checkAndUpdateLocalStorage(prompt) {
    var appData = JSON.parse(localStorage.getItem('aiassist-view'));
    var curConvDate = getDate();
    var prompts = [];
    var orgPrompts = aiAssistView .prompts;
    for (var i = 0; i < orgPrompts.length; i++) {
        var tPrompt = {
            prompt: orgPrompts[i].prompt,
            response: orgPrompts[i].response,
        };
        prompts.push(tPrompt);
    }
    var pSuggestions = [];
    var orgPSuggestions = aiAssistView .promptSuggestions;
    for (var j = 0; j < orgPSuggestions.length; j++) {
        pSuggestions.push(orgPSuggestions[j]);
    }
    if (selectedConvId) {
        var convData = appData[selectedConvId];
        if (convData?.name === convData?.name) {
            var listItems = grpListObj.dataSource;
            for (var k = 0; k < listItems.length; k++) {
                if (listItems[k].id === selectedConvId) {
                    listItems[k].text = convData?.name;
                    break;
                }
            }
            grpListObj.dataBind();
        }
        convData.prompts = prompts;
        convData.promptSuggestions = pSuggestions;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
    } else {
        selectedConvId = curConvDate;
        var convData = {
            name: prompt,
            prompts: prompts,
            promptSuggestions: pSuggestions,
        };
        appData[curConvDate] = convData;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
        refreshConversationList();
        grpListObj.selectItem(0);
    }
}

// Left pane: conversations list data
function getLeftPaneData() {
    var appData = JSON.parse(localStorage.getItem('aiassist-view'));
    var keys = Object.keys(appData);
    var items = [];
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var numericKey = parseInt(key);
        var convData = appData[key];
        var name = convData.name.split('\n')[0];

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

function updateBannerStyle() {
    var bannerElem = document.querySelector('.banner-content');
    bannerElem.style.display =
        aiAssistView .prompts.length > 0 ? 'none' : 'block';
}

// Renames the conversation after the first prompt is submitted
function updateConversationName(prompt) {
    if (isFirstPrompt && selectedConvId) {
        const aiAssistView = JSON.parse(localStorage.getItem('aiassist-view'));
        const convData = aiAssistView[selectedConvId];
        if (convData?.name === 'New Conversation') {
            convData.name = prompt.slice(0, 40).trim();
            localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
            const listItem = grpListObj.dataSource.find(
                (item) => item.id === selectedConvId
            );
            if (listItem) {
                listItem.text = convData.name;
                grpListObj.dataBind();
            }
            refreshConversationList();
        }
        isFirstPrompt = false;
    }
}

function refreshConversationList() {
    grpListObj.dataSource = getLeftPaneData();
    grpListObj.dataBind();
}

// Loads a conversation by id or resets to an empty view when no id is provided
function updateAIAssistViewData(id) {
    if (id) {
        var appData = JSON.parse(localStorage.getItem('aiassist-view'));
        var convData = appData[id];

        aiAssistView .prompts = convData.prompts;
        aiAssistView .promptSuggestions = convData.promptSuggestions;
    } else {
        aiAssistView .prompts = [];
        aiAssistView .promptSuggestions = window.assistantSuggestions;
    }
}

// Clears the current conversation state and shows the initial suggestions
function loadNewAIAssist() {
    selectedConvId = '';
    isFirstPrompt = true;
    aiAssistView .prompts = [];
    aiAssistView .promptSuggestions = window.assistantSuggestions;
    updateBannerStyle();
}

//Conversations ListView (left pane)
grpListObj = new ej.lists.ListView({
    dataSource: getLeftPaneData(),
    fields: { id: 'id', text: 'text' },
    template:
        '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>',
    select: function (args) {
        if (args.event) {
            if (listView) {
                const sel = listView.getSelectedItems();
                if (sel && sel.item) {
                    listView.unselectItem(sel.item);
                }
            }
            selectedConvId = args.data.id;
            updateAIAssistViewData(args.data.id);
            updateBannerStyle();
        }
    },
});
grpListObj.appendTo('#assistant-listview-grp');

// Handles per-item delete button clicks for conversations
document
    .getElementById('assistant-listview-grp')
    .addEventListener('click', (e) => {
        const btn = e.target.closest('.delete-btn');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
        const li = btn.closest('li');
        const item = grpListObj.getItemData(li);
        const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        delete app[String(item.id)];
        localStorage.setItem('aiassist-view', JSON.stringify(app));
        grpListObj.dataSource = grpListObj.dataSource.filter(
            (d) => d.id !== item.id
        );
        grpListObj.refresh();
        if (selectedConvId === item.id) {
            selectedConvId = '';
            aiAssistView .prompts = [];
            aiAssistView .promptSuggestions = window.assistantSuggestions;
            updateBannerStyle();
        }
    });

function InitializingApp() {
    checkInitialLocalStorage();

    listView = new ej.lists.ListView({
        dataSource: leftPanelActionsData ,
        template:
            '<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>',
        select: function () {
            if (grpListObj) {
                const sel = grpListObj.getSelectedItems();
                if (sel && sel.item) {
                    grpListObj.unselectItem(sel.item);
                }
            }
        },
    });

    listView.appendTo('#left-pane-listview');

    var host = document.getElementById('left-pane-listview');

    host.addEventListener('click', function (e) {
        var li = e.target.closest('li.e-list-item');
        if (!li) return;
        var data = listView.getItemData(li);
        if (data && data.id === 'new-chat') {
            loadNewAIAssist();
        } else if (data) {
            actionToast .show({
                content: `<div class="toast-content"><span><b>${data.text}</b> clicked</span></div>`,
            });
        }
    });
    const el = document.getElementById('close');
    el?.addEventListener('click', () => {
        sidebar .toggle();
    });
    document.getElementById('toggle-btn-close')?.addEventListener('click', () => {
        el.style.display = 'none'; 
        sidebar .toggle();
        setTimeout(() => {
            el.style.display = 'block';
        }, 300);
    });
    applySidebarResponsiveConfig();
    window.addEventListener('resize', handleWindowResize, { passive: true });
    setFloatingToggleIcon();
    window.addEventListener('resize', setFloatingToggleIcon);
    aiInfoToast .show({
        content: `<div class="ai-toast-content"><div class="ai-toast-title">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>`,
    });
}

async function execute(prompt) {
    try {
        aiAssistView .promptSuggestions = [];
        var finalResult = [];

        setTimeout(async () => {
            let suggestionsObj = assistantResponses.find(
                (resp) => resp.prompt === prompt
            );
            let suggestionResult = suggestionsObj
                ? suggestionsObj.suggestions || assistantSuggestions
                : assistantSuggestions;

            for (var i = 0; i < suggestionResult.length; i++) {
                if (suggestionResult[i]) {
                    finalResult.push(
                        suggestionResult[i].replace('- ', '').replace('* ', '').trim()
                    );
                }
            }
        }, 1000);
        setTimeout(async () => {
            var text = await getAzureOpenAIResponse({
                apiKey: azureApiKey,
                endpoint: azureEndpoint,
                deployment: azureDeployment,
                apiVersion: azureApiVersion,
                prompt: prompt
            });
            aiAssistView .addPromptResponse(text);
            aiAssistView .promptSuggestions = finalResult;
            checkAndUpdateLocalStorage(prompt);
            updateConversationName(prompt);
        }, 1000);
    } catch (error) {
        aiAssistView .addPromptResponse(
            "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key."
        );
        aiAssistView .promptSuggestions = [];
        updateConversationName(prompt);
    }
}
};