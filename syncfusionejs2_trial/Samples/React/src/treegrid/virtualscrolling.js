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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualScrolling = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./virtualscrolling.css");
var VirtualScrolling = /** @class */ (function (_super) {
    __extends(VirtualScrolling, _super);
    function VirtualScrolling() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enableVirtualization = true;
        _this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Indent', 'Outdent'];
        _this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row', newRowPosition: 'Child' };
        _this.statusTemplate = function (args) {
            var status = (args.Status || '').toString().toLowerCase();
            var cssClass = 'rg-status-maintenance';
            if (status.indexOf('run') === 0)
                cssClass = 'rg-status-running';
            else if (status.indexOf('stop') === 0)
                cssClass = 'rg-status-stopped';
            else if (status.indexOf('degrad') === 0)
                cssClass = 'rg-status-degraded';
            return React.createElement("div", { className: "rg-badge ".concat(cssClass) }, args.Status || '');
        };
        _this.priorityTemplate = function (args) {
            var priority = (args.Priority || '').toString().toLowerCase();
            var cssClass = 'rg-priority-medium';
            var label = args.Priority || 'Medium';
            if (priority === 'low')
                cssClass = 'rg-priority-low';
            else if (priority === 'critical')
                cssClass = 'rg-priority-critical';
            else if (priority === 'high')
                cssClass = 'rg-priority-high';
            return React.createElement("div", { className: "rg-badge ".concat(cssClass) }, label);
        };
        _this.complianceTemplate = function (args) {
            var value = Math.max(0, Math.min(100, parseInt(args.ComplianceScore || 0)));
            return (React.createElement("div", { className: "rg-compliance-wrapper" },
                React.createElement("div", { className: "rg-compliance" },
                    React.createElement("i", { style: { width: "".concat(value, "%") } })),
                React.createElement("div", { className: "rg-compliance-value" }, value)));
        };
        _this.regionTemplate = function (args) {
            var region = args.Region || '';
            var flagSvg = '';
            if (region.indexOf('West US') >= 0 || region.indexOf('East US') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#B22234" }),
                    React.createElement("rect", { y: "0", width: "20", height: "2", fill: "#fff" }),
                    React.createElement("rect", { y: "4", width: "20", height: "2", fill: "#fff" }),
                    React.createElement("rect", { y: "8", width: "20", height: "2", fill: "#fff" }),
                    React.createElement("rect", { y: "12", width: "20", height: "2", fill: "#fff" }),
                    React.createElement("rect", { width: "8", height: "8", fill: "#3C3B6E" })));
            }
            else if (region.indexOf('EU West') >= 0 ||
                region.indexOf('EU Central') >= 0 ||
                region.indexOf('North Europe') >= 0 ||
                region.indexOf('West Europe') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#003399" }),
                    React.createElement("circle", { cx: "10", cy: "7", r: "2", fill: "#FFCC00" }),
                    React.createElement("circle", { cx: "13", cy: "7", r: "0.6", fill: "#FFCC00" }),
                    React.createElement("circle", { cx: "7", cy: "7", r: "0.6", fill: "#FFCC00" }),
                    React.createElement("circle", { cx: "10", cy: "4", r: "0.6", fill: "#FFCC00" }),
                    React.createElement("circle", { cx: "10", cy: "10", r: "0.6", fill: "#FFCC00" })));
            }
            else if (region.indexOf('Canada') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#fff" }),
                    React.createElement("rect", { width: "5", height: "14", fill: "#FF0000" }),
                    React.createElement("rect", { x: "15", width: "5", height: "14", fill: "#FF0000" }),
                    React.createElement("path", { d: "M10,5 L10.5,7 L9,7.5 L10.5,8 L10,10 L11,8.5 L12,10 L11.5,8 L13,7.5 L11.5,7 L12,5 L11,6.5 Z", fill: "#FF0000" })));
            }
            else if (region.indexOf('Australia') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#012169" }),
                    React.createElement("rect", { width: "8", height: "6", fill: "#012169" }),
                    React.createElement("path", { d: "M0,0 L8,6 M8,0 L0,6", stroke: "#fff", strokeWidth: "1.2" }),
                    React.createElement("path", { d: "M4,0 L4,6 M0,3 L8,3", stroke: "#fff", strokeWidth: "2" }),
                    React.createElement("path", { d: "M4,0 L4,6 M0,3 L8,3", stroke: "#C8102E", strokeWidth: "1.2" }),
                    React.createElement("circle", { cx: "15", cy: "10", r: "1", fill: "#fff" }),
                    React.createElement("circle", { cx: "13", cy: "8", r: "0.8", fill: "#fff" }),
                    React.createElement("circle", { cx: "17", cy: "8", r: "0.8", fill: "#fff" })));
            }
            else if (region.indexOf('Asia Pacific') >= 0 || region.indexOf('Southeast Asia') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#f97316" }),
                    React.createElement("circle", { cx: "10", cy: "7", r: "3", fill: "#fff" }),
                    React.createElement("text", { x: "10", y: "10", fontSize: "6", textAnchor: "middle", fill: "#f97316", fontWeight: "bold" }, "AP")));
            }
            else if (region.indexOf('South America') >= 0) {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#009739" }),
                    React.createElement("path", { d: "M10,1 L18,7 L10,13 L2,7 Z", fill: "#FEDD00" }),
                    React.createElement("circle", { cx: "10", cy: "7", r: "2.5", fill: "#002776" })));
            }
            else {
                flagSvg = (React.createElement("svg", { width: "20", height: "14", viewBox: "0 0 20 14", style: { borderRadius: "2px", boxShadow: "0 1px 3px rgba(0,0,0,0.2)" } },
                    React.createElement("rect", { width: "20", height: "14", fill: "#6b7280" }),
                    React.createElement("circle", { cx: "10", cy: "7", r: "4", fill: "none", stroke: "#fff", strokeWidth: "0.8" }),
                    React.createElement("path", { d: "M10,3 Q12,7 10,11 M10,3 Q8,7 10,11 M6,7 L14,7", stroke: "#fff", strokeWidth: "0.8", fill: "none" })));
            }
            return (React.createElement("div", { className: "rg-region" },
                React.createElement("span", { className: "rg-region-flag" }, flagSvg),
                React.createElement("span", { className: "rg-region-name" }, region)));
        };
        _this.actionBegin = function (args) {
            if (args.requestType === 'save' && args.action !== 'edit') {
                args.data.TaskID = 10000 + Math.floor(Math.random() * 10001);
            }
        };
        return _this;
    }
    VirtualScrolling.prototype.load = function (args) {
        if (this.enableVirtualization) {
            args.enableSeamlessScrolling = true;
        }
    };
    VirtualScrolling.prototype.render = function () {
        var _this = this;
        if (data_1.virtualScrollData.length === 0) {
            (0, data_1.virtualDataSource)();
        }
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { ref: function (g) { return _this.treegrid = g; }, dataSource: data_1.virtualScrollData, idMapping: "TaskID", parentIdMapping: "ParentID", enableVirtualization: this.enableVirtualization, treeColumnIndex: 2, editSettings: this.editSettings, toolbar: this.toolbarOptions, height: '400', rowHeight: 50, clipMode: 'EllipsisWithTooltip', actionBegin: this.actionBegin, load: this.load.bind(this) },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "TaskID", headerText: "ID", width: "90", textAlign: "Right", isPrimaryKey: true, visible: false }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "ParentID", headerText: "Parent ID", width: "90", textAlign: "Right", visible: false }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "ResourceId", headerText: "Resource", width: "360", validationRules: { required: true } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Name", headerText: "Type", width: "150", editType: "dropdownedit" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Status", headerText: "Status", width: "210", textAlign: "Center", template: this.statusTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Region", headerText: "Region", width: "180", editType: "dropdownedit", template: this.regionTemplate, validationRules: { required: true } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Environment", headerText: "Environment", width: "140", textAlign: "Left", editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "MonthlyCost", headerText: "Monthly Cost ($)", width: "140", textAlign: "Right", format: "C0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Cpu", headerText: "CPU (%)", width: "110", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Memory", headerText: "Memory (%)", width: "110", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Disk", headerText: "Disk (%)", width: "110", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "NetworkMbps", headerText: "Network (mbps)", width: "130", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "RequestsPerSec", headerText: "Requests (per sec)", width: "150", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "ErrorRatePpm", headerText: "Error Rate (ppm)", width: "170", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "SecurityFindings", headerText: "Security Errors", width: "110", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "StorageGb", headerText: "Storage (GB)", width: "140", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "InstanceCount", headerText: "Instances", width: "110", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "UptimeDays", headerText: "Uptime (days)", width: "150", textAlign: "Right", format: "N0", editType: "numericedit", edit: { params: { format: "n" } } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Priority", headerText: "Priority", width: "130", textAlign: "Center", template: this.priorityTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "ComplianceScore", headerText: "Compliance Score", width: "180", textAlign: "Left", template: this.complianceTemplate, validationRules: { required: true }, editType: "numericedit", edit: { params: { format: "n" } } })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.VirtualScroll, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.RowDD] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates row virtualization in the TreeGrid component, enabling smooth scrolling and efficient rendering of large sets of self-referencing records with full CRUD support and custom cell templates.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "Row virtualization in TreeGrid displays only the rows currently visible in the viewport, ensuring smooth scrolling and optimal performance with large datasets. TreeGrid virtualization is enabled by setting the ",
                    React.createElement("code", null, "enableVirtualization"),
                    " property to ",
                    React.createElement("code", null, "true"),
                    ". The ",
                    React.createElement("code", null, "height"),
                    " property must be explicitly defined when virtualization is enabled."),
                React.createElement("p", null,
                    "For seamless scrolling, set ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/loadeventargs#enableSeamlessScrolling" }, "args.enableSeamlessScrolling = true")),
                    " in the TreeGrid's ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#load" }, "load")),
                    " event. This ensures smooth vertical and horizontal transitions, providing a smoother experience during fast scrolling when virtualization is enabled."),
                React.createElement("p", null,
                    "This demo showcases a self\u2011referential data source containing 10,000 records. In the TreeGrid, the hierarchical relationship is established by mapping the ",
                    React.createElement("code", null, "parentIdMapping"),
                    " property to the \"ParentID\" field and the ",
                    React.createElement("code", null, "idMapping"),
                    " property to the \"TaskID\" field in the data source. The toolbar enables full CRUD operations along with hierarchy management options:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Indent"),
                        ": Moves the selected row to become the last child of the row directly above it."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Outdent"),
                        ": Moves the selected row up one level, making it a sibling of its previous parent.")),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Tree Grid features are organized into individual feature-specific modules. To use the virtual scrolling functionality, inject",
                    React.createElement("code", null, " VirtualScroll "),
                    " module into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the Virtual Scrolling can be found in ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/virtual-scroll", "aria-label": "Navigate to the documentation for virtual-scroll in React TreeGrid control" }, "documentation "),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return VirtualScrolling;
}(sample_base_1.SampleBase));
exports.VirtualScrolling = VirtualScrolling;
