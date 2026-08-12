"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var property_pane_1 = require("../common/property-pane");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var pivotData = require("./pivot-data/Pivot_Data.json");
require("./exporting.css");
/**
 * PivotView Exporting Sample.
 */
/* tslint:disable */
var Pivot_Data = pivotData.data;
var dataSourceSettings = {
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    enableSorting: true,
    rows: [{ name: 'Country' }, { name: 'Products' }],
    formatSettings: [
        { name: 'Amount', format: 'C0' },
        { name: 'In_Stock', format: 'N0' },
        { name: 'Sold', format: 'N0' },
    ],
    columns: [{ name: 'Year', expandAll: true }, { name: 'Quarter' }],
    dataSource: Pivot_Data,
    expandAll: false,
    conditionalFormatSettings: [
        {
            measure: 'In_Stock',
            value1: 120,
            conditions: 'LessThan',
            style: {
                backgroundColor: '#FF005C',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
            },
            applyGrandTotals: false
        },
        {
            value1: 150,
            measure: 'In_Stock',
            conditions: 'GreaterThan',
            style: {
                backgroundColor: '#35B65A',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
            },
            applyGrandTotals: false
        },
        {
            measure: 'Sold',
            value1: 1000,
            conditions: 'LessThan',
            style: {
                backgroundColor: '#FF005C',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
            },
            applyGrandTotals: false
        },
        {
            value1: 1100,
            measure: 'Sold',
            conditions: 'GreaterThan',
            style: {
                backgroundColor: '#35B65A',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
            },
            applyGrandTotals: false
        },
        {
            measure: 'Amount',
            value1: 7000,
            conditions: 'LessThan',
            style: {
                backgroundColor: '#FF005C',
                color: 'white',
                fontFamily: 'Tahoma',
                fontSize: '12px'
            },
            applyGrandTotals: false
        },
        {
            value1: 12000,
            measure: 'Amount',
            conditions: 'GreaterThan',
            style: {
                backgroundColor: '#35B65A',
                color: 'white',
                fontFamily: 'Segoe UI',
                fontSize: '12px'
            },
            applyGrandTotals: false
        }
    ],
    drilledMembers: [{ name: 'Country', items: ['France'] }],
    filterSettings: [
        { name: 'Year', type: 'Include', items: ['FY 2026'] },
        { name: 'Products', type: 'Include', items: ['Gloves', 'Fenders'] },
    ]
};
function Exporting() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var pivotObj;
    var mode;
    var exportType = [
        { value: 'pdf', text: 'PDF' },
        { value: 'excel', text: 'Excel' },
        { value: 'csv', text: 'CSV' }
    ];
    var expandMode = [
        { value: 'false', text: 'False' },
        { value: 'true', text: 'True' }
    ];
    var today = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    });
    function onClick() {
        if (mode.value === 'excel') {
            var excelExportProperties = {
                header: {
                    headerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 10, value: "Sales Performance Report - Q1 2026", style: { fontColor: '#1B4965', fontSize: 20, hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 10, value: "Region: Global | Currency: USD", style: { fontColor: '#35B65A', fontSize: 15, hAlign: 'Center', bold: true } }] }
                    ]
                },
                footer: {
                    footerRows: 4,
                    rows: [
                        { cells: [{ colSpan: 10, value: "Total In Stock: 1,863 | Total Units Sold: 6,327 | Total Sold Amount: $2,381,015", style: { fontColor: '#35B65A', fontSize: 15, hAlign: 'Center', bold: true } }] },
                        { cells: [{ colSpan: 10, value: "Report generated on: ".concat(today), style: { fontColor: '#1B4965', fontSize: 15, hAlign: 'Center', bold: true } }] }
                    ]
                }
            };
            pivotObj.excelExport(excelExportProperties);
        }
        else if (mode.value === 'csv') {
            pivotObj.csvExport();
        }
        else {
            var pdfExportProperties = {
                header: {
                    fromTop: 0,
                    height: 130,
                    contents: [
                        {
                            type: 'Text',
                            value: 'Sales Performance Report - Q1 2026',
                            position: { x: 275, y: 30 },
                            style: { textBrushColor: '#1B4965', fontSize: 35 }
                        },
                        {
                            type: 'Text',
                            value: 'Region: Global | Currency: USD',
                            position: { x: 385, y: 80 },
                            style: { textBrushColor: '#35B65A', fontSize: 22 }
                        }
                    ]
                },
                footer: {
                    fromBottom: 160,
                    height: 150,
                    contents: [
                        {
                            type: 'Text',
                            value: "Total In Stock: 1,863 | Total Units Sold: 6,327 | Total Sold Amount: $2,381,015",
                            position: { x: 275, y: 0 },
                            style: { textBrushColor: '#35B65A', fontSize: 18 }
                        },
                        {
                            type: 'Text',
                            value: "Report generated on: ".concat(today),
                            position: { x: 385, y: 25 },
                            style: { textBrushColor: '#1B4965', fontSize: 18 }
                        },
                        {
                            type: 'PageNumber',
                            pageNumberType: 'Numeric',
                            format: 'Page {$current} of {$total}',
                            position: { x: 915, y: 120 },
                            style: { textBrushColor: '#1B4965', fontSize: 20 }
                        }
                    ]
                }
            };
            pivotObj.pdfExport(pdfExportProperties);
        }
    }
    function expandModeChange(args) {
        pivotObj.dataSourceSettings.expandAll = args.checked;
        pivotObj.dataBind();
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: 'col-lg-8 adaptive' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (pivotview) { pivotObj = pivotview; }, dataSourceSettings: dataSourceSettings, allowExcelExport: true, allowPdfExport: true, showFieldList: true, width: '100%', height: '350', gridSettings: { columnWidth: 140 }, allowConditionalFormatting: true },
                    React.createElement(ej2_react_dropdowns_1.Inject, { services: [ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.ExcelExport, ej2_react_pivotview_1.ConditionalFormatting, ej2_react_pivotview_1.PDFExport] }))),
            React.createElement("div", { className: 'col-lg-4 property-section', style: { paddingRight: 0 } },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: 'property', title: 'Properties', className: 'property-panel-table', style: { width: '100%' } },
                        React.createElement("tbody", null,
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", null,
                                    React.createElement("div", null, "Export Type:")),
                                React.createElement("td", null,
                                    React.createElement("div", { style: { paddingLeft: 0 } },
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "etype", value: "pdf", ref: function (d) { return mode = d; }, dataSource: exportType, fields: { text: 'text', value: 'value' }, placeholder: "PDF" })))),
                            React.createElement("tr", { style: { height: '50px' } },
                                React.createElement("td", null),
                                React.createElement("td", null,
                                    React.createElement("div", { id: "btn-control", style: { float: 'right' } },
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: onClick.bind(this), isPrimary: true }, "Export"))))))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates client-side exporting of the pivot table to Excel, CSV and PDF formats.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The pivot table supports client-side exporting and allows data to be exported in Excel, CSV, and PDF formats using the",
                React.createElement("code", null, "excelExport"),
                ",",
                React.createElement("code", null, "csvExport"),
                ", and",
                React.createElement("code", null, "pdfExport"),
                " methods. To perform an export, the desired document type can be selected from the dropdown list in the property panel, followed by clicking the \"Export\" button."),
            React.createElement("p", null,
                "Headers and footers can also be added during export. For Excel, the ",
                React.createElement("code", null, "header"),
                " and ",
                React.createElement("code", null, "footer"),
                " properties are defined in the",
                React.createElement("code", null, "excelExportProperties"),
                " object and passed to the ",
                React.createElement("code", null, "excelExport"),
                " method. For PDF, the ",
                React.createElement("code", null, "header"),
                " and ",
                React.createElement("code", null, "footer"),
                " properties are defined in the",
                React.createElement("code", null, "pdfExportProperties"),
                " object and passed to the ",
                React.createElement("code", null, "pdfExport"),
                " method."),
            React.createElement("p", null,
                "More information on exporting is available in the corresponding",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/excel-export" }, "Excel Export"),
                ",",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/excel-export#export-data-to-a-csv-file" }, "CSV Export"),
                ", and",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/pdf-export" }, "PDF Export"),
                "documentation sections."))));
}
exports.default = Exporting;
