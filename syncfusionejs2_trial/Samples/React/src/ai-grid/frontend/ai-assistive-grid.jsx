import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Toolbar, Sort, Filter, Group, Page } from '@syncfusion/ej2-react-grids';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { AIAssistViewComponent, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-interactive-chat';
import { purchaseDetails } from '../datasource';
import { createRef } from "react";
import { fetchAI } from '../model/ai-input';
import { useEffect } from "react";
import { updateAISampleSection } from '../../common/sample-base';
import './assistive-grid.css';
let assistView;
let dialog;
let grid;
let suggestionListRef = createRef();
function AIAssistiveGrid() {
    useEffect(() => {
        updateAISampleSection();
    }, []);
    // Toolbar options for Grid with AI Assist button.
    const toolbarOptions = [{ text: 'AI Assist', tooltipText: 'AI Assist', prefixIcon: 'e-assistview-icon', id: 'ai-assist-btn', align: 'Right' }];
    // Handles the Grid toolbar button click action. If the AI Assist button clicked shows the AI Assist dialog.
    const toolbarClick = (args) => {
        if (args.item.id === 'ai-assist-btn') {
            const gridRect = grid.element.getBoundingClientRect();
            const toolbarRect = document.getElementById('ai-grid_toolbarItems').getBoundingClientRect();
            const targetRect = args.originalEvent.target.closest('.e-toolbar-item').getBoundingClientRect();
            const x = targetRect.left - gridRect.left - (parseInt(dialog.width.toString()));
            const y = (toolbarRect.top + toolbarRect.height) - gridRect.top;
            dialog.position = { X: x, Y: y };
            dialog.show();
        }
    };
    // Configures toolbar settings for AI assist dialog.
    const toolbarSettings = {
        items: [
            { tooltip: 'Start New Chat', iconCss: 'e-icons e-rename', align: 'Right' },
            { tooltip: 'Clear', iconCss: 'e-icons e-refresh', align: 'Right' },
            { tooltip: 'Close', iconCss: 'e-icons e-icon-dlg-close', align: 'Right' },
        ],
        itemClicked: (args) => {
            if (args.item.iconCss === 'e-icons e-icon-dlg-close') {
                dialog.hide();
            }
            if (args.item.iconCss === 'e-icons e-rename') {
                assistView.prompts = [];
            }
            if (args.item.iconCss === 'e-icons e-refresh') {
                assistView.prompts = [];
                grid.setProperties({
                    sortSettings: { columns: [] },
                    filterSettings: { columns: [] },
                    groupSettings: { columns: [] },
                    pageSettings: { currentPage: 1, pageSize: 12 }
                });
                grid.refresh();
            }
        }
    };
    // Renders response template for AI prompts.
    const responseTemplate = (props) => {
        return (<div className="response-item-content">
                <div className="response-header">
                    <span className="e-icons e-assistview-icon"></span>
                    {props.response}
                </div>
            </div>);
    };
    // Handles prompt request execution.
    const onPromptRequest = (args) => {
        assistView.scrollToBottom();
        const columns = grid.columns.map((col) => { return { field: col.field }; });
        columns.forEach((col) => {
            if (col.field === 'status') {
                col.values = ['Completed', 'Pending', 'Failed', 'Processing'];
            }
            else if (col.field === 'paymentMethod') {
                col.values = ['Cheque', 'Credit Card', 'Paypal', 'Online Transfer'];
            }
        });
        fetchAI(args.prompt, grid, assistView, columns);
    };
    useEffect(() => {
        const handleMouseDown = (event) => {
            if (!dialog.visible)
                return;
            const dialogElement = document.querySelector('#ai-assist-dialog.e-dialog');
            if (dialogElement && !dialogElement.contains(event.target)) {
                dialog.hide();
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => document.removeEventListener('mousedown', handleMouseDown);
    }, []);
    const suggestions = ["Filter iPhone 15 Pro", "Sort Amount from lowest to highest", "Filter Payment status completed", "Group status column", "Clear Filtering", "Clear Sorting", "Remove Grouping"];
    // Renders footer template with suggestion list.
    const dialogFooterTemplate = () => {
        const handleClick = (text) => {
            assistView.executePrompt(text);
        };
        return (<div className="e-suggestions">
                <div className="e-suggestion-header">Suggestions</div>
                <div className="e-suggestion-list">
                    <ul ref={suggestionListRef}>
                        {suggestions.map((suggestion, index) => (<li key={index} onClick={() => handleClick(suggestion)}>
                            {suggestion}
                        </li>))}
                    </ul>
                </div>
            </div>);
    };
    const filterSettings = { type: 'Excel' };
    const handleKeyDown = (e) => {
        e.stopImmediatePropagation();
    };
    return (<div>
            <div id='assistive-grid'>
                <DialogComponent ref={(dialogIns) => dialog = dialogIns} target='#ai-grid' id='ai-assist-dialog' width='500px' visible={false} height='500px' footerTemplate={dialogFooterTemplate}>
                    <AIAssistViewComponent id="ai-grid-aiassistview" ref={(assist) => assistView = assist} toolbarSettings={toolbarSettings} promptRequest={onPromptRequest} promptSuggestionsHeader='Suggestions' responseItemTemplate={responseTemplate}>
                        <ViewsDirective>
                            <ViewDirective type='Assist' name=' Ask AI'></ViewDirective>
                        </ViewsDirective>
                    </AIAssistViewComponent>
                </DialogComponent>
                <GridComponent ref={(gridIns) => grid = gridIns} id="ai-grid" keyPressed={handleKeyDown} height={650} dataSource={purchaseDetails} allowFiltering={true} allowSorting={true} allowGrouping={true} filterSettings={filterSettings} allowPaging={true} toolbar={toolbarOptions} toolbarClick={toolbarClick} pageSettings={{ pageSize: 9 }}>
                    <ColumnsDirective>
                        <ColumnDirective field="TransactionID" headerText="Transaction ID" width="160"/>
                        <ColumnDirective field="CustomerName" headerText="Customer Name" width="220" textAlign="Center" template={(data) => (<div>
                                    <p>{data.CustomerName}</p>
                                    <p className="email">{data.Email}</p>
                                </div>)}/>
                        <ColumnDirective field="ProductName" headerText="Product" width="208" textAlign="Left" template={(data) => (<div className='product-items'>
                                    <img className="rounded" src={`src/ai-grid/images/sales-transactions-table/${data.ProductImage}`} width={40} height={40} alt="product image"/>
                                    <p>{data.ProductName}</p>
                                </div>)}/>
                        <ColumnDirective field="Quantity" headerText="Quantity" width="140" textAlign="Right"/>
                        <ColumnDirective field="Amount" headerText="Amount" width="130" format="c2" textAlign="Right"/>
                        <ColumnDirective field="PurchaseDate" headerText="Purchase Date" width="180" format={{ type: "date", format: "MM/dd/yyyy" }} textAlign="Right"/>
                        <ColumnDirective field="PaymentMethod" headerText="Payment Method" width="200"/>
                        <ColumnDirective field="Status" headerText="Status" width="120" textAlign='Right' template={(data) => (<div>
                                    <span className={`e-badge ${data.Status === "Completed" ? "e-badge-success" : data.Status === "Pending" ? "e-badge-info" : data.Status === "Processing" ? "e-badge-warning" : data.Status === "Failed" ? "e-badge-danger" : ""} !px-2`}>{data.Status}</span>
                                </div>)}/>
                    </ColumnsDirective>
                    <Inject services={[Toolbar, Sort, Filter, Group, Page]}/>
                </GridComponent>
            </div>
        </div>);
}
export { AIAssistiveGrid };
