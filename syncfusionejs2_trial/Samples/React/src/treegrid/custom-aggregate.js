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
exports.CustomAggregate = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_base_1 = require("@syncfusion/ej2-base");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_treegrid_2 = require("@syncfusion/ej2-react-treegrid");
{ /* custom code start */ }
var SAMPLE_CSS = "\n  .fluent2 input#customers {\n        padding-bottom: 8px !important;\n  }\n        \n  .bootstrap5.3 input#customers {\n      padding-bottom: 5px !important;\n  }\n\n  .e-summarycell.e-templatecell {\n    pointer-events:visible !important;\n  }\n  \n  .e-treegrid .e-summarycell.e-templatecell .e-input-group input.e-control.e-dropdownlist.e-lib.e-input {\n    padding-left: 6px !important;\n  }";
{ /* custom code end */ }
var CustomAggregate = /** @class */ (function (_super) {
    __extends(CustomAggregate, _super);
    function CustomAggregate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.item = 'Seafood';
        _this.toolbarOptions = ['ExcelExport', 'PdfExport', 'CsvExport'];
        _this.foods = [
            { food: 'Seafood' },
            { food: 'Dairy' },
            { food: 'Edible' },
            { food: 'Crystal' },
        ];
        _this.toolbarClick = function (args) {
            if (_this.treegridObj && args.item.text === 'Excel Export') {
                _this.treegridObj.excelExport();
            }
            else if (_this.treegridObj && args.item.text === 'PDF Export') {
                var exportProperties = {
                    pageOrientation: 'Landscape',
                };
                _this.treegridObj.pdfExport(exportProperties);
            }
            else if (_this.treegridObj && args.item.text === 'CSV Export') {
                _this.treegridObj.csvExport();
            }
        };
        //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
        _this.excelAggregateQueryCellInfo = function (args) {
            if (args.cell.column.headerText === "Category") {
                args.value = "Count of " + _this.item + " : " + args.row.data.category.Custom;
            }
        };
        //Handles the 'pdfAggregateQueryCellInfo' event to customize aggregate cells during PDF export.
        _this.pdfAggregateQueryCellInfo = function (args) {
            if (args.cell.column.headerText === "Category") {
                args.value = "Count of " + _this.item + " : " + args.row.data.category.Custom;
            }
        };
        return _this;
    }
    //Custom aggregate function to calculate the count of items for the selected category.
    CustomAggregate.prototype.customAggregateFn = function (data) {
        var _this = this;
        var sampleData = data.result ? (0, ej2_react_grids_1.getObject)('result', data) : data;
        var countLength;
        countLength = 0;
        if (sampleData !== undefined) {
            sampleData.filter(function (record) {
                var data = (0, ej2_react_grids_1.getObject)('category', record);
                var value = _this.item;
                if (data === value) {
                    countLength++;
                }
            });
        }
        return countLength;
    };
    CustomAggregate.prototype.custom = function (props) {
        return (React.createElement("span", null,
            " Count of ",
            React.createElement("input", { type: "text", id: "customers" }),
            " : ",
            props.Custom));
    };
    //Initializes a DropDownList in the footer for category selection.
    CustomAggregate.prototype.dataBound = function () {
        var _this = this;
        setTimeout(function () {
            if (!(0, ej2_base_1.isNullOrUndefined)(_this.listObj)) {
                _this.listObj.destroy();
            }
            _this.listObj = new ej2_react_dropdowns_1.DropDownList({
                dataSource: _this.foods,
                fields: { value: 'food' },
                placeholder: 'Select a Category',
                width: '110px',
                value: _this.item,
                change: function () {
                    setTimeout(function () {
                        _this.item = _this.listObj.value.toString();
                        _this.treegridObj.refresh();
                    }, 300);
                }
            });
            _this.listObj.appendTo('#customers');
        });
    };
    CustomAggregate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data_1.summaryData, treeColumnIndex: 1, gridLines: "Both", childMapping: 'subtasks', height: '400', allowExcelExport: true, allowPdfExport: true, excelAggregateQueryCellInfo: this.excelAggregateQueryCellInfo.bind(this), pdfAggregateQueryCellInfo: this.pdfAggregateQueryCellInfo.bind(this), ref: function (treegrid) { return _this.treegridObj = treegrid; }, toolbarClick: this.toolbarClick.bind(this), toolbar: this.toolbarOptions, dataBound: this.dataBound.bind(this) },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'ID', headerText: 'Order ID', width: '115', textAlign: 'Left' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Name', headerText: 'Shipment Name', textAlign: 'Left', width: '230' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'shipmentDate', headerText: 'Shipment Date', width: '135', textAlign: 'Right', type: 'date', format: 'yMd' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'category', headerText: 'Category', width: '220', textAlign: 'Left', minWidth: '220' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'units', headerText: 'Total Units', width: '90', textAlign: 'Right', type: 'number' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'unitPrice', headerText: 'Unit Price($)', width: '100', textAlign: 'Right', type: 'number', format: 'C2' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'price', headerText: 'Price($)', width: '100', textAlign: 'Right', type: 'number', format: 'C0' })),
                    React.createElement(ej2_react_treegrid_1.AggregatesDirective, null,
                        React.createElement(ej2_react_treegrid_1.AggregateDirective, { showChildSummary: false },
                            React.createElement(ej2_react_treegrid_1.AggregateColumnsDirective, null,
                                React.createElement(ej2_react_treegrid_1.AggregateColumnDirective, { columnName: 'category', type: 'Custom', customAggregate: this.customAggregateFn.bind(this), footerTemplate: this.custom }, " ")))),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Aggregate, ej2_react_treegrid_2.ExcelExport, ej2_react_treegrid_2.PdfExport, ej2_react_treegrid_2.Toolbar] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates custom aggregates and exporting functionality in the Tree Grid. Aggregate values for the columns are displayed in the column footer, and export options are available via the toolbar buttons.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Tree Grid supports displaying aggregates in the footer, which can be configured using the ",
                    React.createElement("code", null, "aggregates"),
                    " property. Here, a ",
                    React.createElement("code", null, "customAggregate"),
                    " configuration is applied to the ",
                    React.createElement("b", null, "Category"),
                    " column to show a dropdown that displays the count of the selected category."),
                React.createElement("p", null,
                    "The Tree Grid also supports seamless exports to ",
                    React.createElement("b", null, "Excel"),
                    ", ",
                    React.createElement("b", null, "PDF"),
                    ", or ",
                    React.createElement("b", null, "CSV"),
                    " with a single click. The ",
                    React.createElement("code", null, "excelAggregateQueryCellInfo"),
                    " and ",
                    React.createElement("code", null, "pdfAggregateQueryCellInfo"),
                    " events ensure that footer aggregate values are accurately preserved in the exported files."),
                React.createElement("p", null,
                    "More information about custom aggregate can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/aggregates/custom-aggregate" }, "documentation"),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return CustomAggregate;
}(sample_base_1.SampleBase));
exports.CustomAggregate = CustomAggregate;
