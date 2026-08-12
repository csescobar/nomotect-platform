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
define(["require", "exports", "../common/culture-loader", "@syncfusion/ej2-schedule", "@syncfusion/ej2-navigations", "@syncfusion/ej2-calendars", "@syncfusion/ej2-base", "@syncfusion/ej2-navigations", "@syncfusion/ej2/buttons", "@syncfusion/ej2/inputs", "@syncfusion/ej2/popups", "@syncfusion/ej2/notifications", "@syncfusion/ej2-lists", "@syncfusion/ej2-grids"], function (require, exports, culture_loader_1, ej2_schedule_1, ej2_navigations_1, ej2_calendars_1, ej2_base_1, ej2_navigations_2, buttons_1, inputs_1, popups_1, notifications_1, ej2_lists_1, ej2_grids_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, ej2_base_1.enableRipple)(true);
    ej2_schedule_1.Schedule.Inject(ej2_schedule_1.Week, ej2_schedule_1.Day, ej2_schedule_1.Month, ej2_schedule_1.Year, ej2_schedule_1.TimelineMonth, ej2_schedule_1.Agenda, ej2_schedule_1.DragAndDrop);
    window.default = function () {
        (0, culture_loader_1.loadCultureFiles)();
        var toolbarObj = new ej2_navigations_2.Toolbar({
            clicked: ToolbarCliked,
            items: [
                { tooltipText: "Menu", prefixIcon: "e-menu" },
                { template: '<h4>Calendar</h4>' },
                { prefixIcon: "e-chevron-left", align: 'Center', tooltipText: 'Previous Week' },
                { prefixIcon: "e-chevron-right", align: 'Center', tooltipText: 'Next Week' },
                { template: '<h5 id="date"></h5>', align: 'Center' },
                { text: 'Today', align: 'Right' },
                { text: "Create", prefixIcon: "e-plus", align: 'Right' },
                { type: 'Separator', align: 'Right' },
                { text: 'Week', align: 'Right' },
                { text: 'Day', align: 'Right' },
                { text: 'Month', align: 'Right' },
                { text: 'Year', align: 'Right' },
                { text: 'Timeline', align: 'Right' },
                { text: 'Agenda', align: 'Right' }
            ]
        });
        toolbarObj.appendTo("#resToolbar");
        var toolBarEvents = new ej2_navigations_2.Toolbar({
            clicked: sideBarClicked,
            items: [
                { prefixIcon: "e-icons e-exit-full-screen", tooltipText: 'Open/Close-SideBar' },
                { template: '<h4 id="headerText">Unplanned Events</h4>' }
            ]
        });
        toolBarEvents.appendTo('.events');
        var sidebarMenu = new ej2_navigations_1.Sidebar({
            width: '290px',
            target: '.main-content',
            mediaQuery: '(min-width: 600px)',
            isOpen: true
        });
        sidebarMenu.appendTo('#sideTree');
        var rightSidebar = new ej2_navigations_1.Sidebar({
            width: "290px",
            target: '.main-content',
            position: 'Right',
            type: 'Over',
            isOpen: false,
        });
        rightSidebar.appendTo('#rightSidebar');
        var flatData = [
            { name: 'Meeting', id: 1, CalendarColor: '#ea7a57' },
            { name: 'Holiday', id: 2, CalendarColor: '#df5286' },
            { name: 'Customer meet', id: 3, CalendarColor: '#865fcf' },
        ];
        var calendarObject = new ej2_calendars_1.Calendar({
            start: "Month",
            value: new Date(),
            change: valueChange
        });
        calendarObject.appendTo('#Calendar');
        var icontemp = '<button id="saveButton" class="e-control e-btn e-primary" data-ripple="true">Save</button>';
        var saveButton = new buttons_1.Button();
        var dialog = new popups_1.Dialog({
            content: '<div><input id="text-box"></div><input id="color-picker" type="color"></div><div id="msg"><textarea id="text-area" rows="5" cols="250"></textarea>',
            footerTemplate: icontemp,
            showCloseIcon: true,
            enableResize: true,
            allowDragging: true,
            visible: false,
            width: '350px',
            height: '400px',
        });
        dialog.appendTo('#dialog');
        saveButton.appendTo('#saveButton');
        var outlineTextBox = new inputs_1.TextBox({
            placeholder: 'Enter the calendar name',
            cssClass: 'e-outline',
            floatLabelType: 'Auto',
        });
        outlineTextBox.appendTo('#text-box');
        var outlineTextArea = new inputs_1.TextArea({
            placeholder: 'Description',
            cssClass: 'e-outline',
            floatLabelType: 'Auto'
        });
        outlineTextArea.appendTo('#text-area');
        var colorPicker = new inputs_1.ColorPicker({
            change: function (args) {
            }
        }, '#color-picker');
        function updateTextValue() {
            if (isAdd) {
                var colorPickers = document.getElementById('color-picker');
                var enteredVal = document.getElementById('text-box');
                if (enteredVal) {
                    var newValue = enteredVal.value.trim();
                    if (newValue.length > 0) {
                        var newId = (flatData.length + 1);
                        var newItem = { name: newValue, id: newId, CalendarColor: colorPickers.ej2_instances[0].value };
                        listObj.addItem([newItem]);
                        console.log(listObj.dataSource);
                        onComplete();
                        enteredVal.value = '';
                        dialog.hide();
                        console.log('Item saved:', newItem);
                        console.log('Updated flatData:', flatData);
                        var length_1 = flatData.length;
                        scheduleObj.addResource(newItem, 'Owners', length_1 - 1);
                        scheduleObj.dataBind();
                    }
                    else {
                        var msgObj = new notifications_1.Message({
                            content: 'Event name cannot be empty'
                        });
                        msgObj.appendTo('#msg');
                    }
                }
                else {
                    console.error("Item not found");
                }
                isAdd = false;
            }
        }
        var listObj = new ej2_lists_1.ListView({
            dataSource: flatData,
            template: "<div class='list'>${name}<span id='listButtons' class='e-icons e-redaction'></span><span id='listButtons' class='e-icons e-close'></span></div>",
            headerTemplate: '<div class="headerContainer"><span class="calendarHeader">Calendar</span><button class="e-icons e-plus" id="add"></button></div>',
            showCheckBox: true,
            showHeader: true,
            actionComplete: onComplete,
            select: onchange,
        });
        listObj.appendTo('#listview-def');
        var newDataSource = [];
        function onchange(args) {
            var idFromArgs = Number(args.data.id);
            if (args.isChecked) {
                console.log('id is: ' + idFromArgs);
                var matchingEvents = resourceSampleData.filter(function (event) { return event.OwnerId === idFromArgs; });
                if (matchingEvents.length > 0) {
                    console.log('Matching events found:', matchingEvents);
                    matchingEvents.forEach(function (event) {
                        var alreadyExists = newDataSource.some(function (existingEvent) { return existingEvent.Id === event.Id; });
                        if (!alreadyExists) {
                            newDataSource.push(event);
                        }
                    });
                    scheduleObj.eventSettings.dataSource = newDataSource;
                    scheduleObj.refreshEvents();
                    console.log('Updated matched data source:', newDataSource);
                }
            }
            else {
                newDataSource = newDataSource.filter(function (event) { return event.OwnerId !== idFromArgs; });
                scheduleObj.eventSettings.dataSource = newDataSource;
                scheduleObj.refreshEvents();
                console.log('Updated new data source after removal:', newDataSource);
            }
        }
        var isEdit;
        var isAdd;
        function onComplete() {
            var _this = this;
            var iconDel = document.getElementsByClassName("e-close");
            var iconAdd = document.getElementsByClassName("e-plus");
            var iconEdit = document.getElementsByClassName("e-redaction");
            if (iconDel) {
                Array.prototype.forEach.call(iconDel, function (element) {
                    element.addEventListener("click", deleteItem.bind(_this));
                });
            }
            if (iconAdd) {
                Array.prototype.forEach.call(iconAdd, function (element) {
                    element.addEventListener("click", function () {
                        isAdd = true;
                        var inputElement = document.getElementById('text-box');
                        inputElement.value = '';
                        dialog.show();
                        var send = document.getElementById('saveButton');
                        if (send != null) {
                            send.onclick = function () {
                                updateTextValue();
                                var newEvents = generateRandomEvents(resourceSampleData, 5);
                                resourceSampleData.push.apply(resourceSampleData, newEvents);
                                console.log('New Events:', newEvents);
                                console.log('Updated resourceSampleData:', JSON.stringify(resourceSampleData, null, 2));
                            };
                        }
                    });
                });
            }
            if (iconEdit) {
                Array.prototype.forEach.call(iconEdit, function (element) {
                    isEdit = true;
                    element.addEventListener("click", showValue.bind(_this));
                });
            }
        }
        function deleteItem(args) {
            args.stopPropagation();
            var target = args.target;
            var parent = target.parentElement;
            if (parent && parent.parentElement) {
                var removeItem = parent.parentElement;
                listObj.removeItem(removeItem);
            }
            scheduleObj.refreshEvents();
            target.removeEventListener("click", deleteItem.bind(this));
            onComplete();
        }
        function generateRandomEvents(existingEvents, count) {
            var maxOwnerId = existingEvents.reduce(function (max, event) { return Math.max(max, event.OwnerId); }, 0);
            var ownerIdToUse = maxOwnerId + 1;
            var subjects = [
                "Product Overview",
                "Market Analysis",
                "Target Audience",
                "Launch Strategy",
                "Marketing Campaigns",
                "Product Demo",
                "Q & A Session with the Development Team"
            ];
            var newEvents = [];
            for (var i = 0; i < count; i++) {
                var randomDay = Math.floor(Math.random() * 28) + 1;
                var startHour = Math.floor(Math.random() * 8) + 9;
                var endHour = startHour + 2;
                var startDate = "2024-08-".concat(formatNumberWithLeadingZeros(randomDay, 2), "T").concat(formatNumberWithLeadingZeros(startHour, 2), ":30:00.000Z");
                var endDate = "2024-08-".concat(formatNumberWithLeadingZeros(randomDay, 2), "T").concat(formatNumberWithLeadingZeros(endHour, 2), ":00:00.000Z");
                var newEvent = {
                    Id: existingEvents.length + newEvents.length + 1,
                    Subject: subjects[Math.floor(Math.random() * subjects.length)],
                    StartTime: startDate,
                    EndTime: endDate,
                    OwnerId: ownerIdToUse
                };
                newEvents.push(newEvent);
            }
            return newEvents;
        }
        function formatNumberWithLeadingZeros(num, length) {
            var str = num.toString();
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
        function showValue(e) {
            var _a;
            if (isEdit) {
                var target = e.target;
                var parentDiv = target.closest('.list');
                if (parentDiv) {
                    var textContent_1 = ((_a = parentDiv.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || '';
                    var inputElement = document.getElementById('text-box');
                    if (inputElement) {
                        inputElement.value = textContent_1;
                        dialog.show();
                        var send = document.getElementById('saveButton');
                        if (send != null) {
                            send.onclick = function () {
                                var enteredVal = document.getElementById('text-box');
                                if (enteredVal) {
                                    var newValue_1 = enteredVal.value.trim();
                                    if (newValue_1.length > 0) {
                                        flatData = flatData.map(function (item) {
                                            if (item.name === textContent_1) {
                                                return __assign(__assign({}, item), { name: newValue_1 });
                                            }
                                            return item;
                                        });
                                        listObj.dataSource = flatData;
                                        listObj.dataBind();
                                        dialog.hide();
                                        console.log(JSON.stringify(flatData, null, 2));
                                    }
                                }
                            };
                        }
                    }
                }
                dialog.removeEventListener('click', function (e) {
                    showValue(e);
                });
                listObj.refresh();
                onComplete();
                isEdit = false;
            }
            if (isAdd) {
                updateTextValue();
            }
        }
        var resourceSampleData = [
            {
                Id: 1,
                Subject: "Project Kickoff",
                StartTime: "2024-08-13T09:00:00.000Z",
                EndTime: "2024-08-13T10:30:00.000Z",
                OwnerId: 1
            },
            {
                Id: 2,
                Subject: "Strategy Planning",
                StartTime: "2024-08-14T11:00:00.000Z",
                EndTime: "2024-08-14T12:00:00.000Z",
                OwnerId: 1
            },
            {
                Id: 3,
                Subject: "Team Sync-Up",
                StartTime: "2024-08-15T14:00:00.000Z",
                EndTime: "2024-08-15T15:30:00.000Z",
                OwnerId: 1
            },
            {
                Id: 4,
                Subject: "Quarterly Review",
                StartTime: "2024-08-16T08:30:00.000Z",
                EndTime: "2024-08-16T10:00:00.000Z",
                OwnerId: 1
            },
            {
                Id: 5,
                Subject: "Client Meeting",
                StartTime: "2024-08-17T13:00:00.000Z",
                EndTime: "2024-08-17T14:30:00.000Z",
                OwnerId: 1
            },
            {
                Id: 6,
                Subject: "New Year's Day",
                StartTime: "2024-08-18T00:00:00.000Z",
                EndTime: "2024-08-18T23:59:00.000Z",
                OwnerId: 2
            },
            {
                Id: 7,
                Subject: "Independence Day",
                StartTime: "2024-08-19T00:00:00.000Z",
                EndTime: "2024-08-19T23:59:00.000Z",
                OwnerId: 2
            },
            {
                Id: 8,
                Subject: "Labor Day",
                StartTime: "2024-08-20T00:00:00.000Z",
                EndTime: "2024-08-20T23:59:00.000Z",
                OwnerId: 2
            },
            {
                Id: 9,
                Subject: "Thanksgiving",
                StartTime: "2024-08-21T00:00:00.000Z",
                EndTime: "2024-08-21T23:59:00.000Z",
                OwnerId: 2
            },
            {
                Id: 10,
                Subject: "Christmas Day",
                StartTime: "2024-08-22T00:00:00.000Z",
                EndTime: "2024-08-22T23:59:00.000Z",
                OwnerId: 2
            },
            {
                Id: 11,
                Subject: "Product Demo",
                StartTime: "2024-08-23T10:00:00.000Z",
                EndTime: "2024-08-23T11:30:00.000Z",
                OwnerId: 3
            },
            {
                Id: 12,
                Subject: "Customer Feedback",
                StartTime: "2024-08-24T12:00:00.000Z",
                EndTime: "2024-08-24T13:30:00.000Z",
                OwnerId: 3
            },
            {
                Id: 13,
                Subject: "Onboarding Session",
                StartTime: "2024-08-25T09:00:00.000Z",
                EndTime: "2024-08-25T10:30:00.000Z",
                OwnerId: 3
            },
            {
                Id: 14,
                Subject: "Contract Review",
                StartTime: "2024-08-26T11:30:00.000Z",
                EndTime: "2024-08-26T13:00:00.000Z",
                OwnerId: 3
            },
            {
                Id: 15,
                Subject: "Quarterly Business Review",
                StartTime: "2024-08-27T14:00:00.000Z",
                EndTime: "2024-08-27T15:30:00.000Z",
                OwnerId: 3
            }
        ];
        var scheduleObj = new ej2_schedule_1.Schedule({
            currentView: 'Day',
            views: [
                { option: 'Week' },
                { option: 'Day' },
                { option: 'Month' },
                { option: 'Year' },
                { option: 'TimelineMonth' },
                { option: 'Agenda' },
            ],
            height: '650px',
            resources: [{
                    field: 'OwnerId', title: 'Owners',
                    name: 'Owners', allowMultiple: true,
                    dataSource: flatData,
                    textField: "name",
                    idField: "id",
                    colorField: "CalendarColor",
                }],
            eventSettings: { dataSource: newDataSource },
            showHeaderBar: false,
            selectedDate: new Date()
        });
        scheduleObj.appendTo('#Schedule');
        var header = document.getElementById('headerText');
        var open = document.getElementById('plannedOpen');
        if (open) {
            open.onclick = function (args) {
                rightSidebar.show();
            };
        }
        function sideBarClicked(args) {
            var _a;
            if (args.item.tooltipText === 'Open/Close-SideBar') {
                var open_1 = (_a = document.getElementById('rightSidebar')) === null || _a === void 0 ? void 0 : _a.classList.contains('e-close');
                if (open_1) {
                    rightSidebar.show();
                }
                else {
                    rightSidebar.hide();
                }
            }
        }
        var dateElement = document.getElementById('date');
        var counter = 0;
        resetDate();
        function resetDate() {
            counter = 0;
            dateUpdate();
        }
        function ToolbarCliked(args) {
            if (args.item.tooltipText === 'Menu') {
                sidebarMenu.toggle();
            }
            else if (args.item.text === 'Today') {
                var currentDate = new Date();
                scheduleObj.changeDate(currentDate);
                dateUpdate();
            }
            else if (args.item.text === 'Day') {
                resetDate();
                scheduleObj.changeView('Day');
            }
            else if (args.item.text === 'Week') {
                resetDate();
                scheduleObj.changeView('Week');
            }
            else if (args.item.text === 'Month') {
                resetDate();
                scheduleObj.changeView('Month');
            }
            else if (args.item.text === 'Timeline') {
                resetDate();
                scheduleObj.changeView('TimelineMonth');
            }
            else if (args.item.text === 'Agenda') {
                resetDate();
                scheduleObj.changeView('Agenda');
            }
            else if (args.item.text === 'Year') {
                resetDate();
                scheduleObj.changeView('Year');
            }
            else if (args.item.tooltipText === 'Next Week') {
                if (scheduleObj.currentView == 'Day') {
                    if (dateElement) {
                        next(1);
                    }
                }
                else if (scheduleObj.currentView == 'Week') {
                    if (dateElement) {
                        next(7);
                    }
                }
                else if (scheduleObj.currentView == 'Month') {
                    if (dateElement) {
                        next(30);
                    }
                }
                else if (scheduleObj.currentView == 'Year') {
                    if (dateElement) {
                        next(365);
                    }
                }
            }
            else if (args.item.tooltipText === 'Previous Week') {
                if (scheduleObj.currentView == 'Day') {
                    if (dateElement) {
                        previous(1);
                    }
                }
                else if (scheduleObj.currentView == 'Week') {
                    if (dateElement) {
                        previous(7);
                    }
                }
                else if (scheduleObj.currentView == 'Month') {
                    if (dateElement) {
                        previous(30);
                    }
                }
                else if (scheduleObj.currentView == 'Year') {
                    if (dateElement) {
                        (365);
                    }
                }
            }
        }
        function next(increment) {
            counter += increment;
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + counter);
            scheduleObj.changeDate(currentDate);
            calendarObject.values.push(currentDate);
            if (dateElement) {
                dateElement.textContent = formatDate(currentDate);
            }
            return currentDate;
        }
        function previous(decrement) {
            counter -= decrement;
            var currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + counter);
            scheduleObj.changeDate(currentDate);
            if (dateElement) {
                dateElement.textContent = formatDate(currentDate);
            }
            return currentDate;
        }
        function formatDate(date) {
            var options = { day: '2-digit', month: 'long', year: 'numeric' };
            return date.toLocaleDateString('en-GB', options);
        }
        function dateUpdate() {
            var dateElement = document.getElementById('date');
            if (dateElement) {
                var today = new Date();
                var formattedToday = formatDate(today);
                dateElement.textContent = formattedToday;
            }
        }
        function valueChange(args) {
            var dateElement = document.getElementById('date');
            scheduleObj.selectedDate = args.value;
            if (dateElement) {
                var selectedDate = args.value || new Date();
                var formattedDate = formatDate(selectedDate);
                dateElement.textContent = formattedDate;
            }
        }
        var data = [
            {
                Id: 1,
                EventName: 'Unexpected Client Meeting',
                EventDate: new Date(2024, 7, 11)
            },
            {
                Id: 2,
                EventName: 'System Outage',
                EventDate: new Date(2024, 7, 12)
            },
            {
                Id: 3,
                EventName: 'Last-Minute Task Assignment',
                EventDate: new Date(2024, 7, 13)
            },
            {
                Id: 4,
                EventName: 'Emergency Team Huddle',
                EventDate: new Date(2024, 7, 14)
            },
            {
                Id: 5,
                EventName: 'Server Downtime',
                EventDate: new Date(2024, 7, 15)
            },
            {
                Id: 6,
                EventName: 'Ad-Hoc Training Session',
                EventDate: new Date(2024, 7, 16)
            },
            {
                Id: 7,
                EventName: 'Urgent Bug Fix',
                EventDate: new Date(2024, 7, 17)
            },
            {
                Id: 8,
                EventName: 'Spontaneous Brainstorming Session',
                EventDate: new Date(2024, 7, 18)
            },
            {
                Id: 9,
                EventName: 'Unexpected Audit',
                EventDate: new Date(2024, 7, 19)
            },
            {
                Id: 10,
                EventName: 'Unscheduled Maintenance',
                EventDate: new Date(2024, 7, 20)
            }
        ];
        var options = { day: '2-digit', month: 'long', year: 'numeric' };
        var formattedEvents = data.map(function (event) {
            var formattedDate = event.EventDate.toLocaleDateString('en-GB', options);
            return {
                Id: event.Id,
                EventName: event.EventName,
                EventDate: formattedDate
            };
        });
        var grid = new ej2_grids_1.Grid({
            dataSource: formattedEvents,
            columns: [
                { field: 'EventName', headerText: 'Event', textAlign: 'Right', width: 120, type: 'string' },
                { field: 'EventDate', width: 140, headerText: 'Date', type: 'string' },
            ],
            allowPaging: true,
            pageSettings: { pageSize: 7 }
        });
        grid.appendTo(".title");
    };
});
