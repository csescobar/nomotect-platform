"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdowneditorCategory = exports.markdowneditorRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var markdown_editor_functional_1 = require("./markdown-editor-functional");
var markdown_editor_preview_functional_1 = require("./markdown-editor-preview-functional");
var markdown_editor_custom_format_functional_1 = require("./markdown-editor-custom-format-functional");
exports.markdowneditorRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/mark-down-editor/markdown-editor', Component: markdown_editor_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/mark-down-editor/markdown-editor-preview', Component: markdown_editor_preview_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/mark-down-editor/markdown-editor-custom-format', Component: markdown_editor_custom_format_functional_1.default })));
exports.markdowneditorCategory = { "markdown-editor": { "name": "Overview", "category": "Markdown Editor" }, "markdown-editor-preview": { "name": "Preview", "category": "Markdown Editor" }, "markdown-editor-custom-format": { "name": "Custom Format", "category": "Markdown Editor" }, "defaultSample": "mark-down-editor/markdown-editor" };
