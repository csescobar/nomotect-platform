import * as React from 'react';
import { TextBox, TextBoxModel } from '@syncfusion/ej2-inputs';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface TextBoxTypecast {
    prependTemplate?: string | Function | any;
    appendTemplate?: string | Function | any;
}
/**
 * Represents the React TextBox Component
 * ```html
 * <TextBox value={value}></TextBox>
 * ```
 */
export declare class TextBoxComponent extends TextBox {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<TextBoxModel | DefaultHtmlAttributes | TextBoxTypecast>;
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
    }> & Readonly<TextBoxModel | DefaultHtmlAttributes | TextBoxTypecast>;
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
