import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, ColumnChooser, Inject, Sort, Filter, Edit } from '@syncfusion/ej2-react-grids';
import { orderedData } from './data';
import { updateSampleSection } from '../common/sample-base';
import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
function ColChooser() {
    React.useEffect(() => {
        updateSampleSection();
    }, []);
    const SAMPLE_CSS = `
    #immediateContainer {
      padding-bottom: 10px;
      padding-left: 10px;
      display: flex;
      justify-content: flex-end;
    }`;
    let gridInstance;
    const filterSettings = { type: 'CheckBox' };
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const customeridRule = { required: true, minLength: 5 };
    const orderidRules = { required: true, number: true };
    const freightRules = { required: true, min: 0 };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'];
    const columnChooserSettings = { mode: 'Immediate' };
    function checkboxOnChange(args) {
        if (args.checked) {
            gridInstance.columnChooserSettings = { mode: 'Immediate' };
        }
        else {
            gridInstance.columnChooserSettings = { mode: 'Default' };
        }
    }
    return (<div className='control-pane'>
            <div className='control-section'>
                <style>
                    {SAMPLE_CSS}
                </style>
                <div id="immediateContainer">
                    <CheckBoxComponent label='Immediate Column Chooser Mode' labelPosition='After' checked={true} change={checkboxOnChange.bind(this)}></CheckBoxComponent>
                </div>
                <GridComponent dataSource={orderedData} toolbar={toolbarOptions} allowPaging={true} showColumnChooser={true} allowSorting={true} pageSettings={{ pageCount: 5 }} editSettings={editSettings} allowFiltering={true} filterSettings={filterSettings} ref={grid => gridInstance = grid} columnChooserSettings={columnChooserSettings} clipMode='EllipsisWithTooltip'>
                    <ColumnsDirective>
                        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' showInColumnChooser={false} validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='CustomerName' headerText='Customer Name' width='150' showInColumnChooser={false} validationRules={customeridRule}></ColumnDirective>
                        <ColumnDirective field='OrderDate' headerText='Order Date' width='130' format='yMd' textAlign='Right' editType='datepickeredit' validationRules={{ required: true }}/>
                        <ColumnDirective field='ShippedDate' headerText='Shipped Date' width='130' format='yMd' textAlign='Right' editType='datepickeredit' validationRules={{ required: true }}/>
                        <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' validationRules={freightRules} editType='numericedit'/>
                        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Toolbar, Page, ColumnChooser, Sort, Edit, Filter]}/>
                </GridComponent>
            </div>
            <div id="action-description">
                <p>
                    This sample demonstrates how users can dynamically show or hide columns using the Column Chooser feature. It highlights flexible column visibility management through an interactive Grid interface.
                </p>
            </div>
            <div id="description">
                <p>The Column Chooser feature enables users to dynamically control the visibility of columns in the Grid. To enable this functionality, set the
                    <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid#showcolumnchooser">showColumnChooser</a></code> property to <code>true</code> and include the “ColumnChooser” item in the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar">toolbar</a></code>. To prevent specific columns from appearing in the Column Chooser, set the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/column/#showincolumnchooser">columns.showInColumnChooser</a></code> property to <code>false</code>.
                </p>
                <p>
                    Column visibility is managed by selecting or deselecting checkboxes in the Column Chooser dialog:
                </p>
                <ul>
                    <li>By default, changes are applied to the Grid only after clicking the “OK” button.</li>
                    <li>To apply changes instantly, set the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/filterSettings/#type">columnChooserSettings.mode</a></code> property to <code>Immediate</code>.</li>
                </ul>
                <p>In this demo, the column chooser mode can be switched using the "Immediate Column Chooser Mode" checkbox. When the column chooser button in the toolbar is clicked, it opens the dialog according to the selected mode, allowing users to show or hide columns by selecting or clearing the corresponding checkboxes.</p>
                <p>
                    <strong>Injecting Module:</strong>
                </p>
                <p>
                    Grid component features are segregated into individual feature-wise modules. To use column chooser feature and toolbar functionality, inject the required modules <code>ColumnChooser</code> and <code>Toolbar</code> into the <code>services</code>.
                </p>
                <p>More information on column chooser configuration can be found in the <a aria-label="API link for documentation" target="_blank" href="https://ej2.syncfusion.com/react/documentation/grid/columns/column-chooser"> documentation.</a></p>
            <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our 
            <a target="_blank" href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
            </div>
        </div>);
}
export default ColChooser;
