import { Maps } from '@syncfusion/ej2-maps';
export * from '@syncfusion/ej2-maps';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, isUndefined } from '@syncfusion/ej2-base';

let InitialShapeSelectionsDirective = vueDefineComponent({
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
            return 'e-initialShapeSelections';
        }
    }
});
const InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install(Vue) {
        Vue.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
};
/**
 * Represents the directive to configure the selection of the shapes when the maps is initially rendered.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let InitialShapeSelectionDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-initialShapeSelection';
        }
    }
});
const InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install(Vue) {
        Vue.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
    }
};

let MarkersDirective = vueDefineComponent({
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
            return 'e-markerSettings';
        }
    }
});
const MarkersPlugin = {
    name: 'e-markerSettings',
    install(Vue) {
        Vue.component(MarkersPlugin.name, MarkersDirective);
    }
};
/**
 * Represents the directive to define the markers in the maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let MarkerDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-markerSetting';
        }
    }
});
const MarkerPlugin = {
    name: 'e-markerSetting',
    install(Vue) {
        Vue.component(MarkerPlugin.name, MarkerDirective);
    }
};

let ColorMappingsDirective = vueDefineComponent({
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
            return 'e-colorMappings';
        }
    }
});
const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue) {
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
/**
 * Represents the directive to define the bubble color mapping in the maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let ColorMappingDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-colorMapping';
        }
    }
});
const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
};

let BubblesDirective = vueDefineComponent({
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
            return 'e-bubbleSettings';
        }
    }
});
const BubblesPlugin = {
    name: 'e-bubbleSettings',
    install(Vue) {
        Vue.component(BubblesPlugin.name, BubblesDirective);
    }
};
/**
 * Represents the directive to define the bubbles in the maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let BubbleDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-bubbleSetting';
        }
    }
});
const BubblePlugin = {
    name: 'e-bubbleSetting',
    install(Vue) {
        Vue.component(BubblePlugin.name, BubbleDirective);
    }
};

let NavigationLinesDirective = vueDefineComponent({
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
            return 'e-navigationLineSettings';
        }
    }
});
const NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install(Vue) {
        Vue.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
};
/**
 * Represents the directive to define the navigation lines in the maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let NavigationLineDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-navigationLineSetting';
        }
    }
});
const NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install(Vue) {
        Vue.component(NavigationLinePlugin.name, NavigationLineDirective);
    }
};

let LayersDirective = vueDefineComponent({
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
            return 'e-layers';
        }
    }
});
const LayersPlugin = {
    name: 'e-layers',
    install(Vue) {
        Vue.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * Represents the directive to define the layer of the maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let LayerDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-layer';
        }
    }
});
const LayerPlugin = {
    name: 'e-layer',
    install(Vue) {
        Vue.component(LayerPlugin.name, LayerDirective);
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
            return 'e-maps-annotations';
        }
    }
});
const AnnotationsPlugin = {
    name: 'e-maps-annotations',
    install(Vue) {
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * Represents the directive to define the annotations in the maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
 * ```
 */
let AnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-maps-annotation';
        }
    }
});
const AnnotationPlugin = {
    name: 'e-maps-annotation',
    install(Vue) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'allowImageExport', 'allowPdfExport', 'allowPrint', 'annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'legendRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerDragEnd', 'markerDragStart', 'markerMouseMove', 'markerRendering', 'mouseMove', 'onclick', 'pan', 'panComplete', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom', 'zoomComplete'];
const modelProps = ['dataSource'];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the Vue Maps component.
 * It is ideal for rendering maps from GeoJSON data or other map providers like OpenStreetMap, Google Maps, Bing Maps, etc that has rich feature set that includes markers, labels, bubbles and much more.
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
let MapsComponent = vueDefineComponent({
    name: 'MapsComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    model: { event: 'modelchanged' },
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Maps({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-layers": { "e-layer": { "e-initialShapeSelections": "e-initialShapeSelection", "e-markerSettings": "e-markerSetting", "e-bubbleSettings": { "e-bubbleSetting": { "e-colorMappings": "e-colorMapping" } }, "e-navigationLineSettings": "e-navigationLineSetting" } }, "e-maps-annotations": "e-maps-annotation" },
            tagNameMapper: { "e-initialShapeSelections": "e-initialShapeSelection", "e-colorMappings": "e-colorMapping", "e-maps-annotations": "e-annotations" },
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
        addLayer(layer) {
            return this.ej2Instances.addLayer(layer);
        },
        addMarker(layerIndex, markerCollection) {
            return this.ej2Instances.addMarker(layerIndex, markerCollection);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        export(type, fileName, orientation, allowDownload) {
            return this.ej2Instances.export(type, fileName, orientation, allowDownload);
        },
        getBingUrlTemplate(url) {
            return this.ej2Instances.getBingUrlTemplate(url);
        },
        getGeoLocation(layerIndex, x, y) {
            return this.ej2Instances.getGeoLocation(layerIndex, x, y);
        },
        getMinMaxLatitudeLongitude() {
            return this.ej2Instances.getMinMaxLatitudeLongitude();
        },
        getTileGeoLocation(x, y) {
            return this.ej2Instances.getTileGeoLocation(x, y);
        },
        mapsOnResize(e) {
            return this.ej2Instances.mapsOnResize(e);
        },
        panByDirection(direction, mouseLocation) {
            return this.ej2Instances.panByDirection(direction, mouseLocation);
        },
        pointToLatLong(pageX, pageY) {
            return this.ej2Instances.pointToLatLong(pageX, pageY);
        },
        print(id) {
            return this.ej2Instances.print(id);
        },
        removeLayer(index) {
            return this.ej2Instances.removeLayer(index);
        },
        shapeSelection(layerIndex, propertyName, name, enable) {
            return this.ej2Instances.shapeSelection(layerIndex, propertyName, name, enable);
        },
        zoomByPosition(centerPosition, zoomFactor) {
            return this.ej2Instances.zoomByPosition(centerPosition, zoomFactor);
        },
        zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude) {
            return this.ej2Instances.zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude);
        },
    }
});
const MapsPlugin = {
    name: 'ejs-maps',
    install(Vue) {
        Vue.component(MapsPlugin.name, MapsComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
        Vue.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
        Vue.component(MarkerPlugin.name, MarkerDirective);
        Vue.component(MarkersPlugin.name, MarkersDirective);
        Vue.component(BubblePlugin.name, BubbleDirective);
        Vue.component(BubblesPlugin.name, BubblesDirective);
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
        Vue.component(NavigationLinePlugin.name, NavigationLineDirective);
        Vue.component(NavigationLinesPlugin.name, NavigationLinesDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { AnnotationDirective, AnnotationPlugin, AnnotationsDirective, AnnotationsPlugin, BubbleDirective, BubblePlugin, BubblesDirective, BubblesPlugin, ColorMappingDirective, ColorMappingPlugin, ColorMappingsDirective, ColorMappingsPlugin, InitialShapeSelectionDirective, InitialShapeSelectionPlugin, InitialShapeSelectionsDirective, InitialShapeSelectionsPlugin, LayerDirective, LayerPlugin, LayersDirective, LayersPlugin, MapsComponent, MapsPlugin, MarkerDirective, MarkerPlugin, MarkersDirective, MarkersPlugin, NavigationLineDirective, NavigationLinePlugin, NavigationLinesDirective, NavigationLinesPlugin };
//# sourceMappingURL=ej2-vue-maps.es2015.js.map
