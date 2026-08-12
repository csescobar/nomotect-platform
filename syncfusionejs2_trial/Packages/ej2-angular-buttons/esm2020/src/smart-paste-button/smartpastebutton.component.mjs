import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { SmartPasteButton } from '@syncfusion/ej2-buttons';
import * as i0 from "@angular/core";
export const inputs = ['aiAssistHandler', 'content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRepeat', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'repeatDelay', 'repeatInterval'];
export const outputs = ['clicked', 'created'];
export const twoWays = [];
/**
 * Represents the Angular Smart Paste Button Component.
 * ```html
 * <button ejs-smart-paste-button content='Smart paste'></button>
 * ```
 */
let SmartPasteButtonComponent = class SmartPasteButtonComponent extends SmartPasteButton {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
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
SmartPasteButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmartPasteButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
SmartPasteButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: SmartPasteButtonComponent, selector: "[ejs-smart-paste-button]", inputs: { aiAssistHandler: "aiAssistHandler", content: "content", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRepeat: "enableRepeat", enableRtl: "enableRtl", iconCss: "iconCss", iconPosition: "iconPosition", isPrimary: "isPrimary", isToggle: "isToggle", locale: "locale", repeatDelay: "repeatDelay", repeatInterval: "repeatInterval" }, outputs: { clicked: "clicked", created: "created" }, usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
SmartPasteButtonComponent = __decorate([
    ComponentMixins([ComponentBase])
], SmartPasteButtonComponent);
export { SmartPasteButtonComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: SmartPasteButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-smart-paste-button]',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnRwYXN0ZWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc21hcnQtcGFzdGUtYnV0dG9uL3NtYXJ0cGFzdGVidXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxRCx1QkFBdUIsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDaEosT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQXVELFFBQVEsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzdJLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUkzRCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxpQkFBaUIsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsYUFBYSxFQUFDLGdCQUFnQixDQUFDLENBQUM7QUFDalAsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFFcEM7Ozs7O0dBS0c7SUFZVSx5QkFBeUIsU0FBekIseUJBQTBCLFNBQVEsZ0JBQWdCO0lBUTNELFlBQW9CLEtBQWlCLEVBQVUsU0FBb0IsRUFBVSxnQkFBaUMsRUFBVSxRQUFrQjtRQUN0SSxLQUFLLEVBQUUsQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFFdEksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBRWxELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ25DLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixHQUFJLElBQUksYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxlQUFlO1FBQ2xCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFTSxxQkFBcUI7UUFFeEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FJSixDQUFBO3NIQXRDWSx5QkFBeUI7MEdBQXpCLHlCQUF5QixzakJBUHhCLDRCQUE0QjtBQU83Qix5QkFBeUI7SUFEckMsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIseUJBQXlCLENBc0NyQztTQXRDWSx5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFYckMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsMEJBQTBCO29CQUNwQyxNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxFQUVSO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEluamVjdG9yLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBDb21wb25lbnRNaXhpbnMsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IFNtYXJ0UGFzdGVCdXR0b24gfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYnV0dG9ucyc7XG5cblxuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYWlBc3Npc3RIYW5kbGVyJywnY29udGVudCcsJ2Nzc0NsYXNzJywnZGlzYWJsZWQnLCdlbmFibGVIdG1sU2FuaXRpemVyJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSZXBlYXQnLCdlbmFibGVSdGwnLCdpY29uQ3NzJywnaWNvblBvc2l0aW9uJywnaXNQcmltYXJ5JywnaXNUb2dnbGUnLCdsb2NhbGUnLCdyZXBlYXREZWxheScsJ3JlcGVhdEludGVydmFsJ107XG5leHBvcnQgY29uc3Qgb3V0cHV0czogc3RyaW5nW10gPSBbJ2NsaWNrZWQnLCdjcmVhdGVkJ107XG5leHBvcnQgY29uc3QgdHdvV2F5czogc3RyaW5nW10gPSBbXTtcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBBbmd1bGFyIFNtYXJ0IFBhc3RlIEJ1dHRvbiBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8YnV0dG9uIGVqcy1zbWFydC1wYXN0ZS1idXR0b24gY29udGVudD0nU21hcnQgcGFzdGUnPjwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2Vqcy1zbWFydC1wYXN0ZS1idXR0b25dJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgPjwvbmctY29udGVudD5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBTbWFydFBhc3RlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgU21hcnRQYXN0ZUJ1dHRvbiBpbXBsZW1lbnRzIElDb21wb25lbnRCYXNlIHtcbiAgICBwdWJsaWMgY29udGFpbmVyQ29udGV4dCA6IGFueTtcbiAgICBwdWJsaWMgdGFnT2JqZWN0czogYW55O1xuXHRjbGlja2VkOiBhbnk7XG5cdHB1YmxpYyBjcmVhdGVkOiBhbnk7XG5cblxuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ0VsZTogRWxlbWVudFJlZiwgcHJpdmF0ZSBzcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOlZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMubmdFbGUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pbmplY3RlZE1vZHVsZXMgPSB0aGlzLmluamVjdGVkTW9kdWxlcyB8fCBbXTtcblxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==