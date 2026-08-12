import { Ribbon } from '@syncfusion/ej2-ribbon';
export * from '@syncfusion/ej2-ribbon';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let RibbonItemsDirective = vueDefineComponent({
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
            return 'e-ribbon-items';
        }
    }
});
const RibbonItemsPlugin = {
    name: 'e-ribbon-items',
    install(Vue) {
        Vue.component(RibbonItemsPlugin.name, RibbonItemsDirective);
    }
};
let RibbonItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-ribbon-item';
        }
    }
});
const RibbonItemPlugin = {
    name: 'e-ribbon-item',
    install(Vue) {
        Vue.component(RibbonItemPlugin.name, RibbonItemDirective);
    }
};

let RibbonCollectionsDirective = vueDefineComponent({
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
            return 'e-ribbon-collections';
        }
    }
});
const RibbonCollectionsPlugin = {
    name: 'e-ribbon-collections',
    install(Vue) {
        Vue.component(RibbonCollectionsPlugin.name, RibbonCollectionsDirective);
    }
};
let RibbonCollectionDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-ribbon-collection';
        }
    }
});
const RibbonCollectionPlugin = {
    name: 'e-ribbon-collection',
    install(Vue) {
        Vue.component(RibbonCollectionPlugin.name, RibbonCollectionDirective);
    }
};

let RibbonGroupsDirective = vueDefineComponent({
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
            return 'e-ribbon-groups';
        }
    }
});
const RibbonGroupsPlugin = {
    name: 'e-ribbon-groups',
    install(Vue) {
        Vue.component(RibbonGroupsPlugin.name, RibbonGroupsDirective);
    }
};
let RibbonGroupDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-ribbon-group';
        }
    }
});
const RibbonGroupPlugin = {
    name: 'e-ribbon-group',
    install(Vue) {
        Vue.component(RibbonGroupPlugin.name, RibbonGroupDirective);
    }
};

let RibbonTabsDirective = vueDefineComponent({
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
            return 'e-ribbon-tabs';
        }
    }
});
const RibbonTabsPlugin = {
    name: 'e-ribbon-tabs',
    install(Vue) {
        Vue.component(RibbonTabsPlugin.name, RibbonTabsDirective);
    }
};
let RibbonTabDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-ribbon-tab';
        }
    }
});
const RibbonTabPlugin = {
    name: 'e-ribbon-tab',
    install(Vue) {
        Vue.component(RibbonTabPlugin.name, RibbonTabDirective);
    }
};

let RibbonContextualTabsDirective = vueDefineComponent({
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
            return 'e-ribbon-contextual-tabs';
        }
    }
});
const RibbonContextualTabsPlugin = {
    name: 'e-ribbon-contextual-tabs',
    install(Vue) {
        Vue.component(RibbonContextualTabsPlugin.name, RibbonContextualTabsDirective);
    }
};
/**
 * `e-ribbon-contextual-tab` directive represent a contextual tab of the VueJS Ribbon.
 * It must be contained in a Ribbon component(`ejs-ribbon`).
 * ```vue
 * <ejs-ribbon>
 *   <e-ribbon-contextual-tabs>
 *    <e-ribbon-contextual-tab></e-ribbon-contextual-tab>
 *    <e-ribbon-contextual-tab></e-ribbon-contextual-tab>
 *   </e-ribbon-contextual-tabs>
 * </ejs-ribbon>
 * ```
 */
let RibbonContextualTabDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-ribbon-contextual-tab';
        }
    }
});
const RibbonContextualTabPlugin = {
    name: 'e-ribbon-contextual-tab',
    install(Vue) {
        Vue.component(RibbonContextualTabPlugin.name, RibbonContextualTabDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'activeLayout', 'backStageMenu', 'contextualTabs', 'cssClass', 'enableKeyTips', 'enablePersistence', 'enableRtl', 'fileMenu', 'helpPaneTemplate', 'hideLayoutSwitcher', 'isMinimized', 'launcherIconCss', 'layoutSwitcherKeyTip', 'locale', 'selectedTab', 'tabAnimation', 'tabs', 'width', 'created', 'launcherIconClick', 'overflowPopupClose', 'overflowPopupOpen', 'ribbonCollapsing', 'ribbonExpanding', 'ribbonLayoutSwitched', 'tabSelected', 'tabSelecting'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Ribbon Component
 * ```vue
 * <ejs-ribbon></ejs-ribbon>
 * ```
 */
let RibbonComponent = vueDefineComponent({
    name: 'RibbonComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Ribbon({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-ribbon-tabs": { "e-ribbon-tab": { "e-ribbon-groups": { "e-ribbon-group": { "e-ribbon-collections": { "e-ribbon-collection": { "e-ribbon-items": "e-ribbon-item" } } } } } }, "e-ribbon-contextual-tabs": { "e-ribbon-contextual-tab": { "e-ribbon-tabs": { "e-ribbon-tab": { "e-ribbon-groups": { "e-ribbon-group": { "e-ribbon-collections": { "e-ribbon-collection": { "e-ribbon-items": "e-ribbon-item" } } } } } } } } },
            tagNameMapper: { "e-ribbon-items": "e-items", "e-ribbon-collections": "e-collections", "e-ribbon-groups": "e-groups", "e-ribbon-tabs": "e-tabs", "e-ribbon-contextual-tabs": "e-contextualTabs" },
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
        addCollection(groupId, collection, targetId, isAfter) {
            return this.ej2Instances.addCollection(groupId, collection, targetId, isAfter);
        },
        addGroup(tabId, group, targetId, isAfter) {
            return this.ej2Instances.addGroup(tabId, group, targetId, isAfter);
        },
        addItem(collectionId, item, targetId, isAfter) {
            return this.ej2Instances.addItem(collectionId, item, targetId, isAfter);
        },
        addTab(tab, targetId, isAfter) {
            return this.ej2Instances.addTab(tab, targetId, isAfter);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableGroup(groupID) {
            return this.ej2Instances.disableGroup(groupID);
        },
        disableItem(itemId) {
            return this.ej2Instances.disableItem(itemId);
        },
        disableTab(tabId) {
            return this.ej2Instances.disableTab(tabId);
        },
        enableGroup(groupID) {
            return this.ej2Instances.enableGroup(groupID);
        },
        enableItem(itemId) {
            return this.ej2Instances.enableItem(itemId);
        },
        enableTab(tabId) {
            return this.ej2Instances.enableTab(tabId);
        },
        getAppendToElement() {
            return this.ej2Instances.getAppendToElement();
        },
        getItem(itemId) {
            return this.ej2Instances.getItem(itemId);
        },
        hideGroup(groupID) {
            return this.ej2Instances.hideGroup(groupID);
        },
        hideItem(itemId) {
            return this.ej2Instances.hideItem(itemId);
        },
        hideTab(tabId, isContextual) {
            return this.ej2Instances.hideTab(tabId, isContextual);
        },
        refreshLayout() {
            return this.ej2Instances.refreshLayout();
        },
        removeCollection(collectionId) {
            return this.ej2Instances.removeCollection(collectionId);
        },
        removeGroup(groupId) {
            return this.ej2Instances.removeGroup(groupId);
        },
        removeItem(itemId) {
            return this.ej2Instances.removeItem(itemId);
        },
        removeTab(tabId) {
            return this.ej2Instances.removeTab(tabId);
        },
        selectTab(tabId) {
            return this.ej2Instances.selectTab(tabId);
        },
        showGroup(groupID) {
            return this.ej2Instances.showGroup(groupID);
        },
        showItem(itemId) {
            return this.ej2Instances.showItem(itemId);
        },
        showTab(tabId, isContextual) {
            return this.ej2Instances.showTab(tabId, isContextual);
        },
        updateCollection(collection) {
            return this.ej2Instances.updateCollection(collection);
        },
        updateGroup(group) {
            return this.ej2Instances.updateGroup(group);
        },
        updateItem(item) {
            return this.ej2Instances.updateItem(item);
        },
        updateTab(tab) {
            return this.ej2Instances.updateTab(tab);
        },
    }
});
const RibbonPlugin = {
    name: 'ejs-ribbon',
    install(Vue) {
        Vue.component(RibbonPlugin.name, RibbonComponent);
        Vue.component(RibbonTabPlugin.name, RibbonTabDirective);
        Vue.component(RibbonTabsPlugin.name, RibbonTabsDirective);
        Vue.component(RibbonGroupPlugin.name, RibbonGroupDirective);
        Vue.component(RibbonGroupsPlugin.name, RibbonGroupsDirective);
        Vue.component(RibbonCollectionPlugin.name, RibbonCollectionDirective);
        Vue.component(RibbonCollectionsPlugin.name, RibbonCollectionsDirective);
        Vue.component(RibbonItemPlugin.name, RibbonItemDirective);
        Vue.component(RibbonItemsPlugin.name, RibbonItemsDirective);
        Vue.component(RibbonContextualTabPlugin.name, RibbonContextualTabDirective);
        Vue.component(RibbonContextualTabsPlugin.name, RibbonContextualTabsDirective);
    }
};

export { RibbonCollectionDirective, RibbonCollectionPlugin, RibbonCollectionsDirective, RibbonCollectionsPlugin, RibbonComponent, RibbonContextualTabDirective, RibbonContextualTabPlugin, RibbonContextualTabsDirective, RibbonContextualTabsPlugin, RibbonGroupDirective, RibbonGroupPlugin, RibbonGroupsDirective, RibbonGroupsPlugin, RibbonItemDirective, RibbonItemPlugin, RibbonItemsDirective, RibbonItemsPlugin, RibbonPlugin, RibbonTabDirective, RibbonTabPlugin, RibbonTabsDirective, RibbonTabsPlugin };
//# sourceMappingURL=ej2-vue-ribbon.es2015.js.map
