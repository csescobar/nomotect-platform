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
exports.Template = void 0;
var React = require("react");
var ej2_react_querybuilder_1 = require("@syncfusion/ej2-react-querybuilder");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./query-preview.css");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var util_1 = require("./util");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var data_source_1 = require("./data-source");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
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
var Template = /** @class */ (function (_super) {
    __extends(Template, _super);
    function Template(args) {
        var _this = _super.call(this, args) || this;
        _this.headertext = [
            { text: "SQL" },
            { text: "JSON" },
            { text: "MongoDB" },
            { text: "CEL" },
            { text: "SpEL" }
        ];
        _this.mongoQuery = '{';
        _this.celQuery = '';
        _this.spELQuery = '';
        _this.queryType = 'inline';
        _this.ruleValue = [];
        _this.currentvalue = {
            value: '',
            rule: ''
        };
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
        _this.SQLTemplate = function () {
            var isInline = _this.queryType === "inline";
            var isParameter = _this.queryType === "parameter";
            var isNamedParameter = _this.queryType === "namedParameter";
            return (React.createElement("div", { className: "preview-content", onClick: _this.handleMouseEnter, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave },
                React.createElement("div", { className: "e-preview-options" },
                    React.createElement("label", null, "Format Info:"),
                    React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", change: _this.change, label: "Inline", checked: isInline, name: "state", value: "Inline" }),
                    React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", checked: isParameter, change: _this.change, label: "Parameter", name: "state", value: "Parameter" }),
                    React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", checked: isNamedParameter, change: _this.change, label: "Named Parameter", name: "state", value: "NamedParameter" }),
                    React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: _this.copyClipboard },
                        React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                            React.createElement("div", { className: "e-icons copycode" })))),
                React.createElement("textarea", { className: "e-sql-content", style: { display: 'none' } })));
        };
        _this.JSONTemplate = function () {
            return (React.createElement("div", { className: "preview-content", onClick: _this.handleMouseEnter, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave },
                React.createElement("div", { className: "e-preview-options" },
                    React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: _this.copyClipboard },
                        React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                            React.createElement("div", { className: "e-icons copycode" })))),
                React.createElement("textarea", { className: "e-json-content", style: { display: 'none' } })));
        };
        _this.MongoDBTemplate = function () {
            return (React.createElement("div", { className: "preview-content", onClick: _this.handleMouseEnter, onMouseEnter: _this.handleMouseEnter, onMouseLeave: _this.handleMouseLeave },
                React.createElement("div", { className: "e-preview-options" },
                    React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: _this.copyClipboard },
                        React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                            React.createElement("div", { className: "e-icons copycode" })))),
                React.createElement("textarea", { className: "e-mongo-content", style: { display: 'none' } })));
        };
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
                _this.updateSQLContentTemplate();
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
                    _this.updateSQLContentTemplate();
                    break;
                case 1:
                    _this.updateJSONContentTemplate();
                    break;
                case 2:
                    _this.updateMongoContentTemplate();
                    break;
                case 3:
                    _this.updateCELContentTemplate();
                    break;
                case 4:
                    _this.updateSpCELContentTemplate();
                    break;
            }
        };
        _this.updateJSONContentTemplate = function () {
            var codeMirrorEditor;
            var validRule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            _this.content = JSON.stringify(validRule, null, 4);
            /* custom code start */
            _this.clearHighlight();
            codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-json-content')[0], {
                mode: 'javascript',
                readOnly: true,
                theme: 'default' // Set your desired theme here
            });
            codeMirrorEditor.setValue(_this.content);
            /* custom code end */
            if (!codeMirrorEditor) {
                document.getElementsByClassName('e-json-content')[0].textContent = _this.content;
                document.getElementsByClassName('e-json-content')[0].style.display = 'block';
            }
        };
        _this.updateMongoContentTemplate = function () {
            var codeMirrorEditor;
            var validRule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            var mongoQuery = JSON.parse(_this.qryBldrObj.getMongoQuery(validRule));
            mongoQuery = JSON.stringify(mongoQuery, null, 4);
            _this.content = mongoQuery;
            /* custom code start */
            _this.clearHighlight();
            codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-mongo-content')[0], {
                mode: 'javascript',
                readOnly: true,
                theme: 'default' // Set your desired theme here
            });
            codeMirrorEditor.setValue(_this.content);
            /* custom code end */
            if (!codeMirrorEditor) {
                document.getElementsByClassName('e-mongo-content')[0].textContent = _this.content;
                document.getElementsByClassName('e-mongo-content')[0].style.display = 'block';
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
        _this.change = function (args) {
            if (args.value === "Inline") {
                _this.queryType = 'inline';
            }
            else if (args.value === "Parameter") {
                _this.queryType = 'parameter';
            }
            else {
                _this.queryType = 'namedParemeter';
            }
            _this.updateSQLContentTemplate();
        };
        _this.updateSQLContentTemplate = function () {
            var codeMirrorEditor;
            _this.content = _this.updateSQLContent();
            /* custom code start */
            _this.clearHighlight();
            codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-sql-content')[0], {
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
                document.getElementsByClassName('e-sql-content')[0].textContent = _this.content;
                document.getElementsByClassName('e-sql-content')[0].style.display = 'block';
            }
        };
        _this.updateSQLContent = function () {
            var content;
            var qbrule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            var sqlJSON;
            switch (_this.queryType) {
                case 'inline':
                    content = _this.qryBldrObj.getSqlFromRules(qbrule);
                    ;
                    break;
                case 'parameter':
                    content = _this.convertParameterSql(qbrule);
                    break;
                default:
                    content = _this.convertNamedParameterSql(qbrule);
                    break;
            }
            return content;
        };
        _this.convertParameterSql = function (qbrule) {
            var content = JSON.stringify(_this.qryBldrObj.getParameterizedSql(qbrule), null, 4);
            return content;
        };
        _this.convertNamedParameterSql = function (qbrule) {
            var content = JSON.stringify(_this.qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
            return content;
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
        // Handler used to reposition the tooltip on page scroll
        _this.lockrule = function (args) {
            _this.qryBldrObj.showButtons.lockRule = args.checked;
        };
        _this.lockgroup = function (args) {
            _this.qryBldrObj.showButtons.lockGroup = args.checked;
        };
        _this.clonerule = function (args) {
            _this.qryBldrObj.showButtons.cloneRule = args.checked;
        };
        _this.clonegroup = function (args) {
            _this.qryBldrObj.showButtons.cloneGroup = args.checked;
        };
        _this.newrulegroups = function (args) {
            _this.qryBldrObj.addRuleToNewGroups = args.checked;
        };
        _this.selectfield = function (args) {
            _this.qryBldrObj.autoSelectField = args.checked;
        };
        _this.selectoperator = function (args) {
            _this.qryBldrObj.autoSelectOperator = args.checked;
        };
        _this.ruledelete = function (args) {
            _this.qryBldrObj.showButtons.ruleDelete = args.checked;
        };
        _this.groupInsert = function (args) {
            _this.qryBldrObj.showButtons.groupInsert = args.checked;
        };
        _this.groupdelete = function (args) {
            _this.qryBldrObj.showButtons.groupDelete = args.checked;
        };
        _this.summaryview = function (args) {
            _this.qryBldrObj.summaryView = args.checked;
        };
        _this.notcondition = function (args) {
            _this.qryBldrObj.enableNotCondition = args.checked;
        };
        _this.loadParameter = function (args) {
            var qbrule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            _this.currentvalue.value = JSON.stringify(_this.qryBldrObj.getParameterizedSql(qbrule), null, 4);
            _this.currentvalue.rule = 'parameter';
            _this.dialogHeader = "Parameter SQL",
                _this.dialogInstance.show();
        };
        _this.loadNamedParameter = function () {
            var qbrule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            _this.currentvalue.value = JSON.stringify(_this.qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
            _this.currentvalue.rule = 'namedparameter';
            _this.dialogHeader = "NamedParameter SQL",
                _this.dialogInstance.show();
        };
        _this.loadMongoQuery = function () {
            var validRule = _this.qryBldrObj.getValidRules(_this.qryBldrObj.rule);
            var mongoQuery = JSON.parse(_this.qryBldrObj.getMongoQuery(validRule));
            mongoQuery = JSON.stringify(mongoQuery, null, 4);
            _this.currentvalue.value = mongoQuery;
            _this.currentvalue.rule = 'mongo';
            _this.dialogHeader = "Mongo Query",
                _this.dialogInstance.show();
        };
        _this.openPopup = function () {
            document.getElementById('parameter').addEventListener('click', _this.loadParameter);
            document.getElementById('named_parameter').addEventListener('click', _this.loadNamedParameter);
            document.getElementById('mongo').addEventListener('click', _this.loadMongoQuery);
        };
        _this.beforeClose = function () {
            document.getElementById('parameter').removeEventListener('click', _this.loadParameter);
            document.getElementById('named_parameter').addEventListener('click', _this.loadNamedParameter);
            document.getElementById('mongo').addEventListener('click', _this.loadMongoQuery);
        };
        _this.dialogContent = function () {
            return (React.createElement("form", null,
                React.createElement("textarea", { className: "content-area", id: "content-area" })));
        };
        _this.importQuery = function () {
            var textAreacontent = document.getElementById('content-area');
            if (_this.currentvalue.rule === 'mongo') {
                _this.qryBldrObj.setMongoQuery(textAreacontent.value);
            }
            else if (_this.currentvalue.rule === 'namedparameter') {
                _this.qryBldrObj.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
            }
            else if (_this.currentvalue.rule === 'parameter') {
                _this.qryBldrObj.setParameterizedSql(JSON.parse(textAreacontent.value));
            }
            _this.updateRule();
        };
        _this.buttons = [
            {
                buttonModel: {
                    content: 'Import',
                    cssClass: 'e-flat',
                    isPrimary: true,
                },
                click: function () {
                    _this.importQuery();
                    _this.dialogInstance.hide();
                },
            },
            {
                buttonModel: {
                    content: 'Cancel',
                    cssClass: 'e-flat',
                },
                click: function () {
                    _this.dialogInstance.hide();
                },
            },
        ];
        _this.dialogOpen = function () {
            var dlgContentElement = document.getElementById('content-area');
            if (dlgContentElement && _this.currentvalue) {
                dlgContentElement.value = _this.currentvalue.value;
                _this.dialogInstance.header = _this.dialogHeader;
            }
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
    Template.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { className: "parent-container" },
                    React.createElement("div", { className: "child right-content" },
                        React.createElement("div", { className: "top-right-element" },
                            React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { target: '#target', cssClass: "e-caret-hide", iconCss: 'e-icons e-settings', open: this.openPopup, beforeClose: this.beforeClose })),
                        React.createElement("div", { className: 'top-right-content' },
                            React.createElement(ej2_react_querybuilder_1.QueryBuilderComponent, { id: "querybuilder", dataSource: data_source_1.employeeData, columns: this.columnData, rule: this.importRules, ref: function (scope) { _this.qryBldrObj = scope; }, ruleChange: this.updateRule })),
                        React.createElement("div", { className: "App", id: 'dialog-target' },
                            React.createElement(ej2_react_popups_1.DialogComponent, { id: 'dialog', width: '700px', height: '420px', target: '#dialog-target', isModal: true, animationSettings: this.animationSettings, header: this.dialogHeader, visible: false, beforeOpen: this.dialogOpen, closeOnEscape: false, showCloseIcon: true, buttons: this.buttons, ref: function (scope) { _this.dialogInstance = scope; } },
                                React.createElement("div", null, this.dialogContent()))),
                        React.createElement("div", { className: "bottom-right-content" },
                            React.createElement("div", { className: "e-query-preview" },
                                React.createElement(ej2_react_navigations_1.TabComponent, { id: 'defaultTab', ref: function (scope) { _this.tabObj = scope; }, selected: this.changeTab, created: this.tabCreated },
                                    React.createElement(ej2_react_navigations_1.TabItemsDirective, null,
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[0], content: this.SQLTemplate }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[1], content: this.JSONTemplate }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[2], content: this.MongoDBTemplate }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[3], content: this.CELTemplate }),
                                        React.createElement(ej2_react_navigations_1.TabItemDirective, { header: this.headertext[4], content: this.SpELTemplate })))))),
                    React.createElement("div", { id: "target", className: "child left-content" },
                        React.createElement("span", { className: 'left-header' }, "Options"),
                        React.createElement("table", { id: "property", title: "Options", className: 'property', style: { width: '100%' } },
                            React.createElement("tbody", null,
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.lockrule, label: 'Enable lock rule' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.lockgroup, label: 'Enable lock group' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.clonerule, label: 'Enable clone rule' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.clonegroup, label: 'Enable clone group' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: this.newrulegroups, label: 'Add rule to new groups' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.selectfield, label: 'Enable auto select field' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: this.selectoperator, label: 'Enable auto select operator' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.ruledelete, label: 'Enable rule delete' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: this.groupInsert, label: 'Enable group insert' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.groupdelete, label: 'Enable group delete' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.summaryview, label: 'Enable summary view' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' } },
                                        React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: this.notcondition, label: 'Enable not condition' }))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { paddingTop: '15px' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "parameter", onClick: this.loadParameter }, "Import Parameter SQL")))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { paddingTop: '15px' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "named_parameter", onClick: this.loadNamedParameter }, "Import Named Parameter SQL")))),
                                React.createElement("tr", null,
                                    React.createElement("td", { style: { paddingTop: '15px' } },
                                        React.createElement("div", null,
                                            React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "mongo", onClick: this.loadMongoQuery }, "Import MongoDB Query"))))))))),
            React.createElement("div", { id: 'action-description' },
                React.createElement("p", null, "This sample demonstrates the Query Builder component with showing different types of queries. The query preview can be changed using the tab component.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The Query Builder component is used to create or edit the filters. You can edit the filters by changing the appropriate fields. In this demo, Query Builder features such as exporting the filter as SQL Query and JSON are used along with the sample level implementation of CEL, SpEL and Mongo queries."),
                React.createElement("p", null,
                    "More information about Query Builder can be found in this",
                    React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/query-builder/getting-started/' }, "documentation section"),
                    "."))));
    };
    return Template;
}(sample_base_1.SampleBase));
exports.Template = Template;
