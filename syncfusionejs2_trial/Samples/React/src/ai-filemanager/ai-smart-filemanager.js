"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
require("./smart-filemanager.css");
var react_1 = require("react");
function SmartFileManager() {
    var dialog;
    var fileChips;
    var aiChips;
    var fileManagerObj;
    var isVisible = false;
    var _a = (0, react_1.useState)(true), isDisabled = _a[0], setDisabled = _a[1];
    var hostUrl = 'https://filemanageraiservice.azurewebsites.net/';
    var toolbarItems = [
        { name: 'NewFolder' },
        { name: 'Cut' },
        { name: 'Copy' },
        { name: 'Paste' },
        { name: 'Delete' },
        { name: 'Rename' },
        { name: 'SortBy' },
        { name: 'Refresh' },
        { name: 'Selection' },
        { name: 'View' },
        { name: 'Details' },
        { text: 'Quick Summary', name: 'Quick Summary', prefixIcon: 'e-icons e-print-layout', tooltipText: 'Get a quick summary of the selected file using AI', visible: false },
    ];
    function dialogOverlay() {
        dialog.hide();
        dialog.visible = false;
        dialog.content = "<span>Loading...</span>";
    }
    function toolbarClick(args) {
        if (args.item.text == 'Quick Summary') {
            if (args.fileDetails[0].permission == null) {
                Summarize(args.fileDetails[0]);
            }
            else if (args.fileDetails[0].permission != null && !args.fileDetails[0].permission.read) {
                dialog.visible = true;
                dialog.content = "<span>" + args.fileDetails[0].name + " is not accessible. You do not have permission to read this file." + "</span>";
            }
        }
    }
    function onFileOpen(args) {
        var file = args.fileDetails;
        if (file != null && file.isFile && ['.txt', '.docx', '.pdf'].includes(file.type)) {
            if (file.permission == null) {
                Summarize(file);
            }
            else {
                dialog.visible = true;
                dialog.content = "<span>" + args.fileDetails.name + " is not accessible. You do not have permission to read this file." + "</span>";
            }
        }
        else {
            dialog.visible = false;
            fileManagerObj.toolbarItems.filter(function (items) { return items.name == 'Quick Summary'; })[0].visible = false;
        }
    }
    function fileSelected(args) {
        var file = args.fileDetails;
        if (['.txt', '.docx', '.pdf'].includes(file.type) && fileManagerObj.selectedItems.length == 1) {
            fileManagerObj.toolbarItems.filter(function (items) { return items.name == 'Quick Summary'; })[0].visible = true;
        }
        else {
            fileManagerObj.toolbarItems.filter(function (items) { return items.name == 'Quick Summary'; })[0].visible = false;
        }
    }
    function menuOpen(args) {
        if (args.items) {
            var manageTagsItem = 'Manage Tags';
            if (args.menuType === 'file' && fileManagerObj.selectedItems.length > 1) {
                if (!fileManagerObj.contextmenuModule.disabledItems.includes(manageTagsItem)) {
                    fileManagerObj.contextmenuModule.disabledItems.push(manageTagsItem);
                }
            }
            else {
                var index = fileManagerObj.contextmenuModule.disabledItems.indexOf(manageTagsItem);
                if (index !== -1) {
                    fileManagerObj.contextmenuModule.disabledItems.splice(index, 1);
                }
            }
            for (var i = 0; i < args.items.length; i++) {
                if (args.items[i].id === fileManagerObj.element.id + '_cm_managetags') {
                    args.items[i].iconCss = 'e-icons e-bookmark';
                }
            }
        }
    }
    function menuClick(args) {
        if (args.item && args.item.text === 'Manage Tags') {
            manageTags(args);
        }
    }
    function manageTags(args) {
        document.querySelector('.filemanager_container #tags').style.display = '';
        document.querySelector('.filemanager_container #emptyAiTag').style.display = '';
        var ajax = new ej2_base_1.Ajax({
            url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/GetTagsFromFile',
            type: 'POST',
            data: JSON.stringify(args.fileDetails[0]),
            contentType: 'application/json',
            onSuccess: function (response) {
                fileChips.chips = JSON.parse(response);
                if (fileChips.chips.length == 0) {
                    document.querySelector('.filemanager_container #emptyTag').style.display = '';
                }
                else {
                    document.querySelector('.filemanager_container #emptyTag').style.display = 'none';
                }
            },
            onFailure: function (error) {
                console.log(error);
            }
        });
        ajax.send();
    }
    function closeTagContainer() {
        document.querySelector('.filemanager_container #tags').style.display = 'none';
        fileChips.chips = [];
        aiChips.chips = [];
        setDisabled(true);
    }
    function fileSelection() {
        closeTagContainer();
    }
    function onSend(args) {
        if (args.action == 'search') {
            var customData = JSON.parse(args.ajaxSettings.data);
            customData.isTagSearch = true;
            args.ajaxSettings.data = JSON.stringify(customData);
        }
    }
    function saveClick() {
        var fileObj = document.getElementById('smartfilemanager').ej2_instances[0];
        var data = fileObj.getSelectedFiles();
        data[0].tags = aiChips.chips;
        var ajax = new ej2_base_1.Ajax({
            url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/SaveTagsToFile',
            type: 'POST',
            data: JSON.stringify(data[0]),
            contentType: 'application/json',
            onSuccess: function (response) {
                fileChips.chips = JSON.parse(response);
                document.querySelector('.filemanager_container #emptyTag').style.display = 'none';
                document.querySelector('.filemanager_container #emptyAiTag').style.display = '';
                setDisabled(true);
                aiChips.chips = [];
            },
            onFailure: function (error) {
                console.log(error);
            }
        });
        ajax.send();
    }
    var generateTags = function () {
        var fileObj = document.getElementById('smartfilemanager').ej2_instances[0];
        var data = fileObj.getSelectedFiles();
        var prompt = "Generate tags for the following content.Provide the tags in ordered list format without any undefined or irrelevant values:\n\n";
        var fileContent = "File Named as " + data[0].name;
        var inputData = prompt + fileContent;
        var aiOutput = window.getAzureChatAIRequest({ messages: [{ role: 'user', content: inputData }] });
        aiOutput.then(function (result) {
            setDisabled(false);
            var tagsArray = result
                .split(/\r\n|\n\n|\n/)
                .filter(function (tag) { return tag.trim() !== ''; })
                .map(function (tag) { return tag.substring(tag.indexOf(' ') + 1).trim(); });
            aiChips.chips = tagsArray;
            document.querySelector('.filemanager_container #emptyAiTag').style.display = 'none';
        });
    };
    function chipDeleted(args) {
        if (fileChips.chips.length == 0) {
            setDisabled(true);
            document.querySelector('.filemanager_container #emptyTag').style.display = '';
        }
        var fileObj = document.getElementById('smartfilemanager').ej2_instances[0];
        var data = fileObj.getSelectedFiles();
        data[0].tags = [args.text];
        var ajax = new ej2_base_1.Ajax({
            url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/RemoveTagsFromFile',
            type: 'POST',
            data: JSON.stringify(data[0]),
            contentType: 'application/json',
            onSuccess: function (response) {
                fileChips.chips = JSON.parse(response);
            },
            onFailure: function (error) {
                console.log(error);
            }
        });
        ajax.send();
    }
    function aiChipDeleted() {
        if (aiChips.chips.length == 0) {
            setDisabled(true);
            document.querySelector('.filemanager_container #emptyAiTag').style.display = '';
        }
    }
    function Summarize(file) {
        dialog.visible = true;
        var ajax = new ej2_base_1.Ajax({
            url: 'https://filemanageraiservice.azurewebsites.net/api/FileManager/ExtractTextFromFile',
            type: 'POST',
            data: JSON.stringify(file),
            contentType: 'application/json',
            onSuccess: function (response) {
                var fileContent = response;
                var prompt = "You are a helpful assistant. Your task is to analyze the provided text and generate short summary. Provide the summary with highlighted topic in ordered list html format without additional contents:\n\n";
                var inputData = prompt + fileContent;
                var aiOutput = window.getAzureChatAIRequest({ messages: [{ role: 'user', content: inputData }] });
                aiOutput.then(function (result) {
                    dialog.content = "<span>" + result + "</span>";
                });
            },
            onFailure: function (error) {
                dialog.content = "<span>Something went wrong, Please try again!</span>";
                console.error('Error:', error);
            }
        });
        ajax.send();
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "filemanager_container" },
            React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: 'smartfilemanager', ref: function (fileManager) { return fileManagerObj = fileManager; }, ajaxSettings: {
                    url: hostUrl + 'api/FileManager/FileOperations',
                    getImageUrl: hostUrl + 'api/FileManager/GetImage',
                    uploadUrl: hostUrl + 'api/FileManager/Upload',
                    downloadUrl: hostUrl + 'api/FileManager/Download'
                }, height: '520px', toolbarItems: toolbarItems, contextMenuSettings: {
                    file: ["Manage Tags", "|", "Cut", "Copy", "|", "Delete", "Rename", "|", "Details"],
                    folder: ["Open", "|", "Cut", "Copy", "Paste", "|", "Delete", "Rename", "|", "Details"],
                    layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                    visible: true
                }, searchSettings: { allowSearchOnTyping: false }, fileOpen: onFileOpen, fileSelect: fileSelected, menuOpen: menuOpen, menuClick: menuClick, fileSelection: fileSelection, beforeSend: onSend, toolbarClick: toolbarClick },
                React.createElement(ej2_react_popups_1.DialogComponent, { id: "customTbarDialog", ref: function (dialogObj) { return dialog = dialogObj; }, header: "File Summary", content: "<span>Loading...</span>", target: document.getElementById('filemanager'), showCloseIcon: true, visible: isVisible, isModal: true, height: '70%', width: '600px', overlayClick: dialogOverlay, close: dialogOverlay }),
                React.createElement(ej2_react_filemanager_1.Inject, { services: [ej2_react_filemanager_1.NavigationPane, ej2_react_filemanager_1.DetailsView, ej2_react_filemanager_1.Toolbar] })),
            React.createElement("div", { id: "tags", className: "tags", style: { display: "none" } },
                React.createElement("div", { id: "tagContainer" },
                    React.createElement("div", { className: "title-container" },
                        React.createElement("strong", null, "Existing File Tags:"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "closebtn", iconCss: 'e-icons e-close', cssClass: 'e-small', onClick: closeTagContainer })),
                    React.createElement("br", null),
                    React.createElement("p", { id: "emptyTag", style: { display: "none" } }, "No tags available"),
                    React.createElement("div", { id: "fileTags", className: "scrollable-container" },
                        React.createElement(ej2_react_buttons_1.ChipListComponent, { id: "fileChips", "aria-label": "inputChips", ref: function (chipList) { return fileChips = chipList; }, chips: [], enableDelete: true, deleted: chipDeleted })),
                    React.createElement("br", null),
                    React.createElement("strong", { style: { marginBottom: "10px" } }, "AI suggested File Tags:"),
                    React.createElement("p", { id: "emptyAiTag" },
                        "Click ",
                        React.createElement("strong", null, "\"Generate AI Tags\""),
                        " button to get suggested tags from AI."),
                    React.createElement("div", { id: "aiTags", className: "scrollable-container" },
                        React.createElement(ej2_react_buttons_1.ChipListComponent, { id: "aiChips", "aria-label": "inputChips", ref: function (chipList) { return aiChips = chipList; }, chips: [], enableDelete: true, deleted: aiChipDeleted })),
                    React.createElement("div", { className: "button-container" },
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "savebtn", cssClass: 'e-btn e-outline e-primary', disabled: isDisabled, onClick: saveClick }, "Save AI Tags"),
                        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: "generatebtn", cssClass: 'e-btn e-outline e-primary', onClick: generateTags }, "Generate AI Tags")))))));
}
exports.default = SmartFileManager;
