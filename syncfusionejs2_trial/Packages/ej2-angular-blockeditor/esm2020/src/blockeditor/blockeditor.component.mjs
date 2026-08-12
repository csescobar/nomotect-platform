import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentBase, ComponentMixins, setValue } from '@syncfusion/ej2-angular-base';
import { BlockEditor } from '@syncfusion/ej2-blockeditor';
import * as i0 from "@angular/core";
export const inputs = ['backgroundColorSettings', 'blockActionMenuSettings', 'blocks', 'codeBlockSettings', 'collaborationSettings', 'commandMenuSettings', 'contextMenuSettings', 'cssClass', 'currentUserId', 'enableDragAndDrop', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'fontColorSettings', 'height', 'imageBlockSettings', 'inlineToolbarSettings', 'keyConfig', 'labelSettings', 'locale', 'pasteCleanupSettings', 'readOnly', 'transformSettings', 'undoRedoStack', 'users', 'width'];
export const outputs = ['afterPasteCleanup', 'beforeFileUpload', 'beforePasteCleanup', 'blockChanged', 'blockDragStart', 'blockDragging', 'blockDropped', 'blur', 'created', 'fileUploadFailed', 'fileUploadSuccess', 'fileUploading', 'focus', 'selectionChanged', 'blocksChange'];
export const twoWays = ['blocks'];
/**
 * Represents the Essential JS 2 Angular BlockEditor Component.
 * ```html
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
let BlockEditorComponent = class BlockEditorComponent extends BlockEditor {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('BlockEditorCollaboration');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        try {
            let mod = this.injector.get('BlockEditorVersionHistory');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
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
BlockEditorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
BlockEditorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: BlockEditorComponent, selector: "[ejs-blockeditor], ejs-blockeditor", inputs: { backgroundColorSettings: "backgroundColorSettings", blockActionMenuSettings: "blockActionMenuSettings", blocks: "blocks", codeBlockSettings: "codeBlockSettings", collaborationSettings: "collaborationSettings", commandMenuSettings: "commandMenuSettings", contextMenuSettings: "contextMenuSettings", cssClass: "cssClass", currentUserId: "currentUserId", enableDragAndDrop: "enableDragAndDrop", enableHtmlEncode: "enableHtmlEncode", enableHtmlSanitizer: "enableHtmlSanitizer", enablePersistence: "enablePersistence", enableRtl: "enableRtl", fontColorSettings: "fontColorSettings", height: "height", imageBlockSettings: "imageBlockSettings", inlineToolbarSettings: "inlineToolbarSettings", keyConfig: "keyConfig", labelSettings: "labelSettings", locale: "locale", pasteCleanupSettings: "pasteCleanupSettings", readOnly: "readOnly", transformSettings: "transformSettings", undoRedoStack: "undoRedoStack", users: "users", width: "width" }, outputs: { afterPasteCleanup: "afterPasteCleanup", beforeFileUpload: "beforeFileUpload", beforePasteCleanup: "beforePasteCleanup", blockChanged: "blockChanged", blockDragStart: "blockDragStart", blockDragging: "blockDragging", blockDropped: "blockDropped", blur: "blur", created: "created", fileUploadFailed: "fileUploadFailed", fileUploadSuccess: "fileUploadSuccess", fileUploading: "fileUploading", focus: "focus", selectionChanged: "selectionChanged", blocksChange: "blocksChange" }, usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
BlockEditorComponent = __decorate([
    ComponentMixins([ComponentBase])
], BlockEditorComponent);
export { BlockEditorComponent };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-blockeditor], ejs-blockeditor',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Jsb2NrZWRpdG9yL2Jsb2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUQsdUJBQXVCLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQzlKLE9BQU8sRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUF1RCxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM3SSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7O0FBSTFELE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBYSxDQUFDLHlCQUF5QixFQUFDLHlCQUF5QixFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyx1QkFBdUIsRUFBQyxxQkFBcUIsRUFBQyxxQkFBcUIsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDLG1CQUFtQixFQUFDLGtCQUFrQixFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixFQUFDLFdBQVcsRUFBQyxtQkFBbUIsRUFBQyxRQUFRLEVBQUMsb0JBQW9CLEVBQUMsdUJBQXVCLEVBQUMsV0FBVyxFQUFDLGVBQWUsRUFBQyxRQUFRLEVBQUMsc0JBQXNCLEVBQUMsVUFBVSxFQUFDLG1CQUFtQixFQUFDLGVBQWUsRUFBQyxPQUFPLEVBQUMsT0FBTyxDQUFDLENBQUM7QUFDcGYsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhLENBQUMsbUJBQW1CLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsY0FBYyxFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxjQUFjLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxtQkFBbUIsRUFBQyxlQUFlLEVBQUMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hSLE1BQU0sQ0FBQyxNQUFNLE9BQU8sR0FBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTVDOzs7OztHQUtHO0lBWVUsb0JBQW9CLFNBQXBCLG9CQUFxQixTQUFRLFdBQVc7SUFxQmpELFlBQW9CLEtBQWlCLEVBQVUsU0FBb0IsRUFBVSxnQkFBaUMsRUFBVSxRQUFrQjtRQUN0SSxLQUFLLEVBQUUsQ0FBQztRQURRLFVBQUssR0FBTCxLQUFLLENBQVk7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFGbkksU0FBSSxHQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7UUFJekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksRUFBRSxDQUFDO1FBQ2xELElBQUk7WUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1lBQ3hELElBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pDO1NBQ0o7UUFBQyxNQUFNLEdBQUc7UUFFZixJQUFJO1lBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUN6RCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNqQztTQUNKO1FBQUMsTUFBTSxHQUFHO1FBRWYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDbkMsUUFBUSxDQUFDLGlCQUFpQixFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUksSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHFCQUFxQjtRQUV4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUlKLENBQUE7aUhBaEVZLG9CQUFvQjtxR0FBcEIsb0JBQW9CLHcvQ0FQbkIsNEJBQTRCO0FBTzdCLG9CQUFvQjtJQURoQyxlQUFlLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztHQUNwQixvQkFBb0IsQ0FnRWhDO1NBaEVZLG9CQUFvQjsyRkFBcEIsb0JBQW9CO2tCQVhoQyxTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLE1BQU0sRUFBRSxNQUFNO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsT0FBTyxFQUFFLEVBRVI7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFZpZXdDb250YWluZXJSZWYsIFJlbmRlcmVyMiwgSW5qZWN0b3IsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBRdWVyeUxpc3QsIFZhbHVlUHJvdmlkZXIsIENvbnRlbnRDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50QmFzZSwgQ29tcG9uZW50TWl4aW5zLCBJQ29tcG9uZW50QmFzZSwgYXBwbHlNaXhpbnMsIFByb3BlcnR5Q29sbGVjdGlvbkluZm8sIHNldFZhbHVlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItYmFzZSc7XG5pbXBvcnQgeyBCbG9ja0VkaXRvciB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1ibG9ja2VkaXRvcic7XG5cblxuXG5leHBvcnQgY29uc3QgaW5wdXRzOiBzdHJpbmdbXSA9IFsnYmFja2dyb3VuZENvbG9yU2V0dGluZ3MnLCdibG9ja0FjdGlvbk1lbnVTZXR0aW5ncycsJ2Jsb2NrcycsJ2NvZGVCbG9ja1NldHRpbmdzJywnY29sbGFib3JhdGlvblNldHRpbmdzJywnY29tbWFuZE1lbnVTZXR0aW5ncycsJ2NvbnRleHRNZW51U2V0dGluZ3MnLCdjc3NDbGFzcycsJ2N1cnJlbnRVc2VySWQnLCdlbmFibGVEcmFnQW5kRHJvcCcsJ2VuYWJsZUh0bWxFbmNvZGUnLCdlbmFibGVIdG1sU2FuaXRpemVyJywnZW5hYmxlUGVyc2lzdGVuY2UnLCdlbmFibGVSdGwnLCdmb250Q29sb3JTZXR0aW5ncycsJ2hlaWdodCcsJ2ltYWdlQmxvY2tTZXR0aW5ncycsJ2lubGluZVRvb2xiYXJTZXR0aW5ncycsJ2tleUNvbmZpZycsJ2xhYmVsU2V0dGluZ3MnLCdsb2NhbGUnLCdwYXN0ZUNsZWFudXBTZXR0aW5ncycsJ3JlYWRPbmx5JywndHJhbnNmb3JtU2V0dGluZ3MnLCd1bmRvUmVkb1N0YWNrJywndXNlcnMnLCd3aWR0aCddO1xuZXhwb3J0IGNvbnN0IG91dHB1dHM6IHN0cmluZ1tdID0gWydhZnRlclBhc3RlQ2xlYW51cCcsJ2JlZm9yZUZpbGVVcGxvYWQnLCdiZWZvcmVQYXN0ZUNsZWFudXAnLCdibG9ja0NoYW5nZWQnLCdibG9ja0RyYWdTdGFydCcsJ2Jsb2NrRHJhZ2dpbmcnLCdibG9ja0Ryb3BwZWQnLCdibHVyJywnY3JlYXRlZCcsJ2ZpbGVVcGxvYWRGYWlsZWQnLCdmaWxlVXBsb2FkU3VjY2VzcycsJ2ZpbGVVcGxvYWRpbmcnLCdmb2N1cycsJ3NlbGVjdGlvbkNoYW5nZWQnLCdibG9ja3NDaGFuZ2UnXTtcbmV4cG9ydCBjb25zdCB0d29XYXlzOiBzdHJpbmdbXSA9IFsnYmxvY2tzJ107XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgRXNzZW50aWFsIEpTIDIgQW5ndWxhciBCbG9ja0VkaXRvciBDb21wb25lbnQuXG4gKiBgYGBodG1sXG4gKiA8ZWpzLWJsb2NrZWRpdG9yPjwvZWpzLWJsb2NrZWRpdG9yPlxuICogYGBgXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnW2Vqcy1ibG9ja2VkaXRvcl0sIGVqcy1ibG9ja2VkaXRvcicsXG4gICAgaW5wdXRzOiBpbnB1dHMsXG4gICAgb3V0cHV0czogb3V0cHV0cyxcbiAgICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50ID48L25nLWNvbnRlbnQ+YCxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgICBxdWVyaWVzOiB7XG4gICAgICAgIFxuICAgIH1cbn0pXG5AQ29tcG9uZW50TWl4aW5zKFtDb21wb25lbnRCYXNlXSlcbmV4cG9ydCBjbGFzcyBCbG9ja0VkaXRvckNvbXBvbmVudCBleHRlbmRzIEJsb2NrRWRpdG9yIGltcGxlbWVudHMgSUNvbXBvbmVudEJhc2Uge1xuICAgIHB1YmxpYyBjb250YWluZXJDb250ZXh0IDogYW55O1xuICAgIHB1YmxpYyB0YWdPYmplY3RzOiBhbnk7XG5cdGFmdGVyUGFzdGVDbGVhbnVwOiBhbnk7XG5cdGJlZm9yZUZpbGVVcGxvYWQ6IGFueTtcblx0YmVmb3JlUGFzdGVDbGVhbnVwOiBhbnk7XG5cdGJsb2NrQ2hhbmdlZDogYW55O1xuXHRibG9ja0RyYWdTdGFydDogYW55O1xuXHRibG9ja0RyYWdnaW5nOiBhbnk7XG5cdGJsb2NrRHJvcHBlZDogYW55O1xuXHRibHVyOiBhbnk7XG5cdGNyZWF0ZWQ6IGFueTtcblx0ZmlsZVVwbG9hZEZhaWxlZDogYW55O1xuXHRmaWxlVXBsb2FkU3VjY2VzczogYW55O1xuXHRmaWxlVXBsb2FkaW5nOiBhbnk7XG5cdGZvY3VzOiBhbnk7XG5cdHNlbGVjdGlvbkNoYW5nZWQ6IGFueTtcblx0cHVibGljIGJsb2Nrc0NoYW5nZTogYW55O1xuXG4gICAgcHVibGljIHRhZ3M6IHN0cmluZ1tdID0gWycnXTtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdFbGU6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3JlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjpWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLm5nRWxlLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzID0gdGhpcy5pbmplY3RlZE1vZHVsZXMgfHwgW107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vZCA9IHRoaXMuaW5qZWN0b3IuZ2V0KCdCbG9ja0VkaXRvckNvbGxhYm9yYXRpb24nKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cciAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBsZXQgbW9kID0gdGhpcy5pbmplY3Rvci5nZXQoJ0Jsb2NrRWRpdG9yVmVyc2lvbkhpc3RvcnknKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluamVjdGVkTW9kdWxlcy5pbmRleE9mKG1vZCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0ZWRNb2R1bGVzLnB1c2gobW9kKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggeyB9XG5cclxuICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKG91dHB1dHMpO1xuICAgICAgICB0aGlzLmFkZFR3b1dheS5jYWxsKHRoaXMsIHR3b1dheXMpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0ICA9IG5ldyBDb21wb25lbnRCYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lckNvbnRleHQubmdPbkluaXQodGhpcyk7XG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJWaWV3SW5pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyQ29udGV4dC5uZ09uRGVzdHJveSh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jb250YWluZXJDb250ZXh0Lm5nQWZ0ZXJDb250ZW50Q2hlY2tlZCh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnaXN0ZXJFdmVudHM6IChldmVudExpc3Q6IHN0cmluZ1tdKSA9PiB2b2lkO1xuICAgIHB1YmxpYyBhZGRUd29XYXk6IChwcm9wTGlzdDogc3RyaW5nW10pID0+IHZvaWQ7XG59XG5cbiJdfQ==