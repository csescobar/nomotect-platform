/**
 * Sample for Update DataSource.
 */
import * as React from "react";
import { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { updateSampleSection } from '../common/sample-base';
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const data = [
    { x: 'Jewellery', y: 20 },
    { x: 'Shoes', y: 15 },
    { x: 'Footwear', y: 13 },
    { x: 'Pet Services', y: 23 },
    { x: 'Business Clothing', y: 10 },
    { x: 'Office Supplies', y: 8 },
    { x: 'Food', y: 11 }
];
import { fabricColors, materialColors, bootstrapColors, highContrastColors } from './theme-color';
export let pointRender = (args) => {
    let selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'material';
    if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
        args.fill = fabricColors[args.point.index % 10];
    }
    else if (selectedTheme === 'material') {
        args.fill = materialColors[args.point.index % 10];
    }
    else if (selectedTheme === 'highcontrast') {
        args.fill = highContrastColors[args.point.index % 10];
    }
    else {
        args.fill = bootstrapColors[args.point.index % 10];
    }
};
const UpdateDataSource = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const load = (args) => {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
        setInterval(function () {
            const newData = data.map((item) => {
                const min = 10;
                const max = 90;
                const value = Math.floor(Math.random() * (max - min + 1)) + min;
                return { x: item.x, y: value };
            });
            if (args.chart.visibleSeries.length > 0) {
                args.chart.series[0].setData(newData);
            }
        }, 2500);
    };
    const axisRangeCalculated = (args) => {
        if (args.axis.name === 'primaryYAxis') {
            args.maximum = args.maximum > 100 ? 100 : args.maximum;
            if (args.maximum > 90) {
                args.interval = 20;
            }
        }
    };
    return (<div className='control-pane'>
            <style>
                {SAMPLE_CSS}
            </style>
            <div className='control-section'>
                <ChartComponent id='charts' style={{ textAlign: "center" }} primaryXAxis={{ valueType: 'Category', labelStyle: { size: Browser.isDevice ? '11px' : '12px' }, majorGridLines: { width: 0 } }} primaryYAxis={{
            title: 'Sales in percentage', labelFormat: '{value}%', interval: 10, lineStyle: { width: 0 }, majorTickLines: { width: 0 }
        }} chartArea={{ border: { width: 0 } }} load={load.bind(this)} width={Browser.isDevice ? '100%' : '75%'} title='Sales by product' pointRender={pointRender} axisRangeCalculated={axisRangeCalculated.bind(this)}>
                    <Inject services={[ColumnSeries, DataLabel, Category]}/>
                    <SeriesCollectionDirective>
                        <SeriesDirective dataSource={data} xName='x' yName='y' type='Column' cornerRadius={{ topLeft: Browser.isDevice ? 10 : 15, topRight: Browser.isDevice ? 10 : 15 }} columnWidth={0.5}>
                        </SeriesDirective>
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates how the data source for the chart can dynamically update with random values at a set interval.
                </p>
            </div>
            <div id="description">
                <p>
                    In this example, you can see how to render and configure a column chart that displays sales data, with each entry featuring the product name and the corresponding sales percentage. Additionally, the chart can dynamically update with random values using the <code>setData</code> method.
                </p>
                <p><b>Injecting Module</b></p>
                <p>
                    Chart component features are segregated into individual feature-wise modules. To use the column series, we need to inject the
                    <code>ColumnSeries</code> module using <code>Chart.Inject(ColumnSeries)</code> method.
                </p>
                <p>
                    More information on the column series can be found in this
                    <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/chart/chart-types/column" aria-label="Navigate to the documentation for Column Chart in React Chart control">documentation section</a>.
                </p>
            </div>
        </div>);
};
export default UpdateDataSource;
