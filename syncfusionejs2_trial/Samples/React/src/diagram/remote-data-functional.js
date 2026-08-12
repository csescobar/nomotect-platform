"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import React and necessary components from React Diagram library for building the diagram.
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var sample_base_1 = require("../common/sample-base");
var ej2_data_1 = require("@syncfusion/ej2-data");
function RemoteData() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    // 1) Memoize DataManager so it is not recreated on re-renders
    var dataManager = React.useMemo(function () {
        return new ej2_data_1.DataManager({
            url: "https://services.syncfusion.com/react/production/api/RemoteData",
            crossDomain: true
        });
    }, []);
    // 2) Memoize layout object to keep stable identity
    var layout = React.useMemo(function () { return ({
        type: "HierarchicalTree",
        margin: { left: 0, right: 0, top: 100, bottom: 0 },
        verticalSpacing: 40
    }); }, []);
    // 3) Stable callbacks for defaults/binding
    var getNodeDefaults = React.useCallback(function (node) {
        node.width = 80;
        node.height = 40;
        node.shape = { type: "Basic", shape: "Rectangle" };
        node.style = { fill: "#048785", strokeColor: "Transparent" };
    }, []);
    var getConnectorDefaults = React.useCallback(function (connector) {
        connector.type = "Orthogonal";
        connector.style.strokeColor = "#048785";
        connector.targetDecorator.shape = "None";
    }, []);
    var doBinding = React.useCallback(function (nodeModel, data) {
        nodeModel.annotations = [
            {
                content: data["Label"],
                style: { color: "white" }
            }
        ];
    }, []);
    // 4) Memoize dataSourceSettings so its identity is stable
    var dataSourceSettings = React.useMemo(function () { return ({
        id: "Id",
        parentId: "ParentId",
        dataSource: dataManager,
        doBinding: doBinding
    }); }, [dataManager, doBinding]);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", width: "100%", height: "490", layout: layout, getNodeDefaults: getNodeDefaults, getConnectorDefaults: getConnectorDefaults, dataSourceSettings: dataSourceSettings, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan, snapSettings: { constraints: 0 } },
                React.createElement(ej2_react_diagrams_1.Inject, { services: [ej2_react_diagrams_1.DataBinding, ej2_react_diagrams_1.HierarchicalTree] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates binding remote data with the diagram using the Data Manager support.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null,
                "This example shows how to generate a diagram from remote data such as REST APIs. The",
                React.createElement("code", null, "dataSourceSettings"),
                " property can be used to map an external data source with the diagram control. The",
                React.createElement("code", null, "id"),
                " property of",
                React.createElement("code", null, "dataSourceSettings"),
                " can be used to define a unique field of an external data. The",
                React.createElement("code", null, "parentId"),
                " property can be used to define the relationship between objects. The",
                React.createElement("code", null, "dataManager"),
                " property can be used to fetch data from web services."),
            React.createElement("p", { style: { fontWeight: 500 } }, "Injecting Module"),
            React.createElement("p", null,
                "The diagram component\u2019s features are segregated into individual feature-wise modules. To generate diagrams from an external data source, inject",
                React.createElement("code", null, "DataBinding"),
                " module into ",
                React.createElement("code", null, "services"),
                ". To automatically arrange the objects in a hierarchical structure, inject",
                React.createElement("code", null, "DataBinding"),
                " module into ",
                React.createElement("code", null, "services"),
                "."),
            React.createElement("br", null),
            React.createElement("p", null,
                "Looking for the full React Diagram component overview, features, pricing, and documentation? Visit the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                " page."))));
}
exports.default = RemoteData;
