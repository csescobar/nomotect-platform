"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AIAssistivePivot = void 0;
var React = require("react");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_interactive_chat_1 = require("@syncfusion/ej2-react-interactive-chat");
var datasource_1 = require("../datasource");
var react_1 = require("react");
var ai_input_1 = require("../model/ai-input");
var react_2 = require("react");
var sample_base_1 = require("../../common/sample-base");
require("./assistive-pivot.css");
var ej2_react_pivotview_1 = require("@syncfusion/ej2-react-pivotview");
var dialog;
var pivotObj;
var assistView;
var suggestionListRef = (0, react_1.createRef)();
function AIAssistivePivot() {
    (0, react_2.useEffect)(function () {
        (0, sample_base_1.updateAISampleSection)();
    }, []);
    var dataSourceSettings = {
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [{ name: 'Country', expandAll: true }, { name: 'Product_Categories' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        dataSource: datasource_1.pivotProductData,
        expandAll: false,
        values: [{ name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
        sortSettings: [{ name: 'Year', order: "Ascending" }],
        filterSettings: [{ name: 'Quarter', items: ['Q3'], type: 'Exclude' }],
        conditionalFormatSettings: [
            {
                measure: 'Amount',
                value1: 250000,
                conditions: 'LessThan',
                style: {
                    backgroundColor: '#FF005C',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            },
            {
                value1: 10000,
                measure: 'Sold',
                conditions: 'GreaterThan',
                style: {
                    backgroundColor: '#35B65A',
                    color: 'white',
                    fontFamily: 'Tahoma',
                    fontSize: '12px'
                },
                applyGrandTotals: false
            }
        ],
        showSubTotals: false
    };
    // Handles the Grid toolbar button click action. If the AI Assist button clicked shows the AI Assist dialog.
    var toolbarClick = function (args) {
        if (args.item.id === 'ai-assist-btn') {
            var gridRect = pivotObj.element.getBoundingClientRect();
            var toolbarRect = document.getElementById('ai-pivotpivot-toolbar').getBoundingClientRect();
            var targetRect = args.originalEvent.target.closest('.e-toolbar-item').getBoundingClientRect();
            var x = targetRect.left - (parseInt(dialog.width.toString()));
            var y = (toolbarRect.top + toolbarRect.height);
            dialog.position = { X: x, Y: y };
            dialog.show();
        }
    };
    // Toolbar options for Grid with AI Assist button.
    var toolbarOptions = ['FieldList', 'Grid', 'Chart', { text: 'AI Assist', tooltipText: 'AI Assist', prefixIcon: 'e-assistview-icon', id: 'ai-assist-btn', align: 'Right', click: toolbarClick.bind(this) }];
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
                pivotObj.setProperties({
                    dataSourceSettings: dataSourceSettings,
                    displayOption: { view: 'Both', primary: 'Table' }
                });
                pivotObj.refresh();
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
        var dataSourceSettings = JSON.parse(pivotObj.getPersistData()).dataSourceSettings;
        (0, ai_input_1.fetchAI)(args.prompt, pivotObj, assistView, dataSourceSettings);
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
    var suggestions = ["Sort Country field by descending", "Show only data from France and Germany", "Change the Sold field aggregation from sum to avg", "Clear filtering"];
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
    var beforeToolbarRender = function (args) {
        for (var i = 0; i < args.customToolbar.length; i++) {
            var prefixIcon = args.customToolbar[i].prefixIcon ? args.customToolbar[i].prefixIcon : '';
            if (prefixIcon.includes('e-toolbar-fieldlist')) {
                delete args.customToolbar[i].align;
            }
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { id: 'assistive-pivot' },
            React.createElement(ej2_react_popups_1.DialogComponent, { ref: function (dialogIns) { return dialog = dialogIns; }, id: 'ai-assist-dialog', width: '500px', visible: false, height: '500px', footerTemplate: dialogFooterTemplate },
                React.createElement(ej2_react_interactive_chat_1.AIAssistViewComponent, { id: "ai-pivot-aiassistview", ref: function (assist) { return assistView = assist; }, toolbarSettings: toolbarSettings, promptRequest: onPromptRequest, promptSuggestionsHeader: 'Suggestions', responseItemTemplate: responseTemplate },
                    React.createElement(ej2_react_interactive_chat_1.ViewsDirective, null,
                        React.createElement(ej2_react_interactive_chat_1.ViewDirective, { type: 'Assist', name: ' Ask AI' })))),
            React.createElement(ej2_react_pivotview_1.PivotViewComponent, { id: 'ai-pivot', ref: function (pivot) { return pivotObj = pivot; }, dataSourceSettings: dataSourceSettings, width: '100%', height: '650', gridSettings: { columnWidth: 140 }, displayOption: { view: 'Both', primary: 'Table' }, enableValueSorting: true, allowCalculatedField: true, showGroupingBar: true, showFieldList: true, showToolbar: true, allowConditionalFormatting: true, allowNumberFormatting: true, toolbar: toolbarOptions, toolbarRender: beforeToolbarRender },
                React.createElement(ej2_react_pivotview_1.Inject, { services: [ej2_react_pivotview_1.GroupingBar, ej2_react_pivotview_1.FieldList, ej2_react_pivotview_1.CalculatedField, ej2_react_pivotview_1.Toolbar, ej2_react_pivotview_1.ConditionalFormatting, ej2_react_pivotview_1.NumberFormatting] })))));
}
exports.AIAssistivePivot = AIAssistivePivot;
