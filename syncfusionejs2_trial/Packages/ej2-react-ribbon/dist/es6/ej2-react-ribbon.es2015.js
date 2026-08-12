import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { Ribbon } from '@syncfusion/ej2-ribbon';
export * from '@syncfusion/ej2-ribbon';

class RibbonTabDirective extends ComplexBase {
}
RibbonTabDirective.moduleName = 'ribbonTab';
class RibbonTabsDirective extends ComplexBase {
}
RibbonTabsDirective.propertyName = 'tabs';
RibbonTabsDirective.moduleName = 'ribbonTabs';

class RibbonGroupDirective extends ComplexBase {
}
RibbonGroupDirective.moduleName = 'ribbonGroup';
class RibbonGroupsDirective extends ComplexBase {
}
RibbonGroupsDirective.propertyName = 'groups';
RibbonGroupsDirective.moduleName = 'ribbonGroups';

class RibbonCollectionDirective extends ComplexBase {
}
RibbonCollectionDirective.moduleName = 'ribbonCollection';
class RibbonCollectionsDirective extends ComplexBase {
}
RibbonCollectionsDirective.propertyName = 'collections';
RibbonCollectionsDirective.moduleName = 'ribbonCollections';

class RibbonItemDirective extends ComplexBase {
}
RibbonItemDirective.moduleName = 'ribbonItem';
class RibbonItemsDirective extends ComplexBase {
}
RibbonItemsDirective.propertyName = 'items';
RibbonItemsDirective.moduleName = 'ribbonItems';

/**
 * `RibbonContextualTabDirective` represent a contextual tab of the React Ribbon.
 * It must be contained in a Ribbon component(`RibbonComponent`).
 * ```tsx
 * <RibbonComponent>
 *   <RibbonContextualTabsDirective>
 *     <RibbonContextualTabDirective></RibbonContextualTabDirective>
 *     <RibbonContextualTabDirective></RibbonContextualTabDirective>
 *   <RibbonContextualTabsDirective>
 * </RibbonComponent>
 * ```
 */
class RibbonContextualTabDirective extends ComplexBase {
}
RibbonContextualTabDirective.moduleName = 'ribbonContextualTab';
class RibbonContextualTabsDirective extends ComplexBase {
}
RibbonContextualTabsDirective.propertyName = 'contextualTabs';
RibbonContextualTabsDirective.moduleName = 'ribbonContextualTabs';

/**
 * Represents the React Ribbon Component
 * ```tsx
 * <RibbonComponent></RibbonComponent>
 * ```
 */
class RibbonComponent extends Ribbon {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'ribbonTabs': { 'ribbonTab': { 'ribbonGroups': { 'ribbonGroup': { 'ribbonCollections': { 'ribbonCollection': { 'ribbonItems': 'ribbonItem' } } } } } }, 'ribbonContextualTabs': { 'ribbonContextualTab': { 'ribbonTabs': { 'ribbonTab': { 'ribbonGroups': { 'ribbonGroup': { 'ribbonCollections': { 'ribbonCollection': { 'ribbonItems': 'ribbonItem' } } } } } } } } };
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
applyMixins(RibbonComponent, [ComponentBase, Component]);

export { RibbonCollectionDirective, RibbonCollectionsDirective, RibbonComponent, RibbonContextualTabDirective, RibbonContextualTabsDirective, RibbonGroupDirective, RibbonGroupsDirective, RibbonItemDirective, RibbonItemsDirective, RibbonTabDirective, RibbonTabsDirective };
//# sourceMappingURL=ej2-react-ribbon.es2015.js.map
