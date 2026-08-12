/**
 * Sample of Line Series with Layout
 */
import * as React from 'react';
import { DashboardLayoutComponent, PanelsDirective, PanelDirective, } from '@syncfusion/ej2-react-layouts';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ILoadedEventArgs, ChartTheme, LineSeries, Category, Tooltip, Highlight, DataLabel, Legend, IPointRenderEventArgs } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from '../common/sample-base';
export let annualMilkProduction: Object[] = [
    { year: "2018", indiaProduction: 520, name: '520 units' },
    { year: "2019", indiaProduction: 540, name: '540 units' },
    { year: "2020", indiaProduction: 530, name: '530 units' },
    { year: "2021", indiaProduction: 550, name: '550 units' },
    { year: "2022", indiaProduction: 540, name: '540 units' },
    { year: "2023", indiaProduction: 560, name: '560 units' }
];
export let monthlyTrafficData: Object[] = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .title {
        font-size: 16px;
        font-weight: bold;
    }
    .template {
        height: 100%;
        width: 100%;
    }`;

let argument: IArguments;

export class LineLayout extends SampleBase<{}, {}> {
    lineTemplate() {
        return (<div className="template">
            <ChartComponent id="charts1" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line1Template() {
        return (<div className="template">
            <ChartComponent id="charts2" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} type="Line" dashArray='5,5'></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line2Template() {
        return (<div className="template">
            <ChartComponent id="charts3" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} marker={{ visible: true, width: 6, height: 6, isFilled: true }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line3Template() {
        return (<div className="template">
            <ChartComponent id="charts4" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} marker={{ visible: true, width: 8, height: 8, shape: 'Triangle', isFilled: true }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line4Template() {
        return (<div className="template">
            <ChartComponent id="charts5" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }} pointRender={this.pointRender.bind(this)} >
                <Inject services={[LineSeries, Category, Tooltip, Highlight]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} fill="green" marker={{ visible: true, width: 10, height: 10, border: { width: 0 } }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line5Template() {
        return (<div className="template">
            <ChartComponent id="charts6" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight, DataLabel]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} marker={{ visible: true, width: 6, height: 6, isFilled: true, dataLabel: { visible: true } }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line6Template() {
        return (<div className="template">
            <ChartComponent id="charts7" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 500, maximum: 580, interval: 20, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, format: 'Year: <b>${point.x}</b><br/>Production: <b>${point.y} units</b>', header: '' }} title="Milk Production Over the Years" subTitle="Yearly data from 2018 to 2023" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight, DataLabel]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={annualMilkProduction} xName="year" yName="indiaProduction" width={2} marker={{ visible: true, width: 6, height: 6, isFilled: true, dataLabel: { visible: true, name: 'name', enableRotation: true, angle: -45 } }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }

    line7Template() {
        return (<div className="template">
            <ChartComponent id="charts8" primaryXAxis={{ valueType: 'Category', edgeLabelPlacement: 'Shift', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }} load={this.load.bind(this)} primaryYAxis={{ rangePadding: 'None', minimum: 50, maximum: 350, interval: 60, lineStyle: { width: 0 }, majorTickLines: { width: 0 }, minorTickLines: { width: 0 }, labelStyle: { color: 'transparent' } }} chartArea={{ border: { width: 0 } }} tooltip={{ enable: true, shared: true, header: '' }} title="Monthly Traffic Analysis" subTitle="Desktop vs Mobile" titleStyle={{ textAlignment: 'Near', position: 'Bottom' }} subTitleStyle={{ textAlignment: 'Near' }} legendSettings={{ visible: false }}>
                <Inject services={[LineSeries, Category, Tooltip, Highlight, Legend]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={monthlyTrafficData} xName="month" yName="desktop" name="Desktop Traffic" width={2} marker={{ visible: true, width: 6, height: 6, isFilled: true }} type="Line"></SeriesDirective>
                    <SeriesDirective dataSource={monthlyTrafficData} xName="month" yName="mobile" name="Mobile Traffic" width={2} marker={{ visible: true, width: 6, height: 6, isFilled: true }} type="Line"></SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>)
    }
    cellSpacing: number[];
    constructor() {
        super(argument);
        this.cellSpacing = [15, 15];
    }
    render() {
        return (
            <div className="control-section">
                <style>{SAMPLE_CSS}</style>
                <DashboardLayoutComponent cellSpacing={this.cellSpacing} cellAspectRatio={0.8} columns={3}>
                    <PanelsDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={0} col={0} content={this.lineTemplate.bind(this)} header='<div class="title" id="header1";>Line Chart</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={0} col={1} content={this.line1Template.bind(this)} header='<div class="title" id="header1";>Dashed Line Chart</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={0} col={2} content={this.line2Template.bind(this)} header='<div class="title" id="header1";>Line chart with Marker</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={1} col={0} content={this.line3Template.bind(this)} header='<div class="title" id="header1";>Line Chart with Different Marker Shape</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={1} col={1} content={this.line4Template.bind(this)} header='<div class="title" id="header1";>Line Chart with Marker Customization</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={1} col={2} content={this.line5Template.bind(this)} header='<div class="title" id="header1";>Line Chart with Data Labels</div>'></PanelDirective>
                        <PanelDirective sizeX={1} sizeY={1} row={2} col={0} content={this.line6Template.bind(this)} header='<div class="title" id="header1";>Line Chart with Data Label Customization</div>'></PanelDirective>
                        <PanelDirective sizeX={2} sizeY={1} row={2} col={1} content={this.line7Template.bind(this)} header='<div class="title" id="header1";>Line chart with Multiple Data Series</div>'></PanelDirective>
                    </PanelsDirective>
                </DashboardLayoutComponent>
                <div id="action-description">
                    <p>
                        This React Line Layout Chart example illustrates annual milk production and monthly traffic data for desktop and mobile devices using the default line series in the chart.
                    </p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render and configure line-type charts with layouts. You can use the <code>dashArray</code>, <code>width</code>, and <code>fill</code> properties to customize the line. The <code>marker</code> and <code>dataLabel</code> options are used to represent individual data points and their values.
                    </p>
                    <p>
                        Tooltips are enabled in this example, to see the tooltip in action, hover a point or tap on a point in touch enabled devices. The <code>enableHighlight</code> property in the tooltip allows the corresponding series to be highlighted when a data point is hovered over.
                    </p>
                    <p><b>Injecting Module</b></p>
                    <p>
                        Chart component features are segregated into individual feature-wise modules. To use line series, we need to
                        inject <code>LineSeries</code> module into <code>services</code>.
                    </p>
                    <p>
                        More information on the line series can be found in this <a target="_blank" href="http://ej2.syncfusion.com/react/documentation/chart/chart-types/#line-charts" aria-label="Navigate to the documentation for Line Chart in React Chart component">documentation section</a>.
                    </p>
                </div>
            </div>
        )
    }

    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).
            replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
    };

    public pointRender(args: IPointRenderEventArgs): void {
        let colors: string[] = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
        if (args.point.index >= 0 && args.point.index < colors.length) {
            args.fill = colors[args.point.index];
        }
    };
}
