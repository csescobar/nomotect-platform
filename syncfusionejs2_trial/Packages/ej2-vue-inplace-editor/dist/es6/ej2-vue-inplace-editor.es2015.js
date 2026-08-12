import { InPlaceEditor } from '@syncfusion/ej2-inplace-editor';
export * from '@syncfusion/ej2-inplace-editor';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'actionOnBlur', 'adaptor', 'cancelButton', 'cssClass', 'disabled', 'editableOn', 'emptyText', 'enableEditMode', 'enableHtmlParse', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'locale', 'mode', 'model', 'name', 'popupSettings', 'primaryKey', 'saveButton', 'showButtons', 'submitOnEnter', 'template', 'textOption', 'type', 'url', 'validationRules', 'value', 'actionBegin', 'actionFailure', 'actionSuccess', 'beforeSanitizeHtml', 'beginEdit', 'cancelClick', 'change', 'created', 'destroyed', 'endEdit', 'submitClick', 'validating'];
const modelProps = ['value'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * `ejs-inplace-editor` represents the VueJS InPlaceEditor Component.
 * ```vue
 * <ejs-inplaceeditor></ejs-inplaceeditor>
 * ```
 */
let InPlaceEditorComponent = vueDefineComponent({
    name: 'InPlaceEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new InPlaceEditor({}),
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
        extendModelValue(val) {
            return this.ej2Instances.extendModelValue(val);
        },
        save() {
            return this.ej2Instances.save();
        },
        setValue() {
            return this.ej2Instances.setValue();
        },
        validate() {
            return this.ej2Instances.validate();
        },
    }
});
const InPlaceEditorPlugin = {
    name: 'ejs-inplaceeditor',
    install(Vue) {
        Vue.component(InPlaceEditorPlugin.name, InPlaceEditorComponent);
    }
};

export { InPlaceEditorComponent, InPlaceEditorPlugin };
//# sourceMappingURL=ej2-vue-inplace-editor.es2015.js.map
