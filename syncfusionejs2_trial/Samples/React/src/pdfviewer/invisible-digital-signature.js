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
exports.InvisibleDigitalSignature = void 0;
var React = require("react");
var ej2_react_pdfviewer_1 = require("@syncfusion/ej2-react-pdfviewer");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var sample_base_1 = require("../common/sample-base");
require("./pdf.component.css");
var InvisibleDigitalSignature = /** @class */ (function (_super) {
    __extends(InvisibleDigitalSignature, _super);
    function InvisibleDigitalSignature(props) {
        var _this = _super.call(this, props) || this;
        _this.fileName = '';
        //Specifies the visibility of the complete signing.
        _this.buttonVisiblity = true;
        //Specifies the visibility of the download icon
        _this.downloadVisiblity = true;
        _this.msgWarning = "The document has been digitally signed and at least one signature has problem ";
        _this.msgError = "The document has been digitally signed, but it has been modified since it was signed and at least one signature is invalid";
        _this.msgSuccess = "The document has been digitally signed and all the signatures are valid";
        // Specifies whether the document has a digital signature or not.
        _this.hasDigitalSignature = false;
        //This method will get invoked while clicking the toolbar items.
        _this.clickHandler = function (args) {
            switch (args.item.id) {
                case 'file_Open':
                    document.getElementById('fileUpload').click();
                    break;
                case 'pdfviewer_sign':
                    var url = "https://services.syncfusion.com/react/production/api/pdfviewer/AddSignature";
                    var proxy = _this;
                    _this.viewer.saveAsBlob().then(function (value) {
                        var reader = new FileReader();
                        reader.readAsDataURL(value);
                        reader.onload = function (e) {
                            var base64String = e.target ? e.target.result : null;
                            var xhr = new XMLHttpRequest();
                            xhr.open('POST', url, true);
                            xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
                            var requestData = JSON.stringify({ base64String: base64String });
                            xhr.onload = function () {
                                if (xhr.status === 200) {
                                    proxy.documentData = xhr.responseText;
                                    proxy.viewer.load(xhr.responseText, null);
                                    proxy.toolbar.items[1].disabled = true;
                                    proxy.toolbar.items[2].disabled = false;
                                    proxy.viewer.fileName = proxy.fileName;
                                    proxy.viewer.downloadFileName = proxy.fileName;
                                }
                                else {
                                    console.error('Error in AddSignature API:', xhr.statusText);
                                }
                            };
                            xhr.onerror = function () {
                                console.error('Error reading Blob as Base64.', xhr.statusText);
                            };
                            xhr.send(requestData);
                        };
                    }).catch(function (error) {
                        console.error('Error saving Blob:', error);
                    });
                    break;
                //Downloads the PDF document being loaded in the PDFViewer.
                case 'download':
                    _this.viewer.download();
                    break;
            }
        };
        _this.documentLoaded = function (args) {
            _this.fileName = args.documentName;
            var postData = {
                documentData: _this.documentData
            };
            var options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(postData)
            };
            var apiUrl = 'https://services.syncfusion.com/react/production/api/pdfviewer/ValidateSignature';
            fetch(apiUrl, options)
                .then(function (response) { return response.json(); })
                .then(function (body) {
                if (body.successVisible || body.warningVisible || body.errorVisible)
                    _this.toolbar.items[1].disabled = true;
                if (!body.downloadVisibility)
                    _this.toolbar.items[2].disabled = false;
                if ((body.successVisible)) {
                    setTimeout(function () {
                        _this.msgSuccess = body.message;
                        _this.setState({
                            successVisible: true
                        });
                    }, 1000);
                    setTimeout(function () {
                        _this.setState({
                            successVisible: false
                        });
                    }, 5000);
                }
                if ((body.warningVisible)) {
                    _this.msgWarning = body.message;
                    _this.setState({
                        warningVisible: true
                    });
                }
                if (body.errorVisible) {
                    _this.msgError = body.message;
                    _this.setState({
                        errorVisible: true
                    });
                }
            });
        };
        _this.readFile = function (evt) {
            var uploadedFiles = evt.target.files;
            var uploadedFile = uploadedFiles[0];
            _this.fileName = uploadedFile.name;
            var reader = new FileReader();
            reader.readAsDataURL(uploadedFile);
            var viewer = _this.viewer;
            var uploadedFileName = _this.fileName;
            var proxy = _this;
            reader.onload = function (e) {
                var fileName = '';
                var documentData;
                proxy.toolbar.items[2].disabled = true;
                var uploadedFileUrl = e.currentTarget.result;
                proxy.documentData = uploadedFileUrl;
                viewer.load(uploadedFileUrl, null);
                viewer.fileName = fileName;
                viewer.downloadFileName = fileName;
            };
        };
        //Triggers while adding the signature in signature field.
        _this.addSignature = function () {
            var field;
            // To retrieve the form fields in the loaded PDF Document.
            field = _this.viewer.retrieveFormFields();
            var signatureFieldCount = 0;
            var signaturesCount = 0;
            for (var i = 0; i < field.Count; i++) {
                if (field[i].Type.ToString() === "SignatureField") {
                    signatureFieldCount++;
                }
                if (field[i].Value !== "" && field[i].Value !== null && field[i].Type.ToString() === "SignatureField") {
                    signaturesCount++;
                }
            }
            // Checks whether all the signature fields are signed or not.
            if (signatureFieldCount === signaturesCount) {
                // Checks whether the document has a digital signature or not.
                if (!_this.hasDigitalSignature) {
                    _this.buttonVisiblity = false;
                    _this.toolbar.items[1].disabled = false;
                }
            }
        };
        _this.state = {
            successVisible: false,
            errorVisible: false,
            warningVisible: false
        };
        return _this;
    }
    InvisibleDigitalSignature.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", null,
                    React.createElement("div", { className: 'e-pdf-toolbar' },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { ref: function (scope) { _this.toolbar = scope; }, clicked: this.clickHandler.bind(this) },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-folder-open', id: 'file_Open', tooltipText: 'Open', cssClass: 'e-pv-button-container' }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { text: "Complete Signing", id: 'pdfviewer_sign', tooltipText: 'Finish Signing', disabled: this.buttonVisiblity, align: "Right" }),
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-download', tooltipText: "Download", id: 'download', cssClass: 'e-pv-download-document-container', disabled: this.downloadVisiblity, align: "Right" })))),
                    React.createElement("div", null,
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_success", content: this.msgSuccess, visible: this.state.successVisible, severity: "Success" }),
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_warning", content: this.msgWarning, visible: this.state.warningVisible, severity: "Warning" }),
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_error", content: this.msgError, visible: this.state.errorVisible, severity: "Error" })),
                    React.createElement(ej2_react_pdfviewer_1.PdfViewerComponent, { id: "container", ref: function (scope) { _this.viewer = scope; }, enableToolbar: false, enableNavigationToolbar: false, documentLoad: this.documentLoaded, enableAnnotationToolbar: false, documentPath: "https://cdn.syncfusion.com/content/pdf/InvisibleDigitalSignature.pdf", resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib', addSignature: this.addSignature, style: { 'display': 'block', 'height': '640px' } },
                        React.createElement(ej2_react_pdfviewer_1.Inject, { services: [ej2_react_pdfviewer_1.Magnification, ej2_react_pdfviewer_1.FormFields, ej2_react_pdfviewer_1.FormDesigner, ej2_react_pdfviewer_1.Navigation, ej2_react_pdfviewer_1.LinkAnnotation, ej2_react_pdfviewer_1.BookmarkView, ej2_react_pdfviewer_1.PageOrganizer,
                                ej2_react_pdfviewer_1.ThumbnailView, ej2_react_pdfviewer_1.Annotation, ej2_react_pdfviewer_1.Print, ej2_react_pdfviewer_1.TextSearch] })),
                    React.createElement("input", { type: "file", id: "fileUpload", accept: ".pdf", onChange: this.readFile.bind(this), style: { 'display': 'block', 'visibility': 'hidden', 'width': '0', 'height': '0' } }))),
            React.createElement("div", { id: 'sample' },
                React.createElement("div", { id: 'loader' }, "Loading....")),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how to digitally sign a PDF document from code behind using Syncfusion's PDF Viewer and PDF Library")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This sample operates correctly when a signature field is present in the PDF document. If all signature fields are signed, the \"Finish Signing\" button becomes enabled. Clicking this button adds a digital signature certificate programmatically and reloads the digitally signed document into the viewer."),
                React.createElement("br", null),
                React.createElement("p", null, "The below are the messages shown in the respective scenarios:"),
                React.createElement("br", null),
                React.createElement("p", null, "1. The document has been digitally signed, but it has been modified since it was signed and at least one signature is invalid."),
                React.createElement("ul", null,
                    React.createElement("li", null, "This message appears if the digitally signed document is edited after reloading.")),
                React.createElement("p", null, "2. The document has been digitally signed and at least one signature has a problem."),
                React.createElement("ul", null,
                    React.createElement("li", null, "This message is shown if the digital signature is not registered on the machine and is not in the trusted list. Adding the certificate to the trusted list is necessary.")),
                React.createElement("p", null, "3. The document has been digitally signed and all the signatures are valid."),
                React.createElement("ul", null,
                    React.createElement("li", null, "This message indicates that the document is digitally signed without any issues.")),
                React.createElement("p", null,
                    "More information on the PDF Viewer instantiation can be found on this",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started" }, "documentation section "),
                    "."))));
    };
    return InvisibleDigitalSignature;
}(sample_base_1.SampleBase));
exports.InvisibleDigitalSignature = InvisibleDigitalSignature;
