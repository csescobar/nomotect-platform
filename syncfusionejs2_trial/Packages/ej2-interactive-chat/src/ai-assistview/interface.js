/**
 * Specifies type for thinking context items.
 * Categorizes metadata associated with thinking stages to provide semantic context about processed resources.
 *
 */
export var ThinkingContextType;
(function (ThinkingContextType) {
    /**
     * Specifies the default type of context item.
     */
    ThinkingContextType["File"] = "file";
    /**
     * Specifies the variable type of context item.
     */
    ThinkingContextType["Variable"] = "variable";
    /**
     * Specifies the search type of context item.
     */
    ThinkingContextType["Search"] = "search";
    /**
     * Specifies the tool type of context item.
     */
    ThinkingContextType["Tool"] = "tool";
    /**
     * Specifies the result type of context item.
     */
    ThinkingContextType["Result"] = "result";
    /**
     * Specifies the context type of context item.
     */
    ThinkingContextType["Context"] = "context";
})(ThinkingContextType || (ThinkingContextType = {}));
/**
 * Specifies badge types for thinking context items.
 * Visual indicators representing status or outcome of contextual metadata in thinking stages.
 *
 */
export var ThinkingContextBadge;
(function (ThinkingContextBadge) {
    /**
     * Specifies the default badge of context item.
     */
    ThinkingContextBadge["None"] = "none";
    /**
     * Specifies the success badge of context item.
     */
    ThinkingContextBadge["Success"] = "success";
    /**
     * Specifies the warning badge of context item.
     */
    ThinkingContextBadge["Warning"] = "warning";
    /**
     * Specifies the failed badge of context item.
     */
    ThinkingContextBadge["Failed"] = "failed";
})(ThinkingContextBadge || (ThinkingContextBadge = {}));
/**
 * Specifies the status of thinking stages during AI processing.
 * Represents lifecycle states indicating whether stage processing is complete, ongoing, or encountered errors.
 *
 */
export var ThinkingStageStatus;
(function (ThinkingStageStatus) {
    /**
     * Represents the default status.
     */
    ThinkingStageStatus["Completed"] = "completed";
    /**
     * Represents the in-progress status.
     */
    ThinkingStageStatus["InProgress"] = "inProgress";
    /**
     * Represents the failed status.
     */
    ThinkingStageStatus["Failed"] = "failed";
})(ThinkingStageStatus || (ThinkingStageStatus = {}));
