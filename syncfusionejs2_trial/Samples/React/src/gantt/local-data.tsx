import * as React from 'react';
import { GanttComponent, TaskFieldsModel, Inject, Selection, DayMarkers, ColumnsDirective, ColumnDirective, LabelSettingsModel, SplitterSettingsModel } from '@syncfusion/ej2-react-gantt';
import { localData } from './data';
import { SampleBase } from '../common/sample-base';

export class LocalData extends SampleBase<{}, {}> {
  public taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks'
  };
  public labelSettings: LabelSettingsModel = {
    leftLabel: 'TaskName'
  };
  public splitterSettings: SplitterSettingsModel = {
    position: "35%"
  };
  public projectStartDate: Date = new Date('03/26/2025');
  public projectEndDate: Date = new Date('07/20/2025');
  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <GanttComponent id='LocalData' dataSource={localData} highlightWeekends={true}
            allowSelection={true} treeColumnIndex={1} taskFields={this.taskFields}
            labelSettings={this.labelSettings} height='650px' taskbarHeight={25} rowHeight={46} splitterSettings={this.splitterSettings}
            projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate}>
            <ColumnsDirective>
              <ColumnDirective field='TaskID' width='60'></ColumnDirective>
              <ColumnDirective field='TaskName' width='250'></ColumnDirective>
              <ColumnDirective field='StartDate'></ColumnDirective>
              <ColumnDirective field='EndDate' ></ColumnDirective>
              <ColumnDirective field='Duration' ></ColumnDirective>
              <ColumnDirective field='Predecessor' ></ColumnDirective>
              <ColumnDirective field='Progress' ></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Selection, DayMarkers]} />
          </GanttComponent>
        </div>
        <div id="action-description">
          <p>This demo shows the way of binding an array of JavaScript objects (local JSON datasource) to Gantt.</p>
        </div>

        <div id="description">
          <p>Gantt can be bound either to local or remote data services. The <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#datasource">dataSource</a> property can be assigned either with the array of JavaScript objects or an instance of <code>DataManager</code>.</p>
          <p>In this demo, an array of JavaScript objects is assigned as data source to the Gantt.</p>
          <p>Gantt component features are segregated into individual feature-wise modules. To use a selection and marker features, we need to inject the <code>Selection</code> and <code>DayMarkers</code> into the <code>Inject Services</code> section.</p>
          <br/>
          <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/data-binding#local-data">documentation section</a>.</p>
        </div>
      </div>
    )
  }
}
