import * as React from 'react';
import { TreeGrid, TreeGridModel } from '@syncfusion/ej2-treegrid';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface TreeGridTypecast {
    toolbarTemplate?: string | Function | any;
    pagerTemplate?: string | Function | any;
    rowTemplate?: string | Function | any;
    detailTemplate?: string | Function | any;
    editSettings?: any;
    emptyRecordTemplate?: string | Function | any;
    columnChooserSettings?: any;
}
/**
 * `TreeGridComponent` represents the react TreeGrid.
 * ```tsx
 * <TreeGridComponent dataSource={data} allowPaging={true} allowSorting={true}/>
 * ```
 */
export declare class TreeGridComponent extends TreeGrid {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<TreeGridModel | DefaultHtmlAttributes | TreeGridTypecast>;
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
    }> & Readonly<TreeGridModel | DefaultHtmlAttributes | TreeGridTypecast>;
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
