import { Accordion, Toolbar, ContextMenu, Breadcrumb, Carousel, Tab, TreeView, Sidebar, Menu, AppBar, Stepper } from '@syncfusion/ej2-navigations';
export * from '@syncfusion/ej2-navigations';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let AccordionItemsDirective = vueDefineComponent({
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
            return 'e-accordionitems';
        }
    }
});
const AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install(Vue) {
        Vue.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
};
/**
 * 'e-accordionitem' directive represent a item of Vue Accordion
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
let AccordionItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-accordionitem';
        }
    }
});
const AccordionItemPlugin = {
    name: 'e-accordionitem',
    install(Vue) {
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'animation', 'dataSource', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandMode', 'expandedIndices', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width', 'clicked', 'created', 'destroyed', 'expanded', 'expanding'];
const modelProps = ['expandedIndices'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the VueJS Accordion Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
let AccordionComponent = vueDefineComponent({
    name: 'AccordionComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Accordion({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-accordionitems": "e-accordionitem" },
            tagNameMapper: { "e-accordionitems": "e-items" },
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom() {
            this.updated();
        },
        addItem(item, index) {
            return this.ej2Instances.addItem(item, index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        enableItem(index, isEnable) {
            return this.ej2Instances.enableItem(index, isEnable);
        },
        expandItem(isExpand, index) {
            return this.ej2Instances.expandItem(isExpand, index);
        },
        hideItem(index, isHidden) {
            return this.ej2Instances.hideItem(index, isHidden);
        },
        removeItem(index) {
            return this.ej2Instances.removeItem(index);
        },
        select(index) {
            return this.ej2Instances.select(index);
        },
    }
});
const AccordionPlugin = {
    name: 'ejs-accordion',
    install(Vue) {
        Vue.component(AccordionPlugin.name, AccordionComponent);
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
        Vue.component(AccordionItemsPlugin.name, AccordionItemsDirective);
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
 * 'e-item' directive represent a item of Vue Toolbar
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
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

const properties$1 = ['isLazyUpdate', 'plugins', 'allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width', 'beforeCreate', 'clicked', 'created', 'destroyed', 'keyDown'];
const modelProps$1 = [];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents the VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
let ToolbarComponent = vueDefineComponent({
    name: 'ToolbarComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Toolbar({}),
            propKeys: properties$1,
            models: modelProps$1,
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
        addItems(items, index) {
            return this.ej2Instances.addItems(items, index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disable(value) {
            return this.ej2Instances.disable(value);
        },
        enableItems(items, isEnable) {
            return this.ej2Instances.enableItems(items, isEnable);
        },
        hideItem(index, value) {
            return this.ej2Instances.hideItem(index, value);
        },
        refreshOverflow() {
            return this.ej2Instances.refreshOverflow();
        },
        removeItems(args) {
            return this.ej2Instances.removeItems(args);
        },
    }
});
const ToolbarPlugin = {
    name: 'ejs-toolbar',
    install(Vue) {
        Vue.component(ToolbarPlugin.name, ToolbarComponent);
        Vue.component(ItemPlugin.name, ItemDirective);
        Vue.component(ItemsPlugin.name, ItemsDirective);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hoverDelay', 'itemTemplate', 'items', 'locale', 'showItemOnClick', 'target', 'template', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const modelProps$2 = [];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
 * ```
 */
let ContextMenuComponent = vueDefineComponent({
    name: 'ContextMenuComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ContextMenu({}),
            propKeys: properties$2,
            models: modelProps$2,
            hasChildDirective: false,
            hasInjectedModules: false,
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
        return h('ul', slots);
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
        close() {
            return this.ej2Instances.close();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        enableItems(items, enable, isUniqueId) {
            return this.ej2Instances.enableItems(items, enable, isUniqueId);
        },
        getItemIndex(item, isUniqueId) {
            return this.ej2Instances.getItemIndex(item, isUniqueId);
        },
        getMenuWidth(menuElement, width, isRtl) {
            return this.ej2Instances.getMenuWidth(menuElement, width, isRtl);
        },
        hideItems(items, isUniqueId) {
            return this.ej2Instances.hideItems(items, isUniqueId);
        },
        insertAfter(items, text, isUniqueId) {
            return this.ej2Instances.insertAfter(items, text, isUniqueId);
        },
        insertBefore(items, text, isUniqueId) {
            return this.ej2Instances.insertBefore(items, text, isUniqueId);
        },
        open(top, left, target) {
            return this.ej2Instances.open(top, left, target);
        },
        removeItems(items, isUniqueId) {
            return this.ej2Instances.removeItems(items, isUniqueId);
        },
        setItem(item, id, isUniqueId) {
            return this.ej2Instances.setItem(item, id, isUniqueId);
        },
        showItems(items, isUniqueId) {
            return this.ej2Instances.showItems(items, isUniqueId);
        },
    }
});
const ContextMenuPlugin = {
    name: 'ejs-contextmenu',
    install(Vue) {
        Vue.component(ContextMenuPlugin.name, ContextMenuComponent);
    }
};

let BreadcrumbItemsDirective = vueDefineComponent({
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
            return 'e-breadcrumb-items';
        }
    }
});
const BreadcrumbItemsPlugin = {
    name: 'e-breadcrumb-items',
    install(Vue) {
        Vue.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
};
/**
 * `e-breadcrumb-item` directive represent a item of the Vue Breadcrumb.
 * It must be contained in a Breadcrumb component(`ejs-breadcrumb`).
 * ```html
 * <ejs-breadcrumb>
 *   <e-breadcrumb-items>
 *    <e-breadcrumb-item text='Home' url='/'></e-breadcrumb-item>
 *    <e-breadcrumb-item text='Index' url='./index'></e-breadcrumb-item>
 *   </e-breadcrumb-items>
 * </ejs-breadcrumb>
 * ```
 */
let BreadcrumbItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-breadcrumb-item';
        }
    }
});
const BreadcrumbItemPlugin = {
    name: 'e-breadcrumb-item',
    install(Vue) {
        Vue.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
    }
};

const properties$3 = ['isLazyUpdate', 'plugins', 'activeItem', 'cssClass', 'disabled', 'enableActiveItemNavigation', 'enableNavigation', 'enablePersistence', 'enableRtl', 'itemTemplate', 'items', 'locale', 'maxItems', 'overflowMode', 'separatorTemplate', 'url', 'beforeItemRender', 'created', 'itemClick'];
const modelProps$3 = ['activeItem'];
const testProp$3 = getProps({ props: properties$3 });
const props$3 = testProp$3[0], watch$3 = testProp$3[1], emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (let props of modelProps$3) {
    emitProbs$3.push('update:' + props);
}
/**
 * Represents the VueJS Breadcrumb Component.
 * ```html
 * <ejs-breadcrumb :items='breadcrumbItems'></ejs-breadcrumb>
 * ```
 */
let BreadcrumbComponent = vueDefineComponent({
    name: 'BreadcrumbComponent',
    mixins: [ComponentBase],
    props: props$3,
    watch: watch$3,
    emits: emitProbs$3,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Breadcrumb({}),
            propKeys: properties$3,
            models: modelProps$3,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-breadcrumb-items": "e-breadcrumb-item" },
            tagNameMapper: { "e-breadcrumb-items": "e-items" },
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        return h('nav', slots);
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
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
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
const BreadcrumbPlugin = {
    name: 'ejs-breadcrumb',
    install(Vue) {
        Vue.component(BreadcrumbPlugin.name, BreadcrumbComponent);
        Vue.component(BreadcrumbItemPlugin.name, BreadcrumbItemDirective);
        Vue.component(BreadcrumbItemsPlugin.name, BreadcrumbItemsDirective);
    }
};

let CarouselItemsDirective = vueDefineComponent({
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
            return 'e-carousel-items';
        }
    }
});
const CarouselItemsPlugin = {
    name: 'e-carousel-items',
    install(Vue) {
        Vue.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};
/**
 * `e-carousel-item` directive represent a item of the Vue Carousel.
 * It must be contained in a Carousel component(`ejs-carousel`).
 * ```html
 * <ejs-carousel>
 *   <e-carousel-items>
 *    <e-carousel-item template='itemTemplate'></e-carousel-item>
 *    <e-carousel-item template='secondItemTemplate'></e-carousel-item>
 *   </e-carousel-items>
 * </ejs-carousel>
 * ```
 */
let CarouselItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-carousel-item';
        }
    }
});
const CarouselItemPlugin = {
    name: 'e-carousel-item',
    install(Vue) {
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
    }
};

const properties$4 = ['isLazyUpdate', 'plugins', 'allowKeyboardInteraction', 'animationEffect', 'autoPlay', 'buttonsVisibility', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enableTouchSwipe', 'height', 'htmlAttributes', 'indicatorsTemplate', 'indicatorsType', 'interval', 'itemTemplate', 'items', 'locale', 'loop', 'nextButtonTemplate', 'partialVisible', 'pauseOnHover', 'playButtonTemplate', 'previousButtonTemplate', 'selectedIndex', 'showIndicators', 'showPlayButton', 'swipeMode', 'width', 'slideChanged', 'slideChanging'];
const modelProps$4 = ['selectedIndex'];
const testProp$4 = getProps({ props: properties$4 });
const props$4 = testProp$4[0], watch$4 = testProp$4[1], emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (let props of modelProps$4) {
    emitProbs$4.push('update:' + props);
}
/**
 * Represents the VueJS Carousel Component.
 * ```html
 * <ejs-carousel :items='carouselItems'></ejs-carousel>
 * ```
 */
let CarouselComponent = vueDefineComponent({
    name: 'CarouselComponent',
    mixins: [ComponentBase],
    props: props$4,
    watch: watch$4,
    emits: emitProbs$4,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Carousel({}),
            propKeys: properties$4,
            models: modelProps$4,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-carousel-items": "e-carousel-item" },
            tagNameMapper: { "e-carousel-items": "e-items" },
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom() {
            this.updated();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        next() {
            return this.ej2Instances.next();
        },
        pause() {
            return this.ej2Instances.pause();
        },
        play() {
            return this.ej2Instances.play();
        },
        prev() {
            return this.ej2Instances.prev();
        },
    }
});
const CarouselPlugin = {
    name: 'ejs-carousel',
    install(Vue) {
        Vue.component(CarouselPlugin.name, CarouselComponent);
        Vue.component(CarouselItemPlugin.name, CarouselItemDirective);
        Vue.component(CarouselItemsPlugin.name, CarouselItemsDirective);
    }
};

let TabItemsDirective = vueDefineComponent({
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
            return 'e-tabitems';
        }
    }
});
const TabItemsPlugin = {
    name: 'e-tabitems',
    install(Vue) {
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
};
/**
 * 'e-tabitem' directive represent a item of the Vue Tab
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
let TabItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-tabitem';
        }
    }
});
const TabItemPlugin = {
    name: 'e-tabitem',
    install(Vue) {
        Vue.component(TabItemPlugin.name, TabItemDirective);
    }
};

const properties$5 = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'animation', 'clearTemplates', 'cssClass', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'reorderActiveTab', 'scrollStep', 'selectedItem', 'showCloseButton', 'swipeMode', 'width', 'added', 'adding', 'created', 'destroyed', 'dragged', 'dragging', 'onDragStart', 'removed', 'removing', 'selected', 'selecting'];
const modelProps$5 = [];
const testProp$5 = getProps({ props: properties$5 });
const props$5 = testProp$5[0], watch$5 = testProp$5[1], emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (let props of modelProps$5) {
    emitProbs$5.push('update:' + props);
}
/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
let TabComponent = vueDefineComponent({
    name: 'TabComponent',
    mixins: [ComponentBase],
    props: props$5,
    watch: watch$5,
    emits: emitProbs$5,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Tab({}),
            propKeys: properties$5,
            models: modelProps$5,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-tabitems": "e-tabitem" },
            tagNameMapper: { "e-tabitems": "e-items" },
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
        addTab(items, index) {
            return this.ej2Instances.addTab(items, index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disable(value) {
            return this.ej2Instances.disable(value);
        },
        enableTab(index, value) {
            return this.ej2Instances.enableTab(index, value);
        },
        getItemIndex(tabItemId) {
            return this.ej2Instances.getItemIndex(tabItemId);
        },
        hideTab(index, value) {
            return this.ej2Instances.hideTab(index, value);
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        refreshActiveTab() {
            return this.ej2Instances.refreshActiveTab();
        },
        refreshActiveTabBorder() {
            return this.ej2Instances.refreshActiveTabBorder();
        },
        refreshOverflow() {
            return this.ej2Instances.refreshOverflow();
        },
        removeTab(index) {
            return this.ej2Instances.removeTab(index);
        },
        select(args, event) {
            return this.ej2Instances.select(args, event);
        },
    }
});
const TabPlugin = {
    name: 'ejs-tab',
    install(Vue) {
        Vue.component(TabPlugin.name, TabComponent);
        Vue.component(TabItemPlugin.name, TabItemDirective);
        Vue.component(TabItemsPlugin.name, TabItemsDirective);
    }
};

const properties$6 = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'allowTextWrap', 'animation', 'autoCheck', 'checkDisabledChildren', 'checkOnClick', 'checkedNodes', 'cssClass', 'disableHtmlEncode', 'disabled', 'dragArea', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
const modelProps$6 = [];
const testProp$6 = getProps({ props: properties$6 });
const props$6 = testProp$6[0], watch$6 = testProp$6[1], emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (let props of modelProps$6) {
    emitProbs$6.push('update:' + props);
}
/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
let TreeViewComponent = vueDefineComponent({
    name: 'TreeViewComponent',
    mixins: [ComponentBase],
    props: props$6,
    watch: watch$6,
    emits: emitProbs$6,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new TreeView({}),
            propKeys: properties$6,
            models: modelProps$6,
            hasChildDirective: false,
            hasInjectedModules: false,
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
        addNodes(nodes, target, index, preventTargetExpand) {
            return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
        },
        beginEdit(node) {
            return this.ej2Instances.beginEdit(node);
        },
        checkAll(nodes) {
            return this.ej2Instances.checkAll(nodes);
        },
        collapseAll(nodes, level, excludeHiddenNodes) {
            return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableNodes(nodes) {
            return this.ej2Instances.disableNodes(nodes);
        },
        enableNodes(nodes) {
            return this.ej2Instances.enableNodes(nodes);
        },
        ensureVisible(node) {
            return this.ej2Instances.ensureVisible(node);
        },
        expandAll(nodes, level, excludeHiddenNodes, preventAnimation) {
            return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes, preventAnimation);
        },
        getAllCheckedNodes() {
            return this.ej2Instances.getAllCheckedNodes();
        },
        getDisabledNodes() {
            return this.ej2Instances.getDisabledNodes();
        },
        getNode(node) {
            return this.ej2Instances.getNode(node);
        },
        getTreeData(node) {
            return this.ej2Instances.getTreeData(node);
        },
        moveNodes(sourceNodes, target, index, preventTargetExpand) {
            return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
        },
        refreshNode(target, newData) {
            return this.ej2Instances.refreshNode(target, newData);
        },
        removeNodes(nodes) {
            return this.ej2Instances.removeNodes(nodes);
        },
        uncheckAll(nodes) {
            return this.ej2Instances.uncheckAll(nodes);
        },
        updateNode(target, newText) {
            return this.ej2Instances.updateNode(target, newText);
        },
    }
});
const TreeViewPlugin = {
    name: 'ejs-treeview',
    install(Vue) {
        Vue.component(TreeViewPlugin.name, TreeViewComponent);
    }
};

const properties$7 = ['isLazyUpdate', 'plugins', 'animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex', 'change', 'close', 'created', 'destroyed', 'open'];
const modelProps$7 = ['isOpen'];
const testProp$7 = getProps({ props: properties$7 });
const props$7 = testProp$7[0], watch$7 = testProp$7[1], emitProbs$7 = Object.keys(watch$7);
emitProbs$7.push('modelchanged', 'update:modelValue');
for (let props of modelProps$7) {
    emitProbs$7.push('update:' + props);
}
/**
 *  Represents the Essential JS 2 VueJS Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
let SidebarComponent = vueDefineComponent({
    name: 'SidebarComponent',
    mixins: [ComponentBase],
    props: props$7,
    watch: watch$7,
    emits: emitProbs$7,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Sidebar({}),
            propKeys: properties$7,
            models: modelProps$7,
            hasChildDirective: false,
            hasInjectedModules: false,
            tagMapper: {},
            tagNameMapper: {},
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom() {
            this.updated();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        hide(e) {
            return this.ej2Instances.hide(e);
        },
        show(e) {
            return this.ej2Instances.show(e);
        },
        toggle() {
            return this.ej2Instances.toggle();
        },
    }
});
const SidebarPlugin = {
    name: 'ejs-sidebar',
    install(Vue) {
        Vue.component(SidebarPlugin.name, SidebarComponent);
    }
};

let MenuItemsDirective = vueDefineComponent({
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
            return 'e-menu-items';
        }
    }
});
const MenuItemsPlugin = {
    name: 'e-menu-items',
    install(Vue) {
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};
let MenuItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-';
        }
    }
});
const MenuItemPlugin = {
    name: 'e-',
    install(Vue) {
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
    }
};

const properties$8 = ['isLazyUpdate', 'plugins', 'animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'hoverDelay', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const modelProps$8 = [];
const testProp$8 = getProps({ props: properties$8 });
const props$8 = testProp$8[0], watch$8 = testProp$8[1], emitProbs$8 = Object.keys(watch$8);
emitProbs$8.push('modelchanged', 'update:modelValue');
for (let props of modelProps$8) {
    emitProbs$8.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
let MenuComponent = vueDefineComponent({
    name: 'MenuComponent',
    mixins: [ComponentBase],
    props: props$8,
    watch: watch$8,
    emits: emitProbs$8,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Menu({}),
            propKeys: properties$8,
            models: modelProps$8,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-menu-items": "e-" },
            tagNameMapper: { "e-menu-items": "e-items" },
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
        return h('ul', slots);
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
        close() {
            return this.ej2Instances.close();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        enableItems(items, enable, isUniqueId) {
            return this.ej2Instances.enableItems(items, enable, isUniqueId);
        },
        getItemIndex(item, isUniqueId) {
            return this.ej2Instances.getItemIndex(item, isUniqueId);
        },
        getMenuWidth(menuElement, width, isRtl) {
            return this.ej2Instances.getMenuWidth(menuElement, width, isRtl);
        },
        hideItems(items, isUniqueId) {
            return this.ej2Instances.hideItems(items, isUniqueId);
        },
        insertAfter(items, text, isUniqueId) {
            return this.ej2Instances.insertAfter(items, text, isUniqueId);
        },
        insertBefore(items, text, isUniqueId) {
            return this.ej2Instances.insertBefore(items, text, isUniqueId);
        },
        open() {
            return this.ej2Instances.open();
        },
        removeItems(items, isUniqueId) {
            return this.ej2Instances.removeItems(items, isUniqueId);
        },
        setItem(item, id, isUniqueId) {
            return this.ej2Instances.setItem(item, id, isUniqueId);
        },
        showItems(items, isUniqueId) {
            return this.ej2Instances.showItems(items, isUniqueId);
        },
    }
});
const MenuPlugin = {
    name: 'ejs-menu',
    install(Vue) {
        Vue.component(MenuPlugin.name, MenuComponent);
        Vue.component(MenuItemPlugin.name, MenuItemDirective);
        Vue.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};

const properties$9 = ['isLazyUpdate', 'plugins', 'colorMode', 'cssClass', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'isSticky', 'locale', 'mode', 'position', 'created', 'destroyed'];
const modelProps$9 = [];
const testProp$9 = getProps({ props: properties$9 });
const props$9 = testProp$9[0], watch$9 = testProp$9[1], emitProbs$9 = Object.keys(watch$9);
emitProbs$9.push('modelchanged', 'update:modelValue');
for (let props of modelProps$9) {
    emitProbs$9.push('update:' + props);
}
/**
 *  Represents the Essential JS 2 VueJS AppBar Component.
 * ```html
 * <ejs-appbar></ejs-appbar>
 * ```
 */
let AppBarComponent = vueDefineComponent({
    name: 'AppBarComponent',
    mixins: [ComponentBase],
    props: props$9,
    watch: watch$9,
    emits: emitProbs$9,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new AppBar({}),
            propKeys: properties$9,
            models: modelProps$9,
            hasChildDirective: false,
            hasInjectedModules: false,
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
        return h('header', slots);
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
const AppBarPlugin = {
    name: 'ejs-appbar',
    install(Vue) {
        Vue.component(AppBarPlugin.name, AppBarComponent);
    }
};

let StepsDirective = vueDefineComponent({
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
            return 'e-steps';
        }
    }
});
const StepsPlugin = {
    name: 'e-steps',
    install(Vue) {
        Vue.component(StepsPlugin.name, StepsDirective);
    }
};
/**
 * 'e-step' directive represents a step of the Vue Stepper
 * It must be contained in a Stepper component(`ejs-stepper`).
 * ```html
 * <ejs-stepper>
 *  <e-steps>
 *   <e-step :iconCss='e-icons e-folder' :text='Step 1' />
 *   <e-step :iconCss='e-icons e-folder' :text='Step 2' />
 *  </e-steps>
 * </ejs-stepper>
 * ```
 */
let StepDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-step';
        }
    }
});
const StepPlugin = {
    name: 'e-step',
    install(Vue) {
        Vue.component(StepPlugin.name, StepDirective);
    }
};

const properties$a = ['isLazyUpdate', 'plugins', 'activeStep', 'animation', 'cssClass', 'enablePersistence', 'enableRtl', 'labelPosition', 'linear', 'locale', 'orientation', 'readOnly', 'showTooltip', 'stepType', 'steps', 'template', 'tooltipTemplate', 'beforeStepRender', 'created', 'stepChanged', 'stepChanging', 'stepClick'];
const modelProps$a = ['activeStep'];
const testProp$a = getProps({ props: properties$a });
const props$a = testProp$a[0], watch$a = testProp$a[1], emitProbs$a = Object.keys(watch$a);
emitProbs$a.push('modelchanged', 'update:modelValue');
for (let props of modelProps$a) {
    emitProbs$a.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Stepper Component.
 * ```html
 * <ejs-stepper :steps='stepItems'></ejs-stepper>
 * ```
 */
let StepperComponent = vueDefineComponent({
    name: 'StepperComponent',
    mixins: [ComponentBase],
    props: props$a,
    watch: watch$a,
    emits: emitProbs$a,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Stepper({}),
            propKeys: properties$a,
            models: modelProps$a,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-steps": "e-step" },
            tagNameMapper: {},
            isVue3: !isExecute,
            templateCollection: {},
        };
    },
    created() {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
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
        return h('nav', slots);
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
        trigger(eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/checked|value/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                    }
                    else {
                        if (eventName === 'change' || (this.$props && !this.$props.isLazyUpdate)) {
                            this.$emit('update:' + propKey, eventProp[propKey]);
                            this.$emit('modelchanged', eventProp[propKey]);
                        }
                    }
                }
            }
            else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
                let key = this.models.toString().match(/currentView|selectedDate/) || [];
                let propKey = key[0];
                if (eventProp && key && !isUndefined(eventProp[propKey])) {
                    if (!isExecute) {
                        this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                        this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    }
                    else {
                        this.$emit('update:' + propKey, eventProp[propKey]);
                        this.$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
            if ((this.ej2Instances && this.ej2Instances._trigger)) {
                this.ej2Instances._trigger(eventName, eventProp, successHandler);
            }
        },
        custom() {
            this.updated();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        nextStep() {
            return this.ej2Instances.nextStep();
        },
        previousStep() {
            return this.ej2Instances.previousStep();
        },
        refreshProgressbar() {
            return this.ej2Instances.refreshProgressbar();
        },
        reset() {
            return this.ej2Instances.reset();
        },
    }
});
const StepperPlugin = {
    name: 'ejs-stepper',
    install(Vue) {
        Vue.component(StepperPlugin.name, StepperComponent);
        Vue.component(StepPlugin.name, StepDirective);
        Vue.component(StepsPlugin.name, StepsDirective);
    }
};

export { AccordionComponent, AccordionItemDirective, AccordionItemPlugin, AccordionItemsDirective, AccordionItemsPlugin, AccordionPlugin, AppBarComponent, AppBarPlugin, BreadcrumbComponent, BreadcrumbItemDirective, BreadcrumbItemPlugin, BreadcrumbItemsDirective, BreadcrumbItemsPlugin, BreadcrumbPlugin, CarouselComponent, CarouselItemDirective, CarouselItemPlugin, CarouselItemsDirective, CarouselItemsPlugin, CarouselPlugin, ContextMenuComponent, ContextMenuPlugin, ItemDirective, ItemPlugin, ItemsDirective, ItemsPlugin, MenuComponent, MenuItemDirective, MenuItemPlugin, MenuItemsDirective, MenuItemsPlugin, MenuPlugin, SidebarComponent, SidebarPlugin, StepDirective, StepPlugin, StepperComponent, StepperPlugin, StepsDirective, StepsPlugin, TabComponent, TabItemDirective, TabItemPlugin, TabItemsDirective, TabItemsPlugin, TabPlugin, ToolbarComponent, ToolbarPlugin, TreeViewComponent, TreeViewPlugin };
//# sourceMappingURL=ej2-vue-navigations.es2015.js.map
