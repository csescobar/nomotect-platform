"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var ContextMenuItem = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId',
        notes: 'info',
        resourceInfo: 'resources'
    };
    var resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    var editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    var splitterSettings = {
        position: "35%"
    };
    var ganttInstance = (0, react_1.useRef)(null);
    var projectStartDate = new Date('03/25/2025');
    var projectEndDate = new Date('09/08/2025');
    var gridLines = 'Both';
    var toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    var timelineSettings = {
        topTier: {
            unit: 'Week',
            format: 'MMM dd, y',
        },
        bottomTier: {
            unit: 'Day',
        },
    };
    var labelSettings = {
        leftLabel: 'TaskName',
        rightLabel: 'resources'
    };
    var contextMenuOpen = function (args) {
        var record = args.rowData;
        if (args.type !== 'Header' && record) {
            if (!record.hasChildRecords) {
                args.hideItems.push('Collapse the Row');
                args.hideItems.push('Expand the Row');
            }
            else {
                if (record.expanded) {
                    args.hideItems.push('Expand the Row');
                }
                else {
                    args.hideItems.push('Collapse the Row');
                }
            }
        }
    };
    var contextMenuClick = function (args) {
        var record = args.rowData;
        if (args.item.id === 'collapserow') {
            ganttInstance.current.collapseByID(Number(record.ganttProperties.taskId));
        }
        if (args.item.id === 'expandrow') {
            ganttInstance.current.expandByID(Number(record.ganttProperties.taskId));
        }
    };
    var contextMenuItems = ['AutoFitAll', 'AutoFit', 'TaskInformation', 'DeleteTask', 'Save', 'Cancel',
        'SortAscending', 'SortDescending', 'Add', 'DeleteDependency', 'Convert', 'Indent', 'Outdent',
        { text: 'Collapse the Row', target: '.e-content', id: 'collapserow' },
        { text: 'Expand the Row', target: '.e-content', id: 'expandrow' }];
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'ContextMenu', ref: ganttInstance, dataSource: data_1.editingData, dateFormat: 'MMM dd, y', enableContextMenu: true, treeColumnIndex: 1, allowSelection: true, showColumnMenu: false, highlightWeekends: true, allowSorting: true, allowResizing: true, contextMenuItems: contextMenuItems, contextMenuOpen: contextMenuOpen.bind(_this), contextMenuClick: contextMenuClick.bind(_this), allowUnscheduledTasks: true, projectStartDate: projectStartDate, projectEndDate: projectEndDate, taskFields: taskFields, timelineSettings: timelineSettings, labelSettings: labelSettings, splitterSettings: splitterSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, editSettings: editSettings, gridLines: gridLines, toolbar: toolbar, resourceFields: resourceFields, resources: data_1.editingResources },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', width: '80' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Job Name', width: '250', clipMode: 'EllipsisWithTooltip' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor' })),
                React.createElement(ej2_react_gantt_1.EditDialogFieldsDirective, null,
                    React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: 'General', headerText: 'General' }),
                    React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: 'Dependency' }),
                    React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: 'Resources' }),
                    React.createElement(ej2_react_gantt_1.EditDialogFieldDirective, { type: 'Notes' })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Selection, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.DayMarkers, ej2_react_gantt_1.ContextMenu, ej2_react_gantt_1.Resize, ej2_react_gantt_1.Sort] })),
            React.createElement("div", { style: { float: 'right', margin: '10px' } },
                "Source:",
                React.createElement("a", { href: "https://en.wikipedia.org/wiki/Construction", target: "_blank", rel: "noopener noreferrer" }, "https://en.wikipedia.org/wiki/Construction"))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the various phases involved in constructing a residential house, from testing the soil to handing over the fully constructed property to the owner. This also demonstrates the usage of default and custom context menu in Gantt component.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "Gantt has an option to show the context menu while performing right click on it. You can configure the default and custom menu items in the context menu using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#contextmenuitems" }, "contextMenuItems"),
                " property. Each menu item will be displayed contextually based on its target. In this demo we have rendered following default and custom menu items"),
            React.createElement("p", null, "Default items:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "AutoFitAll"),
                    " - Auto fit all columns."),
                React.createElement("li", null,
                    React.createElement("code", null, "AutoFit"),
                    " - Auto fit the current column."),
                React.createElement("li", null,
                    React.createElement("code", null, "TaskInformation"),
                    " - Edit the current record."),
                React.createElement("li", null,
                    React.createElement("code", null, "Indent"),
                    " - Indent the selected record by one level"),
                React.createElement("li", null,
                    React.createElement("code", null, "Outdent"),
                    " - Outdent the selected record by one level"),
                React.createElement("li", null,
                    React.createElement("code", null, "DeleteTask"),
                    " - Delete the current record."),
                React.createElement("li", null,
                    React.createElement("code", null, "Save"),
                    " - Save the edited record."),
                React.createElement("li", null,
                    React.createElement("code", null, "Cancel"),
                    " - Cancel the edited state."),
                React.createElement("li", null,
                    React.createElement("code", null, "SortAscending "),
                    " - Sort the current column in ascending order."),
                React.createElement("li", null,
                    React.createElement("code", null, "SortDescending "),
                    " - Sort the current column in descending order."),
                React.createElement("li", null,
                    React.createElement("code", null, "DeleteDependency "),
                    " - Delete the dependency of the current record."),
                React.createElement("li", null,
                    React.createElement("code", null, "Convert "),
                    " - Convert the normal task in to milestone task and vice versa."),
                React.createElement("li", null,
                    React.createElement("code", null, "Add"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            React.createElement("code", null, "Above"),
                            " - Add a new row above the selected row "),
                        React.createElement("li", null,
                            React.createElement("code", null, "Below"),
                            " - Add a new row below the selected row"),
                        React.createElement("li", null,
                            React.createElement("code", null, "Child"),
                            " - Add a new row as child to the selected row"),
                        React.createElement("li", null,
                            React.createElement("code", null, "Milestone"),
                            " - Add a milestone task below to selected row")))),
            React.createElement("p", null, "Custom items:"),
            React.createElement("p", null, "In this demo, custom menu items have been enabled in the context menu to expand and collapse parent rows:"),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("code", null, "Expand the Row"),
                    " - Used to expand the parent row when it is in a collapsed state."),
                React.createElement("li", null,
                    React.createElement("code", null, "Collapse the Row"),
                    " - Used to collapse the parent row when it is in an expanded state.")),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use context menu, edit, toolbar, markers, sort, resize, and selection  features, we need to inject ",
                React.createElement("code", null, "ContextMenu"),
                ", ",
                React.createElement("code", null, "Edit"),
                ", ",
                React.createElement("code", null, "Toolbar"),
                ", ",
                React.createElement("code", null, "DayMarkers"),
                ", ",
                React.createElement("code", null, "Sort"),
                ", ",
                React.createElement("code", null, "Resize"),
                ", and ",
                React.createElement("code", null, "Selection"),
                "  into the ",
                React.createElement("code", null, "Inject Services"),
                " section."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/context-menu" }, "documentation section"),
                "."))));
};
exports.default = ContextMenuItem;
