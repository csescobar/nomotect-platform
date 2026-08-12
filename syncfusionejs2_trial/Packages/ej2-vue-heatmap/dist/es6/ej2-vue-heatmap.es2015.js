import { HeatMap } from '@syncfusion/ej2-heatmap';
export * from '@syncfusion/ej2-heatmap';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'allowSelection', 'backgroundColor', 'cellSettings', 'dataSource', 'dataSourceSettings', 'enableHtmlSanitizer', 'enableMultiSelect', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'tooltipSettings', 'width', 'xAxis', 'yAxis', 'cellClick', 'cellDoubleClick', 'cellRender', 'cellSelected', 'created', 'legendRender', 'load', 'loaded', 'resized', 'tooltipRender'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Vue HeatMap component.
 * This is used to customize the properties of the heatmap in order to visualize two-dimensional data, with values represented by gradient or solid color variations.
 * ```vue
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
let HeatMapComponent = vueDefineComponent({
    name: 'HeatMapComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new HeatMap({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: {},
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
        clearSelection() {
            return this.ej2Instances.clearSelection();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation) {
            return this.ej2Instances.export(type, fileName, orientation);
        },
        print() {
            return this.ej2Instances.print();
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        refreshBound() {
            return this.ej2Instances.refreshBound();
        },
    }
});
const HeatMapPlugin = {
    name: 'ejs-heatmap',
    install(Vue) {
        Vue.component(HeatMapPlugin.name, HeatMapComponent);
    }
};

export { HeatMapComponent, HeatMapPlugin };
//# sourceMappingURL=ej2-vue-heatmap.es2015.js.map
