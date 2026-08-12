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
var SankeyLinkDirective = /** @class */ (function (_super) {
    __extends(SankeyLinkDirective, _super);
    function SankeyLinkDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SankeyLinkDirective.moduleName = 'sankeyLink';
    return SankeyLinkDirective;
}(ComplexBase));
export { SankeyLinkDirective };
var SankeyLinksCollectionDirective = /** @class */ (function (_super) {
    __extends(SankeyLinksCollectionDirective, _super);
    function SankeyLinksCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SankeyLinksCollectionDirective.propertyName = 'links';
    SankeyLinksCollectionDirective.moduleName = 'sankeyLinksCollection';
    return SankeyLinksCollectionDirective;
}(ComplexBase));
export { SankeyLinksCollectionDirective };
