/**
 * Sample for Crosshair in chart
 */
import * as React from "react";
import { useEffect } from "react";
import * as ReactDOM from "react-dom";
import { updateSampleSection } from '../common/sample-base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries, DateTime, Legend, Crosshair, ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

const CrosshairSnap = () => {
    useEffect(() => {
        updateSampleSection();
    }, [])
    const onChartLoad = (args: ILoadedEventArgs): void => {
        let chart: Element = document.getElementById('charts');
        chart.setAttribute('title', '');
    };

    const load = (args: ILoadedEventArgs): void => {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i,'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }}
                    primaryXAxis={{
                        interval: 1,
                        crosshairTooltip: { enable: true },
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 },
                        title: 'Year'
                    }}
                    load={load.bind(this)}
                    primaryYAxis={{
                        title: "Price (24 Karat per Ounce)",
                        labelFormat: '${value}',
                        crosshairTooltip: { enable: true },
                        minimum: 1000,
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 }
                    }}
                    chartArea={{ border: { width: 0 } }}
                    width={Browser.isDevice ? '100%' : '75%'}
                    title='Historical Gold Prices in USA: 2015 to 2024'
                    loaded={onChartLoad.bind(this)}
                    tooltip={{ enable: false, shared: false }}
                    crosshair={{ enable: true, snapToData: true, dashArray: '5,5' }}
                    legendSettings={{ visible: false }}>
                    <Inject services={[LineSeries, DateTime, Legend, Crosshair]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={[
                            { x: 2015, y: 1160.06 },
                            { x: 2016, y: 1250.74 },
                            { x: 2017, y: 1257.12 },
                            { x: 2018, y: 1268.93 },
                            { x: 2019, y: 1393.34 },
                            { x: 2020, y: 1770.35 },
                            { x: 2021, y: 1798.53 },
                            { x: 2022, y: 1800.79 },
                            { x: 2023, y: 1923.48 },
                            { x: 2024, y: 2003.10 }
                        ]}
                            xName='x' yName='y' name='India' type='Line'
                            width={2} marker={{ visible: true, isFilled: true }}
                            animation={{ enable: false }} />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates the crosshair with snap-to-data functionality in charts. Hover over the chart or tap on it in touch-enabled devices to view the crosshair and its tooltip snapping directly to the nearest data point.
                </p>
            </div>
            <div id="description">
                <p>The crosshair in charts helps users examine data values with precision by using a vertical and horizontal line. When the <code>snapToData</code> property is enabled, the crosshair aligns directly to the nearest data point, making it easy to pinpoint exact values on hover or tap.</p>
                <p>Enable this feature by setting <code>snapToData: true</code> in the <code>crosshair</code> configuration.</p>
                <p><b>Injecting Module</b></p>
                <p>
                    Chart component features are segregated into individual feature-wise modules. To use Crosshair, we need to inject
                    <code>Crosshair</code> module into <code>services</code>.
                </p>
                <p>
                    More information on the Crosshair can be found in this &nbsp;
                    <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/cross-hair-and-track-ball/" aria-label="Navigate to the documentation for Crosshair in React Chart component">documentation section</a>.
                </p>
            </div>
        </div>
    )
}

export default CrosshairSnap;
