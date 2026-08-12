"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var ej2_grid_chart_1 = require("@syncfusion/ej2-grid-chart");
var grid_chart_theme_color_1 = require("./grid-chart-theme-color");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./chart.css");
var sample_base_1 = require("../common/sample-base");
function GridChartIntegration() {
    var gridRef;
    var chartInstanceRef;
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var contextMenuItems = [
        'Bar', 'StackingBar', 'StackingBar100',
        'Pie',
        'Column', 'StackingColumn', 'StackingColumn100',
        'Line', 'StackingLine', 'StackingLine100',
        'Area', 'StackingArea', 'StackingArea100',
        'Scatter'
    ];
    var handleQueryCellInfo = function (args) {
        if (args.column && args.column.field === 'ProfitLoss') {
            var profit = args.data.ProfitLoss;
            if (profit < 0) {
                args.cell.classList.add('e-gridchart-sales-loss');
            }
            else {
                args.cell.classList.add('e-gridchart-sales-profit');
            }
        }
    };
    var updateChartSettings = function (args) {
        var _a, _b;
        var chartMargin = (_a = args.changes.chart) === null || _a === void 0 ? void 0 : _a.margin;
        var accMargin = (_b = args.changes.accumulationChart) === null || _b === void 0 ? void 0 : _b.margin;
        if (chartMargin) {
            if (!(0, ej2_base_1.isNullOrUndefined)(chartMargin.top)) {
                accMargin.top = chartMargin.top = Math.max(20, Math.min(100, chartMargin.top));
            }
            else if (!(0, ej2_base_1.isNullOrUndefined)(chartMargin.bottom)) {
                accMargin.bottom = chartMargin.bottom = Math.max(20, Math.min(100, chartMargin.bottom));
            }
            else if (!(0, ej2_base_1.isNullOrUndefined)(chartMargin.left)) {
                accMargin.left = chartMargin.left = Math.max(20, Math.min(100, chartMargin.left));
            }
            else if (!(0, ej2_base_1.isNullOrUndefined)(chartMargin.right)) {
                accMargin.right = chartMargin.right = Math.max(20, Math.min(100, chartMargin.right));
            }
        }
    };
    var categoryTemplate = function (props) {
        return (React.createElement("div", { className: "e-category-info" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: props.CategoryIcon } }),
            React.createElement("span", null, props.Category)));
    };
    var productTemplate = function (props) {
        var src = 'src/grid/images/product/' + props.Image + '.png';
        return (React.createElement("div", { className: "e-product-info" },
            React.createElement("img", { src: src, alt: props.Product }),
            React.createElement("span", null, props.Product)));
    };
    var handleCreated = function () {
        chartInstanceRef = new ej2_grid_chart_1.GridChart({
            enablePropertyPanel: true,
            allowExport: true,
            enableRtl: gridRef.enableRtl,
            locale: gridRef.locale,
            updateChartSettings: updateChartSettings
        });
    };
    var handleContextMenuClick = function (args) {
        if (args.chartType && chartInstanceRef) {
            var chartArgs = {
                gridInstance: args.gridInstance,
                chartType: args.chartType,
                records: args.records
            };
            var chartModel = {
                primaryXAxis: {
                    valueType: 'Category',
                    labelRotation: 315
                },
                primaryYAxis: {
                    title: 'Sales in amount',
                    titleStyle: { size: '11px' }
                },
                load: function (args) {
                    (0, grid_chart_theme_color_1.loadChartTheme)(args);
                }
            };
            var accumulationChartModel = {
                load: function (args) {
                    (0, grid_chart_theme_color_1.loadAccumulationChartTheme)(args);
                }
            };
            chartModel.margin = accumulationChartModel.margin = { top: 20, bottom: 20, right: 20, left: 20 };
            var model = {
                chart: chartModel,
                accumulationChart: accumulationChartModel
            };
            var categorySeries = {
                category: ['Product', 'Year'],
                series: ['Online', 'Retail', 'Revenue']
            };
            chartInstanceRef.render(chartArgs, model, categorySeries);
        }
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "GridChart", ref: function (grid) { return gridRef = grid; }, dataSource: data_1.sales, height: 500, allowFiltering: true, filterSettings: { type: 'Menu' }, allowSorting: true, allowMultiSorting: true, allowSelection: true, selectionSettings: { type: 'Multiple' }, contextMenuItems: contextMenuItems, gridLines: "Both", contextMenuClick: handleContextMenuClick, queryCellInfo: handleQueryCellInfo, created: handleCreated },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { type: "checkbox", width: 50, freeze: "Left", textAlign: "Center", customAttributes: { class: 'grid-chart-checkbox-css' } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Product", headerText: "Products", width: 200, template: productTemplate, freeze: "Left" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Category", headerText: "Categories", width: 160, template: categoryTemplate }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Year", headerText: "Year", textAlign: "Right", width: 140 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Online", headerText: "Online", format: "C2", textAlign: "Right", width: 160 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Retail", headerText: "Retail", format: "C2", textAlign: "Right", width: 160 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ProfitLoss", headerText: "Profit/Loss", format: "C2", textAlign: "Right", width: 200 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "UnitsSold", headerText: "Units Sold", textAlign: "Right", width: 160 }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Revenue", headerText: "Revenue", format: "C2", textAlign: "Right", width: 160, freeze: "Right" })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.ContextMenu, ej2_react_grids_1.Filter, ej2_react_grids_1.Sort, ej2_react_grids_1.Freeze] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates how to visualize grid data in a chart using the context menu feature. You will need to enable the context menu feature to access this functionality. ",
                React.createElement("code", null, "Right-click"),
                " on any row, select your preferred chart type, and a dialog will appear showing that data as a chart based on your category and series.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The sample supports various chart types - ",
                React.createElement("code", null, "Line"),
                ", ",
                React.createElement("code", null, "Area"),
                ", ",
                React.createElement("code", null, "Column"),
                ",",
                React.createElement("code", null, "Bar"),
                ", ",
                React.createElement("code", null, "Scatter"),
                ", ",
                React.createElement("code", null, "Pie"),
                " and their stacked variations. Charts are rendered using the ",
                React.createElement("code", null, "@syncfusion/ej2-grid-chart"),
                " package's ",
                React.createElement("code", null, "render"),
                " method, which requires category, series and optional chart properties."),
            React.createElement("p", null, "This example uses categories like 'Product' and 'Year' with series data for 'Online', 'Retail' and 'Revenue' in the chart visualization."),
            React.createElement("p", null,
                "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                " page."))));
}
exports.default = GridChartIntegration;
