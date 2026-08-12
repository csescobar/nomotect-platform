import { Splitter, DashboardLayout, Timeline } from '@syncfusion/ej2-layouts';
export * from '@syncfusion/ej2-layouts';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let PanesDirective = vueDefineComponent({
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
            return 'e-panes';
        }
    }
});
const PanesPlugin = {
    name: 'e-panes',
    install(Vue) {
        Vue.component(PanesPlugin.name, PanesDirective);
    }
};
/**
 * 'e-pane' directive represent a pane of Vue Splitter
 * It must be contained in a Splitter component(`ejs-splitter`).
 * ```html
 * <ejs-splitter id='splitter'>
 *   <e-panes>
 *    <e-pane size='150px'></e-pane>
 *    <e-pane size='150px'></e-pane>
 *   </e-panes>
 * </ejs-splitter>
 * ```
 */
let PaneDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-pane';
        }
    }
});
const PanePlugin = {
    name: 'e-pane',
    install(Vue) {
        Vue.component(PanePlugin.name, PaneDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableReversePanes', 'enableRtl', 'enabled', 'height', 'locale', 'orientation', 'paneSettings', 'separatorSize', 'width', 'beforeCollapse', 'beforeExpand', 'beforeSanitizeHtml', 'collapsed', 'created', 'expanded', 'resizeStart', 'resizeStop', 'resizing'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the VueJS Splitter component
 * ```html
 * <ejs-splitter></ejs-splitter>
 * ```
 */
let SplitterComponent = vueDefineComponent({
    name: 'SplitterComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Splitter({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-panes": "e-pane" },
            tagNameMapper: { "e-panes": "e-paneSettings" },
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
        addPane(paneProperties, index) {
            return this.ej2Instances.addPane(paneProperties, index);
        },
        collapse(index) {
            return this.ej2Instances.collapse(index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        expand(index) {
            return this.ej2Instances.expand(index);
        },
        removePane(index) {
            return this.ej2Instances.removePane(index);
        },
    }
});
const SplitterPlugin = {
    name: 'ejs-splitter',
    install(Vue) {
        Vue.component(SplitterPlugin.name, SplitterComponent);
        Vue.component(PanePlugin.name, PaneDirective);
        Vue.component(PanesPlugin.name, PanesDirective);
    }
};

let PanelsDirective = vueDefineComponent({
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
            return 'e-panels';
        }
    }
});
const PanelsPlugin = {
    name: 'e-panels',
    install(Vue) {
        Vue.component(PanelsPlugin.name, PanelsDirective);
    }
};
/**
 * 'e-panels' directive represent a presets of VueJS dashboardlayout component
 * It must be contained in a dashboardlayout component(`ejs-dashboardlayout`).
 * ```html
 * <ejs-dashboardlayout>
 *   <e-panels>
 *   <e-panel></e-panel>
 *   <e-panel></e-panel>
 *   </e-panels>
 * </ejs-dashboardlayout>
 * ```
 */
let PanelDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-panel';
        }
    }
});
const PanelPlugin = {
    name: 'e-panel',
    install(Vue) {
        Vue.component(PanelPlugin.name, PanelDirective);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'allowDragging', 'allowFloating', 'allowPushing', 'allowResizing', 'cellAspectRatio', 'cellSpacing', 'columns', 'draggableHandle', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mediaQuery', 'panels', 'resizableHandles', 'showGridLines', 'change', 'created', 'destroyed', 'drag', 'dragStart', 'dragStop', 'resize', 'resizeStart', 'resizeStop'];
const modelProps$1 = [];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS DashboardLayout Component.
 * ```html
 * <ejs-dashboardlayout></ejs-dashboardlayout>
 * ```
 */
let DashboardLayoutComponent = vueDefineComponent({
    name: 'DashboardLayoutComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new DashboardLayout({}),
            propKeys: properties$1,
            models: modelProps$1,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-panels": "e-panel" },
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
        addPanel(panel) {
            return this.ej2Instances.addPanel(panel);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        movePanel(id, row, col) {
            return this.ej2Instances.movePanel(id, row, col);
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        refreshDraggableHandle() {
            return this.ej2Instances.refreshDraggableHandle();
        },
        removeAll() {
            return this.ej2Instances.removeAll();
        },
        removePanel(id) {
            return this.ej2Instances.removePanel(id);
        },
        resizePanel(id, sizeX, sizeY) {
            return this.ej2Instances.resizePanel(id, sizeX, sizeY);
        },
        serialize() {
            return this.ej2Instances.serialize();
        },
        updatePanel(panel) {
            return this.ej2Instances.updatePanel(panel);
        },
    }
});
const DashboardLayoutPlugin = {
    name: 'ejs-dashboardlayout',
    install(Vue) {
        Vue.component(DashboardLayoutPlugin.name, DashboardLayoutComponent);
        Vue.component(PanelPlugin.name, PanelDirective);
        Vue.component(PanelsPlugin.name, PanelsDirective);
    }
};

let ItemsDirective = vueDefineComponent({
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
            return 'e-items';
        }
    }
});
const ItemsPlugin = {
    name: 'e-items',
    install(Vue) {
        Vue.component(ItemsPlugin.name, ItemsDirective);
    }
};
/**
 * 'e-timelineItem' directive represents a item of the Vue Timeline
 * It must be contained in a Timeline component(`ejs-timeline`).
 * ```html
 * <ejs-timeline>
 *  <e-items>
 *   <e-item :dotCss='e-icons e-folder' :content='Item 1' />
 *   <e-item :dotCss='e-icons e-folder' :content='Item 2' />
 *  </e-items>
 * </ejs-timeline>
 * ```
 */
let ItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-item';
        }
    }
});
const ItemPlugin = {
    name: 'e-item',
    install(Vue) {
        Vue.component(ItemPlugin.name, ItemDirective);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'align', 'cssClass', 'enablePersistence', 'enableRtl', 'items', 'locale', 'orientation', 'reverse', 'template', 'beforeItemRender', 'created'];
const modelProps$2 = [];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Timeline Component.
 * ```html
 * <ejs-timeline :items='timelineItems'></ejs-timeline>
 * ```
 */
let TimelineComponent = vueDefineComponent({
    name: 'TimelineComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Timeline({}),
            propKeys: properties$2,
            models: modelProps$2,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-items": "e-item" },
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
    }
});
const TimelinePlugin = {
    name: 'ejs-timeline',
    install(Vue) {
        Vue.component(TimelinePlugin.name, TimelineComponent);
        Vue.component(ItemPlugin.name, ItemDirective);
        Vue.component(ItemsPlugin.name, ItemsDirective);
    }
};

export { DashboardLayoutComponent, DashboardLayoutPlugin, ItemDirective, ItemPlugin, ItemsDirective, ItemsPlugin, PaneDirective, PanePlugin, PanelDirective, PanelPlugin, PanelsDirective, PanelsPlugin, PanesDirective, PanesPlugin, SplitterComponent, SplitterPlugin, TimelineComponent, TimelinePlugin };
//# sourceMappingURL=ej2-vue-layouts.es2015.js.map
