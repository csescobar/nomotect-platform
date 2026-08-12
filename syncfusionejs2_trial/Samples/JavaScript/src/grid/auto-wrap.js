this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.inventoryData,
        allowPaging: true,
        allowTextWrap: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: {type: 'Menu'},
        columns: [
            { field: 'Inventor', headerText: 'Inventor Name', width: 155 },
            { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: 200, textAlign: 'Right' },
            { field: 'Country', headerText: 'Country', width: 120 },
            { field: 'Active', headerText: 'Active', width: 130 },
            { field: 'Mainfieldsofinvention', headerText: 'Main Fields of Invention (Primary patent technology areas)', width: 180 },
        ],
        pageSettings: { pageCount: 5 }
    });
    grid.appendTo('#Grid');
};