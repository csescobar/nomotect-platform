import { FileManager } from '@syncfusion/ej2-filemanager';
export * from '@syncfusion/ej2-filemanager';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

let ToolbarItemsDirective = vueDefineComponent({
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
            return 'e-toolbaritems';
        }
    }
});
const ToolbarItemsPlugin = {
    name: 'e-toolbaritems',
    install(Vue) {
        Vue.component(ToolbarItemsPlugin.name, ToolbarItemsDirective);
    }
};
let ToolbarItemDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-toolbaritem';
        }
    }
});
const ToolbarItemPlugin = {
    name: 'e-toolbaritem',
    install(Vue) {
        Vue.component(ToolbarItemPlugin.name, ToolbarItemDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'ajaxSettings', 'allowDragAndDrop', 'allowMultiSelection', 'contextMenuSettings', 'cssClass', 'detailsViewSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRangeSelection', 'enableRtl', 'enableVirtualization', 'fileSystemData', 'height', 'largeIconsTemplate', 'locale', 'navigationPaneSettings', 'navigationPaneTemplate', 'path', 'popupTarget', 'rootAliasName', 'searchSettings', 'selectedItems', 'showFileExtension', 'showHiddenItems', 'showItemCheckBoxes', 'showThumbnail', 'sortBy', 'sortComparer', 'sortOrder', 'toolbarItems', 'toolbarSettings', 'uploadSettings', 'view', 'width', 'beforeDelete', 'beforeDownload', 'beforeFolderCreate', 'beforeImageLoad', 'beforeMove', 'beforePopupClose', 'beforePopupOpen', 'beforeRename', 'beforeSend', 'created', 'delete', 'destroyed', 'failure', 'fileDragStart', 'fileDragStop', 'fileDragging', 'fileDropped', 'fileLoad', 'fileOpen', 'fileSelect', 'fileSelection', 'folderCreate', 'menuClick', 'menuClose', 'menuOpen', 'move', 'popupClose', 'popupOpen', 'rename', 'search', 'success', 'toolbarClick', 'toolbarCreate', 'uploadListCreate'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Essential JS 2 VueJS FileManager Component.
 * ```vue
 * <ejs-filemanager showThumbnail='false'></ejs-filemanager>
 * ```
 */
let FileManagerComponent = vueDefineComponent({
    name: 'FileManagerComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new FileManager({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-toolbaritems": "e-toolbaritem" },
            tagNameMapper: { "e-toolbaritems": "e-toolbarItems" },
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
        clearSelection() {
            return this.ej2Instances.clearSelection();
        },
        closeDialog() {
            return this.ej2Instances.closeDialog();
        },
        createFolder(name) {
            return this.ej2Instances.createFolder(name);
        },
        deleteFiles(ids) {
            return this.ej2Instances.deleteFiles(ids);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        disableMenuItems(items) {
            return this.ej2Instances.disableMenuItems(items);
        },
        disableToolbarItems(items) {
            return this.ej2Instances.disableToolbarItems(items);
        },
        downloadFiles(ids) {
            return this.ej2Instances.downloadFiles(ids);
        },
        enableMenuItems(items) {
            return this.ej2Instances.enableMenuItems(items);
        },
        enableToolbarItems(items) {
            return this.ej2Instances.enableToolbarItems(items);
        },
        filterFiles(filterData) {
            return this.ej2Instances.filterFiles(filterData);
        },
        getMenuItemIndex(item) {
            return this.ej2Instances.getMenuItemIndex(item);
        },
        getSelectedFiles() {
            return this.ej2Instances.getSelectedFiles();
        },
        getToolbarItemIndex(item) {
            return this.ej2Instances.getToolbarItemIndex(item);
        },
        openFile(id) {
            return this.ej2Instances.openFile(id);
        },
        refreshFiles() {
            return this.ej2Instances.refreshFiles();
        },
        refreshLayout() {
            return this.ej2Instances.refreshLayout();
        },
        renameFile(id, name) {
            return this.ej2Instances.renameFile(id, name);
        },
        restoreFocus() {
            return this.ej2Instances.restoreFocus();
        },
        selectAll() {
            return this.ej2Instances.selectAll();
        },
        traverseBackward() {
            return this.ej2Instances.traverseBackward();
        },
        uploadFiles() {
            return this.ej2Instances.uploadFiles();
        },
    }
});
const FileManagerPlugin = {
    name: 'ejs-filemanager',
    install(Vue) {
        Vue.component(FileManagerPlugin.name, FileManagerComponent);
        Vue.component(ToolbarItemPlugin.name, ToolbarItemDirective);
        Vue.component(ToolbarItemsPlugin.name, ToolbarItemsDirective);
    }
};

export { FileManagerComponent, FileManagerPlugin, ToolbarItemDirective, ToolbarItemPlugin, ToolbarItemsDirective, ToolbarItemsPlugin };
//# sourceMappingURL=ej2-vue-filemanager.es2015.js.map
