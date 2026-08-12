"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
var RemoteVirtual = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var data = new ej2_data_1.DataManager({
        url: 'https://services.syncfusion.com/react/production/api/TreeUrlDataSource',
        adaptor: new ej2_data_1.UrlAdaptor(),
        crossDomain: true,
    });
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data, idMapping: "TaskID", parentIdMapping: "ParentValue", hasChildMapping: "isParent", expandStateMapping: "IsExpanded", height: "450", enableVirtualization: true, loadChildOnDemand: true, pageSettings: { pageSize: 20 }, treeColumnIndex: 1 },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "TaskID", headerText: "Task ID", isPrimaryKey: true, width: "80", textAlign: "Right" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "TaskName", headerText: "Task Name", width: "200" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "StartDate", headerText: "Start Date", width: "90", format: "yMd", textAlign: "Right" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "EndDate", headerText: "End Date", width: "90", format: "yMd", textAlign: "Right" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "Progress", headerText: "Progress", width: "90" })),
                React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Page, ej2_react_treegrid_1.VirtualScroll] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This example demonstrates how to load child records on demand in the Tree Grid when using remote data. During the initial render, only parent rows are loaded and displayed in a collapsed state. Child records are fetched dynamically when a parent row is expanded.")),
        React.createElement("div", { id: "description" },
            "The ",
            React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/api/treegrid/#loadchildondemand' }, "LoadChildOnDemand"),
            " property is enabled by default, allowing the Tree Grid to initially render only parent records initially. This behavior is supported only for remote data sources and helps improve performance by minimizing the initial load. If LoadChildOnDemand is set to false, both parent and child records are loaded together during the initial rendering, and all rows are displayed in an expanded state. In this demo, Tree Grid features such as ",
            React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/treegrid/virtual-scroll' }, "Virtualization"),
            ", and the ",
            React.createElement("a", { target: '_blank', href: 'https://ej2.syncfusion.com/react/documentation/treegrid/data-binding/remote-data' }, "DataManager"),
            " are used.",
            React.createElement("p", null,
                "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                " page."))));
};
exports.default = RemoteVirtual;
