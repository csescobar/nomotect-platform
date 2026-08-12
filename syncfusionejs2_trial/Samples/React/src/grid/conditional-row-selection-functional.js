"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
require("./conditional-row-selection.css");
var sample_base_1 = require("../common/sample-base");
function ConditionalRowSelection() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var selectionsettings = { persistSelection: true, checkboxOnly: true };
    var gridInstance;
    var filterSettings = { type: 'Excel' };
    var toolbarOptions = ['Edit', 'Update', 'Cancel'];
    var editSettings = { allowEditing: true };
    function isRowSelectable(data, column) {
        if (data.Status === "Canceled" || data.Status === "Delivered") {
            return false;
        }
        return true;
    }
    ;
    var productTemplate = function (props) {
        return (React.createElement("div", { className: "e-product-info" },
            React.createElement("img", { src: "src/grid/images/product/".concat(props.Product, ".png"), alt: props.Product }),
            React.createElement("span", null, props.Product)));
    };
    var statusTemplate = function (props) {
        return (React.createElement("div", { className: "e-status-info" },
            React.createElement("img", { src: "src/grid/images/status/".concat(props.Status, ".svg"), alt: props.Status }),
            React.createElement("span", null, props.Status)));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "ConditionalSelection", dataSource: data_1.ordersTrackData, ref: function (grid) { return gridInstance = grid; }, enableVirtualization: true, height: 400, isRowSelectable: isRowSelectable.bind(this), allowSorting: true, allowFiltering: true, filterSettings: filterSettings, selectionSettings: selectionsettings, toolbar: toolbarOptions, editSettings: editSettings },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { type: 'checkbox', width: '50', allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderID', isPrimaryKey: true, headerText: 'Order ID', width: '110', allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CustomerName', headerText: 'Customer Name', width: '170', allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Product', headerText: 'Product', width: '130', template: productTemplate, allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Amount', headerText: 'Amount', width: '110', format: 'C2', textAlign: 'Right', allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'OrderDate', headerText: 'Order Date', width: '130', format: "yMd", textAlign: "Right", allowEditing: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: '130', editType: "dropdownedit", template: statusTemplate })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Sort, ej2_react_grids_1.Selection, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Edit, ej2_react_grids_1.Filter] }))),
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
}
exports.default = ConditionalRowSelection;
