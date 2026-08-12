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
exports.DOMVirtualGrid = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var sample_base_1 = require("../common/sample-base");
var ej2_data_1 = require("@syncfusion/ej2-data");
require("./dom-virtualization.css");
function statusTemplate(props) {
    return (React.createElement("div", null, props.Status === "Active" ?
        React.createElement("div", { className: "statustemp e-activecolor" },
            React.createElement("span", { className: "statustxt e-activecolor" }, props.Status))
        :
            React.createElement("div", { className: "statustemp e-inactivecolor" },
                React.createElement("span", { className: "statustxt e-inactivecolor" }, props.Status))));
}
function empTemplate(props) {
    return (React.createElement("div", null,
        React.createElement("div", { className: "empimg" },
            React.createElement("span", { className: "e-userimg ".concat(props.EmployeeImg === 'usermale' ? 'sf-icon-Male' : 'sf-icon-FeMale') })),
        React.createElement("span", { id: "Emptext" }, props.Employees)));
}
var DOMVirtualGrid = /** @class */ (function (_super) {
    __extends(DOMVirtualGrid, _super);
    function DOMVirtualGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDataChanged = true;
        _this.hostUrl = 'https://services.syncfusion.com/react/production/';
        _this.data = new ej2_data_1.DataManager({
            url: _this.hostUrl + 'api/UrlDataSource',
            adaptor: new ej2_data_1.UrlAdaptor()
        });
        _this.query = new ej2_data_1.Query().addParams('dataCount', '100000');
        return _this;
    }
    DOMVirtualGrid.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_grids_1.GridComponent, { id: "DOMVirtualGrid", dataSource: this.data, query: this.query, height: "400", rowHeight: 40, enableVirtualization: true, enableDomVirtualization: true, domVirtualizationSettings: { rowBuffer: 10 }, allowFiltering: true, allowSorting: true, allowSelection: true, clipMode: 'EllipsisWithTooltip', filterSettings: { type: 'CheckBox' }, ref: function (g) { return _this.gridInstance = g; } },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'EmployeeID', headerText: 'Employee ID', width: '150', isPrimaryKey: true, textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Employees', headerText: 'Employee Name', width: '260', template: empTemplate }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Designation', headerText: 'Designation', width: '170' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: '150', template: statusTemplate }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CurrentSalary', headerText: 'Current Salary', width: '160', format: 'C2', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Location', headerText: 'Location', width: '160' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Address', headerText: 'Address', width: '240' })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Filter, ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.DomVirtualization, ej2_react_grids_1.Sort] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases the DOM Virtualization feature in the Grid, enabling efficient handling of large datasets. Instead of rendering all records at once, the Grid intelligently displays only the rows visible within the viewport, ensuring smooth scrolling and responsive performance.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "DOM virtualization is a performance optimization feature that renders only the visible rows within the Grid viewport instead of rendering the entire dataset. This significantly improves performance when working with large volumes of data."),
                React.createElement("p", null,
                    "With this feature enabled, the Grid calculates the content height and renders only the necessary ",
                    React.createElement("code", null, "tr"),
                    " elements required for the visible portion of the Grid. As the user scrolls, previously rendered rows are replaced with newly required rows, ensuring that only a minimal number of DOM elements are maintained at any time. This behavior improves both rendering speed and memory usage, making the Grid highly efficient for large datasets."),
                React.createElement("p", null,
                    "DOM virtualization can be enabled by setting the ",
                    React.createElement("code", null, "enableDomVirtualization"),
                    " property to ",
                    React.createElement("code", null, "true"),
                    ". In this demo, the Grid is loaded with \"100k\" records using both DOM virtualization and row virtualization features. Row virtualization is enabled using the ",
                    React.createElement("code", null, "enableVirtualization"),
                    " property."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use DOM virtualization, inject the required modules ",
                    React.createElement("code", null, "DomVirtualization"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on DOM virtualization can be found in this",
                    React.createElement("a", { target: "_blank", "aria-label": "API link for documentation", href: "https://ej2.syncfusion.com/react/documentation/grid/getting-started" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return DOMVirtualGrid;
}(sample_base_1.SampleBase));
exports.DOMVirtualGrid = DOMVirtualGrid;
