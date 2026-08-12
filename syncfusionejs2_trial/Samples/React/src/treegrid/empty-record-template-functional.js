"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var sample_base_1 = require("../common/sample-base");
var EMPTYRECORDTEMPLATE_CSS = "\n.emptyRecordTemplate {\n    text-align: center;\n    margin: 31px auto;\n}\n\n.e-emptyRecord {\n    display: block;\n    margin: 15px auto;\n    border-radius: 4px;\n    box-shadow: 2px 4px 10px rgba(52, 52, 52, 0.5);\n}\n";
var priorityParams = {
    params: {
        dataSource: [
            { priority: "Low" }, { priority: "Medium" }, { priority: "High" }, { priority: "Critical" }
        ]
    }
};
var statusParams = {
    params: {
        dataSource: [
            { status: "Open" }, { status: "Inprogress" }, { status: "Review-Request" }, { status: "Review-Reject" }, { status: "Closed" }
        ]
    }
};
var EmptyRecordTemplate = function () {
    var treegridRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var emptyTemplate = function () {
        return (React.createElement("div", { className: "emptyRecordTemplate" },
            React.createElement("img", { src: "https://ej2.syncfusion.com/angular/demos/assets/grid/images/emptyRecordTemplate_light.svg", alt: "No record", className: "e-emptyRecord" }),
            React.createElement("div", null,
                React.createElement("b", null, "There is no data available to display at the moment."))));
    };
    var template = emptyTemplate;
    var onDataBound = function () {
        var _a, _b;
        var isGridEmpty = ((_a = treegridRef.current) === null || _a === void 0 ? void 0 : _a.flatData.length) === 0;
        if (treegridRef.current.searchSettings.key === '' || treegridRef.current.searchSettings.key === undefined) {
            treegridRef.current.toolbarModule.enableItems([treegridRef.current.element.id + '_gridcontrol_searchbar'], !isGridEmpty);
        }
        var filterMenudivs = (_b = treegridRef.current) === null || _b === void 0 ? void 0 : _b.element.querySelectorAll('.e-filtermenudiv');
        filterMenudivs.forEach(function (div) {
            var _a;
            if (isGridEmpty && ((_a = treegridRef.current) === null || _a === void 0 ? void 0 : _a.grid.filterSettings.columns.length) == 0) {
                div.classList.add('e-disabled');
                div.style.cursor = 'default';
            }
            else {
                div.classList.remove('e-disabled');
                div.style.removeProperty('cursor');
            }
        });
    };
    var onActionComplete = function (args) {
        var _a, _b, _c, _d, _e;
        // Toggle filter dialog based on visible records
        if (args.requestType === 'filterAfterOpen' && treegridRef.current.flatData.length === 0) {
            if (args.filterModel.filterSettings.columns.length > 0 && args.filterModel.filterSettings.columns.some(function (col) { return col.field === args.columnName; })) {
                args.filterModel.dlgObj.show();
            }
            else {
                args.filterModel.dlgObj.hide();
            }
        }
        if ((args.requestType === 'delete' || args.requestType === 'searching') && treegridRef.current.flatData.length === 0 && treegridRef.current.searchSettings.key === '') {
            (_a = treegridRef.current) === null || _a === void 0 ? void 0 : _a.toolbarModule.enableItems([((_b = treegridRef.current) === null || _b === void 0 ? void 0 : _b.element.id) + '_gridcontrol_searchbar'], false);
        }
        if (args.action === 'clearFilter' && ((_c = treegridRef.current) === null || _c === void 0 ? void 0 : _c.flatData.length) !== 0) {
            (_d = treegridRef.current) === null || _d === void 0 ? void 0 : _d.toolbarModule.enableItems([((_e = treegridRef.current) === null || _e === void 0 ? void 0 : _e.element.id) + '_gridcontrol_searchbar'], true);
        }
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("style", null, EMPTYRECORDTEMPLATE_CSS),
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { id: "TreeGrid", ref: treegridRef, dataSource: [], treeColumnIndex: 1, childMapping: "subtasks", emptyRecordTemplate: template.bind(_this), toolbar: ['Add', 'Delete', 'Update', 'Cancel', 'Search'], editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true }, allowPaging: true, allowSorting: true, allowFiltering: true, filterSettings: { type: 'Menu' }, dataBound: onDataBound.bind(_this), actionComplete: onActionComplete.bind(_this) },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskID", headerText: "Task ID", type: "number", textAlign: "Right", isPrimaryKey: true, validationRules: { required: true, min: 0 }, width: "100" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "taskName", headerText: "Task Name", type: "string", textAlign: 'Left', validationRules: { required: true }, clipMode: "EllipsisWithTooltip", width: "120" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "priority", headerText: "Priority", type: "string", textAlign: "Left", editType: 'dropdownedit', edit: priorityParams, width: "120" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "assignee", headerText: "Assignee", type: "string", textAlign: "Left", width: "100" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: "status", headerText: "Status", editType: 'dropdownedit', edit: statusParams, type: "string", textAlign: 'Left', width: "110" }),
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
exports.default = EmptyRecordTemplate;
