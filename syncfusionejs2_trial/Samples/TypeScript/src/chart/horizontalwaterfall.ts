import { ChartTheme, ILoadedEventArgs, IPointRenderEventArgs } from '@syncfusion/ej2/charts';
import { loadCultureFiles } from '../common/culture-loader';
import {
    Chart, WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic,
    Crosshair, Legend, DataLabel
} from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2/base';
Chart.Inject(WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, DataLabel, Legend);

/**
 * Sample for Waterfall series
 */
(window as any).default = (): void => {
    loadCultureFiles();

    let chartData: any[] = [
        { x: 'JAN', y: 50 },
        { x: 'MAR', y: 40 },
        { x: 'JUNE', y: -10 },
        { x: 'AUG', y: 40 },
        { x: 'OCT', y: -30 },
        { x: 'DEC', y: 40 },
        { x: '2022', y: -130 }
    ]
    let chart: Chart = new Chart({
        primaryXAxis: {
            valueType: 'Category',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 1 },
            majorTickLines: { width: 0 },
            isInversed: true
        },
        primaryYAxis: {
            minimum: 0, maximum: 150, interval: 25,
            labelFormat: '{value}',
            edgeLabelPlacement: 'Shift',
            majorGridLines: { width: 1 },
            majorTickLines: { width: 0 }
        }, isTransposed: true,
        series: [{
            border: { width: 0.2, color: 'Black' }, columnWidth: 0.5,negativeFillColor: '#e56590',
            dataSource: chartData, width: 2,
            xName: 'x', yName: 'y',
            name: 'Increases',
            // Series type as StepLine
            type: 'Waterfall', animation: { enable: true }, connector: { width: 0.8, dashArray: '1,3', color:'#5F6A6A' }, cornerRadius: { topLeft: 3, bottomLeft: 3, bottomRight: 3, topRight: 3 },
            marker: {
                dataLabel: { visible: true, position: 'Middle' }
            }

        }],
        pointRender:(args:IPointRenderEventArgs)=>{
            if(args.point.index == args.series.points.length-1){
                args.point.text = '130'
                args.fill = '#4E81BC'
            }
        },
        legendSettings: { mode: 'Point', toggleVisibility: false },
        legendRender: (args) => {
            if (args.text === 'JAN') {
                args.text = 'Increase';
            }
            else if (args.text === 'OCT') {
                args.text = 'Decrease';
                args.fill = '#e56590'
            }
            else if (args.text === '2022') {
                args.text = 'Total';
                args.fill = '#4E81BC'
            }
            else {
                args.cancel = true;
            }
        },
        width:Browser.isDevice ?'100%':'70%',
        selectionMode: 'None',
        crosshair: { enable: false },
        tooltip: { enable: false, shared: false },
        title: 'Revenue Variation',
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }

    }, '#container');
};
