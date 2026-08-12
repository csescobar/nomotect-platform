import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { Fab } from '@syncfusion/ej2-buttons';
import * as i0 from "@angular/core";
export const inputs = ['content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRepeat', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'position', 'repeatDelay', 'repeatInterval', 'target', 'visible'];
export const outputs = ['clicked', 'created'];
export const twoWays = [];
/**
 * Represents the Angular Fab Component.
 * ```html
 * <button ejs-fab content='fab'></button>
 * ```
 */
let FabComponent = class FabComponent extends Fab {
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
FabComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FabComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
FabComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: FabComponent, selector: "[ejs-fab]", inputs: { content: "content", cssClass: "cssClass", disabled: "disabled", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRepeat: "enableRepeat", enableRtl: "enableRtl", iconCss: "iconCss", iconPosition: "iconPosition", isPrimary: "isPrimary", isToggle: "isToggle", locale: "locale", position: "position", repeatDelay: "repeatDelay", repeatInterval: "repeatInterval", target: "target", visible: "visible" }, outputs: { clicked: "clicked", created: "created" }, usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
FabComponent = __decorate([
    ComponentMixins([ComponentBase])
], FabComponent);
export { FabComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: FabComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-fab]',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mbG9hdGluZy1hY3Rpb24tYnV0dG9uL2ZhYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFELHVCQUF1QixFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUNoSixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBdUQsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDN0ksT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUk5QyxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQWEsQ0FBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxnQkFBZ0IsRUFBQyxRQUFRLEVBQUMsU0FBUyxDQUFDLENBQUM7QUFDN1AsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFFcEM7Ozs7O0dBS0c7SUFZVSxZQUFZLFNBQVosWUFBYSxTQUFRLEdBQUc7SUFRakMsWUFBb0IsS0FBaUIsRUFBVSxTQUFvQixFQUFVLGdCQUFpQyxFQUFVLFFBQWtCO1FBQ3RJLEtBQUssRUFBRSxDQUFDO1FBRFEsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUV0SSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsSUFBSSxFQUFFLENBQUM7UUFFbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHFCQUFxQjtRQUV4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUlKLENBQUE7eUdBdENZLFlBQVk7NkZBQVosWUFBWSwrakJBUFgsNEJBQTRCO0FBTzdCLFlBQVk7SUFEeEIsZUFBZSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7R0FDcEIsWUFBWSxDQXNDeEI7U0F0Q1ksWUFBWTsyRkFBWixZQUFZO2tCQVh4QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxXQUFXO29CQUNyQixNQUFNLEVBQUUsTUFBTTtvQkFDZCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE9BQU8sRUFBRSxFQUVSO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q29udGFpbmVyUmVmLCBSZW5kZXJlcjIsIEluamVjdG9yLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgUXVlcnlMaXN0LCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wb25lbnRCYXNlLCBDb21wb25lbnRNaXhpbnMsIElDb21wb25lbnRCYXNlLCBhcHBseU1peGlucywgUHJvcGVydHlDb2xsZWN0aW9uSW5mbywgc2V0VmFsdWUgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItYW5ndWxhci1iYXNlJztcbmltcG9ydCB7IEZhYiB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1idXR0b25zJztcblxuXG5cbmV4cG9ydCBjb25zdCBpbnB1dHM6IHN0cmluZ1tdID0gWydjb250ZW50JywnY3NzQ2xhc3MnLCdkaXNhYmxlZCcsJ2VuYWJsZUh0bWxTYW5pdGl6ZXInLCdlbmFibGVQZXJzaXN0ZW5jZScsJ2VuYWJsZVJlcGVhdCcsJ2VuYWJsZVJ0bCcsJ2ljb25Dc3MnLCdpY29uUG9zaXRpb24nLCdpc1ByaW1hcnknLCdpc1RvZ2dsZScsJ2xvY2FsZScsJ3Bvc2l0aW9uJywncmVwZWF0RGVsYXknLCdyZXBlYXRJbnRlcnZhbCcsJ3RhcmdldCcsJ3Zpc2libGUnXTtcbmV4cG9ydCBjb25zdCBvdXRwdXRzOiBzdHJpbmdbXSA9IFsnY2xpY2tlZCcsJ2NyZWF0ZWQnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIEFuZ3VsYXIgRmFiIENvbXBvbmVudC5cbiAqIGBgYGh0bWxcbiAqIDxidXR0b24gZWpzLWZhYiBjb250ZW50PSdmYWInPjwvYnV0dG9uPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2Vqcy1mYWJdJyxcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLFxuICAgIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQgPjwvbmctY29udGVudD5gLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICAgIHF1ZXJpZXM6IHtcblxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBGYWJDb21wb25lbnQgZXh0ZW5kcyBGYWIgaW1wbGVtZW50cyBJQ29tcG9uZW50QmFzZSB7XG4gICAgcHVibGljIGNvbnRhaW5lckNvbnRleHQgOiBhbnk7XG4gICAgcHVibGljIHRhZ09iamVjdHM6IGFueTtcblx0Y2xpY2tlZDogYW55O1xuXHRwdWJsaWMgY3JlYXRlZDogYW55O1xuXG5cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG5cbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5hZGRUd29XYXkuY2FsbCh0aGlzLCB0d29XYXlzKTtcbiAgICAgICAgc2V0VmFsdWUoJ2N1cnJlbnRJbnN0YW5jZScsIHRoaXMsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dCAgPSBuZXcgQ29tcG9uZW50QmFzZSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nT25Jbml0KHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ0FmdGVyVmlld0luaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdPbkRlc3Ryb3kodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ0FmdGVyQ29udGVudENoZWNrZWQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZ2lzdGVyRXZlbnRzOiAoZXZlbnRMaXN0OiBzdHJpbmdbXSkgPT4gdm9pZDtcbiAgICBwdWJsaWMgYWRkVHdvV2F5OiAocHJvcExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xufVxuXG4iXX0=