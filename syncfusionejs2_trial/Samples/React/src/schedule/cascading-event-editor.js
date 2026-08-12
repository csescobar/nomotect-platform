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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CascadingEventEditor = void 0;
var React = require("react");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var sample_base_1 = require("../common/sample-base");
require("./cascading-event-editor.css");
var CascadingEventEditor = /** @class */ (function (_super) {
    __extends(CascadingEventEditor, _super);
    function CascadingEventEditor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.floors = [
            { id: 1, name: 'Floor 1' },
            { id: 2, name: 'Floor 2' },
        ];
        _this.rooms = [
            { id: 101, name: 'Room 101', floorId: 1 },
            { id: 102, name: 'Room 102', floorId: 1 },
            { id: 201, name: 'Room 201', floorId: 2 },
        ];
        _this.resources = [
            { id: 1, name: 'Projector', roomId: 101 },
            { id: 2, name: 'Whiteboard', roomId: 102 },
            { id: 3, name: 'Conference Kit', roomId: 201 },
        ];
        _this.typeOptions = ['Meeting', 'Appointment', 'Internal'];
        _this.staffData = [
            { id: 1, text: 'Mike Anderson', color: '#1aaa55', type: 'Consultants' },
            { id: 2, text: 'Kevin Larson', color: '#357cd2', type: 'Sales' },
            { id: 3, text: 'Sarah Johnson', color: '#f57f17', type: 'Sales' },
            { id: 4, text: 'David Miller', color: '#7fa900', type: 'Testers' },
            { id: 5, text: 'Emma Wilson', color: '#df5286', type: 'Testers' },
        ];
        _this.eventsData = [
            {
                Id: 1,
                Subject: 'Meeting',
                Type: 'Meeting',
                StartTime: new Date(2026, 4, 11, 9, 0),
                EndTime: new Date(2026, 4, 11, 12, 0),
                StaffId: 1,
                FloorId: 1,
                RoomId: 101,
                ResourceId: 1,
            },
            {
                Id: 2,
                Subject: 'Appointment',
                Type: 'Appointment',
                StartTime: new Date(2026, 4, 11, 10, 0),
                EndTime: new Date(2026, 4, 11, 12, 0),
                StaffId: 2,
                FloorId: 1,
                RoomId: 102,
                ResourceId: 2,
            },
            {
                Id: 3,
                Subject: 'Review',
                Type: 'Internal',
                StartTime: new Date(2026, 4, 11, 10, 0),
                EndTime: new Date(2026, 4, 11, 13, 0),
                StaffId: 3,
                FloorId: 2,
                RoomId: 201,
                ResourceId: 3,
            },
            {
                Id: 4,
                Subject: 'Discussion',
                Type: 'Meeting',
                StartTime: new Date(2026, 4, 11, 13, 0),
                EndTime: new Date(2026, 4, 11, 16, 0),
                StaffId: 4,
                FloorId: 1,
                RoomId: 101,
                ResourceId: 1,
            },
            {
                Id: 5,
                Subject: 'Planning',
                Type: 'Meeting',
                StartTime: new Date(2026, 4, 11, 11, 0),
                EndTime: new Date(2026, 4, 11, 15, 0),
                StaffId: 5,
                FloorId: 2,
                RoomId: 201,
                ResourceId: 3,
            },
            {
                Id: 6,
                Subject: 'Planning',
                Type: 'Internal',
                StartTime: new Date(2026, 4, 11, 13, 0),
                EndTime: new Date(2026, 4, 11, 15, 0),
                StaffId: 1,
                FloorId: 2,
                RoomId: 201,
                ResourceId: 3,
            },
        ];
        _this.getTypeColor = function (type) {
            switch (type) {
                case 'Meeting':
                    return '#22c55e';
                case 'Appointment':
                    return '#3b82f6';
                case 'Internal':
                    return '#f59e0b';
                default:
                    return '#6b7280';
            }
        };
        _this.onPopupClose = function (args) {
            if (args.type === 'Editor' && args.element) {
                args.element.classList.remove('cascading-editor-dialog');
            }
        };
        _this.onPopupOpen = function (args) {
            if (args.type === 'Editor' && args.element) {
                args.element.classList.add('cascading-editor-dialog');
            }
        };
        _this.staffTemplate = function (props) {
            var d = props.resourceData;
            return (React.createElement("div", { className: "template-wrap" },
                React.createElement("div", null,
                    React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                        React.createElement("div", { style: {
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                backgroundColor: d.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#fff',
                            } }, d.text.charAt(0)),
                        React.createElement("div", null,
                            React.createElement("div", null, d.text)))),
                React.createElement("div", null, d.type)));
        };
        _this.headerIndentTemplate = function () { return (React.createElement("div", { className: "template-wrap header-indent" },
            React.createElement("div", null, "Staff"),
            React.createElement("div", null, "Type"))); };
        _this.CustomEditor = function (props) {
            var _a = React.useState(props.Type || 'Meeting'), type = _a[0], setType = _a[1];
            var _b = React.useState(props.FloorId || null), floorId = _b[0], setFloorId = _b[1];
            var _c = React.useState(props.RoomId || null), roomId = _c[0], setRoomId = _c[1];
            var _d = React.useState([]), filteredRooms = _d[0], setFilteredRooms = _d[1];
            var _e = React.useState(_this.resources), filteredResources = _e[0], setFilteredResources = _e[1];
            React.useEffect(function () {
                var t = props.Type || 'Meeting';
                var f = props.FloorId || null;
                var r = props.RoomId || null;
                setType(t);
                setFloorId(f);
                setRoomId(r);
                if (t === 'Meeting' && f) {
                    var roomsFiltered = _this.rooms.filter(function (rm) { return rm.floorId === f; });
                    setFilteredRooms(roomsFiltered);
                    if (r) {
                        var resFiltered = _this.resources.filter(function (rs) { return rs.roomId === r; });
                        setFilteredResources(resFiltered);
                    }
                    else {
                        setFilteredResources(_this.resources);
                    }
                }
                else {
                    setFilteredRooms([]);
                    setFilteredResources(_this.resources);
                }
            }, [props.Id]);
            var onTypeChange = function (e) {
                setType(e.value);
                setFloorId(null);
                setRoomId(null);
                setFilteredRooms([]);
                setFilteredResources(_this.resources);
            };
            var onFloorChange = function (e) {
                var selected = e.value;
                setFloorId(selected);
                setFilteredRooms(_this.rooms.filter(function (r) { return r.floorId === selected; }));
                setRoomId(null);
                setFilteredResources(_this.resources);
            };
            var onRoomChange = function (e) {
                var selected = e.value;
                setRoomId(selected);
                setFilteredResources(_this.resources.filter(function (r) { return r.roomId === selected; }));
            };
            return (React.createElement("div", null,
                React.createElement("table", { style: { width: '100%' } },
                    React.createElement("tbody", null,
                        React.createElement("tr", null,
                            React.createElement("td", null, "Name"),
                            React.createElement("td", null,
                                React.createElement("input", { className: "e-field e-input", name: "Subject", defaultValue: props.Subject || '' }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Type"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { className: "e-field", dataSource: _this.typeOptions, value: type, change: onTypeChange, name: "Type" }))),
                        React.createElement("tr", { style: { display: type === 'Meeting' ? '' : 'none' } },
                            React.createElement("td", null, "Floor"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: _this.floors, fields: { text: 'name', value: 'id' }, value: floorId, change: onFloorChange, name: "FloorId", className: "e-field" }))),
                        React.createElement("tr", { style: { display: type === 'Meeting' ? '' : 'none' } },
                            React.createElement("td", null, "Room"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: filteredRooms, fields: { text: 'name', value: 'id' }, value: roomId, change: onRoomChange, name: "RoomId", className: "e-field" }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Resource"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { className: "e-field", dataSource: _this.staffData, fields: { text: 'text', value: 'id' }, name: "StaffId", value: props.StaffId }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "Start"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_calendars_1.DateTimePickerComponent, { className: "e-field", name: "StartTime", value: props.StartTime }))),
                        React.createElement("tr", null,
                            React.createElement("td", null, "End"),
                            React.createElement("td", null,
                                React.createElement(ej2_react_calendars_1.DateTimePickerComponent, { className: "e-field", name: "EndTime", value: props.EndTime })))))));
        };
        return _this;
    }
    CascadingEventEditor.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "schedule-container", style: { width: '100%' } },
                React.createElement(ej2_react_schedule_1.ScheduleComponent, { cssClass: "custom-scheduler", ref: function (s) { return (_this.schedule = s); }, width: "100%", height: "600px", selectedDate: new Date(2026, 4, 11), currentView: "TimelineDay", group: { resources: ['Staff'] }, popupOpen: this.onPopupOpen.bind(this), popupClose: this.onPopupClose.bind(this), headerIndentTemplate: this.headerIndentTemplate, resourceHeaderTemplate: this.staffTemplate, editorTemplate: function (props) { return (React.createElement(_this.CustomEditor, __assign({ key: props.Id || 'new' }, props))); }, eventSettings: { dataSource: this.eventsData }, eventRendered: function (args) {
                        var color = _this.getTypeColor(args.data.Type || 'Meeting');
                        args.element.style.backgroundColor = color;
                    } },
                    React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                        React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "StaffId", title: "Staff", name: "Staff", dataSource: this.staffData, textField: "text", idField: "id", groupIDField: "StaffId", colorField: "color" })),
                    React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: "TimelineDay" })),
                    React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineViews, ej2_react_schedule_1.DragAndDrop, ej2_react_schedule_1.Resize] }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases the Cascading Event Editor in the Syncfusion React Scheduler. Editor fields dynamically update based on user selections, enabling guided input, improving accuracy, and enhancing usability for complex scheduling scenarios.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "This example demonstrates a ",
                    React.createElement("strong", null, "Cascading Event Editor"),
                    " built with the Syncfusion Scheduler component. It enhances the default editor by introducing dependent fields that react to user input, creating a more structured and efficient event creation experience."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Cascading Dropdowns")),
                React.createElement("p", null, "Dropdown selections dynamically filter related fields, ensuring users only see relevant options. This reduces clutter and simplifies the form interaction."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Improved Data Consistency")),
                React.createElement("p", null, "Field dependencies enforce logical relationships, minimizing invalid entries and maintaining clean, structured data\u2014ideal for hierarchical scenarios like resources, categories, or services."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Flexible Customization")),
                React.createElement("p", null, "The editor layout is fully customizable, allowing integration of custom inputs, validation, and UI enhancements to match specific business needs."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Key Benefits")),
                React.createElement("p", null, "This approach simplifies data entry, reduces errors, and boosts productivity through intelligent field interactions\u2014making it well-suited for advanced scheduling and booking applications."),
                React.createElement("p", null,
                    "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                    " component page."))));
    };
    return CascadingEventEditor;
}(sample_base_1.SampleBase));
exports.CascadingEventEditor = CascadingEventEditor;
exports.default = CascadingEventEditor;
