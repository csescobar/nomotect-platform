import { createElement, Component } from 'react';
import { BarcodeGenerator, QRCodeGenerator, DataMatrixGenerator } from '@syncfusion/ej2-barcode-generator';
export * from '@syncfusion/ej2-barcode-generator';
import { applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';

/**
 * Represents react Barcode Component
 * ```tsx
 * <BarcodeGeneratorComponent></BarcodeGeneratorComponent>
 * ```
 */
class BarcodeGeneratorComponent extends BarcodeGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = true;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(BarcodeGeneratorComponent, [ComponentBase, Component]);

/**
 * Represents react QRCode Component
 * ```tsx
 * <QRCodeGeneratorComponent></QRCodeGeneratorComponent>
 * ```
 */
class QRCodeGeneratorComponent extends QRCodeGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = true;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(QRCodeGeneratorComponent, [ComponentBase, Component]);

/**
 * Represents react DataMatrix Component
 * ```tsx
 * <DataMatrixGeneratorComponent></DataMatrixGeneratorComponent>
 * ```
 */
class DataMatrixGeneratorComponent extends DataMatrixGenerator {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = true;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(DataMatrixGeneratorComponent, [ComponentBase, Component]);

export { BarcodeGeneratorComponent, DataMatrixGeneratorComponent, QRCodeGeneratorComponent };
//# sourceMappingURL=ej2-react-barcode-generator.es2015.js.map
