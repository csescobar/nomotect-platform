define(["require", "exports", "../common/culture-loader", "@syncfusion/ej2-charts", "@syncfusion/ej2-buttons"], function (require, exports, culture_loader_1, ej2_charts_1, ej2_buttons_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_charts_1.Chart.Inject(ej2_charts_1.SplineSeries);
    ej2_charts_1.RangeNavigator.Inject(ej2_charts_1.StepLineSeries);
    var series1 = [];
    var series2 = [];
    var value = 100;
    var value1 = 120;
    for (var i = 0; i < 351; i++) {
        if (Math.random() > .5) {
            value += Math.random();
            value1 += Math.random();
        }
        else {
            value -= Math.random();
            value1 -= Math.random();
        }
        series1.push({ x: i, y: value });
        series2.push({ x: i, y: value1 });
    }
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    window.default = function () {
        (0, culture_loader_1.loadCultureFiles)();
        var chart = new ej2_charts_1.Chart({
            primaryXAxis: { crosshairTooltip: { enable: true }, edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 } },
            primaryYAxis: { minimum: 80, maximum: 140, majorTickLines: { width: 0 }, lineStyle: { width: 0 } },
            chartArea: { border: { width: 0 } },
            series: [
                { dataSource: series1, xName: 'x', yName: 'y', width: 2, animation: { enable: false }, type: 'Spline' },
                { dataSource: series2, xName: 'x', yName: 'y', width: 2, animation: { enable: false }, type: 'Spline' }
            ],
            crosshair: { enable: true, lineType: 'Vertical' },
            height: '350',
            theme: theme
        });
        chart.appendTo('#chart');
        var range = new ej2_charts_1.RangeNavigator({
            labelPosition: 'Outside',
            tooltip: { enable: true },
            value: [150, 250],
            series: [{ dataSource: series1, xName: 'x', yName: 'y', type: 'StepLine', width: 1 }],
            changed: function (args) {
                chart.primaryXAxis.zoomFactor = args.zoomFactor;
                chart.primaryXAxis.zoomPosition = args.zoomPosition;
                chart.dataBind();
            },
            theme: theme
        });
        range.appendTo('#container');
        var togglebtn = new ej2_buttons_1.Button({
            iconCss: 'e-icons e-play-icon', cssClass: 'e-flat', isPrimary: true,
        });
        togglebtn.appendTo('#togglebtn');
        document.getElementById('togglebtn').onclick = function () {
            range.print(['container', 'chart']);
        };
    };
});
