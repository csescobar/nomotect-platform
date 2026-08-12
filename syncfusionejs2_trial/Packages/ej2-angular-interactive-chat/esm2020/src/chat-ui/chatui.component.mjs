import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { ChatUI } from '@syncfusion/ej2-interactive-chat';
import { Template } from '@syncfusion/ej2-angular-base';
import { MessagesDirective } from './messages.directive';
import * as i0 from "@angular/core";
export const inputs = ['attachmentSettings', 'autoScrollToBottom', 'cssClass', 'emptyChatTemplate', 'enableAttachments', 'enableCompactMode', 'enablePersistence', 'enableRtl', 'footerTemplate', 'headerIconCss', 'headerText', 'headerToolbar', 'height', 'loadOnDemand', 'locale', 'mentionTriggerChar', 'mentionUsers', 'messageTemplate', 'messageToolbarSettings', 'messages', 'placeholder', 'showFooter', 'showHeader', 'showTimeBreak', 'showTimeStamp', 'suggestionTemplate', 'suggestions', 'timeBreakTemplate', 'timeStampFormat', 'typingUsers', 'typingUsersTemplate', 'user', 'width'];
export const outputs = ['attachmentRemoved', 'attachmentUploadFailure', 'attachmentUploadSuccess', 'beforeAttachmentUpload', 'created', 'mentionSelect', 'messageSend', 'userTyping'];
export const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui></ejs-chatui>
 * ```
 */
let ChatUIComponent = class ChatUIComponent extends ChatUI {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['messages'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childMessages;
        this.containerContext.ngAfterContentChecked(this);
    }
};
ChatUIComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ChatUIComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChatUIComponent, selector: "[ejs-chatui], ejs-chatui", inputs: { attachmentSettings: "attachmentSettings", autoScrollToBottom: "autoScrollToBottom", cssClass: "cssClass", emptyChatTemplate: "emptyChatTemplate", enableAttachments: "enableAttachments", enableCompactMode: "enableCompactMode", enablePersistence: "enablePersistence", enableRtl: "enableRtl", footerTemplate: "footerTemplate", headerIconCss: "headerIconCss", headerText: "headerText", headerToolbar: "headerToolbar", height: "height", loadOnDemand: "loadOnDemand", locale: "locale", mentionTriggerChar: "mentionTriggerChar", mentionUsers: "mentionUsers", messageTemplate: "messageTemplate", messageToolbarSettings: "messageToolbarSettings", messages: "messages", placeholder: "placeholder", showFooter: "showFooter", showHeader: "showHeader", showTimeBreak: "showTimeBreak", showTimeStamp: "showTimeStamp", suggestionTemplate: "suggestionTemplate", suggestions: "suggestions", timeBreakTemplate: "timeBreakTemplate", timeStampFormat: "timeStampFormat", typingUsers: "typingUsers", typingUsersTemplate: "typingUsersTemplate", user: "user", width: "width" }, outputs: { attachmentRemoved: "attachmentRemoved", attachmentUploadFailure: "attachmentUploadFailure", attachmentUploadSuccess: "attachmentUploadSuccess", beforeAttachmentUpload: "beforeAttachmentUpload", created: "created", mentionSelect: "mentionSelect", messageSend: "messageSend", userTyping: "userTyping" }, queries: [{ propertyName: "suggestionTemplate", first: true, predicate: ["suggestionTemplate"], descendants: true }, { propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "emptyChatTemplate", first: true, predicate: ["emptyChatTemplate"], descendants: true }, { propertyName: "messageTemplate", first: true, predicate: ["messageTemplate"], descendants: true }, { propertyName: "typingUsersTemplate", first: true, predicate: ["typingUsersTemplate"], descendants: true }, { propertyName: "timeBreakTemplate", first: true, predicate: ["timeBreakTemplate"], descendants: true }, { propertyName: "previewTemplate", first: true, predicate: ["previewTemplate"], descendants: true }, { propertyName: "attachmentTemplate", first: true, predicate: ["attachmentTemplate"], descendants: true }, { propertyName: "childMessages", first: true, predicate: MessagesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ChatUIComponent.prototype, "suggestionTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "emptyChatTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "messageTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "typingUsersTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "timeBreakTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "previewTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "attachmentTemplate", void 0);
ChatUIComponent = __decorate([
    ComponentMixins([ComponentBase])
], ChatUIComponent);
export { ChatUIComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-chatui], ejs-chatui',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childMessages: new ContentChild(MessagesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { suggestionTemplate: [{
                type: ContentChild,
                args: ['suggestionTemplate']
            }], footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], emptyChatTemplate: [{
                type: ContentChild,
                args: ['emptyChatTemplate']
            }], messageTemplate: [{
                type: ContentChild,
                args: ['messageTemplate']
            }], typingUsersTemplate: [{
                type: ContentChild,
                args: ['typingUsersTemplate']
            }], timeBreakTemplate: [{
                type: ContentChild,
                args: ['timeBreakTemplate']
            }], previewTemplate: [{
                type: ContentChild,
                args: ['previewTemplate']
            }], attachmentTemplate: [{
                type: ContentChild,
                args: ['attachmentTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhdHVpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jaGF0LXVpL2NoYXR1aS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFELHVCQUF1QixFQUE0QixZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUosT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQXVELFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBRXpELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsZUFBZSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLEVBQUMsY0FBYyxFQUFDLGlCQUFpQixFQUFDLHdCQUF3QixFQUFDLFVBQVUsRUFBQyxhQUFhLEVBQUMsWUFBWSxFQUFDLFlBQVksRUFBQyxlQUFlLEVBQUMsZUFBZSxFQUFDLG9CQUFvQixFQUFDLGFBQWEsRUFBQyxtQkFBbUIsRUFBQyxpQkFBaUIsRUFBQyxhQUFhLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hqQixNQUFNLENBQUMsTUFBTSxPQUFPLEdBQWEsQ0FBQyxtQkFBbUIsRUFBQyx5QkFBeUIsRUFBQyx5QkFBeUIsRUFBQyx3QkFBd0IsRUFBQyxTQUFTLEVBQUMsZUFBZSxF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eEIsbUJBQW1CO3NCQUZ6QixZQUFZO3VCQUFDLHFCQUFxQjtnQkFpQjVCLGlCQUFpQjtzQkFGdkIsWUFBWTt1QkFBQyxtQkFBbUI7Z0JBSzFCLGVBQWU7c0JBRnJCLFlBQVk7dUJBQUMsaUJBQWlCO2dCQUt4QixrQkFBa0I7c0JBRnhCLFlBQVk7dUJBQUMsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEluamVjdG9yLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBWYWx1ZVByb3ZpZGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEJhc2UsIENvbXBvbmVudE1peGlucywgSUNvbXBvbmVudEJhc2UsIGFwcGx5TWl4aW5zLCBQcm9wZXJ0eUNvbGxlY3Rpb25JbmZvLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuaW1wb3J0IHsgQ2hhdFVJIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWludGVyYWN0aXZlLWNoYXQnO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IE1lc3NhZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9tZXNzYWdlcy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYXR0YWNobWVudFNldHRpbmdzJywnYXV0b1Njcm9sbFRvQm90dG9tJywnY3NzQ2xhc3MnLCdlbXB0eUNoYXRUZW1wbGF0ZScsJ2VuYWJsZUF0dGFjaG1lbnRzJywnZW5hYmxlQ29tcGFjdE1vZGUnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2Zvb3RlclRlbXBsYXRlJywnaGVhZGVySWNvbkNzcycsJ2hlYWRlclRleHQnLCdoZWFkZXJUb29sYmFyJywnaGVpZ2h0JywnbG9hZE9uRGVtYW5kJywnbG9jYWxlJywnbWVudGlvblRyaWdnZXJDaGFyJywnbWVudGlvblVzZXJzJywnbWVzc2FnZVRlbXBsYXRlJywnbWVzc2FnZVRvb2xiYXJTZXR0aW5ncycsJ21lc3NhZ2VzJywncGxhY2Vob2xkZXInLCdzaG93Rm9vdGVyJywnc2hvd0hlYWRlcicsJ3Nob3dUaW1lQnJlYWsnLCdzaG93VGltZVN0YW1wJywnc3VnZ2VzdGlvblRlbXBsYXRlJywnc3VnZ2VzdGlvbnMnLCd0aW1lQnJlYWtUZW1wbGF0ZScsJ3RpbWVTdGFtcEZvcm1hdCcsJ3R5cGluZ1VzZXJzJywndHlwaW5nVXNlcnNUZW1wbGF0ZScsJ3VzZXInLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhdHRhY2htZW50UmVtb3ZlZCcsJ2F0dGFjaG1lbnRVcGxvYWRGYWlsdXJlJywnYXR0YWNobWVudFVwbG9hZFN1Y2Nlc3MnLCdiZWZvcmVBdHRhY2htZW50VXBsb2FkJywnY3JlYXRlZCcsJ21lbnRpb25TZWxlY3QnLCdtZXNzYWdlU2VuZCcsJ3VzZXJUeXBpbmcnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsnJ107XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgRXNzZW50aWFsIEpTIDIgQW5ndWxhciBDaGF0VUkgQ29tcG9uZW50LlxuICogYGBgaHRtbFxuICogPGVqcy1jaGF0dWk+PC9lanMtY2hhdHVpPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2Vqcy1jaGF0dWldLCBlanMtY2hhdHVpJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgPjwvbmctY29udGVudD5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRNZXNzYWdlczogbmV3IENvbnRlbnRDaGlsZChNZXNzYWdlc0RpcmVjdGl2ZSlcbiAgICB9XG59KVxuQENvbXBvbmVudE1peGlucyhbQ29tcG9uZW50QmFzZV0pXG5leHBvcnQgY2xhc3MgQ2hhdFVJQ29tcG9uZW50IGV4dGVuZHMgQ2hhdFVJIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250YWluZXJDb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGF0dGFjaG1lbnRSZW1vdmVkOiBhbnk7XG5cdGF0dGFjaG1lbnRVcGxvYWRGYWlsdXJlOiBhbnk7XG5cdGF0dGFjaG1lbnRVcGxvYWRTdWNjZXNzOiBhbnk7XG5cdGJlZm9yZUF0dGFjaG1lbnRVcGxvYWQ6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRtZW50aW9uU2VsZWN0OiBhbnk7XG5cdG1lc3NhZ2VTZW5kOiBhbnk7XG5cdHB1YmxpYyB1c2VyVHlwaW5nOiBhbnk7XG4gICAgcHVibGljIGNoaWxkTWVzc2FnZXM6IFF1ZXJ5TGlzdDxNZXNzYWdlc0RpcmVjdGl2ZT47XG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWydtZXNzYWdlcyddO1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRlbXBsYXRlIGZvciByZW5kZXJpbmcgc3VnZ2VzdGlvbiBpdGVtcyBpbiB0aGUgQ2hhdCBVSSBjb21wb25lbnQuIFxuICAgICAqIERlZmluZXMgdGhlIGNvbnRlbnQgb3IgbGF5b3V0IHVzZWQgdG8gcmVuZGVyIHN1Z2dlc3Rpb24gaXRlbXMsIGFuZCBjYW4gYmUgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24uIFxuICAgICAqIFRoZSB0ZW1wbGF0ZSBjb250ZXh0IGluY2x1ZGVzIHRoZSBpbmRleCBhbmQgc3VnZ2VzdGlvbiB0ZXh0LlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2NoYXQtdWkvc3VnZ2VzdGlvblRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ3N1Z2dlc3Rpb25UZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgc3VnZ2VzdGlvblRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgZm9yIHRoZSBmb290ZXIgYXJlYSBpbiB0aGUgQ2hhdCBVSSBjb21wb25lbnQuIFxuICAgICAqIERlZmluZXMgdGhlIGNvbnRlbnQgb3IgbGF5b3V0IHVzZWQgdG8gcmVuZGVyIHRoZSBmb290ZXIsIHdoaWNoIGNhbiBiZSBwcm92aWRlZCBhcyBhIHN0cmluZyBvciBhIGZ1bmN0aW9uLlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2NoYXQtdWkvZm9vdGVyVGVtcGxhdGUvaW5kZXgubWQnICV9eyUgZW5kY29kZUJsb2NrICV9XG4gICAgICogICAgIFxuICAgICAqIEBkZWZhdWx0ICcnXG4gICAgICogQGFuZ3VsYXJ0eXBlIHN0cmluZyB8IG9iamVjdFxuICAgICAqIEByZWFjdHR5cGUgc3RyaW5nIHwgZnVuY3Rpb24gfCBKU1guRWxlbWVudFxuICAgICAqIEB2dWV0eXBlIHN0cmluZyB8IGZ1bmN0aW9uXG4gICAgICogQGFzcHR5cGUgc3RyaW5nXG4gICAgICovXG4gICAgQENvbnRlbnRDaGlsZCgnZm9vdGVyVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIGZvb3RlclRlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdGVtcGxhdGUgZm9yIHJlbmRlcmluZyB0aGUgZW1wdHkgc3RhdGUgb2YgdGhlIENoYXQgVUkgY29tcG9uZW50LiBcbiAgICAgKiBUaGlzIHByb3BlcnR5IGNhbiBhY2NlcHQgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdG8gY3VzdG9taXplIHRoZSBhcHBlYXJhbmNlIHdoZW4gdGhlcmUgYXJlIG5vIG1lc3NhZ2VzIHRvIGRpc3BsYXkgaW4gdGhlIGNoYXQuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nY2hhdC11aS9lbXB0eUNoYXRUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdlbXB0eUNoYXRUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgZW1wdHlDaGF0VGVtcGxhdGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSB0ZW1wbGF0ZSBmb3IgcmVuZGVyaW5nIGluZGl2aWR1YWwgbWVzc2FnZXMgaW4gdGhlIENoYXQgVUkgY29tcG9uZW50LiBcbiAgICAgKiBUaGlzIHByb3BlcnR5IGNhbiBhY2NlcHQgZWl0aGVyIGEgc3RyaW5nIG9yIGEgZnVuY3Rpb24gdG8gY3VzdG9taXplIHRoZSBhcHBlYXJhbmNlIG9mIG1lc3NhZ2VzLiBUaGUgdGVtcGxhdGUgY29udGV4dCBpbmNsdWRlcyBtZXNzYWdlIGFuZCBpbmRleC5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSdjaGF0LXVpL21lc3NhZ2VUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdtZXNzYWdlVGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIG1lc3NhZ2VUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBUZW1wbGF0ZSBmb3IgZGlzcGxheWluZyB1c2VycyBjdXJyZW50bHkgdHlwaW5nIGluIHRoZSBjaGF0IGludGVyZmFjZS4gXG4gICAgICogQWNjZXB0cyBhIHN0cmluZyBvciBmdW5jdGlvbiB0byBjdXN0b21pemUgdGhlIGRpc3BsYXkgZm9ybWF0LlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2NoYXQtdWkvdHlwaW5nVXNlcnNUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0eXBpbmdVc2Vyc1RlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyB0eXBpbmdVc2Vyc1RlbXBsYXRlOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIERlZmluZXMgYSBjdXN0b20gdGVtcGxhdGUgZm9yIHJlbmRlcmluZyB0aW1lIGJyZWFrcyBpbiB0aGUgQ2hhdCBVSSBjb21wb25lbnQuIFxuICAgICAqIEFjY2VwdHMgYSBzdHJpbmcgb3IgZnVuY3Rpb24gdGhhdCBmb3JtYXRzIHRoZSBhcHBlYXJhbmNlIG9mIGRhdGUtYmFzZWQgc2VwYXJhdG9ycyzCoGFsbG93aW5nIGN1c3RvbWl6YXRpb24gb2YgaG93IG1lc3NhZ2VzIGFyZSB2aXN1YWxseSBncm91cGVkIGJ5IGRhdGUuXG4gICAgICogXG4gICAgICogeyUgY29kZUJsb2NrIHNyYz0nY2hhdC11aS90aW1lYnJlYWtUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCd0aW1lQnJlYWtUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgdGltZUJyZWFrVGVtcGxhdGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkKCdwcmV2aWV3VGVtcGxhdGUnKVxuICAgIEBUZW1wbGF0ZSgpXG4gICAgcHVibGljIHByZXZpZXdUZW1wbGF0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGQoJ2F0dGFjaG1lbnRUZW1wbGF0ZScpXG4gICAgQFRlbXBsYXRlKClcbiAgICBwdWJsaWMgYXR0YWNobWVudFRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMudGFnT2JqZWN0c1swXS5pbnN0YW5jZSA9IHRoaXMuY2hpbGRNZXNzYWdlcztcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==