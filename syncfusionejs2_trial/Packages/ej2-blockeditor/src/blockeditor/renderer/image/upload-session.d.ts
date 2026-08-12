/**
 * UploadSession class for managing upload state.
 *
 * @hidden
 */
export declare class UploadSession {
    /**
     * Unique upload session identifier.
     */
    sessionId: string;
    /**
     * Associated ImageBlock ID.
     */
    blockId: string;
    /**
     * Original file name from user's device.
     */
    fileName: string;
    /**
     * Base64 or Blob URL for preview.
     */
    previewUrl: string;
    constructor(sessionId: string, blockId: string, file: File, previewUrl: string);
}
