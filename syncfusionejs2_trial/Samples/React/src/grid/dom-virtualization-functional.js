"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
require("./dom-virtualization.css");
var avatarColors = [
    'avatar-red', 'avatar-blue', 'avatar-green', 'avatar-orange', 'avatar-purple'
];
function getInitials(name) {
    var parts = name.split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}
function getAvatarClass(name) {
    var sum = 0;
    for (var i = 0; i < name.length; i++) {
        sum += name.charCodeAt(i);
    }
    return avatarColors[sum % avatarColors.length];
}
var empAvatarTemplate = function (props) {
    return (React.createElement("div", { className: "customer-details" },
        React.createElement("div", { className: "customer-avatar ".concat(getAvatarClass(props.Employees)) }, getInitials(props.Employees)),
        React.createElement("div", { className: "customer-info" },
            React.createElement("p", { className: "customer-name" }, props.Employees),
            React.createElement("p", { className: "customer-email" }, props.Mail))));
};
var statusTemplate = function (props) {
    var active = props.Status === 'Active';
    return (React.createElement("div", { className: "statustemp ".concat(active ? 'e-activecolor' : 'e-inactivecolor') },
        React.createElement("span", { className: "statustxt ".concat(active ? 'e-activecolor' : 'e-inactivecolor') }, props.Status)));
};
var data = new ej2_data_1.DataManager({
    url: "https://services.syncfusion.com/react/production/api/UrlDataSource",
    adaptor: new ej2_data_1.UrlAdaptor()
});
var query = new ej2_data_1.Query().addParams('dataCount', '100000');
function DOMVirtualGrid() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "DOMVirtualGrid", dataSource: data, query: query, height: 400, rowHeight: 50, enableVirtualization: true, enableDomVirtualization: true, pageSettings: { pageSize: 100 }, domVirtualizationSettings: { rowBuffer: 10 }, clipMode: 'EllipsisWithTooltip', allowSorting: true, allowFiltering: true, allowSelection: true, filterSettings: { type: 'CheckBox' } },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'EmployeeID', headerText: 'Employee ID', width: '150', isPrimaryKey: true, textAlign: 'Right' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Employees', headerText: 'Employee Name', width: '260', template: empAvatarTemplate }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Designation', headerText: 'Designation', width: '170' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: '150', template: statusTemplate }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CurrentSalary', headerText: 'Current Salary', width: '160', format: 'C2', textAlign: 'Right' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Location', headerText: 'Location', width: '160' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Address', headerText: 'Address', width: '240' })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.Selection, ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.DomVirtualization] }))),
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
}
exports.default = DOMVirtualGrid;
