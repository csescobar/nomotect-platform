import * as React from 'react';
import { MaskedTextBox, MaskedTextBoxModel } from '@syncfusion/ej2-inputs';
import { DefaultHtmlAttributes } from '@syncfusion/ej2-react-base';
export interface MaskedTextBoxHtmlAttributes {
    name?: string;
}
export interface MaskedTextBoxTypecast {
    prependTemplate?: string | Function | any;
    appendTemplate?: string | Function | any;
}
/**
 * Represents the React MaskedTextBox Component
 * ```html
 * <MaskedTextBox value={value}></MaskedTextBox>
 * ```
 */
export declare class MaskedTextBoxComponent extends MaskedTextBox {
    state: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<MaskedTextBoxModel | DefaultHtmlAttributes & MaskedTextBoxHtmlAttributes | MaskedTextBoxTypecast>;
    setState: any;
    private controlAttributes;
    private getDefaultAttributes;
    initRenderCalled: boolean;
    private checkInjectedModules;
    private statelessTemplateProps;
    private templateProps;
    private immediateRender;
    private isReactMock;
    props: Readonly<{
        children?: React.ReactNode | React.ReactNode[];
    }> & Readonly<MaskedTextBoxModel | DefaultHtmlAttributes & MaskedTextBoxHtmlAttributes | MaskedTextBoxTypecast>;
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
