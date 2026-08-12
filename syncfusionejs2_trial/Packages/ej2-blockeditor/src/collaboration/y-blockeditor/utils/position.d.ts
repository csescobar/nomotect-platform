import * as Y from '../yjs-types';
import { AbsolutePosition } from '../base/interface';
import { Collaboration } from '../base/collaboration';
import { BlockEditorBinding } from '../plugins/sync-plugin';
/**
 * Converts between absolute and relative positions in Yjs structures
 *
 * @hidden
 */
export declare class YjsPosition {
    private parent;
    private collabManager;
    private YRuntime;
    constructor(parent: BlockEditorBinding, manager: Collaboration);
    /**
     * Converts absolute DOM position to relative position in Yjs
     *
     * @param {AbsolutePosition} pos - Absolute position in DOM
     * @param {Y.XmlFragment} yFragment - Yjs fragment for context
     * @returns {Y.RelativePosition|null} Relative position or null
     * @hidden
     */
    absolutePositionToRelativePosition(pos: AbsolutePosition, yFragment: Y.XmlFragment): Y.RelativePosition | null;
    /**
     * Converts relative position from Yjs to absolute DOM position
     *
     * @param {Y.RelativePosition} relPos - Relative position in Yjs
     * @param {Y.Doc} yDoc - Yjs document
     * @param {Y.XmlFragment} yFragment - Yjs fragment
     * @returns {AbsolutePosition|null} Absolute position or null
     * @hidden
     */
    relativePositionToAbsolutePosition(relPos: Y.RelativePosition, yDoc: Y.Doc, yFragment: Y.XmlFragment): AbsolutePosition | null;
    private compareIDs;
    compareRelativePositions(a: Y.RelativePosition | null, b: Y.RelativePosition | null): boolean;
}
