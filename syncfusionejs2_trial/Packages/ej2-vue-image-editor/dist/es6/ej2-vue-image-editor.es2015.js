import { ImageEditor } from '@syncfusion/ej2-image-editor';
export * from '@syncfusion/ej2-image-editor';
import { getProps, vueDefineComponent, ComponentBase, isExecute, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

const properties = ['isLazyUpdate', 'plugins', 'allowUndoRedo', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'finetuneSettings', 'fontFamily', 'height', 'imageSmoothingEnabled', 'isReadOnly', 'locale', 'quickAccessToolbarTemplate', 'selectionSettings', 'showQuickAccessToolbar', 'theme', 'toolbar', 'toolbarTemplate', 'uploadSettings', 'width', 'zoomSettings', 'beforeSave', 'click', 'created', 'cropping', 'destroyed', 'editComplete', 'fileOpened', 'finetuneValueChanging', 'flipping', 'frameChange', 'imageFiltering', 'panning', 'quickAccessToolbarItemClick', 'quickAccessToolbarOpen', 'resizing', 'rotating', 'saved', 'selectionChanging', 'shapeChange', 'shapeChanging', 'toolbarCreated', 'toolbarItemClicked', 'toolbarUpdating', 'zooming'];
const modelProps = [];
const testProp = getProps({ props: properties });
const props = testProp[0], watch = testProp[1], emitProbs = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) {
    emitProbs.push('update:' + props);
}
/**
 * Represents the VueJS ImageEditor Component.
 * ```html
 * <ejs-imageeditor></ejs-imageeditor>
 * ```
 */
let ImageEditorComponent = vueDefineComponent({
    name: 'ImageEditorComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom }; },
    data() {
        return {
            ej2Instances: new ImageEditor({}),
            propKeys: properties,
            models: modelProps,
            hasChildDirective: false,
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
        apply() {
            return this.ej2Instances.apply();
        },
        applyImageFilter(filterOption) {
            return this.ej2Instances.applyImageFilter(filterOption);
        },
        bringForward(shapeId) {
            return this.ej2Instances.bringForward(shapeId);
        },
        bringToFront(shapeId) {
            return this.ej2Instances.bringToFront(shapeId);
        },
        canRedo() {
            return this.ej2Instances.canRedo();
        },
        canUndo() {
            return this.ej2Instances.canUndo();
        },
        clearImage() {
            return this.ej2Instances.clearImage();
        },
        clearSelection(resetCrop) {
            return this.ej2Instances.clearSelection(resetCrop);
        },
        cloneShape(shapeId) {
            return this.ej2Instances.cloneShape(shapeId);
        },
        crop() {
            return this.ej2Instances.crop();
        },
        deleteRedact(id) {
            return this.ej2Instances.deleteRedact(id);
        },
        deleteShape(id) {
            return this.ej2Instances.deleteShape(id);
        },
        destroy() {
            return this.ej2Instances.destroy();
        },
        discard() {
            return this.ej2Instances.discard();
        },
        drawArrow(startX, startY, endX, endY, strokeWidth, strokeColor, arrowStart, arrowEnd, isSelected) {
            return this.ej2Instances.drawArrow(startX, startY, endX, endY, strokeWidth, strokeColor, arrowStart, arrowEnd, isSelected);
        },
        drawEllipse(x, y, radiusX, radiusY, strokeWidth, strokeColor, fillColor, degree, isSelected) {
            return this.ej2Instances.drawEllipse(x, y, radiusX, radiusY, strokeWidth, strokeColor, fillColor, degree, isSelected);
        },
        drawFrame(frameType, color, gradientColor, size, inset, offset, borderRadius, frameLineStyle, lineCount) {
            return this.ej2Instances.drawFrame(frameType, color, gradientColor, size, inset, offset, borderRadius, frameLineStyle, lineCount);
        },
        drawImage(data, x, y, width, height, isAspectRatio, degree, opacity, isSelected) {
            return this.ej2Instances.drawImage(data, x, y, width, height, isAspectRatio, degree, opacity, isSelected);
        },
        drawLine(startX, startY, endX, endY, strokeWidth, strokeColor, isSelected) {
            return this.ej2Instances.drawLine(startX, startY, endX, endY, strokeWidth, strokeColor, isSelected);
        },
        drawPath(pointColl, strokeWidth, strokeColor, isSelected) {
            return this.ej2Instances.drawPath(pointColl, strokeWidth, strokeColor, isSelected);
        },
        drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor, degree, isSelected, borderRadius) {
            return this.ej2Instances.drawRectangle(x, y, width, height, strokeWidth, strokeColor, fillColor, degree, isSelected, borderRadius);
        },
        drawRedact(type, x, y, width, height, value) {
            return this.ej2Instances.drawRedact(type, x, y, width, height, value);
        },
        drawText(x, y, text, fontFamily, fontSize, bold, italic, color, isSelected, degree, fillColor, strokeColor, strokeWidth, transformCollection, underline, strikethrough) {
            return this.ej2Instances.drawText(x, y, text, fontFamily, fontSize, bold, italic, color, isSelected, degree, fillColor, strokeColor, strokeWidth, transformCollection, underline, strikethrough);
        },
        enableShapeDrawing(shapeType, isEnabled) {
            return this.ej2Instances.enableShapeDrawing(shapeType, isEnabled);
        },
        enableTextEditing() {
            return this.ej2Instances.enableTextEditing();
        },
        export(type, fileName, imageQuality) {
            return this.ej2Instances.export(type, fileName, imageQuality);
        },
        finetuneImage(finetuneOption, value) {
            return this.ej2Instances.finetuneImage(finetuneOption, value);
        },
        flip(direction) {
            return this.ej2Instances.flip(direction);
        },
        freehandDraw(value) {
            return this.ej2Instances.freehandDraw(value);
        },
        getImageData(includeAnnotations) {
            return this.ej2Instances.getImageData(includeAnnotations);
        },
        getImageDimension() {
            return this.ej2Instances.getImageDimension();
        },
        getImageFilter(filterOption) {
            return this.ej2Instances.getImageFilter(filterOption);
        },
        getRedacts() {
            return this.ej2Instances.getRedacts();
        },
        getShapeSetting(id) {
            return this.ej2Instances.getShapeSetting(id);
        },
        getShapeSettings() {
            return this.ej2Instances.getShapeSettings();
        },
        initialize() {
            return this.ej2Instances.initialize();
        },
        open(data, resetChanges, imageSettings) {
            return this.ej2Instances.open(data, resetChanges, imageSettings);
        },
        pan(value, x, y) {
            return this.ej2Instances.pan(value, x, y);
        },
        redo() {
            return this.ej2Instances.redo();
        },
        reset() {
            return this.ej2Instances.reset();
        },
        resize(width, height, isAspectRatio) {
            return this.ej2Instances.resize(width, height, isAspectRatio);
        },
        rotate(degree) {
            return this.ej2Instances.rotate(degree);
        },
        select(type, startX, startY, width, height) {
            return this.ej2Instances.select(type, startX, startY, width, height);
        },
        selectRedact(id) {
            return this.ej2Instances.selectRedact(id);
        },
        selectShape(id) {
            return this.ej2Instances.selectShape(id);
        },
        sendBackward(shapeId) {
            return this.ej2Instances.sendBackward(shapeId);
        },
        sendToBack(shapeId) {
            return this.ej2Instances.sendToBack(shapeId);
        },
        straightenImage(degree) {
            return this.ej2Instances.straightenImage(degree);
        },
        triggerEditCompleteEvent(args) {
            return this.ej2Instances.triggerEditCompleteEvent(args);
        },
        undo() {
            return this.ej2Instances.undo();
        },
        update() {
            return this.ej2Instances.update();
        },
        updateRedact(setting, isSelected) {
            return this.ej2Instances.updateRedact(setting, isSelected);
        },
        updateShape(setting, isSelected) {
            return this.ej2Instances.updateShape(setting, isSelected);
        },
        zoom(zoomFactor, zoomPoint) {
            return this.ej2Instances.zoom(zoomFactor, zoomPoint);
        },
    }
});
const ImageEditorPlugin = {
    name: 'ejs-imageeditor',
    install(Vue) {
        Vue.component(ImageEditorPlugin.name, ImageEditorComponent);
    }
};

export { ImageEditorComponent, ImageEditorPlugin };
//# sourceMappingURL=ej2-vue-image-editor.es2015.js.map
