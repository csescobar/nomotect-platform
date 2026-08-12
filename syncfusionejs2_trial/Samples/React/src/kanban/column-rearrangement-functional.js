"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_kanban_1 = require("@syncfusion/ej2-react-kanban");
var sample_base_1 = require("../common/sample-base");
var dataSource = require("./datasource.json");
require("./column-rearrangement.css");
/**
 * Kanban Default sample
 */
var ColumnRearrange = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var data = (0, ej2_base_1.extend)([], dataSource.kanbanData, null, true);
    return (React.createElement("div", { className: "kanban-control-section" },
        React.createElement("div", { className: "col-lg-12 control-section" },
            React.createElement("div", { className: "control-wrapper" },
                React.createElement(ej2_react_kanban_1.KanbanComponent, { id: "kanban", keyField: "Status", dataSource: data, allowColumnDragAndDrop: true, cardSettings: {
                        contentField: "Summary",
                        headerField: "Id",
                        tagsField: "Tags",
                        grabberField: "Color",
                        footerCssField: "ClassName",
                    } },
                    React.createElement(ej2_react_kanban_1.ColumnsDirective, null,
                        React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "To Do", keyField: "Open" }),
                        React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "In Progress", keyField: "InProgress" }),
                        React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "Testing", keyField: "Testing" }),
                        React.createElement(ej2_react_kanban_1.ColumnDirective, { headerText: "Done", keyField: "Close" }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This example demonstrates the column rearrangement of the Kanban control. You can drag and drop the columns to rearrange them across multiple stages of the Kanban board.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The Kanban provides an option to enable column drag-and-drop functionality using the allowColumnDragAndDrop property. allowColumnDragAndDrop: If you set this property to true, the columns can be dragged and dropped to rearrange their order."))));
};
exports.default = ColumnRearrange;
