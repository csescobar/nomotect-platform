"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_diagrams_1 = require("@syncfusion/ej2-react-diagrams");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var sample_base_1 = require("../common/sample-base");
var diagramInstance;
var diagramCreated = false;
var seatDialogRef = null;
var selectedTimingId = 1;
var selectedSeatsArray = [];
var nodes = [];
var seatSelection = {
    seatNumbers: [],
    ticketCount: 0,
    amount: 0.0,
    category: ""
};
var movieTitle = "F1: The Movie";
var theaterName = "Velvet Aurora Cinematheque";
var showTimings = [
    { id: 1, time: "11:50 AM", type: "4K DOLBY ATMOS", status: "available" },
    { id: 2, time: "02:15 PM", type: "4K DOLBY ATMOS", status: "sold-out" },
    { id: 3, time: "06:20 PM", type: "4K DOLBY ATMOS", status: "filling-fast" },
    { id: 4, time: "09:15 PM", type: "4K DOLBY ATMOS", status: "filling-fast" }
];
var timingSpecificBookedSeats = {
    1: [
        "seatD9", "seatD10", "seatE9", "seatE10", "seatF8", "seatF9", "seatF10", "seatF11",
        "seatG7", "seatG8", "seatG9", "seatG10", "seatH6", "seatH7", "seatH8",
        "seatC9", "seatC10", "seatB9", "seatB10", "seatA9", "seatA10",
        "seatD8", "seatD11", "seatE8", "seatE11", "seatF7", "seatF12",
        "seatC8", "seatC11", "seatB8", "seatB11", "seatA8", "seatA11",
        "seatG6", "seatG11", "seatH5", "seatH9",
        "seatI8", "seatI9", "seatJ8", "seatJ9", "seatK7", "seatK8", "seatK9", "seatK10",
        "seatL6", "seatL7", "seatL8", "seatL9", "seatM5", "seatM6", "seatM7", "seatM8",
        "seatI7", "seatI10", "seatJ7", "seatJ10", "seatK6", "seatK11",
        "seatL5", "seatL10", "seatM4",
        "seatN8", "seatN9", "seatO8", "seatO9", "seatP8", "seatP9",
        "seatN7", "seatN10", "seatO7", "seatO10", "seatP7", "seatP10",
        "seatN6", "seatO6", "seatP6"
    ],
    2: [
        "seatA1", "seatA2", "seatA3", "seatA4", "seatA5", "seatA6", "seatA7", "seatA8", "seatA9", "seatA10", "seatA11", "seatA12", "seatA13", "seatA14", "seatA15", "seatA16", "seatA17", "seatA18",
        "seatB1", "seatB2", "seatB3", "seatB4", "seatB5", "seatB6", "seatB7", "seatB8", "seatB9", "seatB10", "seatB11", "seatB12", "seatB13", "seatB14", "seatB15", "seatB16", "seatB17", "seatB18",
        "seatC1", "seatC2", "seatC3", "seatC4", "seatC5", "seatC6", "seatC7", "seatC8", "seatC9", "seatC10", "seatC11", "seatC12", "seatC13", "seatC14", "seatC15", "seatC16", "seatC17", "seatC18",
        "seatD1", "seatD2", "seatD3", "seatD4", "seatD5", "seatD6", "seatD7", "seatD8", "seatD9", "seatD10", "seatD11", "seatD12", "seatD13", "seatD14", "seatD15", "seatD16", "seatD17", "seatD18",
        "seatE1", "seatE2", "seatE3", "seatE4", "seatE5", "seatE6", "seatE7", "seatE8", "seatE9", "seatE10", "seatE11", "seatE12", "seatE13", "seatE14", "seatE15", "seatE16", "seatE17", "seatE18",
        "seatF1", "seatF2", "seatF3", "seatF4", "seatF5", "seatF6", "seatF7", "seatF8", "seatF9", "seatF10", "seatF11", "seatF12", "seatF13", "seatF14", "seatF15", "seatF16", "seatF17", "seatF18",
        "seatG1", "seatG2", "seatG3", "seatG4", "seatG5", "seatG6", "seatG7", "seatG8", "seatG9", "seatG10", "seatG11", "seatG12", "seatG13", "seatG14", "seatG15", "seatG16",
        "seatH1", "seatH2", "seatH3", "seatH4", "seatH5", "seatH6", "seatH7", "seatH8", "seatH9", "seatH10", "seatH11", "seatH12", "seatH13", "seatH14",
        "seatI1", "seatI2", "seatI3", "seatI4", "seatI5", "seatI6", "seatI7", "seatI8", "seatI9", "seatI10", "seatI11", "seatI12", "seatI13", "seatI14", "seatI15", "seatI16",
        "seatJ1", "seatJ2", "seatJ3", "seatJ4", "seatJ5", "seatJ6", "seatJ7", "seatJ8", "seatJ9", "seatJ10", "seatJ11", "seatJ12", "seatJ13", "seatJ14", "seatJ15", "seatJ16",
        "seatK1", "seatK2", "seatK3", "seatK4", "seatK5", "seatK6", "seatK7", "seatK8", "seatK9", "seatK10", "seatK11", "seatK12", "seatK13", "seatK14", "seatK15", "seatK16",
        "seatL1", "seatL2", "seatL3", "seatL4", "seatL5", "seatL6", "seatL7", "seatL8", "seatL9", "seatL10", "seatL11", "seatL12", "seatL13", "seatL14",
        "seatM1", "seatM2", "seatM3", "seatM4", "seatM5", "seatM6", "seatM7", "seatM8", "seatM9", "seatM10", "seatM11", "seatM12",
        "seatN1", "seatN2", "seatN3", "seatN4", "seatN5", "seatN6", "seatN7", "seatN8", "seatN9", "seatN10", "seatN11", "seatN12", "seatN13", "seatN14", "seatN15", "seatN16",
        "seatO1", "seatO2", "seatO3", "seatO4", "seatO5", "seatO6", "seatO7", "seatO8", "seatO9", "seatO10", "seatO11", "seatO12", "seatO13", "seatO14", "seatO15", "seatO16",
        "seatP1", "seatP2", "seatP3", "seatP4", "seatP5", "seatP6", "seatP7", "seatP8", "seatP9", "seatP10", "seatP11", "seatP12", "seatP13", "seatP14", "seatP15", "seatP16"
    ],
    3: [
        "seatA1", "seatA2", "seatA3", "seatA4", "seatA5", "seatA6", "seatA7", "seatA8", "seatA9", "seatA10", "seatA11", "seatA12", "seatA13", "seatA14", "seatA15", "seatA16", "seatA17", "seatA18",
        "seatB1", "seatB2", "seatB3", "seatB4", "seatB5", "seatB6", "seatB7", "seatB8", "seatB9", "seatB10", "seatB11", "seatB12", "seatB13", "seatB14", "seatB15", "seatB16", "seatB17", "seatB18",
        "seatC1", "seatC2", "seatC3", "seatC4", "seatC5", "seatC6", "seatC7", "seatC8", "seatC9", "seatC10", "seatC11", "seatC12", "seatC13", "seatC14", "seatC15", "seatC16", "seatC17", "seatC18",
        "seatD1", "seatD2", "seatD3", "seatD4", "seatD5", "seatD6", "seatD7", "seatD8", "seatD9", "seatD10", "seatD11", "seatD12", "seatD13", "seatD14", "seatD15", "seatD16", "seatD17", "seatD18",
        "seatE1", "seatE2", "seatE3", "seatE4", "seatE5", "seatE6", "seatE7", "seatE8", "seatE9", "seatE10", "seatE11", "seatE12", "seatE13", "seatE14", "seatE15", "seatE16", "seatE17", "seatE18",
        "seatF1", "seatF2", "seatF3", "seatF4", "seatF5", "seatF6", "seatF7", "seatF8", "seatF9", "seatF10", "seatF11", "seatF12", "seatF13", "seatF14", "seatF15", "seatF16", "seatF17", "seatF18",
        "seatG1", "seatG2", "seatG3", "seatG4", "seatG5", "seatG6", "seatG7", "seatG8", "seatG9", "seatG10", "seatG11", "seatG12", "seatG13", "seatG14", "seatG15", "seatG16",
        "seatH1", "seatH2", "seatH3", "seatH4", "seatH5", "seatH6", "seatH7", "seatH8", "seatH9", "seatH10", "seatH11", "seatH12", "seatH13",
        "seatI1", "seatI2", "seatI3", "seatI4", "seatI5", "seatI6", "seatI7", "seatI8", "seatI9", "seatI10", "seatI11", "seatI12", "seatI13", "seatI14", "seatI15", "seatI16",
        "seatJ1", "seatJ2", "seatJ3", "seatJ4", "seatJ5", "seatJ6", "seatJ7", "seatJ8", "seatJ9", "seatJ10", "seatJ11", "seatJ12", "seatJ13", "seatJ14", "seatJ15", "seatJ16",
        "seatK1", "seatK2", "seatK3", "seatK4", "seatK5", "seatK6", "seatK7", "seatK8", "seatK9", "seatK10", "seatK11", "seatK12", "seatK13", "seatK14", "seatK15", "seatK16",
        "seatL1", "seatL2", "seatL3", "seatL4", "seatL5", "seatL6", "seatL7", "seatL8", "seatL9", "seatL10", "seatL11", "seatL12", "seatL13", "seatL14",
        "seatM1", "seatM2", "seatM3", "seatM4", "seatM5", "seatM6", "seatM7", "seatM8", "seatM9", "seatM10", "seatM11", "seatM12",
        "seatN1", "seatN2", "seatN3", "seatN4", "seatN5", "seatN6", "seatN7", "seatN8", "seatN9", "seatN10", "seatN11", "seatN12", "seatN13", "seatN14", "seatN15", "seatN16",
        "seatO1", "seatO2", "seatO3", "seatO4", "seatO5", "seatO6", "seatO7", "seatO8", "seatO9", "seatO10", "seatO11", "seatO12", "seatO13", "seatO14", "seatO15", "seatO16",
        "seatP1", "seatP2", "seatP3", "seatP4", "seatP5"
    ],
    4: [
        "seatA1", "seatA2", "seatA3", "seatA4", "seatA5", "seatA6", "seatA7", "seatA8", "seatA9", "seatA10", "seatA11", "seatA12", "seatA13", "seatA14", "seatA15", "seatA16", "seatA17", "seatA18",
        "seatB1", "seatB2", "seatB3", "seatB4", "seatB5", "seatB6", "seatB7", "seatB8", "seatB9", "seatB10", "seatB11", "seatB12", "seatB13", "seatB14", "seatB15", "seatB16", "seatB17", "seatB18",
        "seatC1", "seatC2", "seatC3", "seatC4", "seatC5", "seatC6", "seatC7", "seatC8", "seatC9", "seatC10", "seatC11", "seatC12", "seatC13", "seatC14", "seatC15", "seatC16", "seatC17", "seatC18",
        "seatD1", "seatD2", "seatD3", "seatD4", "seatD5", "seatD6", "seatD7", "seatD8", "seatD9", "seatD10", "seatD11", "seatD12", "seatD13", "seatD14", "seatD15", "seatD16", "seatD17", "seatD18",
        "seatE1", "seatE2", "seatE3", "seatE4", "seatE5", "seatE6", "seatE7", "seatE8", "seatE9", "seatE10", "seatE11", "seatE12", "seatE13", "seatE14", "seatE15", "seatE16", "seatE17", "seatE18",
        "seatF1", "seatF2", "seatF3", "seatF4", "seatF5", "seatF6", "seatF7", "seatF8", "seatF9", "seatF10", "seatF11", "seatF12", "seatF13", "seatF14", "seatF15", "seatF16", "seatF17", "seatF18",
        "seatI1", "seatI2", "seatI3", "seatI4", "seatI5", "seatI6", "seatI7", "seatI8", "seatI9", "seatI10", "seatI11", "seatI12", "seatI13", "seatI14", "seatI15", "seatI16",
        "seatJ1", "seatJ2", "seatJ3", "seatJ4", "seatJ5", "seatJ6", "seatJ7", "seatJ8", "seatJ9", "seatJ10", "seatJ11", "seatJ12", "seatJ13", "seatJ14", "seatJ15", "seatJ16",
        "seatK1", "seatK2", "seatK3", "seatK4", "seatK5", "seatK6", "seatK7", "seatK8", "seatK9", "seatK10", "seatK11", "seatK12", "seatK13", "seatK14", "seatK15", "seatK16",
        "seatL1", "seatL2", "seatL3", "seatL4", "seatL5", "seatL6", "seatL7", "seatL8", "seatL9", "seatL10",
        "seatN1", "seatN2", "seatN3", "seatN4", "seatN5", "seatN6", "seatN7", "seatN8", "seatN9", "seatN10", "seatN11", "seatN12", "seatN13", "seatN14", "seatN15", "seatN16",
        "seatO1", "seatO2", "seatO3", "seatO4", "seatO5", "seatO6", "seatO7", "seatO8", "seatO9", "seatO10", "seatO11", "seatO12", "seatO13", "seatO14", "seatO15", "seatO16",
        "seatP1", "seatP2", "seatP3", "seatP4", "seatP5"
    ]
};
// -----------------------------------------------------------
// UTILITY FUNCTIONS
// -----------------------------------------------------------
function getBookedSeatsForTiming(timingId) {
    return timingSpecificBookedSeats[timingId] || [];
}
function isSeatBooked(seatId) {
    return getBookedSeatsForTiming(selectedTimingId).includes(seatId);
}
function refreshSeatingLayout() {
    var bookedSet = new Set(getBookedSeatsForTiming(selectedTimingId));
    if (!diagramInstance)
        return;
    diagramInstance.nodes.forEach(function (node) {
        if (node.addInfo && node.addInfo.seatNumber) {
            var currentSeatInfo = node.addInfo;
            node.style.fill = 'transparent';
            node.style.strokeColor = '#9CA3AF';
            if (node.annotations && node.annotations[0]) {
                node.annotations[0].style.color = "#374151";
            }
            currentSeatInfo.booked = false;
            if (bookedSet.has(node.id)) {
                node.style.fill = '#E5E7EB';
                node.style.strokeColor = '#E5E7EB';
                if (node.annotations && node.annotations[0]) {
                    node.annotations[0].style.color = "#9CA3AF";
                }
                currentSeatInfo.booked = true;
            }
            node.tooltip.content = seatTooltipTemplate(currentSeatInfo, node);
        }
    });
    diagramInstance.dataBind();
}
function seatTooltipTemplate(addInfoData, currentNode) {
    var addInfo = addInfoData;
    var seatNumber = addInfo.seatNumber || "";
    var row = addInfo.row || "";
    var tier = addInfo.tierCategory || addInfo.tier || "";
    var price = addInfo.price !== undefined ? addInfo.price : "";
    var isSelected = false;
    if (currentNode) {
        isSelected = (selectedSeatsArray && selectedSeatsArray.includes(currentNode.id));
    }
    var isBooked = !!addInfo.booked;
    var status = isSelected ? "Selected" : isBooked ? "Booked" : "Available";
    var statusBg = (isSelected ? "#28a745" : isBooked ? "#6c757d" : "#17a2b8");
    return "\n    <div class=\"seat-tooltip\" style=\"margin:0;padding:10px;font-family:Arial,sans-serif;min-width:150px;\">\n      <div style=\"font-weight:bold;margin-bottom:5px;font-size:14px;\">\n        Seat ".concat(seatNumber, "\n      </div>\n      <div style=\"font-size:12px;margin-bottom:3px;\">\n        <strong>Row:</strong> ").concat(row, "\n      </div>\n      <div style=\"font-size:12px;margin-bottom:3px;\">\n        <strong>Category:</strong> ").concat(tier, "\n      </div>\n      <div style=\"font-size:12px;margin-bottom:3px;\">\n        <strong>Price:</strong> $").concat(price, "\n      </div>\n      <div style=\"font-size:12px;margin-top:5px;\">\n        <span style=\"padding:2px 6px;border-radius:3px;font-weight:bold;background-color:").concat(statusBg, ";color:white;font-size:11px;\">\n          ").concat(status, "\n        </span>\n      </div>\n    </div>\n  ");
}
function createTierLabel(tierName, price, y) {
    nodes.push({
        id: "tier-".concat(tierName),
        width: 200,
        height: 25,
        offsetX: 585,
        offsetY: y,
        shape: { type: 'Text', content: "".concat(tierName, " - $").concat(price) },
        style: { fontSize: 16, bold: true },
        constraints: ej2_react_diagrams_1.NodeConstraints.ReadOnly
    });
}
function createRowLabel(row, y) {
    nodes.push({
        id: "row-".concat(row),
        width: 30,
        height: 32,
        offsetX: 80,
        offsetY: y,
        shape: { type: 'Text', content: row },
        style: { fontSize: 14, bold: true },
        constraints: ej2_react_diagrams_1.NodeConstraints.ReadOnly
    });
}
function createSeatNode(seatId, seatNumber, row, column, price, tier, x, y) {
    var addInfoData = {
        seatNumber: seatNumber,
        row: row,
        column: column,
        price: price,
        tierCategory: tier,
        booked: false
    };
    nodes.push({
        id: seatId,
        width: 32,
        height: 32,
        offsetX: x,
        offsetY: y,
        shape: { cornerRadius: 4 },
        style: { strokeColor: '#9CA3AF', strokeWidth: 2 },
        annotations: [{
                content: column.toString()
            }],
        addInfo: addInfoData,
        tooltip: {
            content: seatTooltipTemplate(addInfoData),
            relativeMode: 'Object'
        },
        constraints: (ej2_react_diagrams_1.NodeConstraints.Default | ej2_react_diagrams_1.NodeConstraints.Tooltip | ej2_react_diagrams_1.NodeConstraints.ReadOnly) & ~ej2_react_diagrams_1.NodeConstraints.Select
    });
}
function createSplitSeats(row, seatCount, price, tier, y) {
    var center = 600;
    var seatWidth = 32;
    var spacing = 10;
    var aisle = 82;
    var leftSeats = Math.floor(seatCount / 2);
    var rightSeats = seatCount - leftSeats;
    var leftStartX = center - (aisle / 2) - (leftSeats * seatWidth + (leftSeats - 1) * spacing);
    var rightStartX = center + (aisle / 2);
    for (var i = 1; i <= leftSeats; i++) {
        var x = leftStartX + (i - 1) * (seatWidth + spacing);
        createSeatNode("seat".concat(row).concat(i), "".concat(row).concat(i), row, i, price, tier, x, y);
    }
    for (var i = leftSeats + 1; i <= seatCount; i++) {
        var x = rightStartX + (i - leftSeats - 1) * (seatWidth + spacing);
        createSeatNode("seat".concat(row).concat(i), "".concat(row).concat(i), row, i, price, tier, x, y);
    }
}
function createTierSeats(tier, price, startY, rows) {
    var y = startY;
    createTierLabel(tier, price, y - 50);
    rows.forEach(function (_a) {
        var row = _a.row, count = _a.count;
        createRowLabel(row, y);
        createSplitSeats(row, count, price, tier, y);
        y += 48;
    });
    return y;
}
function createScreen(y) {
    nodes.push({
        id: 'screen',
        width: 600,
        height: 80,
        offsetX: 580,
        offsetY: y,
        constraints: ej2_react_diagrams_1.NodeConstraints.ReadOnly,
        shape: {
            type: 'Native',
            content: "<svg width=\"394\" height=\"56\" viewBox=\"0 0 394 56\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <path d=\"M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z\" stroke=\"#818CF8\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n                  <path d=\"M2 45.666C124.157 60.0821 312.899 51.6727 392 45.666\" stroke=\"#818CF8\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n                  <path d=\"M27.0321 1.62598L2 37.6661C124.157 52.0822 312.899 43.6728 392 37.6661L364.965 1.62598C276.852 11.8374 148.187 11.8374 27.0321 1.62598Z\" fill=\"#E0E7FF\" />\n                </svg>"
        },
        annotations: [{
                content: 'Screen This Way',
                offset: { x: 0.5, y: 1.5 },
                constraints: ej2_react_diagrams_1.AnnotationConstraints.ReadOnly,
                style: { fontSize: 14, color: '#818CF8' }
            }]
    });
}
function initializeLayout() {
    nodes = []; // Clear existing nodes
    var y = 50;
    y = createTierSeats("Executive", 25, y, [
        { row: "A", count: 18 }, { row: "B", count: 18 }, { row: "C", count: 18 },
        { row: "D", count: 18 }, { row: "E", count: 18 }, { row: "F", count: 18 },
        { row: "G", count: 16 }, { row: "H", count: 14 }
    ]);
    y += 92;
    y = createTierSeats("Corporate", 16, y, [
        { row: "I", count: 16 }, { row: "J", count: 16 }, { row: "K", count: 16 },
        { row: "L", count: 14 }, { row: "M", count: 12 }
    ]);
    y += 92;
    y = createTierSeats("Budget", 8, y, [
        { row: "N", count: 16 }, { row: "O", count: 16 }, { row: "P", count: 16 }
    ]);
    y += 92;
    createScreen(y);
    return nodes;
}
function showNotification(message) {
    var notif = document.getElementById("notification");
    if (notif) {
        notif.textContent = message;
        notif.style.display = "block";
    }
}
function hideNotification() {
    var notif = document.getElementById("notification");
    if (notif) {
        notif.style.display = "none";
    }
}
function updateBookingSummary() {
    if (selectedSeatsArray.length > 0) {
        var selectedSeats = selectedSeatsArray.map(function (seatId) {
            var node = diagramInstance.getObject(seatId);
            if (node && node.addInfo && node.addInfo.seatNumber !== undefined) {
                var price = parseFloat(node.addInfo.price.toString());
                if (isNaN(price))
                    price = 0;
                return {
                    seatNumber: node.addInfo.seatNumber || "",
                    row: node.addInfo.row || "",
                    price: price,
                    tier: (node.addInfo.tierCategory || node.addInfo.tier || "").toString()
                };
            }
            return null;
        }).filter(Boolean);
        seatSelection.seatNumbers = selectedSeats.map(function (s) { return s.seatNumber; });
        seatSelection.ticketCount = selectedSeats.length;
        var totalAmount = selectedSeats.reduce(function (sum, s) { return sum + (Number(s.price) || 0); }, 0);
        seatSelection.amount = selectedSeats.length ? totalAmount : null;
        seatSelection.category = selectedSeats.length > 0 ? selectedSeats[0].tier.toUpperCase() : "";
    }
    else {
        seatSelection.seatNumbers = [];
        seatSelection.ticketCount = 0;
        seatSelection.amount = null;
        seatSelection.category = "";
    }
}
function updateBookingSummaryUI() {
    var ticketCountElem = document.getElementById('ticketCount');
    var totalAmountElem = document.getElementById('totalAmount');
    var priceHintElem = document.getElementById('priceHint');
    var ticketAmountElem = document.getElementById('ticketAmount');
    var feesAmountElem = document.getElementById('feesAmount');
    var proceedButton = document.getElementById('proceedButton');
    if (seatSelection.ticketCount > 0) {
        if (ticketCountElem)
            ticketCountElem.innerText = seatSelection.ticketCount + " Tickets Selected";
        if (totalAmountElem)
            totalAmountElem.innerText = seatSelection.amount === null ? '$0' : "$" + (seatSelection.amount + 6);
        if (priceHintElem)
            priceHintElem.style.display = 'block';
        if (ticketAmountElem)
            ticketAmountElem.innerText = "Tickets: $" + (seatSelection.amount);
        if (feesAmountElem)
            feesAmountElem.innerText = "+ Fees: $" + 6;
    }
    else {
        if (ticketCountElem)
            ticketCountElem.innerText = "0 Tickets Selected";
        if (totalAmountElem)
            totalAmountElem.innerText = "$0";
        if (priceHintElem)
            priceHintElem.style.display = 'none';
        if (ticketAmountElem)
            ticketAmountElem.innerText = "";
        if (feesAmountElem)
            feesAmountElem.innerText = "";
    }
    if (proceedButton)
        proceedButton.disabled = seatSelection.ticketCount === 0;
}
function updateDateTime(id) {
    var showtiming = showTimings[id];
    var now = new Date();
    var options = {
        weekday: 'long',
        day: '2-digit',
        month: 'short'
    };
    var formatted = now.toLocaleString('en-IN', options);
    var movieTimingElem = document.getElementById('movie-timing');
    if (movieTimingElem)
        movieTimingElem.textContent = "".concat(formatted) + ", ".concat(showtiming.time);
    var day = now.toLocaleDateString('en-IN', { weekday: 'short' });
    var date = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
    var dateLabelElem = document.getElementById('date-label');
    if (dateLabelElem)
        dateLabelElem.innerHTML = "".concat(day, "<br>").concat(date);
}
function bookSeatsForTiming(timingId, bookingSeatIds) {
    var _a;
    if (!timingSpecificBookedSeats[timingId]) {
        timingSpecificBookedSeats[timingId] = [];
    }
    (_a = timingSpecificBookedSeats[timingId]).push.apply(_a, bookingSeatIds);
}
function buildBookingSuccessHtml(movieTitle, theater, showTime, seats, totalAmount, bookingId) {
    return "\n  <div class=\"notification-header\">\n    <div class=\"success-icon\">&#10003;</div>\n    <div class=\"success-title\">Booking Confirmed!</div>\n    <div class=\"success-message\">\n      Your tickets have been successfully booked.\n    </div>\n  </div>\n  <div class=\"booking-details\">\n    <h4>Booking Details:</h4>\n    <p><strong>Movie:</strong> ".concat(movieTitle, "</p>\n    <p><strong>Theater:</strong> ").concat(theater, "</p>\n    <p><strong>Show Time:</strong> ").concat(showTime, "</p>\n    <p><strong>Seats:</strong> ").concat(seats, "</p>\n    <p><strong>Total Amount:</strong> $").concat(totalAmount, "</p>\n    <p><strong>Booking ID:</strong> ").concat(bookingId, "</p>\n  </div>\n  ");
}
function onTimingClick(timing) {
    if (timing.status === "sold-out")
        return;
    // Remove selected class from all timing items
    var timingItems = document.querySelectorAll('.timing-item');
    timingItems.forEach(function (item) { return item.classList.remove('selected'); });
    // Add selected class to the clicked timing
    var clickedItem = document.querySelector(".timing-item[data-timing=\"".concat(timing.id, "\"]"));
    if (clickedItem)
        clickedItem.classList.add('selected');
    selectedTimingId = timing.id;
    selectedSeatsArray = [];
    refreshSeatingLayout();
    updateBookingSummary();
    updateBookingSummaryUI();
    hideNotification();
    updateDateTime(selectedTimingId - 1);
}
var handleProceed = function () {
    var _a;
    if (selectedSeatsArray.length === 0)
        return;
    // Mark seats as booked in our data source
    bookSeatsForTiming(selectedTimingId, selectedSeatsArray);
    var showTime = ((_a = document.getElementById('movie-timing')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var seats = seatSelection.seatNumbers.join(", ");
    var totalAmount = (seatSelection.amount !== null ? seatSelection.amount + 6 : 6).toFixed(2);
    var bookingId = 'VAC' + Date.now().toString().slice(-8);
    // Use current property to access the current DialogComponent instance
    if (seatDialogRef) {
        seatDialogRef.content = buildBookingSuccessHtml(movieTitle, theaterName, showTime, seats, totalAmount, bookingId);
        seatDialogRef.show();
    }
    // Update seat styles to show they're now booked
    selectedSeatsArray.forEach(function (seatId) {
        var node = diagramInstance.getObject(seatId);
        if (node && node.addInfo) {
            node.addInfo.booked = true;
            node.style.fill = '#E5E7EB';
            node.style.strokeColor = '#E5E7EB';
            if (node.annotations && node.annotations[0]) {
                node.annotations[0].style.color = '#9CA3AF';
            }
        }
    });
    // Reset selection state
    selectedSeatsArray = [];
    updateBookingSummary();
    updateBookingSummaryUI();
    refreshSeatingLayout();
    hideNotification();
};
function unSelectSeat(seatNode) {
    // Logic for DESELECTING a seat
    var idx = selectedSeatsArray.indexOf(seatNode.id);
    if (idx !== -1) {
        selectedSeatsArray.splice(idx, 1);
    }
    // Reset styling for previously selected seats
    seatNode.style.fill = "transparent";
    seatNode.style.strokeColor = "#9CA3AF";
    if (seatNode.annotations && seatNode.annotations[0] && seatNode.annotations[0].style) {
        seatNode.annotations[0].style.color = "#374151"; // Reset annotation color
    }
}
function seatClicked(args) {
    if (args && args.element && args.element.addInfo) {
        var currentNode = args.element;
        if (currentNode.addInfo.booked) {
            currentNode.tooltip.content = seatTooltipTemplate(currentNode.addInfo, currentNode);
            return;
        }
        else {
            if (!selectedSeatsArray.includes(currentNode.id)) {
                var newTier = (currentNode.addInfo.tierCategory || currentNode.addInfo.tier || "").toString();
                var selectedSeats = selectedSeatsArray.map(function (seatId) {
                    var node = diagramInstance === null || diagramInstance === void 0 ? void 0 : diagramInstance.getObject(seatId);
                    return node && node.addInfo ? node : null;
                }).filter(Boolean);
                var currentTier = selectedSeats.length > 0
                    ? (selectedSeats[0].addInfo.tierCategory || selectedSeats[0].addInfo.tier || "").toString()
                    : null;
                var differentTier = Boolean(currentTier && newTier !== currentTier);
                if (differentTier) {
                    //Iterate backwards to avoid skipping elements after splicing
                    for (var i = selectedSeatsArray.length - 1; i >= 0; i--) {
                        var seatNode = diagramInstance.getObject(selectedSeatsArray[i]);
                        if (seatNode) {
                            unSelectSeat(seatNode);
                            // Update tooltip for these deselected original seats
                            seatNode.tooltip.content = seatTooltipTemplate(seatNode.addInfo, seatNode);
                        }
                    }
                    hideNotification();
                }
                else if (selectedSeatsArray.length >= 10) {
                    showNotification("Maximum 10 tickets can be selected");
                    return;
                }
                selectedSeatsArray.push(currentNode.id);
                currentNode.style.fill = "#15803D";
                currentNode.style.strokeColor = "#15803D";
                if (currentNode.annotations && currentNode.annotations[0]) {
                    currentNode.annotations[0].style.color = "white";
                }
                diagramInstance.dataBind();
                if (selectedSeatsArray.length < 10) {
                    hideNotification();
                }
            }
            else {
                unSelectSeat(currentNode);
                diagramInstance.dataBind();
                hideNotification();
            }
            currentNode.tooltip.content = seatTooltipTemplate(currentNode.addInfo, currentNode);
            updateBookingSummary();
            updateBookingSummaryUI();
        }
    }
}
// Main functional component
function TicketBookingDiagram() {
    var _a;
    // Similar to componentDidMount
    React.useEffect(function () {
        (0, sample_base_1.updateSampleSection)();
        if (diagramInstance) {
            diagramInstance.fitToPage();
        }
        var proButton = document.getElementById('proceedButton');
        if (proButton) {
            proButton.addEventListener('click', handleProceed);
        }
        // Set initial timing as selected
        var firstAvailableTiming = showTimings.find(function (t) { return t.status !== "sold-out"; });
        if (firstAvailableTiming) {
            selectedTimingId = firstAvailableTiming.id;
        }
        // Add data-timing attributes to timing items
        var timingItems = document.querySelectorAll('.timing-item');
        timingItems.forEach(function (item, index) {
            item.setAttribute('data-timing', (index + 1).toString());
        });
        // Set up timing selection and initial timing
        updateDateTime(selectedTimingId - 1);
        refreshSeatingLayout();
        updateBookingSummary();
        updateBookingSummaryUI();
    }, []);
    return (React.createElement("div", { className: "control-pane diagram-seat-booking" },
        React.createElement("style", null, STYLE_CSS),
        React.createElement("div", { className: "control-section" },
            React.createElement("header", { className: "header" },
                React.createElement("h2", null,
                    React.createElement("div", null,
                        React.createElement("span", { className: "movie-name" },
                            React.createElement("p", { className: "movie-name-lnk" }, movieTitle))),
                    React.createElement("div", null,
                        React.createElement("span", { className: "movie-timing", id: "movie-timing" }, (_a = showTimings.find(function (t) { return t.id === selectedTimingId; })) === null || _a === void 0 ? void 0 : _a.time),
                        React.createElement("span", { className: "theater-name" },
                            " | ",
                            theaterName)))),
            React.createElement("div", { className: "show-timing-section", style: { margin: "20px 0" } },
                React.createElement("ul", { className: "timing-list", style: { display: "flex", gap: 16, listStyle: "none", justifyContent: "center" } },
                    React.createElement("li", { style: { pointerEvents: "none" } },
                        React.createElement("span", { className: "date-label", id: "date-label" })),
                    showTimings.map(function (timing) { return (React.createElement("li", { key: timing.id, onClick: function () { return onTimingClick(timing); }, className: "timing-item ".concat(timing.status, " ").concat(selectedTimingId === timing.id ? "selected" : ""), "data-timing": timing.id, style: { pointerEvents: timing.status === "sold-out" ? "none" : "auto", cursor: "pointer" } },
                        React.createElement("div", { className: "time" }, timing.time),
                        React.createElement("div", { className: "screen-type" }, timing.type))); }))),
            React.createElement("div", { id: "notification", className: "notification", style: { display: "none" } }),
            React.createElement("div", { style: { width: "100%", minHeight: 400, margin: "10px auto" } },
                React.createElement(ej2_react_diagrams_1.DiagramComponent, { id: "diagram", width: "100%", height: "800px", nodes: initializeLayout(), constraints: ej2_react_diagrams_1.DiagramConstraints.Default & ~ej2_react_diagrams_1.DiagramConstraints.UndoRedo, snapSettings: { constraints: ej2_react_diagrams_1.SnapConstraints.None }, tool: ej2_react_diagrams_1.DiagramTools.ZoomPan | ej2_react_diagrams_1.DiagramTools.SingleSelect, click: seatClicked, ref: function (diagram) { return (diagramInstance = diagram); }, created: function () {
                        if (diagramInstance) {
                            diagramCreated = true;
                            // Fit the diagram to the page on creation.
                            diagramInstance.fitToPage();
                        }
                    }, load: function () {
                        if (diagramCreated && diagramInstance) {
                            diagramInstance.fitToPage();
                        }
                    } })),
            React.createElement("div", { className: "booking-summary-container" },
                React.createElement("div", { className: "seat-legend" },
                    React.createElement("div", { className: "legend-items" },
                        React.createElement("div", { className: "legend-item" },
                            React.createElement("div", { className: "legend-seat available" }),
                            React.createElement("span", { className: "legend-text" }, "Available")),
                        React.createElement("div", { className: "legend-item" },
                            React.createElement("div", { className: "legend-seat selected" }),
                            React.createElement("span", { className: "legend-text" }, "Selected")),
                        React.createElement("div", { className: "legend-item" },
                            React.createElement("div", { className: "legend-seat booked" }),
                            React.createElement("span", { className: "legend-text" }, "Booked")))),
                React.createElement("div", { className: "booking-section" },
                    React.createElement("div", { className: "price-info" },
                        React.createElement("div", { className: "price", id: "totalAmount" }, "$0"),
                        React.createElement("div", { className: "ticket-count", id: "ticketCount" }, "0 Tickets Selected")),
                    React.createElement("div", { className: "price-hint-inline", id: "priceHint", style: { display: "none" } },
                        React.createElement("span", { id: "ticketAmount" }),
                        React.createElement("span", { id: "feesAmount" })),
                    React.createElement("button", { className: "btn-proceed", disabled: seatSelection.ticketCount === 0, id: "proceedButton" }, "Proceed"))),
            React.createElement(ej2_react_popups_1.DialogComponent, { id: "seatBookingDialog", ref: function (dialog) { return (seatDialogRef = dialog); }, visible: false, width: "400px", animationSettings: { effect: "Zoom" }, isModal: true, target: '.control-section', buttons: [
                    {
                        click: function () { return seatDialogRef === null || seatDialogRef === void 0 ? void 0 : seatDialogRef.hide(); },
                        buttonModel: { content: "Close", cssClass: 'btn2 btn2-proceed', isPrimary: true }
                    }
                ] })),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null,
                "This sample implements a functional movie ticket booking interface using the ",
                React.createElement("a", { href: "https://www.syncfusion.com/react-components/react-diagram", target: "_blank" }, "React Diagram"),
                ", providing an intuitive visual representation of a cinema hall's seating arrangement with real-time price updates and a complete booking workflow.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "This interactive cinema seat booking experience begins with users selecting a showtime, which dynamically updates the seating layout to reflect real-time availability. Users can highlight and select seats (up to 10 within a single tier), while the booking summary panel instantly updates prices and fees. Tooltip provide seat details, and a \"Proceed\" button leads to a confirmation screen with a unique booking ID."))));
}
exports.default = TicketBookingDiagram;
// CSS styles 
var STYLE_CSS = "\n    .diagram-seat-booking .header {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        text-align: center;\n        padding: 20px 24px;\n        padding-top: 0px;\n        border-bottom: 1px solid #e0e0e0;\n    }\n\n    .diagram-seat-booking .header h2 {\n        margin: 0;\n        font-weight: normal;\n    }\n\n    .diagram-seat-booking .movie-name-lnk {\n        text-decoration: none;\n        font-size: 20px;\n        font-weight: 500;\n        transition: color 0.2s ease;\n        color: #337ab7 !important;\n    }\n\n    .diagram-seat-booking .theater-info {\n        color: #374151;\n        display: flex;\n        flex-direction: column;\n        align-content: center;\n        font-size: 14px;\n        font-weight: 400;\n    }\n\n    .diagram-seat-booking .separator {\n        margin: 0 8px;\n        color: #999999;\n    }\n\n    .diagram-seat-booking .show-timing-section {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        align-content: space-around;\n        border-bottom: 1px solid #E5E7EB;\n    }\n\n    .diagram-seat-booking .date-row {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 20px;\n        width: 100%;\n    }\n\n    .diagram-seat-booking .date-label {\n        display: block;\n        font-size: 14px;\n        font-weight: 500;\n        color: #666666;\n        text-align: center;\n        line-height: 1.3;\n        min-width: 60px;\n        padding-right: 2.5rem;\n        border-right: 1px solid #9CA3AF;\n    }\n\n    .diagram-seat-booking .timing-list {\n        display: flex;\n        gap: 15px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        flex-wrap: wrap;\n    }\n\n    .diagram-seat-booking .timing-item {\n        padding: 12px 16px;\n        border-radius: 8px;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        text-align: center;\n        min-width: 120px;\n        border: 1px solid transparent;\n    }\n\n    .diagram-seat-booking .timing-item .time {\n        font-size: 16px;\n        font-weight: 600;\n        margin-bottom: 4px;\n    }\n\n    .diagram-seat-booking .timing-item .screen-type {\n        font-size: 10px;\n        font-weight: 500;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n    }\n\n    .diagram-seat-booking .timing-item.available {\n        background-color: #FFFFFF;\n        border-radius: 8px;\n        border: 1px solid #9CA3AF;\n        color: #15803D;\n    }\n\n    .diagram-seat-booking .timing-item.available:hover {\n        background-color: #f3f4f6;\n        border-radius: 8px;\n        border-color: #9ca3af;\n    }\n\n    .diagram-seat-booking .timing-item.filling-fast {\n        background-color: #fef3c7;\n        border-radius: 8px;\n        border: 1px solid #f59e0b;\n        color: #92400e;\n    }\n\n    .diagram-seat-booking .timing-item.filling-fast:hover {\n        background-color: #fde68a;\n        border-radius: 8px;\n        border-color: #d97706;\n    }\n\n    .diagram-seat-booking .timing-item.selected {\n        background-color: #4F46E5;\n        border: 1px solid #4F46E5;\n        border-radius: 8px;\n        color: white;\n    }\n\n    .diagram-seat-booking .timing-item.sold-out {\n        border-radius: 8px;\n        background-color: #FFFFFF;\n        border: 1px solid #D1D5DB;\n        color: #9CA3AF;\n        cursor: not-allowed;\n        opacity: 0.6;\n    }\n\n    .diagram-seat-booking .main-container {\n        min-height: calc(100vh - 100px);\n        gap: 0;\n    }\n\n    .diagram-seat-booking .ticket-selection-section {\n        background-color: #f8f9fa;\n        margin-top: 2px;\n        min-height: 500px;\n    }\n\n    .diagram-seat-booking .booking-summary-container {\n        box-sizing: border-box;\n        width: 100%;\n        height: 154px;\n        left: 0px;\n        top: 1357px;\n        background: rgba(255, 255, 255, 0.0001);\n        border-top: 1px solid #E5E7EB;\n        margin-top: 20px;\n    }\n\n    .diagram-seat-booking .booking-summary-section {\n        position: relative;\n        background: #fff;\n        background-color: #ffffff;\n        background-repeat: no-repeat;\n        border: none;\n        border-radius: 10px;\n        font-family: Arial, sans-serif;\n        margin-top: 2px;\n        padding: 0px;\n        height: 500px;\n    }\n\n    .diagram-seat-booking .booking-summary-section .header {\n        position: relative;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 50px;\n        font-size: 25px;\n        color: #d9534f;\n        text-transform: uppercase;\n        letter-spacing: 1px;\n        margin-bottom: 0;\n        background: none;\n        padding: 12px 16px;\n        display: block;\n        text-align: left;\n        flex-shrink: 0;\n    }\n\n    .diagram-seat-booking .booking-content {\n        padding: 30px 30px;\n        overflow-y: auto;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n    }\n\n    .diagram-seat-booking .left {\n        flex: 1;\n        text-align: left;\n    }\n\n    .diagram-seat-booking .right {\n        text-align: right;\n        white-space: nowrap;\n    }\n\n    .diagram-seat-booking .subtext {\n        font-size: 16px;\n        color: #777;\n        margin-left: 10px;\n    }\n\n    .diagram-seat-booking .bold {\n        font-weight: bold;\n    }\n\n    .diagram-seat-booking .divider {\n        border-top: 1px solid #eee;\n        margin: 8px 0;\n    }\n\n    .diagram-seat-booking .footer {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 75px;\n        background: #fff3cd;\n        border-radius: 0 0 10px 10px;\n        padding: 12px 16px;\n        font-weight: bold;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex-shrink: 0\n    }\n\n    .diagram-seat-booking .__circle-left,\n    .diagram-seat-booking .__circle-right {\n        position: absolute;\n        width: 20px;\n        height: 20px;\n        background: #f2f2f2;\n        border-radius: 50%;\n        top: 50%;\n        transform: translateY(-50%);\n        z-index: 1;\n    }\n\n    .diagram-seat-booking .__circle-left {\n        left: -10px;\n        border: 1px solid #f2f2f2;\n        clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);\n    }\n\n    .diagram-seat-booking .__circle-right {\n        right: -10px;\n        border: 1px solid #f2f2f2;\n        border-right: none;\n    }\n\n    .diagram-seat-booking .action-buttons {\n        display: flex;\n        gap: 12px;\n        margin-top: 20px;\n        padding: 0 10px;\n        height: auto;\n    }\n\n    .diagram-seat-booking .btn {\n        flex: 1;\n        padding: 12px 20px;\n        border: none;\n        border-radius: 6px;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        height: 50px;\n        transition: all 0.3s ease;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n    }\n\n    .diagram-seat-booking .btn-clear {\n        background-color: #f8f9fa;\n        color: #666;\n        border: 1px solid #e9ecef;\n    }\n\n    .diagram-seat-booking .btn-clear:hover {\n        background-color: #e9ecef;\n        color: #333;\n        transform: translateY(-1px);\n        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n\n    .diagram-seat-booking .btn:disabled {\n        opacity: 0.6;\n        cursor: not-allowed;\n        transform: none !important;\n        box-shadow: none !important;\n    }\n\n    .diagram-seat-booking .btn-proceed[disabled] {\n        background-color: #e3e3e3 !important;\n        color: gray;\n    }\n\n    .diagram-seat-booking .seat-legend {\n        padding: 20px;\n    }\n\n    .diagram-seat-booking .legend-items {\n        display: flex;\n        justify-content: center;\n        gap: 30px;\n        flex-wrap: wrap;\n    }\n\n    .diagram-seat-booking .legend-item {\n        display: flex;\n        align-items: center;\n        gap: 8px;\n    }\n\n    .diagram-seat-booking .legend-seat {\n        width: 30px;\n        height: 30px;\n        border-radius: 4px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-weight: bold;\n        font-size: 12px;\n        position: relative;\n    }\n\n    .diagram-seat-booking .legend-seat.available {\n        background-color: transparent;\n        border: 2px solid #9CA3AF;\n        color: #9CA3AF;\n    }\n\n    .diagram-seat-booking .legend-seat.selected {\n        background-color: #15803D;\n        border: 2px solid #15803D;\n        color: #15803D;\n    }\n\n    .diagram-seat-booking .legend-seat.booked {\n        background-color: #E5E7EB;\n        border: 2px solid #E5E7EB;\n        color: #E5E7EB;\n    }\n\n    .diagram-seat-booking .legend-text {\n        font-size: 14px;\n        font-weight: 500;\n    }\n\n    .diagram-seat-booking .success-modal {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.5);\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        z-index: 2000;\n    }\n\n    .diagram-seat-booking .success-icon {\n        font-size: 60px;\n        color: #28a745;\n        margin-bottom: 20px;\n    }\n\n    .diagram-seat-booking .success-title {\n        font-size: 24px;\n        font-weight: bold;\n        margin-bottom: 10px;\n    }\n\n    .diagram-seat-booking .success-message {\n        margin-bottom: 20px;\n        line-height: 1.5;\n        text-wrap-mode: wrap;\n    }\n\n    .diagram-seat-booking .booking-details {\n        padding: 15px;\n        border-radius: 5px;\n        text-align: left;\n    }\n\n    .diagram-seat-booking .booking-details h4 {\n        margin-bottom: 10px;\n    }\n\n    .diagram-seat-booking .booking-details p {\n        margin: 5px 0;\n        font-size: 14px;\n    }\n\n    .diagram-seat-booking .notification {\n        position: absolute;\n        top: 20px;\n        right: 20px;\n        background: #d9534f;\n        color: white;\n        padding: 10px 15px;\n        border-radius: 5px;\n        z-index: 1000;\n        animation: slideInMaxSeatError 0.3s ease-out;\n    }\n\n    @keyframes slideInMaxSeatError {\n        0% {\n            transform: translateX(100%);\n            opacity: 0;\n        }\n\n        100% {\n            transform: translateX(0);\n            opacity: 1;\n        }\n    }\n\n    .diagram-seat-booking .theater-name,\n    .diagram-seat-booking .movie-timing {\n        font-size: 14px !important;\n    }\n\n    .diagram-seat-booking .timing-list {\n        display: flex;\n        flex-wrap: wrap;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n    }\n\n    .diagram-seat-booking .timing-list li {\n        margin: 10px;\n        padding: 10px;\n        border-radius: 3px;\n    }\n\n    .diagram-seat-booking .timing-list li.selected {\n        background-color: #4F46E5;\n        color: white;\n    }\n\n    .diagram-seat-booking .timing-list li.available {\n        border: 1px solid #9CA3AF;\n        color: #15803D;\n        background-color: transparent;\n    }\n\n    .diagram-seat-booking .timing-list li.available:hover {\n        background-color: #DCFCE7;\n        border: 1px solid #15803D;\n        color: #15803D;\n    }\n\n    .diagram-seat-booking .timing-list li.filling-fast {\n        border: 1px solid #9CA3AF;\n        color: #C2410C;\n        background-color: transparent;\n    }\n\n    .diagram-seat-booking .timing-list li.filling-fast:hover {\n        background-color: #FFEDD5;\n        border: 1px solid #C2410C;\n        color: #C2410C;\n    }\n\n    .diagram-seat-booking .timing-list li.sold-out {\n        border: 1px solid #D1D5DB;\n        color: #9CA3AF;\n        background-color: #FFFFFF;\n        cursor: not-allowed;\n        opacity: 0.7;\n    }\n\n    .diagram-seat-booking .timing-list li.sold-out:hover {\n        border: 1px solid #D1D5DB;\n        color: #9CA3AF;\n        background-color: #FFFFFF;\n        color: #6c757d;\n    }\n\n    .diagram-seat-booking .timing-list li.selected {\n        background-color: #4F46E5;\n        color: white;\n        border: 1px solid #4F46E5;\n    }\n\n    .diagram-seat-booking .booking-section {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n    }\n\n    .diagram-seat-booking .price-info {\n        display: flex;\n        flex-direction: column;\n        margin-left: 30%;\n    }\n\n    .diagram-seat-booking .price {\n        font-size: 24px;\n        font-weight: bold;\n    }\n\n    .diagram-seat-booking .ticket-count {\n        font-size: 14px;\n        margin-top: 5px;\n    }\n\n    .diagram-seat-booking .btn-proceed {\n        background-color: rgb(103, 85, 238);\n        color: white;\n        border: none;\n        padding: 12px 24px;\n        border-radius: 6px;\n        font-size: 16px;\n        font-weight: bold;\n        cursor: pointer;\n        margin-right: 30%;\n        transition: background-color 0.3s;\n    }\n\n    .diagram-seat-booking .btn-proceed:hover {\n        background-color: #5a4fcf;\n        transform: translateY(-1px);\n    }\n\n    .diagram-seat-booking .btn2 {\n        flex: 1;\n        padding: 12px 20px;\n        border: none;\n        border-radius: 8px;\n        font-size: 14px;\n        font-weight: 600;\n        cursor: pointer;\n        transition: all 0.2s ease;\n        text-transform: uppercase;\n        letter-spacing: 0.5px;\n    }\n\n    .diagram-seat-booking .price-hint-inline {\n        font-size: 12px;\n        color: #888;\n        margin: 4px 0 0 0;\n        display: flex;\n        gap: 12px;\n    }\n\n    .diagram-seat-booking .timing-list {\n        display: flex;\n        justify-content: center;\n        gap: 12px;\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        width: 100%;\n    }\n\n    @media screen and (max-width: 768px) {\n        .diagram-seat-booking .main-container {\n            grid-template-columns: 1fr !important;\n            grid-template-rows: auto auto !important;\n        }\n\n        .diagram-seat-booking .ticket-selection-section {\n            grid-row: 1 !important;\n            margin: 10px !important;\n            padding: 15px !important;\n        }\n\n        .diagram-seat-booking .booking-summary-container {\n            grid-row: 2 !important;\n            padding: 0px 10px 20px 10px !important;\n        }\n\n        .diagram-seat-booking .booking-summary-section {\n            height: auto !important;\n            min-height: 400px !important;\n        }\n\n        .diagram-seat-booking .header {\n            padding: 15px 10px !important;\n        }\n\n        .diagram-seat-booking .header h2 {\n            font-size: 18px !important;\n        }\n\n        .diagram-seat-booking .movie-name-lnk {\n            font-size: 20px !important;\n        }\n\n        .diagram-seat-booking .theater-name,\n        .diagram-seat-booking .movie-timing {\n            font-size: 12px !important;\n        }\n    }\n";
