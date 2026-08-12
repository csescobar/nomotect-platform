import { SimpleDiffResult } from '../base/interface';
/**
 * Computes a single contiguous edit by finding the longest common prefix and suffix between two strings.
 * Returns the minimal delete/insert operation needed to transform the old string into the new string.
 * Suitable for typical editor typing, deletion, paste, and selection replacement operations.
 * Not intended for multiple disjoint edits.
 *
 * @param {string} oldStr - The old string
 * @param {string} newStr - The new string
 * @returns {SimpleDiffResult} Diff with index, remove, and insert properties
 * @hidden
 */
export declare function simpleDiff(oldStr: string, newStr: string): SimpleDiffResult;
