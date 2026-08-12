"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("react");
require("./table-reservation.css");
var ej2_react_schedule_1 = require("@syncfusion/ej2-react-schedule");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var dataSource = require("./datasource.json");
var TableReservation = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var scheduleRef = (0, react_1.useRef)(null);
    var slotTabRef = (0, react_1.useRef)(null);
    var allWaitingDataTreeViewRef = (0, react_1.useRef)(null);
    var breakfastWaitingDataTreeViewRef = (0, react_1.useRef)(null);
    var lunchWaitingDataTreeViewRef = (0, react_1.useRef)(null);
    var dinnerWaitingDataTreeViewRef = (0, react_1.useRef)(null);
    var alertDialogRef = (0, react_1.useRef)(null);
    var startDateTimePickerRef = (0, react_1.useRef)(null);
    var endDateTimePickerRef = (0, react_1.useRef)(null);
    var intl = new ej2_base_1.Internationalization();
    var isDraggedItemDropped = false;
    var draggedItemId;
    var selectedDate = new Date(2025, 2, 16);
    var animationSettings = { effect: 'None' };
    var startDateTimeValue;
    var eventsData = (0, ej2_base_1.extend)([], dataSource.TableReservationData, null, true);
    var breakfastWaitingData = (0, ej2_base_1.extend)([], dataSource.BreakfastWaitingData, null, true);
    var lunchWaitingData = (0, ej2_base_1.extend)([], dataSource.LunchWaitingData, null, true);
    var dinnerWaitingData = (0, ej2_base_1.extend)([], dataSource.DinnerWaitingData, null, true);
    var allWaitingData = (0, react_1.useRef)(breakfastWaitingData.concat(lunchWaitingData, dinnerWaitingData));
    var tableCategory = [
        { category: 'Standard Table', id: 1 },
        { category: 'Family Table', id: 2 },
        { category: 'VIP Table', id: 3, IsExpand: false },
        { category: 'Outdoor Table', id: 4 }
    ];
    var tables = [
        { name: 'Table1', id: 1, groupId: 1, seats: '2', notes: 'Cozy booth near the entrance, ideal for quick meals or solo diners' },
        { name: 'Table2', id: 2, groupId: 1, seats: '4', notes: 'Window-side table with natural lighting, great for small talk or business lunch' },
        { name: 'Table3', id: 3, groupId: 1, seats: '8', notes: 'Quiet corner, perfect for couples or peaceful solo dining' },
        { name: 'Table4', id: 4, groupId: 2, seats: '6', notes: 'Kid-friendly zone, near high chairs and restrooms for family convenience' },
        { name: 'Table5', id: 5, groupId: 2, seats: '10', notes: 'Extra space for strollers or baby seats' },
        { name: 'Table6', id: 6, groupId: 3, seats: '4', notes: 'Private booth with dim lighting, great for romantic dinners' },
        { name: 'Table7', id: 7, groupId: 3, seats: '8', notes: 'Scenic view (overlooks the city or garden), premium decor' },
        { name: 'Table8', id: 8, groupId: 4, seats: '4', notes: 'Garden-side table with umbrella shade, great for brunch' },
        { name: 'Table9', id: 9, groupId: 4, seats: '6', notes: 'Pet-friendly table, smoking allowed, close to outdoor heater (for chilly nights)' }
    ];
    var allWaitingDataTreeFields = { dataSource: allWaitingData.current, id: 'Id', text: 'CustomerName' };
    var breakfastWaitingDataTreeFields = { dataSource: breakfastWaitingData, id: 'Id', text: 'CustomerName' };
    var lunchWaitingDataTreeFields = { dataSource: lunchWaitingData, id: 'Id', text: 'CustomerName' };
    var dinnerWaitingDataTreeFields = { dataSource: dinnerWaitingData, id: 'Id', text: 'CustomerName' };
    var scheduleFields = {
        id: 'Id',
        subject: { name: 'Status', title: 'Status' },
        startTime: { name: 'StartTime', title: 'Form' },
        endTime: { name: 'EndTime', title: 'To' },
        description: { name: 'Notes', title: 'Notes' }
    };
    var slotData = ['Breakfast', 'Lunch', 'Dinner'];
    var getMealPeriod = function (date) {
        var hours = date.getHours();
        if (hours >= 7 && hours < 12)
            return 'Breakfast';
        if (hours >= 12 && hours < 17)
            return 'Lunch';
        if (hours >= 17 && hours <= 22)
            return 'Dinner';
        return '';
    };
    var formatTimeRange = function (startHour, endHour, date) {
        var startTime = new Date(date);
        startTime.setHours(startHour, 0, 0);
        var endTime = new Date(date);
        endTime.setHours(endHour, 0, 0);
        return "".concat(intl.formatDate(startTime, { skeleton: 'hm' }), " to ").concat(intl.formatDate(endTime, { skeleton: 'hm' }));
    };
    var getMealPeriodTimeRange = function (date) {
        var hours = date.getHours();
        if (hours >= 7 && hours < 12)
            return formatTimeRange(7, 12, date);
        if (hours >= 12 && hours < 17)
            return formatTimeRange(12, 17, date);
        if (hours >= 17 && hours <= 22)
            return formatTimeRange(17, 22, date);
        return '';
    };
    var majorSlotTemplate = function (props) {
        var hours = props.date.getHours();
        var minutes = props.date.getMinutes();
        var mealPeriod = getMealPeriod(props.date);
        var showTimeRange = (hours === 7 && minutes === 0) || (hours === 12 && minutes === 0) || (hours === 17 && minutes === 0);
        var timeRange = showTimeRange ? getMealPeriodTimeRange(props.date) : '';
        return (React.createElement("div", { className: "custom-slot-template" },
            React.createElement("div", { className: "meal-period-indicator" }, mealPeriod),
            showTimeRange && React.createElement("div", { className: "time-text" }, timeRange)));
    };
    var timeScale = {
        enable: true,
        interval: 300,
        slotCount: 5,
        majorSlotTemplate: majorSlotTemplate
    };
    var getTableName = function (value) {
        return value.resourceData[value.resource.textField];
    };
    var getTableSeats = function (value) {
        return value.resourceData.seats;
    };
    var resourceHeaderTemplate = function (props) {
        if (props.resource.name === 'Category') {
            return (React.createElement("div", { className: "e-resource-text" }, props.resourceData.category));
        }
        else {
            return (React.createElement("div", { className: "template-wrap" },
                React.createElement("div", { className: "resource-header-template" },
                    React.createElement("div", { className: "table-name" }, getTableName(props)),
                    React.createElement("div", { className: "table-seat-capacity" },
                        React.createElement("span", { className: 'e-icons seat-capacity-icon' }),
                        React.createElement("span", { className: 'seat-capacity' }, getTableSeats(props))))));
        }
    };
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
    var toggleWaitingListElement = function () {
        var settingsPanel = document.querySelector('.waiting-list-container');
        var toggleButton = scheduleRef.current.element.querySelector('.e-show-waiting-list') || scheduleRef.current.element.querySelector('.e-hide-waiting-list');
        if (settingsPanel.classList.contains('hide')) {
            (0, ej2_base_1.removeClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-hide-waiting-list', 'e-show-waiting-list');
        }
        else {
            (0, ej2_base_1.addClass)([settingsPanel], 'hide');
            toggleButton.classList.replace('e-show-waiting-list', 'e-hide-waiting-list');
        }
        scheduleRef.current.refreshEvents();
    };
    var agendaTemplate = function (props) {
        var _a;
        return (React.createElement("div", { className: "agenda-event" },
            React.createElement("div", { className: "agenda-item" },
                props.Status === 'Cancelled' && (React.createElement("div", { className: "status-badge" }, "Cancelled")),
                React.createElement("div", { className: "table-info" },
                    React.createElement("span", { className: "table-label appointment-item" }, "Table : "),
                    React.createElement("span", { className: "table-name" }, (_a = tables.find(function (table) { return table.id === props.TableId; })) === null || _a === void 0 ? void 0 : _a.name)),
                props.Status === 'Blocked' || props.Status === 'Not Available' ? (React.createElement("div", { className: "time-size-details" },
                    React.createElement("div", { className: "time-section" },
                        React.createElement("span", { className: "time-icon e-icons" }),
                        React.createElement("span", { className: "time-value appointment-item" },
                            getTimeString(props.StartTime),
                            " - ",
                            getTimeString(props.EndTime))),
                    React.createElement("div", { className: "slot-duration-details" },
                        React.createElement("span", { className: "slot-duration appointment-item" },
                            props.Status,
                            " - ",
                            getDuration(props.StartTime, props.EndTime))))) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "customer-name" }, props.CustomerName),
                    React.createElement("div", { className: "time-size-details" },
                        React.createElement("div", { className: "time-section" },
                            React.createElement("span", { className: "time-icon e-icons" }),
                            React.createElement("span", { className: "time-value appointment-item" },
                                getTimeString(props.StartTime),
                                " - ",
                                getTimeString(props.EndTime))),
                        React.createElement("div", { className: "slot-duration-details" },
                            React.createElement("span", { className: "slot-duration appointment-item" },
                                props.slot,
                                " - ",
                                getDuration(props.StartTime, props.EndTime))),
                        React.createElement("div", { className: "party-details" },
                            React.createElement("span", { className: "party-icon e-icons" }),
                            React.createElement("span", { className: "party-size appointment-item" },
                                "Guest Count : ",
                                props.GuestCount))),
                    React.createElement("div", { className: "contact-details" },
                        React.createElement("span", { className: "phone-icon e-icons tr-icon-telephone" }),
                        React.createElement("span", { className: "phone-number appointment-item" }, props.contactNumber)),
                    props.Notes && (React.createElement("div", { className: "notes-details" },
                        React.createElement("span", { className: "notes-icon e-icons" }),
                        React.createElement("span", { className: "notes appointment-item" }, props.Notes))))))));
    };
    var getTimeString = function (value) {
        return intl.formatDate(value, { skeleton: 'hm' });
    };
    var getBackgroundColorByTime = function (startHour) {
        var backgroundColor = '';
        if (startHour >= 7 && startHour < 12) {
            backgroundColor = '#0F6CBD';
        }
        else if (startHour >= 12 && startHour < 17) {
            backgroundColor = '#2E7D32';
        }
        else if (startHour >= 17 && startHour <= 22) {
            backgroundColor = '#4E342E';
        }
        return backgroundColor;
    };
    var getQuickInfoHeaderStyle = function (data) {
        var startHour = data.StartTime.getHours();
        var backgroundColor = getBackgroundColorByTime(startHour);
        return { background: backgroundColor, color: '#FFFFFF' };
    };
    var getQuickInfoDurationText = function (data) {
        return intl.formatDate(data.StartTime, { skeleton: 'yMMMEd' }) + ' (' +
            intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    var quickInfoHeader = function (props) {
        return (React.createElement("div", { className: "e-event-header e-popup-header" },
            React.createElement("div", { className: "e-header-icon-wrapper" },
                React.createElement("button", { id: "close", className: "e-close e-icons e-close-icon e-btn e-lib e-flat e-round e-small e-icon-btn", title: "CLOSE", onClick: function () { scheduleRef.current.closeQuickInfoPopup(); } })),
            React.createElement("div", { className: "quick-info-header-content", style: getQuickInfoHeaderStyle(props) },
                React.createElement("div", { className: "quick-info-title" }, props.CustomerName),
                React.createElement("div", { className: "duration-text" }, getQuickInfoDurationText(props)))));
    };
    var quickInfoContent = function (props) {
        var tableName = tables.filter(function (table) { return table.id === props.TableId; })[0].name;
        var tableType = tableCategory.filter(function (table) { return table.id === props.CategoryId; })[0].category;
        return (React.createElement("div", { className: "quick-info-content" },
            React.createElement("div", { className: "event-content" },
                React.createElement("div", { className: "e-table e-content-item" },
                    React.createElement("label", null, "Table"),
                    React.createElement("span", { className: 'e-content' },
                        ": ",
                        tableType,
                        " (",
                        tableName,
                        ")")),
                React.createElement("div", { className: "e-time e-content-item" },
                    React.createElement("label", null, "Time period"),
                    React.createElement("span", { className: 'e-content' },
                        ": ",
                        props.slot,
                        " - ",
                        getDuration(props.StartTime, props.EndTime))),
                React.createElement("div", { className: "e-party-size e-content-item" },
                    React.createElement("label", null, "Party size"),
                    React.createElement("span", { className: 'e-content' },
                        ": ",
                        props.GuestCount)),
                React.createElement("div", { className: "e-contact-number e-content-item" },
                    React.createElement("label", null, "Contact number"),
                    React.createElement("span", { className: 'e-content' },
                        ": ",
                        props.contactNumber)),
                props.Notes && props.Notes.length > 0 && (React.createElement("div", { className: "e-notes e-content-item e-notes-row" },
                    React.createElement("label", { className: "e-notes-label" }, "Note"),
                    React.createElement("span", { className: 'e-notes-colon' }, ":"),
                    React.createElement("div", { className: 'e-content' }, props.Notes))))));
    };
    var onEventRendered = function (args) {
        var eventData = args.data;
        if (eventData) {
            var status_1 = eventData.Status.toLowerCase();
            args.element.classList.add('e-' + (status_1.toLowerCase().replace(' ', '-')));
            if (args.element && !args.element.matches('.e-agenda-item.e-agenda-view') && status_1 !== 'cancelled' && status_1 !== 'blocked' && status_1 !== 'not available') {
                var startHour = eventData.StartTime.getHours();
                var backgroundColor = getBackgroundColorByTime(startHour);
                if (args.element) {
                    args.element.style.backgroundColor = backgroundColor;
                }
            }
        }
    };
    var onActionBegin = function (args) {
        if (args.requestType === 'eventCreate') {
            var formData = args.addedRecords[0];
            args.addedRecords[0].StartTime = new Date(formData.StartTime).toISOString();
            args.addedRecords[0].EndTime = new Date(formData.EndTime).toISOString();
            args.addedRecords[0].CustomerName = args.addedRecords[0].CustomerName || formData.Subject;
            args.addedRecords[0].Status = args.addedRecords[0].Status || "Reserved";
        }
    };
    var editorHeaderTemplate = function (props) {
        return (React.createElement("div", { id: "event-editor-header" }, "New Reservation"));
    };
    var stratDateTimeChange = function (args) {
        var previousStartDateTime = startDateTimeValue;
        var startDateTime = new Date(startDateTimePickerRef.current.value);
        var difference = 0;
        if (startDateTime > previousStartDateTime) {
            difference = startDateTime.getTime() - previousStartDateTime.getTime();
        }
        else {
            difference = startDateTime.getTime() - previousStartDateTime.getTime();
        }
        var endDateTime = new Date(endDateTimePickerRef.current.value);
        var newEndDateTime = new Date(endDateTime.getTime() + difference);
        endDateTimePickerRef.current.value = newEndDateTime;
        startDateTimeValue = startDateTime;
    };
    var editorTemplate = function (props) {
        startDateTimeValue = new Date(props.StartTime || props.startTime);
        return (React.createElement("div", { className: "custom-event-editor" },
            React.createElement("div", { className: "form-row ready-only-item" },
                React.createElement("div", { className: "form-group first-item" },
                    React.createElement("label", { className: "e-textlabel" }, "Name"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement("input", { id: "Subject", className: "e-field e-input", type: "text", name: "Subject", "data-name": "Subject", defaultValue: props.Subject || '' }))),
                React.createElement("div", { className: "form-group half-width" },
                    React.createElement("label", { className: "e-textlabel" }, "Table category"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "CategoryId", dataSource: tableCategory, fields: { text: 'category', value: 'id' }, value: props.CategoryId, className: "e-field", "data-name": "CategoryId" })))),
            React.createElement("div", { className: "form-row ready-only-item" },
                React.createElement("div", { className: "form-group first-item" },
                    React.createElement("label", { className: "e-textlabel" }, "Party size"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { id: "GuestCount", value: props.GuestCount || 4, min: 1, max: 20, format: "n0", showSpinButton: true, className: "e-field", "data-name": "GuestCount" }))),
                React.createElement("div", { className: "form-group half-width" },
                    React.createElement("label", { className: "e-textlabel" }, "Table"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "TableId", dataSource: tables, fields: { text: 'name', value: 'id' }, value: props.TableId, className: "e-field", "data-name": "TableId" })))),
            React.createElement("div", { className: "form-row e-start-end-time" },
                React.createElement("div", { className: "form-group first-item" },
                    React.createElement("label", { className: "e-textlabel" }, "Start"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_calendars_1.DateTimePickerComponent, { ref: startDateTimePickerRef, id: "StartTime", format: "M/dd/yy h:mm a", "data-name": "StartTime", value: startDateTimeValue, className: "e-field", change: stratDateTimeChange }))),
                React.createElement("div", { className: "form-group half-width ready-only-item" },
                    React.createElement("label", { className: "e-textlabel" }, "End"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_calendars_1.DateTimePickerComponent, { ref: endDateTimePickerRef, id: "EndTime", format: "M/dd/yy h:mm a", "data-name": "EndTime", value: new Date(props.EndTime || props.endTime), className: "e-field" })))),
            React.createElement("div", { className: "form-row ready-only-item" },
                React.createElement("div", { className: "form-group first-item" },
                    React.createElement("label", { className: "e-textlabel" }, "Time period (In-hour)"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "Duration", dataSource: ['1 hour', '1.5 hours', '2 hours', '2.5 hours', '3 hours'], value: props.Duration || '2 hours', className: "e-field", "data-name": "Duration" }))),
                React.createElement("div", { className: "form-group half-width" },
                    React.createElement("label", { className: "e-textlabel" }, "Meal slot"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { id: "slot", dataSource: ['Breakfast', 'Lunch', 'Dinner'], value: props.slot || 'Breakfast', className: "e-field", "data-name": "slot" })))),
            React.createElement("div", { className: "form-row ready-only-item" },
                React.createElement("div", { className: "form-group e-contact-number" },
                    React.createElement("label", { className: "e-textlabel" }, "Contact number"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement(ej2_react_inputs_1.TextBoxComponent, { id: "contactNumber", placeholder: "Enter contact number", value: props.contactNumber || '', className: "e-field", "data-name": "contactNumber" })))),
            React.createElement("div", { className: "form-row ready-only-item" },
                React.createElement("div", { className: "form-group e-note" },
                    React.createElement("label", { className: "e-textlabel" }, "Note"),
                    React.createElement("div", { className: "e-field-wrapper" },
                        React.createElement("textarea", { id: "Notes", className: "e-field e-input", name: "Notes", "data-name": "Notes", rows: 3, defaultValue: props.Notes || '', style: { width: '100%', height: '80px', resize: 'vertical' } }))))));
    };
    var isDataSourceEmpty = function (dataSource) {
        return !dataSource || dataSource.length === 0;
    };
    var handleEmptyDataSourceDisplay = function (treeViewRef, dataSource) {
        var noEventsElement = document.querySelector('.no-waiting-list-message');
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
    var onCellClick = function (args) {
        args.cancel = true;
    };
    var onPopupOpen = function (args) {
        var type = args.type, data = args.data, element = args.element;
        var isQuickInfoPopup = type === 'QuickInfo' || type === 'ViewEventInfo';
        var isEditorPopup = type === 'Editor';
        if (isQuickInfoPopup) {
            if ((data === null || data === void 0 ? void 0 : data.Status) === 'Blocked' || (data === null || data === void 0 ? void 0 : data.Status) === 'Not Available') {
                args.cancel = true;
                return;
            }
            element.classList.add('table-reservation-quick-popup');
        }
        else if (isEditorPopup) {
            if (!isDraggedItemDropped) {
                args.cancel = true;
                return;
            }
            element.classList.add('table-reservation-editor-popup');
        }
    };
    var onPopupClose = function (args) {
        if (args.type === 'Editor') {
            var targetElement = args.event.target;
            var isSaveAction = targetElement.classList.contains('e-event-save') || targetElement.classList.contains('e-save-icon');
            if (isSaveAction) {
                var startTime = args.data.StartTime;
                var endTime = args.data.EndTime;
                var startHour = startTime.getHours();
                var endtHour = endTime.getHours();
                var slot = args.data.slot;
                var isCorrectTimeSlot = startTime.getDate() === endTime.getDate() && ((slot === 'Breakfast' && startHour >= 7 && endtHour < 12) || (slot === 'Lunch' && startHour >= 12 && endtHour < 17) || (slot === 'Dinner' && startHour >= 17 && endtHour <= 22));
                if (!isCorrectTimeSlot) {
                    var timeElement = args.element.querySelector('.e-start-end-time');
                    if (!args.element.querySelector('.time-alert')) {
                        var newDiv = document.createElement('div');
                        newDiv.classList.add('time-alert');
                        newDiv.textContent = 'Select a time between ' + (slot === 'Breakfast' ? '7 a.m. and 12 p.m.' : (slot === 'Lunch' ? '12 p.m. and 5 p.m.' : '5 p.m. and 10 p.m.'));
                        timeElement.insertAdjacentElement('afterend', newDiv);
                    }
                    args.cancel = true;
                    return;
                }
                else {
                    if (args.element.querySelector('.capacity-alert')) {
                        args.element.querySelector('.capacity-alert').remove();
                    }
                }
                var waitingListTreeViewRefs = [allWaitingDataTreeViewRef, breakfastWaitingDataTreeViewRef, lunchWaitingDataTreeViewRef, dinnerWaitingDataTreeViewRef];
                var currentTreeViewRef = waitingListTreeViewRefs[slotTabRef.current.selectedItem].current;
                var currentTreeViewData = currentTreeViewRef.fields.dataSource;
                var updatedData = currentTreeViewData.filter(function (item) { return item.Id !== draggedItemId; });
                currentTreeViewRef.fields.dataSource = updatedData;
                allWaitingData.current = allWaitingData.current.filter(function (item) { return item.Id !== draggedItemId; });
                handleEmptyDataSourceDisplay(currentTreeViewRef, updatedData);
            }
            isDraggedItemDropped = false;
        }
    };
    var getDuration = function (startTime, endTime) {
        var durationMs = endTime.getTime() - startTime.getTime();
        var durationHours = durationMs / (1000 * 60 * 60);
        var roundedHours = Math.round(durationHours * 10) / 10;
        var displayHours = roundedHours % 1 === 0 ?
            roundedHours.toString() :
            roundedHours.toFixed(1);
        return "".concat(displayHours, " hour").concat(roundedHours !== 1 ? 's' : '');
    };
    var eventTemplate = function (props) {
        if (props.Status === 'Not Available' || props.Status === 'Blocked') {
            var durationText = '';
            if (props.Status === 'Blocked') {
                durationText = "(".concat(getDuration(props.StartTime, props.EndTime), ")");
            }
            return (React.createElement("div", { className: "template-wrap" },
                React.createElement("div", { className: "".concat(props.Status.toLowerCase().replace(' ', '-')) },
                    props.Status,
                    " ",
                    durationText)));
        }
        return (React.createElement("div", { className: "template-wrap reservation-card" },
            props.Status === 'Cancelled' && (React.createElement("div", { className: "status-badge" }, "Cancelled")),
            React.createElement("div", { className: "customer-details" },
                React.createElement("span", { className: "customer-name" }, props.CustomerName),
                React.createElement("div", { className: "guest-info" },
                    React.createElement("span", { className: "guest-icon e-icons appointment-icon" }),
                    React.createElement("span", { className: "guest-count" }, props.GuestCount))),
            React.createElement("div", { className: "time-details" },
                React.createElement("span", { className: "time-icon e-icons appointment-icon" }),
                React.createElement("span", { className: "time-slot" },
                    props.slot,
                    " - ",
                    getDuration(props.StartTime, props.EndTime))),
            React.createElement("div", { className: "contact-info" },
                React.createElement("span", { className: "contact-info-icon e-icons tr-icon-telephone appointment-icon" }),
                React.createElement("span", { className: "contact-info-number" }, props.contactNumber))));
    };
    var treeTemplate = function (props) {
        return (React.createElement("div", { className: "template-wrap waiting-list-card" },
            React.createElement("div", { className: "customer-header" },
                React.createElement("div", { className: "customer-name-section" },
                    React.createElement("span", { className: "customer-name" }, props.CustomerName),
                    React.createElement("div", { className: "guest-info" },
                        React.createElement("span", { className: "guest-icon e-icons" }),
                        React.createElement("span", { className: "guest-count list-item" }, props.GuestCount))),
                React.createElement("div", { className: "contact-info" },
                    React.createElement("span", { className: "contact-info-icon e-icons tr-icon-telephone" }),
                    React.createElement("span", { className: "contact-info-number list-item" }, props.contactInfo))),
            React.createElement("div", { className: "time-details" },
                React.createElement("span", { className: "time-icon e-icons" }),
                React.createElement("span", { className: "time-slot list-item" },
                    props.Slot,
                    " - ",
                    props.Duration)),
            React.createElement("div", { className: "notes-details" },
                React.createElement("span", { className: "notes-icon e-icons" }),
                React.createElement("span", { className: "notes list-item" }, props.Notes)),
            React.createElement("div", { className: "table-category" },
                React.createElement("span", { className: "category-label list-item" }, "Table Category :"),
                React.createElement("span", { className: "category-value" }, props.Table))));
    };
    var unplannedEventsUpdatedData = function (dataSource, selectedTabIndex) {
        return dataSource.filter(function (data) { return data.Slot === slotData[selectedTabIndex - 1]; });
    };
    var onTabSelecting = function (args) {
        var waitingListTreeViewRefs = [allWaitingDataTreeViewRef, breakfastWaitingDataTreeViewRef, lunchWaitingDataTreeViewRef, dinnerWaitingDataTreeViewRef];
        var previousTabIndex = args.selectedIndex;
        var selectedTabIndex = args.selectingIndex;
        waitingListTreeViewRefs[selectedTabIndex].current.fields.dataSource =
            selectedTabIndex === 0 ? breakfastWaitingDataTreeViewRef.current.fields.dataSource.concat(lunchWaitingDataTreeViewRef.current.fields.dataSource, dinnerWaitingDataTreeViewRef.current.fields.dataSource) : unplannedEventsUpdatedData(allWaitingData.current, selectedTabIndex);
        waitingListTreeViewRefs[previousTabIndex].current.element.style.display = 'none';
        waitingListTreeViewRefs[selectedTabIndex].current.element.style.display = '';
        handleEmptyDataSourceDisplay(waitingListTreeViewRefs[selectedTabIndex].current, waitingListTreeViewRefs[selectedTabIndex].current.fields.dataSource);
    };
    var showAlertMessage = function (message) {
        if (alertDialogRef.current) {
            alertDialogRef.current.content = message;
            alertDialogRef.current.show();
        }
    };
    var onTreeDragStart = function () {
        document.body.classList.add('e-disble-not-allowed');
    };
    var onTreeDragging = function (event) {
        document.body.classList.add('table-reservation-dragging');
        var targetElement = event.target;
        var cancelledAppointment = (0, ej2_base_1.closest)(targetElement, '.e-appointment.e-cancelled');
        var allElements = document.querySelectorAll('.not-allowed-cursor');
        allElements.forEach(function (el) { return el.classList.remove('not-allowed-cursor'); });
        if ((targetElement.classList.contains('e-work-cells') && !targetElement.classList.contains('e-resource-group-cells')) ||
            cancelledAppointment) {
            if (cancelledAppointment) {
                var allChildren = cancelledAppointment.querySelectorAll('*');
                allChildren.forEach(function (child) { return child.classList.remove('not-allowed-cursor'); });
            }
        }
        else {
            targetElement.classList.add('not-allowed-cursor');
        }
    };
    var onTreeDragStop = function (event) {
        document.body.classList.remove('table-reservation-dragging');
        var dropNotAllowedElements = document.querySelectorAll('.not-allowed-cursor');
        dropNotAllowedElements.forEach(function (element) {
            element.classList.remove('not-allowed-cursor');
        });
        var treeElement = (0, ej2_base_1.closest)(event.target, '.e-treeview');
        var classElement = scheduleRef.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeElement) {
            event.cancel = true;
            var scheduleElement = (0, ej2_base_1.closest)(event.target, '.e-content-wrap');
            if (scheduleElement) {
                var targetElement = event.target;
                var filteredData = allWaitingData.current.filter(function (item) { return item.Id === parseInt(event.draggedNodeData.id, 10); });
                var targetIsCell = targetElement.classList.contains('e-work-cells') && !targetElement.classList.contains('e-resource-group-cells');
                var targetIsCancelledEvent = !(0, ej2_base_1.isNullOrUndefined)((0, ej2_base_1.closest)(event.target, '.e-appointment.e-cancelled'));
                var eventData = void 0;
                var tableId_1;
                var StartTime = void 0;
                var groupIndex = void 0;
                var EndTime = void 0;
                if (targetIsCell) {
                    var cellData = scheduleRef.current.getCellDetails(event.target);
                    tableId_1 = cellData.groupIndex > 10 ? (cellData.groupIndex - 3) : (cellData.groupIndex > 7 ? (cellData.groupIndex - 2) : (cellData.groupIndex > 4 ? (cellData.groupIndex - 1) : cellData.groupIndex));
                    groupIndex = cellData.groupIndex;
                    StartTime = cellData.startTime;
                }
                else if (targetIsCancelledEvent) {
                    targetElement = (0, ej2_base_1.closest)(targetElement, '.e-appointment.e-cancelled');
                    eventData = scheduleRef.current.getEventDetails(targetElement);
                    tableId_1 = eventData.TableId;
                    groupIndex = tableId_1;
                    StartTime = eventData.StartTime;
                }
                else {
                    return;
                }
                var _a = filteredData[0], CustomerName = _a.CustomerName, GuestCount = _a.GuestCount, Table = _a.Table, contactInfo = _a.contactInfo, Slot = _a.Slot, Duration = _a.Duration, ReservationType = _a.ReservationType, Notes = _a.Notes, BookingSource = _a.BookingSource;
                var tableData_1 = tables.filter(function (table) { return table.id === tableId_1; })[0];
                var tableType = tableCategory.filter(function (tableGroup) { return tableGroup.id === tableData_1.groupId; })[0].category.split(' ')[0];
                if (tableType !== Table) {
                    showAlertMessage("Table category mismatch. This reservation requires a ".concat(Table, " table, but you selected a ").concat(tableType, " table."));
                    return;
                }
                else if (parseInt(tableData_1.seats, 10) < GuestCount) {
                    showAlertMessage("Insufficient seating capacity. This reservation requires seating for ".concat(GuestCount, " guests, but the selected table only seats ").concat(tableData_1.seats, "."));
                    return;
                }
                var durationValue = parseFloat(Duration.split(' ')[0]);
                var durationUnit = Duration.split(' ')[1];
                var endTime = new Date(StartTime);
                if (durationUnit === 'hour' || durationUnit === 'hours') {
                    var hours = Math.floor(durationValue);
                    var minutes = Math.round((durationValue - hours) * 60);
                    endTime.setHours(endTime.getHours() + hours);
                    endTime.setMinutes(endTime.getMinutes() + minutes);
                }
                else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                    endTime.setMinutes(endTime.getMinutes() + durationValue);
                }
                EndTime = endTime;
                var hour = StartTime.getHours();
                var isCorrectTimeSlot = (Slot === 'Breakfast' && hour >= 7 && hour < 12) || (Slot === 'Lunch' && hour >= 12 && hour < 17) || (Slot === 'Dinner' && hour >= 17 && hour <= 22);
                if (!isCorrectTimeSlot) {
                    showAlertMessage("Time slot mismatch. This reservation is for ".concat(Slot, ", but you're trying to schedule it during ").concat(hour < 12 ? 'Breakfast' : hour < 17 ? 'Lunch' : 'Dinner', " hours."));
                    return;
                }
                var startDate = StartTime.getDate();
                var endDate = EndTime.getDate();
                var endHour = EndTime.getHours();
                var isSlotAvailable = scheduleRef.current.isSlotAvailable(StartTime, EndTime, groupIndex) && startDate === endDate && endHour <= 22;
                if (!isSlotAvailable && targetIsCell) {
                    showAlertMessage('This time slot is already booked. Please select another time or table.');
                    return;
                }
                var updatedEventData = targetIsCancelledEvent ? eventData : {};
                updatedEventData.Status = 'Reserved';
                updatedEventData.Subject = CustomerName;
                updatedEventData.GuestCount = GuestCount;
                updatedEventData.TableId = tableId_1;
                updatedEventData.CategoryId = tableData_1.groupId;
                updatedEventData.CustomerName = CustomerName;
                updatedEventData.StartTime = StartTime;
                updatedEventData.EndTime = EndTime;
                updatedEventData.Duration = Duration;
                updatedEventData.slot = Slot;
                updatedEventData.contactNumber = contactInfo;
                updatedEventData.ReservationType = ReservationType;
                updatedEventData.BookingSource = BookingSource;
                updatedEventData.Notes = Notes;
                scheduleRef.current.openEditor(updatedEventData, targetIsCell ? 'Add' : 'EditOccurrence', targetIsCell);
                isDraggedItemDropped = true;
                draggedItemId = parseInt(event.draggedNodeData.id, 10);
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    };
    return (React.createElement("div", { className: 'control-section table-reservation-control-section' },
        React.createElement("div", { className: 'control-wrapper table-reservation-wrapper' },
            React.createElement(ej2_react_schedule_1.ScheduleComponent, { ref: scheduleRef, cssClass: 'schedule-table-reservation', width: '100%', height: '550px', selectedDate: selectedDate, group: { enableCompactView: false, resources: ['Category', 'Tables'] }, resourceHeaderTemplate: resourceHeaderTemplate, startHour: "07:00", endHour: '22:00', timeScale: timeScale, allowOverlap: false, eventSettings: {
                    dataSource: eventsData,
                    fields: scheduleFields,
                    template: eventTemplate
                }, actionBegin: onActionBegin, editorHeaderTemplate: editorHeaderTemplate, editorTemplate: editorTemplate, eventRendered: onEventRendered, cellClick: onCellClick, popupOpen: onPopupOpen, popupClose: onPopupClose, quickInfoTemplates: { header: quickInfoHeader, content: quickInfoContent } },
                React.createElement(ej2_react_schedule_1.ViewsDirective, null,
                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'TimelineDay' }),
                    React.createElement(ej2_react_schedule_1.ViewDirective, { option: 'Agenda', eventTemplate: agendaTemplate })),
                React.createElement(ej2_react_schedule_1.ResourcesDirective, null,
                    React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "CategoryId", title: "Category", name: "Category", cssClassField: 'table-category', allowMultiple: false, dataSource: tableCategory, textField: "category", idField: "id" }),
                    React.createElement(ej2_react_schedule_1.ResourceDirective, { field: "TableId", title: "Tables", name: "Tables", cssClassField: 'table-name', allowMultiple: true, dataSource: tables, textField: "name", idField: "id", groupIDField: 'groupId' })),
                React.createElement(ej2_react_schedule_1.ToolbarItemsDirective, null,
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Previous', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Next', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'DateRangeText', align: 'Left' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Views', align: 'Right' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { type: 'Separator', align: 'Right', cssClass: 'toolbar-post-agenda' }),
                    React.createElement(ej2_react_schedule_1.ToolbarItemDirective, { name: 'Custom', type: 'Button', prefixIcon: 'e-icons e-show-waiting-list', align: 'Right', showTextOn: 'Overflow', overflow: 'Show', id: "overview_toolbar_settings_waiting_list", click: toggleWaitingListElement, cssClass: 'toolbar-post-agenda' })),
                React.createElement(ej2_react_schedule_1.Inject, { services: [ej2_react_schedule_1.TimelineViews, ej2_react_schedule_1.Week, ej2_react_schedule_1.Day, ej2_react_schedule_1.Agenda] })),
            React.createElement("div", { className: "waiting-list-container" },
                React.createElement("div", { className: "title-container" },
                    React.createElement("div", { className: "title-text" }, "Waiting List")),
                React.createElement("div", { id: "list-container" },
                    React.createElement("div", { className: "slot-tabs" },
                        React.createElement(ej2_react_navigations_1.TabComponent, { ref: slotTabRef, id: "draggableTab", selecting: onTabSelecting },
                            React.createElement(ej2_react_navigations_1.TabItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: { text: "All" } }),
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: { text: "Breakfast" } }),
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: { text: "Lunch" } }),
                                React.createElement(ej2_react_navigations_1.TabItemDirective, { header: { text: "Dinner" } })))),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: allWaitingDataTreeViewRef, id: "allWaitingDataTreeView", style: { display: "" }, cssClass: 'table-reservation-treeview', dragArea: ".table-reservation-wrapper .e-content-wrap", nodeTemplate: treeTemplate, fields: allWaitingDataTreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: breakfastWaitingDataTreeViewRef, id: 'breakfastWaitingDataTreeView', style: { display: "none" }, cssClass: 'table-reservation-treeview', dragArea: ".table-reservation-wrapper .e-content-wrap", nodeTemplate: treeTemplate, fields: breakfastWaitingDataTreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: lunchWaitingDataTreeViewRef, id: 'lunchWaitingDataTreeView', style: { display: "none" }, cssClass: 'table-reservation-treeview', dragArea: ".table-reservation-wrapper .e-content-wrap", nodeTemplate: treeTemplate, fields: lunchWaitingDataTreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement(ej2_react_navigations_1.TreeViewComponent, { ref: dinnerWaitingDataTreeViewRef, id: 'dinnerWaitingDataTreeView', style: { display: "none" }, cssClass: 'table-reservation-treeview', dragArea: ".table-reservation-wrapper .e-content-wrap", nodeTemplate: treeTemplate, fields: dinnerWaitingDataTreeFields, nodeDragStart: onTreeDragStart, nodeDragging: onTreeDragging, nodeDragStop: onTreeDragStop, allowDragAndDrop: true }),
                    React.createElement("div", { className: "no-waiting-list-message hidden" }, "No customers are waiting"))),
            React.createElement("div", { id: "target" },
                React.createElement(ej2_react_popups_1.DialogComponent, { id: "modalDialog", cssClass: 'alert-dialog', isModal: true, buttons: alertDialogButtons, header: "Notice", height: "240px", width: "335px", ref: alertDialogRef, visible: false, showCloseIcon: true, animationSettings: animationSettings, target: "#target" }))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This demo showcases a restaurant table reservation system using the Scheduler component, where tables are organized by categories and meal periods. The system has a drag-and-drop feature for booking table reservations.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This example demonstrates how to implement a restaurant table reservation system using the Scheduler component. The application includes the following features:"),
            React.createElement("ul", null,
                React.createElement("li", null, "Tables organized into categories (Standard, Family, VIP, and Outdoor) with specific seating capacities."),
                React.createElement("li", null, "Meal slots maintained as three distinct periods: breakfast (7 a.m. to 12 p.m.), lunch (12 p.m. to 5 p.m.), and dinner (5 p.m. to 10 p.m.). Reservations are color-coded to differentiate among meal types. Other reservation statuses, such as cancelled, blocked, and not available, are also visually distinguished with different indicators."),
                React.createElement("li", null, "An external waiting list panel that displays customers waiting for tables, categorized by meal period (breakfast, lunch, dinner)."),
                React.createElement("li", null, "Drag-and-drop functionality to create table reservations by moving customers from the waiting list to available time slots or the cancelled appointments list."),
                React.createElement("li", null, "Checks for table category compatibility, seating capacity, meal period alignment, and time slot availability while creating reservations for waiting customers.")),
            React.createElement("p", null,
                "Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-scheduler" }, "React Scheduler"),
                " component page."))));
};
exports.default = TableReservation;
