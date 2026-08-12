import { loadCultureFiles } from '../common/culture-loader';
import { Browser } from '@syncfusion/ej2-base';
import { QueryBuilder, ColumnsModel, RuleModel, QueryLibrary } from '@syncfusion/ej2-querybuilder';
import { employeeData } from './data-source';
import { Tab } from '@syncfusion/ej2-navigations';
import { getCELQuery, getSpELQuery } from './util';
import { Tooltip } from '@syncfusion/ej2/popups';

// tslint:disable-next-line
(window as any).default = (): void => {
    loadCultureFiles();
    let content: string = "";
    let  selectedIndex: number = 0;
    let selectedContent: HTMLElement;
    
    let dateOperators: any = [
        { value: 'equal', key: 'Equal' },
        { value: 'greaterthan', key: 'Greater Than' },
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
    ];
    let boolOperators: any = [
        { value: 'equal', key: 'Equal' },
    ];
    let columns: ColumnsModel[] = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string" },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
        { field: "Country", label: "Country", type: "string" },
    ]
    let importRules: RuleModel = {
        condition: "and",
        rules: [
            { label: "First Name", field: "FirstName", type: "string", operator: "startswith", value: "Andre" },
            { label: "Last Name", field: "LastName", type: "string", operator: "in", value: ['Davolio', 'Buchanan'] },
            { label: "Age", field: "Age", type: "number", operator: "greaterthan", value: 29 },
            {
                condition: "or", rules: [
                    { label: "Is Developer", field: "IsDeveloper", type: "boolean", operator: "equal", value: true },
                    { label: "Primary Framework", field: "PrimaryFramework", type: "string", operator: "equal", value: "React" }
                ]
            },
            { label: "Hire Date", field: "HireDate", type: "date", operator: "between", value: ["11/22/2023", "11/30/2023"] },
        ],
    };

    let qryBldrObj: QueryBuilder = new QueryBuilder({
        dataSource: employeeData,
        rule: importRules,
        columns: columns,
        ruleChange: updateContentTemplate,
    });
    qryBldrObj.appendTo('#querybuilder');

    let tabObj: Tab = new Tab({
        height: 320,
        created: updateCELContentTemplate,
        selected: tabChange
    });
    //Render initialized Tab component
    tabObj.appendTo('#tab_orientation');
    let tooltip: Tooltip = new Tooltip({
        opensOn: 'Click',
        content: 'Copied to clipboard'
    });
    tooltip.appendTo('#tooltipclick');
    function updateCELContentTemplate(): void {
        const allRules = qryBldrObj.getValidRules();
        let celQuery: string = '';
        celQuery = getCELQuery(allRules, celQuery);
        content = celQuery
        document.getElementsByClassName('e-cel-content')[0].textContent = content;
        (document.getElementsByClassName('e-cel-content')[0] as HTMLElement).style.display = 'block';
    }

    function updateSpCELContentTemplate(): void {
        const allRules: any = qryBldrObj.getValidRules();
        content = getSpELQuery(allRules);
        document.getElementsByClassName('e-spel-content')[0].textContent = content;
        (document.getElementsByClassName('e-spel-content')[0] as HTMLElement).style.display = 'block';
    }

    function updateContentTemplate(): void {
        switch (selectedIndex) {
            case 0:
                updateCELContentTemplate();
                break;
            case 1:
                updateSpCELContentTemplate();
                break;
        }
    };
    
    function tabChange(args: any) {
        selectedIndex = args.selectedIndex;
        selectedContent = args.selectedContent;
        setTimeout(function() {
            updateContentTemplate();
        }, 100);
    }
    const queryPreview: HTMLElement = document.getElementById('e-query-preview');
    queryPreview?.addEventListener('mouseenter', () => {
        let elem: any= document.getElementsByClassName("copy-tooltip");
        elem[0].style.display = 'block';
    });
    queryPreview?.addEventListener('mouseleave', () => {
        let elem: any = document.getElementsByClassName("copy-tooltip");
        elem[0].style.display = 'none';
    });
    
};
