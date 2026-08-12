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
exports.FilterMenu = void 0;
var React = require("react");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_data_1 = require("@syncfusion/ej2-data");
var SAMPLE_CSS = "\nspan.e-input-group.e-ddl[aria-controls=\"ddlelement_popups\"],\nspan.e-input-group.e-ddl[aria-controls=\"ddlelement\"] {\n    margin-right: 15px;\n}";
var FilterMenu = /** @class */ (function (_super) {
    __extends(FilterMenu, _super);
    function FilterMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostUrl = 'https://services.syncfusion.com/react/production/';
        _this.data = new ej2_data_1.DataManager({ url: _this.hostUrl + 'api/UrlDataSource', adaptor: new ej2_data_1.UrlAdaptor });
        _this.query = new ej2_data_1.Query().addParams('dataCount', '10000');
        _this.filterType = [
            { text: 'Menu', value: 'Menu' },
            { text: 'Checkbox', value: 'CheckBox' },
            { text: 'Excel', value: 'Excel' },
        ];
        _this.filterSettings = { type: 'Menu' };
        _this.fields = { text: 'text', value: 'value' };
        return _this;
    }
    FilterMenu.prototype.onChange = function (sel) {
        this.checkBoxInstance.checked = false;
        this.immediateCheckBoxInstance.checked = false;
        this.gridInstance.filterSettings.enableInfiniteScrolling = false;
        this.gridInstance.filterSettings.mode = 'Default';
        this.gridInstance.filterSettings.type = sel.itemData.value;
        this.gridInstance.clearFiltering();
        if (this.gridInstance.filterSettings.type === 'Excel' || this.gridInstance.filterSettings.type === 'CheckBox') {
            this.checkBoxInstance.disabled = false;
            this.immediateCheckBoxInstance.disabled = false;
        }
        else {
            this.checkBoxInstance.disabled = true;
            this.immediateCheckBoxInstance.disabled = true;
        }
    };
    FilterMenu.prototype.checkboxOnChange = function (args) {
        this.gridInstance.filterSettings.enableInfiniteScrolling = args.checked;
    };
    FilterMenu.prototype.immediateCheckboxOnChange = function (args) {
        this.gridInstance.filterSettings.mode = args.checked ? 'Immediate' : 'Default';
    };
    FilterMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section row' },
                React.createElement("style", null, SAMPLE_CSS),
                React.createElement("div", null,
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center' } },
                        React.createElement("div", { style: { padding: '14px', display: 'inline-block' } },
                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "ddlelement", dataSource: this.filterType, fields: this.fields, change: this.onChange.bind(this), index: 0, popupHeight: "150px", width: "200px" })),
                        React.createElement("div", { style: { display: 'flex', gap: '8px' } },
                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (checkBox) { return _this.checkBoxInstance = checkBox; }, disabled: true, label: 'Enable OnDemand ', labelPosition: 'Before', change: this.checkboxOnChange.bind(this) }),
                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (checkBox) { return _this.immediateCheckBoxInstance = checkBox; }, disabled: true, label: 'Enable Immediate Filter ', labelPosition: 'Before', change: this.immediateCheckboxOnChange.bind(this) })))),
                React.createElement(ej2_react_grids_1.GridComponent, { dataSource: this.data, query: this.query, allowSorting: true, allowPaging: true, ref: function (grid) { return _this.gridInstance = grid; }, pageSettings: { pageSize: 10, pageCount: 5 }, allowFiltering: true, filterSettings: this.filterSettings, clipMode: 'EllipsisWithTooltip' },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'EmployeeID', headerText: 'Employee ID', width: '120', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Employees', headerText: 'Employee Name', width: '150' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Designation', headerText: 'Designation', width: '130', textAlign: 'Right' }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'CurrentSalary', headerText: 'CurrentSalary', width: '120', format: 'C2', textAlign: 'Right', editType: 'numericedit' })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Filter, ej2_react_grids_1.Page, ej2_react_grids_1.Sort] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the filtering capabilities of the Grid using multiple filter types. It shows how users can interact with different filtering options to refine and view data efficiently.")),
            React.createElement("div", { id: 'description' },
                "The filtering feature allows users to display only the matching records based on filter criteria. To enable filtering, set the ",
                React.createElement("code", null,
                    React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering" }, "allowFiltering")),
                " property to ",
                React.createElement("code", null, "true"),
                ". The Grid supports the following filter types:",
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/grid/filtering/filter-menu" }, "Menu"))),
                    React.createElement("li", null,
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/grid/filtering/excel-like-filter" }, "CheckBox"))),
                    React.createElement("li", null,
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/grid/filtering/excel-like-filter" }, "Excel")))),
                React.createElement("p", null,
                    "These can be configured using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#type" }, "filterSettings.type")),
                    " property. In this sample, the Menu filter is enabled by default, and you can switch to \"CheckBox\" or \"Excel\" filters using the dropdown. When using \"CheckBox\" or \"Excel\" filters, the Grid provides two enhancements:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "On-demand loading (Performance)"),
                        " loads data only when needed, improving speed and efficiency with large datasets. This can be enabled by setting ",
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/filtersettings#enableinfinitescrolling" }, "filterSettings.enableInfiniteScrolling")),
                        " property to ",
                        React.createElement("code", null, "true"),
                        "."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Immediate filtering (UI Experience)"),
                        " applies filters instantly as soon as you check or uncheck items, giving smoother interaction. This can be enabled by setting ",
                        React.createElement("code", null,
                            React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#mode" }, "filterSettings.mode")),
                        " property to ",
                        React.createElement("code", null, "Immediate"),
                        ".")),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use filtering functionality, inject the required modules ",
                    React.createElement("code", null, "Filter"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on the filter configuration can be found in the",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#filtersettings" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return FilterMenu;
}(sample_base_1.SampleBase));
exports.FilterMenu = FilterMenu;
