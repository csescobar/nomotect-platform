/**
 * UploadSession class for managing upload state.
 *
 * @hidden
 */
var UploadSession = /** @class */ (function () {
    function UploadSession(sessionId, blockId, file, previewUrl) {
        this.sessionId = sessionId;
        this.blockId = blockId;
        this.fileName = file.name;
        this.previewUrl = previewUrl;
    }
    return UploadSession;
}());
export { UploadSession };
