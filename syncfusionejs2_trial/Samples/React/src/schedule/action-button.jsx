import * as React from "react";
import './action-button.css';
import { ItemDirective, ItemsDirective, SidebarComponent, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { ScheduleComponent, Day, Week, Inject, ResourcesDirective, ResourceDirective, Resize, resetTime, ViewsDirective, ViewDirective, addDays } from '@syncfusion/ej2-react-schedule';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import * as dataSource from './datasource.json';
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ColorPickerComponent, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { extend, isNullOrUndefined, Browser } from "@syncfusion/ej2/base";
import { DropDownList } from "@syncfusion/ej2-react-dropdowns";
import { SampleBase } from "../common/sample-base";
export class ActionButton extends SampleBase {
    scheduleObj = React.createRef();
    calendarSidebarObj = React.createRef();
    colorPickerObj = React.createRef();
    calendarObj = React.createRef();
    calendarsListObj = React.createRef();
    dialogObj = React.createRef();
    toolbarObj = React.createRef();
    calendarNameObj = React.createRef();
    saveButtonRef = React.createRef();
    isAdd;
    calendars = [
        { name: "My Calendar", id: 1, color: "#c43081", isSelected: true },
        { name: "Company", id: 2, color: "#ff7f50", isSelected: true },
        { name: "Birthday", id: 3, color: "#AF27CD", isSelected: true },
        { name: "Holiday", id: 4, color: "#808000", isSelected: true }
    ];
    fields = { text: "name", value: "id" };
    currentDate = new Date();
    selectedCalendars;
    appointmentData;
    filteredData;
    eventSettings;
    resourceData = [
        { name: 'Nancy', id: 1, color: '#df5286' },
        { name: 'Steven', id: 2, color: '#7fa900' },
        { name: 'Robert', id: 3, color: '#ea7a57' },
        { name: 'Smith', id: 4, color: '#5978ee' },
        { name: 'Micheal', id: 5, color: '#df5286' },
        { name: 'Root', id: 6, color: '#00bdae' }
    ];
    constructor(props) {
        super(props);
        this.selectedCalendars = this.getSelectedCalendars();
        this.appointmentData = this.generateCalendarData();
        this.filteredData = this.getFilteredData();
        this.eventSettings = { dataSource: extend([], this.filteredData.planned, null, true) };
    }
    getSelectedCalendars() {
        const selectedIds = [];
        const selectedItems = [];
        for (const calendar of this.calendars) {
            if (calendar.isSelected) {
                selectedIds.push(calendar.id);
                selectedItems.push(calendar);
            }
        }
        return { ids: selectedIds, items: selectedItems };
    }
    generateCalendarData() {
        const collections = extend([], [...dataSource.personalData, ...dataSource.companyData, ...dataSource.birthdayData, ...dataSource.holidayData], null, true);
        const oldTime = new Date(2021, 3, 1).getTime();
        const newTime = resetTime(new Date()).getTime();
        for (const data of collections) {
            data.IsPlanned = !(data.Id % 2);
            data.IsAllDay = [1, 2].indexOf(data.CalendarId) <= -1;
            const diff = oldTime - new Date(data.StartTime).getTime();
            const hour = Math.floor(Math.random() * (13 - 9) + 9);
            data.StartTime = new Date(newTime - diff + (data.IsAllDay ? 0 : (hour * 60 * 60 * 1000)));
            data.EndTime = new Date(data.StartTime.getTime() + (data.IsAllDay ? 24 * 60 * 60 * 1000 : 60 * 60 * 1000));
            data.ResourceId = Math.floor(Math.random() * 6) + 1;
        }
        return collections;
    }
    getFilteredData() {
        const planned = [];
        for (const data of this.appointmentData) {
            if (this.selectedCalendars.ids.indexOf(data.CalendarId) > -1) {
                if (data.IsPlanned) {
                    planned.push(data);
                }
            }
        }
        return { planned };
    }
    onCalendarListChange = (args) => {
        if (args?.event?.target) {
            const target = args.event.target;
            if (target.classList.contains('e-edit')) {
                args.cancel = true;
                this.openDialog(args, 'Save');
            }
            else if (target.classList.contains('e-trash')) {
                args.cancel = true;
                this.removeCalendar(args);
            }
            else {
                this.calendarSelection(args);
            }
        }
        else {
            this.calendarSelection(args);
        }
    };
    openDialog = (args, action) => {
        if (this.calendarNameObj.current) {
            this.calendarNameObj.current.value = args.data.name;
            this.colorPickerObj.current.value = args.data.color;
            this.saveButtonRef.current.innerHTML = action;
            this.dialogObj.current.header = "Edit Calendar";
            this.dialogObj.current.show();
            this.saveButtonRef.current.onclick = () => {
                if (this.calendarNameObj.current) {
                    const newValue = this.calendarNameObj.current.value.trim();
                    const newColor = this.colorPickerObj.current.value.trim();
                    if (newValue.length > 0) {
                        this.calendars = this.calendars.map((item) => {
                            if (item.name === args.data.name) {
                                return { ...item, name: newValue, color: newColor };
                            }
                            return item;
                        });
                        this.selectedCalendars = this.getSelectedCalendars();
                        this.calendarsListObj.current.dataSource = extend([], this.calendars, null, true);
                        this.scheduleObj.current.refreshEvents();
                        this.dialogObj.current.hide();
                    }
                }
            };
        }
    };
    removeCalendar = (args) => {
        this.calendarsListObj.current.removeItem(args.item);
        this.calendars = this.calendars.filter((item) => item.id !== args.data.id);
        this.appointmentData = this.appointmentData.filter((item) => item.CalendarId !== args.data.id);
        this.selectedCalendars = this.getSelectedCalendars();
        this.filteredData = this.getFilteredData();
        this.scheduleObj.current.eventSettings.dataSource = extend([], this.filteredData.planned, null, true);
    };
    updateTextValue = () => {
        if (this.isAdd) {
            if (this.calendarNameObj.current) {
                let newValue = this.calendarNameObj.current.value.trim();
                newValue = newValue === "" ? "New Calendar" : newValue;
                const newId = (this.calendars.length + 1);
                const newItem = { name: newValue, id: newId, color: this.colorPickerObj.current.value, isSelected: true };
                this.calendars.push(newItem);
                this.selectedCalendars = this.getSelectedCalendars();
                this.calendarsListObj.current.dataSource = extend([], this.calendars, null, true);
                this.dialogObj.current.hide();
            }
            this.isAdd = false;
        }
    };
    onListActionComplete = () => {
        setTimeout(() => {
            if (this.calendarsListObj.current) {
                const iconAdd = this.calendarsListObj.current.element.querySelector(".e-plus");
                this.applyBackgroundColors();
                if (iconAdd) {
                    iconAdd.addEventListener("click", () => {
                        this.isAdd = true;
                        this.calendarNameObj.current.value = '';
                        this.colorPickerObj.current.value = "#008000ff";
                        this.saveButtonRef.current.innerHTML = "Add";
                        this.dialogObj.current.show();
                    });
                }
            }
        }, 200);
    };
    calendarSelection = (args) => {
        const idFromArgs = Number(args.data.id);
        this.calendars[args.index].isSelected = args.isChecked;
        this.selectedCalendars = this.getSelectedCalendars();
        if (args.isChecked) {
            this.changeCheckboxBackgroundColor(idFromArgs);
        }
        this.filteredData = this.getFilteredData();
        this.scheduleObj.current.eventSettings.dataSource = extend([], this.filteredData.planned, null, true);
    };
    applyBackgroundColors = () => {
        this.calendars.forEach((calendar) => {
            const listItem = this.calendarsListObj.current.element.querySelector(`[data-uid="${calendar.id}"]`);
            if (listItem) {
                const checkboxFrame = listItem.querySelector(`.e-checkbox-wrapper .e-frame.e-check,
                    .e-css.e-checkbox-wrapper .e-frame.e-check,.e-checkbox-wrapper .e-frame,.e-css.e-checkbox-wrapper .e-frame`);
                if (checkboxFrame) {
                    checkboxFrame.style.backgroundColor = calendar.color;
                    checkboxFrame.style.borderColor = calendar.color;
                }
            }
        });
    };
    changeCheckboxBackgroundColor = (idFromArgs) => {
        const listItem = document.querySelector(`[data-uid="${idFromArgs}"]`);
        if (listItem) {
            const checkboxFrame = listItem.querySelector('.e-checkbox-wrapper .e-frame.e-check');
            const selectedItem = this.calendars.find((item) => item.id === idFromArgs);
            if (checkboxFrame && selectedItem?.color) {
                checkboxFrame.style.backgroundColor = selectedItem.color;
                checkboxFrame.style.borderColor = selectedItem.color;
            }
        }
    };
    onToolbarItemClicked = (args) => {
        if (!args.item) {
            return;
        }
        switch (args.item.cssClass) {
            case 'e-menu-btn':
                this.calendarSidebarObj.current.toggle();
                break;
            case 'e-create':
                if (this.scheduleObj && this.calendars.length > 0) {
                    const data = {
                        StartTime: resetTime(new Date()),
                        EndTime: resetTime(addDays(new Date(), 1)),
                        ResourceId: this.selectedCalendars?.ids[0] || this.calendars[0]?.id
                    };
                    this.scheduleObj.current.openEditor(data, 'Add', true);
                }
                break;
            case 'e-previous':
                this.scheduleObj.current.changeDate(this.scheduleObj.current.activeView.getNextPreviousDate('Previous'));
                break;
            case 'e-next':
                this.scheduleObj.current.changeDate(this.scheduleObj.current.activeView.getNextPreviousDate('Next'));
                break;
            case 'e-today':
                this.scheduleObj.current.selectedDate = new Date();
                break;
            case 'e-day':
                this.scheduleObj.current.currentView = 'Day';
                break;
            case 'e-week':
                this.scheduleObj.current.currentView = 'Week';
                break;
            default:
                break;
        }
    };
    onScheduleActionComplete = (args) => {
        if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
            this.updateDateRange();
            if (args.requestType === 'dateNavigate' && resetTime(this.calendarObj.current?.value) !== resetTime(this.scheduleObj.current.selectedDate)) {
                this.calendarObj.current.value = this.scheduleObj.current.selectedDate;
            }
        }
        else if (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved") {
            for (const event of args.addedRecords) {
                event.IsPlanned = true;
                this.appointmentData.push(event);
            }
            for (const event of args.changedRecords) {
                const index = this.appointmentData.findIndex((item) => item.Id === event.Id);
                this.appointmentData[index] = event;
            }
            for (const event of args.deletedRecords) {
                const index = this.appointmentData.findIndex((item) => item.Id === event.Id);
                this.appointmentData.splice(index, 1);
            }
            const events = args.addedRecords.concat(args.changedRecords);
            for (const event of events) {
                let calendar = this.selectedCalendars.items.find((item) => item.id === event.CalendarId);
                if (isNullOrUndefined(calendar)) {
                    calendar = this.calendars.find((item) => item.id === event.CalendarId);
                    calendar.isSelected = true;
                    this.selectedCalendars = this.getSelectedCalendars();
                    this.filteredData = this.getFilteredData();
                    this.calendarsListObj.current.dataSource = extend([], this.calendars, null, true);
                    this.scheduleObj.current.eventSettings.dataSource = extend([], this.filteredData.planned, null, true);
                }
            }
        }
    };
    updateDateRange = () => {
        let dateRange = '';
        if (this.scheduleObj.current) {
            const dateCollection = this.scheduleObj.current.getCurrentViewDates();
            dateRange = this.scheduleObj.current.getDateRangeText(dateCollection);
            if (dateRange !== '' && this.toolbarObj) {
                const dateRangeElement = this.toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn-text');
                this.toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn').setAttribute('aria-label', dateRange);
                dateRangeElement.textContent = dateRange;
            }
        }
    };
    valueChange = (args) => {
        if (args?.isInteracted && this.scheduleObj) {
            this.scheduleObj.current.selectedDate = args.value;
        }
    };
    listTemplate = (data) => {
        return (<div className="calendar-list-item">
                <div className="calendar-name" title={data.name}>
                    {data.name}
                </div>
                {data.id !== 1 && (<div className="calendar-buttons">
                        <span id="calendar-edit-btn" className="e-icons e-edit" data-calendar-id={data.id}></span>
                        <span id="calendar-delete-btn" className="e-icons e-trash" data-calendar-id={data.id}></span>
                    </div>)}
            </div>);
    };
    listHeaderTemplate = () => {
        return (<div className="calendars-list-header">
                <div className="header-text">Calendars</div>
                <div className="header-icon e-icons e-plus"></div>
            </div>);
    };
    schedulePopupClose = (args) => {
        if (args.type === "Editor" && args.element) {
            args.element.classList.remove('action-event-dialog');
        }
    };
    schedulePopupOpen = (args) => {
        if (args.type === "Editor") {
            if (args.type === 'Editor' && args.element) {
                args.element.classList.add('action-event-dialog');
            }
            if (!args.element.querySelector(".custom-field-row")) {
                const row = document.createElement('div');
                row.className = 'custom-field-row';
                const formElement = args.element.querySelector(".e-schedule-form");
                formElement.firstChild.insertBefore(row, args.element.querySelector(".e-resources-row"));
                const container = document.createElement('div');
                container.className = 'custom-field-container';
                const inputEle = document.createElement('input');
                inputEle.className = 'e-field';
                inputEle.name = 'CalendarId';
                container.appendChild(inputEle);
                row.appendChild(container);
                const dropDownList = new DropDownList({
                    dataSource: extend([], this.calendars, null, true),
                    cssClass: "calendar-ddl",
                    fields: { text: "name", value: "id" },
                    value: args.data?.CalendarId || this.selectedCalendars?.ids[0] || this.calendars[0]?.id,
                    floatLabelType: "Always", placeholder: "Calendar"
                });
                dropDownList.appendTo(inputEle);
                inputEle.setAttribute("name", "CalendarId");
            }
            else {
                const calendarDDL = args.element.querySelector(".calendar-ddl input").ej2_instances[0];
                calendarDDL.dataSource = extend([], this.calendars, null, true);
                calendarDDL.value = args.data?.CalendarId || this.selectedCalendars?.ids[0] || this.calendars[0]?.id;
            }
        }
        else if (args.type === "QuickInfo" && isNullOrUndefined(args.data.Id)) {
            args.cancel = true;
        }
    };
    eventRendered = (args) => {
        const categoryColor = this.selectedCalendars.items[this.selectedCalendars.ids.indexOf(args.data.CalendarId)].color;
        if (!args.element || !categoryColor) {
            return;
        }
        args.element.style.backgroundColor = categoryColor;
    };
    dialogContent = () => {
        return (<div className="dialogContent">
                <div>Calendar Name</div><div className="dialog-content"><TextBoxComponent ref={this.calendarNameObj} id="text-box" placeholder="Enter the calender name"/><ColorPickerComponent ref={this.colorPickerObj} id="color-picker"/></div>
            </div>);
    };
    dialogFooterTemplate = () => {
        return (<button id="saveButton" ref={this.saveButtonRef} className="e-control e-btn e-primary" data-ripple="true" onClick={this.updateTextValue}></button>);
    };
    isAllDayEvent = (props) => {
        if (props?.IsAllDay === true)
            return true;
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        const endMidnight = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        const diffDays = Math.round((endMidnight.getTime() - startMidnight.getTime()) / (1000 * 60 * 60 * 24));
        return diffDays >= 1 &&
            start.getHours() === 0 &&
            start.getMinutes() === 0 &&
            (end.getHours() === 0 || (end.getHours() === 23 && end.getMinutes() === 59));
    };
    cloneEvent = (event) => JSON.parse(JSON.stringify(event));
    isShortEvent = (props, isAllDay) => {
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        const diffMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
        return diffMinutes <= 45 || isAllDay;
    };
    isSpannedEvent = (props) => {
        if (!this.scheduleObj.current)
            return false;
        const viewDates = this.scheduleObj.current.getCurrentViewDates();
        if (!viewDates || viewDates.length === 0)
            return false;
        const viewStart = new Date(viewDates[0]);
        const viewEnd = new Date(viewDates[viewDates.length - 1]);
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        const nextDay = new Date(viewEnd.getFullYear(), viewEnd.getMonth(), viewEnd.getDate() + 1);
        return start < viewStart || end > nextDay;
    };
    getActionButtonStyle = (isAllDay = false) => ({
        position: 'absolute',
        top: isAllDay ? '0px' : '6px',
        ...(this.scheduleObj.current.enableRtl
            ? { left: '6px' }
            : { right: '6px' }),
        display: 'flex',
        gap: '4px',
    });
    dayEventTemplate = (props) => {
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        const startTimeStr = start.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        const endTimeStr = end.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        const handleEdit = (e) => {
            e.stopPropagation();
            if (this.scheduleObj.current) {
                this.scheduleObj.current.openEditor(this.cloneEvent(props), 'Save');
            }
        };
        const handleDelete = (e) => {
            e.stopPropagation();
            if (this.scheduleObj.current) {
                this.scheduleObj.current.deleteEvent(props.Id);
            }
        };
        const isAllDay = this.isAllDayEvent(props);
        const isSpanned = this.isSpannedEvent(props);
        const showOnlyText = isAllDay || isSpanned;
        const showIcons = !isSpanned;
        return (<div>
                <div>
                    <div>{props.Subject}</div>
                    {!showOnlyText && (<div>
                            {startTimeStr} - {endTimeStr}
                        </div>)}
                </div>

                {showIcons && (<div style={this.getActionButtonStyle(isAllDay)}>
                        <div className="e-icons e-edit" onClick={handleEdit} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Edit"/>
                        <div className="e-icons e-trash" onClick={handleDelete} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Delete"/>
                    </div>)}
            </div>);
    };
    weekEventTemplate = (props) => {
        const start = new Date(props.StartTime);
        const startTimeStr = start.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        const handleEdit = (e) => {
            e.stopPropagation();
            if (this.scheduleObj.current) {
                this.scheduleObj.current.openEditor(this.cloneEvent(props), 'Save');
            }
        };
        const handleDelete = (e) => {
            e.stopPropagation();
            if (this.scheduleObj.current) {
                this.scheduleObj.current.deleteEvent(props.Id);
            }
        };
        const isAllDay = this.isAllDayEvent(props);
        const shortEvent = this.isShortEvent(props, isAllDay);
        const isSpanned = this.isSpannedEvent(props);
        const showOnlyText = isAllDay || isSpanned;
        const showIcons = !isSpanned;
        return (<div>
                {!shortEvent && (<div>
                        <div style={{
                    fontWeight: '600',
                    fontSize: '13.2px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                            {props.Subject}
                        </div>

                        {!showOnlyText && (<div>
                            {startTimeStr}
                        </div>)}

                    </div>)}

                {shortEvent ? ((showIcons && <div style={this.getActionButtonStyle(isAllDay)}>
                        <div className="e-icons e-edit" onClick={handleEdit} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Edit"/>
                        <div className="e-icons e-trash" onClick={handleDelete} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Delete"/>
                    </div>)) : ((showIcons && <div style={{
                    display: 'flex',
                    gap: '6px',
                    marginTop: 'auto',
                    paddingTop: '6px',
                }}>
                        <div className="e-icons e-edit" onClick={handleEdit} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Edit"/>
                        <div className="e-icons e-trash" onClick={handleDelete} style={{
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '4px',
                    cursor: 'pointer',
                }} title="Delete"/>
                    </div>))}
            </div>);
    };
    render() {
        return (<div id="event-calendar-sample" className="control-section event-calendar-control-section">
                <div className="control-wrapper">
                    <div>
                        <ToolbarComponent ref={this.toolbarObj} id='toolbar' clicked={this.onToolbarItemClicked} cssClass="event-calendar-toolbar" style={{ border: '1px solid #e5e5e5', marginBottom: '8px' }}>
                            <ItemsDirective>
                                <ItemDirective tooltipText="Menu" prefixIcon="e-menu" cssClass='e-menu-btn'/>
                                <ItemDirective prefixIcon="e-chevron-left" tooltipText='Previous Week' cssClass='e-previous'/>
                                <ItemDirective prefixIcon="e-chevron-right" tooltipText='Next Week' cssClass='e-next'/>
                                <ItemDirective text={new Date().toLocaleDateString()} cssClass='e-date-range'/>
                                <ItemDirective text="Create" align='Right' prefixIcon="e-plus" cssClass='e-create' visible={!Browser.isDevice}/>
                                <ItemDirective type='Separator' align='Right' visible={!Browser.isDevice}/>
                                <ItemDirective text='Today' align='Right' cssClass='e-today' visible={!Browser.isDevice}/>
                                <ItemDirective type='Separator' align='Right' visible={!Browser.isDevice}/>
                                <ItemDirective text='Day' align='Right' cssClass='e-day' visible={!Browser.isDevice}/>
                                <ItemDirective text='Week' align='Right' cssClass='e-week' visible={!Browser.isDevice}/>
                            </ItemsDirective>
                        </ToolbarComponent>
                    </div>
                    <div className="leftside">
                    </div>
                    <SidebarComponent id="sidebar-left" className="sidebar-treeview" ref={this.calendarSidebarObj} width={'255px'} height={'550px'} target={'.main-content'} mediaQuery={'(min-width: 600px)'} isOpen={true}>
                        <div className="table-content">
                            <CalendarComponent ref={this.calendarObj} id="calendar" value={this.currentDate} change={this.valueChange} cssClass='selected-date-calendar'/>
                            <div className="calendar-list-container">
                                <ListViewComponent ref={this.calendarsListObj} id='listview-def' dataSource={this.calendars} showCheckBox={true} fields={{ id: 'id', text: 'name', isChecked: 'isSelected' }} showHeader={true} headerTemplate={this.listHeaderTemplate} template={this.listTemplate} select={this.onCalendarListChange} actionComplete={this.onListActionComplete}></ListViewComponent>
                            </div>
                        </div>
                    </SidebarComponent>
                    <div className="main-content" id="main-text">
                        <div className="sidebar-content">
                            <div className="schedule-container">
                                <ScheduleComponent id="Schedule" ref={this.scheduleObj} height='550px' selectedDate={this.currentDate} currentView={Browser.isDevice ? 'Day' : 'Week'} showHeaderBar={false} eventSettings={this.eventSettings} eventRendered={this.eventRendered} popupClose={this.schedulePopupClose.bind(this)} popupOpen={this.schedulePopupOpen} created={this.updateDateRange} allowDragAndDrop={false} actionComplete={this.onScheduleActionComplete}>
                                    <ResourcesDirective>
                                        <ResourceDirective field='ResourceId' title='Resources' name='Resources' dataSource={this.resourceData} textField='name' idField='id' colorField='color'/>
                                    </ResourcesDirective>
                                    <ViewsDirective>
                                        <ViewDirective option='Day' eventTemplate={this.dayEventTemplate} allowOverlap={false}/>
                                        {!Browser.isDevice && (<ViewDirective option='Week' eventTemplate={this.weekEventTemplate} allowOverlap={false}/>)}
                                    </ViewsDirective>
                                    <Inject services={[Day, Week, Resize]}/>
                                </ScheduleComponent>
                            </div>
                        </div>
                    </div>
                    <DialogComponent ref={this.dialogObj} id='dialog' className='calendar-edit-dialog' header={"New Calender"} width={'320px'} content={this.dialogContent} footerTemplate={this.dialogFooterTemplate} showCloseIcon={true} isModal={true} animationSettings={{ effect: 'Zoom' }} visible={false}> </DialogComponent>
                </div>
                <div id="action-description">
                    <p>This demo showcases the event action buttons for editing and deleting events in day and week views. Click the edit or delete icons to manage your events.</p>
                </div>

                <div id="description">
                    <p>
                        In this demo, we have implemented custom event templates with action buttons for each event displayed in the scheduler.
                        The action buttons allow users to edit or delete events directly from the event cells.
                    </p>
                    <p>
                        The events are displayed with different time durations and the action buttons are positioned intelligently based on event duration:
                    </p>
                    <ul>
                        <li>For short events (≤45 minutes), the action buttons are displayed in the top-right corner.</li>
                        <li>For longer events, the action buttons are displayed at the bottom of the event.</li>
                        <li>Click the edit icon to open the event editor dialog.</li>
                        <li>Click the delete icon to remove the event from the schedule.</li>
                    </ul>
                    <p>
                        Use the toolbar to switch between day and week views and the sidebar to navigate dates and filter calendars.
                    </p>
                </div>
            </div>);
    }
}
export default ActionButton;
