import * as React from "react";
import { useEffect } from 'react';
import { updateSampleSection } from '../common/sample-base';
import './action-button.css';
import { ItemDirective, ItemsDirective, SidebarComponent, ToolbarComponent } from '@syncfusion/ej2-react-navigations';
import { ScheduleComponent, Day, Week, Inject, ResourcesDirective, ResourceDirective, Resize, resetTime, ViewsDirective, ViewDirective, addDays } from '@syncfusion/ej2-react-schedule';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import { useRef, useState } from "react";
import * as dataSource from './datasource.json';
import { DialogComponent } from "@syncfusion/ej2-react-popups";
import { ColorPickerComponent, TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { extend, isNullOrUndefined, Browser } from "@syncfusion/ej2/base";
import { DropDownList } from "@syncfusion/ej2-react-dropdowns";
const ActionButton = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const scheduleObj = useRef(null);
    const calendarSidebarObj = useRef(null);
    const colorPickerObj = useRef(null);
    const calendarObj = useRef(null);
    const calendarsListObj = useRef(null);
    const dialogObj = useRef(null);
    const toolbarObj = useRef(null);
    const calendarNameObj = useRef(null);
    let [currentDate] = useState(new Date());
    const saveButtonRef = useRef(null);
    let isAdd;
    let calendars = [
        { name: "My Calendar", id: 1, color: "#c43081", isSelected: true },
        { name: "Company", id: 2, color: "#ff7f50", isSelected: true },
        { name: "Birthday", id: 3, color: "#AF27CD", isSelected: true },
        { name: "Holiday", id: 4, color: "#808000", isSelected: true }
    ];
    let fields = { text: "name", value: "id" };
    let selectedCalendars = getSelectedCalendars();
    let appointmentData = generateCalendarData();
    let filteredData = getFilteredData();
    const eventSettings = { dataSource: extend([], filteredData.planned, null, true) };
    const resourceData = [
        { name: 'Nancy', id: 1, color: '#df5286' },
        { name: 'Steven', id: 2, color: '#7fa900' },
        { name: 'Robert', id: 3, color: '#ea7a57' },
        { name: 'Smith', id: 4, color: '#5978ee' },
        { name: 'Micheal', id: 5, color: '#df5286' },
        { name: 'Root', id: 6, color: '#00bdae' }
    ];
    function getSelectedCalendars() {
        const selectedIds = [];
        const selectedItems = [];
        for (let calendar of calendars) {
            if (calendar.isSelected) {
                selectedIds.push(calendar.id);
                selectedItems.push(calendar);
            }
        }
        return { ids: selectedIds, items: selectedItems };
    }
    ;
    function generateCalendarData() {
        let collections = extend([], [...dataSource.personalData, ...dataSource.companyData, ...dataSource.birthdayData, ...dataSource.holidayData], null, true);
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
    ;
    function getFilteredData() {
        const planned = [];
        for (const data of appointmentData) {
            if (selectedCalendars.ids.indexOf(data.CalendarId) > -1) {
                if (data.IsPlanned) {
                    planned.push(data);
                }
            }
        }
        return { planned: planned };
    }
    ;
    const onCalendarListChange = (args) => {
        if (args?.event?.target) {
            const target = args.event.target;
            if (target.classList.contains('e-edit')) {
                args.cancel = true;
                openDialog(args, 'Save');
            }
            else if (target.classList.contains('e-trash')) {
                args.cancel = true;
                removeCalendar(args);
            }
            else {
                calendarSelection(args);
            }
        }
        else {
            calendarSelection(args);
        }
    };
    const openDialog = (args, action) => {
        if (calendarNameObj) {
            calendarNameObj.current.value = args.data.name;
            colorPickerObj.current.value = args.data.color;
            saveButtonRef.current.innerHTML = action;
            dialogObj.current.header = "Edit Calendar";
            dialogObj.current.show();
            saveButtonRef.current.onclick = () => {
                if (calendarNameObj) {
                    const newValue = calendarNameObj.current.value.trim();
                    const newColor = colorPickerObj.current.value.trim();
                    if (newValue.length > 0) {
                        calendars = calendars.map((item) => {
                            if (item.name === args.data.name) {
                                return { ...item, name: newValue, color: newColor };
                            }
                            return item;
                        });
                        selectedCalendars = getSelectedCalendars();
                        calendarsListObj.current.dataSource = extend([], calendars, null, true);
                        scheduleObj.current.refreshEvents();
                        dialogObj.current.hide();
                    }
                }
            };
        }
    };
    const removeCalendar = (args) => {
        calendarsListObj.current.removeItem(args.item);
        calendars = calendars.filter((item) => item.id !== args.data.id);
        appointmentData = appointmentData.filter((item) => item.CalendarId !== args.data.id);
        selectedCalendars = getSelectedCalendars();
        filteredData = getFilteredData();
        scheduleObj.current.eventSettings.dataSource = extend([], filteredData.planned, null, true);
    };
    const updateTextValue = () => {
        if (isAdd) {
            if (calendarNameObj) {
                let newValue = calendarNameObj.current.value.trim();
                newValue = newValue === "" ? "New Calendar" : newValue;
                const newId = (calendars.length + 1);
                const newItem = { name: newValue, id: newId, color: colorPickerObj.current.value, isSelected: true };
                calendars.push(newItem);
                selectedCalendars = getSelectedCalendars();
                calendarsListObj.current.dataSource = extend([], calendars, null, true);
                dialogObj.current.hide();
            }
            isAdd = false;
        }
    };
    const onListActionComplete = () => {
        setTimeout(() => {
            if (calendarsListObj.current) {
                let iconAdd = calendarsListObj.current.element.querySelector(".e-plus");
                applyBackgroundColors();
                if (iconAdd) {
                    iconAdd.addEventListener("click", () => {
                        isAdd = true;
                        calendarNameObj.current.value = '';
                        colorPickerObj.current.value = "#008000ff";
                        saveButtonRef.current.innerHTML = "Add";
                        dialogObj.current.show();
                    });
                }
            }
        }, 200);
    };
    const calendarSelection = (args) => {
        const idFromArgs = Number(args.data.id);
        calendars[args.index].isSelected = args.isChecked;
        selectedCalendars = getSelectedCalendars();
        if (args.isChecked) {
            changeCheckboxBackgroundColor(idFromArgs);
        }
        filteredData = getFilteredData();
        scheduleObj.current.eventSettings.dataSource = extend([], filteredData.planned, null, true);
    };
    const applyBackgroundColors = () => {
        calendars.forEach((calendar) => {
            const listItem = calendarsListObj.current.element.querySelector(`[data-uid="${calendar.id}"]`);
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
    const changeCheckboxBackgroundColor = (idFromArgs) => {
        const listItem = document.querySelector(`[data-uid="${idFromArgs}"]`);
        if (listItem) {
            const checkboxFrame = listItem.querySelector('.e-checkbox-wrapper .e-frame.e-check');
            const selectedItem = calendars.find((item) => item.id === idFromArgs);
            if (checkboxFrame && selectedItem?.color) {
                checkboxFrame.style.backgroundColor = selectedItem.color;
                checkboxFrame.style.borderColor = selectedItem.color;
            }
        }
    };
    const onToolbarItemClicked = (args) => {
        if (!args.item) {
            return;
        }
        switch (args.item.cssClass) {
            case 'e-menu-btn':
                calendarSidebarObj.current.toggle();
                break;
            case 'e-create':
                if (scheduleObj && calendars.length > 0) {
                    const data = {
                        StartTime: resetTime(new Date()),
                        EndTime: resetTime(addDays(new Date(), 1)),
                        ResourceId: selectedCalendars?.ids[0] || calendars[0]?.id
                    };
                    scheduleObj.current.openEditor(data, 'Add', true);
                }
                break;
            case 'e-previous':
                scheduleObj.current.changeDate(scheduleObj.current.activeView.getNextPreviousDate('Previous'));
                break;
            case 'e-next':
                scheduleObj.current.changeDate(scheduleObj.current.activeView.getNextPreviousDate('Next'));
                break;
            case 'e-today':
                scheduleObj.current.selectedDate = new Date();
                break;
            case 'e-day':
                scheduleObj.current.currentView = 'Day';
                break;
            case 'e-week':
                scheduleObj.current.currentView = 'Week';
                break;
            default:
                break;
        }
    };
    const onScheduleActionComplete = (args) => {
        if (args.requestType === 'dateNavigate' || args.requestType === 'viewNavigate') {
            updateDateRange();
            if (args.requestType === 'dateNavigate' && resetTime(calendarObj.current?.value) !== resetTime(scheduleObj.current.selectedDate)) {
                calendarObj.current.value = scheduleObj.current.selectedDate;
            }
        }
        else if (args.requestType === "eventCreated" || args.requestType === "eventChanged" || args.requestType === "eventRemoved") {
            for (const event of args.addedRecords) {
                event.IsPlanned = true;
                appointmentData.push(event);
            }
            for (const event of args.changedRecords) {
                const index = appointmentData.findIndex((item) => item.Id === event.Id);
                appointmentData[index] = event;
            }
            for (const event of args.deletedRecords) {
                const index = appointmentData.findIndex((item) => item.Id === event.Id);
                appointmentData.splice(index, 1);
            }
            const events = args.addedRecords.concat(args.changedRecords);
            for (const event of events) {
                let calendar = selectedCalendars.items.find((item) => item.id === event.CalendarId);
                if (isNullOrUndefined(calendar)) {
                    calendar = calendars.find((item) => item.id === event.CalendarId);
                    calendar.isSelected = true;
                    selectedCalendars = getSelectedCalendars();
                    filteredData = getFilteredData();
                    calendarsListObj.current.dataSource = extend([], calendars, null, true);
                    scheduleObj.current.eventSettings.dataSource = extend([], filteredData.planned, null, true);
                }
            }
        }
    };
    const updateDateRange = () => {
        let dateRange = '';
        if (scheduleObj.current) {
            const dateCollection = scheduleObj.current.getCurrentViewDates();
            dateRange = scheduleObj.current.getDateRangeText(dateCollection);
            if (dateRange !== '' && toolbarObj) {
                const dateRangeElement = toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn-text');
                toolbarObj.current.element.querySelector('.e-date-range .e-tbar-btn').setAttribute('aria-label', dateRange);
                dateRangeElement.textContent = dateRange;
            }
        }
    };
    const valueChange = (args) => {
        if (args?.isInteracted && scheduleObj) {
            scheduleObj.current.selectedDate = args.value;
        }
    };
    const listTemplate = (data) => {
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
    const listHeaderTemplate = () => {
        return (<div className="calendars-list-header">
                <div className="header-text">Calendars</div>
                <div className="header-icon e-icons e-plus"></div>
            </div>);
    };
    const schedulePopupClose = (args) => {
        if (args.type === "Editor" && args.element) {
            args.element.classList.remove('action-event-dialog');
        }
    };
    const schedulePopupOpen = (args) => {
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
                    dataSource: extend([], calendars, null, true),
                    cssClass: "calendar-ddl",
                    fields: { text: "name", value: "id" },
                    value: args.data?.CalendarId || selectedCalendars?.ids[0] || calendars[0]?.id,
                    floatLabelType: "Always", placeholder: "Calendar"
                });
                dropDownList.appendTo(inputEle);
                inputEle.setAttribute("name", "CalendarId");
            }
            else {
                const calendarDDL = args.element.querySelector(".calendar-ddl input").ej2_instances[0];
                calendarDDL.dataSource = extend([], calendars, null, true);
                calendarDDL.value = args.data?.CalendarId || selectedCalendars?.ids[0] || calendars[0]?.id;
            }
        }
        else if (args.type === "QuickInfo" && isNullOrUndefined(args.data.Id)) {
            args.cancel = true;
        }
    };
    const eventRendered = (args) => {
        const categoryColor = selectedCalendars.items[selectedCalendars.ids.indexOf(args.data.CalendarId)].color;
        if (!args.element || !categoryColor) {
            return;
        }
        args.element.style.backgroundColor = categoryColor;
    };
    const dialogContent = () => {
        return (<div className="dialogContent">
                <div>Calendar Name</div><div className="dialog-content"><TextBoxComponent ref={calendarNameObj} id="text-box" placeholder="Enter the calender name"/><ColorPickerComponent ref={colorPickerObj} id="color-picker"/></div>
            </div>);
    };
    const dialogFooterTemplate = () => {
        return (<button id="saveButton" ref={saveButtonRef} className="e-control e-btn e-primary" data-ripple="true" onClick={updateTextValue}></button>);
    };
    const isAllDayEvent = (props) => {
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
    const cloneEvent = (event) => JSON.parse(JSON.stringify(event));
    const isShortEvent = (props, isAllDay) => {
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        const diffMinutes = (end.getTime() - start.getTime()) / (1000 * 60);
        return diffMinutes <= 45 || isAllDay;
    };
    const isSpannedEvent = (props) => {
        if (!scheduleObj.current)
            return false;
        const viewDates = scheduleObj.current.getCurrentViewDates();
        if (!viewDates || viewDates.length === 0)
            return false;
        const viewStart = new Date(viewDates[0]);
        const viewEnd = new Date(viewDates[viewDates.length - 1]);
        const start = new Date(props.StartTime);
        const end = new Date(props.EndTime);
        return start < viewStart || end > viewEnd;
    };
    const getActionButtonStyle = (isAllDay = false) => ({
        position: 'absolute',
        top: isAllDay ? '0px' : '6px',
        ...(scheduleObj.current.enableRtl
            ? { left: '6px' }
            : { right: '6px' }),
        display: 'flex',
        gap: '4px',
    });
    const dayEventTemplate = (props) => {
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
            if (scheduleObj.current) {
                scheduleObj.current.openEditor(cloneEvent(props), 'Save');
            }
        };
        const handleDelete = (e) => {
            e.stopPropagation();
            if (scheduleObj.current) {
                scheduleObj.current.deleteEvent(props.Id);
            }
        };
        const isAllDay = isAllDayEvent(props);
        const isSpanned = isSpannedEvent(props);
        const showOnlyText = isAllDay || isSpanned;
        const showIcons = !isSpanned;
        return (<div>
                <div>
                    <div>{props.Subject}</div>
                    {!showOnlyText && (<div>
                            {startTimeStr} - {endTimeStr}
                        </div>)}
                </div>

                {showIcons && (<div style={getActionButtonStyle(isAllDay)}>
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
    const weekEventTemplate = (props) => {
        const start = new Date(props.StartTime);
        const startTimeStr = start.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
        });
        const handleEdit = (e) => {
            e.stopPropagation();
            if (scheduleObj.current) {
                scheduleObj.current.openEditor(cloneEvent(props), 'Save');
            }
        };
        const handleDelete = (e) => {
            e.stopPropagation();
            if (scheduleObj.current) {
                scheduleObj.current.deleteEvent(props.Id);
            }
        };
        const isAllDay = isAllDayEvent(props);
        const shortEvent = isShortEvent(props, isAllDay);
        const isSpanned = isSpannedEvent(props);
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

                {shortEvent ? ((showIcons && <div style={getActionButtonStyle(isAllDay)}>
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
    return (<div id="event-calendar-sample" className="control-section event-calendar-control-section">
            <div className="control-wrapper">
                <div>
                    <ToolbarComponent ref={toolbarObj} id='toolbar' clicked={onToolbarItemClicked} cssClass="event-calendar-toolbar" style={{ 'border': '1px solid #e5e5e5', 'marginBottom': '8px' }}>
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
                <SidebarComponent id="sidebar-left" className="sidebar-treeview" ref={calendarSidebarObj} width={'255px'} height={'550px'} target={'.main-content'} mediaQuery={'(min-width: 600px)'} isOpen={true}>
                    <div className="table-content">
                        <CalendarComponent ref={calendarObj} id="calendar" value={currentDate} change={valueChange} cssClass='selected-date-calendar'/>
                        <div className="calendar-list-container">
                            <ListViewComponent ref={calendarsListObj} id='listview-def' dataSource={calendars} showCheckBox={true} fields={{ id: 'id', text: 'name', isChecked: 'isSelected' }} showHeader={true} headerTemplate={listHeaderTemplate} template={listTemplate} select={onCalendarListChange} actionComplete={onListActionComplete}></ListViewComponent>
                        </div>
                    </div>
                </SidebarComponent>
                <div className="main-content" id="main-text">
                    <div className="sidebar-content">
                        <div className="schedule-container">
                            <ScheduleComponent id="Schedule" ref={scheduleObj} height='550px' selectedDate={currentDate} currentView={Browser.isDevice ? 'Day' : 'Week'} showHeaderBar={false} eventSettings={eventSettings} eventRendered={eventRendered} popupOpen={schedulePopupOpen} popupClose={schedulePopupClose} created={updateDateRange} allowDragAndDrop={false} actionComplete={onScheduleActionComplete}>
                                <ResourcesDirective>
                                    <ResourceDirective field='ResourceId' title='Resources' name='Resources' dataSource={resourceData} textField='name' idField='id' colorField='color'/>
                                </ResourcesDirective>
                                <ViewsDirective>
                                  <ViewDirective option='Day' eventTemplate={dayEventTemplate} allowOverlap={false}/>
                                  {!Browser.isDevice && (<ViewDirective option='Week' eventTemplate={weekEventTemplate} allowOverlap={false}/>)}
                                </ViewsDirective>
                                <Inject services={[Day, Week, Resize]}/>
                            </ScheduleComponent>
                        </div>
                    </div>
                </div>
                <DialogComponent ref={dialogObj} id='dialog' className='calendar-edit-dialog' header={"New Calender"} width={'320px'} content={dialogContent} footerTemplate={dialogFooterTemplate} showCloseIcon={true} isModal={true} animationSettings={{ effect: 'Zoom' }} visible={false}> </DialogComponent>
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
};
export default ActionButton;
