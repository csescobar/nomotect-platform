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
exports.GanttSelection = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./selection.css");
var GanttSelection = /** @class */ (function (_super) {
    __extends(GanttSelection, _super);
    function GanttSelection() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dropdownModeListData = [
            { id: 'Row', type: 'Row' },
            { id: 'Cell', type: 'Cell' }
        ];
        _this.dropDownTypeListData = [
            { id: 'Single', type: 'Single' },
            { id: 'Multiple', type: 'Multiple' }
        ];
        _this.dropdownToggleListData = [
            { id: true, type: 'Enable' },
            { id: false, type: 'Disable' }
        ];
        _this.toggleValue = false;
        _this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId'
        };
        _this.labelSettings = {
            leftLabel: 'TaskName'
        };
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.selectionSettings = {
            mode: 'Row',
            type: 'Single',
            enableToggle: false
        };
        _this.projectStartDate = new Date('03/26/2025');
        _this.projectEndDate = new Date('07/20/2025');
        _this.onclick = function () {
            if (_this.checkBoxHover.checked) {
                _this.ganttInstance.enableHover = true;
            }
            else {
                _this.ganttInstance.enableHover = false;
            }
        };
        return _this;
    }
    GanttSelection.prototype.perform = function () {
        var mode = this.dropdownModeList.value;
        var type = this.dropdownTypeList.value;
        var toggle = this.dropdownToggleList.value;
        this.ganttInstance.selectionSettings.mode = mode;
        this.ganttInstance.selectionSettings.type = type;
        this.ganttInstance.selectionSettings.enableToggle = toggle;
    };
    GanttSelection.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-9' },
                    React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'GanttSelection', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.projectNewData, highlightWeekends: true, treeColumnIndex: 1, allowSelection: true, splitterSettings: this.splitterSettings, selectionSettings: this.selectionSettings, taskFields: this.taskFields, labelSettings: this.labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate },
                        React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] }))),
                React.createElement("div", { className: 'col-lg-3 property-section' },
                    React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                        React.createElement("table", { id: "property", className: "property-panel-table", title: "Properties", style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", null,
                                        React.createElement("div", { id: "hovercheckbox", style: { display: 'flex', alignItems: 'center', gap: '25px' } },
                                            React.createElement("label", { htmlFor: 'hover', style: { fontWeight: 400, marginBottom: '0px' } }, "Enable Hover"),
                                            React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (check) { return _this.checkBoxHover = check; }, id: "hover", className: "checkbox", checked: true, style: { padding: '0px' }, onClick: this.onclick })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%' } },
                                        React.createElement("div", { style: { fontSize: '15px' } }, "Selection Mode"))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                        React.createElement("div", { style: { width: '150px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.dropdownModeList = DropDownList; }, id: 'SelectionModeList', tabIndex: 1, dataSource: this.dropdownModeListData, fields: { text: 'type', value: 'id' }, value: 'Row', width: '125px' })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%' } },
                                        React.createElement("div", { style: { fontSize: '15px' } }, "Selection Type"))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                        React.createElement("div", { style: { width: '150px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.dropdownTypeList = DropDownList; }, id: 'SelectionTypeList', tabIndex: 1, dataSource: this.dropDownTypeListData, fields: { text: 'type', value: 'id' }, value: 'Single', width: '125px' })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%' } },
                                        React.createElement("div", { style: { fontSize: '15px' } }, "Toggle Selection"))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                        React.createElement("div", { style: { width: '150px' } },
                                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (DropDownList) { return _this.dropdownToggleList = DropDownList; }, id: 'SelectionTypeList', tabIndex: 1, dataSource: this.dropdownToggleListData, fields: { text: 'type', value: 'id' }, value: this.toggleValue, width: '125px' })))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '30%' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: this.perform.bind(this) }, " Update "))))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, " This sample showcases the selection feature in the Gantt Chart. It allows highlighting rows or cells.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This demo sample showcases the selection functionality in the Gantt Chart. The selection type can be configured using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettingsModel/#type" }, "selectionSettings.type"),
                    " property:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Single"),
                        " - Allows selection of a single row or cell."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Multiple"),
                        " - Enables selection of multiple rows or cells using Ctrl + click.")),
                React.createElement("p", null,
                    "The selection mode is set using the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettingsModel/#mode" }, "selectionSettings.mode"),
                    " property: They are:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "Row"),
                        " - Allows selection of entire rows."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Cell"),
                        " - Allows selection of individual cells."),
                    React.createElement("li", null,
                        React.createElement("code", null, "Both"),
                        " - Enables selection of both rows and cells simultaneously.")),
                React.createElement("p", null,
                    "Toggle selection is supported through the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/selectionSettingsModel/#enabletoggle" }, "selectionSettings.enableToggle"),
                    " property, which allows deselecting a selected item by clicking it again. The ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enablehover" }, "enableHover"),
                    " highlights the current row, header cell, and timeline cell on mouse hover, improving visual feedback during interaction."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a selection feature, we need to inject the ",
                    React.createElement("code", null, "Selection"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/selection/selection" }, "documentation section"),
                    "."))));
    };
    return GanttSelection;
}(sample_base_1.SampleBase));
exports.GanttSelection = GanttSelection;
