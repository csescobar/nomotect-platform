import { loadCultureFiles } from '../common/culture-loader';
import { Chart, ColumnSeries, Category, DataLabel, ILoadedEventArgs, ChartTheme, Series, IAxisRangeCalculatedEventArgs, IPointRenderEventArgs } from '@syncfusion/ej2-charts';
import { fabricColors, materialColors, bootstrapColors, highContrastColors, fluent2Colors, fluent2HighContrastColors } from './theme-color';
Chart.Inject(ColumnSeries, Category, DataLabel);
import { Browser } from '@syncfusion/ej2-base';
import { EmitType } from '@syncfusion/ej2/base';

/**
 * Sample for Update Data Source.
 */
const data: Object[] = [
    { x: 'Jewellery', y: 20 },
    { x: 'Shoes', y: 15 },
    { x: 'Footwear', y: 13 },
    { x: 'Pet Services', y: 23 },
    { x: 'Business Clothing', y: 10 },
    { x: 'Office Supplies', y: 8 },
    { x: 'Food', y: 11 }
];
let labelRender: EmitType<IPointRenderEventArgs> = (args: IPointRenderEventArgs): void => {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    } else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    } else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2') {
        args.fill = fluent2Colors[args.point.index % 10];
    } else if (selectedTheme === 'fluent2-highcontrast') {
        args.fill = fluent2HighContrastColors[args.point.index % 10];
    } else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
(window as any).default = (): void => {
    loadCultureFiles();
    let chart: Chart = new Chart({
        //Initializing Primary X and Y Axis
        primaryXAxis: {
            valueType: 'Category', majorGridLines: { width: 0 }, labelStyle: { size: Browser.isDevice ? '11px' : '12px' } 
        },
        chartArea: { border: { width: 0 } },
        primaryYAxis:
        {
            title: 'Sales in percentage', labelFormat: '{value}%', lineStyle: { width: 0 }, majorTickLines: { width: 0 }
        },
        //Initializing Chart Series
        series: [
            {
                dataSource: data, xName: 'x', yName: 'y', type: 'Column',
                cornerRadius: { topLeft: Browser.isDevice ? 10 : 15, topRight: Browser.isDevice ? 10 : 15 }, columnWidth: 0.5
            }
        ],
        width: Browser.isDevice ? '100%' : '75%',
        title: 'Sales by product',
        pointRender: labelRender,
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
            setInterval(function () {
                const newData = data.map((item: { x: string, y: number }) => {
                    const value: number = getRandomInt(10, 90);
                    return { x: item.x, y: value };
                });
                if (chart.visibleSeries.length > 0) {
                    chart.series[0].setData(newData);
                }
            }, 3000);
        },
        axisRangeCalculated: (args: IAxisRangeCalculatedEventArgs) => {
            if (args.axis.name === 'primaryYAxis') {
                args.maximum = args.maximum as number > 100 ? 100 : args.maximum;
                if (args.maximum > 80) {
                    args.interval = 10;
                }
            }
        }
    });
    chart.appendTo('#UpdateData');
    function getRandomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};