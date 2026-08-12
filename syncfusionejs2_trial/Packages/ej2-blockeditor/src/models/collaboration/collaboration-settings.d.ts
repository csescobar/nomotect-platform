import { ChildProperty } from '@syncfusion/ej2-base';
import { CollaborationAdapter } from '../interface';
import { VersionHistorySettingsModel } from './version-history-settings-model';
/**
 * Represents collaboration settings for BlockEditor.
 * Configures how the editor connects to a CRDT document and providers for multiplayer editing.
 *
 */
export declare class CollaborationSettings extends ChildProperty<CollaborationSettings> {
    /**
     * Specifies the list of provider instances for syncing changes across clients.
     * Can include WebsocketProvider, HocusPocusProvider, or other multiplayer providers.
     *
     * @default null
     */
    provider: any;
    /**
     * Specifies whether to enable awareness for cursor tracking across users.
     * When enabled, users can see each other's cursor positions.
     *
     * @default true
     */
    enableAwareness: boolean;
    /**
     * Specifies the collaboration adapter used to integrate the editor
     * with a collaborative data model/runtime such as Yjs.
     *
     * The adapter provides the shared document/root instance and
     * engine-specific runtime objects required for real-time collaboration.
     *
     * @default null
     */
    adapter: CollaborationAdapter;
    /**
     * Configures the version history feature.
     * When provided with a valid `storage` backend, automatic snapshotting is enabled
     * and the version management API becomes available via `getVersionHistory()`.
     *
     * @default null
     */
    versionHistory: VersionHistorySettingsModel;
}
