import * as React from 'react';
import { Sankey, SankeyModel } from '@syncfusion/ej2-charts';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface SankeyTypecast {
    tooltip?: any;
}
/**
 * Represents react Sankey Component
 * ```tsx
 * <SankeyComponent></SankeyComponent>
 * ```
 */
export declare class SankeyComponent extends Sankey {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SankeyModel | DefaultHtmlAttributes | SankeyTypecast>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    directivekeys: {
        [key: string]: Object;
    };
    private statelessTemplateProps;
    private templateProps;
    private immediateRender;
    private isReactMock;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<SankeyModel | DefaultHtmlAttributes | SankeyTypecast>;
    forceUpdate: (callBack?: () => any) => void;
    context: Object;
    portals: any;
    isReactComponent: Object;
    refs: {
        [key: string]: React.ReactInstance;
    };
    constructor(props: any);
    render(): any;
}
