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
exports.SequentialUpload = void 0;
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
/**
 * File Manager sequential upload sample
 */
var SequentialUpload = /** @class */ (function (_super) {
    __extends(SequentialUpload, _super);
    function SequentialUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostUrl = 'https://physical-service.syncfusion.com/';
        return _this;
    }
    SequentialUpload.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "file-sequential", ref: function (scope) { _this.fmObj = scope; }, ajaxSettings: {
                        url: this.hostUrl + 'api/FileManager/FileOperations',
                        getImageUrl: this.hostUrl + 'api/FileManager/GetImage',
                        uploadUrl: this.hostUrl + 'api/FileManager/Upload',
                        downloadUrl: this.hostUrl + 'api/FileManager/Download'
                    }, uploadSettings: { sequentialUpload: true, directoryUpload: true } },
                    React.createElement(ej2_react_filemanager_1.ToolbarItemsDirective, null,
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "NewFolder" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Upload" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "SortBy" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Refresh" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Cut" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Copy" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Paste" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Delete" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Download" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Rename" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Selection" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "View" }),
                        React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: "Details" })),
                    React.createElement(ej2_react_filemanager_1.Inject, { services: [ej2_react_filemanager_1.NavigationPane, ej2_react_filemanager_1.DetailsView, ej2_react_filemanager_1.Toolbar] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample showcases the File Manager's sequential upload feature. When enabled, files are uploaded one at a time in the order they were added, ensures sequencing and better control over network usage.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this demo, a sequential upload is enabled by setting ",
                    React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/api/file-manager/uploadsettingsmodel/#sequentialUpload", target: "_blank" }, "sequentialUpload"),
                    " to ",
                    React.createElement("code", null, "true"),
                    " in the File Manager's upload settings. When enabled, files are uploaded one after another in the order they were added, helping preserve the intended sequence and manage bandwidth more effectively."),
                React.createElement("p", null,
                    "Looking for the full React File Manager component overview, features, pricing, and documentation? Visit the ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-file-manager" }, "React File Manager"),
                    " page."))));
    };
    return SequentialUpload;
}(sample_base_1.SampleBase));
exports.SequentialUpload = SequentialUpload;
