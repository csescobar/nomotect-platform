"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var data_1 = require("./data");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var sample_base_1 = require("../common/sample-base");
var react_1 = require("react");
var RowSpanningAPI = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data_1.rowSpanData, enableHover: false, allowSelection: false, allowPaging: true, pageSettings: { pageSizeMode: 'All', pageSize: 18 }, rowHeight: 50, gridLines: 'Both', enableColumnSpan: true, enableRowSpan: true, height: 400, childMapping: 'children', treeColumnIndex: 0, clipMode: 'EllipsisWithTooltip' },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "activityName", headerText: "Phase Name", width: "250", freeze: "Left" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Schedule", textAlign: "Center", columns: [
                            { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
                            { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' }
                        ] }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Work Status", textAlign: "Center", columns: [
                            { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center' }
                        ] }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Compliance", textAlign: "Center", columns: [
                            { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
                            { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center' },
                            { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
                            { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' }
                        ] }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Personnel", textAlign: "Center", columns: [
                            { field: 'supervisor', headerText: 'Supervisor', width: 180 },
                            { field: 'team', headerText: 'Crew', width: 200 }
                        ] }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Materials", textAlign: "Center", columns: [
                            { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
                            { field: 'materialCost', headerText: 'Material Cost', width: 140, format: 'C2', textAlign: 'Right', enableRowSpan: false }
                        ] }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { headerText: "Cost Summary", textAlign: "Center", columns: [
                            { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format: 'C2', textAlign: 'Center', enableRowSpan: false },
                            { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format: 'C2', textAlign: 'Center', enableRowSpan: false }
                        ] })),
                React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Freeze, ej2_react_treegrid_1.Page] })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how the Tree Grid automatically merges adjacent cells containing same value across both rows and columns.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this demo, the ",
                    React.createElement("b", null, "\"Start Date\""),
                    ", ",
                    React.createElement("b", null, "\"End Date\""),
                    ", ",
                    React.createElement("b", null, "\"Status\""),
                    ", and ",
                    React.createElement("b", null, "\"Permit Status\""),
                    " columns are merged when they share the same value. Row and column spanning can be enabled by setting ",
                    React.createElement("code", null, "enableRowSpan"),
                    " and ",
                    React.createElement("code", null, "enableColumnSpan"),
                    " to ",
                    React.createElement("b", null, "true"),
                    ", allowing the Tree Grid to merge adjacent cells both horizontally and vertically."),
                React.createElement("p", null,
                    "The ",
                    React.createElement("b", null, "\"Phase Name\""),
                    " column remains frozen on the left side, achieved using the ",
                    React.createElement("a", { href: "https://ej2.syncfusion.com/react/documentation/treegrid/frozen#freeze-direction" }, "freeze"),
                    " property in the column definition."),
                React.createElement("p", null,
                    "Tree Grid features are separated into feature-wise modules. To use the frozen rows and columns feature, inject the Freeze module using the ",
                    React.createElement("code", null, "TreeGrid.Inject(Freeze)"),
                    " method"),
                React.createElement("p", null,
                    "More information on the Tree Grid component can be found in this",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/getting-started" }, "documentation"),
                    " section.")))));
};
exports.default = RowSpanningAPI;
