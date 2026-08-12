import { createElement, Component } from 'react';
import { BlockEditor } from '@syncfusion/ej2-blockeditor';
export * from '@syncfusion/ej2-blockeditor';
import { applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';

/**
 * Represents the React BlockEditor Component
 * ```tsx
 * <BlockEditorComponent></BlockEditorComponent>
 * ```
 */
class BlockEditorComponent extends BlockEditor {
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
applyMixins(BlockEditorComponent, [ComponentBase, Component]);

export { BlockEditorComponent };
//# sourceMappingURL=ej2-react-blockeditor.es2015.js.map
