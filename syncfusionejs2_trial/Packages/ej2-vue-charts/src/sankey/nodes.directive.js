import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SankeyNodesCollectionDirective = vueDefineComponent({
    inject: { custom: { default: null } },
    render: function (createElement) {
        if (!isExecute) {
            var h = !isExecute ? gh : createElement;
            var slots = null;
            if (!isNullOrUndefined(this.$slots.default)) {
                slots = !isExecute ? this.$slots.default() : this.$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated: function () {
        if (!isExecute && this.custom) {
            this.custom();
        }
    },
    methods: {
        getTag: function () {
            return 'e-sankey-nodes';
        }
    }
});
export var SankeyNodesCollectionPlugin = {
    name: 'e-sankey-nodes',
    install: function (Vue) {
        Vue.component(SankeyNodesCollectionPlugin.name, SankeyNodesCollectionDirective);
    }
};
/**
 * `SankeyNodeDirective` directive represent a node of the vue Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```vue
 * <ejs-sankey>
 * <e-sankey-nodes>
 * <e-sankey-node></e-sankey-node>
 * </e-sankey-nodes>
 * </ejs-sankey>
 * ```
 */
export var SankeyNodeDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-sankey-node';
        }
    }
});
export var SankeyNodePlugin = {
    name: 'e-sankey-node',
    install: function (Vue) {
        Vue.component(SankeyNodePlugin.name, SankeyNodeDirective);
    }
};
