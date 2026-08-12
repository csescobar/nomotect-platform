import { Kanban } from '@syncfusion/ej2-kanban';
export * from '@syncfusion/ej2-kanban';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

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
 * `e-columns` directive represent a columns of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
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

let StackedHeadersDirective = vueDefineComponent({
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
            return 'e-stackedHeaders';
        }
    }
});
const StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install(Vue) {
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};
/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
let StackedHeaderDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stackedHeader';
        }
    }
});
const StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install(Vue) {
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'allowColumnDragAndDrop', 'allowDragAndDrop', 'allowKeyboard', 'cardHeight', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableTooltip', 'enableVirtualization', 'externalDropId', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'columnDrag', 'columnDragStart', 'columnDrop', 'created', 'dataBinding', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
let KanbanComponent = vueDefineComponent({
    name: 'KanbanComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Kanban({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: { "e-columns": "e-column", "e-stackedHeaders": "e-stackedHeader" },
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
        addCard(cardData, index) {
            return this.ej2Instances.addCard(cardData, index);
        },
        addColumn(columnOptions, index) {
            return this.ej2Instances.addColumn(columnOptions, index);
        },
        closeDialog() {
            return this.ej2Instances.closeDialog();
        },
        deleteCard(cardData) {
            return this.ej2Instances.deleteCard(cardData);
        },
        deleteColumn(index) {
            return this.ej2Instances.deleteColumn(index);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        getCardDetails(target) {
            return this.ej2Instances.getCardDetails(target);
        },
        getColumnData(columnKey, dataSource) {
            return this.ej2Instances.getColumnData(columnKey, dataSource);
        },
        getSelectedCards() {
            return this.ej2Instances.getSelectedCards();
        },
        getSwimlaneData(keyField) {
            return this.ej2Instances.getSwimlaneData(keyField);
        },
        hideColumn(key) {
            return this.ej2Instances.hideColumn(key);
        },
        hideSpinner() {
            return this.ej2Instances.hideSpinner();
        },
        openDialog(action, data) {
            return this.ej2Instances.openDialog(action, data);
        },
        refreshHeader() {
            return this.ej2Instances.refreshHeader();
        },
        refreshUI(args, index) {
            return this.ej2Instances.refreshUI(args, index);
        },
        renderTemplates() {
            return this.ej2Instances.renderTemplates();
        },
        resetTemplates(templates) {
            return this.ej2Instances.resetTemplates(templates);
        },
        showColumn(key) {
            return this.ej2Instances.showColumn(key);
        },
        showSpinner() {
            return this.ej2Instances.showSpinner();
        },
        templateParser(template) {
            return this.ej2Instances.templateParser(template);
        },
        unwireColumnDragEvent() {
            return this.ej2Instances.unwireColumnDragEvent();
        },
        updateCard(cardData, index) {
            return this.ej2Instances.updateCard(cardData, index);
        },
        wireColumnDragEvent() {
            return this.ej2Instances.wireColumnDragEvent();
        },
    }
});
const KanbanPlugin = {
    name: 'ejs-kanban',
    install(Vue) {
        Vue.component(KanbanPlugin.name, KanbanComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(StackedHeaderPlugin.name, StackedHeaderDirective);
        Vue.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};

export { ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, KanbanComponent, KanbanPlugin, StackedHeaderDirective, StackedHeaderPlugin, StackedHeadersDirective, StackedHeadersPlugin };
//# sourceMappingURL=ej2-vue-kanban.es2015.js.map
