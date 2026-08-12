import { ComponentBase, DefineVueComponent } from '@syncfusion/ej2-vue-base';
import { BlockEditor, BlockEditorModel } from '@syncfusion/ej2-blockeditor';
export declare const properties: string[];
export declare const modelProps: string[];
export declare const testProp: any;
export declare const props: any, watch: any, emitProbs: any;
/**
 * Represents the Essential JS 2 VueJS BlockEditor Component
 * ```vue
 * <ejs-blockeditor></ejs-blockeditor>
 * ```
 */
export declare let BlockEditorComponent: DefineVueComponent<BlockEditorModel>;
export declare type BlockEditorComponent = typeof ComponentBase & {
    ej2Instances: BlockEditor;
    isVue3: boolean;
    isLazyUpdate: Boolean;
    plugins: any[];
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    addBlock(block: Object, targetId?: string, isAfter?: boolean): void;
    destroy(): void;
    disableToolbarItems(itemId: string | string[]): void;
    enableToolbarItems(itemId: string | string[]): void;
    executeToolbarAction(action: Object, value?: string): void;
    focusIn(): void;
    focusOut(): void;
    getBlock(blockId: string): Object | null;
    getBlockCount(): number;
    getDataAsHtml(blockId?: string): string;
    getDataAsJson(blockId?: string): Object | Object[];
    getRange(): Object | null;
    getSelectedBlocks(): Object[] | null;
    getVersionHistory(): Object;
    moveBlock(fromBlockId: string, toBlockId: string): void;
    parseHtmlToBlocks(html: string): Object[];
    print(): void;
    removeBlock(blockId: string): void;
    renderBlocksFromJson(json: object | string, replace: boolean, targetBlockId?: string): boolean;
    selectAllBlocks(): void;
    selectBlock(blockId: string): void;
    selectRange(range: Object): void;
    setCursorPosition(blockId: string, position: number): void;
    setSelection(node: Object, startIndex: number, endIndex: number): void;
    updateBlock(blockId: string, properties: Object): boolean;
};
export declare const BlockEditorPlugin: {
    name: string;
    install(Vue: any): void;
};
