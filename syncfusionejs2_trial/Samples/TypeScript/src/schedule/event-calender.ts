import { loadCultureFiles } from '../common/culture-loader';
import { Schedule, Day, Week, TimelineMonth, Agenda, DragAndDrop, Month, Year } from '@syncfusion/ej2-schedule';
import { Sidebar } from '@syncfusion/ej2-navigations';
import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';
import { enableRipple } from '@syncfusion/ej2-base';
import { ClickEventArgs, Toolbar } from '@syncfusion/ej2-navigations';
import { Button } from '@syncfusion/ej2/buttons';
import { ColorPicker, ColorPickerEventArgs, TextArea, TextBox } from '@syncfusion/ej2/inputs';
import { Dialog } from '@syncfusion/ej2/popups';
import { Message } from '@syncfusion/ej2/notifications';
import { MouseEventArgs } from '@syncfusion/ej2/base';
import { ListView } from '@syncfusion/ej2-lists';
import { Predicate, Query } from '@syncfusion/ej2/data';
import { Grid } from '@syncfusion/ej2-grids';
import { templateAnimate } from '@syncfusion/ej2/charts';
import { ShowHide } from '@syncfusion/ej2/spreadsheet';
import { checkBoxProperty } from '@syncfusion/ej2/documenteditor';
import { RenderDayCellEventArgs } from '@syncfusion/ej2/calendars';

enableRipple(true);


Schedule.Inject(Week, Day, Month, Year, TimelineMonth, Agenda, DragAndDrop);


/**
 * Schedule Calender sample
 */


(window as any).default = (): void => {
    loadCultureFiles();

    let toolbarObj: Toolbar = new Toolbar({
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


    let toolBarEvents: Toolbar = new Toolbar({
        clicked: sideBarClicked,
        items: [
            { prefixIcon: "e-icons e-exit-full-screen", tooltipText: 'Open/Close-SideBar' },
            { template: '<h4 id="headerText">Unplanned Events</h4>' }
        ]
    });

    toolBarEvents.appendTo('.events');

    let sidebarMenu: Sidebar = new Sidebar({
        width: '290px',
        target: '.main-content',
        mediaQuery: '(min-width: 600px)',
        isOpen: true
    });
    sidebarMenu.appendTo('#sideTree');

    let rightSidebar: Sidebar = new Sidebar({
        width: "290px",
        target: '.main-content',
        position: 'Right',
        type: 'Over',
        isOpen: false,
        // enableDock: true,
        // dockSize: '50px',
    });
    rightSidebar.appendTo('#rightSidebar');


    let flatData: { [key: string]: Object }[] = [
        { name: 'Meeting', id: 1, CalendarColor: '#ea7a57' },
        { name: 'Holiday', id: 2, CalendarColor: '#df5286' },
        { name: 'Customer meet', id: 3, CalendarColor: '#865fcf' },
    ];


    let calendarObject: Calendar = new Calendar({
        start: "Month",
        value: new Date(),
       // renderDayCell: highlightDate,
        change: valueChange
    });
    calendarObject.appendTo('#Calendar');


    // function highlightDate(args: RenderDayCellEventArgs): void {
    //     if (args.date.getDay() === 0 || args.date.getDay() === 6) {
    //         // To highlight the week end of every month
    //         args.element.classList.add('e-highlightweekend');
    //     }
    // }

    let icontemp: string = '<button id="saveButton" class="e-control e-btn e-primary" data-ripple="true">Save</button>';
    let saveButton: Button = new Button();

    let dialog = new Dialog({
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

    let outlineTextBox: TextBox = new TextBox({
        placeholder: 'Enter the calendar name',
        cssClass: 'e-outline',
        floatLabelType: 'Auto',
    });
    outlineTextBox.appendTo('#text-box');

    let outlineTextArea: TextArea = new TextArea({
        placeholder: 'Description',
        cssClass: 'e-outline',
        floatLabelType: 'Auto'
    });
    outlineTextArea.appendTo('#text-area');

    let colorPicker: ColorPicker = new ColorPicker({
        change: (args: ColorPickerEventArgs): void => {
        }
    }, '#color-picker');



    function updateTextValue(): void {
        if (isAdd) {
            const colorPickers = document.getElementById('color-picker') as any;
            let enteredVal: HTMLInputElement = document.getElementById('text-box') as HTMLInputElement;
            if (enteredVal) {
                const newValue = enteredVal.value.trim();

                if (newValue.length > 0) {
                    const newId = (flatData.length + 1);
                    const newItem = { name: newValue, id: newId, CalendarColor: colorPickers.ej2_instances[0].value };
                    listObj.addItem([newItem]);
                    console.log(listObj.dataSource);
                    onComplete();
                    enteredVal.value = '';
                    dialog.hide();
                    console.log('Item saved:', newItem);
                    console.log('Updated flatData:', flatData);
                    let length = flatData.length;
                    scheduleObj.addResource(newItem, 'Owners', length - 1);
                    scheduleObj.dataBind();
                } else {
                    let msgObj: Message = new Message({
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



    let listObj: ListView = new ListView({
        dataSource: flatData,
        template: "<div class='list'>${name}<span id='listButtons' class='e-icons e-redaction'></span><span id='listButtons' class='e-icons e-close'></span></div>",
        headerTemplate: '<div class="headerContainer"><span class="calendarHeader">Calendar</span><button class="e-icons e-plus" id="add"></button></div>',
        showCheckBox: true,
        showHeader: true,
        actionComplete: onComplete,
        select: onchange,

    });
    listObj.appendTo('#listview-def');


    let newDataSource: EventData[] = [];

    function onchange(args: any) {

        const idFromArgs = Number(args.data.id);
        if (args.isChecked) {

            console.log('id is: ' + idFromArgs);

            const matchingEvents = resourceSampleData.filter(event => event.OwnerId === idFromArgs);

            if (matchingEvents.length > 0) {
                console.log('Matching events found:', matchingEvents);

                matchingEvents.forEach(event => {
                    const alreadyExists = newDataSource.some(existingEvent => existingEvent.Id === event.Id);
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
            newDataSource = newDataSource.filter(event => event.OwnerId !== idFromArgs);
            scheduleObj.eventSettings.dataSource = newDataSource;
            scheduleObj.refreshEvents();
            console.log('Updated new data source after removal:', newDataSource);
        }

    }

    let isEdit: boolean;
    let isAdd: boolean;

    function onComplete() {

        let iconDel: HTMLCollection = document.getElementsByClassName("e-close");
        let iconAdd: HTMLCollection = document.getElementsByClassName("e-plus");
        let iconEdit: HTMLCollection = document.getElementsByClassName("e-redaction");


        if (iconDel) {
            //Event handler to bind the click event for delete icon
            Array.prototype.forEach.call(iconDel, (element: HTMLElement) => {
                element.addEventListener("click", deleteItem.bind(this));
            });
        }

        if (iconAdd) {
            Array.prototype.forEach.call(iconAdd, (element: HTMLElement) => {
                element.addEventListener("click", () => {
                    isAdd = true;
                    // console.log('add clicked');
                    const inputElement = document.getElementById('text-box') as HTMLInputElement;
                    inputElement.value = '';
                    dialog.show();
                    let send = document.getElementById('saveButton');
                    if (send != null) {
                        send.onclick = (): void => {
                            updateTextValue();
                            const newEvents = generateRandomEvents(resourceSampleData, 5);
                            resourceSampleData.push(...newEvents);
                            console.log('New Events:', newEvents);
                            console.log('Updated resourceSampleData:', JSON.stringify(resourceSampleData, null, 2));
                        };
                    }
                });
            });
        }

        if (iconEdit) {
            Array.prototype.forEach.call(iconEdit, (element: HTMLElement) => {
                isEdit = true;
                element.addEventListener("click", showValue.bind(this));
            });
        }
    }

    //Method to delete the list item
    function deleteItem(args: MouseEventArgs) {
        args.stopPropagation();
        const target = args.target as HTMLElement;
        const parent = target.parentElement;
        if (parent && parent.parentElement) {
            let removeItem: HTMLElement = parent.parentElement;
            listObj.removeItem(removeItem);
        }
        scheduleObj.refreshEvents();
        target.removeEventListener("click", deleteItem.bind(this));
        onComplete();
    }

    function generateRandomEvents(existingEvents: EventData[], count: number): EventData[] {
        const maxOwnerId = existingEvents.reduce((max, event) => Math.max(max, event.OwnerId), 0);
        const ownerIdToUse = maxOwnerId + 1;

        const subjects = [
            "Product Overview",
            "Market Analysis",
            "Target Audience",
            "Launch Strategy",
            "Marketing Campaigns",
            "Product Demo",
            "Q & A Session with the Development Team"
        ];

        const newEvents: EventData[] = [];

        for (let i = 0; i < count; i++) {
            const randomDay = Math.floor(Math.random() * 28) + 1;
            const startHour = Math.floor(Math.random() * 8) + 9;
            const endHour = startHour + 2;
            const startDate = `2024-08-${formatNumberWithLeadingZeros(randomDay, 2)}T${formatNumberWithLeadingZeros(startHour, 2)}:30:00.000Z`;
            const endDate = `2024-08-${formatNumberWithLeadingZeros(randomDay, 2)}T${formatNumberWithLeadingZeros(endHour, 2)}:00:00.000Z`;

            const newEvent: EventData = {
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

    function formatNumberWithLeadingZeros(num: number, length: number): string {
        let str = num.toString();
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    }

    function showValue(e: Event): void {
        if (isEdit) {
            const target = e.target as HTMLElement;

            let parentDiv = target.closest('.list') as HTMLElement;

            if (parentDiv) {
                const textContent = parentDiv.textContent?.trim() || '';
                //const parentId = parentDiv.id;

                const inputElement = document.getElementById('text-box') as HTMLInputElement;
                if (inputElement) {
                    inputElement.value = textContent;
                    dialog.show();
                    let send = document.getElementById('saveButton');
                    if (send != null) {
                        send.onclick = (): void => {
                            let enteredVal: HTMLInputElement = document.getElementById('text-box') as HTMLInputElement;
                            if (enteredVal) {
                                const newValue = enteredVal.value.trim();
                                if (newValue.length > 0) {
                                    flatData = flatData.map((item) => {
                                        if (item.name === textContent) {
                                            return { ...item, name: newValue };
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
            dialog.removeEventListener('click', function (e: Event) {
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


    interface EventData {
        Id: number;
        Subject: string;
        StartTime: string;
        EndTime: string;
        OwnerId: number;
    }

    let resourceSampleData: EventData[] =
        [
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
        ]


    let scheduleObj: Schedule = new Schedule({
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



    let header = document.getElementById('headerText');
    let open = document.getElementById('plannedOpen');

    if(open){
        open.onclick = (args)  =>{
            rightSidebar.show();
        }
    }

    function sideBarClicked(args: ClickEventArgs): void {
        if (args.item.tooltipText === 'Open/Close-SideBar') {
            let open = document.getElementById('rightSidebar')?.classList.contains('e-close');
            
            if (open) {
                rightSidebar.show();
            }
            else {
                rightSidebar.hide();
                
            }
        }
    }

    const dateElement = document.getElementById('date');
    let counter = 0;
    resetDate();

    function resetDate() {
        counter = 0;
        dateUpdate();
    }

    function ToolbarCliked(args: ClickEventArgs): void {
        if (args.item.tooltipText === 'Menu') {
            sidebarMenu.toggle();
        }
        else if (args.item.text === 'Today') {
            const currentDate = new Date();
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




    function next(increment: number): Date {
        counter += increment;
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + counter);
        scheduleObj.changeDate(currentDate);
        calendarObject.values.push(currentDate);
        if (dateElement) {
            dateElement.textContent = formatDate(currentDate);
        }
        return currentDate;
    }

    function previous(decrement: number): Date {
        counter -= decrement;
        let currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + counter);
        scheduleObj.changeDate(currentDate);
        if (dateElement) {
            dateElement.textContent = formatDate(currentDate);
        }
        return currentDate;
    }

    function formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('en-GB', options);
    }

    function dateUpdate() {
        const dateElement = document.getElementById('date');
        if (dateElement) {
            const today = new Date();
            const formattedToday = formatDate(today);
            dateElement.textContent = formattedToday;
        }
    }

    function valueChange(args: { value: Date }): void {
        const dateElement = document.getElementById('date');
        scheduleObj.selectedDate = args.value;

        if (dateElement) {
            const selectedDate = args.value || new Date();
            const formattedDate = formatDate(selectedDate);
            dateElement.textContent = formattedDate;
        }
    }

    let data = [
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


    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' };

    const formattedEvents = data.map(event => {
        const formattedDate = event.EventDate.toLocaleDateString('en-GB', options);
        return {
            Id: event.Id,
            EventName: event.EventName,
            EventDate: formattedDate
        };
    });
    let grid: Grid = new Grid({
        dataSource: formattedEvents,
        columns: [
            { field: 'EventName', headerText: 'Event', textAlign: 'Right', width: 120, type: 'string' },
            { field: 'EventDate', width: 140, headerText: 'Date', type: 'string' },
        ],
        allowPaging: true,
        pageSettings: { pageSize: 7 }
    });
    grid.appendTo(".title")


};
