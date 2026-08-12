import * as React from 'react';
import { useEffect, useRef } from 'react';
import { GanttComponent, Inject, Selection, DayMarkers, Filter, Toolbar, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './data';
import { updateSampleSection } from '../common/sample-base';
import './toolbar-template.css';
const ToolbarTemplate = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    let ganttInstance = useRef(null);
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    };
    const toolbar = ['ExpandAll', 'CollapseAll', { text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'Quick Filter', prefixIcon: 'e-quickfilter' }, { text: 'Clear Filter', tooltipText: 'Clear Filter', id: 'Clear Filter' }];
    const splitterSettings = {
        columnIndex: 2
    };
    const labelSettings = {
        leftLabel: 'TaskName'
    };
    const projectStartDate = new Date('03/26/2025');
    const projectEndDate = new Date('07/20/2025');
    const toolbarClick = (args) => {
        if (args.item.text === 'Quick Filter') {
            ganttInstance.current.filterByColumn('TaskName', 'startswith', 'Identify');
        }
        if (args.item.text === 'Clear Filter') {
            ganttInstance.current.clearFiltering();
        }
    };
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='ToolbarTemplate' ref={ganttInstance} dataSource={projectNewData} highlightWeekends={true} allowFiltering={true} treeColumnIndex={1} splitterSettings={splitterSettings} toolbar={toolbar} toolbarClick={toolbarClick.bind(this)} taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' width='100'></ColumnDirective>
            <ColumnDirective field='TaskName' width='250'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='EndDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Predecessor' width={190}></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, DayMarkers, Filter, Toolbar]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample explains the way of rendering built-in and custom toolbar items at the same time.</p>
      </div>
      <div id="description">
        <p>Custom toolbar items can be added by defining the toolbar as a collection of ItemModels.
          Actions for this customized toolbar items are defined in the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#toolbarclick">toolbarClick</a> event.</p>
        <p>In this sample, the custom toolbar elements <code>Quick Filter</code> and <code>Clear Filter</code> are rendered 
        along with predefined toolbar items ExpandAll and CollapseAll. While clicking the <code>Quick Filter</code> toolbar item, filtering occurs for the <code>Task Name</code> column. The filtered column can be cleared using the <code>Clear Filter</code> toolbar item.</p>
        <p>Gantt component features are segregated into individual feature-wise modules.To use selection, filter, toolbar and marker features, we need to inject the 
        <code>Selection</code> , <code>Filter</code> , <code>Toolbar</code> and <code>DayMarkers</code> into the <code>Inject Services</code> section.</p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/tool-bar">documentation section</a>.</p>
      </div>
    </div>);
};
export default ToolbarTemplate;
