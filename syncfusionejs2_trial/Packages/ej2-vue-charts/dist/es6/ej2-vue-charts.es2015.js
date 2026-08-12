import { Chart, AccumulationChart, RangeNavigator, Sparkline, Smithchart, StockChart, BulletChart, Chart3D, CircularChart3D, Sankey } from '@syncfusion/ej2-charts';
export * from '@syncfusion/ej2-charts';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let TrendlinesDirective = vueDefineComponent({
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
            return 'e-trendlines';
        }
    }
});
const TrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue) {
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
};
let TrendlineDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-trendline';
        }
    }
});
const TrendlinePlugin = {
    name: 'e-trendline',
    install(Vue) {
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
    }
};

let SegmentsDirective = vueDefineComponent({
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
            return 'e-segments';
        }
    }
});
const SegmentsPlugin = {
    name: 'e-segments',
    install(Vue) {
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
    }
};
let SegmentDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-segment';
        }
    }
});
const SegmentPlugin = {
    name: 'e-segment',
    install(Vue) {
        Vue.component(SegmentPlugin.name, SegmentDirective);
    }
};

let SeriesCollectionDirective = vueDefineComponent({
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
            return 'e-series-collection';
        }
    }
});
const SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install(Vue) {
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
};
let SeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-series';
        }
    }
});
const SeriesPlugin = {
    name: 'e-series',
    install(Vue) {
        Vue.component(SeriesPlugin.name, SeriesDirective);
    }
};

let StripLinesDirective = vueDefineComponent({
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
            return 'e-striplines';
        }
    }
});
const StripLinesPlugin = {
    name: 'e-striplines',
    install(Vue) {
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
    }
};
let StripLineDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stripline';
        }
    }
});
const StripLinePlugin = {
    name: 'e-stripline',
    install(Vue) {
        Vue.component(StripLinePlugin.name, StripLineDirective);
    }
};

let CategoriesDirective = vueDefineComponent({
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
            return 'e-categories';
        }
    }
});
const CategoriesPlugin = {
    name: 'e-categories',
    install(Vue) {
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
let CategoryDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-category';
        }
    }
});
const CategoryPlugin = {
    name: 'e-category',
    install(Vue) {
        Vue.component(CategoryPlugin.name, CategoryDirective);
    }
};

let MultiLevelLabelsDirective = vueDefineComponent({
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
            return 'e-multilevellabels';
        }
    }
});
const MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install(Vue) {
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
};
let MultiLevelLabelDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-multilevellabel';
        }
    }
});
const MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install(Vue) {
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
    }
};

let AxesDirective = vueDefineComponent({
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
            return 'e-axes';
        }
    }
});
const AxesPlugin = {
    name: 'e-axes',
    install(Vue) {
        Vue.component(AxesPlugin.name, AxesDirective);
    }
};
let AxisDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-axis';
        }
    }
});
const AxisPlugin = {
    name: 'e-axis',
    install(Vue) {
        Vue.component(AxisPlugin.name, AxisDirective);
    }
};

let RowsDirective = vueDefineComponent({
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
            return 'e-rows';
        }
    }
});
const RowsPlugin = {
    name: 'e-rows',
    install(Vue) {
        Vue.component(RowsPlugin.name, RowsDirective);
    }
};
let RowDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-row';
        }
    }
});
const RowPlugin = {
    name: 'e-row',
    install(Vue) {
        Vue.component(RowPlugin.name, RowDirective);
    }
};

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

let RangeColorSettingsDirective = vueDefineComponent({
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
            return 'e-rangecolorsettings';
        }
    }
});
const RangeColorSettingsPlugin = {
    name: 'e-rangecolorsettings',
    install(Vue) {
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
    }
};
let RangeColorSettingDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-rangecolorsetting';
        }
    }
});
const RangeColorSettingPlugin = {
    name: 'e-rangecolorsetting',
    install(Vue) {
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
    }
};

let AnnotationsDirective = vueDefineComponent({
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
            return 'e-annotations';
        }
    }
});
const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue) {
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-chart>
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
let AnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-annotation';
        }
    }
});
const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

let SelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-selecteddataindexes';
        }
    }
});
const SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install(Vue) {
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
};
let SelectedDataIndexDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-selecteddataindex';
        }
    }
});
const SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install(Vue) {
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
};

let IndicatorsDirective = vueDefineComponent({
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
            return 'e-indicators';
        }
    }
});
const IndicatorsPlugin = {
    name: 'e-indicators',
    install(Vue) {
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};
let IndicatorDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-indicator';
        }
    }
});
const IndicatorPlugin = {
    name: 'e-indicator',
    install(Vue) {
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'accessibility', 'allowExport', 'allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableAutoIntervalOnBothAxis', 'enableCanvas', 'enableExport', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'focusBorderColor', 'focusBorderMargin', 'focusBorderWidth', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'noDataTemplate', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rangeColorSettings', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'stackLabels', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelClick', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'crosshairLabelRender', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointDoubleClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'sharedTooltipRender', 'textRender', 'tooltipRender', 'zoomComplete'];
const modelProps = ['dataSource'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-chart></ejs-chart>
 * ```
 */
let ChartComponent = vueDefineComponent({
    name: 'ChartComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Chart({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-series-collection": { "e-series": { "e-trendlines": "e-trendline", "e-segments": "e-segment" } }, "e-axes": { "e-axis": { "e-striplines": "e-stripline", "e-multilevellabels": { "e-multilevellabel": { "e-categories": "e-category" } } } }, "e-rows": "e-row", "e-columns": "e-column", "e-rangecolorsettings": "e-rangecolorsetting", "e-annotations": "e-annotation", "e-selecteddataindexes": "e-selecteddataindex", "e-indicators": "e-indicator" },
            tagNameMapper: { "e-series-collection": "e-series", "e-striplines": "e-stripLines", "e-multilevellabels": "e-multiLevelLabels", "e-rangecolorsettings": "e-rangeColorSettings", "e-selecteddataindexes": "e-selectedDataIndexes" },
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
        FindXYPointValue(mouseX, mouseY) {
            return this.ej2Instances.FindXYPointValue(mouseX, mouseY);
        },
        addAxes(axisCollection) {
            return this.ej2Instances.addAxes(axisCollection);
        },
        addSeries(seriesCollection) {
            return this.ej2Instances.addSeries(seriesCollection);
        },
        clearSeries() {
            return this.ej2Instances.clearSeries();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName) {
            return this.ej2Instances.export(type, fileName);
        },
        getLocalizedLabel(key) {
            return this.ej2Instances.getLocalizedLabel(key);
        },
        hideCrosshair() {
            return this.ej2Instances.hideCrosshair();
        },
        hideTooltip() {
            return this.ej2Instances.hideTooltip();
        },
        isSecondaryAxis(axis) {
            return this.ej2Instances.isSecondaryAxis(axis);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        processData(render) {
            return this.ej2Instances.processData(render);
        },
        refreshLiveData() {
            return this.ej2Instances.refreshLiveData();
        },
        removeSeries(index) {
            return this.ej2Instances.removeSeries(index);
        },
        setAnnotationValue(annotationIndex, content) {
            return this.ej2Instances.setAnnotationValue(annotationIndex, content);
        },
        showCrosshair(x, y) {
            return this.ej2Instances.showCrosshair(x, y);
        },
        showTooltip(x, y, isPoint) {
            return this.ej2Instances.showTooltip(x, y, isPoint);
        },
    }
});
const ChartPlugin = {
    name: 'ejs-chart',
    install(Vue) {
        Vue.component(ChartPlugin.name, ChartComponent);
        Vue.component(SeriesPlugin.name, SeriesDirective);
        Vue.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
        Vue.component(TrendlinePlugin.name, TrendlineDirective);
        Vue.component(TrendlinesPlugin.name, TrendlinesDirective);
        Vue.component(SegmentPlugin.name, SegmentDirective);
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(StripLinePlugin.name, StripLineDirective);
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
        Vue.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
        Vue.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
        Vue.component(CategoryPlugin.name, CategoryDirective);
        Vue.component(CategoriesPlugin.name, CategoriesDirective);
        Vue.component(RowPlugin.name, RowDirective);
        Vue.component(RowsPlugin.name, RowsDirective);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(RangeColorSettingPlugin.name, RangeColorSettingDirective);
        Vue.component(RangeColorSettingsPlugin.name, RangeColorSettingsDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue.component(IndicatorPlugin.name, IndicatorDirective);
        Vue.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};

let AccumulationSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-accumulation-series-collection';
        }
    }
});
const AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install(Vue) {
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
};
let AccumulationSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-accumulation-series';
        }
    }
});
const AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install(Vue) {
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
};

let AccumulationAnnotationsDirective = vueDefineComponent({
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
            return 'e-accumulation-annotations';
        }
    }
});
const AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install(Vue) {
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};
let AccumulationAnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-accumulation-annotation';
        }
    }
});
const AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install(Vue) {
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'accessibility', 'allowExport', 'annotations', 'background', 'backgroundImage', 'border', 'center', 'centerLabel', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'focusBorderColor', 'focusBorderMargin', 'focusBorderWidth', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'noDataTemplate', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'afterExport', 'animationComplete', 'annotationRender', 'beforeExport', 'beforePrint', 'beforeResize', 'chartDoubleClick', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendClick', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender'];
const modelProps$1 = ['dataSource'];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents Vuejs AccumulationChart Component
 * ```vue
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
let AccumulationChartComponent = vueDefineComponent({
    name: 'AccumulationChartComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new AccumulationChart({}),
            propKeys: properties$1,
            models: modelProps$1,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-accumulation-series-collection": "e-accumulation-series", "e-accumulation-annotations": "e-accumulation-annotation" },
            tagNameMapper: { "e-accumulation-series-collection": "e-series", "e-accumulation-annotations": "e-annotations" },
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
        calculateBounds() {
            return this.ej2Instances.calculateBounds();
        },
        export(type, fileName) {
            return this.ej2Instances.export(type, fileName);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        setAnnotationValue(annotationIndex, content) {
            return this.ej2Instances.setAnnotationValue(annotationIndex, content);
        },
        titleTooltip(event, x, y, isTouch) {
            return this.ej2Instances.titleTooltip(event, x, y, isTouch);
        },
    }
});
const AccumulationChartPlugin = {
    name: 'ejs-accumulationchart',
    install(Vue) {
        Vue.component(AccumulationChartPlugin.name, AccumulationChartComponent);
        Vue.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
        Vue.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};

let RangenavigatorSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-rangenavigator-series-collection';
        }
    }
});
const RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install(Vue) {
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};
let RangenavigatorSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-rangenavigator-series';
        }
    }
});
const RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install(Vue) {
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'allowIntervalData', 'allowSnapping', 'animationDuration', 'background', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPlacement', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'beforeResize', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
const modelProps$2 = ['dataSource'];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents Vuejs RangeNavigator Component
 * ```vue
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
let RangeNavigatorComponent = vueDefineComponent({
    name: 'RangeNavigatorComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new RangeNavigator({}),
            propKeys: properties$2,
            models: modelProps$2,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-rangenavigator-series-collection": "e-rangenavigator-series" },
            tagNameMapper: { "e-rangenavigator-series-collection": "e-series" },
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
        createSecondaryElement() {
            return this.ej2Instances.createSecondaryElement();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation, controls, width, height, isVertical) {
            return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        renderChart(resize) {
            return this.ej2Instances.renderChart(resize);
        },
    }
});
const RangeNavigatorPlugin = {
    name: 'ejs-rangenavigator',
    install(Vue) {
        Vue.component(RangeNavigatorPlugin.name, RangeNavigatorComponent);
        Vue.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
        Vue.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};

let RangeBandSettingsDirective = vueDefineComponent({
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
            return 'e-rangeBandSettings';
        }
    }
});
const RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install(Vue) {
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};
let RangeBandSettingDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-rangeBandSetting';
        }
    }
});
const RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install(Vue) {
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
};

const properties$3 = ['isLazyUpdate', 'plugins', 'axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'rangePadding', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
const modelProps$3 = [];
const testProp$3 = getProps({ props: properties$3 });
const props$3 = testProp$3[0], watch$3 = testProp$3[1], emitProbs$3 = Object.keys(watch$3);
emitProbs$3.push('modelchanged', 'update:modelValue');
for (let props of modelProps$3) {
    emitProbs$3.push('update:' + props);
}
/**
 * Represents Vuejs Sparkline Component
 * ```vue
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
let SparklineComponent = vueDefineComponent({
    name: 'SparklineComponent',
    mixins: [ComponentBase],
    props: props$3,
    watch: watch$3,
    emits: emitProbs$3,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Sparkline({}),
            propKeys: properties$3,
            models: modelProps$3,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-rangeBandSettings": "e-rangeBandSetting" },
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        renderSparkline() {
            return this.ej2Instances.renderSparkline();
        },
    }
});
const SparklinePlugin = {
    name: 'ejs-sparkline',
    install(Vue) {
        Vue.component(SparklinePlugin.name, SparklineComponent);
        Vue.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
        Vue.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};

let SmithchartSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-seriesCollection';
        }
    }
});
const SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install(Vue) {
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
let SmithchartSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-series';
        }
    }
});
const SmithchartSeriesPlugin = {
    name: 'e-series',
    install(Vue) {
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
};

const properties$4 = ['isLazyUpdate', 'plugins', 'background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender', 'tooltipRender'];
const modelProps$4 = [];
const testProp$4 = getProps({ props: properties$4 });
const props$4 = testProp$4[0], watch$4 = testProp$4[1], emitProbs$4 = Object.keys(watch$4);
emitProbs$4.push('modelchanged', 'update:modelValue');
for (let props of modelProps$4) {
    emitProbs$4.push('update:' + props);
}
/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
let SmithchartComponent = vueDefineComponent({
    name: 'SmithchartComponent',
    mixins: [ComponentBase],
    props: props$4,
    watch: watch$4,
    emits: emitProbs$4,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Smithchart({}),
            propKeys: properties$4,
            models: modelProps$4,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-seriesCollection": "e-series" },
            tagNameMapper: { "e-seriesCollection": "e-series" },
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
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation) {
            return this.ej2Instances.export(type, fileName, orientation);
        },
        mouseEnd(e) {
            return this.ej2Instances.mouseEnd(e);
        },
        mouseMove(e) {
            return this.ej2Instances.mouseMove(e);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        setTabIndex(previousElement, currentElement) {
            return this.ej2Instances.setTabIndex(previousElement, currentElement);
        },
        smithchartOnClick(e) {
            return this.ej2Instances.smithchartOnClick(e);
        },
        smithchartOnResize() {
            return this.ej2Instances.smithchartOnResize();
        },
    }
});
const SmithchartPlugin = {
    name: 'ejs-smithchart',
    install(Vue) {
        Vue.component(SmithchartPlugin.name, SmithchartComponent);
        Vue.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};

let StockChartTrendlinesDirective = vueDefineComponent({
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
            return 'e-trendlines';
        }
    }
});
const StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install(Vue) {
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
};
let StockChartTrendlineDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-trendline';
        }
    }
});
const StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install(Vue) {
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
};

let StockChartSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-stockchart-series-collection';
        }
    }
});
const StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install(Vue) {
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
};
let StockChartSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-series';
        }
    }
});
const StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install(Vue) {
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
};

let StockChartAxesDirective = vueDefineComponent({
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
            return 'e-stockchart-axes';
        }
    }
});
const StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install(Vue) {
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
};
let StockChartAxisDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-axis';
        }
    }
});
const StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install(Vue) {
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
};

let StockChartRowsDirective = vueDefineComponent({
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
            return 'e-stockchart-rows';
        }
    }
});
const StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install(Vue) {
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
};
let StockChartRowDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-row';
        }
    }
});
const StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install(Vue) {
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
};

let StockChartAnnotationsDirective = vueDefineComponent({
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
            return 'e-stockchart-annotations';
        }
    }
});
const StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install(Vue) {
        Vue.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-stockchart>
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
let StockChartAnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-annotation';
        }
    }
});
const StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install(Vue) {
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
};

let StockChartSelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-stockchart-selectedDataIndexes';
        }
    }
});
const StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install(Vue) {
        Vue.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
};
let StockChartSelectedDataIndexDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-selectedDataIndex';
        }
    }
});
const StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install(Vue) {
        Vue.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
};

let StockChartPeriodsDirective = vueDefineComponent({
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
            return 'e-stockchart-periods';
        }
    }
});
const StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install(Vue) {
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
};
let StockChartPeriodDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-period';
        }
    }
});
const StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install(Vue) {
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
};

let StockEventsDirective = vueDefineComponent({
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
            return 'e-stockchart-stockevents';
        }
    }
});
const StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install(Vue) {
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
    }
};
let StockEventDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-stockevent';
        }
    }
});
const StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install(Vue) {
        Vue.component(StockEventPlugin.name, StockEventDirective);
    }
};

let StockChartIndicatorsDirective = vueDefineComponent({
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
            return 'e-stockchart-indicators';
        }
    }
});
const StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install(Vue) {
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};
let StockChartIndicatorDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-stockchart-indicator';
        }
    }
});
const StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install(Vue) {
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
};

const properties$5 = ['isLazyUpdate', 'plugins', 'annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'noDataTemplate', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'beforeExport', 'beforeIndicatorChange', 'crosshairLabelRender', 'indicatorChanged', 'legendClick', 'legendRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender'];
const modelProps$5 = ['dataSource'];
const testProp$5 = getProps({ props: properties$5 });
const props$5 = testProp$5[0], watch$5 = testProp$5[1], emitProbs$5 = Object.keys(watch$5);
emitProbs$5.push('modelchanged', 'update:modelValue');
for (let props of modelProps$5) {
    emitProbs$5.push('update:' + props);
}
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
let StockChartComponent = vueDefineComponent({
    name: 'StockChartComponent',
    mixins: [ComponentBase],
    props: props$5,
    watch: watch$5,
    emits: emitProbs$5,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new StockChart({}),
            propKeys: properties$5,
            models: modelProps$5,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-stockchart-series-collection": { "e-stockchart-series": { "e-trendlines": "e-trendline" } }, "e-stockchart-axes": "e-stockchart-axis", "e-stockchart-rows": "e-stockchart-row", "e-stockchart-annotations": "e-stockchart-annotation", "e-stockchart-selectedDataIndexes": "e-stockchart-selectedDataIndex", "e-stockchart-periods": "e-stockchart-period", "e-stockchart-stockevents": "e-stockchart-stockevent", "e-stockchart-indicators": "e-stockchart-indicator" },
            tagNameMapper: { "e-stockchart-series-collection": "e-series", "e-stockchart-axes": "e-axes", "e-stockchart-rows": "e-rows", "e-stockchart-annotations": "e-annotations", "e-stockchart-selectedDataIndexes": "e-selectedDataIndexes", "e-stockchart-periods": "e-periods", "e-stockchart-stockevents": "e-stockEvents", "e-stockchart-indicators": "e-indicators" },
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
        chartModuleInjection() {
            return this.ej2Instances.chartModuleInjection();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        findCurrentData(totalData, xName) {
            return this.ej2Instances.findCurrentData(totalData, xName);
        },
        rangeChanged(updatedStart, updatedEnd) {
            return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
        },
        renderPeriodSelector() {
            return this.ej2Instances.renderPeriodSelector();
        },
        stockChartDataManagerSuccess() {
            return this.ej2Instances.stockChartDataManagerSuccess();
        },
    }
});
const StockChartPlugin = {
    name: 'ejs-stockchart',
    install(Vue) {
        Vue.component(StockChartPlugin.name, StockChartComponent);
        Vue.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
        Vue.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
        Vue.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
        Vue.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
        Vue.component(StockChartAxisPlugin.name, StockChartAxisDirective);
        Vue.component(StockChartAxesPlugin.name, StockChartAxesDirective);
        Vue.component(StockChartRowPlugin.name, StockChartRowDirective);
        Vue.component(StockChartRowsPlugin.name, StockChartRowsDirective);
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
        Vue.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
        Vue.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
        Vue.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
        Vue.component(StockEventPlugin.name, StockEventDirective);
        Vue.component(StockEventsPlugin.name, StockEventsDirective);
        Vue.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};

let BulletRangeCollectionDirective = vueDefineComponent({
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
            return 'e-bullet-range-collection';
        }
    }
});
const BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install(Vue) {
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
let BulletRangeDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-bullet-range';
        }
    }
});
const BulletRangePlugin = {
    name: 'e-bullet-range',
    install(Vue) {
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};

const properties$6 = ['isLazyUpdate', 'plugins', 'animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'legendSettings', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width', 'beforePrint', 'bulletChartMouseClick', 'legendRender', 'load', 'loaded', 'tooltipRender'];
const modelProps$6 = ['dataSource'];
const testProp$6 = getProps({ props: properties$6 });
const props$6 = testProp$6[0], watch$6 = testProp$6[1], emitProbs$6 = Object.keys(watch$6);
emitProbs$6.push('modelchanged', 'update:modelValue');
for (let props of modelProps$6) {
    emitProbs$6.push('update:' + props);
}
/**
 * Represents Vuejs BulletChart Component
 * ```vue
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
let BulletChartComponent = vueDefineComponent({
    name: 'BulletChartComponent',
    mixins: [ComponentBase],
    props: props$6,
    watch: watch$6,
    emits: emitProbs$6,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new BulletChart({}),
            propKeys: properties$6,
            models: modelProps$6,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-bullet-range-collection": "e-bullet-range" },
            tagNameMapper: { "e-bullet-range-collection": "e-ranges" },
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
        createSvg(chart) {
            return this.ej2Instances.createSvg(chart);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation, controls, width, height, isVertical) {
            return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        removeSvg() {
            return this.ej2Instances.removeSvg();
        },
    }
});
const BulletChartPlugin = {
    name: 'ejs-bulletchart',
    install(Vue) {
        Vue.component(BulletChartPlugin.name, BulletChartComponent);
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};

let Chart3DSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-chart3d-series-collection';
        }
    }
});
const Chart3DSeriesCollectionPlugin = {
    name: 'e-chart3d-series-collection',
    install(Vue) {
        Vue.component(Chart3DSeriesCollectionPlugin.name, Chart3DSeriesCollectionDirective);
    }
};
/**
 * Represents Vuejs 3D Chart Component
 * ```vue
 * <ejs-chart3d>
 * <e-chart3d-series-collection>
 * <e-chart3d-series></e-chart3d-series>
 * </e-chart3d-series-collection>
 * </ejs-chart3d>
 * ```
 */
let Chart3DSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chart3d-series';
        }
    }
});
const Chart3DSeriesPlugin = {
    name: 'e-chart3d-series',
    install(Vue) {
        Vue.component(Chart3DSeriesPlugin.name, Chart3DSeriesDirective);
    }
};

let Chart3DAxesDirective = vueDefineComponent({
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
            return 'e-chart3daxes';
        }
    }
});
const Chart3DAxesPlugin = {
    name: 'e-chart3daxes',
    install(Vue) {
        Vue.component(Chart3DAxesPlugin.name, Chart3DAxesDirective);
    }
};
let Chart3DAxisDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chart3daxis';
        }
    }
});
const Chart3DAxisPlugin = {
    name: 'e-chart3daxis',
    install(Vue) {
        Vue.component(Chart3DAxisPlugin.name, Chart3DAxisDirective);
    }
};

let Chart3DRowsDirective = vueDefineComponent({
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
            return 'e-chart3d-rows';
        }
    }
});
const Chart3DRowsPlugin = {
    name: 'e-chart3d-rows',
    install(Vue) {
        Vue.component(Chart3DRowsPlugin.name, Chart3DRowsDirective);
    }
};
let Chart3DRowDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chart3d-row';
        }
    }
});
const Chart3DRowPlugin = {
    name: 'e-chart3d-row',
    install(Vue) {
        Vue.component(Chart3DRowPlugin.name, Chart3DRowDirective);
    }
};

let Chart3DColumnsDirective = vueDefineComponent({
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
            return 'e-chart3d-columns';
        }
    }
});
const Chart3DColumnsPlugin = {
    name: 'e-chart3d-columns',
    install(Vue) {
        Vue.component(Chart3DColumnsPlugin.name, Chart3DColumnsDirective);
    }
};
let Chart3DColumnDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chart3d-columns';
        }
    }
});
const Chart3DColumnPlugin = {
    name: 'e-chart3d-columns',
    install(Vue) {
        Vue.component(Chart3DColumnPlugin.name, Chart3DColumnDirective);
    }
};

let Chart3DSelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-chart3d-selecteddataindexes';
        }
    }
});
const Chart3DSelectedDataIndexesPlugin = {
    name: 'e-chart3d-selecteddataindexes',
    install(Vue) {
        Vue.component(Chart3DSelectedDataIndexesPlugin.name, Chart3DSelectedDataIndexesDirective);
    }
};
let Chart3DSelectedDataIndexDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-chart3d-selecteddataindex';
        }
    }
});
const Chart3DSelectedDataIndexPlugin = {
    name: 'e-chart3d-selecteddataindex',
    install(Vue) {
        Vue.component(Chart3DSelectedDataIndexPlugin.name, Chart3DSelectedDataIndexDirective);
    }
};

const properties$7 = ['isLazyUpdate', 'plugins', 'axes', 'background', 'backgroundImage', 'border', 'columns', 'currencyCode', 'dataSource', 'depth', 'description', 'enableExport', 'enablePersistence', 'enableRotation', 'enableRtl', 'enableSideBySidePlacement', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation', 'rows', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'tilt', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'wallColor', 'wallSize', 'width', 'afterExport', 'axisLabelRender', 'beforeExport', 'beforePrint', 'beforeResize', 'chart3DMouseClick', 'chart3DMouseDown', 'chart3DMouseLeave', 'chart3DMouseMove', 'chart3DMouseUp', 'legendClick', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender'];
const modelProps$7 = ['dataSource'];
const testProp$7 = getProps({ props: properties$7 });
const props$7 = testProp$7[0], watch$7 = testProp$7[1], emitProbs$7 = Object.keys(watch$7);
emitProbs$7.push('modelchanged', 'update:modelValue');
for (let props of modelProps$7) {
    emitProbs$7.push('update:' + props);
}
/**
 * Represents Vuejs 3D Chart Component
 * ```vue
 * <ejs-chart3d></ejs-chart3d>
 * ```
 */
let Chart3DComponent = vueDefineComponent({
    name: 'Chart3DComponent',
    mixins: [ComponentBase],
    props: props$7,
    watch: watch$7,
    emits: emitProbs$7,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Chart3D({}),
            propKeys: properties$7,
            models: modelProps$7,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-chart3d-series-collection": "e-chart3d-series", "e-chart3daxes": "e-chart3daxis", "e-chart3d-rows": "e-chart3d-row", "e-chart3d-columns": "e-chart3d-columns", "e-chart3d-selecteddataindexes": "e-chart3d-selecteddataindex" },
            tagNameMapper: { "e-chart3d-series-collection": "e-series", "e-chart3daxes": "e-axes", "e-chart3d-rows": "e-rows", "e-chart3d-columns": "e-columns", "e-chart3d-selecteddataindexes": "e-selectedDataIndexes" },
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
        addSeries(seriesCollection) {
            return this.ej2Instances.addSeries(seriesCollection);
        },
        createChartSvg() {
            return this.ej2Instances.createChartSvg();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName) {
            return this.ej2Instances.export(type, fileName);
        },
        highlightAnimation(element, index, duration, startOpacity) {
            return this.ej2Instances.highlightAnimation(element, index, duration, startOpacity);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        removeSeries(index) {
            return this.ej2Instances.removeSeries(index);
        },
        stopElementAnimation(element, index) {
            return this.ej2Instances.stopElementAnimation(element, index);
        },
    }
});
const Chart3DPlugin = {
    name: 'ejs-chart3d',
    install(Vue) {
        Vue.component(Chart3DPlugin.name, Chart3DComponent);
        Vue.component(Chart3DSeriesPlugin.name, Chart3DSeriesDirective);
        Vue.component(Chart3DSeriesCollectionPlugin.name, Chart3DSeriesCollectionDirective);
        Vue.component(Chart3DAxisPlugin.name, Chart3DAxisDirective);
        Vue.component(Chart3DAxesPlugin.name, Chart3DAxesDirective);
        Vue.component(Chart3DRowPlugin.name, Chart3DRowDirective);
        Vue.component(Chart3DRowsPlugin.name, Chart3DRowsDirective);
        Vue.component(Chart3DColumnPlugin.name, Chart3DColumnDirective);
        Vue.component(Chart3DColumnsPlugin.name, Chart3DColumnsDirective);
        Vue.component(Chart3DSelectedDataIndexPlugin.name, Chart3DSelectedDataIndexDirective);
        Vue.component(Chart3DSelectedDataIndexesPlugin.name, Chart3DSelectedDataIndexesDirective);
    }
};

let CircularChart3DSeriesCollectionDirective = vueDefineComponent({
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
            return 'e-circularchart3d-series-collection';
        }
    }
});
const CircularChart3DSeriesCollectionPlugin = {
    name: 'e-circularchart3d-series-collection',
    install(Vue) {
        Vue.component(CircularChart3DSeriesCollectionPlugin.name, CircularChart3DSeriesCollectionDirective);
    }
};
let CircularChart3DSeriesDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-circularchart3d-series';
        }
    }
});
const CircularChart3DSeriesPlugin = {
    name: 'e-circularchart3d-series',
    install(Vue) {
        Vue.component(CircularChart3DSeriesPlugin.name, CircularChart3DSeriesDirective);
    }
};

let CircularChart3DSelectedDataIndexesDirective = vueDefineComponent({
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
            return 'e-circularchart3d-selecteddataindexes';
        }
    }
});
const CircularChart3DSelectedDataIndexesPlugin = {
    name: 'e-circularchart3d-selecteddataindexes',
    install(Vue) {
        Vue.component(CircularChart3DSelectedDataIndexesPlugin.name, CircularChart3DSelectedDataIndexesDirective);
    }
};
let CircularChart3DSelectedDataIndexDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-circularchart3d-selecteddataindex';
        }
    }
});
const CircularChart3DSelectedDataIndexPlugin = {
    name: 'e-circularchart3d-selecteddataindex',
    install(Vue) {
        Vue.component(CircularChart3DSelectedDataIndexPlugin.name, CircularChart3DSelectedDataIndexDirective);
    }
};

const properties$8 = ['isLazyUpdate', 'plugins', 'background', 'backgroundImage', 'border', 'dataSource', 'depth', 'enableAnimation', 'enableExport', 'enablePersistence', 'enableRotation', 'enableRtl', 'height', 'highlightColor', 'highlightMode', 'highlightPattern', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'rotation', 'selectedDataIndexes', 'selectionMode', 'selectionPattern', 'series', 'subTitle', 'subTitleStyle', 'theme', 'tilt', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'afterExport', 'beforeExport', 'beforePrint', 'beforeResize', 'circularChart3DMouseClick', 'circularChart3DMouseDown', 'circularChart3DMouseLeave', 'circularChart3DMouseMove', 'circularChart3DMouseUp', 'legendClick', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender'];
const modelProps$8 = ['dataSource'];
const testProp$8 = getProps({ props: properties$8 });
const props$8 = testProp$8[0], watch$8 = testProp$8[1], emitProbs$8 = Object.keys(watch$8);
emitProbs$8.push('modelchanged', 'update:modelValue');
for (let props of modelProps$8) {
    emitProbs$8.push('update:' + props);
}
/**
 * Represents Vuejs Circular 3D Chart Component
 * ```vue
 * <ejs-circularchart3d></ejs-circularchart3d>
 * ```
 */
let CircularChart3DComponent = vueDefineComponent({
    name: 'CircularChart3DComponent',
    mixins: [ComponentBase],
    props: props$8,
    watch: watch$8,
    emits: emitProbs$8,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new CircularChart3D({}),
            propKeys: properties$8,
            models: modelProps$8,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-circularchart3d-series-collection": "e-circularchart3d-series", "e-circularchart3d-selecteddataindexes": "e-circularchart3d-selecteddataindex" },
            tagNameMapper: { "e-circularchart3d-series-collection": "e-series", "e-circularchart3d-selecteddataindexes": "e-selectedDataIndexes" },
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
        export(type, fileName) {
            return this.ej2Instances.export(type, fileName);
        },
        pdfExport(fileName, orientation, controls, width, height, isVertical, header, footer, exportToMultiplePage) {
            return this.ej2Instances.pdfExport(fileName, orientation, controls, width, height, isVertical, header, footer, exportToMultiplePage);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
    }
});
const CircularChart3DPlugin = {
    name: 'ejs-circularchart3d',
    install(Vue) {
        Vue.component(CircularChart3DPlugin.name, CircularChart3DComponent);
        Vue.component(CircularChart3DSeriesPlugin.name, CircularChart3DSeriesDirective);
        Vue.component(CircularChart3DSeriesCollectionPlugin.name, CircularChart3DSeriesCollectionDirective);
        Vue.component(CircularChart3DSelectedDataIndexPlugin.name, CircularChart3DSelectedDataIndexDirective);
        Vue.component(CircularChart3DSelectedDataIndexesPlugin.name, CircularChart3DSelectedDataIndexesDirective);
    }
};

let SankeyNodesCollectionDirective = vueDefineComponent({
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
            return 'e-sankey-nodes';
        }
    }
});
const SankeyNodesCollectionPlugin = {
    name: 'e-sankey-nodes',
    install(Vue) {
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
let SankeyNodeDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-sankey-node';
        }
    }
});
const SankeyNodePlugin = {
    name: 'e-sankey-node',
    install(Vue) {
        Vue.component(SankeyNodePlugin.name, SankeyNodeDirective);
    }
};

let SankeyLinksCollectionDirective = vueDefineComponent({
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
            return 'e-sankey-links';
        }
    }
});
const SankeyLinksCollectionPlugin = {
    name: 'e-sankey-links',
    install(Vue) {
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
let SankeyLinkDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-sankey-link';
        }
    }
});
const SankeyLinkPlugin = {
    name: 'e-sankey-link',
    install(Vue) {
        Vue.component(SankeyLinkPlugin.name, SankeyLinkDirective);
    }
};

const properties$9 = ['isLazyUpdate', 'plugins', 'accessibility', 'allowExport', 'animation', 'background', 'backgroundImage', 'border', 'enableExport', 'enablePersistence', 'enableRtl', 'focusBorderColor', 'focusBorderMargin', 'focusBorderWidth', 'height', 'labelSettings', 'legendSettings', 'linkStyle', 'links', 'locale', 'margin', 'nodeStyle', 'nodes', 'orientation', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'width', 'afterExport', 'beforeExport', 'beforePrint', 'exportCompleted', 'labelRendering', 'legendItemHover', 'legendItemRendering', 'linkClick', 'linkEnter', 'linkLeave', 'linkRendering', 'load', 'loaded', 'nodeClick', 'nodeEnter', 'nodeLeave', 'nodeRendering', 'sizeChanged', 'tooltipRendering'];
const modelProps$9 = [];
const testProp$9 = getProps({ props: properties$9 });
const props$9 = testProp$9[0], watch$9 = testProp$9[1], emitProbs$9 = Object.keys(watch$9);
emitProbs$9.push('modelchanged', 'update:modelValue');
for (let props of modelProps$9) {
    emitProbs$9.push('update:' + props);
}
/**
 * Represents Vuejs Sankey Component
 * ```vue
 * <ejs-sankey></ejs-sankey>
 * ```
 */
let SankeyComponent = vueDefineComponent({
    name: 'SankeyComponent',
    mixins: [ComponentBase],
    props: props$9,
    watch: watch$9,
    emits: emitProbs$9,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Sankey({}),
            propKeys: properties$9,
            models: modelProps$9,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-sankey-nodes": "e-sankey-node", "e-sankey-links": "e-sankey-link" },
            tagNameMapper: { "e-sankey-nodes": "e-nodes", "e-sankey-links": "e-links" },
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
    }
});
const SankeyPlugin = {
    name: 'ejs-sankey',
    install(Vue) {
        Vue.component(SankeyPlugin.name, SankeyComponent);
        Vue.component(SankeyNodePlugin.name, SankeyNodeDirective);
        Vue.component(SankeyNodesCollectionPlugin.name, SankeyNodesCollectionDirective);
        Vue.component(SankeyLinkPlugin.name, SankeyLinkDirective);
        Vue.component(SankeyLinksCollectionPlugin.name, SankeyLinksCollectionDirective);
    }
};

export { AccumulationAnnotationDirective, AccumulationAnnotationPlugin, AccumulationAnnotationsDirective, AccumulationAnnotationsPlugin, AccumulationChartComponent, AccumulationChartPlugin, AccumulationSeriesCollectionDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesDirective, AccumulationSeriesPlugin, AnnotationDirective, AnnotationPlugin, AnnotationsDirective, AnnotationsPlugin, AxesDirective, AxesPlugin, AxisDirective, AxisPlugin, BulletChartComponent, BulletChartPlugin, BulletRangeCollectionDirective, BulletRangeCollectionPlugin, BulletRangeDirective, BulletRangePlugin, CategoriesDirective, CategoriesPlugin, CategoryDirective, CategoryPlugin, Chart3DAxesDirective, Chart3DAxesPlugin, Chart3DAxisDirective, Chart3DAxisPlugin, Chart3DColumnDirective, Chart3DColumnPlugin, Chart3DColumnsDirective, Chart3DColumnsPlugin, Chart3DComponent, Chart3DPlugin, Chart3DRowDirective, Chart3DRowPlugin, Chart3DRowsDirective, Chart3DRowsPlugin, Chart3DSelectedDataIndexDirective, Chart3DSelectedDataIndexPlugin, Chart3DSelectedDataIndexesDirective, Chart3DSelectedDataIndexesPlugin, Chart3DSeriesCollectionDirective, Chart3DSeriesCollectionPlugin, Chart3DSeriesDirective, Chart3DSeriesPlugin, ChartComponent, ChartPlugin, CircularChart3DComponent, CircularChart3DPlugin, CircularChart3DSelectedDataIndexDirective, CircularChart3DSelectedDataIndexPlugin, CircularChart3DSelectedDataIndexesDirective, CircularChart3DSelectedDataIndexesPlugin, CircularChart3DSeriesCollectionDirective, CircularChart3DSeriesCollectionPlugin, CircularChart3DSeriesDirective, CircularChart3DSeriesPlugin, ColumnDirective, ColumnPlugin, ColumnsDirective, ColumnsPlugin, IndicatorDirective, IndicatorPlugin, IndicatorsDirective, IndicatorsPlugin, MultiLevelLabelDirective, MultiLevelLabelPlugin, MultiLevelLabelsDirective, MultiLevelLabelsPlugin, RangeBandSettingDirective, RangeBandSettingPlugin, RangeBandSettingsDirective, RangeBandSettingsPlugin, RangeColorSettingDirective, RangeColorSettingPlugin, RangeColorSettingsDirective, RangeColorSettingsPlugin, RangeNavigatorComponent, RangeNavigatorPlugin, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesDirective, RangenavigatorSeriesPlugin, RowDirective, RowPlugin, RowsDirective, RowsPlugin, SankeyComponent, SankeyLinkDirective, SankeyLinkPlugin, SankeyLinksCollectionDirective, SankeyLinksCollectionPlugin, SankeyNodeDirective, SankeyNodePlugin, SankeyNodesCollectionDirective, SankeyNodesCollectionPlugin, SankeyPlugin, SegmentDirective, SegmentPlugin, SegmentsDirective, SegmentsPlugin, SelectedDataIndexDirective, SelectedDataIndexPlugin, SelectedDataIndexesDirective, SelectedDataIndexesPlugin, SeriesCollectionDirective, SeriesCollectionPlugin, SeriesDirective, SeriesPlugin, SmithchartComponent, SmithchartPlugin, SmithchartSeriesCollectionDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesDirective, SmithchartSeriesPlugin, SparklineComponent, SparklinePlugin, StockChartAnnotationDirective, StockChartAnnotationPlugin, StockChartAnnotationsDirective, StockChartAnnotationsPlugin, StockChartAxesDirective, StockChartAxesPlugin, StockChartAxisDirective, StockChartAxisPlugin, StockChartComponent, StockChartIndicatorDirective, StockChartIndicatorPlugin, StockChartIndicatorsDirective, StockChartIndicatorsPlugin, StockChartPeriodDirective, StockChartPeriodPlugin, StockChartPeriodsDirective, StockChartPeriodsPlugin, StockChartPlugin, StockChartRowDirective, StockChartRowPlugin, StockChartRowsDirective, StockChartRowsPlugin, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexPlugin, StockChartSelectedDataIndexesDirective, StockChartSelectedDataIndexesPlugin, StockChartSeriesCollectionDirective, StockChartSeriesCollectionPlugin, StockChartSeriesDirective, StockChartSeriesPlugin, StockChartTrendlineDirective, StockChartTrendlinePlugin, StockChartTrendlinesDirective, StockChartTrendlinesPlugin, StockEventDirective, StockEventPlugin, StockEventsDirective, StockEventsPlugin, StripLineDirective, StripLinePlugin, StripLinesDirective, StripLinesPlugin, TrendlineDirective, TrendlinePlugin, TrendlinesDirective, TrendlinesPlugin };
//# sourceMappingURL=ej2-vue-charts.es2015.js.map
