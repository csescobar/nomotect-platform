import * as React from 'react';
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective, Toolbar, CriticalPath, Edit, EventMarkersDirective, EventMarkerDirective, DayMarkers } from '@syncfusion/ej2-react-gantt';
import { criticalPathData } from './data';
import { SampleBase } from '../common/sample-base';
export class Critical extends SampleBase {
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        parentID: 'ParentId'
    };
    editSettings = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    toolbar = ['Add', 'Edit', 'Delete', 'CriticalPath'];
    splitterSettings = {
        columnIndex: 2
    };
    labelSettings = {
        rightLabel: 'TaskName'
    };
    timelineSettings = {
        topTier: {
            format: 'MMM dd, yyyy',
            unit: 'Week',
        },
        bottomTier: {
            unit: 'Day',
        },
        viewEndDate: new Date('06/07/2025')
    };
    eventMarkers = new Date('04/02/2025');
    projectStartDate = new Date('03/30/2025');
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <GanttComponent id='Critical' dataSource={criticalPathData} treeColumnIndex={1} taskFields={this.taskFields} splitterSettings={this.splitterSettings} labelSettings={this.labelSettings} height='650px' taskbarHeight={25} rowHeight={46} projectStartDate={this.projectStartDate} enableCriticalPath={true} editSettings={this.editSettings} toolbar={this.toolbar} timelineSettings={this.timelineSettings}>
                        <ColumnsDirective>
                            <ColumnDirective field='TaskID' width='80'></ColumnDirective>
                            <ColumnDirective field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
                            <ColumnDirective field='StartDate'></ColumnDirective>
                            <ColumnDirective field='Duration'></ColumnDirective>
                            <ColumnDirective field='Progress'></ColumnDirective>
                            <ColumnDirective field='Predecessor'></ColumnDirective>
                        </ColumnsDirective>
                         <EventMarkersDirective>
                            <EventMarkerDirective day={this.eventMarkers} cssClass="e-custom-event-marker" label="Project planning and kickoff" top="138px"></EventMarkerDirective>
                        </EventMarkersDirective>
                        <Inject services={[Selection, Toolbar, CriticalPath, Edit, DayMarkers]}/>
                    </GanttComponent>
                </div>
                <div id="action-description">
                    <p>This sample demonstrates the rendering of critical path to the Gantt control.</p>
                </div>
                <div id="description">
                    <p>
                        In this example, you can see how to render a Gantt Chart with critical path. The default timeline
                        view week-day mode is applied to Gantt Chart. The dependency lines are enabled in this example to represent the
                        execution order or the hierarchy between the phases.
                    </p>
                    <p>
                        The critical path is a series of tasks (or sometimes only a single task) that controls the calculated
                        finish date of the project. If a task in a critical path is delayed, then the entire project will be delayed.
                    </p>
                    <p>Gantt component features are segregated into individual feature-wise modules. To use Critical path, selection, edit, and toolbar features, we need to inject <code>CriticalPath</code>, <code>Selection</code>, <code>Edit</code>, <code>DayMarkers</code> and <code>Toolbar</code> into the <code>Inject Services</code> section.</p>
                    <br />
                    <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" rel="noopener noreferrer" href="https://ej2.syncfusion.com/react/documentation/gantt/critical-path/">documentation section</a>.</p>
                </div>
            </div>);
    }
}
