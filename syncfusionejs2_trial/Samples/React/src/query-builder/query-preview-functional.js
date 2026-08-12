"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
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
ej2_react_querybuilder_1.QueryBuilderComponent.Inject(ej2_react_querybuilder_1.QueryLibrary);
var headertext = [
    { text: "SQL" },
    { text: "JSON" },
    { text: "MongoDB" },
    { text: "CEL" },
    { text: "SpEL" }
];
var mongoQuery = '{';
var celQuery = '';
var spELQuery = '';
var queryType = 'inline';
var ruleValue = [];
var currentIndex = 0;
var animationSettings;
var content;
var dialogHeader;
var currentvalue = {
    value: '',
    rule: ''
};
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
var HeaderTemplate = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var qryBldrObj = (0, react_1.useRef)(null);
    var dialogInstance = (0, react_1.useRef)(null);
    var tabObj = (0, react_1.useRef)(null);
    var dateOperators = [
        { value: 'equal', key: 'Equal' },
        { value: 'greaterthan', key: 'Greater Than' },
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
    ];
    var boolOperators = [
        { value: 'equal', key: 'Equal' },
    ];
    var columnData = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string", template: frameworkTemplate, operators: boolOperators },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
        { field: "Country", label: "Country", type: "string" },
    ];
    var importRules = {
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
    var SQLTemplate = function () {
        var isInline = queryType === "inline";
        var isParameter = queryType === "parameter";
        var isNamedParameter = queryType === "namedParameter";
        return (React.createElement("div", { className: "preview-content", onClick: handleMouseEnter, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("div", { className: "e-preview-options" },
                React.createElement("label", null, "Format Info:"),
                React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", change: change, label: "Inline", checked: isInline, name: "state", value: "Inline" }),
                React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", checked: isParameter, change: change, label: "Parameter", name: "state", value: "Parameter" }),
                React.createElement(ej2_react_buttons_1.RadioButtonComponent, { cssClass: "e-radio-option", checked: isNamedParameter, change: change, label: "Named Parameter", name: "state", value: "NamedParameter" }),
                React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: copyClipboard },
                    React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                        React.createElement("div", { className: "e-icons copycode" })))),
            React.createElement("textarea", { className: "e-sql-content", style: { display: 'none' } })));
    };
    var handleMouseEnter = function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (tabObj.current.selectedItem == i) {
                elem[i].style.display = 'block';
            }
        }
    };
    var handleMouseLeave = function () {
        var elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (tabObj.current.selectedItem == i) {
                elem[i].style.display = 'none';
            }
        }
    };
    var copyClipboard = function (args) {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            (0, ej2_base_1.getComponent)(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    };
    var JSONTemplate = function () {
        return (React.createElement("div", { className: "preview-content", onClick: handleMouseEnter, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("div", { className: "e-preview-options" },
                React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: copyClipboard },
                    React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                        React.createElement("div", { className: "e-icons copycode" })))),
            React.createElement("textarea", { className: "e-json-content", style: { display: 'none' } })));
    };
    var MongoDBTemplate = function () {
        return (React.createElement("div", { className: "preview-content", onClick: handleMouseEnter, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("div", { className: "e-preview-options" },
                React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: copyClipboard },
                    React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                        React.createElement("div", { className: "e-icons copycode" })))),
            React.createElement("textarea", { className: "e-mongo-content", style: { display: 'none' } })));
    };
    var CELTemplate = function () {
        return (React.createElement("div", { className: "preview-content", onClick: handleMouseEnter, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("div", { className: "e-preview-options" },
                React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: copyClipboard },
                    React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                        React.createElement("div", { className: "e-icons copycode" })))),
            React.createElement("textarea", { className: "e-cel-content", style: { display: 'none' } })));
    };
    var SpELTemplate = function () {
        return (React.createElement("div", { className: "preview-content", onClick: handleMouseEnter, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement("div", { className: "e-preview-options" },
                React.createElement("div", { className: "copy-tooltip", style: { display: 'none' }, onClick: copyClipboard },
                    React.createElement(ej2_react_popups_1.TooltipComponent, { opensOn: "Click", content: "Copied to clipboard" },
                        React.createElement("div", { className: "e-icons copycode" })))),
            React.createElement("textarea", { className: "e-spel-content", style: { display: 'none' } })));
    };
    var tabCreated = function () {
        setTimeout(function () {
            updateSQLContentTemplate();
        }, 100);
    };
    var changeTab = function (args) {
        currentIndex = args.selectedIndex;
        setTimeout(function () {
            updateContentTemplate();
        }, 100);
    };
    var updateContentTemplate = function () {
        switch (currentIndex) {
            case 0:
                updateSQLContentTemplate();
                break;
            case 1:
                updateJSONContentTemplate();
                break;
            case 2:
                updateMongoContentTemplate();
                break;
            case 3:
                updateCELContentTemplate();
                break;
            case 4:
                updateSpCELContentTemplate();
                break;
        }
    };
    var updateSQLContentTemplate = function () {
        var codeMirrorEditor;
        content = updateSQLContent();
        /* custom code start */
        clearHighlight();
        codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-sql-content')[0], {
            parserfile: "codemirror/contrib/sql/js/parsesql.js",
            path: "codemirror/js/",
            stylesheet: "css/sqlcolors.css",
            matchBrackets: true,
            lineWrapping: true,
            textWrapping: true
        });
        codeMirrorEditor.setValue(content);
        /* custom code end */
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-sql-content')[0].textContent = content;
            document.getElementsByClassName('e-sql-content')[0].style.display = 'block';
        }
    };
    var updateJSONContentTemplate = function () {
        var codeMirrorEditor;
        var validRule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        content = JSON.stringify(validRule, null, 4);
        /* custom code start */
        clearHighlight();
        codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-json-content')[0], {
            mode: 'javascript',
            readOnly: true,
            theme: 'default' // Set your desired theme here
        });
        codeMirrorEditor.setValue(content);
        /* custom code end */
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-json-content')[0].textContent = content;
            document.getElementsByClassName('e-json-content')[0].style.display = 'block';
        }
    };
    var updateMongoContentTemplate = function () {
        var codeMirrorEditor;
        var validRule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        var mongoQuery = JSON.parse(qryBldrObj.current.getMongoQuery(validRule));
        mongoQuery = JSON.stringify(mongoQuery, null, 4);
        content = mongoQuery;
        /* custom code start */
        clearHighlight();
        codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-mongo-content')[0], {
            mode: 'javascript',
            readOnly: true,
            theme: 'default' // Set your desired theme here
        });
        codeMirrorEditor.setValue(content);
        /* custom code end */
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-mongo-content')[0].textContent = content;
            document.getElementsByClassName('e-mongo-content')[0].style.display = 'block';
        }
    };
    var updateCELContentTemplate = function () {
        var codeMirrorEditor;
        var allRules = qryBldrObj.current.getValidRules();
        var celQuery = '';
        celQuery = (0, util_1.getCELQuery)(allRules, celQuery);
        content = celQuery;
        /* custom code start */
        clearHighlight();
        codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-cel-content')[0], {
            parserfile: "codemirror/contrib/sql/js/parsesql.js",
            path: "codemirror/js/",
            stylesheet: "css/sqlcolors.css",
            matchBrackets: true,
            lineWrapping: true,
            textWrapping: true
        });
        codeMirrorEditor.setValue(content);
        /* custom code end */
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-cel-content')[0].textContent = content;
            document.getElementsByClassName('e-cel-content')[0].style.display = 'block';
        }
    };
    var updateSpCELContentTemplate = function () {
        var codeMirrorEditor;
        spELQuery = '';
        var allRules = qryBldrObj.current.getValidRules();
        content = (0, util_1.getSpELQuery)(allRules);
        /* custom code start */
        clearHighlight();
        codeMirrorEditor = CodeMirror.fromTextArea(document.getElementsByClassName('e-spel-content')[0], {
            parserfile: "codemirror/contrib/sql/js/parsesql.js",
            path: "codemirror/js/",
            stylesheet: "css/sqlcolors.css",
            matchBrackets: true,
            lineWrapping: true,
            textWrapping: true
        });
        codeMirrorEditor.setValue(content);
        /* custom code end */
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-spel-content')[0].textContent = content;
            document.getElementsByClassName('e-spel-content')[0].style.display = 'block';
        }
    };
    /* custom code start */
    var clearHighlight = function () {
        var codeMirrorElem = document.getElementsByClassName('e-query-preview')[0].querySelectorAll('.CodeMirror');
        for (var i = codeMirrorElem.length - 1; i >= 0; i--) {
            codeMirrorElem[i].remove();
        }
    };
    /* custom code end */
    var change = function (args) {
        if (args.value === "Inline") {
            queryType = 'inline';
        }
        else if (args.value === "Parameter") {
            queryType = 'parameter';
        }
        else {
            queryType = 'namedParemeter';
        }
        updateSQLContentTemplate();
    };
    var updateSQLContent = function () {
        var content;
        var qbrule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        var sqlJSON;
        switch (queryType) {
            case 'inline':
                content = qryBldrObj.current.getSqlFromRules(qbrule);
                ;
                break;
            case 'parameter':
                content = convertParameterSql(qbrule);
                break;
            default:
                content = convertNamedParameterSql(qbrule);
                break;
        }
        return content;
    };
    var convertParameterSql = function (qbrule) {
        var content = JSON.stringify(qryBldrObj.current.getParameterizedSql(qbrule), null, 4);
        return content;
    };
    var convertNamedParameterSql = function (qbrule) {
        var content = JSON.stringify(qryBldrObj.current.getParameterizedNamedSql(qbrule), null, 4);
        return content;
    };
    var updateRule = function () {
        updateContentTemplate();
    };
    var lockrule = function (args) {
        qryBldrObj.current.showButtons.lockRule = args.checked;
    };
    var lockgroup = function (args) {
        qryBldrObj.current.showButtons.lockGroup = args.checked;
    };
    var clonerule = function (args) {
        qryBldrObj.current.showButtons.cloneRule = args.checked;
    };
    var clonegroup = function (args) {
        qryBldrObj.current.showButtons.cloneGroup = args.checked;
    };
    var newrulegroups = function (args) {
        qryBldrObj.current.addRuleToNewGroups = args.checked;
    };
    var selectfield = function (args) {
        qryBldrObj.current.autoSelectField = args.checked;
    };
    var selectoperator = function (args) {
        qryBldrObj.current.autoSelectOperator = args.checked;
    };
    var ruledelete = function (args) {
        qryBldrObj.current.showButtons.ruleDelete = args.checked;
    };
    var groupInsert = function (args) {
        qryBldrObj.current.showButtons.groupInsert = args.checked;
    };
    var groupdelete = function (args) {
        qryBldrObj.current.showButtons.groupDelete = args.checked;
    };
    var summaryview = function (args) {
        qryBldrObj.current.summaryView = args.checked;
    };
    var notcondition = function (args) {
        qryBldrObj.current.enableNotCondition = args.checked;
    };
    var loadParameter = function () {
        var qbrule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        currentvalue.value = JSON.stringify(qryBldrObj.current.getParameterizedSql(qbrule), null, 4);
        currentvalue.rule = 'parameter';
        dialogHeader = "Parameter SQL",
            dialogInstance.show();
    };
    var loadNamedParameter = function () {
        var qbrule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        currentvalue.value = JSON.stringify(qryBldrObj.current.getParameterizedNamedSql(qbrule), null, 4);
        currentvalue.rule = 'namedparameter';
        dialogHeader = "NamedParameter SQL",
            dialogInstance.show();
    };
    var loadMongoQuery = function () {
        var validRule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        var mongoQuery = JSON.parse(qryBldrObj.current.getMongoQuery(validRule));
        mongoQuery = JSON.stringify(mongoQuery, null, 4);
        currentvalue.value = mongoQuery;
        currentvalue.rule = 'mongo';
        dialogHeader = "Mongo Query",
            dialogInstance.show();
    };
    var dialogContent = function () {
        return (React.createElement("form", null,
            React.createElement("textarea", { className: "content-area", id: "content-area" })));
    };
    var dialogOpen = function () {
        var dlgContentElement = document.getElementById('content-area');
        if (dlgContentElement && currentvalue) {
            dlgContentElement.value = currentvalue.value;
            dialogInstance.header = dialogHeader;
        }
    };
    var importQuery = function () {
        var textAreacontent = document.getElementById('content-area');
        if (currentvalue.rule === 'mongo') {
            qryBldrObj.current.setMongoQuery(textAreacontent.value);
        }
        else if (currentvalue.rule === 'namedparameter') {
            qryBldrObj.current.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
        }
        else if (currentvalue.rule === 'parameter') {
            qryBldrObj.current.setParameterizedSql(JSON.parse(textAreacontent.value));
        }
        updateRule();
    };
    var buttons = [
        {
            buttonModel: {
                content: 'Import',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            click: function () {
                importQuery();
                dialogInstance.hide();
            },
        },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat',
            },
            click: function () {
                dialogInstance.hide();
            },
        },
    ];
    var openPopup = function () {
        document.getElementById('parameter').addEventListener('click', loadParameter);
        document.getElementById('named_parameter').addEventListener('click', loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', loadMongoQuery);
    };
    var beforeClose = function () {
        document.getElementById('parameter').removeEventListener('click', loadParameter);
        document.getElementById('named_parameter').addEventListener('click', loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', loadMongoQuery);
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement("div", { className: "parent-container" },
                React.createElement("div", { className: "child right-content" },
                    React.createElement("div", { className: "top-right-element" },
                        React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { target: '#target', cssClass: "e-caret-hide", iconCss: 'e-icons e-settings', open: openPopup, beforeClose: beforeClose })),
                    React.createElement("div", { className: 'top-right-content' },
                        React.createElement(ej2_react_querybuilder_1.QueryBuilderComponent, { id: "querybuilder", dataSource: data_source_1.employeeData, columns: columnData, rule: importRules, ref: qryBldrObj, ruleChange: updateRule })),
                    React.createElement("div", { className: "App", id: 'dialog-target' },
                        React.createElement(ej2_react_popups_1.DialogComponent, { id: 'dialog', width: '700px', height: '420px', target: '#dialog-target', isModal: true, animationSettings: animationSettings, header: dialogHeader, visible: false, beforeOpen: dialogOpen, closeOnEscape: false, showCloseIcon: true, buttons: buttons, ref: function (dialog) { return dialogInstance = dialog; } },
                            React.createElement("div", null, dialogContent()))),
                    React.createElement("div", { className: "bottom-right-content" },
                        React.createElement("div", { className: "e-query-preview" },
                            React.createElement(ej2_react_navigations_1.TabComponent, { id: 'defaultTab', ref: tabObj, selected: changeTab, created: tabCreated },
                                React.createElement(ej2_react_navigations_1.TabItemsDirective, null,
                                    React.createElement(ej2_react_navigations_1.TabItemDirective, { header: headertext[0], content: SQLTemplate }),
                                    React.createElement(ej2_react_navigations_1.TabItemDirective, { header: headertext[1], content: JSONTemplate }),
                                    React.createElement(ej2_react_navigations_1.TabItemDirective, { header: headertext[2], content: MongoDBTemplate }),
                                    React.createElement(ej2_react_navigations_1.TabItemDirective, { header: headertext[3], content: CELTemplate }),
                                    React.createElement(ej2_react_navigations_1.TabItemDirective, { header: headertext[4], content: SpELTemplate })))))),
                React.createElement("div", { id: "target", className: "child left-content" },
                    React.createElement("span", { className: 'left-header' }, "Options"),
                    React.createElement("table", { id: "property", title: "Options", className: 'property', style: { width: '100%' } },
                        React.createElement("tbody", null,
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: lockrule, label: 'Enable lock rule' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: lockgroup, label: 'Enable lock group' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: clonerule, label: 'Enable clone rule' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: clonegroup, label: 'Enable clone group' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: newrulegroups, label: 'Add rule to new groups' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: selectfield, label: 'Enable auto select field' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: selectoperator, label: 'Enable auto select operator' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: ruledelete, label: 'Enable rule delete' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: true, change: groupInsert, label: 'Enable group insert' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: groupdelete, label: 'Enable group delete' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: summaryview, label: 'Enable summary view' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' } },
                                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: false, change: notcondition, label: 'Enable not condition' }))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { paddingTop: '15px' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "parameter", onClick: loadParameter }, "Import Parameter SQL")))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { paddingTop: '15px' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "named_parameter", onClick: loadNamedParameter }, "Import Named Parameter SQL")))),
                            React.createElement("tr", null,
                                React.createElement("td", { style: { paddingTop: '15px' } },
                                    React.createElement("div", null,
                                        React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: "e-btn e-custom-btn", id: "mongo", onClick: loadMongoQuery }, "Import MongoDB Query"))))))))),
        React.createElement("div", { id: 'action-description' },
            React.createElement("p", null, "This sample demonstrates the overview of Query Builder component with showing differnt types of queries. The query preview can be changed using the tab component.")),
        React.createElement("div", { id: 'description' },
            React.createElement("p", null, "The Query Builder component is used to create or edit the filters. You can edit the filters by changing the appropriate fields. In this demo, Query Builder features such as exporting the filter as SQL Query and JSON are used along with the sample level implementation of CEL, SpEL and Mongo queries."),
            React.createElement("p", null,
                "More information about Query Builder can be found in this",
                React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/query-builder/getting-started/' }, "documentation section"),
                "."))));
};
exports.default = HeaderTemplate;
