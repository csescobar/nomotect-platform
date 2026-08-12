import * as React from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { getComponent } from '@syncfusion/ej2-base';
import { ButtonComponent, CheckBoxComponent, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { SampleBase } from '../common/sample-base';
import './query-preview.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { getCELQuery, getSpELQuery } from './util';
import { DialogComponent, TooltipComponent } from '@syncfusion/ej2-react-popups';
import { employeeData } from './data-source';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
const frameworkTemplate = (props) => {
    let ds = ["React", "Angular", "Vue", "TypeScript", "JavaScript"];
    let state = Object.assign({}, props);
    const args = state;
    const frameworkChange = (event) => {
        let qryBldrObj = getComponent(document.getElementById('querybuilder'), 'query-builder');
        let elem = document.getElementById(args.ruleID).querySelector('.e-rule-value');
        qryBldrObj.notifyChange(event.value, elem, 'value');
    };
    return (<div><DropDownListComponent dataSource={ds} value={args.rule.value} change={frameworkChange}/></div>);
};
export class Template extends SampleBase {
    headertext = [
        { text: "SQL" },
        { text: "JSON" },
        { text: "MongoDB" },
        { text: "CEL" },
        { text: "SpEL" }
    ];
    mongoQuery = '{';
    celQuery = '';
    spELQuery = '';
    queryType = 'inline';
    ruleValue = [];
    qryBldrObj;
    dialogInstance;
    animationSettings;
    currentvalue = {
        value: '',
        rule: ''
    };
    dialogHeader;
    tabObj;
    txtAreaElem;
    currentIndex = 0;
    content;
    boolOperators = [
        { value: 'equal', key: 'Equal' },
    ];
    dateOperators = [
        { value: 'equal', key: 'Equal' },
        { value: 'greaterthan', key: 'Greater Than' },
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
    ];
    importRules;
    columnData;
    constructor(args) {
        super(args);
        this.columnData = [
            { field: "EmployeeID", label: "Employee ID", type: "number" },
            { field: "FirstName", label: "First Name", type: "string" },
            { field: "LastName", label: "Last Name", type: "string" },
            { field: "Age", label: "Age", type: "number" },
            { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: this.boolOperators },
            { field: "PrimaryFramework", label: "Primary Framework", type: "string", template: frameworkTemplate, operators: this.boolOperators },
            { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: this.dateOperators },
            { field: "Country", label: "Country", type: "string" },
        ];
        this.importRules = {
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
    }
    SQLTemplate = () => {
        const isInline = this.queryType === "inline";
        const isParameter = this.queryType === "parameter";
        const isNamedParameter = this.queryType === "namedParameter";
        return (<div className="preview-content" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="e-preview-options">
                    <label>Format Info:</label>
                    <RadioButtonComponent cssClass="e-radio-option" change={this.change} label="Inline" checked={isInline} name="state" value="Inline"></RadioButtonComponent>
                    <RadioButtonComponent cssClass="e-radio-option" checked={isParameter} change={this.change} label="Parameter" name="state" value="Parameter"></RadioButtonComponent>
                    <RadioButtonComponent cssClass="e-radio-option" checked={isNamedParameter} change={this.change} label="Named Parameter" name="state" value="NamedParameter"></RadioButtonComponent>
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={this.copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-sql-content" style={{ display: 'none' }}/>
            </div>);
    };
    JSONTemplate = () => {
        return (<div className="preview-content" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={this.copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-json-content" style={{ display: 'none' }}/>
            </div>);
    };
    MongoDBTemplate = () => {
        return (<div className="preview-content" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={this.copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-mongo-content" style={{ display: 'none' }}/>
            </div>);
    };
    CELTemplate = () => {
        return (<div className="preview-content" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={this.copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-cel-content" style={{ display: 'none' }}/>
            </div>);
    };
    SpELTemplate = () => {
        return (<div className="preview-content" onClick={this.handleMouseEnter} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
              <div className="e-preview-options">
                  <div className="copy-tooltip" style={{ display: 'none' }} onClick={this.copyClipboard}>
                      <TooltipComponent opensOn="Click" content="Copied to clipboard">
                          <div className="e-icons copycode"></div>
                      </TooltipComponent>
                  </div>
              </div>
              <textarea className="e-spel-content" style={{ display: 'none' }}/>
          </div>);
    };
    tabCreated = (args) => {
        setTimeout(() => {
            this.updateSQLContentTemplate();
        }, 100);
    };
    changeTab = (args) => {
        this.currentIndex = args.selectedIndex;
        setTimeout(() => {
            this.updateContentTemplate();
        }, 100);
    };
    updateContentTemplate = () => {
        switch (this.currentIndex) {
            case 0:
                this.updateSQLContentTemplate();
                break;
            case 1:
                this.updateJSONContentTemplate();
                break;
            case 2:
                this.updateMongoContentTemplate();
                break;
            case 3:
                this.updateCELContentTemplate();
                break;
            case 4:
                this.updateSpCELContentTemplate();
                break;
        }
    };
    updateJSONContentTemplate = () => {
        let codeMirrorEditor;
        let validRule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        this.content = JSON.stringify(validRule, null, 4);
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-json-content')[0].textContent = this.content;
            document.getElementsByClassName('e-json-content')[0].style.display = 'block';
        }
    };
    updateMongoContentTemplate = () => {
        let codeMirrorEditor;
        let validRule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        let mongoQuery = JSON.parse(this.qryBldrObj.getMongoQuery(validRule));
        mongoQuery = JSON.stringify(mongoQuery, null, 4);
        this.content = mongoQuery;
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-mongo-content')[0].textContent = this.content;
            document.getElementsByClassName('e-mongo-content')[0].style.display = 'block';
        }
    };
    updateCELContentTemplate = () => {
        let codeMirrorEditor;
        const allRules = this.qryBldrObj.getValidRules();
        this.celQuery = '';
        this.content = getCELQuery(allRules);
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-cel-content')[0].textContent = this.content;
            document.getElementsByClassName('e-cel-content')[0].style.display = 'block';
        }
    };
    updateSpCELContentTemplate = () => {
        let codeMirrorEditor;
        this.spELQuery = '';
        const allRules = this.qryBldrObj.getValidRules();
        this.content = getSpELQuery(allRules);
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-spel-content')[0].textContent = this.content;
            document.getElementsByClassName('e-spel-content')[0].style.display = 'block';
        }
    };
    change = (args) => {
        if (args.value === "Inline") {
            this.queryType = 'inline';
        }
        else if (args.value === "Parameter") {
            this.queryType = 'parameter';
        }
        else {
            this.queryType = 'namedParemeter';
        }
        this.updateSQLContentTemplate();
    };
    updateSQLContentTemplate = () => {
        let codeMirrorEditor;
        this.content = this.updateSQLContent();
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-sql-content')[0].textContent = this.content;
            document.getElementsByClassName('e-sql-content')[0].style.display = 'block';
        }
    };
    updateSQLContent = () => {
        let content;
        let qbrule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        let sqlJSON;
        switch (this.queryType) {
            case 'inline':
                content = this.qryBldrObj.getSqlFromRules(qbrule);
                ;
                break;
            case 'parameter':
                content = this.convertParameterSql(qbrule);
                break;
            default:
                content = this.convertNamedParameterSql(qbrule);
                break;
        }
        return content;
    };
    convertParameterSql = (qbrule) => {
        let content = JSON.stringify(this.qryBldrObj.getParameterizedSql(qbrule), null, 4);
        return content;
    };
    convertNamedParameterSql = (qbrule) => {
        let content = JSON.stringify(this.qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
        return content;
    };
    copyClipboard = (args) => {
        navigator.clipboard.writeText(this.content);
        setTimeout(function () {
            getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    };
    updateRule = () => {
        this.updateContentTemplate();
    };
    // Handler used to reposition the tooltip on page scroll
    lockrule = (args) => {
        this.qryBldrObj.showButtons.lockRule = args.checked;
    };
    lockgroup = (args) => {
        this.qryBldrObj.showButtons.lockGroup = args.checked;
    };
    clonerule = (args) => {
        this.qryBldrObj.showButtons.cloneRule = args.checked;
    };
    clonegroup = (args) => {
        this.qryBldrObj.showButtons.cloneGroup = args.checked;
    };
    newrulegroups = (args) => {
        this.qryBldrObj.addRuleToNewGroups = args.checked;
    };
    selectfield = (args) => {
        this.qryBldrObj.autoSelectField = args.checked;
    };
    selectoperator = (args) => {
        this.qryBldrObj.autoSelectOperator = args.checked;
    };
    ruledelete = (args) => {
        this.qryBldrObj.showButtons.ruleDelete = args.checked;
    };
    groupInsert = (args) => {
        this.qryBldrObj.showButtons.groupInsert = args.checked;
    };
    groupdelete = (args) => {
        this.qryBldrObj.showButtons.groupDelete = args.checked;
    };
    summaryview = (args) => {
        this.qryBldrObj.summaryView = args.checked;
    };
    notcondition = (args) => {
        this.qryBldrObj.enableNotCondition = args.checked;
    };
    loadParameter = (args) => {
        let qbrule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        this.currentvalue.value = JSON.stringify(this.qryBldrObj.getParameterizedSql(qbrule), null, 4);
        this.currentvalue.rule = 'parameter';
        this.dialogHeader = "Parameter SQL",
            this.dialogInstance.show();
    };
    loadNamedParameter = () => {
        let qbrule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        this.currentvalue.value = JSON.stringify(this.qryBldrObj.getParameterizedNamedSql(qbrule), null, 4);
        this.currentvalue.rule = 'namedparameter';
        this.dialogHeader = "NamedParameter SQL",
            this.dialogInstance.show();
    };
    loadMongoQuery = () => {
        let validRule = this.qryBldrObj.getValidRules(this.qryBldrObj.rule);
        let mongoQuery = JSON.parse(this.qryBldrObj.getMongoQuery(validRule));
        mongoQuery = JSON.stringify(mongoQuery, null, 4);
        this.currentvalue.value = mongoQuery;
        this.currentvalue.rule = 'mongo';
        this.dialogHeader = "Mongo Query",
            this.dialogInstance.show();
    };
    openPopup = () => {
        document.getElementById('parameter').addEventListener('click', this.loadParameter);
        document.getElementById('named_parameter').addEventListener('click', this.loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', this.loadMongoQuery);
    };
    beforeClose = () => {
        document.getElementById('parameter').removeEventListener('click', this.loadParameter);
        document.getElementById('named_parameter').addEventListener('click', this.loadNamedParameter);
        document.getElementById('mongo').addEventListener('click', this.loadMongoQuery);
    };
    dialogContent = () => {
        return (<form>
            <textarea className="content-area" id="content-area"></textarea>
        </form>);
    };
    importQuery = () => {
        let textAreacontent = document.getElementById('content-area');
        if (this.currentvalue.rule === 'mongo') {
            this.qryBldrObj.setMongoQuery(textAreacontent.value);
        }
        else if (this.currentvalue.rule === 'namedparameter') {
            this.qryBldrObj.setParameterizedNamedSql(JSON.parse(textAreacontent.value));
        }
        else if (this.currentvalue.rule === 'parameter') {
            this.qryBldrObj.setParameterizedSql(JSON.parse(textAreacontent.value));
        }
        this.updateRule();
    };
    buttons = [
        {
            buttonModel: {
                content: 'Import',
                cssClass: 'e-flat',
                isPrimary: true,
            },
            click: () => {
                this.importQuery();
                this.dialogInstance.hide();
            },
        },
        {
            buttonModel: {
                content: 'Cancel',
                cssClass: 'e-flat',
            },
            click: () => {
                this.dialogInstance.hide();
            },
        },
    ];
    dialogOpen = () => {
        let dlgContentElement = document.getElementById('content-area');
        if (dlgContentElement && this.currentvalue) {
            dlgContentElement.value = this.currentvalue.value;
            this.dialogInstance.header = this.dialogHeader;
        }
    };
    render() {
        return (<div className='control-pane'>
            <div className='control-section'>
                <div className="parent-container">
                    <div className="child right-content">
                        <div className="top-right-element">
                            <DropDownButtonComponent target='#target' cssClass="e-caret-hide" iconCss='e-icons e-settings' open={this.openPopup} beforeClose={this.beforeClose}></DropDownButtonComponent>
                        </div>
                        <div className='top-right-content'>
                            <QueryBuilderComponent id="querybuilder" dataSource={employeeData} columns={this.columnData} rule={this.importRules} ref={(scope) => { this.qryBldrObj = scope; }} ruleChange={this.updateRule}></QueryBuilderComponent>
                        </div>
                        <div className="App" id='dialog-target'>
                            <DialogComponent id='dialog' width='700px' height='420px' target='#dialog-target' isModal={true} animationSettings={this.animationSettings} header={this.dialogHeader} visible={false} beforeOpen={this.dialogOpen} closeOnEscape={false} showCloseIcon={true} buttons={this.buttons} ref={(scope) => { this.dialogInstance = scope; }}>
                                <div>{this.dialogContent()}</div>
                            </DialogComponent>
                        </div>
                        <div className="bottom-right-content">
                            <div className="e-query-preview">
                                <TabComponent id='defaultTab' ref={(scope) => { this.tabObj = scope; }} selected={this.changeTab} created={this.tabCreated}>
                                    <TabItemsDirective>
                                        <TabItemDirective header={this.headertext[0]} content={this.SQLTemplate}/>
                                        <TabItemDirective header={this.headertext[1]} content={this.JSONTemplate}/>
                                        <TabItemDirective header={this.headertext[2]} content={this.MongoDBTemplate}/>
                                        <TabItemDirective header={this.headertext[3]} content={this.CELTemplate}/>
                                        <TabItemDirective header={this.headertext[4]} content={this.SpELTemplate}/>
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
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.lockrule} label='Enable lock rule'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.lockgroup} label='Enable lock group'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.clonerule} label='Enable clone rule'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.clonegroup} label='Enable clone group'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={this.newrulegroups} label='Add rule to new groups'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.selectfield} label='Enable auto select field'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={this.selectoperator} label='Enable auto select operator'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.ruledelete} label='Enable rule delete'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={true} change={this.groupInsert} label='Enable group insert'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.groupdelete} label='Enable group delete'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.summaryview} label='Enable summary view'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ width: '100%', paddingTop: '10px', display: 'flex', alignItems: 'center' }}>
                                        <CheckBoxComponent checked={false} change={this.notcondition} label='Enable not condition'/>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="parameter" onClick={this.loadParameter}>Import Parameter SQL</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="named_parameter" onClick={this.loadNamedParameter}>Import Named Parameter SQL</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ paddingTop: '15px' }}>
                                        <div>
                                            <ButtonComponent cssClass="e-btn e-custom-btn" id="mongo" onClick={this.loadMongoQuery}>Import MongoDB Query</ButtonComponent>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div id='action-description'>
                    <p>This sample demonstrates the Query Builder component with showing different types of queries. The query preview can be changed using the tab component.</p>
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
            </div>);
    }
}
