import * as React from 'react';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { GanttComponent, TaskFieldsModel, DayMarkers, Inject, Selection, Toolbar, Edit, Resize, ColumnsDirective, ColumnDirective, EditSettingsModel, LabelSettingsModel, ResourceFieldsModel, SplitterSettingsModel, ToolbarItem, TaskType } from '@syncfusion/ej2-react-gantt';
import { resourcesData, resourceCollection } from './data';
import { SampleBase } from '../common/sample-base';

export class ResourceView extends SampleBase<{}, {}> {
  private ganttInstance: GanttComponent;
  public taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    resourceInfo: 'resources',
    work: 'work',
    child: 'subtasks'
  };
  public resourceFields: ResourceFieldsModel = {
    id: 'resourceId',
    name: 'resourceName',
    unit: 'resourceUnit',
    group: 'resourceGroup'
  };
  public taskType: TaskType = "FixedWork";
  public editSettings: EditSettingsModel = {
    allowAdding: true,
    allowEditing: true,
    allowDeleting: true,
    allowTaskbarEditing: true,
    showDeleteConfirmDialog: true
  };
  public toolbar: any = ['Add', 'Edit', 'Update', 'Delete', 'Cancel', 'ExpandAll', 'CollapseAll',
    { text: 'Show/Hide Overallocation', tooltipText: 'Show/Hide Overallocation', id: 'showhidebar' }];
  public splitterSettings: SplitterSettingsModel = {
    columnIndex: 3
  };
  public projectStartDate: Date = new Date('03/26/2025');
  public projectEndDate: Date = new Date('05/18/2025');
  public labelSettings: LabelSettingsModel = {
    rightLabel: 'resources',
    taskLabel: 'Progress'
  };
  public toolbarClick(args: ClickEventArgs): void {
    if (args.item.id === 'showhidebar') {
      this.ganttInstance.showOverAllocation = this.ganttInstance.showOverAllocation ? false : true;
    }
  };
  render() {
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <GanttComponent id='ResourceView' dataSource={resourcesData} treeColumnIndex={1} viewType='ResourceView'
            allowSelection={true} allowResizing={true} highlightWeekends={true} toolbar={this.toolbar} toolbarClick={this.toolbarClick.bind(this)} editSettings={this.editSettings}
            projectStartDate={this.projectStartDate} projectEndDate={this.projectEndDate} resourceFields={this.resourceFields}
            taskFields={this.taskFields} taskType={this.taskType} labelSettings={this.labelSettings} splitterSettings={this.splitterSettings}
            height='650px' taskbarHeight={25} rowHeight={46} resources={resourceCollection} showOverAllocation={true} ref={gantt => this.ganttInstance = gantt}>
            <ColumnsDirective>
              <ColumnDirective field='TaskID' visible={false}></ColumnDirective>
              <ColumnDirective field='TaskName' headerText='Name' width='250'></ColumnDirective>
              <ColumnDirective field='work' headerText='Work'></ColumnDirective>
              <ColumnDirective field='Progress'></ColumnDirective>
              <ColumnDirective field='resourceGroup' headerText='Group'></ColumnDirective>
              <ColumnDirective field='StartDate'></ColumnDirective>
              <ColumnDirective field='Duration'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Selection, DayMarkers, Toolbar, Edit, Resize]} />
          </GanttComponent>
        </div>
        <div id="action-description">
          <p>This sample explains the Resource break down view in the Gantt Chart that is
            how to visualize the list of tasks assigned to each resource in hierarchy manner and switch the resources as per users need by task
            editing mode.If the no resources are mapped in a task, then it will come under “unassigned Tasks” category.
            This feature can be enabled by setting the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#viewtype">viewType</a> property to “ResourceView”.</p>
          <p>When a resource is assigned with two or more tasks which are scheduled on the same date, it is termed as over allocation for a resource.
            The number of over allocation dates ranges are highlighted as with square bracket. The following sample demonstrates the over allocation for a resource.
            In this sample, over allocation can be hidden by using the CSS ‘visibility’ property on custom toolbar item action.
          </p>
        </div>
        <div id="description">
          <p>
            In this example, you can see the resource break down from a bulk of tasks done by mapping the predefined resource ID-s to each task and resource information can be shown by using the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#labelsettings">labelSetting</a> property.
            Using the toolbar action, you can perform CRUD operation for resource allocation based on their availability and task complexity.</p>
          <p>The resources and tasks assigned to those resources can be grouped into categories. Resources can be mapped using the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#resourcefields">resourceFields:</a>.</p>
          <p><code>ID</code>: To map resource ID.</p>
          <p><code>Name</code>: To map resource name.</p>
          <p><code>Unit</code>: To map resource unit.</p>
          <p><code>Group</code>: To map resource group.</p>
          <p>
            The Gantt control features are segregated into individual feature-wise modules. To use a selection, markers, toolbar, edit, and resize features, we need to inject the <code>Selection</code>, <code>DayMarkers</code>, <code>Toolbar</code>, <code>Edit</code> and <code>Resize</code> into the <code>Inject Services</code> section.
          </p>
          <br/>
          <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/resource-view">documentation section</a>.</p>
        </div>
      </div>
    )
  }
}
