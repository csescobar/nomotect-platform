import { ComponentBase, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { Sankey, SankeyModel } from '@syncfusion/ej2-charts';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any, watch: any, emitProbs: any;
/**
 * Represents Vuejs Sankey Component
 * ```vue
 * <ejs-sankey></ejs-sankey>
 * ```
 */
export declare let SankeyComponent: DefineVueComponent<SankeyModel>;
export declare type SankeyComponent = typeof ComponentBase & {
    ej2Instances: Sankey;
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
};
export declare const SankeyPlugin: {
    name: string;
    install(Vue: any): void;
};
