import { ComponentBase, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { InlineAIAssist, InlineAIAssistModel } from '@syncfusion/ej2-interactive-chat';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any, watch: any, emitProbs: any;
/**
 * Represents the Essential JS 2 VueJS InlineAIAssist Component
 * ```vue
 * <ejs-inlineaiassist ></ejs-inlineaiassist>
 * ```
 */
export declare let InlineAIAssistComponent: DefineVueComponent<InlineAIAssistModel>;
export declare type InlineAIAssistComponent = typeof ComponentBase & {
    ej2Instances: InlineAIAssist;
    isVue3: boolean;
    isLazyUpdate: Boolean;
    plugins: any[];
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    addResponse(response: string, isFinalUpdate: boolean): void;
    destroy(): void;
    executePrompt(prompt: string): void;
    hideCommandPopup(): void;
    hidePopup(): void;
    showCommandPopup(): void;
    showPopup(x?: number, y?: number): void;
};
export declare const InlineAIAssistPlugin: {
    name: string;
    install(Vue: any): void;
};
