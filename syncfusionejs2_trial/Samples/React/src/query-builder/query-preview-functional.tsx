
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { QueryBuilderComponent, QueryLibrary, RuleModel} from '@syncfusion/ej2-react-querybuilder';
import { getComponent, closest } from '@syncfusion/ej2-base';
import { ButtonComponent, ChangeEventArgs, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { updateSampleSection } from '../common/sample-base';
import './query-preview.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { getCELQuery, getSpELQuery } from './util';
import { AnimationSettingsModel, DialogComponent, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { employeeData } from './data-source';
import { PropertyPane } from '../common/property-pane';
import { dialogOpen } from '@syncfusion/ej2/kanban';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

QueryBuilderComponent.Inject(QueryLibrary);


declare let CodeMirror: any;
let headertext: any = [
    { text: "SQL" },
    { text: "JSON" },
    { text: "MongoDB" },
    { text: "CEL" },
    { text: "SpEL" }
];
let mongoQuery: string = '{';
let celQuery: string = '';
let spELQuery: string = '';
let queryType: string = 'inline';
let ruleValue = [];
let currentIndex: number = 0;
let animationSettings: AnimationSettingsModel;
let content: string;
let dialogHeader: string;
let currentvalue: any = {
    value: '',
    rule: ''
};
const frameworkTemplate = (props) => {
    let ds: string[] = ["React", "Angular", "Vue", "TypeScript", "JavaScript"];
    let state: any = Object.assign({}, props);
    const args = state;
    const frameworkChange = (event: any) => {
        let qryBldrObj: any = getComponent(document.getElementById('querybuilder'), 'query-builder');
        let elem: any = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.value, elem, 'value');
    }
    return (<div><DropDownListComponent dataSource={ds} value={args.rule.value} change={frameworkChange}/></div>);
};
const HeaderTemplate = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    let qryBldrObj: any = useRef<QueryBuilderComponent>(null);
    let dialogInstance: any = useRef<DialogComponent>(null);
    let tabObj: any = useRef<TabComponent>(null);
    let dateOperators: any = [
        { value: 'equal', key: 'Equal'},
        { value: 'greaterthan', key: 'Greater Than'},
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
    ];
    let boolOperators: object = [
        { value: 'equal', key: 'Equal'},
    ];
    let columnData: any = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string", template: frameworkTemplate, operators: boolOperators },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
        { field: "Country", label: "Country", type: "string" },
    ];
    let importRules: any = {
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
    const SQLTemplate = () => {
        const isInline: any = queryType === "inline";
        const isParameter: any = queryType === "parameter";
        const isNamedParameter: any = queryType === "namedParameter";
        return (
            <div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <label>Format Info:</label>
                    <RadioButtonComponent cssClass="e-radio-option" change={change} label="Inline" checked={isInline} name="state" value="Inline"></RadioButtonComponent>
                    <RadioButtonComponent cssClass="e-radio-option" checked={isParameter} change={change} label="Parameter" name="state" value="Parameter"></RadioButtonComponent>
                    <RadioButtonComponent cssClass="e-radio-option" checked={isNamedParameter} change={change} label="Named Parameter" name="state" value="NamedParameter"></RadioButtonComponent>
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-sql-content" style={{ display: 'none' }}
                />
            </div>
        );
    };
    const handleMouseEnter = () => {
        let elem: any = document.getElementsByClassName("copy-tooltip");
        for (var i: number = 0; i< elem.length; i++) {
            if(tabObj.current.selectedItem == i) {
                elem[i].style.display = 'block';
            }
        }
    }
    const handleMouseLeave = () => {
        let elem: any = document.getElementsByClassName("copy-tooltip");
        for (var i: number = 0; i< elem.length; i++) {
            if(tabObj.current.selectedItem == i) {
                elem[i].style.display = 'none';
            }
        }
    }
    const copyClipboard = (args: any) => {
        navigator.clipboard.writeText(content);
        setTimeout(function() {
            (getComponent(args.target.closest('.e-tooltip'), 'tooltip') as any).close();
        }, 1000);
    };

    const JSONTemplate = () => {    
        return (
            <div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-json-content" style={{ display: 'none' }}/>
            </div>
        );
    };

    const MongoDBTemplate = () => {
        return (
            <div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-mongo-content" style={{ display: 'none' }}/>
            </div>
          );
    };

    const CELTemplate = () => {
        return (
            <div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-cel-content" style={{ display: 'none' }}/>
            </div>
          );
    };

    const SpELTemplate = () => {
          return (
            <div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-spel-content" style={{ display: 'none' }}/>
            </div>
        );
    };

    const tabCreated = () => {
        setTimeout(function() {
            updateSQLContentTemplate();
        }, 100);
    };

    const changeTab = (args: any) => {
        currentIndex = args.selectedIndex;
        setTimeout(function() {
            updateContentTemplate();
        }, 100);
    };

    const updateContentTemplate = () => {
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

    const updateSQLContentTemplate = () => {
        let codeMirrorEditor: any;
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
            (document.getElementsByClassName('e-sql-content')[0] as HTMLElement).style.display = 'block';
        }
    }
    const updateJSONContentTemplate = () => {
        let codeMirrorEditor: any;
        let validRule: any = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
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
            (document.getElementsByClassName('e-json-content')[0] as HTMLElement).style.display = 'block';
        }
    }
    const updateMongoContentTemplate = () => {
        let codeMirrorEditor: any;
        let validRule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        let mongoQuery = JSON.parse(qryBldrObj.current.getMongoQuery(validRule));
        mongoQuery =  JSON.stringify(mongoQuery, null, 4);
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
            (document.getElementsByClassName('e-mongo-content')[0] as HTMLElement).style.display = 'block';
        }
    }
    const updateCELContentTemplate = () => {
        let codeMirrorEditor: any;
        const allRules = qryBldrObj.current.getValidRules();
        let celQuery: string = '';
        celQuery = getCELQuery(allRules, celQuery);
        content = celQuery
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
            (document.getElementsByClassName('e-cel-content')[0] as HTMLElement).style.display = 'block';
        }
    }
    const updateSpCELContentTemplate = () => {
        let codeMirrorEditor: any;
        spELQuery = '';
        const allRules: any = qryBldrObj.current.getValidRules();
        content = getSpELQuery(allRules);
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
            (document.getElementsByClassName('e-spel-content')[0] as HTMLElement).style.display = 'block';
        }
    }
    /* custom code start */
    const clearHighlight = () => {
        let codeMirrorElem: any = document.getElementsByClassName('e-query-preview')[0].querySelectorAll('.CodeMirror');
        for (let i: number = codeMirrorElem.length - 1; i >= 0; i--) {
            codeMirrorElem[i].remove();
        }
    }
    /* custom code end */
    const change = (args: any) => {
        if (args.value === "Inline") {
            queryType = 'inline';
        } else if (args.value === "Parameter") {
            queryType = 'parameter';
        } else {
            queryType = 'namedParemeter';
        }
        updateSQLContentTemplate();
    }
    const updateSQLContent = () => {
        let content: string;
        let qbrule: any = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        let sqlJSON: any;
        switch (queryType){
            case 'inline':
                content = qryBldrObj.current.getSqlFromRules(qbrule);;
                break;
            case 'parameter':
                content = convertParameterSql(qbrule);
                break;
            default:
                content = convertNamedParameterSql(qbrule);
                break;
        }
        return content;
    }
    
    const convertParameterSql = (qbrule: any) => {
        let content: string = JSON.stringify(qryBldrObj.current.getParameterizedSql(qbrule), null, 4); 
        return content;
    }
    const convertNamedParameterSql = (qbrule: any) => { 
        let content: string = JSON.stringify(qryBldrObj.current.getParameterizedNamedSql(qbrule), null, 4);
        return content;
    }
    const updateRule = () => {
        updateContentTemplate();
    }
    const lockrule = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.lockRule = args.checked as boolean;
    }
    const lockgroup = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.lockGroup = args.checked as boolean;
    }
    const clonerule = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.cloneRule = args.checked as boolean;
    }
    const clonegroup = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.cloneGroup = args.checked as boolean;
    }
    const newrulegroups = (args: ChangeEventArgs) => {
        qryBldrObj.current.addRuleToNewGroups = args.checked as boolean;
    }
    const selectfield = (args: ChangeEventArgs) => {
        qryBldrObj.current.autoSelectField = args.checked as boolean;
    }
    const selectoperator = (args: ChangeEventArgs) => {
        qryBldrObj.current.autoSelectOperator = args.checked as boolean;
    }
    const ruledelete = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.ruleDelete = args.checked as boolean;
    }
    const groupInsert = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.groupInsert = args.checked as boolean;
    }
    const groupdelete = (args: ChangeEventArgs) => {
        qryBldrObj.current.showButtons.groupDelete = args.checked as boolean;
    }
    const summaryview = (args: ChangeEventArgs) => {
        qryBldrObj.current.summaryView = args.checked as boolean;
    }
    const notcondition = (args: ChangeEventArgs) => {
        qryBldrObj.current.enableNotCondition = args.checked as boolean;
    }
    const loadParameter = () => {
        let qbrule: RuleModel = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        currentvalue.value = JSON.stringify(qryBldrObj.current.getParameterizedSql(qbrule), null, 4);
        currentvalue.rule = 'parameter';
        dialogHeader = "Parameter SQL",
        dialogInstance.show();
    }
    const loadNamedParameter = () => {
        let qbrule: RuleModel = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        currentvalue.value = JSON.stringify(qryBldrObj.current.getParameterizedNamedSql(qbrule), null, 4);
        currentvalue.rule = 'namedparameter';
        dialogHeader = "NamedParameter SQL",
        dialogInstance.show();
    }
    const loadMongoQuery = () => {
        let validRule = qryBldrObj.current.getValidRules(qryBldrObj.current.rule);
        let mongoQuery = JSON.parse(qryBldrObj.current.getMongoQuery(validRule));
        mongoQuery =  JSON.stringify(mongoQuery, null, 4);
        currentvalue.value = mongoQuery;
        currentvalue.rule = 'mongo';
        dialogHeader = "Mongo Query",
        dialogInstance.show();
    }
    const dialogContent = () => {
        return (<form>
            <textarea className="content-area" id="content-area"></textarea>
        </form>);
    }
    const dialogOpen = () => {
        let dlgContentElement: any = document.getElementById('content-area');
        if (dlgContentElement && currentvalue) {
            dlgContentElement.value = currentvalue.value;
            dialogInstance.header = dialogHeader;
        }
    }
    const importQuery = () => {
        let textAreacontent: HTMLTextAreaElement = document.getElementById('content-area') as HTMLTextAreaElement;
        if (currentvalue.rule === 'mongo') {
             qryBldrObj.current.setMongoQuery(textAreacontent.value);
        } else if (currentvalue.rule === 'namedparameter') {
             qryBldrObj.current.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
        } else if (currentvalue.rule === 'parameter') {
             qryBldrObj.current.setParameterizedSql(JSON.parse(textAreacontent.value));
        }
        updateRule();
    }
    const buttons = [
        {
            buttonModel: {
                content:'Import',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            click: () => {
                importQuery();
                dialogInstance.hide();
            },
        },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat',
            },
            click: () => {
                dialogInstance.hide();
            },
        },
    ];
    let openPopup = () => {
        document.getElementById('parameter').addEventListener('click', loadParameter);
        document.getElementById('named_parameter').addEventListener('click', loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', loadMongoQuery);
    }
    let beforeClose = () => {
        document.getElementById('parameter').removeEventListener('click', loadParameter);
        document.getElementById('named_parameter').addEventListener('click', loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', loadMongoQuery);
    }
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="parent-container">
                    <div className="child right-content">
                        <div className="top-right-element">
                            <DropDownButtonComponent target='#target' cssClass="e-caret-hide" iconCss='e-icons e-settings' open={openPopup} beforeClose={beforeClose}></DropDownButtonComponent>
                        </div>
                        <div className='top-right-content'>
                            <QueryBuilderComponent id="querybuilder" dataSource={employeeData} columns={columnData} rule={importRules} ref={qryBldrObj} ruleChange={updateRule}></QueryBuilderComponent>
                        </div>
                        <div className="App" id='dialog-target'>
                            <DialogComponent id='dialog' width='700px' height='420px' target='#dialog-target' isModal={true} animationSettings={animationSettings} header={dialogHeader} visible={false} beforeOpen={dialogOpen} closeOnEscape={false} showCloseIcon={true} buttons={buttons} ref={dialog => dialogInstance = dialog}>
                                <div>{dialogContent()}</div>
                            </DialogComponent>
                        </div>
                        <div className="bottom-right-content">
                            <div className="e-query-preview">
                                <TabComponent id='defaultTab' ref={tabObj} selected={changeTab} created={tabCreated}>
                                    <TabItemsDirective>
                                        <TabItemDirective header={headertext[0]} content={SQLTemplate} />
                                        <TabItemDirective header={headertext[1]} content={JSONTemplate} />
                                        <TabItemDirective header={headertext[2]} content={MongoDBTemplate} />
                                        <TabItemDirective header={headertext[3]} content={CELTemplate} />
                                        <TabItemDirective header={headertext[4]} content={SpELTemplate} />
                                    </TabItemsDirective>
                                </TabComponent>
                            </div>
                        </div>
                    </div>
                    <div id="target" className="child left-content">
                        <span className='left-header'>Options</span>
                        <table id="property" title="Options" className='property' style={{ width: '100%' }}>
                            <tbody>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={lockrule} label='Enable lock rule' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={lockgroup} label='Enable lock group' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={clonerule} label='Enable clone rule' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={clonegroup} label='Enable clone group' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={newrulegroups} label='Add rule to new groups' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={selectfield} label='Enable auto select field' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={selectoperator} label='Enable auto select operator' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={ruledelete} label='Enable rule delete' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={groupInsert} label='Enable group insert' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={groupdelete} label='Enable group delete' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={summaryview} label='Enable summary view' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '15px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={notcondition} label='Enable not condition' />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="parameter" onClick={loadParameter}>Import Parameter SQL</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="named_parameter" onClick={loadNamedParameter}>Import Named Parameter SQL</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="mongo" onClick={loadMongoQuery}>Import MongoDB Query</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id='action-description'>
                <p>This sample demonstrates the overview of Query Builder component with showing differnt types of queries. The query preview can be changed using the tab component.</p>
            </div>
            <div id='description'>
                <p>
                    The Query Builder component is used to create or edit the filters. You can edit the filters by changing the appropriate fields. In this demo, Query Builder features such as exporting the filter as SQL Query and JSON are used along with the sample level implementation of
                    CEL, SpEL and Mongo queries.
                </p>
                <p>
                    More information about Query Builder can be found in this
                    <a target='_blank' href='https://ej2.syncfusion.com/react/documentation/query-builder/getting-started/'>
                        documentation section</a>.
                </p>
            </div>
        </div>
    );
}
export default HeaderTemplate;