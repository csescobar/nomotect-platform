import * as React from 'react';
import { TextArea, TextAreaModel } from '@syncfusion/ej2-inputs';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface TextAreaTypecast {
    prependTemplate?: string | Function | any;
    appendTemplate?: string | Function | any;
}
/**
 * Represents the React TextArea Component
 * ```html
 * <TextArea value={value}></TextArea>
 * ```
 */
export declare class TextAreaComponent extends TextArea {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<TextAreaModel | DefaultHtmlAttributes | TextAreaTypecast>;
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
    }> & Readonly<TextAreaModel | DefaultHtmlAttributes | TextAreaTypecast>;
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
