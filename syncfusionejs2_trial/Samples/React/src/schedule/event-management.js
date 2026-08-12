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
exports.EventManagement = void 0;
var React = require("react");
require("./event-management.css");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var dataSource = require("./datasource.json");
var sample_base_1 = require("../common/sample-base");
var isDraggedItemDropped = false;
var draggedItemId = 0;
var draggedItemSpeakers = [];
var draggedItemDescription = '';
var selectedUnplannedEventItem = 0;
var EventManagement = /** @class */ (function (_super) {
    __extends(EventManagement, _super);
    function EventManagement(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleRef = React.createRef();
        _this.allUnplannedEventsTreeViewRef = React.createRef();
        _this.CloudSecurityEventTreeViewRef = React.createRef();
        _this.AIAutomationEventTreeViewRef = React.createRef();
        _this.alertDialogRef = React.createRef();
        _this.intl = new ej2_base_1.Internationalization();
        _this.unplannedEvents = ['', 'Cloud Security Essentials', 'AI for Automation'];
        _this.animationSettings = { effect: 'None' };
        _this.eventsData = (0, ej2_base_1.extend)([], dataSource.TechnicalEventData, null, true);
        _this.unplannedEvent1Data = (0, ej2_base_1.extend)([], dataSource.CloudSecurityEventData, null, true);
        _this.unplannedEvent2Data = (0, ej2_base_1.extend)([], dataSource.AIAutomationEventData, null, true);
        _this.allUnplannedEventsDataRef = _this.unplannedEvent1Data.concat(_this.unplannedEvent2Data);
        _this.rooms = [
            { RoomId: 1, RoomName: 'Room A', RoomCapacity: 100, RoomColor: '#0F6CBD' },
            { RoomId: 2, RoomName: 'Room B', RoomCapacity: 200, RoomColor: '#B71C1C' },
            { RoomId: 3, RoomName: 'Room C', RoomCapacity: 300, RoomColor: '#E65100' },
            { RoomId: 4, RoomName: 'Room D', RoomCapacity: 400, RoomColor: '#558B2F' },
        ];
        _this.roomsData = [
            { RoomId: 0, RoomName: 'All' },
            { RoomId: 1, RoomName: 'Room A' },
            { RoomId: 2, RoomName: 'Room B' },
            { RoomId: 3, RoomName: 'Room C' },
            { RoomId: 4, RoomName: 'Room D' },
        ];
        _this.unPlannedEventsList = _this.unplannedEvents.map(function (name, index) { return ({
            id: index.toString(),
            name: name === '' ? 'All' : name
        }); });
        // Bind methods to this
        _this.onEventRendered = _this.onEventRendered.bind(_this);
        _this.onRoomChange = _this.onRoomChange.bind(_this);
        _this.onActionBegin = _this.onActionBegin.bind(_this);
        _this.onPopupOpen = _this.onPopupOpen.bind(_this);
        _this.onPopupClose = _this.onPopupClose.bind(_this);
        _this.onTreeDragStart = _this.onTreeDragStart.bind(_this);
        _this.onTreeDragging = _this.onTreeDragging.bind(_this);
        _this.onTreeDragStop = _this.onTreeDragStop.bind(_this);
        _this.onUnplannedEventSelect = _this.onUnplannedEventSelect.bind(_this);
        _this.onCellClick = _this.onCellClick.bind(_this);
        _this.handlePrintExportSelect = _this.handlePrintExportSelect.bind(_this);
        _this.toggleUnplannedEventsElement = _this.toggleUnplannedEventsElement.bind(_this);
        _this.roomValueTemplate = _this.roomValueTemplate.bind(_this);
        _this.resourceHeaderTemplate = _this.resourceHeaderTemplate.bind(_this);
        _this.quickInfoHeader = _this.quickInfoHeader.bind(_this);
        _this.quickInfoContent = _this.quickInfoContent.bind(_this);
        _this.agendaTemplate = _this.agendaTemplate.bind(_this);
        _this.treeTemplate = _this.treeTemplate.bind(_this);
        _this.roomsDropDown = _this.roomsDropDown.bind(_this);
        _this.printAndExport = _this.printAndExport.bind(_this);
        return _this;
    }
    EventManagement.prototype.checkRoomCapacity = function (Capacity, RoomId) {
        var room = this.rooms.find(function (room) { return room.RoomId === RoomId; });
        return room && room.RoomCapacity >= Capacity;
    };
    EventManagement.prototype.getTimeString = function (value) {
        return this.intl.formatDate(value, { type: 'time', skeleton: 'short' });
    };
    EventManagement.prototype.getRoomName = function (value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    };
    EventManagement.prototype.getRoomCapacity = function (capacity) {
        return 'Capacity - ' + capacity;
    };
    EventManagement.prototype.getResourceData = function (roomId) {
        var _a;
        var resources = (_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.getResourceCollections().slice(-1)[0];
        var resourceData = resources.dataSource.filter(function (resource) { return resource.RoomId === roomId; })[0];
        return resourceData;
    };
    EventManagement.prototype.getQuickInfoHeaderStyle = function (data) {
        var resourceData = this.getResourceData(data.RoomId);
        return { background: resourceData.RoomColor, color: '#FFFFFF' };
    };
    EventManagement.prototype.getQuickInfoDurationText = function (data) {
        return this.intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            this.intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            this.intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    EventManagement.prototype.unplannedEventsUpdatedData = function (dataSource, value) {
        return dataSource.filter(function (data) { return data.Title === value; });
    };
    EventManagement.prototype.isDataSourceEmpty = function (dataSource) {
        return !dataSource || dataSource.length === 0;
    };
    EventManagement.prototype.handleEmptyDataSourceDisplay = function (treeViewRef, dataSource) {
        var noEventsElement = document.querySelector('.no-events-message');
        if (noEventsElement) {
            if (this.isDataSourceEmpty(dataSource)) {
                treeViewRef.element.style.display = 'none';
                noEventsElement.classList.remove('hidden');
            }
            else {
                treeViewRef.element.style.display = 'block';
                noEventsElement.classList.add('hidden');
            }
        }
    };
    // Event handlers
    EventManagement.prototype.toggleUnplannedEventsElement = function () {
        var _a, _b;
        var settingsPanel = document.querySelector('.unplanned-events-container');
        var toggleButton = ((_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.element.querySelector('.e-show-unplanned-events')) || ((_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.element.querySelector('.e-hide-unplanned-events'));
        if (settingsPanel.classList.contains('hide')) {
            (0, ej2_base_1.removeClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-hide-unplanned-events', 'e-show-unplanned-events');
        }
        else {
            (0, ej2_base_1.addClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-show-unplanned-events', 'e-hide-unplanned-events');
        }
    };
    EventManagement.prototype.handlePrintExportSelect = function (args) {
        var _a, _b;
        switch (args.item.id) {
            case 'print':
                // Hide toolbar items after Agenda
                document.querySelectorAll('.toolbar-post-agenda').forEach(function (item) {
                    item.style.display = 'none';
                });
                (_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.print();
                setTimeout(function () {
                    document.querySelectorAll('.toolbar-post-agenda').forEach(function (item) {
                        item.style.display = 'inline-block';
                    });
                }, 1000);
                break;
            case 'export':
                var exportValues = {
                    fields: ['Id', 'Subject', 'Title', 'StartTime', 'EndTime', 'RoomId', 'Capacity']
                };
                (_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.exportToExcel(exportValues);
                break;
            default:
                break;
        }
    };
    EventManagement.prototype.onEventRendered = function (args) {
        var data = args.data;
        var isBreakEvent = data.Subject.toLowerCase().includes('break') || data.Subject.toLowerCase().includes('lunch');
        if (isBreakEvent) {
            if (args.element.classList.contains('e-agenda-item')) {
                args.element.querySelector('.e-appointment').classList.add('e-break-event');
            }
            else {
                args.element.classList.add('e-break-event');
            }
        }
    };
    EventManagement.prototype.onRoomChange = function (e) {
        var _a, _b, _c, _d, _e;
        var value = e.value;
        var previousItemData = e.previousItemData;
        if (!previousItemData) {
            return;
        }
        if (value === 0) {
            (_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.removeResource(previousItemData.RoomId, 'Rooms');
            (_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.addResource(this.rooms, 'Rooms', value);
        }
        else {
            if (previousItemData.RoomId === 0) {
                var resourceData = this.rooms.filter(function (room) { return room.RoomId !== value; });
                for (var idx = 0; idx < resourceData.length; idx++) {
                    var resource = resourceData[idx];
                    (_c = this.scheduleRef.current) === null || _c === void 0 ? void 0 : _c.removeResource(resource.RoomId, 'Rooms');
                }
            }
            else {
                (_d = this.scheduleRef.current) === null || _d === void 0 ? void 0 : _d.removeResource(previousItemData.RoomId, 'Rooms');
                var resourceData = this.rooms.filter(function (room) { return room.RoomId === value; });
                (_e = this.scheduleRef.current) === null || _e === void 0 ? void 0 : _e.addResource(resourceData[0], 'Rooms', value);
            }
        }
    };
    EventManagement.prototype.onActionBegin = function (args) {
        var _a, _b;
        if (args.requestType === 'eventCreate') {
            var data = args.data;
            var roomId = data[0].RoomId;
            var startTime = data[0].StartTime;
            var endTime = data[0].EndTime;
            var isRoomFiltered = ((_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.resourceCollection[0].dataSource).length === 1;
            var isRoomAvailable = (_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.isSlotAvailable(startTime, endTime, !isRoomFiltered ? roomId - 1 : 0);
            if (!isRoomAvailable) {
                args.cancel = true;
                this.alertDialogRef.current.content = 'Room is already booked for the selected time slot.';
                this.alertDialogRef.current.show();
                return;
            }
        }
    };
    EventManagement.prototype.onPopupOpen = function (args) {
        var _a, _b, _c, _d, _e;
        var isQuickInfoPopup = args.type === 'QuickInfo' || args.type === 'ViewEventInfo';
        var isEditorPopup = args.type === 'Editor';
        var isBreakEvent = (_a = args.target) === null || _a === void 0 ? void 0 : _a.classList.contains('e-break-event');
        if ((isQuickInfoPopup && isBreakEvent) || (isEditorPopup && !isDraggedItemDropped)) {
            args.cancel = true;
            return;
        }
        if (isQuickInfoPopup) {
            args.element.classList.add('event-management-quick-popup');
        }
        else if (isEditorPopup) {
            args.element.classList.add('event-management-editor-popup');
            (_b = args.element.querySelector('.capacity-alert')) === null || _b === void 0 ? void 0 : _b.remove();
            (_c = args.element.querySelector('.time-alert')) === null || _c === void 0 ? void 0 : _c.remove();
            var startTimeElement = args.element.querySelector('.e-start-end-row .e-start.e-control.e-datetimepicker');
            var endTimeElement = args.element.querySelector('.e-start-end-row .e-end.e-control.e-datetimepicker');
            if (startTimeElement && endTimeElement) {
                var startDateTimePickerRef_1 = (_d = startTimeElement.ej2_instances) === null || _d === void 0 ? void 0 : _d[0];
                var endDateTimePickerRef_1 = (_e = endTimeElement.ej2_instances) === null || _e === void 0 ? void 0 : _e[0];
                if (startDateTimePickerRef_1 && endDateTimePickerRef_1) {
                    // Use the component's change event
                    startDateTimePickerRef_1.change = function () {
                        var startTime = new Date(startDateTimePickerRef_1.value);
                        // Handle duration calculation
                        if (args.data && args.data.Duration) {
                            var durationMatch = args.data.Duration.match(/(\d+)\s+(hour|hours|minute|minutes)/i);
                            if (durationMatch) {
                                var durationValue = parseInt(durationMatch[1]);
                                var durationUnit = durationMatch[2].toLowerCase();
                                var newEndTime = new Date(startTime);
                                if (durationUnit === 'hour' || durationUnit === 'hours') {
                                    newEndTime.setHours(newEndTime.getHours() + durationValue);
                                }
                                else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                                    newEndTime.setMinutes(newEndTime.getMinutes() + durationValue);
                                }
                                // Update end time
                                endDateTimePickerRef_1.value = newEndTime;
                            }
                        }
                    };
                }
            }
        }
    };
    EventManagement.prototype.onPopupClose = function (args) {
        if (args.type === 'Editor') {
            var targetElement = args.event.target;
            var isSaveAction = targetElement.classList.contains('e-event-save') || targetElement.classList.contains('e-save-icon');
            if (isSaveAction) {
                var roomId = args.data.RoomId;
                var startTime = args.data.StartTime;
                var endTime = args.data.EndTime;
                var capacity = args.data.Capacity;
                var isAvailableTime = startTime.getHours() >= 8 && (endTime.getHours() < 18 || (endTime.getHours() === 18 && endTime.getMinutes() === 0));
                var isCapacityAvailable = this.checkRoomCapacity(capacity, roomId);
                if (!isAvailableTime) {
                    var timeElement = args.element.querySelector('.e-start-end-row');
                    if (!args.element.querySelector('.time-alert')) {
                        var newDiv = document.createElement('div');
                        newDiv.classList.add('time-alert');
                        newDiv.textContent = 'Select an open time between 8 a.m. and 6 p.m.';
                        timeElement.insertAdjacentElement('afterend', newDiv);
                    }
                }
                else {
                    if (args.element.querySelector('.time-alert')) {
                        args.element.querySelector('.time-alert').remove();
                    }
                }
                if (!isCapacityAvailable) {
                    var timeElement = args.element.querySelector('.e-description-row');
                    if (!args.element.querySelector('.capacity-alert')) {
                        var newDiv = document.createElement('div');
                        newDiv.classList.add('capacity-alert');
                        newDiv.textContent = "Number of participants exceeds the room's limit.";
                        timeElement.insertAdjacentElement('afterend', newDiv);
                    }
                }
                else {
                    if (args.element.querySelector('.capacity-alert')) {
                        args.element.querySelector('.capacity-alert').remove();
                    }
                }
                if (!isAvailableTime || !isCapacityAvailable) {
                    args.cancel = true;
                }
                else {
                    var unplannedEventsTreeViewRefs = [this.allUnplannedEventsTreeViewRef, this.CloudSecurityEventTreeViewRef, this.AIAutomationEventTreeViewRef];
                    var unplannedEventTreeViewRef = unplannedEventsTreeViewRefs[selectedUnplannedEventItem].current;
                    var unplannedEventTreeViewData = unplannedEventTreeViewRef.fields.dataSource;
                    var updatedData = unplannedEventTreeViewData.filter(function (item) { return item.Id !== draggedItemId; });
                    unplannedEventTreeViewRef.fields.dataSource = updatedData;
                    this.allUnplannedEventsDataRef = this.allUnplannedEventsDataRef.filter(function (item) { return item.Id !== draggedItemId; });
                    this.handleEmptyDataSourceDisplay(unplannedEventTreeViewRef, updatedData);
                    args.data.Speakers = draggedItemSpeakers;
                    args.data.Description = draggedItemDescription;
                }
            }
            isDraggedItemDropped = false;
        }
    };
    EventManagement.prototype.onTreeDragStart = function () {
        document.body.classList.add('e-disble-not-allowed');
    };
    EventManagement.prototype.onTreeDragging = function (event) {
        var _a, _b;
        document.body.classList.add('tree-item-dragging');
        if ((_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.isAdaptive) {
            var classElement = (_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                (0, ej2_base_1.addClass)([event.target], 'e-device-hover');
            }
        }
        // Remove not-allowed class from work cells
        if (event.target.classList.contains('e-work-cells')) {
            event.target.classList.remove('not-allowed-cursor');
        }
        else {
            // Add not-allowed class to non-work cells
            event.target.classList.add('not-allowed-cursor');
        }
    };
    EventManagement.prototype.onTreeDragStop = function (event) {
        var _a, _b, _c, _d, _e, _f;
        // Remove the class when dragging stops
        document.body.classList.remove('tree-item-dragging');
        // Remove any remaining cursor classes
        var dropNotAllowedElements = document.querySelectorAll('.not-allowed-cursor');
        dropNotAllowedElements.forEach(function (element) {
            element.classList.remove('not-allowed-cursor');
        });
        var treeviewElement = (0, ej2_base_1.closest)(event.target, '.e-treeview');
        var classElement = (_a = this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeviewElement) {
            event.cancel = true;
            var scheduleElement = (0, ej2_base_1.closest)(event.target, '.e-content-wrap');
            if (scheduleElement) {
                var treeviewData = this.allUnplannedEventsTreeViewRef.current.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    var filteredData = treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                    var _g = filteredData[0], Subject = _g.Subject, Capacity = _g.Capacity, Speakers = _g.Speakers, Description = _g.Description, Duration = _g.Duration, EventType = _g.EventType, TargetAudience = _g.TargetAudience, EventLevel = _g.EventLevel, EventTags = _g.EventTags, Title = _g.Title;
                    var cellData = (_b = this.scheduleRef.current) === null || _b === void 0 ? void 0 : _b.getCellDetails(event.target);
                    var StartTime = cellData.startTime;
                    var EndTime = void 0;
                    var durationValue = parseInt(Duration.split(' ')[0]);
                    var durationUnit = Duration.split(' ')[1];
                    var copyStartTime = new Date(StartTime);
                    if (durationUnit === 'hour' || durationUnit === 'hours') {
                        copyStartTime.setHours(copyStartTime.getHours() + durationValue); // Adds hours to StartTime
                    }
                    else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                        copyStartTime.setMinutes(copyStartTime.getMinutes() + durationValue); // Adds minutes to StartTime
                    }
                    EndTime = copyStartTime;
                    var resourceDetails = (_c = this.scheduleRef.current) === null || _c === void 0 ? void 0 : _c.getResourcesByIndex(cellData.groupIndex);
                    var roomId = resourceDetails.resourceData.RoomId;
                    var isRoomFiltered = ((_d = this.scheduleRef.current) === null || _d === void 0 ? void 0 : _d.resourceCollection[0].dataSource).length === 1;
                    var isRoomAvailable = (_e = this.scheduleRef.current) === null || _e === void 0 ? void 0 : _e.isSlotAvailable(StartTime, EndTime, !isRoomFiltered ? roomId - 1 : 0);
                    var isCapacityAvailable = this.checkRoomCapacity(Capacity, roomId);
                    if (!isRoomAvailable || !isCapacityAvailable) {
                        this.alertDialogRef.current.content = !isRoomAvailable ? 'This room is already booked for this time slot. Please select a different room or time.' : 'This room cannot accommodate the stated number of attendees. Please select a room with a suitable capacity.';
                        this.alertDialogRef.current.show();
                        return;
                    }
                    var eventData = {
                        Subject: Subject,
                        Title: Title,
                        StartTime: StartTime,
                        EndTime: EndTime,
                        RoomId: roomId,
                        Capacity: Capacity,
                        Duration: Duration,
                        EventType: EventType,
                        TargetAudience: TargetAudience,
                        EventLevel: EventLevel,
                        EventTags: EventTags
                    };
                    isDraggedItemDropped = true;
                    draggedItemId = parseInt(event.draggedNodeData.id, 10);
                    draggedItemSpeakers = Speakers;
                    draggedItemDescription = Description.toString();
                    (_f = this.scheduleRef.current) === null || _f === void 0 ? void 0 : _f.openEditor(eventData, 'Add', true);
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    EventManagement.prototype.onUnplannedEventSelect = function (args) {
        var treeviewRefs = [this.allUnplannedEventsTreeViewRef, this.CloudSecurityEventTreeViewRef, this.AIAutomationEventTreeViewRef];
        var previouslySelectedItem = parseInt(args.previousItemData.id, 10);
        selectedUnplannedEventItem = parseInt(args.value, 10);
        treeviewRefs[previouslySelectedItem].current.element.style.display = 'none';
        treeviewRefs[selectedUnplannedEventItem].current.element.style.display = '';
        treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource =
            selectedUnplannedEventItem === 0 ? treeviewRefs[1].current.fields.dataSource.concat(treeviewRefs[2].current.fields.dataSource) : this.unplannedEventsUpdatedData(this.allUnplannedEventsDataRef, this.unplannedEvents[selectedUnplannedEventItem]);
        this.handleEmptyDataSourceDisplay(treeviewRefs[selectedUnplannedEventItem].current, treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource);
    };
    EventManagement.prototype.onCellClick = function (args) {
        args.cancel = true;
    };
    EventManagement.prototype.roomValueTemplate = function (data) {
        return React.createElement("span", null, data.RoomName === 'All' ? 'Room: All' : data.RoomName);
    };
    EventManagement.prototype.resourceHeaderTemplate = function (props) {
        return (React.createElement("div", { className: "template-wrap" },
            React.createElement("div", { className: "resource-detail" },
                React.createElement("div", { className: "resource-name" }, this.getRoomName(props)),
                React.createElement("div", { className: "capacity-wrap" },
                    React.createElement("span", { className: 'e-icons e-capacity-icon' }),
                    React.createElement("span", { className: 'e-capacity' }, this.getRoomCapacity(props.resourceData.RoomCapacity.toString()))))));
    };
    EventManagement.prototype.quickInfoHeader = function (props) {
        var _this = this;
        return (React.createElement("div", { className: "e-event-header e-popup-header" },
            React.createElement("div", { className: "e-header-icon-wrapper" },
                React.createElement("button", { id: "close", className: "e-close e-icons e-close-icon e-btn e-lib e-flat e-round e-small e-icon-btn", title: "CLOSE", onClick: function () { var _a; (_a = _this.scheduleRef.current) === null || _a === void 0 ? void 0 : _a.closeQuickInfoPopup(); } })),
            React.createElement("div", { className: "quick-info-header-content", style: this.getQuickInfoHeaderStyle(props) },
                React.createElement("div", { className: "quick-info-title" }, props.Subject),
                React.createElement("div", { className: "duration-text" }, this.getQuickInfoDurationText(props)))));
    };
    EventManagement.prototype.quickInfoContent = function (props) {
        var room = '';
        if (props.elementType !== 'cell') {
            room = this.rooms.filter(function (room) { return room.RoomId === props.RoomId; })[0].RoomName;
        }
        return (React.createElement("div", { className: "quick-info-content" },
            React.createElement("div", { className: "event-content" },
                React.createElement("div", { className: "e-room e-content-item" },
                    React.createElement("label", null, "Room"),
                    React.createElement("span", { className: 'colon' }, ":"),
                    React.createElement("span", { className: 'e-content' }, room)),
                React.createElement("div", { className: "e-event e-content-item" },
                    React.createElement("label", null, "Event"),
                    React.createElement("span", { className: 'colon' }, ":"),
                    React.createElement("span", { className: 'e-content' }, props.Title)),
                props.Speakers && props.Speakers.length > 0 && (React.createElement("div", { className: "e-speaker e-content-item" },
                    React.createElement("label", null, props.Speakers.length > 1 ? 'Speakers' : 'Speaker'),
                    React.createElement("span", { className: 'colon' }, ":"),
                    React.createElement("span", { className: 'e-content' }, props.Speakers.map(function (speaker, index) { return ("".concat(speaker.Name, " (").concat(speaker.Title, ")").concat(index < props.Speakers.length - 1 ?
                        (index === props.Speakers.length - 2 ? ' and ' : ', ') :
                        '')); })))),
                React.createElement("div", { className: "e-count e-content-item" },
                    React.createElement("label", null, "Participant count"),
                    React.createElement("span", { className: 'colon' }, ":"),
                    React.createElement("span", { className: 'e-content' }, props.Capacity)))));
    };
    EventManagement.prototype.agendaTemplate = function (props) {
        return (React.createElement("div", { className: "agenda-event" },
            React.createElement("div", { className: "event-subject" }, props.Subject),
            React.createElement("div", { className: "event-description" }, props.Description),
            props.Subject.toLowerCase().indexOf('break') === -1 && props.Subject.toLowerCase().indexOf('lunch') === -1 && (React.createElement("div", { className: "event-duration-audience" },
                React.createElement("div", { className: "event-duration" },
                    React.createElement("span", { className: 'e-icons e-duration-icon' }),
                    React.createElement("span", { className: 'e-duration' }, this.getTimeString(props.StartTime) + ' - ' + this.getTimeString(props.EndTime))),
                React.createElement("div", { className: "event-audience" },
                    React.createElement("span", { className: 'e-icons e-audience-icon' }),
                    React.createElement("span", { className: 'e-audience-count' },
                        "Audience : ",
                        props.Capacity)))),
            props.Speakers && props.Speakers.length > 0 && (React.createElement("div", { className: "event-speaker" },
                React.createElement("div", { className: "separator-line" }),
                React.createElement("label", null, props.Speakers.length > 1 ? 'Speakers' : 'Speaker'),
                props.Speakers.map(function (speaker, index) { return (React.createElement("div", { className: "speaker-details", key: index },
                    React.createElement("div", { className: "speaker-image" }, speaker.Name.charAt(0)),
                    React.createElement("div", { className: "speaker-info" },
                        React.createElement("div", { className: 'speaker-name' }, speaker.Name),
                        React.createElement("div", { className: 'speaker-title' }, speaker.Title),
                        React.createElement("div", { className: 'speaker-note' }, speaker.Note)))); })))));
    };
    EventManagement.prototype.treeTemplate = function (props) {
        return (React.createElement("div", { className: "unplanned-item" },
            React.createElement("div", { className: "unplanned-item-subject" }, props.Subject),
            React.createElement("div", { className: "unplanned-item-duration" },
                React.createElement("span", { className: 'duration-icon e-icons' }),
                React.createElement("span", { className: 'duration-value' },
                    "Duration: ",
                    props.Duration)),
            React.createElement("div", { className: "unplanned-item-capacity" },
                React.createElement("span", { className: 'capacity-icon e-icons' }),
                React.createElement("span", { className: 'capacity-value' },
                    "Audience Size: ",
                    props.Capacity))));
    };
    EventManagement.prototype.roomsDropDown = function () {
        return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: this.roomsData, fields: { text: 'RoomName', value: 'RoomId' }, value: 0, change: this.onRoomChange, valueTemplate: this.roomValueTemplate }));
    };
    EventManagement.prototype.printAndExport = function () {
        return (React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: [
                { text: 'Print', id: 'print' },
                { text: 'Export', id: 'export' },
            ], select: this.handlePrintExportSelect, iconCss: 'e-icons e-print-export', cssClass: 'e-caret-hide e-tbar-btn' }));
    };
    EventManagement.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: 'control-section event-management-control-section' },
            React.createElement("div", { className: 'control-wrapper event-management-wrapper' },
                React.createElement(ej2_react_schedule_1.ScheduleComponent, { ref: this.scheduleRef, cssClass: 'schedule-event-management', currentView: 'Day', selectedDate: new Date(2025, 1, 24), width: '100%', height: '550px', startHour: "08:00", endHour: "18:00", timeScale: { slotCount: 3 }, eventSettings: {
                        dataSource: this.eventsData,
                        fields: {
                            subject: { name: 'Subject' },
                            location: { name: 'Title', title: 'Event' },
                            startTime: { name: 'StartTime', validation: { required: true } },
                            endTime: { name: 'EndTime', validation: { required: true } },
                            roomId: { name: 'RoomId' },
                            description: {
                                name: 'Capacity', title: 'Participants Count',
                                validation: { required: true }
                            }
                        }
                    }, group: { resources: ['Rooms'] }, eventRendered: this.onEventRendered, resourceHeaderTemplate: this.resourceHeaderTemplate, cellClick: this.onCellClick, actionBegin: this.onActionBegin, popupClose: this.onPopupClose, popupOpen: this.onPopupOpen, quickInfoTemplates: { header: this.quickInfoHeader, content: this.quickInfoContent } },
                    React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Day" }),
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Week" }),
                        React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Agenda", eventTemplate: this.agendaTemplate })),
                    React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                        React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "RoomId", title: "Rooms", name: "Rooms", dataSource: this.rooms, textField: "RoomName", idField: "RoomId", colorField: "RoomColor" })),
                    React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineViews, ej2_react_schedule_1.Agenda, ej2_react_schedule_1.Week, ej2_react_schedule_1.Day, ej2_react_schedule_1.ExcelExport, ej2_react_schedule_1.Print] }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemsDirective, null,
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Previous', align: 'Left' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Next', align: 'Left' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'DateRangeText', align: 'Left' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Views', align: 'Right' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Input', template: this.roomsDropDown, align: 'Right', cssClass: 'toolbar-post-agenda room-filter' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Button', prefixIcon: 'e-icons e-show-unplanned-events', align: 'Right', showTextOn: 'Overflow', overflow: 'Show', id: "overview_toolbar_settings_unplanned_events", click: this.toggleUnplannedEventsElement, cssClass: 'toolbar-post-agenda' }),
                        React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Button', prefixIcon: 'e-icons e-print-export', template: this.printAndExport, align: 'Right', cssClass: 'toolbar-post-agenda print-export' }))),
                React.createElement("div", { className: "unplanned-events-container" },
                    React.createElement("div", { className: "title-container" },
                        React.createElement("div", { className: "title-text" }, "Unscheduled Events")),
                    React.createElement("div", { id: "list-container" },
                        React.createElement("div", { className: 'events-list' },
                            React.createElement("label", { className: "event-label" }, "Event"),
                            React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { fields: { text: 'name', value: 'id' }, dataSource: this.unPlannedEventsList, value: selectedUnplannedEventItem.toString(), change: this.onUnplannedEventSelect })),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.allUnplannedEventsTreeViewRef, id: "treeview1", style: { display: "" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: this.treeTemplate, fields: {
                                dataSource: this.allUnplannedEventsDataRef,
                                id: 'Id',
                                text: 'Subject',
                            }, nodeDragStart: this.onTreeDragStart, nodeDragging: this.onTreeDragging, nodeDragStop: this.onTreeDragStop, allowDragAndDrop: true }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.CloudSecurityEventTreeViewRef, id: 'treeview2', style: { display: "none" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: this.treeTemplate, fields: {
                                dataSource: this.unplannedEvent1Data,
                                id: 'Id',
                                text: 'Subject',
                            }, nodeDragStart: this.onTreeDragStart, nodeDragging: this.onTreeDragging, nodeDragStop: this.onTreeDragStop, allowDragAndDrop: true }),
                        React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: this.AIAutomationEventTreeViewRef, id: 'treeview3', style: { display: "none" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: this.treeTemplate, fields: {
                                dataSource: this.unplannedEvent2Data,
                                id: 'Id',
                                text: 'Subject',
                            }, nodeDragStart: this.onTreeDragStart, nodeDragging: this.onTreeDragging, nodeDragStop: this.onTreeDragStop, allowDragAndDrop: true }),
                        React.createElement("div", { className: "no-events-message hidden" }, "All events have been scheduled"))),
                React.createElement("div", { id: "target" },
                    React.createElement(ej2_react_popups_1.DialogComponent, { id: "modalDialog", cssClass: 'alert-dialog', isModal: true, buttons: [
                            {
                                click: function () {
                                    _this.alertDialogRef.current.hide();
                                },
                                buttonModel: {
                                    isPrimary: true,
                                    content: 'OK',
                                },
                            },
                        ], header: "Notice", height: "240px", width: "335px", ref: this.alertDialogRef, visible: false, showCloseIcon: true, animationSettings: this.animationSettings, target: "#target" }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This demo showcases a technical event management system that uses the Scheduler component, where each technical event is split into multiple sessions with specific room allocations. The system features drag-and-drop capabilities for scheduling sessions, conflict prevention, and filtering by room.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This example demonstrates how to implement a technical event management system using the Scheduler component. The application includes the following key features:"),
                React.createElement("ul", null,
                    React.createElement("li", null, "Each technical event is organized into multiple separate sessions, with specific room allocations on the same day."),
                    React.createElement("li", null, "An external list of unscheduled sessions that can be scheduled via drag-and-drop functionality"),
                    React.createElement("li", null, "Prevention of scheduling conflicts and room capacity overflows while dragging and dropping externally maintained event sessions."),
                    React.createElement("li", null, "Room-based filtering through toolbar dropdown selections."),
                    React.createElement("li", null, "Ability to filter and view unscheduled event sessions by technical event."),
                    React.createElement("li", null, "Detailed agenda view that displays event information including speakers, audience size, and session descriptions.")),
                React.createElement("p", null,
                    "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                    React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                    " component page."))));
    };
    return EventManagement;
}(sample_base_1.SampleBase));
exports.EventManagement = EventManagement;
