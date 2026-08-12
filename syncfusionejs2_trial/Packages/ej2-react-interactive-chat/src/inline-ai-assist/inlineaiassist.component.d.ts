import * as React from 'react';
import { InlineAIAssist, InlineAIAssistModel } from '@syncfusion/ej2-interactive-chat';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface InlineAIAssistTypecast {
    editorTemplate?: string | Function | any;
    responseTemplate?: string | Function | any;
}
/**
 * Represents the React InlineAIAssist Component
 * ```tsx
 * <InlineAIAssistComponent></InlineAIAssistComponent>
 * ```
 */
export declare class InlineAIAssistComponent extends InlineAIAssist {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<InlineAIAssistModel | DefaultHtmlAttributes | InlineAIAssistTypecast>;
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
    }> & Readonly<InlineAIAssistModel | DefaultHtmlAttributes | InlineAIAssistTypecast>;
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
