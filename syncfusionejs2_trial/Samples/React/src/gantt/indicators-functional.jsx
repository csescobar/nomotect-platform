import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './data';
import { updateSampleSection } from '../common/sample-base';
import './indicators.css';
const Indicators = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId',
        indicators: 'Indicators'
    };
    const labelSettings = {
        leftLabel: 'TaskName'
    };
    const splitterSettings = {
        columnIndex: 2
    };
    const projectStartDate = new Date('03/26/2025');
    const projectEndDate = new Date('07/20/2025');
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='Indicators' dataSource={projectNewData} highlightWeekends={true} treeColumnIndex={1} taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} projectStartDate={projectStartDate} projectEndDate={projectEndDate} splitterSettings={splitterSettings}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' width='80'></ColumnDirective>
            <ColumnDirective field='TaskName' width='300'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='EndDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Predecessor'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, DayMarkers]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample visualizes how to mention special moment in any mentioned day for a particular task with different icon and label.</p>
      </div>
      <div id="description">
        <p>
          In this example, <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/taskFieldsModel/#indicators">indicators</a> are displayed with some custom text in specified day of task, which are defined in dataSource. You can define the indicators with the following properties for tasks:</p>
        <ul>
          <li><code>date</code>: Defines the date value to where we want to display the indicators.</li>
          <li><code>iconClass</code>: Defines the icon to highlight the indicator.</li>
          <li><code>name</code>: Defines text to be displayed in the mentioned date.</li>
          <li><code>tooltip</code>: The text to be displayed when hover the mouse over the indicator.</li>
        </ul>
        <p>
          Gantt component features are segregated into individual feature-wise modules. To use a selection support and event marker features, we need to inject the <code>Selection</code> and <code>DayMarkers</code> into the <code>Inject Services</code> section.
        </p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/data-markers">documentation section</a>.</p>
      </div>
    </div>);
};
export default Indicators;
