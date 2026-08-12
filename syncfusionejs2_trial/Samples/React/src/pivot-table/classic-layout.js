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
exports.ClassicLayout = void 0;
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_source_1 = require("./data-source");
require("./classic-layout.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
/**
 * PivotView Classic layout Sample.
 */
var dataSourceSettings = {
    dataSource: data_source_1.Pivot_Data,
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }, { name: 'Order_Source', caption: 'Order Source' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    drilledMembers: [{ name: 'Product_Categories', items: ['Accessories', 'Bikes'] }, { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] }],
    filterSettings: [{
            name: 'Products', type: 'Exclude', items: ['Cleaners', 'Fenders']
        }],
    expandAll: false,
    values: [{ name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: []
};
var ClassicLayout = /** @class */ (function (_super) {
    __extends(ClassicLayout, _super);
    function ClassicLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toolbarOptions = ['Export', 'FieldList'];
        return _this;
    }
    ClassicLayout.prototype.onChange = function (args) {
        if (this.pivotObj.gridSettings.layout === 'Compact') {
            this.pivotObj.gridSettings.layout = 'Tabular';
            this.repeatLabelSwitch.disabled = false;
        }
        else {
            this.pivotObj.gridSettings.layout = 'Compact';
            this.repeatLabelSwitch.disabled = true;
        }
    };
    ClassicLayout.prototype.onRepeatLabelChange = function (args) {
        if (this.pivotObj.gridSettings.repeatItemLabels) {
            this.pivotObj.setProperties({ gridSettings: { repeatItemLabels: false } });
            this.pivotObj.refreshData();
        }
        else {
            this.pivotObj.setProperties({ gridSettings: { repeatItemLabels: true } });
            this.pivotObj.refreshData();
        }
    };
    ClassicLayout.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section', style: { overflow: 'initial' } },
                React.createElement("div", { className: "switch-container" },
                    React.createElement("div", { className: "tabular-layout-switch" },
                        React.createElement("label", { id: "layout-label", className: "pivot-switch-label", htmlFor: "layout-switch" }, "Classic Layout"),
                        React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "layout-switch", checked: true, cssClass: "pivot-layout-switch", change: this.onChange.bind(this) })),
                    React.createElement("div", { className: "repeat-label-switch" },
                        React.createElement("label", { id: "repeat-label", className: "pivot-switch-label", htmlFor: "repeatlabel-switch" }, "Repeating Labels"),
                        React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "repeatlabel-switch", ref: function (scope) { _this.repeatLabelSwitch = scope; }, cssClass: "pivot-repeatlabel-switch", change: this.onRepeatLabelChange.bind(this) }))),
                React.createElement("div", null,
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (scope) { _this.pivotObj = scope; }, dataSourceSettings: dataSourceSettings, showFieldList: true, width: '100%', height: '450', allowExcelExport: true, allowPdfExport: true, showToolbar: true, toolbar: this.toolbarOptions, gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 120, layout: 'Tabular' } },
                        React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.PDFExport, ej2_react_pivotview_1.ExcelExport,] })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample showcases the classic layout option of the Pivot Table, also known as the Excel-like tabular format. In this layout, each field from the row and column axes is arranged sequentially, displayed side by side in separate rows or columns. Subtotals and grand totals are prominently shown, making it easy to compare and analyze data effectively. Additionally, the repeating labels functionality allows you to control whether field labels are repeated across rows for better readability\u2014both in the displayed pivot table and in exported documents (Excel/PDF).")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Pivot Table's classic layout displays each field in the row axis side by side in separate columns. By default, grand totals are displayed at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the Compact (Excel-like) layout, which serves as the default layout for the Syncfusion",
                    React.createElement("sup", null, "\u00AE"),
                    " Pivot Table."),
                React.createElement("p", null,
                    "The ",
                    React.createElement("b", null, "Classic Layout"),
                    " can be enabled by setting the ",
                    React.createElement("code", null, "layout"),
                    " property to ",
                    React.createElement("b", null, "Tabular"),
                    " within the",
                    React.createElement("code", null, "gridSettings"),
                    ". Using the ",
                    React.createElement("b", null, "Classic Layout"),
                    " toggle switch, the pivot table layout can be dynamically switched between Compact and Classic layouts at runtime. In addition, the ",
                    React.createElement("b", null, "Repeating Labels"),
                    " toggle switch controls the ",
                    React.createElement("code", null, "repeatItemLabels"),
                    " property within the ",
                    React.createElement("code", null, "gridSettings"),
                    ". This option is exclusive to the ",
                    React.createElement("b", null, "Classic Layout"),
                    " and should be enabled only when it is active. When set to true, row field labels are repeated across all rows, improving readability and analysis in reports with multi\u2011level hierarchies. The same behavior is preserved when exporting the pivot table to Excel or PDF formats, ensuring consistency between the displayed and exported data."),
                React.createElement("p", null,
                    React.createElement("b", null, "Note:"),
                    " For pivot table reports containing multi-level hierarchies with extensive sublevels, the default layout (i.e., compact view) is recommended, as it effectively displays data in a simple and compact manner."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the React Pivot Table can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/getting-started#adding-pivot-table-component" }, "documentation section"),
                    "."))));
    };
    return ClassicLayout;
}(sample_base_1.SampleBase));
exports.ClassicLayout = ClassicLayout;
