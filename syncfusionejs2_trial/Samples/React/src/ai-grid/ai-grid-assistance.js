"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridAIAssistance = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var datasource_1 = require("./datasource");
var ai_service_1 = require("../common/ai-service");
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_popups_1 = require("@syncfusion/ej2-popups");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
require("./grid-assistance.css");
function GridAIAssistance() {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateAISampleSection)();
    }, []);
    var assistInstance = (0, react_1.useRef)(null);
    var dialogInstance = (0, react_1.useRef)(null);
    var gridInstance = (0, react_1.useRef)(null);
    var suggestionListRef = (0, react_1.useRef)(null);
    var dialogWidth = 350;
    var promptsData = [];
    /// <summary>Toolbar options for Grid with AI Assist button</summary>
    var toolbarOptions = [{ text: 'AI Assist', tooltipText: 'AI Assist', prefixIcon: 'e-assistview-icon', id: 'ai-assist-btn', align: 'Right' }];
    /// <summary>Handles the Grid toolbar button click action. If the AI Assist button clicked shows the AI Assist dialog.</summary>
    var toolbarClick = function (args) {
        if (args.item.id === 'ai-assist-btn') {
            var gridRect = gridInstance.current.element.getBoundingClientRect();
            var toolbarEleRect = document.getElementById('ai-grid_toolbarItems').getBoundingClientRect();
            var targetRect = args.originalEvent.target.closest('.e-toolbar-item').getBoundingClientRect();
            var x = targetRect.left - gridRect.left - dialogWidth - targetRect.width;
            var y = toolbarEleRect.height;
            dialogInstance.current.position = { X: x, Y: y };
            dialogInstance.current.show();
        }
    };
    /// <summary>Converts natural language into a JSON object and generates a query for the data action and bind to Grid.</summary>
    function clicked(text) {
        assistInstance.current.stopResponding.classList.remove('e-btn-active');
        assistInstance.current.scrollToBottom();
        (0, ej2_popups_1.showSpinner)(document.getElementById('ai-grid'));
        var textArea = "Convert the following natural language query to a JSON object representing Syncfusion Query operations for a single-table grid. Supported operations: where (object with field, operator, value, ignoreCase), sort (array of {field, direction}), search array of (object with key, fields, operator, ignoreCase, ignoreAccent), page (object with pageNumber, pageSize). Output only the JSON object, no extra text. Use exact values from the query without changes. Field should be camel case, operator shold be (startswith, endswith, contains, doesnotstartwith, doesnotendwith, doesnotcontain, equal, notequal, greaterthan, greaterthanorequal, lessthan, lessthanorequal, isnull, isnotnull, isempty, isnotempty, between, in, notin) and sort direction as (ascending or descending). If the column name is not specified for a filter, treat the value as a search query. For queries filtering multiple columns, create a where array with multiple objects. my table fieldNames (transactionId, customerDetails.name, product.name, paymentMethod, amount, status, quantity, date). Query: ".concat(text);
        var aiOutput = (0, ai_service_1.serverAIRequest)({ messages: [{ role: 'user', content: textArea }] });
        aiOutput.then(function (result) {
            if (!result) {
                gridInstance.current.query = new ej2_data_1.Query();
                (0, ej2_popups_1.hideSpinner)(document.getElementById('ai-grid'));
                assistInstance.current.addPromptResponse({ prompt: text, response: result });
                return;
            }
            var jsonResult = result;
            if (result.indexOf("```json") !== -1) {
                jsonResult = result.split("```json")[1].split("```")[0].trim();
            }
            try {
                var queryOps = JSON.parse(jsonResult);
                var query_1 = new ej2_data_1.Query();
                if (queryOps.where) {
                    if (Array.isArray(queryOps.where)) {
                        queryOps.where.forEach(function (where) {
                            query_1.where(where.field, where.operator || 'equal', where.value, typeof where.value === 'string' ? true : where.ignoreCase);
                        });
                    }
                    else {
                        query_1.where(queryOps.where.field, queryOps.where.operator || 'equal', queryOps.where.value, typeof queryOps.where.value === 'string' ? true : queryOps.where.ignoreCase);
                    }
                }
                if (queryOps.sort && Array.isArray(queryOps.sort)) {
                    queryOps.sort.forEach(function (sort) {
                        if (sort.field && sort.direction) {
                            query_1 = query_1.sortBy(sort.field, sort.direction);
                        }
                    });
                }
                if (queryOps.search && queryOps.search && Array.isArray(queryOps.search)) {
                    queryOps.search.forEach(function (search) {
                        var _a;
                        query_1 = query_1.search(search.key, search.fields, search.operator || 'contains', true, (_a = search.ignoreAccent) !== null && _a !== void 0 ? _a : false);
                    });
                }
                if (queryOps.page && queryOps.page.pageNumber && queryOps.page.pageSize) {
                    query_1 = query_1.skip((queryOps.page.pageNumber - 1) * queryOps.page.pageSize).take(queryOps.page.pageSize);
                }
                gridInstance.current.query = query_1;
                (0, ej2_popups_1.hideSpinner)(document.getElementById('ai-grid'));
                assistInstance.current.addPromptResponse({ prompt: text, response: queryOps });
            }
            catch (error) {
                gridInstance.current.query = new ej2_data_1.Query();
                (0, ej2_popups_1.hideSpinner)(document.getElementById('ai-grid'));
                assistInstance.current.addPromptResponse({ prompt: text, response: 'Invalid AI JSON' });
            }
            dialogInstance.current.hide();
        });
    }
    /// <summary>Configures toolbar settings for AI assist dialog</summary>
    var toolbarSettings = {
        items: [
            { tooltip: 'Start New Chat', iconCss: 'e-icons e-rename', align: 'Right' },
            { tooltip: 'Clear', iconCss: 'e-icons e-refresh', align: 'Right' },
            { tooltip: 'Close', iconCss: 'e-icons e-icon-dlg-close', align: 'Right' },
        ],
        itemClicked: function (args) {
            if (args.item.iconCss === 'e-icons e-icon-dlg-close') {
                dialogInstance.current.hide();
            }
            if (args.item.iconCss === 'e-icons e-rename') {
                assistInstance.current.prompts = [];
                promptsData = [];
            }
            if (args.item.iconCss === 'e-icons e-refresh') {
                assistInstance.current.prompts = [];
                promptsData = [];
                gridInstance.current.query = new ej2_data_1.Query();
            }
        }
    };
    /// <summary>Renders response template for AI prompts</summary>
    var responseTemplate = function (props) {
        if (!promptsData.filter(function (promptData) { return promptData.index === props.index; }).length) {
            promptsData.push({ index: props.index, prompt: props.prompt, response: props.response });
        }
        return (React.createElement("div", { className: "responseItemContent" },
            React.createElement("div", { className: "response-header" },
                React.createElement("span", { className: "e-icons e-assistview-icon" }),
                props.prompt)));
    };
    /// <summary>Handles prompt request execution</summary>
    var onPromptRequest = function (args) {
        clicked(args.prompt);
    };
    /// <summary>Sets up suggestion list click handler</summary>
    var created = function () {
        suggestionListRef.current.addEventListener('click', function (event) {
            if (event.target.tagName === 'LI') {
                var clickedPill = event.target;
                var pillText = clickedPill.textContent;
                assistInstance.current.executePrompt(pillText);
            }
        });
    };
    /// <summary>Renders footer template with suggestion list</summary>
    var dialogFooterTemplate = function (props) {
        return (React.createElement("div", { className: "e-suggestions" },
            React.createElement("div", { className: "e-suggestion-header" }, "Suggestions"),
            React.createElement("div", { className: "e-suggestion-list" },
                React.createElement("ul", { ref: suggestionListRef },
                    React.createElement("li", null, "Find iPhone 15"),
                    React.createElement("li", null, "Sort Amount from lowest to highest"),
                    React.createElement("li", null, "Find highest quantity of sale"),
                    React.createElement("li", null, "Payment status not completed"),
                    React.createElement("li", null, "Sold quantity below 2")))));
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { id: 'assistive-grid' },
                React.createElement(ej2_react_popups_1.DialogComponent, { ref: dialogInstance, target: '#ai-grid', id: 'ai-assist-dialog', width: '500px', visible: false, height: '500px', footerTemplate: dialogFooterTemplate, created: created },
                    React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "ai-grid-aiassistview", ref: assistInstance, toolbarSettings: toolbarSettings, promptRequest: onPromptRequest, promptSuggestionsHeader: 'Suggestions', responseItemTemplate: responseTemplate })),
                React.createElement(ej2_react_grids_1.GridComponent, { ref: gridInstance, id: "ai-grid", height: 650, dataSource: datasource_1.gadgetsPurchaseData, toolbar: toolbarOptions, toolbarClick: toolbarClick },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "transactionId", headerText: "Transaction ID", width: "130", template: function (data) { return (React.createElement("a", null, data.transactionId)); } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "customerDetails", headerText: "Customer Name", width: "220", textAlign: "Center", template: function (data) { return (React.createElement("div", null,
                                React.createElement("p", null, data.customerDetails.name),
                                React.createElement("p", { className: "email" }, data.customerDetails.email))); } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "product", headerText: "Product", width: "208", textAlign: "Left", template: function (data) { return (React.createElement("div", { className: 'product-items' },
                                React.createElement("img", { className: "rounded", src: "src/ai-grid/images/sales-transactions-table/".concat(data.product.image), width: 40, height: 40, alt: "product image" }),
                                React.createElement("p", null, data.product.name))); } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "quantity", headerText: "Quantity", width: "80", textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "amount", headerText: "Amount", width: "115", format: "c2", textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "date", headerText: "Purchase Date", width: "120", format: { type: "date", format: "MM/dd/yyyy" }, textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "paymentMethod", headerText: "Payment Method", width: "170" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "status", headerText: "Status", width: "93", textAlign: 'Right', template: function (data) { return (React.createElement("div", null,
                                React.createElement("span", { className: "e-badge ".concat(data.status === "Completed" ? "e-badge-success" : data.status === "Pending" ? "e-badge-info" : data.status === "Processing" ? "e-badge-warning" : data.status === "Failed" ? "e-badge-danger" : "", " !px-2") }, data.status))); } })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar] }))))));
}
exports.GridAIAssistance = GridAIAssistance;
