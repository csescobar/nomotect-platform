import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Grid } from '@syncfusion/ej2-grids';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AggregatesDirective } from './aggregates.directive';
import * as i0 from "@angular/core";
export const inputs = ['adaptiveUIMode', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowKeyboard', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoFit', 'childGrid', 'clipMode', 'columnChooserSettings', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'cssClass', 'currencyCode', 'currentAction', 'currentViewData', 'dataSource', 'detailTemplate', 'detailTemplateHeight', 'domVirtualizationSettings', 'editSettings', 'ej2StatePersistenceVersion', 'emptyRecordTemplate', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableColumnSpan', 'enableColumnVirtualization', 'enableDomVirtualization', 'enableHeaderFocus', 'enableHover', 'enableHtmlSanitizer', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRowSpan', 'enableRtl', 'enableStickyHeader', 'enableVirtualMaskRow', 'enableVirtualization', 'exportGrids', 'filterSettings', 'footerRowHeight', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'isRowPinned', 'isRowSelectable', 'loadingIndicator', 'locale', 'pageSettings', 'pagerTemplate', 'parentDetails', 'printMode', 'query', 'queryString', 'resizeSettings', 'rowDropSettings', 'rowHeight', 'rowRenderingMode', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'setRowHeight', 'showColumnChooser', 'showColumnMenu', 'showHider', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeCustomFilterOpen', 'beforeDataBound', 'beforeDetailTemplateDetach', 'beforeExcelExport', 'beforeOpenAdaptiveDialog', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellFocus', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDataStateChange', 'columnDeselected', 'columnDeselecting', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuClose', 'columnMenuOpen', 'columnSelected', 'columnSelecting', 'commandClick', 'contextMenuClick', 'contextMenuClose', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailCollapse', 'detailCollapsed', 'detailDataBound', 'detailExpand', 'detailExpanded', 'excelAggregateQueryCellInfo', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportDetailTemplate', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'lazyLoadGroupCollapse', 'lazyLoadGroupExpand', 'load', 'pdfAggregateQueryCellInfo', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordClick', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick', 'dataSourceChange'];
export const twoWays = ['dataSource'];
/**
 * `ejs-grid` represents the Angular Grid Component.
 * ```html
 * <ejs-grid [dataSource]='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
let GridComponent = class GridComponent extends Grid {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns', 'aggregates'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('GridsFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsPage');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsGroup');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsDetailRow');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsAggregate');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsSearch');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsCommandColumn');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsFreeze');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsColumnChooser');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsForeignKey');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsInfiniteScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsLazyLoadGroup');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GridsDomVirtualization');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.context = new ComponentBase();
    }
    ngOnInit() {
        this.context.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.context.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.context.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childColumns;
        if (this.childAggregates) {
            this.tagObjects[1].instance = this.childAggregates;
        }
        this.context.ngAfterContentChecked(this);
    }
};
GridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
GridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: GridComponent, selector: "ejs-grid", inputs: { adaptiveUIMode: "adaptiveUIMode", aggregates: "aggregates", allowExcelExport: "allowExcelExport", allowFiltering: "allowFiltering", allowGrouping: "allowGrouping", allowKeyboard: "allowKeyboard", allowMultiSorting: "allowMultiSorting", allowPaging: "allowPaging", allowPdfExport: "allowPdfExport", allowReordering: "allowReordering", allowResizing: "allowResizing", allowRowDragAndDrop: "allowRowDragAndDrop", allowSelection: "allowSelection", allowSorting: "allowSorting", allowTextWrap: "allowTextWrap", autoFit: "autoFit", childGrid: "childGrid", clipMode: "clipMode", columnChooserSettings: "columnChooserSettings", columnMenuItems: "columnMenuItems", columnQueryMode: "columnQueryMode", columns: "columns", contextMenuItems: "contextMenuItems", cssClass: "cssClass", currencyCode: "currencyCode", currentAction: "currentAction", currentViewData: "currentViewData", dataSource: "dataSource", detailTemplate: "detailTemplate", detailTemplateHeight: "detailTemplateHeight", domVirtualizationSettings: "domVirtualizationSettings", editSettings: "editSettings", ej2StatePersistenceVersion: "ej2StatePersistenceVersion", emptyRecordTemplate: "emptyRecordTemplate", enableAdaptiveUI: "enableAdaptiveUI", enableAltRow: "enableAltRow", enableAutoFill: "enableAutoFill", enableColumnSpan: "enableColumnSpan", enableColumnVirtualization: "enableColumnVirtualization", enableDomVirtualization: "enableDomVirtualization", enableHeaderFocus: "enableHeaderFocus", enableHover: "enableHover", enableHtmlSanitizer: "enableHtmlSanitizer", enableImmutableMode: "enableImmutableMode", enableInfiniteScrolling: "enableInfiniteScrolling", enablePersistence: "enablePersistence", enableRowSpan: "enableRowSpan", enableRtl: "enableRtl", enableStickyHeader: "enableStickyHeader", enableVirtualMaskRow: "enableVirtualMaskRow", enableVirtualization: "enableVirtualization", exportGrids: "exportGrids", filterSettings: "filterSettings", footerRowHeight: "footerRowHeight", frozenColumns: "frozenColumns", frozenRows: "frozenRows", gridLines: "gridLines", groupSettings: "groupSettings", height: "height", hierarchyPrintMode: "hierarchyPrintMode", infiniteScrollSettings: "infiniteScrollSettings", isRowPinned: "isRowPinned", isRowSelectable: "isRowSelectable", loadingIndicator: "loadingIndicator", locale: "locale", pageSettings: "pageSettings", pagerTemplate: "pagerTemplate", parentDetails: "parentDetails", printMode: "printMode", query: "query", queryString: "queryString", resizeSettings: "resizeSettings", rowDropSettings: "rowDropSettings", rowHeight: "rowHeight", rowRenderingMode: "rowRenderingMode", rowTemplate: "rowTemplate", searchSettings: "searchSettings", selectedRowIndex: "selectedRowIndex", selectionSettings: "selectionSettings", setRowHeight: "setRowHeight", showColumnChooser: "showColumnChooser", showColumnMenu: "showColumnMenu", showHider: "showHider", sortSettings: "sortSettings", textWrapSettings: "textWrapSettings", toolbar: "toolbar", toolbarTemplate: "toolbarTemplate", width: "width" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", batchAdd: "batchAdd", batchCancel: "batchCancel", batchDelete: "batchDelete", beforeAutoFill: "beforeAutoFill", beforeBatchAdd: "beforeBatchAdd", beforeBatchDelete: "beforeBatchDelete", beforeBatchSave: "beforeBatchSave", beforeCopy: "beforeCopy", beforeCustomFilterOpen: "beforeCustomFilterOpen", beforeDataBound: "beforeDataBound", beforeDetailTemplateDetach: "beforeDetailTemplateDetach", beforeExcelExport: "beforeExcelExport", beforeOpenAdaptiveDialog: "beforeOpenAdaptiveDialog", beforeOpenColumnChooser: "beforeOpenColumnChooser", beforePaste: "beforePaste", beforePdfExport: "beforePdfExport", beforePrint: "beforePrint", beginEdit: "beginEdit", cellDeselected: "cellDeselected", cellDeselecting: "cellDeselecting", cellEdit: "cellEdit", cellFocus: "cellFocus", cellSave: "cellSave", cellSaved: "cellSaved", cellSelected: "cellSelected", cellSelecting: "cellSelecting", checkBoxChange: "checkBoxChange", columnDataStateChange: "columnDataStateChange", columnDeselected: "columnDeselected", columnDeselecting: "columnDeselecting", columnDrag: "columnDrag", columnDragStart: "columnDragStart", columnDrop: "columnDrop", columnMenuClick: "columnMenuClick", columnMenuClose: "columnMenuClose", columnMenuOpen: "columnMenuOpen", columnSelected: "columnSelected", columnSelecting: "columnSelecting", commandClick: "commandClick", contextMenuClick: "contextMenuClick", contextMenuClose: "contextMenuClose", contextMenuOpen: "contextMenuOpen", created: "created", dataBound: "dataBound", dataSourceChanged: "dataSourceChanged", dataStateChange: "dataStateChange", destroyed: "destroyed", detailCollapse: "detailCollapse", detailCollapsed: "detailCollapsed", detailDataBound: "detailDataBound", detailExpand: "detailExpand", detailExpanded: "detailExpanded", excelAggregateQueryCellInfo: "excelAggregateQueryCellInfo", excelExportComplete: "excelExportComplete", excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo", excelQueryCellInfo: "excelQueryCellInfo", exportDetailDataBound: "exportDetailDataBound", exportDetailTemplate: "exportDetailTemplate", exportGroupCaption: "exportGroupCaption", headerCellInfo: "headerCellInfo", keyPressed: "keyPressed", lazyLoadGroupCollapse: "lazyLoadGroupCollapse", lazyLoadGroupExpand: "lazyLoadGroupExpand", load: "load", pdfAggregateQueryCellInfo: "pdfAggregateQueryCellInfo", pdfExportComplete: "pdfExportComplete", pdfHeaderQueryCellInfo: "pdfHeaderQueryCellInfo", pdfQueryCellInfo: "pdfQueryCellInfo", printComplete: "printComplete", queryCellInfo: "queryCellInfo", recordClick: "recordClick", recordDoubleClick: "recordDoubleClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", rowDataBound: "rowDataBound", rowDeselected: "rowDeselected", rowDeselecting: "rowDeselecting", rowDrag: "rowDrag", rowDragStart: "rowDragStart", rowDragStartHelper: "rowDragStartHelper", rowDrop: "rowDrop", rowSelected: "rowSelected", rowSelecting: "rowSelecting", toolbarClick: "toolbarClick", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "rowTemplate", first: true, predicate: ["rowTemplate"], descendants: true }, { propertyName: "emptyRecordTemplate", first: true, predicate: ["emptyRecordTemplate"], descendants: true }, { propertyName: "detailTemplate", first: true, predicate: ["detailTemplate"], descendants: true }, { propertyName: "toolbarTemplate", first: true, predicate: ["toolbarTemplate"], descendants: true }, { propertyName: "pagerTemplate", first: true, predicate: ["pagerTemplate"], descendants: true }, { propertyName: "editSettings_template", first: true, predicate: ["editSettingsTemplate"], descendants: true }, { propertyName: "groupSettings_captionTemplate", first: true, predicate: ["groupSettingsCaptionTemplate"], descendants: true }, { propertyName: "columnChooserSettings_headerTemplate", first: true, predicate: ["columnChooserSettingsHeaderTemplate"], descendants: true }, { propertyName: "columnChooserSettings_template", first: true, predicate: ["columnChooserSettingsTemplate"], descendants: true }, { propertyName: "columnChooserSettings_footerTemplate", first: true, predicate: ["columnChooserSettingsFooterTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childAggregates", first: true, predicate: AggregatesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], GridComponent.prototype, "rowTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "emptyRecordTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "detailTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "toolbarTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "pagerTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "editSettings_template", void 0);
__decorate([
    Template()
], GridComponent.prototype, "groupSettings_captionTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "columnChooserSettings_headerTemplate", void 0);
__decorate([
    Template()
], GridComponent.prototype, "columnChooserSettings_template", void 0);
__decorate([
    Template()
], GridComponent.prototype, "columnChooserSettings_footerTemplate", void 0);
GridComponent = __decorate([
    ComponentMixins([ComponentBase])
], GridComponent);
export { GridComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-grid',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective),
                        childAggregates: new ContentChild(AggregatesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { rowTemplate: [{
                type: ContentChild,
                args: ['rowTemplate']
            }], emptyRecordTemplate: [{
                type: ContentChild,
                args: ['emptyRecordTemplate']
            }], detailTemplate: [{
                type: ContentChild,
                args: ['detailTemplate']
            }], toolbarTemplate: [{
                type: ContentChild,
                args: ['toolbarTemplate']
            }], pagerTemplate: [{
                type: ContentChild,
                args: ['pagerTemplate']
            }], editSettings_template: [{
                type: ContentChild,
                args: ['editSettingsTemplate']
            }], groupSettings_captionTemplate: [{
                type: ContentChild,
                args: ['groupSettingsCaptionTemplate']
            }], columnChooserSettings_headerTemplate: [{
                type: ContentChild,
                args: ['columnChooserSettingsHeaderTemplate']
            }], columnChooserSettings_template: [{
                type: ContentChild,
                args: ['columnChooserSettingsTemplate']
            }], columnChooserSettings_footerTemplate: [{
                type: ContentChild,
                args: ['columnChooserSettingsFooterTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZ3JpZC9ncmlkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRTdELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGdCQUFnQixFQUFDLFlBQVksRUFBQyxrQkFBa0IsRUFBQyxnQkFBZ0IsRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyxpQkFBaUIsRUFBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsaUJBQWlCLEVBQUMsWUFBWSxFQUFDLGdCQUFnQixFQUFDLHNCQUFzQixFQUFDLDJCQUEyQixFQUFDLGNBQWMsRUFBQyw0QkFBNEIsRUFBQyxxQkFBcUIsRUFBQyxrQkFBa0IsRUFBQyxjQUFjLEVBQUMsZ0JBQWdCLEVBQUMsa0JBQWtCLEVBQUMsNEJB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SSxZQUFZLENBQUMsbUJBQW1CLENBQUM7cUJBQ3pEO2lCQUNKOytLQThHVSxXQUFXO3NCQUZqQixZQUFZO3VCQUFDLGFBQWE7Z0JBV3BCLG1CQUFtQjtzQkFGekIsWUFBWTt1QkFBQyxxQkFBcUI7Z0JBZTVCLGNBQWM7c0JBRnBCLFlBQVk7dUJBQUMsZ0JBQWdCO2dCQVV2QixlQUFlO3NCQUZyQixZQUFZO3VCQUFDLGlCQUFpQjtnQkFVeEIsYUFBYTtzQkFGbkIsWUFBWTt1QkFBQyxlQUFlO2dCQUt0QixxQkFBcUI7c0JBRjNCLFlBQVk7dUJBQUMsc0JBQXNCO2dCQUs3Qiw2QkFBNkI7c0JBRm5DLFlBQVk7dUJBQUMsOEJBQThCO2dCQUtyQyxvQ0FBb0M7c0JBRjFDLFlBQVk7dUJBQUMscUNBQXFDO2dCQUs1Qyw4QkFBOEI7c0JBRnBDLFlBQVk7dUJBQUMsK0JBQStCO2dCQUt0QyxvQ0FBb0M7c0JBRjFDLFlBQVk7dUJBQUMscUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBSZW5kZXJlcjIsIEluamVjdG9yLCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgQ29tcG9uZW50TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1ncmlkcyc7XG5pbXBvcnQgeyBUZW1wbGF0ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQ29sdW1uc0RpcmVjdGl2ZSB9IGZyb20gJy4vY29sdW1ucy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQWdncmVnYXRlc0RpcmVjdGl2ZSB9IGZyb20gJy4vYWdncmVnYXRlcy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYWRhcHRpdmVVSU1vZGUnLCdhZ2dyZWdhdGVzJywnYWxsb3dFeGNlbEV4cG9ydCcsJ2FsbG93RmlsdGVyaW5nJywnYWxsb3dHcm91cGluZycsJ2FsbG93S2V5Ym9hcmQnLCdhbGxvd011bHRpU29ydGluZycsJ2FsbG93UGFnaW5nJywnYWxsb3dQZGZFeHBvcnQnLCdhbGxvd1Jlb3JkZXJpbmcnLCdhbGxvd1Jlc2l6aW5nJywnYWxsb3dSb3dEcmFnQW5kRHJvcCcsJ2FsbG93U2VsZWN0aW9uJywnYWxsb3dTb3J0aW5nJywnYWxsb3dUZXh0V3JhcCcsJ2F1dG9GaXQnLCdjaGlsZEdyaWQnLCdjbGlwTW9kZScsJ2NvbHVtbkNob29zZXJTZXR0aW5ncycsJ2NvbHVtbk1lbnVJdGVtcycsJ2NvbHVtblF1ZXJ5TW9kZScsJ2NvbHVtbnMnLCdjb250ZXh0TWVudUl0ZW1zJywnY3NzQ2xhc3MnLCdjdXJyZW5jeUNvZGUnLCdjdXJyZW50QWN0aW9uJywnY3VycmVudFZpZXdEYXRhJywnZGF0YVNvdXJjZScsJ2RldGFpbFRlbXBsYXRlJywnZGV0YWlsVGVtcGxhdGVIZWlnaHQnLCdkb21WaXJ0dWFsaXphdGlvblNldHRpbmdzJywnZWRpdFNldHRpbmdzJywnZWoyU3RhdGVQZXJzaXN0ZW5jZVZlcnNpb24nLCdlbXB0eVJlY29yZFRlbXBsYXRlJywnZW5hYmxlQWRhcHRpdmVVSScsJ2VuYWJsZUFsdFJvdycsJ2VuYWJsZUF1dG9GaWxsJywnZW5hYmxlQ29sdW1uU3BhbicsJ2VuYWJsZUNvbHVtblZpcnR1YWxpemF0aW9uJywnZW5hYmxlRG9tVmlydHVhbGl6YXRpb24nLCdlbmFibGVIZWFkZXJGb2N1cycsJ2VuYWJsZUhvdmVyJywnZW5hYmxlSHRtbFNhbml0aXplcicsJ2VuYWJsZUltbXV0YWJsZU1vZGUnLCdlbmFibGVJbmZpbml0ZVNjcm9sbGluZycsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUm93U3BhbicsJ2VuYWJsZVJ0bCcsJ2VuYWJsZVN0aWNreUhlYWRlcicsJ2VuYWJsZVZpcnR1YWxNYXNrUm93JywnZW5hYmxlVmlydHVhbGl6YXRpb24nLCdleHBvcnRHcmlkcycsJ2ZpbHRlclNldHRpbmdzJywnZm9vdGVyUm93SGVpZ2h0JywnZnJvemVuQ29sdW1ucycsJ2Zyb3plblJvd3MnLCdncmlkTGluZXMnLCdncm91cFNldHRpbmdzJywnaGVpZ2h0JywnaGllcmFyY2h5UHJpbnRNb2RlJywnaW5maW5pdGVTY3JvbGxTZXR0aW5ncycsJ2lzUm93UGlubmVkJywnaXNSb3dTZWxlY3RhYmxlJywnbG9hZGluZ0luZGljYXRvcicsJ2xvY2FsZScsJ3BhZ2VTZXR0aW5ncycsJ3BhZ2VyVGVtcGxhdGUnLCdwYXJlbnREZXRhaWxzJywncHJpbnRNb2RlJywncXVlcnknLCdxdWVyeVN0cmluZycsJ3Jlc2l6ZVNldHRpbmdzJywncm93RHJvcFNldHRpbmdzJywncm93SGVpZ2h0Jywncm93UmVuZGVyaW5nTW9kZScsJ3Jvd1RlbXBsYXRlJywnc2VhcmNoU2V0dGluZ3MnLCdzZWxlY3RlZFJvd0luZGV4Jywnc2VsZWN0aW9uU2V0dGluZ3MnLCdzZXRSb3dIZWlnaHQnLCdzaG93Q29sdW1uQ2hvb3NlcicsJ3Nob3dDb2x1bW5NZW51Jywnc2hvd0hpZGVyJywnc29ydFNldHRpbmdzJywndGV4dFdyYXBTZXR0aW5ncycsJ3Rvb2xiYXInLCd0b29sYmFyVGVtcGxhdGUnLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2JhdGNoQWRkJywnYmF0Y2hDYW5jZWwnLCdiYXRjaERlbGV0ZScsJ2JlZm9yZUF1dG9GaWxsJywnYmVmb3JlQmF0Y2hBZGQnLCdiZWZvcmVCYXRjaERlbGV0ZScsJ2JlZm9yZUJhdGNoU2F2ZScsJ2JlZm9yZUNvcHknLCdiZWZvcmVDdXN0b21GaWx0ZXJPcGVuJywnYmVmb3JlRGF0YUJvdW5kJywnYmVmb3JlRGV0YWlsVGVtcGxhdGVEZXRhY2gnLCdiZWZvcmVFeGNlbEV4cG9ydCcsJ2JlZm9yZU9wZW5BZGFwdGl2ZURpYWxvZycsJ2JlZm9yZU9wZW5Db2x1bW5DaG9vc2VyJywnYmVmb3JlUGFzdGUnLCdiZWZvcmVQZGZFeHBvcnQnLCdiZWZvcmVQcmludCcsJ2JlZ2luRWRpdCcsJ2NlbGxEZXNlbGVjdGVkJywnY2VsbERlc2VsZWN0aW5nJywnY2VsbEVkaXQnLCdjZWxsRm9jdXMnLCdjZWxsU2F2ZScsJ2NlbGxTYXZlZCcsJ2NlbGxTZWxlY3RlZCcsJ2NlbGxTZWxlY3RpbmcnLCdjaGVja0JveENoYW5nZScsJ2NvbHVtbkRhdGFTdGF0ZUNoYW5nZScsJ2NvbHVtbkRlc2VsZWN0ZWQnLCdjb2x1bW5EZXNlbGVjdGluZycsJ2NvbHVtbkRyYWcnLCdjb2x1bW5EcmFnU3RhcnQnLCdjb2x1bW5Ecm9wJywnY29sdW1uTWVudUNsaWNrJywnY29sdW1uTWVudUNsb3NlJywnY29sdW1uTWVudU9wZW4nLCdjb2x1bW5TZWxlY3RlZCcsJ2NvbHVtblNlbGVjdGluZycsJ2NvbW1hbmRDbGljaycsJ2NvbnRleHRNZW51Q2xpY2snLCdjb250ZXh0TWVudUNsb3NlJywnY29udGV4dE1lbnVPcGVuJywnY3JlYXRlZCcsJ2RhdGFCb3VuZCcsJ2RhdGFTb3VyY2VDaGFuZ2VkJywnZGF0YVN0YXRlQ2hhbmdlJywnZGVzdHJveWVkJywnZGV0YWlsQ29sbGFwc2UnLCdkZXRhaWxDb2xsYXBzZWQnLCdkZXRhaWxEYXRhQm91bmQnLCdkZXRhaWxFeHBhbmQnLCdkZXRhaWxFeHBhbmRlZCcsJ2V4Y2VsQWdncmVnYXRlUXVlcnlDZWxsSW5mbycsJ2V4Y2VsRXhwb3J0Q29tcGxldGUnLCdleGNlbEhlYWRlclF1ZXJ5Q2VsbEluZm8nLCdleGNlbFF1ZXJ5Q2VsbEluZm8nLCdleHBvcnREZXRhaWxEYXRhQm91bmQnLCdleHBvcnREZXRhaWxUZW1wbGF0ZScsJ2V4cG9ydEdyb3VwQ2FwdGlvbicsJ2hlYWRlckNlbGxJbmZvJywna2V5UHJlc3NlZCcsJ2xhenlMb2FkR3JvdXBDb2xsYXBzZScsJ2xhenlMb2FkR3JvdXBFeHBhbmQnLCdsb2FkJywncGRmQWdncmVnYXRlUXVlcnlDZWxsSW5mbycsJ3BkZkV4cG9ydENvbXBsZXRlJywncGRmSGVhZGVyUXVlcnlDZWxsSW5mbycsJ3BkZlF1ZXJ5Q2VsbEluZm8nLCdwcmludENvbXBsZXRlJywncXVlcnlDZWxsSW5mbycsJ3JlY29yZENsaWNrJywncmVjb3JkRG91YmxlQ2xpY2snLCdyZXNpemVTdGFydCcsJ3Jlc2l6ZVN0b3AnLCdyZXNpemluZycsJ3Jvd0RhdGFCb3VuZCcsJ3Jvd0Rlc2VsZWN0ZWQnLCdyb3dEZXNlbGVjdGluZycsJ3Jvd0RyYWcnLCdyb3dEcmFnU3RhcnQnLCdyb3dEcmFnU3RhcnRIZWxwZXInLCdyb3dEcm9wJywncm93U2VsZWN0ZWQnLCdyb3dTZWxlY3RpbmcnLCd0b29sYmFyQ2xpY2snLCdkYXRhU291cmNlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2RhdGFTb3VyY2UnXTtcblxuLyoqXG4gKiBgZWpzLWdyaWRgIHJlcHJlc2VudHMgdGhlIEFuZ3VsYXIgR3JpZCBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWdyaWQgW2RhdGFTb3VyY2VdPSdkYXRhJyBhbGxvd1BhZ2luZz0ndHJ1ZScgYWxsb3dTb3J0aW5nPSd0cnVlJz48L2Vqcy1ncmlkPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWdyaWQnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRDb2x1bW5zOiBuZXcgQ29udGVudENoaWxkKENvbHVtbnNEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRBZ2dyZWdhdGVzOiBuZXcgQ29udGVudENoaWxkKEFnZ3JlZ2F0ZXNEaXJlY3RpdmUpXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIEdyaWRDb21wb25lbnQgZXh0ZW5kcyBHcmlkIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGFjdGlvbkJlZ2luOiBhbnk7XG5cdGFjdGlvbkNvbXBsZXRlOiBhbnk7XG5cdGFjdGlvbkZhaWx1cmU6IGFueTtcblx0YmF0Y2hBZGQ6IGFueTtcblx0YmF0Y2hDYW5jZWw6IGFueTtcblx0YmF0Y2hEZWxldGU6IGFueTtcblx0YmVmb3JlQXV0b0ZpbGw6IGFueTtcblx0YmVmb3JlQmF0Y2hBZGQ6IGFueTtcblx0YmVmb3JlQmF0Y2hEZWxldGU6IGFueTtcblx0YmVmb3JlQmF0Y2hTYXZlOiBhbnk7XG5cdGJlZm9yZUNvcHk6IGFueTtcblx0YmVmb3JlQ3VzdG9tRmlsdGVyT3BlbjogYW55O1xuXHRiZWZvcmVEYXRhQm91bmQ6IGFueTtcblx0YmVmb3JlRGV0YWlsVGVtcGxhdGVEZXRhY2g6IGFueTtcblx0YmVmb3JlRXhjZWxFeHBvcnQ6IGFueTtcblx0YmVmb3JlT3BlbkFkYXB0aXZlRGlhbG9nOiBhbnk7XG5cdGJlZm9yZU9wZW5Db2x1bW5DaG9vc2VyOiBhbnk7XG5cdGJlZm9yZVBhc3RlOiBhbnk7XG5cdGJlZm9yZVBkZkV4cG9ydDogYW55O1xuXHRiZWZvcmVQcmludDogYW55O1xuXHRiZWdpbkVkaXQ6IGFueTtcblx0Y2VsbERlc2VsZWN0ZWQ6IGFueTtcblx0Y2VsbERlc2VsZWN0aW5nOiBhbnk7XG5cdGNlbGxFZGl0OiBhbnk7XG5cdGNlbGxGb2N1czogYW55O1xuXHRjZWxsU2F2ZTogYW55O1xuXHRjZWxsU2F2ZWQ6IGFueTtcblx0Y2VsbFNlbGVjdGVkOiBhbnk7XG5cdGNlbGxTZWxlY3Rpbmc6IGFueTtcblx0Y2hlY2tCb3hDaGFuZ2U6IGFueTtcblx0Y29sdW1uRGF0YVN0YXRlQ2hhbmdlOiBhbnk7XG5cdGNvbHVtbkRlc2VsZWN0ZWQ6IGFueTtcblx0Y29sdW1uRGVzZWxlY3Rpbmc6IGFueTtcblx0Y29sdW1uRHJhZzogYW55O1xuXHRjb2x1bW5EcmFnU3RhcnQ6IGFueTtcblx0Y29sdW1uRHJvcDogYW55O1xuXHRjb2x1bW5NZW51Q2xpY2s6IGFueTtcblx0Y29sdW1uTWVudUNsb3NlOiBhbnk7XG5cdGNvbHVtbk1lbnVPcGVuOiBhbnk7XG5cdGNvbHVtblNlbGVjdGVkOiBhbnk7XG5cdGNvbHVtblNlbGVjdGluZzogYW55O1xuXHRjb21tYW5kQ2xpY2s6IGFueTtcblx0Y29udGV4dE1lbnVDbGljazogYW55O1xuXHRjb250ZXh0TWVudUNsb3NlOiBhbnk7XG5cdGNvbnRleHRNZW51T3BlbjogYW55O1xuXHRjcmVhdGVkOiBhbnk7XG5cdGRhdGFCb3VuZDogYW55O1xuXHRkYXRhU291cmNlQ2hhbmdlZDogYW55O1xuXHRkYXRhU3RhdGVDaGFuZ2U6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGRldGFpbENvbGxhcHNlOiBhbnk7XG5cdGRldGFpbENvbGxhcHNlZDogYW55O1xuXHRkZXRhaWxEYXRhQm91bmQ6IGFueTtcblx0ZGV0YWlsRXhwYW5kOiBhbnk7XG5cdGRldGFpbEV4cGFuZGVkOiBhbnk7XG5cdGV4Y2VsQWdncmVnYXRlUXVlcnlDZWxsSW5mbzogYW55O1xuXHRleGNlbEV4cG9ydENvbXBsZXRlOiBhbnk7XG5cdGV4Y2VsSGVhZGVyUXVlcnlDZWxsSW5mbzogYW55O1xuXHRleGNlbFF1ZXJ5Q2VsbEluZm86IGFueTtcblx0ZXhwb3J0RGV0YWlsRGF0YUJvdW5kOiBhbnk7XG5cdGV4cG9ydERldGFpbFRlbXBsYXRlOiBhbnk7XG5cdGV4cG9ydEdyb3VwQ2FwdGlvbjogYW55O1xuXHRoZWFkZXJDZWxsSW5mbzogYW55O1xuXHRrZXlQcmVzc2VkOiBhbnk7XG5cdGxhenlMb2FkR3JvdXBDb2xsYXBzZTogYW55O1xuXHRsYXp5TG9hZEdyb3VwRXhwYW5kOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0cGRmQWdncmVnYXRlUXVlcnlDZWxsSW5mbzogYW55O1xuXHRwZGZFeHBvcnRDb21wbGV0ZTogYW55O1xuXHRwZGZIZWFkZXJRdWVyeUNlbGxJbmZvOiBhbnk7XG5cdHBkZlF1ZXJ5Q2VsbEluZm86IGFueTtcblx0cHJpbnRDb21wbGV0ZTogYW55O1xuXHRxdWVyeUNlbGxJbmZvOiBhbnk7XG5cdHJlY29yZENsaWNrOiBhbnk7XG5cdHJlY29yZERvdWJsZUNsaWNrOiBhbnk7XG5cdHJlc2l6ZVN0YXJ0OiBhbnk7XG5cdHJlc2l6ZVN0b3A6IGFueTtcblx0cmVzaXppbmc6IGFueTtcblx0cm93RGF0YUJvdW5kOiBhbnk7XG5cdHJvd0Rlc2VsZWN0ZWQ6IGFueTtcblx0cm93RGVzZWxlY3Rpbmc6IGFueTtcblx0cm93RHJhZzogYW55O1xuXHRyb3dEcmFnU3RhcnQ6IGFueTtcblx0cm93RHJhZ1N0YXJ0SGVscGVyOiBhbnk7XG5cdHJvd0Ryb3A6IGFueTtcblx0cm93U2VsZWN0ZWQ6IGFueTtcblx0cm93U2VsZWN0aW5nOiBhbnk7XG5cdHRvb2xiYXJDbGljazogYW55O1xuXHRwdWJsaWMgZGF0YVNvdXJjZUNoYW5nZTogYW55O1xuICAgIHB1YmxpYyBjaGlsZENvbHVtbnM6IFF1ZXJ5TGlzdDxDb2x1bW5zRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRBZ2dyZWdhdGVzOiBRdWVyeUxpc3Q8QWdncmVnYXRlc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydjb2x1bW5zJywgJ2FnZ3JlZ2F0ZXMnXTtcbiAgICAvKiogXG4gICAgICogVGhlIHJvdyB0ZW1wbGF0ZSB0aGF0IHJlbmRlcnMgY3VzdG9taXplZCByb3dzIGZyb20gdGhlIGdpdmVuIHRlbXBsYXRlLiBcbiAgICAgKiBCeSBkZWZhdWx0LCBHcmlkIHJlbmRlcnMgYSB0YWJsZSByb3cgZm9yIGV2ZXJ5IGRhdGEgc291cmNlIGl0ZW0uIFxuICAgICAqID4gKiBJdCBhY2NlcHRzIGVpdGhlciBbdGVtcGxhdGUgc3RyaW5nXSguLi8uLi9jb21tb24vdGVtcGxhdGUvKSBvciBIVE1MIGVsZW1lbnQgSUQuIFxuICAgICAqID4gKiBUaGUgcm93IHRlbXBsYXRlIG11c3QgYmUgYSB0YWJsZSByb3cuXG4gICAgICogXG4gICAgICogPiBDaGVjayB0aGUgW2BSb3cgVGVtcGxhdGVgXSguLi8uLi9ncmlkL3Jvdy8pIGN1c3RvbWl6YXRpb24uXG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdyb3dUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcm93VGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIGVtcHR5IHJlY29yZCB0ZW1wbGF0ZSB0aGF0IHJlbmRlcnMgY3VzdG9taXplZCBlbGVtZW50IG9yIHRleHQgb3IgaW1hZ2UgaW5zdGVhZCBvZiBkaXNwbGF5aW5nIHRoZSBlbXB0eSByZWNvcmQgbWVzc2FnZSBpbiB0aGUgZ3JpZC4gXG4gICAgICogPiBJdCBhY2NlcHRzIGVpdGhlciB0aGUgW3RlbXBsYXRlIHN0cmluZ10oLi4vLi4vY29tbW9uL3RlbXBsYXRlLykgb3IgdGhlIEhUTUwgZWxlbWVudCBJRC5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZW1wdHlSZWNvcmRUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZW1wdHlSZWNvcmRUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgZGV0YWlsIHRlbXBsYXRlIGFsbG93cyB5b3UgdG8gc2hvdyBvciBoaWRlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgYSBwYXJ0aWN1bGFyIHJvdy5cbiAgICAgKiBcbiAgICAgKiA+IEl0IGFjY2VwdHMgZWl0aGVyIHRoZSBbdGVtcGxhdGUgc3RyaW5nXSguLi8uLi9jb21tb24vdGVtcGxhdGUvKSBvciB0aGUgSFRNTCBlbGVtZW50IElELlxuICAgICAqXG4gICAgICp7JSBjb2RlQmxvY2sgc3JjPVwiZ3JpZC9kZXRhaWwtdGVtcGxhdGUtYXBpL2luZGV4LnRzXCIgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2RldGFpbFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBkZXRhaWxUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCB1c2VkIHRvIHJlbmRlciB0b29sYmFyIHRlbXBsYXRlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3Rvb2xiYXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbGJhclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEl0IHVzZWQgdG8gcmVuZGVyIHBhZ2VyIHRlbXBsYXRlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3BhZ2VyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHBhZ2VyVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdlZGl0U2V0dGluZ3NUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZWRpdFNldHRpbmdzX3RlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnZ3JvdXBTZXR0aW5nc0NhcHRpb25UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZ3JvdXBTZXR0aW5nc19jYXB0aW9uVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdjb2x1bW5DaG9vc2VyU2V0dGluZ3NIZWFkZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgY29sdW1uQ2hvb3NlclNldHRpbmdzX2hlYWRlclRlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnY29sdW1uQ2hvb3NlclNldHRpbmdzVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGNvbHVtbkNob29zZXJTZXR0aW5nc190ZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2NvbHVtbkNob29zZXJTZXR0aW5nc0Zvb3RlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjb2x1bW5DaG9vc2VyU2V0dGluZ3NfZm9vdGVyVGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0ZpbHRlcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNQYWdlJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc1NlbGVjdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNTb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0dyb3VwJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc1Jlb3JkZXInKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dyaWRzUm93REQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dyaWRzRGV0YWlsUm93Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc1Rvb2xiYXInKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dyaWRzQWdncmVnYXRlJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc1NlYXJjaCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNWaXJ0dWFsU2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0VkaXQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dyaWRzUmVzaXplJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0V4Y2VsRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc1BkZkV4cG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNDb21tYW5kQ29sdW1uJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0NvbnRleHRNZW51Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0ZyZWV6ZScpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNDb2x1bW5NZW51Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0NvbHVtbkNob29zZXInKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dyaWRzRm9yZWlnbktleScpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNJbmZpbml0ZVNjcm9sbCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR3JpZHNMYXp5TG9hZEdyb3VwJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHcmlkc0RvbVZpcnR1YWxpemF0aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuY29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy50YWdPYmplY3RzWzBdLmluc3RhbmNlID0gdGhpcy5jaGlsZENvbHVtbnM7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkQWdncmVnYXRlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbMV0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkQWdncmVnYXRlcyBhcyBhbnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19