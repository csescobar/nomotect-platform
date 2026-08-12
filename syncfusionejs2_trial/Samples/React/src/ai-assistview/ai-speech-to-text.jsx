import * as React from 'react';
import './ai-speech-to-text.css';
import { SampleBase } from '../common/sample-base';
import { getAIResponse } from '../common/ai-service';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
export class SpeechToText extends SampleBase {
    aiAssistViewObj;
    speechToTextObj;
    abortController;
    constructor(props) {
        super(props);
    }
    toolbarSettings = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: (args) => this.toolbarItemClicked(args)
    };
    footerToolbarSettings = {
        toolbarPosition: 'Bottom',
        items: [
            { iconCss: 'e-icons e-assist-send', align: 'Right' },
            { iconCss: 'e-icons e-assist-attachment-icon', align: 'Left', tooltip: 'Attach File' },
            { iconCss: 'e-icons e-assist-speech-to-text', align: 'Left' }
        ]
    };
    enableAttachments = true;
    attachmentSettings = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    speechToTextSettings = {
        enable: true
    };
    bannerTemplate = () => {
        return (<div className="banner-info">
            <div className="e-icons e-listen-icon"></div>
            <h3>Speech To Text</h3>
            <i>Click the below mic-button to convert your voice to text.</i>
        </div>);
    };
    onPromptRequest = async (args) => {
        if (!args?.prompt?.trim() || !this.aiAssistViewObj)
            return;
        this.abortController = new AbortController();
        try {
            const response = await getAIResponse(args, this.abortController);
            if (response && typeof response === 'string') {
                this.aiAssistViewObj.addPromptResponse(response);
            }
        }
        catch (error) {
            console.error('Error getting AI response:', error);
            this.aiAssistViewObj.addPromptResponse('For real-time prompt processing, connect the AI AssistView control to your preferred AI service.');
        }
    };
    toolbarItemClicked = (args) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            this.aiAssistViewObj.prompts = [];
        }
    };
    stopRespondingClick = () => {
        this.abortController?.abort();
    };
    render() {
        return (<div className='control-pane'>
                <div className="control-section">
                    <div className="integration-speech-to-text-assist-section">
                        <AIAssistViewComponent id="aiAssistView" ref={(assistview) => { this.aiAssistViewObj = assistview; }} promptRequest={this.onPromptRequest} bannerTemplate={this.bannerTemplate} enableStreaming={true} toolbarSettings={this.toolbarSettings} stopRespondingClick={this.stopRespondingClick} footerToolbarSettings={this.footerToolbarSettings} enableAttachments={this.enableAttachments} attachmentSettings={this.attachmentSettings} speechToTextSettings={this.speechToTextSettings}></AIAssistViewComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample demonstrates the integration of <code>Speech-to-Text</code> functionality with the AI AssistView component. It allows users to convert spoken input into text using the device's microphone and the browser's <code>SpeechRecognition</code> API.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, the AI AssistView component is integrated with the built-in <code>SpeechToText</code> component to enable voice-based interaction.
                    </p>
                    <p>
                        The sample demonstrates the following features:
                    </p>
                    <ul>
                        <li>
                            The <code>footerToolbarSettings</code> to customize the footer options with speech to text, attachments and a send icon.
                        </li>
                        <li>
                            The <code>speechToTextSettings</code> adds the speech to text button at the footer to captures voice input and transcribes it into text.
                        </li>
                        <li>
                            The <code>attachmentSettings</code> to allow file uploads for the attached files.
                        </li>
                        <li>
                            The <code>toolbarSettings</code> adds a right-aligned <code>Refresh</code> button to clear previous prompts.
                        </li>
                        <li>
                            Responses are streamed dynamically using the <code>addPromptResponse</code> method for a real-time experience.
                        </li>
                        <li>
                            Markdown content in the response is rendered using the <code>Marked</code> plugin.
                        </li>
                    </ul>
                </div>
            </div>);
    }
}
