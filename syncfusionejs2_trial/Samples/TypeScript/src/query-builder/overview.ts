import { loadCultureFiles } from '../common/culture-loader';
import { QueryBuilder, ColumnsModel, RuleModel, RuleChangeEventArgs, ActionEventArgs} from '@syncfusion/ej2-querybuilder';
import { closest } from '@syncfusion/ej2-base';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { employeeData } from './data-source';
import { Tab } from '@syncfusion/ej2-navigations';
import { RadioButton } from '@syncfusion/ej2-buttons';
import { updateRuleValue, getNamedParameterSql, getParameterSql, getMongoQuery, getCELQuery, getSpELQuery } from './util';

/**
 * Header Template sample
 */
// tslint:disable-next-line
(window as any).default = (): void => {
    loadCultureFiles();
    let content: string = "";
    let ruleValue: string[] = [];
    let queryType: string = 'inline';
    let  selectedIndex: number = 0;
    let selectedContent: HTMLElement;
    let element: Element = document.getElementById('txtAreacontent');
    // Initialize RadioButton component.
    let radiobutton: RadioButton = new RadioButton({ label: 'Inline', name: 'state', checked: true, value: "Inline", change: change});
    
    // Render initialized RadioButton.
    radiobutton.appendTo('#element1');
    
    radiobutton = new RadioButton({ label: 'Parameterized', name: 'state', value: "Parameterized", change: change, cssClass: 'e-custom-radio-btn'});
    radiobutton.appendTo('#element2');
    radiobutton = new RadioButton({ label: 'Named Parameter', name: 'state', value: "NamedParameter", change: change, cssClass: 'e-custom-radio-btn'});
    radiobutton.appendTo('#element3');
    
    let filter: ColumnsModel[] = [
      { field: 'EmployeeID', label: 'Employee ID', type: 'number' },
      { field: 'FirstName', label: 'First Name', type: 'string' },
      { field: 'LastName', label: 'Last Name', type: 'string' },
      { field: 'HireDate', label: 'Hire Date', type: 'date', format: "MM/dd/yyyy" },
      { field: 'Country', label: 'Country', type: 'string' },
    ];
    
    let importRules: RuleModel = {
      condition: 'and',
      rules: [
        { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Nan" },
        { label: "Employee ID", field: "EmployeeID", type: "number", operator: "equal", value: 1 },
        { condition: "or", rules: [
                { label: "Hire Date", field: "HireDate", type: "date", operator: "equal", value: "11/30/2023" },
                { label: "Employee ID", field: "EmployeeID", type: "number", operator: "between", value: [1, 5] }
            ]
        }
    ]
    };
    let qryBldrObj: QueryBuilder = new QueryBuilder({
      dataSource: employeeData,
      columns: filter,
      rule: importRules,
      headerTemplate: '#headerTemplate',
      actionBegin: actionBegin,
      ruleChange: updateRule,
    });
    qryBldrObj.appendTo('#querybuilder');
    
    //Initialize Tab component
    let tabObj: Tab = new Tab({
      height: 320,
      created: updateContent,
      selected: tabChange
    });
    //Render initialized Tab component
    tabObj.appendTo('#tab_orientation');
    
    function actionBegin(args: ActionEventArgs): void {
      if (args.requestType === 'header-template-create') {
        let ds: { [key: string]: Object }[] = [
          { key: 'AND', value: 'and' },
          { key: 'OR', value: 'or' },
        ];
        let btnObj: DropDownList = new DropDownList({
          dataSource: ds,
          fields: { text: 'key', value: 'value' },
          value: args.condition,
          cssClass: "e-custom-group-btn",
          change: (e: any) => {
            qryBldrObj.notifyChange(e.value, e.element, 'condition');
            updateRule();
          },
        });
        btnObj.appendTo('#' + args.ruleID + '_cndtnbtn');
        let addGroup: Element = document
          .getElementById(args.ruleID)
          .querySelector('.e-grp-btn');
        if (addGroup) {
          (addGroup as HTMLElement).onclick = function (e: any) {
            let btnId: string = e.target.id; 
            let btn: string[]= btnId.split('_');
            qryBldrObj.addGroups([{condition: 'or', 'rules': [{}]}], btn[1]);
          };
        }
        let addCond: Element = document
          .getElementById(args.ruleID)
          .querySelector('.e-cond-btn');
        if (addCond) {
          (addCond as HTMLElement).onclick = function (e: any) {
            let btnId: string = e.target.id; 
            let btn: string[]= btnId.split('_');
            qryBldrObj.addRules([{}], btn[1]);
          };
        }
        let deleteGroup: Element = document
          .getElementById(args.ruleID)
          .querySelector('.e-del-btn');
        if (deleteGroup) {
          (deleteGroup as HTMLElement).onclick = function (e: any) {
            qryBldrObj.deleteGroup(
              closest(e.target.offsetParent, '.e-group-container')
            );
          };
        }
      }
    }
    
    function updateContent(): void {
        let qbrule: RuleModel = qryBldrObj.getValidRules();
        switch (queryType){
            case 'inline':
                content = qryBldrObj.getSqlFromRules(qbrule);;
                break;
            case 'parameterized':
                convertParameterSql(qbrule);
                break;
            default:
                convertNamedParameterSql(qbrule);
                break;
        }
        (document.getElementsByClassName('e-text-area-content')[0] as any).value = content;
    }
    
    function change(args: any){
      if (args.value === "Inline") {
          queryType = 'inline';
      } else if (args.value === "Parameterized") {
          queryType = 'parameterized';
      } else {
          queryType = 'namedParemeter';
      }
      updateContent();
    }
    
    function tabChange(args: any) {
        selectedIndex = args.selectedIndex;
        selectedContent = args.selectedContent;
        updateRule();
    }
    function updateRule() {
        switch(selectedIndex) {
            case 0:
                updateContent();
                break;
            case 1:
                convertJSON();
                break;
            case 2:
                convertMongoQuery();
                break;
            case 3:
                convertCELQuery();
                break;
            case 4:
                convertSpELQuery();
                break;
        }
    }
    function convertParameterSql(qbrule: RuleModel): void {
        ruleValue = updateRuleValue(qbrule, false); 
        content = qryBldrObj.getSqlFromRules(qbrule); 
        content =  getParameterSql(content, ruleValue);
    }
    
    function convertNamedParameterSql(qbrule: RuleModel): void {
        ruleValue = updateRuleValue(qbrule, true); 
        content = qryBldrObj.getSqlFromRules(qbrule); 
        content = getNamedParameterSql(content, ruleValue);
    }
    
    function convertJSON() {
        let validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        let jsonValue = JSON.stringify(validRule, null, 4);
        (selectedContent.querySelector('.e-text-area-content') as any).value  = jsonValue;
    }
    
    function convertMongoQuery() {
        let mongoQuery: string = "{";
        const allRules = qryBldrObj.getValidRules();
        mongoQuery =  getMongoQuery(allRules, mongoQuery);
        const mongoJSON = JSON.parse(mongoQuery);
        mongoQuery = JSON.stringify(mongoJSON, null, 4);
        (selectedContent.querySelector('.e-text-area-content') as any).value = mongoQuery;
    }
    
    function convertCELQuery() {
        const allRules = qryBldrObj.getValidRules();
        let celQuery: string = '';
        celQuery = getCELQuery(allRules, celQuery);
        (selectedContent.querySelector('.e-text-area-content') as any).value = celQuery;
        return (celQuery);
    }
    
    function convertSpELQuery() {
        let spELQuery: string = '';
        const allRules = qryBldrObj.getValidRules();
        spELQuery = getSpELQuery(allRules, spELQuery);
        (selectedContent.querySelector('.e-text-area-content') as any).value = spELQuery;
    }
    
};