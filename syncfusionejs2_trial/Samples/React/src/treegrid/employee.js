"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTreeGrid = void 0;
var React = require("react");
var react_1 = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./employee.css");
var viewerRoles = [
    { id: 'hr', role: 'HR' },
    { id: 'employee', role: 'Employee' },
    { id: 'helpdesk', role: 'Help Desk' },
    { id: 'pm', role: 'Project Management' },
];
var EmployeeTreeGrid = /** @class */ (function (_super) {
    __extends(EmployeeTreeGrid, _super);
    function EmployeeTreeGrid(props) {
        var _this = _super.call(this, props) || this;
        _this.treeGridRef = (0, react_1.createRef)();
        _this.handleViewerChange = function (args) {
            _this.setState({ viewer: args.value });
            _this.treeGridRef.clearFiltering();
            _this.treeGridRef.clearSorting();
        };
        _this.state = { viewer: 'hr' };
        return _this;
    }
    EmployeeTreeGrid.prototype.getBarHTML = function (value) {
        var percent = (value / 12) * 100;
        var color = '#df2222';
        if (value > 8)
            color = '#00b300';
        else if (value > 4)
            color = '#ffc400';
        return "<div class='bar-fill' style='width:".concat(percent, "%;background:").concat(color, "'></div><div class='barlabel'>").concat(value, "</div>");
    };
    EmployeeTreeGrid.prototype.getColumns = function (viewer) {
        var _this = this;
        var baseColumns = [
            {
                field: 'ID',
                headerText: 'ID',
                width: 200,
                minWidth: 200,
                textAlign: 'Left',
                clipMode: 'EllipsisWithTooltip'
            },
            {
                field: 'Employee',
                headerTemplate: function () {
                    return (React.createElement("div", { style: { display: 'inline' } },
                        React.createElement("img", { src: "src/treegrid/images/__Resources.png", width: "20", height: "20", className: "resources", alt: "Name" }),
                        "Name"));
                },
                width: 280,
                clipMode: 'EllipsisWithTooltip',
                template: function (props) { return (React.createElement("div", { className: "employee-content" },
                    React.createElement("img", { src: "src/treegrid/images/".concat(props.FullName, ".png"), alt: props.FullName, className: "employee-img" }),
                    React.createElement("div", { className: "employee-info" },
                        React.createElement("span", { className: "employee-name" }, props.Employee),
                        React.createElement("span", { className: "employee-title" }, props.JobTitle)))); },
            },
        ];
        switch (viewer) {
            case 'hr':
                return __spreadArray(__spreadArray([], baseColumns, true), [
                    {
                        field: 'Location',
                        headerText: 'Location',
                        width: 200,
                        clipMode: 'EllipsisWithTooltip',
                        template: function (props) { return (React.createElement("div", { className: "flag-container" },
                            React.createElement("img", { src: "src/treegrid/images/".concat(props.Location, ".png"), className: "flag-img", alt: props.Location }),
                            React.createElement("div", { className: "flag-text" }, props.Location))); },
                    },
                    {
                        field: 'JoinDate',
                        headerText: 'Date Joined',
                        textAlign: 'Right',
                        width: 180,
                        format: { skeleton: 'yMd', type: 'date' },
                        clipMode: 'EllipsisWithTooltip',
                    },
                    {
                        field: 'Salary',
                        headerText: 'Salary per month',
                        format: 'C0',
                        textAlign: 'Right',
                        width: 240,
                        clipMode: 'EllipsisWithTooltip',
                    },
                    {
                        field: 'Email',
                        headerText: 'Email',
                        textAlign: 'Center',
                        width: 200,
                        clipMode: 'EllipsisWithTooltip',
                        template: function (props) { return (React.createElement("a", { href: "mailto:".concat(props.Email), className: "email-link" }, props.Email)); },
                    },
                ], false);
            case 'employee':
                return __spreadArray(__spreadArray([], baseColumns, true), [
                    {
                        field: 'Status',
                        headerText: 'Presence',
                        width: 200,
                        textAlign: 'Center',
                        clipMode: 'EllipsisWithTooltip',
                        template: function (data) {
                            var bgColor = data.Status === 'Available' ? '#ccffcc' : data.Status === 'Busy' ? '#ffd09d' : '#ffd7cc';
                            var color = data.Status === 'Available' ? '#00cc00' : data.Status === 'Busy' ? '#ff8707' : '#e60000';
                            return (React.createElement("div", { style: {
                                    display: 'inline-block',
                                    backgroundColor: bgColor,
                                    color: color,
                                    padding: '0 4px',
                                    borderRadius: 4,
                                    textAlign: 'center',
                                    fontSize: 12,
                                } }, data.Status));
                        },
                    },
                    { field: 'WorkMode', headerText: 'Work Mode', width: 230, clipMode: 'EllipsisWithTooltip', },
                    {
                        field: 'Email',
                        headerText: 'Email',
                        textAlign: 'Center',
                        width: 200,
                        clipMode: 'EllipsisWithTooltip',
                        template: function (props) { return (React.createElement("a", { href: "mailto:".concat(props.Email), className: "email-link" }, props.Email)); },
                    },
                ], false);
            case 'helpdesk':
                return __spreadArray(__spreadArray([], baseColumns, true), [
                    {
                        field: 'Status',
                        headerText: 'Presence',
                        width: 200,
                        textAlign: 'Center',
                        clipMode: 'EllipsisWithTooltip',
                        template: function (data) {
                            var bgColor = data.Status === 'Available' ? '#ccffcc' : data.Status === 'Busy' ? '#ffd09d' : '#ffd7cc';
                            var color = data.Status === 'Available' ? '#00cc00' : data.Status === 'Busy' ? '#ff8707' : '#e60000';
                            return (React.createElement("div", { style: {
                                    display: 'inline-block',
                                    backgroundColor: bgColor,
                                    color: color,
                                    padding: '0 4px',
                                    borderRadius: 4,
                                    textAlign: 'center',
                                    fontSize: 12,
                                } }, data.Status));
                        },
                    },
                    {
                        field: 'LeaveAvailability',
                        headerText: "Leave Availability",
                        textAlign: 'Center',
                        width: 400,
                        allowFiltering: false,
                        clipMode: 'EllipsisWithTooltip',
                        template: function (props) { return (React.createElement("div", { className: "leave-bar-container" }, ['casual', 'earned', 'sick'].map(function (type) { return (React.createElement(React.Fragment, { key: type },
                            React.createElement("div", { className: "leave-bar" },
                                React.createElement("span", { className: "leave-label" }, type.charAt(0).toUpperCase() + type.slice(1)),
                                React.createElement("div", { className: "bar ".concat(type), dangerouslySetInnerHTML: {
                                        __html: _this.getBarHTML(props.LeaveAvailability[type]),
                                    } })),
                            type !== 'sick' && React.createElement("div", { className: "separator" }))); }))); },
                    },
                    {
                        field: 'LeaveCount',
                        headerText: "Leave Taken in ".concat(new Date().getFullYear()),
                        textAlign: 'Center',
                        width: 240,
                        clipMode: 'EllipsisWithTooltip',
                    },
                ], false);
            case 'pm':
                return __spreadArray(__spreadArray([], baseColumns, true), [
                    { field: 'Department', headerText: 'Department', width: 200, clipMode: 'EllipsisWithTooltip', },
                    { field: 'ProjectDetails', headerText: 'Project Details', width: 230, clipMode: 'EllipsisWithTooltip', },
                    { field: 'ProjectStatus', headerText: 'Project Status', width: 200, clipMode: 'EllipsisWithTooltip', },
                    {
                        field: 'Email',
                        headerText: 'Email',
                        textAlign: 'Center',
                        width: 200,
                        clipMode: 'EllipsisWithTooltip',
                        template: function (props) { return (React.createElement("a", { href: "mailto:".concat(props.Email), className: "email-link" }, props.Email)); },
                    },
                ], false);
            default:
                return baseColumns;
        }
    };
    EmployeeTreeGrid.prototype.render = function () {
        var viewer = this.state.viewer;
        var columns = this.getColumns(viewer);
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "viewer-container", style: { margin: '10px' } },
                    React.createElement("label", { htmlFor: "viewer" }, "Select Viewer Role : "),
                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "viewer", dataSource: viewerRoles, fields: { text: 'role', value: 'id' }, value: viewer, change: this.handleViewerChange, placeholder: "Select Viewer Role" })),
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { key: viewer, id: "sample", ref: this.treeGridRef, dataSource: data_1.employeeData, childMapping: "Children", treeColumnIndex: 0, height: 400, allowSorting: true, allowFiltering: true, filterSettings: {
                        type: 'Menu',
                        hierarchyMode: 'None',
                        mode: 'Immediate',
                    }, pageSettings: { pageSize: 10 }, enableHover: true, gridLines: "Both" },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null, columns.map(function (col, idx) { return (React.createElement(ej2_react_treegrid_1.ColumnDirective, __assign({ key: idx }, col))); })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Page, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Filter] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases the Syncfusion\u00AE Tree Grid. It presents comprehensive employee information customized for various viewer roles: HR, employee, help desk, and project management. The application uses a structured employee dataset with profiles, work modes, leave balances, and other relevant data.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "This section highlights dynamic column generation and custom templates to present data that is specific and relevant to each viewer role. Features such as ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/sorting" }, "Sorting"),
                    ", ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/filtering/filtering#filter-hierarchy-modes" }, "Filtering with hierarchical support"),
                    " and ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/columns/columns#format" }, "Column formatting"),
                    " are seamlessly integrated. The Tree Grid ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-template" }, "Column template "),
                    " is utilized to render visual elements like progress bars within cells. The Tree Grid flexibility and customization capabilities make it a powerful tool for organizational data representation."),
                React.createElement("p", null,
                    React.createElement("br", null),
                    " More information about Tree Grid instantiation can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/getting-started" }, "documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return EmployeeTreeGrid;
}(sample_base_1.SampleBase));
exports.EmployeeTreeGrid = EmployeeTreeGrid;
