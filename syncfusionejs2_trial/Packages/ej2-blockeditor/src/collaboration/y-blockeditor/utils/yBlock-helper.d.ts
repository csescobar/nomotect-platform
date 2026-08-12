import * as Y from '../yjs-types';
import { YBlockLocation } from '../base/interface';
import { Collaboration } from '../base/collaboration';
import { BlockEditorBinding } from '../plugins/sync-plugin';
/**
 * Helper utilities for locating and manipulating Yjs block elements.
 *
 * @hidden
 */
export declare class YBlockHelper {
    private parent;
    private collabManager;
    private YRuntime;
    constructor(parent: BlockEditorBinding, manager: Collaboration);
    /**
     * Finds the block id that contains a given Y.XmlText node.
     *
     * @param {Y.XmlText} yText - The Y text node to locate
     * @param {Y.XmlFragment} yBlocks - The root fragment of Y blocks
     * @returns {string | null} - The containing block id or null
     * @hidden
     */
    findBlockIdForYText(yText: Y.XmlText, yBlocks: Y.XmlFragment): string | null;
    private findBlockContainingText;
    /**
     * Finds the index of a block within a Y container by id.
     *
     * @param {string | undefined} targetBlockId - The block id to find
     * @param {Y.XmlFragment | Y.XmlElement} container - The Y container to search
     * @returns {number} - The index of the block or -1 if not found
     * @hidden
     */
    findBlockIndex(targetBlockId: string | undefined, container: Y.XmlFragment | Y.XmlElement): number;
    /**
     * Locates a Y block node and its parent by block id.
     *
     * @param {string} blockId - The block id to locate
     * @param {Y.XmlFragment} yBlocks - The root fragment to search
     * @returns {object} - Found node and parent or null
     * @hidden
     */
    findYBlockById(blockId: string, yBlocks: Y.XmlFragment): YBlockLocation;
    /**
     * Recursively searches for a Y block by id and returns node with parent.
     *
     * @param {Y.XmlElement} element - Element to search within
     * @param {string} blockId - Block id to match
     * @param {Y.XmlFragment | Y.XmlElement | null} parent - Optional parent reference
     * @returns {object} - Found node and parent or null
     * @hidden
     */
    searchYBlockById(element: Y.XmlElement, blockId: string, parent?: Y.XmlFragment | Y.XmlElement | null): YBlockLocation;
    /**
     * Retrieves the first Y.XmlText child for a given block id.
     *
     * @param {string} blockId - The id of the block to inspect
     * @param {Y.XmlFragment} yFragment - Root fragment containing blocks
     * @returns {Y.XmlText | null} - The found Y.XmlText or null
     * @hidden
     */
    getYTextByBlockId(blockId: string, yFragment: Y.XmlFragment): Y.XmlText | null;
    /**
     * Returns the first Y.XmlText child of a Y block element.
     *
     * @param {Y.XmlElement} yBlock - The Y block element to inspect
     * @returns {Y.XmlText | null} - The found text node or null
     * @hidden
     */
    getYTextByBlock(yBlock: Y.XmlElement): Y.XmlText | null;
    /**
     * Determines whether a selection rectangle targets a block-level element.
     *
     * @param {DOMRect} rect - The rectangle of the selection
     * @param {Range} range - The DOM Range of the selection
     * @returns {boolean} - True if selection is block-level, otherwise false
     * @hidden
     */
    isBlockLevelRect(rect: DOMRect, range: Range): boolean;
    /**
     * Returns the Y element that corresponds to a parent block id.
     *
     * @param {string} parentId - The parent block id to locate
     * @returns {Y.XmlElement | null} - The parent Y element or null
     * @hidden
     */
    getParentContainer(parentId: string): Y.XmlElement | null;
    /**
     * Finds the index of a given child id inside a Y element.
     *
     * @param {Y.XmlElement} parent - The parent Y element to search
     * @param {string | undefined} targetId - The child id to find
     * @returns {number} - The child index or parent.length if not found
     * @hidden
     */
    findChildIndex(parent: Y.XmlElement, targetId: string | undefined): number;
}
