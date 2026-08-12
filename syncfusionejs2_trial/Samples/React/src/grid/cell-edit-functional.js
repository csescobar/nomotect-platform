"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var sample_base_1 = require("../common/sample-base");
require("./cell-edit.css");
function CellEdit() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var gridRef = React.useRef(null);
    var toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    var filterSettings = { type: 'CheckBox' };
    var editSettings = {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Cell'
    };
    var doctorTemplate = function (props) {
        var doctorList = [
            'Dr. Smitha', 'Dr. Johnson', 'Dr. Garcia', 'Dr. Brianna',
            'Dr. Williams', 'Dr. Martinez', 'Dr. Davis', 'Dr. Joanna'
        ];
        var index = doctorList.indexOf(props.Doctor) + 1;
        return (React.createElement("div", { className: "doctor-cell" },
            React.createElement("img", { src: "src/grid/images/".concat(index, ".png"), alt: props.Doctor, className: "doctor-img" }),
            React.createElement("span", null, props.Doctor)));
    };
    var statusTemplate = function (props) {
        var cls = 'waiting';
        if (props.Status === 'Booked')
            cls = 'booked';
        else if (props.Status === 'Canceled')
            cls = 'canceled';
        else if (props.Status === 'Completed')
            cls = 'completed';
        return (React.createElement("div", null,
            React.createElement("span", { className: "badge ".concat(cls) }, props.Status)));
    };
    var typeTemplate = function (props) {
        var cls = 'consult';
        if (props.Type === 'Emergency') {
            cls = 'emergency';
        }
        else if (props.Type === 'Lab Test') {
            cls = 'lab';
        }
        else if (props.Type === 'Follow-up') {
            cls = 'follow';
        }
        else if (props.Type === 'Routine Check') {
            cls = 'routine';
        }
        return (React.createElement("span", { className: "type ".concat(cls) }, props.Type));
    };
    function actionBegin(args) {
        if (args.requestType === 'save' && args.action === 'add') {
            args.data.ApptID = 'APT-' + (Date.now() % 100000);
        }
    }
    var onActionComplete = function (args) {
        var _a;
        if (args.requestType === 'save' && args.columnName === 'Doctor') {
            var doctorRoomMap = {
                'Dr. Smitha': 'R1',
                'Dr. Johnson': 'R2',
                'Dr. Garcia': 'R6',
                'Dr. Brianna': 'R4',
                'Dr. Williams': 'R3',
                'Dr. Martinez': 'R7',
                'Dr. Davis': 'R8',
                'Dr. Joanna': 'R5',
            };
            (_a = gridRef.current) === null || _a === void 0 ? void 0 : _a.updateCell(args.rowIndex, 'Room', doctorRoomMap[args.data.Doctor]);
        }
    };
    var validateAppointmentTime = function (args) {
        if (!args.value)
            return false;
        var hour = new Date(args.value).getHours();
        return hour >= 9 && hour <= 20;
    };
    return (React.createElement("div", { className: 'control-pane' },
        React.createElement("div", { className: 'control-section' },
            React.createElement(ej2_react_grids_1.GridComponent, { id: "CellEdit", ref: gridRef, dataSource: data_1.appointmentData, allowPaging: true, allowSorting: true, allowFiltering: true, filterSettings: filterSettings, editSettings: editSettings, toolbar: toolbarOptions, height: 400, rowHeight: 40, actionComplete: onActionComplete, clipMode: "EllipsisWithTooltip", actionBegin: actionBegin },
                React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ApptID", headerText: "Appointment ID", isPrimaryKey: true, visible: false, validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Patient", headerText: "Patient", width: "150", validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Doctor", headerText: "Doctor", width: "160", template: doctorTemplate, editType: "dropdownedit" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "AppointmentTime", headerText: "Appointment Time", editType: "datetimepickeredit", width: "200", format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, validationRules: { required: true,
                            timeRule: [
                                validateAppointmentTime,
                                'Appointment allowed only between 9AM – 9PM'
                            ]
                        } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Type", headerText: "Type", width: "150", template: typeTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Status", headerText: "Status", width: "130", template: statusTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Room", headerText: "Room No", width: "120", editType: "dropdownedit" }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Fee", headerText: "Fee", textAlign: "Right", width: "90", format: "C2", editType: "numericedit", edit: { params: { showSpinButton: false } }, validationRules: { required: true, min: 50, max: 500 } }),
                    React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Notes", headerText: "Notes", width: "260" })),
                React.createElement(ej2_react_grids_1.Inject, { services: [ej2_react_grids_1.Toolbar, ej2_react_grids_1.Edit, ej2_react_grids_1.Page, ej2_react_grids_1.Sort, ej2_react_grids_1.Filter] })),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates cell editing for quick and efficient data updates. It provides a seamless editing experience for modifying individual cell values within the Grid.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "Cell editing allows users to modify a single cell\u2019s value directly. This mode is enabled by setting ",
                    React.createElement("code", null,
                        React.createElement("a", { target: "_blank", className: "code", href: "https://ej2.syncfusion.com/react/documentation/api/grid/editSettings/#mode" }, "editSettings.mode")),
                    " to ",
                    React.createElement("code", null, "Cell"),
                    ". Users can enter edit mode by double\u2011clicking a cell and then changing its value. The update is applied when the user presses \"Enter\" key or moves to another cell."),
                React.createElement("p", null, "This editing mode works seamlessly with other Grid features such as validation, formatting, and more, ensuring a consistent and efficient editing experience."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Injecting Module:")),
                React.createElement("p", null,
                    "Features of the Grid component are organized into individual, feature-specific modules. To use the editing and toolbar functionality, inject the required modules ",
                    React.createElement("code", null, "Edit"),
                    " and ",
                    React.createElement("code", null, "Toolbar"),
                    " into the ",
                    React.createElement("code", null, "services"),
                    "."),
                React.createElement("p", null,
                    "More information on edit configuration can be found in the ",
                    React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/grid/editing" }, " documentation section"),
                    "."),
                React.createElement("p", null,
                    "Looking for the full React Data Grid component overview, features, pricing, and documentation? Visit our",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-data-grid" }, " React Data Grid component"),
                    " page.")))));
}
exports.default = CellEdit;
