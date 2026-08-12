/**
 * Sample for Bar series
 */
import * as React from "react";
import { Inject, Circular3DComponent, Circular3DDataLabel, Circular3DHighlight, Circular3DLegend, Circular3DSeriesCollectionDirective, Circular3DSeriesDirective, Circular3DTooltip, PieSeries3D } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';
export let data1 = [{ 'x': 'Internet Explorer', y: 6.12, },
    { 'x': 'Chrome', y: 57.28, },
    { 'x': 'Safari', y: 4.73, },
    { 'x': 'QQ', y: 5.96, },
    { 'x': 'UC Browser', y: 4.37, },
    { 'x': 'Edge', y: 7.48, },
    { 'x': 'Others', y: 14.06, }];
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
/**
 * Bar sample
 */
export class PieWithLegend extends SampleBase {
    render() {
        return (<div className='control-pane'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div className='control-section'>
                    <div>
                        <Circular3DComponent id='charts' style={{ textAlign: "center" }} legendSettings={{
                visible: true,
                enableHighlight: true,
                position: Browser.isDevice ? 'Bottom' : 'Right',
            }} highlightMode='Point' tilt={-35} enableRotation={true} load={this.load.bind(this)} title='Berlin 2023 Special Olympics Gold Medals' loaded={this.onChartLoad.bind(this)} tooltip={{ enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "" }}>
                            <Inject services={[PieSeries3D, Circular3DDataLabel, Circular3DLegend, Circular3DTooltip, Circular3DHighlight]}/>
                            <Circular3DSeriesCollectionDirective>
                                <Circular3DSeriesDirective dataSource={data1} xName='x' yName='y' explode={true} innerRadius='43%' explodeOffset='10%' radius='80%' dataLabel={{
                visible: true, position: 'Inside', template: '${point.y}%',
                font: { fontWeight: '600', color: '#ffffff' }, name: 'y', connectorStyle: { length: '20px' }
            }}>
                                </Circular3DSeriesDirective>
                            </Circular3DSeriesCollectionDirective>
                        </Circular3DComponent>
                    </div>
                </div>
                <div id="action-description">
                    <p>
                        This sample shows statistics on expenditure made in a year using the donut chart with legends shown at the right side of the chart.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render a doughnut chart with legends. You can use <code>Radius</code> and InnerRadius properties to render the doughnut.
                    </p>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Circular3D Chart component features are segregated into individual feature-wise modules. To use legend, we need to Inject <code>Circular3DLegend</code> module into <code>services</code>.
                    </p>
                </div>
            </div>);
    }
    onChartLoad(args) {
        let chart = document.getElementById('charts');
        chart.setAttribute('title', '');
    }
    ;
    load(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast');
    }
    ;
}
