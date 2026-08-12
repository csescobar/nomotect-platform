import { ListView } from '@syncfusion/ej2-lists';
export * from '@syncfusion/ej2-lists';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'disableHtmlEncode', 'enable', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'enabled', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'scroll', 'select'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
let ListViewComponent = vueDefineComponent({
    name: 'ListViewComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ListView({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: false,
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
        addItem(data, fields, index) {
            return this.ej2Instances.addItem(data, fields, index);
        },
        back() {
            return this.ej2Instances.back();
        },
        checkAllItems() {
            return this.ej2Instances.checkAllItems();
        },
        checkItem(item) {
            return this.ej2Instances.checkItem(item);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableItem(item) {
            return this.ej2Instances.disableItem(item);
        },
        enableItem(item) {
            return this.ej2Instances.enableItem(item);
        },
        findItem(item) {
            return this.ej2Instances.findItem(item);
        },
        getSelectedItems() {
            return this.ej2Instances.getSelectedItems();
        },
        hideItem(item) {
            return this.ej2Instances.hideItem(item);
        },
        refreshItemHeight() {
            return this.ej2Instances.refreshItemHeight();
        },
        removeItem(item) {
            return this.ej2Instances.removeItem(item);
        },
        removeMultipleItems(item) {
            return this.ej2Instances.removeMultipleItems(item);
        },
        requiredModules() {
            return this.ej2Instances.requiredModules();
        },
        selectItem(item) {
            return this.ej2Instances.selectItem(item);
        },
        selectMultipleItems(item) {
            return this.ej2Instances.selectMultipleItems(item);
        },
        showItem(item) {
            return this.ej2Instances.showItem(item);
        },
        uncheckAllItems() {
            return this.ej2Instances.uncheckAllItems();
        },
        uncheckItem(item) {
            return this.ej2Instances.uncheckItem(item);
        },
        unselectItem(item) {
            return this.ej2Instances.unselectItem(item);
        },
    }
});
const ListViewPlugin = {
    name: 'ejs-listview',
    install(Vue) {
        Vue.component(ListViewPlugin.name, ListViewComponent);
    }
};

export { ListViewComponent, ListViewPlugin };
//# sourceMappingURL=ej2-vue-lists.es2015.js.map
