ej.base.enableRipple(window.ripple)

    var grid = new ej.grids.Grid({
            dataSource: ordersTrackData,
            enableVirtualization: true,
            allowSorting: true,
            allowFiltering: true,
            toolbar: ['Edit', 'Update', 'Cancel'],
            filterSettings: { type: 'Excel' },
            editSettings: { allowEditing: true, allowAdding: false, allowDeleting: false },
            selectionSettings: { persistSelection: true, checkboxOnly: true },
            columns: [
                { type: 'checkbox', width: 60, allowEditing: false },
                {
                    field: 'OrderID', width: 110, headerText: 'Order ID', isPrimaryKey: true, textAlign: 'Right',
                    allowEditing: false
                },
                {
                    field: 'CustomerName',
                    width: 170, headerText: 'Customer Name', allowEditing: false
                },
                {
                    field: 'Product', width: 150, allowEditing: false, template: '#producttemplate'
                },
                { field: 'Amount', width: 110, format: 'C2', allowEditing: false, textAlign: 'Right' },
                { field: 'OrderDate', headerText: 'Order Date', allowEditing: false, textAlign: 'Right', width: 130, format: 'yMd' },
                { field: 'Status', editType: 'dropdownedit', width: 150, template: '#statustemplate' }
            ],
            isRowSelectable: function (data) {
                if (data.Status === "Canceled" || data.Status === "Delivered") {
                    return false;
                }
                return true;
            },
            height: 400,
        });
    grid.appendTo('#ConditionalSelection');
    window.productTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'e-product-info';
        var imgElement = document.createElement('img');
        imgElement.src = '//ej2.syncfusion.com/javascript/demos/src/grid/images/product/' + e.Product + '.png';
        imgElement.alt = e.Product;
        var nameElement = document.createElement('span');
        nameElement.innerText = e.Product;
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);
        return divElement.outerHTML;
    };

    window.statusTemplate = function (e) {
        var divElement = document.createElement('div');
        divElement.className = 'e-status-info';
        var imgElement = document.createElement('img');
        imgElement.src = '//ej2.syncfusion.com/javascript/demos/src/grid/images/status/' + e.Status + '.svg';
        imgElement.alt = e.Status;
        var nameElement = document.createElement('span');
        nameElement.innerText = e.Status;
        divElement.appendChild(imgElement);
        divElement.appendChild(nameElement);
        return divElement.outerHTML;
    };

