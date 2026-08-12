/**
 * Unique key for the sync plugin.
 * Used to:
 * - Identify transactions originated from the sync plugin
 * - Access sync plugin state
 * - Coordinate between plugins
 */
export declare const ySyncPluginKey: string;
/**
 * Unique key for the undo plugin.
 * Used to:
 * - Identify undo/redo transactions
 * - Access undo manager state
 */
export declare const yUndoPluginKey: string;
/**
 * Unique key for the cursor plugin.
 * Used to:
 * - Identify cursor-related updates
 * - Access awareness state
 */
export declare const yCursorPluginKey: string;
/**
 * Unique key for the version plugin.
 * Used to:
 * - Identify version history operations
 */
export declare const yVersionHistoryKey: string;
/**
 * Unique key to mark transactions or operations that should be excluded from Yjs synchronization.
 * Used to:
 * - Prevent certain local-only changes from being synced to other clients
 * - Avoid feedback loops when applying remote updates
 */
export declare const yExcludedOrigin: string[];
