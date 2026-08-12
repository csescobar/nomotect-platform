"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_source_1 = require("./data-source");
require("./tabular-layout.css");
var ej2_base_1 = require("@syncfusion/ej2-base");
/**
 * PivotView Classic layout Sample.
 */
var dataSourceSettings = {
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    filterSettings: [{
            name: 'Products', type: 'Include', items: ['Bottles and Cages', 'Cleaners', 'Fenders', 'Gloves', 'Helmets',
                'Hydration Packs', 'Jerseys', 'Mountain Bikes']
        }],
    dataSource: data_source_1.Pivot_Data,
    expandAll: false,
    values: [{ name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: []
};
function TabularLayout() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var pivotObj;
    function onChange() {
        pivotObj.gridSettings.layout = pivotObj.gridSettings.layout === 'Compact' ? 'Tabular' : 'Compact';
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section', style: { overflow: 'initial' } },
            React.createElement("div", { className: "tabular-layout-switch" },
                React.createElement("label", { id: "layout-label", htmlFor: "layout-switch" }, "Classic (Tabular) layout"),
                React.createElement(ej2_react_buttons_1.SwitchComponent, { id: "layout-switch", checked: true, cssClass: "pivot-layout-switch", change: onChange })),
            React.createElement("div", null,
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (scope) { pivotObj = scope; }, dataSourceSettings: dataSourceSettings, showGroupingBar: true, showFieldList: true, width: '100%', height: '450', gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 140, layout: 'Tabular' } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.FieldList] })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample showcases the classic layout option of the Pivot Table, also known as the Excel-like tabular format. In this layout, each field from the row and column axes is arranged sequentially, displayed side by side in separate rows or columns. Subtotals and grand totals are prominently shown, making it easy to compare and analyze data effectively.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The Pivot Table's classic (tabular) layout displays each field in the row axis side by side in separate columns. By default, grand totals are displayed at the end of all rows, while subtotals are placed in a separate row beneath each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the Compact (Excel-like) layout, which serves as the default layout for the Syncfusion Pivot Table."),
            React.createElement("p", null,
                "This layout can be enabled by setting the ",
                React.createElement("code", null, "layout"),
                "property to ",
                React.createElement("b", null, "Tabular"),
                " within the ",
                React.createElement("code", null, "gridSettings"),
                ". Using the ",
                React.createElement("b", null, "Classic (Tabular) Layout"),
                " toggle switch, the pivot table layout can be dynamically switched between Compact and Classic (Tabular) layouts at runtime."),
            React.createElement("p", null,
                React.createElement("b", null, "Note:"),
                " For pivot table reports containing multi-level hierarchies with extensive sublevels, the default layout (i.e., compact view) is recommended, as it effectively displays data in a simple and compact manner."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential JS2 Pivot Table can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/documentation/pivotview/getting-started#adding-pivot-table-component" }, "documentation section"),
                "."))));
}
exports.default = TabularLayout;
