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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarkdownBlocks = void 0;
var React = require("react");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
var ej2_markdown_converter_1 = require("@syncfusion/ej2-markdown-converter");
var turndown_1 = require("turndown");
var turndown_plugin_gfm_1 = require("turndown-plugin-gfm");
require("./markdownBlocks.css");
var MarkdownBlocks = /** @class */ (function (_super) {
    __extends(MarkdownBlocks, _super);
    function MarkdownBlocks(props) {
        var _this = _super.call(this, props) || this;
        _this.sidebarRef = null;
        _this.treeviewRef = null;
        _this.blockEditorRef = null;
        _this.closeBtnRef = null;
        _this.downloadBtnRef = null;
        _this.width = '240px';
        _this.enableDock = true;
        _this.dockSize = '33px';
        _this.mediaQuery = '(min-width: 600px)';
        _this.target = '.blockeditor-marked';
        _this.sidebarHeaderText = 'Markdown Templates';
        _this.turndownService = (function () {
            var service = new turndown_1.default({
                codeBlockStyle: 'fenced',
                emDelimiter: '_',
                bulletListMarker: '-',
                headingStyle: 'atx'
            });
            service.use(turndown_plugin_gfm_1.gfm);
            return service;
        })();
        _this.customToolbarItems = [
            'Bold', 'Italic', 'Underline', 'Strikethrough'
        ];
        _this.inlineToolbar = {
            enable: true,
            items: _this.customToolbarItems,
        };
        _this.commandItems = [
            {
                "id": "bullet-list-command",
                "type": "BulletList",
                "groupBy": "General",
                "label": "Bullet List",
                "tooltip": "Create a bullet list",
                "iconCss": "e-icons e-list-unordered",
                "shortcut": "Ctrl+Shift+8"
            },
            {
                "id": "numbered-list-command",
                "type": "NumberedList",
                "groupBy": "General",
                "label": "Numbered List",
                "tooltip": "Create a numbered list",
                "iconCss": "e-icons e-list-ordered",
                "shortcut": "Ctrl+Shift+9"
            },
            {
                "id": "divider-command",
                "type": "Divider",
                "groupBy": "General",
                "label": "Divider",
                "tooltip": "Add a horizontal line",
                "iconCss": "e-icons e-be-divider",
                "shortcut": "Ctrl+Shift+-"
            },
            {
                "id": "code-command",
                "type": "Code",
                "groupBy": "Insert",
                "label": "Code",
                "tooltip": "Insert a code block",
                "iconCss": "e-icons e-insert-code",
                "shortcut": "Ctrl+Alt+k"
            },
            {
                "id": "table-command",
                "type": "Table",
                "groupBy": "Insert",
                "label": "Table",
                "tooltip": "Insert a table block",
                "iconCss": "e-icons e-table-2",
                "shortcut": "Ctrl+Alt+T"
            },
            {
                "id": "paragraph-command",
                "type": "Paragraph",
                "groupBy": "Text Styles",
                "label": "Paragraph",
                "tooltip": "Add a paragraph",
                "iconCss": "e-icons e-be-paragraph",
                "shortcut": "Ctrl+Alt+P"
            },
            {
                "id": "heading1-command",
                "type": "Heading",
                "groupBy": "Text Styles",
                "label": "Heading 1",
                "tooltip": "Page title or main heading",
                "iconCss": "e-icons e-be-h1",
                "shortcut": "Ctrl+Alt+1"
            },
            {
                "id": "heading2-command",
                "type": "Heading",
                "groupBy": "Text Styles",
                "label": "Heading 2",
                "tooltip": "Section heading",
                "iconCss": "e-icons e-be-h2",
                "shortcut": "Ctrl+Alt+2"
            },
            {
                "id": "heading3-command",
                "type": "Heading",
                "groupBy": "Text Styles",
                "label": "Heading 3",
                "tooltip": "Subsection heading",
                "iconCss": "e-icons e-be-h3",
                "shortcut": "Ctrl+Alt+3"
            },
            {
                "id": "heading4-command",
                "type": "Heading",
                "groupBy": "Text Styles",
                "label": "Heading 4",
                "tooltip": "Smaller heading for nested content",
                "iconCss": "e-icons e-be-h4",
                "shortcut": "Ctrl+Alt+4"
            },
            {
                "id": "quote-command",
                "type": "Quote",
                "groupBy": "Text Styles",
                "label": "Quote",
                "tooltip": "Insert a quote block",
                "iconCss": "e-icons e-blockquote",
                "shortcut": "Ctrl+Alt+Q"
            }
        ];
        _this.data = [
            {
                id: 'Team_Sessions',
                name: 'Team Sessions',
                mdFile: 'https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Team%20Sessions.md',
                selected: true,
                expanded: true,
                children: [
                    { id: '1', name: 'Meeting minutes.md', mdFile: 'https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Meeting%20minutes.md' },
                    { id: '2', name: 'Brain storming.md', mdFile: 'https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Brain%20storming.md' },
                    { id: '3', name: 'Retrospective.md', mdFile: 'https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Retrospective.md' },
                ]
            }
        ];
        _this.field = {
            dataSource: _this.data,
            id: 'id',
            text: 'name',
            child: 'children'
        };
        _this.createdblock = function () { };
        _this.renderFallbackBlocks = function (message) {
            var fb = [{
                    id: 'fallback-block',
                    blockType: 'Paragraph',
                    content: [{ id: 'fallback-t', contentType: 'Text', content: message }],
                    properties: { placeholder: 'Fallback content' },
                    indent: 0
                }];
            if (_this.blockEditorRef) {
                _this.blockEditorRef.renderBlocksFromJson(fb, true);
            }
        };
        _this.formatBreadcrumbText = function (name) {
            return (name === null || name === void 0 ? void 0 : name.endsWith('.md')) ? name.replace(/\.md$/i, '') : name;
        };
        _this.loadContent = function (mdFile) { return __awaiter(_this, void 0, void 0, function () {
            var res, text, html, nodeDatas, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch(mdFile)];
                    case 1:
                        res = _a.sent();
                        if (!res.ok)
                            throw new Error("HTTP ".concat(res.status));
                        return [4 /*yield*/, res.text()];
                    case 2:
                        text = _a.sent();
                        html = ej2_markdown_converter_1.MarkdownConverter.toHtml(text);
                        this.setState({ markdownContent: html });
                        if (this.blockEditorRef && html) {
                            try {
                                nodeDatas = this.blockEditorRef.parseHtmlToBlocks(html);
                                this.blockEditorRef.renderBlocksFromJson(nodeDatas, true);
                            }
                            catch (parseErr) {
                                this.renderFallbackBlocks("Parsed content from ".concat(mdFile, " failed."));
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.renderFallbackBlocks("Error loading ".concat(mdFile, ". Ensure file exists in /src/."));
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.onOpen = function () {
            var _a, _b;
            _this.treeviewRef.expandAll();
            if ((_a = _this.closeBtnRef) === null || _a === void 0 ? void 0 : _a.element) {
                _this.closeBtnRef.element.style.left = '225px';
                _this.closeBtnRef.element.classList.remove('expand-mode');
            }
            if ((_b = _this.treeviewRef) === null || _b === void 0 ? void 0 : _b.element) {
                _this.treeviewRef.element.style.display = 'block';
            }
        };
        _this.onClose = function () {
            var _a, _b;
            if ((_a = _this.closeBtnRef) === null || _a === void 0 ? void 0 : _a.element) {
                _this.closeBtnRef.element.style.left = '18px';
                _this.closeBtnRef.element.classList.add('expand-mode');
            }
            if ((_b = _this.treeviewRef) === null || _b === void 0 ? void 0 : _b.element) {
                _this.treeviewRef.element.style.display = 'none';
            }
        };
        _this.openClick = function () {
            var _a;
            (_a = _this.sidebarRef) === null || _a === void 0 ? void 0 : _a.toggle();
        };
        _this.downloadMarkdown = function () {
            var _a, _b;
            if (!_this.blockEditorRef) {
                return;
            }
            var htmlContent = '';
            try {
                htmlContent = _this.blockEditorRef.getDataAsHtml();
            }
            catch (e) {
                return;
            }
            var markdownContent = _this.turndownService.turndown(htmlContent || '');
            var fileName = 'document.md';
            var lastCrumb = (_b = (_a = _this.state.breadcrumbItems) === null || _a === void 0 ? void 0 : _a[_this.state.breadcrumbItems.length - 1]) === null || _b === void 0 ? void 0 : _b.text;
            if (lastCrumb) {
                var safe = lastCrumb.replace(/[\\/:*?"<>|]+/g, '').trim() || 'document';
                fileName = "".concat(safe, ".md");
            }
            var blob = new Blob([markdownContent], { type: 'text/markdown;charset=utf-8' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            try {
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
            }
            finally {
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        };
        _this.onNodeSelected = function (args) {
            var _a, _b;
            var selectedId = (_a = args === null || args === void 0 ? void 0 : args.nodeData) === null || _a === void 0 ? void 0 : _a.id;
            if (selectedId === 'Team_Sessions') {
                _this.setState({ breadcrumbItems: [{ text: 'Team' }, { text: 'Team Sessions' }] });
                _this.loadContent('https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Team%20Sessions.md');
                return;
            }
            var findNodeById = function (nodes, id) {
                var _a;
                for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                    var n = nodes_1[_i];
                    if (n.id === id)
                        return n;
                    if ((_a = n.children) === null || _a === void 0 ? void 0 : _a.length) {
                        var found = findNodeById(n.children, id);
                        if (found)
                            return found;
                    }
                }
                return undefined;
            };
            var selectedNode = findNodeById(_this.data, selectedId);
            if (selectedNode === null || selectedNode === void 0 ? void 0 : selectedNode.mdFile) {
                _this.loadContent(selectedNode.mdFile);
                var parentID = (_b = args === null || args === void 0 ? void 0 : args.nodeData) === null || _b === void 0 ? void 0 : _b.parentID;
                var isUnderGuideline = !!parentID && parentID === 'Team_Sessions';
                if (isUnderGuideline) {
                    _this.setState({
                        breadcrumbItems: [
                            { text: 'Team' },
                            { text: 'Team Sessions' },
                            { text: _this.formatBreadcrumbText(selectedNode.name) }
                        ]
                    });
                }
                else {
                    _this.setState({
                        breadcrumbItems: [
                            { text: 'Team' },
                            { text: _this.formatBreadcrumbText(selectedNode.name) }
                        ]
                    });
                }
            }
        };
        _this.state = {
            markdownContent: '',
            breadcrumbItems: [{ text: 'Team' }]
        };
        return _this;
    }
    MarkdownBlocks.prototype.componentDidMount = function () {
        var _this = this;
        this.onClose();
        setTimeout(function () {
            _this.loadContent('https://ej2.syncfusion.com/react/demos/src/block-editor/mdfiles/Team%20Sessions.md');
            _this.setState({ breadcrumbItems: [{ text: 'Team' }, { text: 'Team Sessions' }] });
            if (_this.closeBtnRef.element && window.innerWidth < 600) {
                _this.closeBtnRef.element.style.left = '18px';
                _this.closeBtnRef.element.classList.add('expand-mode');
            }
        }, 100);
    };
    MarkdownBlocks.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: "control-section blockeditor-marked" },
                React.createElement(ej2_react_navigations_1.SidebarComponent, { id: "sidebar-treeview", className: "sidebar-content", ref: function (c) { return (_this.sidebarRef = c); }, enableDock: this.enableDock, width: this.width, enableGestures: false, dockSize: this.dockSize, open: this.onOpen, close: this.onClose, mediaQuery: this.mediaQuery, target: this.target, isOpen: true },
                    React.createElement("div", { className: "sidebar-header" },
                        React.createElement("span", null, this.sidebarHeaderText)),
                    React.createElement("div", { className: "sb-rightpane-collapsed" },
                        React.createElement("div", { className: "labelchoose" }, "Markdown Templates")),
                    React.createElement("div", { className: "main-menu" },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-round closebutton", iconCss: "e-icons e-chevron-left", id: "left-toc-closebtn", ref: function (b) { return (_this.closeBtnRef = b); }, onClick: this.openClick }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { id: "main-treeview", ref: function (t) { return (_this.treeviewRef = t); }, fields: this.field, expandOn: "Click", nodeSelected: this.onNodeSelected }))),
                React.createElement("div", { id: "content_container", className: "block-content" },
                    React.createElement("div", { className: "stick" },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, null,
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { align: "Left", template: function () { return (React.createElement("div", { className: "breadcrumbcontent" },
                                        React.createElement(ej2_react_navigations_1.BreadcrumbComponent, { items: _this.state.breadcrumbItems, separatorTemplate: function () { return (React.createElement("span", { className: "e-icons e-chevron-right" })); } }))); } }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { align: "Right", template: function () { return (React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: function (d) { return (_this.downloadBtnRef = d); }, iconCss: "e-icons e-download", title: "Download Markdown", className: "downloadbutton", onClick: _this.downloadMarkdown })); } })))),
                    React.createElement("div", { className: "markeditor" },
                        React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { ref: function (be) { return (_this.blockEditorRef = be); }, height: "597px", created: this.createdblock, inlineToolbarSettings: this.inlineToolbar, commandMenuSettings: {
                                popupWidth: '298px',
                                popupHeight: '400px',
                                commands: this.commandItems,
                            } })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the Markdown templates viewer built with Block Editor, complete with a sidebar navigation tree, breadcrumb, and Markdown loading, editing and Download as Markdown capabilities.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Block Editor Documentation Preview is a powerful, interactive documentation system that combines",
                    React.createElement("code", null, "BlockEditor"),
                    " with a collapsible sidebar, tree navigation, and Markdown rendering. It allows users to view, edit, and download documentation articles written in Markdown format."),
                React.createElement("p", null, "Key features demonstrated in this sample:"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("strong", null, "Sidebar with TreeView Navigation"),
                        ": Hierarchical menu using ",
                        React.createElement("code", null, "ejs-treeview"),
                        " to browse documentation sections."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Markdown Loading"),
                        ": Loads ",
                        React.createElement("code", null, ".md"),
                        " files from the ",
                        React.createElement("code", null, "assets"),
                        " folder via ",
                        React.createElement("code", null, "fetch"),
                        "."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Markdown to BlockEditor Conversion"),
                        ": Uses",
                        React.createElement("code", null, "MarkdownConverter"),
                        " and ",
                        React.createElement("code", null, "parseHtmlToBlocks()"),
                        " to convert Markdown to rich editable blocks."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Download as Markdown"),
                        ": Export current editor content back to clean Markdown using ",
                        React.createElement("code", null, "TurndownService"),
                        "."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Dockable & Responsive Sidebar"),
                        ": Collapsible sidebar with smooth open/close animation and mobile-friendly behavior."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Real-time Editing"),
                        ": Full Block Editor experience \u2014 formatting, lists, code blocks, mentions, slash commands, and more."),
                    React.createElement("li", null,
                        React.createElement("strong", null, "Clean UI with Toolbar"),
                        ": Professional layout with breadcrumb and download button using Toolbar and Breadcrumb components.")),
                React.createElement("p", null, "This sample serves as a complete template for building internal documentation portals, knowledge bases, technical wikis, or product guides using the Block Editor."))));
    };
    return MarkdownBlocks;
}(React.PureComponent));
exports.MarkdownBlocks = MarkdownBlocks;
exports.default = MarkdownBlocks;
