"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var datasource_1 = require("./datasource");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
function TaskSchedule() {
    var ganttInstance;
    var taskFields = {
        id: 'Id',
        name: 'Name',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        endDate: 'EndDate',
        baselineEndDate: 'BaselineEndDate',
        baselineStartDate: 'BaselineStartDate',
        parentID: 'ParentId',
    };
    var toolbarTemplate = function () {
        return React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'toolbarButton', isPrimary: true }, "Predictive scheduling");
    };
    var toolbarOptions = [{
            template: toolbarTemplate, text: 'Predictive scheduling'
        }];
    function GetHistoricalCollection() {
        var collection = "";
        collection = collection + JSON.stringify(datasource_1.HistoricalDataCollection2021) + JSON.stringify(datasource_1.HistoricalDataCollection2022) + JSON.stringify(datasource_1.HistoricalDataCollection2023) + JSON.stringify(datasource_1.HistoricalDataCollection2024) + JSON.stringify(datasource_1.HistoricalDataCollection2025);
        return collection;
    }
    function toolbarClick(args) {
        if (args.item.text === 'Predictive scheduling') {
            ganttInstance.showSpinner();
            var input = "Analyze the historical data collection for project management in a Gantt Chart system. Based on the provided historical data, update the project schedule values for the given TaskDataCollection for the year 2026. \n    \n          The output should be a JSON object with a key named 'TaskCollection', which contains the updated list of tasks. The response should not include any JSON tags, additional explanations, or extra content.\n          \n          Here are the details:\n          - HistoricalDataCollections: ".concat(GetHistoricalCollection(), "\n          - TaskDataCollection: ").concat(JSON.stringify(datasource_1.HistoricalTaskData), "\n          \n          Return the updated TaskCollection in JSON format, with no additional text or explanations.");
            var aioutput = window.getAzureChatAIRequest({ messages: [{ role: 'user', content: input }] });
            aioutput.then(function (result) {
                var cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                var collection = JSON.parse(cleanedJsonData).TaskCollection;
                var currentData = ganttInstance.currentViewData;
                for (var i = 0; i < collection.length; i++) {
                    collection[i].BaselineStartDate = new Date(currentData[i].StartDate);
                    collection[i].BaselineEndDate = new Date(currentData[i].EndDate);
                }
                ganttInstance.dataSource = collection;
                ganttInstance.hideSpinner();
            });
        }
    }
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { id: 'container' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: "GanttContainer", ref: function (gantt) { return ganttInstance = gantt; }, dataSource: datasource_1.HistoricalTaskData, renderBaseline: true, toolbar: toolbarOptions, taskFields: taskFields, editSettings: {
                        allowAdding: true,
                        allowEditing: true,
                        allowDeleting: true,
                        allowTaskbarEditing: true,
                        showDeleteConfirmDialog: true
                    }, allowFiltering: true, gridLines: "Both", highlightWeekends: true, timelineSettings: {
                        showTooltip: true,
                        topTier: {
                            unit: 'Week',
                            format: 'dd/MM/yyyy'
                        },
                        bottomTier: {
                            unit: 'Day',
                            count: 1
                        }
                    }, toolbarClick: toolbarClick, readOnly: false, taskbarHeight: 20, rowHeight: 40, height: '550px', allowUnscheduledTasks: true },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Id', headerText: 'Task ID', visible: false }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Name', headerText: 'Event Name', width: '250px' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration', headerText: 'Duration' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: 'Start Date' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate', headerText: 'End Date' })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.Selection, ej2_react_gantt_1.CriticalPath, ej2_react_gantt_1.ContextMenu, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.Reorder, ej2_react_gantt_1.DayMarkers] }))))));
}
exports.default = TaskSchedule;
