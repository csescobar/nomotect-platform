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
exports.ColChooser = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var SAMPLE_CSS = "\n #immediateContainer {\n    padding-bottom: 10px;\n    padding-left: 10px;\n    display: flex;\n    justify-content: flex-end;\n}";
var ColChooser = /** @class */ (function (_super) {
    __extends(ColChooser, _super);
    function ColChooser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filterSettings = { type: 'CheckBox' };
        _this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        _this.columnChooserSettings = { mode: 'Immediate' };
        _this.customeridRule = { required: true, minLength: 5 };
        _this.orderidRules = { required: true, number: true };
        _this.freightRules = { required: true, min: 0 };
        _this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'];
        _this.checkboxOnChange = function (args) {
            if (args.checked) {
                _this.gridInstance.columnChooserSettings = { mode: 'Immediate' };
            }
            else {
                _this.gridInstance.columnChooserSettings = { mode: 'Default' };
            }
        };
        return _this;
    }
    ColChooser.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("style", null, SAMPLE_CSS),
                React.createElement("div", { id: "immediateContainer" },
                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { label: 'Immediate Column Chooser Mode', labelPosition: 'After', checked: true, change: this.checkboxOnChange })),
                React.createElement(ej2_react_grids_1.GridComponent, { dataSource: data_1.orderedData, ref: function (grid) { return _this.gridInstance = grid; }, toolbar: this.toolbarOptions, allowPaging: true, showColumnChooser: true, pageSettings: { pageCount: 5 }, allowSorting: true, editSettings: this.editSettings, allowFiltering: true, filterSettings: this.filterSettings, columnChooserSettings: this.columnChooserSettings, clipMode: 'EllipsisWithTooltip' },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right', showInColumnChooser: false, validationRules: this.orderidRules, isPrimaryKey: true }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CustomerName', headerText: 'Customer Name', width: '150', showInColumnChooser: false, validationRules: this.customeridRule }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderDate', headerText: 'Order Date', width: '130', format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ShippedDate', headerText: 'Shipped Date', width: '130', format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right', validationRules: this.freightRules, editType: 'numericedit' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ShipCountry', headerText: 'Ship Country', width: '150', editType: 'dropdownedit' })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar, ej2_react_grids_1.Page, ej2_react_grids_1.ColumnChooser, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.Edit] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how users can dynamically show or hide columns using the Column Chooser feature. It highlights flexible column visibility management through an interactive Grid interface.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Column Chooser feature enables users to dynamically control the visibility of columns in the Grid. To enable this functionality, set the",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid#showcolumnchooser" }, "showColumnChooser")),
                    " property to ",
                    React.createElement("code", null, "true"),
                    " and include the \u201CColumnChooser\u201D item in the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar" }, "toolbar")),
                    ". To prevent specific columns from appearing in the Column Chooser, set the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/column/#showincolumnchooser" }, "columns.showInColumnChooser")),
                    " property to ",
                    React.createElement("code", null, "false"),
                    "."),
                React.createElement("p", null, "Column visibility is managed by selecting or deselecting checkboxes in the Column Chooser dialog:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "By default, changes are applied to the Grid only after clicking the \u201COK\u201D button."),
                    React.createElement("li", null,
                        "To apply changes instantly, set the ",
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#type" }, "columnChooserSettings.mode")),
                        " property to ",
                        React.createElement("code", null, "Immediate"),
                        ".")),
                React.createElement("p", null, "In this demo, the column chooser mode can be switched using the \"Immediate Column Chooser Mode\" checkbox. When the column chooser button in the toolbar is clicked, it opens the dialog according to the selected mode, allowing users to show or hide columns by selecting or clearing the corresponding checkboxes."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Grid component features are segregated into individual feature-wise modules. To use column chooser feature and toolbar functionality, inject the required modules ",
                    React.createElement("code", null, "ColumnChooser"),
                    " and ",
                    React.createElement("code", null, "Toolbar"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on column chooser configuration can be found in the ",
                    React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/columns/column-chooser" }, " documentation.")),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return ColChooser;
}(sample_base_1.SampleBase));
exports.ColChooser = ColChooser;
