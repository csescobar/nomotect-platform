import { loadCultureFiles } from '../common/culture-loader';
import { Browser } from '@syncfusion/ej2-base';
import { QueryBuilder, ColumnsModel, RuleModel, QueryLibrary } from '@syncfusion/ej2-querybuilder';
import { employeeData } from './data-source';
import { Tab } from '@syncfusion/ej2-navigations';
import { RadioButton } from '@syncfusion/ej2-buttons';

QueryBuilder.Inject(QueryLibrary);

/**
 * Default querybuilder sample
 */
// tslint:disable-next-line
(window as any).default = (): void => {
    loadCultureFiles();
    let content: string = "";
    let queryType: string = 'inline';
    let  selectedIndex: number = 0;
    let selectedContent: HTMLElement;
    let radiobutton: RadioButton = new RadioButton({ label: 'Inline', name: 'state', checked: true, value: "Inline", change: change});
    
    // Render initialized RadioButton.
    radiobutton.appendTo('#element1');
    
    radiobutton = new RadioButton({ label: 'Parameterized', name: 'state', value: "Parameterized", change: change, cssClass: 'e-custom-radio-btn'});
    radiobutton.appendTo('#element2');
    radiobutton = new RadioButton({ label: 'Named Parameter', name: 'state', value: "NamedParameter", change: change, cssClass: 'e-custom-radio-btn'});
    radiobutton.appendTo('#element3');
    
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
        rule: importRules,
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
        }
    }
    function convertParameterSql(qbrule: RuleModel): void {
        content = JSON.stringify(qryBldrObj.getParameterizedSql(qbrule), null, 4);
    }
    
    function convertNamedParameterSql(qbrule: RuleModel): void {
        content = JSON.stringify(qryBldrObj.getParameterizedNamedSql(qbrule), null, 4)
    }
    
    function convertJSON() {
        let validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        let jsonValue = JSON.stringify(validRule, null, 4);
        (selectedContent.querySelector('.e-text-area-content') as any).value  = jsonValue;
    }
    
    function convertMongoQuery() {
        let validRule = qryBldrObj.getValidRules(qryBldrObj.rule);
        let mongoQuery = JSON.parse(qryBldrObj.getMongoQuery(validRule));
        let mongoJSON = JSON.stringify(mongoQuery, null, 4);
        (selectedContent.querySelector('.e-text-area-content') as any).value = mongoJSON;
    }
        
    document.getElementById('parameter').onclick = (e : Event) => {
        const parameterSQL: string = '{ "sql": "(EmployeeID = ? AND (Title LIKE (?) OR Title LIKE (?) OR (City = ? AND HireDate = ?)))", "params": ["1001", "%Sales Manager%", "%Sales%", "Kirkland", "12/12/2019"] }';
        qryBldrObj.setParameterizedSql(JSON.parse(parameterSQL));
    };
    
    document.getElementById('named_parameter').onclick = (e : Event) => {
        const parameterSQL: string = '{ "sql": "(EmployeeID = :EmployeeID_1 AND (Title LIKE (:Title_1) OR Title LIKE (:Title_2) OR (City = :City_1 AND HireDate = :HireDate_1)))", "params": {"EmployeeID_1":"1001", "Title_1": "%Sales Manager%", "Title_2": "%Sales%", "City_1": "Kirkland", "HireDate_1": "12/12/2019"} }';
        qryBldrObj.setParameterizedNamedSql(JSON.parse(parameterSQL));
    };
    
    document.getElementById('mongo').onclick = (e : Event) => {
        let mongoQuery: string = '{"$and":[{"EmployeeID":1001},{ "$or":[{"Title":{"$regex":"Sales Manager"}},{"Title":{"$regex":"Sales"}},{ "$and":[{"City":"Kirkland"},{"HireDate":"12/12/2019"}]}]},{"LastName":{"$regex":"^Sathees"}}]}';
        qryBldrObj.setMongoQuery(mongoQuery);
    };
    
    document.getElementById('reset').onclick = (e : Event) => {
        qryBldrObj.reset();
    };
};
