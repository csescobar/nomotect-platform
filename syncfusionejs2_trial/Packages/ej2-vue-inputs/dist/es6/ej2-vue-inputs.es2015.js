import { TextBox, TextArea, NumericTextBox, MaskedTextBox, Slider, Uploader, ColorPicker, Signature, Rating, OtpInput, SmartTextArea, SpeechToText } from '@syncfusion/ej2-inputs';
export * from '@syncfusion/ej2-inputs';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'appendTemplate', 'autocomplete', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'maxLength', 'multiline', 'placeholder', 'prependTemplate', 'readonly', 'showClearButton', 'type', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus', 'input'];
const modelProps = ['value'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS TextBox Component
 * ```html
 * <ejs-textbox v-bind:value='value'></ejs-textbox>
 * ```
 */
let TextBoxComponent = vueDefineComponent({
    name: 'TextBoxComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new TextBox({}),
            propKeys: properties,
            models: modelProps,
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
        addAttributes(attributes) {
            return this.ej2Instances.addAttributes(attributes);
        },
        addIcon(position, icons) {
            return this.ej2Instances.addIcon(position, icons);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        removeAttributes(attributes) {
            return this.ej2Instances.removeAttributes(attributes);
        },
    }
});
const TextBoxPlugin = {
    name: 'ejs-textbox',
    install(Vue) {
        Vue.component(TextBoxPlugin.name, TextBoxComponent);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'adornmentFlow', 'adornmentOrientation', 'appendTemplate', 'cols', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'maxLength', 'placeholder', 'prependTemplate', 'readonly', 'resizeMode', 'rows', 'showClearButton', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus', 'input'];
const modelProps$1 = ['value'];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS TextArea Component
 * ```html
 * <ejs-textarea v-bind:value='value'></ejs-textarea>
 * ```
 */
let TextAreaComponent = vueDefineComponent({
    name: 'TextAreaComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new TextArea({}),
            propKeys: properties$1,
            models: modelProps$1,
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
        return h('textarea', slots);
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
        addAttributes(attributes) {
            return this.ej2Instances.addAttributes(attributes);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        removeAttributes(attributes) {
            return this.ej2Instances.removeAttributes(attributes);
        },
    }
});
const TextAreaPlugin = {
    name: 'ejs-textarea',
    install(Vue) {
        Vue.component(TextAreaPlugin.name, TextAreaComponent);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'allowMouseWheel', 'appendTemplate', 'cssClass', 'currency', 'currencyCode', 'decimals', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'locale', 'max', 'min', 'placeholder', 'prependTemplate', 'readonly', 'showClearButton', 'showSpinButton', 'step', 'strictMode', 'validateDecimalOnType', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
const modelProps$2 = ['value'];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS NumericTextBox Component
 * ```html
 * <ejs-numerictextbox v-bind:value='value'></ejs-numerictextbox>
 * ```
 */
let NumericTextBoxComponent = vueDefineComponent({
    name: 'NumericTextBoxComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new NumericTextBox({}),
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
        decrement(step) {
            return this.ej2Instances.decrement(step);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        getText() {
            return this.ej2Instances.getText();
        },
        increment(step) {
            return this.ej2Instances.increment(step);
        },
    }
});
const NumericTextBoxPlugin = {
    name: 'ejs-numerictextbox',
    install(Vue) {
        Vue.component(NumericTextBoxPlugin.name, NumericTextBoxComponent);
    }
};

const properties$3 = ['isLazyUpdate', 'plugins', 'appendTemplate', 'cssClass', 'customCharacters', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'mask', 'placeholder', 'prependTemplate', 'promptChar', 'readonly', 'showClearButton', 'value', 'width', 'blur', 'change', 'created', 'destroyed', 'focus'];
const modelProps$3 = ['value'];
const testProp$3 = getProps({ props: properties$3 });
const props$3 = testProp$3[0], watch$3 = testProp$3[1], emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (let props of modelProps$3) {
    emitProbs$3.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS MaskedTextBox Component
 * ```html
 * <ejs-maskedtextbox v-bind:value='value'></ejs-maskedtextbox>
 * ```
 */
let MaskedTextBoxComponent = vueDefineComponent({
    name: 'MaskedTextBoxComponent',
    mixins: [ComponentBase],
    props: props$3,
    watch: watch$3,
    emits: emitProbs$3,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new MaskedTextBox({}),
            propKeys: properties$3,
            models: modelProps$3,
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        getMaskedValue() {
            return this.ej2Instances.getMaskedValue();
        },
    }
});
const MaskedTextBoxPlugin = {
    name: 'ejs-maskedtextbox',
    install(Vue) {
        Vue.component(MaskedTextBoxPlugin.name, MaskedTextBoxComponent);
    }
};

const properties$4 = ['isLazyUpdate', 'plugins', 'colorRange', 'cssClass', 'customValues', 'enableAnimation', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'limits', 'locale', 'max', 'min', 'orientation', 'readonly', 'showButtons', 'step', 'ticks', 'tooltip', 'type', 'value', 'width', 'change', 'changed', 'created', 'renderedTicks', 'renderingTicks', 'tooltipChange'];
const modelProps$4 = ['value'];
const testProp$4 = getProps({ props: properties$4 });
const props$4 = testProp$4[0], watch$4 = testProp$4[1], emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (let props of modelProps$4) {
    emitProbs$4.push('update:' + props);
}
/**
 * Represents the VueJS Slider Component.
 * ```html
 * <ejs-slider :value='value'></ejs-slider>
 * ```
 */
let SliderComponent = vueDefineComponent({
    name: 'SliderComponent',
    mixins: [ComponentBase],
    props: props$4,
    watch: watch$4,
    emits: emitProbs$4,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Slider({}),
            propKeys: properties$4,
            models: modelProps$4,
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
        reposition() {
            return this.ej2Instances.reposition();
        },
        setTooltip(args) {
            return this.ej2Instances.setTooltip(args);
        },
    }
});
const SliderPlugin = {
    name: 'ejs-slider',
    install(Vue) {
        Vue.component(SliderPlugin.name, SliderComponent);
    }
};

let FilesDirective = vueDefineComponent({
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
            return 'e-files';
        }
    }
});
const FilesPlugin = {
    name: 'e-files',
    install(Vue) {
        Vue.component(FilesPlugin.name, FilesDirective);
    }
};
/**
 * 'files' directive represent a file of vue uploader
 * It must be contained in a Uploader component(`ejs-uploader`).
 * ```html
 * <ejs-uploader id='fileupload' v-bind:multiple='true'>
 *   <e-files>
 *    <e-file name='Java' size=23000 type='pdf'></e-file>
 *    <e-file name='C++' size=30000 type='.docx'></e-file>
 *   </e-files>
 * </ejs-uploader>
 * ```
 */
let UploadedFilesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-uploadedfiles';
        }
    }
});
const UploadedFilesPlugin = {
    name: 'e-uploadedfiles',
    install(Vue) {
        Vue.component(UploadedFilesPlugin.name, UploadedFilesDirective);
    }
};

const properties$5 = ['isLazyUpdate', 'plugins', 'allowedExtensions', 'asyncSettings', 'autoUpload', 'buttons', 'cssClass', 'directoryUpload', 'dropArea', 'dropEffect', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enabled', 'files', 'htmlAttributes', 'locale', 'maxFileSize', 'minFileSize', 'multiple', 'sequentialUpload', 'showFileList', 'template', 'actionComplete', 'beforeRemove', 'beforeUpload', 'canceling', 'change', 'chunkFailure', 'chunkSuccess', 'chunkUploading', 'clearing', 'created', 'failure', 'fileListRendering', 'pausing', 'progress', 'removing', 'rendering', 'resuming', 'selected', 'success', 'uploading'];
const modelProps$5 = [];
const testProp$5 = getProps({ props: properties$5 });
const props$5 = testProp$5[0], watch$5 = testProp$5[1], emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (let props of modelProps$5) {
    emitProbs$5.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Uploader Component
 * ```html
 * <ejs-uploader id='fileUpload' v-bind:multiple='true'></ejs-uploader>
 * ```
 */
let UploaderComponent = vueDefineComponent({
    name: 'UploaderComponent',
    mixins: [ComponentBase],
    props: props$5,
    watch: watch$5,
    emits: emitProbs$5,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Uploader({}),
            propKeys: properties$5,
            models: modelProps$5,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-files": "e-uploadedfiles" },
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
        custom() {
            this.updated();
        },
        bytesToSize(bytes) {
            return this.ej2Instances.bytesToSize(bytes);
        },
        cancel(fileData) {
            return this.ej2Instances.cancel(fileData);
        },
        clearAll() {
            return this.ej2Instances.clearAll();
        },
        createFileList(fileData) {
            return this.ej2Instances.createFileList(fileData);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        getFilesData(index) {
            return this.ej2Instances.getFilesData(index);
        },
        pause(fileData, custom) {
            return this.ej2Instances.pause(fileData, custom);
        },
        remove(fileData, customTemplate, removeDirectly, postRawFile, args) {
            return this.ej2Instances.remove(fileData, customTemplate, removeDirectly, postRawFile, args);
        },
        resume(fileData, custom) {
            return this.ej2Instances.resume(fileData, custom);
        },
        retry(fileData, fromcanceledStage, custom) {
            return this.ej2Instances.retry(fileData, fromcanceledStage, custom);
        },
        sortFileList(filesData) {
            return this.ej2Instances.sortFileList(filesData);
        },
        traverseFileTree(item, event) {
            return this.ej2Instances.traverseFileTree(item, event);
        },
        upload(files, custom) {
            return this.ej2Instances.upload(files, custom);
        },
    }
});
const UploaderPlugin = {
    name: 'ejs-uploader',
    install(Vue) {
        Vue.component(UploaderPlugin.name, UploaderComponent);
        Vue.component(UploadedFilesPlugin.name, UploadedFilesDirective);
        Vue.component(FilesPlugin.name, FilesDirective);
    }
};

const properties$6 = ['isLazyUpdate', 'plugins', 'columns', 'createPopupOnClick', 'cssClass', 'disabled', 'enableOpacity', 'enablePersistence', 'enableRtl', 'inline', 'locale', 'mode', 'modeSwitcher', 'noColor', 'presetColors', 'showButtons', 'showRecentColors', 'value', 'beforeClose', 'beforeModeSwitch', 'beforeOpen', 'beforeTileRender', 'change', 'created', 'onModeSwitch', 'open', 'select'];
const modelProps$6 = ['value'];
const testProp$6 = getProps({ props: properties$6 });
const props$6 = testProp$6[0], watch$6 = testProp$6[1], emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (let props of modelProps$6) {
    emitProbs$6.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS ColorPicker Component
 * ```html
 * <ejs-colorpicker></ejs-colorpicker>
 * ```
 */
let ColorPickerComponent = vueDefineComponent({
    name: 'ColorPickerComponent',
    mixins: [ComponentBase],
    props: props$6,
    watch: watch$6,
    emits: emitProbs$6,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ColorPicker({}),
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        getValue(value, type) {
            return this.ej2Instances.getValue(value, type);
        },
        toggle() {
            return this.ej2Instances.toggle();
        },
    }
});
const ColorPickerPlugin = {
    name: 'ejs-colorpicker',
    install(Vue) {
        Vue.component(ColorPickerPlugin.name, ColorPickerComponent);
    }
};

const properties$7 = ['isLazyUpdate', 'plugins', 'backgroundColor', 'backgroundImage', 'disabled', 'enablePersistence', 'enableRtl', 'isReadOnly', 'locale', 'maxStrokeWidth', 'minStrokeWidth', 'saveWithBackground', 'strokeColor', 'velocity', 'beforeSave', 'change', 'created'];
const modelProps$7 = [];
const testProp$7 = getProps({ props: properties$7 });
const props$7 = testProp$7[0], watch$7 = testProp$7[1], emitProbs$7 = Object.keys(watch$7);
emitProbs$7.push('modelchanged', 'update:modelValue');
for (let props of modelProps$7) {
    emitProbs$7.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Signature Component
 * ```html
 * <ejs-signature></ejs-signature>
 * ```
 */
let SignatureComponent = vueDefineComponent({
    name: 'SignatureComponent',
    mixins: [ComponentBase],
    props: props$7,
    watch: watch$7,
    emits: emitProbs$7,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Signature({}),
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
        return h('canvas', slots);
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
        canRedo() {
            return this.ej2Instances.canRedo();
        },
        canUndo() {
            return this.ej2Instances.canUndo();
        },
        clear() {
            return this.ej2Instances.clear();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        draw(text, fontFamily, fontSize, x, y) {
            return this.ej2Instances.draw(text, fontFamily, fontSize, x, y);
        },
        getBlob(url) {
            return this.ej2Instances.getBlob(url);
        },
        getSignature(type) {
            return this.ej2Instances.getSignature(type);
        },
        initialize() {
            return this.ej2Instances.initialize();
        },
        isEmpty() {
            return this.ej2Instances.isEmpty();
        },
        load(signature, width, height) {
            return this.ej2Instances.load(signature, width, height);
        },
        redo() {
            return this.ej2Instances.redo();
        },
        refresh() {
            return this.ej2Instances.refresh();
        },
        save(type, fileName) {
            return this.ej2Instances.save(type, fileName);
        },
        saveAsBlob() {
            return this.ej2Instances.saveAsBlob();
        },
        undo() {
            return this.ej2Instances.undo();
        },
    }
});
const SignaturePlugin = {
    name: 'ejs-signature',
    install(Vue) {
        Vue.component(SignaturePlugin.name, SignatureComponent);
    }
};

const properties$8 = ['isLazyUpdate', 'plugins', 'allowReset', 'cssClass', 'disabled', 'emptyTemplate', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSingleSelection', 'fullTemplate', 'itemsCount', 'labelPosition', 'labelTemplate', 'locale', 'min', 'precision', 'readOnly', 'showLabel', 'showTooltip', 'tooltipTemplate', 'value', 'visible', 'beforeItemRender', 'created', 'onItemHover', 'valueChanged'];
const modelProps$8 = ['value'];
const testProp$8 = getProps({ props: properties$8 });
const props$8 = testProp$8[0], watch$8 = testProp$8[1], emitProbs$8 = Object.keys(watch$8);
emitProbs$8.push('modelchanged', 'update:modelValue');
for (let props of modelProps$8) {
    emitProbs$8.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Rating Component
 * ```html
 * <ejs-rating v-bind:value='value'></ejs-rating>
 * ```
 */
let RatingComponent = vueDefineComponent({
    name: 'RatingComponent',
    mixins: [ComponentBase],
    props: props$8,
    watch: watch$8,
    emits: emitProbs$8,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Rating({}),
            propKeys: properties$8,
            models: modelProps$8,
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        reset() {
            return this.ej2Instances.reset();
        },
    }
});
const RatingPlugin = {
    name: 'ejs-rating',
    install(Vue) {
        Vue.component(RatingPlugin.name, RatingComponent);
    }
};

const properties$9 = ['isLazyUpdate', 'plugins', 'ariaLabels', 'autoFocus', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'length', 'locale', 'placeholder', 'separator', 'stylingMode', 'textTransform', 'type', 'value', 'blur', 'created', 'focus', 'input', 'valueChanged'];
const modelProps$9 = ['value'];
const testProp$9 = getProps({ props: properties$9 });
const props$9 = testProp$9[0], watch$9 = testProp$9[1], emitProbs$9 = Object.keys(watch$9);
emitProbs$9.push('modelchanged', 'update:modelValue');
for (let props of modelProps$9) {
    emitProbs$9.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS otpinput Component
 * ```html
 * <ejs-otpinput v-bind:value='value'></ejs-otpinput>
 * ```
 */
let OtpInputComponent = vueDefineComponent({
    name: 'OtpInputComponent',
    mixins: [ComponentBase],
    props: props$9,
    watch: watch$9,
    emits: emitProbs$9,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new OtpInput({}),
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
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
    }
});
const OtpInputPlugin = {
    name: 'ejs-otpinput',
    install(Vue) {
        Vue.component(OtpInputPlugin.name, OtpInputComponent);
    }
};

const properties$a = ['isLazyUpdate', 'plugins', 'UserPhrases', 'adornmentFlow', 'adornmentOrientation', 'aiSuggestionHandler', 'appendTemplate', 'cols', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'htmlAttributes', 'locale', 'maxLength', 'placeholder', 'prependTemplate', 'readonly', 'resizeMode', 'rows', 'showClearButton', 'showSuggestionOnPopup', 'userRole', 'value', 'width', 'afterSuggestionInsert', 'beforeSuggestionInsert', 'blur', 'change', 'created', 'destroyed', 'focus', 'input'];
const modelProps$a = ['value'];
const testProp$a = getProps({ props: properties$a });
const props$a = testProp$a[0], watch$a = testProp$a[1], emitProbs$a = Object.keys(watch$a);
emitProbs$a.push('modelchanged', 'update:modelValue');
for (let props of modelProps$a) {
    emitProbs$a.push('update:' + props);
}
/**
 * Represents the Smart TextArea Component
 * ```html
 * <ejs-smarttextarea></ejs-smarttextarea>
 * ```
 */
let SmartTextAreaComponent = vueDefineComponent({
    name: 'SmartTextAreaComponent',
    mixins: [ComponentBase],
    props: props$a,
    watch: watch$a,
    emits: emitProbs$a,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new SmartTextArea({}),
            propKeys: properties$a,
            models: modelProps$a,
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
        return h('textarea', slots);
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
        addAttributes(attributes) {
            return this.ej2Instances.addAttributes(attributes);
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        removeAttributes(attributes) {
            return this.ej2Instances.removeAttributes(attributes);
        },
    }
});
const SmartTextAreaPlugin = {
    name: 'ejs-smarttextarea',
    install(Vue) {
        Vue.component(SmartTextAreaPlugin.name, SmartTextAreaComponent);
    }
};

const properties$b = ['isLazyUpdate', 'plugins', 'allowInterimResults', 'buttonSettings', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'lang', 'listeningState', 'locale', 'showTooltip', 'tooltipSettings', 'transcript', 'created', 'onError', 'onStart', 'onStop', 'transcriptChanged'];
const modelProps$b = ['transcript'];
const testProp$b = getProps({ props: properties$b });
const props$b = testProp$b[0], watch$b = testProp$b[1], emitProbs$b = Object.keys(watch$b);
emitProbs$b.push('modelchanged', 'update:modelValue');
for (let props of modelProps$b) {
    emitProbs$b.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS SpeechToText Component
 * ```html
 * <ejs-speechtotext></ejs-speechtotext>
 * ```
 */
let SpeechToTextComponent = vueDefineComponent({
    name: 'SpeechToTextComponent',
    mixins: [ComponentBase],
    props: props$b,
    watch: watch$b,
    emits: emitProbs$b,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new SpeechToText({}),
            propKeys: properties$b,
            models: modelProps$b,
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
        return h('button', slots);
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
        startListening() {
            return this.ej2Instances.startListening();
        },
        stopListening() {
            return this.ej2Instances.stopListening();
        },
    }
});
const SpeechToTextPlugin = {
    name: 'ejs-speechtotext',
    install(Vue) {
        Vue.component(SpeechToTextPlugin.name, SpeechToTextComponent);
    }
};

export { ColorPickerComponent, ColorPickerPlugin, FilesDirective, FilesPlugin, MaskedTextBoxComponent, MaskedTextBoxPlugin, NumericTextBoxComponent, NumericTextBoxPlugin, OtpInputComponent, OtpInputPlugin, RatingComponent, RatingPlugin, SignatureComponent, SignaturePlugin, SliderComponent, SliderPlugin, SmartTextAreaComponent, SmartTextAreaPlugin, SpeechToTextComponent, SpeechToTextPlugin, TextAreaComponent, TextAreaPlugin, TextBoxComponent, TextBoxPlugin, UploadedFilesDirective, UploadedFilesPlugin, UploaderComponent, UploaderPlugin };
//# sourceMappingURL=ej2-vue-inputs.es2015.js.map
