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
exports.Template = void 0;
var React = require("react");
var client_1 = require("react-dom/client");
var sample_base_1 = require("../common/sample-base");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
require("./template.css");
var hostUrl = 'https://physical-service.syncfusion.com/';
var actionItems = [
    { text: 'Open', iconCss: 'e-icons e-folder-open' },
    { text: 'Download', iconCss: 'e-icons e-download' },
    { text: 'Refresh', iconCss: 'e-icons e-refresh' },
    { text: 'Delete', iconCss: 'e-icons e-trash' },
];
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.formatSize = function (bytes) {
            if (!bytes)
                return '0 B';
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
            var i = 0;
            var value = bytes;
            while (value >= 1024 && i < sizes.length - 1) {
                value /= 1024;
                i++;
            }
            return "".concat(value.toFixed(1), " ").concat(sizes[i]);
        };
        _this.onActionSelect = function (action, item) {
            if (!_this.fmRef)
                return;
            switch (action) {
                case 'Open':
                    _this.fmRef.openFile(item.name);
                    break;
                case 'Download':
                    _this.fmRef.downloadFiles([item.name]);
                    break;
                case 'Refresh':
                    _this.fmRef.refreshFiles();
                    break;
                case 'Delete':
                    _this.fmRef.deleteFiles([item.name]);
                    break;
                default: break;
            }
        };
        _this.renderDDBIntoHost = function (hostEl) {
            var fileName = hostEl.getAttribute('data-name') || '';
            var isFile = (hostEl.getAttribute('data-isfile') || 'false') === 'true';
            var items = isFile ? actionItems.filter(function (i) { return i.text !== 'Open'; }) : actionItems;
            var onSelect = function (args) {
                var _a;
                var action = ((_a = args === null || args === void 0 ? void 0 : args.item) === null || _a === void 0 ? void 0 : _a.text) || '';
                _this.onActionSelect(action, { name: fileName, isFile: isFile });
            };
            if (!hostEl.hasAttribute('data-ddb-initialized')) {
                var root = (0, client_1.createRoot)(hostEl);
                root.render(React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: items, cssClass: "e-caret-hide filemanager-dropdown-button", iconCss: "e-icons e-more-vertical-1", select: onSelect }));
                hostEl.setAttribute('data-ddb-initialized', 'true');
            }
        };
        _this.menuOpen = function (args) {
            args.cancel = true;
        };
        _this.fileLoad = function (args) {
            var validModules = ['DetailsView', 'LargeIconsView'];
            if (validModules.indexOf(args.module) !== -1) {
                setTimeout(function () {
                    var actionBtn = args.element.querySelector('.action-ddb');
                    if (actionBtn && !actionBtn.hasAttribute('data-ddb-initialized')) {
                        _this.renderDDBIntoHost(actionBtn);
                    }
                }, 10);
            }
        };
        _this.largeIconsTemplate = function (item) {
            var formattedDate = item.dateCreated
                ? new Date(item.dateCreated).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })
                : '';
            var iconClass = _this.getFileIconCssClass(item);
            var backgroundClass = _this.getBackgroundCss(item);
            return (React.createElement("div", { className: "custom-icon-card" },
                React.createElement("div", { className: "file-header" },
                    React.createElement("div", { className: "left-info" },
                        item.isFile && React.createElement("div", { className: iconClass }),
                        React.createElement("div", { className: "file-name", title: item.name }, item.name)),
                    React.createElement("div", { className: "action-ddb", "data-name": item.name, "data-isfile": item.isFile })),
                React.createElement("div", { className: backgroundClass, title: item.name }),
                React.createElement("div", { className: "file-formattedDate" },
                    "Created on ",
                    formattedDate)));
        };
        _this.navigationPaneTemplate = function (item) {
            var iconClass = _this.getIconsForFolders(item);
            return (React.createElement("div", { className: "e-nav-pane-node", style: { display: 'inline-flex', alignItems: 'center' } },
                React.createElement("span", { className: "e-icons ".concat(iconClass) }),
                React.createElement("span", { className: "folder-name", style: { marginLeft: 8 } }, item.name)));
        };
        _this.detailsViewSettings = {
            columns: [
                {
                    field: 'name',
                    headerText: 'Name',
                    template: function (item) { return React.createElement("div", null, item.name); },
                },
                {
                    field: 'size',
                    headerText: 'Size',
                    template: function (item) { return React.createElement("div", null, item.isFile ? _this.formatSize(item.size) : '-'); },
                },
                {
                    field: '_fm_modified',
                    headerText: 'DateModified',
                    format: 'MM/dd/yyyy hh:mm a',
                },
                {
                    headerText: 'Actions',
                    template: function (item) { return (React.createElement("div", { className: "action-ddb", "data-name": item.name, "data-isfile": item.isFile })); },
                },
            ],
        };
        return _this;
    }
    Template.prototype.getIconsForFolders = function (item) {
        var iconMap = {
            Files: 'e-folder',
            Documents: 'e-file-document',
            Downloads: 'e-download',
            Pictures: 'e-thumbnail',
            Music: 'e-file-format',
            Videos: 'e-video',
            Employees: 'e-export-png',
            Food: 'e-export-png',
            Nature: 'e-export-png',
        };
        return iconMap[item.name] || 'e-folder';
    };
    Template.prototype.getFileIconCssClass = function (item) {
        if (!item.isFile)
            return '';
        var extensionMap = {
            jpg: 'image',
            jpeg: 'image',
            png: 'image',
            gif: 'image',
            mp3: 'music',
            wav: 'music',
            mp4: 'video',
            avi: 'video',
            doc: 'doc',
            docx: 'docx',
            ppt: 'pptx',
            pptx: 'pptx',
            xls: 'xlsx',
            xlsx: 'xlsx',
            txt: 'txt',
            js: 'js',
            css: 'css',
            html: 'html',
            exe: 'exe',
            msi: 'msi',
            php: 'php',
            xml: 'xml',
            zip: 'zip',
            rar: 'rar',
            pdf: 'pdf',
        };
        var extension = (item.name.split('.').pop() || '').toLowerCase();
        var iconType = extensionMap[extension] || 'unknown';
        return "e-list-icon e-fe-".concat(iconType);
    };
    Template.prototype.getBackgroundCss = function (item) {
        var NamedFileBackgrounds = {
            'Adam.png': 'background-Adam',
            'Andrew.png': 'background-Andrew',
            'Ellie.png': 'background-Ellie',
            'Jameson.png': 'background-Jameson',
            'John.png': 'background-John',
            'Josie.png': 'background-Josie',
            'Apple pie.png': 'background-Applepie',
            'Bread.png': 'background-Bread',
            'Doughnut.png': 'background-Doughnut',
            'Nuggets.png': 'background-Nuggets',
            'Sugar cookie.png': 'background-Sugarcookie',
            'bird.jpg': 'background-bird',
            'sea.jpg': 'background-sea',
            'seaview.jpg': 'background-seaview',
            'snow.jpg': 'background-snow',
            'snowfall.jpg': 'background-snowfall',
        };
        var ExtensionBackgrounds = {
            jpg: 'background-jpg',
            jpeg: 'background-jpg',
            png: 'background-png',
            pptx: 'background-pptx',
            pdf: 'background-pdf',
            mp4: 'background-video',
            mp3: 'background-audio',
            docx: 'background-doc',
            txt: 'background-txt',
            xlsx: 'background-xlsx',
            zip: 'background-zip',
        };
        if (!item.isFile)
            return 'file-icon background-folder';
        if (NamedFileBackgrounds[item.name])
            return "file-icon ".concat(NamedFileBackgrounds[item.name]);
        var ext = item.name.split('.').pop().toLowerCase();
        return "file-icon ".concat(ExtensionBackgrounds[ext] || 'background-default');
    };
    Template.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "sample-container" },
                React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "template_filemanager", ref: function (scope) { _this.fmRef = scope; }, ajaxSettings: {
                        url: "".concat(hostUrl, "api/FileManager/FileOperations"),
                        uploadUrl: "".concat(hostUrl, "api/FileManager/Upload"),
                        downloadUrl: "".concat(hostUrl, "api/FileManager/Download"),
                        getImageUrl: "".concat(hostUrl, "api/FileManager/GetImage"),
                    }, cssClass: "e-fm-template-sample", height: "600px", menuOpen: this.menuOpen, fileLoad: this.fileLoad, detailsViewSettings: this.detailsViewSettings, largeIconsTemplate: this.largeIconsTemplate, navigationPaneTemplate: this.navigationPaneTemplate },
                    React.createElement(ej2_react_filemanager_1.Inject, { services: [ej2_react_filemanager_1.NavigationPane, ej2_react_filemanager_1.DetailsView, ej2_react_filemanager_1.Toolbar] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample showcases how to customize the Syncfusion File Manager's control with template support in the Navigation pane, Large icons and Details view.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The ",
                    React.createElement("code", null, "navigationPaneTemplate"),
                    " renders the nodes with icons based on folder names, while the",
                    React.createElement("code", null, "largeIconsTemplate"),
                    " displays files with styled backgrounds and a action menu in each file/folder. The ",
                    React.createElement("code", null, "detailsViewSettings"),
                    " template shows file information like name, size, and modified date in columns. File operations such as Open, Delete, Download, and Refresh are handled through a dropdown menu option showed in each item, and the ",
                    React.createElement("code", null, "select"),
                    " initiates each action to the corresponding File Manager methods (",
                    React.createElement("code", null, "openFile"),
                    ",",
                    React.createElement("code", null, "downloadFiles"),
                    ", ",
                    React.createElement("code", null, "deleteFiles"),
                    ", and ",
                    React.createElement("code", null, "refreshFiles"),
                    ")."),
                React.createElement("p", null,
                    "Looking for the full React File Manager component overview, features, pricing, and documentation? Visit the ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-file-manager" }, "React File Manager"),
                    " page."))));
    };
    return Template;
}(sample_base_1.SampleBase));
exports.Template = Template;
