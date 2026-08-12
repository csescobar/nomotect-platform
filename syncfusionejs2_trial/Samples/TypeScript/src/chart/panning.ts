import { loadCultureFiles } from '../common/culture-loader';
import { ChartTheme, Chart, AreaSeries, DateTime, SplineAreaSeries, Tooltip, Zoom, DataLabel, ILoadedEventArgs } from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
import { ChartAnnotation, IAxisLabelRenderEventArgs, IAnnotationRenderEventArgs } from '@syncfusion/ej2/charts';

Chart.Inject(AreaSeries, ChartAnnotation, DateTime, SplineAreaSeries, Tooltip, Zoom, DataLabel);
/**
 * Sample for Column Series
 */

let selectedTheme: string = location.hash.split('/')[1];
selectedTheme = selectedTheme ? selectedTheme : 'Material';
let theme: ChartTheme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
    selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');

(window as any).default = (): void => {
    loadCultureFiles();
    let image: string = 'sunny_image';
    let count: number = 25;
    let day: string = 'Friday';
    const chartData: any[] = [
        { x: 1, xValue: '1 am', y: 20 }, { x: 2, xValue: '4 am', y: 20 }, { x: 3, xValue: '7 am', y: 20 },
        { x: 4, xValue: '10 am', y: 21 }, { x: 5, xValue: '1 pm', y: 21 }, { x: 6, xValue: '4 pm', y: 24 },
        { x: 7, xValue: '1 am', y: 19 }, { x: 8, xValue: '4 am', y: 20 }, { x: 9, xValue: '7 am', y: 20 },
        { x: 10, xValue: '10 am', y: 21 }, { x: 11, xValue: '1 pm', y: 24 }, { x: 12, xValue: '4 pm', y: 24 },
        { x: 13, xValue: '1 am', y: 21 }, { x: 14, xValue: '4 am', y: 21 }, { x: 15, xValue: '7 am', y: 21 },
        { x: 16, xValue: '10 am', y: 22 }, { x: 17, xValue: '1 pm', y: 23 }, { x: 18, xValue: '4 pm', y: 24 },
        { x: 19, xValue: '1 am', y: 20 }, { x: 20, xValue: '4 am', y: 19 }, { x: 21, xValue: '7 am', y: 19 },
        { x: 22, xValue: '10 am', y: 18 }, { x: 23, xValue: '1 pm', y: 19 }, { x: 24, xValue: '4 pm', y: 19 },
        { x: 25, xValue: '1 am', y: 16 }, { x: 26, xValue: '4 am', y: 15 }, { x: 27, xValue: '7 am', y: 14 },
        { x: 28, xValue: '10 am', y: 15 }, { x: 29, xValue: '1 pm', y: 16 }, { x: 30, xValue: '4 pm', y: 18 }
    ];
    let chart: Chart = new Chart({
        primaryXAxis: {
            interval: 1,
            zoomFactor: 0.2,
            zoomPosition: 0,
            majorGridLines: { width: 0 },
            labelFormat: 'xValue',
            enableAutoIntervalOnZooming: false,
            labelPlacement: 'BetweenTicks'
        },
        primaryYAxis: {
            majorGridLines: { width: 0 },
            visible: false
        },
        annotations: [
            {
                content: '<div id="chart_image"><img src="src/chart/images/cloudy.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>',
                coordinateUnits: 'Pixel',
                region: 'Chart',
                x: '10%',
                y: '15%'
            },
            {
                content: '<div id="days" style="font-size: 11px;">Friday, 01:00 am</div>',
                coordinateUnits: 'Pixel',
                region: 'Chart',
                x: '90%',
                y: '15%'
            }
        ],
        annotationRender: (args: IAnnotationRenderEventArgs) => {
            if (args.content.id === 'container_Annotation_0') {
                args.content.innerHTML = '<div id="chart_cloud" align="center"><img src="src/chart/images/' + image + '.png" alt="Cloud Picture" style="width: 41px; height: 41px"/><b align="center" style="font-size: 23px">' + count + '</b><b>°C | </b><b>°F</b></div>';
            }
            else {
                args.content.innerHTML = '<div id="days" style="font-size: 11px;">' + day + ', 01:00 am</div>';
            }
        },
        zoomSettings: {
            enableSelectionZooming: true,
            toolbarItems: [],
            mode: 'X'
        },
        height: '70%',
        width: Browser.isDevice ? '100%' : '75%',
        chartArea: { border: { width: 0 } },
        series: [{
            dataSource: chartData,
            xName: 'x', yName: 'y',
            opacity: 0.5, width: 2,
            border: { width: 2 },
            type: 'SplineArea',
            marker: { visible: false, dataLabel: { visible: true, format:'{value}°C', position:'Top' } }
        }],
        title: 'USA, Texas',
        axisLabelRender: (args: IAxisLabelRenderEventArgs) => {
            if (args.axis.name === 'primaryXAxis') {
                args.text = chartData[args.value - 1]['xValue'];
            }
        },
        load: (args: ILoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        },
        titleStyle: { textAlignment: 'Far', size: '20px' }
    });
    chart.appendTo('#container');
    function updateChart(buttonId: string, img: string, tempCount: number, chartDay: string, zoomPos: number, zoomFactor: number) {
        image = img;
        count = tempCount;
        day = chartDay;
        chart.primaryXAxis.zoomPosition = zoomPos;
        chart.primaryXAxis.zoomFactor = zoomFactor;
        chart.duration = 600;
        const buttons = document.querySelectorAll('.custom-button');
        buttons.forEach(button => button.classList.remove('active'));
        const selectedButton = document.getElementById(buttonId) as HTMLElement;
        selectedButton.classList.add('active');
    }
    document.getElementById('friday').onclick = () => {
        updateChart('friday', 'sunny_image', 25, 'Friday', 0, 0.2);
    };
    document.getElementById('saturday').onclick = () => {
        updateChart('saturday', 'sunny_image', 25, 'Saturday', 0.2, 0.2);
    };
    document.getElementById('sunday').onclick = () => {
        updateChart('sunday', 'cloudy', 24, 'Sunday', 0.4, 0.2);
    };
    document.getElementById('monday').onclick = () => {
        updateChart('monday', 'cloudy', 19, 'Monday', 0.6, 0.2);
    };
    document.getElementById('tuesday').onclick = () => {
        updateChart('tuesday', 'rainy', 18, 'Tuesday', 0.8, 0.2);
    };
};