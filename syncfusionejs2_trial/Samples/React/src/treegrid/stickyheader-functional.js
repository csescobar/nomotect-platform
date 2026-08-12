"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var StickyHeader = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data_1.sampleData, childMapping: "subtasks", treeColumnIndex: 1, clipMode: 'EllipsisWithTooltip', enableStickyHeader: true },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'taskID', headerText: 'Task ID', width: '70', textAlign: 'Right' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'taskName', headerText: 'Task Name', width: '200' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'startDate', headerText: 'Start Date', width: '90', format: 'yMd', textAlign: 'Right' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'endDate', headerText: 'End Date', width: '90', format: 'yMd', textAlign: 'Right' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'duration', headerText: 'Duration', width: '90', textAlign: 'Right' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'progress', headerText: 'Progress', width: '90', textAlign: 'Right' }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'priority', headerText: 'Priority', width: '90' })))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the Tree Grid component with the sticky header feature. In this sample, while scrolling the demo page, the Tree Grid header will be fixed at the top of its parent element.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "The Tree Grid headers can be fixed while scrolling its first scrollable parent element. It can be done by setting the",
                React.createElement("code", null,
                    React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/#enablestickyheader" }, "enableStickyHeader")),
                " property."),
            React.createElement("p", null,
                "More information on the sticky header can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/columns/column-resizing#resize-stacked-column" }, "documentation section.")),
            React.createElement("p", null,
                "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                " page."))));
};
exports.default = StickyHeader;
