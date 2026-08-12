/**
 * Sample for Bar series
 */
import * as React from "react";
import {
    Inject, Chart3DLoadedEventArgs, ChartTheme, Circular3DComponent, Circular3DDataLabel, Circular3DHighlight, Circular3DLegend, Circular3DSeriesCollectionDirective, Circular3DSeriesDirective, Circular3DTooltip, PieSeries3D
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';

export let data1 = [{ 'x': 'Germany', y: 79, text: 'Germany: 79' },
{ 'x': 'China', y: 56, text: 'China: 56' },
{ 'x': 'Great Britain', y: 49, text: 'Great Britain: 49' },
{ 'x': 'Canada', y: 46, text: 'Canada: 46' },
{ 'x': 'India', y: 41, text: 'India: 41' },
{ 'x': 'Hong Kong', y: 39, text: 'Hong Kong: 39' },
{ 'x': 'Belgium', y: 34, text: 'Belgium: 34' },
{ 'x': 'United States', y: 32, text: 'United States: 32' },
{ 'x': 'Hungary', y: 30, text: 'Hungary: 30' },
{ 'x': 'Bangladesh', y: 25, text: 'Bangladesh: 25' },];

const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
/**
 * Bar sample
 */
export class PieSeries extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <div>
                        <Circular3DComponent id='charts' style={{ textAlign: "center" }} legendSettings={{ visible: false }} highlightMode='Point' tilt={-30} enableRotation={true} load={this.load.bind(this)} title='Berlin 2023 Special Olympics Gold Medals' loaded={this.onChartLoad.bind(this)} tooltip={{ enable: true, format: "<b>${point.x}</b><br> Gold Medals: <b>${point.y}</b>", header: "" }}>
                            <Inject services={[PieSeries3D, Circular3DDataLabel, Circular3DLegend, Circular3DTooltip, Circular3DHighlight]} />
                            <Circular3DSeriesCollectionDirective>
                                <Circular3DSeriesDirective dataSource={data1} xName='x' yName='y' explode={true} innerRadius='0%' radius={Browser.isDevice ? '45%' : '80%'} dataLabel={{ visible: true, position: 'Outside', name: 'text', font: { fontWeight: '600' }, connectorStyle: { length: Browser.isDevice ? '20px' : '40px' } }}>
                                </Circular3DSeriesDirective>
                            </Circular3DSeriesCollectionDirective>
                        </Circular3DComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample compares countries Berlin 2023 Special Olympics Gold Medals using various radius in a pie series.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render a doughnut chart with different radius. You can use the <code>Radius</code> mapping property to achieve this feature. <code>DataLabels</code> are used to represent individual data and its values. In addition, the sample shows how to change the order of legends for the doughnut chart by using the <code>Reverse</code> property.
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
