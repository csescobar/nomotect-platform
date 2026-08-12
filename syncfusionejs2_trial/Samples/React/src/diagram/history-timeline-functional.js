"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var sample_base_1 = require("../common/sample-base");
// Timeline Event Index Table
var indexTable = [];
// Timeline Events
var timelineEvents = [
    { year: '1969', title: 'ARPANET', description: 'ARPANET, the precursor to the Internet, is created by the U.S. Department of Defense\'s Advanced Research Projects Agency (ARPA).', icon: 'sf-icon-arpanet' },
    { year: '1983', title: 'Birth of the Internet', description: 'ARPANET switches to TCP/IP, marking the official birth of the Internet.', icon: 'sf-icon-birth-internet' },
    { year: '1991', title: 'Internet Goes Public', description: 'The World Wide Web is released to the public, making the Internet accessible to a broader audience.', icon: 'sf-icon-internet-public' },
    { year: '1993', title: 'First Web Browser', description: 'The first web browser, Mosaic, is released, making it easier for people to access the World Wide Web.', icon: 'sf-icon-first-web-browser' },
    { year: '1995', title: 'Commercialization of the Internet', description: 'The U.S. government lifts restrictions on commercial use of the Internet, leading to the rise of commercial websites and e-commerce.', icon: 'sf-icon-commercialization' },
    { year: '1998', title: 'Google Founded', description: 'Google is founded by Larry Page and Sergey Brin, revolutionizing how people search for information online.', icon: 'sf-icon-google-found' },
    { year: '2004', title: 'Social Media Boom', description: 'Facebook is launched, marking the beginning of the social media era.', icon: 'sf-icon-social-media' },
    { year: '2005', title: 'YouTube Launched', description: 'YouTube is launched, becoming a major platform for sharing and viewing video content.', icon: 'sf-icon-youtube' },
    { year: '2007', title: 'iPhone Released', description: 'Apple releases the first iPhone, transforming mobile internet usage and leading to the proliferation of mobile apps.', icon: 'sf-icon-i-phone' },
    { year: '2010', title: 'Cloud Computing', description: 'Cloud computing becomes mainstream, allowing for more flexible and scalable internet services.', icon: 'sf-icon-cloud-computing' },
    { year: '2014', title: 'Internet of Things (IoT)', description: 'The Internet of Things (IoT) gains significant traction, connecting everyday devices to the internet.', icon: 'sf-icon-internet-of-things' },
    { year: '2020', title: 'Remote Work', description: 'The COVID-19 pandemic accelerates the adoption of remote work, online education, and digital communication.', icon: 'sf-icon-remote-work' },
    { year: '2021', title: '5G Rollout', description: 'The global rollout of 5G networks begins, promising significantly faster internet speeds and lower latency.', icon: 'sf-icon-5g-network' },
    { year: '2022', title: 'Metaverse Development', description: 'Major technology companies begin to invest heavily in the development of the metaverse, virtual and augmented reality spaces.', icon: 'sf-icon-metaverse' },
    { year: '2023', title: 'Quantum Internet', description: 'Continued research and development in quantum computing and quantum internet technology aim to revolutionize data security and processing speeds.', icon: 'sf-icon-quantum-internet' },
    { year: '2025', title: 'IoT Pervasiveness', description: 'The Internet of Things becomes more pervasive, with smart devices deeply integrated into daily life and industry.', icon: 'sf-icon-iot-pervasiveness' },
    { year: '2030', title: 'Autonomous Vehicles', description: 'The widespread adoption of autonomous vehicles becomes more common, relying heavily on the internet for communication, navigation, and updates.', icon: 'sf-icon-autonomous-vehicle' },
    { year: '2035', title: 'Advanced AI Integration', description: 'Advanced AI systems are fully integrated into internet services, offering more personalized and efficient user experiences.', icon: 'sf-icon-advance-ai' },
];
// Components
var diagram;
var diagramCreated;
var dialog;
var yearTextBox;
var titleTextBox;
var describeTextBox;
var imageTextBox;
var formValidator;
// Represent current selected event index in index table
var editTimeLineIndex;
var selectedNode;
var selectedUserHandle;
var eventColors = [
    '#FEC200', '#43C94C', '#3D95F6', '#FF3343', '#CDDE1F', '#00897B',
    '#7F38CD', '#FF2667', '#00BCD7', '#F47B10', '#576ADE', '#91521B'
];
var startX = 100;
var startY = 100;
var nodeSpacing = 200;
var alternateOffset = 200;
var baseLine = 300;
var nodes = createTimelineNodes();
var connectors = createTimelineConnectors();
function createTimelineNodes() {
    var diagramNodes = [];
    // Create main timeline line
    var timelineLine = {
        id: 'timeline_line',
        offsetX: (timelineEvents.length * nodeSpacing) / 2,
        offsetY: baseLine,
        width: (timelineEvents.length) * nodeSpacing,
        height: 10,
        constraints: ej2_react_diagrams_1.NodeConstraints.None,
        shape: {
            type: 'HTML',
            content: "\n  <div style=\"display: flex; width: 100%; height: 100%;\">\n    ".concat(timelineEvents.map(function (_event, index) {
                var colorIndex = index % eventColors.length;
                var nodeColor = eventColors[colorIndex];
                return "<div style=\"flex: 1; background-color: ".concat(nodeColor, "; height: 100%;\"></div>");
            }).join(''), "\n  </div>\n"),
        },
    };
    diagramNodes.push(timelineLine);
    timelineEvents.forEach(function (event, index) {
        var colorIndex = index % eventColors.length;
        var nodeColor = eventColors[colorIndex];
        var isOdd = (index + 1) % 2 !== 0;
        var x = startX + (index * nodeSpacing);
        var y = isOdd ? startY : baseLine + alternateOffset;
        // Timeline Event Node
        var timelineNode = {
            id: "timeline_".concat(index),
            offsetX: x,
            offsetY: y,
            width: 130,
            height: 100,
            constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~ej2_react_diagrams_1.NodeConstraints.Select,
            tooltip: {
                content: "".concat(event.year, ": ").concat(event.description),
                position: isOdd ? 'TopCenter' : 'BottomCenter',
                relativeMode: 'Object',
                animation: { open: { delay: 1000 } }
            },
            style: { fill: 'none' },
            shape: {
                type: 'HTML',
                content: getEventNodeTemplate(nodeColor, event)
            }
        };
        //Timeline Year Marker Node
        var yearMarker = {
            id: "marker_".concat(index),
            offsetX: x,
            offsetY: baseLine,
            width: 150,
            height: 50,
            constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~(ej2_react_diagrams_1.NodeConstraints.Drag | ej2_react_diagrams_1.NodeConstraints.Delete),
            addInfo: { eventIndex: index },
            shape: {
                type: 'HTML',
                content: getYearNodeTemplate(event.year)
            }
        };
        diagramNodes.push(timelineNode, yearMarker);
        // Push node to index table to maintain event order
        indexTable.push(index.toString());
    });
    return diagramNodes;
}
function createTimelineConnectors() {
    var diagramConnectors = [];
    timelineEvents.forEach(function (_event, index) {
        var colorIndex = index % eventColors.length;
        var strokeColor = eventColors[colorIndex];
        var connector = {
            id: "connector_".concat(index),
            sourceID: "timeline_".concat(index),
            targetID: "marker_".concat(index),
            constraints: ej2_react_diagrams_1.ConnectorConstraints.None,
            style: {
                strokeColor: strokeColor,
                strokeWidth: 2
            },
            type: 'Straight',
            targetDecorator: {
                shape: 'None'
            },
            sourceDecorator: {
                shape: 'None'
            },
        };
        diagramConnectors.push(connector);
    });
    return diagramConnectors;
}
// Function to Edit current selected event node
function editTimelineNode(editTimeLineIndex, timeLine) {
    // Update the timeline node content
    var timelineNode = diagram.getObject("timeline_".concat(indexTable[editTimeLineIndex]));
    if (timelineNode) {
        var colorIndex = editTimeLineIndex % eventColors.length;
        var nodeColor = eventColors[colorIndex];
        timelineNode.shape.content = getEventNodeTemplate(nodeColor, timeLine);
        // Update tooltip
        if (timelineNode.tooltip) {
            timelineNode.tooltip.content = "".concat(timeLine.year, ": ").concat(timeLine.description);
        }
    }
    // Update the year marker content
    var markerNode = diagram.getObject("marker_".concat(indexTable[editTimeLineIndex]));
    if (markerNode) {
        markerNode.shape.content = getYearNodeTemplate(timeLine.year);
    }
}
// Function to update node positions after inserting a new event
function updateNodePositions(fromIndex) {
    // Update positions for all nodes from the insertion point onwards
    for (var i = fromIndex; i < indexTable.length; i++) {
        var isOdd = (i + 1) % 2 !== 0;
        var x = startX + (i * nodeSpacing);
        var y = isOdd ? startY : baseLine + alternateOffset;
        var colorIndex = i % eventColors.length;
        var nodeColor = eventColors[colorIndex];
        // Update timeline node position
        var timelineNode = diagram.getObject("timeline_".concat(indexTable[i]));
        if (timelineNode) {
            timelineNode.offsetX = x;
            timelineNode.offsetY = y;
            // Updating time line node color to match time line event segment color
            timelineNode.shape.content = getEventNodeTemplate(nodeColor, timelineEvents[i]);
            timelineNode.tooltip.position = isOdd ? 'TopCenter' : 'BottomCenter';
        }
        // Update marker node position
        var markerNode = diagram.getObject("marker_".concat(indexTable[i]));
        if (markerNode) {
            markerNode.offsetX = x;
            markerNode.addInfo.eventIndex = i;
        }
        // Update connector color
        var connector = diagram.getObject("connector_".concat(indexTable[i]));
        if (connector) {
            connector.style.strokeColor = nodeColor;
        }
    }
    // Update timeline line width
    var timelineLine = diagram.getObject('timeline_line');
    if (timelineLine) {
        timelineLine.offsetX = (timelineEvents.length * nodeSpacing) / 2;
        timelineLine.width = (timelineEvents.length) * nodeSpacing;
        // Update timeline line content with new colors
        timelineLine.shape.content = "\n  <div style=\"display: flex; width: 100%; height: 100%;\">\n    ".concat(timelineEvents.map(function (_event, index) {
            var colorIndex = index % eventColors.length;
            var nodeColor = eventColors[colorIndex];
            return "<div style=\"flex: 1; background-color: ".concat(nodeColor, "; height: 100%;\"></div>");
        }).join(''), "\n  </div>\n");
    }
}
// Function to add a new timeline event node
function addNewTimelineEvent(insertIndex, newEvent) {
    var colorIndex = insertIndex % eventColors.length;
    var nodeColor = eventColors[colorIndex];
    var isOdd = (insertIndex + 1) % 2 !== 0;
    var x = startX + (insertIndex * nodeSpacing);
    var y = isOdd ? startY : baseLine + alternateOffset;
    var id = (0, ej2_react_diagrams_1.randomId)();
    // Create new timeline node
    var timelineNode = {
        id: "timeline_".concat(id),
        offsetX: x,
        offsetY: y,
        width: 130,
        height: 100,
        constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~ej2_react_diagrams_1.NodeConstraints.Select,
        style: { fill: 'none' },
        tooltip: {
            content: "".concat(newEvent.year, ": ").concat(newEvent.description),
            position: isOdd ? 'TopCenter' : 'BottomCenter',
            relativeMode: 'Object',
            animation: { open: { delay: 1000 } }
        },
        shape: {
            type: 'HTML',
            content: getEventNodeTemplate(nodeColor, newEvent),
        }
    };
    // Create new year marker node
    var yearMarker = {
        id: "marker_".concat(id),
        offsetX: x,
        offsetY: baseLine,
        width: 170,
        height: 50,
        constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~(ej2_react_diagrams_1.NodeConstraints.Drag),
        addInfo: { eventIndex: insertIndex },
        shape: {
            type: 'HTML',
            content: getYearNodeTemplate(newEvent.year)
        }
    };
    // Create new connector
    var connector = {
        id: "connector_".concat(id),
        sourceID: "timeline_".concat(id),
        targetID: "marker_".concat(id),
        constraints: ej2_react_diagrams_1.ConnectorConstraints.None,
        style: {
            strokeColor: nodeColor,
            strokeWidth: 2
        },
        type: 'Straight',
        targetDecorator: { shape: 'None' },
        sourceDecorator: { shape: 'None' },
    };
    // Push node to index table to maintain event order
    indexTable.splice(insertIndex, 0, id);
    // Add new nodes and connector to diagram
    diagram.add(timelineNode);
    diagram.add(yearMarker);
    diagram.add(connector);
}
// functions to return HTML Templates
function getEventNodeTemplate(nodeColor, event) {
    if (event.imageUrl) {
        return "<div style=\"width: 100%; height: 100%; background-color: ".concat(nodeColor, "; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 5px; padding: 5px; box-sizing: border-box;\">\n                <div style=\"margin-bottom: 4px;\">\n                    <img src=\"").concat(event.imageUrl, "\" alt=\"Event Image\" style=\"max-width: 100%; max-height: 60px; border-radius: 3px;\" />\n                </div>\n                <div style=\"font-size: 12px; color: #333; text-align: center; line-height: 1.2;\">\n                    <strong>").concat(event.title, "</strong>\n                </div>\n            </div>");
    }
    else {
        return "<div style=\"width: 100%; height: 100%; background-color: ".concat(nodeColor, "; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 5px; padding: 5px; box-sizing: border-box;\">\n                <div class=\"").concat(event.icon, "\" style=\"margin-bottom: 4px;\"></div>\n                <div style=\"font-size: 12px; color: #333; text-align: center; line-height: 1.2;\">\n                    <strong>").concat(event.title, "</strong>\n                </div>\n            </div>");
    }
}
function getYearNodeTemplate(year) {
    return "<div style=\"width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;\">\n          <div style=\"width: 50px; height: 50px; background-color: #333333; color: white; border-radius: 50%; font-size: 12px; display: flex; align-items: center; justify-content: center;\">\n            ".concat(year, "\n          </div>\n        </div>");
}
function checkYearValidity(args) {
    var previousYearIndex = selectedUserHandle === 'Edit Event' ? editTimeLineIndex - 1 : editTimeLineIndex;
    var currentYear = Number(args.value);
    // Validate the current year against the previous event's year, if applicable
    var hasPreviousEvent = previousYearIndex >= 0;
    if (hasPreviousEvent && Number(timelineEvents[previousYearIndex].year) >= currentYear) {
        return false;
    }
    // Validate the current year against the next event's year, if applicable
    var nextYearIndex = editTimeLineIndex + 1;
    var hasNextEvent = nextYearIndex < timelineEvents.length;
    if (hasNextEvent && Number(timelineEvents[nextYearIndex].year) <= currentYear) {
        return false;
    }
    return true;
}
// Check whether next year is immediate year
function checkImmediateEventYear(currentYear) {
    // Ensure no Immediate next year event before adding new event
    var nextYearIndex = currentYear + 1;
    var hasNextEvent = nextYearIndex < timelineEvents.length;
    // Toggle off the new event handle for immediate next year event
    var isImmediateNext = hasNextEvent &&
        Number(timelineEvents[nextYearIndex].year) - Number(timelineEvents[editTimeLineIndex].year) === 1;
    return isImmediateNext;
}
var dialogButtons = [
    {
        buttonModel: { content: 'Submit', isPrimary: true },
        click: onSubmitClicked
    },
    {
        buttonModel: { content: 'Cancel' },
        click: function () { dialog.hide(); }
    }
];
// Dialog Submit Button Clicked
function onSubmitClicked() {
    // Validate Dialog form
    if (!formValidator.validate()) {
        return;
    }
    var year = yearTextBox.value;
    var title = titleTextBox.value;
    var description = describeTextBox.value;
    var imageUrl = imageTextBox.value;
    var icon = 'sf-icon-internet-public';
    var timeLine = { year: year, title: title, description: description, icon: icon, imageUrl: imageUrl };
    if (selectedUserHandle === 'New Event') {
        // Insert new event after the selected node
        var insertIndex = editTimeLineIndex + 1;
        // Insert the new event in Event collection
        timelineEvents.splice(insertIndex, 0, timeLine);
        // Add the new event node after selected node
        addNewTimelineEvent(insertIndex, timeLine);
        // Update positions of all nodes after insertion point
        updateNodePositions(insertIndex + 1);
    }
    else if (selectedUserHandle === 'Edit Event') {
        timeLine.icon = timelineEvents[editTimeLineIndex].icon;
        // Update the timeline event data
        timelineEvents[editTimeLineIndex] = timeLine;
        // Edit the selected event node
        editTimelineNode(editTimeLineIndex, timeLine);
    }
    var isImmediateNext = checkImmediateEventYear(editTimeLineIndex);
    diagram.selectedItems.userHandles[0].visible = !isImmediateNext;
    // Refresh the diagram to show updated changes
    diagram.dataBind();
    dialog.hide();
}
// User handles to create/edit timeline node
var userHandles = [
    {
        name: 'New Event',
        pathData: 'M12.099998,0L19.799995,0 19.799995,12.1 32,12.1 32,19.799996 19.900002,19.799996 19.900002,31.999999 12.199997,31.999999 12.199997,19.900003 0,19.900003 0,12.199999 12.099998,12.199999z',
        offset: 0.5,
        side: 'Right',
        tooltip: { content: 'Add Event' },
    },
    {
        name: 'Edit Event',
        pathData: 'M20.638062,9.6380005L6.6380615,23.638 8.3620605,25.362 22.362061,11.362z M20.5,4.5L27.5,11.5 9,30 0,32 2,23z M27,0C29.760986,0 32,2.2389832 32,5 32,6.1259766 31.628052,7.1640015 31,8L29,10 22,3 24,1C24.83606,0.37197876,25.874023,0,27,0z',
        offset: 0.5,
        side: 'Bottom',
        tooltip: { content: 'Edit Event' },
    },
];
var selectedItems = {
    userHandles: userHandles,
    constraints: ej2_react_diagrams_1.SelectorConstraints.None | ej2_react_diagrams_1.SelectorConstraints.UserHandle | ej2_react_diagrams_1.SelectorConstraints.ToolTip
};
var selectionChange = function (args) {
    if (args.state === 'Changed' && diagram.selectedItems.nodes.length === 1) {
        selectedNode = diagram.selectedItems.nodes[0];
        // Fetch the eventIndex from node's info
        var nodeInfo = selectedNode.addInfo;
        if (nodeInfo && nodeInfo.eventIndex !== undefined) {
            editTimeLineIndex = nodeInfo.eventIndex;
            var isImmediateNext = checkImmediateEventYear(editTimeLineIndex);
            diagram.selectedItems.userHandles[0].visible = !isImmediateNext;
            diagram.selectedItems.userHandles[1].visible = true;
        }
        else {
            editTimeLineIndex = -1;
            diagram.selectedItems.userHandles[0].visible = false;
            diagram.selectedItems.userHandles[1].visible = false;
        }
        diagram.dataBind();
    }
};
var onUserHandleMouseDown = function (args) {
    formValidator.reset();
    if (args.element.name === 'New Event') {
        dialog.header = selectedUserHandle = 'New Event';
        yearTextBox.value = '';
        titleTextBox.value = '';
        describeTextBox.value = '';
        imageTextBox.value = '';
    }
    else if (args.element.name === 'Edit Event') {
        dialog.header = selectedUserHandle = 'Edit Event';
        var timeLine = timelineEvents[editTimeLineIndex];
        yearTextBox.value = timeLine.year;
        titleTextBox.value = timeLine.title;
        describeTextBox.value = timeLine.description;
        imageTextBox.value = timeLine.imageUrl ? timeLine.imageUrl : '';
    }
    dialog.show();
};
var click = function (args) {
    var _a;
    if ((args.element instanceof ej2_react_diagrams_1.Diagram) && ((_a = diagram.selectedItems.nodes) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        diagram.clearSelection();
    }
};
var created = function () {
    diagramCreated = true;
    diagram.fitToPage({ mode: 'Height' });
};
var load = function () {
    setTimeout(function () {
        if (diagramCreated) {
            diagram.fitToPage({ mode: 'Height' });
        }
    }, 10);
};
function HistoryTimelineDiagramComponent() {
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        formValidator = new ej2_react_inputs_1.FormValidator('#form-element', {
            rules: {
                yearInput: {
                    required: true,
                    digits: true,
                    min: 0,
                    maxLength: 4,
                    custom: [checkYearValidity, 'Year must be within valid range compared to adjacent events']
                },
                titleInput: { required: true },
                descriptionInput: { required: true }
            }
        });
    }, []);
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("style", null, STYLECSS),
        React.createElement("div", { id: "timeline-container" },
            React.createElement("div", { id: "timeline-header" },
                React.createElement("h1", null, "Internet History Timeline"),
                React.createElement("p", null, "A comprehensive timeline of key events in Internet development from 1969 to 2035")),
            React.createElement("div", { className: "control-section" },
                React.createElement("div", { className: "content-wrapper", style: { width: "100%" } },
                    React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "timeline-diagram", ref: function (diagramref) { return (diagram = diagramref); }, width: "100%", height: "600", nodes: nodes, connectors: connectors, constraints: ej2_react_diagrams_1.DiagramConstraints.Default & ~ej2_react_diagrams_1.DiagramConstraints.PanY, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan | ej2_react_diagrams_1.DiagramTools.SingleSelect, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, selectedItems: selectedItems, selectionChange: selectionChange, onUserHandleMouseDown: onUserHandleMouseDown, click: click, created: created, load: load, commandManager: {
                            commands: [
                                {
                                    name: 'copy',
                                    canExecute: function () { return false; },
                                },
                                {
                                    name: 'paste',
                                    canExecute: function () { return false; },
                                },
                            ],
                        } }),
                    React.createElement(ej2_react_popups_1.DialogComponent, { ref: function (dialogRef) { return (dialog = dialogRef); }, visible: false, width: "300px", isModal: true, target: "#timeline-container", animationSettings: { effect: 'Zoom' }, buttons: dialogButtons, overlayClick: function () { dialog.hide(); } },
                        React.createElement("div", { style: { padding: '0px 15px 15px 15px' } },
                            React.createElement("form", { id: "form-element", className: "form-horizontal" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "yearInput" }, "Year:"),
                                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { id: "yearInput", name: "yearInput", ref: function (yearInputRef) { return (yearTextBox = yearInputRef); }, floatLabelType: "Never", placeholder: "e.g., 2025", cssClass: "e-outline" })),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "titleInput" }, "Title:"),
                                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { id: "titleInput", name: "titleInput", ref: function (titleInputRef) { return (titleTextBox = titleInputRef); }, floatLabelType: "Never", placeholder: "Event Title", cssClass: "e-outline" })),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "descriptionInput" }, "Description:"),
                                    React.createElement(ej2_react_inputs_1.TextAreaComponent, { id: "descriptionInput", name: "descriptionInput", ref: function (desRef) { return (describeTextBox = desRef); }, floatLabelType: "Never", cssClass: "e-outline", placeholder: "Brief description of the event", resizeMode: "Vertical", rows: 2 })),
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("label", { htmlFor: "imageUrl" }, "Image Url:"),
                                    React.createElement(ej2_react_inputs_1.TextBoxComponent, { id: "imageUrl", name: "imageUrl", ref: function (imgRef) { return (imageTextBox = imgRef); }, floatLabelType: "Never", placeholder: "https://example.com/image.jpg", cssClass: "e-outline" }))))))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample visualizes key milestones in Internet history using the interactive ",
                    React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                    ". Events are presented as nodes on a horizontal timeline, with color-coded sections and customizable event details.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "This interactive timeline displays Internet history events as styled nodes along a central bar, alternating above and below for visual variety. Color-coded segments define historical periods, and tooltip provide event descriptions on hover. Users can dynamically add or edit events, ensuring chronological accuracy with real-time updates.")))));
}
exports.default = HistoryTimelineDiagramComponent;
var STYLECSS = "\n    #timeline-container {\n        border-radius: 10px;\n        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n        margin-bottom: 20px;\n        padding: 20px;\n        background-color: #f5f5f5;\n    }\n    #timeline-header {\n        text-align: center;\n        margin-bottom: 30px;\n    }\n    #timeline-header h1 {\n        color: #333;\n        font-size: 28px;\n        margin-bottom: 10px;\n    }\n    #timeline-header p {\n        color: #666;\n        font-size: 16px;\n        margin: 0;\n    }\n    #timeline-diagram {\n        border: 1px solid #ddd;\n        border-radius: 8px;\n        background: white;\n    }\n    #timeline-container .e-diagram-selector{\n        stroke-width: 0;\n    }\n\n@font-face {\nfont-family: 'History Timeline Font Icon';\nsrc:\nurl(data:application/x-font-ttf;charset=utf-8;base64,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Hw8VMzU/EjsBHwcPBy8DDwQVMz8GOwEfBw8HLwchFTM/BjsBHwcPBy8HIxU7AR8VFQ8HLwc1PwM1LwYjDw4jLw41Lww1PwkvAzU/HwGgCgkJCQgICAYHBQQEBAIBAwQHAgECBAQFBgYGBgUGBAQHBgwLCwoJBwUEAgEDBQYFBQUEBAMCAQECAgMEEAoMBQoJBgUCAQEEBQcJCwwNDw4PDxYGBQUEAwEBAQEDBAUFBgYNDQwNAwUGBwgKCgsMDQ0ODg4NDg4MDQsLCQkHBwUDAgEJCgkLCwsLDAYGBgYFBQMDAgECAwQFEQoKCgkJBwgGBgUFAwMCAQICAwQFBgYHCAgJCQkJCwgIDxAPDg0NDAsJCAcFAgMCaQEBAwQFBQcIBwkICQQEBQYHBwgIBQoICAcGBAMBAQMFBggJCgoJCAgHBgMGBAJfAwUFBQUGBgcFCggIBwYEAwEBAwUGCAkKCgcGBgUFBQUD/vlfAwUFBQUGBgcFCggIBwYEAwEBAwUGCAkKCgcGBgUFBQUDX90LCwsLCgoJCAgHBQUEAwEBBQQDAwMCAQEDBQYICQoKCgoICAYFBAIDBAYIAgQGBwkJCuUCAwQFCQoNDhARERMUFBQUFRQTEhIRDw0NCgkGBAICDw4MBgwFBQQEAwIBAQEBAwMDBQgJCwsFBAMBAQEBAwMDBQUFBgYHCAgIDQ4PDwMGBggICwsMDQ4PDxADhQECAgQEBQYGCAcICQ4OCQwLChAGBwUGBQUEAgIBAgQEBQ8PBwgLDA0NDw8PEA4NAQICAwQFBgYGBgYFBAoHDAYNDhAQEBAREBAPDg0LCggGBAMBAgMEBQUGBgcGBQUDAwIBAQECAw0NDQwLCgkJBwUFAwEBAgQGBggJCgsMDQ0NDg7qCQgIBwYGBQUBAQECAwUFBQYHBgUGBAQHBQYGBwgICgkKCgsLCwwLpwkKCQkICAgHBgUFBAMCAUABAgMGBggJCwsNDQ4PCA8PZ18LCwsLCgoJCAcHBQUGBgYEBAMCAgQFBggICQoLCgkHBwUDAQECAwUFBAkJCmQFBAMDAwIBAgQFBggICQoLCgkHBwUDAQEBAQMDBAQEkwUEAwMDAgECBAUGCAgJCgsKCQcHBQMBAQEBAwMEBASTAgMEBAYHCAgJCgoLCwsLBAUEBQYGBgYLCgkHBwUDAQEDBAYHCAkJCwsKCAgF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AAAAAAAAAAEAAAABAAAAAAABABoAAQABAAAAAAACAAcAGwABAAAAAAADABoAIgABAAAAAAAEABoAPAABAAAAAAAFAAsAVgABAAAAAAAGABoAYQABAAAAAAAKACwAewABAAAAAAALABIApwADAAEECQAAAAIAuQADAAEECQABADQAuwADAAEECQACAA4A7wADAAEECQADADQA/QADAAEECQAEADQBMQADAAEECQAFABYBZQADAAEECQAGADQBewADAAEECQAKAFgBrwADAAEECQALACQCByBIaXN0b3J5IFRpbWVsaW5lIEZvbnQgSWNvblJlZ3VsYXJIaXN0b3J5IFRpbWVsaW5lIEZvbnQgSWNvbkhpc3RvcnkgVGltZWxpbmUgRm9udCBJY29uVmVyc2lvbiAxLjBIaXN0b3J5IFRpbWVsaW5lIEZvbnQgSWNvbkZvbnQgZ2VuZXJhdGVkIHVzaW5nIFN5bmNmdXNpb24gTWV0cm8gU3R1ZGlvd3d3LnN5bmNmdXNpb24uY29tACAASABpAHMAdABvAHIAeQAgAFQAaQBtAGUAbABpAG4AZQAgAEYAbwBuAHQAIABJAGMAbwBuAFIAZQBnAHUAbABhAHIASABpAHMAdABvAHIAeQAgAFQAaQBtAGUAbABpAG4AZQAgAEYAbwBuAHQAIABJAGMAbwBuAEgAaQBzAHQAbwByAHkAIABUAGkAbQBlAGwAaQBuAGUAIABGAG8AbgB0ACAASQBjAG8AbgBWAGUAcgBzAGkAbwBuACAAMQAuADAASABpAHMAdABvAHIAeQAgAFQAaQBtAGUAbABpAG4AZQAgAEYAbwBuAHQAIABJAGMAbwBuAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAHUAcwBpAG4AZwAgAFMAeQBuAGMAZgB1AHMAaQBvAG4AIABNAGUAdAByAG8AIABTAHQAdQBkAGkAbwB3AHcAdwAuAHMAeQBuAGMAZgB1AHMAaQBvAG4ALgBjAG8AbQAAAAACAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMBAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAAHYXJwYW5ldA5iaXJ0aC1pbnRlcm5ldA9pbnRlcm5ldC1wdWJsaWMRZmlyc3Qtd2ViLWJyb3dzZXIRY29tbWVyY2lhbGl6YXRpb24MZ29vZ2xlLWZvdW5kDHNvY2lhbC1tZWRpYQd5b3V0dWJlB2ktcGhvbmUPY2xvdWQtY29tcHV0aW5nEmludGVybmV0LW9mLXRoaW5ncwtyZW1vdGUtd29yawltZXRhdmVyc2UQcXVhbnR1bS1pbnRlcm5ldBJhdXRvbm9tb3VzLXZlaGljbGUKYWR2YW5jZS1haQo1Zy1uZXR3b3JrEWlvdC1wZXJ2YXNpdmVuZXNzAAAAAAA=) format('truetype');\nfont-weight: normal;\nfont-style: normal;\n}\n\n[class^=\"sf-icon-\"], [class*=\" sf-icon-\"] {\n font-family: 'History Timeline Font Icon' !important;\nspeak: none;\nfont-size: 55px;\nfont-style: normal;\nfont-weight: normal;\nfont-variant: normal;\ntext-transform: none;\nline-height: 1;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\n}\n\n.sf-icon-arpanet:before { content: \"\\e700\"; }\n.sf-icon-birth-internet:before { content: \"\\e701\"; }\n.sf-icon-internet-public:before { content: \"\\e702\"; }\n.sf-icon-first-web-browser:before { content: \"\\e703\"; }\n.sf-icon-commercialization:before { content: \"\\e704\"; }\n.sf-icon-google-found:before { content: \"\\e705\"; }\n.sf-icon-social-media:before { content: \"\\e706\"; }\n.sf-icon-youtube:before { content: \"\\e707\"; }\n.sf-icon-i-phone:before { content: \"\\e708\"; }\n.sf-icon-cloud-computing:before { content: \"\\e709\"; }\n.sf-icon-internet-of-things:before { content: \"\\e70a\"; }\n.sf-icon-remote-work:before { content: \"\\e70b\"; }\n.sf-icon-metaverse:before { content: \"\\e70c\"; }\n.sf-icon-quantum-internet:before { content: \"\\e70d\"; }\n.sf-icon-autonomous-vehicle:before { content: \"\\e70e\"; }\n.sf-icon-advance-ai:before { content: \"\\e70f\"; }\n.sf-icon-5g-network:before { content: \"\\e710\"; }\n.sf-icon-iot-pervasiveness:before { content: \"\\e711\"; }\n";
