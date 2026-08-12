"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var datasource_1 = require("./datasource");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
function RiskAnalysis() {
    var ganttInstance;
    var taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        baselineStartDate: "BaselineStartDate",
        baselineEndDate: "BaselineEndDate",
        child: 'subtasks',
        indicators: 'Indicators'
    };
    var toolbarTemplate = function () {
        return React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'toolbarButton', isPrimary: true }, "Analyze Risk");
    };
    var toolbarOptions = [{
            template: toolbarTemplate, text: 'Analyze Risk'
        }];
    var summary = '';
    window.getSummary = function (value) {
        if (summary !== '') {
            var isupdated = false;
            for (var i = 0; i < summary.length; i++) {
                if (parseInt(summary[i]['TaskID']) === value.taskId) {
                    isupdated = true;
                    return summary[i]['Summary'];
                }
            }
            if (!isupdated) {
                return '';
            }
        }
        else {
            return '';
        }
    };
    function toolbarClick(args) {
        if (args.item.text === 'Analyze Risk') {
            ganttInstance.showSpinner();
            var input = "1, You analyze the project complete collection in below 'TaskCollection' to identify potential risks and suggest mitigation strategies. \n    2, The collection contains the predessor(Dependency) values with type of SS(start to start), SF(Start to finish), FS(finish to start), FF(finish to finish) and the default type is SS. Dependency values not necessory in each task. \n    3, Analyze the complete project task collection duration and if any task get risk whole project and dependent task gets risk.\n            Task Collection Data:" + JSON.stringify(datasource_1.tasksCollectionRisk) + "Ensure the output is in JSON object format name of 'TaskDetails' alone with + 'Priority' key-high or low risk and 'Summary' key-details of the risk and mitigation strategy and Summary details given format is (TaskID-summary details), don't give another values and avoid any unwanted content or unwanted JSON tags. No other explanation or content to be returned.\n    \n            Output format:\n            \"{\n            \"TaskDetails\":[{\n            \"Priority\":value,\n            \"TaskID\": value,\n            \"Summary\":value\n            }]\n            }\"\n    \n            Don't give anyother format values.";
            var aioutput = window.getAzureChatAIRequest({ messages: [{ role: 'user', content: input }] });
            aioutput.then(function (result) {
                var cleanedJsonData = result.replace(/^```json\n|```\n?$/g, '');
                summary = JSON.parse(cleanedJsonData).TaskDetails;
                ganttInstance.hideSpinner();
                ganttInstance.refresh();
            });
        }
    }
    var rightLabelTemplate = function (data) {
        return (React.createElement("div", { style: { marginTop: '-7px' } }, data.ganttProperties && (React.createElement("div", { id: "rightLabel" }, window.getSummary(data.ganttProperties)))));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { id: 'container' },
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: "GanttContainer", ref: function (gantt) { return ganttInstance = gantt; }, dataSource: datasource_1.tasksCollectionRisk, allowSorting: true, allowReordering: true, enableContextMenu: true, toolbar: toolbarOptions, taskFields: taskFields, baselineColor: 'red', editSettings: {
                        allowAdding: true,
                        allowEditing: true,
                        allowDeleting: true,
                        allowTaskbarEditing: true,
                        showDeleteConfirmDialog: true
                    }, allowFiltering: true, gridLines: "Both", highlightWeekends: true, queryTaskbarInfo: function (args) {
                        if (summary !== '') {
                            for (var i = 0; i < summary.length; i++) {
                                if (parseInt(summary[i]['TaskID']) === args.data.ganttProperties.taskId && summary[i]['Priority'] === 'high') {
                                    args.taskbarBgColor = 'rgb(255, 0, 0)';
                                    args.progressBarBgColor = 'rgb(255, 0, 0)';
                                }
                            }
                        }
                    }, timelineSettings: {
                        showTooltip: true,
                        topTier: {
                            unit: 'Week',
                            format: 'dd/MM/yyyy'
                        },
                        bottomTier: {
                            unit: 'Day',
                            count: 1
                        }
                    }, labelSettings: {
                        rightLabel: rightLabelTemplate,
                        taskLabel: '${Progress}%'
                    }, toolbarClick: toolbarClick, readOnly: false, taskbarHeight: 20, rowHeight: 40, height: '550px', treeColumnIndex: 1, allowUnscheduledTasks: true, projectStartDate: new Date('03/25/2019'), projectEndDate: new Date('05/30/2019') },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskID', headerText: 'Task ID', visible: false }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: 'Event Name', allowReordering: false, width: '250px' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration', headerText: 'Duration', allowEditing: false }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: 'Start Date', allowSorting: false }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'EndDate', headerText: 'End Date', allowSorting: false })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Edit, ej2_react_gantt_1.Toolbar, ej2_react_gantt_1.Selection, ej2_react_gantt_1.CriticalPath, ej2_react_gantt_1.ContextMenu, ej2_react_gantt_1.Filter, ej2_react_gantt_1.Sort, ej2_react_gantt_1.Reorder, ej2_react_gantt_1.DayMarkers] }))))));
}
exports.default = RiskAnalysis;
