"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_diagrams_1 = require("@syncfusion/ej2-diagrams");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ai_umlSequenceDiagram_1 = require("../model/ai-umlSequenceDiagram");
var datasource_1 = require(".././datasource");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var react_1 = require("react");
require("./smart-umlSequenceDiagram.css");
var React = require("react");
var toolbarObj;
function AiSmartUmlSequenceDiagram() {
    var diagram;
    var dialog;
    var msgBtn1;
    var msgBtn2;
    var msgBtn3;
    var textBox;
    var sendButton;
    (0, react_1.useEffect)(function () {
        // Add keypress event listener to the document
        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && document.activeElement === textBox.element) {
                if (textBox.value !== '') {
                    dialog.hide();
                    (0, ai_umlSequenceDiagram_1.convertTextToUmlSequenceDiagram)(textBox.value, diagram);
                }
            }
        });
    }, []);
    function changeToolbarSelection(tool) {
        var items = toolbarObj.items;
        for (var i = 0; i < items.length; i++) {
            if (items[i].tooltipText === tool) {
                items[i].cssClass = 'tb-item-selected';
            }
            else {
                items[i].cssClass = '';
            }
        }
    }
    function printDiagram() {
        var options = {};
        options.mode = 'Download';
        options.region = 'Content';
        options.multiplePage = diagram.pageSettings.multiplePage;
        options.pageHeight = diagram.pageSettings.height;
        options.pageWidth = diagram.pageSettings.width;
        diagram.print(options);
    }
    function toolbarClick(args) {
        var item = args.item.tooltipText;
        switch (item) {
            case 'Select Tool':
                diagram.clearSelection();
                diagram.tool = ej2_react_diagrams_1.DiagramTools.Default;
                changeToolbarSelection('Select Tool');
                break;
            case 'Pan Tool':
                diagram.clearSelection();
                diagram.tool = ej2_react_diagrams_1.DiagramTools.ZoomPan;
                changeToolbarSelection('Pan Tool');
                break;
            case 'New Diagram':
                diagram.clear();
                break;
            case 'Print Diagram':
                printDiagram();
                break;
            case 'Save Diagram':
                download(diagram.saveDiagram());
                break;
            case 'Open Diagram':
                document.getElementsByClassName('e-file-select-wrap')[0]
                    .querySelector('button')
                    .click();
                break;
        }
        diagram.dataBind();
    }
    function zoomChange(args) {
        var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
        var currentZoom = diagram.scrollSettings.currentZoom;
        var zoomFactor;
        switch (args.item.text) {
            case 'Zoom In':
                diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });
                break;
            case 'Zoom Out':
                diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });
                break;
            case 'Zoom to Fit':
                diagram.fitToPage();
                break;
            case 'Zoom to 50%':
                zoomFactor = 0.5 / currentZoom - 1;
                diagram.zoomTo({ zoomFactor: zoomFactor });
                break;
            case 'Zoom to 100%':
                zoomFactor = 1 / currentZoom - 1;
                diagram.zoomTo({ zoomFactor: zoomFactor });
                break;
            case 'Zoom to 200%':
                zoomFactor = 2 / currentZoom - 1;
                diagram.zoomTo({ zoomFactor: zoomFactor });
                break;
        }
        zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + '%';
    }
    //Export the diagraming object based on the format.
    function onselectExport(args) {
        var exportOptions = {};
        exportOptions.format = args.item.text;
        exportOptions.mode = 'Download';
        exportOptions.region = 'PageSettings';
        exportOptions.fileName = 'Export';
        exportOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
        diagram.exportDiagram(exportOptions);
    }
    function onUploadSuccess(args) {
        var file = args.file;
        var rawFile = file.rawFile;
        var reader = new FileReader();
        reader.readAsText(rawFile);
        reader.onloadend = loadDiagram;
    }
    function loadDiagram(event) {
        diagram.model = { fragments: [], messages: [], participants: [] };
        diagram.loadDiagram(event.target.result);
        diagram.fitToPage();
    }
    function download(data) {
        if (window.navigator.msSaveBlob) {
            var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
            window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
        }
        else {
            var dataString = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
            var ele = document.createElement('a');
            ele.href = dataString;
            ele.download = 'Diagram.json';
            document.body.appendChild(ele);
            ele.click();
            ele.remove();
        }
    }
    function onTextBoxChange(args) {
        if (args.value !== '') {
            sendButton.disabled = false;
        }
        else {
            sendButton.disabled = true;
        }
    }
    var dialogContent = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("p", { style: { marginBottom: '10px', fontWeight: 'bold' } }, "Suggested Prompts"),
            React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: function (btn1) { return msgBtn1 = btn1; }, onClick: function () {
                    dialog.hide();
                    (0, ai_umlSequenceDiagram_1.convertTextToUmlSequenceDiagram)('Sequence Diagram for ATM Transaction Process', diagram);
                }, id: "btn1", style: { flex: 1, overflow: 'visible', borderRadius: '8px', marginBottom: '10px' } }, "Sequence Diagram for ATM Transaction Process"),
            React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: function (btn2) { return msgBtn2 = btn2; }, id: "btn2", style: { flex: 1, overflow: 'visible', borderRadius: '8px', marginBottom: '10px' }, onClick: function () {
                    dialog.hide();
                    (0, ai_umlSequenceDiagram_1.convertTextToUmlSequenceDiagram)('Sequence Diagram for User Authentication and Authorization', diagram);
                } }, "Sequence Diagram for User Authentication and Authorization"),
            React.createElement(ej2_react_buttons_1.ButtonComponent, { ref: function (btn3) { return msgBtn3 = btn3; }, onClick: function () {
                    dialog.hide();
                    (0, ai_umlSequenceDiagram_1.convertTextToUmlSequenceDiagram)('Sequence Diagram for Medical Appointment Scheduling', diagram);
                }, id: "btn3", style: { flex: 1, overflow: 'visible', borderRadius: '8px', marginBottom: '10px' } }, "Sequence Diagram for Medical Appointment Scheduling"),
            React.createElement("div", { style: { display: 'flex', alignItems: 'center', marginTop: '20px' } },
                React.createElement(ej2_react_inputs_1.TextBoxComponent, { type: "text", id: "textBox", className: "db-openai-textbox", style: { flex: 1 }, ref: function (textboxObj) { return textBox = textboxObj; }, placeholder: 'Please enter your prompt here...', width: 450, input: onTextBoxChange }),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "diagram-db-send", ref: function (btn) { return sendButton = btn; }, onClick: function () {
                        if (textBox.value) {
                            dialog.hide();
                            (0, ai_umlSequenceDiagram_1.convertTextToUmlSequenceDiagram)(textBox.value, diagram);
                        }
                    }, iconCss: 'e-icons e-send', isPrimary: true, disabled: false, style: { marginLeft: '5px', height: '32px', width: '32px', paddingTop: '4px', paddingLeft: '6px' } }))));
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("link", { href: "https://ej2.syncfusion.com/javascript/demos/src/diagram/styles/diagram-common.css", rel: "stylesheet" }),
        React.createElement("div", { className: "main" },
            React.createElement("div", { className: "diagram-upload-file" },
                React.createElement(ej2_react_inputs_1.UploaderComponent, { type: "file", id: "fileupload", name: "UploadFiles", asyncSettings: {
                        saveUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Save',
                        removeUrl: 'https://services.syncfusion.com/js/production/api/FileUploader/Remove'
                    }, success: onUploadSuccess, showFileList: false })),
            React.createElement("div", { className: "db-toolbar-editor" },
                React.createElement("div", { className: "db-toolbar-container" },
                    React.createElement(ej2_react_navigations_1.ToolbarComponent, { id: "toolbarEditor", ref: function (toolbarEditor) { return toolbarObj = toolbarEditor; }, clicked: toolbarClick, width: '100%', height: 49 },
                        React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-circle-add', tooltipText: 'New Diagram' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-folder-open', tooltipText: 'Open Diagram' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-save', tooltipText: 'Save Diagram' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-print e-icons', tooltipText: 'Print Diagram' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { type: 'Input', tooltipText: 'Export Diagram', template: function () { return React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { id: "exportBtn", style: { width: '100%' }, items: datasource_1.exportItems, iconCss: 'a-e-ddb-icons e-export', select: function (args) { onselectExport(args); } }); } }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-pan e-icons', tooltipText: 'Pan Tool', cssClass: 'tb-item-start pan-item' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-mouse-pointer e-icons', tooltipText: 'Select Tool', cssClass: 'tb-item-middle tb-item-selected' }),
                            React.createElement(ej2_react_navigations_1.ItemDirective, { cssClass: 'tb-item-end tb-zoom-dropdown-btn', align: 'Right', template: function () { return React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { id: "btnZoomIncrement", items: datasource_1.zoomMenuItems, content: Math.round(diagram.scrollSettings.currentZoom * 100) + ' %', select: zoomChange }); } }))))),
            React.createElement("div", { id: "uml-aidiagarm", style: { marginTop: '5px', marginLeft: '5px', marginRight: '5px', border: '1px solid #b0b0b0' } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { ref: function (diagramObj) { return diagram = diagramObj; }, id: "diagram", width: "100%", height: "900px", tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, model: datasource_1.sequenceModel, getNodeDefaults: function (node) {
                        // participant node
                        if (node.data instanceof ej2_diagrams_1.UmlSequenceParticipant) {
                            if (!(node.data.isActor)) {
                                if (node.annotations && node.annotations[0] && node.annotations[0].style) {
                                    node.annotations[0].style.color = 'white';
                                }
                            }
                        } // fragment node
                        else if (node.data instanceof ej2_diagrams_1.UmlSequenceFragment) {
                            node.style = { strokeColor: 'cornflowerblue' };
                        }
                    }, scrollChange: function (args) {
                        if (args.panState !== 'Start') {
                            var zoomCurrentValue = document.getElementById("btnZoomIncrement").ej2_instances[0];
                            zoomCurrentValue.content = Math.round(diagram.scrollSettings.currentZoom * 100) + ' %';
                        }
                    } },
                    React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.PrintAndExport] })))),
        React.createElement("div", { id: 'container' },
            React.createElement(ej2_react_popups_1.DialogComponent, { ref: function (dialogObj) { return dialog = dialogObj; }, id: 'dialog', header: '<span class="e-icons e-assistview-icon" style="color: black;width:20px; font-size: 16px;"></span> AI Assist', showCloseIcon: true, isModal: true, content: dialogContent, target: '#uml-aidiagarm', width: '540px', visible: false, height: '310px' })),
        React.createElement(ej2_react_buttons_1.FabComponent, { id: "ai-assist", isPrimary: true, content: 'AI Assist', iconCss: 'e-icons e-assistview-icon', target: "#diagram", onClick: function () { dialog.show(); } }),
        React.createElement("div", { id: "loadingContainer", className: "loading-container" },
            React.createElement("div", { className: "loading-indicator" }),
            React.createElement("div", { className: "loading-text" }, "Generating Sequence Diagram..."))));
}
exports.default = AiSmartUmlSequenceDiagram;
