"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var property_pane_1 = require("../common/property-pane");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./selection.css");
var GanttSelection = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var ganttInstance = (0, react_1.useRef)(null);
    var dropdownModeList = (0, react_1.useRef)(null);
    var checkBoxHover = (0, react_1.useRef)(null);
    var dropdownTypeList = (0, react_1.useRef)(null);
    var dropdownToggleList = (0, react_1.useRef)(null);
    var dropdownModeListData = [
        { id: 'Row', type: 'Row' },
        { id: 'Cell', type: 'Cell' }
    ];
    var dropDownTypeListData = [
        { id: 'Single', type: 'Single' },
        { id: 'Multiple', type: 'Multiple' }
    ];
    var dropdownToggleListData = [
        { id: true, type: 'Enable' },
        { id: false, type: 'Disable' }
    ];
    var toggleValue = false;
    var perform = function () {
        ganttInstance.current.selectionSettings.mode = dropdownModeList.current.value;
        ganttInstance.current.selectionSettings.type = dropdownTypeList.current.value;
        ganttInstance.current.selectionSettings.enableToggle = dropdownToggleList.current.value;
    };
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    };
    var labelSettings = {
        leftLabel: 'TaskName'
    };
    var splitterSettings = {
        columnIndex: 2
    };
    var selectionSettings = {
        mode: 'Row',
        type: 'Single',
        enableToggle: false
    };
    var projectStartDate = new Date('03/26/2025');
    var projectEndDate = new Date('07/20/2025');
    var onclick = function () {
        if (checkBoxHover.current.checked) {
            ganttInstance.current.enableHover = true;
        }
        else {
            ganttInstance.current.enableHover = false;
        }
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: 'col-lg-9', style: { paddingLeft: "0px" } },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'GanttSelection', ref: ganttInstance, dataSource: data_1.projectNewData, highlightWeekends: true, treeColumnIndex: 1, allowSelection: true, splitterSettings: splitterSettings, selectionSettings: selectionSettings, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, enableHover: true, projectStartDate: projectStartDate, projectEndDate: projectEndDate },
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection] }))),
            React.createElement("div", { className: 'col-lg-3 property-section', style: { width: '21%' } },
                React.createElement(property_pane_1.PropertyPane, { title: 'Properties' },
                    React.createElement("table", { id: "property", className: "property-panel-table", title: "Properties" },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", null,
                                    React.createElement("div", { id: "hovercheckbox", style: { display: 'flex', alignItems: 'center', gap: '25px' } },
                                        React.createElement("label", { htmlFor: 'hover', style: { fontWeight: 400, marginBottom: '0px' } }, "Enable Hover"),
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: checkBoxHover, id: "hover", className: "checkbox", checked: true, style: { padding: '0px' }, onClick: onclick })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%' } },
                                    React.createElement("div", { style: { fontSize: '15px' } }, "Selection Mode"))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                    React.createElement("div", { style: { width: '150px' } },
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: dropdownModeList, id: 'SelectionModeList', tabIndex: 1, dataSource: dropdownModeListData, fields: { text: 'type', value: 'id' }, value: 'Row' })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%' } },
                                    React.createElement("div", { style: { fontSize: '15px' } }, "Selection Type"))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                    React.createElement("div", { style: { width: '150px' } },
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: dropdownTypeList, id: 'SelectionTypeList', tabIndex: 1, dataSource: dropDownTypeListData, fields: { text: 'type', value: 'id' }, value: 'Single' })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%' } },
                                    React.createElement("div", { style: { fontSize: '15px' } }, "Toggle Selection"))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingRight: '5px' } },
                                    React.createElement("div", { style: { width: '150px' } },
                                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: dropdownToggleList, id: 'SelectionTypeList', tabIndex: 1, dataSource: dropdownToggleListData, fields: { text: 'type', value: 'id' }, value: toggleValue })))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '30%' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { onClick: perform.bind(_this) }, " Update "))))))))),
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
exports.default = GanttSelection;
