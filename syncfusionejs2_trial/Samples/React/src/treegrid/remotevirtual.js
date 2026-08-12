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
exports.RemoteVirtual = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_data_1 = require("@syncfusion/ej2-data");
var sample_base_1 = require("../common/sample-base");
var RemoteVirtual = /** @class */ (function (_super) {
    __extends(RemoteVirtual, _super);
    function RemoteVirtual() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.data = new ej2_data_1.DataManager({
            url: 'https://services.syncfusion.com/react/production/api/TreeUrlDataSource',
            adaptor: new ej2_data_1.UrlAdaptor(),
            crossDomain: true,
        });
        return _this;
    }
    RemoteVirtual.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: this.data, ref: function (treegrid) { return _this.treegridInstance = treegrid; }, idMapping: "TaskID", parentIdMapping: "ParentValue", hasChildMapping: "isParent", expandStateMapping: "IsExpanded", height: "450", enableVirtualization: true, loadChildOnDemand: true, pageSettings: { pageSize: 20 }, treeColumnIndex: 1 },
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
    return RemoteVirtual;
}(sample_base_1.SampleBase));
exports.RemoteVirtual = RemoteVirtual;
