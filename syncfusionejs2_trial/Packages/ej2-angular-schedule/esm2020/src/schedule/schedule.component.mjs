import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Schedule } from '@syncfusion/ej2-schedule';
import { Template } from '@syncfusion/ej2-angular-base';
import { ViewsDirective } from './views.directive';
import { ResourcesDirective } from './resources.directive';
import { HeaderRowsDirective } from './headerrows.directive';
import { ToolbarItemsDirective } from './toolbaritems.directive';
import * as i0 from "@angular/core";
export const inputs = ['agendaDaysCount', 'allowClipboard', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiDrag', 'allowMultiRowSelection', 'allowOverlap', 'allowResizing', 'allowSwiping', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'dateRangeTemplate', 'dayHeaderTemplate', 'editorFooterTemplate', 'editorHeaderTemplate', 'editorTemplate', 'enableAdaptiveUI', 'enableAllDayScroll', 'enableHtmlSanitizer', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'monthHeaderTemplate', 'monthsCount', 'overscanCount', 'prerenderDialogs', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'selectedResource', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'timezone', 'timezoneDataSource', 'toolbarItems', 'views', 'weekRule', 'width', 'workDays', 'workHours'];
export const outputs = ['actionBegin', 'actionComplete', 'actionFailure', 'beforePaste', 'beforePrint', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventDoubleClick', 'eventRendered', 'excelExport', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select', 'tooltipOpen', 'virtualScrollStart', 'virtualScrollStop', 'currentViewChange', 'selectedDateChange'];
export const twoWays = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the Angular Schedule Component.
 * ```html
 * <ejs-schedule></ejs-schedule>
 * ```
 */
let ScheduleComponent = class ScheduleComponent extends Schedule {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['views', 'resources', 'headerRows', 'toolbarItems'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('ScheduleDay');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleWorkWeek');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleMonthAgenda');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineViews');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineMonth');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleTimelineYear');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleResize');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleDragAndDrop');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleExcelExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarExport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('ScheduleICalendarImport');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('SchedulePrint');
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
        this.tagObjects[0].instance = this.childViews;
        if (this.childResources) {
            this.tagObjects[1].instance = this.childResources;
        }
        if (this.childHeaderRows) {
            this.tagObjects[2].instance = this.childHeaderRows;
        }
        if (this.childToolbarItems) {
            this.tagObjects[3].instance = this.childToolbarItems;
        }
        this.context.ngAfterContentChecked(this);
    }
};
ScheduleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ScheduleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ScheduleComponent, selector: "ejs-schedule", inputs: { agendaDaysCount: "agendaDaysCount", allowClipboard: "allowClipboard", allowDragAndDrop: "allowDragAndDrop", allowInline: "allowInline", allowKeyboardInteraction: "allowKeyboardInteraction", allowMultiCellSelection: "allowMultiCellSelection", allowMultiDrag: "allowMultiDrag", allowMultiRowSelection: "allowMultiRowSelection", allowOverlap: "allowOverlap", allowResizing: "allowResizing", allowSwiping: "allowSwiping", calendarMode: "calendarMode", cellHeaderTemplate: "cellHeaderTemplate", cellTemplate: "cellTemplate", cssClass: "cssClass", currentView: "currentView", dateFormat: "dateFormat", dateHeaderTemplate: "dateHeaderTemplate", dateRangeTemplate: "dateRangeTemplate", dayHeaderTemplate: "dayHeaderTemplate", editorFooterTemplate: "editorFooterTemplate", editorHeaderTemplate: "editorHeaderTemplate", editorTemplate: "editorTemplate", enableAdaptiveUI: "enableAdaptiveUI", enableAllDayScroll: "enableAllDayScroll", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRecurrenceValidation: "enableRecurrenceValidation", enableRtl: "enableRtl", endHour: "endHour", eventDragArea: "eventDragArea", eventSettings: "eventSettings", firstDayOfWeek: "firstDayOfWeek", firstMonthOfYear: "firstMonthOfYear", group: "group", headerIndentTemplate: "headerIndentTemplate", headerRows: "headerRows", height: "height", hideEmptyAgendaDays: "hideEmptyAgendaDays", locale: "locale", maxDate: "maxDate", minDate: "minDate", monthHeaderTemplate: "monthHeaderTemplate", monthsCount: "monthsCount", overscanCount: "overscanCount", prerenderDialogs: "prerenderDialogs", quickInfoOnSelectionEnd: "quickInfoOnSelectionEnd", quickInfoTemplates: "quickInfoTemplates", readonly: "readonly", resourceHeaderTemplate: "resourceHeaderTemplate", resources: "resources", rowAutoHeight: "rowAutoHeight", selectedDate: "selectedDate", selectedResource: "selectedResource", showHeaderBar: "showHeaderBar", showQuickInfo: "showQuickInfo", showTimeIndicator: "showTimeIndicator", showWeekNumber: "showWeekNumber", showWeekend: "showWeekend", startHour: "startHour", timeFormat: "timeFormat", timeScale: "timeScale", timezone: "timezone", timezoneDataSource: "timezoneDataSource", toolbarItems: "toolbarItems", views: "views", weekRule: "weekRule", width: "width", workDays: "workDays", workHours: "workHours" }, outputs: { actionBegin: "actionBegin", actionComplete: "actionComplete", actionFailure: "actionFailure", beforePaste: "beforePaste", beforePrint: "beforePrint", cellClick: "cellClick", cellDoubleClick: "cellDoubleClick", created: "created", dataBinding: "dataBinding", dataBound: "dataBound", destroyed: "destroyed", drag: "drag", dragStart: "dragStart", dragStop: "dragStop", eventClick: "eventClick", eventDoubleClick: "eventDoubleClick", eventRendered: "eventRendered", excelExport: "excelExport", hover: "hover", moreEventsClick: "moreEventsClick", navigating: "navigating", popupClose: "popupClose", popupOpen: "popupOpen", renderCell: "renderCell", resizeStart: "resizeStart", resizeStop: "resizeStop", resizing: "resizing", select: "select", tooltipOpen: "tooltipOpen", virtualScrollStart: "virtualScrollStart", virtualScrollStop: "virtualScrollStop", currentViewChange: "currentViewChange", selectedDateChange: "selectedDateChange" }, queries: [{ propertyName: "dateHeaderTemplate", first: true, predicate: ["dateHeaderTemplate"], descendants: true }, { propertyName: "dateRangeTemplate", first: true, predicate: ["dateRangeTemplate"], descendants: true }, { propertyName: "dayHeaderTemplate", first: true, predicate: ["dayHeaderTemplate"], descendants: true }, { propertyName: "cellTemplate", first: true, predicate: ["cellTemplate"], descendants: true }, { propertyName: "cellHeaderTemplate", first: true, predicate: ["cellHeaderTemplate"], descendants: true }, { propertyName: "eventSettings_tooltipTemplate", first: true, predicate: ["eventSettingsTooltipTemplate"], descendants: true }, { propertyName: "eventSettings_template", first: true, predicate: ["eventSettingsTemplate"], descendants: true }, { propertyName: "editorTemplate", first: true, predicate: ["editorTemplate"], descendants: true }, { propertyName: "editorHeaderTemplate", first: true, predicate: ["editorHeaderTemplate"], descendants: true }, { propertyName: "editorFooterTemplate", first: true, predicate: ["editorFooterTemplate"], descendants: true }, { propertyName: "monthHeaderTemplate", first: true, predicate: ["monthHeaderTemplate"], descendants: true }, { propertyName: "timeScale_minorSlotTemplate", first: true, predicate: ["timeScaleMinorSlotTemplate"], descendants: true }, { propertyName: "timeScale_majorSlotTemplate", first: true, predicate: ["timeScaleMajorSlotTemplate"], descendants: true }, { propertyName: "resourceHeaderTemplate", first: true, predicate: ["resourceHeaderTemplate"], descendants: true }, { propertyName: "headerIndentTemplate", first: true, predicate: ["headerIndentTemplate"], descendants: true }, { propertyName: "quickInfoTemplates_header", first: true, predicate: ["quickInfoTemplatesHeader"], descendants: true }, { propertyName: "quickInfoTemplates_content", first: true, predicate: ["quickInfoTemplatesContent"], descendants: true }, { propertyName: "quickInfoTemplates_footer", first: true, predicate: ["quickInfoTemplatesFooter"], descendants: true }, { propertyName: "group_headerTooltipTemplate", first: true, predicate: ["groupHeaderTooltipTemplate"], descendants: true }, { propertyName: "childViews", first: true, predicate: ViewsDirective, descendants: true }, { propertyName: "childResources", first: true, predicate: ResourcesDirective, descendants: true }, { propertyName: "childHeaderRows", first: true, predicate: HeaderRowsDirective, descendants: true }, { propertyName: "childToolbarItems", first: true, predicate: ToolbarItemsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: '', isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ScheduleComponent.prototype, "dateHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "dateRangeTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "dayHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "cellHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_tooltipTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "eventSettings_template", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "editorTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "editorHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "editorFooterTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "monthHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_minorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "timeScale_majorSlotTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "resourceHeaderTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "headerIndentTemplate", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_header", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_content", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "quickInfoTemplates_footer", void 0);
__decorate([
    Template()
], ScheduleComponent.prototype, "group_headerTooltipTemplate", void 0);
ScheduleComponent = __decorate([
    ComponentMixins([ComponentBase])
], ScheduleComponent);
export { ScheduleComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ScheduleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-schedule',
                    inputs: inputs,
                    outputs: outputs,
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childViews: new ContentChild(ViewsDirective),
                        childResources: new ContentChild(ResourcesDirective),
                        childHeaderRows: new ContentChild(HeaderRowsDirective),
                        childToolbarItems: new ContentChild(ToolbarItemsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { dateHeaderTemplate: [{
                type: ContentChild,
                args: ['dateHeaderTemplate']
            }], dateRangeTemplate: [{
                type: ContentChild,
                args: ['dateRangeTemplate']
            }], dayHeaderTemplate: [{
                type: ContentChild,
                args: ['dayHeaderTemplate']
            }], cellTemplate: [{
                type: ContentChild,
                args: ['cellTemplate']
            }], cellHeaderTemplate: [{
                type: ContentChild,
                args: ['cellHeaderTemplate']
            }], eventSettings_tooltipTemplate: [{
                type: ContentChild,
                args: ['eventSettingsTooltipTemplate']
            }], eventSettings_template: [{
                type: ContentChild,
                args: ['eventSettingsTemplate']
            }], editorTemplate: [{
                type: ContentChild,
                args: ['editorTemplate']
            }], editorHeaderTemplate: [{
                type: ContentChild,
                args: ['editorHeaderTemplate']
            }], editorFooterTemplate: [{
                type: ContentChild,
                args: ['editorFooterTemplate']
            }], monthHeaderTemplate: [{
                type: ContentChild,
                args: ['monthHeaderTemplate']
            }], timeScale_minorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMinorSlotTemplate']
            }], timeScale_majorSlotTemplate: [{
                type: ContentChild,
                args: ['timeScaleMajorSlotTemplate']
            }], resourceHeaderTemplate: [{
                type: ContentChild,
                args: ['resourceHeaderTemplate']
            }], headerIndentTemplate: [{
                type: ContentChild,
                args: ['headerIndentTemplate']
            }], quickInfoTemplates_header: [{
                type: ContentChild,
                args: ['quickInfoTemplatesHeader']
            }], quickInfoTemplates_content: [{
                type: ContentChild,
                args: ['quickInfoTemplatesContent']
            }], quickInfoTemplates_footer: [{
                type: ContentChild,
                args: ['quickInfoTemplatesFooter']
            }], group_headerTooltipTemplate: [{
                type: ContentChild,
                args: ['groupHeaderTooltipTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NoZWR1bGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjaGVkdWxlL3NjaGVkdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBZ0MsdUJBQXVCLEVBQWlELFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5SixPQUFPLEVBQUUsYUFBYSxFQUErQixlQUFlLEVBQTBCLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzdELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVqRSxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxpQkFBaUIsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVBQUMsMEJBQTBCLEVBQUMseUJBQXlCLEVBQUMsZ0JBQWdCLEVBQUMsd0JBQXdCLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsY0FBYyxFQUFDLG9CQUFvQixFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxzQkFBc0IsRUFBQyxzQkFBc0IsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyw0QkFBNEIsRUFBQyxXQUFXLEVB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QUFnQjtnQkFhdkIsb0JBQW9CO3NCQUYxQixZQUFZO3VCQUFDLHNCQUFzQjtnQkFhN0Isb0JBQW9CO3NCQUYxQixZQUFZO3VCQUFDLHNCQUFzQjtnQkFpQjdCLG1CQUFtQjtzQkFGekIsWUFBWTt1QkFBQyxxQkFBcUI7Z0JBSzVCLDJCQUEyQjtzQkFGakMsWUFBWTt1QkFBQyw0QkFBNEI7Z0JBS25DLDJCQUEyQjtzQkFGakMsWUFBWTt1QkFBQyw0QkFBNEI7Z0JBc0JuQyxzQkFBc0I7c0JBRjVCLFlBQVk7dUJBQUMsd0JBQXdCO2dCQW1CL0Isb0JBQW9CO3NCQUYxQixZQUFZO3VCQUFDLHNCQUFzQjtnQkFLN0IseUJBQXlCO3NCQUYvQixZQUFZO3VCQUFDLDBCQUEwQjtnQkFLakMsMEJBQTBCO3NCQUZoQyxZQUFZO3VCQUFDLDJCQUEyQjtnQkFLbEMseUJBQXlCO3NCQUYvQixZQUFZO3VCQUFDLDBCQUEwQjtnQkFLakMsMkJBQTJCO3NCQUZqQyxZQUFZO3VCQUFDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIFF1ZXJ5TGlzdCwgUmVuZGVyZXIyLCBJbmplY3RvciwgVmFsdWVQcm92aWRlciwgQ29udGVudENoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIENvbXBvbmVudE1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IFNjaGVkdWxlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLXNjaGVkdWxlJztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBWaWV3c0RpcmVjdGl2ZSB9IGZyb20gJy4vdmlld3MuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlc291cmNlc0RpcmVjdGl2ZSB9IGZyb20gJy4vcmVzb3VyY2VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBIZWFkZXJSb3dzRGlyZWN0aXZlIH0gZnJvbSAnLi9oZWFkZXJyb3dzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUb29sYmFySXRlbXNEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2xiYXJpdGVtcy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYWdlbmRhRGF5c0NvdW50JywnYWxsb3dDbGlwYm9hcmQnLCdhbGxvd0RyYWdBbmREcm9wJywnYWxsb3dJbmxpbmUnLCdhbGxvd0tleWJvYXJkSW50ZXJhY3Rpb24nLCdhbGxvd011bHRpQ2VsbFNlbGVjdGlvbicsJ2FsbG93TXVsdGlEcmFnJywnYWxsb3dNdWx0aVJvd1NlbGVjdGlvbicsJ2FsbG93T3ZlcmxhcCcsJ2FsbG93UmVzaXppbmcnLCdhbGxvd1N3aXBpbmcnLCdjYWxlbmRhck1vZGUnLCdjZWxsSGVhZGVyVGVtcGxhdGUnLCdjZWxsVGVtcGxhdGUnLCdjc3NDbGFzcycsJ2N1cnJlbnRWaWV3JywnZGF0ZUZvcm1hdCcsJ2RhdGVIZWFkZXJUZW1wbGF0ZScsJ2RhdGVSYW5nZVRlbXBsYXRlJywnZGF5SGVhZGVyVGVtcGxhdGUnLCdlZGl0b3JGb290ZXJUZW1wbGF0ZScsJ2VkaXRvckhlYWRlclRlbXBsYXRlJywnZWRpdG9yVGVtcGxhdGUnLCdlbmFibGVBZGFwdGl2ZVVJJywnZW5hYmxlQWxsRGF5U2Nyb2xsJywnZW5hYmxlSHRtbFNhbml0aXplcicsJ2VuYWJsZVBlcnNpc3RlbmNlJywnZW5hYmxlUmVjdXJyZW5jZVZhbGlkYXRpb24nLCdlbmFibGVSdGwnLCdlbmRIb3VyJywnZXZlbnREcmFnQXJlYScsJ2V2ZW50U2V0dGluZ3MnLCdmaXJzdERheU9mV2VlaycsJ2ZpcnN0TW9udGhPZlllYXInLCdncm91cCcsJ2hlYWRlckluZGVudFRlbXBsYXRlJywnaGVhZGVyUm93cycsJ2hlaWdodCcsJ2hpZGVFbXB0eUFnZW5kYURheXMnLCdsb2NhbGUnLCdtYXhEYXRlJywnbWluRGF0ZScsJ21vbnRoSGVhZGVyVGVtcGxhdGUnLCdtb250aHNDb3VudCcsJ292ZXJzY2FuQ291bnQnLCdwcmVyZW5kZXJEaWFsb2dzJywncXVpY2tJbmZvT25TZWxlY3Rpb25FbmQnLCdxdWlja0luZm9UZW1wbGF0ZXMnLCdyZWFkb25seScsJ3Jlc291cmNlSGVhZGVyVGVtcGxhdGUnLCdyZXNvdXJjZXMnLCdyb3dBdXRvSGVpZ2h0Jywnc2VsZWN0ZWREYXRlJywnc2VsZWN0ZWRSZXNvdXJjZScsJ3Nob3dIZWFkZXJCYXInLCdzaG93UXVpY2tJbmZvJywnc2hvd1RpbWVJbmRpY2F0b3InLCdzaG93V2Vla051bWJlcicsJ3Nob3dXZWVrZW5kJywnc3RhcnRIb3VyJywndGltZUZvcm1hdCcsJ3RpbWVTY2FsZScsJ3RpbWV6b25lJywndGltZXpvbmVEYXRhU291cmNlJywndG9vbGJhckl0ZW1zJywndmlld3MnLCd3ZWVrUnVsZScsJ3dpZHRoJywnd29ya0RheXMnLCd3b3JrSG91cnMnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnYWN0aW9uQmVnaW4nLCdhY3Rpb25Db21wbGV0ZScsJ2FjdGlvbkZhaWx1cmUnLCdiZWZvcmVQYXN0ZScsJ2JlZm9yZVByaW50JywnY2VsbENsaWNrJywnY2VsbERvdWJsZUNsaWNrJywnY3JlYXRlZCcsJ2RhdGFCaW5kaW5nJywnZGF0YUJvdW5kJywnZGVzdHJveWVkJywnZHJhZycsJ2RyYWdTdGFydCcsJ2RyYWdTdG9wJywnZXZlbnRDbGljaycsJ2V2ZW50RG91YmxlQ2xpY2snLCdldmVudFJlbmRlcmVkJywnZXhjZWxFeHBvcnQnLCdob3ZlcicsJ21vcmVFdmVudHNDbGljaycsJ25hdmlnYXRpbmcnLCdwb3B1cENsb3NlJywncG9wdXBPcGVuJywncmVuZGVyQ2VsbCcsJ3Jlc2l6ZVN0YXJ0JywncmVzaXplU3RvcCcsJ3Jlc2l6aW5nJywnc2VsZWN0JywndG9vbHRpcE9wZW4nLCd2aXJ0dWFsU2Nyb2xsU3RhcnQnLCd2aXJ0dWFsU2Nyb2xsU3RvcCcsJ2N1cnJlbnRWaWV3Q2hhbmdlJywnc2VsZWN0ZWREYXRlQ2hhbmdlJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbJ2N1cnJlbnRWaWV3JywgJ3NlbGVjdGVkRGF0ZSddO1xuXG4vKipcbiAqIGBlai1zY2hlZHVsZWAgcmVwcmVzZW50cyB0aGUgQW5ndWxhciBTY2hlZHVsZSBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLXNjaGVkdWxlPjwvZWpzLXNjaGVkdWxlPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLXNjaGVkdWxlJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiAnJyxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIGNoaWxkVmlld3M6IG5ldyBDb250ZW50Q2hpbGQoVmlld3NEaXJlY3RpdmUpLCBcbiAgICAgICAgY2hpbGRSZXNvdXJjZXM6IG5ldyBDb250ZW50Q2hpbGQoUmVzb3VyY2VzRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkSGVhZGVyUm93czogbmV3IENvbnRlbnRDaGlsZChIZWFkZXJSb3dzRGlyZWN0aXZlKSwgXG4gICAgICAgIGNoaWxkVG9vbGJhckl0ZW1zOiBuZXcgQ29udGVudENoaWxkKFRvb2xiYXJJdGVtc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZV0pXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVDb21wb25lbnQgZXh0ZW5kcyBTY2hlZHVsZSBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRhY3Rpb25CZWdpbjogYW55O1xuXHRhY3Rpb25Db21wbGV0ZTogYW55O1xuXHRhY3Rpb25GYWlsdXJlOiBhbnk7XG5cdGJlZm9yZVBhc3RlOiBhbnk7XG5cdGJlZm9yZVByaW50OiBhbnk7XG5cdGNlbGxDbGljazogYW55O1xuXHRjZWxsRG91YmxlQ2xpY2s6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRkYXRhQmluZGluZzogYW55O1xuXHRkYXRhQm91bmQ6IGFueTtcblx0ZGVzdHJveWVkOiBhbnk7XG5cdGRyYWc6IGFueTtcblx0ZHJhZ1N0YXJ0OiBhbnk7XG5cdGRyYWdTdG9wOiBhbnk7XG5cdGV2ZW50Q2xpY2s6IGFueTtcblx0ZXZlbnREb3VibGVDbGljazogYW55O1xuXHRldmVudFJlbmRlcmVkOiBhbnk7XG5cdGV4Y2VsRXhwb3J0OiBhbnk7XG5cdGhvdmVyOiBhbnk7XG5cdG1vcmVFdmVudHNDbGljazogYW55O1xuXHRuYXZpZ2F0aW5nOiBhbnk7XG5cdHBvcHVwQ2xvc2U6IGFueTtcblx0cG9wdXBPcGVuOiBhbnk7XG5cdHJlbmRlckNlbGw6IGFueTtcblx0cmVzaXplU3RhcnQ6IGFueTtcblx0cmVzaXplU3RvcDogYW55O1xuXHRyZXNpemluZzogYW55O1xuXHRzZWxlY3Q6IGFueTtcblx0dG9vbHRpcE9wZW46IGFueTtcblx0dmlydHVhbFNjcm9sbFN0YXJ0OiBhbnk7XG5cdHZpcnR1YWxTY3JvbGxTdG9wOiBhbnk7XG5cdGN1cnJlbnRWaWV3Q2hhbmdlOiBhbnk7XG5cdHB1YmxpYyBzZWxlY3RlZERhdGVDaGFuZ2U6IGFueTtcbiAgICBwdWJsaWMgY2hpbGRWaWV3czogUXVlcnlMaXN0PFZpZXdzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRSZXNvdXJjZXM6IFF1ZXJ5TGlzdDxSZXNvdXJjZXNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyBjaGlsZEhlYWRlclJvd3M6IFF1ZXJ5TGlzdDxIZWFkZXJSb3dzRGlyZWN0aXZlPjtcbiAgICBwdWJsaWMgY2hpbGRUb29sYmFySXRlbXM6IFF1ZXJ5TGlzdDxUb29sYmFySXRlbXNEaXJlY3RpdmU+O1xuICAgIHB1YmxpYyB0YWdzOiBzdHJpbmdbXSA9IFsndmlld3MnLCAncmVzb3VyY2VzJywgJ2hlYWRlclJvd3MnLCAndG9vbGJhckl0ZW1zJ107XG4gICAgLyoqIFxuICAgICAqIEl0IGFjY2VwdHMgZWl0aGVyIHRoZSBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgYXMgdGVtcGxhdGUgZGVzaWduIGNvbnRlbnQgYW5kIHBhcnNlIGl0IGFwcHJvcHJpYXRlbHkgYmVmb3JlIGRpc3BsYXlpbmcgaXQgb250byBcbiAgICAgKiB0aGUgZGF0ZSBoZWFkZXIgY2VsbHMuIFRoZSBmaWVsZCB0aGF0IGNhbiBiZSBhY2Nlc3NlZCB2aWEgdGhpcyB0ZW1wbGF0ZSBpcyBgZGF0ZWAuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvZGF0ZUhlYWRlclRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZGF0ZUhlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBkYXRlSGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgYWNjZXB0cyBlaXRoZXIgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gY29udGVudCBhbmQgcGFyc2UgaXQgYXBwcm9wcmlhdGVseSBiZWZvcmUgZGlzcGxheWluZyBpdCBvbnRvIHRoZSBoZWFkZXIgZGF0ZSByYW5nZS5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZGF0ZVJhbmdlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGRhdGVSYW5nZVRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIEl0IGFjY2VwdHMgZWl0aGVyIHRoZSBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgYXMgdGVtcGxhdGUgZGVzaWduIGNvbnRlbnQgYW5kIHBhcnNlIGl0IGFwcHJvcHJpYXRlbHkgYmVmb3JlIGRpc3BsYXlpbmcgaXQgb250byBcbiAgICAgKiB0aGUgZGF5IGhlYWRlciBjZWxscy4gVGhpcyB0ZW1wbGF0ZSBpcyBvbmx5IGFwcGxpY2FibGUgZm9yIHllYXIgdmlldyBoZWFkZXIgY2VsbHMuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvZGF5SGVhZGVyVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdkYXlIZWFkZXJUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZGF5SGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGhlIHRlbXBsYXRlIG9wdGlvbiB3aGljaCBpcyB1c2VkIHRvIHJlbmRlciB0aGUgY3VzdG9taXplZCB3b3JrIGNlbGxzIG9uIHRoZSBTY2hlZHVsZS4gSGVyZSwgdGhlIHRlbXBsYXRlIGFjY2VwdHMgZWl0aGVyIFxuICAgICAqICB0aGUgc3RyaW5nIG9yIEhUTUxFbGVtZW50IGFzIHRlbXBsYXRlIGRlc2lnbiBhbmQgdGhlbiB0aGUgcGFyc2VkIGRlc2lnbiBpcyBkaXNwbGF5ZWQgb250byB0aGUgd29yayBjZWxscy4gXG4gICAgICogIFRoZSBmaWVsZHMgYWNjZXNzaWJsZSB2aWEgdGVtcGxhdGUgYXJlIGFzIGZvbGxvd3MuIFxuICAgICAqICogYGRhdGVgOiBSZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBjZWxsLiBcbiAgICAgKiAqIGBncm91cEluZGV4YDogUmV0dXJucyB0aGUgZ3JvdXAgaW5kZXggb2YgdGhlIGNlbGwuIFxuICAgICAqICogYHR5cGVgOiBSZXR1cm5zIHRoZSB0eXBlIG9mIHRoZSB3b3JrIGNlbGwuXG4gICAgICogXG4gICAgICogUmVmZXIgdG8gdGhlIGJlbG93IGNvZGUgc25pcHBldC5cbiAgICAgKlxuICAgICAqeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvY2VsbFRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnY2VsbFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjZWxsVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogSXQgYWNjZXB0cyBlaXRoZXIgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gY29udGVudCBhbmQgcGFyc2UgaXQgYXBwcm9wcmlhdGVseSBiZWZvcmUgZGlzcGxheWluZyBpdCBvbnRvIFxuICAgICAqIHRoZSBtb250aCBkYXRlIGNlbGxzLiBUaGlzIHRlbXBsYXRlIGlzIG9ubHkgYXBwbGljYWJsZSBmb3IgbW9udGggdmlldyBkYXkgY2VsbHMuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvY2VsbEhlYWRlclRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnY2VsbEhlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBjZWxsSGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdldmVudFNldHRpbmdzVG9vbHRpcFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBldmVudFNldHRpbmdzX3Rvb2x0aXBUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2V2ZW50U2V0dGluZ3NUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZXZlbnRTZXR0aW5nc190ZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgdGVtcGxhdGUgb3B0aW9uIHRvIHJlbmRlciB0aGUgY3VzdG9taXplZCBlZGl0b3Igd2luZG93LiBUaGUgZm9ybSBlbGVtZW50cyBkZWZpbmVkIHdpdGhpbiB0aGlzIHRlbXBsYXRlIHNob3VsZCBiZSBhY2NvbXBhbmllZCBcbiAgICAgKiAgd2l0aCBgZS1maWVsZGAgY2xhc3MsIHNvIGFzIHRvIGZldGNoIGFuZCBwcm9jZXNzIGl0IGZyb20gaW50ZXJuYWxseS5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSdzY2hlZHVsZS9lZGl0b3JUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2VkaXRvclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBlZGl0b3JUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgdGVtcGxhdGUgb3B0aW9uIHRvIHJlbmRlciB0aGUgY3VzdG9taXplZCBoZWFkZXIgb2YgdGhlIGVkaXRvciB3aW5kb3cuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2VkaXRvckhlYWRlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBlZGl0b3JIZWFkZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUaGUgdGVtcGxhdGUgb3B0aW9uIHRvIHJlbmRlciB0aGUgY3VzdG9taXplZCBmb290ZXIgb2YgdGhlIGVkaXRvciB3aW5kb3cuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2VkaXRvckZvb3RlclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBlZGl0b3JGb290ZXJUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBJdCBhY2NlcHRzIGVpdGhlciB0aGUgc3RyaW5nIG9yIEhUTUxFbGVtZW50IGFzIHRlbXBsYXRlIGRlc2lnbiBjb250ZW50IGFuZCBwYXJzZSBpdCBhcHByb3ByaWF0ZWx5IGJlZm9yZSBkaXNwbGF5aW5nIGl0IG9udG8gXG4gICAgICogdGhlIG1vbnRoIGhlYWRlciBjZWxscy4gVGhpcyB0ZW1wbGF0ZSBpcyBvbmx5IGFwcGxpY2FibGUgZm9yIHllYXIgdmlldyBoZWFkZXIgY2VsbHMuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvbW9udGhIZWFkZXJUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ21vbnRoSGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIG1vbnRoSGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCd0aW1lU2NhbGVNaW5vclNsb3RUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGltZVNjYWxlX21pbm9yU2xvdFRlbXBsYXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgndGltZVNjYWxlTWFqb3JTbG90VGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHRpbWVTY2FsZV9tYWpvclNsb3RUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUZW1wbGF0ZSBvcHRpb24gdG8gY3VzdG9taXplIHRoZSByZXNvdXJjZSBoZWFkZXIgYmFyLiBIZXJlLCB0aGUgdGVtcGxhdGUgYWNjZXB0cyBlaXRoZXIgXG4gICAgICogIHRoZSBzdHJpbmcgb3IgSFRNTEVsZW1lbnQgYXMgdGVtcGxhdGUgZGVzaWduIGFuZCB0aGVuIHRoZSBwYXJzZWQgZGVzaWduIGlzIGRpc3BsYXllZCBvbnRvIHRoZSByZXNvdXJjZSBoZWFkZXIgY2VsbHMuIFxuICAgICAqIFRoZSBmb2xsb3dpbmcgY2FuIGJlIGFjY2Vzc2libGUgdmlhIHRlbXBsYXRlLiBcbiAgICAgKiAqIGByZXNvdXJjZWAgLSBBbGwgdGhlIHJlc291cmNlIGZpZWxkcy4gXG4gICAgICogKiBgcmVzb3VyY2VEYXRhYCAtIE9iamVjdCBjb2xsZWN0aW9uIG9mIGN1cnJlbnQgcmVzb3VyY2UuXG4gICAgICogXG4gICAgICogUmVmZXIgdG8gdGhlIGJlbG93IGNvZGUgc25pcHBldC5cbiAgICAgKlxuICAgICAqeyUgY29kZUJsb2NrIHNyYz0nc2NoZWR1bGUvcmVzb3VyY2VIZWFkZXJUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3Jlc291cmNlSGVhZGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHJlc291cmNlSGVhZGVyVGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogVGVtcGxhdGUgb3B0aW9uIHRvIGN1c3RvbWl6ZSB0aGUgaGVhZGVyIGluZGVudCBiYXIuIEhlcmUsIHRoZSB0ZW1wbGF0ZSBhY2NlcHRzIGVpdGhlciBcbiAgICAgKiAgdGhlIHN0cmluZyBvciBIVE1MRWxlbWVudCBhcyB0ZW1wbGF0ZSBkZXNpZ24gYW5kIHRoZW4gdGhlIHBhcnNlZCBkZXNpZ24gaXMgZGlzcGxheWVkIG9udG8gdGhlIGhlYWRlciBpbmRlbnQgY2VsbC5cbiAgICAgKiBcbiAgICAgKiBSZWZlciB0byB0aGUgYmVsb3cgY29kZSBzbmlwcGV0LlxuICAgICAqXG4gICAgICp7JSBjb2RlQmxvY2sgc3JjPSdzY2hlZHVsZS9oZWFkZXJJbmRlbnRUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2hlYWRlckluZGVudFRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBoZWFkZXJJbmRlbnRUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3F1aWNrSW5mb1RlbXBsYXRlc0hlYWRlcicpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgcXVpY2tJbmZvVGVtcGxhdGVzX2hlYWRlcjogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ3F1aWNrSW5mb1RlbXBsYXRlc0NvbnRlbnQnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHF1aWNrSW5mb1RlbXBsYXRlc19jb250ZW50OiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgncXVpY2tJbmZvVGVtcGxhdGVzRm9vdGVyJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBxdWlja0luZm9UZW1wbGF0ZXNfZm9vdGVyOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZCgnZ3JvdXBIZWFkZXJUb29sdGlwVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGdyb3VwX2hlYWRlclRvb2x0aXBUZW1wbGF0ZTogYW55O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRGF5Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZVdlZWsnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlV29ya1dlZWsnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlTW9udGgnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlWWVhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVBZ2VuZGEnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlTW9udGhBZ2VuZGEnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlVGltZWxpbmVWaWV3cycpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVUaW1lbGluZU1vbnRoJyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZVRpbWVsaW5lWWVhcicpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVSZXNpemUnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRHJhZ0FuZERyb3AnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlRXhjZWxFeHBvcnQnKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ1NjaGVkdWxlSUNhbGVuZGFyRXhwb3J0Jyk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmplY3RlZE1vZHVsZXMuaW5kZXhPZihtb2QpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcy5wdXNoKG1vZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIHsgfVxuXHIgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdTY2hlZHVsZUlDYWxlbmRhckltcG9ydCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBtb2QgPSB0aGlzLmluamVjdG9yLmdldCgnU2NoZWR1bGVQcmludCcpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5qZWN0ZWRNb2R1bGVzLmluZGV4T2YobW9kKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMucHVzaChtb2QpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCB7IH1cblxyXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRWaWV3cztcbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZFJlc291cmNlcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzFdLmluc3RhbmNlID0gdGhpcy5jaGlsZFJlc291cmNlcztcbiAgICAgICAgfVxuICAgICAgICBcblx0ICAgIGlmICh0aGlzLmNoaWxkSGVhZGVyUm93cykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzJdLmluc3RhbmNlID0gdGhpcy5jaGlsZEhlYWRlclJvd3M7XG4gICAgICAgIH1cbiAgICAgICAgXG5cdCAgICBpZiAodGhpcy5jaGlsZFRvb2xiYXJJdGVtcykge1xuICAgICAgICAgICAgdGhpcy50YWdPYmplY3RzWzNdLmluc3RhbmNlID0gdGhpcy5jaGlsZFRvb2xiYXJJdGVtcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19