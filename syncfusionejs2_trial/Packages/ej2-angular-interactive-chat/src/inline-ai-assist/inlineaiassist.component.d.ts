import { ElementRef, ViewContainerRef, Renderer2, Injector } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular InlineAIAssist Component.
 * ```html
 * <ejs-inlineaiassist></ejs-inlineaiassist>
 * ```
 */
export declare class InlineAIAssistComponent extends InlineAIAssist implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    close: any;
    created: any;
    open: any;
    promptRequest: any;
    tags: string[];
    /**
     * Specifies a custom template (string or function) for rendering the prompt input area.
     * Specifies a string template or a function that returns the editor UI markup.
     *
     * {% codeBlock src='inline-ai-assist/editorTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    editorTemplate: any;
    /**
     * Specifies a custom template (string or function) for rendering AI-generated response content.
     * Specifies that a function receives a ResponseTemplateContext and returns markup or text.
     *
     * {% codeBlock src='inline-ai-assist/responseTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    responseTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<InlineAIAssistComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InlineAIAssistComponent, "ejs-inlineaiassist", never, { "commandSettings": "commandSettings"; "cssClass": "cssClass"; "editorTemplate": "editorTemplate"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "enableStreaming": "enableStreaming"; "inlineToolbarSettings": "inlineToolbarSettings"; "locale": "locale"; "placeholder": "placeholder"; "popupHeight": "popupHeight"; "popupWidth": "popupWidth"; "prompt": "prompt"; "prompts": "prompts"; "relateTo": "relateTo"; "responseMode": "responseMode"; "responseSettings": "responseSettings"; "responseTemplate": "responseTemplate"; "target": "target"; "zIndex": "zIndex"; }, { "close": "close"; "created": "created"; "open": "open"; "promptRequest": "promptRequest"; }, ["editorTemplate", "responseTemplate"], ["*"]>;
}
