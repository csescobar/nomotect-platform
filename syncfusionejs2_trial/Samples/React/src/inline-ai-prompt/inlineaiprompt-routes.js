"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineaipromptCategory = exports.inlineaipromptRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var ai_overview_functional_1 = require("./ai-overview-functional");
var ai_rich_text_editor_functional_1 = require("./ai-rich-text-editor-functional");
exports.inlineaipromptRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/inline-ai-prompt/ai-overview', Component: ai_overview_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/inline-ai-prompt/ai-rich-text-editor', Component: ai_rich_text_editor_functional_1.default })));
exports.inlineaipromptCategory = { "ai-overview": { "name": "Overview", "category": "Inline AI Prompt" }, "ai-rich-text-editor": { "name": "Rich-Text-editor", "category": "Inline AI Prompt" }, "defaultSample": "inline-ai-prompt/ai-overview" };
