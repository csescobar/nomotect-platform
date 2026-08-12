import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
export * from '@syncfusion/ej2-lineargauge';

/**
 * Represents the directive to render the axes in the Linear Gauge.
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective></AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class AxisDirective extends ComplexBase {
}
AxisDirective.moduleName = 'axis';
class AxesDirective extends ComplexBase {
}
AxesDirective.propertyName = 'axes';
AxesDirective.moduleName = 'axes';

/**
 * Represents the directive to render and customize the ranges in an axis of linear gauge.
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <RangesDirective>
 * <RangeDirective></RangeDirective>
 * </RangesDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class RangeDirective extends ComplexBase {
}
RangeDirective.moduleName = 'range';
class RangesDirective extends ComplexBase {
}
RangesDirective.propertyName = 'ranges';
RangesDirective.moduleName = 'ranges';

/**
 * Represents the directive to render and customize the pointers in an axis of linear gauge.
 * ```tsx
 * <LinearGaugeComponent>
 * <AxesDirective>
 * <AxisDirective>
 * <PointersDirective>
 * <PointerDirective></PointerDirective>
 * </PointersDirective>
 * </AxisDirective>
 * </AxesDirective>
 * </LinearGaugeComponent>
 * ```
 */
class PointerDirective extends ComplexBase {
}
PointerDirective.moduleName = 'pointer';
class PointersDirective extends ComplexBase {
}
PointersDirective.propertyName = 'pointers';
PointersDirective.moduleName = 'pointers';

/**
 * Represents the directive to render and customize the annotations in the linear gauge.
 * ```tsx
 * <LinearGaugeComponent>
 * <AnnotationsDirective>
 * <AnnotationDirective></AnnotationDirective>
 * </AnnotationsDirective>
 * </LinearGaugeComponent>
 * ```
 */
class AnnotationDirective extends ComplexBase {
}
AnnotationDirective.moduleName = 'annotation';
class AnnotationsDirective extends ComplexBase {
}
AnnotationsDirective.propertyName = 'annotations';
AnnotationsDirective.moduleName = 'annotations';

/**
 * Represents the React Linear Gauge Component. This tag is used to customize the properties of the linear gauge to visualize the data in linear scale.
 * ```tsx
 * <LinearGaugeComponent></LinearGaugeComponent>
 * ```
 */
class LinearGaugeComponent extends LinearGauge {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'axes': { 'axis': { 'ranges': 'range', 'pointers': 'pointer' } }, 'annotations': 'annotation' };
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
applyMixins(LinearGaugeComponent, [ComponentBase, Component]);

export { AnnotationDirective, AnnotationsDirective, AxesDirective, AxisDirective, LinearGaugeComponent, PointerDirective, PointersDirective, RangeDirective, RangesDirective };
//# sourceMappingURL=ej2-react-lineargauge.es2015.js.map
