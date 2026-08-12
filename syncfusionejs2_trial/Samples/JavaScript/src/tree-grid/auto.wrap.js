this.default = function () {
    var treeGridObj = new ej.treegrid.TreeGrid({
        dataSource: window.wrapData,
        childMapping: 'subtasks',
        treeColumnIndex: 1,
        allowFiltering: true,
        filterSettings: {type: 'Excel'},
        allowSorting: true,
        allowPaging: true,
        allowTextWrap: true,
	    height: 400,
        pageSettings: { pageSize : 8},
        columns: [
            { field: 'taskID', headerText: 'Task ID', width: 140, textAlign: 'Right' },
            { field: 'taskName', headerText: 'Title', width: 240},
            { field: 'description', headerText: 'Description (Comprehensive Objectives for Deliverables)', width: 370},
            { field: 'employeeName', headerText: 'Assigned To', textAlign: 'Left', width: 180 },
            { field: 'priority', headerText: 'Priority', textAlign: 'Center', width: 150 },
            { field: 'status', headerText: 'Status', textAlign: 'Center', width: 130 },
            { field: 'startDate', headerText: 'Start Date', format: 'yMd', textAlign: 'Right', width: 160},
            { field: 'endDate', headerText: 'End Date', format: 'yMd', textAlign: 'Right', width: 160},


        ],
    });
    treeGridObj.appendTo('#TreeGrid');
};
