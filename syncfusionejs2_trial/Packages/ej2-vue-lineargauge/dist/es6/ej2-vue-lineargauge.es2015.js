import { LinearGauge } from '@syncfusion/ej2-lineargauge';
export * from '@syncfusion/ej2-lineargauge';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let RangesDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-ranges';
        }
    }
});
const RangesPlugin = {
    name: 'e-ranges',
    install(Vue) {
        Vue.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * Represents the directive to render and customize the ranges in an axis of linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
let RangeDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-range';
        }
    }
});
const RangePlugin = {
    name: 'e-range',
    install(Vue) {
        Vue.component(RangePlugin.name, RangeDirective);
    }
};

let PointersDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-pointers';
        }
    }
});
const PointersPlugin = {
    name: 'e-pointers',
    install(Vue) {
        Vue.component(PointersPlugin.name, PointersDirective);
    }
};
/**
 * Represents the directive to render and customize the pointers in an axis of linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
let PointerDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-pointer';
        }
    }
});
const PointerPlugin = {
    name: 'e-pointer',
    install(Vue) {
        Vue.component(PointerPlugin.name, PointerDirective);
    }
};

let AxesDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-axes';
        }
    }
});
const AxesPlugin = {
    name: 'e-axes',
    install(Vue) {
        Vue.component(AxesPlugin.name, AxesDirective);
    }
};
/**
 * Represents the directive to render the axes in the Linear Gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
 * ```
 */
let AxisDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-axis';
        }
    }
});
const AxisPlugin = {
    name: 'e-axis',
    install(Vue) {
        Vue.component(AxisPlugin.name, AxisDirective);
    }
};

let AnnotationsDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement) {
        if (!isExecute) {
            let h = !isExecute ? gh : createElement;
            let slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated() {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag() {
            return 'e-annotations';
        }
    }
});
const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue) {
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * Represents the directive to render and customize the annotations in the linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </ejs-lineargauge>
 * ```
 */
let AnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-annotation';
        }
    }
});
const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowMargin', 'allowPdfExport', 'allowPrint', 'animationDuration', 'annotations', 'axes', 'background', 'border', 'container', 'description', 'edgeLabelPlacement', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'beforePrint', 'dragEnd', 'dragMove', 'dragStart', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Vue Linear Gauge Component. This tag is used to customize the properties of the linear gauge to visualize the data in linear scale.
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
let LinearGaugeComponent = vueDefineComponent({
    name: 'LinearGaugeComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new LinearGauge({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-axes": { "e-axis": { "e-ranges": "e-range", "e-pointers": "e-pointer" } }, "e-annotations": "e-annotation" },
            tagNameMapper: {},
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement) {
        let h = !isExecute ? gh : createElement;
        let slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = !isExecute ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames) {
            if (!templateNames) {
                templateNames = Object.keys(this.templateCollection || {});
            }
            if (templateNames.length && this.templateCollection) {
                for (let tempName of templateNames) {
                    let elementCollection = this.templateCollection[tempName];
                    if (elementCollection && elementCollection.length) {
                        for (let ele of elementCollection) {
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop, muteOnChange) {
            if (this.isVue3) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map((key) => {
                    this.models.map((model) => {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (this.isVue3) {
                                this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            }
                            else {
                                this.$emit('update:' + key, prop[key]);
                                this.$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        custom() {
            this.updated();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation, allowDownload) {
            return this.ej2Instances.export(type, fileName, orientation, allowDownload);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        setAnnotationValue(annotationIndex, content, axisValue) {
            return this.ej2Instances.setAnnotationValue(annotationIndex, content, axisValue);
        },
        setPointerValue(axisIndex, pointerIndex, value) {
            return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
        },
    }
});
const LinearGaugePlugin = {
    name: 'ejs-lineargauge',
    install(Vue) {
        Vue.component(LinearGaugePlugin.name, LinearGaugeComponent);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(PointerPlugin.name, PointerDirective);
        Vue.component(PointersPlugin.name, PointersDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { AnnotationDirective, AnnotationPlugin, AnnotationsDirective, AnnotationsPlugin, AxesDirective, AxesPlugin, AxisDirective, AxisPlugin, LinearGaugeComponent, LinearGaugePlugin, PointerDirective, PointerPlugin, PointersDirective, PointersPlugin, RangeDirective, RangePlugin, RangesDirective, RangesPlugin };
//# sourceMappingURL=ej2-vue-lineargauge.es2015.js.map
