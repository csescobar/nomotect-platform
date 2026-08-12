import { loadCultureFiles } from '../common/culture-loader';
import { TreeGrid, Page, Filter, Toolbar, Sort, Edit, ContextMenu, Resize } from '@syncfusion/ej2-treegrid';
import { fileManagerData } from './data-source';

TreeGrid.Inject(Page, Filter, Toolbar, Sort, Edit, ContextMenu, Resize);

(window as any).default = (): void => {
    loadCultureFiles();
    let treeGrid: TreeGrid = new TreeGrid({
        dataSource: fileManagerData,
        childMapping: 'Children',
        treeColumnIndex: 2,
        height: 400,
        allowSelection: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: {
            type: 'Menu',
            hierarchyMode: 'Both',
        },
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', allowEditOnDblClick: false, newRowPosition: 'Below' },
        pageSettings: { pageSize: 10 },
        enableHover: true,
        toolbar: ['Search'],
        contextMenuItems: [
            { text: 'Rename', target: '.e-content', id: 'Edit_record' },
        ],
        contextMenuClick: (args: any) => {
            if (args.element.innerHTML == 'Rename') {
                const rowIndex = treeGrid
                    .getRows()
                    .indexOf(args.rowInfo.row as HTMLTableRowElement);
                treeGrid.editCell(rowIndex, 'name');
            }
        },
        columns: [
            { type: 'checkbox', width: 50 },
            { field: 'id', headerText: 'ID', visible: false, isPrimaryKey: true },
            {
                field: 'name',
                headerText: 'Name',
                width: 200,
                template: (data: any) => {
                    const isFolder = data.type.toLowerCase().includes('folder');
                    const iconClass = isFolder ? 'e-folder' : 'e-file-document';
                    return `<span class="e-icons ${iconClass}" style="margin-right: 8px;"></span>${data.name}`;
                }
            },
            {
                field: 'size',
                headerText: 'Size (KB)',
                textAlign: 'Right',
                width: 120,
                valueAccessor: (field: string, data: any) => {
                    return data.size ? (data.size / 1024).toFixed(2) + ' KB' : '';
                },
                allowEditing: false
            },
            { field: 'created', headerText: 'Created On', type: 'date', format: 'yMd', width: 120, textAlign: 'Right', allowEditing: false },
            { field: 'modified', headerText: 'Last Modified', type: 'date', format: 'yMd', width: 120, textAlign: 'Right', allowEditing: false },
        ],
    });

    treeGrid.appendTo('#FileTreeGrid');
};