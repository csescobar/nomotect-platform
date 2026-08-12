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
exports.Overview = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./overview.css");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_2 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_dropdowns_2 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_inputs_2 = require("@syncfusion/ej2-react-inputs");
var ej2_pdf_export_1 = require("@syncfusion/ej2-pdf-export");
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dataList = [
            { ID: 'Default', Text: 'Default' },
            { ID: 'Grid', Text: 'Grid' },
            { ID: 'Chart', Text: 'Chart' }
        ];
        _this.template = _this.columnTemplate.bind(_this);
        _this.statusTemplate = _this.statustemplate.bind(_this);
        _this.priorityTemplate = _this.prioritytemplate.bind(_this);
        _this.taskFields = {
            id: 'TaskId',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'TimeLog',
            progress: 'Progress',
            dependency: 'Predecessor',
            parentID: 'ParentId',
            constraintType: 'ConstraintType',
            constraintDate: 'ConstraintDate',
            resourceInfo: 'resource'
        };
        _this.resourceFields = {
            id: 'resourceId',
            name: 'resourceName'
        };
        _this.splitterSettings = {
            columnIndex: 4
        };
        _this.projectStartDate = new Date('01/25/2025');
        _this.projectEndDate = new Date('01/30/2026');
        _this.gridLines = 'Both';
        _this.toolbarOptions = ['ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'ExcelExport', 'CsvExport', 'PdfExport'];
        _this.timelineSettings = {
            timelineUnitSize: 60,
            showTooltip: true,
            topTier: {
                unit: 'Month',
                format: 'MMM yyyy'
            },
            bottomTier: {
                unit: 'Day',
                count: 4,
                format: 'dd'
            },
        };
        _this.rightLabel = function (props) {
            if (props.ganttProperties.resourceInfo && props.ganttProperties.resourceInfo.length !== 0) {
                return (React.createElement("div", { id: "rightLabel" },
                    React.createElement("img", { src: "src/gantt/images/".concat(props.ganttProperties.resourceNames, ".png"), style: { height: '25px', width: '25px' } }),
                    React.createElement("span", { style: { marginLeft: '3px' } }, props.Assignee)));
            }
        };
        _this.labelSettings = {
            taskLabel: '${Progress}%',
            rightLabel: _this.rightLabel
        };
        _this.eventMarkerDay1 = new Date('2025-03-13');
        _this.eventMarkerDay2 = new Date('2025-04-18');
        _this.eventMarkerDay3 = new Date('2025-05-30');
        _this.eventMarkerDay4 = new Date('2025-11-25');
        _this.pdfQueryCellInfo = function (args) {
            if (args.data.ganttProperties.resourceNames) {
                if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
                    args.image = { height: 30, width: 30, base64: args.data.taskData.resourcesImage };
                    args.value = "".concat(args.data.Assignee, "\n").concat(args.data.taskData.Department);
                }
            }
            // Set font color for Status or Priority columns
            if (args.column.field === 'Status' || args.column.field === 'Priority') {
                var style = args.column.field === 'Status' ? _this.StatusContent(args.value) : _this.PriorityContent(args.value); // args.value is the cell's value (e.g., "Completed" for Status, "High" for Priority)
                var rgbMatch = style.color.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
                if (rgbMatch) {
                    var rgbValues = rgbMatch[0].slice(4, -1).split(', ').map(Number);
                    args.style.fontColor = new ej2_pdf_export_1.PdfColor(rgbValues[0], rgbValues[1], rgbValues[2]);
                }
            }
        };
        _this.pdfQueryTaskbarInfo = function (args) {
            if (_this.ganttInstance.labelSettings.rightLabel && args.data.taskData.resourcesImage) {
                args.labelSettings.rightLabel.image = [{ base64: args.data.taskData.resourcesImage, height: 25, width: 25 }];
                args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
            }
        };
        _this.PriorityIcon = function (priority) {
            switch (priority) {
                case "Low":
                    _this.IconClass = "e-icons e-arrow-down e-icon-style";
                    break;
                case "Normal":
                    _this.IconClass = "e-icons e-arrow-right e-icon-style";
                    break;
                case "Critical":
                    _this.IconClass = "e-icons e-arrow-up e-icon-style";
                    break;
                case "High":
                    _this.IconClass = "e-icons e-arrow-up e-icon-style";
                    break;
            }
            return _this.IconClass;
        };
        _this.defaultTicks = { placement: 'Before', largeStep: 10, smallStep: 10, showSmallTicks: true };
        _this.tooltip = {
            placement: 'Before',
            isVisible: true,
            showOn: 'Hover'
        };
        _this.workDays = [
            { id: 'Sunday', day: 'Sunday' },
            { id: 'Monday', day: 'Monday' },
            { id: 'Tuesday', day: 'Tuesday' },
            { id: 'Wednesday', day: 'Wednesday' },
            { id: 'Thursday', day: 'Thursday' },
            { id: 'Friday', day: 'Friday' },
            { id: 'Saturday', day: 'Saturday' },
        ];
        _this.defaultValue = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
        //   Duration Unit
        _this.durationUnit = [
            { id: "Minute", Text: "Minute" },
            { id: "Hour", Text: "Hour" },
            { id: "Day", Text: "Day" }
        ];
        _this.durationFields = { text: 'Text', value: 'id' };
        _this.durationValue = 'Day';
        // view Type change
        _this.viewTypeData = [
            { id: "ResourceView", Text: "Resource View" },
            { id: "ProjectView", Text: "Project View" }
        ];
        _this.viewFields = { text: 'Text', value: 'id' };
        // View Mode
        _this.viewModeData = [
            { ID: "Default", Text: "Default" },
            { ID: "Grid", Text: "Grid" },
            { ID: "Chart", Text: "Chart" },
        ];
        _this.modeFields = { value: 'ID', text: 'Text' };
        return _this;
    }
    Overview.prototype.change = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.value == 'Grid') {
            gantt.setSplitterPosition('100%', 'position');
        }
        else if (args.value == 'Chart') {
            gantt.setSplitterPosition('0%', 'position');
        }
        else {
            gantt.setSplitterPosition('57%', 'position');
        }
    };
    ;
    Overview.prototype.toolbarClick = function (args) {
        if (args.item.id === "Overview_excelexport") {
            this.ganttInstance.excelExport();
        }
        else if (args.item.id === "Overview_csvexport") {
            this.ganttInstance.csvExport();
        }
        else if (args.item.id === "Overview_pdfexport") {
            this.ganttInstance.pdfExport();
        }
    };
    Overview.prototype.statustemplate = function (props) {
        var sts = this.Status(props.taskData.Status);
        var stsCon = this.StatusContent(props.taskData.Status);
        if (props.taskData.Status) {
            return (React.createElement("div", { className: 'columnTemplate' },
                React.createElement("div", { style: {
                        "display": "".concat(sts.display), "padding": "".concat(sts.padding), "gap": "".concat(sts.gap), "width": "".concat(sts.width), "height": "".concat(sts.height), "border": "".concat(sts.border), "justifyContent": "".concat(sts.justifyContent)
                    } },
                    React.createElement("span", { style: {
                            "width": "".concat(stsCon.width), "height": "".concat(stsCon.height), "fontStyle": "".concat(stsCon.fontStyle), "fontWeight": "".concat(stsCon.fontWeight), "fontSize": "".concat(stsCon.fontSize),
                            "lineHeight": "".concat(stsCon.lineHeight), "color": "".concat(stsCon.color), "padding": "".concat(stsCon.pad), "textAlign": "center"
                        } }, props.taskData.Status))));
        }
    };
    ;
    Overview.prototype.prioritytemplate = function (props) {
        var pri = this.PriorityIconStyle(props.taskData.Priority);
        var priCon = this.PriorityContent(props.taskData.Priority);
        var priClass = this.PriorityIcon(props.taskData.Priority);
        if (props.taskData.Priority) {
            return (React.createElement("div", { className: 'columnTemplate1', style: { display: 'flex' } },
                React.createElement("div", { className: priClass, style: {
                        "color": "".concat(pri.backgroundPri, " !important"), "marginTop": "".concat(pri.marginTop)
                    } },
                    React.createElement("span", { style: {
                            "width": "".concat(priCon.width), "height": "".concat(priCon.height), "fontStyle": "".concat(priCon.fontStyle), "fontSize": "".concat(priCon.fontSize),
                            "lineHeight": "".concat(priCon.lineHeight), "color": "".concat(priCon.color), "textAlign": "center", "marginLeft": "".concat(priCon.marginLeft)
                        } }, props.taskData.Priority))));
        }
    };
    ;
    Overview.prototype.columnTemplate = function (props) {
        var src = 'src/gantt/images/' + props.ganttProperties.resourceNames + '.png';
        if ((props.ganttProperties.resourceNames)) {
            var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
            if (gantt.enableRtl) {
                return (React.createElement("div", { className: 'columnTemplate' },
                    React.createElement("img", { src: src, height: '25px', width: '25px' }),
                    React.createElement("div", { style: { display: "inline-block", width: '100%', position: "relative", right: "8px", bottom: "5px" } }, props.ganttProperties.resourceNames)));
            }
            else {
                return (React.createElement("div", { className: 'columnTemplate', style: { display: 'flex', alignItems: 'center', gap: '8px', height: '100%' } },
                    React.createElement("div", null,
                        React.createElement("img", { src: src, height: '25px', width: '25px' })),
                    React.createElement("div", { style: { display: 'flex', flexDirection: 'column', justifyContent: 'center', lineHeight: '16px' } },
                        React.createElement("span", { style: { fontSize: '12px' } }, props.Assignee),
                        React.createElement("span", { style: { fontSize: '9px', textAlign: 'left' } }, props.taskData.Department))));
            }
        }
        else {
            return React.createElement("div", null);
        }
    };
    Overview.prototype.load = function () {
        var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind', 'fluent2', 'tailwind3', 'bootstrap5_3'];
        var theme = document.body.className.split(' ').find(function (cls) { return themeCollection.includes(cls); }) || '';
        this.CurrentTheme = theme ? true : false;
    };
    ;
    Overview.prototype.Status = function (status) {
        switch (status) {
            case "In Progress":
                this.statusStyleColor = (this.CurrentTheme) ? "#DFECFF" : "#2D3E57";
                this.display = 'flex';
                this.padding = '2px 10px';
                this.gap = '10px';
                this.width = '96px';
                this.height = '24px';
                this.border = 'solid 1px ${this.statusStyleColor}';
                break;
            case "Open":
                this.display = 'flex';
                this.justifyContent = 'center';
                this.gap = '10px';
                this.width = '96px';
                this.height = '24px';
                this.border = 'solid 1px red';
                break;
            case "On Hold":
                this.statusStyleColor = (this.CurrentTheme) ? "#766B7C" : "#CDCBD7";
                this.display = 'flex';
                this.justifyContent = 'center';
                this.gap = '10px';
                this.width = '96px';
                this.height = '24px';
                this.border = "solid 1px ".concat(this.statusStyleColor);
                break;
            case "Completed":
                this.statusStyleColor = (this.CurrentTheme) ? "#00A653" : "#92FFC8";
                this.display = 'flex';
                this.padding = '2px 10px';
                this.gap = '10px';
                this.width = '96px';
                this.height = '24px';
                this.border = "solid 1px ".concat(this.statusStyleColor);
                break;
        }
        return { display: this.display, padding: this.padding, gap: this.gap, width: this.width, height: this.height, border: this.border, justifyContent: this.justifyContent, color: this.color };
    };
    ;
    Overview.prototype.StatusContent = function (status) {
        switch (status) {
            case "In Progress":
                this.statusContentstyleColor = (this.CurrentTheme) ? "rgb(0, 106, 166)" : "rgb(52, 182, 255)";
                this.width = "72px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.fontWeight = '400';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.statusContentstyleColor;
                break;
            case "Open":
                this.width = "54px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.fontWeight = '400';
                this.fontSize = '14px';
                this.lineHeight = '22px';
                this.textAlign = 'center';
                this.color = 'rgb(255, 0, 0)';
                break;
            case "On Hold":
                this.statusContentstyleColor = (this.CurrentTheme) ? "rgb(118, 107, 124)" : "rgb(205, 203, 215)";
                this.width = "54px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.fontWeight = '400';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.statusContentstyleColor;
                break;
            case "Completed":
                this.statusContentstyleColor = (this.CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(146, 255, 200)";
                this.width = "74px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.fontWeight = '400';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.statusContentstyleColor;
        }
        return {
            width: this.width, height: this.height, fontStyle: this.fontStyle, fontWeight: this.fontWeight, fontSize: this.fontSize, lineHeight: this.lineHeight, textAlign: this.textAlign, color: this.color,
            backgroundColor: this.backgroundColor, pad: this.pad
        };
    };
    ;
    Overview.prototype.PriorityIconStyle = function (priority) {
        switch (priority) {
            case "Low":
                this.priorityStyle = (this.CurrentTheme) ? "#00A653" : "#FDFF88";
                this.marginTop = '2px';
                this.backgroundPri = this.priorityStyle;
                break;
            case "Normal":
                this.priorityStyle = (this.CurrentTheme) ? "#7100A6" : "#E3A9FF";
                this.marginTop = '2px';
                this.backgroundPri = this.priorityStyle;
                break;
            case "Critical":
                this.priorityStyle = (this.CurrentTheme) ? "#FF3740" : "#FFB5B8";
                this.marginTop = '2px';
                this.backgroundPri = this.priorityStyle;
                break;
            case "High":
                this.priorityStyle = (this.CurrentTheme) ? "#f35620" : "#FFB5B8";
                this.marginTop = '2px';
                this.backgroundPri = this.priorityStyle;
                break;
        }
        return { marginTop: this.marginTop, display: this.display, padding: this.padding, gap: this.gap, width: this.width, height: this.height, backgroundPri: this.backgroundPri };
    };
    ;
    Overview.prototype.PriorityContent = function (priority) {
        switch (priority) {
            case "Low":
                this.priorityContentStyle = (this.CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(253, 255, 136)";
                this.width = "28px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.marginLeft = '3px';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.priorityContentStyle;
                break;
            case "Normal":
                this.priorityContentStyle = (this.CurrentTheme) ? "rgb(113, 0, 166)" : "#rgb(227, 169, 255)";
                this.width = "28px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.marginLeft = '3px';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.priorityContentStyle;
                break;
            case "Critical":
                this.priorityContentStyle = (this.CurrentTheme) ? "rgb(255, 55, 64)" : "rgb(255, 181, 184)";
                this.width = "48px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.marginLeft = '3px';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.priorityContentStyle;
                break;
            case "High":
                this.priorityContentStyle = (this.CurrentTheme) ? "rgb(235, 99, 67)" : "rgb(255, 181, 184)";
                this.width = "31px";
                this.height = "22px";
                this.fontStyle = 'normal';
                this.marginLeft = '3px';
                this.fontSize = '14px';
                this.lineHeight = '20px';
                this.textAlign = 'center';
                this.color = this.priorityContentStyle;
                break;
        }
        return {
            width: this.width, height: this.height, fontStyle: this.fontStyle, marginLeft: this.marginLeft, fontSize: this.fontSize, lineHeight: this.lineHeight, textAlign: this.textAlign, color: this.color
        };
    };
    ;
    Overview.prototype.triggerSidebar = function () {
        if (this.sidebarobj) {
            this.sidebarobj.isOpen = true;
        }
    };
    Overview.prototype.closeSidebar = function () {
        this.sidebarobj.hide();
    };
    Overview.prototype.onChanged = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.rowHeight = args.value;
    };
    // Grid lines
    Overview.prototype.gridLinesChange = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.gridLines = 'Both';
        }
        else {
            gantt.gridLines = 'Vertical';
        }
    };
    Overview.prototype.showEventMarkers = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.eventMarkers = this.tempEvents;
        }
        else {
            this.tempEvents = gantt.eventMarkers;
            gantt.eventMarkers = null;
        }
    };
    // Show depenency lines
    Overview.prototype.dependencyChange = function (args) {
        var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
        if (args.checked) {
            if (ganttDependencyViewContainer) {
                ganttDependencyViewContainer.style.visibility = 'visible';
            }
        }
        else {
            ganttDependencyViewContainer.style.visibility = 'hidden';
        }
    };
    Overview.prototype.taskLabelChange = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.labelSettings.rightLabel = this.tempLabels;
        }
        else {
            this.tempLabels = gantt.labelSettings.rightLabel;
            gantt.labelSettings.rightLabel = null;
        }
    };
    Overview.prototype.select = function (args) {
        var workingDays = (0, ej2_base_1.extend)([], this.multiselectObj.value, [], true);
        workingDays.push(args.itemData.day);
        this.ganttInstance.workWeek = workingDays;
    };
    ;
    Overview.prototype.removed = function (args) {
        var index = this.ganttInstance.workWeek.indexOf(args.itemData.day);
        if (index !== -1) {
            this.ganttInstance.workWeek = this.multiselectObj.value;
        }
    };
    ;
    Overview.prototype.changeDuration = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.durationUnit = args.value;
    };
    // Timeline unit width
    Overview.prototype.unitChange = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        var width = args.value;
        gantt.timelineSettings.timelineUnitSize = width;
    };
    Overview.prototype.typeChange = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.viewType = args.value;
        if (document.getElementsByClassName('checkeddependency')[0].hidden !== true) {
            document.querySelectorAll('.e-switch')[2].ej2_instances[0].checked = true;
        }
    };
    Overview.prototype.modeChange = function (args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.value == 'Grid') {
            gantt.setSplitterPosition('100%', 'position');
        }
        else if (args.value == 'Chart') {
            gantt.setSplitterPosition('0%', 'position');
        }
        else {
            gantt.setSplitterPosition('50%', 'position');
        }
    };
    Overview.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: 'gantt-sidebar-parent' },
                    React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "sidebar", ref: function (Sidebar) { return _this.sidebarobj = Sidebar; }, type: "Over", className: "default-sidebar", width: "282px", target: "#sidebar-gantt", position: "Right" },
                        React.createElement("div", { className: "gantt-title-header" },
                            React.createElement("div", { className: "gantt-title" }, "Project Settings"),
                            React.createElement("span", { className: "e-closed", onClick: this.closeSidebar, style: { cursor: 'pointer' } })),
                        React.createElement("ul", { className: "settings-list", style: { margin: '15px 15px', paddingLeft: '5px' } },
                            React.createElement("label", { htmlFor: "rowHeightSlider", className: "gantt-labels-style" }, "Row height :"),
                            React.createElement("li", { className: "list-fields", style: { padding: '20px', paddingBottom: '0px', marginBottom: '0px' } },
                                React.createElement("div", { id: "rowHeightSlider" },
                                    React.createElement(ej2_react_inputs_2.SliderComponent, { value: 30, min: 40, max: 60, step: 5, changed: this.onChanged, ticks: this.defaultTicks, width: 180, tooltip: this.tooltip, ref: function (slider) { _this.defaultObj = slider; } }))),
                            React.createElement("li", { className: "list-fields" },
                                React.createElement("label", { htmlFor: "showGridLines", className: "gantt-labels-style" }, "Show Grid Lines :"),
                                React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                                    React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "showGridLinesSwitch", className: "checked", change: this.gridLinesChange }))),
                            React.createElement("li", { className: "list-fields" },
                                React.createElement("label", { htmlFor: "showGridLines", className: "gantt-labels-style" }, "Show event markers :"),
                                React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                                    React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "showGridLinesSwitch", className: "checked", checked: true, change: this.showEventMarkers }))),
                            React.createElement("li", { className: "list-fields" },
                                React.createElement("label", { htmlFor: "dependencyLines", className: "gantt-labels-style" }, "Show dependencies :"),
                                React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                                    React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "dependencyLines", className: "checkeddependency", checked: true, change: this.dependencyChange }))),
                            React.createElement("li", { className: "list-fields" },
                                React.createElement("label", { htmlFor: "taskLabelChange", className: "gantt-labels-style" }, "Show task labels :"),
                                React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                                    React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "taskLabelChange", className: "checked", checked: true, change: this.taskLabelChange }))),
                            React.createElement("li", { className: "list-fields section-header" },
                                React.createElement("label", { className: "scheduling" }, "Scheduling Settings")),
                            React.createElement("li", { className: "list-field stack-container" },
                                React.createElement("label", { htmlFor: "workDays", className: "gantt-labels-style" }, "Working days :"),
                                React.createElement("div", { style: { paddingLeft: '10px' } },
                                    React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { ref: function (multiselect) { return _this.multiselectObj = multiselect; }, id: "WorkWeek", style: { padding: '2px' }, mode: "CheckBox", value: this.defaultValue, dataSource: this.workDays, showDropDownIcon: true, popupHeight: '350px', fields: { text: 'day', value: 'id' }, select: this.select.bind(this), removed: this.removed.bind(this) },
                                        React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })))),
                            React.createElement("li", { className: "list-field stack-container" },
                                React.createElement("label", { htmlFor: "durationUnit", className: "gantt-labels-style" }, "Duration unit:"),
                                React.createElement("div", { style: { paddingLeft: '10px' } },
                                    React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "games", dataSource: this.durationUnit, fields: this.durationFields, change: this.changeDuration, value: this.durationValue, popupHeight: "220px" }))),
                            React.createElement("li", { className: "list-field stack-container" },
                                React.createElement("label", { htmlFor: "unitWidth", className: "gantt-labels-style" }, "Timeline width:"),
                                React.createElement("div", { style: { paddingLeft: '10px' } },
                                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { min: 10, value: 33, onChange: this.unitChange }))),
                            React.createElement("li", { className: "list-fields section-header" },
                                React.createElement("label", { className: "scheduling" }, "View Settings")),
                            React.createElement("li", { className: "list-field stack-container" },
                                React.createElement("label", { htmlFor: "viewType", className: "gantt-labels-style" }, "View type:"),
                                React.createElement("div", { style: { paddingLeft: '10px' } },
                                    React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "viewType", dataSource: this.viewTypeData, placeholder: 'View Type', fields: this.viewFields, change: this.typeChange }))),
                            React.createElement("li", { className: "list-field stack-container" },
                                React.createElement("label", { htmlFor: "viewMode", className: "gantt-labels-style" }, "View mode:"),
                                React.createElement("div", { style: { paddingLeft: '10px' } },
                                    React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "viewMode", dataSource: this.viewModeData, placeholder: 'View', fields: this.modeFields, change: this.modeChange })))))),
                React.createElement("div", null,
                    React.createElement("div", { style: { padding: '16px' } },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'settings-btn', onClick: this.triggerSidebar, className: 'settings-btn', style: { position: 'absolute', top: '10px', right: '10px', zIndex: 10 } },
                            React.createElement("span", { className: 'e-settings-icon', style: { padding: '3px' } }),
                            "Settings")),
                    React.createElement("div", { id: 'sidebar-gantt' },
                        React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Overview', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: data_1.overviewData, treeColumnIndex: 0, allowSelection: true, highlightWeekends: true, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, load: this.load.bind(this), pdfQueryCellInfo: this.pdfQueryCellInfo.bind(this), taskFields: this.taskFields, timelineSettings: this.timelineSettings, labelSettings: this.labelSettings, splitterSettings: this.splitterSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, gridLines: this.gridLines, allowFiltering: true, allowSorting: true, allowResizing: true, showColumnMenu: true, toolbar: this.toolbarOptions, resourceFields: this.resourceFields, resources: data_1.editingResources, pdfQueryTaskbarInfo: this.pdfQueryTaskbarInfo.bind(this) },
                            React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'WBSCode', headerText: 'WBS ID', width: '110' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Product Release', width: '250' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Assignee', headerText: 'Assignee', allowSorting: false, width: '150', template: this.template }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Status', headerText: 'Status', minWidth: "100", width: "120", template: this.statusTemplate }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Priority', headerText: 'Priority', minWidth: '80', width: '100', template: this.priorityTemplate }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'ConstraintType', headerText: 'Constraint Type', width: '180' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'ConstraintDate', headerText: 'Constraint Date', width: '180' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress', headerText: 'Completion(%)', width: '170' }),
                                React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TimeLog', headerText: 'Work Log', width: '130' })),
                            React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                                React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay1, label: 'Project Initiative' }),
                                React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay2, label: 'Requirement Gathering' }),
                                React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay3, label: 'Design Phase' }),
                                React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: this.eventMarkerDay4, label: 'Deployment' })),
                            React.createElement(ej2_react_gantt_1.HolidaysDirective, null,
                                React.createElement(ej2_react_gantt_1.HolidayDirective, { from: new Date('01/01/2025'), to: new Date('01/01/2025'), label: 'New year Holiday' }),
                                React.createElement(ej2_react_gantt_1.HolidayDirective, { from: new Date('12/25/2024'), to: new Date('12/26/2024'), label: 'Christmas Holidays' })),
                            React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Selection, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.ColumnMenu, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.Resize, ej2_react_gantt_1.ExcelExport, ej2_react_gantt_1.PdfExport] }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample provides an overview of the React Gantt Chart, showcasing its key features through an e-commerce platform redesign project timeline. It visualizes task hierarchies, dependencies, milestones, and resource allocations, enabling efficient project tracking from planning to deployment.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This demo presents an e-commerce platform redesign project, demonstrating key features such as task organization, customizable timeline views, resource management, and interactive controls. Users can ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/sorting" }, "sort"),
                    " and ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/filtering/filtering" }, "filter tasks"),
                    ", ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/columns/column-resizing" }, " resize"),
                    " and ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/columns/column-reordering" }, "reorder columns"),
                    ", track progress with ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/baseline" }, " baselines"),
                    ", and highlight key dates with ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/event-markers" }, "event markers"),
                    " and ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/holidays" }, " holidays"),
                    ". The ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/tool-bar" }, " toolbar "),
                    " offers intuitive options to add, edit, delete, search, and expand or collapse tasks. Additionally, users can configure ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#workweek" }, " working days"),
                    ", ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#highlightweekends" }, " highlight weekends"),
                    ", set ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#projectstartdate" }, " project date ranges"),
                    "."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a Filter, Edit, Toolbar, Sorting, Resize, pdf Export, Excel and CSV Export, Column menu, Selection and markers features, we need to inject the ",
                    React.createElement("code", null, "Filter"),
                    ", ",
                    React.createElement("code", null, "Toolbar"),
                    ", ",
                    React.createElement("code", null, "Sort"),
                    ", ",
                    React.createElement("code", null, "Resize"),
                    ", ",
                    React.createElement("code", null, "PdfExport"),
                    ", ",
                    React.createElement("code", null, "ExcelExport"),
                    ", ",
                    React.createElement("code", null, "ColumnMenu"),
                    ", ",
                    React.createElement("code", null, "Selection"),
                    " and ",
                    React.createElement("code", null, "DayMarkers"),
                    " into the ",
                    React.createElement("code", null, "Inject Services"),
                    " section."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "More information on the Essential",
                    React.createElement("sup", null, "\u00AE"),
                    " React Gantt Chart can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/getting-started" }, "documentation section"),
                    "."),
                React.createElement("br", null),
                React.createElement("p", null,
                    "Looking for the full React Gantt Chart component overview, features, pricing, and documentation? Visit the ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-gantt-chart" }, "React Gantt Chart"),
                    " page."))));
    };
    return Overview;
}(sample_base_1.SampleBase));
exports.Overview = Overview;
