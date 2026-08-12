"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
require("./pivot-table-exporting.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_base_1 = require("@syncfusion/ej2-base");
/**
 * PivotView PivotTableExporting Sample.
 */
var dataSourceSettings = {
    url: 'https://services.syncfusion.com/react/production/api/pivot/post',
    mode: 'Server',
    expandAll: true,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' },
    ],
    values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }
    ],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
    filters: []
};
function PivotTableExporting() {
    var pivotObj;
    var toolbarOptions = ['Chart', 'FieldList'];
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    function toolbarRender(args) {
        args.customToolbar.splice(0, 0, {
            prefixIcon: 'e-menu-icon e-pivotview-excel-export e-icons',
            tooltipText: 'Excel Export as Pivot',
            click: toolbarClicked.bind(this),
        });
        args.customToolbar.splice(1, 0, {
            type: 'Separator'
        });
        args.customToolbar.splice(2, 0, {
            template: '<ul id="grid_menu"></ul>',
            id: 'custom_toolbar'
        });
        args.customToolbar.splice(3, 0, {
            type: 'Separator'
        });
    }
    function onDataBound() {
        if (ej2_base_1.Browser.isDevice && pivotObj && pivotObj.enableRtl) {
            document.querySelector('.control-section').classList.add('e-rtl');
        }
        if (document.querySelector('#grid_menu .e-menu-item') == null) {
            var menuItems = [
                {
                    iconCss: 'e-toolbar-grid e-icons',
                    items: [
                        { text: 'Compact Layout', id: 'Compact' },
                        { text: 'Tabular Layout', id: 'Tabular' },
                    ],
                },
            ];
            new ej2_react_navigations_1.Menu({ items: menuItems, select: gridToolbarClicked }, '#grid_menu');
        }
    }
    function toolbarClicked() {
        pivotObj.exportAsPivot();
    }
    function gridToolbarClicked(args) {
        if (pivotObj && pivotObj.gridSettings && pivotObj.gridSettings.layout !== args.item.id && (args.item.id == 'Compact' || args.item.id == 'Tabular')) {
            pivotObj.setProperties({
                gridSettings: {
                    layout: args.item.id
                },
                displayOption: {
                    view: 'Both', primary: 'Table'
                },
            }, true);
            pivotObj.refresh();
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return pivotObj = d; }, dataSourceSettings: dataSourceSettings, width: '100%', height: '450', showToolbar: true, allowPdfExport: true, gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 120 }, showFieldList: true, showGroupingBar: true, allowDataCompression: true, allowExcelExport: true, displayOption: { view: 'Both' }, toolbar: toolbarOptions, chartSettings: {
                    title: 'Sales Analysis', primaryYAxis: { border: { width: 0 } }, legendSettings: { visible: false, },
                    chartSeries: { type: 'Bar', animation: { enable: false } }
                }, toolbarRender: toolbarRender.bind(this), dataBound: onDataBound },
                React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.ExcelExport, ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.VirtualScroll] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates exporting a server-side Syncfusion Pivot Table as a fully interactive Excel Pivot Table.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "This sample shows how to export a ",
                React.createElement("strong", null, "server-side"),
                " Syncfusion Pivot Table to an Excel file while preserving its native pivot structure. The exported Excel file supports full interactivity, allowing users to customize pivot configurations directly within Excel."),
            React.createElement("p", null,
                "The Pivot Table uses a server-side pivot engine powered by the ",
                React.createElement("a", { target: "_blank", href: "https://www.nuget.org/packages/Syncfusion.Pivot.Engine/" }, " Syncfusion.Pivot.Engine"),
                " package. This engine runs on a separate hosted server, performing all pivot operations\u2014including ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/aggregation/#aggregation" }, "aggregation"),
                ", ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/filtering/#filtering" }, "filtering"),
                ", ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/sorting/#sorting" }, "sorting"),
                ", and ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/grouping" }, "grouping"),
                " and returns only paged data to the client. The connection to the remote service is configured using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#url" }, "dataSourceSettings->url"),
                " property."),
            React.createElement("p", null,
                React.createElement("strong", null, "Excel Export"),
                " is available via the built-in toolbar and generates a true Excel Pivot Table, not just static data. This enables users to interact with and manipulate the exported report directly in Excel."),
            React.createElement("p", null,
                "Additionally, the toolbar includes custom menu items to toggle between ",
                React.createElement("code", null, "Compact"),
                " and",
                React.createElement("code", null, "Tabular"),
                " layouts and to switch chart types dynamically. This empowers users to customize both the visual structure and the associated chart representation of their data."),
            React.createElement("br", null),
            React.createElement("p", null,
                React.createElement("strong", null, "Injecting Module:")),
            React.createElement("p", null,
                "The pivot table features are segregated into individual modules. To use the exporting option, we need to inject the",
                React.createElement("code", null, " Excel Export"),
                " module into the",
                React.createElement("code", null, " services"),
                "."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information about server-side aggregation can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/server-side-pivot-engine" }, "documentation section"),
                "."))));
}
exports.default = PivotTableExporting;
