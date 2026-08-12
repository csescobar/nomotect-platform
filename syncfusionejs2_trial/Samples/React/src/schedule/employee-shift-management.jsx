import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './employee-shift-management.css';
import { ScheduleComponent, TimelineViews, Inject, ResourceDirective, ResourcesDirective, ViewsDirective, ViewDirective, Agenda, ToolbarItemsDirective, ToolbarItemDirective } from '@syncfusion/ej2-react-schedule';
import { closest, remove, Internationalization, extend, isNullOrUndefined } from '@syncfusion/ej2-base';
import { TreeViewComponent } from '@syncfusion/ej2-react-navigations';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ChipListComponent, ChipsDirective, ChipDirective } from '@syncfusion/ej2-react-buttons';
import { Query } from '@syncfusion/ej2-data';
import { ToolbarComponent, ItemsDirective, ItemDirective } from '@syncfusion/ej2-react-navigations';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SampleBase } from '../common/sample-base';
import * as dataSource from './datasource.json';
const imagePath = './src/schedule/images/';
const salamanImage = `${imagePath}salman@3x.png`;
const brianImage = `${imagePath}brian@3x.png`;
const jakeImage = `${imagePath}jake@3x.png`;
const jenniferImage = `${imagePath}Jennifer.png`;
const davidImage = `${imagePath}David.png`;
const williammImage = `${imagePath}William.png`;
const emmaImage = `${imagePath}Emma.png`;
const lilyImage = `${imagePath}Lily.png`;
const avaImage = `${imagePath}Ava.png`;
const graceImage = `${imagePath}Grace.png`;
const michaelImage = `${imagePath}Michael.png`;
const thomasImage = `${imagePath}Thomas.png`;
const rickyImage = `${imagePath}Ricky.png`;
const jamesImage = `${imagePath}James.png`;
const benjaminImage = `${imagePath}Benjamin.png`;
const oliviaImage = `${imagePath}Olivia.png`;
const chloeImage = `${imagePath}Chloe.png`;
export class EmployeeShiftManagement extends SampleBase {
    scheduleRef;
    shiftDropdownListRef = React.createRef();
    dropdownListRef = React.createRef();
    allStaffsTreeRef = React.createRef();
    doctorsTreeRef = React.createRef();
    nursesTreeRef = React.createRef();
    staffsTreeRef = React.createRef();
    externalChipsRef = React.createRef();
    toolbarChipsRef = React.createRef();
    agendaToolbarRoot = null;
    tooltipRootsMapRef = React.createRef();
    eventsData = extend([], dataSource.employeeShiftData, null, true);
    selectedDate = new Date(2025, 2, 5);
    intl = new Internationalization();
    animationSettings = { effect: 'None' };
    currentChipIndex = 0;
    previousChipIndex = 0;
    isDraggedItemDropped = false;
    draggedItemId = '';
    styleNone = { display: "none" };
    allowDragAndDrop = true;
    filteredQuery = new Query();
    rolesData = ['', 'Doctors', 'Nurses', 'Support Staffs'];
    imageMap = {
        mark: `${imagePath}will-smith.png`,
        brian: brianImage,
        kevin: `${imagePath}alice.png`,
        salman: salamanImage,
        olivia: `${imagePath}margaret.png`,
        zoe: `${imagePath}laura.png`,
        ricky: rickyImage,
        jake: jakeImage,
    };
    employeeRole = [
        { role: 'Doctors', id: 1 },
        { role: 'Nurses', id: 2 },
        { role: 'Support Staffs', id: 3 }
    ];
    designationsData = [
        { name: 'Attending Physician', id: 1, groupId: 1 },
        { name: 'Hospitalist', id: 2, groupId: 1 },
        { name: 'General Pediatrician', id: 3, groupId: 1 },
        { name: 'Resident Doctor', id: 4, groupId: 1 },
        { name: 'Senior Nurse', id: 5, groupId: 2 },
        { name: 'Nurse Practitioner', id: 6, groupId: 2 },
        { name: 'Medical Assistant', id: 7, groupId: 3 },
        { name: 'Receptionist', id: 8, groupId: 3 }
    ];
    employeeImages = [
        { name: 'John', image: `${imagePath}robert.png` },
        { name: 'Nashil', image: `${imagePath}nancy.png` },
        { name: 'Jennifer', image: jenniferImage },
        { name: 'William', image: williammImage },
        { name: 'David', image: davidImage },
        { name: 'Michael', image: michaelImage },
        { name: 'Thomas', image: thomasImage },
        { name: 'Daniel', image: `${imagePath}robson.png` },
        { name: 'Mark', image: `${imagePath}will-smith.png` },
        { name: 'Brian', image: brianImage },
        { name: 'Kevin', image: `${imagePath}alice.png` },
        { name: 'Salman', image: salamanImage },
        { name: 'Emma', image: emmaImage },
        { name: 'Lily', image: lilyImage },
        { name: 'Ava', image: avaImage },
        { name: 'Grace', image: graceImage },
        { name: 'Olivia', image: `${imagePath}margaret.png` },
        { name: 'Zoe', image: `${imagePath}laura.png` },
        { name: 'James', image: jamesImage },
        { name: 'Benjamin', image: benjaminImage },
        { name: 'Olivia', image: oliviaImage },
        { name: 'Chloe', image: chloeImage },
        { name: 'Ricky', image: rickyImage },
        { name: 'Jake', image: jakeImage }
    ];
    doctorsData = [
        { Id: 1, Name: "Mark", Description: 'Attending Physician', role: 'Doctors' },
        { Id: 2, Name: "Brian", Description: 'Hospitalist', role: 'Doctors' },
        { Id: 3, Name: "Kevin", Description: 'General Pediatrician', role: 'Doctors' },
        { Id: 4, Name: "Salman", Description: 'Resident Doctor', role: 'Doctors' }
    ];
    nursesData = [
        { Id: 5, Name: "Olivia", Description: 'Senior Nurse', role: 'Nurses' },
        { Id: 6, Name: "Zoe", Description: 'Nurse Practitioner', role: 'Nurses' }
    ];
    staffsData = [
        { Id: 7, Name: "Ricky", Description: 'Medical Assistant', role: 'Support Staffs' },
        { Id: 8, Name: "Jake", Description: 'Receptionist', role: 'Support Staffs' }
    ];
    allData = this.doctorsData.concat(this.nursesData, this.staffsData);
    allStaffsTreeFields = { dataSource: this.allData, id: 'Id', text: 'Name' };
    doctorsTreeFields = { dataSource: this.doctorsData, id: 'Id', text: 'Name' };
    nursesTreeFields = { dataSource: this.nursesData, id: 'Id', text: 'Name' };
    staffsTreeFields = { dataSource: this.staffsData, id: 'Id', text: 'Name' };
    group = { resources: ['Roles', 'Designations'] };
    workHours = { start: '00:00', end: '23:59' };
    constructor(props) {
        super(props);
        this.state = {
            employeeNamesList: [],
            shiftList: [],
            selectedEmployee: null,
            selectedShift: null,
            requestedShift: null,
            dialogVisible: false,
            shiftsData: []
        };
        if (!this.tooltipRootsMapRef.current) {
            this.tooltipRootsMapRef.current = new Map();
        }
        // Bind methods to the class instance
        this.majorSlotTemplate = this.majorSlotTemplate.bind(this);
        this.getTimeString = this.getTimeString.bind(this);
        this.requestShiftSwap = this.requestShiftSwap.bind(this);
        this.employeeNameChange = this.employeeNameChange.bind(this);
        this.shiftChange = this.shiftChange.bind(this);
        this.getEventElement = this.getEventElement.bind(this);
        this.onEventRendered = this.onEventRendered.bind(this);
        this.treeTemplate = this.treeTemplate.bind(this);
        this.onTreeDragStop = this.onTreeDragStop.bind(this);
        this.onTreeDragStart = this.onTreeDragStart.bind(this);
        this.chipClick = this.chipClick.bind(this);
        this.onDropDownListChange = this.onDropDownListChange.bind(this);
        this.onDropDownListBeforeOpen = this.onDropDownListBeforeOpen.bind(this);
        this.getAgendaToolbarChips = this.getAgendaToolbarChips.bind(this);
        this.getAgendaToolbarDropDownList = this.getAgendaToolbarDropDownList.bind(this);
        this.agendaChipsClick = this.agendaChipsClick.bind(this);
        this.onNavigating = this.onNavigating.bind(this);
        this.editorHeaderTemplate = this.editorHeaderTemplate.bind(this);
        this.agendaTemplate = this.agendaTemplate.bind(this);
        this.onPopupOpen = this.onPopupOpen.bind(this);
        this.onPopupClose = this.onPopupClose.bind(this);
        this.getButtons = this.getButtons.bind(this);
    }
    // Button actions for the Shift Swap dialog
    getButtons() {
        return [
            {
                click: () => {
                    this.setState({
                        dialogVisible: false
                    });
                },
                buttonModel: {
                    content: 'Cancel',
                }
            },
            {
                click: () => {
                    const { requestedShift, selectedShift, selectedEmployee } = this.state;
                    let dataSource = this.scheduleRef.eventSettings.dataSource;
                    let requestingEventIndex = 0;
                    let requestedShiftId = requestedShift?.id;
                    let requestingEvent = dataSource.filter((item, index) => {
                        if (item.Id === requestedShiftId) {
                            requestingEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    let approvedEventIndex = 0;
                    let accShiftIds = selectedShift.eventId;
                    let approvedEvent = dataSource.filter((item, index) => {
                        if (item.Id === accShiftIds) {
                            approvedEventIndex = index;
                            return true;
                        }
                        return false;
                    });
                    requestingEvent[0].Description = requestingEvent[0].Description.replace(' - Swap-Request', '');
                    requestingEvent[0].Subject = requestedShift.name + ' swapped the shift with ' + selectedEmployee.name + "'s shift scheduled from " + (this.intl.formatDate(new Date(approvedEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + this.getTimeString(new Date(approvedEvent[0].StartTime)) + ' to ' + this.getTimeString(new Date(approvedEvent[0].EndTime)));
                    dataSource[requestingEventIndex] = requestingEvent[0];
                    approvedEvent[0].Description = approvedEvent[0].Description.replace(' - Swap-Request', '');
                    approvedEvent[0].Subject = selectedEmployee.name + ' swapped the shift with ' + requestedShift.name + "'s shift scheduled from " + (this.intl.formatDate(new Date(requestingEvent[0].StartTime), { skeleton: 'MMMd' }) + ', ' + this.getTimeString(new Date(requestingEvent[0].StartTime)) + ' to ' + this.getTimeString(new Date(requestingEvent[0].EndTime)));
                    dataSource[approvedEventIndex] = approvedEvent[0];
                    this.scheduleRef.eventSettings.dataSource = dataSource;
                    this.scheduleRef.refreshEvents();
                    this.setState({
                        employeeNamesList: [],
                        shiftList: [],
                        dialogVisible: false
                    });
                },
                buttonModel: {
                    content: 'Swap Shift',
                    disabled: isNullOrUndefined(this.shiftDropdownListRef?.current?.value) ? true : false
                },
            },
        ];
    }
    majorSlotTemplate(props) {
        return (<div>{props.date.getHours() === 7 ? 'Morning Shift' : 'Evening Shift'}</div>);
    }
    timeScale = {
        interval: 480,
        slotCount: 3,
        majorSlotTemplate: this.majorSlotTemplate
    };
    getTimeString(value) {
        return this.intl.formatDate(value, { skeleton: 'h' });
    }
    getShortTimeString(value) {
        return this.intl.formatDate(value, { type: 'time', skeleton: 'short' });
    }
    getDayString(value) {
        return this.intl.formatDate(value, { skeleton: 'E' });
    }
    dialogClose() {
        this.setState({
            employeeNamesList: [],
            shiftList: [],
            dialogVisible: false
        });
    }
    dialogOpen() {
        this.setState({
            dialogVisible: true
        });
    }
    requestShiftSwap(args) {
        const eventsData = this.scheduleRef.eventSettings.dataSource;
        const appointmnet = (args.element && args.element.classList.contains('e-appointment') ? args.element : closest(args.element, '.e-appointment'));
        if (!eventsData || !appointmnet) {
            return;
        }
        const tooltipData = this.tooltipRootsMapRef.current?.get(appointmnet);
        if (tooltipData) {
            tooltipData.root.unmount();
            tooltipData.container.remove();
            this.tooltipRootsMapRef.current?.delete(appointmnet);
        }
        const eventDetails = this.scheduleRef.getEventDetails(appointmnet);
        if (!eventDetails) {
            return;
        }
        const roleId = eventDetails.RoleId;
        const designationId = eventDetails.DesignationId;
        const employeeName = eventDetails.Subject;
        let employeesData = [];
        let shiftsData = [];
        let filteredData = eventsData.filter((item) => item.Description.toLowerCase().includes('swap-request') &&
            item.RoleId === roleId &&
            item.DesignationId === designationId &&
            item.Subject !== employeeName);
        filteredData.forEach((item) => {
            if (employeesData.length === 0 || !employeesData.some((EmpItem) => EmpItem.name === item.Subject)) {
                employeesData.push({ id: item.DesignationId, name: item.Subject, employeeId: item.EmployeeId });
            }
            shiftsData.push({
                id: shiftsData.length + 1,
                name: `${this.intl.formatDate(new Date(item.StartTime), { skeleton: 'MMMd' })} ${this.getTimeString(new Date(item.StartTime))} - ${this.intl.formatDate(new Date(item.EndTime), { skeleton: 'MMMd' })} ${this.getTimeString(new Date(item.EndTime))}`,
                designationId: item.DesignationId,
                employeeId: item.EmployeeId,
                eventId: item.Id,
            });
        });
        this.setState({
            requestedShift: { id: eventDetails.Id, name: employeeName },
            shiftsData,
            employeeNamesList: employeesData,
            dialogVisible: true
        });
    }
    employeeNameChange(args) {
        if (args.itemData) {
            const { shiftsData } = this.state;
            let shiftColl = shiftsData.filter((item) => item.designationId === args.itemData.id && item.employeeId === args.itemData.employeeId);
            this.setState({
                shiftList: shiftColl,
                selectedEmployee: args.itemData
            });
        }
    }
    shiftChange(args) {
        this.setState({ selectedShift: args.itemData });
    }
    // Generating appointment element
    getEventElement(props, element) {
        const { Subject = '', Description = '', StartTime, EndTime } = props;
        const isSwappedEvent = Subject.includes('swapped');
        let isLeaveReplacedEvent = Subject.includes('covers for');
        const isLeave = Description.toLowerCase().includes('leave') && !isLeaveReplacedEvent;
        let employeeName = isLeaveReplacedEvent ? Subject.split('covers for')[0].trim() : (isSwappedEvent ? Subject.match(/with ([A-Za-z]+)'s shift/)[1] : Subject);
        let matchedEmployee = this.employeeImages.filter((item) => item.name === employeeName);
        let imageUrl = matchedEmployee[0]?.image;
        // Create the main wrapper div
        const templateWrap = document.createElement('div');
        templateWrap.className = 'template-wrap';
        // Create the staff container div
        const staffWrap = document.createElement('div');
        staffWrap.className = 'e-staff';
        // Create the staff image div
        const staffImage = document.createElement('img');
        staffImage.className = 'staff-image';
        staffImage.src = imageUrl;
        // Create the staff info div
        const staffInfo = document.createElement('div');
        staffInfo.className = 'staff-info';
        // Create and append the staff name
        const name = document.createElement('div');
        name.className = 'e-name';
        name.innerHTML = isLeave ? Description.split('(')[0].trim() : employeeName;
        // Create and append the staff designation
        const designation = document.createElement('div');
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
    }
    onEventRendered(args) {
        const data = args.data;
        const element = args.element;
        const startHour = data.StartTime.getHours();
        element.classList.add(startHour === 7 ? 'morning-shift' : 'evening-shift');
        const innerWrap = element.querySelector('.e-inner-wrap');
        if (innerWrap) {
            innerWrap.innerHTML = '';
            const elementToAppend = this.getEventElement(data, element);
            const appointmentWidth = parseInt(element.style.width.split('px')[0], 10) - 5;
            element.style.width = `${appointmentWidth}px`;
            innerWrap.appendChild(elementToAppend);
            if (!element.classList.contains('e-read-only')) {
                const groupIndex = parseInt(element.getAttribute('data-group-index'), 10);
                const classToAdd = groupIndex === 0 ? 'doctors-event' :
                    groupIndex === 1 ? 'nurses-event' : 'staffs-event';
                element.classList.add(classToAdd);
            }
        }
        // Handling tooltips
        const appendTooltipIcon = (iconClass, tooltipText, onClick) => {
            let reactContainer = element.querySelector('.e-icon-element');
            if (!reactContainer) {
                reactContainer = document.createElement('span');
                reactContainer.className = 'e-icon-element';
                element.appendChild(reactContainer);
            }
            const IconWithTooltipRenderer = () => {
                const iconRef = React.useRef(null);
                React.useEffect(() => {
                    const el = iconRef.current;
                    if (el && onClick) {
                        el.addEventListener('click', (e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            onClick(e);
                        });
                        return () => el.removeEventListener('click', onClick);
                    }
                }, []);
                return (<TooltipComponent cssClass='shift-management-tooltip' content={tooltipText} position='RightCenter'>
            <span ref={iconRef} className={`e-icons ${iconClass}`} style={{ cursor: 'pointer' }}></span>
          </TooltipComponent>);
            };
            const root = ReactDOM.createRoot(reactContainer);
            root.render(<IconWithTooltipRenderer />);
            this.tooltipRootsMapRef.current?.set(element, { root, container: reactContainer });
        };
        // Handling leave events
        if (data.Description?.toLowerCase().includes('leave')) {
            element.classList.add('event-leave');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-leave', `${data.Subject} is on leave. To cover this shift, drag a staff member with the same designation from the available list and drop them here.`);
            }
        }
        // Handling leave replaced events
        if (data.Subject?.includes('covers for')) {
            element.classList.add('e-covers');
            element.classList.remove('event-leave');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-replaced sf-employee-shift-icons-user-replace', 'Leave covered by replacement');
            }
        }
        // Handling swap request events
        if (data.Description?.toLowerCase().includes('swap-request') &&
            !data.Subject?.toLowerCase().includes('swapped') &&
            this.scheduleRef.currentView !== 'Agenda') {
            element.classList.add('event-swap');
            appendTooltipIcon('e-swap sf-employee-shift-icons-replace-request', 'Click here to swap shift', (event) => {
                const target = event.target;
                if (target.classList.contains('sf-employee-shift-icons-replace-request') ||
                    target.classList.contains('e-swap') ||
                    target.closest('.e-icons')) {
                    this.requestShiftSwap(args);
                }
            });
        }
        // Handling shift swapped events
        if (data.Subject?.toLowerCase().includes('swapped')) {
            element.classList.remove('event-swap');
            element.classList.add('event-swapped');
            if (this.scheduleRef.currentView !== 'Agenda') {
                appendTooltipIcon('e-swapped sf-employee-shift-icons-replace-accepted', 'This shift has been swapped');
            }
        }
    }
    treeTemplate(props) {
        return (<div id="waiting">
        <div id="waitdetails">
          <img className="employee-image" src={this.imageMap[props.Name.toLowerCase()]} alt="Employee"/>
          <div className="text-container">
            <div id="waitlist">{props.Name}</div>
            <div id="waitcategory">{props.Description}</div>
          </div>
        </div>
      </div>);
    }
    onTreeDragStop(event) {
        let classElement = this.scheduleRef.element.querySelector('.e-device-hover');
        if (classElement) {
            classElement.classList.remove('e-device-hover');
        }
        event.cancel = true;
        let scheduleElement = closest(event.target, '.e-content-wrap');
        if (scheduleElement) {
            let treeviewData = this.allStaffsTreeRef.current.fields.dataSource;
            let target = closest(event.target, '.e-appointment.event-leave');
            if (target) {
                const filteredData = treeviewData.filter((item) => item.Id === parseInt(event.draggedNodeData.id, 10));
                let eventDetails = { ...this.scheduleRef.getEventDetails(target) };
                const role = this.employeeRole.filter((item) => item.id === parseInt(eventDetails.RoleId, 10))[0].role;
                const designation = this.designationsData.filter((item) => item.id === parseInt(eventDetails.DesignationId, 10))[0].name;
                if (role === filteredData[0].role && designation === filteredData[0].Description) {
                    eventDetails.Subject = filteredData[0].Name + ' covers for ' + eventDetails.Subject;
                    eventDetails.Designation = filteredData[0].Description;
                    this.isDraggedItemDropped = true;
                    this.scheduleRef.openEditor(eventDetails, 'EditOccurrence');
                }
            }
        }
        document.body.classList.remove('e-disble-not-allowed');
    }
    onTreeDragStart(args) {
        this.draggedItemId = args.draggedNodeData.id;
        document.body.classList.add('e-disble-not-allowed');
    }
    createAgendaToolbar() {
        const scheduleToolbar = this.scheduleRef.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar)
            return;
        let existingToolbar = scheduleToolbar.querySelector('.agenda-toolbar');
        if (existingToolbar)
            return;
        const toolbarElement = document.createElement('div');
        toolbarElement.id = 'agenda-toolbar-container';
        scheduleToolbar.appendChild(toolbarElement);
        const toolbarJSX = (<ToolbarComponent cssClass='agenda-toolbar' overflowMode="Scrollable" width="100%">
        <ItemsDirective>
          <ItemDirective cssClass='tooltip-chips' type="Input" template={this.getAgendaToolbarChips} overflow="Show" align="Left"/>
          <ItemDirective cssClass='tooltip-ddl' type="Input" template={this.getAgendaToolbarDropDownList} overflow="Show" align="Right"/>
        </ItemsDirective>
      </ToolbarComponent>);
        this.agendaToolbarRoot = ReactDOM.createRoot(toolbarElement);
        this.agendaToolbarRoot.render(toolbarJSX);
    }
    handleChipBeforeClick(args, isExternalChipClick) {
        this.currentChipIndex = args.index;
        this.previousChipIndex = (isExternalChipClick ? this.externalChipsRef.current?.selectedChips : this.toolbarChipsRef.current?.selectedChips);
        if (this.currentChipIndex === this.previousChipIndex) {
            args.cancel = true;
        }
    }
    chipClick(args) {
        this.currentChipIndex = (this.externalChipsRef.current?.selectedChips ?? 0);
        let treeRefs = [this.allStaffsTreeRef, this.doctorsTreeRef, this.nursesTreeRef, this.staffsTreeRef];
        const previousTree = treeRefs[this.previousChipIndex]?.current;
        const activeTree = treeRefs[this.currentChipIndex]?.current;
        if (previousTree?.element) {
            previousTree.element.style.display = 'none';
        }
        if (activeTree?.element) {
            activeTree.element.style.display = '';
            activeTree.fields.dataSource = this.currentChipIndex === 0 ? this.allData : this.filterData(this.allData, this.rolesData[this.currentChipIndex]);
        }
    }
    filterData(dataSource, value) {
        let newData = dataSource.filter((data) => data.role === value);
        return newData;
    }
    onNavigating = (args) => {
        const scheduleToolbar = this.scheduleRef.element.querySelector('.e-schedule-toolbar-container');
        if (!scheduleToolbar || args.action !== 'view')
            return;
        if (args.currentView === 'Agenda') {
            this.createAgendaToolbar();
        }
        else {
            const toolbarContainer = scheduleToolbar.querySelector('#agenda-toolbar-container');
            if (toolbarContainer) {
                if (this.agendaToolbarRoot) {
                    this.agendaToolbarRoot.unmount();
                    this.agendaToolbarRoot = null;
                }
                toolbarContainer.remove();
            }
            if (this.scheduleRef.eventSettings.query) {
                this.scheduleRef.eventSettings.query.queries = [];
            }
        }
    };
    onDropDownListChange(args) {
        const employeeName = args.itemData?.value;
        const query = employeeName ? new Query().where('Subject', 'contains', employeeName, true) : new Query().where('RoleId', 'contains', this.toolbarChipsRef.current?.selectedChips || '', true);
        this.scheduleRef.eventSettings.query = query;
        this.dropdownListRef.current.focusIn();
    }
    onDropDownListBeforeOpen() {
        const activeChipIndex = this.toolbarChipsRef.current?.selectedChips;
        const allEvents = this.scheduleRef.eventSettings.dataSource;
        const relevantEvents = activeChipIndex === 0
            ? allEvents
            : allEvents.filter((item) => item.RoleId === activeChipIndex);
        const uniqueSubjects = Array.from(new Set(relevantEvents
            .map((obj) => obj.Subject)
            .filter(subject => !subject.toLowerCase().includes('covers') &&
            !subject.toLowerCase().includes('swapped'))));
        this.dropdownListRef.current.dataSource = uniqueSubjects;
    }
    getAgendaToolbarChips() {
        return (<div>
        <ChipListComponent ref={this.toolbarChipsRef} id="chip-avatar" selection="Single" cssClass="e-outline" selectedChips={[0]} aria-labelledby="choiceChips" beforeClick={(args) => this.handleChipBeforeClick(args, true)} click={this.agendaChipsClick}>
          <ChipsDirective>
            <ChipDirective text="All"/>
            <ChipDirective text="Doctors"/>
            <ChipDirective text="Nurses"/>
            <ChipDirective text="Staffs"/>
          </ChipsDirective>
        </ChipListComponent>
      </div>);
    }
    getAgendaToolbarDropDownList() {
        return (<div style={{ width: '230px' }}>
        <DropDownListComponent ref={this.dropdownListRef} dataSource={[]} value='' change={this.onDropDownListChange} placeholder="Select an employee" popupHeight="220px" showClearButton={true} beforeOpen={this.onDropDownListBeforeOpen}/>
      </div>);
    }
    agendaChipsClick(args) {
        this.dropdownListRef.current.dataSource = [];
        this.dropdownListRef.current.value = null;
        this.dropdownListRef.current.dataBind();
        this.dropdownListRef.current.focusOut();
        const query = new Query().where('RoleId', 'contains', args.index || '', true);
        this.scheduleRef.eventSettings.query = query;
    }
    editorHeaderTemplate(props) {
        return (<div id="event-header">Leave Replacement</div>);
    }
    agendaTemplate(props) {
        const roleItem = this.employeeRole.find((item) => item.id === parseInt(props.RoleId, 10));
        const designationItem = this.designationsData.find((item) => item.id === parseInt(props.DesignationId, 10));
        const role = roleItem?.role;
        const designation = designationItem?.name;
        const isEmployeeLeave = props.Description.toLowerCase().includes('leave');
        return (<div className="agenda-event">
        <div className='e-staff'>
          <div className='staff-image'>
            {props.Subject.charAt(0)}
          </div>
          <div className='event-details'>
            <div className="staff-info">
              <span className='staff-name'>{props.Subject} </span>
              <span className='staff-role'>{role} </span>
              <span className="staff-designation">
                ({designation}){isEmployeeLeave ? ' - ' : ''}
              </span>
              {isEmployeeLeave && (<span className="staff-availability">On Leave</span>)}
            </div>
            <div className="event-time">Shift Time: {this.getTimeString(props.StartTime) + ' - ' + this.getTimeString(props.EndTime)}
            </div>
          </div>
        </div>
      </div>);
    }
    onPopupOpen(args) {
        const isEditorPopup = args.type === 'Editor';
        if (isEditorPopup) {
            if (!this.isDraggedItemDropped) {
                args.cancel = true;
                return;
            }
            args.element.classList.add('shift-management-editor-popup');
        }
    }
    onPopupClose(args) {
        if (args.type === 'Editor') {
            if (args.event.target.classList.contains('e-event-save')) {
                let treeRefs = [this.allStaffsTreeRef, this.doctorsTreeRef, this.nursesTreeRef, this.staffsTreeRef];
                const activeTreeRef = treeRefs[this.currentChipIndex];
                const treeObj = activeTreeRef?.current;
                if (treeObj && this.draggedItemId) {
                    const draggedId = parseInt(this.draggedItemId, 10);
                    // Remove dragged item from treeView dataSource
                    const updatedTreeData = treeObj.fields.dataSource.filter((item) => item.Id !== draggedId);
                    treeObj.fields.dataSource = updatedTreeData;
                    // Remove dragged DOM elements
                    document.querySelectorAll('.e-drag-item.shift-management-treeview').forEach(el => remove(el));
                    // Remove from allData
                    this.allData = this.allData.filter(item => item.Id !== draggedId);
                    // Update Description
                    if (args.data?.Description?.includes('Leave')) {
                        args.data.Description.replace('Leave ', 'Available ');
                    }
                }
            }
            this.isDraggedItemDropped = false;
        }
    }
    ;
    onCellClick(args) {
        args.cancel = true;
    }
    onEventClick(args) {
        if (args.event.IsReadonly) {
            args.cancel = true;
        }
    }
    setAgendaContentHeight() {
        const agendaContentElement = this.scheduleRef.element.querySelector('.e-table-wrap.e-agenda-view .e-schedule-table .e-content-wrap');
        if (agendaContentElement) {
            const agendaToolbarHeight = '72px';
            agendaContentElement.style.height = (parseFloat(agendaContentElement.style.height) - parseFloat(agendaToolbarHeight)) + 'px';
        }
    }
    onActionComplete(args) {
        if (args.requestType === 'viewNavigate' || args.requestType === 'dateNavigate') {
            this.setAgendaContentHeight();
        }
        else if (args.requestType === "toolBarItemRendered" && this.scheduleRef.currentView === 'Agenda') {
            this.createAgendaToolbar();
            setTimeout(() => {
                this.setAgendaContentHeight();
            });
        }
    }
    render() {
        return (<div className='schedule-control-section shift-management-control-section'>
        <div className='col-lg-12 control-section'>
          <div className='control-wrapper shift-management-sample-wrapper'>
            <ScheduleComponent id='schedule' ref={(schedule) => this.scheduleRef = schedule} currentView="TimelineWeek" selectedDate={this.selectedDate} cssClass='schedule-shift-management' width='100%' height='550px' group={this.group} startHour="07:00" endHour='23:00' eventSettings={{ dataSource: this.eventsData, query: this.filteredQuery }} timeScale={this.timeScale} workHours={this.workHours} showTimeIndicator={true} eventRendered={this.onEventRendered} navigating={this.onNavigating} editorHeaderTemplate={this.editorHeaderTemplate} popupOpen={this.onPopupOpen} popupClose={this.onPopupClose} cellClick={this.onCellClick} eventClick={this.onEventClick} actionComplete={this.onActionComplete.bind(this)}>
              <ViewsDirective>
                <ViewDirective option="TimelineWeek"/>
                <ViewDirective option='Agenda' eventTemplate={this.agendaTemplate}/>
              </ViewsDirective>
              <ResourcesDirective>
                <ResourceDirective field="RoleId" title="Roles" name="Roles" allowMultiple={false} dataSource={this.employeeRole} textField="role" idField="id"/>
                <ResourceDirective field="DesignationId" title="Designations" name="Designations" allowMultiple={false} dataSource={this.designationsData} textField="name" idField="id" groupIDField="groupId"/>
              </ResourcesDirective>
              <Inject services={[TimelineViews, Agenda]}/>
              <ToolbarItemsDirective>
                <ToolbarItemDirective name='Previous' align='Left'></ToolbarItemDirective>
                <ToolbarItemDirective name='Next' align='Left'></ToolbarItemDirective>
                <ToolbarItemDirective name='DateRangeText' align='Left'></ToolbarItemDirective>
                <ToolbarItemDirective name='Views' align='Right'></ToolbarItemDirective>
              </ToolbarItemsDirective>
            </ScheduleComponent>
            <div className='treeview-container'>
              <div className="title-text"><span>Available List</span></div>
              <div className="role-tabs">
                <ChipListComponent ref={this.externalChipsRef} id="chip-avatar" selection="Single" cssClass="e-outline" selectedChips={[0]} aria-labelledby="choiceChips" beforeClick={(args) => this.handleChipBeforeClick(args, true)} click={this.chipClick}>
                  <ChipsDirective>
                    <ChipDirective text="All"/>
                    <ChipDirective text="Doctors"/>
                    <ChipDirective text="Nurses"/>
                    <ChipDirective text="Staffs"/>
                  </ChipsDirective>
                </ChipListComponent>
              </div>
              <TreeViewComponent ref={this.allStaffsTreeRef} id="allStaffsTreeview" cssClass='shift-management-treeview' style={{ display: 'block' }} dragArea=".shift-management-sample-wrapper" nodeTemplate={this.treeTemplate} fields={this.allStaffsTreeFields} nodeDragStop={this.onTreeDragStop} nodeDragStart={this.onTreeDragStart} allowDragAndDrop={this.allowDragAndDrop}/>
              <TreeViewComponent ref={this.doctorsTreeRef} id="doctorsTreeview" cssClass='shift-management-treeview' style={this.styleNone} dragArea=".shift-management-sample-wrapper" nodeTemplate={this.treeTemplate} fields={this.doctorsTreeFields} nodeDragStop={this.onTreeDragStop} nodeDragStart={this.onTreeDragStart} allowDragAndDrop={this.allowDragAndDrop}/>
              <TreeViewComponent ref={this.nursesTreeRef} id="nursesTreeview" cssClass='shift-management-treeview' style={this.styleNone} dragArea=".shift-management-sample-wrapper" nodeTemplate={this.treeTemplate} fields={this.nursesTreeFields} nodeDragStop={this.onTreeDragStop} nodeDragStart={this.onTreeDragStart} allowDragAndDrop={this.allowDragAndDrop}/>
              <TreeViewComponent ref={this.staffsTreeRef} id="staffsTreeview" cssClass='shift-management-treeview' style={this.styleNone} dragArea=".shift-management-sample-wrapper" nodeTemplate={this.treeTemplate} fields={this.staffsTreeFields} nodeDragStop={this.onTreeDragStop} nodeDragStart={this.onTreeDragStart} allowDragAndDrop={this.allowDragAndDrop}/>
            </div>
            <div id="target" style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 9999,
                display: this.state.dialogVisible ? 'block' : 'none'
            }}>
              <DialogComponent id="modalDialog" cssClass='swap-dialog' height='240px' width='378px' isModal={true} buttons={this.getButtons()} header="Shift swap" visible={this.state.dialogVisible} showCloseIcon={true} animationSettings={this.animationSettings} open={this.dialogOpen} close={this.dialogClose}>
                <div className='e-shift-swap'>
                  <div>
                    <label>Select an employee(Available for swapping)</label>
                    <DropDownListComponent dataSource={this.state.employeeNamesList} fields={{ text: 'name', value: 'id' }} change={this.employeeNameChange} placeholder="Select an employee"/>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <label>Select shift</label>
                    <DropDownListComponent ref={this.shiftDropdownListRef} dataSource={this.state.shiftList} fields={{ text: 'name', value: 'id' }} placeholder="Select shift" change={this.shiftChange}/>
                  </div>
                </div>
              </DialogComponent>
            </div>
          </div>
        </div>
        <div id="action-description">
          <p>This demo shows efficient employee shift management using the Scheduler, including shift scheduling, swapping, highlighting staff unavailability, and seamlessly assigning leave replacements using drag-and-drop.</p>
        </div>
        <div id="description">
          <p>In this demo, employees are categorized by roles (Doctors, nurses, and support staff) and designations, with two daily shifts: Morning (7 AM – 3 PM) and Evening (3 PM – 11 PM). Past shifts are disabled for clarity.</p>
          <p>
            <strong>Shift Swapping</strong>
          </p>
          <p>Shifts can be swapped between employees with the same designation using the swap request icon. The updated shift is highlighted with a swap icon, and details are available in the quick info popup.</p>
          <p>
            <strong>Leave Replacement</strong>
          </p>
          <p>To cover leave, drag and drop available staff from the same designation. The appointment updates with a replacement icon, and details appear in the quick info popup.</p>
          <p>
            <strong>Filtering</strong>
          </p>
          <p>Filter shifts by role or employee name in the agenda view to check staff availability and for shift management.</p>
          <p>
            Looking for the full React Scheduler component overview, features, pricing, and documentation? Visit our <a target="_blank" href="https://www.syncfusion.com/react-components/react-scheduler">React Scheduler</a> component page.
          </p>
        </div>
      </div>);
    }
}
