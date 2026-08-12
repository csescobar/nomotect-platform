import { BlockEditor } from '@syncfusion/ej2-blockeditor';
export * from '@syncfusion/ej2-blockeditor';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

var properties = ['isLazyUpdate', 'plugins', 'backgroundColorSettings', 'blockActionMenuSettings', 'blocks', 'codeBlockSettings', 'collaborationSettings', 'commandMenuSettings', 'contextMenuSettings', 'cssClass', 'currentUserId', 'enableDragAndDrop', 'enableHtmlEncode', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'fontColorSettings', 'height', 'imageBlockSettings', 'inlineToolbarSettings', 'keyConfig', 'labelSettings', 'locale', 'pasteCleanupSettings', 'readOnly', 'transformSettings', 'undoRedoStack', 'users', 'width', 'afterPasteCleanup', 'beforeFileUpload', 'beforePasteCleanup', 'blockChanged', 'blockDragStart', 'blockDragging', 'blockDropped', 'blur', 'created', 'fileUploadFailed', 'fileUploadSuccess', 'fileUploading', 'focus', 'selectionChanged'];
var modelProps = ['blocks'];
var testProp = getProps({ props: properties });
var props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (var _i = 0, modelProps_1 = modelProps; _i < modelProps_1.length; _i++) {
    var props_1 = modelProps_1[_i];
    emitProbs.push('update:' + props_1);
}
/**
 * Represents the Essential JS 2 VueJS BlockEditor Component
 * ```vue
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
var BlockEditorComponent = vueDefineComponent({
    name: 'BlockEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide: function () { return { custom: this.custom }; },
    data: function () {
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
    created: function () {
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render: function (createElement) {
        var h = !isExecute ? gh : createElement;
        var slots = null;
        if (!isNullOrUndefined(this.$slots.default)) {
            slots = !isExecute ? this.$slots.default() : this.$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate: function (templateNames) {
            if (!templateNames) {
                templateNames = Object.keys(this.templateCollection || {});
            }
            if (templateNames.length && this.templateCollection) {
                for (var _i = 0, templateNames_1 = templateNames; _i < templateNames_1.length; _i++) {
                    var tempName = templateNames_1[_i];
                    var elementCollection = this.templateCollection[tempName];
                    if (elementCollection && elementCollection.length) {
                        for (var _a = 0, elementCollection_1 = elementCollection; _a < elementCollection_1.length; _a++) {
                            var ele = elementCollection_1[_a];
                            this.destroyPortals(ele);
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties: function (prop, muteOnChange) {
            var _this = this;
            if (this.isVue3) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map(function (key) {
                    _this.models.map(function (model) {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (_this.isVue3) {
                                _this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            }
                            else {
                                _this.$emit('update:' + key, prop[key]);
                                _this.$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        trigger: function (eventName, eventProp, successHandler) {
            if (!isExecute) {
                this.models = !this.models ? this.ej2Instances.referModels : this.models;
            }
            if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
                var key = this.models.toString().match(/checked|value/) || [];
                var propKey = key[0];
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
                var key = this.models.toString().match(/currentView|selectedDate/) || [];
                var propKey = key[0];
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
        custom: function () {
            this.updated();
        },
        addBlock: function (block, targetId, isAfter) {
            return this.ej2Instances.addBlock(block, targetId, isAfter);
        },
        destroy: function () {
            return this.ej2Instances.destroy();
        },
        disableToolbarItems: function (itemId) {
            return this.ej2Instances.disableToolbarItems(itemId);
        },
        enableToolbarItems: function (itemId) {
            return this.ej2Instances.enableToolbarItems(itemId);
        },
        executeToolbarAction: function (action, value) {
            return this.ej2Instances.executeToolbarAction(action, value);
        },
        focusIn: function () {
            return this.ej2Instances.focusIn();
        },
        focusOut: function () {
            return this.ej2Instances.focusOut();
        },
        getBlock: function (blockId) {
            return this.ej2Instances.getBlock(blockId);
        },
        getBlockCount: function () {
            return this.ej2Instances.getBlockCount();
        },
        getDataAsHtml: function (blockId) {
            return this.ej2Instances.getDataAsHtml(blockId);
        },
        getDataAsJson: function (blockId) {
            return this.ej2Instances.getDataAsJson(blockId);
        },
        getRange: function () {
            return this.ej2Instances.getRange();
        },
        getSelectedBlocks: function () {
            return this.ej2Instances.getSelectedBlocks();
        },
        getVersionHistory: function () {
            return this.ej2Instances.getVersionHistory();
        },
        moveBlock: function (fromBlockId, toBlockId) {
            return this.ej2Instances.moveBlock(fromBlockId, toBlockId);
        },
        parseHtmlToBlocks: function (html) {
            return this.ej2Instances.parseHtmlToBlocks(html);
        },
        print: function () {
            return this.ej2Instances.print();
        },
        removeBlock: function (blockId) {
            return this.ej2Instances.removeBlock(blockId);
        },
        renderBlocksFromJson: function (json, replace, targetBlockId) {
            return this.ej2Instances.renderBlocksFromJson(json, replace, targetBlockId);
        },
        selectAllBlocks: function () {
            return this.ej2Instances.selectAllBlocks();
        },
        selectBlock: function (blockId) {
            return this.ej2Instances.selectBlock(blockId);
        },
        selectRange: function (range) {
            return this.ej2Instances.selectRange(range);
        },
        setCursorPosition: function (blockId, position) {
            return this.ej2Instances.setCursorPosition(blockId, position);
        },
        setSelection: function (node, startIndex, endIndex) {
            return this.ej2Instances.setSelection(node, startIndex, endIndex);
        },
        updateBlock: function (blockId, properties) {
            return this.ej2Instances.updateBlock(blockId, properties);
        },
    }
});
var BlockEditorPlugin = {
    name: 'ejs-blockeditor',
    install: function (Vue) {
        Vue.component(BlockEditorPlugin.name, BlockEditorComponent);
    }
};

export { BlockEditorComponent, BlockEditorPlugin };
//# sourceMappingURL=ej2-vue-blockeditor.es5.js.map
