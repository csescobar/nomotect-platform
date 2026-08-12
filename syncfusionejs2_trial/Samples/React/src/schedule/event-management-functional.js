"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./event-management.css");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_splitbuttons_1 = require("@syncfusion/ej2-react-splitbuttons");
var sample_base_1 = require("../common/sample-base");
var dataSource = require("./datasource.json");
var isDraggedItemDropped = false;
var draggedItemId = 0;
var draggedItemSpeakers = [];
var draggedItemDescription = '';
var selectedUnplannedEventItem = 0;
var EventManagement = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var scheduleRef = (0, react_1.useRef)(null);
    var allUnplannedEventsTreeViewRef = (0, react_1.useRef)(null);
    var CloudSecurityEventTreeViewRef = (0, react_1.useRef)(null);
    var AIAutomationEventTreeViewRef = (0, react_1.useRef)(null);
    var alertDialogRef = (0, react_1.useRef)(null);
    var intl = new ej2_base_1.Internationalization();
    var unplannedEvents = ['', 'Cloud Security Essentials', 'AI for Automation'];
    var animationSettings = { effect: 'None' };
    var eventsData = (0, ej2_base_1.extend)([], dataSource.TechnicalEventData, null, true);
    var unplannedEvent1Data = (0, ej2_base_1.extend)([], dataSource.CloudSecurityEventData, null, true);
    var unplannedEvent2Data = (0, ej2_base_1.extend)([], dataSource.AIAutomationEventData, null, true);
    var allUnplannedEventsDataRef = (0, react_1.useRef)(unplannedEvent1Data.concat(unplannedEvent2Data));
    var rooms = [
        { RoomId: 1, RoomName: 'Room A', RoomCapacity: 100, RoomColor: '#0F6CBD' },
        { RoomId: 2, RoomName: 'Room B', RoomCapacity: 200, RoomColor: '#B71C1C' },
        { RoomId: 3, RoomName: 'Room C', RoomCapacity: 300, RoomColor: '#E65100' },
        { RoomId: 4, RoomName: 'Room D', RoomCapacity: 400, RoomColor: '#558B2F' },
    ];
    var roomsData = [
        { RoomId: 0, RoomName: 'All' },
        { RoomId: 1, RoomName: 'Room A' },
        { RoomId: 2, RoomName: 'Room B' },
        { RoomId: 3, RoomName: 'Room C' },
        { RoomId: 4, RoomName: 'Room D' },
    ];
    var checkRoomCapacity = function (Capacity, RoomId) {
        var room = rooms.find(function (room) { return room.RoomId === RoomId; });
        return room && room.RoomCapacity >= Capacity;
    };
    var unPlannedEventsList = (0, react_1.useRef)(unplannedEvents.map(function (name, index) { return ({
        id: index.toString(),
        name: name === '' ? 'All' : name
    }); })).current;
    // Fields for tree views
    var allUnplannedEventsTreeFields = (0, react_1.useMemo)(function () { return ({
        dataSource: allUnplannedEventsDataRef.current,
        id: 'Id',
        text: 'Subject'
    }); }, []);
    var unplannedEvent1TreeFields = (0, react_1.useMemo)(function () { return ({
        dataSource: unplannedEvent1Data,
        id: 'Id',
        text: 'Subject'
    }); }, []);
    var unplannedEvent2TreeFields = (0, react_1.useMemo)(function () { return ({
        dataSource: unplannedEvent2Data,
        id: 'Id',
        text: 'Subject'
    }); }, []);
    // Fields for schedule component
    var scheduleFields = {
        subject: { name: 'Subject' },
        location: { name: 'Title', title: 'Event' },
        startTime: { name: 'StartTime', validation: { required: true } },
        endTime: { name: 'EndTime', validation: { required: true } },
        roomId: { name: 'RoomId' },
        description: {
            name: 'Capacity', title: 'Participants Count',
            validation: { required: true }
        }
    };
    var printExportItems = [
        { text: 'Print', id: 'print' },
        { text: 'Export', id: 'export' },
    ];
    var alertDialogButtons = [
        {
            click: function () {
                alertDialogRef.current.hide();
            },
            buttonModel: {
                isPrimary: true,
                content: 'OK',
            },
        },
    ];
    var getTimeString = function (value) {
        return intl.formatDate(value, { type: 'time', skeleton: 'short' });
    };
    var getRoomName = function (value) {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    };
    var getRoomCapacity = function (capacity) {
        return 'Capacity - ' + capacity;
    };
    var getResourceData = function (roomId) {
        var resources = scheduleRef.current.getResourceCollections().slice(-1)[0];
        var resourceData = resources.dataSource.filter(function (resource) { return resource.RoomId === roomId; })[0];
        return resourceData;
    };
    var getQuickInfoHeaderStyle = function (data) {
        var resourceData = getResourceData(data.RoomId);
        return { background: resourceData.RoomColor, color: '#FFFFFF' };
    };
    var getQuickInfoDurationText = function (data) {
        return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    var unplannedEventsUpdatedData = function (dataSource, value) {
        return dataSource.filter(function (data) { return data.Title === value; });
    };
    var toggleUnplannedEventsElement = function () {
        var settingsPanel = document.querySelector('.unplanned-events-container');
        var toggleButton = scheduleRef.current.element.querySelector('.e-show-unplanned-events') || scheduleRef.current.element.querySelector('.e-hide-unplanned-events');
        if (settingsPanel.classList.contains('hide')) {
            (0, ej2_base_1.removeClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-hide-unplanned-events', 'e-show-unplanned-events');
        }
        else {
            (0, ej2_base_1.addClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-show-unplanned-events', 'e-hide-unplanned-events');
        }
    };
    var handlePrintExportSelect = function (args) {
        switch (args.item.id) {
            case 'print':
                // Hide toolbar items after Agenda
                document.querySelectorAll('.toolbar-post-agenda').forEach(function (item) {
                    item.style.display = 'none';
                });
                scheduleRef.current.print();
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
                scheduleRef.current.exportToExcel(exportValues);
                break;
            default:
                break;
        }
    };
    var onEventRendered = function (args) {
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
    var onRoomChange = function (e) {
        var value = e.value;
        var previousItemData = e.previousItemData;
        if (!previousItemData) {
            return;
        }
        if (value === 0) {
            scheduleRef.current.removeResource(previousItemData.RoomId, 'Rooms');
            scheduleRef.current.addResource(rooms, 'Rooms', value);
        }
        else {
            if (previousItemData.RoomId === 0) {
                var resourceData = rooms.filter(function (room) { return room.RoomId !== value; });
                for (var idx = 0; idx < resourceData.length; idx++) {
                    var resource = resourceData[idx];
                    scheduleRef.current.removeResource(resource.RoomId, 'Rooms');
                }
            }
            else {
                scheduleRef.current.removeResource(previousItemData.RoomId, 'Rooms');
                var resourceData = rooms.filter(function (room) { return room.RoomId === value; });
                scheduleRef.current.addResource(resourceData[0], 'Rooms', value);
            }
        }
    };
    var isDataSourceEmpty = function (dataSource) {
        return !dataSource || dataSource.length === 0;
    };
    var handleEmptyDataSourceDisplay = function (treeViewRef, dataSource) {
        var noEventsElement = document.querySelector('.no-events-message');
        if (noEventsElement) {
            if (isDataSourceEmpty(dataSource)) {
                treeViewRef.element.style.display = 'none';
                noEventsElement.classList.remove('hidden');
            }
            else {
                treeViewRef.element.style.display = 'block';
                noEventsElement.classList.add('hidden');
            }
        }
    };
    var onPopupOpen = function (args) {
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
    var onPopupClose = function (args) {
        if (args.type === 'Editor') {
            var targetElement = args.event.target;
            var isSaveAction = targetElement.classList.contains('e-event-save') || targetElement.classList.contains('e-save-icon');
            if (isSaveAction) {
                var roomId = args.data.RoomId;
                var startTime = args.data.StartTime;
                var endTime = args.data.EndTime;
                var capacity = args.data.Capacity;
                var isRoomFiltered = scheduleRef.current.resourceCollection[0].dataSource.length === 1;
                var isRoomAvailable = scheduleRef.current.isSlotAvailable(startTime, endTime, !isRoomFiltered ? roomId - 1 : 0) && startTime.getHours() >= 8 && (endTime.getHours() < 18 || (endTime.getHours() === 18 && endTime.getMinutes() === 0));
                var isCapacityAvailable = checkRoomCapacity(capacity, roomId);
                if (!isRoomAvailable) {
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
                if (!isRoomAvailable || !isCapacityAvailable) {
                    args.cancel = true;
                }
                else {
                    var unplannedEventsTreeViewRefs = [allUnplannedEventsTreeViewRef, CloudSecurityEventTreeViewRef, AIAutomationEventTreeViewRef];
                    var unplannedEventTreeViewRef = unplannedEventsTreeViewRefs[selectedUnplannedEventItem].current;
                    var unplannedEventTreeViewData = unplannedEventTreeViewRef.fields.dataSource;
                    var updatedData = unplannedEventTreeViewData.filter(function (item) { return item.Id !== draggedItemId; });
                    unplannedEventTreeViewRef.fields.dataSource = updatedData;
                    allUnplannedEventsDataRef.current = allUnplannedEventsDataRef.current.filter(function (item) { return item.Id !== draggedItemId; });
                    handleEmptyDataSourceDisplay(unplannedEventTreeViewRef, updatedData);
                    args.data.Speakers = draggedItemSpeakers;
                    args.data.Description = draggedItemDescription;
                }
            }
            isDraggedItemDropped = false;
        }
    };
    var onTreeDragStart = function () {
        document.body.classList.add('e-disble-not-allowed');
    };
    var onTreeDragging = function (event) {
        document.body.classList.add('tree-item-dragging');
        if (scheduleRef.current.isAdaptive) {
            var classElement = scheduleRef.current.element.querySelector('.e-device-hover');
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
    var onTreeDragStop = function (event) {
        // Remove the class when dragging stops
        document.body.classList.remove('tree-item-dragging');
        // Remove any remaining cursor classes
        var dropNotAllowedElements = document.querySelectorAll('.not-allowed-cursor');
        dropNotAllowedElements.forEach(function (element) {
            element.classList.remove('not-allowed-cursor');
        });
        var treeviewElement = (0, ej2_base_1.closest)(event.target, '.e-treeview');
        var classElement = scheduleRef.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeviewElement) {
            event.cancel = true;
            var scheduleElement = (0, ej2_base_1.closest)(event.target, '.e-content-wrap');
            if (scheduleElement) {
                var treeviewData = allUnplannedEventsTreeViewRef.current.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    var filteredData = treeviewData.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                    var _a = filteredData[0], Subject = _a.Subject, Capacity = _a.Capacity, Speakers = _a.Speakers, Description = _a.Description, Duration = _a.Duration, EventType = _a.EventType, TargetAudience = _a.TargetAudience, EventLevel = _a.EventLevel, EventTags = _a.EventTags, Title = _a.Title;
                    var cellData = scheduleRef.current.getCellDetails(event.target);
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
                    var resourceDetails = scheduleRef.current.getResourcesByIndex(cellData.groupIndex);
                    var roomId = resourceDetails.resourceData.RoomId;
                    var isRoomFiltered = scheduleRef.current.resourceCollection[0].dataSource.length === 1;
                    var isRoomAvailable = scheduleRef.current.isSlotAvailable(StartTime, EndTime, !isRoomFiltered ? roomId - 1 : 0);
                    var isCapacityAvailable = checkRoomCapacity(Capacity, roomId);
                    if (!isRoomAvailable || !isCapacityAvailable) {
                        alertDialogRef.current.content = !isRoomAvailable ? 'This room is already booked for this time slot. Please select a different room or time.' : 'This room cannot accommodate the stated number of attendees. Please select a room with a suitable capacity.';
                        alertDialogRef.current.show();
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
                    scheduleRef.current.openEditor(eventData, 'Add', true);
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    var onUnplannedEventSelect = function (args) {
        var treeviewRefs = [allUnplannedEventsTreeViewRef, CloudSecurityEventTreeViewRef, AIAutomationEventTreeViewRef];
        var previouslySelectedItem = parseInt(args.previousItemData.id, 10);
        selectedUnplannedEventItem = parseInt(args.value, 10);
        treeviewRefs[previouslySelectedItem].current.element.style.display = 'none';
        treeviewRefs[selectedUnplannedEventItem].current.element.style.display = '';
        treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource =
            selectedUnplannedEventItem === 0 ? treeviewRefs[1].current.fields.dataSource.concat(treeviewRefs[2].current.fields.dataSource) : unplannedEventsUpdatedData(allUnplannedEventsDataRef.current, unplannedEvents[selectedUnplannedEventItem]);
        handleEmptyDataSourceDisplay(treeviewRefs[selectedUnplannedEventItem].current, treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource);
    };
    var onCellClick = function (args) {
        args.cancel = true;
    };
    var roomValueTemplate = function (data) {
        return React.createElement("span", null, data.RoomName === 'All' ? 'Room: All' : data.RoomName);
    };
    var resourceHeaderTemplate = function (props) {
        return (React.createElement("div", { className: "template-wrap" },
            React.createElement("div", { className: "resource-detail" },
                React.createElement("div", { className: "resource-name" }, getRoomName(props)),
                React.createElement("div", { className: "capacity-wrap" },
                    React.createElement("span", { className: 'e-icons e-capacity-icon' }),
                    React.createElement("span", { className: 'e-capacity' }, getRoomCapacity(props.resourceData.RoomCapacity.toString()))))));
    };
    var quickInfoHeader = function (props) {
        return (React.createElement("div", { className: "e-event-header e-popup-header" },
            React.createElement("div", { className: "e-header-icon-wrapper" },
                React.createElement("button", { id: "close", className: "e-close e-icons e-close-icon e-btn e-lib e-flat e-round e-small e-icon-btn", title: "CLOSE", onClick: function () { scheduleRef.current.closeQuickInfoPopup(); } })),
            React.createElement("div", { className: "quick-info-header-content", style: getQuickInfoHeaderStyle(props) },
                React.createElement("div", { className: "quick-info-title" }, props.Subject),
                React.createElement("div", { className: "duration-text" }, getQuickInfoDurationText(props)))));
    };
    var quickInfoContent = function (props) {
        var room = '';
        if (props.elementType !== 'cell') {
            room = rooms.filter(function (room) { return room.RoomId === props.RoomId; })[0].RoomName;
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
    var agendaTemplate = function (props) {
        return (React.createElement("div", { className: "agenda-event" },
            React.createElement("div", { className: "event-subject" }, props.Subject),
            React.createElement("div", { className: "event-description" }, props.Description),
            props.Subject.toLowerCase().indexOf('break') === -1 && props.Subject.toLowerCase().indexOf('lunch') === -1 && (React.createElement("div", { className: "event-duration-audience" },
                React.createElement("div", { className: "event-duration" },
                    React.createElement("span", { className: 'e-icons e-duration-icon' }),
                    React.createElement("span", { className: 'e-duration' }, getTimeString(props.StartTime) + ' - ' + getTimeString(props.EndTime))),
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
    var treeTemplate = function (props) {
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
    var roomsDropDown = function () {
        return (React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: roomsData, fields: { text: 'RoomName', value: 'RoomId' }, value: 0, change: onRoomChange, valueTemplate: roomValueTemplate }));
    };
    var printAndExport = function () {
        return (React.createElement(ej2_react_splitbuttons_1.DropDownButtonComponent, { items: printExportItems, select: handlePrintExportSelect, iconCss: 'e-icons e-print-export', cssClass: 'e-caret-hide e-tbar-btn' }));
    };
    return (React.createElement("div", { className: 'control-section event-management-control-section' },
        React.createElement("div", { className: 'control-wrapper event-management-wrapper' },
            React.createElement(ej2_react_schedule_1.ScheduleComponent, { ref: scheduleRef, cssClass: 'schedule-event-management', currentView: 'Day', selectedDate: new Date(2025, 1, 24), width: '100%', height: '550px', startHour: "08:00", endHour: "18:00", timeScale: { slotCount: 3 }, allowOverlap: false, eventSettings: { dataSource: eventsData, fields: scheduleFields }, group: { resources: ['Rooms'] }, eventRendered: onEventRendered, resourceHeaderTemplate: resourceHeaderTemplate, cellClick: onCellClick, popupClose: onPopupClose, popupOpen: onPopupOpen, quickInfoTemplates: { header: quickInfoHeader, content: quickInfoContent } },
                React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Day" }),
                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Week" }),
                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: "Agenda", eventTemplate: agendaTemplate })),
                React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                    React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "RoomId", title: "Rooms", name: "Rooms", dataSource: rooms, textField: "RoomName", idField: "RoomId", colorField: "RoomColor" })),
                React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineViews, ej2_react_schedule_1.Agenda, ej2_react_schedule_1.Week, ej2_react_schedule_1.Day, ej2_react_schedule_1.ExcelExport, ej2_react_schedule_1.Print] }),
                React.createElement(ej2_react_schedule_1.ToolbarItemsDirective, null,
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Previous', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Next', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'DateRangeText', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Views', align: 'Right' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Input', template: roomsDropDown, align: 'Right', cssClass: 'toolbar-post-agenda room-filter' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Button', prefixIcon: 'e-icons e-show-unplanned-events', align: 'Right', showTextOn: 'Overflow', overflow: 'Show', id: "overview_toolbar_settings_unplanned_events", click: toggleUnplannedEventsElement, cssClass: 'toolbar-post-agenda' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Button', prefixIcon: 'e-icons e-print-export', template: printAndExport, align: 'Right', cssClass: 'toolbar-post-agenda print-export' }))),
            React.createElement("div", { className: "unplanned-events-container" },
                React.createElement("div", { className: "title-container" },
                    React.createElement("div", { className: "title-text" }, "Unscheduled Events")),
                React.createElement("div", { id: "list-container" },
                    React.createElement("div", { className: 'events-list' },
                        React.createElement("label", { className: "event-label" }, "Event"),
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { fields: { text: 'name', value: 'id' }, dataSource: unPlannedEventsList, value: selectedUnplannedEventItem.toString(), change: onUnplannedEventSelect })),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: allUnplannedEventsTreeViewRef, id: "treeview1", style: { display: "" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: treeTemplate, fields: allUnplannedEventsTreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: CloudSecurityEventTreeViewRef, id: 'treeview2', style: { display: "none" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: treeTemplate, fields: unplannedEvent1TreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: AIAutomationEventTreeViewRef, id: 'treeview3', style: { display: "none" }, cssClass: 'event-management-treeview', dragArea: ".event-management-wrapper", nodeTemplate: treeTemplate, fields: unplannedEvent2TreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement("div", { className: "no-events-message hidden" }, "All events have been scheduled"))),
            React.createElement("div", { id: "target" },
                React.createElement(ej2_react_popups_1.DialogComponent, { id: "modalDialog", cssClass: 'alert-dialog', isModal: true, buttons: alertDialogButtons, header: "Notice", height: "240px", width: "335px", ref: alertDialogRef, visible: false, showCloseIcon: true, animationSettings: animationSettings, target: "#target" }))),
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
exports.default = EventManagement;
