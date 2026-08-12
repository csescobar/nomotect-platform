import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, Inject, Selection, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import { templateData, editingResources } from './data';
import { updateSampleSection } from '../common/sample-base';
const ColumnTemplate = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const columnTemplate = (props) => {
        var src = 'src/gantt/images/' + props.ganttProperties.resourceNames + '.png';
        if ((props.ganttProperties.resourceNames)) {
            let gantt = document.getElementsByClassName('e-gantt')[0].ej2_instances[0];
            if (gantt.enableRtl) {
                return (<div className='columnTemplate'>
            <img src={src} height='40px' width='40px' alt={props.ganttProperties.resourceNames}/>
            <div style={{ display: "inline-block", width: '100%', position: "relative", right: "30px" }}>{props.ganttProperties.resourceNames}</div>
          </div>);
            }
            else {
                return (<div className='columnTemplate'>
            <img src={src} height='40px' width='40px' alt={props.ganttProperties.resourceNames}/>
            <div style={{ display: "inline-block", width: '100%', position: "relative", left: "10px" }}>{props.ganttProperties.resourceNames}</div>
          </div>);
            }
        }
        else {
            return <div></div>;
        }
    };
    const template = columnTemplate.bind(this);
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        dependency: 'Predecessor',
        resourceInfo: 'resources',
        child: 'subtasks'
    };
    const resourceFields = {
        id: 'resourceId',
        name: 'resourceName'
    };
    const labelSettings = {
        leftLabel: 'TaskName'
    };
    const splitterSettings = {
        columnIndex: 3
    };
    const projectStartDate = new Date('03/24/2025');
    const projectEndDate = new Date('06/01/2025');
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='ColumnTemplate' rowHeight={60} resourceFields={resourceFields} resources={editingResources} dataSource={templateData} highlightWeekends={true} treeColumnIndex={1} splitterSettings={splitterSettings} taskFields={taskFields} labelSettings={labelSettings} height='650px' taskbarHeight={25} projectStartDate={projectStartDate} projectEndDate={projectEndDate}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='100' textAlign="Left"></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Name' width='280'></ColumnDirective>
            <ColumnDirective field='resources' headerText='Resources' width='250' template={template}></ColumnDirective>
            <ColumnDirective field='StartDate' width='150'></ColumnDirective>
            <ColumnDirective field='Duration' width='150'></ColumnDirective>
            <ColumnDirective field='Progress' width='150'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Selection]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>This sample demonstrates the usage of template columns in Gantt.
          In this sample, we have shown custom images in the Resources column.</p>
      </div>

      <div id="description">
        <p>The Gantt provides a way to use a custom layout for each cell using the column template feature. The <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/columnModel/#template">columns -&gt; template</a> property accepts the template for the cell.</p>
        <p>In this demo, using column template, the resource column is presented with employee photos. The <a target="_blank" href="https://ej2.syncfusion.com/angular/documentation/api/gantt/columnModel/#template">columns -&gt; template</a> property is used to customize the column display.</p>
        <p>Gantt component features are segregated into individual feature-wise modules. To use selection, we need to inject the <code>Selection</code> into the <code>Inject Services</code> section.</p>
        <br />
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/columns/column-template">documentation section</a>.</p>
      </div>
    </div>);
};
export default ColumnTemplate;
