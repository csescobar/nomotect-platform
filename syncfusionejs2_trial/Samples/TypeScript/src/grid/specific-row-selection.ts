import { loadCultureFiles } from '../common/culture-loader';
import { Grid, Page, Toolbar, Edit, Sort, Filter, VirtualScroll } from '@syncfusion/ej2-grids';
import { ordersTrackData } from './data-source';

Grid.Inject(VirtualScroll, Toolbar, Edit, Sort, Filter);
/**
 * Checkbox Selection API sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let grid: Grid = new Grid(
        {
            dataSource: ordersTrackData,
            enableVirtualization: true,
            allowSorting: true,
            allowFiltering: true,
            toolbar: ['Edit', 'Update', 'Cancel'],
            filterSettings: { type: 'Excel' },
            editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false },
            selectionSettings: { persistSelection: true },
            columns: [
                { type: 'checkbox', width: 60 },
                {
                    field: 'OrderID', width: 120, headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right',
                    validationRules: { required: true }
                },
                {
                    field: 'CustomerName',
                    width: 150, headerText: 'Customer Name', validationRules: { required: true }
                },
                {
                    field: 'Product', width: 150, editType: 'dropdownedit',
                },
                { field: 'Amount', width: 170, format: 'C2', editType: 'numericedit' },
                { field: 'OrderDate', headerText: 'Order Date', editType: 'datepickeredit', width: 150, format: 'yMd' },
                { field: 'Status', editType: 'dropdownedit', width: 150 }
            ],
            isRowSelectable: function (data: any, columns: any) {
                return data.Status !== 'Cancelled';
            },
            height: 300,
        });
    grid.appendTo('#Grid');
};