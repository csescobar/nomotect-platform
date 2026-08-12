import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { AIAssistViewComponent, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import { gadgetsPurchaseData } from './datasource';
import { serverAIRequest } from '../common/ai-service';
import { Query } from '@syncfusion/ej2-data';
import { showSpinner, hideSpinner } from '@syncfusion/ej2-popups';
import { useEffect, useRef } from "react";
import { updateAISampleSection } from '../common/sample-base';
import './grid-assistance.css';

interface ToolbarOption {
    text?: string;
    tooltipText?: string;
    prefixIcon?: string;
    id?: string;
    align?: 'Left' | 'Center' | 'Right';
}
function GridAIAssistance() {
    useEffect(() => {
        updateAISampleSection();
    }, [])

    const assistInstance = useRef(null);
    const dialogInstance = useRef(null);
    const gridInstance = useRef(null);
    const suggestionListRef = useRef(null);
    const dialogWidth = 350;
    let promptsData = [];
    
    /// <summary>Toolbar options for Grid with AI Assist button</summary>
    const toolbarOptions: ToolbarOption[] = [{ text: 'AI Assist', tooltipText: 'AI Assist', prefixIcon: 'e-assistview-icon', id: 'ai-assist-btn', align: 'Right' }];

    /// <summary>Handles the Grid toolbar button click action. If the AI Assist button clicked shows the AI Assist dialog.</summary>
    const toolbarClick = (args) => {
        if (args.item.id === 'ai-assist-btn') {
            const gridRect = (gridInstance.current as any).element.getBoundingClientRect();
            const toolbarEleRect = document.getElementById('ai-grid_toolbarItems').getBoundingClientRect();
            const targetRect = args.originalEvent.target.closest('.e-toolbar-item').getBoundingClientRect();
            const x = targetRect.left - gridRect.left - dialogWidth - targetRect.width;
            const y = toolbarEleRect.height;
            dialogInstance.current.position = { X: x, Y: y };
            dialogInstance.current.show();
        }
    }

    /// <summary>Converts natural language into a JSON object and generates a query for the data action and bind to Grid.</summary>
    function clicked(text) {
        assistInstance.current.stopResponding.classList.remove('e-btn-active');
        assistInstance.current.scrollToBottom();
        showSpinner(document.getElementById('ai-grid') as HTMLElement);
        let textArea = `Convert the following natural language query to a JSON object representing Syncfusion Query operations for a single-table grid. Supported operations: where (object with field, operator, value, ignoreCase), sort (array of {field, direction}), search array of (object with key, fields, operator, ignoreCase, ignoreAccent), page (object with pageNumber, pageSize). Output only the JSON object, no extra text. Use exact values from the query without changes. Field should be camel case, operator shold be (startswith, endswith, contains, doesnotstartwith, doesnotendwith, doesnotcontain, equal, notequal, greaterthan, greaterthanorequal, lessthan, lessthanorequal, isnull, isnotnull, isempty, isnotempty, between, in, notin) and sort direction as (ascending or descending). If the column name is not specified for a filter, treat the value as a search query. For queries filtering multiple columns, create a where array with multiple objects. my table fieldNames (transactionId, customerDetails.name, product.name, paymentMethod, amount, status, quantity, date). Query: ${text}`;
        let aiOutput = serverAIRequest({ messages: [{ role: 'user', content: textArea }] });
        aiOutput.then((result) => {
            if (!result) {
                gridInstance.current.query = new Query();
                hideSpinner(document.getElementById('ai-grid') as HTMLElement);
                assistInstance.current.addPromptResponse({ prompt: text, response: result });
                return;
            }
            let jsonResult = result;
            if (result.indexOf("```json") !== -1) {
                jsonResult = result.split("```json")[1].split("```")[0].trim();
            }

            try {
                const queryOps = JSON.parse(jsonResult);
                let query = new Query();
                if (queryOps.where) {
                    if (Array.isArray(queryOps.where)) {
                        queryOps.where.forEach(where => {
                            query.where(
                                where.field,
                                where.operator || 'equal',
                                where.value,
                                typeof where.value === 'string' ? true : where.ignoreCase
                            );
                        });
                    } else {
                        query.where(
                            queryOps.where.field,
                            queryOps.where.operator || 'equal',
                            queryOps.where.value,
                            typeof queryOps.where.value === 'string' ? true : queryOps.where.ignoreCase
                        );
                    }
                }
                if (queryOps.sort && Array.isArray(queryOps.sort)) {
                    queryOps.sort.forEach(sort => {
                        if (sort.field && sort.direction) {
                            query = query.sortBy(sort.field, sort.direction);
                        }
                    });
                }
                if (queryOps.search && queryOps.search && Array.isArray(queryOps.search)) {
                    queryOps.search.forEach(search => {
                        query = query.search(
                            search.key,
                            search.fields,
                            search.operator || 'contains',
                            true,
                            search.ignoreAccent ?? false
                        );
                    })
                }
                if (queryOps.page && queryOps.page.pageNumber && queryOps.page.pageSize) {
                    query = query.skip((queryOps.page.pageNumber - 1) * queryOps.page.pageSize).take(queryOps.page.pageSize);
                }
                gridInstance.current.query = query;
                hideSpinner(document.getElementById('ai-grid') as HTMLElement);
                assistInstance.current.addPromptResponse({ prompt: text, response: queryOps });
            } catch (error) {
                gridInstance.current.query = new Query();
                hideSpinner(document.getElementById('ai-grid') as HTMLElement);
                assistInstance.current.addPromptResponse({ prompt: text, response: 'Invalid AI JSON' });
            }
            dialogInstance.current.hide();
        });
    }

    /// <summary>Configures toolbar settings for AI assist dialog</summary>
    const toolbarSettings: ToolbarSettingsModel = {
        items: [
            { tooltip: 'Start New Chat', iconCss: 'e-icons e-rename', align: 'Right' },
            { tooltip: 'Clear', iconCss: 'e-icons e-refresh', align: 'Right' },
            { tooltip: 'Close', iconCss: 'e-icons e-icon-dlg-close', align: 'Right' },
        ],
        itemClicked: (args) => {
            if (args.item.iconCss === 'e-icons e-icon-dlg-close') {
                dialogInstance.current.hide()
            }
            if (args.item.iconCss === 'e-icons e-rename') {
                assistInstance.current.prompts = [];
                promptsData = [];
            }
            if (args.item.iconCss === 'e-icons e-refresh') {
                assistInstance.current.prompts = [];
                promptsData = [];
                gridInstance.current.query = new Query();
            }
        }
    };

    /// <summary>Renders response template for AI prompts</summary>
    const responseTemplate = (props) => {
        if (!promptsData.filter((promptData) => promptData.index === props.index).length) {
            promptsData.push({ index: props.index, prompt: props.prompt, response: props.response });
        }
        return (
            <div className="responseItemContent">
                <div className="response-header">
                    <span className="e-icons e-assistview-icon"></span>
                    {props.prompt}
                </div>
            </div>
        );
    };

    /// <summary>Handles prompt request execution</summary>
    const onPromptRequest = (args) => {
        clicked(args.prompt);
    };

    /// <summary>Sets up suggestion list click handler</summary>
    const created = () => {
        suggestionListRef.current.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const clickedPill = event.target;
                const pillText = clickedPill.textContent;
                assistInstance.current.executePrompt(pillText);
            }
        });
    }

    /// <summary>Renders footer template with suggestion list</summary>
    const dialogFooterTemplate = (props) => {
        return (
            <div className="e-suggestions">
                <div className="e-suggestion-header">Suggestions</div>
                <div className="e-suggestion-list">
                    <ul ref={suggestionListRef}>
                        <li>Find iPhone 15</li>
                        <li>Sort Amount from lowest to highest</li>
                        <li>Find highest quantity of sale</li>
                        <li>Payment status not completed</li>
                        <li>Sold quantity below 2</li>
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div id='assistive-grid'>
                    <DialogComponent ref={dialogInstance} target='#ai-grid' id='ai-assist-dialog' width='500px' visible={false} height='500px' footerTemplate={dialogFooterTemplate} created={created}>
                    <AIAssistViewComponent id="ai-grid-aiassistview" ref={assistInstance} toolbarSettings={toolbarSettings} promptRequest={onPromptRequest} promptSuggestionsHeader='Suggestions' responseItemTemplate={responseTemplate} ></AIAssistViewComponent>
                </DialogComponent>
                <GridComponent ref={gridInstance} id="ai-grid" height={650} dataSource={gadgetsPurchaseData} toolbar={toolbarOptions} toolbarClick={toolbarClick} >
                    <ColumnsDirective>
                        <ColumnDirective field="transactionId" headerText="Transaction ID" width="130"
                            template={(data) => (
                                <a>{data.transactionId}</a>
                            )}
                        />
                        <ColumnDirective field="customerDetails" headerText="Customer Name" width="220" textAlign="Center"
                            template={(data) => (
                                <div >
                                    <p>{data.customerDetails.name}</p>
                                    <p className="email">{data.customerDetails.email}</p>
                                </div>
                            )} />
                        <ColumnDirective field="product" headerText="Product" width="208" textAlign="Left"
                            template={(data) => (
                                <div className='product-items'>
                                    <img className="rounded" src={`src/ai-grid/images/sales-transactions-table/${data.product.image}`} width={40} height={40} alt="product image" />
                                    <p>{data.product.name}</p>
                                </div>
                            )}
                        />
                        <ColumnDirective field="quantity" headerText="Quantity" width="80" textAlign="Right" />
                        <ColumnDirective field="amount" headerText="Amount" width="115" format="c2" textAlign="Right" />
                        <ColumnDirective field="date" headerText="Purchase Date" width="120" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right" />
                        <ColumnDirective field="paymentMethod" headerText="Payment Method" width="170" />
                        <ColumnDirective field="status" headerText="Status" width="93" textAlign='Right'
                            template={(data) => (
                                <div >
                                    <span className={`e-badge ${data.status === "Completed" ? "e-badge-success" : data.status === "Pending" ? "e-badge-info" : data.status === "Processing" ? "e-badge-warning" : data.status === "Failed" ? "e-badge-danger" : ""} !px-2`}>{data.status}</span>
                                </div>
                            )}
                        />
                    </ColumnsDirective>
                    <Inject services={[Toolbar]} />
                </GridComponent>
                </div>
            </div>
        </div>
    )
}

export { GridAIAssistance };