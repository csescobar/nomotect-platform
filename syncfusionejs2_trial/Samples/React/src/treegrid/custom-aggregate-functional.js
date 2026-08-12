"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
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
var CustomAggregate = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var item = "Seafood";
    var treegridObj = (0, react_1.useRef)(null);
    var toolbarOptions = ['ExcelExport', 'PdfExport', 'CsvExport'];
    var listObj;
    var foods = [
        { food: "Seafood" },
        { food: "Dairy" },
        { food: "Edible" },
        { food: "Crystal" },
    ];
    //Custom aggregate function to calculate the count of items for the selected category.
    var customAggregateFn = function (data) {
        var sampleData = data.result ? (0, ej2_react_grids_1.getObject)('result', data) : data;
        var countLength;
        countLength = 0;
        if (sampleData !== undefined) {
            sampleData.filter(function (record) {
                var data = (0, ej2_react_grids_1.getObject)("category", record);
                var value = item;
                if (data === value) {
                    countLength++;
                }
            });
        }
        return countLength;
    };
    var custom = function (props) {
        return (React.createElement("span", null,
            " ",
            "Count of ",
            React.createElement("input", { type: "text", id: "customers" }),
            " : ",
            props.Custom));
    };
    //Initializes a DropDownList in the footer for category selection.
    var dataBound = function () {
        setTimeout(function () {
            if (!(0, ej2_base_1.isNullOrUndefined)(listObj)) {
                listObj.destroy();
            }
            listObj = new ej2_react_dropdowns_1.DropDownList({
                dataSource: foods,
                fields: { value: "food" },
                placeholder: "Select a Category",
                width: "110px",
                value: item,
                change: function () {
                    setTimeout(function () {
                        item = listObj.value.toString();
                        treegridObj.current.refresh();
                    }, 300);
                },
            });
            listObj.appendTo("#customers");
        });
    };
    var toolbarClick = function (args) {
        if (treegridObj && args.item.text === 'Excel Export') {
            treegridObj.current.excelExport();
        }
        else if (treegridObj && args.item.text === 'PDF Export') {
            var exportProperties = {
                pageOrientation: 'Landscape',
            };
            treegridObj.current.pdfExport(exportProperties);
        }
        else if (treegridObj && args.item.text === 'CSV Export') {
            treegridObj.current.csvExport();
        }
    };
    //Handles the 'excelAggregateQueryCellInfo' event to customize aggregate cells during Excel export.
    var excelAggregateQueryCellInfo = function (args) {
        if (args.cell.column.headerText === "Category") {
            args.style.value = "Count of " + item + " : " + args.row.data.category.Custom;
        }
    };
    //Handles the 'pdfAggregateQueryCellInfo' event to customize aggregate cells during PDF export.
    var pdfAggregateQueryCellInfo = function (args) {
        if (args.cell.column.headerText === "Category") {
            args.value = "Count of " + item + " : " + args.row.data.category.Custom;
        }
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data_1.summaryData, treeColumnIndex: 1, childMapping: "subtasks", height: "400", gridLines: "Both", ref: treegridObj, allowExcelExport: true, allowPdfExport: true, dataBound: dataBound.bind(_this), excelAggregateQueryCellInfo: excelAggregateQueryCellInfo.bind(_this), pdfAggregateQueryCellInfo: pdfAggregateQueryCellInfo.bind(_this), toolbarClick: toolbarClick.bind(_this), toolbar: toolbarOptions },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'ID', headerText: 'Order ID', width: '115', textAlign: 'Left' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Name', headerText: 'Shipment Name', textAlign: 'Left', width: '230' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'shipmentDate', headerText: 'Shipment Date', width: '135', textAlign: 'Right', type: 'date', format: 'yMd' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'category', headerText: 'Category', width: '220', textAlign: 'Left', minWidth: '220' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'units', headerText: 'Units', width: '90', textAlign: 'Right', type: 'number' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'unitPrice', headerText: 'Unit Price($)', width: '100', textAlign: 'Right', type: 'number', format: 'C2' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'price', headerText: 'Price($)', width: '100', textAlign: 'Right', type: 'number', format: 'C0' })),
                React.createElement(ej2_react_treegrid_1.AggregatesDirective, null,
                    React.createElement(ej2_react_treegrid_1.AggregateDirective, { showChildSummary: false },
                        React.createElement(ej2_react_treegrid_1.AggregateColumnsDirective, null,
                            React.createElement(ej2_react_treegrid_1.AggregateColumnDirective, { columnName: "category", type: "Custom", customAggregate: customAggregateFn.bind(_this), footerTemplate: custom }, " ")))),
                React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Aggregate, ej2_react_treegrid_2.Toolbar, ej2_react_treegrid_2.PdfExport, ej2_react_treegrid_2.ExcelExport] }))),
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
exports.default = CustomAggregate;
