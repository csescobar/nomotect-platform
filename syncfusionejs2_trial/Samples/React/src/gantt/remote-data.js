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
exports.RemoteData = void 0;
var React = require("react");
var ej2_react_gantt_1 = require("@syncfusion/ej2-react-gantt");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var RemoteData = /** @class */ (function (_super) {
    __extends(RemoteData, _super);
    function RemoteData(props) {
        var _this = _super.call(this, props) || this;
        _this.recordCount = "1000";
        _this.dataSource = new ej2_data_1.DataManager({
            url: "https://services.syncfusion.com/react/production/api/GanttWebApiRemoteData?count=".concat(_this.recordCount),
            adaptor: new ej2_data_1.WebApiAdaptor(),
            crossDomain: true,
        });
        _this.taskFields = {
            id: "TaskId",
            name: "TaskName",
            startDate: "StartDate",
            endDate: "EndDate",
            duration: "Duration",
            progress: "Progress",
            parentID: "ParentId",
            dependency: "Predecessor",
        };
        _this.rowMark = "1,000 Rows";
        _this.dropdownData = [
            { Text: "1,000 Rows", Value: "1000" },
            { Text: "2,500 Rows", Value: "2500" },
            { Text: "5,000 Rows", Value: "5000" },
        ];
        _this.dropdownFields = { text: "Text", value: "Value" };
        _this.loadTime = "";
        _this.shouldCalculateLoadTime = true;
        _this.onDropdownChange = function (event) {
            _this.recordCount = event.value;
            _this.shouldCalculateLoadTime = true;
            _this.loadGanttData(); // Reload data source
        };
        _this.loadGanttData = function () {
            _this.ganttInstance.dataSource = new ej2_data_1.DataManager({
                url: "https://services.syncfusion.com/react/production/api/GanttWebApiRemoteData?count=".concat(_this.recordCount),
                adaptor: new ej2_data_1.WebApiAdaptor(),
                crossDomain: true,
            });
            _this.startLoadTime = new Date();
        };
        _this.projectStartDate = new Date("12/28/2024");
        _this.projectEndDate = new Date("03/19/2025");
        _this.gridLines = "Horizontal";
        _this.timelineSettings = {
            timelineUnitSize: 50,
            topTier: {
                unit: "Week",
                format: "MMM dd, y",
            },
            bottomTier: {
                unit: "Day",
                format: "dd",
            },
        };
        _this.labelSettings = {
            rightLabel: "TaskName",
            taskLabel: "Progress",
        };
        _this.splitterSettings = {
            columnIndex: 2
        };
        _this.onDataBound = function () {
            if (_this.shouldCalculateLoadTime) {
                _this.endLoadTime = new Date();
                _this.calculateLoadTime();
                _this.shouldCalculateLoadTime = false; // Reset the flag
            }
        };
        _this.calculateLoadTime = function () {
            if (_this.startLoadTime && _this.endLoadTime) {
                var difference = _this.endLoadTime.getTime() - _this.startLoadTime.getTime();
                _this.setState({
                    loadTime: (difference / 1000).toFixed(2),
                });
            }
        };
        _this.state = { loadTime: "" };
        return _this;
    }
    RemoteData.prototype.componentDidMount = function () {
        this.startLoadTime = new Date();
    };
    RemoteData.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { style: { display: "flex", } },
                    React.createElement("div", { style: { width: "130px", paddingBottom: "10px" } },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: this.dropdownData, fields: this.dropdownFields, value: this.recordCount, change: this.onDropdownChange, placeholder: "1,000 Rows" })),
                    React.createElement("span", { style: { paddingLeft: "20px", fontSize: "15px", marginTop: "5px" } },
                        React.createElement("b", null, "Data initial load time:"),
                        " ",
                        this.state.loadTime,
                        " sec")),
                React.createElement(ej2_react_gantt_1.GanttComponent, { id: 'RemoteData', ref: function (gantt) { return _this.ganttInstance = gantt; }, dataSource: this.dataSource, allowSorting: true, dateFormat: 'MMM dd, y', enableVirtualization: true, enableTimelineVirtualization: true, treeColumnIndex: 1, allowSelection: true, highlightWeekends: false, includeWeekend: true, splitterSettings: this.splitterSettings, allowUnscheduledTasks: true, projectStartDate: this.projectStartDate, projectEndDate: this.projectEndDate, taskFields: this.taskFields, gridLines: this.gridLines, timelineSettings: this.timelineSettings, labelSettings: this.labelSettings, dataBound: this.onDataBound.bind(this), height: '650px', rowHeight: 46, taskbarHeight: 25 },
                    React.createElement(ej2_react_gantt_1.ColumnsDirective, null,
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskId' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'TaskName', headerText: "Project Activity", width: '250', clipMode: 'EllipsisWithTooltip' }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'StartDate', headerText: "Planned Start Date" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Duration', headerText: "Duration" }),
                        React.createElement(ej2_react_gantt_1.ColumnDirective, { field: 'Progress', headerText: "Completion (%)" })),
                    React.createElement(ej2_react_gantt_1.Inject, { services: [ej2_react_gantt_1.Selection, ej2_react_gantt_1.VirtualScroll] })),
                React.createElement("div", { style: { float: 'right', margin: '10px' } },
                    "Source:",
                    React.createElement("a", { href: "https://en.wikipedia.org/wiki/Cereal_growth_staging_scales", target: '_blank' }, "https://en.wikipedia.org/"))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the way of binding data to Gantt Chart with remote service. The Gantt Chart data source is bound to remote data using DataManager. This sample data helps to visualize the various phases of Barley harvesting.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "dataSource"),
                    " property in Gantt Chart can be assigned with the instance of",
                    React.createElement("code", null, "DataManager"),
                    " to bind remote data. The DataManager, which will act as an interface between the service endpoint and the Gantt Chart, will require the below minimal information to interact with service endpoint properly."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "DataManager->url"),
                        " - Defines the service endpoint to fetch data"),
                    React.createElement("li", null,
                        React.createElement("code", null, "DataManager->adaptor"),
                        " - Defines the adaptor option. By default, ODataAdaptor is used for remote binding.")),
                React.createElement("p", null,
                    "Adaptor is responsible for processing response and request from/to the service endpoint. The ",
                    React.createElement("code", null, "@syncfusion/ej2-data"),
                    " package provides some predefined adaptors which are designed to interact with particular service endpoints. They are:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "UrlAdaptor"),
                        " - Use this to interact any remote services. This is the base adaptor for all remote based adaptors."),
                    React.createElement("li", null,
                        React.createElement("code", null, "ODataAdaptor"),
                        " - Use this to interact with OData endpoints."),
                    React.createElement("li", null,
                        React.createElement("code", null, "ODataV4Adaptor"),
                        " - Use this to interact with OData V4 endpoints."),
                    React.createElement("li", null,
                        React.createElement("code", null, "WebApiAdaptor"),
                        " - Use this to interact with Web API created under OData standards."),
                    React.createElement("li", null,
                        React.createElement("code", null, "WebMethodAdaptor"),
                        " - Use this to interact with web methods.")),
                React.createElement("p", null,
                    "In this demo, remote data is bound by assigning service data as an instance of ",
                    React.createElement("code", null, "DataManager"),
                    " to the ",
                    React.createElement("code", null, "dataSource"),
                    " property. More information on the data binding can be found in this documentation section."),
                React.createElement("p", null,
                    "Gantt component features are segregated into individual feature-wise modules. To use a virtual scroll and selection feature, we need to inject the ",
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
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/gantt/data-binding#remote-data" }, "documentation section"),
                    "."))));
    };
    return RemoteData;
}(sample_base_1.SampleBase));
exports.RemoteData = RemoteData;
