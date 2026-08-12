"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Thinking = void 0;
var React = require("react");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var sample_base_1 = require("../common/sample-base");
require("./thinking.css");
ej2_react_interactive_chat_1.AIAssistView.Inject(ej2_react_interactive_chat_1.AssistThinking);
var Thinking = /** @class */ (function (_super) {
    __extends(Thinking, _super);
    function Thinking() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bannerTemplate = "<div class=\"banner-content\">\n        <div class=\"e-icons e-brain\"></div>\n        <h3>\uD83D\uDCAD Thinking Support</h3>\n        <i>Break down complex problems and think through decisions.</i>\n    </div>";
        _this.promptSuggestions = [
            'Build a modern dashboard for my business',
            'Create a login page with validation',
            'Make a task management board'
        ];
        _this.promptRequest = function (args) {
            var assistView = _this.assistInstance;
            // Step 1
            setTimeout(function () {
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
                setTimeout(function () {
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
                    setTimeout(function () {
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
                        setTimeout(function () {
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
        return _this;
    }
    Thinking.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "thinking-aiassistview" },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "aiAssistView", bannerTemplate: this.bannerTemplate, promptSuggestions: this.promptSuggestions, promptRequest: this.promptRequest, ref: function (aiassistView) { return (_this.assistInstance = aiassistView); } }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the thinking support of the AI AssistView control.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate" }, "bannerTemplate"),
                    " customizes the banner content with a brain icon, and ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions" }, "promptSuggestions"),
                    " provides AI prompt suggestions. The ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest" }, "promptRequest"),
                    " handles prompt requests and demonstrates progressive thinking blocks with multiple stages showing the AI's reasoning process through different steps like understanding, component selection, layout design, and finalization."))));
    };
    return Thinking;
}(sample_base_1.SampleBase));
exports.Thinking = Thinking;
