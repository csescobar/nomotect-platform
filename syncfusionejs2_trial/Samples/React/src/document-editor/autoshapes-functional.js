"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_documenteditor_1 = require("@syncfusion/ej2-react-documenteditor");
var title_bar_1 = require("./title-bar");
require("./default.component.css");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
ej2_react_documenteditor_1.DocumentEditorContainerComponent.Inject(ej2_react_documenteditor_1.Toolbar, ej2_react_documenteditor_1.Ribbon);
// tslint:disable:max-line-length
var AutoShapesComponent = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        rendereComplete();
    }, []);
    var hostUrl = "https://services.syncfusion.com/react/production/api/documenteditor/";
    var container = (0, react_1.useRef)(null);
    var titleBar;
    var onLoadDefault = function () {
        // tslint:disable
        var defaultDocument = { "sfdt": "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" };
        // tslint:enable
        container.current.documentEditor.open(JSON.stringify(defaultDocument));
        container.current.documentEditor.documentName = "Auto Shapes";
        container.current.documentEditorSettings.showRuler = true;
        titleBar.updateDocumentTitle();
        container.current.documentChange = function () {
            titleBar.updateDocumentTitle();
            container.current.documentEditor.focusIn();
        };
    };
    var rendereComplete = function () {
        window.onbeforeunload = function () {
            return "Want to save your changes?";
        };
        container.current.documentEditor.pageOutline = "#E0E0E0";
        container.current.documentEditor.acceptTab = true;
        container.current.documentEditor.resize();
        titleBar = new title_bar_1.TitleBar(document.getElementById("documenteditor_titlebar"), container.current.documentEditor, true);
        onLoadDefault();
        titleBar.showButtons(false);
    };
    var change = function (args) {
        if (args.checked) {
            container.current.toolbarMode = 'Ribbon';
        }
        else {
            container.current.toolbarMode = 'Toolbar';
        }
        titleBar.showButtons(container.current.toolbarMode != 'Ribbon');
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "flex-container" },
                React.createElement("label", { className: "switchLabel", htmlFor: "toolbarSwitch" }, "Ribbon UI"),
                React.createElement("div", { className: "e-message render-mode-info" },
                    React.createElement("span", { className: "e-msg-icon render-mode-info-icon", title: "Turn OFF to switch from Ribbon to toolbar UI" })),
                React.createElement(ej2_react_buttons_1.SwitchComponent, { cssClass: "buttonSwitch", id: "toolbarSwitch", change: change, checked: true })),
            React.createElement("div", { id: "documenteditor_titlebar", className: "e-de-ctn-title" }),
            React.createElement("div", { id: "documenteditor_container_body" },
                React.createElement(ej2_react_documenteditor_1.DocumentEditorContainerComponent, { id: "container", ref: container, style: { display: "block" }, height: "590px", toolbarMode: "Ribbon", serviceUrl: hostUrl, enableToolbar: true, locale: "en-US" }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample shows the preservation of auto shapes and group shapes in Document Editor.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "With Document Editor, you can view the auto shapes and group shapes present in your Word Document."),
            React.createElement("p", null, "List of shapes preserved:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Lines"),
                React.createElement("li", null, "Rectangles"),
                React.createElement("li", null, "Basic shapes"),
                React.createElement("li", null, "Block arrows"),
                React.createElement("li", null, "Equation shapes"),
                React.createElement("li", null, "Flowcharts"),
                React.createElement("li", null, "Stars and banners")),
            React.createElement("p", null,
                "More information about the Document Editor features can be found in this",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/document-editor/shapes" }, " documentation section.")))));
};
exports.default = AutoShapesComponent;
