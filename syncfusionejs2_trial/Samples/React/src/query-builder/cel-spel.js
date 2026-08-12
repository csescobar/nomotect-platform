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
exports.CelSpelTemplate = void 0;
var React = require("react");
var ej2_react_querybuilder_1 = require("@syncfusion/ej2-react-querybuilder");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
require("./query-preview.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var util_1 = require("./util");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var data_source_1 = require("./data-source");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var frameworkTemplate = function (props) {
    var ds = ["React", "Angular", "Vue", "TypeScript", "JavaScript"];
    var state = Object.assign({}, props);
    var args = state;
    var frameworkChange = function (event) {
        var qryBldrObj = (0, ej2_base_1.getComponent)(document.getElementById('querybuilder'), 'query-builder');
        var elem = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.value, elem, 'value');
    };
    return (React.createElement("div", null,
        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ds, value: args.rule.value, change: frameworkChange })));
};
var CelSpelTemplate = /** @class */ (function (_super) {
    __extends(CelSpelTemplate, _super);
    function CelSpelTemplate(args) {
        var _this = _super.call(this, args) || this;
        _this.headertext = [
            { text: "CEL" },
            { text: "SpEL" }
        ];
        _this.celQuery = '';
        _this.spELQuery = '';
        _this.queryType = 'inline';
        _this.ruleValue = [];
        _this.currentIndex = 0;
        _this.boolOperators = [
            { value: 'equal', key: 'Equal' },
        ];
        _this.dateOperators = [
            { value: 'equal', key: 'Equal' },
            { value: 'greaterthan', key: 'Greater Than' },
            { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
            { value: 'lessthan', key: 'Less Than' },
            { value: 'lessthanorequal', key: 'Less Than Or Equal' },
            { value: 'notequal', key: 'Not Equal' },
            { value: 'between', key: 'Between' },
            { value: 'notbetween', key: 'Not Between' }
        ];
        _this.CELTemplate = function () {
            return (React.createElement("div", { className: "preview-content", onClick: _this.handleMouseEnter, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave },
                React.createElement("div", { className: "e-preview-options" },
                    React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: _this.copyClipboard },
                        React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                            React.createElement("div", { className: "e-icons copycode" })))),
                React.createElement("textarea", { className: "e-cel-content", style: { display: 'none' } })));
        };
        _this.SpELTemplate = function () {
            return (React.createElement("div", { className: "preview-content", onClick: _this.handleMouseEnter, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave },
                React.createElement("div", { className: "e-preview-options" },
                    React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: _this.copyClipboard },
                        React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                            React.createElement("div", { className: "e-icons copycode" })))),
                React.createElement("textarea", { className: "e-spel-content", style: { display: 'none' } })));
        };
        _this.tabCreated = function (args) {
            setTimeout(function () {
                _this.updateCELContentTemplate();
            }, 100);
        };
        _this.changeTab = function (args) {
            _this.currentIndex = args.selectedIndex;
            setTimeout(function () {
                _this.updateContentTemplate();
            }, 100);
        };
        _this.updateContentTemplate = function () {
            switch (_this.currentIndex) {
                case 0:
                    _this.updateCELContentTemplate();
                    break;
                case 1:
                    _this.updateSpCELContentTemplate();
                    break;
            }
        };
        _this.updateCELContentTemplate = function () {
            var codeMirrorEditor;
            var allRules = _this.qryBldrObj.getValidRules();
            _this.celQuery = '';
            _this.content = (0, util_1.getCELQuery)(allRules);
            /* custom code start */
            _this.clearHighlight();
            codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-cel-content')[0], {
                parserfile: "codemirror/contrib/sql/js/parsesql.js",
                path: "codemirror/js/",
                stylesheet: "css/sqlcolors.css",
                matchBrackets: true,
                lineWrapping: true,
                textWrapping: true
            });
            codeMirrorEditor.setValue(_this.content);
            /* custom code end */
            if (!codeMirrorEditor) {
                document.getElementsByClassName('e-cel-content')[0].textContent = _this.content;
                document.getElementsByClassName('e-cel-content')[0].style.display = 'block';
            }
        };
        _this.updateSpCELContentTemplate = function () {
            var codeMirrorEditor;
            _this.spELQuery = '';
            var allRules = _this.qryBldrObj.getValidRules();
            _this.content = (0, util_1.getSpELQuery)(allRules);
            /* custom code start */
            _this.clearHighlight();
            codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-spel-content')[0], {
                parserfile: "codemirror/contrib/sql/js/parsesql.js",
                path: "codemirror/js/",
                stylesheet: "css/sqlcolors.css",
                matchBrackets: true,
                lineWrapping: true,
                textWrapping: true
            });
            codeMirrorEditor.setValue(_this.content);
            /* custom code end */
            if (!codeMirrorEditor) {
                document.getElementsByClassName('e-spel-content')[0].textContent = _this.content;
                document.getElementsByClassName('e-spel-content')[0].style.display = 'block';
            }
        };
        /* custom code start */
        _this.handleMouseEnter = function () {
            var elem = document.getElementsByClassName("copy-tooltip");
            for (var i = 0; i < elem.length; i++) {
                if (_this.tabObj.selectedItem == i) {
                    elem[i].style.display = 'block';
                }
            }
        };
        _this.handleMouseLeave = function () {
            var elem = document.getElementsByClassName("copy-tooltip");
            for (var i = 0; i < elem.length; i++) {
                if (_this.tabObj.selectedItem == i) {
                    elem[i].style.display = 'none';
                }
            }
        };
        /* custom code end */
        _this.copyClipboard = function (args) {
            navigator.clipboard.writeText(_this.content);
            setTimeout(function () {
                (0, ej2_base_1.getComponent)(args.target.closest('.e-tooltip'), 'tooltip').close();
            }, 1000);
        };
        /* custom code start */
        _this.clearHighlight = function () {
            var codeMirrorElem = document.getElementsByClassName('e-query-preview')[0].querySelectorAll('.CodeMirror');
            for (var i = codeMirrorElem.length - 1; i >= 0; i--) {
                codeMirrorElem[i].remove();
            }
        };
        /* custom code end */
        _this.updateRule = function () {
            _this.updateContentTemplate();
        };
        _this.columnData = [
            { field: "EmployeeID", label: "Employee ID", type: "number" },
            { field: "FirstName", label: "First Name", type: "string" },
            { field: "LastName", label: "Last Name", type: "string" },
            { field: "Age", label: "Age", type: "number" },
            { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: _this.boolOperators },
            { field: "PrimaryFramework", label: "Primary Framework", type: "string", template: frameworkTemplate, operators: _this.boolOperators },
            { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: _this.dateOperators },
            { field: "Country", label: "Country", type: "string" },
        ];
        _this.importRules = {
            condition: "and",
            rules: [
                { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
                { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
                { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
                { condition: "or", rules: [
                        { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                        { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                    ]
                },
                { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
            ],
        };
        return _this;
    }
    // Handler used to reposition the tooltip on page scroll
    CelSpelTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: 'col-lg-12 control-section' },
                    React.createElement(ej2_react_querybuilder_1.QueryBuilderComponent, { id: "querybuilder", dataSource: data_source_1.employeeData, columns: this.columnData, rule: this.importRules, ref: function (scope) { _this.qryBldrObj = scope; }, ruleChange: this.updateRule }),
                    React.createElement("div", { className: "e-query-preview" },
                        React.createElement(ej2_react_navigations_1.TabComponent, { id: 'defaultTab', ref: function (scope) { _this.tabObj = scope; }, selected: this.changeTab, created: this.tabCreated },
                            React.createElement(ej2_react_navigations_1.TabItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[0], content: this.CELTemplate }),
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[1], content: this.SpELTemplate })))))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This sample demonstrates the Query Builder component with showing different types of queries such as CEL and SpEL. The query preview can be changed using the tab component.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The Query Builder component is used to create or edit the filters. You can edit the filters by changing the appropriate fields. In this demo, Query Builder features such as exporting the filter as CEL and SpEL queries in sample level implementations."),
                React.createElement("p", null,
                    "More information about Query Builder can be found in this",
                    React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/query-builder/getting-started/' }, "documentation section"),
                    "."))));
    };
    return CelSpelTemplate;
}(sample_base_1.SampleBase));
exports.CelSpelTemplate = CelSpelTemplate;
