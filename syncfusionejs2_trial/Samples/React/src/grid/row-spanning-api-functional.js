"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
function RowSpanningAPI() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { dataSource: data_1.telecastData, allowTextWrap: true, height: 450, width: 'auto', gridLines: 'Both', enableHover: false, allowSelection: false, allowSorting: true, enableRowSpan: true, enableColumnSpan: true },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Channel', headerText: 'Channel', width: 150, freeze: 'Left', isPrimaryKey: true }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Genre', headerText: 'Genre', width: 120, freeze: 'Left' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program12AM', headerText: '12 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program1AM', headerText: '1 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program2AM', headerText: '2 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program3AM', headerText: '3 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program4AM', headerText: '4 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program5AM', headerText: '5 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program6AM', headerText: '6 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program7AM', headerText: '7 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program8AM', headerText: '8 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program9AM', headerText: '9 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program10AM', headerText: '10 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program11AM', headerText: '11 AM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program12PM', headerText: '12 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program1PM', headerText: '1 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program2PM', headerText: '2 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program3PM', headerText: '3 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program4PM', headerText: '4 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program5PM', headerText: '5 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program6PM', headerText: '6 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program7PM', headerText: '7 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program8PM', headerText: '8 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program9PM', headerText: '9 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program10PM', headerText: '10 PM', width: 110, textAlign: 'Center', allowSorting: false }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Program11PM', headerText: '11 PM', width: 110, textAlign: 'Center', allowSorting: false })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Freeze, ej2_react_grids_1.Sort] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This demo showcases how the Grid component can automatically merged cells that contain matching data across rows and columns. When program names and timings repeat, they are visually combined into a single cell for improved readability.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "In this sample, the channel program names, and their timings are merged using the Grid\u2019s ",
                React.createElement("code", null, "enableRowSpan"),
                " and ",
                React.createElement("code", null, "enableColumnSpan"),
                " properties. The ",
                React.createElement("b", null, "Channel"),
                " and ",
                React.createElement("b", null, "Genre"),
                " columns remains fixed on the left side, enabled by the Frozen column feature."),
            React.createElement("p", { style: { fontWeight: 500 } }, "Injecting Module:"),
            React.createElement("p", null,
                "Grid features are separated into feature-wise modules. To use the frozen rows and columns feature, inject the Freeze module using the ",
                React.createElement("code", null, "Grid.Inject(Freeze)"),
                " method."),
            React.createElement("p", null,
                "More information on the row spanning can be found in this",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/row/row-spanning" }, "documentation section"),
                "."),
            React.createElement("p", null,
                "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                " page."))));
}
exports.default = RowSpanningAPI;
