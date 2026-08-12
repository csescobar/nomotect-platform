import { AIAssistView, ChatUI, InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
export * from '@syncfusion/ej2-interactive-chat';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let ViewsDirective = vueDefineComponent({
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
            return 'e-views';
        }
    }
});
const ViewsPlugin = {
    name: 'e-views',
    install(Vue) {
        Vue.component(ViewsPlugin.name, ViewsDirective);
    }
};
/**
 * Represents the Essential JS 2 VueJS AIAssistView Component
 * ```vue
 * <ejs-aiassistview>
 *   <e-views>
 *     <e-view>
 *     </e-view>
 *    </e-views>
 * </ejs-aiassistview>
 * ```
 */
let ViewDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-view';
        }
    }
});
const ViewPlugin = {
    name: 'e-view',
    install(Vue) {
        Vue.component(ViewPlugin.name, ViewDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'activeView', 'attachmentSettings', 'bannerTemplate', 'blockTemplate', 'cssClass', 'enableAttachments', 'enablePersistence', 'enableRtl', 'enableScrollToBottom', 'enableStreaming', 'footerTemplate', 'footerToolbarSettings', 'height', 'itemTemplate', 'locale', 'prompt', 'promptIconCss', 'promptItemTemplate', 'promptPlaceholder', 'promptSuggestionItemTemplate', 'promptSuggestions', 'promptSuggestionsHeader', 'promptToolbarSettings', 'prompts', 'responseIconCss', 'responseItemTemplate', 'responseToolbarSettings', 'showClearButton', 'showHeader', 'speechToTextSettings', 'textToSpeechSettings', 'toolbarSettings', 'views', 'width', 'attachmentRemoved', 'attachmentUploadFailure', 'attachmentUploadSuccess', 'beforeAttachmentUpload', 'created', 'editableContextClicked', 'promptChanged', 'promptRequest', 'stopRespondingClick'];
const modelProps = ['prompt'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS AIAssistView Component
 * ```vue
 * <ejs-aiassistview ></ejs-aiassistview>
 * ```
 */
let AIAssistViewComponent = vueDefineComponent({
    name: 'AIAssistViewComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new AIAssistView({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-views": "e-view" },
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
        addPromptResponse(outputResponse, isFinalUpdate) {
            return this.ej2Instances.addPromptResponse(outputResponse, isFinalUpdate);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        executePrompt(prompt) {
            return this.ej2Instances.executePrompt(prompt);
        },
        registerToolUI(tool) {
            return this.ej2Instances.registerToolUI(tool);
        },
        scrollToBottom() {
            return this.ej2Instances.scrollToBottom();
        },
    }
});
const AIAssistViewPlugin = {
    name: 'ejs-aiassistview',
    install(Vue) {
        Vue.component(AIAssistViewPlugin.name, AIAssistViewComponent);
        Vue.component(ViewPlugin.name, ViewDirective);
        Vue.component(ViewsPlugin.name, ViewsDirective);
    }
};

let MessagesDirective = vueDefineComponent({
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
            return 'e-messages';
        }
    }
});
const MessagesPlugin = {
    name: 'e-messages',
    install(Vue) {
        Vue.component(MessagesPlugin.name, MessagesDirective);
    }
};
/**
 * Represents the Essential JS 2 VueJS ChatUI Component
 * ```vue
 * <ejs-chatui>
 *   <e-messages>
 *     <e-message>
 *     </e-message>
 *    </e-messages>
 * </ejs-chatui>
 * ```
 */
let MessageDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-message';
        }
    }
});
const MessagePlugin = {
    name: 'e-message',
    install(Vue) {
        Vue.component(MessagePlugin.name, MessageDirective);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'attachmentSettings', 'autoScrollToBottom', 'cssClass', 'emptyChatTemplate', 'enableAttachments', 'enableCompactMode', 'enablePersistence', 'enableRtl', 'footerTemplate', 'headerIconCss', 'headerText', 'headerToolbar', 'height', 'loadOnDemand', 'locale', 'mentionTriggerChar', 'mentionUsers', 'messageTemplate', 'messageToolbarSettings', 'messages', 'placeholder', 'showFooter', 'showHeader', 'showTimeBreak', 'showTimeStamp', 'suggestionTemplate', 'suggestions', 'timeBreakTemplate', 'timeStampFormat', 'typingUsers', 'typingUsersTemplate', 'user', 'width', 'attachmentRemoved', 'attachmentUploadFailure', 'attachmentUploadSuccess', 'beforeAttachmentUpload', 'created', 'mentionSelect', 'messageSend', 'userTyping'];
const modelProps$1 = [];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS ChatUI Component
 * ```vue
 * <ejs-chatui ></ejs-chatui>
 * ```
 */
let ChatUIComponent = vueDefineComponent({
    name: 'ChatUIComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ChatUI({}),
            propKeys: properties$1,
            models: modelProps$1,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-messages": "e-message" },
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
        addMessage(message) {
            return this.ej2Instances.addMessage(message);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        focus() {
            return this.ej2Instances.focus();
        },
        prependMessages(messages) {
            return this.ej2Instances.prependMessages(messages);
        },
        scrollToBottom() {
            return this.ej2Instances.scrollToBottom();
        },
        scrollToMessage(messageId) {
            return this.ej2Instances.scrollToMessage(messageId);
        },
        updateMessage(message, msgId) {
            return this.ej2Instances.updateMessage(message, msgId);
        },
    }
});
const ChatUIPlugin = {
    name: 'ejs-chatui',
    install(Vue) {
        Vue.component(ChatUIPlugin.name, ChatUIComponent);
        Vue.component(MessagePlugin.name, MessageDirective);
        Vue.component(MessagesPlugin.name, MessagesDirective);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'commandSettings', 'cssClass', 'editorTemplate', 'enablePersistence', 'enableRtl', 'enableStreaming', 'inlineToolbarSettings', 'locale', 'placeholder', 'popupHeight', 'popupWidth', 'prompt', 'prompts', 'relateTo', 'responseMode', 'responseSettings', 'responseTemplate', 'target', 'zIndex', 'close', 'created', 'open', 'promptRequest'];
const modelProps$2 = [];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS InlineAIAssist Component
 * ```vue
 * <ejs-inlineaiassist ></ejs-inlineaiassist>
 * ```
 */
let InlineAIAssistComponent = vueDefineComponent({
    name: 'InlineAIAssistComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new InlineAIAssist({}),
            propKeys: properties$2,
            models: modelProps$2,
            hasChildDirective: true,
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
        addResponse(response, isFinalUpdate) {
            return this.ej2Instances.addResponse(response, isFinalUpdate);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        executePrompt(prompt) {
            return this.ej2Instances.executePrompt(prompt);
        },
        hideCommandPopup() {
            return this.ej2Instances.hideCommandPopup();
        },
        hidePopup() {
            return this.ej2Instances.hidePopup();
        },
        showCommandPopup() {
            return this.ej2Instances.showCommandPopup();
        },
        showPopup(x, y) {
            return this.ej2Instances.showPopup(x, y);
        },
    }
});
const InlineAIAssistPlugin = {
    name: 'ejs-inlineaiassist',
    install(Vue) {
        Vue.component(InlineAIAssistPlugin.name, InlineAIAssistComponent);
    }
};

export { AIAssistViewComponent, AIAssistViewPlugin, ChatUIComponent, ChatUIPlugin, InlineAIAssistComponent, InlineAIAssistPlugin, MessageDirective, MessagePlugin, MessagesDirective, MessagesPlugin, ViewDirective, ViewPlugin, ViewsDirective, ViewsPlugin };
//# sourceMappingURL=ej2-vue-interactive-chat.es2015.js.map
