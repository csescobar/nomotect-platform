import * as React from 'react';
import { AIAssistViewComponent, AIAssistView, AssistThinking } from '@syncfusion/ej2-react-interactive-chat';
import { SampleBase } from '../common/sample-base';
import './thinking.css';
AIAssistView.Inject(AssistThinking);
export class Thinking extends SampleBase {
    assistInstance;
    bannerTemplate = `<div class="banner-content">
        <div class="e-icons e-brain"></div>
        <h3>💭 Thinking Support</h3>
        <i>Break down complex problems and think through decisions.</i>
    </div>`;
    promptSuggestions = [
        'Build a modern dashboard for my business',
        'Create a login page with validation',
        'Make a task management board'
    ];
    promptRequest = (args) => {
        const assistView = this.assistInstance;
        // Step 1
        setTimeout(() => {
            assistView.addPromptResponse({
                blocks: [
                    {
                        blockType: 'thinking',
                        title: 'Understanding your request',
                        collapsible: true,
                        collapsed: false,
                        isActive: true,
                        stages: [
                            {
                                id: 'step1',
                                status: 'inprogress',
                                content: 'Identified request as a business dashboard requirement.'
                            }
                        ]
                    }
                ]
            }, false);
            // Step 2
            setTimeout(() => {
                assistView.addPromptResponse({
                    blocks: [
                        {
                            blockType: 'thinking',
                            title: 'Understanding your request',
                            collapsible: true,
                            collapsed: true,
                            isActive: false,
                            stages: [
                                {
                                    id: 'step1',
                                    status: 'completed',
                                    content: 'Identified request as a business dashboard requirement.'
                                }
                            ]
                        },
                        {
                            blockType: 'thinking',
                            title: 'Selecting UI components',
                            collapsible: true,
                            collapsed: false,
                            isActive: true,
                            stages: [
                                {
                                    id: 'step2',
                                    status: 'inprogress',
                                    iconCss: 'e-icons e-check',
                                    content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                    editableContext: [
                                        {
                                            type: 'tool',
                                            name: 'Charts',
                                            value: 'Analytics visualization'
                                        },
                                        {
                                            type: 'tool',
                                            name: 'Grid',
                                            value: 'Tabular data'
                                        },
                                        {
                                            type: 'tool',
                                            name: 'Cards',
                                            value: 'KPI metrics'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, false);
                // Step 3
                setTimeout(() => {
                    assistView.addPromptResponse({
                        blocks: [
                            {
                                blockType: 'thinking',
                                title: 'Understanding your request',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step1',
                                        status: 'completed',
                                        content: 'Identified request as a business dashboard requirement.'
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Selecting UI components',
                                collapsible: true,
                                collapsed: true,
                                isActive: false,
                                stages: [
                                    {
                                        id: 'step2',
                                        status: 'completed',
                                        iconCss: 'e-icons e-check',
                                        content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                        editableContext: [
                                            {
                                                type: 'tool',
                                                name: 'Charts',
                                                value: 'Analytics visualization'
                                            },
                                            {
                                                type: 'tool',
                                                name: 'Grid',
                                                value: 'Tabular data'
                                            },
                                            {
                                                type: 'tool',
                                                name: 'Cards',
                                                value: 'KPI metrics'
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                blockType: 'thinking',
                                title: 'Designing layout structure',
                                collapsible: true,
                                collapsed: false,
                                isActive: true,
                                stages: [
                                    {
                                        id: 'step3',
                                        status: 'inprogress',
                                        iconCss: 'e-icons e-check',
                                        content: 'Created responsive {0} layout structure.',
                                        editableContext: [
                                            {
                                                type: 'context',
                                                name: '12-column',
                                                value: '12-column grid'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }, false);
                    // Step 4 (FINAL RESPONSE)
                    setTimeout(() => {
                        assistView.addPromptResponse({
                            blocks: [
                                {
                                    blockType: 'thinking',
                                    title: 'Understanding your request',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step1',
                                            status: 'completed',
                                            content: 'Identified request as a business dashboard requirement.'
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Selecting UI components',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step2',
                                            status: 'completed',
                                            iconCss: 'e-icons e-check',
                                            content: 'Selected {0}, {1}, and {2} for dashboard layout.',
                                            editableContext: [
                                                {
                                                    type: 'tool',
                                                    name: 'Charts',
                                                    value: 'Analytics visualization'
                                                },
                                                {
                                                    type: 'tool',
                                                    name: 'Grid',
                                                    value: 'Tabular data'
                                                },
                                                {
                                                    type: 'tool',
                                                    name: 'Cards',
                                                    value: 'KPI metrics'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Designing layout structure',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step3',
                                            status: 'completed',
                                            iconCss: 'e-icons e-check',
                                            content: 'Created responsive {0} layout structure.',
                                            editableContext: [
                                                {
                                                    type: 'context',
                                                    name: '12-column',
                                                    value: '12-column grid'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    blockType: 'thinking',
                                    title: 'Finalizing output',
                                    collapsible: true,
                                    collapsed: true,
                                    isActive: false,
                                    stages: [
                                        {
                                            id: 'step4',
                                            status: 'completed',
                                            iconCss: 'e-icons e-check',
                                            content: 'Generated final dashboard structure successfully.'
                                        }
                                    ]
                                }
                            ],
                            response: "<h2>Business Dashboard Structure</h2>" +
                                "<p><strong>Generated successfully.</strong></p>" +
                                "<div class='section'>" +
                                "<h3>Features Included:</h3>" +
                                "<ul>" +
                                "<li>Key performance indicator cards</li>" +
                                "<li>Revenue and sales charts</li>" +
                                "<li>Recent activity data grid</li>" +
                                "<li>Responsive layout for all devices</li>" +
                                "<li>Clean navigation structure</li>" +
                                "</ul>" +
                                "</div>" +
                                "<div class='section'>" +
                                "<h3>Recommended Syncfusion Components:</h3>" +
                                "<ul>" +
                                "<li>Chart</li>" +
                                "<li>Grid</li>" +
                                "<li>Card</li>" +
                                "<li>Sidebar</li>" +
                                "<li>DropDownList</li>" +
                                "</ul>" +
                                "</div>"
                        }, true);
                        assistView.promptSuggestions = [
                            'Build a modern dashboard for my business',
                            'Create a login page with validation',
                            'Make a task management board'
                        ];
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    };
    render() {
        return (<div className='control-pane'>
                <div className="control-section">
                    <div className="thinking-aiassistview">
                        <AIAssistViewComponent id="aiAssistView" bannerTemplate={this.bannerTemplate} promptSuggestions={this.promptSuggestions} promptRequest={this.promptRequest} ref={aiassistView => (this.assistInstance = aiassistView)}>
                        </AIAssistViewComponent>
                    </div>
                </div>

                <div id="action-description">
                    <p>This sample demonstrates the thinking support of the AI AssistView control.</p>
                </div>
                <div id="description">
                    <p>In this example, the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate">bannerTemplate</a> customizes the banner content with a brain icon, and <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions">promptSuggestions</a> provides AI prompt suggestions. The <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest">promptRequest</a> handles prompt requests and demonstrates progressive thinking blocks with multiple stages showing the AI's reasoning process through different steps like understanding, component selection, layout design, and finalization.</p>
                </div>
            </div>);
    }
}
