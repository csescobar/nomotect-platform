import * as React from 'react';
import { useEffect, useRef } from 'react';
import { QueryBuilderComponent } from '@syncfusion/ej2-react-querybuilder';
import { getComponent } from '@syncfusion/ej2-base';
import { updateSampleSection } from '../common/sample-base';
import './query-preview.css';
import { TabComponent, TabItemDirective, TabItemsDirective } from '@syncfusion/ej2-react-navigations';
import { getCELQuery, getSpELQuery } from './util';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { employeeData } from './data-source';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
let headertext = [
    { text: "CEL" },
    { text: "SpEL" }
];
let spELQuery = '';
let currentIndex = 0;
let content;
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
const CelSpelTemplate = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    let qryBldrObj = useRef(null);
    let tabObj = useRef(null);
    let dateOperators = [
        { value: 'equal', key: 'Equal' },
        { value: 'greaterthan', key: 'Greater Than' },
        { value: 'greaterthanorequal', key: 'Greater Than Or Equal' },
        { value: 'lessthan', key: 'Less Than' },
        { value: 'lessthanorequal', key: 'Less Than Or Equal' },
        { value: 'notequal', key: 'Not Equal' },
        { value: 'between', key: 'Between' },
        { value: 'notbetween', key: 'Not Between' }
    ];
    let boolOperators = [
        { value: 'equal', key: 'Equal' },
    ];
    let columnData = [
        { field: "EmployeeID", label: "Employee ID", type: "number" },
        { field: "FirstName", label: "First Name", type: "string" },
        { field: "LastName", label: "Last Name", type: "string" },
        { field: "Age", label: "Age", type: "number" },
        { field: "IsDeveloper", label: "Is Developer", type: "boolean", operators: boolOperators },
        { field: "PrimaryFramework", label: "Primary Framework", type: "string", template: frameworkTemplate, operators: boolOperators },
        { field: "HireDate", label: "Hire Date", type: "date", format: "MM/dd/yyyy", operators: dateOperators },
        { field: "Country", label: "Country", type: "string" },
    ];
    let importRules = {
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
    const handleMouseEnter = () => {
        let elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (tabObj.current.selectedItem == i) {
                elem[i].style.display = 'block';
            }
        }
    };
    const handleMouseLeave = () => {
        let elem = document.getElementsByClassName("copy-tooltip");
        for (var i = 0; i < elem.length; i++) {
            if (tabObj.current.selectedItem == i) {
                elem[i].style.display = 'none';
            }
        }
    };
    const copyClipboard = (args) => {
        navigator.clipboard.writeText(content);
        setTimeout(function () {
            getComponent(args.target.closest('.e-tooltip'), 'tooltip').close();
        }, 1000);
    };
    const CELTemplate = () => {
        return (<div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-cel-content" style={{ display: 'none' }}/>
            </div>);
    };
    const SpELTemplate = () => {
        return (<div className="preview-content" onClick={handleMouseEnter} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="e-preview-options">
                    <div className="copy-tooltip" style={{ display: 'none' }} onClick={copyClipboard}>
                        <TooltipComponent opensOn="Click" content="Copied to clipboard">
                            <div className="e-icons copycode"></div>
                        </TooltipComponent>
                    </div>
                </div>
                <textarea className="e-spel-content" style={{ display: 'none' }}/>
            </div>);
    };
    const tabCreated = () => {
        setTimeout(function () {
            updateCELContentTemplate();
        }, 100);
    };
    const changeTab = (args) => {
        currentIndex = args.selectedIndex;
        setTimeout(function () {
            updateContentTemplate();
        }, 100);
    };
    const updateContentTemplate = () => {
        switch (currentIndex) {
            case 0:
                updateCELContentTemplate();
                break;
            case 1:
                updateSpCELContentTemplate();
                break;
        }
    };
    const updateCELContentTemplate = () => {
        let codeMirrorEditor;
        const allRules = qryBldrObj.current.getValidRules();
        let celQuery = '';
        celQuery = getCELQuery(allRules, celQuery);
        content = celQuery;
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-cel-content')[0].textContent = content;
            document.getElementsByClassName('e-cel-content')[0].style.display = 'block';
        }
    };
    const updateSpCELContentTemplate = () => {
        let codeMirrorEditor;
        spELQuery = '';
        const allRules = qryBldrObj.current.getValidRules();
        content = getSpELQuery(allRules);
        if (!codeMirrorEditor) {
            document.getElementsByClassName('e-spel-content')[0].textContent = content;
            document.getElementsByClassName('e-spel-content')[0].style.display = 'block';
        }
    };
    const updateRule = () => {
        updateContentTemplate();
    };
    return (<div className='control-pane'>
            <div className='control-section'>
                <div className='col-lg-12 control-section'>
                    <QueryBuilderComponent id="querybuilder" dataSource={employeeData} columns={columnData} rule={importRules} ref={qryBldrObj} ruleChange={updateRule}></QueryBuilderComponent>
                    <div className="e-query-preview">
                        <TabComponent id='defaultTab' ref={tabObj} selected={changeTab} created={tabCreated}>
                            <TabItemsDirective>
                                <TabItemDirective header={headertext[0]} content={CELTemplate}/>
                                <TabItemDirective header={headertext[1]} content={SpELTemplate}/>
                            </TabItemsDirective>
                        </TabComponent>
                    </div>
                </div>
            </div>
            <div id='action-description'>
                <p>This sample demonstrates the Query Builder component with showing different types of queries such as CEL and SpEL. The query preview can be changed using the tab component.</p>
            </div>
            <div id='description'>
                <p>
                The Query Builder component is used to create or edit the filters. You can edit the filters by changing the appropriate fields. In this demo, Query Builder features such as exporting the filter as CEL and SpEL queries in sample level implementations.
                </p>
                <p>
                    More information about Query Builder can be found in this 
            <a target='_blank' href='https://ej2.syncfusion.com/react/documentation/query-builder/getting-started/'>
                        documentation section</a>.
                </p>
            </div>
        </div>);
};
export default CelSpelTemplate;
