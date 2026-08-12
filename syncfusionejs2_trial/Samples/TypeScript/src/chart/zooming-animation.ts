import { loadCultureFiles } from '../common/culture-loader';
import { ChartTheme, DateTime, Chart, RangeNavigator, Zoom, LineSeries, Crosshair, Legend, DataLabel, Tooltip, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
import { data } from './financial-data';
import { IChangedEventArgs } from '@syncfusion/ej2/charts';

Chart.Inject(DateTime, DataLabel, LineSeries, Zoom, Legend, Crosshair, Tooltip);
RangeNavigator.Inject(DateTime, LineSeries);
/**
 * Sample for Column Series
 */

let selectedTheme: string = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
let theme: ChartTheme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');

(window as any).default = (): void => {
    loadCultureFiles();
    const series1: Object[] = [];
    let point1: Object;
    let i: number;
    for (i = 0; i < data.length; i++) {
        point1 = { x: new Date(1941, i + 2, i), y: data[i as number] / 1000 - 0.5};
        series1.push(point1);
    }
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'DateTime',
        },
        primaryYAxis: {
            intervalType: 'Months',
            labelFormat: '{value}°C'
        },
        series: [
            {
                dataSource: series1,
                xName: 'x', yName: 'y',
                type: 'Line', animation: { enable: true, duration: 1000 }
            }
        ],
        width: '1200',
        tooltip: { enable: true },
        crosshair: { enable: true, lineType: 'Vertical', dashArray: '1,1' },
        zoomSettings: {
            enableSelectionZooming: true,
            enablePinchZooming: true,
            enableMouseWheelZooming: true,
            enableDeferredZooming: false,
            enablePan: true
        },
        legendSettings: { visible: false },
        title: 'Global warming: monthly temperature anomaly',
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#chart');
    let dateTimeControl: RangeNavigator = new RangeNavigator(
        {
            valueType: 'DateTime',
            animationDuration: 600,
            theme: theme,
            enableGrouping: true,
            dataSource: series1,
            xName: 'x', yName: 'y',
            changed: (args: IChangedEventArgs) => {
                chart.primaryXAxis.zoomFactor = args.zoomFactor;
                chart.primaryXAxis.zoomPosition = args.zoomPosition;
                chart.dataBind();
            }
        }
    );
    dateTimeControl.appendTo('#container');
};