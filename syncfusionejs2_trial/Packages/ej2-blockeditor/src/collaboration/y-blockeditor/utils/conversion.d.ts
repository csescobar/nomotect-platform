import * as Y from '../yjs-types';
import { ContentModel } from '../../../models/content/content-model';
import { BlockModel } from '../../../models/block/block-model';
import { Collaboration } from '../base/collaboration';
/**
 * Converts between BlockEditor and Yjs data structures
 *
 * @hidden
 */
export declare class Conversion {
    private collabManager;
    private YRuntime;
    constructor(manager: Collaboration);
    /**
     * Converts a BlockEditor BlockModel to a Y.XmlElement
     *
     * @param {BlockModel} block - The BlockModel to convert
     * @returns {Y.XmlElement} Y.XmlElement representing the block
     * @hidden
     */
    blockModelToYElement(block: BlockModel): Y.XmlElement;
    /**
     * Converts array of content models to Y.XmlText
     *
     * @param {ContentModel[]} content - Array of content models to convert
     * @returns {Y.XmlText} Y.XmlText with formatted content
     * @hidden
     */
    contentToYXmlText(content: ContentModel[]): Y.XmlText;
    /**
     * Converts content properties to Y.Text attributes
     *
     * @param {Record<string, any>} properties - Properties to convert
     * @returns {Record<string, any>} Flattened attributes object
     * @hidden
     */
    segmentPropertiesToAttributes(properties: Record<string, any>): Record<string, any>;
    private convertStructuralContent;
    /**
     * Converts Y.XmlElement to BlockEditor BlockModel
     *
     * @param {Y.XmlElement} yBlock - Y.XmlElement to convert
     * @param {string} parentId - Optional parent block ID
     * @returns {BlockModel} BlockModel representation
     * @hidden
     */
    yElementToBlockModel(yBlock: Y.XmlElement, parentId?: string): any;
    /**
     * Converts Y.XmlText to array of content models
     *
     * @param {Y.XmlText} yText - Y.XmlText to convert
     * @returns {ContentModel[]} Array of content models
     * @hidden
     */
    yTextToContentModel(yText: Y.XmlText): ContentModel[];
    private convertYStructuralContent;
    /**
     * Converts Y.XmlFragment to array of BlockModels
     *
     * @param {Y.XmlFragment} yFragment - Fragment to convert
     * @returns {BlockModel[]} Array of block models
     * @hidden
     */
    yFragmentToBlocks(yFragment: Y.XmlFragment): BlockModel[];
    /**
     * Checks if block type is structural (has children or special layout)
     *
     * @param {string} blockType - Block type name to check
     * @returns {boolean} True if block is structural
     * @hidden
     */
    isStructuralBlock(blockType: string): boolean;
    private isStructuralBlockType;
}
