import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { SankeyNodeModel } from '@syncfusion/ej2-charts';
export declare let SankeyNodesCollectionDirective: any;
export declare const SankeyNodesCollectionPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `SankeyNodeDirective` directive represent a node of the vue Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```vue
 * <ejs-sankey>
 * <e-sankey-nodes>
 * <e-sankey-node></e-sankey-node>
 * </e-sankey-nodes>
 * </ejs-sankey>
 * ```
 */
export declare let SankeyNodeDirective: DefineVueDirective<SankeyNodeModel>;
export declare const SankeyNodePlugin: {
    name: string;
    install(Vue: any): void;
};
