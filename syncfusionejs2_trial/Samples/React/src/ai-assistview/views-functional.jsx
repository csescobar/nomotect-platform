import * as React from 'react';
import { useEffect, useRef } from 'react';
import { updateSampleSection } from '../common/sample-base';
import './views.css';
import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import { Button } from '@syncfusion/ej2-react-buttons';
import { TextArea } from '@syncfusion/ej2-react-inputs';
const Views = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const promptsData = [];
    const assistInstance = useRef(null);
    const footerTemplate = `<div class="custom-footer">
        <textarea id="textarea"></textarea>
        <button id="btn" style="margin-top: 10px">Generate Prompt</button>
    </div>`;
    const viewTemplate = '<div id="custom-view"></div>';
    const button = new Button({ cssClass: `generate-btn e-primary`, content: 'Generate Prompt' });
    const textareaObj = new TextArea({
        placeholder: "Enter your prompt...",
        rows: 4,
        cols: 35,
        width: '100%',
        resizeMode: 'None'
    });
    const created = () => {
        textareaObj.appendTo('#textarea');
        button.appendTo('#btn');
        button.element.addEventListener('click', () => { buttonClicked(); });
    };
    const buttonClicked = () => {
        var promptValue = textareaObj.value.trim();
        if (promptValue) {
            promptsData.unshift(promptValue);
            assistInstance.current.activeView = 1;
            assistInstance.current.dataBind();
            textareaObj.value = "";
            updateViewTemplate();
        }
        else {
            assistInstance.current.activeView = 0;
        }
    };
    const updateViewTemplate = () => {
        var viewTemplate = document.getElementById('custom-view');
        var templateItem = '';
        promptsData.forEach((prompt, index) => {
            templateItem += `
                <div class="custom-view-container">
                    <div class="prompt-header">${prompt}</div>
                    <div class="prompt-response">
                        <div class="response-text">${"For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services."}</div>
                        <button class="e-btn" id="copy-btn-${index}"><span class="e-icons e-aiassist-copy" style="padding: 4px;"></span>Copy</button>
                    </div>
                </div>
            `;
        });
        viewTemplate.innerHTML = templateItem;
        var copyButton = viewTemplate.querySelector('button');
        copyButton.addEventListener('click', () => {
            const copyButtonElement = viewTemplate.querySelector('.e-aiassist-copy');
            copyClick(copyButtonElement);
        });
    };
    const copyClick = (copyButtonEle) => {
        const textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
        navigator.clipboard.writeText(textToCopy);
        copyButtonEle.classList.remove('e-aiassist-copy');
        copyButtonEle.classList.add('e-aiassist-check');
        setTimeout(() => {
            copyButtonEle.classList.remove('e-aiassist-check');
            copyButtonEle.classList.add('e-aiassist-copy');
        }, 1000);
    };
    return (<div className='control-pane'>
            <div className="control-section">
                <div className="views-container"> 
                    <AIAssistViewComponent id="aiAssist_views" footerTemplate={footerTemplate} ref={assistInstance} created={created}>
                        <ViewsDirective>
                            <ViewDirective type='Assist' name='Prompt'></ViewDirective>
                            <ViewDirective type='Custom' name='Response' iconCss='e-icons e-comment-show' viewTemplate={viewTemplate}></ViewDirective>
                        </ViewsDirective>
                    </AIAssistViewComponent>
                </div>
            </div>

            <div id="action-description">
                <p>This sample showcases the AIAssistView component with all of its default combinations.</p>
            </div>
            <div id="description">
                <p>This sample showcases the AIAssistView component with its prompts, promptSuggestions and promptRequest.</p>
            </div>
        </div>);
};
export default Views;
