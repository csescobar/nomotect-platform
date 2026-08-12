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
exports.Virtualization = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var sample_base_1 = require("../common/sample-base");
var data_1 = require("./data");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
require("./virtualization.css");
var Virtualization = /** @class */ (function (_super) {
    __extends(Virtualization, _super);
    function Virtualization() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.flag = true;
        _this.enableVirtualization = true;
        _this.loadButton = null;
        _this.data = [];
        _this.toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        _this.editSettings = { allowEditing: true, allowDeleting: true, newRowPosition: 'Top' };
        _this.validationSno = { required: true, digits: true };
        _this.validationRule = { required: true };
        _this.ratingTemplate = function (props) {
            return (React.createElement("div", null,
                React.createElement(ej2_react_inputs_1.RatingComponent, { value: props.Rating, cssClass: 'custom-rating', readOnly: true })));
        };
        _this.paymentMethodTemplate = function (props) {
            return (React.createElement("div", { className: "e-payment-info" },
                React.createElement("img", { src: "src/grid/images/payment/".concat(props.PaymentMethod, ".svg"), alt: props.PaymentMethod }),
                React.createElement("span", null, props.PaymentMethod)));
        };
        _this.orderStatusTemplate = function (props) {
            if (props.OrderStatus === "Delivered") {
                return (React.createElement("div", { className: "virtual-statustemp e-deliveredcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-deliveredcolor" }, "Delivered")));
            }
            if (props.OrderStatus === "Shipped") {
                return (React.createElement("div", { className: "virtual-statustemp e-shippedcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-shippedcolor" }, "Shipped")));
            }
            if (props.OrderStatus === "Packed") {
                return (React.createElement("div", { className: "virtual-statustemp e-packedcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-packedcolor" }, "Packed")));
            }
            if (props.OrderStatus === "Processing") {
                return (React.createElement("div", { className: "virtual-statustemp e-processingcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-processingcolor" }, "Processing")));
            }
            if (props.OrderStatus === "Canceled") {
                return (React.createElement("div", { className: "virtual-statustemp e-cancelcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-cancelcolor" }, "Canceled")));
            }
            if (props.OrderStatus === "Returned") {
                return (React.createElement("div", { className: "virtual-statustemp e-returnedcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-returnedcolor" }, "Returned")));
            }
            if (props.OrderStatus === "Ordered") {
                return (React.createElement("div", { className: "virtual-statustemp e-orderedcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-orderedcolor" }, "Ordered")));
            }
        };
        _this.priorityTemplate = function (props) {
            if (props.Priority === "High") {
                return (React.createElement("div", { className: "virtual-statustemp e-highcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-highcolor" }, "High")));
            }
            if (props.Priority === "Low") {
                return (React.createElement("div", { className: "virtual-statustemp e-lowcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-lowcolor" }, "Low")));
            }
            if (props.Priority === "Medium") {
                return (React.createElement("div", { className: "virtual-statustemp e-mediumcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-mediumcolor" }, "Medium")));
            }
            if (props.Priority === "Critical") {
                return (React.createElement("div", { className: "virtual-statustemp e-criticalcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-criticalcolor" }, "Critical")));
            }
        };
        _this.paymentStatusTemplate = function (props) {
            if (props.PaymentStatus === "Paid") {
                return (React.createElement("div", { className: "virtual-statustemp e-paidcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-paidcolor" }, "Paid")));
            }
            if (props.PaymentStatus === "Pending") {
                return (React.createElement("div", { className: "virtual-statustemp e-pendingcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-pendingcolor" }, "Pending")));
            }
            if (props.PaymentStatus === "Refunded") {
                return (React.createElement("div", { className: "virtual-statustemp e-refundcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-refundcolor" }, "Refunded")));
            }
            if (props.PaymentStatus === "Failed") {
                return (React.createElement("div", { className: "virtual-statustemp e-failedcolor" },
                    React.createElement("span", { className: "virtual-statustxt e-failedcolor" }, "Failed")));
            }
        };
        return _this;
    }
    Virtualization.prototype.onclick = function () {
        this.loadButton.disabled = true;
        if (!this.data.length) {
            this.show();
            (0, data_1.createVirtualOrderData)();
            this.date1 = new Date().getTime();
            this.grid.dataSource = this.data = data_1.virtualOrderData;
            this.grid.editSettings.allowAdding = true;
        }
    };
    Virtualization.prototype.show = function () {
        document.getElementById('popup').style.display = 'inline-block';
    };
    Virtualization.prototype.hide = function () {
        if (this.flag && this.date1) {
            this.date2 = new Date().getTime();
            document.getElementById('performanceTime').innerHTML = 'Time Taken: ' + (this.date2 - this.date1) + 'ms';
            this.flag = false;
        }
        document.getElementById('popup').style.display = 'none';
    };
    Virtualization.prototype.load = function (args) {
        if (this.enableVirtualization) {
            args.enableSeamlessScrolling = true;
        }
    };
    Virtualization.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'div-button' },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-info', ref: function (btn) { _this.loadButton = btn; }, onClick: this.onclick.bind(this) }, "Load 100K Data"),
                    React.createElement("span", { id: "popup" },
                        React.createElement("span", { id: "gif", className: "imagepop" })),
                    React.createElement("span", { id: "performanceTime" }, "Time Taken: 0 ms")),
                React.createElement(ej2_react_grids_1.GridComponent, { id: "VirtualScroll", dataSource: [], enableVirtualization: this.enableVirtualization, clipMode: 'EllipsisWithTooltip', enableColumnVirtualization: true, height: 400, rowHeight: 50, ref: function (g) { return _this.grid = g; }, dataBound: this.hide.bind(this), load: this.load.bind(this), toolbar: this.toolbarOptions, editSettings: this.editSettings },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "OrderID", headerText: "Order ID", width: 110, isPrimaryKey: true, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "OrderDate", headerText: "Order Date", width: 140, format: "yMd", textAlign: "Right", editType: "datepickeredit" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipDate", headerText: "Ship Date", width: 140, format: "yMd", textAlign: "Right", editType: "datepickeredit" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "OrderStatus", headerText: "Order Status", width: 140, textAlign: "Center", editType: "dropdownedit", template: this.orderStatusTemplate, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Priority", headerText: "Priority", width: 120, textAlign: "Center", editType: "dropdownedit", template: this.priorityTemplate }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "CustomerName", headerText: "Customer Name", width: 190, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "CustomerID", headerText: "Customer ID", width: 110, visible: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Email", headerText: "Email", width: 200 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Phone", headerText: "Phone Number", width: 140, textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipAddress", headerText: "Ship Address", width: 180 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipCity", headerText: "Ship City", width: 120 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipState", headerText: "Ship State Code", width: 130 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipPostalCode", headerText: "Ship Postal Code", width: 130, textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipCountry", headerText: "Ship Country", width: 150 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ProductName", headerText: "Product Name", width: 250 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ProductID", headerText: "Product ID", width: 110, visible: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Category", headerText: "Category", width: 120 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Warehouse", headerText: "Ware house", width: 110, visible: false, editType: "dropdownedit" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "InventoryCount", headerText: "Inventory Count", width: 150, textAlign: "Right", visible: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Quantity", headerText: "Quantity", width: 100, textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "UnitPrice", headerText: "Unit Price", width: 110, format: "C2", textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Discount", headerText: "Discount (%)", width: 120, textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Tax", headerText: "Tax (%)", width: 100, textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "SubTotal", headerText: "Sub Total", width: 110, format: "C2", textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TaxAmount", headerText: "Tax Amount", width: 110, format: "C2", textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ShipFee", headerText: "Ship Fee", width: 120, format: "C2", textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TotalAmount", headerText: "Total Amount", width: 120, format: "C2", textAlign: "Right", editType: "numericedit", edit: { params: { showSpinButton: false } } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "PaymentMethod", headerText: "Payment Method", width: 140, editType: "dropdownedit", template: this.paymentMethodTemplate, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "PaymentStatus", headerText: "Payment Status", width: 140, textAlign: "Center", editType: "dropdownedit", template: this.paymentStatusTemplate, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Rating", headerText: "Delivery Rating", width: 160, textAlign: "Center", visible: false, template: this.ratingTemplate, editType: "dropdownedit" })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Toolbar, ej2_react_grids_1.Edit] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample highlights row and column virtualization in the Grid component, allowing efficient rendering and smooth scrolling of large datasets with excellent performance, along with full CRUD support and column templates.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The virtual scrolling feature in the Grid renders only the rows and columns that are currently visible in the viewport, rather than loading the entire dataset into the DOM. This approach significantly improves performance when working with large data sources by reducing the number of DOM elements."),
                React.createElement("p", null,
                    "To enable row virtualization, set the",
                    React.createElement("code", null,
                        React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", className: "code", href: "http://ej2.syncfusion.com/react/documentation/api/grid/#enablevirtualization" }, "enableVirtualization")),
                    "property to ",
                    React.createElement("code", null, "true"),
                    ". For column virtualization, set the",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "http://ej2.syncfusion.com/react/documentation/api/grid/#enablecolumnvirtualization" }, "enableColumnVirtualization")),
                    " property to ",
                    React.createElement("code", null, "true"),
                    ". When using virtualization, it is essential to define the ",
                    React.createElement("code", null,
                        React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", className: "code", href: "http://ej2.syncfusion.com/react/documentation/api/grid/#height" }, "height")),
                    "property so that the Grid can accurately calculate the number of visible rows. For seamless scrolling, set ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/loadeventargs#enableSeamlessScrolling" }, "args.enableSeamlessScrolling")),
                    " as ",
                    React.createElement("code", null, "true"),
                    " in the Grid's ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/index-default#load" }, "load")),
                    " event. This ensures smooth vertical and horizontal transitions, providing a smoother experience during fast scrolling when virtualization is enabled."),
                React.createElement("p", null, "In this example, click the \"Load 100K Data\" button to bind a dataset containing 100,000 rows and 30 columns. Then, scroll vertically and horizontally to experience the virtualized rendering in action. Full data editing support is available with the virtualization feature."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use the virtual scrolling functionality, inject the ",
                    React.createElement("code", null, "VirtualScroll"),
                    " module into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "For more detailed information about virtual scrolling, refer to this ",
                    React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/scrolling/virtual-scrolling" }, "documentation.")),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return Virtualization;
}(sample_base_1.SampleBase));
exports.Virtualization = Virtualization;
