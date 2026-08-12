import { BlockManager } from '../../../block-manager/base/block-manager';
import { IVersionHistory, YjsAdapter } from '../../../models/interface';
import { CollaborationSettingsModel } from '../../../models/collaboration/collaboration-settings-model';
import { BlockEditorBinding, CursorPlugin, UndoPlugin } from '../plugins/index';
import { InternalYRuntime } from './interface';
export declare class Collaboration {
    /** @hidden */
    blockManager: BlockManager;
    /** @hidden */
    settings: CollaborationSettingsModel;
    /** @hidden */
    syncBinding: BlockEditorBinding | null;
    /** @hidden */
    cursorPlugin: CursorPlugin | null;
    /** @hidden */
    undoPlugin: UndoPlugin | null;
    /** @hidden */
    adapter: YjsAdapter;
    /**
     * Initializes the collaboration module
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
    getSyncBinding(): BlockEditorBinding | null;
    getCursorPlugin(): CursorPlugin | null;
    getUndoPlugin(): UndoPlugin | null;
    /**
     * Returns the VersionHistory instance if version history is configured.
     *
     * @returns {IVersionHistory | null} - The version history or null.
     * @hidden
     */
    getVersionHistory(): IVersionHistory | null;
    getYRuntime(): InternalYRuntime;
    destroy(): void;
}
