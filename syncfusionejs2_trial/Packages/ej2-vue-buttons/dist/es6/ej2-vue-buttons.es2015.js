import { Button, CheckBox, RadioButton, Switch, ChipList, Fab, SpeedDial, SmartPasteButton } from '@syncfusion/ej2-buttons';
export * from '@syncfusion/ej2-buttons';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRepeat', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'repeatDelay', 'repeatInterval', 'clicked', 'created'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Button Component
 * ```html
 * <ejs-button>Button</ejs-button>
 * ```
 */
let ButtonComponent = vueDefineComponent({
    name: 'ButtonComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Button({}),
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
        custom() {
            this.updated();
        },
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
    }
});
const ButtonPlugin = {
    name: 'ejs-button',
    install(Vue) {
        Vue.component(ButtonPlugin.name, ButtonComponent);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
const modelProps$1 = ['checked', 'indeterminate'];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS CheckBox Component
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
let CheckBoxComponent = vueDefineComponent({
    name: 'CheckBoxComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new CheckBox({}),
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
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
    }
});
const CheckBoxPlugin = {
    name: 'ejs-checkbox',
    install(Vue) {
        Vue.component(CheckBoxPlugin.name, CheckBoxComponent);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'checked', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
const modelProps$2 = ['value'];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS RadioButton Component
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
let RadioButtonComponent = vueDefineComponent({
    name: 'RadioButtonComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new RadioButton({}),
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
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        getSelectedValue() {
            return this.ej2Instances.getSelectedValue();
        },
    }
});
const RadioButtonPlugin = {
    name: 'ejs-radiobutton',
    install(Vue) {
        Vue.component(RadioButtonPlugin.name, RadioButtonComponent);
    }
};

const properties$3 = ['isLazyUpdate', 'plugins', 'checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'htmlAttributes', 'locale', 'name', 'offLabel', 'onLabel', 'value', 'beforeChange', 'change', 'created'];
const modelProps$3 = ['checked'];
const testProp$3 = getProps({ props: properties$3 });
const props$3 = testProp$3[0], watch$3 = testProp$3[1], emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (let props of modelProps$3) {
    emitProbs$3.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
let SwitchComponent = vueDefineComponent({
    name: 'SwitchComponent',
    mixins: [ComponentBase],
    props: props$3,
    watch: watch$3,
    emits: emitProbs$3,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Switch({}),
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
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        toggle() {
            return this.ej2Instances.toggle();
        },
    }
});
const SwitchPlugin = {
    name: 'ejs-switch',
    install(Vue) {
        Vue.component(SwitchPlugin.name, SwitchComponent);
    }
};

let ChipsDirective = vueDefineComponent({
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
            return 'e-chips';
        }
    }
});
const ChipsPlugin = {
    name: 'e-chips',
    install(Vue) {
        Vue.component(ChipsPlugin.name, ChipsDirective);
    }
};
/**
 * `e-chip` directive represent a chip of the Vue ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
let ChipDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chip';
        }
    }
});
const ChipPlugin = {
    name: 'e-chip',
    install(Vue) {
        Vue.component(ChipPlugin.name, ChipDirective);
    }
};

const properties$4 = ['isLazyUpdate', 'plugins', 'allowDragAndDrop', 'avatarIconCss', 'avatarText', 'chips', 'cssClass', 'dragArea', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'htmlAttributes', 'leadingIconCss', 'leadingIconUrl', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss', 'trailingIconUrl', 'beforeClick', 'click', 'created', 'delete', 'deleted', 'dragStart', 'dragStop', 'dragging'];
const modelProps$4 = [];
const testProp$4 = getProps({ props: properties$4 });
const props$4 = testProp$4[0], watch$4 = testProp$4[1], emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (let props of modelProps$4) {
    emitProbs$4.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
let ChipListComponent = vueDefineComponent({
    name: 'ChipListComponent',
    mixins: [ComponentBase],
    props: props$4,
    watch: watch$4,
    emits: emitProbs$4,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ChipList({}),
            propKeys: properties$4,
            models: modelProps$4,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-chips": "e-chip" },
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
        add(chipsData) {
            return this.ej2Instances.add(chipsData);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        find(fields) {
            return this.ej2Instances.find(fields);
        },
        getSelectedChips() {
            return this.ej2Instances.getSelectedChips();
        },
        remove(fields) {
            return this.ej2Instances.remove(fields);
        },
        select(fields, selectionType) {
            return this.ej2Instances.select(fields, selectionType);
        },
    }
});
const ChipListPlugin = {
    name: 'ejs-chiplist',
    install(Vue) {
        Vue.component(ChipListPlugin.name, ChipListComponent);
        Vue.component(ChipPlugin.name, ChipDirective);
        Vue.component(ChipsPlugin.name, ChipsDirective);
    }
};

const properties$5 = ['isLazyUpdate', 'plugins', 'content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRepeat', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'position', 'repeatDelay', 'repeatInterval', 'target', 'visible', 'clicked', 'created'];
const modelProps$5 = [];
const testProp$5 = getProps({ props: properties$5 });
const props$5 = testProp$5[0], watch$5 = testProp$5[1], emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (let props of modelProps$5) {
    emitProbs$5.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS Fab Component
 * ```html
 * <ejs-fab></ejs-fab>
 * ```
 */
let FabComponent = vueDefineComponent({
    name: 'FabComponent',
    mixins: [ComponentBase],
    props: props$5,
    watch: watch$5,
    emits: emitProbs$5,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Fab({}),
            propKeys: properties$5,
            models: modelProps$5,
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
        custom() {
            this.updated();
        },
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        refreshPosition() {
            return this.ej2Instances.refreshPosition();
        },
    }
});
const FabPlugin = {
    name: 'ejs-fab',
    install(Vue) {
        Vue.component(FabPlugin.name, FabComponent);
    }
};

let SpeedDialItemsDirective = vueDefineComponent({
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
            return 'e-speeddial-items';
        }
    }
});
const SpeedDialItemsPlugin = {
    name: 'e-speeddial-items',
    install(Vue) {
        Vue.component(SpeedDialItemsPlugin.name, SpeedDialItemsDirective);
    }
};
/**
 * 'e-speeddialitem' directive represent a item of Vue SpeedDial
 * It must be contained in a SpeedDial component(`ejs-speeddial`).
 * ```html
 * <ejs-speeddial>
 *   <e-speeddialitems>
 *    <e-speeddialitem text='Cut'></e-speeddialitem>
 *    <e-speeddialitem text='Copy'></e-speeddialitem>
 *   </e-speeddialitems>
 * </ejs-speeddial>
 * ```
 */
let SpeedDialItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-speeddial-item';
        }
    }
});
const SpeedDialItemPlugin = {
    name: 'e-speeddial-item',
    install(Vue) {
        Vue.component(SpeedDialItemPlugin.name, SpeedDialItemDirective);
    }
};

const properties$6 = ['isLazyUpdate', 'plugins', 'animation', 'closeIconCss', 'content', 'cssClass', 'direction', 'disabled', 'enablePersistence', 'enableRtl', 'iconPosition', 'isPrimary', 'itemTemplate', 'items', 'locale', 'modal', 'mode', 'openIconCss', 'opensOnHover', 'popupTemplate', 'position', 'radialSettings', 'target', 'visible', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'clicked', 'created', 'onClose', 'onOpen'];
const modelProps$6 = ['visible'];
const testProp$6 = getProps({ props: properties$6 });
const props$6 = testProp$6[0], watch$6 = testProp$6[1], emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (let props of modelProps$6) {
    emitProbs$6.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS SpeedDialComponent Component
 * ```html
 * <ejs-speeddial content='Edit'></ejs-speeddial>
 * ```
 */
let SpeedDialComponent = vueDefineComponent({
    name: 'SpeedDialComponent',
    mixins: [ComponentBase],
    props: props$6,
    watch: watch$6,
    emits: emitProbs$6,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new SpeedDial({}),
            propKeys: properties$6,
            models: modelProps$6,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-speeddial-items": "e-speeddial-item" },
            tagNameMapper: { "e-speeddial-items": "e-items" },
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
        createPopup() {
            return this.ej2Instances.createPopup();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        hide() {
            return this.ej2Instances.hide();
        },
        refreshPosition() {
            return this.ej2Instances.refreshPosition();
        },
        show() {
            return this.ej2Instances.show();
        },
    }
});
const SpeedDialPlugin = {
    name: 'ejs-speeddial',
    install(Vue) {
        Vue.component(SpeedDialPlugin.name, SpeedDialComponent);
        Vue.component(SpeedDialItemPlugin.name, SpeedDialItemDirective);
        Vue.component(SpeedDialItemsPlugin.name, SpeedDialItemsDirective);
    }
};

const properties$7 = ['isLazyUpdate', 'plugins', 'aiAssistHandler', 'content', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRepeat', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'repeatDelay', 'repeatInterval', 'clicked', 'created'];
const modelProps$7 = [];
const testProp$7 = getProps({ props: properties$7 });
const props$7 = testProp$7[0], watch$7 = testProp$7[1], emitProbs$7 = Object.keys(watch$7);
emitProbs$7.push('modelchanged', 'update:modelValue');
for (let props of modelProps$7) {
    emitProbs$7.push('update:' + props);
}
/**
 * Represents the Vue Smart Paste Button Component
 * ```html
 * <ejs-smart-paste-button>Smart paste</ejs-smart-paste-button>
 * ```
 */
let SmartPasteButtonComponent = vueDefineComponent({
    name: 'SmartPasteButtonComponent',
    mixins: [ComponentBase],
    props: props$7,
    watch: watch$7,
    emits: emitProbs$7,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new SmartPasteButton({}),
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
        custom() {
            this.updated();
        },
        click() {
            return this.ej2Instances.click();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
    }
});
const SmartPasteButtonPlugin = {
    name: 'ejs-smartpastebutton',
    install(Vue) {
        Vue.component(SmartPasteButtonPlugin.name, SmartPasteButtonComponent);
    }
};

export { ButtonComponent, ButtonPlugin, CheckBoxComponent, CheckBoxPlugin, ChipDirective, ChipListComponent, ChipListPlugin, ChipPlugin, ChipsDirective, ChipsPlugin, FabComponent, FabPlugin, RadioButtonComponent, RadioButtonPlugin, SmartPasteButtonComponent, SmartPasteButtonPlugin, SpeedDialComponent, SpeedDialItemDirective, SpeedDialItemPlugin, SpeedDialItemsDirective, SpeedDialItemsPlugin, SpeedDialPlugin, SwitchComponent, SwitchPlugin };
//# sourceMappingURL=ej2-vue-buttons.es2015.js.map
