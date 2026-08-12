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
exports.SchedulerWithChart = void 0;
var React = require("react");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./scheduler-with-chart.css");
var sample_base_1 = require("../common/sample-base");
var theme_color_1 = require("./theme-color");
var SchedulerWithChart = /** @class */ (function (_super) {
    __extends(SchedulerWithChart, _super);
    function SchedulerWithChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentMode = 'tripcount';
        _this.drivers = [
            { id: 1, driver: 'Ben Smith', color: '#ea7a57', truck: 'Volvo FH16', capacity: 325 },
            { id: 2, driver: 'Sarah Johnson', color: '#7fa900', truck: 'Scania R730', capacity: 310 },
            { id: 3, driver: 'Mike Chen', color: '#5978ee', truck: 'Mercedes Actros', capacity: 290 },
            { id: 4, driver: 'Emma Davis', color: '#fec200', truck: 'MAN TGX', capacity: 280 },
            { id: 5, driver: 'Carlos Rodriguez', color: '#df5286', truck: 'DAF XF', capacity: 300 },
            { id: 6, driver: 'Olivia Wilson', color: '#00bdae', truck: 'Kenworth T680', capacity: 315 },
            { id: 7, driver: 'James Taylor', color: '#865fcf', truck: 'Peterbilt 579', capacity: 305 },
            { id: 8, driver: 'Sophia Martinez', color: '#1aaa55', truck: 'Freightliner Cascadia', capacity: 295 },
            { id: 9, driver: 'Daniel Lee', color: '#df5286', truck: 'Mack Anthem', capacity: 285 },
            { id: 10, driver: 'Ava Thompson', color: '#710193', truck: 'International LT', capacity: 275 }
        ];
        _this.events = [
            {
                Id: 1,
                Subject: 'Long haul trip',
                StartTime: new Date(2026, 0, 12, 10, 0),
                EndTime: new Date(2026, 0, 12, 18, 0),
                DriverID: 1
            },
            {
                Id: 2,
                Subject: 'Delivery to New York',
                StartTime: new Date(2026, 0, 13, 9, 0),
                EndTime: new Date(2026, 0, 13, 17, 0),
                DriverID: 2
            },
            {
                Id: 3,
                Subject: 'Cross-country route',
                StartTime: new Date(2026, 0, 13, 16, 0),
                EndTime: new Date(2026, 0, 14, 4, 0),
                DriverID: 3
            },
            {
                Id: 4,
                Subject: 'Refrigerated goods',
                StartTime: new Date(2026, 0, 14, 6, 0),
                EndTime: new Date(2026, 0, 14, 14, 0),
                DriverID: 4
            },
            {
                Id: 5,
                Subject: 'Container transport',
                StartTime: new Date(2026, 0, 15, 8, 0),
                EndTime: new Date(2026, 0, 15, 16, 0),
                DriverID: 5
            },
            {
                Id: 6,
                Subject: 'Steel materials',
                StartTime: new Date(2026, 0, 16, 7, 0),
                EndTime: new Date(2026, 0, 16, 13, 0),
                DriverID: 6
            },
            {
                Id: 7,
                Subject: 'Food products',
                StartTime: new Date(2026, 0, 16, 14, 0),
                EndTime: new Date(2026, 0, 16, 22, 0),
                DriverID: 7
            },
            {
                Id: 8,
                Subject: 'Construction materials',
                StartTime: new Date(2026, 0, 17, 6, 0),
                EndTime: new Date(2026, 0, 17, 15, 0),
                DriverID: 8
            },
            {
                Id: 9,
                Subject: 'Medical supplies',
                StartTime: new Date(2026, 0, 17, 16, 0),
                EndTime: new Date(2026, 0, 17, 23, 0),
                DriverID: 9
            },
            {
                Id: 18,
                Subject: 'Emergency equipment',
                StartTime: new Date(2026, 0, 20, 7, 0),
                EndTime: new Date(2026, 0, 20, 13, 0),
                DriverID: 9
            },
            {
                Id: 10,
                Subject: 'Retail distribution',
                StartTime: new Date(2026, 0, 18, 8, 0),
                EndTime: new Date(2026, 0, 18, 16, 0),
                DriverID: 10
            },
            {
                Id: 11,
                Subject: 'Warehouse pickup',
                StartTime: new Date(2026, 0, 15, 8, 0),
                EndTime: new Date(2026, 0, 15, 14, 0),
                DriverID: 2
            },
            {
                Id: 12,
                Subject: 'Express highway delivery',
                StartTime: new Date(2026, 0, 16, 6, 0),
                EndTime: new Date(2026, 0, 16, 12, 0),
                DriverID: 3
            },
            {
                Id: 13,
                Subject: 'Return cargo trip',
                StartTime: new Date(2026, 0, 18, 9, 0),
                EndTime: new Date(2026, 0, 18, 15, 0),
                DriverID: 3
            },
            {
                Id: 14,
                Subject: 'Frozen food transport',
                StartTime: new Date(2026, 0, 17, 7, 0),
                EndTime: new Date(2026, 0, 17, 13, 0),
                DriverID: 4
            },
            {
                Id: 15,
                Subject: 'Industrial machinery',
                StartTime: new Date(2026, 0, 18, 6, 0),
                EndTime: new Date(2026, 0, 18, 14, 0),
                DriverID: 6
            },
            {
                Id: 16,
                Subject: 'Cement delivery',
                StartTime: new Date(2026, 0, 19, 8, 0),
                EndTime: new Date(2026, 0, 19, 14, 0),
                DriverID: 8
            },
            {
                Id: 17,
                Subject: 'Equipment relocation',
                StartTime: new Date(2026, 0, 21, 9, 0),
                EndTime: new Date(2026, 0, 21, 17, 0),
                DriverID: 8
            }
        ];
        _this.resourceTemplate = function (props) {
            var d = props.resourceData;
            return (React.createElement("div", { className: "template-wrap" },
                React.createElement("div", { className: "room-name" }, d.driver),
                React.createElement("div", { className: "truck-type" }, d.truck),
                React.createElement("div", { className: "capacity" }, d.capacity)));
        };
        _this.tooltipTemplate = function (props) {
            var d = props.resourceData;
            return (React.createElement("div", { className: "template-wrap" },
                React.createElement("div", null,
                    "Name : ",
                    d.driver),
                React.createElement("div", null,
                    "Truck : ",
                    d.truck),
                React.createElement("div", null,
                    "Capacity : ",
                    d.capacity)));
        };
        _this.headerIndentTemplate = function () { return (React.createElement("div", { className: "template-wrap header-indent" },
            React.createElement("div", { className: "name" }, "Driver"),
            React.createElement("div", { className: "type" }, "Truck"),
            React.createElement("div", { className: "capac" }, "Capacity"))); };
        return _this;
    }
    SchedulerWithChart.prototype.generateChartData = function () {
        var _this = this;
        if (this.currentMode === 'capacity') {
            return this.drivers.map(function (d) { return ({
                Driver: d.truck,
                OriginalDriver: d.driver,
                Value: d.capacity
            }); });
        }
        var map = {};
        this.events.forEach(function (e) {
            var driver = _this.drivers.find(function (d) { return d.id === e.DriverID; });
            if (!driver || !e.StartTime || !e.EndTime)
                return;
            if (_this.currentMode === 'tripcount') {
                map[driver.driver] = (map[driver.driver] || 0) + 1;
            }
            if (_this.currentMode === 'longest') {
                var duration = (new Date(e.EndTime).getTime() -
                    new Date(e.StartTime).getTime()) / (1000 * 60 * 60);
                if (!map[driver.driver] || duration > map[driver.driver]) {
                    map[driver.driver] = duration;
                }
            }
        });
        return this.drivers
            .map(function (d) { return ({
            Driver: d.driver,
            Value: map[d.driver] || 0
        }); })
            .filter(function (x) { return x.Value > 0; });
    };
    SchedulerWithChart.prototype.updateChart = function () {
        var _this = this;
        if (!this.chart || this.chart.isDestroyed)
            return;
        if (!this.chart.series || !this.chart.series.length)
            return;
        setTimeout(function () {
            if (!_this.chart || _this.chart.isDestroyed)
                return;
            _this.chart.series[0].dataSource = _this.generateChartData();
            _this.chart.primaryYAxis.title =
                _this.currentMode === 'capacity'
                    ? 'Capacity (t)'
                    : _this.currentMode === 'longest'
                        ? 'Duration (hours)'
                        : 'Count';
            _this.chart.primaryYAxis.interval =
                _this.currentMode === 'tripcount' ? 2 : undefined;
            _this.chart.title =
                _this.currentMode === 'capacity'
                    ? 'Truck Capacity'
                    : _this.currentMode === 'longest'
                        ? 'Longest Trips'
                        : 'Trip Count';
            _this.chart.refresh();
        }, 0);
    };
    SchedulerWithChart.prototype.load = function (args) {
        (0, theme_color_1.loadChartTheme)(args);
    };
    ;
    SchedulerWithChart.prototype.componentWillUnmount = function () {
        if (this.schedule) {
            this.schedule.destroy();
        }
        if (this.chart) {
            this.chart.destroy();
        }
    };
    SchedulerWithChart.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section' },
            React.createElement("div", { className: "col-lg-12 schedule-with-chart control-section" },
                React.createElement("div", { className: "schedule-content-wrapper" },
                    React.createElement("div", { className: "modern-layout", style: { display: 'flex', gap: '10px' } },
                        React.createElement("div", { id: "scheduler", className: "scheduler-wrapper" },
                            React.createElement(ej2_react_schedule_1.ScheduleComponent, { ref: function (s) { return (_this.schedule = s); }, height: "650px", width: "100%", selectedDate: new Date(2026, 0, 12), views: ['TimelineMonth'], allowOverlap: false, resourceHeaderTemplate: this.resourceTemplate, headerIndentTemplate: this.headerIndentTemplate, group: {
                                    resources: ['TruckDetails'],
                                    headerTooltipTemplate: { this: this.tooltipTemplate }
                                }, eventSettings: { dataSource: this.events }, actionComplete: function (args) {
                                    if (args.requestType === 'eventCreated' ||
                                        args.requestType === 'eventChanged' ||
                                        args.requestType === 'eventRemoved') {
                                        _this.updateChart();
                                    }
                                } },
                                React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                                    React.createElement(ej2_react_schedule_1.ResourceDirective, { name: "TruckDetails", field: "DriverID", dataSource: this.drivers, textField: "driver", idField: "id", colorField: "color" })),
                                React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineMonth, ej2_react_schedule_1.Resize, ej2_react_schedule_1.DragAndDrop] }))),
                        React.createElement("div", { id: "chart-container", className: "chart-section" },
                            React.createElement("div", { className: "chart-header" },
                                React.createElement("h4", { className: "chart-title" }, "Analytics"),
                                React.createElement("div", { id: "chart-ddl", className: "dropdown-wrapper" },
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { width: "100%", value: this.currentMode, placeholder: "Select Metric", fields: { text: 'text', value: 'value' }, dataSource: [
                                            { text: 'Trip Count', value: 'tripcount' },
                                            { text: 'Truck Capacity', value: 'capacity' },
                                            { text: 'Longest Trips', value: 'longest' }
                                        ], change: function (e) {
                                            _this.currentMode = e.value;
                                            _this.updateChart();
                                        } }))),
                            React.createElement("div", { id: "chart", className: "chart-area" },
                                React.createElement(ej2_react_charts_1.ChartComponent, { ref: function (c) {
                                        var _a, _b;
                                        _this.chart = c;
                                        if ((_b = (_a = _this.chart) === null || _a === void 0 ? void 0 : _a.series) === null || _b === void 0 ? void 0 : _b.length) {
                                            _this.updateChart();
                                        }
                                    }, primaryXAxis: {
                                        valueType: 'Category',
                                        labelRotation: ej2_base_1.Browser.isDevice ? -45 : 315
                                    }, legendSettings: { visible: false }, load: this.load.bind(this), tooltip: { enable: true, enableHighlight: true }, pointRender: function (args) {
                                        var driver;
                                        if (_this.currentMode === 'capacity') {
                                            driver = _this.drivers.find(function (d) { var _a; return d.truck === ((_a = args.point) === null || _a === void 0 ? void 0 : _a.x); });
                                        }
                                        else {
                                            driver = _this.drivers.find(function (d) { var _a; return d.driver === ((_a = args.point) === null || _a === void 0 ? void 0 : _a.x); });
                                        }
                                        if (driver) {
                                            args.fill = driver.color;
                                        }
                                    } },
                                    React.createElement(ej2_react_schedule_1.Inject, { services: [
                                            ej2_react_charts_1.ColumnSeries,
                                            ej2_react_charts_1.Category,
                                            ej2_react_charts_1.Legend,
                                            ej2_react_charts_1.Tooltip,
                                            ej2_react_charts_1.Highlight
                                        ] }),
                                    React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                                        React.createElement(ej2_react_charts_1.SeriesDirective, { type: "Column", xName: "Driver", yName: "Value" })))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    React.createElement("strong", null, "Fleet Management Dashboard:"),
                    " A modern timeline scheduler with real-time analytics visualization. Manage driver schedules and monitor fleet metrics through an integrated analytics dashboard.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This sample demonstrates a fleet-management solution that pairs a ",
                    React.createElement("strong", null, "Timeline Month Scheduler"),
                    "with a real-time ",
                    React.createElement("strong", null, "Analytics Chart"),
                    ". The left panel shows driver routes grouped by resource; the right panel delivers analytics for quick insights and decision-making."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Key components")),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Timeline Scheduler:"),
                        " Monthly timeline with resource grouping for drivers and routes."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Analytics Dashboard:"),
                        " Three switchable views \u2014 ",
                        React.createElement("em", null, "Trip Count"),
                        ", ",
                        React.createElement("em", null, "Truck Capacity"),
                        ", and ",
                        React.createElement("em", null, "Longest Trips"),
                        "."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Real-time sync:"),
                        " Charts update immediately on event create/edit/delete."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Visual consistency:"),
                        " Chart bars inherit scheduler resource colors.")))));
    };
    return SchedulerWithChart;
}(sample_base_1.SampleBase));
exports.SchedulerWithChart = SchedulerWithChart;
exports.default = SchedulerWithChart;
