import * as React from 'react';
import { PivotViewComponent, Inject, Toolbar, PDFExport, ExcelExport, FieldList } from '@syncfusion/ej2-react-pivotview';
import { updateSampleSection } from '../common/sample-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import { Pivot_Data } from './data-source';
import './classic-layout.css';
import { Browser } from '@syncfusion/ej2-base';
/**
 * PivotView Classic layout Sample.
 */
let dataSourceSettings = {
    dataSource: Pivot_Data,
    enableSorting: true,
    columns: [{ name: 'Year' }, { name: 'Quarter' }],
    rows: [{ name: 'Product_Categories', caption: 'Product Categories' }, { name: 'Products' }, { name: 'Order_Source', caption: 'Order Source' }],
    formatSettings: [{ name: 'Amount', format: 'C0' }],
    drilledMembers: [{ name: 'Product_Categories', items: ['Accessories', 'Bikes'] }, { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] }],
    filterSettings: [{
            name: 'Products', type: 'Exclude', items: ['Cleaners', 'Fenders']
        }],
    expandAll: false,
    values: [{ name: 'Sold', caption: 'Units Sold' },
        { name: 'Amount', caption: 'Sold Amount' }],
    filters: []
};
function ClassicLayout() {
    React.useEffect(() => {
        updateSampleSection();
    }, []);
    let pivotObj;
    let repeatLabelSwitch;
    let toolbarOptions = ['Export', 'FieldList'];
    function onChange() {
        if (pivotObj.gridSettings.layout === 'Compact') {
            pivotObj.gridSettings.layout = 'Tabular';
            repeatLabelSwitch.disabled = false;
        }
        else {
            pivotObj.gridSettings.layout = 'Compact';
            repeatLabelSwitch.disabled = true;
        }
    }
    function onRepeatLabelChange() {
        if (pivotObj.gridSettings.repeatItemLabels) {
            pivotObj.setProperties({ gridSettings: { repeatItemLabels: false } });
            pivotObj.refreshData();
        }
        else {
            pivotObj.setProperties({ gridSettings: { repeatItemLabels: true } });
            pivotObj.refreshData();
        }
    }
    return (<div className='control-pane'>
            <div className='control-section' style={{ overflow: 'initial' }}>
                <div className="switch-container">
                    <div className="tabular-layout-switch">
                        <label id="layout-label" className="pivot-switch-label" htmlFor="layout-switch">Classic Layout</label>
                        <SwitchComponent id="layout-switch" checked={true} cssClass="pivot-layout-switch" change={onChange.bind(this)}></SwitchComponent>
                    </div>
                    <div className="repeat-label-switch">
                        <label id="repeat-label" className="pivot-switch-label" htmlFor="repeatlabel-switch">Repeating Labels</label>
                        <SwitchComponent id="repeatlabel-switch" ref={(scope) => { repeatLabelSwitch = scope; }} cssClass="pivot-repeatlabel-switch" change={onRepeatLabelChange.bind(this)}></SwitchComponent>
                    </div>
                </div>
                <div>
                    <PivotViewComponent id='PivotView' ref={(scope) => { pivotObj = scope; }} dataSourceSettings={dataSourceSettings} showFieldList={true} width={'100%'} height={'450'} allowExcelExport={true} allowPdfExport={true} showToolbar={true} toolbar={toolbarOptions} gridSettings={{ columnWidth: Browser.isDevice ? 100 : 120, layout: 'Tabular' }}>
                        <Inject services={[FieldList, Toolbar, PDFExport, ExcelExport,]}/>
                    </PivotViewComponent>
                </div>
            </div>
            <div id="action-description">
                <p>This sample showcases the classic layout option of the Pivot Table, also known as the Excel-like tabular format.
                    In this layout, each field from the row and column axes is arranged sequentially, displayed side by side in
                    separate rows or columns. Subtotals and grand totals are prominently shown, making it easy to compare and
                    analyze data effectively. Additionally, the repeating labels functionality allows you to control whether field
                    labels are repeated across rows for better readability—both in the displayed pivot table and in exported documents (Excel/PDF).</p>
            </div>
            <div id="description">
                <p>The Pivot Table's classic layout displays each field in the row axis side by side in separate columns. By default, grand totals are displayed at the end of all rows, while subtotals are placed in a separate row beneath
                    each group. All other features of the pivot table, such as filtering, sorting, drag-and-drop, expand/collapse functionality, and more, remain the same as in the Compact (Excel-like) layout, which serves as the default layout for the Syncfusion<sup>®</sup> Pivot Table.
                </p>
                <p>The <b>Classic Layout</b> can be enabled by setting the <code>layout</code> property to <b>Tabular</b> within the
                    <code>gridSettings</code>. Using the <b>Classic Layout</b> toggle switch, the pivot table layout can be dynamically
                    switched between Compact and Classic layouts at runtime. In addition, the <b>Repeating Labels</b> toggle switch
                    controls the <code>repeatItemLabels</code> property within the <code>gridSettings</code>. This option is exclusive
                    to the <b>Classic Layout</b> and should be enabled only when it is active. When set to true, row field labels are
                    repeated across all rows, improving readability and analysis in reports with multi‑level hierarchies. The same
                    behavior is preserved when exporting the pivot table to Excel or PDF formats, ensuring consistency between the
                    displayed and exported data.</p>
                <p><b>Note:</b> For pivot table reports containing multi-level hierarchies with extensive sublevels, the default
                    layout (i.e., compact view) is recommended, as it effectively displays data in a simple and compact manner.
                </p><br />
                <p>
                    More information on the React Pivot Table can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/pivotview/getting-started#adding-pivot-table-component">
                        documentation section</a>.
                </p>
            </div>
        </div>);
}
export default ClassicLayout;
