"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circular3dchartCategory = exports.circular3dchartRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var pie_functional_1 = require("./pie-functional");
var donut_functional_1 = require("./donut-functional");
var pie_legend_functional_1 = require("./pie-legend-functional");
var selection_functional_1 = require("./selection-functional");
exports.circular3dchartRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-3d-chart/pie', Component: pie_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-3d-chart/donut', Component: donut_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-3d-chart/pie-legend', Component: pie_legend_functional_1.default }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/circular-3d-chart/selection', Component: selection_functional_1.default })));
exports.circular3dchartCategory = { "pie": { "name": "Pie", "category": "Circular 3D" }, "donut": { "name": "Donut", "category": "Circular 3D" }, "pie-legend": { "name": "Pie with Legend", "category": "Circular 3D" }, "selection": { "name": "Selection", "category": "Circular 3D" }, "defaultSample": "circular-3d-chart/pie" };
