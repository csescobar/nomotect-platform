"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sankeyCategory = exports.sankeyRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var default_functional_1 = require("./default-functional");
var orientation_functional_1 = require("./orientation-functional");
var print_export_functional_1 = require("./print-export-functional");
exports.sankeyRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sankey/default', Component: default_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sankey/orientation', Component: orientation_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/sankey/print-export', Component: print_export_functional_1.default })));
exports.sankeyCategory = { "default": { "name": "Default", "category": "Sankey" }, "orientation": { "name": "Vertical Mode", "category": "Sankey" }, "print-export": { "name": "Print and Export", "category": "Sankey" }, "defaultSample": "sankey/default" };
