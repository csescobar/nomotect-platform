"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
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
var Template = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var fmRef = (0, react_1.useRef)(null);
    var formatSize = function (bytes) {
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
    var getBackgroundCss = function (item) {
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
            'snowfall.jpg': 'background-snowfall'
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
        var ext = (item.name.split('.').pop() || '').toLowerCase();
        return "file-icon ".concat(ExtensionBackgrounds[ext] || 'background-default');
    };
    var getIconsForFolders = function (item) {
        var iconMap = {
            Files: 'e-folder',
            Documents: 'e-file-document',
            Downloads: 'e-download',
            Pictures: 'e-thumbnail',
            Music: 'e-file-format',
            Videos: 'e-video',
            Employees: 'e-export-png',
            Food: 'e-export-png',
            Nature: 'e-export-png'
        };
        return iconMap[item.name] || 'e-folder';
    };
    var getFileIconCssClass = function (item) {
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
            pdf: 'pdf'
        };
        var extension = (item.name.split('.').pop() || '').toLowerCase();
        var iconType = extensionMap[extension] || 'unknown';
        return "e-list-icon e-fe-".concat(iconType);
    };
    var onActionSelect = function (action, item) {
        if (!fmRef.current)
            return;
        switch (action) {
            case 'Open':
                fmRef.current.openFile(item.name);
                break;
            case 'Download':
                fmRef.current.downloadFiles([item.name]);
                break;
            case 'Refresh':
                fmRef.current.refreshFiles();
                break;
            case 'Delete':
                fmRef.current.deleteFiles([item.name]);
                break;
            default:
                break;
        }
    };
    // Render DropDownButtonComponent (React) into each action host
    var renderDDBIntoHost = function (hostEl) {
        var fileName = hostEl.getAttribute('data-name') || '';
        var isFile = (hostEl.getAttribute('data-isfile') || 'false') === 'true';
        var items = isFile ? actionItems.filter(function (i) { return i.text !== 'Open'; }) : actionItems;
        var onSelect = function (args) {
            var _a;
            var action = ((_a = args === null || args === void 0 ? void 0 : args.item) === null || _a === void 0 ? void 0 : _a.text) || '';
            onActionSelect(action, { name: fileName, isFile: isFile });
        };
        if (!hostEl.hasAttribute('data-ddb-initialized')) {
            var root = (0, client_1.createRoot)(hostEl);
            root.render(React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: items, cssClass: "e-caret-hide filemanager-dropdown-button", iconCss: "e-icons e-more-vertical-1", select: onSelect }));
            hostEl.setAttribute('data-ddb-initialized', 'true');
        }
    };
    var menuOpen = function (args) {
        args.cancel = true;
    };
    var fileLoad = function (args) {
        var validModules = ['DetailsView', 'LargeIconsView'];
        if (validModules.indexOf(args.module) !== -1) {
            setTimeout(function () {
                var actionBtn = args.element.querySelector('.action-ddb');
                if (actionBtn && !actionBtn.hasAttribute('data-ddb-initialized')) {
                    renderDDBIntoHost(actionBtn);
                }
            }, 10);
        }
    };
    var detailsViewSettings = {
        columns: [
            {
                field: 'name',
                headerText: 'Name',
                template: function (item) { return (React.createElement("div", null, item.name)); }
            },
            {
                field: 'size',
                headerText: 'Size',
                template: function (item) { return (React.createElement("div", null, item.isFile ? formatSize(item.size) : '-')); }
            },
            {
                field: '_fm_modified',
                headerText: 'DateModified',
                format: 'MM/dd/yyyy hh:mm a'
            },
            {
                headerText: 'Actions',
                template: function (item) { return (React.createElement("div", { className: "action-ddb", "data-name": item.name, "data-isfile": item.isFile })); }
            }
        ]
    };
    var largeIconsTemplate = function (item) {
        var formattedDate = item.dateCreated
            ? new Date(item.dateCreated).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })
            : '';
        var iconClass = getFileIconCssClass(item);
        var backgroundClass = getBackgroundCss(item);
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
    var navigationPaneTemplate = function (item) {
        var iconClass = getIconsForFolders(item);
        return (React.createElement("div", { className: "e-nav-pane-node", style: { display: 'inline-flex', alignItems: 'center' } },
            React.createElement("span", { className: "e-icons ".concat(iconClass) }),
            React.createElement("span", { className: "folder-name", style: { marginLeft: 8 } }, item.name)));
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "sample-container" },
                React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "template_filemanager", ref: fmRef, ajaxSettings: {
                        url: "".concat(hostUrl, "api/FileManager/FileOperations"),
                        uploadUrl: "".concat(hostUrl, "api/FileManager/Upload"),
                        downloadUrl: "".concat(hostUrl, "api/FileManager/Download"),
                        getImageUrl: "".concat(hostUrl, "api/FileManager/GetImage")
                    }, cssClass: "e-fm-template-sample", height: "600px", detailsViewSettings: detailsViewSettings, largeIconsTemplate: largeIconsTemplate, navigationPaneTemplate: navigationPaneTemplate, menuOpen: menuOpen, fileLoad: fileLoad },
                    React.createElement(ej2_react_filemanager_1.Inject, { services: [ej2_react_filemanager_1.NavigationPane, ej2_react_filemanager_1.DetailsView, ej2_react_filemanager_1.Toolbar] })))),
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
exports.default = Template;
