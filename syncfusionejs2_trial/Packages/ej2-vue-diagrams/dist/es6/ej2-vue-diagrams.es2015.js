import { Diagram, SymbolPalette, Overview } from '@syncfusion/ej2-diagrams';
export * from '@syncfusion/ej2-diagrams';
import { vueDefineComponent, isExecute, gh, getProps, ComponentBase } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

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
 * `e-layers` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
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

let CustomCursorsDirective = vueDefineComponent({
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
            return 'e-cursormaps';
        }
    }
});
const CustomCursorsPlugin = {
    name: 'e-cursormaps',
    install(Vue) {
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
    }
};
/**
 * `e-custormaps` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-custormaps>
 * <e-custormap>
 * </e-custormap>
 * </e-custormaps>
</ejs-diagram>
 * ```
 */
let CustomCursorDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-cursormap';
        }
    }
});
const CustomCursorPlugin = {
    name: 'e-cursormap',
    install(Vue) {
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
    }
};

let ConnectorFixedUserHandlesDirective = vueDefineComponent({
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
            return 'e-connector-fixeduserhandles';
        }
    }
});
const ConnectorFixedUserHandlesPlugin = {
    name: 'e-connector-fixeduserhandles',
    install(Vue) {
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
    }
};
/**
 * `e-connector` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-fixeduserhandles>
 * <e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandle>
 * </e-connector-fixeduserhandles>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
let ConnectorFixedUserHandleDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-connector-fixeduserhandle';
        }
    }
});
const ConnectorFixedUserHandlePlugin = {
    name: 'e-connector-fixeduserhandle',
    install(Vue) {
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
    }
};

let ConnectorAnnotationsDirective = vueDefineComponent({
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
            return 'e-connector-annotations';
        }
    }
});
const ConnectorAnnotationsPlugin = {
    name: 'e-connector-annotations',
    install(Vue) {
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
    }
};
/**
 * `e-connector-annotation` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
let ConnectorAnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-connector-annotation';
        }
    }
});
const ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install(Vue) {
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
    }
};

let ConnectorsDirective = vueDefineComponent({
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
            return 'e-connectors';
        }
    }
});
const ConnectorsPlugin = {
    name: 'e-connectors',
    install(Vue) {
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
    }
};
/**
 * `e-connectors` directive represent a connectors of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
let ConnectorDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-connector';
        }
    }
});
const ConnectorPlugin = {
    name: 'e-connector',
    install(Vue) {
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
    }
};

let NodeFixedUserHandlesDirective = vueDefineComponent({
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
            return 'e-node-fixeduserhandles';
        }
    }
});
const NodeFixedUserHandlesPlugin = {
    name: 'e-node-fixeduserhandles',
    install(Vue) {
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
    }
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-fixeduserhandles>
 * <e-node-fixeduserhandle>
 * </e-node-fixeduserhandle>
 * </e-node-fixeduserhandles>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
let NodeFixedUserHandleDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-node-fixeduserhandle';
        }
    }
});
const NodeFixedUserHandlePlugin = {
    name: 'e-node-fixeduserhandle',
    install(Vue) {
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
    }
};

let NodeAnnotationsDirective = vueDefineComponent({
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
            return 'e-node-annotations';
        }
    }
});
const NodeAnnotationsPlugin = {
    name: 'e-node-annotations',
    install(Vue) {
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
    }
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
let NodeAnnotationDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-node-annotation';
        }
    }
});
const NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install(Vue) {
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
    }
};

let PortsDirective = vueDefineComponent({
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
            return 'e-node-ports';
        }
    }
});
const PortsPlugin = {
    name: 'e-node-ports',
    install(Vue) {
        Vue.component(PortsPlugin.name, PortsDirective);
    }
};
/**
 * `e-port` directive represent a port of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
let PortDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-node-port';
        }
    }
});
const PortPlugin = {
    name: 'e-node-port',
    install(Vue) {
        Vue.component(PortPlugin.name, PortDirective);
    }
};

let NodesDirective = vueDefineComponent({
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
            return 'e-nodes';
        }
    }
});
const NodesPlugin = {
    name: 'e-nodes',
    install(Vue) {
        Vue.component(NodesPlugin.name, NodesDirective);
    }
};
/**
 * `e-node` directive represent a nodes of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
let NodeDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-node';
        }
    }
});
const NodePlugin = {
    name: 'e-node',
    install(Vue) {
        Vue.component(NodePlugin.name, NodeDirective);
    }
};

const properties = ['isLazyUpdate', 'plugins', 'addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'diagramSettings', 'drawingObject', 'enableCollaborativeEditing', 'enableConnectorSplit', 'enablePersistence', 'enableRtl', 'fixedUserHandleTemplate', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'model', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'segmentThumbShape', 'segmentThumbSize', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'userHandleTemplate', 'width', 'animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'diagramExporting', 'diagramImporting', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'elementDraw', 'expandStateChange', 'fixedUserHandleClick', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'layoutUpdated', 'load', 'loaded', 'mouseEnter', 'mouseLeave', 'mouseOver', 'mouseWheel', 'onFixedUserHandleMouseDown', 'onFixedUserHandleMouseEnter', 'onFixedUserHandleMouseLeave', 'onFixedUserHandleMouseUp', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit', 'erEntityChanged'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
let DiagramComponent = vueDefineComponent({
    name: 'DiagramComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instance: new Diagram({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-layers": "e-layer", "e-cursormaps": "e-cursormap", "e-connectors": { "e-connector": { "e-connector-fixeduserhandles": "e-connector-fixeduserhandle", "e-connector-annotations": "e-connector-annotation" } }, "e-nodes": { "e-node": { "e-node-fixeduserhandles": "e-node-fixeduserhandle", "e-node-annotations": "e-node-annotation", "e-node-ports": "e-node-port" } } },
            tagNameMapper: { "e-cursormaps": "e-customCursor", "e-connector-fixeduserhandles": "e-fixedUserHandles", "e-connector-annotations": "e-annotations", "e-node-fixeduserhandles": "e-fixedUserHandles", "e-node-annotations": "e-annotations", "e-node-ports": "e-ports" },
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
        add(obj, group) {
            return this.ej2Instances.add(obj, group);
        },
        addChildToGroup(group, child) {
            return this.ej2Instances.addChildToGroup(group, child);
        },
        addChildToUmlNode(node, child, umlChildType) {
            return this.ej2Instances.addChildToUmlNode(node, child, umlChildType);
        },
        addConnector(obj) {
            return this.ej2Instances.addConnector(obj);
        },
        addConnectorLabels(obj, labels) {
            return this.ej2Instances.addConnectorLabels(obj, labels);
        },
        addConstraints(constraintsType, constraintsValue) {
            return this.ej2Instances.addConstraints(constraintsType, constraintsValue);
        },
        addCustomHistoryEntry(entry) {
            return this.ej2Instances.addCustomHistoryEntry(entry);
        },
        addElements(obj) {
            return this.ej2Instances.addElements(obj);
        },
        addErField(node, field, index) {
            return this.ej2Instances.addErField(node, field, index);
        },
        addHistoryEntry(entry, sourceId) {
            return this.ej2Instances.addHistoryEntry(entry, sourceId);
        },
        addLabels(obj, labels) {
            return this.ej2Instances.addLabels(obj, labels);
        },
        addLanes(node, lane, index) {
            return this.ej2Instances.addLanes(node, lane, index);
        },
        addLayer(layer, layerObject) {
            return this.ej2Instances.addLayer(layer, layerObject);
        },
        addNode(obj, group) {
            return this.ej2Instances.addNode(obj, group);
        },
        addNodeLabels(obj, labels) {
            return this.ej2Instances.addNodeLabels(obj, labels);
        },
        addNodeToLane(node, swimLane, lane) {
            return this.ej2Instances.addNodeToLane(node, swimLane, lane);
        },
        addPhases(node, phases) {
            return this.ej2Instances.addPhases(node, phases);
        },
        addPorts(obj, ports) {
            return this.ej2Instances.addPorts(obj, ports);
        },
        addProcess(process, parentId) {
            return this.ej2Instances.addProcess(process, parentId);
        },
        addTextAnnotation(annotation, node) {
            return this.ej2Instances.addTextAnnotation(annotation, node);
        },
        align(option, objects, type) {
            return this.ej2Instances.align(option, objects, type);
        },
        bringIntoView(bound) {
            return this.ej2Instances.bringIntoView(bound);
        },
        bringLayerForward(layerName) {
            return this.ej2Instances.bringLayerForward(layerName);
        },
        bringToCenter(bound) {
            return this.ej2Instances.bringToCenter(bound);
        },
        bringToFront() {
            return this.ej2Instances.bringToFront();
        },
        clear() {
            return this.ej2Instances.clear();
        },
        clearHistory() {
            return this.ej2Instances.clearHistory();
        },
        clearSelection() {
            return this.ej2Instances.clearSelection();
        },
        cloneLayer(layerName) {
            return this.ej2Instances.cloneLayer(layerName);
        },
        copy() {
            return this.ej2Instances.copy();
        },
        cut() {
            return this.ej2Instances.cut();
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        distribute(option, objects) {
            return this.ej2Instances.distribute(option, objects);
        },
        distributePorts(nodeIds) {
            return this.ej2Instances.distributePorts(nodeIds);
        },
        doLayout() {
            return this.ej2Instances.doLayout();
        },
        drag(obj, tx, ty) {
            return this.ej2Instances.drag(obj, tx, ty);
        },
        dragSourceEnd(obj, tx, ty) {
            return this.ej2Instances.dragSourceEnd(obj, tx, ty);
        },
        dragTargetEnd(obj, tx, ty) {
            return this.ej2Instances.dragTargetEnd(obj, tx, ty);
        },
        editSegment(editOptions) {
            return this.ej2Instances.editSegment(editOptions);
        },
        endGroupAction() {
            return this.ej2Instances.endGroupAction();
        },
        exportDiagram(options) {
            return this.ej2Instances.exportDiagram(options);
        },
        exportImage(image, options) {
            return this.ej2Instances.exportImage(image, options);
        },
        exportToVisio(options) {
            return this.ej2Instances.exportToVisio(options);
        },
        findElementUnderMouse(obj, position, diagram, padding) {
            return this.ej2Instances.findElementUnderMouse(obj, position, diagram, padding);
        },
        findObjectsUnderMouse(position, source) {
            return this.ej2Instances.findObjectsUnderMouse(position, source);
        },
        fitToPage(options) {
            return this.ej2Instances.fitToPage(options);
        },
        getActiveLayer() {
            return this.ej2Instances.getActiveLayer();
        },
        getConnectorObject(id) {
            return this.ej2Instances.getConnectorObject(id);
        },
        getCursor(action, active) {
            return this.ej2Instances.getCursor(action, active);
        },
        getDiagramAction(diagramAction) {
            return this.ej2Instances.getDiagramAction(diagramAction);
        },
        getDiagramBounds() {
            return this.ej2Instances.getDiagramBounds();
        },
        getDiagramContent(styleSheets) {
            return this.ej2Instances.getDiagramContent(styleSheets);
        },
        getDiagramUpdates(args) {
            return this.ej2Instances.getDiagramUpdates(args);
        },
        getEdges(args) {
            return this.ej2Instances.getEdges(args);
        },
        getHistoryStack(isUndoStack) {
            return this.ej2Instances.getHistoryStack(isUndoStack);
        },
        getNodeObject(id) {
            return this.ej2Instances.getNodeObject(id);
        },
        getObject(name) {
            return this.ej2Instances.getObject(name);
        },
        getParentId(id) {
            return this.ej2Instances.getParentId(id);
        },
        getTool(action) {
            return this.ej2Instances.getTool(action);
        },
        group() {
            return this.ej2Instances.group();
        },
        hideTooltip(obj) {
            return this.ej2Instances.hideTooltip(obj);
        },
        importFromVisio(file, options) {
            return this.ej2Instances.importFromVisio(file, options);
        },
        insertData(node) {
            return this.ej2Instances.insertData(node);
        },
        loadDiagram(data, isEJ1Data) {
            return this.ej2Instances.loadDiagram(data, isEJ1Data);
        },
        loadDiagramFromMermaid(data) {
            return this.ej2Instances.loadDiagramFromMermaid(data);
        },
        moveForward() {
            return this.ej2Instances.moveForward();
        },
        moveObjects(objects, targetLayer) {
            return this.ej2Instances.moveObjects(objects, targetLayer);
        },
        moveObjectsUp(node, currentLayer) {
            return this.ej2Instances.moveObjectsUp(node, currentLayer);
        },
        nudge(direction, x, y, type) {
            return this.ej2Instances.nudge(direction, x, y, type);
        },
        pan(horizontalOffset, verticalOffset, focusedPoint, isInteractiveZoomPan) {
            return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint, isInteractiveZoomPan);
        },
        paste(obj) {
            return this.ej2Instances.paste(obj);
        },
        print(options) {
            return this.ej2Instances.print(options);
        },
        printImage(image, options) {
            return this.ej2Instances.printImage(image, options);
        },
        redo() {
            return this.ej2Instances.redo();
        },
        remove(obj) {
            return this.ej2Instances.remove(obj);
        },
        removeChildFromGroup(group, child) {
            return this.ej2Instances.removeChildFromGroup(group, child);
        },
        removeConstraints(constraintsType, constraintsValue) {
            return this.ej2Instances.removeConstraints(constraintsType, constraintsValue);
        },
        removeData(node) {
            return this.ej2Instances.removeData(node);
        },
        removeErField(node, field) {
            return this.ej2Instances.removeErField(node, field);
        },
        removeLabels(obj, labels) {
            return this.ej2Instances.removeLabels(obj, labels);
        },
        removeLane(node, lane) {
            return this.ej2Instances.removeLane(node, lane);
        },
        removeLayer(layerId) {
            return this.ej2Instances.removeLayer(layerId);
        },
        removePhase(node, phase) {
            return this.ej2Instances.removePhase(node, phase);
        },
        removePorts(obj, ports) {
            return this.ej2Instances.removePorts(obj, ports);
        },
        removeProcess(id) {
            return this.ej2Instances.removeProcess(id);
        },
        reset() {
            return this.ej2Instances.reset();
        },
        resetSegments() {
            return this.ej2Instances.resetSegments();
        },
        rotate(obj, angle, pivot, rotateUsingHandle) {
            return this.ej2Instances.rotate(obj, angle, pivot, rotateUsingHandle);
        },
        sameSize(option, objects) {
            return this.ej2Instances.sameSize(option, objects);
        },
        saveDiagram() {
            return this.ej2Instances.saveDiagram();
        },
        saveDiagramAsMermaid() {
            return this.ej2Instances.saveDiagramAsMermaid();
        },
        scale(obj, sx, sy, pivot) {
            return this.ej2Instances.scale(obj, sx, sy, pivot);
        },
        select(objects, multipleSelection, oldValue) {
            return this.ej2Instances.select(objects, multipleSelection, oldValue);
        },
        selectAll() {
            return this.ej2Instances.selectAll();
        },
        sendBackward() {
            return this.ej2Instances.sendBackward();
        },
        sendLayerBackward(layerName) {
            return this.ej2Instances.sendLayerBackward(layerName);
        },
        sendToBack() {
            return this.ej2Instances.sendToBack();
        },
        setActiveLayer(layerName) {
            return this.ej2Instances.setActiveLayer(layerName);
        },
        setDiagramUpdates(data) {
            return this.ej2Instances.setDiagramUpdates(data);
        },
        setStackLimit(stackLimit) {
            return this.ej2Instances.setStackLimit(stackLimit);
        },
        showTooltip(obj) {
            return this.ej2Instances.showTooltip(obj);
        },
        startGroupAction() {
            return this.ej2Instances.startGroupAction();
        },
        startTextEdit(node, id) {
            return this.ej2Instances.startTextEdit(node, id);
        },
        unGroup() {
            return this.ej2Instances.unGroup();
        },
        unSelect(obj) {
            return this.ej2Instances.unSelect(obj);
        },
        undo() {
            return this.ej2Instances.undo();
        },
        updateData(node) {
            return this.ej2Instances.updateData(node);
        },
        updateFromModel() {
            return this.ej2Instances.updateFromModel();
        },
        updateGradient(newProp, oldProp, nodeObj) {
            return this.ej2Instances.updateGradient(newProp, oldProp, nodeObj);
        },
        updateViewPort() {
            return this.ej2Instances.updateViewPort();
        },
        zoom(factor, focusedPoint) {
            return this.ej2Instances.zoom(factor, focusedPoint);
        },
        zoomTo(options) {
            return this.ej2Instances.zoomTo(options);
        },
    }
});
const DiagramPlugin = {
    name: 'ejs-diagram',
    install(Vue) {
        Vue.component(DiagramPlugin.name, DiagramComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue.component(NodePlugin.name, NodeDirective);
        Vue.component(NodesPlugin.name, NodesDirective);
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue.component(PortPlugin.name, PortDirective);
        Vue.component(PortsPlugin.name, PortsDirective);
    }
};

let PalettesDirective = vueDefineComponent({
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
            return 'e-palettes';
        }
    }
});
const PalettesPlugin = {
    name: 'e-palettes',
    install(Vue) {
        Vue.component(PalettesPlugin.name, PalettesDirective);
    }
};
/**
 * `Palette` directive represent a axis palette of the vue SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
let PaletteDirective = vueDefineComponent({
    render() {
        return;
    },
    methods: {
        getTag() {
            return 'e-palette';
        }
    }
});
const PalettePlugin = {
    name: 'e-palette',
    install(Vue) {
        Vue.component(PalettePlugin.name, PaletteDirective);
    }
};

const properties$1 = ['isLazyUpdate', 'plugins', 'accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'nodeTemplate', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width', 'paletteExpanding', 'paletteSelectionChange'];
const modelProps$1 = [];
const testProp$1 = getProps({ props: properties$1 });
const props$1 = testProp$1[0], watch$1 = testProp$1[1], emitProbs$1 = Object.keys(watch$1);
emitProbs$1.push('modelchanged', 'update:modelValue');
for (let props of modelProps$1) {
    emitProbs$1.push('update:' + props);
}
/**
 * Represents vue SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
let SymbolPaletteComponent = vueDefineComponent({
    name: 'SymbolPaletteComponent',
    mixins: [ComponentBase],
    props: props$1,
    watch: watch$1,
    emits: emitProbs$1,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new SymbolPalette({}),
            propKeys: properties$1,
            models: modelProps$1,
            hasChildDirective: true,
            hasInjectedModules: true,
            tagMapper: { "e-palettes": "e-palette" },
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
        addPaletteItem(paletteName, paletteSymbol, isChild) {
            return this.ej2Instances.addPaletteItem(paletteName, paletteSymbol, isChild);
        },
        addPalettes(palettes) {
            return this.ej2Instances.addPalettes(palettes);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        removePaletteItem(paletteName, symbolId) {
            return this.ej2Instances.removePaletteItem(paletteName, symbolId);
        },
        removePalettes(palettes) {
            return this.ej2Instances.removePalettes(palettes);
        },
    }
});
const SymbolPalettePlugin = {
    name: 'ejs-symbolpalette',
    install(Vue) {
        Vue.component(SymbolPalettePlugin.name, SymbolPaletteComponent);
        Vue.component(PalettePlugin.name, PaletteDirective);
        Vue.component(PalettesPlugin.name, PalettesDirective);
    }
};

const properties$2 = ['isLazyUpdate', 'plugins', 'enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width', 'created'];
const modelProps$2 = [];
const testProp$2 = getProps({ props: properties$2 });
const props$2 = testProp$2[0], watch$2 = testProp$2[1], emitProbs$2 = Object.keys(watch$2);
emitProbs$2.push('modelchanged', 'update:modelValue');
for (let props of modelProps$2) {
    emitProbs$2.push('update:' + props);
}
/**
 * Represents vue Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
let OverviewComponent = vueDefineComponent({
    name: 'OverviewComponent',
    mixins: [ComponentBase],
    props: props$2,
    watch: watch$2,
    emits: emitProbs$2,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new Overview({}),
            propKeys: properties$2,
            models: modelProps$2,
            hasChildDirective: true,
            hasInjectedModules: false,
            tagMapper: {},
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
        updateHtmlLayer(view) {
            return this.ej2Instances.updateHtmlLayer(view);
        },
    }
});
const OverviewPlugin = {
    name: 'ejs-overview',
    install(Vue) {
        Vue.component(OverviewPlugin.name, OverviewComponent);
    }
};

export { ConnectorAnnotationDirective, ConnectorAnnotationPlugin, ConnectorAnnotationsDirective, ConnectorAnnotationsPlugin, ConnectorDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlePlugin, ConnectorFixedUserHandlesDirective, ConnectorFixedUserHandlesPlugin, ConnectorPlugin, ConnectorsDirective, ConnectorsPlugin, CustomCursorDirective, CustomCursorPlugin, CustomCursorsDirective, CustomCursorsPlugin, DiagramComponent, DiagramPlugin, LayerDirective, LayerPlugin, LayersDirective, LayersPlugin, NodeAnnotationDirective, NodeAnnotationPlugin, NodeAnnotationsDirective, NodeAnnotationsPlugin, NodeDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlePlugin, NodeFixedUserHandlesDirective, NodeFixedUserHandlesPlugin, NodePlugin, NodesDirective, NodesPlugin, OverviewComponent, OverviewPlugin, PaletteDirective, PalettePlugin, PalettesDirective, PalettesPlugin, PortDirective, PortPlugin, PortsDirective, PortsPlugin, SymbolPaletteComponent, SymbolPalettePlugin };
//# sourceMappingURL=ej2-vue-diagrams.es2015.js.map
