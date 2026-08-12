"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aifilemanagerCategory = exports.aifilemanagerRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var smart_filemanager_1 = require("./smart-filemanager");
exports.aifilemanagerRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-filemanager/smart-filemanager', Component: smart_filemanager_1.SmartFileManager })));
exports.aifilemanagerCategory = { "smart-filemanager": { "name": "Smart FileManager", "category": "File Manager" }, "defaultSample": "ai-filemanager/smart-filemanager" };
