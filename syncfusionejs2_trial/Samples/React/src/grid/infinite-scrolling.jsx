import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, InfiniteScroll, VirtualScroll, AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective, Sort, Filter, Aggregate } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';
import { createSalesDataSource, salesDataSource } from './data';
// custom code end
export class InfiniteScrolling extends SampleBase {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
    }
    grid;
    data = [];
    onclick() {
        if (!this.data.length) {
            createSalesDataSource();
            this.grid.dataSource = this.data = salesDataSource;
            this.setState({ isLoaded: true });
        }
    }
    load(args) {
        if (args) {
            args.enableSeamlessScrolling = true;
        }
    }
    render() {
        const SAMPLE_CSS = `
        .image {
            position: absolute;
            background-repeat: no-repeat;
            background-image: url('src/grid/images/spinner.gif');
            background-position: center;
            width: 16px;
            height: 28px;
        }

        .e-bigger .image {
            height: 36px;
        }
        
        #popup {
            position: absolute;
            background-color: transparent;
            display: none;
            z-index: 100;
        }
        .div-button{
            margin: 5px 5px 5px 0;
        }`;
        return (<div className='control-pane'>
                <div className='control-section'>
                    <style>
                        {SAMPLE_CSS}
                    </style>
                    <div className='div-button'>
                        <ButtonComponent cssClass={'e-info'} onClick={this.onclick.bind(this)} disabled={this.state.isLoaded}>Load 100K Data</ButtonComponent>
                        <span id="popup">
                            <span id="gif" className="image"></span>
                        </span>
                    </div>
                    <GridComponent id="InfiniteScroll" dataSource={[]} enableInfiniteScrolling={true} enableColumnVirtualization={true} height={400} pageSettings={{ pageSize: 50 }} infiniteScrollSettings={{ initialBlocks: 1, enableCache: true }} ref={g => this.grid = g} allowSorting={true} allowFiltering={true} filterSettings={{ type: 'CheckBox', enableInfiniteScrolling: true }} load={this.load.bind(this)} clipMode='EllipsisWithTooltip' rowHeight={40} footerRowHeight={40}>
                        <ColumnsDirective>
                            <ColumnDirective field='ProductId' headerText='Product ID' isPrimaryKey={true} width='130' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='ProductName' headerText='Product Name' width='200'></ColumnDirective>
                            <ColumnDirective field='GrossAmount' headerText='Gross Amount' width='180' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='NetAmount' headerText='Net Amount' width='180' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='ProfitMargin' headerText='Profit (%)' width='180'></ColumnDirective>
                            <ColumnDirective field='AchievementPercent' headerText='Achievement (%)' width='190'></ColumnDirective>
                            <ColumnDirective field='SalesQty' headerText='Sales Quantity' width='150' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='UnitPrice' headerText='Price' width='120' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Month' headerText='Month' width='120'></ColumnDirective>
                            <ColumnDirective field='Category' headerText='Category' width='130'></ColumnDirective>
                            <ColumnDirective field='SubCategory' headerText='Sub Category' width='150' visible={false}></ColumnDirective>
                            <ColumnDirective field='Brand' headerText='Brand' width='120'></ColumnDirective>
                            <ColumnDirective field='City' headerText='City' width='130'></ColumnDirective>
                            <ColumnDirective field='State' headerText='State' width='120'></ColumnDirective>
                            <ColumnDirective field='Country' headerText='Country' width='160'></ColumnDirective>
                            <ColumnDirective field='Region' headerText='Region' width='120'></ColumnDirective>
                            <ColumnDirective field='Discount' headerText='Discount (%)' width='140' textAlign='Right' format='N0'></ColumnDirective>
                            <ColumnDirective field='Tax' headerText='Tax (%)' width='120' textAlign='Right' format='N2'></ColumnDirective>
                            <ColumnDirective field='ShippingCost' headerText='Shipping Cost' width='150' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Profit' headerText='Profit' width='160' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Target' headerText='Target' width='120' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Forecast' headerText='Forecast' width='150' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='SalesRep' headerText='Sales Reporter' width='150'></ColumnDirective>
                            <ColumnDirective field='Manager' headerText='Manager' width='150'></ColumnDirective>
                            <ColumnDirective field='Channel' headerText='Channel' width='130'></ColumnDirective>
                            <ColumnDirective field='Quarter' headerText='Quarter' width='120' textAlign='Center'></ColumnDirective>
                            <ColumnDirective field='Year' headerText='Year' width='150' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='ReturnQty' headerText='Return Quantity' width='160' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='ReturnAmount' headerText='Return Amount' width='160' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Remarks' headerText='Remarks' width='200'></ColumnDirective>
                        </ColumnsDirective>
                        <AggregatesDirective>
                            <AggregateDirective>
                                <AggregateColumnsDirective>
                                    <AggregateColumnDirective field='SalesQty' type='Sum' format='N0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='GrossAmount' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='NetAmount' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='ShippingCost' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='Profit' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='Forecast' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='ReturnQty' type='Sum' format='N0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                    <AggregateColumnDirective field='ReturnAmount' type='Sum' format='C0' footerTemplate='${Sum}'></AggregateColumnDirective>
                                </AggregateColumnsDirective>
                            </AggregateDirective>
                        </AggregatesDirective>
                        <Inject services={[InfiniteScroll, VirtualScroll, Sort, Filter, Aggregate]}/>
                    </GridComponent>
                </div>
                <div id="action-description">
                    <p>
                        This sample showcases the infinite scrolling capability of the Grid, designed to handle large datasets seamlessly. Click the “Load 100K Data” button to populate the Grid with data, then scroll vertically and horizontally to dynamically load rows and columns, ensuring smooth navigation.
                    </p>
                </div>
                <div id='description'>
                <p>
                    Infinite scrolling uses a lazy loading mechanism, where data is fetched automatically as the user scrolls to the end of the Grid. This behavior is enabled by setting the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/#enableinfinitescrolling">enableInfiniteScrolling</a></code> property to <code>true</code> and defining the Grid’s <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/#height">height</a></code> property.
                </p>
                    <p>
                        The Grid also supports column virtualization, which renders only the visible columns to improve performance when working with a large number of columns. Column virtualization can be enabled by setting the <code><a target="_blank" className="code" href="http://ej2.syncfusion.com/react/documentation/api/grid/#enablecolumnvirtualization">enableColumnVirtualization</a></code> property to <code>true</code>.
                        Additionally, column virtualization integrates seamlessly with aggregate operations, ensuring that calculations like
                        <code>Sum</code>, <code>Average</code>, etc., remain accurate and are displayed correctly during horizontal scrolling.
                    </p> 
                    <p>
                        <strong>Injecting Module:</strong>
                    </p>
                    <p>
                        Features of the Grid component are organized into individual, feature-specific modules. To use infinite scrolling and column virtualization with aggregates, inject the required modules <code>InfiniteScroll</code>, <code>VirtualScroll</code> and <code>Aggregate</code> into the <code>services</code>.
                    </p>
                    <p>
                More information on the infinite scrolling can be found in the
                <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/grid/scrolling/infinite-scrolling"> documentation section</a>.
            </p>
            <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our 
            <a target="_blank" href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
                </div>
            </div>);
    }
}
