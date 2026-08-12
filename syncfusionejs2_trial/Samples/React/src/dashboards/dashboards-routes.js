"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardsCategory = exports.dashboardsRoutes = void 0;
var react_router_dom_1 = require("react-router-dom");
var React = require("react");
var healthcare_dashboard_1 = require("./healthcare-dashboard");
var ecommerce_marketing_dashboard_1 = require("./ecommerce-marketing-dashboard");
var insurance_dashboard_1 = require("./insurance-dashboard");
var hr_management_dashboard_1 = require("./hr-management-dashboard");
var finance_dashboard_1 = require("./finance-dashboard");
var customer_support_dashboard_1 = require("./customer-support-dashboard");
exports.dashboardsRoutes = (React.createElement(React.Fragment, null,
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/healthcare-dashboard', Component: healthcare_dashboard_1.HealthcareDashboard }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/ecommerce-marketing-dashboard', Component: ecommerce_marketing_dashboard_1.EcommerceMarketingDashboard }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/insurance-dashboard', Component: insurance_dashboard_1.InsuranceDashboard }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/hr-management-dashboard', Component: hr_management_dashboard_1.HRManagementDashboard }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/finance-dashboard', Component: finance_dashboard_1.FinanceDashboard }),
    React.createElement(react_router_dom_1.Route, { path: '/:theme/dashboards/customer-support-dashboard', Component: customer_support_dashboard_1.CustomerSupportDashboard })));
exports.dashboardsCategory = { "healthcare-dashboard": { "name": "Healthcare Sales Dashboard", "category": "Dashboards" }, "ecommerce-marketing-dashboard": { "name": "E-Commerce Marketing Dashboard", "category": "Dashboards" }, "insurance-dashboard": { "name": "Insurance Dashboard", "category": "Dashboards" }, "hr-management-dashboard": { "name": "HR Management Dashboard", "category": "Dashboards" }, "finance-dashboard": { "name": "Finance Dashboard", "category": "Dashboards" }, "customer-support-dashboard": { "name": "Customer Support Dashboard", "category": "Dashboards" }, "defaultSample": "dashboards/healthcare-dashboard" };
