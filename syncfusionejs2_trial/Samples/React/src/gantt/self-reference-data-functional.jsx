import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { selfData } from './data';
import { updateSampleSection } from '../common/sample-base';
const SelfReferenceData = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const taskFields = {
        id: 'taskID',
        name: 'taskName',
        startDate: 'startDate',
        endDate: 'endDate',
        duration: 'duration',
        progress: 'progress',
        dependency: 'predecessor',
        parentID: 'parentID'
    };
    const labelSettings = {
        leftLabel: 'taskName'
    };
    const splitterSettings = {
        columnIndex: 2
    };
    const projectStartDate = new Date('01/28/2025');
    const projectEndDate = new Date('03/30/2025');
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='SelfReferenceData' dataSource={selfData} highlightWeekends={true} allowSelection={true} treeColumnIndex={1} splitterSettings={splitterSettings} taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='taskID' width='80'></ColumnDirective>
            <ColumnDirective field='taskName' width='250'></ColumnDirective>
            <ColumnDirective field='startDate'></ColumnDirective>
            <ColumnDirective field='endDate'></ColumnDirective>
            <ColumnDirective field='duration'></ColumnDirective>
            <ColumnDirective field='predecessor'></ColumnDirective>
            <ColumnDirective field='progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, DayMarkers]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample demonstrates the way of binding self-referential flat data to the Gantt component.</p>
      </div>

      <div id="description">
        <p>
        This sample demonstrates how to bind self-referential flat data to the Gantt component. 
        Self-referential data uses a <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/taskFieldsModel/#parentid">parentID</a> 
         field to establish hierarchical relationships between tasks, allowing flat data structures to be displayed as hierarchical task trees.
        </p>
        <p>
        In this example, an array of JavaScript objects with <code>ParentID</code> relationships is assigned as the data source to the Gantt. 
        The <code>dataSource</code> property accepts array of objects or a <code>DataManager</code> instance for both local and remote data scenarios.
        </p>
        <p>Gantt component features are segregated into individual feature-wise modules. To use a selection and marker features, we need to inject the <code>Selection</code> and <code>DayMarkers</code> into the <code>Inject Services</code> section.</p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/data-binding#self-referential-data-binding-flat-data">documentation section</a>.</p>
      </div>
    </div>);
};
export default SelfReferenceData;
