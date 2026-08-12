"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var sample_base_1 = require("../common/sample-base");
var ej2_react_treegrid_1 = require("@syncfusion/ej2-react-treegrid");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var data_1 = require("./data");
require("./restaurant-menu.css");
var React = require("react");
var RestaurantMenu = function () {
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
    }, []);
    var treegridRef = (0, react_1.useRef)(null);
    var dialogRef = (0, react_1.useRef)(null);
    var foodOrderDetailsRef = (0, react_1.useRef)([]);
    var cartCountRef = (0, react_1.useRef)(0);
    var _a = (0, react_1.useState)(data_1.foodMenu), treeData = _a[0], setTreeData = _a[1];
    var foodCountChangeFn = function (args, rowData) {
        if (args.event == undefined || null == args.event.srcElement) {
            return;
        }
        var count = args.value;
        var price = parseFloat(rowData.newPrice);
        var foodName = rowData.FoodName;
        var updatedCart = __spreadArray([], foodOrderDetailsRef.current, true);
        var index = updatedCart.findIndex(function (item) { return item.foodName === foodName; });
        var newCartCount = cartCountRef.current;
        if (args.previousValue < count) {
            newCartCount += (count - args.previousValue);
        }
        else if (args.previousValue > count) {
            newCartCount -= (args.previousValue - count);
        }
        if (count > 0) {
            if (index >= 0) {
                updatedCart[index] = __assign(__assign({}, updatedCart[index]), { count: count });
            }
            else {
                updatedCart.push({ foodName: foodName, count: count, price: price });
            }
        }
        else if (index >= 0) {
            updatedCart.splice(index, 1);
        }
        cartCountRef.current = newCartCount;
        foodOrderDetailsRef.current = updatedCart;
        document.getElementsByClassName('e-cart-badge')[0].textContent = cartCountRef.current.toString();
    };
    var clearCart = function () {
        foodOrderDetailsRef.current = [];
        cartCountRef.current = 0;
        var numericBoxes = document.querySelectorAll('.resmenu-count .e-numerictextbox');
        numericBoxes.forEach(function (box) {
            var instance = box.ej2_instances && box.ej2_instances[0];
            if (instance)
                instance.value = 0;
        });
        document.getElementsByClassName('e-cart-badge')[0].textContent = '0';
        if (dialogRef.current) {
            dialogRef.current.hide();
        }
    };
    var getFoodCount = function (foodName) {
        var item = foodOrderDetailsRef.current.find(function (order) { return order.foodName === foodName; });
        return item ? item.count : 0;
    };
    var onSearchChange = function (args) {
        var value = args.value ? args.value.toLowerCase() : '';
        var searchedData = data_1.foodMenu.filter(function (item) { return item.FoodName.toLowerCase().includes(value) ||
            item.FoodCategory.toLowerCase().includes(value) ||
            !item.CategoryId; });
        searchedData.forEach(function (parent) {
            if (!parent.CategoryId) {
                var children = searchedData.filter(function (item) { return item.CategoryId === parent.FoodId; });
                parent.vegCount = children.filter(function (i) { return i.FoodType === 'Veg'; }).length;
                parent.nonvegCount = children.filter(function (i) { return i.FoodType === 'Non-veg'; }).length;
            }
        });
        searchedData = searchedData.filter(function (item) {
            var foodcount = item.vegCount + item.nonvegCount;
            return (foodcount === 0 && item.CategoryId) || (foodcount > 0 && !item.CategoryId);
        });
        setTreeData(searchedData);
    };
    var rowTemplate = function (props) {
        if (props.FoodName === props.FoodCategory || props.CategoryId == null) {
            return (React.createElement("tr", null,
                React.createElement("td", { className: 'resmenu-cell resmenu-parentfoodname', colSpan: 3 },
                    React.createElement("span", { className: "resmenu-title" },
                        props.FoodName,
                        "\u00A0(",
                        props.vegCount + props.nonvegCount,
                        ")"))));
        }
        return (React.createElement("tr", null,
            React.createElement("td", { className: 'resmenu-cell' },
                React.createElement("div", { className: 'resmenu-card' },
                    React.createElement("div", { className: "foodname-row" },
                        props.FoodType === 'Veg' ? (React.createElement("span", { className: 'resmenu-FoodCategory_icon_veg' },
                            React.createElement("span", { className: "resmenu-veg-icon" }))) : (React.createElement("span", { className: 'resmenu-FoodCategory_icon_nonveg' },
                            React.createElement("span", { className: "resmenu-nonveg-icon" }))),
                        React.createElement("span", { className: 'resmenu-foodname' }, props.FoodName)),
                    React.createElement("div", { className: "resmenu-rating" },
                        React.createElement("span", null,
                            React.createElement("span", { className: "resmenu-rating-thumbsup" }, "\uD83D\uDC4D"),
                            React.createElement("span", { className: "resmenu-rating-value" }, props.Rating),
                            React.createElement("span", { className: "resmenu-rating-count" },
                                "(",
                                props.TotalReviews,
                                ")"))),
                    React.createElement("div", { className: 'resmenu-fooddesc' }, props.FoodDescription),
                    React.createElement("div", { className: "resmenu-info-separator" },
                        React.createElement(ej2_react_buttons_1.ChipListComponent, { chips: props.ingredients, cssClass: "e-outline", id: "ingredientsList" })))),
            React.createElement("td", { className: 'resmenu-cell' },
                React.createElement("div", { className: "resmenu-price-section" }, props.originalPrice > props.newPrice ? (React.createElement(React.Fragment, null,
                    React.createElement("span", { className: "resmenu-price" },
                        "$",
                        props.newPrice,
                        " \u00A0\u00A0"),
                    React.createElement("span", { className: 'price-direction' }, "  <--- "),
                    React.createElement("span", { className: "resmenu-old-price" },
                        "$",
                        props.originalPrice))) : React.createElement("span", { className: "resmenu-price" },
                    "$",
                    props.newPrice))),
            React.createElement("td", { className: 'resmenu-cell' },
                React.createElement("div", { className: "menu-right" },
                    React.createElement("div", { className: "resmenu-image-wrap" },
                        React.createElement("img", { className: "resmenu-image", src: props.Image, alt: props.FoodName }),
                        React.createElement("div", { className: "resmenu-count" },
                            React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { min: 0, max: 10, step: 1, format: "N0", width: "110px", value: getFoodCount(props.FoodName), change: function (args) {
                                    foodCountChangeFn(args, props);
                                } })))))));
    };
    var printCartDialogContent = function () {
        var treeGridElement = document.getElementById('RestaurantTreeGrid');
        var rect = treeGridElement.getBoundingClientRect();
        var rect = treeGridElement.getBoundingClientRect();
        var windowWidth = 400;
        var windowHeight = 600;
        var leftPosition = rect.left + window.scrollX + (rect.width / 2) - (windowWidth / 2);
        var topPosition = rect.top + window.scrollY + (rect.height / 2) - (windowHeight / 2);
        var printContents = document.querySelector('#cartDialog .e-dlg-content').innerHTML;
        var printWindow = window.open('', '', "height=".concat(windowHeight, ",width=").concat(windowWidth, ",left=").concat(leftPosition, ",top=").concat(topPosition));
        printWindow.document.write(printContents);
        printWindow.focus();
        printWindow.addEventListener('afterprint', function (args) {
            printWindow.close();
            clearCart();
        });
        printWindow.print();
    };
    var onCartClick = function () {
        var cartItems = foodOrderDetailsRef.current.filter(function (item) { return item.count > 0; });
        if (dialogRef.current) {
            dialogRef.current.content = getCartTableHtml(cartItems);
            dialogRef.current.show();
        }
    };
    var toolbarOptions = [
        {
            template: "\n                    <div style=\"display:flex;align-items:center;cursor:auto;\">\n                        <img src=\"src/treegrid/images/male.png\" alt=\"avatar\" style=\"width:40px;height:40px;border-radius:50%;margin-right:14px;\">\n                        <div>\n                            <div style=\"font-size:20px;font-weight:600;line-height:1.2;\">Hi, <span style=\"color:#ff9800;font-weight:700;\">Susan</span></div>\n                            <div style=\"font-size:13px;color:#888;line-height:1.2;\">Morrisville, USA</div>\n                        </div>\n                    </div>\n                    ",
            align: 'Left',
            id: 'customerDetails'
        },
        {
            id: 'CartUpdate',
            align: 'Right',
            template: '<div class="e-btn-group e-custom-button badge-block"><button id="CartUpdate" class="e-btn">VIEW CART<span id="cartbadge" class="e-cart-badge e-badge e-badge-primary e-badge-notification e-badge-overlap">0</span></button></div>'
        }
    ];
    var toolbarClick = function (args) {
        if (args.item.id === 'CartUpdate') {
            onCartClick();
        }
    };
    var getCartTableHtml = function (items) {
        if (!items.length) {
            return '<div class="cart-empty">No items in cart.</div>';
        }
        var rows = items.map(function (item) { return "\n      <tr>\n        <td>".concat(item.foodName, "</td>\n        <td>$").concat(item.price, "</td>\n        <td style=\"text-align:center;\">").concat(item.count, "</td>\n        <td style=\"text-align:right;\">$").concat((item.price * item.count).toFixed(2), "</td>\n      </tr>\n    "); }).join('');
        var total = Math.round(items.reduce(function (sum, item) { return sum + item.price * item.count; }, 0));
        var delivery = 3.6;
        var gst = Math.round(total * 0.12 * 100) / 100;
        var toPay = Math.round((total + delivery + gst) * 100) / 100;
        return "\n      <div class=\"sample-order\">\n            <div  class=\"resmenu-order-no\"><span > Order No: </span>".concat(Math.floor(Math.random() * (99 - 10 + 1)) + 100, "</div>\n            <div  ><span class=\"resmenu-order-date\">Date: </span>").concat(new Date().toLocaleDateString(), "</div>\n        </div>\n        <div id=\"dialog-container\">\n            <div style=\"max-height:220px;overflow-y:auto;margin-bottom:12px;\">\n            <table style=\"width:100%;border-collapse:collapse;\">\n                <thead>\n                    <tr style=\"border-bottom: 2px solid #e0e0e0;\">\n                        <th style=\"text-align:left;\">Dish</th>\n                        <th style=\"text-align:left;\">Price</th>\n                        <th style=\"text-align:center;\">Qty</th>\n                        <th style=\"text-align:right;\">Total</th>\n                    </tr>\n                </thead>\n                <tbody>").concat(rows, "</tbody>\n            </table>\n            </div>\n            <div style=\"border-top:2px solid #eee;padding-top:12px;\">\n                <div style=\"display:flex;justify-content:space-between;margin-bottom:4px;\">\n                    <span>Item Total</span><span>$").concat(total, "</span>\n                </div>\n                <div style=\"display:flex;justify-content:space-between;margin-bottom:4px;\">\n                    <span>Delivery Fee</span><span>$").concat(delivery, "</span>\n                </div>\n                <div style=\"display:flex;justify-content:space-between;margin-bottom:4px;\">\n                    <span>TAX & Other Charges</span><span>$").concat(gst, "</span>\n                </div>\n                <div style=\"border-top:2px solid #beb5b5;display:flex;justify-content:space-between;font-weight:bold;font-size:18px;margin-top:10px;\">\n                    <span>TO PAY</span><span>$").concat(toPay, "</span>\n                </div>\n            </div>\n             <div class=\"resmenu-thank-note\">\n              <div >Thank you for your order!</div>\n            </div>\n        </div>\n    ");
    };
    var databound = function () {
        treegridRef.current.grid.emptyRecordTemplate = "<div className='emptyRecordTemplate'>        \n        <span className=\"resmenu-emptyRecord\">Hmm... we could not find that dish. Want to try something else?</span>\n    </div>";
    };
    var beforeOpen = function (args) {
        var itemsInCart = foodOrderDetailsRef.current.filter(function (item) { return item.count > 0; });
        if (itemsInCart.length < 4) {
            args.maxHeight = '500px';
        }
        else {
            args.maxHeight = '600px';
        }
        if (itemsInCart.length === 0) {
            dialogRef.current.buttons[1].buttonModel.disabled = true;
        }
        else {
            dialogRef.current.buttons[1].buttonModel.disabled = false;
        }
        dialogRef.current.refresh();
    };
    return (React.createElement("div", { className: "control-pane" },
        React.createElement("div", { className: "control-section" },
            React.createElement("div", { className: "treegrid-center-container" },
                React.createElement("div", { className: "resmenu-toolbar-search" },
                    React.createElement(ej2_react_dropdowns_1.AutoCompleteComponent, { dataSource: Array.from(new Set(data_1.foodMenu.map(function (i) { return i.FoodName; }))), placeholder: "Search for dishes", width: '800px', highlight: true, filterType: 'Contains', change: onSearchChange, id: 'search-autocomplete' })),
                React.createElement("div", { id: "res-menu" },
                    React.createElement(ej2_react_popups_1.DialogComponent, { id: "cartDialog", ref: dialogRef, header: 'Bill Summary', width: '400px', showCloseIcon: true, isModal: true, visible: false, animationSettings: { effect: 'Zoom' }, buttons: [
                            { click: function () { return clearCart(); }, buttonModel: { content: 'Cancel' } },
                            { click: function () { return printCartDialogContent(); }, buttonModel: { content: 'Print', isPrimary: true } },
                        ], target: '#RestaurantTreeGrid', beforeOpen: beforeOpen }),
                    React.createElement(ej2_react_treegrid_1.TreeGridComponent, { id: 'RestaurantTreeGrid', ref: treegridRef, allowKeyboard: false, dataSource: treeData, dataBound: databound, idMapping: 'FoodId', parentIdMapping: 'CategoryId', treeColumnIndex: 0, rowTemplate: rowTemplate, toolbar: toolbarOptions, toolbarClick: toolbarClick, height: 400, width: 800 },
                        React.createElement(ej2_react_treegrid_1.ColumnsDirective, null,
                            React.createElement(ej2_react_treegrid_1.ColumnDirective, { field: 'FoodName', headerText: 'Explore Our Menu', width: '150' })),
                        React.createElement(ej2_react_treegrid_1.Inject, { services: [ej2_react_treegrid_1.Toolbar] }))))),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This demo shows how the Tree Grid can be used to create a visually rich and interactive food menu. The demo meets different viewer preferences, such as vegetarian and bestseller dishes. It uses a food dataset that includes details for categories like salads, pizza, burgers, hot-dogs, chowmein, and desserts, with descriptions, prices and ratings.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "The sample shows how dynamic, customizable row templates and custom cell rendering make the menu more informative and attractive. The Tree Grid row template adds visual elements like images, ratings, and price comparisons right in the cells. With its flexibility and easy customization, the Tree Grid is a great tool for creating interesting and engaging food menu presentations."),
            React.createElement("p", null,
                "More information about TreeGrid can be found in the",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/treegrid/getting-started" }, "documentation section"),
                "."),
            React.createElement("p", null,
                "Looking for the full React Tree Grid component overview, features, pricing, and documentation? Visit our ",
                React.createElement("a", { target: "_blank", href: "https://www.syncfusion.com/react-components/react-tree-grid" }, "React Tree Grid component"),
                " page."))));
};
exports.default = RestaurantMenu;
