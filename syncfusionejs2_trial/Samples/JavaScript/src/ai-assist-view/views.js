this.default = function() {
    promptsData = [];

    var assistViews = [
        {
            type: 'Assist',
            name: "Prompt"
        },
        {
            type: 'Custom',
            name: 'Response',
            iconCss: 'e-icons e-comment-show',
            viewTemplate: '<div id="custom-view"></div>'
        }
    ];
    var textareaObj = new ej.inputs.TextArea({
        placeholder: "Enter your prompt...",
        rows: 4,
        cols: 35,
        width: '100%',
        resizeMode: 'None'
    });
    var button = new ej.buttons.Button({ cssClass: `generate-btn e-primary`, content:'Generate Prompt'});

    var defaultAiAssistView = new ej.interactivechat.AIAssistView({
        created: () => {
            textareaObj.appendTo('#textarea');
            button.appendTo('#btn');
        },
        views: assistViews,
        footerTemplate: `<div class="custom-footer">
            <textarea id="textarea"></textarea>
            <button id="btn" style="margin-top: 10px">Generate Prompt</button>
        </div>`
    });
    defaultAiAssistView.appendTo('#aiAssist_views');

    button.element.onclick = function () {
        var promptValue = textareaObj.value.trim();
        if(promptValue) {
            promptsData.unshift(promptValue);
            defaultAiAssistView.activeView = 1;
            defaultAiAssistView.dataBind();
            textareaObj.value = "";
            updateViewTemplate();
        }
        else {
            defaultAiAssistView.activeView = 0;
        }
    }

    function updateViewTemplate() {
        var viewTemplate = document.getElementById('custom-view');
        var templateItem = '';
        promptsData.forEach((prompt, index)=>{
            templateItem += `
                <div class="custom-view-container">
                    <div class="prompt-header">${prompt}</div>
                    <div class="prompt-response">
                        <div class="response-text">${"For real-time prompt processing, connect the AI AssistView control to your preferred AI service, such as OpenAI or Azure Cognitive Services."}</div>
                        <button class="e-btn" id="copy-btn-${index}"><span class="e-icons e-aiassist-copy" style="padding: 4px;"></span>Copy</button>
                    </div>
                </div>
            `
        });
        viewTemplate.innerHTML = templateItem;
        var copyButton = viewTemplate.querySelector('button');
        copyButton.addEventListener('click', function() {
            copyClick(viewTemplate.querySelector('.e-aiassist-copy'));
        });
    }
    function copyClick(copyButtonEle) {
        const textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
        navigator.clipboard.writeText(textToCopy);
        copyButtonEle.classList.remove('e-aiassist-copy');
        copyButtonEle.classList.add('e-aiassist-check');
        setTimeout(() => {
            copyButtonEle.classList.remove('e-aiassist-check');
            copyButtonEle.classList.add('e-aiassist-copy');
        }, 1000);
    }
};