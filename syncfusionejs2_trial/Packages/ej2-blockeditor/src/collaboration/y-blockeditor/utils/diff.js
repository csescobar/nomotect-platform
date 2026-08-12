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
export function simpleDiff(oldStr, newStr) {
    var prefixLen = 0;
    var minLen = Math.min(oldStr.length, newStr.length);
    while (prefixLen < minLen && oldStr[prefixLen] === newStr[prefixLen]) {
        prefixLen++;
    }
    var suffixLen = 0;
    var maxSuffixLen = minLen - prefixLen;
    while (suffixLen < maxSuffixLen &&
        oldStr[(oldStr.length - 1 - suffixLen)] === newStr[(newStr.length - 1 - suffixLen)]) {
        suffixLen++;
    }
    return {
        index: prefixLen,
        remove: oldStr.length - prefixLen - suffixLen,
        insert: newStr.slice(prefixLen, newStr.length - suffixLen)
    };
}
