import { ProgressBar } from '@syncfusion/ej2-progressbar';
export * from '@syncfusion/ej2-progressbar';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let ProgressBarAnnotationsDirective = vueDefineComponent({
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
            return 'e-progressbar-annotations';
        }
    }
});
const ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install(Vue) {
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
};
let ProgressBarAnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-progressbar-annotation';
        }
    }
});
const ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install(Vue) {
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
    }
};

let RangeColorsDirective = vueDefineComponent({
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
            return 'e-rangecolors';
        }
    }
});
const RangeColorsPlugin = {
    name: 'e-rangecolors',
    install(Vue) {
        Vue.component(RangeColorsPlugin.name, RangeColorsDirective);
    }
};
let RangeColorDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-rangecolor';
        }
    }
});
const RangeColorPlugin = {
    name: 'e-rangecolor',
    install(Vue) {
        Vue.component(RangeColorPlugin.name, RangeColorDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'animation', 'annotations', 'cornerRadius', 'enablePersistence', 'enablePieProgress', 'enableProgressSegments', 'enableRtl', 'endAngle', 'gapWidth', 'height', 'innerRadius', 'isActive', 'isGradient', 'isIndeterminate', 'isStriped', 'labelOnTrack', 'labelStyle', 'locale', 'margin', 'maximum', 'minimum', 'progressColor', 'progressThickness', 'radius', 'rangeColors', 'role', 'secondaryProgress', 'secondaryProgressColor', 'secondaryProgressThickness', 'segmentColor', 'segmentCount', 'showProgressValue', 'startAngle', 'theme', 'tooltip', 'trackColor', 'trackThickness', 'type', 'value', 'width', 'animationComplete', 'load', 'loaded', 'mouseClick', 'mouseDown', 'mouseLeave', 'mouseMove', 'mouseUp', 'progressCompleted', 'textRender', 'tooltipRender', 'valueChanged'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents Vuejs ProgressBar Component
 * ```vue
 * <ejs-progressbar></ejs-progressbar>
 * ```
 */
let ProgressBarComponent = vueDefineComponent({
    name: 'ProgressBarComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ProgressBar({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-progressbar-annotations": "e-progressbar-annotation", "e-rangecolors": "e-rangecolor" },
            tagNameMapper: { "e-progressbar-annotations": "e-annotations", "e-rangecolors": "e-rangeColors" },
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
        calculateProgressRange(value, minimum, maximum) {
            return this.ej2Instances.calculateProgressRange(value, minimum, maximum);
        },
        calculateSegmentSize(width, thickness) {
            return this.ej2Instances.calculateSegmentSize(width, thickness);
        },
        createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum) {
            return this.ej2Instances.createClipPath(clipPath, range, d, refresh, thickness, isLabel, isMaximum);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        getPathLine(x, width, thickness) {
            return this.ej2Instances.getPathLine(x, width, thickness);
        },
        hide() {
            return this.ej2Instances.hide();
        },
        removeSvg() {
            return this.ej2Instances.removeSvg();
        },
        requiredModules() {
            return this.ej2Instances.requiredModules();
        },
        show() {
            return this.ej2Instances.show();
        },
    }
});
const ProgressBarPlugin = {
    name: 'ejs-progressbar',
    install(Vue) {
        Vue.component(ProgressBarPlugin.name, ProgressBarComponent);
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
        Vue.component(RangeColorPlugin.name, RangeColorDirective);
        Vue.component(RangeColorsPlugin.name, RangeColorsDirective);
    }
};

export { ProgressBarAnnotationDirective, ProgressBarAnnotationPlugin, ProgressBarAnnotationsDirective, ProgressBarAnnotationsPlugin, ProgressBarComponent, ProgressBarPlugin, RangeColorDirective, RangeColorPlugin, RangeColorsDirective, RangeColorsPlugin };
//# sourceMappingURL=ej2-vue-progressbar.es2015.js.map
