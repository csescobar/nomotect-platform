"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_base_1 = require("@syncfusion/ej2-base");
var sample_base_1 = require("../common/sample-base");
var React = require("react");
var SAMPLE_CSS = "\n.bg-warning {\n    --bs-bg-opacity: 1;\n    background-color: rgba(255,193,7,1)!important;\n}\n.bg-danger {\n    --bs-bg-opacity: 1;\n    background-color: rgba(220,53,69,1)!important;\n}\n.bg-info {\n    --bs-bg-opacity: 1;\n    background-color: rgba(13,202,240,1)!important;\n}\n.bg-success {\n    --bs-bg-opacity: 1;\n    background-color: rgba(25,135,84,1)!important;\n}\n.bg-primary {\n    --bs-bg-opacity: 1;\n    background-color: rgba(13,110,253,1)!important;\n}\n.bg-secondary {\n    --bs-bg-opacity: 1;\n    background-color: rgba(108,117,125,1)!important;\n}";
function CustomBinding() {
    var treegrid;
    var data;
    var BASE_URL = 'https://services.syncfusion.com/react/production/api/SupportTicketData';
    var pageSettings = { pageSize: 10, pageCount: 4 };
    var daterules = { date: true, required: true };
    var dateeditparam = { params: { format: 'M/d/yyyy' } };
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        rendereComplete();
    }, []);
    function rendereComplete() {
        var state = { skip: 0, take: 10 };
        dataStateChange(state);
    }
    // Handles data state changes from the Tree Grid (e.g., paging, sorting, filtering).
    function dataStateChange(state) {
        if (state.requestType === 'expand') {
            execute(state).then(function (treegridData) {
                state.childData = treegridData.result;
                state.childDataBind();
            });
        }
        else {
            execute(state).then(function (treegridData) { treegrid.dataSource = treegridData; });
        }
    }
    var ajax = new ej2_base_1.Ajax({
        type: 'GET', mode: true,
        onFailure: function (e) { return false; }
    });
    // Executes the data operation based on the provided treegrid state.
    function execute(state) {
        if (state.requestType === 'expand') {
            return getChildData(state);
        }
        else {
            return getData(state);
        }
    }
    // Fetches child records for a given parent record when a row is expanded.
    function getChildData(state) {
        var parentId = state.data.TicketID;
        ajax.url = "".concat(BASE_URL, "/?$filter=ParentTicketID%20eq%20").concat(parentId);
        ajax.type = 'GET';
        return ajax.send().then(function (response) {
            var data = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    }
    // Builds the filter query string from the treegrid's filter settings.
    function buildFilterQuery(where) {
        var _a, _b;
        if (!where || where.length === 0)
            return "$filter=ParentTicketID eq null";
        var andConds = [];
        for (var _i = 0, where_1 = where; _i < where_1.length; _i++) {
            var cond = where_1[_i];
            if ((_a = cond.predicates) === null || _a === void 0 ? void 0 : _a.length) {
                var groupFilters = cond.predicates.map(function (pred) { return predicateToString(pred); });
                andConds.push("(".concat(groupFilters.join(" ".concat((_b = cond.condition) !== null && _b !== void 0 ? _b : "and", " ")), ")"));
            }
            else {
                andConds.push(predicateToString(cond));
            }
        }
        if (andConds.length > 0) {
            return "$filter=ParentTicketID eq null and ".concat(andConds.join(" and "));
        }
        return "$filter=ParentTicketID eq null";
    }
    // Converts a single filter predicate object to the filter string.
    function predicateToString(pred) {
        var field = pred.field;
        var value = pred.value;
        var ignoreCase = pred.ignoreCase;
        var valStr = typeof value === "string" ? "'".concat(value, "'") : value;
        switch (pred.operator) {
            case "equal":
                if (ignoreCase && typeof value === "string") {
                    return "(tolower(".concat(field, ") eq '").concat(value.toLowerCase(), "')");
                }
                return "".concat(field, " eq ").concat(valStr);
            case "contains":
                if (ignoreCase && typeof value === "string") {
                    return "contains(tolower(".concat(field, "), '").concat(value.toLowerCase(), "')");
                }
                return "contains(".concat(field, ", ").concat(valStr, ")");
            case "startswith":
                if (ignoreCase && typeof value === "string") {
                    return "startswith(tolower(".concat(field, "), '").concat(value.toLowerCase(), "')");
                }
                return "startswith(".concat(field, ", ").concat(valStr, ")");
            default:
                return "";
        }
    }
    // Builds the OData search query string from the treegrid's search settings.
    function buildSearchQuery(search) {
        if (!search || !search.length)
            return "";
        var s = search[0];
        var searchStr = s.key.toLowerCase();
        var fields = s.fields || [];
        var orConds = [];
        fields.forEach(function (field) {
            orConds.push("substringof('".concat(searchStr, "',tolower(cast(").concat(field, ", 'Edm.String')))"));
        });
        if (!orConds.length)
            return "";
        return " and (".concat(orConds.join(" or "), ")");
    }
    // Fetches the main data based on the provided treegrid state (paging, sorting, filtering).
    function getData(state) {
        var pageQuery = "$skip=".concat(state.skip, "&$top=").concat(state.take);
        var sortQuery = '';
        var filterQuery = '';
        if (state.where) {
            filterQuery = buildFilterQuery(state.where);
        }
        else {
            filterQuery = "$filter=ParentTicketID eq null";
        }
        if (state.search) {
            filterQuery += buildSearchQuery(state.search);
        }
        if ((state.sorted || []).length) {
            sortQuery =
                "&$orderby=" +
                    state.sorted
                        .map(function (obj) {
                        return obj.direction === 'descending'
                            ? "".concat(obj.name, " desc")
                            : obj.name;
                    })
                        .reverse()
                        .join(',');
        }
        ajax.url = "".concat(BASE_URL, "?$inlinecount=allpages&").concat(pageQuery, "&").concat(filterQuery).concat(sortQuery);
        ajax.type = 'GET';
        return ajax.send().then(function (response) {
            var data = JSON.parse(response);
            return { result: data['result'], count: parseInt(data['count'], 10) };
        });
    }
    var getPriorityClass = function (priority) {
        switch (priority) {
            case 'Critical': return 'badge bg-danger';
            case 'High': return 'badge bg-warning';
            case 'Medium': return 'badge bg-info';
            case 'Low': return 'badge bg-success';
            default: return 'badge bg-secondary';
        }
    };
    var getStatusClass = function (status) {
        switch (status) {
            case 'Open': return 'badge bg-primary';
            case 'In Progress': return 'badge bg-warning';
            case 'Resolved': return 'badge bg-success';
            case 'Closed': return 'badge bg-secondary';
            case 'Escalated': return 'badge bg-danger';
            default: return 'badge bg-light text-dark';
        }
    };
    var priorityTemplate = function (props) {
        return React.createElement("span", { className: getPriorityClass(props.Priority) }, props.Priority);
    };
    var statusTemplate = function (props) {
        return React.createElement("span", { className: getStatusClass(props.Status) }, props.Status);
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("style", null, SAMPLE_CSS),
            React.createElement(ej2_react_treegrid_1.TreeGridComponent, { dataSource: data, ref: function (g) { return treegrid = g; }, height: "350", allowPaging: true, allowSorting: true, allowFiltering: true, pageSettings: pageSettings, treeColumnIndex: 1, idMapping: "TicketID", parentIdMapping: "ParentTicketID", hasChildMapping: "isParent", dataStateChange: dataStateChange.bind((this)) },
                React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'TicketID', headerText: 'Ticket ID', width: 90, textAlign: 'Left', isPrimaryKey: true }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Title', headerText: 'Title', width: 250, textAlign: 'Left', clipMode: "EllipsisWithTooltip" }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Category', headerText: 'Category', textAlign: 'Left', width: 120 }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Priority', headerText: 'Priority', width: 100, textAlign: 'Left', template: priorityTemplate }),
                    React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'Status', headerText: 'Status', width: 120, textAlign: 'Left', template: statusTemplate }),
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
}
exports.default = CustomBinding;
