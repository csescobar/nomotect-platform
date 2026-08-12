/**
 * Sample for Bar series
 */
import * as React from "react";
import {
    Inject, Chart3DLoadedEventArgs, ChartTheme, Circular3DComponent, Circular3DDataLabel, Circular3DHighlight, Circular3DLegend, Circular3DSeriesCollectionDirective, Circular3DSeriesDirective, Circular3DTooltip, PieSeries3D
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

export let data1 = [{ x: 'Tesla', y: 137429 }, { x: 'Aion', y: 80308 }, { x: 'Wuling', y: 76418 }, { x: 'Changan', y: 52849 }, { x: 'Geely', y: 47234 }, { x: 'Nio', y: 31041 }, { x: 'Neta', y: 22449 }, { x: 'BMW', y: 18733 }];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
/**
 * Bar sample
 */
export class DonutSeries extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <div>
                        <Circular3DComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ visible: false }} highlightMode='Point' tilt={-30} enableRotation={true} load={this.load.bind(this)} title='Top Selling Electric Cars in China' loaded={this.onChartLoad.bind(this)} tooltip={{ enable: true, header: "${point.x}", format: 'Sales Count : <b>${point.y}' }}>
                            <Inject services={[PieSeries3D, Circular3DDataLabel, Circular3DLegend, Circular3DTooltip, Circular3DHighlight]} />
                            <Circular3DSeriesCollectionDirective>
                                <Circular3DSeriesDirective dataSource={data1} xName='x' yName='y' innerRadius='55%' radius={Browser.isDevice ? '45%' : '75%'} dataLabel={{ visible: true, template: '${point.x}: ${point.y}', position: 'Outside', font: { fontWeight: '600', }, connectorStyle: { length: Browser.isDevice ? '20px' : '40px' } }}>
                                </Circular3DSeriesDirective>
                            </Circular3DSeriesCollectionDirective>
                        </Circular3DComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This donut chart example visualizes mobile browser statistics.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render and configure a donut chart. To create a donut in the pie series, we use the <code>innerRadius</code> property.
                    </p>
                    <p><b>Injecting Module</b></p>
                    <p>
                        The Circular3D Chart component’s features are segregated into individual feature modules. To use the pie series feature, we need to inject <code>PieSeries3D</code> module into <code>services</code>.
                    </p>
                </div>
            </div>
        )
    }
    public onChartLoad(args: Chart3DLoadedEventArgs): void {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
    };

    public load(args: Chart3DLoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast') as ChartTheme;
    };

}
