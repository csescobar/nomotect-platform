import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
export * from '@syncfusion/ej2-querybuilder';
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
 * `e-column` directive represent a column of the VueJS QueryBuilder.
 * It must be contained in a QueryBuilder component(`ejs-querybuilder`).
 * ```vue
 * <ejs-querybuilder :dataSource='data'>
 *   <e-columns>
 *    <e-column field='ID' label='ID' type='number'/>
 *    <e-column field='Date' label='Date' type='date' format='dd/MM/yyyy'/>
 *   </e-columns>
 * </ejs-querybuilder>
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

const properties = ['isLazyUpdate', 'plugins', 'addRuleToNewGroups', 'allowDragAndDrop', 'allowValidation', 'autoSelectField', 'autoSelectOperator', 'columns', 'cssClass', 'dataSource', 'displayMode', 'enableNotCondition', 'enablePersistence', 'enableRtl', 'enableSeparateConnector', 'fieldMode', 'fieldModel', 'headerTemplate', 'height', 'immediateModeDelay', 'locale', 'matchCase', 'maxGroupCount', 'operatorModel', 'readonly', 'rule', 'separator', 'showButtons', 'sortDirection', 'summaryView', 'valueModel', 'width', 'actionBegin', 'beforeChange', 'change', 'created', 'dataBound', 'destroyed', 'ruleChange', 'drag', 'dragStart', 'drop'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the VueJS QueryBuilder Component.
 * ```html
 * <ejs-querybuilder></ejs-querybuilder>
 * ```
 */
let QueryBuilderComponent = vueDefineComponent({
    name: 'QueryBuilderComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new QueryBuilder({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-columns": "e-column" },
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
        addGroups(groups, groupID) {
            return this.ej2Instances.addGroups(groups, groupID);
        },
        addRules(rule, groupID) {
            return this.ej2Instances.addRules(rule, groupID);
        },
        cloneGroup(groupID, parentGroupID, index) {
            return this.ej2Instances.cloneGroup(groupID, parentGroupID, index);
        },
        cloneRule(ruleID, groupID, index) {
            return this.ej2Instances.cloneRule(ruleID, groupID, index);
        },
        deleteGroup(target) {
            return this.ej2Instances.deleteGroup(target);
        },
        deleteGroups(groupIdColl) {
            return this.ej2Instances.deleteGroups(groupIdColl);
        },
        deleteRules(ruleIdColl) {
            return this.ej2Instances.deleteRules(ruleIdColl);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        getDataManagerQuery(rule) {
            return this.ej2Instances.getDataManagerQuery(rule);
        },
        getFilteredRecords() {
            return this.ej2Instances.getFilteredRecords();
        },
        getGroup(target) {
            return this.ej2Instances.getGroup(target);
        },
        getMongoQuery(rule) {
            return this.ej2Instances.getMongoQuery(rule);
        },
        getOperators(field) {
            return this.ej2Instances.getOperators(field);
        },
        getParameterizedNamedSql(rule) {
            return this.ej2Instances.getParameterizedNamedSql(rule);
        },
        getParameterizedSql(rule) {
            return this.ej2Instances.getParameterizedSql(rule);
        },
        getPredicate(rule) {
            return this.ej2Instances.getPredicate(rule);
        },
        getRule(elem) {
            return this.ej2Instances.getRule(elem);
        },
        getRules() {
            return this.ej2Instances.getRules();
        },
        getRulesFromSql(sqlString, sqlLocale) {
            return this.ej2Instances.getRulesFromSql(sqlString, sqlLocale);
        },
        getSqlFromRules(rule, allowEscape, sqlLocale) {
            return this.ej2Instances.getSqlFromRules(rule, allowEscape, sqlLocale);
        },
        getValidRules(currentRule) {
            return this.ej2Instances.getValidRules(currentRule);
        },
        getValues(field) {
            return this.ej2Instances.getValues(field);
        },
        lockGroup(groupID) {
            return this.ej2Instances.lockGroup(groupID);
        },
        lockRule(ruleID) {
            return this.ej2Instances.lockRule(ruleID);
        },
        notifyChange(value, element, type) {
            return this.ej2Instances.notifyChange(value, element, type);
        },
        requiredModules() {
            return this.ej2Instances.requiredModules();
        },
        reset() {
            return this.ej2Instances.reset();
        },
        setMongoQuery(mongoQuery, mongoLocale) {
            return this.ej2Instances.setMongoQuery(mongoQuery, mongoLocale);
        },
        setParameterizedNamedSql(sqlQuery) {
            return this.ej2Instances.setParameterizedNamedSql(sqlQuery);
        },
        setParameterizedSql(sqlQuery) {
            return this.ej2Instances.setParameterizedSql(sqlQuery);
        },
        setRules(rule) {
            return this.ej2Instances.setRules(rule);
        },
        setRulesFromSql(sqlString, sqlLocale) {
            return this.ej2Instances.setRulesFromSql(sqlString, sqlLocale);
        },
        validateFields() {
            return this.ej2Instances.validateFields();
        },
    }
});
const QueryBuilderPlugin = {
    name: 'ejs-querybuilder',
    install(Vue) {
        Vue.component(QueryBuilderPlugin.name, QueryBuilderComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
};

export { ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, QueryBuilderComponent, QueryBuilderPlugin };
//# sourceMappingURL=ej2-vue-querybuilder.es2015.js.map
