import * as React from 'react';
import { useEffect, useRef } from 'react';
import { DropDownListComponent, ChangeEventArgs } from '@syncfusion/ej2-react-dropdowns';
import { GanttComponent, TaskFieldsModel, Inject, Filter, ColumnsDirective, ColumnDirective, Selection, VirtualScroll, Sort, LabelSettingsModel, SplitterSettingsModel, LoadingIndicatorModel } from '@syncfusion/ej2-react-gantt';
import { virtualData } from './data';
import { updateSampleSection } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';

const LoadingAnimation = () => {
  useEffect(() => {
    updateSampleSection();
  }, [])
  let ganttInstance = useRef<GanttComponent>(null);
  let filterType: { [key: string]: Object }[] = [
    { text: 'Shimmer', value: 'Shimmer' },
    { text: 'Spinner', value: 'Spinner' }
  ];
  const onChange = (sel: ChangeEventArgs): void => {
    let type: any = sel.value.toString();
    if (type === "Shimmer") {
      ganttInstance.current.loadingIndicator.indicatorType = "Shimmer";
      ganttInstance.current.enableVirtualMaskRow = true;
      ganttInstance.current.refresh();
    } else {
      ganttInstance.current.loadingIndicator.indicatorType = "Spinner";
      ganttInstance.current.enableVirtualMaskRow = false;
      ganttInstance.current.refresh();
    }
  }
  const taskFields: TaskFieldsModel = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    endDate: 'EndDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'parentID'
  };
  const splitterSettings: SplitterSettingsModel = {
    columnIndex: 2
  };
  const loadingIndicator: LoadingIndicatorModel = {
    indicatorType: 'Shimmer'
  };
  const labelSettings: LabelSettingsModel = {
    taskLabel: 'Progress'
  };
  const projectEndDate: Date = new Date('09/21/2025');
  return (
    <div className='control-pane'>
      <div className='col-md-9'>
        <GanttComponent id='LoadingAnimation' ref={ganttInstance} dataSource={virtualData} treeColumnIndex={1} labelSettings={labelSettings}
          allowSelection={true} allowFiltering={true} allowSorting={true} highlightWeekends={true} enableVirtualization={true} projectEndDate={projectEndDate}
          taskFields={taskFields} splitterSettings={splitterSettings} height='650px' taskbarHeight={25} rowHeight={46} loadingIndicator={loadingIndicator}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' width={100} />
            <ColumnDirective field='TaskName' headerText='Task Name' width="300px" />
            <ColumnDirective field='StartDate' width={170} />
            <ColumnDirective field='Duration' />
            <ColumnDirective field='Progress' />
          </ColumnsDirective>
          <Inject services={[Filter, Selection, VirtualScroll, Sort]} />
        </GanttComponent>
      </div>
      <div className='col-md-3 property-section'>
        <PropertyPane title='Properties'>
          <table id='property' title='Properties' className='property-panel-table' style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td style={{ width: '50%', paddingLeft: 0 }}>
                  <div style={{ paddingTop: '10px', paddingLeft: 0 }}>Indicator Type </div>
                </td>
                <td style={{ width: '70%' }}>
                  <div>
                    <DropDownListComponent width="113px" id="seltype" change={onChange}
                      dataSource={filterType} value="Shimmer" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </PropertyPane>
      </div>
      <div id="action-description">
        <p>This sample shows the loading indicator while initial rendering, refreshing and all gantt action. In this sample, you can change the loading indicators from the properties panel.</p>
      </div>

      <div id="description">
        <p>
          The Gantt has an option to show a loading indicator in-between the time of fetching the data and binding it to the gantt during initial rendering, refreshing or
          while performing action like sorting, filtering and more.
        </p>
        <p>
          The Gantt support the following loading indicator types
        </p>
        <ul>
          <li><code>Shimmer</code></li>
          <li><code>Spinner</code></li>
        </ul>
        <p>
          Use the loading indicator by setting the <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt/loadingIndicatorModel/#indicatortype">loadingIndicator.indicatorType</a> property as Spinner or Shimmer. The default value of the indicatorType is Spinner.
        </p>
        <p>
          By default <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/gantt#enablevirtualmaskrow">enableVirtualMaskRow</a> is set to true which renders Shimmer during virtual scrolling.
        </p>
        <p>Gantt component features are segregated into individual feature-wise modules. To use virtualscroll, Filter, sorting and selection features, we need to inject <code>VirtualScroll</code>, <code>Filter</code>, <code>Sort</code> and <code>Selection</code> into the <code>Inject Services</code> section.</p>
        <br/>
        <p>More information on the Essential<sup>®</sup> React Gantt Chart can be found in this <a target="_blank" href="https://ej2.syncfusion.com/react/documentation/gantt/loading-animation">documentation section</a>.</p>
      </div>
    </div>
  )
}
export default LoadingAnimation;
