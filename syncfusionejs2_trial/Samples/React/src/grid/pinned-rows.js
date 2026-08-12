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
exports.PinnedRows = void 0;
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./pinned-rows.css");
function ratingDetail(props) {
    if (props.Rating === "Satisfied") {
        return (React.createElement("div", { className: "statusvalue e-satisfiedcolor" },
            React.createElement("span", { className: "statustxt e-satisfiedcolor" }, "Satisfied")));
    }
    if (props.Rating === "Very Satisfied") {
        return (React.createElement("div", { className: "statusvalue e-verysatisfiedcolor" },
            React.createElement("span", { className: "statustxt e-verysatisfiedcolor" }, "Very Satisfied")));
    }
    if (props.Rating === "Dissatisfied") {
        return (React.createElement("div", { className: "statusvalue e-dissatisfiedcolor" },
            React.createElement("span", { className: "statustxt e-dissatisfiedcolor" }, "Dissatisfied")));
    }
    if (props.Rating === "Very Dissatisfied") {
        return (React.createElement("div", { className: "statusvalue e-verydissatisfiedcolor" },
            React.createElement("span", { className: "statustxt e-verydissatisfiedcolor" }, "Very Dissatisfied")));
    }
    if (props.Rating === "Neutral") {
        return (React.createElement("div", { className: "statusvalue e-neutralcolor" },
            React.createElement("span", { className: "statustxt e-neutralcolor" }, "Neutral")));
    }
}
;
function priorityDetail(props) {
    if (props.Priority === "High") {
        return (React.createElement("div", { className: "statusvalue e-highcolor" },
            React.createElement("span", { className: "statustxt e-highcolor" }, "High")));
    }
    if (props.Priority === "Low") {
        return (React.createElement("div", { className: "statusvalue e-lowcolor" },
            React.createElement("span", { className: "statustxt e-lowcolor" }, "Low")));
    }
    if (props.Priority === "Medium") {
        return (React.createElement("div", { className: "statusvalue e-mediumcolor" },
            React.createElement("span", { className: "statustxt e-mediumcolor" }, "Medium")));
    }
    if (props.Priority === "Urgent") {
        return (React.createElement("div", { className: "statusvalue e-urgentcolor" },
            React.createElement("span", { className: "statustxt e-urgentcolor" }, "Urgent")));
    }
}
;
function statusDetail(props) {
    if (props.Status === "Open") {
        return (React.createElement("div", { className: "statusvalue e-opencolor" },
            React.createElement("span", { className: "statustxt e-opencolor" }, "Open")));
    }
    if (props.Status === "In Progress") {
        return (React.createElement("div", { className: "statusvalue e-inprogresscolor" },
            React.createElement("span", { className: "statustxt e-inprogresscolor" }, "In Progress")));
    }
    if (props.Status === "Closed") {
        return (React.createElement("div", { className: "statusvalue e-closedcolor" },
            React.createElement("span", { className: "statustxt e-closedcolor" }, "Closed")));
    }
    if (props.Status === "Resolved") {
        return (React.createElement("div", { className: "statusvalue e-resolvedcolor" },
            React.createElement("span", { className: "statustxt e-resolvedcolor" }, "Resolved")));
    }
}
;
var PinnedRows = /** @class */ (function (_super) {
    __extends(PinnedRows, _super);
    function PinnedRows() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.filterSettings = { type: 'Excel' };
        _this.contextMenuItems = ['PinRow', 'UnpinRow'];
        _this.requestTemplate = function (props) {
            return (React.createElement("div", { className: "e-request-info" },
                React.createElement("img", { src: "src/grid/images/supportType/".concat(props.TypeofRequest, ".svg"), alt: props.TypeofRequest }),
                React.createElement("span", null, props.TypeofRequest)));
        };
        return _this;
    }
    PinnedRows.prototype.isRowPinned = function (data) {
        if (data && (data.Rating === "Very Dissatisfied" || data.Rating === 'Dissatisfied')) {
            return true;
        }
        return false;
    };
    ;
    PinnedRows.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_grids_1.GridComponent, { id: "PinnedRows", dataSource: data_1.supportData, ref: function (grid) { return _this.gridInstance = grid; }, height: 300, enableVirtualization: true, contextMenuItems: this.contextMenuItems, isRowPinned: this.isRowPinned.bind(this), allowSorting: true, allowKeyboard: false, allowFiltering: true, filterSettings: this.filterSettings, pageSettings: { pageSize: 20 } },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TicketID", headerText: "Ticket ID", width: "140", isPrimaryKey: true, freeze: "Left" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Title", headerText: "Title", width: "210" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Description", headerText: "Description", width: "250", clipMode: "EllipsisWithTooltip", allowFiltering: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Status", headerText: "Status", textAlign: "Center", width: "140", template: statusDetail.bind(this) }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Priority", headerText: "Priority", textAlign: "Center", width: "140", template: priorityDetail.bind(this) }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Assignee", headerText: "Assignee", width: "140" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Category", headerText: "Category", width: "130" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "TypeofRequest", headerText: "Type of Request", width: "210", template: this.requestTemplate.bind(this) }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "CreatedDate", headerText: "Created Date", width: "160", format: "yMd", textAlign: "Right" }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Rating", headerText: "Rating", textAlign: "Center", width: "140", freeze: "Right", template: ratingDetail.bind(this) })),
                    React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.VirtualScroll, ej2_react_grids_1.Selection, ej2_react_grids_1.Filter, ej2_react_grids_1.Sort, ej2_react_grids_1.Freeze, ej2_react_grids_1.ContextMenu] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates how important rows are pinned at the top and columns can be frozen on the left or right, keeping them always visible. Scroll the movable content vertically or horizontally to see how these pinned rows and frozen columns remain fixed in place while the rest of the grid scrolls beneath or beside them.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "In this demo, tickets rated ",
                    React.createElement("strong", null, "Dissatisfied"),
                    " or ",
                    React.createElement("strong", null, "Very Dissatisfied"),
                    " are automatically pinned to the top through the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#isrowpinned" }, "isRowPinned")),
                    " callback function. The grid applies column freezing by locking the ",
                    React.createElement("strong", null, "Ticket ID"),
                    " column on the left and the ",
                    React.createElement("strong", null, "Rating"),
                    " column on the right using the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/column#freeze" }, "column.freeze")),
                    " property."),
                React.createElement("p", null,
                    "The feature supports dynamic row pinning so that any row can be pinned or unpinned through the context menu, and this functionality is configured by defining the ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/#contextmenuitems" }, "contextMenuItems")),
                    " property with the ",
                    React.createElement("strong", null, "PinRow"),
                    " and ",
                    React.createElement("strong", null, "UnpinRow"),
                    " options."),
                React.createElement("p", { style: { fontWeight: "bold" } }, "Injecting Module:"),
                React.createElement("p", null,
                    "Grid component features are segregated into individual feature-wise modules. To use context menu feature, we need to inject ",
                    React.createElement("code", null, "ContextMenu"),
                    " module into the ",
                    React.createElement("code", null, "services")),
                React.createElement("p", null,
                    "More information on pinned rows and frozen columns can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/row/row" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page."))));
    };
    return PinnedRows;
}(sample_base_1.SampleBase));
exports.PinnedRows = PinnedRows;
