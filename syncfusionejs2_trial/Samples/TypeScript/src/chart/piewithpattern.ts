import { loadCultureFiles } from '../common/culture-loader';
import {
    Chart, WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic,
    Crosshair, DataLabel,Legend,
} from '@syncfusion/ej2-charts';
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChart, AccumulationTheme, IAccLoadedEventArgs, IAccPointRenderEventArgs } from '@syncfusion/ej2/charts';
import { EmitType } from '@syncfusion/ej2/base';
Chart.Inject(WaterfallSeries, Category, Tooltip, DateTime, Zoom, Logarithmic, Crosshair, DataLabel,Legend);

/**
 * Sample for Waterfall series
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let onPointRender: EmitType<IAccPointRenderEventArgs> = (args: IAccPointRenderEventArgs): void => {
            if (args.point.index == 0) { args.pattern = 'DiagonalBackward'}
            if (args.point.index == 1) { args.pattern = 'DiagonalForward'}
            if(args.point.index==2){args.pattern = 'HorizontalStripe'}
        if(args.point.index==3){args.pattern = 'VerticalStripe'}
        if(args.point.index==4){args.pattern = 'HorizontalDash'}
        
       let selectedTheme:string = args.series.accumulation.theme;
        if (selectedTheme.indexOf('Dark') > -1) {
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
        else if (selectedTheme.indexOf('HighContrast') > -1) {
            args.border.color = '#000000';
          
        }
        else {
            args.border.color = '#FFFFFF';
           
        }
    }
    let data: object[] = [
        { x: 'Internet Explorer', y: 6.12, text: Browser.isDevice? 'Internet Explorer:<br> 6.12%' : 'Internet Explorer: 6.12%' },
        { x: 'Chrome', y: 57.28, text: Browser.isDevice? 'Chrome:<br> 57.282%' : 'Chrome: 57.28%' },
         { x: 'Safari', y: 4.73, text: Browser.isDevice? 'Safari:<br> 4.73%' : 'Safari: 4.73%' },
         { x: 'QQ', y: 5.96, text: Browser.isDevice? 'QQ:<br>5.96%' : 'QQ: 5.96%' },
         { x: 'UC Browse', y: 4.37, text: Browser.isDevice? 'UC Browse:<br>4.37%' : 'UC Browse: 4.37%' },
         { x: 'Edge', y: 7.48, text: Browser.isDevice? 'Edge:<br> 7.48%' : 'Edge: 7.48%' },
         { x: 'Others', y: 14.06, text: Browser.isDevice? 'Others:<br> 14.06%' : 'Others: 14.06%' }
    ]

    let chart: AccumulationChart = new AccumulationChart({
        series: [{
            type: 'Pie', dataSource: data, xName: 'x', yName: 'y', animation: { enable: false }, enablePattern: true,dataLabel: {
                name:'text',visible: true, position: 'Outside',  font: { fontWeight: '600'},connectorStyle: { length: '20px', type: 'Curve' },
            },border:{width:2}
        }],
        enableBorderOnMouseMove: false,
        pointRender:onPointRender,
        legendSettings:{visible:false},
        title: 'Browser Market Share',
        tooltip: { enable: true },
        load: (args: IAccLoadedEventArgs) => {
            let selectedTheme: string = location.hash.split('/')[1];
            selectedTheme = selectedTheme ? selectedTheme : 'Material';
            args.accumulation.theme = <AccumulationTheme>(selectedTheme.charAt(0).toUpperCase() +
                selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        }
    });
    chart.appendTo('#container');
};
