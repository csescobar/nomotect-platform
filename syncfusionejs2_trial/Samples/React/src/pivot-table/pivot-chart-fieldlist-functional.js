"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var sample_base_1 = require("../common/sample-base");
var pivotData = require("./pivot-data/Pivot_Data.json");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_buttons_1 = require("@syncfusion/ej2-buttons");
/**
 * Pivot Chart Field List default sample
 */
var SAMPLE_CSS = "\n#PivotViewcontainerwrapper {\n    height: auto !important;\n}\n\n.e-bigger .e-tbar-btn .tb-icons {\n    font-size: 20px;\n}\n\n.e-tbar-btn .tb-icons {\n    font-family: 'e-icons';\n    speak: none;\n    font-size: 16px;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n}\n\n.e-tbar-menu-icon:before {\n    content: \"e725\";\n}\n\n#layout_switch {\n    align-items: center;\n    display: flex;\n    gap: 10px;\n}\n\n.label_option {\n    margin-bottom: unset;\n}\n\n.toolbar-temp {\n    margin-left: 10px;\n}\n\n.display_label {\n    margin-right: 10px;\n}\n\n#pivot_sidebar .e-sidebar.e-right {\n    border-left: unset !important;\n}\n\n.default-sidebar {\n    width: 35% !important;\n}\n\n#defaultToolbar .sb-icons {\n    font-size: 20px !important;\n}\n\n.pivot-fieldList{\n    display: none !important;\n}";
/* tslint:disable */
var Pivot_Data = pivotData.data;
var displayOptionDropDown;
var primaryViewDropDown;
var sideObj;
var toolbarObj;
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
function PivotChartFieldList() {
    var fieldlistObj;
    var pivotObj;
    var isChecked = true;
    var isInitial = false;
    var isPivotEngineReady = false;
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        setTimeout(function () {
            rendereComplete();
        });
        setTimeout(function () {
            if (pivotObj) {
                if (ej2_base_1.Browser.isDevice) {
                    sideObj.isOpen = false;
                    toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
                    pivotObj.toolbar = ['Grid', 'Chart', 'FieldList'];
                }
                pivotObj.layoutRefresh();
            }
        }, 700);
    }, []);
    var toolbarOptions = ['Grid', 'Chart'];
    var toolbarItems = [
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
    function afterPopulate() {
        setTimeout(function () {
            if (fieldlistObj && pivotObj) {
                fieldlistObj.updateView(pivotObj);
            }
        });
    }
    function afterPivotPopulate() {
        isPivotEngineReady = true;
        if (!ej2_base_1.Browser.isDevice && fieldlistObj && pivotObj) {
            fieldlistObj.update(pivotObj);
        }
    }
    function actionBegin(args) {
        if (args.actionName == "Show table view") {
            primaryViewDropDown.value = 'Table';
        }
        else if (args.actionName == "Show chart view") {
            primaryViewDropDown.value = 'Chart';
        }
    }
    function rendereComplete() {
        if (fieldlistObj) {
            fieldlistObj.updateView(pivotObj);
            fieldlistObj.update(pivotObj);
        }
    }
    function onPivotDataBound() {
        var ele = document.querySelectorAll('#displayOptionddl, #primaryViewddl, #toolbar-switch');
        if (ele.length === 3 && pivotObj && !isInitial) {
            isInitial = true;
            if ((0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.getInstance)('#displayOptionddl', ej2_dropdowns_1.DropDownList))) {
                displayOptionDropDown = new ej2_dropdowns_1.DropDownList({
                    floatLabelType: 'Auto',
                    width: 100,
                    value: displayOption,
                    change: function (args) {
                        displayOption = args.value;
                        if (args.value !== 'Both') {
                            primaryViewDropDown.readonly = true;
                            pivotObj.displayOption = { view: args.value };
                        }
                        else if (args.value == 'Both') {
                            primaryViewDropDown.readonly = false;
                            pivotObj.displayOption = {
                                view: args.value,
                                primary: primaryViewDropDown.value,
                            };
                        }
                        pivotObj.refresh();
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
                        if (pivotObj.displayOption.view == 'Both') {
                            pivotObj.displayOption = { view: 'Both', primary: args.value };
                            pivotObj.refresh();
                        }
                    }
                });
                primaryViewDropDown.appendTo('#primaryViewddl');
            }
            if ((0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.getInstance)('#toolbar-switch', ej2_buttons_1.Switch))) {
                var layoutSwitch = new ej2_buttons_1.Switch({
                    checked: isChecked,
                    cssClass: 'pivot-toolbar-switch',
                    change: function (args) {
                        isChecked = args.checked;
                        pivotObj.showToolbar = !pivotObj.showToolbar;
                        pivotObj.refresh();
                    }
                });
                layoutSwitch.appendTo('#toolbar-switch');
            }
        }
    }
    function onDataBound() {
        if (pivotObj) {
            if (ej2_base_1.Browser.isDevice) {
                pivotObj.element.style.width = '100%';
                pivotObj.allowCalculatedField = true;
                pivotObj.showFieldList = true;
            }
            pivotObj.tooltip.destroy();
            pivotObj.refresh();
        }
    }
    function onLoad() {
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
    }
    function ToolbarCliked(args) {
        if (args.item.id == 'fieldlist') {
            sideObj.toggle();
            toolbarObj.items[3].prefixIcon = sideObj.isOpen ? 'sb-icons sb-icon-Next' : 'sb-icons sb-icon-Previous';
            toolbarObj.items[3].tooltipText = sideObj.isOpen ? 'Collapse FieldList' : 'Expand FieldList';
        }
        if (ej2_base_1.Browser.isDevice) {
            sideObj.isOpen = false;
            toolbarObj.items[3].prefixIcon = 'sb-icons sb-icon-Next pivot-fieldList';
        }
    }
    function beforeCreate() {
        if (pivotObj) {
            isInitial = false;
            pivotObj.layoutRefresh();
        }
    }
    function onChange() {
        if (!sideObj.isOpen) {
            document.getElementById('pivot_container').style.width = '100%';
        }
        else {
            document.getElementById('pivot_container').style.width = '64%';
        }
        setTimeout(function () {
            if (pivotObj) {
                pivotObj.layoutRefresh();
            }
        }, 700);
    }
    function chartOnLoad(args) {
        var selectedTheme = location.hash.split("/")[1];
        selectedTheme = selectedTheme ? selectedTheme : "Material";
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    }
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: "control-section", style: { overflow: 'auto' } },
            React.createElement("div", { style: { width: '100%' } },
                React.createElement(ej2_react_navigations_1.ToolbarComponent, { ref: function (d) { return toolbarObj = d; }, id: "defaultToolbar", height: "50px", clicked: ToolbarCliked, items: toolbarItems, beforeCreate: function () { return beforeCreate(); } })),
            React.createElement("div", { id: 'pivot_sidebar', className: 'maincontent', style: { width: '100%', height: '720px' } },
                React.createElement("div", { id: 'pivot_container', style: { width: '64%' } },
                    React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'PivotView', ref: function (d) { return pivotObj = d; }, enginePopulated: afterPivotPopulate.bind(this), actionBegin: actionBegin.bind(this), dataBound: onPivotDataBound.bind(this), width: '100%', height: '350', gridSettings: { columnWidth: 140 }, chartSettings: { title: 'Sales Analysis', chartSeries: { type: 'Column' }, load: chartOnLoad.bind(this) }, displayOption: { view: 'Both', primary: 'Chart' }, toolbar: toolbarOptions, showToolbar: true },
                        React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.PivotChart, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.FieldList] })))),
            React.createElement("aside", null,
                React.createElement(ej2_react_navigations_1.SidebarComponent, { ref: function (d) { return sideObj = d; }, height: '100%', id: 'defaultSidebar', className: 'default-sidebar', target: ".maincontent", type: "Auto", isOpen: true, position: "Right", enableGestures: false, change: function () { return onChange(); } },
                    React.createElement(ej2_react_pivotview_1.PivotFieldListComponent, { id: 'PivotFieldList', ref: function (d) { return fieldlistObj = d; }, enginePopulated: afterPopulate.bind(this), dataSourceSettings: dataSourceSettings, renderMode: "Fixed", allowCalculatedField: true, enableFieldSearching: true, load: onLoad, dataBound: onDataBound.bind(this) },
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
}
exports.default = PivotChartFieldList;
