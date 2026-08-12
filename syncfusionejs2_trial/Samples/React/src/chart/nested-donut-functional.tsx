/**
 * Sample for Nested Donut chart (multiple pie series)
 */
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useEffect } from 'react';
import { updateSampleSection } from '../common/sample-base';
import {
    AccumulationChartComponent,
    AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective,
    PieSeries,
    IAccLoadedEventArgs,
    AccumulationDataLabel,
    Inject,
    AccumulationLegend,
    AccumulationTooltip
} from '@syncfusion/ej2-react-charts';
import { loadAccumulationChartTheme } from './theme-color';
import { Browser } from '@syncfusion/ej2-base';

const regionColors: { [key: string]: string } = {
    'South Asia': '#1f4e8c',
    'Middle East': '#7a3b8f',
    'S.E. Asia': '#e91e63',
    'Africa': '#f4c20d',
    'Others': '#66a99c'
};

export const regionData: Object[] = [
    { x: 'South Asia', y: 55.85, color: regionColors['South Asia'], text: Browser.isDevice ? 'SA' : 'South Asia' },
    { x: 'Middle East', y: 16.15, color: regionColors['Middle East'], text: Browser.isDevice ? 'ME' : 'Middle East' },
    { x: 'S.E. Asia', y: 7.36, color: regionColors['S.E. Asia'], text: Browser.isDevice ? 'SEA' : 'S.E. Asia' },
    { x: 'Africa', y: 11.25, color: regionColors['Africa'], text: Browser.isDevice ? 'AF' : 'Africa' },
    { x: 'Others', y: 9.39, color: regionColors['Others'], text: Browser.isDevice ? 'Others' : 'Others' }
];

export const countryData: Object[] = [
    { x: 'India', y: 21.8, color: regionColors['South Asia'], text: Browser.isDevice ? 'IND' : 'India' },
    { x: 'Bangladesh', y: 12.5, color: regionColors['South Asia'], text: Browser.isDevice ? 'BGD' : 'Bangladesh' },
    { x: 'Nepal', y: 12.5, color: regionColors['South Asia'], text: Browser.isDevice ? 'NPL' : 'Nepal' },
    { x: 'Pakistan', y: 4.7, color: regionColors['South Asia'], text: Browser.isDevice ? 'PAK' : 'Pakistan' },
    { x: 'Sri Lanka', y: 4.35, color: regionColors['South Asia'], text: Browser.isDevice ? 'LKA' : 'Sri Lanka' },
    { x: 'Qatar', y: 10.5, color: regionColors['Middle East'], text: Browser.isDevice ? 'QAT' : 'Qatar' },
    { x: 'Iran', y: 1.0, color: regionColors['Middle East'], text: Browser.isDevice ? 'IRN' : 'Iran' },
    { x: 'Jordan', y: 1.6, color: regionColors['Middle East'], text: Browser.isDevice ? 'JOR' : 'Jordan' },
    { x: 'Syria', y: 1.8, color: regionColors['Middle East'], text: Browser.isDevice ? 'SYR' : 'Syria' },
    { x: 'Lebanon', y: 1.25, color: regionColors['Middle East'], text: Browser.isDevice ? 'LBN' : 'Lebanon' },
    { x: 'Philippines', y: 7.36, color: regionColors['S.E. Asia'], text: Browser.isDevice ? 'PHL' : 'Philippines' },
    { x: 'Sudan', y: 1.9, color: regionColors['Africa'], text: Browser.isDevice ? 'SDN' : 'Sudan' },
    { x: 'Egypt', y: 9.35, color: regionColors['Africa'], text: Browser.isDevice ? 'EGY' : 'Egypt' },
    { x: 'Others', y: 9.39, color: regionColors['Others'], text: Browser.isDevice ? 'Others' : 'Others' }
];

const NestedDonut = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);

    const load = (args: IAccLoadedEventArgs): void => {
        loadAccumulationChartTheme(args);
    };

    const onChartLoad = (args: IAccLoadedEventArgs): void => {
        document.getElementById('container').setAttribute('title', '');
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <AccumulationChartComponent
                    id="container"
                    load={load}
                    loaded={onChartLoad}
                    enableBorderOnMouseMove={false}
                    title='The Population of Qatar by Nationality'
                    tooltip={{
                        enable: true,
                        format: '<b>${point.x}</b><br/>Population: <b>${point.y}%</b>',
                        textStyle: { fontWeight: 'bold' }
                    }}
                    legendSettings={{ visible: true, mappingKey: 'x' }}
                    centerLabel={{
                        text: 'Qatar Population<br><b>3.1 Million</b>',
                        textStyle: { size: '12px', fontWeight: 'bold' }
                    }}
                >
                    <Inject services={[PieSeries, AccumulationLegend, AccumulationTooltip, AccumulationDataLabel]} />
                    <AccumulationSeriesCollectionDirective>
                        <AccumulationSeriesDirective
                            dataSource={countryData}
                            type='Pie'
                            xName='x'
                            yName='y'
                            pointColorMapping='color'
                            radius='90%'
                            innerRadius='75%'
                            border={{ color: '#fff', width: 2 }}
                            dataLabel={{
                                visible: true,
                                name: 'text',
                                position: 'Outside'
                            }}
                            animation={{ enable: false }}
                        />
                        <AccumulationSeriesDirective
                            dataSource={regionData}
                            type='Pie'
                            xName='x'
                            yName='y'
                            pointColorMapping='color'
                            radius='67%'
                            innerRadius='35%'
                            border={{ color: '#fff', width: 2 }}
                            dataLabel={{
                                visible: true,
                                name: 'text',
                                position: 'Inside'
                            }}
                            animation={{ enable: false }}
                        />
                    </AccumulationSeriesCollectionDirective>
                </AccumulationChartComponent>
            </div>

            <div id="action-description">
                <p>
                    This nested donut chart example demonstrates how to visualize the population of Qatar by nationality
                    using multiple pie series. The outer ring represents individual countries, while the inner ring shows
                    regional distribution with consistent color grouping.
                </p>
            </div>

            <div id="description">
                <p>
                    In this example, multiple pie series are used to display hierarchical data in concentric rings.
                    This approach makes it easy to compare nationality-level population distribution alongside broader
                    regional groupings within Qatar.
                </p>
                <p>
                    The <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#radius" aria-label="Navigate to the API for radius in React accumulation chart"><code>radius</code></a> and{' '}
                    <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#innerradius" aria-label="Navigate to the API for innerRadius in React accumulation chart"><code>innerRadius</code></a> properties control the size and thickness of each ring, enabling the nested donut appearance. The{' '}
                    <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/accumulationseries/#pointcolormapping" aria-label="Navigate to the API for pointColorMapping in React accumulation chart"><code>pointColorMapping</code></a> property ensures that countries and their corresponding regions share the same color for visual consistency.
                </p>
                <p>
                    The <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/accumulation-chart/tooltipsettings#enable"><code>Tooltip</code></a> feature is enabled to provide additional information. Hover over a segment (or tap on touch devices) to view the nationality and its population share percentage.
                </p>
                <p><b>Injecting Module</b></p>
                <p>
                    The Charts component&apos;s features are segregated into individual feature modules. To use pie series, we need to inject the <code>PieSeries</code> module into <code>services</code>.
                </p>
                <p>
                    For more details about rendering multiple pie series, refer the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/accumulation-chart/pie-dough-nut/#multiple-pie-series" aria-label="Navigate to the documentation for Multiple Pie Series in React Accumulation Chart control">documentation section</a>.
                </p>
            </div>
        </div>
    );
};

export default NestedDonut;
