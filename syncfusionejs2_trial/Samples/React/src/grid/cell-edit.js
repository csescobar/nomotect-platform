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
exports.CellEdit = void 0;
var ej2_react_grids_1 = require("@syncfusion/ej2-react-grids");
var data_1 = require("./data");
var React = require("react");
var sample_base_1 = require("../common/sample-base");
require("./cell-edit.css");
/**
 * Cell Editing sample
 */
var CellEdit = /** @class */ (function (_super) {
    __extends(CellEdit, _super);
    function CellEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gridInstance = null;
        _this.toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
        _this.filterSettings = { type: 'CheckBox' };
        _this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
        _this.doctorTemplate = function (props) {
            var doctorList = [
                'Dr. Smitha', 'Dr. Johnson', 'Dr. Garcia', 'Dr. Brianna',
                'Dr. Williams', 'Dr. Martinez', 'Dr. Davis', 'Dr. Joanna'
            ];
            var index = doctorList.indexOf(props.Doctor) + 1;
            return (React.createElement("div", { className: "doctor-cell" }, "src/grid/images/".concat(index, ".png"),
                React.createElement("span", null, props.Doctor)));
        };
        _this.statusTemplate = function (props) {
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
        _this.typeTemplate = function (props) {
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
        return _this;
    }
    CellEdit.prototype.actionBegin = function (args) {
        if (args.requestType === 'save' && args.action === 'add') {
            args.data.ApptID = 'APT-' + (Date.now() % 100000);
        }
    };
    CellEdit.prototype.onActionComplete = function (args) {
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
            if (this.gridInstance) {
                this.gridInstance.updateCell(args.rowIndex, 'Room', doctorRoomMap[args.data.Doctor]);
            }
        }
    };
    CellEdit.prototype.validateAppointmentTime = function (args) {
        if (!args.value)
            return false;
        var date = new Date(args.value);
        var hour = date.getHours();
        return !(hour < 9 || hour > 20);
    };
    CellEdit.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement(ej2_react_grids_1.GridComponent, { id: "CellEdit", ref: function (grid) { return (_this.gridInstance = grid); }, dataSource: data_1.appointmentData, allowPaging: true, allowSorting: true, allowFiltering: true, toolbar: this.toolbarOptions, editSettings: this.editSettings, filterSettings: this.filterSettings, height: 400, rowHeight: 40, actionComplete: this.onActionComplete.bind(this), clipMode: "EllipsisWithTooltip", actionBegin: this.actionBegin.bind(this) },
                    React.createElement(ej2_react_grids_1.ColumnsDirective, null,
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "ApptID", headerText: "Appointment ID", isPrimaryKey: true, width: 140, visible: false }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Patient", headerText: "Patient", width: 150, validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Doctor", headerText: "Doctor", width: 160, template: this.doctorTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "AppointmentTime", headerText: "Appointment Time", editType: "datetimepickeredit", width: 200, format: { type: 'dateTime', format: 'M/d/y hh:mm a' }, validationRules: { required: true,
                                timeRule: [
                                    this.validateAppointmentTime.bind(this),
                                    'Appointment allowed only between 9AM – 9PM'
                                ]
                            } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Type", headerText: "Type", width: 150, template: this.typeTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Status", headerText: "Status", width: 130, template: this.statusTemplate, editType: "dropdownedit", validationRules: { required: true } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Room", headerText: "Room No", width: 120 }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Fee", headerText: "Fee", textAlign: "Right", width: 90, format: "C2", editType: "numericedit", edit: { params: { showSpinButton: false } }, validationRules: { required: true, min: 50, max: 500 } }),
                        React.createElement(ej2_react_grids_1.ColumnDirective, { field: "Notes", headerText: "Notes", width: 260 })),
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
    };
    return CellEdit;
}(sample_base_1.SampleBase));
exports.CellEdit = CellEdit;
exports.default = CellEdit;
