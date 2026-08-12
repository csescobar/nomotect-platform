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
exports.EmployeeShiftManagement = void 0;
var React = require("react");
var ReactDOM = require("react-dom/client");
require("./employee-shift-management.css");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_react_navigations_2 = require("@syncfusion/ej2-react-navigations");
var ej2_react_popups_2 = require("@syncfusion/ej2-react-popups");
var sample_base_1 = require("../common/sample-base");
var dataSource = require("./datasource.json");
var imagePath = './src/schedule/images/';
var salamanImage = "".concat(imagePath, "salman@3x.png");
var brianImage = "".concat(imagePath, "brian@3x.png");
var jakeImage = "".concat(imagePath, "jake@3x.png");
var jenniferImage = "".concat(imagePath, "Jennifer.png");
var davidImage = "".concat(imagePath, "David.png");
var williammImage = "".concat(imagePath, "William.png");
var emmaImage = "".concat(imagePath, "Emma.png");
var lilyImage = "".concat(imagePath, "Lily.png");
var avaImage = "".concat(imagePath, "Ava.png");
var graceImage = "".concat(imagePath, "Grace.png");
var michaelImage = "".concat(imagePath, "Michael.png");
var thomasImage = "".concat(imagePath, "Thomas.png");
var rickyImage = "".concat(imagePath, "Ricky.png");
var jamesImage = "".concat(imagePath, "James.png");
var benjaminImage = "".concat(imagePath, "Benjamin.png");
var oliviaImage = "".concat(imagePath, "Olivia.png");
var chloeImage = "".concat(imagePath, "Chloe.png");
var EmployeeShiftManagement = /** @class */ (function (_super) {
    __extends(EmployeeShiftManagement, _super);
    function EmployeeShiftManagement(props) {
        var _this = _super.call(this, props) || this;
        _this.shiftDropdownListRef = React.createRef();
        _this.dropdownListRef = React.createRef();
        _this.allStaffsTreeRef = React.createRef();
        _this.doctorsTreeRef = React.createRef();
        _this.nursesTreeRef = React.createRef();
        _this.staffsTreeRef = React.createRef();
        _this.externalChipsRef = React.createRef();
        _this.toolbarChipsRef = React.createRef();
        _this.agendaToolbarRoot = null;
        _this.tooltipRootsMapRef = React.createRef();
        _this.eventsData = (0, ej2_base_1.extend)([], dataSource.employeeShiftData, null, true);
        _this.selectedDate = new Date(2025, 2, 5);
        _this.intl = new ej2_base_1.Internationalization();
        _this.animationSettings = { effect: 'None' };
        _this.currentChipIndex = 0;
        _this.previousChipIndex = 0;
        _this.isDraggedItemDropped = false;
        _this.draggedItemId = '';
        _this.styleNone = { display: "none" };
        _this.allowDragAndDrop = true;
        _this.filteredQuery = new ej2_data_1.Query();
        _this.rolesData = ['', 'Doctors', 'Nurses', 'Support Staffs'];
        _this.imageMap = {
            mark: "".concat(imagePath, "will-smith.png"),
            brian: brianImage,
            kevin: "".concat(imagePath, "alice.png"),
            salman: salamanImage,
            olivia: "".concat(imagePath, "margaret.png"),
            zoe: "".concat(imagePath, "laura.png"),
            ricky: rickyImage,
            jake: jakeImage,
        };
        _this.employeeRole = [
            { role: 'Doctors', id: 1 },
            { role: 'Nurses', id: 2 },
            { role: 'Support Staffs', id: 3 }
        ];
        _this.designationsData = [
            { name: 'Attending Physician', id: 1, groupId: 1 },
            { name: 'Hospitalist', id: 2, groupId: 1 },
            { name: 'General Pediatrician', id: 3, groupId: 1 },
            { name: 'Resident Doctor', id: 4, groupId: 1 },
            { name: 'Senior Nurse', id: 5, groupId: 2 },
            { name: 'Nurse Practitioner', id: 6, groupId: 2 },
            { name: 'Medical Assistant', id: 7, groupId: 3 },
            { name: 'Receptionist', id: 8, groupId: 3 }
        ];
        _this.employeeImages = [
            { name: 'John', image: "".concat(imagePath, "robert.png") },
            { name: 'Nashil', image: "".concat(imagePath, "nancy.png") },
            { name: 'Jennifer', image: jenniferImage },
            { name: 'William', image: williammImage },
            { name: 'David', image: davidImage },
            { name: 'Michael', image: michaelImage },
            { name: 'Thomas', image: thomasImage },
            { name: 'Daniel', image: "".concat(imagePath, "robson.png") },
            { name: 'Mark', image: "".concat(imagePath, "will-smith.png") },
            { name: 'Brian', image: brianImage },
            { name: 'Kevin', image: "".concat(imagePath, "alice.png") },
            { name: 'Salman', image: salamanImage },
            { name: 'Emma', image: emmaImage },
            { name: 'Lily', image: lilyImage },
            { name: 'Ava', image: avaImage },
            { name: 'Grace', image: graceImage },
            { name: 'Olivia', image: "".concat(imagePath, "margaret.png") },
            { name: 'Zoe', image: "".concat(imagePath, "laura.png") },
            { name: 'James', image: jamesImage },
            { name: 'Benjamin', image: benjaminImage },
            { name: 'Olivia', image: oliviaImage },
            { name: 'Chloe', image: chloeImage },
            { name: 'Ricky', image: rickyImage },
            { name: 'Jake', image: jakeImage }
        ];
        _this.doctorsData = [
            { Id: 1, Name: "Mark", Description: 'Attending Physician', role: 'Doctors' },
            { Id: 2, Name: "Brian", Description: 'Hospitalist', role: 'Doctors' },
            { Id: 3, Name: "Kevin", Description: 'General Pediatrician', role: 'Doctors' },
            { Id: 4, Name: "Salman", Description: 'Resident Doctor', role: 'Doctors' }
        ];
        _this.nursesData = [
            { Id: 5, Name: "Olivia", Description: 'Senior Nurse', role: 'Nurses' },
            { Id: 6, Name: "Zoe", Description: 'Nurse Practitioner', role: 'Nurses' }
        ];
        _this.staffsData = [
            { Id: 7, Name: "Ricky", Description: 'Medical Assistant', role: 'Support Staffs' },
            { Id: 8, Name: "Jake", Description: 'Receptionist', role: 'Support Staffs' }
        ];
        _this.allData = _this.doctorsData.concat(_this.nursesData, _this.staffsData);
        _this.allStaffsTreeFields = { dataSource: _this.allData, id: 'Id', text: 'Name' };
        _this.doctorsTreeFields = { dataSource: _this.doctorsData, id: 'Id', text: 'Name' };
        _this.nursesTreeFields = { dataSource: _this.nursesData, id: 'Id', text: 'Name' };
        _this.staffsTreeFields = { dataSource: _this.staffsData, id: 'Id', text: 'Name' };
        _this.group = { resources: ['Roles', 'Designations'] };
        _this.workHours = { start: '00:00', end: '23:59' };
        _this.timeScale = {
            interval: 480,
            slotCount: 3,
            majorSlotTemplate: _this.majorSlotTemplate
        };
        _this.onNavigating = function (args) {
            var scheduleToolbar = _this.scheduleRef.element.querySelector('.e-schedule-toolbar-container');
            if (!scheduleToolbar || args.action !== 'view')
                return;
            if (args.currentView === 'Agenda') {
                _this.createAgendaToolbar();
            }
            else {
                var toolbarContainer = scheduleToolbar.querySelector('#agenda-toolbar-container');
                if (toolbarContainer) {
                    if (_this.agendaToolbarRoot) {
                        _this.agendaToolbarRoot.unmount();
                        _this.agendaToolbarRoot = null;
                    }
                    toolbarContainer.remove();
                }
                if (_this.scheduleRef.eventSettings.query) {
                    _this.scheduleRef.eventSettings.query.queries = [];
                }
            }
        };
        _this.state = {
            employeeNamesList: [],
            shiftList: [],
            selectedEmployee: null,
            selectedShift: null,
            requestedShift: null,
            dialogVisible: false,
            shiftsData: []
        };
        if (!_this.tooltipRootsMapRef.current) {
            _this.tooltipRootsMapRef.current = new Map();
        }
        // Bind methods to the class instance
        _this.majorSlotTemplate = _this.majorSlotTemplate.bind(_this);
        _this.getTimeString = _this.getTimeString.bind(_this);
        _this.requestShiftSwap = _this.requestShiftSwap.bind(_this);
        _this.employeeNameChange = _this.employeeNameChange.bind(_this);
        _this.shiftChange = _this.shiftChange.bind(_this);
        _this.getEventElement = _this.getEventElement.bind(_this);
        _this.onEventRendered = _this.onEventRendered.bind(_this);
        _this.treeTemplate = _this.treeTemplate.bind(_this);
        _this.onTreeDragStop = _this.onTreeDragStop.bind(_this);
        _this.onTreeDragStart = _this.onTreeDragStart.bind(_this);
        _this.chipClick = _this.chipClick.bind(_this);
        _this.onDropDownListChange = _this.onDropDownListChange.bind(_this);
        _this.onDropDownListBeforeOpen = _this.onDropDownListBeforeOpen.bind(_this);
        _this.getAgendaToolbarChips = _this.getAgendaToolbarChips.bind(_this);
        _this.getAgendaToolbarDropDownList = _this.getAgendaToolbarDropDownList.bind(_this);
        _this.agendaChipsClick = _this.agendaChipsClick.bind(_this);
        _this.onNavigating = _this.onNavigating.bind(_this);
        _this.editorHeaderTemplate = _this.editorHeaderTemplate.bind(_this);
        _this.agendaTemplate = _this.agendaTemplate.bind(_this);
        _this.onPopupOpen = _this.onPopupOpen.bind(_this);
        _this.onPopupClose = _this.onPopupClose.bind(_this);
        _this.getButtons = _this.getButtons.bind(_this);
        return _this;
    }
    // Button actions for the Shift Swap dialog
    EmployeeShiftManagement.prototype.getButtons = function () {
        var _this = this;
        var _a, _b;
        return [
            {
                click: function () {
                    _this.setState({
                        dialogVisible: false
                    });
                },
                buttonModel: {
                    content: 'Cancel',
                }
            },
            {
                click: function () {
                    var _a = _this.state, requestedShift = _a.requestedShift, selectedShift = _a.selectedShift, selectedEmployee = _a.selectedEmployee;
                    var dataSource = _this.scheduleRef.eventSettings.dataSource;
                    var requestingEventIndex = 0;
                    var requestedShiftId = requestedShift === null || requestedShift === void 0 ? void 0 : requestedShift.id;
                    var requestingEvent = dataSource.filter(function (item, index) {
                        if (item.Id === requestedShiftId) {
                            requestingEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    var approvedEventIndex = 0;
                    var accShiftIds = selectedShift.eventId;
                    var approvedEvent = dataSource.filter(function (item, index) {
                        if (item.Id === accShiftIds) {
                            approvedEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    requestingEvent[0].Description = requestingEvent[0].Description.replace(' - Swap-Request', '');
                    requestingEvent[0].Subject = requestedShift.name + ' swapped the shift with ' + selectedEmployee.name + "'s shift scheduled from " + (_this.intl.formatDate(new Date(approvedEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + _this.getTimeString(new Date(approvedEvent[0].StartTime)) + ' to ' + _this.getTimeString(new Date(approvedEvent[0].EndTime)));
                    dataSource[requestingEventIndex] = requestingEvent[0];
                    approvedEvent[0].Description = approvedEvent[0].Description.replace(' - Swap-Request', '');
                    approvedEvent[0].Subject = selectedEmployee.name + ' swapped the shift with ' + requestedShift.name + "'s shift scheduled from " + (_this.intl.formatDate(new Date(requestingEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + _this.getTimeString(new Date(requestingEvent[0].StartTime)) + ' to ' + _this.getTimeString(new Date(requestingEvent[0].EndTime)));
                    dataSource[approvedEventIndex] = approvedEvent[0];
                    _this.scheduleRef.eventSettings.dataSource = dataSource;
                    _this.scheduleRef.refreshEvents();
                    _this.setState({
                        employeeNamesList: [],
                        shiftList: [],
                        dialogVisible: false
                    });
                },
                buttonModel: {
                    content: 'Swap Shift',
                    disabled: (0, ej2_base_1.isNullOrUndefined)((_b = (_a = this.shiftDropdownListRef) === null || _a === void 0 ? void 0 : _a.current) === null || _b === void 0 ? void 0 : _b.value) ? true : false
                },
            },
        ];
    };
    EmployeeShiftManagement.prototype.majorSlotTemplate = function (props) {
        return (React.createElement("div", null, props.date.getHours() === 7 ? 'Morning Shift' : 'Evening Shift'));
    };
    EmployeeShiftManagement.prototype.getTimeString = function (value) {
        return this.intl.formatDate(value, { skeleton: 'h' });
    };
    EmployeeShiftManagement.prototype.getShortTimeString = function (value) {
        return this.intl.formatDate(value, { type: 'time', skeleton: 'short' });
    };
    EmployeeShiftManagement.prototype.getDayString = function (value) {
        return this.intl.formatDate(value, { skeleton: 'E' });
    };
    EmployeeShiftManagement.prototype.dialogClose = function () {
        this.setState({
            employeeNamesList: [],
            shiftList: [],
            dialogVisible: false
        });
    };
    EmployeeShiftManagement.prototype.dialogOpen = function () {
        this.setState({
            dialogVisible: true
        });
    };
    EmployeeShiftManagement.prototype.requestShiftSwap = function (args) {
        var _this = this;
        var _a, _b;
        var eventsData = this.scheduleRef.eventSettings.dataSource;
        var appointmnet = (args.element && args.element.classList.contains('e-appointment') ? args.element : (0, ej2_base_1.closest)(args.element, '.e-appointment'));
        if (!eventsData || !appointmnet) {
            return;
        }
        var tooltipData = (_a = this.tooltipRootsMapRef.current) === null || _a === void 0 ? void 0 : _a.get(appointmnet);
        if (tooltipData) {
            tooltipData.root.unmount();
            tooltipData.container.remove();
            (_b = this.tooltipRootsMapRef.current) === null || _b === void 0 ? void 0 : _b.delete(appointmnet);
        }
        var eventDetails = this.scheduleRef.getEventDetails(appointmnet);
        if (!eventDetails) {
            return;
        }
        var roleId = eventDetails.RoleId;
        var designationId = eventDetails.DesignationId;
        var employeeName = eventDetails.Subject;
        var employeesData = [];
        var shiftsData = [];
        var filteredData = eventsData.filter(function (item) {
            return item.Description.toLowerCase().includes('swap-request') &&
                item.RoleId === roleId &&
                item.DesignationId === designationId &&
                item.Subject !== employeeName;
        });
        filteredData.forEach(function (item) {
            if (employeesData.length === 0 || !employeesData.some(function (EmpItem) { return EmpItem.name === item.Subject; })) {
                employeesData.push({ id: item.DesignationId, name: item.Subject, employeeId: item.EmployeeId });
            }
            shiftsData.push({
                id: shiftsData.length + 1,
                name: "".concat(_this.intl.formatDate(new Date(item.StartTime), { skeleton: 'MMMd' }), " ").concat(_this.getTimeString(new Date(item.StartTime)), " - ").concat(_this.intl.formatDate(new Date(item.EndTime), { skeleton: 'MMMd' }), " ").concat(_this.getTimeString(new Date(item.EndTime))),
                designationId: item.DesignationId,
                employeeId: item.EmployeeId,
                eventId: item.Id,
            });
        });
        this.setState({
            requestedShift: { id: eventDetails.Id, name: employeeName },
            shiftsData: shiftsData,
            employeeNamesList: employeesData,
            dialogVisible: true
        });
    };
    EmployeeShiftManagement.prototype.employeeNameChange = function (args) {
        if (args.itemData) {
            var shiftsData = this.state.shiftsData;
            var shiftColl = shiftsData.filter(function (item) { return item.designationId === args.itemData.id && item.employeeId === args.itemData.employeeId; });
            this.setState({
                shiftList: shiftColl,
                selectedEmployee: args.itemData
            });
        }
    };
    EmployeeShiftManagement.prototype.shiftChange = function (args) {
        this.setState({ selectedShift: args.itemData });
    };
    // Generating appointment element
    EmployeeShiftManagement.prototype.getEventElement = function (props, element) {
        var _a;
        var _b = props.Subject, Subject = _b === void 0 ? '' : _b, _c = props.Description, Description = _c === void 0 ? '' : _c, StartTime = props.StartTime, EndTime = props.EndTime;
        var isSwappedEvent = Subject.includes('swapped');
        var isLeaveReplacedEvent = Subject.includes('covers for');
        var isLeave = Description.toLowerCase().includes('leave') && !isLeaveReplacedEvent;
        var employeeName = isLeaveReplacedEvent ? Subject.split('covers for')[0].trim() : (isSwappedEvent ? Subject.match(/with ([A-Za-z]+)'s shift/)[1] : Subject);
        var matchedEmployee = this.employeeImages.filter(function (item) { return item.name === employeeName; });
        var imageUrl = (_a = matchedEmployee[0]) === null || _a === void 0 ? void 0 : _a.image;
        // Create the main wrapper div
        var templateWrap = document.createElement('div');
        templateWrap.className = 'template-wrap';
        // Create the staff container div
        var staffWrap = document.createElement('div');
        staffWrap.className = 'e-staff';
        // Create the staff image div
        var staffImage = document.createElement('img');
        staffImage.className = 'staff-image';
        staffImage.src = imageUrl;
        // Create the staff info div
        var staffInfo = document.createElement('div');
        staffInfo.className = 'staff-info';
        // Create and append the staff name
        var name = document.createElement('div');
        name.className = 'e-name';
        name.innerHTML = isLeave ? Description.split('(')[0].trim() : employeeName;
        // Create and append the staff designation
        var designation = document.createElement('div');
        designation.className = 'e-designation';
        designation.textContent = this.getTimeString(props.StartTime) + ' - ' + this.getTimeString(props.EndTime);
        // Append name and designation to staffInfo
        staffInfo.appendChild(name);
        staffInfo.appendChild(designation);
        // Append staffImage and staffInfo to staffWrap
        staffWrap.appendChild(staffImage);
        staffWrap.appendChild(staffInfo);
        // Append staffWrap to templateWrap
        templateWrap.appendChild(staffWrap);
        // Return the full element
        return templateWrap;
    };
    EmployeeShiftManagement.prototype.onEventRendered = function (args) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        var data = args.data;
        var element = args.element;
        var startHour = data.StartTime.getHours();
        element.classList.add(startHour === 7 ? 'morning-shift' : 'evening-shift');
        var innerWrap = element.querySelector('.e-inner-wrap');
        if (innerWrap) {
            innerWrap.innerHTML = '';
            var elementToAppend = this.getEventElement(data, element);
            var appointmentWidth = parseInt(element.style.width.split('px')[0], 10) - 5;
            element.style.width = "".concat(appointmentWidth, "px");
            innerWrap.appendChild(elementToAppend);
            if (!element.classList.contains('e-read-only')) {
                var groupIndex = parseInt(element.getAttribute('data-group-index'), 10);
                var classToAdd = groupIndex === 0 ? 'doctors-event' :
                    groupIndex === 1 ? 'nurses-event' : 'staffs-event';
                element.classList.add(classToAdd);
            }
        }
        // Handling tooltips
        var appendTooltipIcon = function (iconClass, tooltipText, onClick) {
            var _a;
            var reactContainer = element.querySelector('.e-icon-element');
            if (!reactContainer) {
                reactContainer = document.createElement('span');
                reactContainer.className = 'e-icon-element';
                element.appendChild(reactContainer);
            }
            var IconWithTooltipRenderer = function () {
                var iconRef = React.useRef(null);
                React.useEffect(function () {
                    var el = iconRef.current;
                    if (el && onClick) {
                        el.addEventListener('click', function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            onClick(e);
                        });
                        return function () { return el.removeEventListener('click', onClick); };
                    }
                }, []);
                return (React.createElement(ej2_react_popups_2.TooltipComponent, { cssClass: 'shift-management-tooltip', content: tooltipText, position: 'RightCenter' },
                    React.createElement("span", { ref: iconRef, className: "e-icons ".concat(iconClass), style: { cursor: 'pointer' } })));
            };
            var root = ReactDOM.createRoot(reactContainer);
            root.render(React.createElement(IconWithTooltipRenderer, null));
            (_a = _this.tooltipRootsMapRef.current) === null || _a === void 0 ? void 0 : _a.set(element, { root: root, container: reactContainer });
        };
        // Handling leave events
        if ((_a = data.Description) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('leave')) {
            element.classList.add('event-leave');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-leave', "".concat(data.Subject, " is on leave. To cover this shift, drag a staff member with the same designation from the available list and drop them here."));
            }
        }
        // Handling leave replaced events
        if ((_b = data.Subject) === null || _b === void 0 ? void 0 : _b.includes('covers for')) {
            element.classList.add('e-covers');
            element.classList.remove('event-leave');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-replaced sf-employee-shift-icons-user-replace', 'Leave covered by replacement');
            }
        }
        // Handling swap request events
        if (((_c = data.Description) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes('swap-request')) &&
            !((_d = data.Subject) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes('swapped')) &&
            this.scheduleRef.currentView !== 'Agenda') {
            element.classList.add('event-swap');
            appendTooltipIcon('e-swap sf-employee-shift-icons-replace-request', 'Click here to swap shift', function (event) {
                var target = event.target;
                if (target.classList.contains('sf-employee-shift-icons-replace-request') ||
                    target.classList.contains('e-swap') ||
                    target.closest('.e-icons')) {
                    _this.requestShiftSwap(args);
                }
            });
        }
        // Handling shift swapped events
        if ((_e = data.Subject) === null || _e === void 0 ? void 0 : _e.toLowerCase().includes('swapped')) {
            element.classList.remove('event-swap');
            element.classList.add('event-swapped');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-swapped sf-employee-shift-icons-replace-accepted', 'This shift has been swapped');
            }
        }
    };
    EmployeeShiftManagement.prototype.treeTemplate = function (props) {
        return (React.createElement("div", { id: "waiting" },
            React.createElement("div", { id: "waitdetails" },
                React.createElement("img", { className: "employee-image", src: this.imageMap[props.Name.toLowerCase()], alt: "Employee" }),
                React.createElement("div", { className: "text-container" },
                    React.createElement("div", { id: "waitlist" }, props.Name),
                    React.createElement("div", { id: "waitcategory" }, props.Description)))));
    };
    EmployeeShiftManagement.prototype.onTreeDragStop = function (event) {
        var classElement = this.scheduleRef.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        event.cancel = true;
        var scheduleElement = (0, ej2_base_1.closest)(event.target, '.e-content-wrap');
        if (scheduleElement) {
            var treeviewData = this.allStaffsTreeRef.current.fields.dataSource;
            var target = (0, ej2_base_1.closest)(event.target, '.e-appointment.event-leave');
            if (target) {
                var filteredData = treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                var eventDetails_1 = __assign({}, this.scheduleRef.getEventDetails(target));
                var role = this.employeeRole.filter(function (item) { return item.id === parseInt(eventDetails_1.RoleId, 10); })[0].role;
                var designation = this.designationsData.filter(function (item) { return item.id === parseInt(eventDetails_1.DesignationId, 10); })[0].name;
                if (role === filteredData[0].role && designation === filteredData[0].Description) {
                    eventDetails_1.Subject = filteredData[0].Name + ' covers for ' + eventDetails_1.Subject;
                    eventDetails_1.Designation = filteredData[0].Description;
                    this.isDraggedItemDropped = true;
                    this.scheduleRef.openEditor(eventDetails_1, 'EditOccurrence');
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    EmployeeShiftManagement.prototype.onTreeDragStart = function (args) {
        this.draggedItemId = args.draggedNodeData.id;
        document.body.classList.add('e-disble-not-allowed');
    };
    EmployeeShiftManagement.prototype.createAgendaToolbar = function () {
        var scheduleToolbar = this.scheduleRef.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar)
            return;
        var existingToolbar = scheduleToolbar.querySelector('.agenda-toolbar');
        if (existingToolbar)
            return;
        var toolbarElement = document.createElement('div');
        toolbarElement.id = 'agenda-toolbar-container';
        scheduleToolbar.appendChild(toolbarElement);
        var toolbarJSX = (React.createElement(ej2_react_navigations_2.ToolbarComponent, { cssClass: 'agenda-toolbar', overflowMode: "Scrollable", width: "100%" },
            React.createElement(ej2_react_navigations_2.ItemsDirective, null,
                React.createElement(ej2_react_navigations_2.ItemDirective, { cssClass: 'tooltip-chips', type: "Input", template: this.getAgendaToolbarChips, overflow: "Show", align: "Left" }),
                React.createElement(ej2_react_navigations_2.ItemDirective, { cssClass: 'tooltip-ddl', type: "Input", template: this.getAgendaToolbarDropDownList, overflow: "Show", align: "Right" }))));
        this.agendaToolbarRoot = ReactDOM.createRoot(toolbarElement);
        this.agendaToolbarRoot.render(toolbarJSX);
    };
    EmployeeShiftManagement.prototype.handleChipBeforeClick = function (args, isExternalChipClick) {
        var _a, _b;
        this.currentChipIndex = args.index;
        this.previousChipIndex = (isExternalChipClick ? (_a = this.externalChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips : (_b = this.toolbarChipsRef.current) === null || _b === void 0 ? void 0 : _b.selectedChips);
        if (this.currentChipIndex === this.previousChipIndex) {
            args.cancel = true;
        }
    };
    EmployeeShiftManagement.prototype.chipClick = function (args) {
        var _a, _b, _c, _d;
        this.currentChipIndex = ((_b = (_a = this.externalChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips) !== null && _b !== void 0 ? _b : 0);
        var treeRefs = [this.allStaffsTreeRef, this.doctorsTreeRef, this.nursesTreeRef, this.staffsTreeRef];
        var previousTree = (_c = treeRefs[this.previousChipIndex]) === null || _c === void 0 ? void 0 : _c.current;
        var activeTree = (_d = treeRefs[this.currentChipIndex]) === null || _d === void 0 ? void 0 : _d.current;
        if (previousTree === null || previousTree === void 0 ? void 0 : previousTree.element) {
            previousTree.element.style.display = 'none';
        }
        if (activeTree === null || activeTree === void 0 ? void 0 : activeTree.element) {
            activeTree.element.style.display = '';
            activeTree.fields.dataSource = this.currentChipIndex === 0 ? this.allData : this.filterData(this.allData, this.rolesData[this.currentChipIndex]);
        }
    };
    EmployeeShiftManagement.prototype.filterData = function (dataSource, value) {
        var newData = dataSource.filter(function (data) { return data.role === value; });
        return newData;
    };
    EmployeeShiftManagement.prototype.onDropDownListChange = function (args) {
        var _a, _b;
        var employeeName = (_a = args.itemData) === null || _a === void 0 ? void 0 : _a.value;
        var query = employeeName ? new ej2_data_1.Query().where('Subject', 'contains', employeeName, true) : new ej2_data_1.Query().where('RoleId', 'contains', ((_b = this.toolbarChipsRef.current) === null || _b === void 0 ? void 0 : _b.selectedChips) || '', true);
        this.scheduleRef.eventSettings.query = query;
        this.dropdownListRef.current.focusIn();
    };
    EmployeeShiftManagement.prototype.onDropDownListBeforeOpen = function () {
        var _a;
        var activeChipIndex = (_a = this.toolbarChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips;
        var allEvents = this.scheduleRef.eventSettings.dataSource;
        var relevantEvents = activeChipIndex === 0
            ? allEvents
            : allEvents.filter(function (item) { return item.RoleId === activeChipIndex; });
        var uniqueSubjects = Array.from(new Set(relevantEvents
            .map(function (obj) { return obj.Subject; })
            .filter(function (subject) {
            return !subject.toLowerCase().includes('covers') &&
                !subject.toLowerCase().includes('swapped');
        })));
        this.dropdownListRef.current.dataSource = uniqueSubjects;
    };
    EmployeeShiftManagement.prototype.getAgendaToolbarChips = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(ej2_react_buttons_1.ChipListComponent, { ref: this.toolbarChipsRef, id: "chip-avatar", selection: "Single", cssClass: "e-outline", selectedChips: [0], "aria-labelledby": "choiceChips", beforeClick: function (args) { return _this.handleChipBeforeClick(args, true); }, click: this.agendaChipsClick },
                React.createElement(ej2_react_buttons_1.ChipsDirective, null,
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "All" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Doctors" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Nurses" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Staffs" })))));
    };
    EmployeeShiftManagement.prototype.getAgendaToolbarDropDownList = function () {
        return (React.createElement("div", { style: { width: '230px' } },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: this.dropdownListRef, dataSource: [], value: '', change: this.onDropDownListChange, placeholder: "Select an employee", popupHeight: "220px", showClearButton: true, beforeOpen: this.onDropDownListBeforeOpen })));
    };
    EmployeeShiftManagement.prototype.agendaChipsClick = function (args) {
        this.dropdownListRef.current.dataSource = [];
        this.dropdownListRef.current.value = null;
        this.dropdownListRef.current.dataBind();
        this.dropdownListRef.current.focusOut();
        var query = new ej2_data_1.Query().where('RoleId', 'contains', args.index || '', true);
        this.scheduleRef.eventSettings.query = query;
    };
    EmployeeShiftManagement.prototype.editorHeaderTemplate = function (props) {
        return (React.createElement("div", { id: "event-header" }, "Leave Replacement"));
    };
    EmployeeShiftManagement.prototype.agendaTemplate = function (props) {
        var roleItem = this.employeeRole.find(function (item) { return item.id === parseInt(props.RoleId, 10); });
        var designationItem = this.designationsData.find(function (item) { return item.id === parseInt(props.DesignationId, 10); });
        var role = roleItem === null || roleItem === void 0 ? void 0 : roleItem.role;
        var designation = designationItem === null || designationItem === void 0 ? void 0 : designationItem.name;
        var isEmployeeLeave = props.Description.toLowerCase().includes('leave');
        return (React.createElement("div", { className: "agenda-event" },
            React.createElement("div", { className: 'e-staff' },
                React.createElement("div", { className: 'staff-image' }, props.Subject.charAt(0)),
                React.createElement("div", { className: 'event-details' },
                    React.createElement("div", { className: "staff-info" },
                        React.createElement("span", { className: 'staff-name' },
                            props.Subject,
                            " "),
                        React.createElement("span", { className: 'staff-role' },
                            role,
                            " "),
                        React.createElement("span", { className: "staff-designation" },
                            "(",
                            designation,
                            ")",
                            isEmployeeLeave ? ' - ' : ''),
                        isEmployeeLeave && (React.createElement("span", { className: "staff-availability" }, "On Leave"))),
                    React.createElement("div", { className: "event-time" },
                        "Shift Time: ",
                        this.getTimeString(props.StartTime) + ' - ' + this.getTimeString(props.EndTime))))));
    };
    EmployeeShiftManagement.prototype.onPopupOpen = function (args) {
        var isEditorPopup = args.type === 'Editor';
        if (isEditorPopup) {
            if (!this.isDraggedItemDropped) {
                args.cancel = true;
                return;
            }
            args.element.classList.add('shift-management-editor-popup');
        }
    };
    EmployeeShiftManagement.prototype.onPopupClose = function (args) {
        var _a, _b;
        if (args.type === 'Editor') {
            if (args.event.target.classList.contains('e-event-save')) {
                var treeRefs = [this.allStaffsTreeRef, this.doctorsTreeRef, this.nursesTreeRef, this.staffsTreeRef];
                var activeTreeRef = treeRefs[this.currentChipIndex];
                var treeObj = activeTreeRef === null || activeTreeRef === void 0 ? void 0 : activeTreeRef.current;
                if (treeObj && this.draggedItemId) {
                    var draggedId_1 = parseInt(this.draggedItemId, 10);
                    // Remove dragged item from treeView dataSource
                    var updatedTreeData = treeObj.fields.dataSource.filter(function (item) { return item.Id !== draggedId_1; });
                    treeObj.fields.dataSource = updatedTreeData;
                    // Remove dragged DOM elements
                    document.querySelectorAll('.e-drag-item.shift-management-treeview').forEach(function (el) { return (0, ej2_base_1.remove)(el); });
                    // Remove from allData
                    this.allData = this.allData.filter(function (item) { return item.Id !== draggedId_1; });
                    // Update Description
                    if ((_b = (_a = args.data) === null || _a === void 0 ? void 0 : _a.Description) === null || _b === void 0 ? void 0 : _b.includes('Leave')) {
                        args.data.Description.replace('Leave ', 'Available ');
                    }
                }
            }
            this.isDraggedItemDropped = false;
        }
    };
    ;
    EmployeeShiftManagement.prototype.onCellClick = function (args) {
        args.cancel = true;
    };
    EmployeeShiftManagement.prototype.onEventClick = function (args) {
        if (args.event.IsReadonly) {
            args.cancel = true;
        }
    };
    EmployeeShiftManagement.prototype.setAgendaContentHeight = function () {
        var agendaContentElement = this.scheduleRef.element.querySelector('.e-table-wrap.e-agenda-view .e-schedule-table .e-content-wrap');
        if (agendaContentElement) {
            var agendaToolbarHeight = '72px';
            agendaContentElement.style.height = (parseFloat(agendaContentElement.style.height) - parseFloat(agendaToolbarHeight)) + 'px';
        }
    };
    EmployeeShiftManagement.prototype.onActionComplete = function (args) {
        var _this = this;
        if (args.requestType === 'viewNavigate' || args.requestType === 'dateNavigate') {
            this.setAgendaContentHeight();
        }
        else if (args.requestType === "toolBarItemRendered" && this.scheduleRef.currentView === 'Agenda') {
            this.createAgendaToolbar();
            setTimeout(function () {
                _this.setAgendaContentHeight();
            });
        }
    };
    EmployeeShiftManagement.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'schedule-control-section shift-management-control-section' },
            React.createElement("div", { className: 'col-lg-12 control-section' },
                React.createElement("div", { className: 'control-wrapper shift-management-sample-wrapper' },
                    React.createElement(ej2_react_schedule_1.ScheduleComponent, { id: 'schedule', ref: function (schedule) { return _this.scheduleRef = schedule; }, currentView: "TimelineWeek", selectedDate: this.selectedDate, cssClass: 'schedule-shift-management', width: '100%', height: '550px', group: this.group, startHour: "07:00", endHour: '23:00', eventSettings: { dataSource: this.eventsData, query: this.filteredQuery }, timeScale: this.timeScale, workHours: this.workHours, showTimeIndicator: true, eventRendered: this.onEventRendered, navigating: this.onNavigating, editorHeaderTemplate: this.editorHeaderTemplate, popupOpen: this.onPopupOpen, popupClose: this.onPopupClose, cellClick: this.onCellClick, eventClick: this.onEventClick, actionComplete: this.onActionComplete.bind(this) },
                        React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: "TimelineWeek" }),
                            React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Agenda', eventTemplate: this.agendaTemplate })),
                        React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                            React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "RoleId", title: "Roles", name: "Roles", allowMultiple: false, dataSource: this.employeeRole, textField: "role", idField: "id" }),
                            React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "DesignationId", title: "Designations", name: "Designations", allowMultiple: false, dataSource: this.designationsData, textField: "name", idField: "id", groupIDField: "groupId" })),
                        React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineViews, ej2_react_schedule_1.Agenda] }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemsDirective, null,
                            React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Previous', align: 'Left' }),
                            React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Next', align: 'Left' }),
                            React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'DateRangeText', align: 'Left' }),
                            React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Views', align: 'Right' }))),
                    React.createElement("div", { className: 'treeview-container' },
                        React.createElement("div", { className: "title-text" },
                            React.createElement("span", null, "Available List")),
                        React.createElement("div", { className: "role-tabs" },
                            React.createElement(ej2_react_buttons_1.ChipListComponent, { ref: this.externalChipsRef, id: "chip-avatar", selection: "Single", cssClass: "e-outline", selectedChips: [0], "aria-labelledby": "choiceChips", beforeClick: function (args) { return _this.handleChipBeforeClick(args, true); }, click: this.chipClick },
                                React.createElement(ej2_react_buttons_1.ChipsDirective, null,
                                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "All" }),
                                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Doctors" }),
                                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Nurses" }),
                                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Staffs" })))),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.allStaffsTreeRef, id: "allStaffsTreeview", cssClass: 'shift-management-treeview', style: { display: 'block' }, dragArea: ".shift-management-sample-wrapper", nodeTemplate: this.treeTemplate, fields: this.allStaffsTreeFields, nodeDragStop: this.onTreeDragStop, nodeDragStart: this.onTreeDragStart, allowDragAndDrop: this.allowDragAndDrop }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.doctorsTreeRef, id: "doctorsTreeview", cssClass: 'shift-management-treeview', style: this.styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: this.treeTemplate, fields: this.doctorsTreeFields, nodeDragStop: this.onTreeDragStop, nodeDragStart: this.onTreeDragStart, allowDragAndDrop: this.allowDragAndDrop }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.nursesTreeRef, id: "nursesTreeview", cssClass: 'shift-management-treeview', style: this.styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: this.treeTemplate, fields: this.nursesTreeFields, nodeDragStop: this.onTreeDragStop, nodeDragStart: this.onTreeDragStart, allowDragAndDrop: this.allowDragAndDrop }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.staffsTreeRef, id: "staffsTreeview", cssClass: 'shift-management-treeview', style: this.styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: this.treeTemplate, fields: this.staffsTreeFields, nodeDragStop: this.onTreeDragStop, nodeDragStart: this.onTreeDragStart, allowDragAndDrop: this.allowDragAndDrop })),
                    React.createElement("div", { id: "target", style: {
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 9999,
                            display: this.state.dialogVisible ? 'block' : 'none'
                        } },
                        React.createElement(ej2_react_popups_1.DialogComponent, { id: "modalDialog", cssClass: 'swap-dialog', height: '240px', width: '378px', isModal: true, buttons: this.getButtons(), header: "Shift swap", visible: this.state.dialogVisible, showCloseIcon: true, animationSettings: this.animationSettings, open: this.dialogOpen, close: this.dialogClose },
                            React.createElement("div", { className: 'e-shift-swap' },
                                React.createElement("div", null,
                                    React.createElement("label", null, "Select an employee(Available for swapping)"),
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: this.state.employeeNamesList, fields: { text: 'name', value: 'id' }, change: this.employeeNameChange, placeholder: "Select an employee" })),
                                React.createElement("div", { style: { marginTop: '10px' } },
                                    React.createElement("label", null, "Select shift"),
                                    React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: this.shiftDropdownListRef, dataSource: this.state.shiftList, fields: { text: 'name', value: 'id' }, placeholder: "Select shift", change: this.shiftChange }))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo shows efficient employee shift management using the Scheduler, including shift scheduling, swapping, highlighting staff unavailability, and seamlessly assigning leave replacements using drag-and-drop.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "In this demo, employees are categorized by roles (Doctors, nurses, and support staff) and designations, with two daily shifts: Morning (7 AM \u2013 3 PM) and Evening (3 PM \u2013 11 PM). Past shifts are disabled for clarity."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Shift Swapping")),
                React.createElement("p", null, "Shifts can be swapped between employees with the same designation using the swap request icon. The updated shift is highlighted with a swap icon, and details are available in the quick info popup."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Leave Replacement")),
                React.createElement("p", null, "To cover leave, drag and drop available staff from the same designation. The appointment updates with a replacement icon, and details appear in the quick info popup."),
                React.createElement("p", null,
                    React.createElement("strong", null, "Filtering")),
                React.createElement("p", null, "Filter shifts by role or employee name in the agenda view to check staff availability and for shift management."),
                React.createElement("p", null,
                    "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                    " component page."))));
    };
    return EmployeeShiftManagement;
}(sample_base_1.SampleBase));
exports.EmployeeShiftManagement = EmployeeShiftManagement;
