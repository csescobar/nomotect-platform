"use strict";
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
var React = require("react");
var ReactDOM = require("react-dom/client");
var sample_base_1 = require("../common/sample-base");
var react_1 = require("react");
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
var isDraggedItemDropped = false;
var currentChipIndex = 0;
var previousChipIndex = 0;
var EmployeeShiftManagement = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var scheduleRef = (0, react_1.useRef)(null);
    var shiftDropdownListRef = (0, react_1.useRef)(null);
    var agendaToolbarRef = (0, react_1.useRef)(null);
    var tooltipRootsMapRef = (0, react_1.useRef)(new Map());
    var dropdownListRef = (0, react_1.useRef)(null);
    var allStaffsTreeRef = (0, react_1.useRef)(null);
    var doctorsTreeRef = (0, react_1.useRef)(null);
    var nursesTreeRef = (0, react_1.useRef)(null);
    var staffsTreeRef = (0, react_1.useRef)(null);
    var externalChipsRef = (0, react_1.useRef)(null);
    var toolbarChipsRef = (0, react_1.useRef)(null);
    var intlRef = (0, react_1.useRef)(new ej2_base_1.Internationalization());
    var eventsDataMemo = (0, react_1.useMemo)(function () { return (0, ej2_base_1.extend)([], dataSource.employeeShiftData, null, true); }, []);
    var selectedDate = new Date(2025, 2, 5);
    var styleNone = { display: "none" };
    var animationSettings = { effect: 'None' };
    var groupMemo = (0, react_1.useMemo)(function () { return ({ resources: ['Roles', 'Designations'] }); }, []);
    var workHoursMemo = (0, react_1.useMemo)(function () { return ({ start: '00:00', end: '23:59' }); }, []);
    var allowDragAndDrop = true;
    var filteredQueryRef = (0, react_1.useRef)(new ej2_data_1.Query());
    var rolesData = ['', 'Doctors', 'Nurses', 'Support Staffs'];
    var eventSettingsMemo = (0, react_1.useMemo)(function () { return ({ dataSource: eventsDataMemo, query: filteredQueryRef.current }); }, [eventsDataMemo]);
    var _a = (0, react_1.useState)([]), employeeNamesList = _a[0], setEmployeeNamesList = _a[1];
    var _b = (0, react_1.useState)([]), shiftList = _b[0], setShiftList = _b[1];
    var _c = (0, react_1.useState)(null), selectedEmployee = _c[0], setSelectedEmployee = _c[1];
    var _d = (0, react_1.useState)(null), selectedShift = _d[0], setSelectedShift = _d[1];
    var _e = (0, react_1.useState)(null), requestedShift = _e[0], setRequestedShift = _e[1];
    var _f = (0, react_1.useState)(false), dialogVisible = _f[0], setDialogVisible = _f[1];
    var _g = (0, react_1.useState)([]), shiftsData = _g[0], setShiftsData = _g[1];
    var _h = (0, react_1.useState)(''), draggedItemId = _h[0], setDraggedItemId = _h[1];
    // Static Data
    var imageMap = {
        mark: "".concat(imagePath, "will-smith.png"),
        brian: brianImage,
        kevin: "".concat(imagePath, "alice.png"),
        salman: salamanImage,
        olivia: "".concat(imagePath, "margaret.png"),
        zoe: "".concat(imagePath, "laura.png"),
        ricky: rickyImage,
        jake: jakeImage,
    };
    var employeeRole = [
        { role: 'Doctors', id: 1 },
        { role: 'Nurses', id: 2 },
        { role: 'Support Staffs', id: 3 }
    ];
    var designationsData = [
        { name: 'Attending Physician', id: 1, groupId: 1 },
        { name: 'Hospitalist', id: 2, groupId: 1 },
        { name: 'General Pediatrician', id: 3, groupId: 1 },
        { name: 'Resident Doctor', id: 4, groupId: 1 },
        { name: 'Senior Nurse', id: 5, groupId: 2 },
        { name: 'Nurse Practitioner', id: 6, groupId: 2 },
        { name: 'Medical Assistant', id: 7, groupId: 3 },
        { name: 'Receptionist', id: 8, groupId: 3 }
    ];
    var employeeImages = [
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
    var doctorsData = [
        { Id: 1, Name: "Mark", Description: 'Attending Physician', role: 'Doctors' },
        { Id: 2, Name: "Brian", Description: 'Hospitalist', role: 'Doctors' },
        { Id: 3, Name: "Kevin", Description: 'General Pediatrician', role: 'Doctors' },
        { Id: 4, Name: "Salman", Description: 'Resident Doctor', role: 'Doctors' }
    ];
    var nursesData = [
        { Id: 5, Name: "Olivia", Description: 'Senior Nurse', role: 'Nurses' },
        { Id: 6, Name: "Zoe", Description: 'Nurse Practitioner', role: 'Nurses' }
    ];
    var staffsData = [
        { Id: 7, Name: "Ricky", Description: 'Medical Assistant', role: 'Support Staffs' },
        { Id: 8, Name: "Jake", Description: 'Receptionist', role: 'Support Staffs' }
    ];
    var _j = (0, react_1.useState)(function () { return doctorsData.concat(nursesData, staffsData); }), allData = _j[0], setAllData = _j[1];
    // Fields for TreeView
    var allStaffsTreeFields = { dataSource: allData, id: 'Id', text: 'Name' };
    var doctorsTreeFields = { dataSource: doctorsData, id: 'Id', text: 'Name' };
    var nursesTreeFields = { dataSource: nursesData, id: 'Id', text: 'Name' };
    var staffsTreeFields = { dataSource: staffsData, id: 'Id', text: 'Name' };
    // Time scale setup
    var majorSlotTemplate = (0, react_1.useCallback)(function (props) {
        return (React.createElement("div", null, props.date.getHours() === 7 ? 'Morning Shift' : 'Evening Shift'));
    }, []);
    var timeScaleMemo = (0, react_1.useMemo)(function () { return ({
        interval: 480,
        slotCount: 3,
        majorSlotTemplate: majorSlotTemplate
    }); }, [majorSlotTemplate]);
    var getTimeString = function (value) {
        return intlRef.current.formatDate(value, { skeleton: 'h' });
    };
    var getShortTimeString = function (value) {
        return intlRef.current.formatDate(value, { type: 'time', skeleton: 'short' });
    };
    var getDayString = function (value) {
        return intlRef.current.formatDate(value, { skeleton: 'E' });
    };
    var filterData = function (dataSource, value) {
        return dataSource.filter(function (data) { return data.role === value; });
    };
    // Button actions for the Shift Swap dialog
    var getButtons = function () {
        var _a;
        return [
            {
                click: function () {
                    setDialogVisible(false);
                },
                buttonModel: {
                    content: 'Cancel',
                }
            },
            {
                click: function () {
                    var dataSource = scheduleRef.current.eventSettings.dataSource;
                    var requestingEventIndex = 0;
                    var requestedShiftId = requestedShift.id;
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
                    requestingEvent[0].Subject = requestedShift.name + ' swapped the shift with ' + selectedEmployee.name + "'s shift scheduled from " + (intlRef.current.formatDate(new Date(approvedEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + getTimeString(new Date(approvedEvent[0].StartTime)) + ' to ' + getTimeString(new Date(approvedEvent[0].EndTime)));
                    dataSource[requestingEventIndex] = requestingEvent[0];
                    approvedEvent[0].Description = approvedEvent[0].Description.replace(' - Swap-Request', '');
                    approvedEvent[0].Subject = selectedEmployee.name + ' swapped the shift with ' + requestedShift.name + "'s shift scheduled from " + (intlRef.current.formatDate(new Date(requestingEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + getTimeString(new Date(requestingEvent[0].StartTime)) + ' to ' + getTimeString(new Date(requestingEvent[0].EndTime)));
                    dataSource[approvedEventIndex] = approvedEvent[0];
                    scheduleRef.current.eventSettings.dataSource = dataSource;
                    scheduleRef.current.refreshEvents();
                    setEmployeeNamesList([]);
                    setShiftList([]);
                    setDialogVisible(false);
                },
                buttonModel: {
                    content: 'Swap Shift',
                    disabled: (0, ej2_base_1.isNullOrUndefined)((_a = shiftDropdownListRef === null || shiftDropdownListRef === void 0 ? void 0 : shiftDropdownListRef.current) === null || _a === void 0 ? void 0 : _a.value) ? true : false
                },
            },
        ];
    };
    var dialogClose = function () {
        setEmployeeNamesList([]);
        setShiftList([]);
        setDialogVisible(false);
    };
    var dialogOpen = function () {
        setDialogVisible(true);
    };
    var requestShiftSwap = (0, react_1.useCallback)(function (args) {
        var eventsData = scheduleRef.current.eventSettings.dataSource;
        var appointmnet = (args.element && args.element.classList.contains('e-appointment') ?
            args.element : (0, ej2_base_1.closest)(args.element, '.e-appointment'));
        if (!eventsData || !appointmnet) {
            return;
        }
        var tooltipData = tooltipRootsMapRef.current.get(appointmnet);
        if (tooltipData) {
            tooltipData.root.unmount();
            tooltipData.container.remove();
            tooltipRootsMapRef.current.delete(appointmnet);
        }
        var eventDetails = scheduleRef.current.getEventDetails(appointmnet);
        if (!eventDetails) {
            return;
        }
        var roleId = eventDetails.RoleId;
        var designationId = eventDetails.DesignationId;
        var employeeName = eventDetails.Subject;
        var employeesData = [];
        var newShiftsData = [];
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
            newShiftsData.push({
                id: newShiftsData.length + 1,
                name: "".concat(intlRef.current.formatDate(new Date(item.StartTime), { skeleton: 'MMMd' }), " ").concat(getDayString(new Date(item.StartTime)), " ").concat(getShortTimeString(new Date(item.StartTime)), " - ").concat(getShortTimeString(new Date(item.EndTime))),
                designationId: item.DesignationId,
                employeeId: item.EmployeeId,
                eventId: item.Id,
            });
        });
        setRequestedShift({ id: eventDetails.Id, name: employeeName });
        setShiftsData(newShiftsData);
        setEmployeeNamesList(employeesData);
        setDialogVisible(true);
    }, []);
    var employeeNameChange = function (args) {
        if (args.itemData) {
            var shiftColl = shiftsData.filter(function (item) {
                return item.designationId === args.itemData.id &&
                    item.employeeId === args.itemData.employeeId;
            });
            setShiftList(shiftColl);
            setSelectedEmployee(args.itemData);
        }
    };
    var shiftChange = function (args) {
        setSelectedShift(args.itemData);
    };
    // Generating appointment element
    var getEventElement = function (props, element) {
        var _a;
        var _b = props.Subject, Subject = _b === void 0 ? '' : _b, _c = props.Description, Description = _c === void 0 ? '' : _c, StartTime = props.StartTime, EndTime = props.EndTime;
        var isSwappedEvent = Subject.includes('swapped');
        var isLeaveReplacedEvent = Subject.includes('covers for');
        var isLeave = Description.toLowerCase().includes('leave') && !isLeaveReplacedEvent;
        var employeeName = isLeaveReplacedEvent ? Subject.split('covers for')[0].trim() : (isSwappedEvent ? Subject.match(/with ([A-Za-z]+)'s shift/)[1] : Subject);
        var matchedEmployee = employeeImages.filter(function (item) { return item.name === employeeName; });
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
        designation.textContent = getTimeString(props.StartTime) + ' - ' + getTimeString(props.EndTime);
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
    var onEventRendered = (0, react_1.useCallback)(function (args) {
        var _a, _b, _c, _d, _e;
        var data = args.data;
        var element = args.element;
        var startHour = data.StartTime.getHours();
        element.classList.add(startHour === 7 ? 'morning-shift' : 'evening-shift');
        var innerWrap = element.querySelector('.e-inner-wrap');
        if (innerWrap) {
            innerWrap.innerHTML = '';
            var elementToAppend = getEventElement(data, element);
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
                        var handler_1 = function (e) {
                            e.preventDefault();
                            e.stopPropagation();
                            onClick(e);
                        };
                        el.addEventListener('click', handler_1);
                        return function () { return el.removeEventListener('click', handler_1); };
                    }
                }, []);
                return (React.createElement(ej2_react_popups_2.TooltipComponent, { cssClass: 'shift-management-tooltip', content: tooltipText, position: 'RightCenter' },
                    React.createElement("span", { ref: iconRef, className: "e-icons ".concat(iconClass), style: { cursor: 'pointer' } })));
            };
            var root = ReactDOM.createRoot(reactContainer);
            root.render(React.createElement(IconWithTooltipRenderer, null));
            tooltipRootsMapRef.current.set(element, { root: root, container: reactContainer });
        };
        // Handling leave events
        if ((_a = data.Description) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes('leave')) {
            element.classList.add('event-leave');
            if (scheduleRef.current.currentView !== 'Agenda') {
                appendTooltipIcon('e-leave', "".concat(data.Subject, " is on leave. To cover this shift, drag a staff member with the same designation from the available list and drop them here."));
            }
        }
        // Handling leave replaced events
        if ((_b = data.Subject) === null || _b === void 0 ? void 0 : _b.includes('covers for')) {
            element.classList.add('e-covers');
            element.classList.remove('event-leave');
            if (scheduleRef.current.currentView !== 'Agenda') {
                appendTooltipIcon('e-replaced sf-employee-shift-icons-user-replace', 'Leave covered by replacement');
            }
        }
        // Handling swap request events
        if (((_c = data.Description) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes('swap-request')) &&
            !((_d = data.Subject) === null || _d === void 0 ? void 0 : _d.toLowerCase().includes('swapped')) &&
            scheduleRef.current.currentView !== 'Agenda') {
            element.classList.add('event-swap');
            appendTooltipIcon('e-swap sf-employee-shift-icons-replace-request', 'Click here to swap shift', function (event) {
                event.preventDefault();
                event.stopPropagation();
                var target = event.target;
                if (target.classList.contains('sf-employee-shift-icons-replace-request') ||
                    target.classList.contains('e-swap') ||
                    target.closest('.e-icons')) {
                    requestShiftSwap(args);
                }
            });
        }
        // Handling shift swapped events
        if ((_e = data.Subject) === null || _e === void 0 ? void 0 : _e.toLowerCase().includes('swapped')) {
            element.classList.remove('event-swap');
            element.classList.add('event-swapped');
            if (scheduleRef.current.currentView !== 'Agenda') {
                appendTooltipIcon('e-swapped sf-employee-shift-icons-replace-accepted', 'This shift has been swapped');
            }
        }
    }, []);
    var treeTemplate = function (props) {
        return (React.createElement("div", { id: "waiting" },
            React.createElement("div", { id: "waitdetails" },
                React.createElement("img", { className: "employee-image", src: imageMap[props.Name.toLowerCase()], alt: "Employee" }),
                React.createElement("div", { className: "text-container" },
                    React.createElement("div", { id: "waitlist" }, props.Name),
                    React.createElement("div", { id: "waitcategory" }, props.Description)))));
    };
    var onTreeDragStop = function (event) {
        var classElement = scheduleRef.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        event.cancel = true;
        var scheduleElement = (0, ej2_base_1.closest)(event.target, '.e-content-wrap');
        if (scheduleElement) {
            var treeviewData = allStaffsTreeRef.current.fields.dataSource;
            var target = (0, ej2_base_1.closest)(event.target, '.e-appointment.event-leave');
            if (target) {
                var filteredData = treeviewData.filter(function (item) {
                    return item.Id === parseInt(event.draggedNodeData.id, 10);
                });
                var eventDetails_1 = __assign({}, scheduleRef.current.getEventDetails(target));
                var role = employeeRole.filter(function (item) {
                    return item.id === parseInt(eventDetails_1.RoleId, 10);
                })[0].role;
                var designation = designationsData.filter(function (item) {
                    return item.id === parseInt(eventDetails_1.DesignationId, 10);
                })[0].name;
                if (role === filteredData[0].role && designation === filteredData[0].Description) {
                    eventDetails_1.Subject = filteredData[0].Name + ' covers for ' + eventDetails_1.Subject;
                    eventDetails_1.Designation = filteredData[0].Description;
                    isDraggedItemDropped = true;
                    scheduleRef.current.openEditor(eventDetails_1, 'EditOccurrence');
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    var onTreeDragStart = function (args) {
        setDraggedItemId(args.draggedNodeData.id);
        document.body.classList.add('e-disble-not-allowed');
    };
    var createAgendaToolbar = function () {
        var scheduleToolbar = scheduleRef.current.element.querySelector('.e-schedule-toolbar-container');
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
                React.createElement(ej2_react_navigations_2.ItemDirective, { cssClass: 'tooltip-chips', type: "Input", template: getAgendaToolbarChips, overflow: "Show", align: "Left" }),
                React.createElement(ej2_react_navigations_2.ItemDirective, { cssClass: 'tooltip-ddl', type: "Input", template: getAgendaToolbarDropDownList, overflow: "Show", align: "Right" }))));
        var root = ReactDOM.createRoot(toolbarElement);
        root.render(toolbarJSX);
        agendaToolbarRef.current = root;
    };
    var handleChipBeforeClick = function (args, isExternalChipClick) {
        var _a, _b;
        currentChipIndex = args.index;
        previousChipIndex = (isExternalChipClick ? ((_a = externalChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips) : ((_b = toolbarChipsRef.current) === null || _b === void 0 ? void 0 : _b.selectedChips));
        if (currentChipIndex === previousChipIndex) {
            args.cancel = true;
        }
    };
    var chipClick = function (args) {
        var _a, _b, _c, _d;
        currentChipIndex = ((_b = (_a = externalChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips) !== null && _b !== void 0 ? _b : 0);
        var treeRefs = [allStaffsTreeRef, doctorsTreeRef, nursesTreeRef, staffsTreeRef];
        var previousTree = (_c = treeRefs[previousChipIndex]) === null || _c === void 0 ? void 0 : _c.current;
        var activeTree = (_d = treeRefs[currentChipIndex]) === null || _d === void 0 ? void 0 : _d.current;
        if (previousTree === null || previousTree === void 0 ? void 0 : previousTree.element) {
            previousTree.element.style.display = 'none';
        }
        if (activeTree === null || activeTree === void 0 ? void 0 : activeTree.element) {
            activeTree.element.style.display = '';
            activeTree.fields.dataSource = currentChipIndex === 0 ?
                allData :
                filterData(allData, rolesData[currentChipIndex]);
        }
    };
    var onNavigating = (0, react_1.useCallback)(function (args) {
        var scheduleToolbar = scheduleRef.current.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar || args.action !== 'view')
            return;
        if (args.currentView === 'Agenda') {
            createAgendaToolbar();
        }
        else {
            var toolbarContainer = scheduleToolbar.querySelector('#agenda-toolbar-container');
            if (toolbarContainer) {
                if (agendaToolbarRef.current) {
                    agendaToolbarRef.current.unmount();
                }
                toolbarContainer.remove();
            }
            if (scheduleRef.current.eventSettings.query) {
                scheduleRef.current.eventSettings.query.queries = [];
            }
        }
    }, []);
    var onDropDownListChange = function (args) {
        var _a;
        var employeeName = (_a = args.itemData) === null || _a === void 0 ? void 0 : _a.value;
        var query = employeeName ? new ej2_data_1.Query().where('Subject', 'contains', employeeName, true) : new ej2_data_1.Query().where('RoleId', 'contains', toolbarChipsRef.current.selectedChips || '', true);
        scheduleRef.current.eventSettings.query = query;
        dropdownListRef.current.focusIn();
    };
    var onDropDownListBeforeOpen = function () {
        var _a;
        var activeChipIndex = (_a = toolbarChipsRef.current) === null || _a === void 0 ? void 0 : _a.selectedChips;
        var allEvents = scheduleRef.current.eventSettings.dataSource;
        var relevantEvents = activeChipIndex === 0
            ? allEvents
            : allEvents.filter(function (item) { return item.RoleId === activeChipIndex; });
        var uniqueSubjects = Array.from(new Set(relevantEvents
            .map(function (obj) { return obj.Subject; })
            .filter(function (subject) {
            return !subject.toLowerCase().includes('covers') &&
                !subject.toLowerCase().includes('swapped');
        })));
        dropdownListRef.current.dataSource = uniqueSubjects;
    };
    var getAgendaToolbarChips = function () {
        return (React.createElement("div", null,
            React.createElement(ej2_react_buttons_1.ChipListComponent, { ref: toolbarChipsRef, id: "chip-avatar", selection: "Single", cssClass: "e-outline", selectedChips: [0], "aria-labelledby": "choiceChips", beforeClick: function (args) { return handleChipBeforeClick(args); }, click: agendaChipsClick },
                React.createElement(ej2_react_buttons_1.ChipsDirective, null,
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "All" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Doctors" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Nurses" }),
                    React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Staffs" })))));
    };
    var getAgendaToolbarDropDownList = function () {
        return (React.createElement("div", { style: { width: '230px' } },
            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: dropdownListRef, dataSource: [], value: '', change: onDropDownListChange, placeholder: "Select an employee", popupHeight: "220px", showClearButton: true, beforeOpen: onDropDownListBeforeOpen })));
    };
    var agendaChipsClick = function (args) {
        dropdownListRef.current.dataSource = [];
        dropdownListRef.current.value = null;
        dropdownListRef.current.dataBind();
        dropdownListRef.current.focusOut();
        var query = new ej2_data_1.Query().where('RoleId', 'contains', args.index || '', true);
        scheduleRef.current.eventSettings.query = query;
    };
    var editorHeaderTemplate = (0, react_1.useCallback)(function (props) {
        return (React.createElement("div", { id: "event-header" }, "Leave Replacement"));
    }, []);
    var agendaTemplate = (0, react_1.useCallback)(function (props) {
        var roleItem = employeeRole.find(function (item) { return item.id === parseInt(props.RoleId, 10); });
        var designationItem = designationsData.find(function (item) { return item.id === parseInt(props.DesignationId, 10); });
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
                        getTimeString(props.StartTime) + ' - ' + getTimeString(props.EndTime))))));
    }, []);
    var onPopupOpen = (0, react_1.useCallback)(function (args) {
        var isEditorPopup = args.type === 'Editor';
        if (isEditorPopup) {
            if (!isDraggedItemDropped) {
                args.cancel = true;
                return;
            }
            args.element.classList.add('shift-management-editor-popup');
        }
    }, []);
    var onPopupClose = (0, react_1.useCallback)(function (args) {
        var _a, _b;
        if (args.type === 'Editor') {
            if (args.event.target.classList.contains('e-event-save')) {
                var treeRefs = [allStaffsTreeRef, doctorsTreeRef, nursesTreeRef, staffsTreeRef];
                var activeTreeRef = treeRefs[currentChipIndex];
                var treeObj = activeTreeRef === null || activeTreeRef === void 0 ? void 0 : activeTreeRef.current;
                if (treeObj && draggedItemId) {
                    var draggedId_1 = parseInt(draggedItemId, 10);
                    // Remove dragged item from treeView dataSource
                    var updatedTreeData = treeObj.fields.dataSource.filter(function (item) { return item.Id !== draggedId_1; });
                    treeObj.fields.dataSource = updatedTreeData;
                    // Remove dragged DOM elements
                    document.querySelectorAll('.e-drag-item.shift-management-treeview').forEach(function (el) { return (0, ej2_base_1.remove)(el); });
                    // Remove from allData
                    setAllData(function (prevData) { return prevData.filter(function (item) { return item.Id !== draggedId_1; }); });
                    // Update Description
                    if ((_b = (_a = args.data) === null || _a === void 0 ? void 0 : _a.Description) === null || _b === void 0 ? void 0 : _b.includes('Leave')) {
                        args.data.Description.replace('Leave ', 'Available ');
                    }
                }
            }
            isDraggedItemDropped = false;
        }
    }, []);
    var onCellClick = (0, react_1.useCallback)(function (args) {
        args.cancel = true;
    }, []);
    var onEventClick = (0, react_1.useCallback)(function (args) {
        if (args.event.IsReadonly) {
            args.cancel = true;
        }
    }, []);
    var setAgendaContentHeight = function () {
        var agendaContentElement = scheduleRef.current.element.querySelector('.e-table-wrap.e-agenda-view .e-schedule-table .e-content-wrap');
        if (agendaContentElement) {
            var agendaToolbarHeight = '72px';
            agendaContentElement.style.height = (parseFloat(agendaContentElement.style.height) - parseFloat(agendaToolbarHeight)) + 'px';
        }
    };
    var onActionComplete = (0, react_1.useCallback)(function (args) {
        if (args.requestType === 'viewNavigate' || args.requestType === 'dateNavigate') {
            setAgendaContentHeight();
        }
        else if (args.requestType === "toolBarItemRendered" && scheduleRef.current.currentView === 'Agenda') {
            createAgendaToolbar();
            setTimeout(function () {
                setAgendaContentHeight();
            });
        }
    }, []);
    return (React.createElement("div", { className: 'schedule-control-section shift-management-control-section' },
        React.createElement("div", { className: 'col-lg-12 control-section' },
            React.createElement("div", { className: 'control-wrapper shift-management-sample-wrapper' },
                React.createElement(ej2_react_schedule_1.ScheduleComponent, { id: 'schedule', ref: scheduleRef, currentView: "TimelineWeek", selectedDate: selectedDate, cssClass: 'schedule-shift-management', width: '100%', height: '550px', group: groupMemo, startHour: "07:00", endHour: '23:00', eventSettings: eventSettingsMemo, timeScale: timeScaleMemo, workHours: workHoursMemo, showTimeIndicator: true, eventRendered: onEventRendered, navigating: onNavigating, editorHeaderTemplate: editorHeaderTemplate, popupOpen: onPopupOpen, popupClose: onPopupClose, cellClick: onCellClick, eventClick: onEventClick, actionComplete: onActionComplete },
                    React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: "TimelineWeek" }),
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Agenda', eventTemplate: agendaTemplate })),
                    React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                        React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "RoleId", title: "Roles", name: "Roles", allowMultiple: false, dataSource: employeeRole, textField: "role", idField: "id" }),
                        React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "DesignationId", title: "Designations", name: "Designations", allowMultiple: false, dataSource: designationsData, textField: "name", idField: "id", groupIDField: "groupId" })),
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
                        React.createElement(ej2_react_buttons_1.ChipListComponent, { ref: externalChipsRef, id: "chip-avatar", selection: "Single", cssClass: "e-outline", selectedChips: [0], "aria-labelledby": "choiceChips", beforeClick: function (args) { return handleChipBeforeClick(args, true); }, click: chipClick },
                            React.createElement(ej2_react_buttons_1.ChipsDirective, null,
                                React.createElement(ej2_react_buttons_1.ChipDirective, { text: "All" }),
                                React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Doctors" }),
                                React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Nurses" }),
                                React.createElement(ej2_react_buttons_1.ChipDirective, { text: "Staffs" })))),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: allStaffsTreeRef, id: "allStaffsTreeview", cssClass: 'shift-management-treeview', style: { display: 'block' }, dragArea: ".shift-management-sample-wrapper", nodeTemplate: treeTemplate, fields: allStaffsTreeFields, nodeDragStop: onTreeDragStop, nodeDragStart: onTreeDragStart, allowDragAndDrop: allowDragAndDrop }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: doctorsTreeRef, id: "doctorsTreeview", cssClass: 'shift-management-treeview', style: styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: treeTemplate, fields: doctorsTreeFields, nodeDragStop: onTreeDragStop, nodeDragStart: onTreeDragStart, allowDragAndDrop: allowDragAndDrop }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: nursesTreeRef, id: "nursesTreeview", cssClass: 'shift-management-treeview', style: styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: treeTemplate, fields: nursesTreeFields, nodeDragStop: onTreeDragStop, nodeDragStart: onTreeDragStart, allowDragAndDrop: allowDragAndDrop }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: staffsTreeRef, id: "staffsTreeview", cssClass: 'shift-management-treeview', style: styleNone, dragArea: ".shift-management-sample-wrapper", nodeTemplate: treeTemplate, fields: staffsTreeFields, nodeDragStop: onTreeDragStop, nodeDragStart: onTreeDragStart, allowDragAndDrop: allowDragAndDrop })),
                React.createElement("div", { id: "target", style: {
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 9999,
                        display: dialogVisible ? 'block' : 'none'
                    } },
                    React.createElement(ej2_react_popups_1.DialogComponent, { id: "modalDialog", cssClass: 'swap-dialog', height: '240px', width: '378px', isModal: true, buttons: getButtons(), header: "Shift swap", visible: dialogVisible, showCloseIcon: true, animationSettings: animationSettings, open: dialogOpen, close: dialogClose },
                        React.createElement("div", { className: 'e-shift-swap' },
                            React.createElement("div", null,
                                React.createElement("label", null, "Select an employee(Available for swapping)"),
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: employeeNamesList, fields: { text: 'name', value: 'id' }, change: employeeNameChange, placeholder: "Select an employee" })),
                            React.createElement("div", { style: { marginTop: '10px' } },
                                React.createElement("label", null, "Select shift"),
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: shiftDropdownListRef, dataSource: shiftList, fields: { text: 'name', value: 'id' }, placeholder: "Select shift", change: shiftChange }))))))),
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
exports.default = EmployeeShiftManagement;
