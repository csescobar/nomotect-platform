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
exports.Stacked = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./stacked-header.css");
var Stacked = /** @class */ (function (_super) {
    __extends(Stacked, _super);
    function Stacked(props) {
        var _this = _super.call(this, props) || this;
        _this.toolbar = ['ColumnChooser'];
        _this.HeaderTemplate = function () {
            return (React.createElement("div", null,
                React.createElement("span", { id: "column-chooser-text", style: { position: 'relative', left: '5px' } }, "Column Options")));
        };
        // Render TreeView in the column chooser's Content
        _this.Template = function (props) {
            var parentNodes = [
                { id: 1, name: 'Order Details', hasChild: true, expanded: true },
                { id: 2, name: 'Shipment Details', hasChild: true, expanded: true },
                { id: 3, name: 'Price Details', hasChild: true, expanded: true },
            ];
            var treeData = [];
            if (props.columns && props.columns.length) {
                treeData = props.columns.map(function (column) {
                    var parentId;
                    switch (column.field) {
                        case 'orderID':
                        case 'orderName':
                        case 'orderDate':
                            parentId = 1;
                            break;
                        case 'shipMentCategory':
                        case 'shippedDate':
                        case 'units':
                            parentId = 2;
                            break;
                        case 'unitPrice':
                        case 'price':
                            parentId = 3;
                            break;
                        default:
                            break;
                    }
                    return {
                        id: column.uid,
                        name: column.headerText,
                        pid: parentId,
                        isChecked: column.visible
                    };
                });
                var uniquePids_1 = [];
                treeData.forEach(function (item) {
                    if (!uniquePids_1.includes(item.pid)) {
                        uniquePids_1.push(item.pid);
                    }
                });
                var filteredParents = parentNodes.filter(function (parent) { return uniquePids_1.includes(parent.id); });
                treeData.push.apply(treeData, filteredParents);
            }
            else {
                treeData = [];
            }
            var fields = { dataSource: treeData, id: 'id', parentID: 'pid', text: 'name', hasChildren: 'hasChild' };
            React.useEffect(function () {
                if (_this.treeObj) {
                    _this.treeObj.setProperties({ fields: fields });
                }
            }, [props.columns]);
            return (React.createElement("div", null, props.columns && props.columns.length ? (React.createElement(ej2_react_navigations_1.TreeViewComponent, { fields: fields, cssClass: "no-border", showCheckBox: true, nodeClicked: _this.nodeCheck, keyPress: _this.nodeCheck, ref: function (treeview) { _this.treeObj = treeview; } })) : (React.createElement("div", { className: "no-record-text" }, "No Matches Found"))));
        };
        _this.FooterTemplate = function () {
            return (React.createElement("div", { id: "columnChooserFooter" },
                React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: _this.columnChooserSubmit }, "Apply"),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: _this.columnChooserClose }, "Close")));
        };
        // Handle checking/unchecking nodes in the TreeView (column chooser)
        _this.nodeCheck = function (args) {
            var checkedNode = [args.node];
            if (args.event.target.classList.contains('e-fullrow') || args.event.key == "Enter") {
                var getNodeDetails = _this.treeObj.getNode(args.node);
                if (getNodeDetails.isChecked == 'true') {
                    _this.treeObj.uncheckAll(checkedNode);
                }
                else {
                    _this.treeObj.checkAll(checkedNode);
                }
            }
        };
        _this.columnChooserClose = function () {
            _this.gridInstance.grid.columnChooserModule.hideDialog();
        };
        // Apply the column chooser selection
        _this.columnChooserSubmit = function () {
            var checkedElements = [];
            var uncheckedElements = [];
            var showColumns = _this.gridInstance.getVisibleColumns().filter(function (column) { return (column.showInColumnChooser === true); });
            showColumns = showColumns.map(function (col) { return col.headerText; });
            var treeItems = document.querySelectorAll('.e-list-item');
            treeItems.forEach(function (item) {
                var itemDetails = _this.treeObj.getNode(item);
                if (!itemDetails.hasChildren) {
                    if (item.getAttribute('aria-checked') === 'true') {
                        checkedElements.push(itemDetails.text);
                    }
                    else {
                        uncheckedElements.push(itemDetails.text);
                    }
                }
            });
            showColumns = showColumns.filter(function (col) { return !uncheckedElements.includes(col); });
            checkedElements.forEach(function (item) {
                if (!showColumns.includes(item)) {
                    showColumns.push(item);
                }
            });
            var columnsToUpdate = { visibleColumns: showColumns, hiddenColumns: uncheckedElements };
            _this.gridInstance.grid.columnChooserModule.changeColumnVisibility(columnsToUpdate);
        };
        _this.columnChooserSettings = { template: _this.Template, headerTemplate: _this.HeaderTemplate, footerTemplate: _this.FooterTemplate };
        return _this;
    }
    Stacked.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { ref: function (g) { return _this.gridInstance = g; }, dataSource: data_1.stackedData, id: "TreeGrid", treeColumnIndex: 1, childMapping: 'subtasks', height: '350', allowPaging: true, pageSettings: { pageCount: 5 }, showColumnChooser: true, columnChooserSettings: this.columnChooserSettings, toolbar: this.toolbar, clipMode: 'EllipsisWithTooltip' },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { columns: [{ field: 'orderID', headerText: 'Order ID', width: 90, textAlign: 'Right', showInColumnChooser: false },
                                { field: 'orderName', headerText: 'Order Name', width: 190, textAlign: 'Left' },
                                { field: 'orderDate', headerText: 'Order Date', width: 110, textAlign: 'Right', format: 'yMd' }], headerText: 'Order Details', textAlign: 'Center' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { columns: [{ field: 'shipMentCategory', headerText: 'Shipment Category', width: 150, textAlign: 'Left' },
                                { field: 'shippedDate', headerText: 'Shipped Date', width: 120, textAlign: 'Right', format: 'yMd' },
                                { field: 'units', headerText: 'Units', width: 80, textAlign: 'Right' },], headerText: 'Shipment Details', textAlign: 'Center' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { columns: [{ field: 'unitPrice', headerText: 'Price per unit', format: 'C2', type: 'number', textAlign: 'Right', width: 120 },
                                { field: 'price', headerText: 'Total Price', width: 115, format: 'C', type: 'number' }], headerText: 'Price Details', textAlign: 'Center' })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Page, ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.ColumnChooser,] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example demonstrates how to use stacked headers and a customizable column chooser in the Tree Grid component.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null,
                    "The stacked header category explains the use of the ",
                    React.createElement("code", null, "columns -> column"),
                    " property to group columns under common headers, facilitating a clear and structured display of data for enhanced readability and user navigation. It categorizes columns into three groups: Order Details, comprising Order ID, Order Name, and Order Date; Shipment Details, comprising Shipment Category, Shipped Date, and Units; and Price Details, comprising Price per Unit and Total Price."),
                React.createElement("p", null,
                    "The ",
                    React.createElement("b", null, "Column Chooser Template"),
                    " category highlights a customizable layout that allows users to manage column visibility, offering flexibility and improving the overall user experience."),
                React.createElement("p", null,
                    "Key properties include ",
                    React.createElement("code", null, "columnChooserSettings -> headerTemplate"),
                    " for a custom header layout, ",
                    React.createElement("code", null, "columnChooserSettings -> template"),
                    " for a custom content layout,",
                    React.createElement("code", null, "columnChooserSettings -> footerTemplate"),
                    " for a custom footer layout, and ",
                    React.createElement("code", null, "enableSearching"),
                    " to enable or disable search functionality."),
                React.createElement("p", null,
                    "More information on the stacked header configuration can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-resizing#resize-stacked-column" }, "documentation"),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return Stacked;
}(sample_base_1.SampleBase));
exports.Stacked = Stacked;
