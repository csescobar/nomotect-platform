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
exports.PivotChartFieldList = void 0;
var React = require("react");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var pivotData = require("./pivot-data/Pivot_Data.json");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
/**
 * Pivot Field List default sample
 */
var SAMPLE_CSS = "\n#PivotViewcontainerwrapper {\n        height: auto !important;\n    }\n\n    .e-bigger .e-tbar-btn .tb-icons {\n        font-size: 20px;\n    }\n\n    .e-tbar-btn .tb-icons {\n        font-family: 'e-icons';\n        speak: none;\n        font-size: 16px;\n        font-style: normal;\n        font-weight: normal;\n        font-variant: normal;\n        text-transform: none;\n    }\n\n    .e-tbar-menu-icon:before {\n        content: \"e725\";\n    }\n\n    #layout_switch {\n        align-items: center;\n        display: flex;\n        gap: 10px;\n    }\n\n    .label_option {\n        margin-bottom: unset;\n    }\n\n    .toolbar-temp {\n        margin-left: 10px;\n    }\n\n    .display_label {\n        margin-right: 10px;\n    }\n    \n    #pivot_sidebar .e-sidebar.e-right {\n        border-left: unset !important;\n    }\n\n    .default-sidebar {\n        width: 35% !important;\n    }\n\n    #defaultToolbar .sb-icons {\n        font-size: 20px !important;\n    }\n\n    .pivot-fieldList{\n        display: none !important;\n    }";
/* tslint:disable */
var Pivot_Data = pivotData.data;
var displayOptionDropDown;
var primaryViewDropDown;
var displayOption = 'Both';
var preference = 'Chart';
var dataSourceSettings = {
    dataSource: Pivot_Data,
    expandAll: false,
    allowLabelFilter: true,
    allowValueFilter: true,
    columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
    rows: [{ name: 'Country' }, { name: 'Products' }],
    values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
    enableSorting: true
};
var PivotChartFieldList = /** @class */ (function (_super) {
    __extends(PivotChartFieldList, _super);
    function PivotChartFieldList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isChecked = true;
        _this.isPivotEngineReady = false;
        _this.isInitial = false;
        _this.toolbarOptions = ['Grid', 'Chart'];
        _this.toolbarItems = [
            {
                template: '<div class="toolbar-template" id="layout_switch"><label for="toolbar-switch" class="label_option">Show/hide Toolbar:</label><div id="toolbar-switch"></div></div>',
                id: 'layout'
            },
            {
                template: '<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Display Option:</label><select id="displayOptionddl" name="ddl-display-option"><option value="Both">Both</option><option value="Table">Table</option><option value="Chart">Chart</option></select></div>',
                id: 'display'
            },
            {
                template: '<div class="toolbar-template toolbar-temp"><label class="label_option display_label">Primary View:</label><select id="primaryViewddl" name="ddl-primary-view"><option value="Table">Table</option><option value="Chart">Chart</option></select></div>',
                id: 'preference'
            },
            { prefixIcon: "sb-icons sb-icon-Next", id: 'fieldlist', tooltipText: "Collapse FieldList", align: 'Right' },
        ];
        return _this;
    }
    PivotChartFieldList.prototype.componentDidMount = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.pivotObj) {
                if (ej2_base_1.Browser.isDevice) {
                    _this.sideObj.isOpen = false;
                    _this.toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
                    _this.pivotObj.toolbar = ['Grid', 'Chart', 'FieldList'];
                }
                _this.pivotObj.layoutRefresh();
            }
        }, 700);
    };
    PivotChartFieldList.prototype.afterPopulate = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.fieldlistObj && _this.pivotObj) {
                _this.fieldlistObj.updateView(_this.pivotObj);
            }
        });
    };
    PivotChartFieldList.prototype.afterPivotPopulate = function () {
        this.isPivotEngineReady = true;
        if (!ej2_base_1.Browser.isDevice && this.fieldlistObj && this.pivotObj) {
            this.fieldlistObj.update(this.pivotObj);
        }
    };
    PivotChartFieldList.prototype.actionBegin = function (args) {
        if (args.actionName == "Show table view") {
            primaryViewDropDown.value = 'Table';
        }
        else if (args.actionName == "Show chart view") {
            primaryViewDropDown.value = 'Chart';
        }
    };
    PivotChartFieldList.prototype.rendereComplete = function () {
        if (this.fieldlistObj) {
            this.fieldlistObj.updateView(this.pivotObj);
            this.fieldlistObj.update(this.pivotObj);
        }
    };
    PivotChartFieldList.prototype.onPivotDataBound = function () {
        var _this = this;
        var ele = document.querySelectorAll('#displayOptionddl, #primaryViewddl, #toolbar-switch');
        if (ele.length === 3 && this.pivotObj && !this.isInitial) {
            this.isInitial = true;
            if ((0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.getInstance)('#displayOptionddl', ej2_dropdowns_1.DropDownList))) {
                displayOptionDropDown = new ej2_dropdowns_1.DropDownList({
                    floatLabelType: 'Auto',
                    width: 100,
                    value: displayOption,
                    change: function (args) {
                        displayOption = args.value;
                        if (args.value !== 'Both') {
                            primaryViewDropDown.readonly = true;
                            _this.pivotObj.displayOption = { view: args.value };
                        }
                        else if (args.value == 'Both') {
                            primaryViewDropDown.readonly = false;
                            _this.pivotObj.displayOption = {
                                view: args.value,
                                primary: primaryViewDropDown.value,
                            };
                        }
                        _this.pivotObj.refresh();
                    }
                });
                displayOptionDropDown.appendTo('#displayOptionddl');
            }
            if ((0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.getInstance)('#primaryViewddl', ej2_dropdowns_1.DropDownList))) {
                primaryViewDropDown = new ej2_dropdowns_1.DropDownList({
                    floatLabelType: 'Auto',
                    width: 100,
                    value: preference,
                    change: function (args) {
                        preference = args.value;
                        if (_this.pivotObj.displayOption.view == 'Both') {
                            _this.pivotObj.displayOption = { view: 'Both', primary: args.value };
                            _this.pivotObj.refresh();
                        }
                    }
                });
                primaryViewDropDown.appendTo('#primaryViewddl');
            }
            if ((0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.getInstance)('#toolbar-switch', ej2_buttons_1.Switch))) {
                var layoutSwitch = new ej2_buttons_1.Switch({
                    checked: this.isChecked,
                    cssClass: 'pivot-toolbar-switch',
                    change: function (args) {
                        _this.isChecked = args.checked;
                        _this.pivotObj.showToolbar = !_this.pivotObj.showToolbar;
                        _this.pivotObj.refresh();
                    }
                });
                layoutSwitch.appendTo('#toolbar-switch');
            }
        }
    };
    PivotChartFieldList.prototype.onDataBound = function () {
        if (this.pivotObj) {
            if (ej2_base_1.Browser.isDevice) {
                this.pivotObj.element.style.width = '100%';
                this.pivotObj.allowCalculatedField = true;
                this.pivotObj.showFieldList = true;
            }
            this.pivotObj.tooltip.destroy();
            this.pivotObj.refresh();
        }
    };
    PivotChartFieldList.prototype.onLoad = function () {
        if (ej2_base_1.Browser.isDevice) {
            this.renderMode = 'Popup';
            this.target = '.control-section';
            (0, ej2_base_1.setStyleAttribute)(document.getElementById('PivotFieldList'), {
                'width': 0,
                'height': 0,
                'float': 'left',
                'display': 'none'
            });
        }
    };
    PivotChartFieldList.prototype.ToolbarCliked = function (args) {
        if (args.item.id == 'fieldlist') {
            this.sideObj.toggle();
            this.toolbarObj.items[3].prefixIcon = this.sideObj.isOpen ? 'sb-icons sb-icon-Next' : 'sb-icons sb-icon-Previous';
            this.toolbarObj.items[3].tooltipText = this.sideObj.isOpen ? 'Collapse FieldList' : 'Expand FieldList';
        }
        if (ej2_base_1.Browser.isDevice) {
            this.sideObj.isOpen = false;
            this.toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
        }
    };
    PivotChartFieldList.prototype.beforeCreate = function () {
        if (this.pivotObj) {
            this.isInitial = false;
            this.pivotObj.layoutRefresh();
        }
    };
    PivotChartFieldList.prototype.onChange = function () {
        var _this = this;
        if (!this.sideObj.isOpen) {
            document.getElementById('pivot_container').style.width = '100%';
        }
        else {
            document.getElementById('pivot_container').style.width = '64%';
        }
        setTimeout(function () {
            _this.pivotObj.layoutRefresh();
        }, 700);
    };
    PivotChartFieldList.prototype.chartOnLoad = function (args) {
        var selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    };
    PivotChartFieldList.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: "control-section", style: { overflow: 'auto' } },
                React.createElement("div", { style: { width: '100%' } },
                    React.createElement(ej2_react_navigations_1.ToolbarComponent, { id: "defaultToolbar", ref: function (d) { return _this.toolbarObj = d; }, height: "50px", clicked: this.ToolbarCliked.bind(this), items: this.toolbarItems, beforeCreate: function () { return _this.beforeCreate(); } })),
                React.createElement("div", { id: 'pivot_sidebar', className: 'maincontent', style: { width: '100%', height: '720px' } },
                    React.createElement("div", { id: 'pivot_container', style: { width: '64%' } },
                        React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return _this.pivotObj = d; }, enginePopulated: this.afterPivotPopulate.bind(this), actionBegin: this.actionBegin.bind(this), dataBound: this.onPivotDataBound.bind(this), width: '100%', height: '350', gridSettings: { columnWidth: 140 }, chartSettings: { title: 'Sales Analysis', chartSeries: { type: 'Column' }, load: this.chartOnLoad.bind(this) }, displayOption: { view: 'Both', primary: 'Chart' }, toolbar: this.toolbarOptions, showToolbar: true },
                            React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.PivotChart, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.FieldList] })))),
                React.createElement("aside", null,
                    React.createElement(ej2_react_navigations_1.SidebarComponent, { ref: function (d) { return _this.sideObj = d; }, height: '100%', id: 'defaultSidebar', className: 'default-sidebar', target: ".maincontent", type: "Auto", isOpen: true, position: "Right", enableGestures: false, change: function () { return _this.onChange(); } },
                        React.createElement(ej2_react_pivotview_1.PivotFieldListComponent, { id: 'PivotFieldList', ref: function (d) { return _this.fieldlistObj = d; }, enginePopulated: this.afterPopulate.bind(this), dataSourceSettings: dataSourceSettings, renderMode: "Fixed", allowCalculatedField: true, enableFieldSearching: true, load: this.onLoad, dataBound: this.onDataBound.bind(this) },
                            React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.CalculatedField] }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates rendering a pivot table and pivot chart along with the Excel-like field list feature. It also provides interactive controls to toggle the toolbar and dynamically switch between different display modes.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This example showcases the Syncfusion Pivot Table component alongside a Pivot Chart and a field list rendered statically within a sidebar layout. The static field list allows users to configure and customize the report by dragging and dropping fields into the appropriate sections such as rows, columns, values, and filters\u2014without relying on a popup interface. This enhances accessibility and usability, especially in wide-screen or dashboard environments."),
                React.createElement("p", null,
                    "The Pivot Table component supports three display modes, which are implemented in this sample and can be configurable using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/pivotview/displayOptionModel/#view" }, "displayOption.view"),
                    " property:"),
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { style: { verticalAlign: 'top', padding: '4px 0' } },
                                React.createElement("code", null, "Table :")),
                            React.createElement("td", null, "Displays only the pivot table (default).")),
                        React.createElement("tr", null,
                            React.createElement("td", { style: { verticalAlign: 'top', padding: '4px 0' } },
                                React.createElement("code", null, "Chart :")),
                            React.createElement("td", null, "Displays only the pivot chart.")),
                        React.createElement("tr", null,
                            React.createElement("td", { style: { verticalAlign: 'top', padding: '4px 0' } },
                                React.createElement("code", null, "Both :")),
                            React.createElement("td", null, "Displays both the pivot table and pivot chart.")))),
                React.createElement("br", null),
                React.createElement("p", null,
                    "A ",
                    React.createElement("strong", null, "Primary View"),
                    " dropdown lets users choose whether to prioritize the chart or table when both are shown."),
                React.createElement("p", null,
                    "Additionally, the ",
                    React.createElement("strong", null, "Show/Hide Toolbar"),
                    " toggle controls the visibility of the built-in toolbar, which includes options for switching views and chart types."),
                React.createElement("br", null),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "The pivot table features are segregated into individual modules. To take advantage of chart and toolbar support, we need to inject the",
                    React.createElement("code", null, " PivotChart"),
                    " module and ",
                    React.createElement("code", null, " Toolbar"),
                    " module into the",
                    React.createElement("code", null, " services"),
                    "."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the pivot chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pivotview/pivot-chart" }, "documentation section"),
                    "."))));
    };
    return PivotChartFieldList;
}(sample_base_1.SampleBase));
exports.PivotChartFieldList = PivotChartFieldList;
