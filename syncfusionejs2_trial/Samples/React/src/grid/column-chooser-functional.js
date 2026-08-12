"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
function ColChooser() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var SAMPLE_CSS = "\n    #immediateContainer {\n      padding-bottom: 10px;\n      padding-left: 10px;\n      display: flex;\n      justify-content: flex-end;\n    }";
    var gridInstance;
    var filterSettings = { type: 'CheckBox' };
    var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    var customeridRule = { required: true, minLength: 5 };
    var orderidRules = { required: true, number: true };
    var freightRules = { required: true, min: 0 };
    var toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'];
    var columnChooserSettings = { mode: 'Immediate' };
    function checkboxOnChange(args) {
        if (args.checked) {
            gridInstance.columnChooserSettings = { mode: 'Immediate' };
        }
        else {
            gridInstance.columnChooserSettings = { mode: 'Default' };
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { id: "immediateContainer" },
                React.createElement(ej2_react_buttons_1.CheckBoxComponent, { label: 'Immediate Column Chooser Mode', labelPosition: 'After', checked: true, change: checkboxOnChange.bind(this) })),
            React.createElement(ej2_react_grids_1.GridComponent, { dataSource: data_1.orderedData, toolbar: toolbarOptions, allowPaging: true, showColumnChooser: true, allowSorting: true, pageSettings: { pageCount: 5 }, editSettings: editSettings, allowFiltering: true, filterSettings: filterSettings, ref: function (grid) { return gridInstance = grid; }, columnChooserSettings: columnChooserSettings, clipMode: 'EllipsisWithTooltip' },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderID', headerText: 'Order ID', width: '120', textAlign: 'Right', showInColumnChooser: false, validationRules: orderidRules, isPrimaryKey: true }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CustomerName', headerText: 'Customer Name', width: '150', showInColumnChooser: false, validationRules: customeridRule }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderDate', headerText: 'Order Date', width: '130', format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ShippedDate', headerText: 'Shipped Date', width: '130', format: 'yMd', textAlign: 'Right', editType: 'datepickeredit', validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Freight', headerText: 'Freight', width: '120', format: 'C2', textAlign: 'Right', validationRules: freightRules, editType: 'numericedit' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ShipCountry', headerText: 'Ship Country', width: '150', editType: 'dropdownedit' })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar, ej2_react_grids_1.Page, ej2_react_grids_1.ColumnChooser, ej2_react_grids_1.Sort, ej2_react_grids_1.Edit, ej2_react_grids_1.Filter] }))),
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
}
exports.default = ColChooser;
