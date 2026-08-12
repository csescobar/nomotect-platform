"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
require("./batch.css");
var sample_base_1 = require("../common/sample-base");
function BatchEdit() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var gridRef;
    var toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
    var filterSettings = { type: 'CheckBox' };
    var editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true };
    var pageSettings = { pageCount: 5 };
    var selectionSettings = { mode: 'Cell', type: 'Multiple' };
    var getCategoryFromProduct = function (productName) {
        var item = data_1.inventoryStoreData.find(function (data) { return data.Product === productName; });
        return item ? item.Category : '';
    };
    var beforeBatchSave = function (args) {
        var changes = gridRef.getBatchChanges();
        changes.addedRecords.forEach(function (row) {
            row.Category = getCategoryFromProduct(row.Product);
        });
    };
    var cellEdit = function (args) {
        if (args.type === 'edit' && args.columnName === 'Product') {
            args.cancel = true;
        }
    };
    var categoryTemplate = function (props) {
        var category = (props.Category || getCategoryFromProduct(props.Product) || '').toString();
        var cls = 'e-cat-default';
        if (category === 'IT Asset')
            cls = 'e-cat-it-asset';
        else if (category === 'IT Infrastructure')
            cls = 'e-cat-it-infrastructure';
        else if (category === 'Admin')
            cls = 'e-cat-admin';
        else if (category === 'Security')
            cls = 'e-cat-security';
        else if (category === 'Facilities')
            cls = 'e-cat-facilities';
        else if (category === 'Finance')
            cls = 'e-cat-finance';
        else if (category === 'Sales')
            cls = 'e-cat-Sales';
        else if (category === 'Marketing')
            cls = 'e-cat-marketing';
        else if (category === 'Training')
            cls = 'e-cat-training';
        return (React.createElement("div", null,
            React.createElement("div", { style: { fontWeight: 600 } }, props.Product),
            React.createElement("span", { className: "e-category-badge ".concat(cls), style: { marginTop: '6px' } }, category)));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "BatchEdit", dataSource: data_1.inventoryStoreData, pageSettings: pageSettings, allowSorting: true, toolbar: toolbarOptions, allowPaging: true, editSettings: editSettings, allowFiltering: true, filterSettings: filterSettings, selectionSettings: selectionSettings, height: 400, clipMode: 'EllipsisWithTooltip', ref: function (grid) { return gridRef = grid; }, cellEdit: cellEdit, beforeBatchSave: beforeBatchSave },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'ID', headerText: 'ID', width: '150', textAlign: 'Right', isPrimaryKey: true, validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Product', headerText: 'Product Name', width: '160', template: categoryTemplate, editType: 'dropdownedit', defaultValue: 'MacBook Pro' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'VendorA', headerText: 'Vendor A (units)', textAlign: 'Right', width: '160', editType: 'numericedit', edit: { params: { showSpinButton: false } } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'VendorB', headerText: 'Vendor B (units)', textAlign: 'Right', width: '160', editType: 'numericedit', edit: { params: { showSpinButton: false } } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'VendorC', headerText: 'Vendor C (units)', textAlign: 'Right', width: '160', editType: 'numericedit', edit: { params: { showSpinButton: false } } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'VendorD', headerText: 'Vendor D (units)', textAlign: 'Right', width: '160', editType: 'numericedit', edit: { params: { showSpinButton: false } } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'UnitPrice', headerText: 'Price (per unit)', format: 'C2', width: '160', textAlign: 'Right', editType: 'numericedit', edit: { params: { showSpinButton: false } }, validationRules: { required: true, min: 1 } })),
                React.createElement(ej2_react_grids_1.AggregatesDirective, null,
                    React.createElement(ej2_react_grids_1.AggregateDirective, null,
                        React.createElement(ej2_react_grids_1.AggregateColumnsDirective, null,
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'VendorA', type: 'Sum', format: 'N', footerTemplate: 'Total: ${Sum}' }),
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'VendorB', type: 'Sum', format: 'N', footerTemplate: 'Total: ${Sum}' }),
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'VendorC', type: 'Sum', format: 'N', footerTemplate: 'Total: ${Sum}' }),
                            React.createElement(ej2_react_grids_1.AggregateColumnDirective, { field: 'VendorD', type: 'Sum', format: 'N', footerTemplate: 'Total: ${Sum}' })))),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Page, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Edit, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.Aggregate] })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the batch editing capabilities of the Grid, allowing users to perform multiple CRUD operations and save them to the data source in a single action. It showcases efficient data editing with bulk update and undo/redo support.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Grid supports multiple editing modes such as ",
                    React.createElement("code", null, "Normal"),
                    ", ",
                    React.createElement("code", null, "Dialog"),
                    ", ",
                    React.createElement("code", null, "Batch"),
                    ", and ",
                    React.createElement("code", null, "Cell"),
                    ", which can be configured using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/" }, "editSettings")),
                    " property. Batch mode is enabled by setting ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode" }, "editSettings.mode")),
                    " to ",
                    React.createElement("code", null, "Batch"),
                    ". The Grid also supports undo and redo functionality in this mode, enabling users to reverse or reapply changes during an editing session. This feature is enabled by setting ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#enableundoredo" }, "editSettings.enableUndoRedo")),
                    " to ",
                    React.createElement("code", null, "true"),
                    " and include the ",
                    React.createElement("code", null, "Undo"),
                    " and ",
                    React.createElement("code", null, "Redo"),
                    " items in the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar" }, "toolbar")),
                    "."),
                React.createElement("p", null, "With Batch editing, bulk data changes can be made efficiently. Editing begins by double\u2011clicking a cell and modifying its value. The edited cell is highlighted when moving to another cell, making changes easy to track. All modifications remain local until they are explicitly saved. The modified records are saved to the data source by clicking the toolbar\u2019s \u201CUpdate\u201D button, which performs a bulk save operation."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use the editing and toolbar functionality, inject the required modules",
                    React.createElement("code", null, "Edit"),
                    " and ",
                    React.createElement("code", null, "Toolbar"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the batch editing can be found in this",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/editing/batch-editing" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page.")))));
}
exports.default = BatchEdit;
