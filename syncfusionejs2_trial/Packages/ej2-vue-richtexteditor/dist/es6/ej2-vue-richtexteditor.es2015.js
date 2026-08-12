import { RichTextEditor } from '@syncfusion/ej2-richtexteditor';
export * from '@syncfusion/ej2-richtexteditor';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'aiAssistantSettings', 'autoSaveOnIdle', 'backgroundColor', 'bulletFormatList', 'codeBlockSettings', 'cssClass', 'editorMode', 'emojiPickerSettings', 'enableAutoUrl', 'enableClipboardCleanup', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enableMarkdownAutoFormat', 'enablePersistence', 'enableResize', 'enableRtl', 'enableTabKey', 'enableXhtml', 'enabled', 'enterKey', 'exportPdf', 'exportWord', 'fileManagerSettings', 'floatingToolbarOffset', 'fontColor', 'fontFamily', 'fontSize', 'format', 'formatPainterSettings', 'formatter', 'height', 'htmlAttributes', 'iframeSettings', 'importWord', 'inlineMode', 'insertAudioSettings', 'insertImageSettings', 'insertVideoSettings', 'keyConfig', 'lineHeight', 'locale', 'maxLength', 'numberFormatList', 'pasteCleanupSettings', 'placeholder', 'quickToolbarSettings', 'readonly', 'saveInterval', 'shiftEnterKey', 'showCharCount', 'showTooltip', 'slashMenuSettings', 'tableSettings', 'toolbarSettings', 'undoRedoSteps', 'undoRedoTimer', 'value', 'valueTemplate', 'width', 'actionBegin', 'actionComplete', 'afterImageDelete', 'afterMediaDelete', 'afterPasteCleanup', 'aiAssistantPromptRequest', 'aiAssistantStopRespondingClick', 'aiAssistantToolbarClick', 'beforeClipboardWrite', 'beforeDialogClose', 'beforeDialogOpen', 'beforeFileUpload', 'beforeImageDrop', 'beforeImageUpload', 'beforeMediaDrop', 'beforePasteCleanup', 'beforePopupClose', 'beforePopupOpen', 'beforeQuickToolbarOpen', 'beforeSanitizeHtml', 'blur', 'change', 'created', 'destroyed', 'dialogClose', 'dialogOpen', 'documentExporting', 'fileRemoving', 'fileSelected', 'fileUploadFailed', 'fileUploadSuccess', 'fileUploading', 'focus', 'imageRemoving', 'imageSelected', 'imageUploadFailed', 'imageUploadSuccess', 'imageUploading', 'quickToolbarClose', 'quickToolbarOpen', 'resizeStart', 'resizeStop', 'resizing', 'selectionChanged', 'slashMenuItemSelect', 'toolbarClick', 'toolbarStatusUpdate', 'updatedToolbarStatus', 'wordImporting'];
const modelProps = ['value'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * `ejs-richtexteditor` represents the VueJS RichTextEditor Component.
 * ```vue
 * <ejs-richtexteditor></ejs-richtexteditor>
 * ```
 */
let RichTextEditorComponent = vueDefineComponent({
    name: 'RichTextEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new RichTextEditor({}),
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
        addAIPromptResponse(outputResponse, isFinalUpdate) {
            return this.ej2Instances.addAIPromptResponse(outputResponse, isFinalUpdate);
        },
        addAnchorAriaLabel(value) {
            return this.ej2Instances.addAnchorAriaLabel(value);
        },
        cleanList(e) {
            return this.ej2Instances.cleanList(e);
        },
        clearAIPromptHistory() {
            return this.ej2Instances.clearAIPromptHistory();
        },
        clearUndoRedo() {
            return this.ej2Instances.clearUndoRedo();
        },
        closeDialog(type) {
            return this.ej2Instances.closeDialog(type);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableToolbarItem(items, muteToolbarUpdate) {
            return this.ej2Instances.disableToolbarItem(items, muteToolbarUpdate);
        },
        enableToolbarItem(items, muteToolbarUpdate) {
            return this.ej2Instances.enableToolbarItem(items, muteToolbarUpdate);
        },
        executeAIPrompt(prompt) {
            return this.ej2Instances.executeAIPrompt(prompt);
        },
        executeCommand(commandName, value, option) {
            return this.ej2Instances.executeCommand(commandName, value, option);
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        getAIPromptHistory() {
            return this.ej2Instances.getAIPromptHistory();
        },
        getCharCount() {
            return this.ej2Instances.getCharCount();
        },
        getContent() {
            return this.ej2Instances.getContent();
        },
        getHtml() {
            return this.ej2Instances.getHtml();
        },
        getRange() {
            return this.ej2Instances.getRange();
        },
        getSelectedHtml() {
            return this.ej2Instances.getSelectedHtml();
        },
        getSelection() {
            return this.ej2Instances.getSelection();
        },
        getText() {
            return this.ej2Instances.getText();
        },
        getXhtml() {
            return this.ej2Instances.getXhtml();
        },
        hideAIAssistantPopup() {
            return this.ej2Instances.hideAIAssistantPopup();
        },
        hideInlineToolbar() {
            return this.ej2Instances.hideInlineToolbar();
        },
        print() {
            return this.ej2Instances.print();
        },
        refreshUI() {
            return this.ej2Instances.refreshUI();
        },
        removeToolbarItem(items) {
            return this.ej2Instances.removeToolbarItem(items);
        },
        renderTemplates(callBack) {
            return this.ej2Instances.renderTemplates(callBack);
        },
        sanitizeHtml(value) {
            return this.ej2Instances.sanitizeHtml(value);
        },
        selectAll() {
            return this.ej2Instances.selectAll();
        },
        selectRange(range) {
            return this.ej2Instances.selectRange(range);
        },
        showAIAssistantPopup() {
            return this.ej2Instances.showAIAssistantPopup();
        },
        showDialog(type) {
            return this.ej2Instances.showDialog(type);
        },
        showEmojiPicker(x, y) {
            return this.ej2Instances.showEmojiPicker(x, y);
        },
        showFullScreen() {
            return this.ej2Instances.showFullScreen();
        },
        showInlineToolbar() {
            return this.ej2Instances.showInlineToolbar();
        },
        showSourceCode() {
            return this.ej2Instances.showSourceCode();
        },
    }
});
const RichTextEditorPlugin = {
    name: 'ejs-richtexteditor',
    install(Vue) {
        Vue.component(RichTextEditorPlugin.name, RichTextEditorComponent);
    }
};

export { RichTextEditorComponent, RichTextEditorPlugin };
//# sourceMappingURL=ej2-vue-richtexteditor.es2015.js.map
