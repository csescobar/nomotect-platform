define(["require", "exports", "../common/culture-loader", "@syncfusion/ej2-charts", "@syncfusion/ej2-charts", "./data-service", "./financial-data"], function (require, exports, culture_loader_1, ej2_charts_1, ej2_charts_2, data_service_1, financial_data_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ej2_charts_1.Chart.Inject(ej2_charts_1.AreaSeries, ej2_charts_1.DateTime, ej2_charts_1.LineSeries, ej2_charts_1.Crosshair, ej2_charts_2.ChartAnnotation, ej2_charts_2.HiloOpenCloseSeries);
    ej2_charts_1.RangeNavigator.Inject(ej2_charts_1.AreaSeries, ej2_charts_1.DateTime, ej2_charts_2.PeriodSelector, ej2_charts_2.RangeTooltip);
    var data = (0, data_service_1.GetDateTimeData)(new Date(2017, 0, 1), new Date(2017, 11, 31));
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    var theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    window.default = function () {
        (0, culture_loader_1.loadCultureFiles)();
        var chart = new ej2_charts_1.Chart({
            primaryXAxis: {
                title: 'Months',
                valueType: 'DateTime',
                intervalType: 'Months',
                crosshairTooltip: { enable: true }
            },
            primaryYAxis: {
                title: 'Price',
                labelFormat: '${value}',
                minimum: 50, maximum: 180,
                interval: 30,
                crosshairTooltip: { enable: true }
            },
            series: [{
                    name: 'AAPL',
                    type: 'HiloOpenClose',
                    xName: 'x',
                    low: 'low',
                    high: 'high',
                    open: 'open',
                    animation: { enable: true },
                    close: 'close',
                    dataSource: financial_data_1.chartData
                }],
            theme: theme,
            tooltip: { enable: true, shared: true },
            crosshair: { enable: true },
            zoomSettings: {
                enableMouseWheelZooming: true,
                enableSelectionZooming: true,
                enableDeferredZooming: true,
                mode: 'XY'
            },
            title: 'AAPL - 2016/2017'
        });
        chart.appendTo('#chart');
        var range = new ej2_charts_1.RangeNavigator({
            labelPosition: 'Outside',
            enableGrouping: true,
            valueType: 'DateTime',
            height: '200',
            series: [{ dataSource: financial_data_1.chartData, xName: 'x', yName: 'close', type: 'Line', width: 1 }],
            changed: function (args) {
                chart.primaryXAxis.zoomFactor = args.zoomFactor;
                chart.primaryXAxis.zoomPosition = args.zoomPosition;
                chart.dataBind();
            },
            theme: theme,
            tooltip: { enable: true },
            value: [new Date(2014, 0, 1), new Date(2015, 8, 18)],
            periodSelectorSettings: {
                position: 'Top',
                periods: [
                    { text: '2w', interval: 2, intervalType: 'Weeks' },
                    { text: '1m', interval: 1, intervalType: 'Months' },
                    { text: '3q', interval: 3, intervalType: 'Quarter' },
                    { text: '2y', interval: 3, intervalType: 'Years' },
                    { text: 'all', interval: 3 },
                    { text: 'ytd', interval: 3 },
                ]
            }
        });
        range.appendTo('#container');
    };
});
