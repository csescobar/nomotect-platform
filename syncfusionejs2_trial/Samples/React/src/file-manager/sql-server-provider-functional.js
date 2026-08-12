"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_filemanager_1 = require("@syncfusion/ej2-react-filemanager");
/**
 * File Manager sample with SQL service
 */
var SqlServer = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var hostUrl = "https://ng2jq.syncfusion.com/ej2-sql-service/";
    return (React.createElement("div", null,
        React.createElement("div", { className: "control-section" },
            React.createElement(ej2_react_filemanager_1.FileManagerComponent, { id: "filemanager", ajaxSettings: { url: hostUrl + 'api/FileManager/Fileoperations', getImageUrl: hostUrl + 'api/FileManager/GetImage', uploadUrl: hostUrl + 'api/FileManager/Upload', downloadUrl: hostUrl + 'api/FileManager/Download' }, toolbarSettings: { items: ['NewFolder', 'SortBy', 'Cut', 'Copy', 'Paste', 'Delete', 'Refresh', 'Download', 'Rename', 'Selection', 'View', 'Details'] }, contextMenuSettings: { layout: ['SortBy', 'View', 'Refresh', '|', 'Paste', '|', 'NewFolder', '|', 'Details', '|', 'SelectAll'] } },
                React.createElement(ej2_react_filemanager_1.Inject, { services: [ej2_react_filemanager_1.NavigationPane, ej2_react_filemanager_1.DetailsView, ej2_react_filemanager_1.Toolbar, ej2_react_filemanager_1.ContextMenu] }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample demonstrates how to utilize the ",
                React.createElement("a", { target: "_blank", href: "https://github.com/SyncfusionExamples/ej2-sql-server-database-aspcore-file-provider" }, "SQL server file system provider"),
                " with File Manager component. To run the service, configure the SQL server database connection using the ",
                React.createElement("code", null, "SetSQLConnection"),
                " method to set the connection name, table name and rootId of the SQL table.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The File Manager component is used to explore a file system through a web application, similar to the windows explorer for windows. It supports all the basic file operations such as create, rename, delete and so on."),
            React.createElement("p", null,
                React.createElement("b", null, "Note: "),
                "File Manager\u2019s upload functionality is restricted in online demo. To work with upload functionality, please download ",
                React.createElement("a", { target: "_blank", href: "https://github.com/SyncfusionExamples/ej2-sql-server-database-aspcore-file-provider" }, "SQL Database Provider"),
                " from the GitHub repository."))));
};
exports.default = SqlServer;
