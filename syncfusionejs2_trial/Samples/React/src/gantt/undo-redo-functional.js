"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./undo-redo.css");
var GanttUndoRedo = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        initializeToolbar();
    }, []);
    var ganttInstance;
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    var labelSettings = {
        leftLabel: 'TaskName'
    };
    var undoRedoActions = ['Sorting', 'Add', 'ColumnReorder', 'ColumnResize', 'ColumnState', 'Delete', 'Edit', 'Filtering', 'Indent', 'Outdent', 'NextTimeSpan', 'PreviousTimeSpan', 'RowDragAndDrop', 'Search'];
    var splitterSettings = {
        columnIndex: 4
    };
    var editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    var toolbar = ["Add",
        "Edit",
        "Update",
        "Delete",
        "Cancel",
        { text: "Undo", tooltipText: "Undo", id: "Undo" },
        { text: "Redo", tooltipText: "Redo", id: "Redo" },
    ];
    var toolbarClick = function (args) {
        if (args.item.text === "Undo") {
            ganttInstance.undo();
        }
        else if (args.item.text === "Redo") {
            ganttInstance.redo();
        }
        updateBadges();
    };
    var initializeToolbar = function () {
        var toolbarInstance = document.querySelector('.e-gantt-toolbar');
        var undoBtn = toolbarInstance.querySelector('[aria-label="Undo"]');
        var redoBtn = toolbarInstance.querySelector('[aria-label="Redo"]');
        if (toolbarInstance) {
            if (undoBtn) {
                undoBtn.classList.add('e-overlay');
            }
            if (redoBtn) {
                redoBtn.classList.add('e-overlay');
            }
            if (redoBtn.classList.contains("e-overlay") && undoBtn.classList.contains("e-overlay")) {
                undoBtn.style.pointerEvents = "none";
                redoBtn.style.pointerEvents = "none";
                undoBtn.style.boxShadow = "0 0 0 transparent";
                redoBtn.style.boxShadow = "0 0 0 transparent";
            }
            else {
                undoBtn.style.boxShadow = "";
                redoBtn.style.boxShadow = "";
            }
        }
    };
    var updateBadges = function () {
        var toolbarInstance = document.querySelector('.e-gantt-toolbar');
        var undoBtn = toolbarInstance.querySelector('[aria-label="Undo"]');
        var redoBtn = toolbarInstance.querySelector('[aria-label="Redo"]');
        var undoCount = ganttInstance.getUndoActions().length;
        var redoCount = ganttInstance.getRedoActions().length;
        if (undoBtn) {
            if (undoCount === 0) {
                undoBtn.classList.add("e-overlay");
                undoBtn.style.cursor = "default";
                undoBtn.style.pointerEvents = "none";
            }
            else {
                undoBtn.classList.remove("e-overlay");
                undoBtn.style.cursor = "pointer";
                undoBtn.style.pointerEvents = "auto";
            }
        }
        if (redoBtn) {
            if (redoCount === 0) {
                redoBtn.classList.add('e-overlay');
                redoBtn.style.cursor = "default";
                redoBtn.style.pointerEvents = "none";
            }
            else {
                redoBtn.classList.remove("e-overlay");
                redoBtn.style.cursor = "pointer";
                redoBtn.style.pointerEvents = "auto";
            }
        }
        if (redoBtn.classList.contains("e-overlay")) {
            redoBtn.style.boxShadow = "0 0 0 transparent";
        }
        else {
            redoBtn.style.boxShadow = ""; // Clears inline style, allowing CSS to apply
        }
        if (undoBtn.classList.contains("e-overlay")) {
            undoBtn.style.boxShadow = "0 0 0 transparent";
        }
        else {
            undoBtn.style.boxShadow = ""; // Clears inline style
        }
        setBadge(undoBtn, undoCount);
        setBadge(redoBtn, redoCount);
    };
    var setBadge = function (button, count) {
        if (!button)
            return;
        var badge = button.querySelector('.e-badge.e-badge-danger.e-badge-notification.e-badge-overlap.e-badge-circle');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'e-badge e-badge-danger e-badge-notification e-badge-overlap e-badge-circle';
            button.appendChild(badge);
        }
        var tailwind3 = document.body.classList.contains('tailwind3') ||
            document.body.classList.contains('tailwind3-dark');
        var bootstrap5 = document.body.classList.contains('bootstrap5.3') ||
            document.body.classList.contains('bootstrap5.3-dark');
        var material3 = document.body.classList.contains('material3-dark') ||
            document.body.classList.contains('material3');
        var fluent2 = document.body.classList.contains('fluent2-dark') ||
            document.body.classList.contains('fluent2');
        var fluent = document.body.classList.contains('fluent-dark') ||
            document.body.classList.contains('fluent');
        if (tailwind3) {
            badge.style.backgroundColor = '#c2410c';
            badge.style.color = '#fff';
            badge.style.marginTop = '3px';
            badge.style.paddingTop = "2px";
        }
        else if (bootstrap5) {
            badge.style.backgroundColor = '#ffc107';
            badge.style.color = '#000';
            badge.style.paddingTop = '3px';
            badge.style.marginTop = '6px';
        }
        else if (fluent2) {
            badge.style.backgroundColor = '#fde300';
            badge.style.color = '#000';
            badge.style.paddingTop = '4px';
            badge.style.marginTop = '6px';
        }
        else if (material3) {
            badge.style.backgroundColor = '#b3261e';
            badge.style.color = '#fff';
            badge.style.paddingTop = '4px';
        }
        else if (fluent) {
            badge.style.backgroundColor = "#fde300";
            badge.style.color = "#000";
            badge.style.paddingTop = "2px";
            badge.style.marginTop = "8px";
        }
        badge.textContent = count.toString();
        badge.style.display = count > 0 ? 'inline-block' : 'none';
    };
    var projectStartDate = new Date('06/24/2025');
    var projectEndDate = new Date('08/31/2025');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'UndoRedo', treeColumnIndex: 1, ref: function (gantt) { return ganttInstance = gantt; }, showColumnMenu: true, allowFiltering: true, allowSorting: true, allowResizing: true, dataSource: data_1.undoRedoData, highlightWeekends: true, splitterSettings: splitterSettings, toolbarClick: toolbarClick, taskFields: taskFields, labelSettings: labelSettings, height: '650px', taskbarHeight: 25, rowHeight: 46, enableUndoRedo: true, enableContextMenu: true, allowReordering: true, editSettings: editSettings, toolbar: toolbar, undoRedoActions: undoRedoActions, projectStartDate: projectStartDate, projectEndDate: projectEndDate, actionComplete: updateBadges, resizeStop: updateBadges },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', headerText: 'ID', width: '100' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Name', width: '250' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Predecessor', headerText: 'Dependency' })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.ColumnMenu, ej2_react_gantt_1.Resize, ej2_react_gantt_1.Edit, ej2_react_gantt_1.Reorder, ej2_react_gantt_1.UndoRedo, ej2_react_gantt_1.ContextMenu, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.DayMarkers] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample showcases the undo-redo functionality in the Gantt Chart, allowing users to revert or reapply their recent actions such as task edits, additions, and deletions.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The undo feature lets users reverse the most recent changes made to tasks, dependencies, columns, or timeline settings. The redo feature restores actions that were previously undone. Both can be triggered using keyboard shortcuts (",
                React.createElement("code", null, "Ctrl + Z"),
                " for Undo, ",
                React.createElement("code", null, "Ctrl + Y"),
                " for Redo) or via toolbar buttons."),
            React.createElement("p", null,
                "You can configure which actions are tracked using the ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#undoredoactions" }, "undoRedoActions"),
                " property. Supported actions include:",
                React.createElement("code", null, "Edit"),
                ", ",
                React.createElement("code", null, "Add"),
                ", ",
                React.createElement("code", null, "Delete"),
                ", ",
                React.createElement("code", null, "Sorting"),
                ", ",
                React.createElement("code", null, "ColumnReorder"),
                ", ",
                React.createElement("code", null, "ColumnResize"),
                ", ",
                React.createElement("code", null, "Search"),
                ", ",
                React.createElement("code", null, "Filtering"),
                ", ",
                React.createElement("code", null, "ZoomIn"),
                ", ",
                React.createElement("code", null, "ZoomOut"),
                ", ",
                React.createElement("code", null, "ZoomToFit"),
                ", ",
                React.createElement("code", null, "ColumnState"),
                ", ",
                React.createElement("code", null, "Indent"),
                ", ",
                React.createElement("code", null, "Outdent"),
                ", ",
                React.createElement("code", null, "RowDragAndDrop"),
                ", ",
                React.createElement("code", null, "TaskbarDragAndDrop"),
                ", ",
                React.createElement("code", null, "PreviousTimeSpan"),
                ", and ",
                React.createElement("code", null, "NextTimeSpan")),
            React.createElement("p", null,
                "The number of undo-redo steps stored can be controlled using the ",
                React.createElement("code", null, "undoRedoStepsCount"),
                " property, which defaults to 10."),
            React.createElement("p", null,
                "In this demo, the undo-redo feature is enabled by setting ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt/#enableundoredo" }, "enableUndoRedo"),
                " to ",
                React.createElement("code", null, "true")),
            React.createElement("p", null,
                "Gantt control features are segregated into individual feature-wise modules. To use a UndoRedo, Filter, sorting, columnMenu, contextMenu, Edit, Toolbar, Sorting, Resize, Reorder, Selection and markers features, we need to inject the ",
                React.createElement("code", null, "UndoRedo"),
                ", ",
                React.createElement("code", null, "Filter"),
                ", ",
                React.createElement("code", null, "Sort"),
                ",  ",
                React.createElement("code", null, "ColumnMenu"),
                ",  ",
                React.createElement("code", null, "ContextMenu"),
                ", ",
                React.createElement("code", null, "Edit"),
                ", ",
                React.createElement("code", null, "Toolbar"),
                ", ",
                React.createElement("code", null, "Resize"),
                ", ",
                React.createElement("code", null, "Reorder"),
                ", ",
                React.createElement("code", null, "Selection"),
                ", and ",
                React.createElement("code", null, "DayMarkers"),
                " into the ",
                React.createElement("code", null, "Inject Services"),
                " section."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/undo-redo" }, "documentation section"),
                "."))));
};
exports.default = GanttUndoRedo;
