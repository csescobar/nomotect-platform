import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { QueryBuilder } from '@syncfusion/ej2-querybuilder';
export * from '@syncfusion/ej2-querybuilder';

/**
 * `ColumnDirective` represent a column of the react QueryBuilder.
 * It must be contained in a QueryBuilder component(`GridComponent`).
 * ```tsx
 * <QueryBuilderComponent dataSource={data}>
 *   <ColumnsDirective>
 *     <ColumnDirective field='ID' label='ID' type='number'></ColumnDirective>
 *     <ColumnDirective field='Date' label='Date' type='date' format='dd/MM/yyyy'></ColumnDirective>
 *   <ColumnsDirective>
 * </QueryBuilderComponent>
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
 * Represents the React QueryBuilder Component
 * ```html
 * <QueryBuilderComponent></QueryBuilderComponent>
 * ```
 */
class QueryBuilderComponent extends QueryBuilder {
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
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(QueryBuilderComponent, [ComponentBase, Component]);

export { ColumnDirective, ColumnsDirective, QueryBuilderComponent };
//# sourceMappingURL=ej2-react-querybuilder.es2015.js.map
