import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter, Inject, FilterType } from '@syncfusion/ej2-react-grids';
import { SampleBase } from '../common/sample-base';
import { CheckBoxComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import { Query, DataManager, UrlAdaptor } from '@syncfusion/ej2-data';

const SAMPLE_CSS = `
span.e-input-group.e-ddl[aria-controls="ddlelement_popups"],
span.e-input-group.e-ddl[aria-controls="ddlelement"] {
    margin-right: 15px;
}`;
export class FilterMenu extends SampleBase<{}, {}> {

    private gridInstance: GridComponent;
    private checkBoxInstance: CheckBoxComponent;
    private immediateCheckBoxInstance: CheckBoxComponent;
    public hostUrl: string = 'https://services.syncfusion.com/react/production/';
    public data: DataManager = new DataManager({ url: this.hostUrl + 'api/UrlDataSource', adaptor: new UrlAdaptor  });
    public query: Query = new Query().addParams('dataCount', '10000');
    private filterType: { [key: string]: Object }[] = [
        { text: 'Menu', value: 'Menu' },
        { text: 'Checkbox', value: 'CheckBox' },
        { text: 'Excel', value: 'Excel' },
    ];
    public filterSettings: any = { type: 'Menu' }
    private fields: Object = { text: 'text', value: 'value' };
    public onChange(sel: { itemData: { text: string, value: string } }): void {
        this.checkBoxInstance.checked = false;
        this.immediateCheckBoxInstance.checked = false;
        this.gridInstance.filterSettings.enableInfiniteScrolling = false;
        this.gridInstance.filterSettings.mode = 'Default';
        this.gridInstance.filterSettings.type = sel.itemData.value as FilterType;
        this.gridInstance.clearFiltering();
        if (this.gridInstance.filterSettings.type === 'Excel' || this.gridInstance.filterSettings.type === 'CheckBox') {
            this.checkBoxInstance.disabled = false;
            this.immediateCheckBoxInstance.disabled = false;
        } else {
            this.checkBoxInstance.disabled = true;
            this.immediateCheckBoxInstance.disabled = true;
        }
    }
    public checkboxOnChange(args: ChangeEventArgs): void {
        this.gridInstance.filterSettings.enableInfiniteScrolling = args.checked; 
    }
    public immediateCheckboxOnChange(args: ChangeEventArgs): void {
        this.gridInstance.filterSettings.mode = args.checked ? 'Immediate' : 'Default';
    }
    render() {
        return (
            <div className='control-pane'>
                <div className='control-section row'>
                    <style>
                        {SAMPLE_CSS}
                    </style>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '14px', display: 'inline-block' }}>
                            <DropDownListComponent id="ddlelement" dataSource={this.filterType} fields={this.fields} change={this.onChange.bind(this)} index={0} popupHeight="150px" width="200px" />
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                            <CheckBoxComponent ref={checkBox => this.checkBoxInstance = checkBox} disabled={true} label='Enable OnDemand ' labelPosition='Before' change={this.checkboxOnChange.bind(this)}></CheckBoxComponent>            
                            <CheckBoxComponent ref={checkBox => this.immediateCheckBoxInstance = checkBox} disabled={true} label='Enable Immediate Filter ' labelPosition='Before' change={this.immediateCheckboxOnChange.bind(this)}></CheckBoxComponent> 
                        </div>
                        </div>
                    </div>
                    <GridComponent dataSource={this.data} query={this.query} allowSorting={true} allowPaging={true} ref={grid => this.gridInstance = grid} pageSettings={{ pageSize: 10, pageCount: 5 }} allowFiltering={true} filterSettings={this.filterSettings} clipMode='EllipsisWithTooltip'>
                        <ColumnsDirective>
                        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='120' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='Employees' headerText='Employee Name' width='150'></ColumnDirective>
                        <ColumnDirective field='Designation' headerText='Designation' width='130' textAlign='Right' />
                        <ColumnDirective field='CurrentSalary' headerText='CurrentSalary' width='120' format='C2' textAlign='Right' editType='numericedit'/>
                        </ColumnsDirective>
                        <Inject services={[Filter, Page, Sort]} />
                    </GridComponent>
                </div>
                <div id="action-description">
                    <p>
                    This sample demonstrates the filtering capabilities of the Grid using multiple filter types. It shows how users can interact with different filtering options to refine and view data efficiently.
                    </p>
                </div>

                <div id='description'>
                    The filtering feature allows users to display only the matching records based on filter criteria. To enable filtering, set the <code><a target="_blank" className="code"
                        href="https://ej2.syncfusion.com/react/documentation/api/grid#allowfiltering">allowFiltering</a></code> property to <code>true</code>.
                    The Grid supports the following filter types:
                    <ul>
                        <li><code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/grid/filtering/filter-menu">Menu</a></code></li>
                        <li><code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/grid/filtering/excel-like-filter">CheckBox</a></code></li>
                        <li><code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/grid/filtering/excel-like-filter">Excel</a></code></li>
                    </ul>
                    <p>
                        These can be configured using the <code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#type">filterSettings.type</a></code> property. In this sample, the Menu filter is enabled by default, and you can switch to "CheckBox" or "Excel" filters using the dropdown.
                        When using "CheckBox" or "Excel" filters, the Grid provides two enhancements:
                    </p>
                    <ul>
                        <li><strong>On-demand loading (Performance)</strong> loads data only when needed, improving speed and efficiency with large datasets. This can be enabled by setting <code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/api/grid/filtersettings#enableinfinitescrolling">filterSettings.enableInfiniteScrolling</a></code> property to <code>true</code>.</li>
                        <li><strong>Immediate filtering (UI Experience)</strong> applies filters instantly as soon as you check or uncheck items, giving smoother interaction. This can be enabled by setting <code><a target="_blank" className="code"
                            href="https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#mode">filterSettings.mode</a></code> property to <code>Immediate</code>.</li>
                    </ul>
                    <p>
                        <strong>Injecting Module:</strong>
                    </p>
                    <p>
                        Features of the Grid component are organized into individual, feature-specific modules. To use filtering functionality, inject the required modules <code>Filter</code> into the <code>services</code>.
                    </p>
                    <p>
                        More information on the filter configuration can be found in the
                        <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/grid/#filtersettings"> documentation section</a>.
                    </p>
                    <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our
                        <a target="_blank"
                            href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
                </div>
            </div>
        )
    }
}
