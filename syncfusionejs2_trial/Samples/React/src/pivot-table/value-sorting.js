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
exports.ValueSorting = void 0;
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var pivotData = require("./pivot-data/Pivot_Data.json");
require("./value-sorting.css");
/**
 * PivotView Value Sorting sample.
 */
/* tslint:disable */
var Pivot_Data = pivotData.data;
var dataSourceSettings = {
    valueSortSettings: {
        columnHeaderText: 'FY 2022##In Stock',
        headerDelimiter: '##',
        columnSortOrder: 'Descending',
        rowHeaderText: 'France',
        rowSortOrder: 'Ascending'
    },
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    dataSource: Pivot_Data,
    expandAll: false,
    enableSorting: true,
    rows: [{ name: 'Country' }, { name: 'Products' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
};
var ValueSorting = /** @class */ (function (_super) {
    __extends(ValueSorting, _super);
    function ValueSorting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueSorting.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', dataSourceSettings: dataSourceSettings, width: '100%', height: '300', showFieldList: true, showValuesButton: true, enableValueSorting: true, gridSettings: { columnWidth: 140 } },
                    React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.FieldList] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates ordering of column and row header values in ascending or descending order. Here, the",
                    React.createElement("b", null, "FY 2022 \u2192 In Stock"),
                    " column header and the ",
                    React.createElement("b", null, "France"),
                    " row header are both ordered by defining sort-related settings in code behind.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates how to enable sorting for column and row values by simply clicking their headers. Repeated clicks toggle the sort direction. This functionality is activated by setting the",
                    React.createElement("code", null, "enableValueSorting"),
                    " property to ",
                    React.createElement("b", null, "true"),
                    "."),
                React.createElement("p", null,
                    "You can also configure value-based sorting programmatically. To sort a column, specify the target header using the ",
                    React.createElement("code", null, "columnHeaderText"),
                    " property under ",
                    React.createElement("code", null, "valueSortSettings"),
                    ", with individual header levels separated by a delimiter defined in the ",
                    React.createElement("code", null, "headerDelimiter"),
                    " property. Use ",
                    React.createElement("code", null, "columnSortOrder"),
                    "to set the sort direction."),
                React.createElement("p", null,
                    "Similarly, to sort a row, provide the header in ",
                    React.createElement("code", null, "rowHeaderText"),
                    " and specify the direction using",
                    React.createElement("code", null, "rowSortOrder"),
                    ". This approach allows precise and independent control over sorting behavior for both columns and rows based on the provided headers.")),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the value sorting can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/sorting#value-sorting" }, "documentation section"),
                ".")));
    };
    return ValueSorting;
}(sample_base_1.SampleBase));
exports.ValueSorting = ValueSorting;
