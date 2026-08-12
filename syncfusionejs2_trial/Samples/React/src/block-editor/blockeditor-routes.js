"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blockeditorCategory = exports.blockeditorRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var overview_functional_1 = require("./overview-functional");
var pasteSettings_functional_1 = require("./pasteSettings-functional");
var api_functional_1 = require("./api-functional");
var events_functional_1 = require("./events-functional");
var template_functional_1 = require("./template-functional");
var markdown_functional_1 = require("./markdown-functional");
var ai_ask_assistant_functional_1 = require("./ai-ask-assistant-functional");
exports.blockeditorRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/overview', Component: overview_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/pasteSettings', Component: pasteSettings_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/api', Component: api_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/events', Component: events_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/template', Component: template_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/markdown', Component: markdown_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/block-editor/ai-ask-assistant', Component: ai_ask_assistant_functional_1.default })));
exports.blockeditorCategory = { "overview": { "name": "Overview", "category": "Block Editor" }, "pasteSettings": { "name": "Paste Cleanup", "category": "Block Editor" }, "api": { "name": "API", "category": "Block Editor" }, "events": { "name": "Events", "category": "Block Editor" }, "template": { "name": "Template Gallery", "category": "Use Cases" }, "markdown": { "name": "Markdown Blocks", "category": "Use Cases" }, "ai-ask-assistant": { "name": "Ask AI Assistant", "category": "Smart AI Solutions" }, "defaultSample": "block-editor/overview" };
