"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./sample.css");
function AutoWrap() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var filterSettings = { type: 'Menu' };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { dataSource: data_1.inventoryData, allowPaging: true, allowSorting: true, allowFiltering: true, filterSettings: filterSettings, pageSettings: { pageCount: 5 }, allowTextWrap: true, height: '400' },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Inventor', headerText: 'Inventor', width: '155' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'NumberofPatentFamilies', headerText: 'No of Patent Families', width: '200', textAlign: 'Right' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Country', headerText: 'Country', width: '120' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Active', headerText: 'Active', width: '130' }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: 'Mainfieldsofinvention', headerText: 'Main Fields of Invention (Primary patent technology areas)', width: '180' })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Page, ej2_react_grids_1.Filter, ej2_react_grids_1.Sort] })),
            React.createElement("div", { className: "e-dsalign" },
                "Source:",
                React.createElement("a", { href: "https://en.wikipedia.org/wiki/List_of_prolific_inventors", target: '_blank' }, "Wikipedia: List of Prolific inventors"))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates the Data Grid with the text wrap option enabled for both header and cell content. This setting ensures that long header text and cell values are fully visible by wrapping onto multiple lines instead of being truncated with an ellipsis.")),
        React.createElement("div", { id: 'description' },
            React.createElement("p", null,
                "In this demo, the ",
                React.createElement("strong", null, "\"Main Fields of Invention\""),
                " column exceeds the available width, so its header and cell content are wrapped across multiple lines for better readability. Text wrapping is enabled by setting the grid\u2019s ",
                React.createElement("code", null,
                    React.createElement("a", { "aria-label": "API link for documentation", target: "_blank", className: "code", href: "http://ej2.syncfusion.com/react/documentation/api/grid/#allowtextwrap" }, "allowTextWrap")),
                " property to ",
                React.createElement("strong", null, "true"),
                ", which automatically applies wrapping to both header and cell content."),
            React.createElement("p", null,
                "More information on text wrap can be found in this ",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/cell" }, " documentation section")),
            React.createElement("p", null,
                "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, "React Data Grid component"),
                " page."))));
}
exports.default = AutoWrap;
