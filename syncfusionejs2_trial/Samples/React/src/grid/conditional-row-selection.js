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
exports.ConditionalRowSelection = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
require("./conditional-row-selection.css");
var sample_base_1 = require("../common/sample-base");
var ConditionalRowSelection = /** @class */ (function (_super) {
    __extends(ConditionalRowSelection, _super);
    function ConditionalRowSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectionsettings = { persistSelection: true, checkboxOnly: true };
        _this.filterSettings = { type: 'Excel' };
        _this.toolbarOptions = ['Edit', 'Update', 'Cancel'];
        _this.editSettings = { allowEditing: true };
        _this.productTemplate = function (props) {
            return (React.createElement("div", { className: "e-product-info" },
                React.createElement("img", { src: "src/grid/images/product/".concat(props.Product, ".png"), alt: props.Product }),
                React.createElement("span", null, props.Product)));
        };
        _this.statusTemplate = function (props) {
            return (React.createElement("div", { className: "e-status-info" },
                React.createElement("img", { src: "src/grid/images/status/".concat(props.Status, ".svg"), alt: props.Status }),
                React.createElement("span", null, props.Status)));
        };
        return _this;
    }
    ConditionalRowSelection.prototype.isRowSelectable = function (data, column) {
        if (data.Status === "Canceled" || data.Status === "Delivered") {
            return false;
        }
        return true;
    };
    ;
    ConditionalRowSelection.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_grids_1.GridComponent, { id: "ConditionalSelection", dataSource: data_1.ordersTrackData, ref: function (grid) { return _this.gridInstance = grid; }, height: 400, enableVirtualization: true, isRowSelectable: this.isRowSelectable.bind(this), allowSorting: true, allowFiltering: true, filterSettings: this.filterSettings, selectionSettings: this.selectionsettings, toolbar: this.toolbarOptions, editSettings: this.editSettings },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { type: 'checkbox', width: '50', allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', width: '110', allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CustomerName', headerText: 'Customer Name', width: '170', allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Product', headerText: 'Product', width: '130', template: this.productTemplate, allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Amount', headerText: 'Amount', width: '110', format: 'C2', textAlign: 'Right', allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderDate', headerText: 'Order Date', width: '130', format: "yMd", textAlign: "Right", allowEditing: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: '130', template: this.statusTemplate, editType: "dropdownedit" })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Selection, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Edit, ej2_react_grids_1.Filter, ej2_react_grids_1.Sort] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the conditional row selection of the Data Grid using checkbox selection. It allows end-users to select only specific rows based on certain conditions.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this demo, conditional row selection is implemented using the",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#isrowselectable" }, "isRowSelectable")),
                    " callback function. This callback function executes before the grid loads data, evaluates each row, and returns ",
                    React.createElement("strong", null, "false"),
                    " for orders with ",
                    React.createElement("strong", null, "Delivered"),
                    " or ",
                    React.createElement("strong", null, "Canceled"),
                    " status."),
                React.createElement("p", null,
                    "Selection is persisted by enabling ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/selectionSettings/#persistselection" }, "selectionSettings -> persistSelection")),
                    ". With this setting, selected rows remain checked across all operations. Persist selection requires at least one column to be defined as a primary key using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/column/#isprimarykey" }, "columns -> isPrimaryKey")),
                    " property."),
                React.createElement("p", null,
                    "More information on the conditional row selection can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/selection/row-selection" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, "React Data Grid component"),
                    " page."))));
    };
    return ConditionalRowSelection;
}(sample_base_1.SampleBase));
exports.ConditionalRowSelection = ConditionalRowSelection;
