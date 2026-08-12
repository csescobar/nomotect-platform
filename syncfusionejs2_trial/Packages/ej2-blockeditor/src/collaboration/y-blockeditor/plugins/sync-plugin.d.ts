import * as Y from '../yjs-types';
import { BlockModel } from '../../../models/block/block-model';
import { ContentModel } from '../../../models/content/content-model';
import { SyncPluginOptions } from '../base/interface';
import { YBlockHelper } from '../utils/yBlock-helper';
import { Conversion } from '../utils/conversion';
import { YjsPosition } from '../utils/position';
import { IncrementalSync } from '../utils/incremental-text';
import { SegmentSync } from '../utils/segment-sync';
import { BlockManager } from '../../../block-manager/base/block-manager';
export declare class BlockEditorBinding {
    /** @hidden */
    yBlocks: Y.XmlFragment;
    /** @hidden */
    doc: Y.Doc;
    /** @hidden */
    blockManager: BlockManager;
    /** @hidden */
    isDestroyed: boolean;
    /** @hidden */
    yjsPosition: YjsPosition;
    /** @hidden */
    conversion: Conversion;
    /** @hidden */
    incrementalSync: IncrementalSync;
    /** @hidden */
    segmentSync: SegmentSync;
    /** @hidden */
    yBlockHelper: YBlockHelper;
    private parent;
    private mux;
    private _observeFunction;
    private observedYTexts;
    /** @hidden */
    isApplyingRemote: boolean;
    private preTransactionBlockSnapshots;
    private preTransactionTableSnapshots;
    private handledYTextInTransaction;
    private YRuntime;
    private tableAction;
    constructor(options: SyncPluginOptions);
    private init;
    private setupYjsObservers;
    private setupEditorObserver;
    private beforeAllTransactions;
    private captureBlockIdsSnapshot;
    private captureTableSnapshot;
    private afterAllTransactions;
    private onYjsChange;
    private applyYjsChanges;
    private onEditorChange;
    private applyEditorChanges;
    private handleBlockMove;
    private moveBlocksYjs;
    private renderFromYjs;
    private handleStructuralEvents;
    private handleNestedStructuralChange;
    private handleStructuralChange;
    private analyzeDelta;
    private applyDeltaOps;
    private handleRemoteTransformation;
    private getParentBlockContext;
    private getTableBlockIdFromCell;
    private handlePropertyEvent;
    private handleTextEventIncremental;
    private attachYTextObserverToBlock;
    private observeYText;
    private attachYTextObserversToAll;
    private handleBlockInsertion;
    private handleBlockDeletion;
    private handleBlockTransformation;
    private transformNode;
    private handleBlockUpdateIncremental;
    private updateYBlockAttributesIfChanged;
    private insertIntoParent;
    private broadcastBlocksToYjs;
    /**
     * Removes a mention character (e.g., "/") from Yjs at the specified position with excluded origin.
     * This prevents the removal from appearing in the undo/redo history.
     *
     * @param {BlockModel} block - The block model with content information
     * @param {ContentModel} affectedContent - The content model where "/" is located
     * @param {number} offsetInContent - Offset position within the affectedContent
     * @returns {void}
     * @hidden
     */
    removeMentionCharFromYjs(block: BlockModel, affectedContent: ContentModel, offsetInContent: number): void;
    destroy(): void;
}
