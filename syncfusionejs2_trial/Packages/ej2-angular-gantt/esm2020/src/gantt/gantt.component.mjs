import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { Template } from '@syncfusion/ej2-angular-base';
import { ColumnsDirective } from './columns.directive';
import { AddDialogFieldsDirective } from './adddialogfields.directive';
import { EditDialogFieldsDirective } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective } from './dayworkingtime.directive';
import { WeekWorkingTimesDirective } from './weekworkingtime.directive';
import { HolidaysDirective } from './holidays.directive';
import { EventMarkersDirective } from './eventmarkers.directive';
import * as i0 from "@angular/core";
export const inputs = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowParentDependency', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTaskbarDragAndDrop', 'allowTaskbarOverlap', 'allowUnscheduledTasks', 'autoCalculateDateScheduling', 'autoFocusTasks', 'autoUpdatePredecessorOffset', 'baselineColor', 'baselineTemplate', 'calendarSettings', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'emptyRecordTemplate', 'enableAdaptiveUI', 'enableAutoWbsUpdate', 'enableContextMenu', 'enableCriticalPath', 'enableHover', 'enableHtmlSanitizer', 'enableImmutableMode', 'enableInfiniteTimelineScroll', 'enableMultiTaskbar', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'enableTimelineVirtualization', 'enableUndoRedo', 'enableVirtualMaskRow', 'enableVirtualization', 'enableWBS', 'eventMarkers', 'filterSettings', 'frozenColumns', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'loadChildOnDemand', 'loadingIndicator', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'readOnly', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'segmentData', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'showOverAllocation', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'timelineTemplate', 'timezone', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'undoRedoActions', 'undoRedoStepsCount', 'updateOffsetOnTaskbarEdit', 'validateManualTasksOnLinking', 'viewType', 'weekWorkingTime', 'width', 'workUnit', 'workWeek', 'zoomingLevels'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforeDataBound', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick', 'dataSourceChange'];
export const twoWays = ['dataSource'];
/**
 * `ejs-gantt` represents the Angular Gantt Component.
 * ```html
 * <ejs-gantt [dataSource]='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
let GanttComponent = class GanttComponent extends Gantt {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['columns', 'addDialogFields', 'editDialogFields', 'dayWorkingTime', 'weekWorkingTime', 'holidays', 'eventMarkers'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('GanttFilter');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttSelection');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttSort');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttReorder');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttEdit');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttDayMarkers');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttToolbar');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttContextMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttRowDD');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttColumnMenu');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttPdfExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttVirtualScroll');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttCriticalPath');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttUndoRedo');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('GanttFreeze');
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
        if (this.childAddDialogFields) {
            this.tagObjects[1].instance = this.childAddDialogFields;
        }
        if (this.childEditDialogFields) {
            this.tagObjects[2].instance = this.childEditDialogFields;
        }
        if (this.childDayWorkingTime) {
            this.tagObjects[3].instance = this.childDayWorkingTime;
        }
        if (this.childWeekWorkingTime) {
            this.tagObjects[4].instance = this.childWeekWorkingTime;
        }
        if (this.childHolidays) {
            this.tagObjects[5].instance = this.childHolidays;
        }
        if (this.childEventMarkers) {
            this.tagObjects[6].instance = this.childEventMarkers;
        }
        this.context.ngAfterContentChecked(this);
    }
};
GanttComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GanttComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
GanttComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: GanttComponent, selector: "ejs-gantt", inputs: { addDialogFields: "addDialogFields", allowExcelExport: "allowExcelExport", allowFiltering: "allowFiltering", allowKeyboard: "allowKeyboard", allowParentDependency: "allowParentDependency", allowPdfExport: "allowPdfExport", allowReordering: "allowReordering", allowResizing: "allowResizing", allowRowDragAndDrop: "allowRowDragAndDrop", allowSelection: "allowSelection", allowSorting: "allowSorting", allowTaskbarDragAndDrop: "allowTaskbarDragAndDrop", allowTaskbarOverlap: "allowTaskbarOverlap", allowUnscheduledTasks: "allowUnscheduledTasks", autoCalculateDateScheduling: "autoCalculateDateScheduling", autoFocusTasks: "autoFocusTasks", autoUpdatePredecessorOffset: "autoUpdatePredecessorOffset", baselineColor: "baselineColor", baselineTemplate: "baselineTemplate", calendarSettings: "calendarSettings", collapseAllParentTasks: "collapseAllParentTasks", columnMenuItems: "columnMenuItems", columns: "columns", connectorLineBackground: "connectorLineBackground", connectorLineWidth: "connectorLineWidth", contextMenuItems: "contextMenuItems", dataSource: "dataSource", dateFormat: "dateFormat", dayWorkingTime: "dayWorkingTime", disableHtmlEncode: "disableHtmlEncode", durationUnit: "durationUnit", editDialogFields: "editDialogFields", editSettings: "editSettings", emptyRecordTemplate: "emptyRecordTemplate", enableAdaptiveUI: "enableAdaptiveUI", enableAutoWbsUpdate: "enableAutoWbsUpdate", enableContextMenu: "enableContextMenu", enableCriticalPath: "enableCriticalPath", enableHover: "enableHover", enableHtmlSanitizer: "enableHtmlSanitizer", enableImmutableMode: "enableImmutableMode", enableInfiniteTimelineScroll: "enableInfiniteTimelineScroll", enableMultiTaskbar: "enableMultiTaskbar", enablePersistence: "enablePersistence", enablePredecessorValidation: "enablePredecessorValidation", enableRtl: "enableRtl", enableTimelineVirtualization: "enableTimelineVirtualization", enableUndoRedo: "enableUndoRedo", enableVirtualMaskRow: "enableVirtualMaskRow", enableVirtualization: "enableVirtualization", enableWBS: "enableWBS", eventMarkers: "eventMarkers", filterSettings: "filterSettings", frozenColumns: "frozenColumns", gridLines: "gridLines", height: "height", highlightWeekends: "highlightWeekends", holidays: "holidays", includeWeekend: "includeWeekend", labelSettings: "labelSettings", loadChildOnDemand: "loadChildOnDemand", loadingIndicator: "loadingIndicator", locale: "locale", milestoneTemplate: "milestoneTemplate", parentTaskbarTemplate: "parentTaskbarTemplate", projectEndDate: "projectEndDate", projectStartDate: "projectStartDate", query: "query", readOnly: "readOnly", renderBaseline: "renderBaseline", resourceFields: "resourceFields", resourceIDMapping: "resourceIDMapping", resourceNameMapping: "resourceNameMapping", resources: "resources", rowHeight: "rowHeight", searchSettings: "searchSettings", segmentData: "segmentData", selectedRowIndex: "selectedRowIndex", selectionSettings: "selectionSettings", showColumnMenu: "showColumnMenu", showInlineNotes: "showInlineNotes", showOverAllocation: "showOverAllocation", sortSettings: "sortSettings", splitterSettings: "splitterSettings", taskFields: "taskFields", taskMode: "taskMode", taskType: "taskType", taskbarHeight: "taskbarHeight", taskbarTemplate: "taskbarTemplate", timelineSettings: "timelineSettings", timelineTemplate: "timelineTemplate", timezone: "timezone", toolbar: "toolbar", tooltipSettings: "tooltipSettings", treeColumnIndex: "treeColumnIndex", undoRedoActions: "undoRedoActions", undoRedoStepsCount: "undoRedoStepsCount", updateOffsetOnTaskbarEdit: "updateOffsetOnTaskbarEdit", validateManualTasksOnLinking: "validateManualTasksOnLinking", viewType: "viewType", weekWorkingTime: "weekWorkingTime", width: "width", workUnit: "workUnit", workWeek: "workWeek", zoomingLevels: "zoomingLevels" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforeDataBound: "beforeDataBound", beforeExcelExport: "beforeExcelExport", beforePdfExport: "beforePdfExport", beforeTooltipRender: "beforeTooltipRender", cellDeselected: "cellDeselected", cellDeselecting: "cellDeselecting", cellEdit: "cellEdit", cellSave: "cellSave", cellSelected: "cellSelected", cellSelecting: "cellSelecting", collapsed: "collapsed", collapsing: "collapsing", columnDrag: "columnDrag", columnDragStart: "columnDragStart", columnDrop: "columnDrop", columnMenuClick: "columnMenuClick", columnMenuOpen: "columnMenuOpen", contextMenuClick: "contextMenuClick", contextMenuOpen: "contextMenuOpen", created: "created", dataBound: "dataBound", dataSourceChanged: "dataSourceChanged", dataStateChange: "dataStateChange", destroyed: "destroyed", endEdit: "endEdit", excelExportComplete: "excelExportComplete", excelHeaderQueryCellInfo: "excelHeaderQueryCellInfo", excelQueryCellInfo: "excelQueryCellInfo", expanded: "expanded", expanding: "expanding", headerCellInfo: "headerCellInfo", load: "load", onMouseMove: "onMouseMove", onTaskbarClick: "onTaskbarClick", pdfColumnHeaderQueryCellInfo: "pdfColumnHeaderQueryCellInfo", pdfExportComplete: "pdfExportComplete", pdfQueryCellInfo: "pdfQueryCellInfo", pdfQueryTaskbarInfo: "pdfQueryTaskbarInfo", pdfQueryTimelineCellInfo: "pdfQueryTimelineCellInfo", queryCellInfo: "queryCellInfo", queryTaskbarInfo: "queryTaskbarInfo", recordDoubleClick: "recordDoubleClick", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", rowDataBound: "rowDataBound", rowDeselected: "rowDeselected", rowDeselecting: "rowDeselecting", rowDrag: "rowDrag", rowDragStart: "rowDragStart", rowDragStartHelper: "rowDragStartHelper", rowDrop: "rowDrop", rowSelected: "rowSelected", rowSelecting: "rowSelecting", splitterResizeStart: "splitterResizeStart", splitterResized: "splitterResized", splitterResizing: "splitterResizing", taskbarEdited: "taskbarEdited", taskbarEditing: "taskbarEditing", toolbarClick: "toolbarClick", dataSourceChange: "dataSourceChange" }, queries: [{ propertyName: "parentTaskbarTemplate", first: true, predicate: ["parentTaskbarTemplate"], descendants: true }, { propertyName: "timelineTemplate", first: true, predicate: ["timelineTemplate"], descendants: true }, { propertyName: "milestoneTemplate", first: true, predicate: ["milestoneTemplate"], descendants: true }, { propertyName: "baselineTemplate", first: true, predicate: ["baselineTemplate"], descendants: true }, { propertyName: "taskbarTemplate", first: true, predicate: ["taskbarTemplate"], descendants: true }, { propertyName: "editTemplate", first: true, predicate: ["editTemplate"], descendants: true }, { propertyName: "labelSettings_rightLabel", first: true, predicate: ["labelSettingsRightLabel"], descendants: true }, { propertyName: "labelSettings_leftLabel", first: true, predicate: ["labelSettingsLeftLabel"], descendants: true }, { propertyName: "labelSettings_taskLabel", first: true, predicate: ["labelSettingsTaskLabel"], descendants: true }, { propertyName: "tooltipSettings_taskbar", first: true, predicate: ["tooltipSettingsTaskbar"], descendants: true }, { propertyName: "tooltipSettings_baseline", first: true, predicate: ["tooltipSettingsBaseline"], descendants: true }, { propertyName: "tooltipSettings_connectorLine", first: true, predicate: ["tooltipSettingsConnectorLine"], descendants: true }, { propertyName: "tooltipSettings_editing", first: true, predicate: ["tooltipSettingsEditing"], descendants: true }, { propertyName: "tooltipSettings_timeline", first: true, predicate: ["tooltipSettingsTimeline"], descendants: true }, { propertyName: "filter_itemTemplate", first: true, predicate: ["filterItemTemplate"], descendants: true }, { propertyName: "filterTemplate", first: true, predicate: ["filterTemplate"], descendants: true }, { propertyName: "emptyRecordTemplate", first: true, predicate: ["emptyRecordTemplate"], descendants: true }, { propertyName: "childColumns", first: true, predicate: ColumnsDirective, descendants: true }, { propertyName: "childAddDialogFields", first: true, predicate: AddDialogFieldsDirective, descendants: true }, { propertyName: "childEditDialogFields", first: true, predicate: EditDialogFieldsDirective, descendants: true }, { propertyName: "childDayWorkingTime", first: true, predicate: DayWorkingTimeCollectionDirective, descendants: true }, { propertyName: "childWeekWorkingTime", first: true, predicate: WeekWorkingTimesDirective, descendants: true }, { propertyName: "childHolidays", first: true, predicate: HolidaysDirective, descendants: true }, { propertyName: "childEventMarkers", first: true, predicate: EventMarkersDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], GanttComponent.prototype, "parentTaskbarTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "timelineTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "milestoneTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "baselineTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "taskbarTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "editTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_rightLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_leftLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "labelSettings_taskLabel", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_taskbar", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_baseline", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_connectorLine", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_editing", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "tooltipSettings_timeline", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "filter_itemTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "filterTemplate", void 0);
__decorate([
    Template()
], GanttComponent.prototype, "emptyRecordTemplate", void 0);
GanttComponent = __decorate([
    ComponentMixins([ComponentBase])
], GanttComponent);
export { GanttComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GanttComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-gantt',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childColumns: new ContentChild(ColumnsDirective),
                        childAddDialogFields: new ContentChild(AddDialogFieldsDirective),
                        childEditDialogFields: new ContentChild(EditDialogFieldsDirective),
                        childDayWorkingTime: new ContentChild(DayWorkingTimeCollectionDirective),
                        childWeekWorkingTime: new ContentChild(WeekWorkingTimesDirective),
                        childHolidays: new ContentChild(HolidaysDirective),
                        childEventMarkers: new ContentChild(EventMarkersDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { parentTaskbarTemplate: [{
                type: ContentChild,
                args: ['parentTaskbarTemplate']
            }], timelineTemplate: [{
                type: ContentChild,
                args: ['timelineTemplate']
            }], milestoneTemplate: [{
                type: ContentChild,
                args: ['milestoneTemplate']
            }], baselineTemplate: [{
                type: ContentChild,
                args: ['baselineTemplate']
            }], taskbarTemplate: [{
                type: ContentChild,
                args: ['taskbarTemplate']
            }], editTemplate: [{
                type: ContentChild,
                args: ['editTemplate']
            }], labelSettings_rightLabel: [{
                type: ContentChild,
                args: ['labelSettingsRightLabel']
            }], labelSettings_leftLabel: [{
                type: ContentChild,
                args: ['labelSettingsLeftLabel']
            }], labelSettings_taskLabel: [{
                type: ContentChild,
                args: ['labelSettingsTaskLabel']
            }], tooltipSettings_taskbar: [{
                type: ContentChild,
                args: ['tooltipSettingsTaskbar']
            }], tooltipSettings_baseline: [{
                type: ContentChild,
                args: ['tooltipSettingsBaseline']
            }], tooltipSettings_connectorLine: [{
                type: ContentChild,
                args: ['tooltipSettingsConnectorLine']
            }], tooltipSettings_editing: [{
                type: ContentChild,
                args: ['tooltipSettingsEditing']
            }], tooltipSettings_timeline: [{
                type: ContentChild,
                args: ['tooltipSettingsTimeline']
            }], filter_itemTemplate: [{
                type: ContentChild,
                args: ['filterItemTemplate']
            }], filterTemplate: [{
                type: ContentChild,
                args: ['filterTemplate']
            }], emptyRecordTemplate: [{
                type: ContentChild,
                args: ['emptyRecordTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FudHQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dhbnR0L2dhbnR0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0UsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWpFLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLGlCQUFpQixFQUFDLGtCQUFrQixFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyx1QkFBdUIsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxlQUFlLEVBQUMscUJBQXFCLEVBQUMsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLHlCQUF5QixFQUFDLHFCQUFxQixFQUFDLHVCQUF1QixFQUFDLDZCQUE2QixFQUFDLGdCQUFnQixFQUFDLDZCQUE2QixFQUFD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O2dCQUsvQix3QkFBd0I7c0JBRjlCLFlBQVk7dUJBQUMseUJBQXlCO2dCQUtoQyxtQkFBbUI7c0JBRnpCLFlBQVk7dUJBQUMsb0JBQW9CO2dCQUszQixjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjtnQkFjdkIsbUJBQW1CO3NCQUZ6QixZQUFZO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IEdhbnR0IH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWdhbnR0JztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBZGREaWFsb2dGaWVsZHNEaXJlY3RpdmUgfSBmcm9tICcuL2FkZGRpYWxvZ2ZpZWxkcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRWRpdERpYWxvZ0ZpZWxkc0RpcmVjdGl2ZSB9IGZyb20gJy4vZWRpdGRpYWxvZ2ZpZWxkcy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRGF5V29ya2luZ1RpbWVDb2xsZWN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9kYXl3b3JraW5ndGltZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgV2Vla1dvcmtpbmdUaW1lc0RpcmVjdGl2ZSB9IGZyb20gJy4vd2Vla3dvcmtpbmd0aW1lLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIb2xpZGF5c0RpcmVjdGl2ZSB9IGZyb20gJy4vaG9saWRheXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEV2ZW50TWFya2Vyc0RpcmVjdGl2ZSB9IGZyb20gJy4vZXZlbnRtYXJrZXJzLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydhZGREaWFsb2dGaWVsZHMnLCdhbGxvd0V4Y2VsRXhwb3J0JywnYWxsb3dGaWx0ZXJpbmcnLCdhbGxvd0tleWJvYXJkJywnYWxsb3dQYXJlbnREZXBlbmRlbmN5JywnYWxsb3dQZGZFeHBvcnQnLCdhbGxvd1Jlb3JkZXJpbmcnLCdhbGxvd1Jlc2l6aW5nJywnYWxsb3dSb3dEcmFnQW5kRHJvcCcsJ2FsbG93U2VsZWN0aW9uJywnYWxsb3dTb3J0aW5nJywnYWxsb3dUYXNrYmFyRHJhZ0FuZERyb3AnLCdhbGxvd1Rhc2tiYXJPdmVybGFwJywnYWxsb3dVbnNjaGVkdWxlZFRhc2tzJywnYXV0b0NhbGN1bGF0ZURhdGVTY2hlZHVsaW5nJywnYXV0b0ZvY3VzVGFza3MnLCdhdXRvVXBkYXRlUHJlZGVjZXNzb3JPZmZzZXQnLCdiYXNlbGluZUNvbG9yJywnYmFzZWxpbmVUZW1wbGF0ZScsJ2NhbGVuZGFyU2V0dGluZ3MnLCdjb2xsYXBzZUFsbFBhcmVudFRhc2tzJywnY29sdW1uTWVudUl0ZW1zJywnY29sdW1ucycsJ2Nvbm5lY3RvckxpbmVCYWNrZ3JvdW5kJywnY29ubmVjdG9yTGluZVdpZHRoJywnY29udGV4dE1lbnVJdGVtcycsJ2RhdGFTb3VyY2UnLCdkYXRlRm9ybWF0JywnZGF5V29ya2luZ1RpbWUnLCdkaXNhYmxlSHRtbEVuY29kZScsJ2R1cmF0aW9uVW5pdCcsJ2VkaXREaWFsb2dGaWVsZHMnLCdlZGl0U2V0dGluZ3MnLCdlbXB0eVJlY29yZFRlbXBsYXRlJywnZW5hYmxlQWRhcHRpdmVVSScsJ2VuYWJsZUF1dG9XYnNVcGRhdGUnLCdlbmFibGVDb250ZXh0TWVudScsJ2VuYWJsZUNyaXRpY2FsUGF0aCcsJ2VuYWJsZUhvdmVyJywnZW5hYmxlSHRtbFNhbml0aXplcicsJ2VuYWJsZUltbXV0YWJsZU1vZGUnLCdlbmFibGVJbmZpbml0ZVRpbWVsaW5lU2Nyb2xsJywnZW5hYmxlTXVsdGlUYXNrYmFyJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVQcmVkZWNlc3NvclZhbGlkYXRpb24nLCdlbmFibGVSdGwnLCdlbmFibGVUaW1lbGluZVZpcnR1YWxpemF0aW9uJywnZW5hYmxlVW5kb1JlZG8nLCdlbmFibGVWaXJ0dWFsTWFza1JvdycsJ2VuYWJsZVZpcnR1YWxpemF0aW9uJywnZW5hYmxlV0JTJywnZXZlbnRNYXJrZXJzJywnZmlsdGVyU2V0dGluZ3MnLCdmcm96ZW5Db2x1bW5zJywnZ3JpZExpbmVzJywnaGVpZ2h0JywnaGlnaGxpZ2h0V2Vla2VuZHMnLCdob2xpZGF5cycsJ2luY2x1ZGVXZWVrZW5kJywnbGFiZWxTZXR0aW5ncycsJ2xvYWRDaGlsZE9uRGVtYW5kJywnbG9hZGluZ0luZGljYXRvcicsJ2xvY2FsZScsJ21pbGVzdG9uZVRlbXBsYXRlJywncGFyZW50VGFza2JhclRlbXBsYXRlJywncHJvamVjdEVuZERhdGUnLCdwcm9qZWN0U3RhcnREYXRlJywncXVlcnknLCdyZWFkT25seScsJ3JlbmRlckJhc2VsaW5lJywncmVzb3VyY2VGaWVsZHMnLCdyZXNvdXJjZUlETWFwcGluZycsJ3Jlc291cmNlTmFtZU1hcHBpbmcnLCdyZXNvdXJjZXMnLCdyb3dIZWlnaHQnLCdzZWFyY2hTZXR0aW5ncycsJ3NlZ21lbnREYXRhJywnc2VsZWN0ZWRSb3dJbmRleCcsJ3NlbGVjdGlvblNldHRpbmdzJywnc2hvd0NvbHVtbk1lbnUnLCdzaG93SW5saW5lTm90ZXMnLCdzaG93T3ZlckFsbG9jYXRpb24nLCdzb3J0U2V0dGluZ3MnLCdzcGxpdHRlclNldHRpbmdzJywndGFza0ZpZWxkcycsJ3Rhc2tNb2RlJywndGFza1R5cGUnLCd0YXNrYmFySGVpZ2h0JywndGFza2JhclRlbXBsYXRlJywndGltZWxpbmVTZXR0aW5ncycsJ3RpbWVsaW5lVGVtcGxhdGUnLCd0aW1lem9uZScsJ3Rvb2xiYXInLCd0b29sdGlwU2V0dGluZ3MnLCd0cmVlQ29sdW1uSW5kZXgnLCd1bmRvUmVkb0FjdGlvbnMnLCd1bmRvUmVkb1N0ZXBzQ291bnQnLCd1cGRhdGVPZmZzZXRPblRhc2tiYXJFZGl0JywndmFsaWRhdGVNYW51YWxUYXNrc09uTGlua2luZycsJ3ZpZXdUeXBlJywnd2Vla1dvcmtpbmdUaW1lJywnd2lkdGgnLCd3b3JrVW5pdCcsJ3dvcmtXZWVrJywnem9vbWluZ0xldmVscyddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhY3Rpb25CZWdpbicsJ2FjdGlvbkNvbXBsZXRlJywnYWN0aW9uRmFpbHVyZScsJ2JlZm9yZURhdGFCb3VuZCcsJ2JlZm9yZUV4Y2VsRXhwb3J0JywnYmVmb3JlUGRmRXhwb3J0JywnYmVmb3JlVG9vbHRpcFJlbmRlcicsJ2NlbGxEZXNlbGVjdGVkJywnY2VsbERlc2VsZWN0aW5nJywnY2VsbEVkaXQnLCdjZWxsU2F2ZScsJ2NlbGxTZWxlY3RlZCcsJ2NlbGxTZWxlY3RpbmcnLCdjb2xsYXBzZWQnLCdjb2xsYXBzaW5nJywnY29sdW1uRHJhZycsJ2NvbHVtbkRyYWdTdGFydCcsJ2NvbHVtbkRyb3AnLCdjb2x1bW5NZW51Q2xpY2snLCdjb2x1bW5NZW51T3BlbicsJ2NvbnRleHRNZW51Q2xpY2snLCdjb250ZXh0TWVudU9wZW4nLCdjcmVhdGVkJywnZGF0YUJvdW5kJywnZGF0YVNvdXJjZUNoYW5nZWQnLCdkYXRhU3RhdGVDaGFuZ2UnLCdkZXN0cm95ZWQnLCdlbmRFZGl0JywnZXhjZWxFeHBvcnRDb21wbGV0ZScsJ2V4Y2VsSGVhZGVyUXVlcnlDZWxsSW5mbycsJ2V4Y2VsUXVlcnlDZWxsSW5mbycsJ2V4cGFuZGVkJywnZXhwYW5kaW5nJywnaGVhZGVyQ2VsbEluZm8nLCdsb2FkJywnb25Nb3VzZU1vdmUnLCdvblRhc2tiYXJDbGljaycsJ3BkZkNvbHVtbkhlYWRlclF1ZXJ5Q2VsbEluZm8nLCdwZGZFeHBvcnRDb21wbGV0ZScsJ3BkZlF1ZXJ5Q2VsbEluZm8nLCdwZGZRdWVyeVRhc2tiYXJJbmZvJywncGRmUXVlcnlUaW1lbGluZUNlbGxJbmZvJywncXVlcnlDZWxsSW5mbycsJ3F1ZXJ5VGFza2JhckluZm8nLCdyZWNvcmREb3VibGVDbGljaycsJ3Jlc2l6ZVN0YXJ0JywncmVzaXplU3RvcCcsJ3Jlc2l6aW5nJywncm93RGF0YUJvdW5kJywncm93RGVzZWxlY3RlZCcsJ3Jvd0Rlc2VsZWN0aW5nJywncm93RHJhZycsJ3Jvd0RyYWdTdGFydCcsJ3Jvd0RyYWdTdGFydEhlbHBlcicsJ3Jvd0Ryb3AnLCdyb3dTZWxlY3RlZCcsJ3Jvd1NlbGVjdGluZycsJ3NwbGl0dGVyUmVzaXplU3RhcnQnLCdzcGxpdHRlclJlc2l6ZWQnLCdzcGxpdHRlclJlc2l6aW5nJywndGFza2JhckVkaXRlZCcsJ3Rhc2tiYXJFZGl0aW5nJywndG9vbGJhckNsaWNrJywnZGF0YVNvdXJjZUNoYW5nZSddO1xuZXhwb3J0IGNvbnN0IHR3b1dheXM6IHN0cmluZ1tdID0gWydkYXRhU291cmNlJ107XG5cbi8qKlxuICogYGVqcy1nYW50dGAgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBHYW50dCBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWdhbnR0IFtkYXRhU291cmNlXT0nZGF0YScgYWxsb3dTZWxlY3Rpb249J3RydWUnIGFsbG93U29ydGluZz0ndHJ1ZSc+PC9lanMtZ2FudHQ+XG4gKiBgYGBcbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdlanMtZ2FudHQnLFxuICAgIGlucHV0czogaW5wdXRzLFxuICAgIG91dHB1dHM6IG91dHB1dHMsXG4gICAgdGVtcGxhdGU6ICcnLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRDb2x1bW5zOiBuZXcgQ29udGVudENoaWxkKENvbHVtbnNEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRBZGREaWFsb2dGaWVsZHM6IG5ldyBDb250ZW50Q2hpbGQoQWRkRGlhbG9nRmllbGRzRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkRWRpdERpYWxvZ0ZpZWxkczogbmV3IENvbnRlbnRDaGlsZChFZGl0RGlhbG9nRmllbGRzRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkRGF5V29ya2luZ1RpbWU6IG5ldyBDb250ZW50Q2hpbGQoRGF5V29ya2luZ1RpbWVDb2xsZWN0aW9uRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkV2Vla1dvcmtpbmdUaW1lOiBuZXcgQ29udGVudENoaWxkKFdlZWtXb3JraW5nVGltZXNEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRIb2xpZGF5czogbmV3IENvbnRlbnRDaGlsZChIb2xpZGF5c0RpcmVjdGl2ZSksIFxuICAgICAgICBjaGlsZEV2ZW50TWFya2VyczogbmV3IENvbnRlbnRDaGlsZChFdmVudE1hcmtlcnNEaXJlY3RpdmUpXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIEdhbnR0Q29tcG9uZW50IGV4dGVuZHMgR2FudHQgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0YWN0aW9uQmVnaW46IGFueTtcblx0YWN0aW9uQ29tcGxldGU6IGFueTtcblx0YWN0aW9uRmFpbHVyZTogYW55O1xuXHRiZWZvcmVEYXRhQm91bmQ6IGFueTtcblx0YmVmb3JlRXhjZWxFeHBvcnQ6IGFueTtcblx0YmVmb3JlUGRmRXhwb3J0OiBhbnk7XG5cdGJlZm9yZVRvb2x0aXBSZW5kZXI6IGFueTtcblx0Y2VsbERlc2VsZWN0ZWQ6IGFueTtcblx0Y2VsbERlc2VsZWN0aW5nOiBhbnk7XG5cdGNlbGxFZGl0OiBhbnk7XG5cdGNlbGxTYXZlOiBhbnk7XG5cdGNlbGxTZWxlY3RlZDogYW55O1xuXHRjZWxsU2VsZWN0aW5nOiBhbnk7XG5cdGNvbGxhcHNlZDogYW55O1xuXHRjb2xsYXBzaW5nOiBhbnk7XG5cdGNvbHVtbkRyYWc6IGFueTtcblx0Y29sdW1uRHJhZ1N0YXJ0OiBhbnk7XG5cdGNvbHVtbkRyb3A6IGFueTtcblx0Y29sdW1uTWVudUNsaWNrOiBhbnk7XG5cdGNvbHVtbk1lbnVPcGVuOiBhbnk7XG5cdGNvbnRleHRNZW51Q2xpY2s6IGFueTtcblx0Y29udGV4dE1lbnVPcGVuOiBhbnk7XG5cdGNyZWF0ZWQ6IGFueTtcblx0ZGF0YUJvdW5kOiBhbnk7XG5cdGRhdGFTb3VyY2VDaGFuZ2VkOiBhbnk7XG5cdGRhdGFTdGF0ZUNoYW5nZTogYW55O1xuXHRkZXN0cm95ZWQ6IGFueTtcblx0ZW5kRWRpdDogYW55O1xuXHRleGNlbEV4cG9ydENvbXBsZXRlOiBhbnk7XG5cdGV4Y2VsSGVhZGVyUXVlcnlDZWxsSW5mbzogYW55O1xuXHRleGNlbFF1ZXJ5Q2VsbEluZm86IGFueTtcblx0ZXhwYW5kZWQ6IGFueTtcblx0ZXhwYW5kaW5nOiBhbnk7XG5cdGhlYWRlckNlbGxJbmZvOiBhbnk7XG5cdGxvYWQ6IGFueTtcblx0b25Nb3VzZU1vdmU6IGFueTtcblx0b25UYXNrYmFyQ2xpY2s6IGFueTtcblx0cGRmQ29sdW1uSGVhZGVyUXVlcnlDZWxsSW5mbzogYW55O1xuXHRwZGZFeHBvcnRDb21wbGV0ZTogYW55O1xuXHRwZGZRdWVyeUNlbGxJbmZvOiBhbnk7XG5cdHBkZlF1ZXJ5VGFza2JhckluZm86IGFueTtcblx0cGRmUXVlcnlUaW1lbGluZUNlbGxJbmZvOiBhbnk7XG5cdHF1ZXJ5Q2VsbEluZm86IGFueTtcblx0cXVlcnlUYXNrYmFySW5mbzogYW55O1xuXHRyZWNvcmREb3VibGVDbGljazogYW55O1xuXHRyZXNpemVTdGFydDogYW55O1xuXHRyZXNpemVTdG9wOiBhbnk7XG5cdHJlc2l6aW5nOiBhbnk7XG5cdHJvd0RhdGFCb3VuZDogYW55O1xuXHRyb3dEZXNlbGVjdGVkOiBhbnk7XG5cdHJvd0Rlc2VsZWN0aW5nOiBhbnk7XG5cdHJvd0RyYWc6IGFueTtcblx0cm93RHJhZ1N0YXJ0OiBhbnk7XG5cdHJvd0RyYWdTdGFydEhlbHBlcjogYW55O1xuXHRyb3dEcm9wOiBhbnk7XG5cdHJvd1NlbGVjdGVkOiBhbnk7XG5cdHJvd1NlbGVjdGluZzogYW55O1xuXHRzcGxpdHRlclJlc2l6ZVN0YXJ0OiBhbnk7XG5cdHNwbGl0dGVyUmVzaXplZDogYW55O1xuXHRzcGxpdHRlclJlc2l6aW5nOiBhbnk7XG5cdHRhc2tiYXJFZGl0ZWQ6IGFueTtcblx0dGFza2JhckVkaXRpbmc6IGFueTtcblx0dG9vbGJhckNsaWNrOiBhbnk7XG5cdHB1YmxpYyBkYXRhU291cmNlQ2hhbmdlOiBhbnk7XG4gICAgcHVibGljIGNoaWxkQ29sdW1uczogUXVlcnlMaXN0PENvbHVtbnNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZEFkZERpYWxvZ0ZpZWxkczogUXVlcnlMaXN0PEFkZERpYWxvZ0ZpZWxkc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIGNoaWxkRWRpdERpYWxvZ0ZpZWxkczogUXVlcnlMaXN0PEVkaXREaWFsb2dGaWVsZHNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZERheVdvcmtpbmdUaW1lOiBRdWVyeUxpc3Q8RGF5V29ya2luZ1RpbWVDb2xsZWN0aW9uRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRXZWVrV29ya2luZ1RpbWU6IFF1ZXJ5TGlzdDxXZWVrV29ya2luZ1RpbWVzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRIb2xpZGF5czogUXVlcnlMaXN0PEhvbGlkYXlzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRFdmVudE1hcmtlcnM6IFF1ZXJ5TGlzdDxFdmVudE1hcmtlcnNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsnY29sdW1ucycsICdhZGREaWFsb2dGaWVsZHMnLCAnZWRpdERpYWxvZ0ZpZWxkcycsICdkYXlXb3JraW5nVGltZScsICd3ZWVrV29ya2luZ1RpbWUnLCAnaG9saWRheXMnLCAnZXZlbnRNYXJrZXJzJ107XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHJlbmRlcmluZyBwYXJlbnQgdGFzayBiYXJzIGluIHRoZSBHYW50dCBjaGFydC4gVGhpcyB0ZW1wbGF0ZSBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgYXBwZWFyYW5jZSBvZiBwYXJlbnQgdGFzayBiYXJzLiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSdnYW50dC9wYXJlbnRUYXNrYmFyVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3BhcmVudFRhc2tiYXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcGFyZW50VGFza2JhclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgdXNlZCB0byByZW5kZXIgY3VzdG9tIEhUTUwgY29udGVudCBpbiB0aW1lbGluZSBjZWxscy4gXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nZ2FudHQvdGltZWxpbmVUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGltZWxpbmVUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGltZWxpbmVUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBEZWZpbmVzIGEgY3VzdG9tIHRlbXBsYXRlIGZvciByZW5kZXJpbmcgbWlsZXN0b25lIHRhc2tzIGluIHRoZSBHYW50dCBjaGFydC4gVGhpcyB0ZW1wbGF0ZSBhbGxvd3MgeW91IHRvIGN1c3RvbWl6ZSB0aGUgYXBwZWFyYW5jZSBvZiBtaWxlc3RvbmUgdGFza3MuIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2dhbnR0L21pbGVzdG9uZVRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdtaWxlc3RvbmVUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgbWlsZXN0b25lVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogLiBcbiAgICAgKiBBY2NlcHRzIGFuIGVsZW1lbnQgSUQgc2VsZWN0b3IsIEhUTUwgc3RyaW5nLCBvciBmdW5jdGlvbiByZXR1cm5pbmcgYHN0cmluZ2Agb3IgYEhUTUxFbGVtZW50YC4gXG4gICAgICogRGVmaW5lcyBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nIGJhc2VsaW5lIGJhcnMgaW4gdGhlIEdhbnR0IGNoYXJ0LlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdiYXNlbGluZVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBiYXNlbGluZVRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFRoZSB0YXNrIGJhciB0ZW1wbGF0ZSB0aGF0IHJlbmRlcnMgY3VzdG9taXplZCBjaGlsZCB0YXNrIGJhcnMgZnJvbSB0aGUgZ2l2ZW4gdGVtcGxhdGUuIFxuICAgICAqIFRoaXMgcHJvcGVydHkgYWxsb3dzIHVzZXJzIHRvIGRlZmluZSBhIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nIGNoaWxkIHRhc2sgYmFycyBpbiB0aGUgR2FudHQgY2hhcnQuIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2dhbnR0L3Rhc2tiYXJUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgndGFza2JhclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0YXNrYmFyVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdlZGl0VGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGVkaXRUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2xhYmVsU2V0dGluZ3NSaWdodExhYmVsJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBsYWJlbFNldHRpbmdzX3JpZ2h0TGFiZWw6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdsYWJlbFNldHRpbmdzTGVmdExhYmVsJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBsYWJlbFNldHRpbmdzX2xlZnRMYWJlbDogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2xhYmVsU2V0dGluZ3NUYXNrTGFiZWwnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGxhYmVsU2V0dGluZ3NfdGFza0xhYmVsOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFNldHRpbmdzVGFza2JhcicpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX3Rhc2tiYXI6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NCYXNlbGluZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX2Jhc2VsaW5lOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndG9vbHRpcFNldHRpbmdzQ29ubmVjdG9yTGluZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdG9vbHRpcFNldHRpbmdzX2Nvbm5lY3RvckxpbmU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0b29sdGlwU2V0dGluZ3NFZGl0aW5nJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0b29sdGlwU2V0dGluZ3NfZWRpdGluZzogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3Rvb2x0aXBTZXR0aW5nc1RpbWVsaW5lJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0b29sdGlwU2V0dGluZ3NfdGltZWxpbmU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdmaWx0ZXJJdGVtVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGZpbHRlcl9pdGVtVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdmaWx0ZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZmlsdGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogRGVmaW5lcyBhIGN1c3RvbSB0ZW1wbGF0ZSB0byBkaXNwbGF5IHdoZW4gdGhlIEdhbnR0IGNoYXJ0IGhhcyBubyByZWNvcmRzLlxuICAgICAqIFxuICAgICAqIFRoaXMgdGVtcGxhdGUgcmVwbGFjZXMgdGhlIGRlZmF1bHQgZW1wdHkgcmVjb3JkIG1lc3NhZ2UgYW5kIGNhbiBpbmNsdWRlIHRleHQsIEhUTUwgZWxlbWVudHMsIG9yIGltYWdlcy5cbiAgICAgKkFjY2VwdHMgZWl0aGVyIGEgdGVtcGxhdGUgc3RyaW5nIG9yIGFuIEhUTUwgZWxlbWVudCBJRC5cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2VtcHR5UmVjb3JkVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGVtcHR5UmVjb3JkVGVtcGxhdGU6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dEZpbHRlcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRTZWxlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0U29ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRSZW9yZGVyJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFJlc2l6ZScpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRFZGl0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dERheU1hcmtlcnMnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0dhbnR0VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRDb250ZXh0TWVudScpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRFeGNlbEV4cG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRSb3dERCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRDb2x1bW5NZW51Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dFBkZkV4cG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRWaXJ0dWFsU2Nyb2xsJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdHYW50dENyaXRpY2FsUGF0aCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRVbmRvUmVkbycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnR2FudHRGcmVlemUnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnRhZ09iamVjdHNbMF0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkQ29sdW1ucztcbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZEFkZERpYWxvZ0ZpZWxkcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzFdLmluc3RhbmNlID0gdGhpcy5jaGlsZEFkZERpYWxvZ0ZpZWxkcztcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkRWRpdERpYWxvZ0ZpZWxkcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzJdLmluc3RhbmNlID0gdGhpcy5jaGlsZEVkaXREaWFsb2dGaWVsZHM7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZERheVdvcmtpbmdUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbM10uaW5zdGFuY2UgPSB0aGlzLmNoaWxkRGF5V29ya2luZ1RpbWU7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZFdlZWtXb3JraW5nVGltZSkge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzRdLmluc3RhbmNlID0gdGhpcy5jaGlsZFdlZWtXb3JraW5nVGltZTtcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkSG9saWRheXMpIHtcbiAgICAgICAgICAgIHRoaXMudGFnT2JqZWN0c1s1XS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRIb2xpZGF5cztcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkRXZlbnRNYXJrZXJzKSB7XG4gICAgICAgICAgICB0aGlzLnRhZ09iamVjdHNbNl0uaW5zdGFuY2UgPSB0aGlzLmNoaWxkRXZlbnRNYXJrZXJzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=