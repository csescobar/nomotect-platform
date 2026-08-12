import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
export var SankeyLinksCollectionDirective = vueDefineComponent({
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
            return 'e-sankey-links';
        }
    }
});
export var SankeyLinksCollectionPlugin = {
    name: 'e-sankey-links',
    install: function (Vue) {
        Vue.component(SankeyLinksCollectionPlugin.name, SankeyLinksCollectionDirective);
    }
};
/**
 * `SankeyLinkDirective` directive represent a link of the vue Sankey.
 * It must be contained in a Sankey component(`SankeyComponent`).
 * ```vue
 * <ejs-sankey>
 * <e-sankey-links>
 * <e-sankey-link></e-sankey-link>
 * </e-sankey-links>
 * </ejs-sankey>
 * ```
 */
export var SankeyLinkDirective = vueDefineComponent({
    render: function () {
        return;
    },
    methods: {
        getTag: function () {
            return 'e-sankey-link';
        }
    }
});
export var SankeyLinkPlugin = {
    name: 'e-sankey-link',
    install: function (Vue) {
        Vue.component(SankeyLinkPlugin.name, SankeyLinkDirective);
    }
};
