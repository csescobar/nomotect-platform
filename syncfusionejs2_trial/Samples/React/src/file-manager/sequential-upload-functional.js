"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
/**
 * File Manager sequential upload sample
 */
var SequentialUpload = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var fmObj = (0, react_1.useRef)(null);
    var hostUrl = "https://physical-service.syncfusion.com/";
    return (React.createElement("div", null,
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "file-sequential", ref: fmObj, ajaxSettings: {
                    url: hostUrl + "api/FileManager/FileOperations",
                    getImageUrl: hostUrl + "api/FileManager/GetImage",
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                }, uploadSettings: { sequentialUpload: true, directoryUpload: true } },
                React.createElement(ej2_react_filemanager_1.ToolbarItemsDirective, null,
                    React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: 'NewFolder' }),
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
exports.default = SequentialUpload;
