import { ComplexBase } from '@syncfusion/ej2-react-base';
import { SankeyNodeModel } from '@syncfusion/ej2-charts';
/**
 * `SankeyNodeDirective` directive represent a node of the react Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```tsx
 * <SankeyComponent>
 * <SankeyNodesDirective>
 * <SankeyNodeDirective></SankeyNodeDirective>
 * </SankeyNodesDirective>
 * </SankeyComponent>
 * ```
 */
export declare class SankeyNodeDirective extends ComplexBase<SankeyNodeModel & {
    children?: React.ReactNode;
}, SankeyNodeModel> {
    static moduleName: string;
}
export declare class SankeyNodesCollectionDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
