import { enableRipple } from '@syncfusion/ej2-base';
enableRipple((window as any).ripple);

import { Gantt, DayMarkers } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data-source';

/**
 * Indicators Gantt sample
 */

Gantt.Inject(DayMarkers);

    
    let gantt: Gantt = new Gantt(
        {
            dataSource: projectNewData,
            height: '650px',
            rowHeight: 46,
            taskbarHeight: 25,
            highlightWeekends: true,
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                parentID: 'ParentId',
                indicators: 'Indicators'
            },
            treeColumnIndex: 1,
            columns: [
                { field: 'TaskID', width: 80 },
                { field: 'TaskName', headerText: 'Name', width: 250 },
                { field: 'StartDate' },
                { field: 'EndDate' },
                { field: 'Duration' },
                { field: 'Predecessor' },
                { field: 'Progress' },
            ],
            labelSettings: {
                leftLabel: 'TaskName'
            },
            projectStartDate: new Date('03/26/2025'),
            projectEndDate: new Date('07/20/2025')
        });
    gantt.appendTo('#Indicators');

