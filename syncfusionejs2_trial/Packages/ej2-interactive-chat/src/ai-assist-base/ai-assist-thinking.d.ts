import { AIAssistBase } from './ai-assist-base';
import { ThinkingBlock } from '../ai-assistview/interface';
export declare const CONTEXT_TYPE_META: Record<string, {
    iconCss: string;
    cssClass: string;
}>;
/**
 * Defines the Thinking of AIAssist.
 * @hidden
 */
export declare class AssistThinking {
    private parent;
    private collapsedStates;
    private timelineInstances;
    private spinnerInstances;
    constructor(parent: AIAssistBase);
    protected getModuleName(): string;
    destroy(): void;
    /**
     * Creates thinking wrapper for all thinking items.
     *
     * @param {ThinkingBlock} item - Gets the thinking item model.
     * @param {HTMLElement} responseWrapper - The response wrapper element.
     * @param {number} blockIndex - Index of thinking block in blocks array.
     * @returns {void} Nothing returned.
     * @hidden
     */
    createThinkingWrapper(item: ThinkingBlock, responseWrapper: HTMLElement, blockIndex?: number): void;
    private renderThinkingItemEle;
    private renderThinkingHeader;
    private renderThinkingWithTemplate;
    private getMarkdownContent;
    private renderThinkingBody;
    private renderThinkingDescription;
    private renderContentWithContextPlaceholders;
    private renderInlineContextItem;
    private attachContextItemClickHandlers;
    private renderBadgeElement;
    private renderSingleStageContainerElement;
    private renderTimelineComponent;
    private renderTimelineTemplate;
    private toggleCollapse;
    private isCollapsed;
    private getStatusIcon;
    private initializeStageSpinners;
}
