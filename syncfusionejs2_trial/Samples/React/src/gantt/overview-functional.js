"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
require("./overview.css");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_buttons_2 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var react_2 = require("react");
var ej2_react_dropdowns_2 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_inputs_2 = require("@syncfusion/ej2-react-inputs");
var ej2_pdf_export_1 = require("@syncfusion/ej2-pdf-export");
var Overview = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var ganttInstance = (0, react_2.useRef)(null);
    var CurrentTheme;
    var statusStyleColor;
    var priorityStyle;
    var priorityContentStyle;
    var statusContentstyleColor;
    var display;
    var padding;
    var gap;
    var width;
    var height;
    var background;
    var borderRadius;
    var marginTop;
    var marginLeft;
    var IconClass;
    var border;
    var justifyContent;
    var color;
    var fontStyle;
    var fontWeight;
    var fontSize;
    var lineHeight;
    var textAlign;
    var backgroundColor;
    var backgroundPri;
    var pad;
    var taskFields = {
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
    var resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    var splitterSettings = {
        columnIndex: 4
    };
    var projectStartDate = new Date('01/25/2025');
    var projectEndDate = new Date('01/30/2026');
    var gridLines = 'Both';
    var change = function (args) {
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
    var timelineSettings = {
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
    var RightLabelTemplate = function (props) {
        if (props.ganttProperties.resourceInfo) {
            var resources = props.ganttProperties.resourceInfo;
            var out = [];
            for (var index = 0; index < resources.length; index++) {
                var src = 'src/gantt/images/' + resources[index].resourceName + '.png';
                var img = (React.createElement("img", { key: "img-".concat(index), src: src, height: "30px", width: "30px", alt: resources[index].resourceName }));
                var span = (React.createElement("span", { key: "span-".concat(index), style: { marginLeft: '5px', marginRight: '5px' } }, props.Assignee));
                out.push(img, span);
            }
            return (React.createElement("div", null, out));
        }
        else {
            return React.createElement("div", null);
        }
    };
    var templateRight = RightLabelTemplate;
    var labelSettings = {
        taskLabel: '${Progress}%',
        rightLabel: templateRight.bind(_this),
    };
    var toolbarClick = function (args) {
        if (args.item.id === "Overview_excelexport") {
            ganttInstance.current.excelExport();
        }
        else if (args.item.id === "Overview_csvexport") {
            ganttInstance.current.csvExport();
        }
        else if (args.item.id === "Overview_pdfexport") {
            ganttInstance.current.pdfExport();
        }
    };
    var eventMarkerDay1 = new Date('2025-03-13');
    var eventMarkerDay2 = new Date('2025-04-18');
    var eventMarkerDay3 = new Date('2025-05-30');
    var eventMarkerDay4 = new Date('2025-11-25');
    var statustemplate = function (props) {
        var sts = Status(props.taskData.Status);
        var stsCon = StatusContent(props.taskData.Status);
        if (props.taskData.Status) {
            return (React.createElement("div", { className: 'columnTemplate' },
                React.createElement("div", { style: {
                        "display": "".concat(sts.display), "padding": "".concat(sts.padding), "gap": "".concat(sts.gap), "width": "".concat(sts.width), "height": "".concat(sts.height),
                        "background": "".concat(sts.background), "border": "".concat(sts.border), "justifyContent": "".concat(sts.justifyContent)
                    } },
                    React.createElement("span", { style: {
                            "width": "".concat(stsCon.width), "height": "".concat(stsCon.height), "fontStyle": "".concat(stsCon.fontStyle), "fontWeight": "".concat(stsCon.fontWeight), "fontSize": "".concat(stsCon.fontSize),
                            "lineHeight": "".concat(stsCon.lineHeight), "color": "".concat(stsCon.color), "padding": "".concat(stsCon.pad), "textAlign": "center"
                        } }, props.taskData.Status))));
        }
    };
    var prioritytemplate = function (props) {
        var pri = PriorityIconStyle(props.taskData.Priority);
        var priCon = PriorityContent(props.taskData.Priority);
        var priClass = PriorityIcon(props.taskData.Priority);
        if (props.taskData.Priority) {
            return (React.createElement("div", { className: 'columnTemplate1', style: { display: 'flex' } },
                React.createElement("span", { className: priClass, style: {
                        "color": "".concat(pri.backgroundPri), "marginTop": "".concat(pri.marginTop)
                    } }),
                React.createElement("span", { style: {
                        "width": "".concat(priCon.width), "height": "".concat(priCon.height), "fontStyle": "".concat(priCon.fontStyle), "fontSize": "".concat(priCon.fontSize),
                        "lineHeight": "".concat(priCon.lineHeight), "color": "".concat(priCon.color), "textAlign": "center", "marginLeft": "".concat(priCon.marginLeft)
                    } }, props.taskData.Priority)));
        }
    };
    var columnTemplate = function (props) {
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
    var load = function () {
        var themeCollection = ['bootstrap5', 'bootstrap', 'bootstrap4', 'fluent', 'fabric', 'fusionnew', 'material3', 'material', 'highcontrast', 'tailwind', 'fluent2', 'tailwind3', 'bootstrap5_3'];
        var theme = document.body.className.split(' ').find(function (cls) { return themeCollection.includes(cls); }) || '';
        CurrentTheme = theme ? true : false;
    };
    var pdfQueryCellInfo = function (args) {
        if (args.data.ganttProperties.resourceNames) {
            if (args.column.headerText === 'Assignee' && args.data.taskData.resourcesImage) {
                args.image = { height: 30, width: 30, base64: args.data.taskData.resourcesImage };
                args.value = "".concat(args.data.Assignee, "\n").concat(args.data.taskData.Department);
            }
        }
        ;
        // Set font color for Status or Priority columns
        if (args.column.field === 'Status' || args.column.field === 'Priority') {
            var style = args.column.field === 'Status' ? StatusContent(args.value) : PriorityContent(args.value); // args.value is the cell's value (e.g., "Completed" for Status, "High" for Priority)
            var rgbMatch = style.color.match(/rgb\(\d+,\s*\d+,\s*\d+\)/);
            if (rgbMatch) {
                var rgbValues = rgbMatch[0].slice(4, -1).split(', ').map(Number);
                args.style.fontColor = new ej2_pdf_export_1.PdfColor(rgbValues[0], rgbValues[1], rgbValues[2]);
            }
        }
    };
    var pdfQueryTaskbarInfo = function (args) {
        if (ganttInstance.current.labelSettings.rightLabel && args.data.taskData.resourcesImage) {
            args.labelSettings.rightLabel.image = [{ base64: args.data.taskData.resourcesImage, height: 25, width: 25 }];
            args.labelSettings.rightLabel.value = args.data.ganttProperties.resourceNames;
        }
    };
    var Status = function (status) {
        switch (status) {
            case "In Progress":
                statusStyleColor = (CurrentTheme) ? "#006AA6" : "#2D3E57";
                display = 'flex';
                padding = '2px 10px';
                gap = '10px';
                width = '96px';
                height = '24px';
                border = "solid 1px ".concat(statusStyleColor);
                break;
            case "Open":
                display = 'flex';
                justifyContent = 'center';
                gap = '10px';
                width = '96px';
                height = '24px';
                border = 'solid 1px red';
                break;
            case "On Hold":
                statusStyleColor = (CurrentTheme) ? "#766B7C" : "#CDCBD7";
                display = 'flex';
                justifyContent = 'center';
                gap = '10px';
                width = '96px';
                height = '24px';
                border = "solid 1px ".concat(statusStyleColor);
                break;
            case "Completed":
                statusStyleColor = (CurrentTheme) ? "#00A653" : "#92FFC8";
                display = 'flex';
                padding = '2px 10px';
                gap = '10px';
                width = '96px';
                height = '24px';
                border = "solid 1px ".concat(statusStyleColor);
                break;
        }
        return { display: display, padding: padding, gap: gap, width: width, height: height, border: border, color: color, justifyContent: justifyContent };
    };
    var StatusContent = function (status) {
        switch (status) {
            case "In Progress":
                statusContentstyleColor = (CurrentTheme) ? "rgb(0, 106, 166)" : "rgb(52, 182, 255)";
                width = "72px";
                height = "22px";
                fontStyle = 'normal';
                fontWeight = '400';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = statusContentstyleColor;
                break;
            case "Open":
                width = "54px";
                height = "22px";
                fontStyle = 'normal';
                fontWeight = '400';
                fontSize = '14px';
                lineHeight = '22px';
                textAlign = 'center';
                color = 'rgb(255, 0, 0)';
                break;
            case "On Hold":
                statusContentstyleColor = (CurrentTheme) ? "rgb(118, 107, 124)" : "rgb(205, 203, 215)";
                width = "54px";
                height = "22px";
                fontStyle = 'normal';
                fontWeight = '400';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = statusContentstyleColor;
                break;
            case "Completed":
                statusContentstyleColor = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(146, 255, 200)";
                width = "74px";
                height = "22px";
                fontStyle = 'normal';
                fontWeight = '400';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = statusContentstyleColor;
                break;
            case "High":
                statusContentstyleColor = (CurrentTheme) ? "rgb(243, 86, 32)" : "rgb(255, 181, 184)";
                width = "31px";
                height = "22px";
                fontStyle = 'normal';
                fontWeight = '400';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = statusContentstyleColor;
                break;
        }
        return {
            width: width, height: height, fontStyle: fontStyle, fontWeight: fontWeight, fontSize: fontSize, lineHeight: lineHeight, textAlign: textAlign, color: color,
            backgroundColor: backgroundColor, pad: pad
        };
    };
    var PriorityIconStyle = function (priority) {
        switch (priority) {
            case "Low":
                priorityStyle = (CurrentTheme) ? "#00A653" : "#FDFF88";
                marginTop = '2px  !important';
                backgroundPri = priorityStyle;
                break;
            case "Normal":
                priorityStyle = (CurrentTheme) ? "#7100A6" : "#E3A9FF";
                marginTop = '2px  !important';
                backgroundPri = priorityStyle;
                break;
            case "Critical":
                priorityStyle = (CurrentTheme) ? "#FF3740" : "#FFB5B8";
                marginTop = '2px  !important';
                backgroundPri = priorityStyle;
                break;
            case "High":
                priorityStyle = (CurrentTheme) ? "#f35620" : "#FFB5B8";
                marginTop = '2px  !important';
                backgroundPri = priorityStyle;
                break;
        }
        return { marginTop: marginTop, backgroundPri: backgroundPri };
    };
    var PriorityContent = function (priority) {
        switch (priority) {
            case "Low":
                priorityContentStyle = (CurrentTheme) ? "rgb(0, 166, 83)" : "rgb(253, 255, 136)";
                width = "28px";
                height = "22px";
                fontStyle = 'normal';
                marginLeft = '3px';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = priorityContentStyle;
                break;
            case "Normal":
                priorityContentStyle = (CurrentTheme) ? "rgb(113, 0, 166)" : "rgb(227, 169, 255)";
                width = "28px";
                height = "22px";
                fontStyle = 'normal';
                marginLeft = '3px';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = priorityContentStyle;
                break;
            case "Critical":
                priorityContentStyle = (CurrentTheme) ? "rgb(255, 55, 64)" : "rgb(255, 181, 184)";
                width = "48px";
                height = "22px";
                fontStyle = 'normal';
                marginLeft = '3px';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = priorityContentStyle;
                break;
            case "High":
                priorityContentStyle = (CurrentTheme) ? "rgb(235, 99, 67)" : "rgb(255, 181, 184)";
                width = "31px";
                height = "22px";
                fontStyle = 'normal';
                marginLeft = '3px';
                fontSize = '14px';
                lineHeight = '20px';
                textAlign = 'center';
                color = priorityContentStyle;
                break;
        }
        return {
            width: width, height: height, fontStyle: fontStyle, marginLeft: marginLeft, fontSize: fontSize, lineHeight: lineHeight, textAlign: textAlign, color: color
        };
    };
    var PriorityIcon = function (priority) {
        switch (priority) {
            case "Low":
                IconClass = "e-icons e-arrow-down e-icon-style";
                break;
            case "Normal":
                IconClass = "e-icons e-arrow-right e-icon-style";
                break;
            case "Critical":
                IconClass = "e-icons e-arrow-up e-icon-style";
                break;
            case "High":
                IconClass = "e-icons e-arrow-up e-icon-style";
                break;
        }
        return IconClass;
    };
    var template = columnTemplate.bind(_this);
    var statusTemplate = statustemplate.bind(_this);
    var priorityTemplate = prioritytemplate.bind(_this);
    var toolbarOptions = ['ExpandAll', 'CollapseAll', 'ZoomIn', 'ZoomOut', 'ZoomToFit', 'ExcelExport', 'CsvExport', 'PdfExport'];
    // side bar rendering
    var _a = (0, react_2.useState)(false), sidebarToggle = _a[0], setSidebarToggle = _a[1];
    var _b = (0, react_2.useState)(false), isSideBar = _b[0], setIsSideBar = _b[1];
    var sidebarRef = (0, react_2.useRef)(null);
    var triggerSidebar = function () {
        setSidebarToggle(function (prev) { return !prev; });
        setIsSideBar(true);
        if (sidebarRef.current) {
            sidebarRef.current.isOpen = true;
        }
    };
    var closeSidebar = function () {
        setSidebarToggle(false); // Close sidebar
        if (sidebarRef.current) {
            sidebarRef.current.hide();
        }
    };
    //   range slider rendering
    var defaultObj;
    var defaultTicks = { placement: 'Before', largeStep: 10, smallStep: 10, showSmallTicks: true };
    var tooltip = (0, react_2.useState)({
        placement: 'Before',
        isVisible: true,
        showOn: 'Focus'
    })[0];
    function onChanged(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.rowHeight = args.value;
    }
    // Grid lines
    function gridLinesChange(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.gridLines = 'Both';
        }
        else {
            gantt.gridLines = 'Vertical';
        }
    }
    // Show Event marekrs
    var tempEvents;
    function showEventMarkers(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.eventMarkers = tempEvents;
        }
        else {
            tempEvents = gantt.eventMarkers;
            gantt.eventMarkers = [];
        }
    }
    // Show depenency lines
    function dependencyChange(args) {
        var ganttDependencyViewContainer = document.querySelector('.e-gantt-dependency-view-container');
        if (args.checked) {
            if (ganttDependencyViewContainer) {
                ganttDependencyViewContainer.style.visibility = 'visible';
            }
        }
        else {
            ganttDependencyViewContainer.style.visibility = 'hidden';
        }
    }
    // Show tasklabels
    var tempLabels;
    function taskLabelChange(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        if (args.checked) {
            gantt.labelSettings.rightLabel = tempLabels;
        }
        else {
            tempLabels = gantt.labelSettings.rightLabel;
            gantt.labelSettings.rightLabel = "";
        }
    }
    // Working days
    var multiselectObj = (0, react_2.useRef)(null);
    var workDays = [
        { id: 'Sunday', day: 'Sunday' },
        { id: 'Monday', day: 'Monday' },
        { id: 'Tuesday', day: 'Tuesday' },
        { id: 'Wednesday', day: 'Wednesday' },
        { id: 'Thursday', day: 'Thursday' },
        { id: 'Friday', day: 'Friday' },
        { id: 'Saturday', day: 'Saturday' },
    ];
    var defaultValue = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var select = function (args) {
        if (multiselectObj && multiselectObj.current && multiselectObj.current.value && ganttInstance.current) {
            var workingDays = (0, ej2_base_1.extend)([], multiselectObj.current.value, [], true);
            workingDays.push(args.itemData.day);
            ganttInstance.current.workWeek = workingDays;
        }
    };
    var removed = function (args) {
        if (ganttInstance.current && multiselectObj.current) {
            var index = ganttInstance.current.workWeek.indexOf(args.itemData.day);
            if (index !== -1) {
                ganttInstance.current.workWeek = multiselectObj.current.value;
            }
        }
    };
    //   Duration Unit
    var durationUnit = [
        { id: "Minute", Text: "Minute" },
        { id: "Hour", Text: "Hour" },
        { id: "Day", Text: "Day" }
    ];
    var durationFields = { text: 'Text', value: 'id' };
    var durationValue = 'Day';
    function changeDuration(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.durationUnit = args.value;
    }
    // Timeline unit width
    function unitChange(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        var width = args.value;
        gantt.timelineSettings.timelineUnitSize = width;
    }
    // view Type change
    var viewTypeValue = 'ProjectView';
    var viewTypeData = [
        { id: "ResourceView", Text: "Resource View" },
        { id: "ProjectView", Text: "Project View" }
    ];
    var viewFields = { text: 'Text', value: 'id' };
    function typeChange(args) {
        var gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
        gantt.viewType = args.value;
        if (document.getElementsByClassName('checkeddependency')[0].hidden !== true) {
            document.querySelectorAll('.e-switch')[2].ej2_instances[0].checked = true;
        }
    }
    // View Mode
    var viewModeData = [
        { ID: "Default", Text: "Default" },
        { ID: "Grid", Text: "Grid" },
        { ID: "Chart", Text: "Chart" },
    ];
    var modeFields = { value: 'ID', text: 'Text' };
    function modeChange(args) {
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
    }
    return (React.createElement("div", null,
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { id: 'gantt-sidebar-parent' }, isSideBar && (React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "sidebar", ref: sidebarRef, type: "Over", className: "default-sidebar", width: "282px", target: "#sidebar-gantt", position: "Right", isOpen: sidebarToggle },
                React.createElement("div", { className: "gantt-title-header" },
                    React.createElement("div", { className: "gantt-title" }, "Project Settings"),
                    React.createElement("span", { className: "e-closed", onClick: closeSidebar, style: { cursor: 'pointer' } })),
                React.createElement("ul", { className: "settings-list", style: { margin: '15px 15px', paddingLeft: '5px' } },
                    React.createElement("label", { htmlFor: "rowHeightSlider", className: "gantt-labels-style" }, "Row height :"),
                    React.createElement("li", { className: "list-fields", style: { padding: '20px', paddingBottom: '0px', marginBottom: '0px' } },
                        React.createElement("div", { id: "rowHeightSlider" },
                            React.createElement(ej2_react_inputs_2.SliderComponent, { value: 30, min: 40, max: 60, step: 5, changed: onChanged, ticks: defaultTicks, width: 180, tooltip: tooltip, ref: function (slider) { defaultObj = slider; } }))),
                    React.createElement("li", { className: "list-fields" },
                        React.createElement("label", { htmlFor: "showGridLines", className: "gantt-labels-style" }, "Show Grid Lines :"),
                        React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                            React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "showGridLinesSwitch", className: "checked", change: gridLinesChange }))),
                    React.createElement("li", { className: "list-fields" },
                        React.createElement("label", { htmlFor: "showGridLines", className: "gantt-labels-style" }, "Show event markers :"),
                        React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                            React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "showGridLinesSwitch", className: "checked", checked: true, change: showEventMarkers }))),
                    React.createElement("li", { className: "list-fields" },
                        React.createElement("label", { htmlFor: "dependencyLines", className: "gantt-labels-style" }, "Show dependencies :"),
                        React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                            React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "dependencyLines", className: "checkeddependency", checked: true, change: dependencyChange }))),
                    React.createElement("li", { className: "list-fields" },
                        React.createElement("label", { htmlFor: "taskLabelChange", className: "gantt-labels-style" }, "Show task labels :"),
                        React.createElement("div", { className: "switch", style: { marginLeft: '20px' } },
                            React.createElement(ej2_react_buttons_2.SwitchComponent, { id: "taskLabelChange", className: "checked", checked: true, change: taskLabelChange }))),
                    React.createElement("li", { className: "list-fields section-header" },
                        React.createElement("label", { className: "scheduling" }, "Scheduling Settings")),
                    React.createElement("li", { className: "list-field stack-container" },
                        React.createElement("label", { htmlFor: "workDays", className: "gantt-labels-style" }, "Working days :"),
                        React.createElement("div", { style: { paddingLeft: '10px' } },
                            React.createElement(ej2_react_dropdowns_1.MultiSelectComponent, { ref: multiselectObj, id: "WorkWeek", style: { padding: '2px' }, mode: "CheckBox", value: defaultValue, dataSource: workDays, showDropDownIcon: true, popupHeight: '350px', width: 200, fields: { text: 'day', value: 'id' }, select: select.bind(_this), removed: removed.bind(_this) },
                                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_dropdowns_1.CheckBoxSelection] })))),
                    React.createElement("li", { className: "list-field stack-container" },
                        React.createElement("label", { htmlFor: "durationUnit", className: "gantt-labels-style" }, "Duration unit:"),
                        React.createElement("div", { style: { paddingLeft: '10px' } },
                            React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "games", dataSource: durationUnit, fields: durationFields, change: changeDuration, value: durationValue, popupHeight: "220px" }))),
                    React.createElement("li", { className: "list-field stack-container" },
                        React.createElement("label", { htmlFor: "unitWidth", className: "gantt-labels-style" }, "Timeline width:"),
                        React.createElement("div", { style: { paddingLeft: '10px' } },
                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { min: 10, value: 33, onChange: unitChange }))),
                    React.createElement("li", { className: "list-fields section-header" },
                        React.createElement("label", { className: "scheduling" }, "View Settings")),
                    React.createElement("li", { className: "list-field stack-container" },
                        React.createElement("label", { htmlFor: "viewType", className: "gantt-labels-style" }, "View type:"),
                        React.createElement("div", { style: { paddingLeft: '10px' } },
                            React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "viewType", dataSource: viewTypeData, placeholder: 'View Type', value: viewTypeValue, fields: viewFields, change: typeChange }))),
                    React.createElement("li", { className: "list-field stack-container" },
                        React.createElement("label", { htmlFor: "viewMode", className: "gantt-labels-style" }, "View mode:"),
                        React.createElement("div", { style: { paddingLeft: '10px' } },
                            React.createElement(ej2_react_dropdowns_2.DropDownListComponent, { id: "viewMode", dataSource: viewModeData, placeholder: 'View', fields: modeFields, change: modeChange }))))))),
            React.createElement("div", null,
                React.createElement("div", { style: { padding: '16px' } },
                    React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'settings-btn', onClick: triggerSidebar, className: 'settings-btn', style: { position: 'absolute', top: '10px', right: '10px', zIndex: 10 } },
                        React.createElement("span", { className: 'e-settings-icon', style: { padding: '3px' } }),
                        "Settings")),
                React.createElement("div", { id: 'sidebar-gantt' },
                    React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'Overview', ref: ganttInstance, dataSource: data_1.overviewData, treeColumnIndex: 0, allowSelection: true, enableWBS: true, enableAutoWbsUpdate: true, enableHover: true, highlightWeekends: true, allowExcelExport: true, allowPdfExport: true, projectStartDate: projectStartDate, projectEndDate: projectEndDate, load: load.bind(_this), pdfQueryCellInfo: pdfQueryCellInfo.bind(_this), toolbarClick: toolbarClick.bind(_this), taskFields: taskFields, timelineSettings: timelineSettings, labelSettings: labelSettings, splitterSettings: splitterSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, gridLines: gridLines, allowFiltering: true, showColumnMenu: true, allowSorting: true, allowResizing: true, toolbar: toolbarOptions, resourceFields: resourceFields, resources: data_1.editingResources, pdfQueryTaskbarInfo: pdfQueryTaskbarInfo.bind(_this) },
                        React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'WBSCode', headerText: 'WBS ID', width: '110' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Product Release', width: '250' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Assignee', headerText: 'Assignee', allowSorting: false, width: '179', template: template }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Status', headerText: 'Status', minWidth: "100", width: "120", template: statusTemplate }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Priority', headerText: 'Priority', minWidth: '80', width: '150', template: priorityTemplate }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'WBSPredecessor', headerText: 'WBS Predecessor', width: '190' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'ConstraintType', headerText: 'Constraint Type', width: '180' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'ConstraintDate', headerText: 'Constraint Date', width: '180' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress', headerText: 'Completion(%)', width: '170' }),
                            React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TimeLog', headerText: 'Work Log', width: '130' })),
                        React.createElement(ej2_react_gantt_1.EventMarkersDirective, null,
                            React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay1, label: 'Project Initiative' }),
                            React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay2, label: 'Requirement Gathering' }),
                            React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay3, label: 'Design Phase' }),
                            React.createElement(ej2_react_gantt_1.EventMarkerDirective, { day: eventMarkerDay4, label: 'Deployment' })),
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
exports.default = Overview;
