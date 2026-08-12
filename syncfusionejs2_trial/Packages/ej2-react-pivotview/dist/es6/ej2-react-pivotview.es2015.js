import { createElement, Component } from 'react';
import { PivotView, PivotFieldList } from '@syncfusion/ej2-pivotview';
export * from '@syncfusion/ej2-pivotview';
import { applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';

/**
 * `PivotViewComponent` represents the react Pivot Table.
 * ```tsx
 * <PivotViewComponent></PivotViewComponent>
 * ```
 */
class PivotViewComponent extends PivotView {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = false;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(PivotViewComponent, [ComponentBase, Component]);

/**
 * `PivotFieldListComponent` represents the react PivotFieldList.
 * ```tsx
 * <PivotFieldListComponent/>
 * ```
 */
class PivotFieldListComponent extends PivotFieldList {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = true;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(PivotFieldListComponent, [ComponentBase, Component]);

export { PivotFieldListComponent, PivotViewComponent };
//# sourceMappingURL=ej2-react-pivotview.es2015.js.map
