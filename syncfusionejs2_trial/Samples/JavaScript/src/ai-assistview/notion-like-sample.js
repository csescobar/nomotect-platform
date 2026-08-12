this.default = function() {

    var sessionChats = [];
    var activeSessionId = null;
    var isFirstSessionAdded = false;
    var webIconCheckedState = true;
    var editIconCheckedState = true;
    var sideObj;
    var dialogInst;
    var historyddbtnObj;
    var btnObj;
    var toastObj;
    var settingsBtnObj;
    var currentMode = 'Floating';

    var defaultAIAssistView = new ej.interactivechat.AIAssistView({
        promptSuggestions: window.notionSuggestions,
        promptSuggestionItemTemplate: suggestionItemContent,
        promptRequest: onPromptRequest,
        bannerTemplate: function () {
            return `<div class="banner-content">
            <div class="e-icons e-assistview-icon"></div>
            <h3>How can I help you today ?</h3>
        </div>`;
        },
        created: created,
        toolbarSettings: {
            items: [
            {
                iconCss: 'e-icons e-export',
                align: 'Right',
                tooltip: 'Share Chat',
            },
            {
                iconCss: 'e-icons e-history',
                align: 'Right',
                tooltip: 'Chat History',
                cssClass: 'history-icon',
            },
            {
                iconCss: 'e-icons e-edit-notes',
                align: 'Right',
                tooltip: 'Start New chat',
            },
            {
                iconCss: 'e-icons e-resize',
                align: 'Right',
                tooltip: 'Switch Chat Mode',
                cssClass: 'screen-resizer',
            },
            {
                iconCss: `e-icons e-horizontal-line`,
                align: 'Right',
                tooltip: 'Hide Chat',
            },
            ],
            itemClicked: toolbarItemClicked,
        },
        footerToolbarSettings: {
            toolbarPosition: 'Bottom',
            items: [
            {
                iconCss: 'e-icons e-assist-attachment-icon',
                align: 'Left',
                tooltip: 'Attach File',
            },
            {
                iconCss: 'e-icons e-settings',
                align: 'Left',
                tooltip: 'Settings',
                cssClass: 'settings-icon',
            },
            {
                iconCss: 'e-icons e-edit',
                align: 'Left',
                tooltip: 'Edit access',
                visible: false,
            },
            {
                iconCss: 'e-icons e-time-zone',
                align: 'Left',
                tooltip: 'Web access',
                visible: false,
            },
            {
                align: 'Right',
                text: 'Auto',
                template: '<button id="custombtn">Auto</button>',
            },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Right' },
            { iconCss: 'e-icons e-assist-send', align: 'Right' },
            ],
            itemClick: footerToolbarItemClicked
        },
        responseToolbarSettings: {
            items: [
            { iconCss: 'e-icons e-assist-copy' },
            { iconCss: 'e-icons e-assist-like' },
            { iconCss: 'e-icons e-assist-dislike' },
            { iconCss: 'e-icons e-assist-audio' },
            ],
        },
        enableAttachments: true,
        attachmentSettings: {
            saveUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Save',
            removeUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
        },
        speechToTextSettings: {
            enable: true
        }
    });
    defaultAIAssistView.appendTo('#aiAssistView');

    dialogInst = new ej.popups.Dialog({
        target: '.notes-page',
        position: { X: 'right', Y: 'bottom' },
        animationSettings: { effect: 'FadeZoom' },
        width: '500px',
        visible: false,
        cssClass: 'custom-dialog',
    });
    dialogInst.appendTo('#dialogElem');

    var fabInst = new ej.buttons.Fab({
        iconCss: 'e-icons e-magic-wand',
        target: '.notes-page'
    });
    fabInst.appendTo('#fabElem');

    fabInst.element.onclick = () => {
        toggleBackgroundState(true);
        toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
        dialogOpenClose();
        currentMode = 'Floating';
        fabInst.element.style.display = 'none';
    };

    function dialogOpenClose() {
        dialogInst.visible = !dialogInst.visible;
    }
    function onPromptRequest(args) {
        defaultAIAssistView.promptSuggestions = [];
        setTimeout(() => {
            var defaultResponse =
            'For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';

            defaultAIAssistView.addPromptResponse(defaultResponse);
            if (!isFirstSessionAdded && !activeSessionId) {
            createNewSession(true);
            isFirstSessionAdded = true;
            }
            defaultAIAssistView.promptSuggestions = [];
        }, 2000);
    }

    function toolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-edit-notes') {
            createNewSession();
            defaultAIAssistView.promptSuggestions = window.notionSuggestions;
        } else if (args.item.iconCss === 'e-icons e-horizontal-line') {
            document
            .querySelector('#dialogElem')
            .appendChild(document.getElementById('assistviewWrapper'));
            sideObj.hide();
            dialogInst.hide();
            toggleBackgroundState(true);
            fabInst.element.style.display = '';
        } else if (args.item.iconCss === 'e-icons e-export') {
            toastObj.show();
        }
    }

    function footerToolbarItemClicked(args) {
        if (args.item.iconCss === 'e-icons e-edit' || args.item.iconCss === 'e-icons e-time-zone') {
                settingsBtnObj.toggle();
        }
    }

    function moveAssistview(mode) {
        if (currentMode === mode) {
            return;
        }
        currentMode = mode;
        var wrapper = document.getElementById('assistviewWrapper');
        var fs = document.getElementById('fullscreenContainer');
        dialogInst.hide();
        sideObj.hide();
        fs.style.display = 'none';

        switch (mode) {
            case 'Sidebar':
            sideObj.show();
            toggleBackgroundState(true);
            sideObj.element.appendChild(wrapper);
            toggleIconClass('e-horizontal-line', 'e-chevron-right-double');

            break;

            case 'Floating':
            dialogInst.show();
            document.querySelector('#dialogElem').appendChild(wrapper);
            toggleBackgroundState(true);
            toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
            break;

            case 'Full screen':
            fs.style.display = 'block';
            fs.appendChild(wrapper);
            toggleBackgroundState(false);
            toggleIconClass('e-chevron-right-double', 'e-horizontal-line');
            break;
        }
    }

    function toggleIconClass(selectorIconClass, replaceIconClass) {
        var icon = defaultAIAssistView.toolbarHeader.querySelector(
            `.${selectorIconClass}`
        );
        if (icon) {
            icon.className = `e-icons ${replaceIconClass}`;
        }
    }

    function created() {
        var items = [
            {
                text: 'Auto',
                iconCss: 'e-icons e-assistview-icon',
            },
            {
                text: 'Sonet 4.6',
                iconCss: 'model-icon model-sonet',
            },
            {
                text: 'Opus 4.6',
                iconCss: 'model-icon model-opus',
            },
            {
                text: 'Gemini 3.1 Pro',
                iconCss: 'model-icon model-gemini',
            },
            {
                text: 'GPT 5.2',
                iconCss: 'model-icon model-gpt',
            },
        ];
        var currentModel = 'Auto';
        btnObj = new ej.splitbuttons.DropDownButton({
            items: items,
            cssClass: 'e-caret-hide e-flat',
            iconCss: 'e-icons e-assistview-icon',
            beforeItemRender: function (args) {
                if (currentModel === args.item.text) {
                    args.element.classList.add('e-selected');
                }
            },
            select: function (args) {
                currentModel = args.item.text;
                btnObj.content = args.item.text;
                updateModelIcon(args.item.text);
            },
        });
        btnObj.appendTo('#custombtn');

        var settingsItems = [
            {
                text: 'Can make changes',
                iconCss: 'e-icons e-edit',
                id: 'edit'
            },
            {
                text: 'Web access',
                iconCss: 'e-icons e-time-zone',
                id: 'web-access'
            },
            {
                text: 'Help Center',
                iconCss: 'e-icons e-reading-view',
                id: 'help-center'
            },
        ];

        settingsBtnObj = new ej.splitbuttons.DropDownButton({
            items: settingsItems,
            cssClass: 'e-caret-hide e-flat',
            popupWidth: '220px',
            itemTemplate: function (data) {
                if (data.text !== 'Help Center') {
                    return `
                    <div class="settings-item">
                    <span class="e-menu-icon ${data.iconCss}"></span>
                    <span class="custom-class">${data.text}</span>
                    <input
                        type="checkbox"
                        class="settings-switch"
                        id="settings-switch-${data.id}"
                    />
                    </div>`;
                }
                return `
                <div class="settings-item">
                    <span class="e-menu-icon ${data.iconCss}"></span>
                    <span class="custom-class">${data.text}</span>
                </div>`;
            },
            open: onSettingsDropdownCreated,
        });
        settingsBtnObj.appendTo('.settings-icon');

        var screenTypes = [
            {
                text: 'Sidebar',
            },
            {
                text: 'Floating',
            },
            {
                separator: true,
            },
            {
                text: 'Full screen',
            },
        ];

        var screenddbtn = new ej.splitbuttons.DropDownButton({
            items: screenTypes,
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: function (args) {
                if (currentMode === args.item.text) {
                    args.element.classList.add('e-selected');
                }
                },
                select: function (args) {
                moveAssistview(args.item.text);
            }
        });
        screenddbtn.appendTo('.screen-resizer');

        historyddbtnObj = new ej.splitbuttons.DropDownButton({
            items: [
            {
                text: 'No Chat Histroy',
            },
            ],
            cssClass: 'e-caret-hide e-flat',
            beforeItemRender: function (args) {
                if (activeSessionId === args.item.id) {
                    args.element.classList.add('e-selected');
                }
                },
                select: function (args) {
                if (args.item.id) {
                    loadSession(args.item.id);
                }
            }
        });
        historyddbtnObj.appendTo('.history-icon');

        sideObj = new ej.navigations.Sidebar({
            target: '.notes-page',
            width: '350px',
            position: 'Right',
        });
        sideObj.appendTo('#notionSidebar');
        sideObj.hide();

        toastObj = new ej.notifications.Toast({
            content: 'Share chat option is clicked !',
            target: document.body,
            position: { X: 'Right', Y: 'Top' },
            showCloseButton: true
        });
        toastObj.appendTo('#toastTarget');
    }

    function onSettingsDropdownCreated() {
        settingsBtnObj.items.forEach((item) => {
            var isChecked = false;
            if (item.text === 'Help Center') {
                return;
            } else if (item.id === 'edit') {
                isChecked = editIconCheckedState;
            } else if (item.id === 'web-access') {
                isChecked = webIconCheckedState;
            }
            var switchElem = document.getElementById(`settings-switch-${item.id}`);
            if (!switchElem) return;
            new ej.buttons.Switch({
                checked: isChecked,
                change: function (args) {
                    toggleSwitch(args, item.text);
                },
            }).appendTo(switchElem);
        });
    }
    
    function toggleBackgroundState(show) {
        var notionContainer = document.querySelector('.notes-app-container');
        if (notionContainer) {
            hiddenClass(notionContainer, show);
        }
    }

    function hiddenClass(element, show){
        show ? element.classList.remove('e-hidden') : element.classList.add('e-hidden');
    }

    function toggleSwitch(args, text) {
        var visibilty = !args.checked;
        if (text === 'Can make changes') {
            editIconCheckedState = !visibilty;
            var editIcon = defaultAIAssistView.footerToolbarEle.element.querySelector('.e-edit').closest('.e-toolbar-item');
            if (editIcon) {
                hiddenClass(editIcon, visibilty);
            }
        } else if (text === 'Web access') {
            webIconCheckedState = !visibilty;
            var webIcon = defaultAIAssistView.footerToolbarEle.element.querySelector('.e-time-zone').closest('.e-toolbar-item');
            if (webIcon) {
                hiddenClass(webIcon, visibilty);
            }
        }
    }

    function suggestionItemContent(ctx) {
        var iconClass = window.iconMapByIndex[ctx.index] || '';
        return `
        <div class="suggestion-item active">
                <span class="${iconClass} suggestion-icon"></span>
                <span class="assist-suggestion-content">
                ${ctx.promptSuggestion}
                </span>
            </div>
        `;
    }

    function updateModelIcon(modelName) {
        btnObj.iconCss = `model-icon ${window.modelIcons[modelName]}`;
        btnObj.dataBind();
    }

    function persistActiveSession() {
        if (!activeSessionId) return;

        var session = sessionChats.find((s) => s.id === activeSessionId);
        if (!session) return;

        session.prompts = defaultAIAssistView.prompts;
        }

    function createNewSession(isAuto = false) {
        var prompts = defaultAIAssistView.prompts;

        if (!prompts || prompts.length === 0) {
            activeSessionId = null;
            defaultAIAssistView.prompts = [];
            defaultAIAssistView.dataBind();
            return;
        }

        if (activeSessionId) {
            persistActiveSession();
        } else {
            var session = {
                id: Date.now(),
                title: prompts[0] ? prompts[0].prompt : 'New Chat',
                prompts: prompts,
            };

            sessionChats.push(session);
            activeSessionId = session.id;
            updateHistoryDropdown();
        }

        if (!isAuto) {
            activeSessionId = null;
            defaultAIAssistView.prompts = [];
            defaultAIAssistView.dataBind();
        }
    }

    function updateHistoryDropdown() {
        var items = sessionChats.map((session) => ({
            text:
            session.title.length > 30
                ? session.title.substring(0, 30) + '...'
                : session.title,
            id: session.id,
        }));

        historyddbtnObj.items = items.length ? items : [{ text: 'No Chat History' }];

        historyddbtnObj.dataBind();
    }

    function ensureCurrentChatIsSaved() {
        var prompts = defaultAIAssistView.prompts;
        if (!prompts || prompts.length === 0) {
            return;
        }
        if (activeSessionId) {
            persistActiveSession();
            return;
        }
        var session = {
            id: Date.now(),
            title: prompts[0] ? prompts[0].prompt : 'New Chat',
            prompts: prompts,
        };
        sessionChats.push(session);
        updateHistoryDropdown();
    }

    function loadSession(sessionId) {
        if (sessionId === activeSessionId) return;
        ensureCurrentChatIsSaved();
        const session = sessionChats.find((s) => s.id === sessionId);
        if (!session) return;
        activeSessionId = sessionId;
        defaultAIAssistView.prompts = session.prompts;
        defaultAIAssistView.promptSuggestions = [];
        defaultAIAssistView.dataBind();
    }

};