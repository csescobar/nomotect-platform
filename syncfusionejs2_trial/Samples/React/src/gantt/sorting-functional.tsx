import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, TaskFieldsModel, Inject, Selection, DayMarkers, Sort, ColumnsDirective, ColumnDirective, LabelSettingsModel, SplitterSettingsModel, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
import { editingData } from './data';
import { updateSampleSection } from '../common/sample-base';

const Sorting = () => {
  useEffect(() => {
    updateSampleSection();
  }, [])
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    parentID: 'ParentId'
  };
  const labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };
  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
  };
  const sortSettings: SortSettingsModel = {
    columns: [{ field: 'TaskName', direction: 'Ascending' }, { field: 'TaskID', direction: 'Ascending' }]
  };
  const projectStartDate: Date = new Date('03/26/2025');
  const projectEndDate: Date = new Date('09/01/2025');
  return (
    <div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='Sorting' dataSource={editingData} highlightWeekends={true} allowSelection={true}
          taskFields={taskFields} splitterSettings={splitterSettings} treeColumnIndex={1}
          labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} selectedRowIndex={0} sortSettings={sortSettings} allowSorting={true}
          projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' visible={false} width='80'></ColumnDirective>
            <ColumnDirective field='TaskName' width='250'></ColumnDirective>
            <ColumnDirective field='StartDate'></ColumnDirective>
            <ColumnDirective field='EndDate'></ColumnDirective>
            <ColumnDirective field='Duration'></ColumnDirective>
            <ColumnDirective field='Progress'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection, DayMarkers, Sort]} />
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample demonstrates the Gantt multi-sorting feature. To sort two or more columns, hold the CTRL key, and click the column header.</p>
      </div>

      <div id="description">
        <p>The sorting feature enables you to order data in a particular direction. It can be enabled by setting <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#allowsorting">allowSorting</a> to true.</p>
        <p>To sort a Gantt column, click the column header. The icons (ascending) and (descending) specify the sort direction of a column.</p>

        <p>By default, the multi-sorting feature is enabled in Gantt. To sort multiple columns, hold the <strong>CTRL</strong> key, and then click the column header. To clear sort for a column, hold the <strong>SHIFT</strong> key, and then click the column header.</p>
        <p>In this demo, multiple sorting enabled on load time by assigning multiple columns into <code>sortSettings</code> property.</p>
        <p>Gantt component features are segregated into individual feature-wise modules. To use a selection, markers and sorting features, we need to inject the <code>Selection</code>, <code>DayMarkers</code> and <code>Sort</code> into the <code>Inject Services</code> section.</p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/sorting">documentation section</a>.</p>
      </div>
    </div>
  )
}
export default Sorting;
