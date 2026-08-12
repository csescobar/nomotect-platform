"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.airichtexteditorCategory = exports.airichtexteditorRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var ai_assistant_functional_1 = require("./ai-assistant-functional");
exports.airichtexteditorRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-rich-text-editor/ai-assistant', Component: ai_assistant_functional_1.default })));
exports.airichtexteditorCategory = { "ai-assistant": { "name": "AI Assistant", "category": "Rich Text Editor" }, "defaultSample": "ai-rich-text-editor/ai-assistant" };
