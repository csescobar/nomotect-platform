"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_blockeditor_1 = require("@syncfusion/ej2-react-blockeditor");
require("./template.css");
var data = require("./blockData.json");
var sample_base_1 = require("../common/sample-base");
var TemplateGallery = function () {
    var editorRef = (0, react_1.useRef)(null);
    var cards = data["blockTemplate"][0].page;
    var _a = (0, react_1.useState)(null), selectedCardName = _a[0], setSelectedCardName = _a[1];
    var _b = (0, react_1.useState)(null), selectedCardIcon = _b[0], setSelectedCardIcon = _b[1];
    var onEditorCreated = (0, react_1.useCallback)(function () {
        editorRef.current.focusIn();
    }, []);
    var loadPage = function (pageData) {
        setSelectedCardName(pageData.name);
        setSelectedCardIcon(pageData.icon);
        if (editorRef.current && typeof editorRef.current.renderBlocksFromJson === 'function') {
            editorRef.current.renderBlocksFromJson(pageData.blocks, true);
        }
    };
    var handleCardClick = function (page) {
        editorRef.current.focusIn();
        loadPage(page);
    };
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        loadPage(cards[1]);
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section blockeditor-template" },
            React.createElement("div", { className: "cards-wrapper" },
                React.createElement("div", { className: "fade left" }),
                React.createElement("div", { className: "cards-container" }, cards.map(function (card) { return (React.createElement("div", { key: card === null || card === void 0 ? void 0 : card.name, className: "template-card ".concat(selectedCardName === (card === null || card === void 0 ? void 0 : card.name) ? 'active' : ''), onClick: function () { return handleCardClick(card); }, title: card === null || card === void 0 ? void 0 : card.name },
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
            React.createElement(ej2_react_blockeditor_1.BlockEditorComponent, { height: "500px", ref: editorRef, id: "template-gallery-blockeditor", created: onEditorCreated })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates a Template Gallery for the Block Editor; use the horizontal card rail to choose a template, load its blocks into the editor, and customize the content with slash (/) commands, lists, and inline formatting.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This sample implements a Template Gallery for the Block Editor. A horizontal set of cards acts as a template picker; selecting a card loads its predefined block structure into the editor without reloading the page."),
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("b", null, "Interactive cards:"),
                    " Click a card to select a template with active styling for the selected item."),
                React.createElement("li", null,
                    React.createElement("b", null, "Dynamic loading:"),
                    " Clicking a card calls renderBlocksFromJson to populate the editor with that template's blocks."),
                React.createElement("li", null,
                    React.createElement("b", null, "Responsive behavior:"),
                    " The card rail scrolls when content overflows."),
                React.createElement("li", null,
                    React.createElement("b", null, "Templates included:"),
                    " Blank Page, Project Brief, Team Decisions, Project Planning, and Meeting Notes.")),
            React.createElement("p", null, "Use this gallery to kickstart common document plan projects, record decisions, run meetings, and more then tailor the content with headings, lists, checklists, and rich inline styles."))));
};
exports.default = TemplateGallery;
