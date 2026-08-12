import * as React from 'react';
import './text-to-speech.css';
import { SampleBase } from '../common/sample-base';
import { AIAssistViewComponent, PromptRequestEventArgs, ResponseToolbarSettingsModel, ToolbarItemClickedEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import { marked } from 'marked';
import * as data from './promptResponseData.json';

const promptResponseData = (data as any).defaultPromptResponseData || data;

export class TextToSpeech extends SampleBase<{}, {}> {

    public aiAssistViewObj: AIAssistViewComponent;
    
    private stopStreaming: boolean = false;

    private prompts = [
        {
            prompt: "What is AI?",
            response: "<div>AI stands for Artificial Intelligence, enabling machines to mimic human intelligence for tasks such as learning, problem-solving, and decision-making.</div>"
        }
    ];

    constructor(props: {}) {
        super(props);
    }

    public toolbarSettings: ToolbarSettingsModel = {
        items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
        itemClicked: (args) => this.toolbarItemClicked(args)
    };

    public responseToolbarSettings: ResponseToolbarSettingsModel = {
        items: [
            { type: 'Button', iconCss: 'e-icons e-assist-copy', tooltip: 'Copy' },
            { type: 'Button', iconCss: 'e-icons e-assist-audio', tooltip: 'Read Aloud' },
            { type: 'Button', iconCss: 'e-icons e-assist-like', tooltip: 'Like' },
            { type: 'Button', iconCss: 'e-icons e-assist-dislike', tooltip: 'Need Improvement' },
        ]
    };

    public onPromptRequest = async (args: PromptRequestEventArgs) => {
        this.stopStreaming = false;
        if (!this.aiAssistViewObj) return;
        try {
            // Simulate API call with 1.5s delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Get random response from mock data
            const randomResponse = promptResponseData[Math.floor(Math.random() * promptResponseData.length)];
            const fullResponse = randomResponse.response || 'This is a simulated response from the AI service.';
            if (!this.stopStreaming) {
                this.aiAssistViewObj.addPromptResponse(fullResponse);
            }
        } catch (error: any) {
            this.aiAssistViewObj.addPromptResponse(
                '⚠️ Something went wrong. Please try again later.'
            );
            this.stopStreaming = true;
        }
    };

    public toolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
        if (args.item.iconCss === 'e-icons e-refresh') {
            this.aiAssistViewObj.prompts = [];
            this.stopStreaming = true;
        }
    }

    public stopRespondingClick = () => {
        this.stopStreaming = true;
    };

    render() {
        return (
            <div className='control-pane'>
                <div className="control-section">
                    <div className="integration-texttospeech-section">
                        <AIAssistViewComponent id="aiAssistView" ref={(assistview) => { this.aiAssistViewObj = assistview }} prompts={this.prompts} promptRequest={this.onPromptRequest} enableStreaming={true} toolbarSettings={this.toolbarSettings} responseToolbarSettings={this.responseToolbarSettings} stopRespondingClick={this.stopRespondingClick}></AIAssistViewComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample demonstrates the integration of <code>Text-to-Speech</code> functionality with the AI AssistView component. It allows users to convert AI-generated responses into spoken audio using the browser's Web Speech API.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, the AI AssistView component is integrated with <code>Text-to-Speech</code> functionality to enable voice-based interaction with AI-generated responses.
                    </p>
                    <p>
                        The sample demonstrates the following features:
                    </p>
                    <ul>
                        <li>
                            The <code>responseToolbarSettings</code> includes a custom <code>Read Aloud</code> button that extracts plain text from the AI response and uses the browser's <code>SpeechSynthesis</code> API to vocalize it.
                        </li>
                        <li>
                            The <code>SpeechSynthesisUtterance</code> interface is used to manage speech playback, including toggling between play and stop states.
                        </li>
                        <li>
                            The <code>toolbarSettings</code> adds a right-aligned <code>Refresh</code> button to clear previous prompts.
                        </li>
                        <li>
                            Responses are streamed dynamically using the <code>addPromptResponse</code> method, and the <code>scrollToBottom</code> method ensures the latest response is always visible.
                        </li>
                        <li>
                            Markdown content is rendered using the <code>Marked</code> plugin for rich formatting in AI responses.
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}