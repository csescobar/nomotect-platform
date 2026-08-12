import { loadCultureFiles } from '../common/culture-loader';
import { Grid, Toolbar, Edit, Sort, Filter, VirtualScroll, Reorder, Group, Freeze } from '@syncfusion/ej2-grids';
import { customerTicketData } from './data-source';

Grid.Inject(VirtualScroll, Toolbar, Edit, Sort, Filter, Reorder, Group, Freeze);
/**
 * Freeze row sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let grid: Grid = new Grid(
    {
        dataSource: customerTicketData,
        allowFiltering: true,
        filterSettings: { type: 'Excel' },
        enableVirtualization: true,
        allowSorting: true,
        allowGrouping: true,
        allowReordering: true,
        editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true },
        toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
        isRowFreeze: function (data: any) {
            if (data && (data.Rating === "Very Dissatisfied" || data.Rating === 'Dissatisfied')) {
                return true;
            }
            return false;
        },
        height: 400,
        columns: [
            { type: 'checkbox', width: 50 },
            {
                field: 'Ticket_id',
                headerText: 'Ticket ID',
                width: 180,
                isPrimaryKey: true,
                validationRules: { required: true },
                freeze: 'Left'
            },
            {
                field: 'Title',
                headerText: 'Title',
                width: 150,
                validationRules: { required: true, minLength: 5 },
            },
            {
                field: 'Category',
                headerText: 'Category',
                width: 130,
            },

            {
                field: 'Type_of_request',
                headerText: 'Type of Request',
                width: 160,
                template: (data: any) => {
                    return `<div>${data.Type_of_request}</div>`;
                }
            },

            {
                field: 'Description',
                headerText: 'Description',
                width: 140,
                clipMode: 'EllipsisWithTooltip'
            },
            {
                field: 'Created_date',
                headerText: 'Created Date',
                width: 140,
                format: 'yMd',
                textAlign: "Right",
                editType: 'datepickeredit',
            },
            {
                field: 'Assignee',
                headerText: 'Assignee',
                width: 140,
                editType: 'dropdownedit',
            },
            {
                field: 'Priority',
                headerText: 'Priority',
                width: 140,
                editType: 'dropdownedit',
            },
            {
                field: 'Rating',
                headerText: 'Rating',
                width: 140,
                editType: 'dropdownedit',
                freeze: 'Right'
            },
            {
                field: 'Status',
                headerText: 'Status',
                width: 140,
                editType: 'dropdownedit',
            },
        ],
    })
    grid.appendTo('#FreezeGrid');
};