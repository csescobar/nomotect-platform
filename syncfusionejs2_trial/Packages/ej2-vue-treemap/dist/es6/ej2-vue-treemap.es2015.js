import { TreeMap } from '@syncfusion/ej2-treemap';
export * from '@syncfusion/ej2-treemap';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let ColorMappingsDirective = vueDefineComponent({
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
            return 'e-colorMappings';
        }
    }
});
const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue) {
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
let ColorMappingDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-colorMapping';
        }
    }
});
const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
};

let LevelsDirective = vueDefineComponent({
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
            return 'e-levels';
        }
    }
});
const LevelsPlugin = {
    name: 'e-levels',
    install(Vue) {
        Vue.component(LevelsPlugin.name, LevelsDirective);
    }
};
/**
 * Represents the directive to configure and render level leaf items in the treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
let LevelDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-level';
        }
    }
});
const LevelPlugin = {
    name: 'e-level',
    install(Vue) {
        Vue.component(LevelPlugin.name, LevelDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'background', 'border', 'breadcrumbConnector', 'colorValuePath', 'dataSource', 'description', 'drillDownView', 'enableBreadcrumb', 'enableDrillDown', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'equalColorValuePath', 'format', 'height', 'highlightSettings', 'initialDrillDown', 'layoutType', 'leafItemSettings', 'legendSettings', 'levels', 'locale', 'margin', 'palette', 'query', 'rangeColorValuePath', 'renderDirection', 'selectionSettings', 'tabIndex', 'theme', 'titleSettings', 'tooltipSettings', 'useGroupingSeparator', 'weightValuePath', 'width', 'beforePrint', 'click', 'doubleClick', 'drillEnd', 'drillStart', 'itemClick', 'itemHighlight', 'itemMove', 'itemRendering', 'itemSelected', 'legendItemRendering', 'legendRendering', 'load', 'loaded', 'mouseMove', 'resize', 'rightClick', 'tooltipRendering'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Vue TreeMap component. It is used to visualize both hierarchical and flat data.
 * ```vue
 * <ejs-treemap></ejs-treemap>
 * ```
 */
let TreeMapComponent = vueDefineComponent({
    name: 'TreeMapComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new TreeMap({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-levels": { "e-level": { "e-colorMappings": "e-colorMapping" } } },
            tagNameMapper: { "e-colorMappings": "e-colorMapping" },
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
        doubleClickOnTreeMap(e) {
            return this.ej2Instances.doubleClickOnTreeMap(e);
        },
        export(type, fileName, orientation, allowDownload) {
            return this.ej2Instances.export(type, fileName, orientation, allowDownload);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        selectItem(levelOrder, isSelected) {
            return this.ej2Instances.selectItem(levelOrder, isSelected);
        },
    }
});
const TreeMapPlugin = {
    name: 'ejs-treemap',
    install(Vue) {
        Vue.component(TreeMapPlugin.name, TreeMapComponent);
        Vue.component(LevelPlugin.name, LevelDirective);
        Vue.component(LevelsPlugin.name, LevelsDirective);
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};

export { ColorMappingDirective, ColorMappingPlugin, ColorMappingsDirective, ColorMappingsPlugin, LevelDirective, LevelPlugin, LevelsDirective, LevelsPlugin, TreeMapComponent, TreeMapPlugin };
//# sourceMappingURL=ej2-vue-treemap.es2015.js.map
