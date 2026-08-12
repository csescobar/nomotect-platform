"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
var LoadOnDemand = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var dataSource = new ej2_data_1.DataManager({
        url: 'https://services.syncfusion.com/react/production/api/GanttLoadOnDemand',
        adaptor: new ej2_data_1.WebApiAdaptor,
        crossDomain: true
    });
    var taskFields = {
        id: 'taskId',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        hasChildMapping: 'isParent',
        parentID: 'parentID'
    };
    var projectStartDate = new Date('01/02/2000');
    var projectEndDate = new Date('12/01/2002');
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'LoadOnDemand', dataSource: dataSource, treeColumnIndex: 1, taskFields: taskFields, enableVirtualization: true, loadChildOnDemand: true, height: '650px', taskbarHeight: 25, rowHeight: 46, projectStartDate: projectStartDate, projectEndDate: projectEndDate },
                React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskId', width: '120', headerText: 'Task ID' }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'taskName', headerText: 'Task Name', width: '250', allowReordering: false }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'startDate', headerText: 'Start Date', allowSorting: false }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'duration', headerText: 'Duration', allowEditing: false }),
                    React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'progress', headerText: 'Progress', allowFiltering: false })),
                React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.VirtualScroll] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the load on-demand data binding support in Gantt Chart. It allows users to load parent records alone on load time. Child records render on demand during expansion action.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "Load on demand and virtualization support is used to render a large number of tasks in the Gantt Chart with an effective performance. And so, in this demo, row virtualization is enabled with remote data binding which has 50,000 records."),
            React.createElement("p", null,
                "With the virtualization feature enabled in remote data binding, only the root level records are fetched from the remote server at the initial load time. So, need to set the ",
                React.createElement("code", null, "hasChildMapping"),
                " property of ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#taskfields" }, "taskFields"),
                " that denotes whichever records have child records and set ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/api/gantt#loadchildondemand" }, "loadChildOnDemand"),
                " property as false."),
            React.createElement("p", null, "When expanding the root parent node or scrolling vertically, the corresponding tasks are dynamically fetched from the remote server and then updated in the DOM based on the current viewport position."),
            React.createElement("p", null,
                "Gantt component features are segregated into individual feature-wise modules. To use virtual scroll and selection features, we need to inject ",
                React.createElement("code", null, "VirtualScroll"),
                " and ",
                React.createElement("code", null, "Selection"),
                " into the ",
                React.createElement("code", null, "Inject Services"),
                " section."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the Essential",
                React.createElement("sup", null, "\u00AE"),
                " React Gantt Chart can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/data-binding#load-child-on-demand" }, "documentation section"),
                "."))));
};
exports.default = LoadOnDemand;
