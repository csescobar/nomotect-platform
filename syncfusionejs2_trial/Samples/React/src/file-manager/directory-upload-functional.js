"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
/**
 * File Manager folder upload sample
 */
var DirectoryUpload = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var _a = (0, react_1.useState)(false), isDirectoryUpload = _a[0], setIsDirectoryUpload = _a[1];
    var fmObj = (0, react_1.useRef)(null);
    var dropBtnRef = (0, react_1.useRef)(null);
    var hostUrl = "https://physical-service.syncfusion.com/";
    var OnCreated = function () {
        var _a, _b;
        if (fmObj.current && dropBtnRef.current) {
            var fm = fmObj.current;
            var uploadText = fm.localeObj.getConstant('Upload');
            dropBtnRef.current.content = "<span class=\"e-tbar-btn-text\">".concat(uploadText, "</span>");
            dropBtnRef.current.items = [
                { text: ((_a = fm === null || fm === void 0 ? void 0 : fm.localeObj) === null || _a === void 0 ? void 0 : _a.getConstant('Folder')) || 'Folder' },
                { text: ((_b = fm === null || fm === void 0 ? void 0 : fm.localeObj) === null || _b === void 0 ? void 0 : _b.getConstant('File')) || 'File' },
            ];
        }
    };
    var onSelect = function (args) {
        var _a;
        if (args.item.text === ((_a = fmObj.current) === null || _a === void 0 ? void 0 : _a.localeObj.getConstant('Folder'))) {
            setIsDirectoryUpload(true);
        }
        else {
            setIsDirectoryUpload(false);
        }
        setTimeout(function () {
            var uploadBtn = document.querySelector('.e-file-select-wrap button');
            uploadBtn.click();
        }, 100);
    };
    var uploadClick = function (e) {
        e.stopPropagation();
    };
    var uploadTemplate = function () {
        return (React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { ref: dropBtnRef, id: "dropButton", cssClass: "e-tbar-btn e-tbtn-txt", onClick: uploadClick, iconCss: 'e-icons e-fe-upload', select: onSelect, created: OnCreated }));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "file", ref: fmObj, uploadSettings: { directoryUpload: isDirectoryUpload }, ajaxSettings: { url: hostUrl + "api/FileManager/FileOperations", getImageUrl: hostUrl + "api/FileManager/GetImage", uploadUrl: hostUrl + 'api/FileManager/Upload', downloadUrl: hostUrl + 'api/FileManager/Download' }, contextMenuSettings: {
                    file: ['Cut', 'Copy', '|', 'Delete', 'Download', 'Rename', '|', 'Details'],
                    visible: true
                } },
                React.createElement(ej2_react_filemanager_1.ToolbarItemsDirective, null,
                    React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { name: 'NewFolder' }),
                    React.createElement(ej2_react_filemanager_1.ToolbarItemDirective, { template: uploadTemplate, name: "Upload" }),
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
            React.createElement("p", null,
                "This sample demonstrates the folder (directory) upload feature. Choose ",
                React.createElement("code", null, "Folder"),
                " or ",
                React.createElement("code", null, "File"),
                " from the ",
                React.createElement("code", null, "Upload"),
                " Context Menu item or the Toolbar to upload a folder or a file in the File Manager component.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this demo, a folder upload is enabled by setting ",
                React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/api/file-manager/uploadSettingsModel/#directoryupload", target: "_blank" }, " directoryUpload "),
                " to ",
                React.createElement("code", null, "true"),
                ". It allows users to select or drag and drop a folder to upload its contents including hierarchy folders and files in the File Manager component."),
            React.createElement("p", null, "The folder (directory) upload is supported for the following file system providers, "),
            React.createElement("ul", null,
                React.createElement("li", null, " Physical provider"),
                React.createElement("li", null, " NodeJS provider"),
                React.createElement("li", null, " Azure provider"),
                React.createElement("li", null, " Amazon S3 provider")),
            React.createElement("p", null,
                React.createElement("b", null, "Note: "),
                "File Manager's upload functionality is restricted in the online demos for security reasons. If you need to test upload functionality, please install",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/downloads" }, " Syncfusion Essential Studio "),
                "on your machine and run the demo."),
            React.createElement("p", null,
                "Looking for the full React File Manager component overview, features, pricing, and documentation? Visit the ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-file-manager" }, "React File Manager"),
                " page."))));
};
exports.default = DirectoryUpload;
