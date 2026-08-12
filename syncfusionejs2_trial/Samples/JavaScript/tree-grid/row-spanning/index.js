ej.base.enableRipple(window.ripple)

    var treegrid = new ej.treegrid.TreeGrid({
        dataSource: window.rowSpanData,
        childMapping: 'children',
        treeColumnIndex: 0,
        height: 400,
        allowPaging: true,
        allowSelection: false,
        enableHover: false,
        enableRowSpan: true,
        enableColumnSpan: true,
        rowHeight: 50,
        clipMode: 'EllipsisWithTooltip',
        gridLines: 'Both',
        pageSettings: { pageSizeMode: 'All', pageSize: 18 },
        columns: [
            { field: 'activityName', headerText: 'Phase Name', width: 250, freeze: 'Left', clipMode: 'EllipsisWithTooltip'},
            {
                headerText: 'Schedule', textAlign: 'Center',
                columns: [
                    { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center'},
                    { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' }
                ]
            },
            {
                headerText: 'Work Status', textAlign: 'Center',
                columns: [
                    { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center'},
                ]
            },
            {
                headerText: 'Compliance', textAlign: 'Center',
                columns: [
                    { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
                    { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center'},
                    { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
                    { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' }
                ]
            },
            {
                headerText: 'Personnel', textAlign: 'Center',
                columns: [
                    { field: 'supervisor', headerText: 'Supervisor', width: 180, },
                    { field: 'team', headerText: 'Crew', width: 200 }
                ]
            },            
            {
                headerText: 'Materials', textAlign: 'Center',
                columns: [
                    { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
                    { field: 'materialCost', headerText: 'Material Cost', width: 140, format:'C2', textAlign: 'Right',enableRowSpan: false}
                ]
            },
            {
                headerText: 'Cost Summary', textAlign: 'Center',
                columns: [
                    { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format:'C2', textAlign: 'Center', enableRowSpan: false},
                    { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format:'C2', textAlign: 'Center', enableRowSpan: false}
                ]
            },
        ],
    });
    treegrid.appendTo('#TreeGrid');
