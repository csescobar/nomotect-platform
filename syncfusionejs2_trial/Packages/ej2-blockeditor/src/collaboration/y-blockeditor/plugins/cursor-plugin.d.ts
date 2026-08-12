import * as Y from '../yjs-types';
import { CursorPluginOptions } from '../base/interface';
import { UserModel } from '../../../models/common/user-model';
export declare class CursorPlugin {
    private parent;
    private syncPlugin;
    private yFragment;
    private yDoc;
    private awareness;
    private blockManager;
    private localUser;
    private overlayContainer;
    private decorations;
    private isDestroyed;
    private YRuntime;
    private throttledSelectionUpdate;
    private throttledRerender;
    private boundSelectionChange;
    private boundScrollResize;
    private yjsDeepObserver;
    private resizeObserver;
    constructor(yFragment: Y.XmlFragment, options: CursorPluginOptions);
    private init;
    private initAwareness;
    private onAwarenessChange;
    private updateLocalCursor;
    private getEditorSelection;
    private domNodeToAbsPos;
    private cumulativeTextOffset;
    private createOverlayContainer;
    private renderRemoteCursors;
    private paintCaret;
    private buildDefaultCaret;
    private paintSelectionHighlight;
    private buildRangeForSelection;
    private resolveAbsPosToDom;
    private caretRectForAbsPos;
    private toEditorRelative;
    private syncUsersToEditor;
    /**
     * Returns the list of all active remote users in the session
     *
     * @returns {UserModel[]} Array of active user models
     * @hidden
     */
    getUsers(): UserModel[];
    /**
     * Returns the current local user model
     *
     * @returns {UserModel} Local user model
     * @hidden
     */
    getLocalUser(): UserModel;
    /**
     * Updates the local user model with partial properties
     *
     * @param {Partial<UserModel>} user - Partial user properties to update
     * @hidden
     * @returns {void}
     */
    setLocalUser(user: Partial<UserModel>): void;
    /**
     * Forces a re-render of all remote cursor decorations
     *
     * @hidden
     * @returns {void}
     */
    forceRerender(): void;
    destroy(): void;
}
