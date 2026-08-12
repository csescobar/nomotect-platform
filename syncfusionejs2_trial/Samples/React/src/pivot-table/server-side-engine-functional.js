"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./server-side-engine.css");
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
/**
 * PivotView Server Side Engine Sample.
 */
var pivotObj;
var toolbarOptions = ['Export', 'FieldList'];
var dataSourceSettings = {
    url: 'https://services.syncfusion.com/react/production/api/pivot/post',
    mode: 'Server',
    expandAll: false,
    enableSorting: true,
    columns: [{ name: 'Year', caption: 'Production Year' },
    ],
    values: [
        { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }
    ],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
    formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Sold', format: 'N0' }],
    filters: [],
    fieldMapping: [
        { name: 'Product_Categories', groupName: 'Product Details' },
        { name: 'Products', groupName: 'Product Details' }
    ]
};
function ServerSideEngine() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
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
            new ej2_navigations_1.Menu({ items: menuItems, select: gridToolbarClicked.bind(this) }, '#grid_menu');
        }
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
    function getExcelExportProperties(excelExportProperties) {
        excelExportProperties.header = {
            headerRows: 7,
            rows: [
                {
                    index: 1,
                    cells: [
                        { index: 1, colSpan: 13, value: 'INVOICE', style: { fontColor: '#C25050', fontSize: 25, hAlign: 'Center', bold: true } }
                    ]
                },
                {
                    index: 3,
                    cells: [
                        { index: 1, colSpan: 3, value: 'Adventure Traders', style: { fontColor: '#C67878', fontSize: 15, bold: true } },
                        { index: 10, colSpan: 2, value: 'INVOICE NUMBER', style: { fontColor: '#C67878', bold: true } },
                        { index: 12, colSpan: 2, value: 'DATE', style: { fontColor: '#C67878', bold: true } }
                    ]
                },
                {
                    index: 4,
                    cells: [
                        { index: 1, colSpan: 3, value: '2501 Aerial Center Parkway' },
                        { index: 10, colSpan: 2, value: 2034 },
                        { index: 12, colSpan: 2, value: new Date() }
                    ]
                },
                {
                    index: 5,
                    cells: [
                        { index: 1, colSpan: 3, value: 'Tel +1 888.936.8638 Fax +1 919.573.0306' },
                        { index: 10, colSpan: 2, value: 'CUSTOMER ID', style: { fontColor: '#C67878', bold: true } },
                        { index: 12, colSpan: 2, value: 'TERMS', style: { fontColor: '#C67878', bold: true } }
                    ]
                },
                {
                    index: 6,
                    cells: [
                        { index: 10, colSpan: 2, value: 564 },
                        { index: 12, colSpan: 2, value: 'Net 30 days' }
                    ]
                }
            ]
        };
        excelExportProperties.footer = {
            footerRows: 3,
            rows: [
                {
                    index: 2,
                    cells: [
                        { colSpan: 13, value: 'Thank you for your business!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }
                    ]
                },
                {
                    index: 3,
                    cells: [
                        { colSpan: 13, value: '!Visit Again!', style: { fontColor: '#C67878', hAlign: 'Center', bold: true } }
                    ]
                }
            ]
        };
    }
    function getPdfExportProperties(pdfExportProperties) {
        pdfExportProperties.header = {
            fromTop: 0,
            height: 130,
            contents: [
                {
                    type: 'Text',
                    value: 'INVOICE',
                    position: { x: 250, y: 50 },
                    style: { textBrushColor: '#C25050', fontSize: 19 },
                },
            ],
        };
        pdfExportProperties.footer = {
            fromBottom: 0,
            height: 130,
            contents: [
                {
                    type: 'Text',
                    value: 'Thank you for your business!',
                    position: { x: 250, y: 50 },
                    style: { textBrushColor: '#C67878', fontSize: 13 },
                },
            ],
        };
    }
    function beforeToolbarRender(args) {
        args.customToolbar.splice(2, 0, {
            template: '<ul id="grid_menu"></ul>',
            id: 'custom_toolbar'
        });
        args.customToolbar.splice(1, 0, {
            type: 'Separator'
        });
    }
    function beforeExport(args) {
        if (args.excelExportProperties) {
            getExcelExportProperties(args.excelExportProperties);
        }
        else if (args.pdfExportProperties) {
            getPdfExportProperties(args.pdfExportProperties);
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return pivotObj = d; }, dataSourceSettings: dataSourceSettings, showFieldList: true, showGroupingBar: true, width: '100%', height: '450', dataBound: onDataBound.bind(this), allowDataCompression: true, showToolbar: true, allowPdfExport: true, allowExcelExport: true, gridSettings: { columnWidth: ej2_base_1.Browser.isDevice ? 100 : 120, layout: 'Tabular' }, toolbarRender: beforeToolbarRender.bind(this), toolbar: toolbarOptions, beforeExport: beforeExport.bind(this) },
                React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.PDFExport, ej2_react_pivotview_1.ExcelExport] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample shows how to use a server-side pivot engine to fetch and display summarized data in the Pivot Table. It includes export options for Excel, CSV, and PDF with headers and footers, and a layout switcher to toggle between Compact and Tabular views at runtime.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The Pivot Table's server-side pivot engine (external pivot engine) uses the Syncfusion",
                React.createElement("sup", null, "\u00AE"),
                " package ",
                React.createElement("a", { target: "_blank", href: "https://www.nuget.org/packages/Syncfusion.Pivot.Engine/" },
                    " Syncfusion",
                    React.createElement("sup", null, "\u00AE"),
                    ".Pivot.Engine"),
                " to gather data from the data source and perform all pivot operations such as ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/aggregation/#aggregation" }, "aggregation"),
                ", ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/filtering/#filtering" }, "filtering"),
                ", ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/sorting/#sorting" }, "sorting"),
                ", ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/grouping" }, "grouping"),
                ", and more on a separate hosted server and only paged data is sent to the pivot table viewport via web service. The ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/pivotview/dataSourceSettings/#url" }, "dataSourceSettings->url"),
                " property allows this web service URL to be connected to the pivot table."),
            React.createElement("p", null, "In this demo, the Pivot Table is rendered using an external server-side engine, which significantly enhances performance when handling large datasets. By offloading data processing to the server, client-side rendering becomes faster and more efficient\u2014ensuring a smoother user experience even with complex or high-volume data."),
            React.createElement("p", null,
                "For further performance improvements when working with large data volumes, we recommend enabling ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/pivotview/#enablevirtualization" }, "virtualization"),
                " or ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/paging" }, "paging"),
                " features."),
            React.createElement("p", null, "The built-in toolbar includes export options for Excel, CSV, and PDF documents. These export features support adding headers and footers, enabling enriched document formatting and presentation."),
            React.createElement("p", null,
                "Additionally, a custom toolbar menu is provided to switch between ",
                React.createElement("strong", null, "Compact"),
                " and",
                React.createElement("strong", null, "Tabular"),
                " layouts at runtime, offering flexibility in how the summarized data is displayed."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information about server-side aggregation can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/server-side-pivot-engine" }, "documentation section"),
                "."))));
}
exports.default = ServerSideEngine;
