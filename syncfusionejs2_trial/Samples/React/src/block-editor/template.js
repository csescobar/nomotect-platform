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
exports.TemplateGallery = void 0;
var React = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
require("./template.css");
var sample_base_1 = require("../common/sample-base");
var data = require("./blockData.json");
var TemplateGallery = /** @class */ (function (_super) {
    __extends(TemplateGallery, _super);
    function TemplateGallery() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            selectedCardName: null,
            selectedCardIcon: null
        };
        _this.editorRef = null;
        _this.cards = data["blockTemplate"][0].page;
        _this.loadPage = function (pageData) {
            _this.setState({
                selectedCardName: pageData.name,
                selectedCardIcon: pageData.icon
            });
            if (_this.editorRef && typeof _this.editorRef.renderBlocksFromJson === 'function') {
                _this.editorRef.renderBlocksFromJson(pageData.blocks, true);
            }
        };
        _this.onCardClick = function (pageData) {
            _this.editorRef.focusIn();
            _this.loadPage(pageData);
        };
        _this.onEditorCreated = function () {
            _this.editorRef.focusIn();
        };
        return _this;
    }
    TemplateGallery.prototype.componentDidMount = function () {
        this.loadPage(this.cards[1]);
    };
    TemplateGallery.prototype.render = function () {
        var _this = this;
        var _a = this.state, selectedCardName = _a.selectedCardName, selectedCardIcon = _a.selectedCardIcon;
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("div", { className: "control-section blockeditor-template" },
                React.createElement("div", { className: "cards-wrapper" },
                    React.createElement("div", { className: "fade left" }),
                    React.createElement("div", { className: "cards-container" }, this.cards.map(function (card) { return (React.createElement("div", { key: card === null || card === void 0 ? void 0 : card.name, className: "template-card ".concat(selectedCardName === (card === null || card === void 0 ? void 0 : card.name) ? 'active' : ''), onClick: function () { return _this.onCardClick(card); }, title: card === null || card === void 0 ? void 0 : card.name },
                        React.createElement("div", { className: "card-icon-left" },
                            React.createElement("span", { className: "icon" }, card === null || card === void 0 ? void 0 : card.icon)),
                        React.createElement("div", { className: "card-content" },
                            React.createElement("div", { className: "card-title" }, card === null || card === void 0 ? void 0 : card.name),
                            React.createElement("div", { className: "card-subtitle" }, card === null || card === void 0 ? void 0 : card.subtitle)))); })),
                    React.createElement("div", { className: "fade right" })),
                React.createElement("div", { className: "header-label", contentEditable: true, suppressContentEditableWarning: true },
                    React.createElement("span", { className: "selectedTitle", "aria-placeholder": "Untitle" },
                        selectedCardIcon || '',
                        selectedCardName || '')),
                React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { height: "500px", ref: function (be) { return (_this.editorRef = be); }, id: "template-gallery-blockeditor", created: this.onEditorCreated })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates a Template Gallery for the Block Editor; use the horizontal card rail to choose a template, load its blocks into the editor, and customize the content with slash (",
                    React.createElement("code", null, "/"),
                    ") commands, lists, and inline formatting.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample implements a Template Gallery for the Block Editor. A horizontal set of cards acts as a template picker; selecting a card loads its predefined block structure into the editor without reloading the page."),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("b", null, "Interactive cards:"),
                        " Click a card to select a template with active styling for the selected item."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Dynamic loading:"),
                        " Clicking a card calls",
                        React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#renderblocksfromjson" },
                            ' ',
                            "renderBlocksFromJson"),
                        " to populate the editor with that template's blocks."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Responsive behavior:"),
                        " The card rail scrolls when content overflows."),
                    React.createElement("li", null,
                        React.createElement("b", null, "Templates included:"),
                        " Blank Page, Project Brief, Team Decisions, Project Planning, and Meeting Notes.")),
                React.createElement("p", null, "Use this gallery to kickstart common document plan projects, record decisions, run meetings, and more then tailor the content with headings, lists, checklists, and rich inline styles."))));
    };
    return TemplateGallery;
}(sample_base_1.SampleBase));
exports.TemplateGallery = TemplateGallery;
exports.default = TemplateGallery;
