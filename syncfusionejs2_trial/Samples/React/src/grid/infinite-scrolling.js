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
exports.InfiniteScrolling = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var sample_base_1 = require("../common/sample-base");
var data_1 = require("./data");
// custom code end
var InfiniteScrolling = /** @class */ (function (_super) {
    __extends(InfiniteScrolling, _super);
    function InfiniteScrolling(props) {
        var _this = _super.call(this, props) || this;
        _this.data = [];
        _this.state = { isLoaded: false };
        return _this;
    }
    InfiniteScrolling.prototype.onclick = function () {
        if (!this.data.length) {
            (0, data_1.createSalesDataSource)();
            this.grid.dataSource = this.data = data_1.salesDataSource;
            this.setState({ isLoaded: true });
        }
    };
    InfiniteScrolling.prototype.load = function (args) {
        if (args) {
            args.enableSeamlessScrolling = true;
        }
    };
    InfiniteScrolling.prototype.render = function () {
        var _this = this;
        var SAMPLE_CSS = "\n        .image {\n            position: absolute;\n            background-repeat: no-repeat;\n            background-image: url('src/grid/images/spinner.gif');\n            background-position: center;\n            width: 16px;\n            height: 28px;\n        }\n\n        .e-bigger .image {\n            height: 36px;\n        }\n        \n        #popup {\n            position: absolute;\n            background-color: transparent;\n            display: none;\n            z-index: 100;\n        }\n        .div-button{\n            margin: 5px 5px 5px 0;\n        }";
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("style", null, SAMPLE_CSS),
                React.createElement("div", { className: 'div-button' },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-info', onClick: this.onclick.bind(this), disabled: this.state.isLoaded }, "Load 100K Data"),
                    React.createElement("span", { id: "popup" },
                        React.createElement("span", { id: "gif", className: "image" }))),
                React.createElement(ej2_react_grids_1.GridComponent, { id: "InfiniteScroll", dataSource: [], enableInfiniteScrolling: true, enableColumnVirtualization: true, height: 400, pageSettings: { pageSize: 50 }, infiniteScrollSettings: { initialBlocks: 1, enableCache: true }, ref: function (g) { return _this.grid = g; }, allowSorting: true, allowFiltering: true, filterSettings: { type: 'CheckBox', enableInfiniteScrolling: true }, load: this.load.bind(this), clipMode: 'EllipsisWithTooltip', rowHeight: 40, footerRowHeight: 40 },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ProductId', headerText: 'Product ID', isPrimaryKey: true, width: '130', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ProductName', headerText: 'Product Name', width: '200' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'GrossAmount', headerText: 'Gross Amount', width: '180', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'NetAmount', headerText: 'Net Amount', width: '180', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ProfitMargin', headerText: 'Profit (%)', width: '180' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'AchievementPercent', headerText: 'Achievement (%)', width: '190' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'SalesQty', headerText: 'Sales Quantity', width: '150', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'UnitPrice', headerText: 'Price', width: '120', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Month', headerText: 'Month', width: '120' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Category', headerText: 'Category', width: '130' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'SubCategory', headerText: 'Sub Category', width: '150', visible: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Brand', headerText: 'Brand', width: '120' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'City', headerText: 'City', width: '130' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'State', headerText: 'State', width: '120' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Country', headerText: 'Country', width: '160' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Region', headerText: 'Region', width: '120' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Discount', headerText: 'Discount (%)', width: '140', textAlign: 'Right', format: 'N0' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Tax', headerText: 'Tax (%)', width: '120', textAlign: 'Right', format: 'N2' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ShippingCost', headerText: 'Shipping Cost', width: '150', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Profit', headerText: 'Profit', width: '160', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Target', headerText: 'Target', width: '120', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Forecast', headerText: 'Forecast', width: '150', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'SalesRep', headerText: 'Sales Reporter', width: '150' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Manager', headerText: 'Manager', width: '150' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Channel', headerText: 'Channel', width: '130' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Quarter', headerText: 'Quarter', width: '120', textAlign: 'Center' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Year', headerText: 'Year', width: '150', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ReturnQty', headerText: 'Return Quantity', width: '160', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ReturnAmount', headerText: 'Return Amount', width: '160', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Remarks', headerText: 'Remarks', width: '200' })),
                    React.createElement(ej2_react_grids_1.AggregatesDirective, null,
                        React.createElement(ej2_react_grids_1.AggregateDirective, null,
                            React.createElement(ej2_react_grids_1.AggregateColumnsDirective, null,
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'SalesQty', type: 'Sum', format: 'N0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'GrossAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'NetAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'ShippingCost', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'Profit', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'Forecast', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'ReturnQty', type: 'Sum', format: 'N0', footerTemplate: '${Sum}' }),
                                React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'ReturnAmount', type: 'Sum', format: 'C0', footerTemplate: '${Sum}' })))),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.InfiniteScroll, ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.Aggregate] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample showcases the infinite scrolling capability of the Grid, designed to handle large datasets seamlessly. Click the \u201CLoad 100K Data\u201D button to populate the Grid with data, then scroll vertically and horizontally to dynamically load rows and columns, ensuring smooth navigation.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "Infinite scrolling uses a lazy loading mechanism, where data is fetched automatically as the user scrolls to the end of the Grid. This behavior is enabled by setting the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#enableinfinitescrolling" }, "enableInfiniteScrolling")),
                    " property to ",
                    React.createElement("code", null, "true"),
                    " and defining the Grid\u2019s ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#height" }, "height")),
                    " property."),
                React.createElement("p", null,
                    "The Grid also supports column virtualization, which renders only the visible columns to improve performance when working with a large number of columns. Column virtualization can be enabled by setting the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "http://ej2.syncfusion.com/react/documentation/api/grid/#enablecolumnvirtualization" }, "enableColumnVirtualization")),
                    " property to ",
                    React.createElement("code", null, "true"),
                    ". Additionally, column virtualization integrates seamlessly with aggregate operations, ensuring that calculations like",
                    React.createElement("code", null, "Sum"),
                    ", ",
                    React.createElement("code", null, "Average"),
                    ", etc., remain accurate and are displayed correctly during horizontal scrolling."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use infinite scrolling and column virtualization with aggregates, inject the required modules ",
                    React.createElement("code", null, "InfiniteScroll"),
                    ", ",
                    React.createElement("code", null, "VirtualScroll"),
                    " and ",
                    React.createElement("code", null, "Aggregate"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the infinite scrolling can be found in the",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/scrolling/infinite-scrolling" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return InfiniteScrolling;
}(sample_base_1.SampleBase));
exports.InfiniteScrolling = InfiniteScrolling;
