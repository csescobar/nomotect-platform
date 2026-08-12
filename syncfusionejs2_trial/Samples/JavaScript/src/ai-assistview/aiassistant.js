this.default = function () {

    var selectedConvId = "";
    var isFirstPrompt= false;
    var grpListObj;

    async function GetResult(prompt) {
        // Use your API_KEY and AI Model to fetch the AI responses.
        let responseObj = window.assistantResponses.find(resp => resp.prompt === prompt);
        const result = responseObj ? responseObj.response : "I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.";
        return result;
    }

    var aiAssistViewInst = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.assistantSuggestions,
        promptRequest: (args) => {
            updateBannerStyle();
            execute(args.prompt);
        },
        bannerTemplate: "#bannerContent",
        enableAttachments: true,
        attachmentSettings: {
            saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
        },
        showHeader: false,
        width: 'auto'
    });
    aiAssistViewInst.appendTo('#aiAssistView');

    // Initialize Sidebar
    var sideObj = new ej.navigations.Sidebar({
        width: "250px",
        target: ".ai-assistant",
        position: 'Left',
        enableDock: true,
        dockSize: "75px",
        enableGestures : false
    });
    sideObj.appendTo("#assistantSidebar");
    var fabObj = new ej.buttons.Fab({
        content: 'Sign In',
        position: 'TopRight',
        iconCss: 'e-icons e-user',
        cssClass: 'sign-in-button',
        target: '#aiAssistView'
    });
    fabObj.appendTo('#fab');

    var toolbarObj = new ej.navigations.Toolbar({
        overflowMode: 'Popup',
        items: [
            {
               text: "AI Assist", prefixIcon: 'e-icons e-assistview-icon', tooltipText: 'Ai-Assistant',
            },
            {
                prefixIcon: 'e-icons e-menu', tooltipText: 'Toggle sidebar', align: 'Right',
                click: function () {
                    sideObj.toggle();
                }
            },
            {
                prefixIcon: 'e-icons e-rename', tooltipText: 'Start new chat', align: 'Right',
                click: function () {
                    loadNewAIAssist();
                },
                cssClass: 'new-chat-button'
            },
        ],
    });
    toolbarObj.appendTo('#assistantToolbar');

    InitializingApp();

    var chatAccordion = new ej.navigations.Accordion({
        items : [
            {header: 'Agent', content: '<div style="padding: 10px 16px">Explore agents</div>'},
            {header: 'Conversations', expanded: true, content: '<div id="assistant-listview-grp"></div>'}
        ],
        expanded: onexpanded
    });
    chatAccordion.appendTo('#assistant-chats');

    function onexpanded(e) {
        if (e.isExpanded && [].indexOf.call(this.items, e.item) === 1) {
            if (e.element.querySelectorAll('.e-list-parent').length > 0) {
                return;
            }
            grpListObj = new ej.lists.ListView({
                dataSource: getLeftPaneData(),
                fields: { groupBy: 'category', id: 'id', text: 'text' },
                select: function (args) {
                    if (args.event) {
                        selectedConvId = args.data.id;
                        updateAIAssistViewData(args.data.id);
                        updateBannerStyle();
                    }
                }
            });
            grpListObj.appendTo('#assistant-listview-grp');
        }
    }

    function getDate() {
        return Date.now();
    }

    function getDateFormat(date) {
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1;
        let dd = today.getDate();
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
        return dd + '/' + mm + '/' + yyyy;
    }

    function getCategory(today, key) {
        var date = getDateFormat(key);
        if (date == today) {
            return "Today";
        } else {
            return "Previous days";
        }
    }

    function checkInitialLocalStorage(isClear) {
        if (!localStorage.getItem('aiassist-view') | isClear) {
            localStorage.setItem('aiassist-view', JSON.stringify({}));
        }
    }

    function checkAndUpdateLocalStorage(prompt) {
        var appData = JSON.parse(localStorage.getItem('aiassist-view'));
        var curConvDate = getDate();
        var prompts = [];
        var orgPrompts = aiAssistViewInst.prompts;
        for (var i = 0; i < orgPrompts.length; i++) {
            var tPrompt = { prompt: orgPrompts[i].prompt, response: orgPrompts[i].response };
            prompts.push(tPrompt);
        }
        var pSuggestions = [];
        var orgPSuggestions = aiAssistViewInst.promptSuggestions;
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
                name:  prompt,
                prompts: prompts,
                promptSuggestions: pSuggestions
            };
            appData[curConvDate] = convData;
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
            refreshConversationList();
            grpListObj.selectItem(0);
        }
    }

    function getLeftPaneData() {
        var today = getDateFormat(Date.now());
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
                category: getCategory(today, numericKey),
                time: getDateFormat(numericKey)
            });
        }
        items.sort(function (a, b) {
            return b.numericId - a.numericId;
        });

        return items;
    }

    function updateBannerStyle() {
        var bannerElem = document.querySelector('.banner-content');
        bannerElem.style.display = aiAssistViewInst.prompts.length > 0 ?  'none' : 'block';
    }

    function updateConversationName(prompt) {
        if (isFirstPrompt && selectedConvId) {
            const aiAssistView = JSON.parse(localStorage.getItem('aiassist-view'));
            const convData = aiAssistView[selectedConvId];
            if (convData?.name === "New Conversation") {
                convData.name = prompt.slice(0, 40).trim();
                localStorage.setItem('aiassist-view', JSON.stringify(aiAssistView));
                const listItem = grpListObj.dataSource.find(item => item.id === selectedConvId);
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

    function updateAIAssistViewData(id) {
        if (id) {
            var appData = JSON.parse(localStorage.getItem('aiassist-view'));
            var convData = appData[id];

            aiAssistViewInst.prompts = convData.prompts;
            aiAssistViewInst.promptSuggestions = convData.promptSuggestions;
        } else {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = window.assistantSuggestions;
        }
    }

    function loadNewAIAssist() {
        selectedConvId = "";
        isFirstPrompt = true;
        if (grpListObj.dataSource.length != 0) {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = window.assistantSuggestions;
        }
        var curConvDate = getDate();
        var appData = JSON.parse(localStorage.getItem('aiassist-view'));

        var convData = {
            name: "New Conversation",
            prompts: [],
            promptSuggestions: window.assistantSuggestions
        };
        appData[curConvDate] = convData;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
        refreshConversationList();
        selectedConvId = curConvDate;
        grpListObj.selectItem({ id: curConvDate });
        updateBannerStyle();
    }

    function InitializingApp() {
        checkInitialLocalStorage();
        document.getElementById('resetButton').addEventListener('click', function() {
            grpListObj.dataSource = [];
            grpListObj.dataBind();
            localStorage.setItem('aiassist-view', JSON.stringify({}));
            selectedConvId = "";
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = window.assistantSuggestions;
            updateBannerStyle();
        });
    }

    async function execute(prompt) {
        try {
            aiAssistViewInst.promptSuggestions = [];
            var finalResult= [];
            var result = "";
            
            setTimeout(async () => {
                let suggestionsObj = assistantResponses.find((resp) => resp.prompt === prompt);
                let suggestionResult = suggestionsObj ? suggestionsObj.suggestions || assistantSuggestions : assistantSuggestions;

                for (var i = 0; i < suggestionResult.length; i++) {
                    if (suggestionResult[i]) {
                        finalResult.push(suggestionResult[i].replace("- ", "").replace("* ", "").trim());
                    }
                }
            }, 1000);
            setTimeout(async () => {
                result = await GetResult(prompt);
                aiAssistViewInst.addPromptResponse(result);
                aiAssistViewInst.promptSuggestions = finalResult;
                checkAndUpdateLocalStorage(prompt);
                updateConversationName(prompt);
            }, 1000);
        } catch (error) {
            result = error;
            aiAssistViewInst.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
            aiAssistViewInst.promptSuggestions = [];
            updateConversationName(prompt);
        }
        const dataSource = grpListObj.dataSource;
        if (!dataSource || dataSource.length === 0) {
            loadNewAIAssist();
            return;
        }
    }
};