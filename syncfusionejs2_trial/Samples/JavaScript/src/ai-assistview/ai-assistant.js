// Main JavaScript for AI AssistView functionality

this.default = function () {

    // Fetch your API_KEY
    const API_KEY = "Your API key";
    // Updat your AI model
    const model = "Your AI model";

    async function GetResult(prompt) {
        // Find the matching response object in defaultResponses array
        let responseObj = defaultResponses.find(resp => resp.prompt === prompt) || defaultResponses[0];
        const result = responseObj.response;
        const response = result;
        const text = response;
        return text;
    }

    var selectedConvId = "";
    var isFirstPrompt;
    var defaultPromptSuggestions = [
        "How is AI used in everyday life?",
        "What are the benefits of using AI?",
        "How can AI help me manage my daily tasks?"
    ];
    
    // Default responses for each suggestion
    var defaultResponses = [
        {
        prompt: "How is AI used in everyday life?",
        response: "<p>AI is integrated into many aspects of daily life. Common examples include:</p> <ol><li>Voice assistants like Siri and Alexa.</li><li>Recommendation systems on Netflix and YouTube.</li><li>Spam filters in email.</li><li>Navigation apps like Google MapsSmart home devices and appliances.</li><ol>",
        suggestions: ["How can AI help me manage my daily tasks?", "Can AI be creative?", "What are the benefits of using AI?"]
        },
        {
        prompt: "What are the benefits of using AI?",
        response: "<p>AI offers several benefits across industries and daily life:</p><ol><li><strong>Efficiency:</strong> Automates repetitive tasks and speeds up processes.</li><li><strong>Accuracy:</strong> Reduces human error in data-heavy tasks.<li><strong>Personalization:</strong> Tailors experiences to individual users (e.g., recommendations).</li></ol>",
        suggestions: ["What are the risks or challenges of AI?", "How can AI help me manage my daily tasks?", "Can AI be creative?"]
        },
        {
        prompt: "What are the risks or challenges of AI?",
        response: "<p>While AI has many benefits, it also presents challenges such as:</p><ol><li><strong>Bias:</strong> AI can reflect and amplify biases in training data.</li><li><strong>Privacy:</strong> AI systems often rely on large amounts of personal data.</li> <li><strong>Job Displacement:</strong> Automation may replace certain human jobs.</li></ol>",
        suggestions: ["Can AI be creative?", "How is AI used in everyday life?", "How can AI help me manage my daily tasks?"]
        },       
        {
        prompt: "How can AI help me manage my daily tasks?",
        response: "<p>AI can streamline your daily workflow in several ways:</p> <ol><li><strong>Task Automation:</strong> Automate repetitive tasks like email sorting, calendar scheduling, and reminders.</li> <li><strong>Smart Prioritization:</strong> AI tools can analyze deadlines and importance to help you prioritize effectively.</li><li><strong>Time Management:</strong> Use AI to suggest optimal time blocks for tasks based on your habits.</li><li><strong>Progress Tracking:</strong> Get insights into your productivity trends and areas for improvement.</li></ol>",
        },
        {
        prompt: "Can AI be creative?",
        response: "<p>Yes, AI can be creative in generating music, art, writing, and design. Tools like DALL·E, ChatGPT, and AIVA use AI to produce original content based on user input and learned patterns from data.</p>",
        }
    ];  

    // Initialize AIAssistView
    var aiAssistViewInst = new ej.interactivechat.AIAssistView({
        promptSuggestions: defaultPromptSuggestions,
        promptRequest: (args) => {
            execute(args.prompt);
        },
       
        bannerTemplate: "#bannerContent",
        toolbarSettings: {
            items: [
                { type: 'Input', template: '<button id="ddMenu"></button>', align: 'Right' }
            ]
        }
    });
    aiAssistViewInst.appendTo('#defaultAIAssistant');

    // Initialize Sidebar
    var sideObj = new ej.navigations.Sidebar({
        width: "260px",
        target: ".ai-assistant",
        position: 'Left',
        enableDock: true,
        dockSize: "72px"
    });
    sideObj.appendTo("#defaultSidebar");

    // Initialize Profile Menu
    new ej.splitbuttons.DropDownButton({
        content: 'Profile',
        items: [
            { text: 'Settings', iconCss: 'e-icons e-settings' },
            { separator: true },
            { text: 'Log out', iconCss: 'e-icons e-export' }
        ],
        iconCss: 'e-icons e-user',
        cssClass: 'sign-in-button',
    }, '#ddMenu');

    // Initialize Toolbar
    var toolbarObj = new ej.navigations.Toolbar({
        items: [
            {
                prefixIcon: 'e-icons e-assistview-icon', tooltipText: 'Ai-Assistant',
            },
            {
                prefixIcon: 'e-icons e-menu', tooltipText: 'Toggle sidebar', align: 'Right',
                click: function () {
                    // Toggle the sidebar
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
    toolbarObj.appendTo('#toolbar');

    InitializingApp();

    var listData = getLeftPaneData();

    var grpListObj = new ej.lists.ListView({
        dataSource: listData,
        fields: { groupBy: 'category', id: 'id', text: 'text' },
        template: '<div class="chat-item"><div class="chat-title">${text}</div></div>',
        select: function (args) {
            if (args.event) {
                selectedConvId = args.data.id;
                updateAIAssistViewData(args.data.id);
                updateBannerStyle();
            }
        }
    });
    grpListObj.appendTo('#listview-grp');

    function getDate() {
        return Date.now();
    }

    function getDateFormat(date) {
        const today = new Date(date);
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
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

    async function execute(prompt) {
        try {
            setTimeout(() => {
                if (!result) {
                    aiAssistViewInst.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
                }
            }, 2000);

            aiAssistViewInst.promptSuggestions = [];
            var finalResult = [];
            var result = "";

            setTimeout(async () => {
                let suggestionsObj = defaultResponses.find(resp => resp.prompt === prompt);
                suggestionResult = suggestionsObj.suggestions || defaultPromptSuggestions;

                for (var i = 0; i < suggestionResult.length; i++) {
                    if (suggestionResult[i]) {
                        finalResult.push(suggestionResult[i].replace("- ", "").replace("* ", "").trim());
                    }
                }
            }, 1000);

            setTimeout(async () => {
                // result = await GetResult(prompt);
                // // var converter = new showdown.Converter();
                let responseObj = defaultResponses.find(resp => resp.prompt === prompt);
                result = responseObj.response;
                aiAssistViewInst.addPromptResponse(result);
                aiAssistViewInst.promptSuggestions = finalResult;               
                updateBannerStyle();
                checkAndUpdateLocalStorage(prompt);
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
            }, 1000);

        } catch (error) {
            var converter = new showdown.Converter();
            result = converter.makeHtml(error);
            aiAssistViewInst.addPromptResponse("I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.");
            aiAssistViewInst.promptSuggestions = [];
        }
        if (!grpListObj.dataSource || grpListObj.dataSource.length === 0) {
            loadNewAIAssist();
            return;
        }
    }

    function checkInitialLocalStorage(isClear) {
        var aiAssistView = localStorage.getItem('aiassist-view');
        if (!aiAssistView | isClear) {
            var data = {};
            localStorage.setItem('aiassist-view', JSON.stringify(data));
        }
    }

    function checkAndUpdateLocalStorage(prompt) {
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView);
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
            // Update existing conversation
            var convData = appData[selectedConvId];
            var tName = convData.name;

            // Update the name for "New Conversation" entries
            if (convData.name === convData.name) {

                // Update the conversation name in the sidebar list
                var listItems = grpListObj.dataSource;
                for (var k = 0; k < listItems.length; k++) {
                    if (listItems[k].id === selectedConvId) {
                        listItems[k].text = tName;
                        break;
                    }
                }
                grpListObj.dataBind();
            }

            convData.prompts = prompts;
            convData.promptSuggestions = pSuggestions;

            // Save the updated conversation to localStorage
            localStorage.setItem('aiassist-view', JSON.stringify(appData));
        } else {
            selectedConvId = curConvDate;
            //var tName = prompt.slice(0, 40).trim();///////////////////////////
            var tName = "New Conversation";
            var convData = {
                name: tName,
                prompts: prompts,
                promptSuggestions: pSuggestions
            };
            appData[curConvDate] = convData;

            // Save updated data to localStorage
            localStorage.setItem('aiassist-view', JSON.stringify(appData));

            // Instead of adding an item directly, refresh the entire list to ensure proper ordering
            refreshConversationList();
            grpListObj.selectItem(0);
        }
    }

    function getLeftPaneData() {
        var today = getDateFormat(Date.now());
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView);
        var keys = Object.keys(appData);

        // Create array of items with their numeric IDs for proper sorting
        var items = [];
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            var numericKey = parseInt(key);
            var convData = appData[key];
            var name = convData.name.split('\n')[0];

            items.push({
                text: name,
                id: numericKey,
                numericId: numericKey, // Extra field for sorting
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
        if (aiAssistViewInst.prompts.length) {
            bannerElem.classList.remove('e-no-content');
        } else {
            bannerElem.classList.add('e-no-content');
        }
    }

    function refreshConversationList() {
        var listData = getLeftPaneData();
        // Reset the ListView with the fresh data
        grpListObj.dataSource = listData;
        grpListObj.dataBind();
    }

    function updateAIAssistViewData(id) {
        if (id) {
            var aiAssistView = localStorage.getItem('aiassist-view');
            var appData = JSON.parse(aiAssistView);
            var convData = appData[id];

            aiAssistViewInst.prompts = convData.prompts;
            aiAssistViewInst.promptSuggestions = convData.promptSuggestions;
        } else {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = defaultPromptSuggestions;
        }
    }

    function loadNewAIAssist() {
        selectedConvId = "";
        isFirstPrompt = true;

        if (grpListObj.dataSource.length != 0) {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = defaultPromptSuggestions;
        }

        var curConvDate = getDate();
        var tName = "New Conversation";
        // Add entry to localStorage
        var aiAssistView = localStorage.getItem('aiassist-view');
        var appData = JSON.parse(aiAssistView);

        var convData = {
            name: tName,
            prompts: [],
            promptSuggestions: defaultPromptSuggestions
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
        // Add click event for reset button span
        document.getElementById('resetButton').addEventListener('click', function() {
            // Clear the ListView (conversation list)
            grpListObj.dataSource = [];
            grpListObj.dataBind();

            // Clear localStorage
            localStorage.setItem('aiassist-view', JSON.stringify({}));

            // Reset the current conversation
            selectedConvId = "";
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = defaultPromptSuggestions;
            updateBannerStyle();
        });
    }
};