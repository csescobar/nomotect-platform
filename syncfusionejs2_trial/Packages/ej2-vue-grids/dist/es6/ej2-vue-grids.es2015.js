import { Grid, Pager } from '@syncfusion/ej2-grids';
export * from '@syncfusion/ej2-grids';
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
 * `e-column` directive represent a column of the VueJS Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-grid>
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
 * `e-aggregate->e-column` directive represent a aggregate column of the VueJS Grid.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-grid>
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
 * `e-aggregate` directive represent a aggregate row of the VueJS Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```vue
 * <ejs-grid :dataSource]='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-grid>
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

const properties = ['isLazyUpdate', 'plugins', 'adaptiveUIMode', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowKeyboard', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoFit', 'childGrid', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'cssClass', 'currencyCode', 'currentAction', 'currentViewData', 'dataSource', 'detailTemplate', 'detailTemplateHeight', 'domVirtualizationSettings', 'editSettings', 'ej2StatePersistenceVersion', 'emptyRecordTemplate', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableColumnSpan', 'enableColumnVirtualization', 'enableDomVirtualization', 'enableHeaderFocus', 'enableHover', 'enableHtmlSanitizer', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRowSpan', 'enableRtl', 'enableStickyHeader', 'enableVirtualMaskRow', 'enableVirtualization', 'exportGrids', 'filterSettings', 'footerRowHeight', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'isRowPinned', 'isRowSelectable', 'loadingIndicator', 'locale', 'pageSettings', 'pagerTemplate', 'parentDetails', 'printMode', 'query', 'queryString', 'resizeSettings', 'rowDropSettings', 'rowHeight', 'rowRenderingMode', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'setRowHeight', 'showColumnChooser', 'showColumnMenu', 'showHider', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeCustomFilterOpen', 'beforeDataBound', 'beforeDetailTemplateDetach', 'beforeExcelExport', 'beforeOpenAdaptiveDialog', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellFocus', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDataStateChange', 'columnDeselected', 'columnDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuClose', 'columnMenuOpen', 'columnSelected', 'columnSelecting', 'commandClick', 'contextMenuClick', 'contextMenuClose', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailCollapse', 'detailCollapsed', 'detailDataBound', 'detailExpand', 'detailExpanded', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportDetailTemplate', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'lazyLoadGroupCollapse', 'lazyLoadGroupExpand', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
const modelProps = ['dataSource'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
let GridComponent = vueDefineComponent({
    name: 'GridComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Grid({}),
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
        addRecord(data, index) {
            return this.ej2Instances.addRecord(data, index);
        },
        addRecordAsync(data, index) {
            return this.ej2Instances.addRecordAsync(data, index);
        },
        addShimmerEffect() {
            return this.ej2Instances.addShimmerEffect();
        },
        autoFitColumns(fieldNames, startRowIndex, endRowIndex) {
            return this.ej2Instances.autoFitColumns(fieldNames, startRowIndex, endRowIndex);
        },
        batchAsyncUpdate(changes) {
            return this.ej2Instances.batchAsyncUpdate(changes);
        },
        batchUpdate(changes) {
            return this.ej2Instances.batchUpdate(changes);
        },
        calculatePageSizeByParentHeight(containerHeight) {
            return this.ej2Instances.calculatePageSizeByParentHeight(containerHeight);
        },
        changeDataSource(dataSource, columns, properties) {
            return this.ej2Instances.changeDataSource(dataSource, columns, properties);
        },
        clearCellSelection() {
            return this.ej2Instances.clearCellSelection();
        },
        clearFiltering(fields) {
            return this.ej2Instances.clearFiltering(fields);
        },
        clearFilteringAsync(fields) {
            return this.ej2Instances.clearFilteringAsync(fields);
        },
        clearGrouping() {
            return this.ej2Instances.clearGrouping();
        },
        clearGroupingAsync() {
            return this.ej2Instances.clearGroupingAsync();
        },
        clearRowSelection() {
            return this.ej2Instances.clearRowSelection();
        },
        clearSelection() {
            return this.ej2Instances.clearSelection();
        },
        clearSorting() {
            return this.ej2Instances.clearSorting();
        },
        clearSortingAsync() {
            return this.ej2Instances.clearSortingAsync();
        },
        closeEdit() {
            return this.ej2Instances.closeEdit();
        },
        copy(withHeader) {
            return this.ej2Instances.copy(withHeader);
        },
        csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
            return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
        },
        dataReady() {
            return this.ej2Instances.dataReady();
        },
        deleteRecord(fieldname, data) {
            return this.ej2Instances.deleteRecord(fieldname, data);
        },
        deleteRecordAsync(fieldname, data) {
            return this.ej2Instances.deleteRecordAsync(fieldname, data);
        },
        deleteRow(tr) {
            return this.ej2Instances.deleteRow(tr);
        },
        deleteRowAsync(tr) {
            return this.ej2Instances.deleteRowAsync(tr);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        destroyTemplate(propertyNames, index, callback) {
            return this.ej2Instances.destroyTemplate(propertyNames, index, callback);
        },
        detailCollapseAll() {
            return this.ej2Instances.detailCollapseAll();
        },
        detailExpandAll() {
            return this.ej2Instances.detailExpandAll();
        },
        editCell(index, field) {
            return this.ej2Instances.editCell(index, field);
        },
        enableToolbarItems(items, isEnable) {
            return this.ej2Instances.enableToolbarItems(items, isEnable);
        },
        endEdit() {
            return this.ej2Instances.endEdit();
        },
        endEditAsync() {
            return this.ej2Instances.endEditAsync();
        },
        excelExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
            return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
        },
        extendRequiredModules(modules) {
            return this.ej2Instances.extendRequiredModules(modules);
        },
        filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
            return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
        },
        filterByColumnAsync(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
            return this.ej2Instances.filterByColumnAsync(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
        },
        freezeRefresh() {
            return this.ej2Instances.freezeRefresh();
        },
        getBatchChanges() {
            return this.ej2Instances.getBatchChanges();
        },
        getCellFromIndex(rowIndex, columnIndex) {
            return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
        },
        getColumnByField(field) {
            return this.ej2Instances.getColumnByField(field);
        },
        getColumnByUid(uid, isColumns) {
            return this.ej2Instances.getColumnByUid(uid, isColumns);
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
        getFilterUIInfo() {
            return this.ej2Instances.getFilterUIInfo();
        },
        getFilteredRecords() {
            return this.ej2Instances.getFilteredRecords();
        },
        getFooterContent() {
            return this.ej2Instances.getFooterContent();
        },
        getFooterContentTable() {
            return this.ej2Instances.getFooterContentTable();
        },
        getForeignKeyColumns() {
            return this.ej2Instances.getForeignKeyColumns();
        },
        getFrozenDataRows() {
            return this.ej2Instances.getFrozenDataRows();
        },
        getFrozenLeftColumnHeaderByIndex(index) {
            return this.ej2Instances.getFrozenLeftColumnHeaderByIndex(index);
        },
        getFrozenLeftCount() {
            return this.ej2Instances.getFrozenLeftCount();
        },
        getFrozenMode() {
            return this.ej2Instances.getFrozenMode();
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
        getFrozenRowByIndex(index) {
            return this.ej2Instances.getFrozenRowByIndex(index);
        },
        getHeaderContent() {
            return this.ej2Instances.getHeaderContent();
        },
        getHeaderTable() {
            return this.ej2Instances.getHeaderTable();
        },
        getHiddenColumns() {
            return this.ej2Instances.getHiddenColumns();
        },
        getMediaColumns() {
            return this.ej2Instances.getMediaColumns();
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
        getPager() {
            return this.ej2Instances.getPager();
        },
        getPersistColumns() {
            return this.ej2Instances.getPersistColumns();
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
        getRowsObject() {
            return this.ej2Instances.getRowsObject();
        },
        getSelectedCellRecords() {
            return this.ej2Instances.getSelectedCellRecords();
        },
        getSelectedColumnsUid() {
            return this.ej2Instances.getSelectedColumnsUid();
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
        getSummaryValues(summaryCol, summaryData) {
            return this.ej2Instances.getSummaryValues(summaryCol, summaryData);
        },
        getUidByColumnField(field) {
            return this.ej2Instances.getUidByColumnField(field);
        },
        getVisibleColumns() {
            return this.ej2Instances.getVisibleColumns();
        },
        goToPage(pageNo) {
            return this.ej2Instances.goToPage(pageNo);
        },
        goToPageAsync(pageNo) {
            return this.ej2Instances.goToPageAsync(pageNo);
        },
        groupCollapseAll() {
            return this.ej2Instances.groupCollapseAll();
        },
        groupColumn(columnName) {
            return this.ej2Instances.groupColumn(columnName);
        },
        groupColumnAsync(columnName) {
            return this.ej2Instances.groupColumnAsync(columnName);
        },
        groupExpandAll() {
            return this.ej2Instances.groupExpandAll();
        },
        hideColumns(keys, hideBy) {
            return this.ej2Instances.hideColumns(keys, hideBy);
        },
        hideScroll() {
            return this.ej2Instances.hideScroll();
        },
        hideSpinner() {
            return this.ej2Instances.hideSpinner();
        },
        isFrozenGrid() {
            return this.ej2Instances.isFrozenGrid();
        },
        openColumnChooser(x, y) {
            return this.ej2Instances.openColumnChooser(x, y);
        },
        pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
            return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
        },
        pinRows(data) {
            return this.ej2Instances.pinRows(data);
        },
        print() {
            return this.ej2Instances.print();
        },
        redoEdit() {
            return this.ej2Instances.redoEdit();
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        refreshColumns() {
            return this.ej2Instances.refreshColumns();
        },
        refreshHeader() {
            return this.ej2Instances.refreshHeader();
        },
        removeMaskRow() {
            return this.ej2Instances.removeMaskRow();
        },
        reorderColumnByIndex(fromIndex, toIndex) {
            return this.ej2Instances.reorderColumnByIndex(fromIndex, toIndex);
        },
        reorderColumnByModel(fromColumn, toColumn) {
            return this.ej2Instances.reorderColumnByModel(fromColumn, toColumn);
        },
        reorderColumnByTargetIndex(fieldName, toIndex) {
            return this.ej2Instances.reorderColumnByTargetIndex(fieldName, toIndex);
        },
        reorderColumns(fromFName, toFName) {
            return this.ej2Instances.reorderColumns(fromFName, toFName);
        },
        reorderRows(fromIndexes, toIndex) {
            return this.ej2Instances.reorderRows(fromIndexes, toIndex);
        },
        saveCell() {
            return this.ej2Instances.saveCell();
        },
        search(searchString) {
            return this.ej2Instances.search(searchString);
        },
        searchAsync(searchString) {
            return this.ej2Instances.searchAsync(searchString);
        },
        selectCell(cellIndex, isToggle) {
            return this.ej2Instances.selectCell(cellIndex, isToggle);
        },
        selectCells(rowCellIndexes) {
            return this.ej2Instances.selectCells(rowCellIndexes);
        },
        selectCellsByRange(startIndex, endIndex) {
            return this.ej2Instances.selectCellsByRange(startIndex, endIndex);
        },
        selectRow(index, isToggle) {
            return this.ej2Instances.selectRow(index, isToggle);
        },
        selectRows(rowIndexes) {
            return this.ej2Instances.selectRows(rowIndexes);
        },
        selectRowsByRange(startIndex, endIndex) {
            return this.ej2Instances.selectRowsByRange(startIndex, endIndex);
        },
        serverCsvExport(url, headers) {
            return this.ej2Instances.serverCsvExport(url, headers);
        },
        serverExcelExport(url, headers) {
            return this.ej2Instances.serverExcelExport(url, headers);
        },
        serverPdfExport(url, headers) {
            return this.ej2Instances.serverPdfExport(url, headers);
        },
        setCellValue(key, field, value) {
            return this.ej2Instances.setCellValue(key, field, value);
        },
        setCellValueAsync(key, field, value, delay) {
            return this.ej2Instances.setCellValueAsync(key, field, value, delay);
        },
        setColumns(columns) {
            return this.ej2Instances.setColumns(columns);
        },
        setGridContent(element) {
            return this.ej2Instances.setGridContent(element);
        },
        setGridContentTable(element) {
            return this.ej2Instances.setGridContentTable(element);
        },
        setGridHeaderContent(element) {
            return this.ej2Instances.setGridHeaderContent(element);
        },
        setGridHeaderTable(element) {
            return this.ej2Instances.setGridHeaderTable(element);
        },
        setGridPager(element) {
            return this.ej2Instances.setGridPager(element);
        },
        setRowData(key, rowData) {
            return this.ej2Instances.setRowData(key, rowData);
        },
        setRowDataAsync(key, rowData, delay) {
            return this.ej2Instances.setRowDataAsync(key, rowData, delay);
        },
        showAdaptiveFilterDialog() {
            return this.ej2Instances.showAdaptiveFilterDialog();
        },
        showAdaptiveSortDialog() {
            return this.ej2Instances.showAdaptiveSortDialog();
        },
        showColumns(keys, showBy) {
            return this.ej2Instances.showColumns(keys, showBy);
        },
        showMaskRow(axisDirection, dialogElement) {
            return this.ej2Instances.showMaskRow(axisDirection, dialogElement);
        },
        showSpinner() {
            return this.ej2Instances.showSpinner();
        },
        sortColumn(columnName, direction, isMultiSort) {
            return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
        },
        sortColumnAsync(columnName, direction, isMultiSort) {
            return this.ej2Instances.sortColumnAsync(columnName, direction, isMultiSort);
        },
        startEdit() {
            return this.ej2Instances.startEdit();
        },
        undoEdit() {
            return this.ej2Instances.undoEdit();
        },
        ungroupColumn(columnName) {
            return this.ej2Instances.ungroupColumn(columnName);
        },
        ungroupColumnAsync(columnName) {
            return this.ej2Instances.ungroupColumnAsync(columnName);
        },
        unpinRows(data) {
            return this.ej2Instances.unpinRows(data);
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
        updateRowAsync(index, data) {
            return this.ej2Instances.updateRowAsync(index, data);
        },
        updateRowValue(key, rowData) {
            return this.ej2Instances.updateRowValue(key, rowData);
        },
    }
});
const GridPlugin = {
    name: 'ejs-grid',
    install(Vue) {
        Vue.component(GridPlugin.name, GridComponent);
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

const properties$1 = ['isLazyUpdate', 'plugins', 'cssClass', 'currentPage', 'customText', 'enableExternalMessage', 'enablePagerMessage', 'enablePersistence', 'enableQueryString', 'enableRtl', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizes', 'template', 'totalRecordsCount', 'click', 'created', 'dropDownChanged'];
const modelProps$1 = ['currentPage', 'pageSize', 'pageCount', 'pageSizes'];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * `ejs-pager` represents the VueJS Pager Component.
 * ```vue
 * <ejs-pager></ejs-pager>
 * ```
 */
let PagerComponent = vueDefineComponent({
    name: 'PagerComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Pager({}),
            propKeys: properties$1,
            models: modelProps$1,
            hasChildDirective: false,
            hasInjectedModules: false,
            tagMapper: {},
            tagNameMapper: {},
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        destroyTemplate(propertyNames, index) {
            return this.ej2Instances.destroyTemplate(propertyNames, index);
        },
        getLocalizedLabel(key) {
            return this.ej2Instances.getLocalizedLabel(key);
        },
        goToPage(pageNo) {
            return this.ej2Instances.goToPage(pageNo);
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
    }
});
const PagerPlugin = {
    name: 'ejs-pager',
    install(Vue) {
        Vue.component(PagerPlugin.name, PagerComponent);
    }
};

export { AggregateColumnDirective, AggregateColumnPlugin, AggregateColumnsDirective, AggregateColumnsPlugin, AggregateDirective, AggregatePlugin, AggregatesDirective, AggregatesPlugin, ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, GridComponent, GridPlugin, PagerComponent, PagerPlugin, StackedColumnDirective, StackedColumnPlugin, StackedColumnsDirective, StackedColumnsPlugin };
//# sourceMappingURL=ej2-vue-grids.es2015.js.map
