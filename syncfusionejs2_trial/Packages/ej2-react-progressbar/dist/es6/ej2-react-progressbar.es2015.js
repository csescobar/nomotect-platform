import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { ProgressBar } from '@syncfusion/ej2-progressbar';
export * from '@syncfusion/ej2-progressbar';

/**
 * `ProgressBarAnnotationsDirective` directive represent a annotation of the react progressbar.
 * ```tsx
 * <progressbarComponent>
 * <ProgressBarAnnotationsDirective>
 * <ProgressBarAnnotationDirective></ProgressBarAnnotationDirective>
 * </ProgressBarAnnotationsDirective>
 * </progressbarComponent>
 * ```
 */
class ProgressBarAnnotationDirective extends ComplexBase {
}
ProgressBarAnnotationDirective.moduleName = 'progressBarAnnotation';
class ProgressBarAnnotationsDirective extends ComplexBase {
}
ProgressBarAnnotationsDirective.propertyName = 'annotations';
ProgressBarAnnotationsDirective.moduleName = 'progressBarAnnotations';

class RangeColorDirective extends ComplexBase {
}
RangeColorDirective.moduleName = 'rangeColor';
class RangeColorsDirective extends ComplexBase {
}
RangeColorsDirective.propertyName = 'rangeColors';
RangeColorsDirective.moduleName = 'rangeColors';

/**
 * Represents react ProgressBar Component
 * ```tsx
 * <ProgressBarComponent></ProgressBarComponent>
 * ```
 */
class ProgressBarComponent extends ProgressBar {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'progressBarAnnotations': 'progressBarAnnotation', 'rangeColors': 'rangeColor' };
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
applyMixins(ProgressBarComponent, [ComponentBase, Component]);

export { ProgressBarAnnotationDirective, ProgressBarAnnotationsDirective, ProgressBarComponent, RangeColorDirective, RangeColorsDirective };
//# sourceMappingURL=ej2-react-progressbar.es2015.js.map
