"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmartFileManager = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var SmartFileManager = /** @class */ (function (_super) {
    __extends(SmartFileManager, _super);
    function SmartFileManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmartFileManager.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("img", { src: 'src/ai-filemanager/images/smart-filemanager.gif', width: '100%', height: '100%' })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases the tagging capabilities of the Syncfusion React File Manager, including:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Content Summary:"),
                        " Users can quickly get summaries of .txt, .pdf, and .docx files by selecting a file and clicking the \"Quick Summary\" button in the File Manager Toolbar."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "AI Tagging:"),
                        " Users can tag files with AI-generated tag details by selecting a file and clicking the \"Manage Tags\" button in the File Manager context menu."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Tag Search:"),
                        " Users can search for items based on file tags. By providing a file tag in the File Manager search bar and clicking the search icon, users can find files tagged with the specified term.")),
                React.createElement("p", null, "These features enhance file management by making document overview faster and making it easier to categorize and locate files based on their tags."),
                React.createElement("p", null,
                    "To explore this and more Syncfusion React Smart AI integrations locally, check out our ",
                    React.createElement("a", { target: '_blank', href: 'https://github.com/syncfusion/smart-ai-samples/tree/master/react/', "aria-label": "Navigate to explore the syncfusion React AI Demos repository" }, "GitHub repository"),
                    ".")),
            React.createElement("div", { id: "description" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Content Summary:"),
                        " This feature extracts and summarizes file content using AI. Users can access it via the \"Quick Summary\" button, which generates a concise overview of the file's content."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "AI Tagging:"),
                        " This feature generates tags for selected files using AI. Users can update the tag details for a file by selecting it and using the \"Manage Tags\" option in the context menu."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Tag Search:"),
                        " This feature allows users to search for files based on their tags. The search term entered in the File Manager search bar is compared with the tags of files, and relevant files are displayed based on tag similarity.")))));
    };
    return SmartFileManager;
}(sample_base_1.SampleBase));
exports.SmartFileManager = SmartFileManager;
