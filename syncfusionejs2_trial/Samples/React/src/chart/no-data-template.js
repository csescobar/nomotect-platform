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
exports.NoDataTemplate = exports.data1 = void 0;
/**
 * Sample for No Data Template
 */
var React = require("react");
var client_1 = require("react-dom/client");
var ReactDOM = require("react-dom");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var theme_color_1 = require("./theme-color");
exports.data1 = [
    { x: 'January', y: 19173 },
    { x: 'February', y: 17726 },
    { x: 'March', y: 19874 },
    { x: 'April', y: 19391 },
    { x: 'May', y: 20072 },
    { x: 'June', y: 19233 }
];
var SAMPLE_CSS = "\n.load-data-btn {\n    border-radius: 4px;\n}\n#noDataTemplateContainer {\n    height: inherit;\n    width: inherit;\n}\n\n.dark-bg {\n    background-color: #000000;\n    color: #ffffff;\n}\n\n.material3-dark .dark-bg, .fluent2-highcontrast .dark-bg {\n    background-color: #1c1b1f;\n}\n\n.fluent2-dark .dark-bg {\n    background-color: #1f1f1f;\n}\n\n.tailwind3-dark .dark-bg {\n    background-color: #111827;\n}\n\n.bootstrap5_3-dark .dark-bg {\n    background-color: #212529;\n}\n\n.light-bg {\n    background-color: #fafafa;\n    color: #000000;\n}\n\n.template-align img {\n    max-width: 150px;\n    /* Adjust size as needed */\n    max-height: 150px;\n    margin-top: 55px;\n}\n\n.template-align {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    flex-direction: column;\n}\n.control-fluid {\n    padding: 0px !important;\n}\n#syncfusionButtonContainer {\n    margin-top: 5px;\n}";
var NoDataTemplate = /** @class */ (function (_super) {
    __extends(NoDataTemplate, _super);
    function NoDataTemplate(props) {
        var _this = _super.call(this, props) || this;
        _this.noDataTemplate = "\n        <div id=\"noDataTemplateContainer\" class=\"light-bg\">\n            <div class=\"template-align\">\n                <img src=\"src/chart/images/no-data.png\" alt=\"No Data\"/>\n            </div>\n            <div class=\"template-align\">\n                <p style=\"font-size: 15px; margin: 10px 0 10px;\"><strong>No data available to display.</strong></p>\n            </div>\n            <div class=\"template-align\">\n                <div id=\"syncfusionButtonContainer\"></div>\n            </div>\n        </div>\n    ";
        _this.state = {
            hasData: false
        };
        return _this;
    }
    NoDataTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: 'control-section row' },
                React.createElement("div", null,
                    React.createElement(ej2_react_charts_1.ChartComponent, { id: 'charts', ref: function (chart) { return _this.chartInstance = chart; }, style: { textAlign: "center" }, noDataTemplate: this.noDataTemplate, width: '100%', primaryXAxis: { valueType: 'Category',
                            majorGridLines: {
                                width: 0
                            },
                            majorTickLines: {
                                width: 0
                            },
                        }, chartArea: { border: { width: 0 } }, primaryYAxis: {
                            title: 'Production (in million pounds)',
                            titleStyle: {
                                fontWeight: '600'
                            },
                            majorTickLines: {
                                width: 0
                            },
                            lineStyle: {
                                width: 0
                            }
                        }, tooltip: { enable: true, header: 'Milk Production', format: '${point.x} : <b>${point.y}M</b>' }, load: this.load.bind(this), loaded: this.loaded.bind(this), title: 'Milk Production in US - 2025', subTitle: 'Source: nass.usda.gov' },
                        React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.LineSeries, ej2_react_charts_1.Category, ej2_react_charts_1.Tooltip] }),
                        React.createElement(ej2_react_charts_1.SeriesCollectionDirective, null,
                            React.createElement(ej2_react_charts_1.SeriesDirective, { dataSource: this.state.hasData ? exports.data1 : [], marker: { visible: true, width: 7, height: 7 }, animation: { enable: true }, xName: 'x', yName: 'y', type: 'Line', width: 2 }))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample illustrates handling the empty data chart using no data template. This template is used to display a custom message or image when the data is not available in the chart.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this example, the ",
                    React.createElement("code", null, "noDataTemplate"),
                    " property is assigned with an HTML template that includes an image, a message indicating data unavailability, and a button to load new data into the chart. Once data is provided, a line chart is displayed."),
                React.createElement("p", null,
                    React.createElement("b", null, "Tooltip"),
                    " is enabled in the chart. To view a tooltip, hover over a data point or tap on it if you're using a touch-enabled device."))));
    };
    NoDataTemplate.prototype.load = function (args) {
        (0, theme_color_1.loadChartTheme)(args);
        args.chart.series[0].dataSource = this.state.hasData ? exports.data1 : [];
    };
    ;
    NoDataTemplate.prototype.loaded = function (args) {
        var selectedTheme = (0, theme_color_1.loadChartTheme)(args);
        var noDataDiv = document.getElementById("noDataTemplateContainer");
        if (noDataDiv) {
            noDataDiv.className = selectedTheme.indexOf("Dark") > -1 || selectedTheme.indexOf("HighContrast") > -1 ? 'dark-bg' : 'light-bg';
        }
        if (!this.state.hasData) {
            var buttonContainer = document.getElementById("syncfusionButtonContainer");
            if (buttonContainer && !buttonContainer.hasChildNodes()) {
                var buttonElement = React.createElement(ej2_react_buttons_1.ButtonComponent, {
                    id: "loadDataButton",
                    content: "Load Data",
                    iconCss: "e-icons e-refresh",
                    cssClass: "load-data-btn e-outline",
                    isPrimary: false,
                    onClick: this.loadData.bind(this)
                });
                var root = (0, client_1.createRoot)(buttonContainer);
                root.render(buttonElement);
            }
        }
    };
    ;
    NoDataTemplate.prototype.loadData = function () {
        var _this = this;
        this.setState({ hasData: true }, function () {
            if (_this.chartInstance) {
                _this.chartInstance.series[0].dataSource = exports.data1;
                var values = exports.data1.map(function (d) { return d.y; });
                var min = Math.min.apply(Math, values);
                var max = Math.max.apply(Math, values);
                var range = max - min;
                _this.chartInstance.primaryYAxis.minimum = Math.floor(min - range * 0.1);
                _this.chartInstance.primaryYAxis.maximum = Math.ceil(max + range * 0.1);
                _this.chartInstance.primaryYAxis.interval = Math.ceil(range / 5);
                _this.chartInstance.series[0].animation.enable = true;
                var buttonContainer = document.getElementById("syncfusionButtonContainer");
                if (buttonContainer) {
                    ReactDOM.unmountComponentAtNode(buttonContainer);
                }
                _this.chartInstance.refresh();
            }
        });
    };
    NoDataTemplate.prototype.componentWillUnmount = function () {
        var buttonContainer = document.getElementById("syncfusionButtonContainer");
        if (buttonContainer) {
            ReactDOM.unmountComponentAtNode(buttonContainer);
        }
    };
    return NoDataTemplate;
}(sample_base_1.SampleBase));
exports.NoDataTemplate = NoDataTemplate;
