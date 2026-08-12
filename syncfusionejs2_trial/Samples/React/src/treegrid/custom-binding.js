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
exports.TaskService = exports.CustomBinding = void 0;
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_base_1 = require("@syncfusion/ej2-base");
var React = require("react");
var sample_base_1 = require("../common/sample-base");
var SAMPLE_CSS = "\n.bg-warning {\n    --bs-bg-opacity: 1;\n    background-color: rgba(255,193,7,1)!important;\n}\n.bg-danger {\n    --bs-bg-opacity: 1;\n    background-color: rgba(220,53,69,1)!important;\n}\n.bg-info {\n    --bs-bg-opacity: 1;\n    background-color: rgba(13,202,240,1)!important;\n}\n.bg-success {\n    --bs-bg-opacity: 1;\n    background-color: rgba(25,135,84,1)!important;\n}\n.bg-primary {\n    --bs-bg-opacity: 1;\n    background-color: rgba(13,110,253,1)!important;\n}\n.bg-secondary {\n    --bs-bg-opacity: 1;\n    background-color: rgba(108,117,125,1)!important;\n}";
var CustomBinding = /** @class */ (function (_super) {
    __extends(CustomBinding, _super);
    function CustomBinding() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.taskService = new TaskService();
        _this.pageSettings = { pageSize: 10, pageCount: 4 };
        _this.daterules = { date: true, required: true };
        _this.dateeditparam = { params: { format: 'M/d/yyyy' } };
        // Handles data state changes like paging, sorting, and filtering
        _this.dataStateChange = function (state) {
            if (state.requestType === 'expand') {
                _this.taskService.execute(state).then(function (treegridData) {
                    // For expand, bind child data directly
                    state.childData = treegridData.result;
                    state.childDataBind();
                });
            }
            else {
                _this.taskService.execute(state).then(function (treegridData) {
                    _this.treegrid.dataSource = treegridData;
                });
            }
        };
        _this.getPriorityClass = function (priority) {
            var classMap = {
                'Critical': 'badge bg-danger',
                'High': 'badge bg-warning',
                'Medium': 'badge bg-info',
                'Low': 'badge bg-success'
            };
            return classMap[priority] || 'badge bg-secondary';
        };
        _this.getStatusClass = function (status) {
            var classMap = {
                'Open': 'badge bg-primary',
                'In Progress': 'badge bg-warning',
                'Resolved': 'badge bg-success',
                'Closed': 'badge bg-secondary',
                'Escalated': 'badge bg-danger'
            };
            return classMap[status] || 'badge bg-light text-dark';
        };
        _this.priorityTemplate = function (props) {
            return React.createElement("span", { className: _this.getPriorityClass(props.Priority) }, props.Priority);
        };
        _this.statusTemplate = function (props) {
            return React.createElement("span", { className: _this.getStatusClass(props.Status) }, props.Status);
        };
        return _this;
    }
    CustomBinding.prototype.rendereComplete = function () {
        var initialState = { skip: 0, take: 10 };
        this.dataStateChange(initialState);
    };
    CustomBinding.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("style", null, SAMPLE_CSS),
                React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: this.data, ref: function (g) { return _this.treegrid = g; }, height: 350, allowPaging: true, allowSorting: true, allowFiltering: true, pageSettings: this.pageSettings, treeColumnIndex: 1, idMapping: "TicketID", parentIdMapping: "ParentTicketID", hasChildMapping: "isParent", dataStateChange: this.dataStateChange.bind((this)) },
                    React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'TicketID', headerText: 'Ticket ID', width: 90, textAlign: 'Left', isPrimaryKey: true }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Title', headerText: 'Title', width: 250, clipMode: "EllipsisWithTooltip" }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Category', headerText: 'Category', textAlign: 'Left', width: 120 }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Priority', headerText: 'Priority', width: 100, textAlign: 'Left', template: this.priorityTemplate }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: 120, textAlign: 'Left', template: this.statusTemplate }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'AssignedAgent', headerText: 'Assigned To', textAlign: 'Left', width: 150 }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'CustomerName', headerText: 'Customer', textAlign: 'Left', width: 140 }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'CreatedDate', headerText: 'Created Date', allowFiltering: false, textAlign: 'Right', width: 130, format: 'yMd', type: 'date' }),
                        React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'DueDate', headerText: 'Due Date', allowFiltering: false, textAlign: 'Right', width: 130, format: 'yMd', type: 'date' })),
                    React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Page, ej2_react_treegrid_1.Sort, ej2_react_treegrid_1.Filter] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases a ticket management dashboard that displays a hierarchical list of support issues in a Tree Grid.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The Tree Grid can fetch data from external APIs using AJAX, populating the component with the response data. When performing actions like ",
                    React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowpaging" }, "paging"),
                    ", ",
                    React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowsorting" }, "sorting"),
                    ", or ",
                    React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/treegrid/#allowfiltering" }, "filtering"),
                    ", the ",
                    React.createElement("code", null, "dataStateChange"),
                    " event triggers, requiring developers to send an HTTP request and update the Tree Grid with the new data."),
                React.createElement("p", null,
                    "In this demo, users can navigate the paged Tree Grid, sort data by clicking any column header, and apply filters using the filter bar. Multi-column sorting is supported, and filtering is enabled per column. To enable paging, sorting and filtering set the ",
                    React.createElement("code", null, "allowPaging"),
                    ", ",
                    React.createElement("code", null, "allowSorting"),
                    " and ",
                    React.createElement("code", null, "allowFiltering"),
                    " as ",
                    React.createElement("b", null, "true"),
                    "."),
                React.createElement("p", null,
                    "More information about the custom data binding can be found in this ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/overview" }, "documentation"),
                    " section."),
                React.createElement("p", null,
                    "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                    " page."))));
    };
    return CustomBinding;
}(sample_base_1.SampleBase));
exports.CustomBinding = CustomBinding;
var TaskService = /** @class */ (function () {
    function TaskService() {
        var _this = this;
        this.ajax = new ej2_base_1.Ajax({
            type: 'GET', mode: true,
            onFailure: function (e) { return false; }
        });
        this.BASE_URL = 'https://services.syncfusion.com/react/production/api/SupportTicketData';
        // Builds the filter query string from the treegrid's filter settings.
        this.buildFilterQuery = function (where) {
            if (!where || where.length === 0)
                return "$filter=ParentTicketID eq null";
            var andConds = where.map(function (cond) {
                var _a, _b;
                if ((_a = cond.predicates) === null || _a === void 0 ? void 0 : _a.length) {
                    var groupFilters = cond.predicates.map(function (pred) { return _this.predicateToString(pred); });
                    return "(".concat(groupFilters.join(" ".concat((_b = cond.condition) !== null && _b !== void 0 ? _b : "and", " ")), ")");
                }
                return _this.predicateToString(cond);
            });
            return "$filter=ParentTicketID eq null and ".concat(andConds.join(" and "));
        };
        // Converts a single filter predicate object to the filter string.
        this.predicateToString = function (pred) {
            var valStr = typeof pred.value === "string" ? "'".concat(pred.value, "'") : pred.value;
            var operator = pred.operator === "equal" ? "eq" : pred.operator;
            if (pred.ignoreCase && typeof pred.value === 'string') {
                return "contains(tolower(".concat(pred.field, "), '").concat(String(pred.value).toLowerCase(), "')");
            }
            return "".concat(pred.field, " ").concat(operator, " ").concat(valStr);
        };
        // Builds the OData search query string from the treegrid's search settings.
        this.buildSearchQuery = function (search) {
            if (!search || !search.length)
                return "";
            var s = search[0];
            var searchStr = s.key.toLowerCase();
            var orConds = (s.fields || []).map(function (field) { return "substringof('".concat(searchStr, "',tolower(cast(").concat(field, ", 'Edm.String')))"); });
            return orConds.length > 0 ? " and (".concat(orConds.join(" or "), ")") : "";
        };
    }
    // Routes the data request to the appropriate handler
    TaskService.prototype.execute = function (state) {
        if (state.requestType === 'expand') {
            return this.getChildData(state);
        }
        else {
            return this.getData(state);
        }
    };
    // Fetches child data for an expanded parent row
    TaskService.prototype.getChildData = function (state) {
        var parentId = state.data.TicketID;
        this.ajax.url = "".concat(this.BASE_URL, "/?$filter=ParentTicketID%20eq%20").concat(parentId);
        this.ajax.type = 'GET';
        this.ajax.data = undefined;
        return this.ajax.send().then(function (response) {
            var data = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    };
    // Fetches root level data with OData queries for paging, sorting, etc.
    TaskService.prototype.getData = function (state) {
        var pageQuery = "$skip=".concat(state.skip, "&$top=").concat(state.take);
        var sortQuery = '';
        var filterQuery = '';
        if (state.where) {
            filterQuery = this.buildFilterQuery(state.where);
        }
        else {
            filterQuery = "$filter=ParentTicketID eq null";
        }
        if (state.search && state.search.length > 0) {
            filterQuery += this.buildSearchQuery(state.search);
        }
        if (state.sorted && state.sorted.length > 0) {
            sortQuery = "&$orderby=".concat(state.sorted
                .map(function (obj) { return (obj.direction === 'descending' ? "".concat(obj.name, " desc") : obj.name); })
                .reverse()
                .join(','));
        }
        this.ajax.url = "".concat(this.BASE_URL, "?$inlinecount=allpages&").concat(pageQuery, "&").concat(filterQuery).concat(sortQuery);
        this.ajax.type = 'GET';
        this.ajax.data = undefined;
        return this.ajax.send().then(function (response) {
            var data = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    };
    return TaskService;
}());
exports.TaskService = TaskService;
