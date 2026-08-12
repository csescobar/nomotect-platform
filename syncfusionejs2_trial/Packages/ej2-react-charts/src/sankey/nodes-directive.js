var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
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
var SankeyNodeDirective = /** @class */ (function (_super) {
    __extends(SankeyNodeDirective, _super);
    function SankeyNodeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SankeyNodeDirective.moduleName = 'sankeyNode';
    return SankeyNodeDirective;
}(ComplexBase));
export { SankeyNodeDirective };
var SankeyNodesCollectionDirective = /** @class */ (function (_super) {
    __extends(SankeyNodesCollectionDirective, _super);
    function SankeyNodesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SankeyNodesCollectionDirective.propertyName = 'nodes';
    SankeyNodesCollectionDirective.moduleName = 'sankeyNodesCollection';
    return SankeyNodesCollectionDirective;
}(ComplexBase));
export { SankeyNodesCollectionDirective };
