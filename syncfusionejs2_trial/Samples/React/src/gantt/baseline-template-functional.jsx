import * as React from 'react';
import { useEffect } from 'react';
import { GanttComponent, ColumnsDirective, ColumnDirective, Selection, Inject } from '@syncfusion/ej2-react-gantt';
import { baselineTemplateData } from './data';
import { updateSampleSection } from '../common/sample-base';
import './baseline.css';
const BaselineTemplate = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    let ganttInstance;
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        endDate: 'EndDate',
        duration: 'Duration',
        progress: 'Progress',
        baselineStartDate: 'BaselineStartDate',
        baselineDuration: 'BaselineDuration',
        dependency: 'Predecessor',
        child: 'subtasks'
    };
    const projectStartDate = new Date('2024-05-01');
    const projectEndDate = new Date('2024-05-30');
    const timelineSettings = {
        topTier: {
            unit: 'Month',
            format: 'MMMM yyyy'
        },
        bottomTier: {
            unit: 'Day',
            count: 1
        }
    };
    const tooltipSettings = {
        showTooltip: false
    };
    const baselineTemplate = (props) => {
        if (props.hasChildRecords || (props.data && props.data.hasChildRecords)) {
            return '';
        }
        const g = props.taskData;
        const gp = g.ganttProperties;
        const chart = ganttInstance.chartRowsModule;
        const baselineTop = chart.baselineTop;
        const baselineHeight = chart.baselineHeight;
        const taskBarHeight = chart.taskBarHeight;
        const milestoneHeight = chart.milestoneHeight;
        const milestoneMarginTop = chart.milestoneMarginTop;
        const rowHeight = ganttInstance.rowHeight;
        const renderBaseline = ganttInstance.renderBaseline;
        const enableRtl = ganttInstance.enableRtl;
        const gap = 9;
        const baselineGap = 4;
        const getLeft = (date) => {
            return ganttInstance.dataOperation.getTaskLeft(new Date(date), false, gp.calendarContext);
        };
        const getWidth = (start, duration) => {
            if (!start || duration == null || duration === 0)
                return 0;
            const end = new Date(start);
            end.setDate(end.getDate() + duration);
            const leftStart = ganttInstance.dataOperation.getTaskLeft(new Date(start), false, gp.calendarContext);
            const leftEnd = ganttInstance.dataOperation.getTaskLeft(end, false, gp.calendarContext);
            return leftEnd - leftStart;
        };
        const render = (start, duration, index) => {
            if (!start)
                return '';
            const left = getLeft(start);
            const width = getWidth(start, duration);
            // Milestone baseline
            if (duration === 0) {
                const size = renderBaseline ? taskBarHeight : (taskBarHeight - 10);
                const baselineMilestoneHeight = renderBaseline ? 5 : 2;
                const leftPos = enableRtl
                    ? (left - (milestoneHeight / 2) + 3)
                    : (left - (milestoneHeight / 2) + 1);
                const marginTop = (-Math.floor(rowHeight - milestoneMarginTop) + baselineMilestoneHeight) + 2 + (index * baselineGap);
                return (<div className='e-baseline-gantt-milestone-container' style={{ position: "absolute", width: size + 'px', height: size + 'px', transform: 'rotate(45deg)', [enableRtl ? 'right' : 'left']: leftPos + 'px', marginTop: marginTop + 'px' }}></div>);
            }
            // Normal baseline bar
            return (<div className='e-baseline-bar' role='term' style={{ position: 'absolute', [enableRtl ? 'right' : 'left']: left + 'px', marginTop: (baselineTop + (index * gap)) + 'px', width: width + 'px', height: baselineHeight + 'px' }}></div>);
        };
        return (<div className="custom-multi-baseline">
      {render(g.BaselineStartDate, g.BaselineDuration, 0)}
      {render(g.BaselineStartDate1, g.BaselineDuration1, 1)}
      {render(g.BaselineStartDate2, g.BaselineDuration2, 2)}
    </div>);
    };
    const splitterSettings = {
        columnIndex: 3,
    };
    const labelSettings = {
        rightLabel: 'TaskName'
    };
    return (<div className='control-pane'>
      <div className='control-section'>
        <GanttComponent id='BaselineTemplate' ref={gantt => ganttInstance = gantt} dataSource={baselineTemplateData} taskFields={taskFields} baselineTemplate={baselineTemplate} renderBaseline={true} labelSettings={labelSettings} splitterSettings={splitterSettings} projectStartDate={projectStartDate} projectEndDate={projectEndDate} allowSelection={true} gridLines="Both" highlightWeekends={true} timelineSettings={timelineSettings} tooltipSettings={tooltipSettings} height='550px' rowHeight={60} taskbarHeight={20}>
          <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='ID' textAlign='Left'/>
            <ColumnDirective field='TaskName' width={270} headerText='Name'/>
            <ColumnDirective field='BaselineStartDate' headerText='Baseline Start Date' width={180}/>
            <ColumnDirective field='BaselineDuration' headerText='Baseline Duration' width={180}/>
            <ColumnDirective field='BaselineStartDate1' format={{ skeleton: 'yMd', type: 'date' }} headerText='Baseline1 Start Date' width={180}/>
            <ColumnDirective field='BaselineDuration1' headerText='Baseline1 Duration' width={180}/>
            <ColumnDirective field='BaselineStartDate2' format={{ skeleton: 'yMd', type: 'date' }} headerText='Baseline2 Start Date' width={180}/>
            <ColumnDirective field='BaselineDuration2' headerText='Baseline2 Duration' width={180}/>
          </ColumnsDirective>
          <Inject services={[Selection]}/>
        </GanttComponent>
      </div>
      <div id="action-description">
        <p>
          This sample demonstrates how multiple baselines can be displayed within a single task
          to highlight variations across different planning stages and improve visibility into project changes.
        </p>
      </div>

      <div id="description">
        <p>
          In this example, the Gantt Chart visualizes a product workflow where each task includes
          multiple baseline bars using custom baseline fields. This allows users to view different
          planned schedules such as initial, revised, and final plans together.The <a target="_blank" rel="noopener noreferrer" href="https://ej2.syncfusion.com/react/documentation/api/gantt/index-default#baselinetemplate">
              baselineTemplate
            </a> property is used to customize the appearance of each
          baseline bar. It provides control over styling, colors, and positioning, making it easy
          to distinguish between baseline representations.
        </p>
        <br />
        <p>
          More information on the Essential® React Gantt Chart can be found in the <a target="_blank" href="https://ej2.syncfusion.com/javascript/documentation/gantt/baseline">
            baseline
          </a> documentation section.
        </p>
      </div>
    </div>);
};
export default BaselineTemplate;
