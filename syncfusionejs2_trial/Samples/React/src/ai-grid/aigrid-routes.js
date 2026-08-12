"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aigridCategory = exports.aigridRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var assistive_grid_1 = require("./assistive-grid");
var anomaly_detection_1 = require("./anomaly-detection");
var semantic_filtering_1 = require("./semantic-filtering");
exports.aigridRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-grid/assistive-grid', Component: assistive_grid_1.AssistiveGrid }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-grid/anomaly-detection', Component: anomaly_detection_1.AnomalyDetection }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/ai-grid/semantic-filtering', Component: semantic_filtering_1.SemanticFiltering })));
exports.aigridCategory = { "assistive-grid": { "name": "Assistive Grid", "category": "Data Grid" }, "anomaly-detection": { "name": "Anomaly Detection", "category": "Data Grid" }, "semantic-filtering": { "name": "Semantic Filtering (Embedding)", "category": "Data Grid" }, "defaultSample": "ai-grid/assistive-grid" };
