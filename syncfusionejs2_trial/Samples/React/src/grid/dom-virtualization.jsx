import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Filter, Inject, VirtualScroll, DomVirtualization, Sort, } from '@syncfusion/ej2-react-grids';
import { SampleBase } from '../common/sample-base';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import './dom-virtualization.css';
function statusTemplate(props) {
    return (<div>
            {props.Status === "Active" ?
            <div className="statustemp e-activecolor">
                    <span className="statustxt e-activecolor">{props.Status}</span>
                </div>
            :
                <div className="statustemp e-inactivecolor">
                    <span className="statustxt e-inactivecolor">{props.Status}</span>
                </div>}
        </div>);
}
function empTemplate(props) {
    return (<div>
            <div className="empimg">
                <span className={`e-userimg ${props.EmployeeImg === 'usermale' ? 'sf-icon-Male' : 'sf-icon-FeMale'}`}/>
            </div>
            <span id="Emptext">{props.Employees}</span>
        </div>);
}
export class DOMVirtualGrid extends SampleBase {
    gridInstance;
    isDataChanged = true;
    stTime;
    hostUrl = 'https://services.syncfusion.com/react/production/';
    data = new DataManager({
        url: this.hostUrl + 'api/UrlDataSource',
        adaptor: new UrlAdaptor()
    });
    query = new Query().addParams('dataCount', '100000');
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <GridComponent id="DOMVirtualGrid" dataSource={this.data} query={this.query} height="400" rowHeight={40} enableVirtualization={true} enableDomVirtualization={true} domVirtualizationSettings={{ rowBuffer: 10 }} allowFiltering={true} allowSorting={true} allowSelection={true} clipMode='EllipsisWithTooltip' filterSettings={{ type: 'CheckBox' }} ref={(g) => this.gridInstance = g}>
                        <ColumnsDirective>
                            <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' isPrimaryKey={true} textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Employees' headerText='Employee Name' width='260' template={empTemplate}></ColumnDirective>
                            <ColumnDirective field='Designation' headerText='Designation' width='170'></ColumnDirective>
                            <ColumnDirective field='Status' headerText='Status' width='150' template={statusTemplate}></ColumnDirective>
                            <ColumnDirective field='CurrentSalary' headerText='Current Salary' width='160' format='C2' textAlign='Right'></ColumnDirective>
                            <ColumnDirective field='Location' headerText='Location' width='160'></ColumnDirective>
                            <ColumnDirective field='Address' headerText='Address' width='240'></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[Filter, VirtualScroll, DomVirtualization, Sort]}/>

                    </GridComponent>
                </div>
                <div id="action-description">
                    <p>This demo showcases the DOM Virtualization feature in the Grid, enabling efficient handling of large datasets. Instead of rendering all records at once, the Grid intelligently displays only the rows visible within the viewport, ensuring smooth scrolling and responsive performance.</p>
                </div>
                <div id='description'>
                    <p>
                        DOM virtualization is a performance optimization feature that renders only the visible rows within the Grid viewport instead of rendering the entire dataset. This significantly improves performance when working with large volumes of data.
                    </p>
                    <p>
                        With this feature enabled, the Grid calculates the content height and renders only the necessary <code>tr</code> elements required for the visible portion of the Grid. As the user scrolls, previously rendered rows are replaced with newly required rows, ensuring that only a minimal number of DOM elements are maintained at any time. This behavior improves both rendering speed and memory usage, making the Grid highly efficient for large datasets.
                    </p>
                    <p>
                        DOM virtualization can be enabled by setting the <code>enableDomVirtualization</code> property to <code>true</code>. In this demo, the Grid is loaded with "100k" records using both DOM virtualization and row virtualization features. Row virtualization is enabled using the <code>enableVirtualization</code> property.
                    </p>
                    <p>
                        <strong>Injecting Module:</strong>
                    </p>
                    <p>
                        Features of the Grid component are organized into individual, feature-specific modules. To use DOM virtualization, inject the required modules <code>DomVirtualization</code> into the <code>services</code>.
                    </p>
                    <p>
                        More information on DOM virtualization can be found in this
                        <a target="_blank" aria-label="API link for documentation" href="https://ej2.syncfusion.com/react/documentation/grid/getting-started"> documentation section</a>.
                    </p>
                    <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our
                        <a target="_blank" href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
                </div>
            </div>);
    }
}
