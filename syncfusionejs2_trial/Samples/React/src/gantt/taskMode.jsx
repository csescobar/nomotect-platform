import * as React from 'react';
import { GanttComponent, DayMarkers, Inject, Selection, Toolbar, Edit, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { taskModeData } from './data';
import { SampleBase } from '../common/sample-base';
export class TaskMode extends SampleBase {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        endDate: 'EndDate',
        dependency: 'Predecessor',
        child: 'Children',
        manual: 'isManual'
    };
    labelSettings = {
        leftLabel: 'TaskName'
    };
    splitterSettings = {
        columnIndex: 2
    };
    editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    toolbar = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll'];
    projectStartDate = new Date('02/18/2025');
    projectEndDate = new Date('03/30/2025');
    render() {
        return (<div className='control-pane'>
        <div className='control-section'>
          <GanttComponent id='TaskMode' dataSource={taskModeData} treeColumnIndex={1} allowSelection={true} highlightWeekends={true} toolbar={this.toolbar} editSettings={this.editSettings} splitterSettings={this.splitterSettings} height='650px' taskbarHeight={25} rowHeight={46} taskMode='Custom' taskFields={this.taskFields} labelSettings={this.labelSettings} projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate} validateManualTasksOnLinking={true}>
            <ColumnsDirective>
              <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
              <ColumnDirective field='TaskName' headerText='Task Name' width='130'></ColumnDirective>
              <ColumnDirective field='isManual' headerText='Task Mode' width='120'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Edit, Selection, Toolbar, DayMarkers]}/>
          </GanttComponent>
        </div>
        <div id="action-description">
          <p>The Gantt provides support for automatic and manual task scheduling modes. Scheduling mode of a task is used to indicate whether the start and end dates of a task will be automatically validated or not. Using the property <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode">taskMode</a> we can able to change the scheduling mode of a task. The following are the enumeration values that can be set to the property <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode">taskMode</a>.</p>
          <ul>
            <li>Auto</li>
            <li>Manual</li>
            <li>Custom</li>
          </ul>
        </div>

        <div id="description">
          <p>When the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode">taskMode</a> property is set as <code>Auto</code> scheduling mode, all the tasks in the project will be rendered as automatically scheduled tasks. Thus the start and end dates of the tasks in the project will be automatically validated.</p>
          <p>When the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode">taskMode</a> property is set as <code>Manual</code> scheduling mode, all the tasks in the project will be rendered as manually scheduled tasks. Thus the dates of the tasks will not get validated automatically by the system.</p>
          <p>When the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#taskmode">taskMode</a> property is set as <code>Custom</code>, the scheduling mode for each tasks will be mapped form the data source field. The property <code>manual</code> is used to map the scheduling mode field from the data source.</p>
          <p>Gantt component features are segregated into individual feature-wise modules. To use editing, selection, markers and toolbar features, we need to inject the <code>Edit</code>, <code>Selection</code>, <code>DayMarkers</code> and <code>Toolbar</code> into the <code>Inject Services</code> section.</p>
          <br />
          <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/scheduling-tasks">documentation section</a>.</p>
        </div>
      </div>);
    }
}
