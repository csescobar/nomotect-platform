import { TextNodePosition } from '../base/interface';
/**
 * Walks through all text nodes in a container with cumulative offsets
 *
 * @param {HTMLElement} container - Container element to walk
 * @returns {Array} Array of tuples with text nodes and their cumulative offsets
 * @hidden
 */
export declare function walkTextNodes(container: HTMLElement): Array<[Text, number]>;
/**
 * Calculates total text length in a container element
 *
 * @param {HTMLElement} container - Container element
 * @returns {number} Total text character count
 * @hidden
 */
export declare function getTotalTextLength(container: HTMLElement): number;
/**
 * Finds text node at specified absolute offset in container
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute character offset
 * @returns {TextNodePosition|null} Text node position or null
 * @hidden
 */
export declare function findTextNodeAtOffset(container: HTMLElement, absoluteOffset: number): TextNodePosition | null;
/**
 * Inserts text at specified absolute offset in container
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute offset to insert at
 * @param {string} textToInsert - Text to insert
 * @returns {Text|null} Text node containing insertion or null
 * @hidden
 */
export declare function insertTextAtOffset(container: HTMLElement, absoluteOffset: number, textToInsert: string): Text | null;
/**
 * Deletes text at specified absolute offset and length
 *
 * @param {HTMLElement} container - Container element
 * @param {number} absoluteOffset - Absolute offset to start deletion
 * @param {number} length - Number of characters to delete
 * @returns {number} Number of characters deleted
 * @hidden
 */
export declare function deleteTextAtOffset(container: HTMLElement, absoluteOffset: number, length: number): number;
/**
 * Flattens nested object into flat key-value pairs
 *
 * @param {Object} obj - Object to flatten
 * @returns {Object} Flattened object
 * @hidden
 */
export declare function flattenObj(obj: any): any;
/**
 * Unflattens object separating style properties into nested structure
 *
 * @param {Record<string, any>} flat - Flattened object
 * @returns {Record<string, any>} Unflattened object with styles nested
 * @hidden
 */
export declare function unflatten(flat: Record<string, any>): Record<string, any>;
