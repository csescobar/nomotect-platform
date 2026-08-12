import { Gantt } from '../base/gantt';
/**
 * To handle scroll event on chart and from TreeGrid
 *
 * @hidden
 */
export declare class ChartScroll {
    private parent;
    element: HTMLElement;
    private isScrolling;
    private isFromTreeGrid;
    previousCount: number;
    isBackwardScrolled: boolean;
    private nonworkingDayRender;
    private isSetScrollLeft;
    previousScroll: {
        top: number;
        left: number;
    };
    private isScrollArrowPressed;
    private scrollArrowDirection;
    private scrollArrowInterval;
    private lastScrollLeft;
    /**
     * Constructor for the scrolling.
     *
     * @param {Gantt} parent .
     * @hidden
     */
    constructor(parent: Gantt);
    /**
     * Bind event
     *
     * @returns {void} .
     */
    private addEventListeners;
    /**
     * Unbind events
     *
     * @returns {void} .
     */
    private removeEventListeners;
    /**
     *
     * @param {object} args .
     * @returns {void} .
     */
    private gridScrollHandler;
    /**
     * Method to update vertical grid line, holiday, event markers and weekend container's top position on scroll action
     *
     * @returns {void} .
     * @private
     */
    updateContent(): void;
    getTimelineLeft(): number;
    deleteTableElements(): void;
    updateChartElementStyles(): void;
    updateTopPosition(): void;
    private removeShimmer;
    private transformChange;
    private updateShimmer;
    private updateSpinner;
    /**
     * Scroll event handler
     *
     * @returns {void}
     */
    private onScroll;
    /**
     * Handle mouse down on scroll element to detect scroll arrow clicks
     * This method detects when user clicks and holds scroll arrows (left or right)
     * and triggers continuous infinite timeline scrolling
     *
     * @param {MouseEvent} e - Mouse event
     * @returns {void}
     */
    private startHold;
    private extendStartHold;
    /**
     * Start continuous scrolling when scroll arrow is held
     * Triggers infinite timeline scroll methods at intervals
     *
     * @param {string} direction - Direction to scroll ('left' or 'right')
     * @returns {void}
     */
    private startContinuousScroll;
    private extendContinuousScrolling;
    /**
     * Handle mouse up to stop scroll arrow continuous scrolling
     * This method is called when user releases the mouse button
     *
     * @param {MouseEvent} e - Mouse event
     * @returns {void}
     */
    private stopHold;
    private trimTimelines;
    /**
     * To set height for chart scroll container
     *
     * @param {string | number} height - To set height for scroll container in chart side
     * @returns {void} .
     * @private
     */
    setHeight(height: string | number): void;
    /**
     * To set width for chart scroll container
     *
     * @param {string | number} width - To set width to scroll container
     * @returns {void} .
     * @private
     */
    setWidth(width: string | number): void;
    /**
     * To set scroll top for chart scroll container
     *
     * @param {number} scrollTop - To set scroll top for scroll container
     * @returns {void} .
     * @private
     */
    setScrollTop(scrollTop: number): void;
    /**
     * To set scroll left for chart scroll container
     *
     * @param {number} scrollLeft  - To set scroll left for scroll container
     * @param {number} leftSign - specifies left sign
     * @returns {void} .
     */
    setScrollLeft(scrollLeft: number, leftSign?: number): void;
    /**
     * Destroy scroll related elements and unbind the events
     *
     * @returns {void} .
     * @private
     */
    destroy(): void;
}
