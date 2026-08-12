import * as React from 'react';
import { BlockEditor, BlockEditorModel } from '@syncfusion/ej2-blockeditor';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
/**
 * Represents the React BlockEditor Component
 * ```tsx
 * <BlockEditorComponent></BlockEditorComponent>
 * ```
 */
export declare class BlockEditorComponent extends BlockEditor {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<BlockEditorModel | DefaultHtmlAttributes>;
    setState: any;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private statelessTemplateProps;
    private templateProps;
    private immediateRender;
    private isReactMock;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<BlockEditorModel | DefaultHtmlAttributes>;
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
