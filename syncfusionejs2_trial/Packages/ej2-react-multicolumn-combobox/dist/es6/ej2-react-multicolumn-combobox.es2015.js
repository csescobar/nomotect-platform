import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Fragment, Component } from 'react';
import { MultiColumnComboBox } from '@syncfusion/ej2-multicolumn-combobox';
export * from '@syncfusion/ej2-multicolumn-combobox';

/**
 * `ColumnDirective` represent a column of the React MultiColumnComboBox.
 * It must be contained in a MultiColumnComboBox component(`MultiColumnComboBoxComponent`).
 * ```tsx
 * <MultiColumnComboBoxComponent dataSource={data}>
 *   <ColumnsDirective>
 *     <ColumnDirective field='ID' width='100'></ColumnDirective>
 *     <ColumnDirective field='name' header='Name' width='100'></ColumnDirective>
 *   <ColumnsDirective>
 * </MultiColumnComboBoxComponent>
 * ```
 */
class ColumnDirective extends ComplexBase {
}
ColumnDirective.moduleName = 'column';
class ColumnsDirective extends ComplexBase {
}
ColumnsDirective.propertyName = 'columns';
ColumnsDirective.moduleName = 'columns';

/**
 * Represents the React MultiColumnComboBox Component
 * ```tsx
 * <MultiColumnComboBoxComponent dataSource={data}></MultiColumnComboBoxComponent>
 * ```
 */
class MultiColumnComboBoxComponent extends MultiColumnComboBox {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'columns': 'column' };
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = false;
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
            return createElement(Fragment, null, [].concat(createElement("input", this.getDefaultAttributes()), this.portals));
        }
    }
}
applyMixins(MultiColumnComboBoxComponent, [ComponentBase, Component]);

export { ColumnDirective, ColumnsDirective, MultiColumnComboBoxComponent };
//# sourceMappingURL=ej2-react-multicolumn-combobox.es2015.js.map
