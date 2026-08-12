import { ComplexBase } from '@syncfusion/ej2-react-base';
import { SankeyLinkModel } from '@syncfusion/ej2-charts';
/**
 * `SankeyLinkDirective` directive represent a link of the react Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```tsx
 * <SankeyComponent>
 * <SankeyLinksDirective>
 * <SankeyLinkDirective></SankeyLinkDirective>
 * </SankeyLinksDirective>
 * </SankeyComponent>
 * ```
 */
export declare class SankeyLinkDirective extends ComplexBase<SankeyLinkModel & {
    children?: React.ReactNode;
}, SankeyLinkModel> {
    static moduleName: string;
}
export declare class SankeyLinksCollectionDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
