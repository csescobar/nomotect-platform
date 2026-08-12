import * as React from 'react';
import { useEffect, useRef } from 'react';
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective, Freeze, Toolbar } from '@syncfusion/ej2-react-gantt';
import { frozenColumnsData, resourceCollection } from './data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { updateSampleSection } from '../common/sample-base';
import './frozen-column.css';
const FrozenColumns = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    let ganttInstance = useRef(null);
    let columnDropDown = useRef(null);
    let directionDropDown = useRef(null);
    let columnValue = 'TaskID';
    let directionValue = 'Left';
    const leftColumns = [{ id: 'TaskID', name: 'Task ID' },
        { id: 'TaskName', name: 'Task Name' },
        { id: 'StartDate', name: 'Start Date' },
        { id: 'EndDate', name: 'End Date' },
        { id: 'Duration', name: 'Duration' },
        { id: 'Progress', name: 'Progress' },
        { id: 'Predecessor', name: 'Dependency' },
        { id: 'Resources', name: 'Assignee' },
        { id: 'Designation', name: 'Designation' },
        { id: 'Status', name: 'Status' },
    ];
    const directions = [
        { id: 'Left', name: 'Left' },
        { id: 'Right', name: 'Right' },
        { id: 'Fixed', name: 'Fixed' },
        { id: 'None', name: 'None' },
    ];
    let refresh = true;
    const columnChange = (e) => {
        let columnName = e.value;
        columnValue = columnName;
        let column = ganttInstance.current.getColumnByField(columnName, ganttInstance.current.columns);
        let value = column.freeze === undefined ? 'None' : column.freeze;
        refresh = directionDropDown.current.value === value;
        directionDropDown.current.value = value;
    };
    const directionChange = (e) => {
        if (refresh) {
            let columnName = columnDropDown.current.value;
            directionValue = e.value;
            let columns = ganttInstance.current.getGanttColumns();
            let column = columns.find((col) => col.field === columnName);
            if (column) {
                column.freeze = e.value === 'None' ? 'None' : e.value;
                ganttInstance.current.columns = columns;
            }
        }
        refresh = true;
    };
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentID',
        resourceInfo: 'Resources',
    };
    const labelSettings = {
        taskLabel: 'Progress'
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName',
    };
    const timelineSettings = {
        showTooltip: true,
        topTier: {
            unit: 'Week',
            format: 'dd/MM/yyyy'
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        }
    };
    const toolbar = [
        {
            align: 'Left',
            template: '<div class="left-label"><label>Columns:</label></div>'
        },
        {
            align: 'Left',
            template: () => (<DropDownListComponent id="columnDD" ref={columnDropDown} value={columnValue} change={columnChange} dataSource={leftColumns} fields={{ value: 'id', text: 'name' }}/>),
        },
        {
            align: 'Left',
            template: '<div class="right-label"><label>Freeze Direction:</label></div>'
        },
        {
            align: 'Left',
            template: () => (<DropDownListComponent id="directionDD" ref={directionDropDown} value={directionValue} change={directionChange} dataSource={directions} fields={{ value: 'id', text: 'name' }}/>)
        },
    ];
    const projectStartDate = new Date('02/27/2025');
    const projectEndDate = new Date('05/04/2025');
    const splitterSettings = {
        position: '70%'
    };
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='frozenColumns' ref={ganttInstance} dataSource={frozenColumnsData} treeColumnIndex={1} splitterSettings={splitterSettings} taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} timelineSettings={timelineSettings} resources={resourceCollection} projectStartDate={projectStartDate} projectEndDate={projectEndDate} allowSelection={false} toolbar={toolbar} resourceFields={resourceFields}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' freeze='Left' width='50'></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='200' freeze='Left'></ColumnDirective>
            <ColumnDirective field='StartDate' headerText='Start Date'></ColumnDirective>
            <ColumnDirective field='Duration' headerText='Duration'></ColumnDirective>
            <ColumnDirective field='EndDate' headerText='End Date'></ColumnDirective>
            <ColumnDirective field='Progress' headerText='Progress'></ColumnDirective>
            <ColumnDirective field='Predecessor' headerText='Dependency'></ColumnDirective>
            <ColumnDirective field='Resources' headerText='Assignee' freeze='Right' width='200'></ColumnDirective>
            <ColumnDirective field='Designation' headerText='Designation'></ColumnDirective>
            <ColumnDirective field='Status' headerText='Status'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, Freeze, Toolbar]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>
          This sample demonstrates the column freezing feature in the Gantt Chart. Frozen columns remain fixed while other columns scroll horizontally, improving readability.
        </p>
      </div>
      <div id="description">
        <p>The freezing feature allows users to freeze a specified number of columns while scrolling the remaining content.
          The freezing behavior can be configured using the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/#frozencolumns">frozenColumns</a> property.
          Additionally, to keep specific columns visible during horizontal scrolling, use the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/columnmodel#freeze">column.freeze</a> property on the relevant columns to freeze them to the <code>Left</code>, <code>Right</code> or <code>Fixed</code>.
        </p>
        <p>In this example, the <b>Task ID</b> and <b>Task Name</b> columns are frozen on the left, and the <b>Assignee</b> column is frozen on the right using the <code className="code">column.freeze</code> property.
          Gantt component features are segregated into individual feature-wise modules. To use column freezing, selection and toolbar, inject the <code className="code">Freeze</code>, <code>Selection</code> and <code>Toolbar</code> into the <code>Inject Services</code> section.
        </p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/columns/frozen-column">documentation section</a>.</p>
      </div>
    </div>);
};
export default FrozenColumns;
