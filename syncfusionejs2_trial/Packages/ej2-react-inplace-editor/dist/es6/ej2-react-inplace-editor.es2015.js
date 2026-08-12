import { createElement, Component } from 'react';
import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
export * from '@syncfusion/ej2-inplace-editor';
import { applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';

/**
 * `InPlaceEditor` represents the react InPlaceEditor.
 * ```tsx
 * <InPlaceEditor />
 * ```
 */
class InPlaceEditorComponent extends InPlaceEditor {
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
applyMixins(InPlaceEditorComponent, [ComponentBase, Component]);

export { InPlaceEditorComponent };
//# sourceMappingURL=ej2-react-inplace-editor.es2015.js.map
