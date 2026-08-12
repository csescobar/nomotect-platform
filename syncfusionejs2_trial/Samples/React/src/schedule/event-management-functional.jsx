import * as React from 'react';
import { useRef, useEffect, useMemo } from 'react';
import './event-management.css';
import { ScheduleComponent, ViewsDirective, ViewDirective, ResourcesDirective, ResourceDirective, TimelineViews, Week, Day, Agenda, Inject, ExcelExport, Print, ToolbarItemsDirective, ToolbarItemDirective } from '@syncfusion/ej2-react-schedule';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { Internationalization, closest, addClass, removeClass, extend } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { updateSampleSection } from '../common/sample-base';
import * as dataSource from './datasource.json';
let isDraggedItemDropped = false;
let draggedItemId = 0;
let draggedItemSpeakers = [];
let draggedItemDescription = '';
let selectedUnplannedEventItem = 0;
const EventManagement = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const scheduleRef = useRef(null);
    const allUnplannedEventsTreeViewRef = useRef(null);
    const CloudSecurityEventTreeViewRef = useRef(null);
    const AIAutomationEventTreeViewRef = useRef(null);
    const alertDialogRef = useRef(null);
    const intl = new Internationalization();
    const unplannedEvents = ['', 'Cloud Security Essentials', 'AI for Automation'];
    const animationSettings = { effect: 'None' };
    const eventsData = extend([], dataSource.TechnicalEventData, null, true);
    const unplannedEvent1Data = extend([], dataSource.CloudSecurityEventData, null, true);
    const unplannedEvent2Data = extend([], dataSource.AIAutomationEventData, null, true);
    const allUnplannedEventsDataRef = useRef(unplannedEvent1Data.concat(unplannedEvent2Data));
    const rooms = [
        { RoomId: 1, RoomName: 'Room A', RoomCapacity: 100, RoomColor: '#0F6CBD' },
        { RoomId: 2, RoomName: 'Room B', RoomCapacity: 200, RoomColor: '#B71C1C' },
        { RoomId: 3, RoomName: 'Room C', RoomCapacity: 300, RoomColor: '#E65100' },
        { RoomId: 4, RoomName: 'Room D', RoomCapacity: 400, RoomColor: '#558B2F' },
    ];
    const roomsData = [
        { RoomId: 0, RoomName: 'All' },
        { RoomId: 1, RoomName: 'Room A' },
        { RoomId: 2, RoomName: 'Room B' },
        { RoomId: 3, RoomName: 'Room C' },
        { RoomId: 4, RoomName: 'Room D' },
    ];
    const checkRoomCapacity = (Capacity, RoomId) => {
        const room = rooms.find((room) => room.RoomId === RoomId);
        return room && room.RoomCapacity >= Capacity;
    };
    const unPlannedEventsList = useRef(unplannedEvents.map((name, index) => ({
        id: index.toString(),
        name: name === '' ? 'All' : name
    }))).current;
    // Fields for tree views
    const allUnplannedEventsTreeFields = useMemo(() => ({
        dataSource: allUnplannedEventsDataRef.current,
        id: 'Id',
        text: 'Subject'
    }), []);
    const unplannedEvent1TreeFields = useMemo(() => ({
        dataSource: unplannedEvent1Data,
        id: 'Id',
        text: 'Subject'
    }), []);
    const unplannedEvent2TreeFields = useMemo(() => ({
        dataSource: unplannedEvent2Data,
        id: 'Id',
        text: 'Subject'
    }), []);
    // Fields for schedule component
    const scheduleFields = {
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
    const printExportItems = [
        { text: 'Print', id: 'print' },
        { text: 'Export', id: 'export' },
    ];
    const alertDialogButtons = [
        {
            click: () => {
                alertDialogRef.current.hide();
            },
            buttonModel: {
                isPrimary: true,
                content: 'OK',
            },
        },
    ];
    const getTimeString = (value) => {
        return intl.formatDate(value, { type: 'time', skeleton: 'short' });
    };
    const getRoomName = (value) => {
        return ((value.resourceData) ?
            value.resourceData[value.resource.textField] :
            value.resourceName);
    };
    const getRoomCapacity = (capacity) => {
        return 'Capacity - ' + capacity;
    };
    const getResourceData = (roomId) => {
        const resources = scheduleRef.current.getResourceCollections().slice(-1)[0];
        const resourceData = resources.dataSource.filter((resource) => resource.RoomId === roomId)[0];
        return resourceData;
    };
    const getQuickInfoHeaderStyle = (data) => {
        const resourceData = getResourceData(data.RoomId);
        return { background: resourceData.RoomColor, color: '#FFFFFF' };
    };
    const getQuickInfoDurationText = (data) => {
        return intl.formatDate(data.StartTime, { type: 'date', skeleton: 'full' }) + ' (' +
            intl.formatDate(data.StartTime, { skeleton: 'hm' }) + ' - ' +
            intl.formatDate(data.EndTime, { skeleton: 'hm' }) + ')';
    };
    const unplannedEventsUpdatedData = (dataSource, value) => {
        return dataSource.filter((data) => data.Title === value);
    };
    const toggleUnplannedEventsElement = () => {
        let settingsPanel = document.querySelector('.unplanned-events-container');
        let toggleButton = scheduleRef.current.element.querySelector('.e-show-unplanned-events') || scheduleRef.current.element.querySelector('.e-hide-unplanned-events');
        if (settingsPanel.classList.contains('hide')) {
            removeClass([settingsPanel], 'hide');
            toggleButton.classList.replace('e-hide-unplanned-events', 'e-show-unplanned-events');
        }
        else {
            addClass([settingsPanel], 'hide');
            toggleButton.classList.replace('e-show-unplanned-events', 'e-hide-unplanned-events');
        }
    };
    const handlePrintExportSelect = (args) => {
        switch (args.item.id) {
            case 'print':
                // Hide toolbar items after Agenda
                document.querySelectorAll('.toolbar-post-agenda').forEach(item => {
                    item.style.display = 'none';
                });
                scheduleRef.current.print();
                setTimeout(() => {
                    document.querySelectorAll('.toolbar-post-agenda').forEach(item => {
                        item.style.display = 'inline-block';
                    });
                }, 1000);
                break;
            case 'export':
                let exportValues = {
                    fields: ['Id', 'Subject', 'Title', 'StartTime', 'EndTime', 'RoomId', 'Capacity']
                };
                scheduleRef.current.exportToExcel(exportValues);
                break;
            default:
                break;
        }
    };
    const onEventRendered = (args) => {
        const data = args.data;
        const isBreakEvent = data.Subject.toLowerCase().includes('break') || data.Subject.toLowerCase().includes('lunch');
        if (isBreakEvent) {
            if (args.element.classList.contains('e-agenda-item')) {
                args.element.querySelector('.e-appointment').classList.add('e-break-event');
            }
            else {
                args.element.classList.add('e-break-event');
            }
        }
    };
    const onRoomChange = (e) => {
        const value = e.value;
        let previousItemData = e.previousItemData;
        if (!previousItemData) {
            return;
        }
        if (value === 0) {
            scheduleRef.current.removeResource(previousItemData.RoomId, 'Rooms');
            scheduleRef.current.addResource(rooms, 'Rooms', value);
        }
        else {
            if (previousItemData.RoomId === 0) {
                let resourceData = rooms.filter((room) => room.RoomId !== value);
                for (let idx = 0; idx < resourceData.length; idx++) {
                    let resource = resourceData[idx];
                    scheduleRef.current.removeResource(resource.RoomId, 'Rooms');
                }
            }
            else {
                scheduleRef.current.removeResource(previousItemData.RoomId, 'Rooms');
                let resourceData = rooms.filter((room) => room.RoomId === value);
                scheduleRef.current.addResource(resourceData[0], 'Rooms', value);
            }
        }
    };
    const isDataSourceEmpty = (dataSource) => {
        return !dataSource || dataSource.length === 0;
    };
    const handleEmptyDataSourceDisplay = (treeViewRef, dataSource) => {
        const noEventsElement = document.querySelector('.no-events-message');
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
    const onPopupOpen = (args) => {
        const isQuickInfoPopup = args.type === 'QuickInfo' || args.type === 'ViewEventInfo';
        const isEditorPopup = args.type === 'Editor';
        const isBreakEvent = args.target?.classList.contains('e-break-event');
        if ((isQuickInfoPopup && isBreakEvent) || (isEditorPopup && !isDraggedItemDropped)) {
            args.cancel = true;
            return;
        }
        if (isQuickInfoPopup) {
            args.element.classList.add('event-management-quick-popup');
        }
        else if (isEditorPopup) {
            args.element.classList.add('event-management-editor-popup');
            args.element.querySelector('.capacity-alert')?.remove();
            args.element.querySelector('.time-alert')?.remove();
            const startTimeElement = args.element.querySelector('.e-start-end-row .e-start.e-control.e-datetimepicker');
            const endTimeElement = args.element.querySelector('.e-start-end-row .e-end.e-control.e-datetimepicker');
            if (startTimeElement && endTimeElement) {
                const startDateTimePickerRef = startTimeElement.ej2_instances?.[0];
                const endDateTimePickerRef = endTimeElement.ej2_instances?.[0];
                if (startDateTimePickerRef && endDateTimePickerRef) {
                    // Use the component's change event
                    startDateTimePickerRef.change = () => {
                        const startTime = new Date(startDateTimePickerRef.value);
                        // Handle duration calculation
                        if (args.data && args.data.Duration) {
                            const durationMatch = args.data.Duration.match(/(\d+)\s+(hour|hours|minute|minutes)/i);
                            if (durationMatch) {
                                const durationValue = parseInt(durationMatch[1]);
                                const durationUnit = durationMatch[2].toLowerCase();
                                const newEndTime = new Date(startTime);
                                if (durationUnit === 'hour' || durationUnit === 'hours') {
                                    newEndTime.setHours(newEndTime.getHours() + durationValue);
                                }
                                else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                                    newEndTime.setMinutes(newEndTime.getMinutes() + durationValue);
                                }
                                // Update end time
                                endDateTimePickerRef.value = newEndTime;
                            }
                        }
                    };
                }
            }
        }
    };
    const onPopupClose = (args) => {
        if (args.type === 'Editor') {
            const targetElement = args.event.target;
            const isSaveAction = targetElement.classList.contains('e-event-save') || targetElement.classList.contains('e-save-icon');
            if (isSaveAction) {
                const roomId = args.data.RoomId;
                const startTime = args.data.StartTime;
                const endTime = args.data.EndTime;
                const capacity = args.data.Capacity;
                const isRoomFiltered = scheduleRef.current.resourceCollection[0].dataSource.length === 1;
                const isRoomAvailable = scheduleRef.current.isSlotAvailable(startTime, endTime, !isRoomFiltered ? roomId - 1 : 0) && startTime.getHours() >= 8 && (endTime.getHours() < 18 || (endTime.getHours() === 18 && endTime.getMinutes() === 0));
                const isCapacityAvailable = checkRoomCapacity(capacity, roomId);
                if (!isRoomAvailable) {
                    let timeElement = args.element.querySelector('.e-start-end-row');
                    if (!args.element.querySelector('.time-alert')) {
                        const newDiv = document.createElement('div');
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
                    let timeElement = args.element.querySelector('.e-description-row');
                    if (!args.element.querySelector('.capacity-alert')) {
                        const newDiv = document.createElement('div');
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
                    let unplannedEventsTreeViewRefs = [allUnplannedEventsTreeViewRef, CloudSecurityEventTreeViewRef, AIAutomationEventTreeViewRef];
                    let unplannedEventTreeViewRef = unplannedEventsTreeViewRefs[selectedUnplannedEventItem].current;
                    let unplannedEventTreeViewData = unplannedEventTreeViewRef.fields.dataSource;
                    const updatedData = unplannedEventTreeViewData.filter((item) => item.Id !== draggedItemId);
                    unplannedEventTreeViewRef.fields.dataSource = updatedData;
                    allUnplannedEventsDataRef.current = allUnplannedEventsDataRef.current.filter(item => item.Id !== draggedItemId);
                    handleEmptyDataSourceDisplay(unplannedEventTreeViewRef, updatedData);
                    args.data.Speakers = draggedItemSpeakers;
                    args.data.Description = draggedItemDescription;
                }
            }
            isDraggedItemDropped = false;
        }
    };
    const onTreeDragStart = () => {
        document.body.classList.add('e-disble-not-allowed');
    };
    const onTreeDragging = (event) => {
        document.body.classList.add('tree-item-dragging');
        if (scheduleRef.current.isAdaptive) {
            const classElement = scheduleRef.current.element.querySelector('.e-device-hover');
            if (classElement) {
                classElement.classList.remove('e-device-hover');
            }
            if (event.target.classList.contains('e-work-cells')) {
                addClass([event.target], 'e-device-hover');
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
    const onTreeDragStop = (event) => {
        // Remove the class when dragging stops
        document.body.classList.remove('tree-item-dragging');
        // Remove any remaining cursor classes
        const dropNotAllowedElements = document.querySelectorAll('.not-allowed-cursor');
        dropNotAllowedElements.forEach(element => {
            element.classList.remove('not-allowed-cursor');
        });
        const treeviewElement = closest(event.target, '.e-treeview');
        const classElement = scheduleRef.current.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        if (!treeviewElement) {
            event.cancel = true;
            let scheduleElement = closest(event.target, '.e-content-wrap');
            if (scheduleElement) {
                let treeviewData = allUnplannedEventsTreeViewRef.current.fields.dataSource;
                if (event.target.classList.contains('e-work-cells')) {
                    const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                    const { Subject, Capacity, Speakers, Description, Duration, EventType, TargetAudience, EventLevel, EventTags, Title } = filteredData[0];
                    const cellData = scheduleRef.current.getCellDetails(event.target);
                    const StartTime = cellData.startTime;
                    let EndTime;
                    const durationValue = parseInt(Duration.split(' ')[0]);
                    const durationUnit = Duration.split(' ')[1];
                    let copyStartTime = new Date(StartTime);
                    if (durationUnit === 'hour' || durationUnit === 'hours') {
                        copyStartTime.setHours(copyStartTime.getHours() + durationValue); // Adds hours to StartTime
                    }
                    else if (durationUnit === 'minute' || durationUnit === 'minutes') {
                        copyStartTime.setMinutes(copyStartTime.getMinutes() + durationValue); // Adds minutes to StartTime
                    }
                    EndTime = copyStartTime;
                    const resourceDetails = scheduleRef.current.getResourcesByIndex(cellData.groupIndex);
                    const roomId = resourceDetails.resourceData.RoomId;
                    const isRoomFiltered = scheduleRef.current.resourceCollection[0].dataSource.length === 1;
                    const isRoomAvailable = scheduleRef.current.isSlotAvailable(StartTime, EndTime, !isRoomFiltered ? roomId - 1 : 0);
                    const isCapacityAvailable = checkRoomCapacity(Capacity, roomId);
                    if (!isRoomAvailable || !isCapacityAvailable) {
                        alertDialogRef.current.content = !isRoomAvailable ? 'This room is already booked for this time slot. Please select a different room or time.' : 'This room cannot accommodate the stated number of attendees. Please select a room with a suitable capacity.';
                        alertDialogRef.current.show();
                        return;
                    }
                    let eventData = {
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
    const onUnplannedEventSelect = (args) => {
        let treeviewRefs = [allUnplannedEventsTreeViewRef, CloudSecurityEventTreeViewRef, AIAutomationEventTreeViewRef];
        let previouslySelectedItem = parseInt(args.previousItemData.id, 10);
        selectedUnplannedEventItem = parseInt(args.value, 10);
        treeviewRefs[previouslySelectedItem].current.element.style.display = 'none';
        treeviewRefs[selectedUnplannedEventItem].current.element.style.display = '';
        treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource =
            selectedUnplannedEventItem === 0 ? treeviewRefs[1].current.fields.dataSource.concat(treeviewRefs[2].current.fields.dataSource) : unplannedEventsUpdatedData(allUnplannedEventsDataRef.current, unplannedEvents[selectedUnplannedEventItem]);
        handleEmptyDataSourceDisplay(treeviewRefs[selectedUnplannedEventItem].current, treeviewRefs[selectedUnplannedEventItem].current.fields.dataSource);
    };
    const onCellClick = (args) => {
        args.cancel = true;
    };
    const roomValueTemplate = (data) => {
        return <span>{data.RoomName === 'All' ? 'Room: All' : data.RoomName}</span>;
    };
    const resourceHeaderTemplate = (props) => {
        return (<div className="template-wrap">
        <div className="resource-detail">
          <div className="resource-name">{getRoomName(props)}</div>
          <div className="capacity-wrap">
            <span className='e-icons e-capacity-icon'></span>
            <span className='e-capacity'>{getRoomCapacity(props.resourceData.RoomCapacity.toString())}</span>
          </div>
        </div>
      </div>);
    };
    const quickInfoHeader = (props) => {
        return (<div className="e-event-header e-popup-header">
        <div className="e-header-icon-wrapper">
          <button id="close" className="e-close e-icons e-close-icon e-btn e-lib e-flat e-round e-small e-icon-btn" title="CLOSE" onClick={() => { scheduleRef.current.closeQuickInfoPopup(); }}/>
        </div>
        <div className="quick-info-header-content" style={getQuickInfoHeaderStyle(props)}>
          <div className="quick-info-title">{props.Subject}</div>
          <div className="duration-text">{getQuickInfoDurationText(props)}</div>
        </div>
      </div>);
    };
    const quickInfoContent = (props) => {
        let room = '';
        if (props.elementType !== 'cell') {
            room = rooms.filter((room) => room.RoomId === props.RoomId)[0].RoomName;
        }
        return (<div className="quick-info-content">
        <div className="event-content">
          <div className="e-room e-content-item">
            <label>Room</label>
            <span className='colon'>:</span>
            <span className='e-content'>{room}</span>
          </div>
          <div className="e-event e-content-item">
            <label>Event</label>
            <span className='colon'>:</span>
            <span className='e-content'>{props.Title}</span>
          </div>
          {props.Speakers && props.Speakers.length > 0 && (<div className="e-speaker e-content-item">
              <label>{props.Speakers.length > 1 ? 'Speakers' : 'Speaker'}</label>
              <span className='colon'>:</span>
              <span className='e-content'>
                {props.Speakers.map((speaker, index) => (`${speaker.Name} (${speaker.Title})${index < props.Speakers.length - 1 ?
                    (index === props.Speakers.length - 2 ? ' and ' : ', ') :
                    ''}`))}
              </span>
            </div>)}
          <div className="e-count e-content-item">
            <label>Participant count</label>
            <span className='colon'>:</span>
            <span className='e-content'>{props.Capacity}</span>
          </div>
        </div>
      </div>);
    };
    const agendaTemplate = (props) => {
        return (<div className="agenda-event">
        <div className="event-subject">{props.Subject}</div>
        <div className="event-description">{props.Description}</div>
        {props.Subject.toLowerCase().indexOf('break') === -1 && props.Subject.toLowerCase().indexOf('lunch') === -1 && (<div className="event-duration-audience">
            <div className="event-duration">
              <span className='e-icons e-duration-icon'></span>
              <span className='e-duration'>{getTimeString(props.StartTime) + ' - ' + getTimeString(props.EndTime)}</span>
            </div>
            <div className="event-audience">
              <span className='e-icons e-audience-icon'></span>
              <span className='e-audience-count'>Audience : {props.Capacity}</span>
            </div>
          </div>)}
        {props.Speakers && props.Speakers.length > 0 && (<div className="event-speaker">
            <div className="separator-line"></div>
            <label>{props.Speakers.length > 1 ? 'Speakers' : 'Speaker'}</label>
            {props.Speakers.map((speaker, index) => (<div className="speaker-details" key={index}>
                <div className="speaker-image">{speaker.Name.charAt(0)}</div>
                <div className="speaker-info">
                  <div className='speaker-name'>{speaker.Name}</div>
                  <div className='speaker-title'>{speaker.Title}</div>
                  <div className='speaker-note'>{speaker.Note}</div>
                </div>
              </div>))}
          </div>)}
      </div>);
    };
    const treeTemplate = (props) => {
        return (<div className="unplanned-item">
        <div className="unplanned-item-subject">{props.Subject}</div>
        <div className="unplanned-item-duration">
          <span className='duration-icon e-icons'></span>
          <span className='duration-value'>Duration: {props.Duration}</span>
        </div>
        <div className="unplanned-item-capacity">
          <span className='capacity-icon e-icons'></span>
          <span className='capacity-value'>Audience Size: {props.Capacity}</span>
        </div>
      </div>);
    };
    const roomsDropDown = () => {
        return (<DropDownListComponent dataSource={roomsData} fields={{ text: 'RoomName', value: 'RoomId' }} value={0} change={onRoomChange} valueTemplate={roomValueTemplate}/>);
    };
    const printAndExport = () => {
        return (<DropDownButtonComponent items={printExportItems} select={handlePrintExportSelect} iconCss='e-icons e-print-export' cssClass='e-caret-hide e-tbar-btn'/>);
    };
    return (<div className='control-section event-management-control-section'>
      <div className='control-wrapper event-management-wrapper'>
        <ScheduleComponent ref={scheduleRef} cssClass='schedule-event-management' currentView='Day' selectedDate={new Date(2025, 1, 24)} width='100%' height='550px' startHour="08:00" endHour="18:00" timeScale={{ slotCount: 3 }} allowOverlap={false} eventSettings={{ dataSource: eventsData, fields: scheduleFields }} group={{ resources: ['Rooms'] }} eventRendered={onEventRendered} resourceHeaderTemplate={resourceHeaderTemplate} cellClick={onCellClick} popupClose={onPopupClose} popupOpen={onPopupOpen} quickInfoTemplates={{ header: quickInfoHeader, content: quickInfoContent }}>
          <ViewsDirective>
            <ViewDirective option="Day"/>
            <ViewDirective option="Week"/>
            <ViewDirective option="Agenda" eventTemplate={agendaTemplate}/>
          </ViewsDirective>
          <ResourcesDirective>
            <ResourceDirective field="RoomId" title="Rooms" name="Rooms" dataSource={rooms} textField="RoomName" idField="RoomId" colorField="RoomColor"/>
          </ResourcesDirective>
          <Inject services={[TimelineViews, Agenda, Week, Day, ExcelExport, Print]}/>
          <ToolbarItemsDirective>
            <ToolbarItemDirective name='Previous' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='Next' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='DateRangeText' align='Left'></ToolbarItemDirective>
            <ToolbarItemDirective name='Views' align='Right'></ToolbarItemDirective>
            <ToolbarItemDirective type='Separator' align='Right' cssClass='toolbar-post-agenda'/>
            <ToolbarItemDirective name='Custom' type='Input' template={roomsDropDown} align='Right' cssClass='toolbar-post-agenda room-filter'/>
            <ToolbarItemDirective type='Separator' align='Right' cssClass='toolbar-post-agenda'/>
            <ToolbarItemDirective name='Custom' type='Button' prefixIcon='e-icons e-show-unplanned-events' align='Right' showTextOn='Overflow' overflow='Show' id="overview_toolbar_settings_unplanned_events" click={toggleUnplannedEventsElement} cssClass='toolbar-post-agenda'/>
            <ToolbarItemDirective name='Custom' type='Button' prefixIcon='e-icons e-print-export' template={printAndExport} align='Right' cssClass='toolbar-post-agenda print-export'/>
          </ToolbarItemsDirective>
        </ScheduleComponent>
        <div className="unplanned-events-container">
          <div className="title-container">
            <div className="title-text">Unscheduled Events</div>
          </div>
          <div id="list-container">
            <div className='events-list'>
              <label className="event-label">Event</label>
              <DropDownListComponent fields={{ text: 'name', value: 'id' }} dataSource={unPlannedEventsList} value={selectedUnplannedEventItem.toString()} change={onUnplannedEventSelect}/>
            </div>
            <TreeViewComponent ref={allUnplannedEventsTreeViewRef} id="treeview1" style={{ display: "" }} cssClass='event-management-treeview' dragArea=".event-management-wrapper" nodeTemplate={treeTemplate} fields={allUnplannedEventsTreeFields} nodeDragStart={onTreeDragStart} nodeDragging={onTreeDragging} nodeDragStop={onTreeDragStop} allowDragAndDrop={true}/>
            <TreeViewComponent ref={CloudSecurityEventTreeViewRef} id='treeview2' style={{ display: "none" }} cssClass='event-management-treeview' dragArea=".event-management-wrapper" nodeTemplate={treeTemplate} fields={unplannedEvent1TreeFields} nodeDragStart={onTreeDragStart} nodeDragging={onTreeDragging} nodeDragStop={onTreeDragStop} allowDragAndDrop={true}/>
            <TreeViewComponent ref={AIAutomationEventTreeViewRef} id='treeview3' style={{ display: "none" }} cssClass='event-management-treeview' dragArea=".event-management-wrapper" nodeTemplate={treeTemplate} fields={unplannedEvent2TreeFields} nodeDragStart={onTreeDragStart} nodeDragging={onTreeDragging} nodeDragStop={onTreeDragStop} allowDragAndDrop={true}/>
            <div className="no-events-message hidden">All events have been scheduled</div>
          </div>
        </div>
        <div id="target">
          <DialogComponent id="modalDialog" cssClass='alert-dialog' isModal={true} buttons={alertDialogButtons} header="Notice" height="240px" width="335px" ref={alertDialogRef} visible={false} showCloseIcon={true} animationSettings={animationSettings} target="#target"></DialogComponent>
        </div>
      </div>
      <div id="action-description">
        <p>This demo showcases a technical event management system that uses the Scheduler component, where each technical event is split into multiple sessions with specific room allocations. The system features drag-and-drop capabilities for scheduling sessions, conflict prevention, and filtering by room.</p>
      </div>
      <div id="description">
        <p>
          This example demonstrates how to implement a technical event management system using the Scheduler component. The application includes the following key features:
        </p>
        <ul>
          <li>Each technical event is organized into multiple separate sessions, with specific room allocations on the same day.</li>
          <li>An external list of unscheduled sessions that can be scheduled via drag-and-drop functionality</li>
          <li>Prevention of scheduling conflicts and room capacity overflows while dragging and dropping externally maintained event sessions.</li>
          <li>Room-based filtering through toolbar dropdown selections.</li>
          <li>Ability to filter and view unscheduled event sessions by technical event.</li>
          <li>Detailed agenda view that displays event information including speakers, audience size, and session descriptions.</li>
        </ul>
        <p>
          Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our <a target="_blank" href="https://www.syncfusion.com/react-components/react-scheduler">React Scheduler</a> component page.
        </p>
      </div>
    </div>);
};
export default EventManagement;
