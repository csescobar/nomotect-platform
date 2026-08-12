
import { AIAssistView, AssistViewModel, PromptModel } from "@syncfusion/ej2-interactive-chat";
import { Button } from "@syncfusion/ej2-buttons";
import { TextArea } from "@syncfusion/ej2-inputs";

let promptsData: PromptModel[] = [];

let assistViews: AssistViewModel[] = [
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
let textareaObj: TextArea = new TextArea({
    placeholder: "Enter your prompt...",
    rows: 4,
    cols: 35,
    width: '100%',
    resizeMode: 'None'
});

let button: Button = new Button({ cssClass: `generate-btn e-primary`, content:'Generate Prompt'});
button.element.onclick = () => {
    let promptValue = textareaObj.value.trim();
    if(promptValue) {
        defaultAiAssistView.activeView = 1;
        defaultAiAssistView.dataBind();
        textareaObj.value = "";
        updateViewTemplate();
    }
    else {
        defaultAiAssistView.activeView = 0;
    }
}

let defaultAiAssistView: AIAssistView = new AIAssistView({
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

function updateViewTemplate() {
    let viewTemplate = document.getElementById('custom-view');
    let templateItem = '';
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
    let copyButton: Element = viewTemplate.querySelector('.e-aiassist-copy');
    copyButton.addEventListener('click', () => {
        copyClick(copyButton);
    });
}
function copyClick(copyButtonEle: Element) {
    const textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
    navigator.clipboard.writeText(textToCopy);
    copyButtonEle.classList.remove('e-aiassist-copy');
    copyButtonEle.classList.add('e-aiassist-check');
    setTimeout(() => {
        copyButtonEle.classList.remove('e-aiassist-check');
        copyButtonEle.classList.add('e-aiassist-copy');
    }, 1000);
}
