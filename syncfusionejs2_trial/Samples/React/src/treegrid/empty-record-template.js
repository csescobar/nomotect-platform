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
exports.EmptyRecordTemplate = void 0;
var React = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var sample_base_1 = require("../common/sample-base");
var EMPTYRECORDTEMPLATE_CSS = "\n.emptyRecordTemplate {\n    text-align: center;\n    margin: 31px auto;\n}\n\n.e-emptyRecord {\n    display: block;\n    margin: 15px auto;\n    border-radius: 4px;\n    box-shadow: 2px 4px 10px rgba(52, 52, 52, 0.5);\n}\n";
var EmptyRecordTemplate = /** @class */ (function (_super) {
    __extends(EmptyRecordTemplate, _super);
    function EmptyRecordTemplate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.priorityParams = {
            params: {
                dataSource: [
                    { priority: "Low" }, { priority: "Medium" }, { priority: "High" }, { priority: "Critical" }
                ]
            }
        };
        _this.statusParams = {
            params: {
                dataSource: [
                    { status: "Open" }, { status: "Inprogress" }, { status: "Review-Request" }, { status: "Review-Reject" }, { status: "Closed" }
                ]
            }
        };
        _this.template = _this.emptyTemplate;
        return _this;
    }
    /**
     * The empty record template function that returns a custom template for the empty record.
     * This template will be displayed when there are no records in the Tree Grid.
     */
    EmptyRecordTemplate.prototype.emptyTemplate = function () {
        return (React.createElement("div", { className: "emptyRecordTemplate" },
            React.createElement("img", { src: "https://ej2.syncfusion.com/angular/demos/assets/grid/images/emptyRecordTemplate_light.svg", alt: "No record", className: "e-emptyRecord" }),
            React.createElement("div", null,
                React.createElement("b", null, "There is no data available to display at the moment."))));
    };
    ;
    EmptyRecordTemplate.prototype.onDataBound = function () {
        var _this = this;
        var isGridEmpty = this.treegridRef.flatData.length === 0;
        if (this.treegridRef.searchSettings.key === '' || this.treegridRef.searchSettings.key === undefined) {
            this.treegridRef.toolbarModule.enableItems([this.treegridRef.element.id + '_gridcontrol_searchbar'], !isGridEmpty);
        }
        var filterMenudivs = this.treegridRef.element.querySelectorAll('.e-filtermenudiv');
        filterMenudivs.forEach(function (div) {
            if (isGridEmpty && _this.treegridRef.grid.filterSettings.columns.length == 0) {
                div.classList.add('e-disabled');
                div.style.cursor = 'default';
            }
            else {
                div.classList.remove('e-disabled');
                div.style.removeProperty('cursor');
            }
        });
    };
    ;
    EmptyRecordTemplate.prototype.onActionComplete = function (args) {
        // Toggle filter dialog based on visible records
        if (args.requestType === 'filterAfterOpen' && this.treegridRef.flatData.length === 0) {
            if (args.filterModel.filterSettings.columns.length > 0 && args.filterModel.filterSettings.columns.some(function (col) { return col.field === args.columnName; })) {
                args.filterModel.dlgObj.show();
            }
            else {
                args.filterModel.dlgObj.hide();
            }
        }
        if ((args.requestType === 'delete' || args.requestType === 'searching') && this.treegridRef.flatData.length === 0 && this.treegridRef.searchSettings.key === '') {
            this.treegridRef.toolbarModule.enableItems([this.treegridRef.element.id + '_gridcontrol_searchbar'], false);
        }
        if (args.action === 'clearFilter' && this.treegridRef.flatData.length !== 0) {
            this.treegridRef.toolbarModule.enableItems([this.treegridRef.element.id + '_gridcontrol_searchbar'], true);
        }
    };
    ;
    EmptyRecordTemplate.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("style", null, EMPTYRECORDTEMPLATE_CSS),
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { id: "TreeGrid", ref: function (treegridRef) { return _this.treegridRef = treegridRef; }, dataSource: [], treeColumnIndex: 1, childMapping: "subtasks", emptyRecordTemplate: this.template.bind(this), toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Search'], editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, }, allowPaging: true, allowSorting: true, allowFiltering: true, filterSettings: { type: 'Menu' }, dataBound: this.onDataBound.bind(this), actionComplete: this.onActionComplete.bind(this) },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskID", headerText: "Task ID", type: "number", textAlign: "Right", isPrimaryKey: true, validationRules: { required: true, min: 0 }, width: "130" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskName", headerText: "Task Name", type: "string", textAlign: 'Left', validationRules: { required: true }, clipMode: "EllipsisWithTooltip", width: "180" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "priority", headerText: "Priority", type: "string", textAlign: "Left", editType: 'dropdownedit', edit: this.priorityParams, width: "120" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "assignee", headerText: "Assignee", type: "string", textAlign: "Left", width: "120" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "status", headerText: "Status", editType: 'dropdownedit', edit: this.statusParams, type: "string", textAlign: 'Left', width: "120" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "duration", headerText: "Duration in Days", type: "number", editType: 'numericedit', textAlign: "Right", width: "150" })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Toolbar, ej2_react_treegrid_1.Edit, ej2_react_treegrid_1.Filter, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Page] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the use of the empty record template in the Tree Grid. The ",
                    React.createElement("code", null, "emptyRecordTemplate"),
                    " accepts either a string or an HTML element value, which will be used as the template when there is no data.")),
            React.createElement("div", { id: 'description' },
                React.createElement("p", null, "The Tree Grid provides a way to use custom content when it has no data to present. Custom content, such as images, text, or other components, can be used when the Tree Grid does not contain any records to display. This feature replaces the default message of \"No records to display\" typically shown in the Tree Grid."),
                React.createElement("p", null,
                    "More information on the empty record template can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/overview" }, " documentation"),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return EmptyRecordTemplate;
}(sample_base_1.SampleBase));
exports.EmptyRecordTemplate = EmptyRecordTemplate;
