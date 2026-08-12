import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, TaskFieldsModel, Inject, Selection, ColumnsDirective, ColumnDirective, TimelineSettingsModel, Toolbar, CriticalPath, Edit, EditSettingsModel, LabelSettingsModel, ToolbarItem, EventMarkerModel,  EventMarkersDirective,
  EventMarkerDirective, DayMarkers } from '@syncfusion/ej2-react-gantt';
import { criticalPathData } from './data';
import { updateSampleSection } from '../common/sample-base';

const Critical = () => {
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
    const editSettings: EditSettingsModel = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        allowTaskbarEditing: true,
        showDeleteConfirmDialog: true
    };
    const toolbar: ToolbarItem[] = ['Add', 'Edit', 'Delete', 'CriticalPath'];
    const labelSettings: LabelSettingsModel = {
        rightLabel: 'TaskName'
    };
    const eventMarkers: Date = new Date('04/02/2025');
    const splitterSettings = {
        columnIndex: 2
    };
    const timelineSettings: TimelineSettingsModel = {
        topTier: {
            format: 'MMM dd, yyyy',
            unit: 'Week',
        },
        bottomTier: {
            unit: 'Day',
        },
        viewEndDate: new Date('06/07/2025')
    };
    const projectStartDate: Date = new Date('03/30/2025');
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <GanttComponent id='Critical' dataSource={criticalPathData} treeColumnIndex={1}
                    taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} rowHeight={46} timelineSettings={timelineSettings}
                    projectStartDate={projectStartDate} splitterSettings={splitterSettings} enableCriticalPath={true} editSettings={editSettings} toolbar={toolbar}>
                    <ColumnsDirective>
                        <ColumnDirective field='TaskID' width='80' ></ColumnDirective>
                        <ColumnDirective field='TaskName' headerText='Job Name' width='250' clipMode='EllipsisWithTooltip'></ColumnDirective>
                        <ColumnDirective field='StartDate'></ColumnDirective>
                        <ColumnDirective field='Duration'></ColumnDirective>
                        <ColumnDirective field='Progress'></ColumnDirective>
                        <ColumnDirective field='Predecessor'></ColumnDirective>
                    </ColumnsDirective>
                    <EventMarkersDirective>
                        <EventMarkerDirective
                            day={eventMarkers}
                            cssClass="e-custom-event-marker"
                            label="Project planning and kickoff"
                            top="138px"
                        ></EventMarkerDirective>
                    </EventMarkersDirective>
                    <Inject services={[Selection, Toolbar, CriticalPath, Edit, DayMarkers]} />
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
                <br/>
                <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" rel="noopener noreferrer" href="https://ej2.syncfusion.com/react/documentation/gantt/critical-path/">documentation section</a>.</p>
            </div>
        </div>
    )
}
export default Critical;
