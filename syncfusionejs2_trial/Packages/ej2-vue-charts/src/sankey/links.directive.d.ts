import { DefineVueDirective } from '@syncfusion/ej2-vue-base';
import { SankeyLinkModel } from '@syncfusion/ej2-charts';
export declare let SankeyLinksCollectionDirective: any;
export declare const SankeyLinksCollectionPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `SankeyLinkDirective` directive represent a link of the vue Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```vue
 * <ejs-sankey>
 * <e-sankey-links>
 * <e-sankey-link></e-sankey-link>
 * </e-sankey-links>
 * </ejs-sankey>
 * ```
 */
export declare let SankeyLinkDirective: DefineVueDirective<SankeyLinkModel>;
export declare const SankeyLinkPlugin: {
    name: string;
    install(Vue: any): void;
};
