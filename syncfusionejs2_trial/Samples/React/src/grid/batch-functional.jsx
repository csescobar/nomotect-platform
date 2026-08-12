import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Toolbar, Page, Inject, Sort, Filter, AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective, Aggregate, } from '@syncfusion/ej2-react-grids';
import { inventoryStoreData } from './data';
import './batch.css';
import { updateSampleSection } from '../common/sample-base';
function BatchEdit() {
    React.useEffect(() => {
        updateSampleSection();
    }, []);
    let gridRef;
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
    const filterSettings = { type: 'CheckBox' };
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true };
    const pageSettings = { pageCount: 5 };
    const selectionSettings = { mode: 'Cell', type: 'Multiple' };
    const getCategoryFromProduct = (productName) => {
        const item = inventoryStoreData.find((data) => data.Product === productName);
        return item ? item.Category : '';
    };
    const beforeBatchSave = (args) => {
        const changes = gridRef.getBatchChanges();
        changes.addedRecords.forEach((row) => {
            row.Category = getCategoryFromProduct(row.Product);
        });
    };
    const cellEdit = (args) => {
        if (args.type === 'edit' && args.columnName === 'Product') {
            args.cancel = true;
        }
    };
    const categoryTemplate = (props) => {
        const category = (props.Category || getCategoryFromProduct(props.Product) || '').toString();
        let cls = 'e-cat-default';
        if (category === 'IT Asset')
            cls = 'e-cat-it-asset';
        else if (category === 'IT Infrastructure')
            cls = 'e-cat-it-infrastructure';
        else if (category === 'Admin')
            cls = 'e-cat-admin';
        else if (category === 'Security')
            cls = 'e-cat-security';
        else if (category === 'Facilities')
            cls = 'e-cat-facilities';
        else if (category === 'Finance')
            cls = 'e-cat-finance';
        else if (category === 'Sales')
            cls = 'e-cat-Sales';
        else if (category === 'Marketing')
            cls = 'e-cat-marketing';
        else if (category === 'Training')
            cls = 'e-cat-training';
        return (<div>
        <div style={{ fontWeight: 600 }}>{props.Product}</div>
        <span className={`e-category-badge ${cls}`} style={{ marginTop: '6px' }}>
          {category}
        </span>
      </div>);
    };
    return (<div className='control-pane'>
      <div className='control-section'>
          <GridComponent id="BatchEdit" dataSource={inventoryStoreData} pageSettings={pageSettings} allowSorting={true} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} allowFiltering={true} filterSettings={filterSettings} selectionSettings={selectionSettings} height={400} clipMode='EllipsisWithTooltip' ref={grid => gridRef = grid} cellEdit={cellEdit} beforeBatchSave={beforeBatchSave}>
          <ColumnsDirective>
            <ColumnDirective field='ID' headerText='ID' width='150' textAlign='Right' isPrimaryKey={true} validationRules={{ required: true }}></ColumnDirective>
            <ColumnDirective field='Product' headerText='Product Name' width='160' template={categoryTemplate} editType='dropdownedit' defaultValue='MacBook Pro'></ColumnDirective>
            <ColumnDirective field='VendorA' headerText='Vendor A (units)' textAlign='Right' width='160' editType='numericedit' edit={{ params: { showSpinButton: false } }}></ColumnDirective>
            <ColumnDirective field='VendorB' headerText='Vendor B (units)' textAlign='Right' width='160' editType='numericedit' edit={{ params: { showSpinButton: false } }}></ColumnDirective>
            <ColumnDirective field='VendorC' headerText='Vendor C (units)' textAlign='Right' width='160' editType='numericedit' edit={{ params: { showSpinButton: false } }}></ColumnDirective>
            <ColumnDirective field='VendorD' headerText='Vendor D (units)' textAlign='Right' width='160' editType='numericedit' edit={{ params: { showSpinButton: false } }}></ColumnDirective>
            <ColumnDirective field='UnitPrice' headerText='Price (per unit)' format='C2' width='160' textAlign='Right' editType='numericedit' edit={{ params: { showSpinButton: false } }} validationRules={{ required: true, min: 1 }}></ColumnDirective>
          </ColumnsDirective>
            <AggregatesDirective>
              <AggregateDirective>
                <AggregateColumnsDirective>
                  <AggregateColumnDirective field='VendorA' type='Sum' format='N' footerTemplate='Total: ${Sum}'/>
                  <AggregateColumnDirective field='VendorB' type='Sum' format='N' footerTemplate='Total: ${Sum}'/>
                  <AggregateColumnDirective field='VendorC' type='Sum' format='N' footerTemplate='Total: ${Sum}'/>
                  <AggregateColumnDirective field='VendorD' type='Sum' format='N' footerTemplate='Total: ${Sum}'/>
                </AggregateColumnsDirective>
              </AggregateDirective>
            </AggregatesDirective>
            <Inject services={[Page, Toolbar, Edit, Sort, Filter, Aggregate]}/>
          </GridComponent>
        <div id="action-description">
          <p>
            This sample demonstrates the batch editing capabilities of the Grid, allowing users to perform multiple CRUD operations and save them to the data source in a single action. It showcases efficient data editing with bulk update and undo/redo support.
          </p>
        </div>
        <div id="description">
          <p>
            The Grid supports multiple editing modes such as <code>Normal</code>, <code>Dialog</code>, <code>Batch</code>, and <code>Cell</code>, which can be configured using the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/">editSettings</a></code> property. Batch mode is enabled by setting <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode">editSettings.mode</a></code> to <code>Batch</code>. The Grid also supports undo and redo functionality in this mode, enabling users to reverse or reapply changes during an editing session. This feature is enabled by setting <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#enableundoredo">editSettings.enableUndoRedo</a></code> to <code>true</code> and include the <code>Undo</code> and <code>Redo</code> items in the <code><a target="_blank" className="code" href="https://ej2.syncfusion.com/react/documentation/api/grid/index-default#toolbar">toolbar</a></code>.
          </p>
          <p>
            With Batch editing, bulk data changes can be made efficiently. Editing begins by double‑clicking a cell and modifying its value. The edited
            cell is highlighted when moving to another cell, making changes easy to track. All modifications remain local until they are explicitly saved.
            The modified records are saved to the data source by clicking the toolbar’s “Update” button, which performs a bulk save operation.
          </p>
          <p>
            <strong>Injecting Module:</strong>
          </p>
          <p>
            Features of the Grid component are organized into individual, feature-specific modules. To use the editing and toolbar functionality, inject the required modules 
            <code>Edit</code> and <code>Toolbar</code> into the <code>services</code>.
          </p>
          <p>
            More information on the batch editing can be found in this
            <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/grid/editing/batch-editing"> documentation section</a>.
          </p>
          <p>Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our 
            <a target="_blank" href="https://www.syncfusion.com/react-components/react-data-grid"> React Data Grid component</a> page.</p>
        </div>
      </div>
    </div>);
}
export default BatchEdit;
