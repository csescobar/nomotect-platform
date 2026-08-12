import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, ContentChild } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import { Template } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
export const inputs = ['commandSettings', 'cssClass', 'editorTemplate', 'enablePersistence', 'enableRtl', 'enableStreaming', 'inlineToolbarSettings', 'locale', 'placeholder', 'popupHeight', 'popupWidth', 'prompt', 'prompts', 'relateTo', 'responseMode', 'responseSettings', 'responseTemplate', 'target', 'zIndex'];
export const outputs = ['close', 'created', 'open', 'promptRequest'];
export const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular InlineAIAssist Component.
 * ```html
 * <ejs-inlineaiassist></ejs-inlineaiassist>
 * ```
 */
let InlineAIAssistComponent = class InlineAIAssistComponent extends InlineAIAssist {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
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
        this.containerContext.ngAfterContentChecked(this);
    }
};
InlineAIAssistComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
InlineAIAssistComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: InlineAIAssistComponent, selector: "ejs-inlineaiassist", inputs: { commandSettings: "commandSettings", cssClass: "cssClass", editorTemplate: "editorTemplate", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableStreaming: "enableStreaming", inlineToolbarSettings: "inlineToolbarSettings", locale: "locale", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", prompt: "prompt", prompts: "prompts", relateTo: "relateTo", responseMode: "responseMode", responseSettings: "responseSettings", responseTemplate: "responseTemplate", target: "target", zIndex: "zIndex" }, outputs: { close: "close", created: "created", open: "open", promptRequest: "promptRequest" }, queries: [{ propertyName: "editorTemplate", first: true, predicate: ["editorTemplate"], descendants: true }, { propertyName: "responseTemplate", first: true, predicate: ["responseTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], InlineAIAssistComponent.prototype, "editorTemplate", void 0);
__decorate([
    Template()
], InlineAIAssistComponent.prototype, "responseTemplate", void 0);
InlineAIAssistComponent = __decorate([
    ComponentMixins([ComponentBase])
], InlineAIAssistComponent);
export { InlineAIAssistComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-inlineaiassist',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { editorTemplate: [{
                type: ContentChild,
                args: ['editorTemplate']
            }], responseTemplate: [{
                type: ContentChild,
                args: ['responseTemplate']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lYWlhc3Npc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2lubGluZS1haS1hc3Npc3QvaW5saW5lYWlhc3Npc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxRCx1QkFBdUIsRUFBNEIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlKLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUF1RCxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3SSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztBQUd4RCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsZ0JBQWdCLEVBQUMsbUJBQW1CLEVBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLHVCQUF1QixFQUFDLFFBQVEsRUFBQyxhQUFhLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsa0JBQWtCLEVBQUMsUUFBUSxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2pULE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQzVFLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRXRDOzs7OztHQUtHO0lBWVUsdUJBQXVCLFNBQXZCLHVCQUF3QixTQUFRLGNBQWM7SUF3Q3ZELFlBQW9CLEtBQWlCLEVBQVUsU0FBb0IsRUFBVSxnQkFBaUMsRUFBVSxRQUFrQjtRQUN0SSxLQUFLLEVBQUUsQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFoQ25JLFNBQUksR0FBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBa0N6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHFCQUFxQjtRQUV4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUlKLENBQUE7b0hBdEVZLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLCs2QkFQdEIsNEJBQTRCO0FBOEJ0QztJQURDLFFBQVEsRUFBRTsrREFDZ0I7QUFlM0I7SUFEQyxRQUFRLEVBQUU7aUVBQ2tCO0FBdENwQix1QkFBdUI7SUFEbkMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIsdUJBQXVCLENBc0VuQztTQXRFWSx1QkFBdUI7MkZBQXZCLHVCQUF1QjtrQkFYbkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxFQUVSO2lCQUNKOytLQXlCVSxjQUFjO3NCQUZwQixZQUFZO3VCQUFDLGdCQUFnQjtnQkFpQnZCLGdCQUFnQjtzQkFGdEIsWUFBWTt1QkFBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgQ29tcG9uZW50TWl4aW5zLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBJbmxpbmVBSUFzc2lzdCB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1pbnRlcmFjdGl2ZS1jaGF0JztcbmltcG9ydCB7IFRlbXBsYXRlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IGlucHV0czogc3RyaW5nW10gPSBbJ2NvbW1hbmRTZXR0aW5ncycsJ2Nzc0NsYXNzJywnZWRpdG9yVGVtcGxhdGUnLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJ0bCcsJ2VuYWJsZVN0cmVhbWluZycsJ2lubGluZVRvb2xiYXJTZXR0aW5ncycsJ2xvY2FsZScsJ3BsYWNlaG9sZGVyJywncG9wdXBIZWlnaHQnLCdwb3B1cFdpZHRoJywncHJvbXB0JywncHJvbXB0cycsJ3JlbGF0ZVRvJywncmVzcG9uc2VNb2RlJywncmVzcG9uc2VTZXR0aW5ncycsJ3Jlc3BvbnNlVGVtcGxhdGUnLCd0YXJnZXQnLCd6SW5kZXgnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnY2xvc2UnLCdjcmVhdGVkJywnb3BlbicsJ3Byb21wdFJlcXVlc3QnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsnJ107XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgRXNzZW50aWFsIEpTIDIgQW5ndWxhciBJbmxpbmVBSUFzc2lzdCBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWlubGluZWFpYXNzaXN0PjwvZWpzLWlubGluZWFpYXNzaXN0PlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWlubGluZWFpYXNzaXN0JyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgPjwvbmctY29udGVudD5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgXG4gICAgfVxufSlcbkBDb21wb25lbnRNaXhpbnMoW0NvbXBvbmVudEJhc2VdKVxuZXhwb3J0IGNsYXNzIElubGluZUFJQXNzaXN0Q29tcG9uZW50IGV4dGVuZHMgSW5saW5lQUlBc3Npc3QgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRhaW5lckNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0Y2xvc2U6IGFueTtcblx0Y3JlYXRlZDogYW55O1xuXHRvcGVuOiBhbnk7XG5cdHB1YmxpYyBwcm9tcHRSZXF1ZXN0OiBhbnk7XG5cbiAgICBwdWJsaWMgdGFnczogc3RyaW5nW10gPSBbJyddO1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgKHN0cmluZyBvciBmdW5jdGlvbikgZm9yIHJlbmRlcmluZyB0aGUgcHJvbXB0IGlucHV0IGFyZWEuIFxuICAgICAqIFNwZWNpZmllcyBhIHN0cmluZyB0ZW1wbGF0ZSBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgZWRpdG9yIFVJIG1hcmt1cC5cbiAgICAgKiBcbiAgICAgKiB7JSBjb2RlQmxvY2sgc3JjPSdpbmxpbmUtYWktYXNzaXN0L2VkaXRvclRlbXBsYXRlL2luZGV4Lm1kJyAlfXslIGVuZGNvZGVCbG9jayAlfVxuICAgICAqICAgICBcbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqIEBhbmd1bGFydHlwZSBzdHJpbmcgfCBvYmplY3RcbiAgICAgKiBAcmVhY3R0eXBlIHN0cmluZyB8IGZ1bmN0aW9uIHwgSlNYLkVsZW1lbnRcbiAgICAgKiBAdnVldHlwZSBzdHJpbmcgfCBmdW5jdGlvblxuICAgICAqIEBhc3B0eXBlIHN0cmluZ1xuICAgICAqL1xuICAgIEBDb250ZW50Q2hpbGQoJ2VkaXRvclRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyBlZGl0b3JUZW1wbGF0ZTogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgYSBjdXN0b20gdGVtcGxhdGUgKHN0cmluZyBvciBmdW5jdGlvbikgZm9yIHJlbmRlcmluZyBBSS1nZW5lcmF0ZWQgcmVzcG9uc2UgY29udGVudC4gXG4gICAgICogU3BlY2lmaWVzIHRoYXQgYSBmdW5jdGlvbiByZWNlaXZlcyBhIFJlc3BvbnNlVGVtcGxhdGVDb250ZXh0IGFuZCByZXR1cm5zIG1hcmt1cCBvciB0ZXh0LlxuICAgICAqIFxuICAgICAqIHslIGNvZGVCbG9jayBzcmM9J2lubGluZS1haS1hc3Npc3QvcmVzcG9uc2VUZW1wbGF0ZS9pbmRleC5tZCcgJX17JSBlbmRjb2RlQmxvY2sgJX1cbiAgICAgKiAgICAgXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKiBAYW5ndWxhcnR5cGUgc3RyaW5nIHwgb2JqZWN0XG4gICAgICogQHJlYWN0dHlwZSBzdHJpbmcgfCBmdW5jdGlvbiB8IEpTWC5FbGVtZW50XG4gICAgICogQHZ1ZXR5cGUgc3RyaW5nIHwgZnVuY3Rpb25cbiAgICAgKiBAYXNwdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICBAQ29udGVudENoaWxkKCdyZXNwb25zZVRlbXBsYXRlJylcbiAgICBAVGVtcGxhdGUoKVxuICAgIHB1YmxpYyByZXNwb25zZVRlbXBsYXRlOiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5nRWxlOiBFbGVtZW50UmVmLCBwcml2YXRlIHNyZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZiwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gdGhpcy5uZ0VsZS5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLmluamVjdGVkTW9kdWxlcyA9IHRoaXMuaW5qZWN0ZWRNb2R1bGVzIHx8IFtdO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMob3V0cHV0cyk7XG4gICAgICAgIHRoaXMuYWRkVHdvV2F5LmNhbGwodGhpcywgdHdvV2F5cyk7XG4gICAgICAgIHNldFZhbHVlKCdjdXJyZW50SW5zdGFuY2UnLCB0aGlzLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQgID0gbmV3IENvbXBvbmVudEJhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uSW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdBZnRlclZpZXdJbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nT25EZXN0cm95KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdBZnRlckNvbnRlbnRDaGVja2VkKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZWdpc3RlckV2ZW50czogKGV2ZW50TGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG4gICAgcHVibGljIGFkZFR3b1dheTogKHByb3BMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbn1cblxuIl19