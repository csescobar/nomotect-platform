"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAssistiveGrid = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var datasource_1 = require("../datasource");
var react_1 = require("react");
var ai_input_1 = require("../model/ai-input");
var react_2 = require("react");
var sample_base_1 = require("../../common/sample-base");
require("./assistive-grid.css");
var assistView;
var dialog;
var grid;
var suggestionListRef = (0, react_1.createRef)();
function AIAssistiveGrid() {
    (0, react_2.useEffect)(function () {
        (0, sample_base_1.updateAISampleSection)();
    }, []);
    // Toolbar options for Grid with AI Assist button.
    var toolbarOptions = [{ text: 'AI Assist', tooltipText: 'AI Assist', prefixIcon: 'e-assistview-icon', id: 'ai-assist-btn', align: 'Right' }];
    // Handles the Grid toolbar button click action. If the AI Assist button clicked shows the AI Assist dialog.
    var toolbarClick = function (args) {
        if (args.item.id === 'ai-assist-btn') {
            var gridRect = grid.element.getBoundingClientRect();
            var toolbarRect = document.getElementById('ai-grid_toolbarItems').getBoundingClientRect();
            var targetRect = args.originalEvent.target.closest('.e-toolbar-item').getBoundingClientRect();
            var x = targetRect.left - gridRect.left - (parseInt(dialog.width.toString()));
            var y = (toolbarRect.top + toolbarRect.height) - gridRect.top;
            dialog.position = { X: x, Y: y };
            dialog.show();
        }
    };
    // Configures toolbar settings for AI assist dialog.
    var toolbarSettings = {
        items: [
            { tooltip: 'Start New Chat', iconCss: 'e-icons e-rename', align: 'Right' },
            { tooltip: 'Clear', iconCss: 'e-icons e-refresh', align: 'Right' },
            { tooltip: 'Close', iconCss: 'e-icons e-icon-dlg-close', align: 'Right' },
        ],
        itemClicked: function (args) {
            if (args.item.iconCss === 'e-icons e-icon-dlg-close') {
                dialog.hide();
            }
            if (args.item.iconCss === 'e-icons e-rename') {
                assistView.prompts = [];
            }
            if (args.item.iconCss === 'e-icons e-refresh') {
                assistView.prompts = [];
                grid.setProperties({
                    sortSettings: { columns: [] },
                    filterSettings: { columns: [] },
                    groupSettings: { columns: [] },
                    pageSettings: { currentPage: 1, pageSize: 12 }
                });
                grid.refresh();
            }
        }
    };
    // Renders response template for AI prompts.
    var responseTemplate = function (props) {
        return (React.createElement("div", { className: "response-item-content" },
            React.createElement("div", { className: "response-header" },
                React.createElement("span", { className: "e-icons e-assistview-icon" }),
                props.response)));
    };
    // Handles prompt request execution.
    var onPromptRequest = function (args) {
        assistView.scrollToBottom();
        var columns = grid.columns.map(function (col) { return { field: col.field }; });
        columns.forEach(function (col) {
            if (col.field === 'status') {
                col.values = ['Completed', 'Pending', 'Failed', 'Processing'];
            }
            else if (col.field === 'paymentMethod') {
                col.values = ['Cheque', 'Credit Card', 'Paypal', 'Online Transfer'];
            }
        });
        (0, ai_input_1.fetchAI)(args.prompt, grid, assistView, columns);
    };
    (0, react_2.useEffect)(function () {
        var handleMouseDown = function (event) {
            if (!dialog.visible)
                return;
            var dialogElement = document.querySelector('#ai-assist-dialog.e-dialog');
            if (dialogElement && !dialogElement.contains(event.target)) {
                dialog.hide();
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return function () { return document.removeEventListener('mousedown', handleMouseDown); };
    }, []);
    var suggestions = ["Filter iPhone 15 Pro", "Sort Amount from lowest to highest", "Filter Payment status completed", "Group status column", "Clear Filtering", "Clear Sorting", "Remove Grouping"];
    // Renders footer template with suggestion list.
    var dialogFooterTemplate = function () {
        var handleClick = function (text) {
            assistView.executePrompt(text);
        };
        return (React.createElement("div", { className: "e-suggestions" },
            React.createElement("div", { className: "e-suggestion-header" }, "Suggestions"),
            React.createElement("div", { className: "e-suggestion-list" },
                React.createElement("ul", { ref: suggestionListRef }, suggestions.map(function (suggestion, index) { return (React.createElement("li", { key: index, onClick: function () { return handleClick(suggestion); } }, suggestion)); })))));
    };
    var filterSettings = { type: 'Excel' };
    var handleKeyDown = function (e) {
        e.stopImmediatePropagation();
    };
    return (React.createElement("div", null,
        React.createElement("div", { id: 'assistive-grid' },
            React.createElement(ej2_react_popups_1.DialogComponent, { ref: function (dialogIns) { return dialog = dialogIns; }, target: '#ai-grid', id: 'ai-assist-dialog', width: '500px', visible: false, height: '500px', footerTemplate: dialogFooterTemplate },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "ai-grid-aiassistview", ref: function (assist) { return assistView = assist; }, toolbarSettings: toolbarSettings, promptRequest: onPromptRequest, promptSuggestionsHeader: 'Suggestions', responseItemTemplate: responseTemplate },
                    React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                        React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: ' Ask AI' })))),
            React.createElement(ej2_react_grids_1.GridComponent, { ref: function (gridIns) { return grid = gridIns; }, id: "ai-grid", keyPressed: handleKeyDown, height: 650, dataSource: datasource_1.purchaseDetails, allowFiltering: true, allowSorting: true, allowGrouping: true, filterSettings: filterSettings, allowPaging: true, toolbar: toolbarOptions, toolbarClick: toolbarClick, pageSettings: { pageSize: 9 } },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TransactionID", headerText: "Transaction ID", width: "160" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "CustomerName", headerText: "Customer Name", width: "220", textAlign: "Center", template: function (data) { return (React.createElement("div", null,
                            React.createElement("p", null, data.CustomerName),
                            React.createElement("p", { className: "email" }, data.Email))); } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ProductName", headerText: "Product", width: "208", textAlign: "Left", template: function (data) { return (React.createElement("div", { className: 'product-items' },
                            React.createElement("img", { className: "rounded", src: "src/ai-grid/images/sales-transactions-table/".concat(data.ProductImage), width: 40, height: 40, alt: "product image" }),
                            React.createElement("p", null, data.ProductName))); } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Quantity", headerText: "Quantity", width: "140", textAlign: "Right" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Amount", headerText: "Amount", width: "130", format: "c2", textAlign: "Right" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "PurchaseDate", headerText: "Purchase Date", width: "180", format: { type: "date", format: "MM/dd/yyyy" }, textAlign: "Right" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "PaymentMethod", headerText: "Payment Method", width: "200" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Status", headerText: "Status", width: "120", textAlign: 'Right', template: function (data) { return (React.createElement("div", null,
                            React.createElement("span", { className: "e-badge ".concat(data.Status === "Completed" ? "e-badge-success" : data.Status === "Pending" ? "e-badge-info" : data.Status === "Processing" ? "e-badge-warning" : data.Status === "Failed" ? "e-badge-danger" : "", " !px-2") }, data.Status))); } })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter, ej2_react_grids_1.Group, ej2_react_grids_1.Page] })))));
}
exports.AIAssistiveGrid = AIAssistiveGrid;
