/**
 * Pivot Table Tabular Layout Sample.
 */
this.default = function () {
    ej.base.enableRipple(false);
    var pivotObj = new ej.pivotview.PivotView({
        dataSourceSettings: {
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            drilledMembers: [{ name: 'Country', items: ['France'] }],
            filterSettings: [{
                name: 'Products', type: 'Include', items: ['Bottles and Cages', 'Cleaners', 'Fenders', 'Gloves', 'Helmets',
                    'Hydration Packs', 'Jerseys', 'Mountain Bikes']
            }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            values: [{ name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            enableSorting: true,
            dataSource: window.Pivot_Data,
            expandAll: false,
            filters: []
        },
        width: '100%',
        height: 450,
        showFieldList: true,
        showGroupingBar: true,
        gridSettings: {
            columnWidth: ej.base.Browser.isDevice ? 100 : 140,
            layout: 'Tabular'
        }
    });
    pivotObj.appendTo('#PivotView');

    var layoutSwitch = new ej.buttons.Switch({
        checked: true,
        cssClass: 'pivot-layout-switch',
        change: onSwitchChange
    });
    layoutSwitch.appendTo('#layout-switch');

    function onSwitchChange(args) {
        if (pivotObj.gridSettings.layout === 'Compact') {
            pivotObj.gridSettings.layout = 'Tabular';
        } else {
            pivotObj.gridSettings.layout = 'Compact';
        }
    }
};
