"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inlineaiassistCategory = exports.inlineaiassistRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var ai_overview_functional_1 = require("./ai-overview-functional");
var ai_rich_text_editor_functional_1 = require("./ai-rich-text-editor-functional");
exports.inlineaiassistRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/inline-ai-assist/ai-overview', Component: ai_overview_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/inline-ai-assist/ai-rich-text-editor', Component: ai_rich_text_editor_functional_1.default })));
exports.inlineaiassistCategory = { "ai-overview": { "name": "Overview", "category": "Inline AI Assist" }, "ai-rich-text-editor": { "name": "Rich Text Editor", "category": "Inline AI Assist" }, "defaultSample": "inline-ai-assist/ai-overview" };
