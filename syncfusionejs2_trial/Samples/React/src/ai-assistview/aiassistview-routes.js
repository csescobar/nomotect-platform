"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiassistviewCategory = exports.aiassistviewRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var ai_overview_functional_1 = require("./ai-overview-functional");
var ai_default_functional_1 = require("./ai-default-functional");
var ai_custom_views_functional_1 = require("./ai-custom-views-functional");
var ai_streaming_functional_1 = require("./ai-streaming-functional");
var ai_attachments_functional_1 = require("./ai-attachments-functional");
var ai_generative_ui_functional_1 = require("./ai-generative-ui-functional");
var ai_thinking_functional_1 = require("./ai-thinking-functional");
var ai_template_functional_1 = require("./ai-template-functional");
var ai_speech_to_text_functional_1 = require("./ai-speech-to-text-functional");
var ai_text_to_speech_functional_1 = require("./ai-text-to-speech-functional");
var ai_notion_ai_clone_functional_1 = require("./ai-notion-ai-clone-functional");
var ai_claude_clone_functional_1 = require("./ai-claude-clone-functional");
var ai_gemini_clone_functional_1 = require("./ai-gemini-clone-functional");
var ai_dialog_functional_1 = require("./ai-dialog-functional");
var ai_models_functional_1 = require("./ai-models-functional");
exports.aiassistviewRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-overview', Component: ai_overview_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-default', Component: ai_default_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-custom-views', Component: ai_custom_views_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-streaming', Component: ai_streaming_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-attachments', Component: ai_attachments_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-generative-ui', Component: ai_generative_ui_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-thinking', Component: ai_thinking_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-template', Component: ai_template_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-speech-to-text', Component: ai_speech_to_text_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-text-to-speech', Component: ai_text_to_speech_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-notion-ai-clone', Component: ai_notion_ai_clone_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-claude-clone', Component: ai_claude_clone_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-gemini-clone', Component: ai_gemini_clone_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-dialog', Component: ai_dialog_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-assistview/ai-models', Component: ai_models_functional_1.default })));
exports.aiassistviewCategory = { "ai-overview": { "name": "Overview", "category": "AI AssistView" }, "ai-default": { "name": "Default Functionalities", "category": "AI AssistView" }, "ai-custom-views": { "name": "Custom Views", "category": "AI AssistView" }, "ai-streaming": { "name": "Streaming Response", "category": "AI AssistView" }, "ai-attachments": { "name": "File Attachments", "category": "Integration" }, "ai-generative-ui": { "name": "Generative UI Responses", "category": "AI AssistView" }, "ai-thinking": { "name": "Chain of Thoughts", "category": "AI AssistView" }, "ai-template": { "name": "Template", "category": "AI AssistView" }, "ai-speech-to-text": { "name": "Speech to Text", "category": "Speech" }, "ai-text-to-speech": { "name": "Text to Speech", "category": "Speech" }, "ai-notion-ai-clone": { "name": "Notion AI-like", "category": "UI Customization" }, "ai-claude-clone": { "name": "Claude AI-like", "category": "UI Customization" }, "ai-gemini-clone": { "name": "Gemini AI-like", "category": "UI Customization" }, "ai-dialog": { "name": "Notes Assistant", "category": "Use Cases" }, "ai-models": { "name": "Multiple AI Conversation", "category": "Use Cases" }, "defaultSample": "ai-assistview/ai-overview" };
