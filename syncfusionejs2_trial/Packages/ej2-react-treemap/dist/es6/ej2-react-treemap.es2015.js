import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { TreeMap } from '@syncfusion/ej2-treemap';
export * from '@syncfusion/ej2-treemap';

/**
 * Represents the directive to configure and render level leaf items in the treemap.
 * ```tsx
 * <TreeMapComponent>
 * <LevelsDirective>
 * <LevelDirective></LevelDirective>
 * </LevelsDirective>
 * </TreeMapComponent>
 * ```
 */
class LevelDirective extends ComplexBase {
}
LevelDirective.moduleName = 'level';
class LevelsDirective extends ComplexBase {
}
LevelsDirective.propertyName = 'levels';
LevelsDirective.moduleName = 'levels';

class ColorMappingDirective extends ComplexBase {
}
ColorMappingDirective.moduleName = 'colorMapping';
class ColorMappingsDirective extends ComplexBase {
}
ColorMappingsDirective.propertyName = 'colorMapping';
ColorMappingsDirective.moduleName = 'colorMappings';

/**
 * Represents the React TreeMap component. It is used to visualize both hierarchical and flat data.
 * ```tsx
 * <TreeMapComponent></TreeMapComponent>
 * ```
 */
class TreeMapComponent extends TreeMap {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'levels': { 'level': { 'colorMappings': 'colorMapping' } } };
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
applyMixins(TreeMapComponent, [ComponentBase, Component]);

export { ColorMappingDirective, ColorMappingsDirective, LevelDirective, LevelsDirective, TreeMapComponent };
//# sourceMappingURL=ej2-react-treemap.es2015.js.map
