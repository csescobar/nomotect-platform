import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { AIAssistViewComponent, PromptModel, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-interactive-chat';
import { SampleBase } from '../common/sample-base';
import './views.css';
import { Button } from '@syncfusion/ej2-react-buttons';
import { TextArea } from '@syncfusion/ej2-react-inputs';

export class Views extends SampleBase<{}, {}> {
  promptsData: PromptModel[] = [];

  assistInstance: AIAssistViewComponent;

  footerTemplate: string = `<div class="custom-footer">
    <textarea id="textarea"></textarea>
    <button id="btn" style="margin-top: 10px">Generate Prompt</button>
  </div>`;

  viewTemplate: string = '<div id="custom-view"></div>';

  button: Button = new Button({ cssClass: `generate-btn e-primary`, content:'Generate Prompt'});

  textareaObj: TextArea = new TextArea({
    placeholder: "Enter your prompt...",
    rows: 4,
    cols: 35,
    width: '100%',
    resizeMode: 'None'
  });

  created =() => {
    this.textareaObj.appendTo('#textarea');
    this.button.appendTo('#btn');
    this.button.element.addEventListener('click', () => { this.buttonClicked(); });
  };

  buttonClicked = () => {
    var promptValue = this.textareaObj.value.trim();
    if(promptValue) {
        this.promptsData.unshift(promptValue as PromptModel);
        this.assistInstance.activeView = 1;
        this.assistInstance.dataBind();
        this.textareaObj.value = "";
        this.updateViewTemplate();
    }
    else {
      this.assistInstance.activeView = 0;
    }
  };

  updateViewTemplate = () => {
    var viewTemplate = document.getElementById('custom-view');
    var templateItem = '';
    this.promptsData.forEach((prompt, index)=>{
        templateItem += `
            <div class="custom-view-container">
                <div class="prompt-header">${prompt}</div>
                <div class="prompt-response">
                    <div class="response-text">${"For real-time prompt processing, connect the AI AssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services."}</div>
                    <button class="e-btn" id="copy-btn-${index}"><span class="e-icons e-aiassist-copy" style="padding: 4px;"></span>Copy</button>
                </div>
            </div>
        `
    });
    viewTemplate.innerHTML = templateItem;
    var copyButton = viewTemplate.querySelector('button');
    copyButton.addEventListener('click', () => {
      const copyButtonElement = viewTemplate.querySelector('.e-aiassist-copy');
      this.copyClick(copyButtonElement);
    });
  };

  copyClick = (copyButtonEle: Element) => {
    const textToCopy = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services.";
    navigator.clipboard.writeText(textToCopy);
    copyButtonEle.classList.remove('e-aiassist-copy');
    copyButtonEle.classList.add('e-aiassist-check');
    setTimeout(() => {
        copyButtonEle.classList.remove('e-aiassist-check');
        copyButtonEle.classList.add('e-aiassist-copy');
    }, 1000);
  };
  render() {
    
    return (
      <div className='control-pane'>
            <div className="control-section">
                <div className="views-container"> 
                    <AIAssistViewComponent id="aiAssist_views" footerTemplate={this.footerTemplate} ref={aiassistView => (this.assistInstance = aiassistView)} created={this.created}>
                      <ViewsDirective>
                        <ViewDirective type='Assist' name='Prompt'></ViewDirective>
                        <ViewDirective type='Custom' name='Response' iconCss='e-icons e-comment-show' viewTemplate={this.viewTemplate}></ViewDirective>
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
      </div>
    )
  }
}
