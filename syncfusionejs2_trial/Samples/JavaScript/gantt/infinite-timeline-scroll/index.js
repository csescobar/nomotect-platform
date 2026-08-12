ej.base.enableRipple(window.ripple)

    var ganttChart = new ej.gantt.Gantt({
        dataSource: window.infiniteTimelineScrollData,
        enableInfiniteTimelineScroll: true,
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            dependency: 'Predecessor',
            child: 'subtasks'
        },
        editSettings: {
            allowAdding: true,
            allowEditing: true,
            allowDeleting: true,
            allowTaskbarEditing: true,
            showDeleteConfirmDialog: true
        },
        allowSelection: true,
        gridLines: 'Both',
        height: '650px',
        treeColumnIndex: 1,
        highlightWeekends: true,
        timelineSettings: {
            topTier: {
                unit: 'Week',
                format: 'MMM dd, y'
            },
            bottomTier: {
                unit: 'Day'
            }
        },
        columns: [
            { field: 'TaskID', width: 80 },
            { field: 'TaskName', headerText: 'Job Name', width: 250, clipMode: 'EllipsisWithTooltip'},
            { field: 'StartDate' },
            { field: 'Duration' },
            { field: 'Progress' },
            { field: 'Predecessor' }
        ],
        labelSettings: {
            leftLabel: 'TaskID',
            rightLabel: 'TaskName',
            taskLabel: '${Progress}%'
        },
        splitterSettings : {
            columnIndex: 3
        }
    });
    ganttChart.appendTo('#InfiniteScroll');

