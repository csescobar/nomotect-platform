import { TreeGrid } from '@syncfusion/ej2-treegrid';
export * from '@syncfusion/ej2-treegrid';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let StackedColumnsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-stacked-columns';
        }
    }
});
const StackedColumnsPlugin = {
    name: 'e-stacked-columns',
    install(Vue) {
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
    }
};
let StackedColumnDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stacked-column';
        }
    }
});
const StackedColumnPlugin = {
    name: 'e-stacked-column',
    install(Vue) {
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
    }
};

let ColumnsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-columns';
        }
    }
});
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
let ColumnDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-column';
        }
    }
});
const ColumnPlugin = {
    name: 'e-column',
    install(Vue) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
};

let AggregateColumnsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-columns';
        }
    }
});
const AggregateColumnsPlugin = {
    name: 'e-columns',
    install(Vue) {
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the VueJS TreeGrid.
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'/>
 *     <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'/>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
let AggregateColumnDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-column';
        }
    }
});
const AggregateColumnPlugin = {
    name: 'e-column',
    install(Vue) {
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
    }
};

let AggregatesDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-aggregates';
        }
    }
});
const AggregatesPlugin = {
    name: 'e-aggregates',
    install(Vue) {
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
    }
};
/**
 * `e-aggregate` directive represent a aggregate row of the VueJS TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```vue
 * <ejs-treegrid :dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'/>
 *     <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'/>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
let AggregateDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-aggregate';
        }
    }
});
const AggregatePlugin = {
    name: 'e-aggregate',
    install(Vue) {
        Vue.component(AggregatePlugin.name, AggregateDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'emptyRecordTemplate', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableColumnSpan', 'enableColumnVirtualization', 'enableHover', 'enableHtmlSanitizer', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRowSpan', 'enableRtl', 'enableStickyHeader', 'enableVirtualMaskRow', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'infiniteScrollSettings', 'isRowSelectable', 'loadChildOnDemand', 'loadingIndicator', 'locale', 'pageSettings', 'pagerTemplate', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
const modelProps = ['dataSource'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * `ejs-treegrid` represents the VueJS TreeGrid Component.
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
let TreeGridComponent = vueDefineComponent({
    name: 'TreeGridComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new TreeGrid({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-columns": { "e-column": { "e-stacked-columns": "e-stacked-column" } }, "e-aggregates": { "e-aggregate": { "e-columns": "e-column" } } },
            tagNameMapper: { "e-stacked-columns": "e-columns" },
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement) {
        let h = !isExecute ? gh : createElement;
        let slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = !isExecute ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames) {
            if (!templateNames) {
                templateNames = Object.keys(this.templateCollection || {});
            }
            if (templateNames.length && this.templateCollection) {
                for (let tempName of templateNames) {
                    let elementCollection = this.templateCollection[tempName];
                    if (elementCollection && elementCollection.length) {
                        for (let ele of elementCollection) {
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop, muteOnChange) {
            if (this.isVue3) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map((key) => {
                    this.models.map((model) => {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (this.isVue3) {
                                this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            }
                            else {
                                this.$emit('update:' + key, prop[key]);
                                this.$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom() {
            this.updated();
        },
        addRecord(data, index, position) {
            return this.ej2Instances.addRecord(data, index, position);
        },
        autoFitColumns(fieldNames) {
            return this.ej2Instances.autoFitColumns(fieldNames);
        },
        clearFiltering() {
            return this.ej2Instances.clearFiltering();
        },
        clearSelection() {
            return this.ej2Instances.clearSelection();
        },
        clearSorting() {
            return this.ej2Instances.clearSorting();
        },
        closeEdit() {
            return this.ej2Instances.closeEdit();
        },
        collapseAll() {
            return this.ej2Instances.collapseAll();
        },
        collapseAtLevel(level) {
            return this.ej2Instances.collapseAtLevel(level);
        },
        collapseByKey(key) {
            return this.ej2Instances.collapseByKey(key);
        },
        collapseRow(row, record, key) {
            return this.ej2Instances.collapseRow(row, record, key);
        },
        copy(withHeader) {
            return this.ej2Instances.copy(withHeader);
        },
        csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
            return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
        },
        deleteRecord(fieldName, data) {
            return this.ej2Instances.deleteRecord(fieldName, data);
        },
        deleteRow(tr) {
            return this.ej2Instances.deleteRow(tr);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        editCell(rowIndex, field) {
            return this.ej2Instances.editCell(rowIndex, field);
        },
        enableToolbarItems(items, isEnable) {
            return this.ej2Instances.enableToolbarItems(items, isEnable);
        },
        endEdit() {
            return this.ej2Instances.endEdit();
        },
        excelExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
            return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
        },
        expandAll() {
            return this.ej2Instances.expandAll();
        },
        expandAtLevel(level) {
            return this.ej2Instances.expandAtLevel(level);
        },
        expandByKey(key) {
            return this.ej2Instances.expandByKey(key);
        },
        expandRow(row, record, key, level) {
            return this.ej2Instances.expandRow(row, record, key, level);
        },
        extendRequiredModules(modules) {
            return this.ej2Instances.extendRequiredModules(modules);
        },
        filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
            return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
        },
        getBatchChanges() {
            return this.ej2Instances.getBatchChanges();
        },
        getCellFromIndex(rowIndex, columnIndex) {
            return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
        },
        getCheckedRecords() {
            return this.ej2Instances.getCheckedRecords();
        },
        getCheckedRowIndexes() {
            return this.ej2Instances.getCheckedRowIndexes();
        },
        getColumnByField(field) {
            return this.ej2Instances.getColumnByField(field);
        },
        getColumnByUid(uid) {
            return this.ej2Instances.getColumnByUid(uid);
        },
        getColumnFieldNames() {
            return this.ej2Instances.getColumnFieldNames();
        },
        getColumnHeaderByField(field) {
            return this.ej2Instances.getColumnHeaderByField(field);
        },
        getColumnHeaderByIndex(index) {
            return this.ej2Instances.getColumnHeaderByIndex(index);
        },
        getColumnHeaderByUid(uid) {
            return this.ej2Instances.getColumnHeaderByUid(uid);
        },
        getColumnIndexByField(field) {
            return this.ej2Instances.getColumnIndexByField(field);
        },
        getColumnIndexByUid(uid) {
            return this.ej2Instances.getColumnIndexByUid(uid);
        },
        getColumns(isRefresh) {
            return this.ej2Instances.getColumns(isRefresh);
        },
        getContent() {
            return this.ej2Instances.getContent();
        },
        getContentTable() {
            return this.ej2Instances.getContentTable();
        },
        getCurrentViewRecords() {
            return this.ej2Instances.getCurrentViewRecords();
        },
        getDataModule() {
            return this.ej2Instances.getDataModule();
        },
        getDataRows() {
            return this.ej2Instances.getDataRows();
        },
        getFooterContent() {
            return this.ej2Instances.getFooterContent();
        },
        getFooterContentTable() {
            return this.ej2Instances.getFooterContentTable();
        },
        getFrozenLeftColumnHeaderByIndex(index) {
            return this.ej2Instances.getFrozenLeftColumnHeaderByIndex(index);
        },
        getFrozenRightCellFromIndex(rowIndex, columnIndex) {
            return this.ej2Instances.getFrozenRightCellFromIndex(rowIndex, columnIndex);
        },
        getFrozenRightColumnHeaderByIndex(index) {
            return this.ej2Instances.getFrozenRightColumnHeaderByIndex(index);
        },
        getFrozenRightDataRows() {
            return this.ej2Instances.getFrozenRightDataRows();
        },
        getFrozenRightRowByIndex(index) {
            return this.ej2Instances.getFrozenRightRowByIndex(index);
        },
        getFrozenRightRows() {
            return this.ej2Instances.getFrozenRightRows();
        },
        getHeaderContent() {
            return this.ej2Instances.getHeaderContent();
        },
        getHeaderTable() {
            return this.ej2Instances.getHeaderTable();
        },
        getMovableCellFromIndex(rowIndex, columnIndex) {
            return this.ej2Instances.getMovableCellFromIndex(rowIndex, columnIndex);
        },
        getMovableColumnHeaderByIndex(index) {
            return this.ej2Instances.getMovableColumnHeaderByIndex(index);
        },
        getMovableDataRows() {
            return this.ej2Instances.getMovableDataRows();
        },
        getMovableRowByIndex(index) {
            return this.ej2Instances.getMovableRowByIndex(index);
        },
        getMovableRows() {
            return this.ej2Instances.getMovableRows();
        },
        getPageSizeByHeight(containerHeight) {
            return this.ej2Instances.getPageSizeByHeight(containerHeight);
        },
        getPager() {
            return this.ej2Instances.getPager();
        },
        getPrimaryKeyFieldNames() {
            return this.ej2Instances.getPrimaryKeyFieldNames();
        },
        getRowByIndex(index) {
            return this.ej2Instances.getRowByIndex(index);
        },
        getRowIndexByPrimaryKey(value) {
            return this.ej2Instances.getRowIndexByPrimaryKey(value);
        },
        getRowInfo(target) {
            return this.ej2Instances.getRowInfo(target);
        },
        getRows() {
            return this.ej2Instances.getRows();
        },
        getSelectedRecords() {
            return this.ej2Instances.getSelectedRecords();
        },
        getSelectedRowCellIndexes() {
            return this.ej2Instances.getSelectedRowCellIndexes();
        },
        getSelectedRowIndexes() {
            return this.ej2Instances.getSelectedRowIndexes();
        },
        getSelectedRows() {
            return this.ej2Instances.getSelectedRows();
        },
        getUidByColumnField(field) {
            return this.ej2Instances.getUidByColumnField(field);
        },
        getVisibleColumns() {
            return this.ej2Instances.getVisibleColumns();
        },
        getVisibleRecords() {
            return this.ej2Instances.getVisibleRecords();
        },
        goToPage(pageNo) {
            return this.ej2Instances.goToPage(pageNo);
        },
        hideColumns(keys, hideBy) {
            return this.ej2Instances.hideColumns(keys, hideBy);
        },
        hideSpinner() {
            return this.ej2Instances.hideSpinner();
        },
        indent(record) {
            return this.ej2Instances.indent(record);
        },
        openColumnChooser(x, y) {
            return this.ej2Instances.openColumnChooser(x, y);
        },
        outdent(record) {
            return this.ej2Instances.outdent(record);
        },
        paste(data, rowIndex, colIndex) {
            return this.ej2Instances.paste(data, rowIndex, colIndex);
        },
        pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
            return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
        },
        print() {
            return this.ej2Instances.print();
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        refreshColumns(refreshUI) {
            return this.ej2Instances.refreshColumns(refreshUI);
        },
        refreshHeader() {
            return this.ej2Instances.refreshHeader();
        },
        refreshLayout() {
            return this.ej2Instances.refreshLayout();
        },
        reorderColumns(fromFName, toFName) {
            return this.ej2Instances.reorderColumns(fromFName, toFName);
        },
        reorderRows(fromIndexes, toIndex, position) {
            return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
        },
        saveCell() {
            return this.ej2Instances.saveCell();
        },
        search(searchString) {
            return this.ej2Instances.search(searchString);
        },
        selectCell(cellIndex, isToggle) {
            return this.ej2Instances.selectCell(cellIndex, isToggle);
        },
        selectCheckboxes(indexes) {
            return this.ej2Instances.selectCheckboxes(indexes);
        },
        selectRow(index, isToggle) {
            return this.ej2Instances.selectRow(index, isToggle);
        },
        selectRows(rowIndexes) {
            return this.ej2Instances.selectRows(rowIndexes);
        },
        serverCsvExport(url) {
            return this.ej2Instances.serverCsvExport(url);
        },
        serverExcelExport(url) {
            return this.ej2Instances.serverExcelExport(url);
        },
        serverPdfExport(url) {
            return this.ej2Instances.serverPdfExport(url);
        },
        setCellValue(key, field, value) {
            return this.ej2Instances.setCellValue(key, field, value);
        },
        setRowData(key, rowData) {
            return this.ej2Instances.setRowData(key, rowData);
        },
        showColumns(keys, showBy) {
            return this.ej2Instances.showColumns(keys, showBy);
        },
        showSpinner() {
            return this.ej2Instances.showSpinner();
        },
        sortByColumn(columnName, direction, isMultiSort) {
            return this.ej2Instances.sortByColumn(columnName, direction, isMultiSort);
        },
        startEdit(row) {
            return this.ej2Instances.startEdit(row);
        },
        updateCell(rowIndex, field, value) {
            return this.ej2Instances.updateCell(rowIndex, field, value);
        },
        updateExternalMessage(message) {
            return this.ej2Instances.updateExternalMessage(message);
        },
        updateRow(index, data) {
            return this.ej2Instances.updateRow(index, data);
        },
    }
});
const TreeGridPlugin = {
    name: 'ejs-treegrid',
    install(Vue) {
        Vue.component(TreeGridPlugin.name, TreeGridComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(StackedColumnPlugin.name, StackedColumnDirective);
        Vue.component(StackedColumnsPlugin.name, StackedColumnsDirective);
        Vue.component(AggregatePlugin.name, AggregateDirective);
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};

export { AggregateColumnDirective, AggregateColumnPlugin, AggregateColumnsDirective, AggregateColumnsPlugin, AggregateDirective, AggregatePlugin, AggregatesDirective, AggregatesPlugin, ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, StackedColumnDirective, StackedColumnPlugin, StackedColumnsDirective, StackedColumnsPlugin, TreeGridComponent, TreeGridPlugin };
//# sourceMappingURL=ej2-vue-treegrid.es2015.js.map
