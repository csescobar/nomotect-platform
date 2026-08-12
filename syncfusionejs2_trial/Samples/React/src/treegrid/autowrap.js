"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoWrap = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n    .e-bigger .e-treegrid .e-treegridexpand,\n    .e-bigger .e-treegrid .e-treegridcollapse {\n        width: 18px;\n    }";
var AutoWrap = /** @class */ (function (_super) {
    __extends(AutoWrap, _super);
    function AutoWrap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoWrap.prototype.render = function () {
        return (React.createElement("div", { className: "control-pane" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement("div", { className: "control-section" },
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data_1.wrapData, treeColumnIndex: 1, allowPaging: true, allowSorting: true, childMapping: "subtasks", allowTextWrap: true, height: '400', pageSettings: { pageSize: 11 }, allowFiltering: true, filterSettings: { type: 'Excel', hierarchyMode: 'Parent' } },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskID", headerText: "Task ID", width: "140", textAlign: "Right" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskName", headerText: "Title", width: "240" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "description", headerText: "Description (Comprehensive Objectives for Deliverables)", width: "370" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "employeeName", headerText: "Assigned To", width: "180" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "priority", headerText: "Priority", width: "150", textAlign: "Center" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "status", headerText: "Status", width: "130", textAlign: "Center" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "startDate", headerText: "Start Date", width: "160", type: "date", format: "yMd", textAlign: "Right" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "endDate", headerText: "End Date", width: "160", type: "date", format: "yMd", textAlign: "Right" })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Page, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.Sort] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the Tree Grid with the text wrap option enabled for both headers and cell content. This setting ensures that long header text and cell values are fully visible by wrapping onto multiple lines instead of being truncated with an ellipsis. ")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this demo, the ",
                    React.createElement("strong", null, "\"Title\""),
                    " and ",
                    React.createElement("strong", null, "\"Description\""),
                    " columns exceeds the available width, so its header and cell content are wrapped across multiple lines for better readability. Text wrapping is enabled by setting the Tree Grid's ",
                    React.createElement("code", null,
                        React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/index-default#allowtextwrap" }, "allowTextWrap")),
                    "property to ",
                    React.createElement("strong", null, "true"),
                    ", which automatically applies wrapping to both header and cell content."),
                React.createElement("p", null,
                    "More information about text wrap can be found in this",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/cell/cell#autowrap-the-treegrid-content" }, "documentation"),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return AutoWrap;
}(sample_base_1.SampleBase));
exports.AutoWrap = AutoWrap;
