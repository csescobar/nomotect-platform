import { MultiColumnComboBox } from '@syncfusion/ej2-multicolumn-combobox';
export * from '@syncfusion/ej2-multicolumn-combobox';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let ColumnsDirective = vueDefineComponent({
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
            return 'e-columns';
        }
    }
});
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS MultiColumnComboBox.
 * It must be contained in a MultiColumnComboBox component(`ejs-multicolumncombobox`).
 * ```vue
 * <ejs-multicolumncombobox :dataSource='data'>
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-multicolumncombobox>
 * ```
 */
let ColumnDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-column';
        }
    }
});
const ColumnPlugin = {
    name: 'e-column',
    install(Vue) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'actionFailureTemplate', 'allowFiltering', 'allowSorting', 'columns', 'cssClass', 'dataSource', 'disabled', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'filterType', 'floatLabelType', 'footerTemplate', 'gridSettings', 'groupTemplate', 'htmlAttributes', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'sortType', 'text', 'value', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'change', 'close', 'created', 'filtering', 'open', 'select'];
const modelProps = ['value'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS MultiColumnComboBox Component
 * ```vue
 * <ejs-multicolumncombobox :dataSource='data'></ejs-multicolumncombobox>
 * ```
 */
let MultiColumnComboBoxComponent = vueDefineComponent({
    name: 'MultiColumnComboBoxComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new MultiColumnComboBox({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-columns": "e-column" },
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
        return h('input', slots);
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
        addItems(items, index) {
            return this.ej2Instances.addItems(items, index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn(e) {
            return this.ej2Instances.focusIn(e);
        },
        focusOut(e) {
            return this.ej2Instances.focusOut(e);
        },
        getDataByValue(value) {
            return this.ej2Instances.getDataByValue(value);
        },
        getItems() {
            return this.ej2Instances.getItems();
        },
        hidePopup(e) {
            return this.ej2Instances.hidePopup(e);
        },
        showPopup(e, isInputOpen) {
            return this.ej2Instances.showPopup(e, isInputOpen);
        },
    }
});
const MultiColumnComboBoxPlugin = {
    name: 'ejs-multicolumncombobox',
    install(Vue) {
        Vue.component(MultiColumnComboBoxPlugin.name, MultiColumnComboBoxComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
};

export { ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, MultiColumnComboBoxComponent, MultiColumnComboBoxPlugin };
//# sourceMappingURL=ej2-vue-multicolumn-combobox.es2015.js.map
