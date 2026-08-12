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
exports.Overview = void 0;
var React = require("react");
var ej2_react_richtexteditor_1 = require("@syncfusion/ej2-react-richtexteditor");
var sample_base_1 = require("../common/sample-base");
var ej2_base_1 = require("@syncfusion/ej2-base");
require("./export-word.css");
var Overview = /** @class */ (function (_super) {
    __extends(Overview, _super);
    function Overview() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hostUrl = 'https://services.syncfusion.com/react/production/';
        // Rich Text Editor items list
        _this.items = [
            'Undo', 'Redo', '|',
            {
                tooltipText: "Export to Word",
                template: "<button class=\"e-tbar-btn e-control e-btn e-lib e-icon-btn\" tabindex=\"-1\" id=\"custom_tbarbtn_2\" style=\"width:100%\">\n          <span class=\"e-icons e-rte-export-doc e-btn-icon\"></span></button>",
                click: _this.exportContentToWord.bind(_this)
            },
            {
                tooltipText: "Export to PDF",
                template: "<button class=\"e-tbar-btn e-control e-btn e-lib e-icon-btn\" tabindex=\"-1\" id=\"custom_tbarbtn_3\" style=\"width:100%\">\n          <span class=\"e-icons e-rte-export-pdf e-btn-icon\"></span></button>",
                click: _this.exportContentToPDF.bind(_this)
            }, '|',
            'Bold', 'Italic', 'Underline', 'StrikeThrough', 'SuperScript', 'SubScript', '|',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'Blockquote', '|', 'NumberFormatList', 'BulletFormatList', '|',
            'Outdent', 'Indent', '|', 'CreateLink', 'Image', 'FileManager', 'Video', 'Audio', 'CreateTable', '|', 'FormatPainter', 'ClearFormat',
            '|', 'EmojiPicker', 'Print', '|',
            'SourceCode', 'FullScreen'
        ];
        _this.rteValue = "<h2 style=\"text-align: center;\">Invitation to Microsoft Webinar Meet-Up</h2><p>\n                    Dear Guest,\n                </p><p>\n                    We're thrilled to extend a special invitation to you for an exclusive Microsoft webinar meet-up, where we'll explore the latest innovations and insights driving the future of technology. As a valued member of our community, we believe this event will offer invaluable knowledge and networking opportunities.\n                </p><h2>Event Details:</h2><table class=\"e-rte-table\" style=\"width: 100%; height: 125px;\">\n                    <tbody>\n                    <tr style=\"height: 20%;\">\n                        <th class=\"\">Time:</th>\n                        <td>10:00 AM - 12:00 PM</td>\n                    </tr>\n                    <tr style=\"height: 20%;\">\n                        <th>Duration:</th>\n                        <td>2 hours</td>\n                    </tr>\n                    <tr style=\"height: 20%;\">\n                        <th>Platform:</th>\n                        <td>Microsoft Teams</td>\n                    </tr>\n                </tbody></table><p><br></p><h2>Agenda:</h2><ul>\n                    <li>Introduction to Cutting-Edge Microsoft Technologies</li>\n                    <li>Deep Dive into AI in Business: Leveraging Microsoft Azure Solutions</li>\n                    <li>Live Q&amp;A Session with Industry Experts</li>\n                    <li>Networking Opportunities with Peers and Professionals</li>\n                </ul><h2>Why Attend?</h2><ul>\n                    <li>Gain insights into the latest trends and advancements in technology.</li>\n                    <li>Interact with industry experts and expand your professional network.</li>\n                    <li>Get your questions answered in real-time during the live Q&amp;A session.</li>\n                    <li>Access exclusive resources and offers available only to webinar attendees.</li>\n                </ul><p>\n                    Feel free to invite your colleagues and peers who might benefit from this enriching experience. Simply forward this email to them or share the event details.\n                </p><p>\n                    We're looking forward to your participation and to exploring the exciting world of Microsoft technology together. Should you have any questions or require further information, please don't hesitate to contact us at <a href=\"mailto:webinar@company.com\">webinar@company.com</a>.</p><p>\n                <br></p><p>Warm regards,</p><p>John Doe<br>Event Coordinator<br>ABC Company</p>";
        _this.insertImageSettings = {
            saveUrl: _this.hostUrl + 'api/RichTextEditor/SaveFile',
            removeUrl: _this.hostUrl + 'api/RichTextEditor/DeleteFile',
            path: _this.hostUrl + 'RichTextEditor/'
        };
        //Rich Text Editor ToolbarSettings
        _this.toolbarSettings = {
            items: _this.items
        };
        return _this;
    }
    Overview.prototype.actionCompleteHandler = function (e) {
        if (e.requestType === 'SourceCode') {
            this.editor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            this.editor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        }
        else if (e.requestType === 'Preview') {
            this.editor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            this.editor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }
    };
    Overview.prototype.quickToolbarOpenHandler = function (args) {
        if (!(0, ej2_base_1.isNullOrUndefined)(args.targetElement) && args.targetElement.nodeName === 'IMG') {
            this.editor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.add('e-overlay');
            this.editor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.add('e-overlay');
        }
    };
    Overview.prototype.quickToolbarClosehandler = function (args) {
        if (!(0, ej2_base_1.isNullOrUndefined)(args.element) && args.element.classList.contains('e-rte-image-popup')) {
            this.editor.getToolbar().querySelector('#custom_tbarbtn_2').parentElement.classList.remove('e-overlay');
            this.editor.getToolbar().querySelector('#custom_tbarbtn_3').parentElement.classList.remove('e-overlay');
        }
    };
    Overview.prototype.exportContentToWord = function () {
        var rteHtmlData = this.editor.getHtml();
        var html = "<html><head></head><body>".concat(rteHtmlData, "</body></html>");
        fetch(this.hostUrl + 'api/RichTextEditor/ExportToDocx', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            var filename = 'Result.docx';
            // Create a Blob from the response and initiate the download
            return response.blob().then(function (blob) { return ({ blob: blob, filename: filename }); });
        })
            .then(function (_a) {
            var blob = _a.blob, filename = _a.filename;
            var url = window.URL.createObjectURL(blob); // Create a Blob URL from the response and initiate the download    
            var a = document.createElement('a'); // Create an anchor element
            a.href = url;
            a.download = filename;
            document.body.appendChild(a); // Append the anchor element to the document
            a.click(); // Trigger a click on the anchor element to initiate the download
            document.body.removeChild(a); // Remove the anchor element from the document
            window.URL.revokeObjectURL(url); // Revoke the object URL to free up resources
        })
            .catch(function (error) {
            console.error('Fetch error:', error);
        });
    };
    Overview.prototype.exportContentToPDF = function () {
        var rteHtmlData = this.editor.getHtml();
        var html = "<html><head></head><body>".concat(rteHtmlData, "</body></html>");
        fetch(this.hostUrl + 'api/RichTextEditor/ExportToPdf', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ html: html }) // Wrap HTML in a JSON object
        })
            .then(function (response) {
            if (!response.ok) {
                throw new Error("HTTP error! Status: ".concat(response.status));
            }
            return response.blob();
        })
            .then(function (blob) {
            var url = window.URL.createObjectURL(blob); // Create a Blob URL from the response and initiate the download
            var a = document.createElement('a'); // Create an anchor element
            a.href = url;
            a.download = 'Sample.pdf';
            document.body.appendChild(a); // Append the anchor element to the document
            a.click(); // Trigger a click on the anchor element to initiate the download
            document.body.removeChild(a); // Remove the anchor element from the document
            window.URL.revokeObjectURL(url); // Revoke the object URL to free up resources
        })
            .catch(function (error) {
            console.error('Fetch error:', error);
        });
    };
    Overview.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section', id: "rteTools" },
                React.createElement("div", { className: 'rte-control-section' },
                    React.createElement(ej2_react_richtexteditor_1.RichTextEditorComponent, { id: "toolsRTE", ref: function (richtexteditor) { _this.editor = richtexteditor; }, value: this.rteValue, toolbarSettings: this.toolbarSettings, actionComplete: this.actionCompleteHandler.bind(this), beforeQuickToolbarOpen: this.quickToolbarOpenHandler.bind(this), quickToolbarClose: this.quickToolbarClosehandler.bind(this), insertImageSettings: this.insertImageSettings, enableXhtml: true },
                        React.createElement(ej2_react_richtexteditor_1.Inject, { services: [ej2_react_richtexteditor_1.Toolbar, ej2_react_richtexteditor_1.Image, ej2_react_richtexteditor_1.Link, ej2_react_richtexteditor_1.HtmlEditor, ej2_react_richtexteditor_1.Count, ej2_react_richtexteditor_1.QuickToolbar, ej2_react_richtexteditor_1.Table, ej2_react_richtexteditor_1.PasteCleanup] })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This example illustrates how to efficiently export content in the Rich Text Editor. You can seamlessly convert your content into a PDF or Word document.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this demo, the Rich Text Editor content can be exported using the service side,"),
                React.createElement("ol", null,
                    React.createElement("li", null, "Clicking the export to PDF icon will export the content of the Rich Text Editor to a PDF document."),
                    React.createElement("li", null, "Clicking the export to Word icon will export the content of the Rich Text Editor to a Word document.")))));
    };
    return Overview;
}(sample_base_1.SampleBase));
exports.Overview = Overview;
