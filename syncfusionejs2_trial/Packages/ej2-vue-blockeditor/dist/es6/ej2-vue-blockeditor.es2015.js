import { BlockEditor } from '@syncfusion/ej2-blockeditor';
export * from '@syncfusion/ej2-blockeditor';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'backgroundColorSettings', 'blockActionMenuSettings', 'blocks', 'codeBlockSettings', 'collaborationSettings', 'commandMenuSettings', 'contextMenuSettings', 'cssClass', 'currentUserId', 'enableDragAndDrop', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'fontColorSettings', 'height', 'imageBlockSettings', 'inlineToolbarSettings', 'keyConfig', 'labelSettings', 'locale', 'pasteCleanupSettings', 'readOnly', 'transformSettings', 'undoRedoStack', 'users', 'width', 'afterPasteCleanup', 'beforeFileUpload', 'beforePasteCleanup', 'blockChanged', 'blockDragStart', 'blockDragging', 'blockDropped', 'blur', 'created', 'fileUploadFailed', 'fileUploadSuccess', 'fileUploading', 'focus', 'selectionChanged'];
const modelProps = ['blocks'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS BlockEditor Component
 * ```vue
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
let BlockEditorComponent = vueDefineComponent({
    name: 'BlockEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new BlockEditor({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
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
        addBlock(block, targetId, isAfter) {
            return this.ej2Instances.addBlock(block, targetId, isAfter);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableToolbarItems(itemId) {
            return this.ej2Instances.disableToolbarItems(itemId);
        },
        enableToolbarItems(itemId) {
            return this.ej2Instances.enableToolbarItems(itemId);
        },
        executeToolbarAction(action, value) {
            return this.ej2Instances.executeToolbarAction(action, value);
        },
        focusIn() {
            return this.ej2Instances.focusIn();
        },
        focusOut() {
            return this.ej2Instances.focusOut();
        },
        getBlock(blockId) {
            return this.ej2Instances.getBlock(blockId);
        },
        getBlockCount() {
            return this.ej2Instances.getBlockCount();
        },
        getDataAsHtml(blockId) {
            return this.ej2Instances.getDataAsHtml(blockId);
        },
        getDataAsJson(blockId) {
            return this.ej2Instances.getDataAsJson(blockId);
        },
        getRange() {
            return this.ej2Instances.getRange();
        },
        getSelectedBlocks() {
            return this.ej2Instances.getSelectedBlocks();
        },
        getVersionHistory() {
            return this.ej2Instances.getVersionHistory();
        },
        moveBlock(fromBlockId, toBlockId) {
            return this.ej2Instances.moveBlock(fromBlockId, toBlockId);
        },
        parseHtmlToBlocks(html) {
            return this.ej2Instances.parseHtmlToBlocks(html);
        },
        print() {
            return this.ej2Instances.print();
        },
        removeBlock(blockId) {
            return this.ej2Instances.removeBlock(blockId);
        },
        renderBlocksFromJson(json, replace, targetBlockId) {
            return this.ej2Instances.renderBlocksFromJson(json, replace, targetBlockId);
        },
        selectAllBlocks() {
            return this.ej2Instances.selectAllBlocks();
        },
        selectBlock(blockId) {
            return this.ej2Instances.selectBlock(blockId);
        },
        selectRange(range) {
            return this.ej2Instances.selectRange(range);
        },
        setCursorPosition(blockId, position) {
            return this.ej2Instances.setCursorPosition(blockId, position);
        },
        setSelection(node, startIndex, endIndex) {
            return this.ej2Instances.setSelection(node, startIndex, endIndex);
        },
        updateBlock(blockId, properties) {
            return this.ej2Instances.updateBlock(blockId, properties);
        },
    }
});
const BlockEditorPlugin = {
    name: 'ejs-blockeditor',
    install(Vue) {
        Vue.component(BlockEditorPlugin.name, BlockEditorComponent);
    }
};

export { BlockEditorComponent, BlockEditorPlugin };
//# sourceMappingURL=ej2-vue-blockeditor.es2015.js.map
