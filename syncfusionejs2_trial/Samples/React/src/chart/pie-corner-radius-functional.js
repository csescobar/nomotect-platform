"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_charts_1 = require("@syncfusion/ej2-react-charts");
var chartData = [
    { x: 'Operations', y: 30.0, text: '30.0%' },
    { x: 'Miscellaneous', y: 10.0, text: '10.0%' },
    { x: 'Human Resources', y: 15.0, text: '15.0%' },
    { x: 'Research and Development', y: 20.0, text: '20.0%' },
    { x: 'Marketing', y: 25.0, text: '25.0%' },
];
var onPointRender = function (args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme.indexOf('dark') > -1) {
        if (selectedTheme.indexOf('material') > -1) {
            args.border.color = '#303030';
        }
        else if (selectedTheme.indexOf('bootstrap5') > -1) {
            args.border.color = '#212529';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('fabric') > -1) {
            args.border.color = '#201f1f';
        }
        else if (selectedTheme.indexOf('fluent') > -1) {
            args.border.color = '#252423';
        }
        else if (selectedTheme.indexOf('bootstrap') > -1) {
            args.border.color = '#1A1A1A';
        }
        else if (selectedTheme.indexOf('tailwind') > -1) {
            args.border.color = '#1F2937';
        }
        else {
            args.border.color = '#222222';
        }
    }
    else if (selectedTheme.indexOf('highcontrast') > -1) {
        args.border.color = '#000000';
    }
    else {
        args.border.color = '#FFFFFF';
    }
};
var SAMPLE_CSS = "\n    .control-fluid {\n        padding: 0px !important;\n    }\n    .pie-chart {\n        align: center;\n    }\n";
var PieCornerRadius = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var onChartLoad = function (args) {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    var load = function (args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.accumulation.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1))
            .replace(/-dark/i, "Dark")
            .replace(/light/i, "Light")
            .replace(/contrast/i, 'Contrast')
            .replace(/-highContrast/i, 'HighContrast');
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("style", null, SAMPLE_CSS),
        React.createElement("div", { className: 'control-section row' },
            React.createElement(ej2_react_charts_1.AccumulationChartComponent, { id: 'pie-chart', title: 'Company Budget Distribution', load: load.bind(_this), style: { textAlign: 'center' }, legendSettings: { visible: false }, enableSmartLabels: true, enableAnimation: false, center: { x: '50%', y: '50%' }, enableBorderOnMouseMove: false, width: ej2_base_1.Browser.isDevice ? '100%' : '75%', tooltip: { enable: true, format: '<b>${point.x}</b>: <b>${point.y}%</b>', header: '<b>Budget</b>' }, loaded: onChartLoad.bind(_this), pointRender: onPointRender },
                React.createElement(ej2_react_charts_1.Inject, { services: [ej2_react_charts_1.AccumulationLegend, ej2_react_charts_1.PieSeries, ej2_react_charts_1.AccumulationTooltip, ej2_react_charts_1.AccumulationDataLabel, ej2_react_charts_1.AccumulationAnnotation] }),
                React.createElement(ej2_react_charts_1.AccumulationSeriesCollectionDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationSeriesDirective, { dataSource: chartData, name: 'Company Budget', xName: 'x', yName: 'y', type: 'Pie', innerRadius: '50%', dataLabel: {
                            visible: true,
                            position: 'Outside',
                            name: 'x',
                            connectorStyle: { width: 0 }
                        }, borderRadius: 8, border: { width: 3 } })),
                React.createElement(ej2_react_charts_1.AccumulationAnnotationsDirective, null,
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: '<div style="padding: 5px 5px 5px 5px">30%</div>', region: 'Series', coordinateUnits: 'Point', x: 'Operations', y: 30.0 }),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: '<div style="padding: 5px 5px 5px 5px">10%</div>', region: 'Series', coordinateUnits: 'Point', x: 'Miscellaneous', y: 10.0 }),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: '<div style="padding: 5px 5px 5px 5px">15%</div>', region: 'Series', coordinateUnits: 'Point', x: 'Human Resources', y: 15.0 }),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: '<div style="padding: 5px 5px 5px 5px">20%</div>', region: 'Series', coordinateUnits: 'Point', x: 'Research and Development', y: 20.0 }),
                    React.createElement(ej2_react_charts_1.AccumulationAnnotationDirective, { content: '<div style="padding: 5px 5px 5px 5px">25%</div>', region: 'Series', coordinateUnits: 'Point', x: 'Marketing', y: 25.0 })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the company's budget distribution over a year using a donut chart with rounded corners.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this example, you can see how to render and configure a donut chart with customized corners for each slice. By specifying a value for ",
                React.createElement("code", null, "borderRadius"),
                ", you can create rounded corners for each slice, giving the chart a modern and polished look."),
            React.createElement("p", null,
                React.createElement("code", null, "Tooltips"),
                " are enabled in this example. To see the tooltip in action, hover over a slice or tap on it in touch-enabled devices."),
            React.createElement("p", null,
                "More information about the donut series can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/documentation/accumulation-chart/pie-dough-nut/#doughnut-chart", "aria-label": "Navigate to the documentation for Doughnut Chart in TypeScript Accumulation Chart control" }, "documentation section"),
                "."))));
};
exports.default = PieCornerRadius;
