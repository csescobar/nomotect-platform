"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
require("./sparkline.css");
var rData = require("./pivot-data/sparkLine.json");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
/**
 * PivotView SparkLine Sample.
 */
var Pivot_Data = rData.data;
var chartType = 'Column';
var isDropDownExist = true;
var chartData = ['Line', 'Column', 'Area', 'WinLoss'];
var obj = {};
var sparkline;
ej2_react_charts_1.SparklineComponent.Inject(ej2_react_charts_1.SparklineTooltip);
var dataSourceSettings = {
    enableSorting: true,
    dataSource: Pivot_Data,
    rows: [{ name: 'Region' }, { name: 'Product' }],
    columns: [{ name: 'Year' }],
    values: [{ name: 'Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }, { name: 'Month' }],
    sortSettings: [{ name: 'Month', membersOrder: ['January'] }],
    expandAll: false,
    filters: [],
    drilledMembers: [{ name: 'Region', items: ['Asia'] }]
};
function SparkLine() {
    var gridSettings = {
        columnWidth: 110,
        rowHeight: 70,
        queryCellInfo: queryCellInfo.bind(this),
        columnRender: columnRender.bind(this),
        headerCellInfo: headerCellInfo.bind(this)
    };
    var pivotObj;
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    function queryCellInfo(args) {
        var colIndex = Number(args.cell.getAttribute('aria-colindex')) - 1;
        if (args.data[colIndex].isGrandSum && args.data[colIndex].columnHeaders == '') {
            args.cell.innerText = '';
            var div = document.createElement('div');
            div.id = 'chart' + args.data[colIndex].rowIndex;
            div.style.marginTop = '20px';
            args.cell.appendChild(div);
            var data = [];
            for (var i = 1; i < Object.keys(args.data).length - 1; i++) {
                var object = {
                    x: i,
                    xval: args.data[i].columnHeaders,
                    yval: args.data[i].actualValue,
                };
                data.push(object);
            }
            obj[args.data[colIndex].rowIndex] = data;
        }
    }
    function headerCellInfo(args) {
        var _a, _b, _c;
        if (((_c = (_b = (_a = args.cell) === null || _a === void 0 ? void 0 : _a.column) === null || _b === void 0 ? void 0 : _b.customAttributes) === null || _c === void 0 ? void 0 : _c.cell.type) == 'grand sum') {
            var input = document.createElement('input');
            input.type = 'text';
            input.tabIndex = 1;
            input.id = 'grandTotal_dropdown';
            args.node.style.textAlign = 'right';
            args.node.querySelector('.e-pivotcell-container').appendChild(input);
            args.node.querySelector('.e-headertext').style.alignSelf = 'unset';
            args.node.querySelector('.e-headertext').innerText = 'Total Sales Comparison';
            isDropDownExist = true;
        }
    }
    function columnRender(args) {
        args.columns[0].width = 175;
        for (var i = 1; i < args.columns.length - 1; i++) {
            args.columns[i].width = 140;
        }
        args.columns[args.columns.length - 1].width = 500;
    }
    function onDataBound() {
        if (isDropDownExist) {
            isDropDownExist = false;
            var chartTypeDropDown = new ej2_react_dropdowns_1.DropDownList({
                floatLabelType: 'Auto',
                dataSource: chartData,
                value: chartType,
                width: 200,
                change: function (args) {
                    chartType = args.value;
                    pivotObj.refreshData();
                },
            });
            chartTypeDropDown.appendTo('#grandTotal_dropdown');
        }
        var keys = Object.keys(obj);
        for (var i = 0; i < Object.keys(obj).length; i++) {
            sparkline = new ej2_react_charts_1.SparklineComponent({
                height: '60px',
                lineWidth: 1,
                type: chartType,
                valueType: 'Category',
                dataSource: obj[keys[i]],
                xName: 'xval',
                yName: 'yval',
                markerSettings: {
                    visible: ['High', 'Low'],
                    size: 3,
                },
                highPointColor: 'blue',
                lowPointColor: 'red',
                tiePointColor: 'pink',
                tooltipSettings: {
                    format: '${xval}: $ ${yval}',
                    visible: true,
                    trackLineSettings: {
                        visible: true,
                        color: '#033e96',
                        width: 1
                    }
                },
            });
            sparkline.appendTo('#chart' + keys[i]);
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section', id: 'pivot-table-section' },
            React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView_sparkline', ref: function (pivotview) { pivotObj = pivotview; }, dataSourceSettings: dataSourceSettings, width: '100%', height: '450', gridSettings: gridSettings, showTooltip: false, dataBound: onDataBound })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample shows how to embed sparkline charts in Pivot Table cells to visually highlight trends and comparisons in sales data. You can choose different sparkline types Line, Column, Area, or WinLoss directly from the grand total header cell to analyze performance metrics at a glance.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "This sample demonstrates how to embed ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/sparkline/getting-started/" }, "Sparkline"),
                " charts within the Pivot Table's grand total cells to visually summarize yearly sales performance across different regions."),
            React.createElement("p", null,
                "The charts are rendered by capturing relevant cell values during the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/row-and-column#querycellinfo" }, "queryCellInfo"),
                "event and inserting the sparklines after the Pivot Table is fully rendered via the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/pivotview/#databound" }, "dataBound"),
                " event."),
            React.createElement("p", null, "A built-in dropdown in the grand total column header allows dynamic switching between Sparkline types at runtime:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "Line"),
                    " - Displays trends with a continuous line."),
                React.createElement("li", null,
                    React.createElement("code", null, "Column"),
                    " - Shows values as vertical bars for easy comparison."),
                React.createElement("li", null,
                    React.createElement("code", null, "Area"),
                    " - Highlights magnitude with a filled line chart."),
                React.createElement("li", null,
                    React.createElement("code", null, "WinLoss"),
                    " - Visualizes binary outcomes without exposing exact values.")),
            React.createElement("p", null, "Embedding the chart-type selector within the header keeps the interface compact and intuitive, enabling seamless visual analysis with minimal performance overhead. "),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on queryCellInfo can be found in this",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/row-and-column#querycellinfo" }, "documentation section"),
                "."))));
}
exports.default = SparkLine;
