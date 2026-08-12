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
exports.CustomContextMenu = void 0;
var React = require("react");
var ej2_react_pdfviewer_1 = require("@syncfusion/ej2-react-pdfviewer");
var sample_base_1 = require("../common/sample-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./pdf.component.css");
var CustomContextMenu = /** @class */ (function (_super) {
    __extends(CustomContextMenu, _super);
    function CustomContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menuItems = [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-de-ctnr-find'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Fields',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Fields',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ];
        _this.change = function (args) {
            if (args.checked) {
                _this.viewer.serviceUrl = '';
            }
            else {
                _this.viewer.serviceUrl = 'https://services.syncfusion.com/react/production/api/pdfviewer';
            }
            _this.viewer.dataBind();
            _this.viewer.load(_this.viewer.documentPath, null);
        };
        _this.documentLoad = function (args) {
            _this.viewer.addCustomMenu(_this.menuItems, false, false);
        };
        _this.customContextMenuSelect = function (args) {
            switch (args.id) {
                case 'search_in_google':
                    for (var i = 0; i < _this.viewer.textSelectionModule.selectionRangeArray.length; i++) {
                        var content = _this.viewer.textSelectionModule.selectionRangeArray[i].textContent;
                        if ((_this.viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
                            window.open('http://google.com/search?q=' + content);
                        }
                    }
                    break;
                case 'lock_annotation':
                    _this.lockAnnotations(args);
                    break;
                case 'unlock_annotation':
                    _this.unlockAnnotations(args);
                    break;
                case 'read_only_true':
                    _this.setReadOnlyTrue(args);
                    break;
                case 'read_only_false':
                    _this.setReadOnlyFalse(args);
                    break;
                default:
                    break;
            }
        };
        _this.customContextMenuBeforeOpen = function (args) {
            for (var i = 0; i < args.ids.length; i++) {
                var search = document.getElementById(args.ids[i]);
                if (search) {
                    search.style.display = 'none';
                    if (args.ids[i] === 'search_in_google' && (_this.viewer.textSelectionModule) && _this.viewer.textSelectionModule.isTextSelection) {
                        search.style.display = 'block';
                    }
                    else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
                        var isLockOption = args.ids[i] === "lock_annotation";
                        for (var j = 0; j < _this.viewer.selectedItems.annotations.length; j++) {
                            var selectedAnnotation = _this.viewer.selectedItems.annotations[j];
                            if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                                var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                                    (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                                search.style.display = shouldDisplay ? 'block' : 'none';
                            }
                        }
                    }
                    else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && _this.viewer.selectedItems.formFields.length !== 0) {
                        var isReadOnlyOption = args.ids[i] === "read_only_true";
                        for (var j = 0; j < _this.viewer.selectedItems.formFields.length; j++) {
                            var selectedFormFields = _this.viewer.selectedItems.formFields[j];
                            if (selectedFormFields) {
                                var selectedFormField = _this.viewer.selectedItems.formFields[j].isReadonly;
                                var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                                search.style.display = displayMenu ? 'block' : 'none';
                            }
                        }
                    }
                    else if (args.ids[i] === 'formfield properties' && _this.viewer.selectedItems.formFields.length !== 0) {
                        search.style.display = 'block';
                    }
                }
            }
        };
        _this.lockAnnotations = function (args) {
            for (var i = 0; i < _this.viewer.annotationCollection.length; i++) {
                if (_this.viewer.annotationCollection[i].uniqueKey === _this.viewer.selectedItems.annotations[0].id) {
                    _this.viewer.annotationCollection[i].annotationSettings.isLock = true;
                    _this.viewer.annotationCollection[i].isCommentLock = true;
                    _this.viewer.annotation.editAnnotation(_this.viewer.annotationCollection[i]);
                }
                args.cancel = false;
            }
        };
        _this.unlockAnnotations = function (args) {
            for (var i = 0; i < _this.viewer.annotationCollection.length; i++) {
                if (_this.viewer.annotationCollection[i].uniqueKey === _this.viewer.selectedItems.annotations[0].id) {
                    _this.viewer.annotationCollection[i].annotationSettings.isLock = false;
                    _this.viewer.annotationCollection[i].isCommentLock = false;
                    _this.viewer.annotation.editAnnotation(_this.viewer.annotationCollection[i]);
                }
                args.cancel = false;
            }
        };
        _this.setReadOnlyTrue = function (args) {
            var selectedFormFields = _this.viewer.selectedItems.formFields;
            for (var i = 0; i < selectedFormFields.length; i++) {
                var selectedFormField = selectedFormFields[i];
                if (selectedFormField) {
                    _this.viewer.formDesignerModule.updateFormField(selectedFormField, {
                        isReadOnly: true,
                    });
                }
                args.cancel = false;
            }
        };
        _this.setReadOnlyFalse = function (args) {
            var selectedFormFields = _this.viewer.selectedItems.formFields;
            for (var i = 0; i < selectedFormFields.length; i++) {
                var selectedFormField = selectedFormFields[i];
                if (selectedFormField) {
                    _this.viewer.formDesignerModule.updateFormField(selectedFormField, {
                        isReadOnly: false,
                    });
                }
                args.cancel = false;
            }
        };
        _this.contextmenuHelper = function (args) {
            _this.viewer.addCustomMenu(_this.menuItems, _this.enableObj.checked, _this.positionObj.checked);
        };
        return _this;
    }
    CustomContextMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'col-lg-9 control-section pdfviewer-control-section' },
                React.createElement("div", { className: "flex-container" },
                    React.createElement("label", { htmlFor: "checked", className: "switchLabel" }, " Standalone PDF Viewer "),
                    React.createElement("div", { className: "e-message render-mode-info" },
                        React.createElement("span", { className: "e-msg-icon render-mode-info-icon", title: "Turn OFF to render the PDF Viewer as server-backed" })),
                    React.createElement(ej2_react_buttons_1.SwitchComponent, { cssClass: "buttonSwitch", id: "checked", change: this.change, checked: true })),
                React.createElement(ej2_react_pdfviewer_1.PdfViewerComponent, { ref: function (scope) { _this.viewer = scope; }, id: "container", documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf", resourceUrl: "https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib", documentLoad: this.documentLoad, customContextMenuSelect: this.customContextMenuSelect, customContextMenuBeforeOpen: this.customContextMenuBeforeOpen, style: { 'height': '640px' } },
                    React.createElement(ej2_react_pdfviewer_1.Inject, { services: [ej2_react_pdfviewer_1.Toolbar, ej2_react_pdfviewer_1.Magnification, ej2_react_pdfviewer_1.Navigation, ej2_react_pdfviewer_1.LinkAnnotation, ej2_react_pdfviewer_1.BookmarkView, ej2_react_pdfviewer_1.ThumbnailView, ej2_react_pdfviewer_1.Print, ej2_react_pdfviewer_1.TextSelection, ej2_react_pdfviewer_1.TextSearch, ej2_react_pdfviewer_1.Annotation, ej2_react_pdfviewer_1.FormFields, ej2_react_pdfviewer_1.FormDesigner, ej2_react_pdfviewer_1.PageOrganizer] }))),
            React.createElement("div", { className: 'col-lg-3 property-section-pdfviewer' },
                React.createElement("div", { className: "pdfviewer-property-container" },
                    React.createElement("h5", null,
                        React.createElement("b", null, "Properties"))),
                React.createElement("table", null,
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", { className: 'pdfviewer-contextmenu-checkbox-label' }, "Hide Default Context Menu"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (scope) { _this.enableObj = scope; }, id: "hide-default-context-menu", change: this.contextmenuHelper }))),
                        React.createElement("tr", null,
                            React.createElement("td", { className: 'pdfviewer-contextmenu-checkbox-label' }, "Add Custom option at bottom"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_buttons_1.CheckBoxComponent, { ref: function (scope) { _this.positionObj = scope; }, id: "show-custom-menu-bottom", change: this.contextmenuHelper })))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "Explore how to tailor context menus for PDF pages, annotations, and form fields in this sample.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This customization empowers users to add new context menus on PDF pages, annotations, and form fields. In this sample:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Selecting text on pages reveals a custom context menu, enabling users to search for the selected text on Google."),
                    React.createElement("li", null, "Annotations and Form fields can be locked directly from the context menu."),
                    React.createElement("li", null, "Customization is achieved using the following APIs:"),
                    React.createElement("ul", null,
                        React.createElement("li", null,
                            "Customize the context menu by selectively displaying custom options, hiding existing menu items, controlled by boolean parameters in the ",
                            React.createElement("code", null, "addCustomMenu()"),
                            " method."),
                        React.createElement("li", null,
                            "Position custom menu items either above or below existing ones, adjusting boolean parameters in the ",
                            React.createElement("code", null, "addCustomMenu()"),
                            " method."),
                        React.createElement("li", null,
                            "Tailor the visibility of custom menu items using the ",
                            React.createElement("code", null, "customContextMenuBeforeOpen"),
                            " event."),
                        React.createElement("li", null,
                            "Implement specific functionalities for custom options through the ",
                            React.createElement("code", null, "customContextMenuSelect"),
                            " event."))),
                React.createElement("p", null,
                    "More information on the PDF Viewer instantiation can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started" }, "documentation section"),
                    "."))));
    };
    return CustomContextMenu;
}(sample_base_1.SampleBase));
exports.CustomContextMenu = CustomContextMenu;
