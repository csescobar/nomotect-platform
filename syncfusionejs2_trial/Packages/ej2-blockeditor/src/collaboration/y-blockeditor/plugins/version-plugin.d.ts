import { VersionSnapshot, ExportedVersion, VersionDiff, SnapshotOptions, IVersionHistory } from '../../../models/interface';
import { BlockManager } from '../../../block-manager/base/block-manager';
import { CollaborationSettingsModel } from '../../../models/collaboration/collaboration-settings-model';
export declare class VersionHistory implements IVersionHistory {
    private blockManager;
    settings: CollaborationSettingsModel;
    private yDoc;
    private yFragment;
    private collabManager;
    private vhSettings;
    private YRuntime;
    private snapshots;
    private changesSinceSnapshot;
    private isDestroyed;
    private debounceTimer;
    private safetyNetTimer;
    private observeDeepFn;
    private initPromise;
    /**
     * Initializes the version history module
     *
     * @param {BlockManager} blockManager - The manager instance
     * @param {CollaborationSettingsModel} settings - The Collaboration settings
     * @returns {void}
     * @hidden
     */
    initialize(blockManager: BlockManager, settings: CollaborationSettingsModel): void;
    /**
     * To get component name.
     *
     * @returns {string} - It returns the module name.
     * @private
     */
    getModuleName(): string;
    /**
     * Resolves when version history initialization completes.
     *
     * @returns {Promise<void>} - The promise
     */
    whenReady: () => Promise<void>;
    /**
     * Captures the current document state as a named snapshot.
     *
     * @param {SnapshotOptions} options - Options for creating snapshots
     * @returns {Promise<VersionSnapshot>} - The created snapshot.
     */
    createSnapshot: (options?: SnapshotOptions) => Promise<VersionSnapshot>;
    /**
     * Renames an existing snapshot.
     *
     * @param {string} snapshotId - Snapshot ID.
     * @param {string} newLabel - Updated snapshot label.
     * @returns {Promise<VersionSnapshot>} - Updated snapshot.
     */
    renameSnapshot: (snapshotId: string, newLabel: string) => Promise<VersionSnapshot>;
    /**
     * Restores the document to a previously saved snapshot.
     * A 'restore-point' backup is automatically created before applying the snapshot.
     *
     * @param {string} versionId - ID of the snapshot to restore.
     * @returns {Promise<VersionSnapshot>} - The backup snapshot created before restore.
     */
    restoreSnapshot: (versionId: string) => Promise<VersionSnapshot>;
    /**
     * Returns snapshots ordered from newest to oldest.
     *
     * Supports pagination for large version histories.
     *
     * @param {number} limit - Maximum number of results to return.
     * @param {number} offset - Number of results to skip from the start.
     * @returns {VersionSnapshot[]} - Ordered list of matching snapshots (newest first).
     */
    getSnapshots: (limit?: number, offset?: number) => VersionSnapshot[];
    /**
     * Computes a structural diff summary between two snapshots.
     *
     * @param {string} versionIdA - ID of the first (earlier) snapshot.
     * @param {string} versionIdB - ID of the second (later) snapshot.
     * @returns {VersionDiff | null} - Diff summary, or null if either snapshot is not found.
     */
    compareVersions: (versionIdA: string, versionIdB: string) => VersionDiff;
    /**
     * Permanently deletes a snapshot from memory and storage.
     *
     * @param {string} versionId - ID of the snapshot to delete.
     * @returns {Promise<void>} The promise
     */
    deleteSnapshot: (versionId: string) => Promise<void>;
    /**
     * Applies pyramid retention: prunes old snapshots while keeping
     * meaningful milestones (user-labelled or explicitly tagged).
     *
     * Retention tiers (from most recent):
     *   - Last 1 hour  : keep all
     *   - Last 24 hours: keep one per hour
     *   - Last 7 days  : keep one per day
     *   - Last 30 days : keep one per week
     *   - Older        : delete (unless user-labelled)
     *
     * @returns {Promise<number>} - Number of snapshots removed.
     */
    pruneVersions: () => Promise<number>;
    /**
     * Exports a snapshot to a JSON-serialisable object (documentState as base64).
     *
     * @param {string} versionId - ID of the snapshot to export.
     * @returns {ExportedVersion | null} - Exported object, or null when not found.
     */
    exportSnapshot: (versionId: string) => ExportedVersion;
    /**
     * Imports a previously exported snapshot into memory and storage.
     *
     * @param {ExportedVersion} exported - The exported version object.
     * @returns {Promise<VersionSnapshot>} - The imported snapshot.
     */
    importSnapshot: (exported: ExportedVersion) => Promise<VersionSnapshot>;
    /**
     * Returns the total number of snapshots currently held in memory.
     *
     * @returns {number} - Snapshot count.
     */
    getSnapshotCount(): number;
    /**
     * Cleans up all timers and observers.  Call when the editor is destroyed.
     *
     * @returns {void}
     */
    destroy(): void;
    private setupObserver;
    private onYjsChange;
    private hasStructuralChange;
    private scheduleDebouncedSnapshot;
    private setupSafetyNetTimer;
    private handleSafetyNetCheck;
    private loadFromStorage;
    private generateId;
    private computeFragmentLength;
    private computeElementLength;
    private toHourBucket;
    private toDayBucket;
    private toWeekBucket;
    private pad;
}
