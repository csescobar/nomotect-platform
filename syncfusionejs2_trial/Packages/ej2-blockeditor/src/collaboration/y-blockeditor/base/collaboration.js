import { BlockEditorBinding, CursorPlugin, UndoPlugin } from '../plugins/index';
var Collaboration = /** @class */ (function () {
    function Collaboration() {
    }
    /**
     * Initializes the collaboration module
     *
     * @param {BlockManager} blockManager - The manager instance
     * @param {CollaborationSettingsModel} settings - The Collaboration settings
     * @returns {void}
     * @hidden
     */
    Collaboration.prototype.initialize = function (blockManager, settings) {
        this.blockManager = blockManager;
        this.settings = settings;
        this.adapter = settings.adapter;
        // BlockEditorBinding (sync plugin)
        this.syncBinding = new BlockEditorBinding({
            parent: this,
            blockManager: this.blockManager,
            yBlocks: this.adapter.yXmlFragment
        });
        // CursorPlugin
        if (this.settings.enableAwareness && this.settings.provider) {
            if (this.settings.provider.awareness) {
                this.cursorPlugin = new CursorPlugin(this.adapter.yXmlFragment, {
                    parent: this,
                    blockManager: this.blockManager,
                    awareness: this.settings.provider.awareness
                });
            }
        }
        // UndoPlugin
        this.undoPlugin = new UndoPlugin({
            parent: this,
            blockManager: this.blockManager,
            maxStackSize: this.blockManager.undoRedoStack,
            yXmlFragment: this.adapter.yXmlFragment,
            captureTimeout: 500
        });
    };
    /**
     * To get component name.
     *
     * @returns {string} - It returns the module name.
     * @private
     */
    Collaboration.prototype.getModuleName = function () {
        return 'collaboration';
    };
    Collaboration.prototype.getSyncBinding = function () {
        return this.syncBinding;
    };
    Collaboration.prototype.getCursorPlugin = function () {
        return this.cursorPlugin;
    };
    Collaboration.prototype.getUndoPlugin = function () {
        return this.undoPlugin;
    };
    /**
     * Returns the VersionHistory instance if version history is configured.
     *
     * @returns {IVersionHistory | null} - The version history or null.
     * @hidden
     */
    Collaboration.prototype.getVersionHistory = function () {
        return this.blockManager.versionHistoryModule;
    };
    Collaboration.prototype.getYRuntime = function () {
        return this.adapter.yRuntime;
    };
    Collaboration.prototype.destroy = function () {
        // Destroy plugins
        if (this.undoPlugin) {
            this.undoPlugin.destroy();
        }
        if (this.cursorPlugin) {
            this.cursorPlugin.destroy();
        }
        if (this.syncBinding) {
            this.syncBinding.destroy();
        }
        this.syncBinding = null;
        this.cursorPlugin = null;
        this.undoPlugin = null;
    };
    return Collaboration;
}());
export { Collaboration };
