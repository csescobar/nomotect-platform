"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleLeftPane = exports.sampleOverlay = exports.removeOverlay = exports.isLeftPaneOpen = exports.viewMobilePropPane = exports.processDeviceDependables = exports.setSbLink = exports.setResponsiveElement = exports.sidebar = exports.selectedTheme = void 0;
var client_1 = require("react-dom/client");
var React = require("react");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_react_popups_1 = require("@syncfusion/ej2-react-popups");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var elasticlunr = require("elasticlunr");
var searchJson = require("./search-index.json");
var leftpane_1 = require("./leftpane");
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
var locale_string_1 = require("./locale-string");
var component_content_1 = require("./component-content");
require("../../node_modules/es6-promise/dist/es6-promise");
var numberingSystems = require("../common/cldr-data/supplemental/numberingSystems.json");
var currencyData = require("../common/cldr-data/supplemental/currencyData.json");
var deCultureData = require("../common/cldr-data/main/de/all.json");
var arCultureData = require("../common/cldr-data/main/ar/all.json");
var swissCultureDate = require("../common/cldr-data/main/fr-CH/all.json");
var enCultureData = require("../common/cldr-data/main/en/all.json");
var chinaCultureData = require("../common/cldr-data/main/zh/all.json");
var react_1 = require("react");
var cBlock = ['ts-src-tab', 'html-src-tab'];
var matchedCurrency = {
    'en': 'USD',
    'de': 'EUR',
    'ar': 'AED',
    'zh': 'CNY',
    'fr-CH': 'CHF'
};
(0, ej2_base_1.loadCldr)(numberingSystems, chinaCultureData, enCultureData, swissCultureDate, currencyData, deCultureData, arCultureData);
ej2_base_1.L10n.load(locale_string_1.Locale);
(0, ej2_base_1.setCulture)('en');
(0, ej2_base_1.registerLicense)(window.syncfusion_license);
/**
 * Mobile View.
 */
var isMobile = window.matchMedia('(max-width:550px)').matches;
/**
 * tablet mode
 */
var isTablet = window.matchMedia('(min-width:600px) and (max-width: 850px)').matches;
/**
 * PC mode
 */
var isPc = window.matchMedia('(min-width:850px)').matches;
var isUpdatingFromUrl = false;
var resizeManualTrigger = false;
//dropdown rendered flag
var dropdownsRendered = false;
//events bound flag
var eventsBound = false;
//mount samples flag
var leftPaneRoot = null;
var tabRoot = null;
/**
 * Themes to be redirect
 */
var themesToRedirect = ['material', 'material-dark', 'bootstrap4', 'bootstrap', 'bootstrap-dark', 'fabric', 'fabric-dark'];
/**
 * default theme on sample loaded
 */
exports.selectedTheme = location.hash.split('/')[1] || localStorage.getItem('ej2-theme') || 'tailwind3';
localStorage.removeItem('ej2-theme');
var hashParts = location.hash.split('/');
var control = hashParts[2];
var specialControls = ['pdfviewer', 'spreadsheet', 'document-editor'];
if (specialControls.indexOf(control) !== -1) {
    var theme = exports.selectedTheme;
    var folderMap = {
        pdfviewer: 'pdf-viewer',
        spreadsheet: 'spreadsheet-editor',
        'document-editor': 'docx-editor'
    };
    var folder = folderMap[control]; // Use the already parsed theme
    var newUrl = "https://document.syncfusion.com/demos/".concat(folder, "/react/#/").concat(theme, "/").concat(control, "/default");
    window.location.href = newUrl;
}
var themeCollection = ['material3', 'bootstrap5', 'fluent2', 'tailwind3', 'fluent2-highcontrast', 'highcontrast', 'tailwind', 'fluent'];
var themeList = document.getElementById('themelist');
/**
 * Toggle Pane Animation
 */
var toggleAnim = new ej2_base_1.Animation({ duration: 500, timingFunction: 'ease' });
var leftToggle = (0, ej2_base_1.select)('#sb-toggle-left');
var sbRightPane = (0, ej2_base_1.select)('.sb-right-pane');
var sbContentOverlay = (0, ej2_base_1.select)('.sb-content-overlay');
var sbBodyOverlay = (0, ej2_base_1.select)('.sb-body-overlay');
var sbHeader = (0, ej2_base_1.select)('#sample-header');
var leftPane = (0, ej2_base_1.select)('.sb-left-pane');
var mobileOverlay = (0, ej2_base_1.select)('.sb-mobile-overlay');
var resetSearch = (0, ej2_base_1.select)('.sb-reset-icon');
var settingsidebar;
/**
 * SB Popups.
 */
var switcherPopup;
var themeSwitherPopup;
var searchPopup;
var settingsPopup;
var productsPopup;
var searchInstance;
var settingElement = (0, ej2_base_1.select)('.sb-setting-btn');
var openedPopup;
var headerThemeSwitch = document.getElementById('header-theme-switcher');
var headerProductsSwitch = document.getElementById('header-products-switcher');
var prevAction;
var themeDropDown;
var themeModeDropDown;
var cultureDropDown;
var currencyDropDown;
var productsDropDown;
var productsList = document.getElementById('productslist');
var newYear = new Date().getFullYear();
var copyRight = document.querySelector('.sb-footer-copyright');
copyRight.innerHTML = "Copyright © 2001 - " + newYear + " Syncfusion<sup>®</sup> Inc.";
isMobile = window.matchMedia('(max-width:550px)').matches;
if (ej2_base_1.Browser.isDevice || isMobile) {
    if (exports.sidebar) {
        exports.sidebar.destroy();
    }
    exports.sidebar = new ej2_navigations_1.Sidebar({ width: '280px', showBackdrop: true, closeOnDocumentClick: true, enableGestures: false, change: resizeFunction });
    exports.sidebar.appendTo('#left-sidebar');
}
else {
    exports.sidebar = new ej2_navigations_1.Sidebar({
        width: '282px', target: document.querySelector('.sb-content '),
        showBackdrop: false,
        closeOnDocumentClick: false,
        enableGestures: false,
        change: resizeFunction,
        created: resizeFunction
    });
    exports.sidebar.appendTo('#left-sidebar');
}
var openNew = new ej2_react_popups_1.Tooltip({
    content: 'Open Next.js Demos'
});
openNew.appendTo('.sb-nextjs-wrapper');
/**
 * constant to process the sample url
 */
var urlRegex = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development|production)*/;
var sampleRegex = /#\/(([^\/]+\/)+[^\/\.]+)/;
var sbArray = ['angular', 'nextjs', 'typescript', 'javascript', 'aspnetcore', 'aspnetmvc', 'vue', 'blazor'];
var sbObj = { 'angular': 'angular', 'nextjs': 'nextjs', 'typescript': '', 'javascript': 'javascript', 'vue': 'vue', 'blazor': 'blazor' };
/**
 * constant for search operations
 */
var searchEle = (0, ej2_base_1.select)('#search-popup');
var inputele = (0, ej2_base_1.select)('#search-input');
var searchOverlay = (0, ej2_base_1.select)('.e-search-overlay');
var searchButton = document.getElementById('sb-trigger-search');
exports.setResponsiveElement = (0, ej2_base_1.select)('.setting-responsive');
/**
 * Mouse or touch setting
 */
var switchText = localStorage.getItem('ej2-switch') || 'mouse';
if (ej2_base_1.Browser.isDevice || window.screen.width <= 850) {
    switchText = 'touch';
}
changeMouseOrTouch(switchText);
overlay();
/**
 * Mobile View
 */
var thememode = document.getElementById('theme-mode');
var mobilemodeicon = document.getElementById('mobile-mode-icon');
if (isMobile) {
    (0, ej2_base_1.select)('.sb-left-pane-footer').appendChild((0, ej2_base_1.select)('.sb-footer-left'));
    (0, ej2_base_1.select)('#left-sidebar').classList.add('sb-hide');
    leftToggle.classList.remove('toggle-active');
    if (exports.selectedTheme.includes('highcontrast')) {
        thememode.classList.add('hidden');
    }
    if (exports.selectedTheme.includes('-dark')) {
        mobilemodeicon.classList.add('pane-light-theme');
    }
    else {
        mobilemodeicon.classList.add('pane-dark-theme');
    }
}
if (ej2_base_1.Browser.isDevice || isMobile) {
    leftToggle.setAttribute('aria-expanded', 'false');
    (0, ej2_base_1.select)('.sb-nextjs-mobile-wrapper').classList.toggle('sb-hide');
}
else {
    leftToggle.setAttribute('aria-expanded', 'true');
    (0, ej2_base_1.select)('.sb-nextjs-wrapper').classList.toggle('sb-hide');
}
/**
 * Tab View
 */
if (isTablet || (ej2_base_1.Browser.isDevice && isPc)) {
    leftToggle.classList.remove('toggle-active');
    (0, ej2_base_1.select)('.sb-right-pane').classList.add('control-fullview');
}
changeMouseOrTouch(switchText);
// localStorage.removeItem('ej2-switch');
(0, ej2_base_1.enableRipple)((exports.selectedTheme && exports.selectedTheme.indexOf('material') !== -1) || !exports.selectedTheme);
loadTheme(exports.selectedTheme);
/**
 * SB Switch Link Updation
 */
function setSbLink() {
    var hrefLink = location.hash.split('/').slice(1);
    var href = location.href = '#/' + exports.selectedTheme + '/' + hrefLink.slice(1).join('/');
    var link = href.match(urlRegex);
    var sample = href.match(sampleRegex);
    for (var _i = 0, sbArray_1 = sbArray; _i < sbArray_1.length; _i++) {
        var sb = sbArray_1[_i];
        var ele = (0, ej2_base_1.select)('#' + sb);
        if (sb === 'aspnetcore' || sb === 'aspnetmvc') {
            ele.href = sb === 'aspnetcore' ? 'https://ej2.syncfusion.com/aspnetcore/' : 'https://ej2.syncfusion.com/aspnetmvc/';
        }
        else if (sb === 'nextjs') {
            ele.href = 'https://ej2.syncfusion.com/nextjs/demos/' + sample[1];
        }
        else if (sb === 'blazor') {
            ele.href = 'https://blazor.syncfusion.com/demos/';
        }
        else if (sb === 'vue' && location.href.includes('grid/overview')) {
            ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) : ('https://ej2.syncfusion.com/')) + 'vue/demos/#/' + exports.selectedTheme + '/grid/grid-overview.html';
        }
        else {
            ele.href = ((link) ? ('http://' + link[1] + '/' + (link[3] ? (link[3] + '/') : '')) :
                ('https://ej2.syncfusion.com/')) + (sbObj[sb] ? (sb + '/') : '') +
                'demos/#/' + (sample ? (sample[1] + (sb !== 'typescript' ? '' : '.html')) : '');
        }
    }
}
exports.setSbLink = setSbLink;
/**
 * Set Mouse or Touch on page load
 */
function changeMouseOrTouch(str) {
    var activeEle = exports.setResponsiveElement.querySelector('.active');
    if (activeEle) {
        activeEle.classList.remove('active');
    }
    if (str === 'mouse') {
        document.body.classList.remove('e-bigger');
    }
    else {
        document.body.classList.add('e-bigger');
    }
    exports.setResponsiveElement.querySelector('#' + str).classList.add('active');
}
/**
 * Render Sample Browser Popups
 */
function renderSbPopups() {
    if (dropdownsRendered) {
        return;
    }
    switcherPopup = new ej2_react_popups_1.Popup(document.getElementById('sb-switcher-popup'), {
        relateTo: (0, ej2_base_1.select)('.sb-header-text-right'), position: { X: 'left' },
        collision: { X: 'flip', Y: 'flip' },
        offsetX: 0,
        offsetY: -15,
    });
    themeSwitherPopup = new ej2_react_popups_1.Popup(document.getElementById('theme-switcher-popup'), {
        offsetY: 2,
        zIndex: 10012,
        relateTo: (0, ej2_base_1.select)('.theme-wrapper'), position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    searchPopup = new ej2_react_popups_1.Popup(searchEle, {
        offsetY: 5,
        relateTo: inputele, position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    productsPopup = new ej2_react_popups_1.Popup(document.getElementById('products-popup'), {
        offsetY: 2,
        zIndex: 10012,
        relateTo: (0, ej2_base_1.select)('.sb-header-item.sb-table-cell.sb-products-wrapper'), position: { X: 'left', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    settingsPopup = new ej2_react_popups_1.Popup(document.getElementById('settings-popup'), {
        offsetY: 5,
        zIndex: 10012,
        relateTo: settingElement,
        position: { X: 'right', Y: 'bottom' },
        collision: { X: 'flip', Y: 'flip' }
    });
    settingsidebar = new ej2_navigations_1.Sidebar({
        position: 'Right', width: '282', zIndex: '1003', showBackdrop: true, type: 'Over',
        closeOnDocumentClick: true, close: closeRightSidebar
    });
    settingsidebar.appendTo('#right-sidebar');
    if (!isMobile) {
        settingsidebar.hide();
        settingsPopup.hide();
    }
    else {
        (0, ej2_base_1.select)('.sb-mobile-preference').appendChild((0, ej2_base_1.select)('#settings-popup'));
    }
    searchPopup.hide();
    switcherPopup.hide();
    themeSwitherPopup.hide();
    productsPopup.hide();
    themeDropDown = new ej2_react_dropdowns_1.DropDownList({
        index: themeCollection.indexOf(exports.selectedTheme.replace('-dark', '')),
        change: function (e) {
            if (exports.selectedTheme.includes('-dark') && !e.value.includes('highcontrast')) {
                switchTheme(e.value + '-dark');
            }
            else {
                switchTheme(e.value);
            }
        }
    });
    themeModeDropDown = new ej2_react_dropdowns_1.DropDownList({
        index: exports.selectedTheme.includes('-dark') ? 1 : 0,
        change: function (e) {
            //PREVENT infinite loop - ignore if updating from URL
            if (isUpdatingFromUrl) {
                return;
            }
            // Only toggle if not highcontrast
            if (!exports.selectedTheme.includes('highcontrast')) {
                var parts = location.hash.replace(/^#\//, '').split('/');
                var current = parts[0] || localStorage.getItem('selectedTheme') || 'tailwind3';
                var samplePath = parts.slice(1).join('/');
                var isDarkCurrent = current.endsWith('-dark');
                var base = isDarkCurrent ? current.slice(0, -5) : current;
                // Derive new theme from dropdown selection
                var wantDark = e.value === 'Dark';
                var newTheme = wantDark ? "".concat(base, "-dark") : base;
                // No-op if theme hasn't actually changed
                if (newTheme === current) {
                    return;
                }
                persistTheme(newTheme);
                updateHash(newTheme, samplePath);
                applyBodyClass(newTheme);
                refreshCurrentControl();
                if (isMobile) {
                    var isDark = newTheme.includes('-dark');
                    var iconClass = "sb-icons pane-".concat(isDark ? 'light-theme' : 'dark-theme');
                    var iconElement = document.getElementById('mobile-mode-icon');
                    if (iconElement) {
                        iconElement.className = iconClass;
                    }
                }
            }
        }
    });
    cultureDropDown = new ej2_react_dropdowns_1.DropDownList({
        index: 0,
        change: function (e) {
            var value = e.value;
            currencyDropDown.value = matchedCurrency[value];
            (0, ej2_base_1.setCulture)(e.value);
            if (value == 'ar') {
                changeRtl(true);
            }
            else {
                changeRtl(false);
            }
        }
    });
    currencyDropDown = new ej2_react_dropdowns_1.DropDownList({
        index: 0,
        change: function (e) { (0, ej2_base_1.setCurrencyCode)(e.value); }
    });
    cultureDropDown.appendTo('#sb-setting-culture');
    currencyDropDown.appendTo('#sb-setting-currency');
    themeDropDown.appendTo('#sb-setting-theme');
    themeModeDropDown.appendTo('#sb-theme-mode');
    productsDropDown = new ej2_react_dropdowns_1.DropDownList({
        index: 0,
        change: function (e) {
            var productUrl = '';
            var currentTheme = exports.selectedTheme || 'tailwind3';
            if (e.value === 'pdf') {
                productUrl = "https://document.syncfusion.com/demos/pdf-viewer/react/#/".concat(currentTheme, "/pdfviewer/default.html");
            }
            else if (e.value === 'spreadsheet') {
                productUrl = "https://document.syncfusion.com/demos/spreadsheet-editor/react/#/".concat(currentTheme, "/spreadsheet/default.html");
            }
            else if (e.value === 'docx') {
                productUrl = "https://document.syncfusion.com/demos/docx-editor/react/#/".concat(currentTheme, "/document-editor/default.html");
            }
            if (productUrl) {
                window.open(productUrl, '_blank');
            }
        }
    });
    productsDropDown.appendTo('#sb-setting-products');
    /**
     * add header to element
     */
    var prevbutton = new ej2_react_buttons_1.Button({ iconCss: 'sb-icons sb-icon-Previous', cssClass: 'e-flat' }, '#mobile-prev-sample');
    var nextbutton = new ej2_react_buttons_1.Button({
        iconCss: 'sb-icons sb-icon-Next',
        cssClass: 'e-flat', iconPosition: 'Right'
    }, '#mobile-next-sample');
    dropdownsRendered = true;
}
function closeRightSidebar(args) {
    var targetEle = args.event ? args.event.target : null;
    if (targetEle && targetEle.closest('.e-popup'))
        args.cancel = true;
}
function processDeviceDependables() {
    if (ej2_base_1.Browser.isDevice) {
        (0, ej2_base_1.select)('.sb-desktop-setting').classList.add('sb-hide');
    }
    else {
        (0, ej2_base_1.select)('.sb-desktop-setting').classList.remove('sb-hide');
    }
}
exports.processDeviceDependables = processDeviceDependables;
/**
 * Theme change function
 */
function changeTheme(e) {
    var target = e.target;
    target = (0, ej2_base_1.closest)(target, 'li');
    var themeName = target.id;
    var newTheme = (exports.selectedTheme.includes('-dark') && !themeName.includes('highcontrast')) ? (themeName + '-dark') : themeName;
    switchTheme(newTheme);
    var imageEditorElem = document.querySelector(".e-image-editor");
    if (imageEditorElem != null) {
        var imageEditor = (0, ej2_base_1.getComponent)(document.getElementById(imageEditorElem.id), 'image-editor');
        imageEditor.theme = themeName;
    }
    // loadTheme(themeName);
}
function parseTheme(themeRaw) {
    return themeRaw.includes('_') ? themeRaw.replace('_', '.') : themeRaw;
}
function persistTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
    exports.selectedTheme = theme;
}
function updateHash(theme, samplePath) {
    if (samplePath === void 0) { samplePath = ''; }
    var newHash = "#/".concat(theme, "/").concat(samplePath);
    if (location.hash !== newHash) {
        location.hash = newHash;
    }
}
function highlightActiveTheme(base) {
    var _a, _b;
    (_a = themeList.querySelector('.active')) === null || _a === void 0 ? void 0 : _a.classList.remove('active');
    (_b = themeList.querySelector("#".concat(base))) === null || _b === void 0 ? void 0 : _b.classList.add('active');
}
function switchTheme(themeRaw) {
    var theme = parseTheme(themeRaw);
    persistTheme(theme);
    var parts = location.hash.replace(/^#\//, '').split('/');
    if (parts[0] !== theme) {
        parts[0] = theme;
        location.hash = '#/' + parts.join('/');
    }
    // loadTheme(theme);
    location.reload();
    setSbLink();
}
searchOverlay.addEventListener('click', searchOverlayClick);
function searchOverlayClick() {
    toggleSearchOverlay();
}
/**
 * Header Click Event Handling
 */
function sbHeaderClick(action, preventSearch) {
    if (openedPopup) {
        openedPopup.hide(new ej2_base_1.Animation({ name: 'FadeOut', duration: 300, delay: 0 }));
    }
    if (preventSearch !== true && !searchOverlay.classList.contains('sb-hide')) {
        searchOverlay.classList.add('sb-hide');
        searchButton.classList.remove('active');
    }
    var curPopup;
    switch (action) {
        case 'changeSampleBrowser':
            curPopup = switcherPopup;
            break;
        case 'changeTheme':
            headerThemeSwitch.classList.toggle('active');
            curPopup = themeSwitherPopup;
            break;
        case 'changeProducts':
            headerProductsSwitch.classList.toggle('active');
            curPopup = productsPopup;
            break;
        case 'toggleSettings':
            settingElement.classList.toggle('active');
            themeDropDown.index = themeCollection.indexOf(exports.selectedTheme);
            curPopup = settingsPopup;
            break;
    }
    if (action === 'closePopup') {
        headerThemeSwitch.classList.remove('active');
        headerProductsSwitch.classList.remove('active');
        settingElement.classList.remove('active');
    }
    if (curPopup && curPopup !== openedPopup) {
        curPopup.show(new ej2_base_1.Animation({ name: 'FadeIn', duration: 400, delay: 0 }));
        openedPopup = curPopup;
    }
    else {
        openedPopup = null;
    }
    prevAction = action;
}
/**
 * toggle search overlay
 */
function toggleSearchOverlay() {
    sbHeaderClick('closePopup', true);
    inputele.value = '';
    searchPopup.hide();
    searchButton.classList.toggle('active');
    searchOverlay.classList.toggle('sb-hide');
    if (!searchOverlay.classList.contains('sb-hide')) {
        inputele.focus();
    }
}
/**
 * Storing the mouse action
 */
function setMouseOrTouch(e) {
    var ele = (0, ej2_base_1.closest)(e.target, '.sb-responsive-items');
    var switchType = ele.id;
    changeMouseOrTouch(switchType);
    sbHeaderClick('closePopup');
    localStorage.setItem('ej2-switch', switchType);
    location.reload();
}
function resizeFunction() {
    if (!isMobile && !isTablet) {
        resizeManualTrigger = true;
        setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 200);
    }
}
function resetInput(arg) {
    arg.preventDefault();
    arg.stopPropagation();
    document.getElementById('search-input').value = '';
    document.getElementById('search-input-wrapper').setAttribute('data-value', '');
    searchPopup.hide();
}
/**
 * Binding events for sample browser operations
 */
function bindEvents() {
    if (eventsBound) {
        return;
    }
    eventsBound = true;
    document.getElementById('sb-switcher').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeSampleBrowser');
    });
    document.getElementById('sb-switcher').addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            sbHeaderClick('changeSampleBrowser');
        }
    });
    (0, ej2_base_1.select)('.sb-header-text-right').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeSampleBrowser');
    });
    headerThemeSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeTheme');
    });
    headerThemeSwitch.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            sbHeaderClick('changeTheme');
        }
    });
    themeList.addEventListener('click', changeTheme);
    headerProductsSwitch.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('changeProducts');
    });
    headerProductsSwitch.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            sbHeaderClick('changeProducts');
        }
    });
    if (productsList) {
        productsList.addEventListener('click', handleProductSelection);
    }
    document.addEventListener('click', sbHeaderClick.bind(this, 'closePopup'));
    settingElement.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        sbHeaderClick('toggleSettings');
    });
    settingElement.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            sbHeaderClick('toggleSettings');
        }
    });
    searchButton.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleSearchOverlay();
    });
    searchButton.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            toggleSearchOverlay();
        }
    });
    document.getElementById('settings-popup').addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    inputele.addEventListener('keyup', onsearchInputChange);
    exports.setResponsiveElement.addEventListener('click', setMouseOrTouch);
    leftToggle.addEventListener('click', toggleLeftPane);
    leftToggle.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 || e.keyCode === 32) {
            toggleLeftPane();
        }
    });
    mobileOverlay.addEventListener('click', toggleMobileOverlay);
    (0, ej2_base_1.select)('.sb-header-settings').addEventListener('click', viewMobilePrefPane);
    resetSearch.addEventListener('click', resetInput);
    document.getElementById('switch-sb').addEventListener('click', function (e) {
        var target = (0, ej2_base_1.closest)(e.target, 'li');
        if (target) {
            var anchor = target.querySelector('a');
            if (anchor) {
                anchor.click();
            }
        }
    });
    /**
     * resize event
     */
    window.addEventListener('resize', processResize);
    (0, ej2_base_1.select)('.sb-right-pane').addEventListener('click', function () {
        if (isTablet && isLeftPaneOpen()) {
            toggleLeftPane();
        }
    });
    searchEle.addEventListener('click', function (e) {
        var curEle = (0, ej2_base_1.closest)(e.target, 'li');
        if (curEle && curEle.classList.contains('e-list-item')) {
            var tcontent = (0, ej2_base_1.select)('.e-text-content', curEle);
            var hashval = '#/' + exports.selectedTheme + '/' + tcontent.getAttribute('data');
            inputele.value = '';
            searchPopup.hide();
            searchOverlay.classList.add('e-search-hidden');
            if (location.hash !== hashval) {
                overlay();
                location.hash = hashval;
                (0, component_content_1.initialize)();
                // setSelectList();
            }
        }
    });
}
/**
 * search input change
 */
function onsearchInputChange(e) {
    if (e.keyCode === 27) {
        toggleSearchOverlay();
    }
    var searchString = e.target.value;
    // changeInputIcons(searchString.length > 0);
    if (searchString.length <= 2) {
        searchPopup.hide();
        return;
    }
    var val = [];
    val = searchInstance.search(searchString, {
        fields: {
            component: { boost: 1 },
            name: { boost: 2 }
        },
        expand: true,
        boolean: 'AND',
    });
    val.map(function (item) { return item['doc'] = searchInstance.documentStore.docs[item.ref]; });
    var value = [];
    for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
        var file = val_1[_i];
        if ((file.doc.ignoreOnBuild !== true && file.doc.ignoreOnBuild !== 'true') && !(ej2_base_1.Browser.isDevice && (file.doc.hideOnDevice === true || file.doc.hideOnDevice === 'true'))) {
            value = value.concat(file);
        }
    }
    var searchValue = value;
    if (searchValue.length) {
        var data = new ej2_data_1.DataManager(searchValue);
        var controls = data.executeLocal(new ej2_data_1.Query().take(10).select('doc'));
        var controlsAccess = [];
        for (var _a = 0, controls_1 = controls; _a < controls_1.length; _a++) {
            var cont = controls_1[_a];
            controlsAccess.push(cont.doc);
        }
        var ds = ej2_data_1.DataUtil.group(controlsAccess, 'component');
        var dataSource = [];
        for (var j = 0; j < ds.length; j++) {
            var itemObj = ds[j].items;
            var field = 'name';
            var grpItem = {};
            var hdr = 'isHeader';
            grpItem[field] = ds[j].key;
            grpItem[hdr] = true;
            grpItem.items = itemObj;
            dataSource.push(grpItem);
            for (var k = 0; k < itemObj.length; k++) {
                dataSource.push(itemObj[k]);
            }
        }
        var ele = ej2_react_lists_1.ListBase.createList(ej2_base_1.createElement, dataSource, {
            fields: { id: 'uid', groupBy: 'component', text: 'name' },
            template: '<div class="e-text-content e-icon-wrapper" data="${path}" uid="${uid}">' +
                '<span class="e-list-text">' +
                '${name}</span></div>',
            groupTemplate: '${if(items[0]["component"])}<div class="e-text-content"><span class="e-search-group">${items[0].component}</span>' +
                '</div>${/if}'
        });
        searchPopup.element.innerHTML = '';
        highlight(searchString, ele);
        searchPopup.element.appendChild(ele);
        searchPopup.show();
    }
    else {
        searchPopup.element.innerHTML = '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>';
        searchPopup.show();
    }
}
function highlight(searchString, listElement) {
    var regex = new RegExp(searchString.split(' ').join('|'), 'gi');
    var contentElements = (0, ej2_base_1.selectAll)('.e-list-item .e-text-content .e-list-text', listElement);
    for (var i = 0; i < contentElements.length; i++) {
        var spanText = (0, ej2_base_1.select)('.sb-highlight');
        if (spanText) {
            contentElements[i].innerHTML = contentElements[i].text;
        }
        contentElements[i].innerHTML = contentElements[i].innerHTML.replace(regex, function (matched) {
            return '<span class="sb-highlight">' + matched + '</span>';
        });
    }
}
/**
 * Mobile Right pane toggle functions
 */
function toggleRightPane() {
    themeDropDown.index = themeCollection.indexOf(exports.selectedTheme);
    (0, ej2_base_1.select)('#right-sidebar').classList.remove('sb-hide');
    if (isMobile) {
        settingsidebar.toggle();
    }
}
function viewMobilePrefPane() {
    (0, ej2_base_1.select)('.sb-mobile-prop-pane').classList.add('sb-hide');
    (0, ej2_base_1.select)('.sb-mobile-preference').classList.remove('sb-hide');
    toggleRightPane();
}
function viewMobilePropPane() {
    (0, ej2_base_1.select)('.sb-mobile-preference').classList.add('sb-hide');
    (0, ej2_base_1.select)('.sb-mobile-prop-pane').classList.remove('sb-hide');
    toggleRightPane();
}
exports.viewMobilePropPane = viewMobilePropPane;
function isLeftPaneOpen() {
    return exports.sidebar.isOpen;
}
exports.isLeftPaneOpen = isLeftPaneOpen;
function isVisible(elem) {
    return !(0, ej2_base_1.select)(elem).classList.contains('sb-hide');
}
/**
 * Mobile Overlay
 */
function toggleMobileOverlay() {
    if (!(0, ej2_base_1.select)('.sb-left-pane').classList.contains('sb-hide')) {
        toggleLeftPane();
    }
    if (!(0, ej2_base_1.select)('.sb-mobile-right-pane').classList.contains('sb-hide')) {
        toggleRightPane();
    }
}
function removeMobileOverlay() {
    (0, ej2_base_1.select)('.sb-mobile-overlay').classList.add('sb-hide');
}
function removeOverlay() {
    sbContentOverlay.classList.add('sb-hide');
    sbRightPane.classList.remove('sb-right-pane-overlay');
    sbHeader.classList.remove('sb-right-pane-overlay');
    mobNavOverlay(false);
    if (!sbBodyOverlay.classList.contains('sb-hide')) {
        sbBodyOverlay.classList.add('sb-hide');
    }
    isMobile = window.matchMedia('(max-width:550px)').matches;
    if (!isMobile) {
        sbRightPane.scrollTop = 0;
    }
    if (cultureDropDown.value == 'ar') {
        changeRtl(true);
    }
}
exports.removeOverlay = removeOverlay;
function changeRtl(isShow) {
    var elementlist = (0, ej2_base_1.selectAll)('.e-control', document.getElementById('control-content'));
    for (var _i = 0, elementlist_1 = elementlist; _i < elementlist_1.length; _i++) {
        var control_1 = elementlist_1[_i];
        var eleinstance = control_1.ej2_instances;
        if (eleinstance) {
            for (var _a = 0, eleinstance_1 = eleinstance; _a < eleinstance_1.length; _a++) {
                var instance = eleinstance_1[_a];
                instance.enableRtl = isShow;
            }
        }
    }
}
function sampleOverlay() {
    sbHeader.classList.add('sb-right-pane-overlay');
    sbRightPane.classList.add('sb-right-pane-overlay');
    mobNavOverlay(true);
    sbContentOverlay.classList.remove('sb-hide');
}
exports.sampleOverlay = sampleOverlay;
function mobNavOverlay(isOverlay) {
    if (ej2_base_1.Browser.isDevice) {
        var mobileFoorter = (0, ej2_base_1.select)('.sb-mobilefooter');
        if (isOverlay) {
            mobileFoorter.classList.add('sb-right-pane-overlay');
        }
        else {
            mobileFoorter.classList.remove('sb-right-pane-overlay');
        }
    }
}
function overlay() {
    sbHeader.classList.add('sb-right-pane-overlay');
    sbBodyOverlay.classList.remove('sb-hide');
}
function toggleLeftPane() {
    isMobile = document.body.offsetWidth <= 550;
    (0, ej2_base_1.select)('#left-sidebar').classList.remove('sb-hide');
    var reverse = exports.sidebar.isOpen;
    leftToggle.setAttribute('aria-expanded', (!reverse).toString());
    if (!reverse) {
        leftToggle.classList.add('toggle-active');
    }
    else {
        leftToggle.classList.remove('toggle-active');
        //mobileOverlay.classList.add('sb-hide');
    }
    if (exports.sidebar) {
        reverse = exports.sidebar.isOpen;
        if (reverse) {
            exports.sidebar.hide();
            if (!isMobile && !isTablet) {
                resizeManualTrigger = true;
            }
        }
        else {
            exports.sidebar.show();
            resizeManualTrigger = true;
        }
    }
}
exports.toggleLeftPane = toggleLeftPane;
/**
 * Resize event processing
 */
function processResize(e) {
    var _a;
    var toggle = exports.sidebar.isOpen;
    isMobile = document.body.offsetWidth <= 550;
    isTablet = document.body.offsetWidth >= 550 && document.body.offsetWidth <= 850;
    if (isTablet) {
        resizeManualTrigger = false;
    }
    // Keep Light/Dark dropdown mobile-only on resize
    var isMobileView = ej2_base_1.Browser.isDevice || window.matchMedia('(max-width:550px)').matches;
    (_a = document.getElementById('theme-mode')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden', !isMobileView || exports.selectedTheme.includes('highcontrast'));
    if (resizeManualTrigger || (isMobile && (0, ej2_base_1.select)('#right-sidebar').classList.contains('sb-hide'))) {
        return;
    }
    isPc = document.body.offsetWidth >= 850;
    processDeviceDependables();
    var leftPane = (0, ej2_base_1.select)('.sb-left-pane');
    var rightPane = (0, ej2_base_1.select)('.sb-right-pane');
    var footer = (0, ej2_base_1.select)('.sb-footer-left');
    var pref = (0, ej2_base_1.select)('#settings-popup');
    if (toggle && !isPc) {
        toggleLeftPane();
    }
    if (isMobile || isTablet) {
        exports.sidebar.target = null;
        exports.sidebar.showBackdrop = true;
        exports.sidebar.closeOnDocumentClick = true;
        if (isTablet) {
            (0, ej2_base_1.select)('.sb-footer').appendChild(footer);
        }
        if (!footer.parentElement.classList.contains('sb-left-pane-footer')) {
            (0, ej2_base_1.select)('.sb-left-pane-footer').appendChild(footer);
        }
        if (!pref.parentElement.classList.contains('sb-mobile-preference')) {
            (0, ej2_base_1.select)('.sb-mobile-preference').appendChild(pref);
        }
        settingsPopup.show();
    }
    if (isPc) {
        exports.sidebar.target = document.querySelector('.sb-content ');
        exports.sidebar.showBackdrop = false;
        exports.sidebar.closeOnDocumentClick = false;
        if (footer.parentElement.classList.contains('sb-left-pane-footer')) {
            (0, ej2_base_1.select)('.sb-footer').appendChild(footer);
        }
        if (isPc && !ej2_base_1.Browser.isDevice) {
            if (isVisible('.sb-left-pane')) {
                rightPane.classList.remove('control-fullview');
            }
        }
        if (pref.parentElement.classList.contains('sb-mobile-preference')) {
            (0, ej2_base_1.select)('#sb-popup-section').appendChild(pref);
            settingsidebar.hide();
            settingsPopup.hide();
        }
        var mobilePropPane = (0, ej2_base_1.select)('.sb-mobile-prop-pane .property-section');
        if (mobilePropPane) {
            (0, ej2_base_1.select)('.control-section').appendChild(mobilePropPane);
        }
    }
    if (!(0, ej2_base_1.select)('.sb-mobile-right-pane').classList.contains('sb-hide')) {
        toggleRightPane();
    }
    if (isVisible('.sb-mobile-overlay')) {
        removeMobileOverlay();
    }
}
function applyBodyClass(theme) {
    UpdatedCss(theme);
    var themeCollection = [
        'material3', 'bootstrap5', 'fluent2', 'tailwind3',
        'fluent2-highcontrast', 'highcontrast', 'tailwind', 'fluent'
    ];
    var isDark = theme.endsWith('-dark');
    var baseTheme = theme.replace('-dark', '');
    if (baseTheme.includes('bootstrap5')) {
        baseTheme = baseTheme.replace('bootstrap5', 'bootstrap5_3');
    }
    var themeClass = isDark ? "".concat(baseTheme, "-dark") : baseTheme;
    var currentClasses = document.body.className.trim().split(/\s+/);
    var updatedClasses = [];
    var themeReplaced = false;
    for (var i = 0; i < currentClasses.length; i++) {
        var c = currentClasses[i];
        var normalized = c.replace('-dark', '');
        if (themeCollection.includes(normalized) || normalized === 'bootstrap5_3') {
            updatedClasses.push(themeClass);
            if (isDark) {
                updatedClasses.push('e-dark-mode');
            }
            themeReplaced = true;
        }
        else if (c !== 'e-dark-mode') {
            updatedClasses.push(c);
        }
        // If it's 'e-dark-mode' and we're switching to light, we skip it
    }
    if (!themeReplaced) {
        updatedClasses.push(themeClass);
        if (isDark) {
            updatedClasses.push('e-dark-mode');
        }
    }
    document.body.className = updatedClasses.join(' ').trim();
}
/**
 * Theme Loading
 */
function loadTheme(themeRaw) {
    var theme = themesToRedirect.includes(themeRaw) ? 'tailwind3' : themeRaw;
    UpdatedCss(theme);
    persistTheme(theme);
    var base = theme.replace('-dark', '');
    var isDark = theme.endsWith('-dark');
    applyBodyClass(theme);
    highlightActiveTheme(base);
}
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/src/service-worker.js');
}
function UpdatedCss(theme) {
    var cssName = theme.includes('bootstrap5')
        ? theme.replace('bootstrap5', 'bootstrap5.3')
        : theme;
    var href = "./styles/".concat(cssName, ".css");
    var linkEl = document.getElementById('themelink');
    if (linkEl) {
        linkEl.onload = function () {
            renderSbPopups();
            bindEvents();
            elasticlunr.clearStopWords();
            searchInstance = elasticlunr.Index.load(searchJson);
            // createRoot(document.getElementById('left-pane-component')!).render(<LeftPane />);
            // setTimeout(() => {
            //   setSelectList();
            //   createRoot(document.getElementById('tab-component')!).render(<Content />);
            //   if (!isMobile) {
            //     document.querySelector('.sb-right-pane')!.scrollTop = 0;
            //   }
            // }, 100);
            mountSamples();
        };
        linkEl.href = href;
    }
}
function mountSamples() {
    if (!leftPaneRoot) {
        var host = document.getElementById('left-pane-component');
        if (host) {
            leftPaneRoot = (0, client_1.createRoot)(host);
        }
    }
    if (leftPaneRoot) {
        leftPaneRoot.render(React.createElement(leftpane_1.LeftPane, null));
    }
    if (!tabRoot) {
        var host = document.getElementById('tab-component');
        if (host) {
            tabRoot = (0, client_1.createRoot)(host);
        }
    }
    if (tabRoot) {
        tabRoot.render(React.createElement(component_content_1.Content, { key: exports.selectedTheme })); // key forces remount when theme changes
    }
    setTimeout(function () { return (0, leftpane_1.setSelectList)(); }, 100);
}
/**
 *  themeChangebutton
 */
function ThemeChangeButton() {
    var _a = (0, react_1.useState)(null), theme = _a[0], setTheme = _a[1];
    var _b = (0, react_1.useState)(null), isVisible = _b[0], setIsVisible = _b[1];
    (0, react_1.useEffect)(function () {
        var getInitialTheme = function () {
            var parts = location.hash.replace(/^#\//, '').split('/');
            return parts[0] || localStorage.getItem('selectedTheme') || 'bootstrap5';
        };
        var initialTheme = getInitialTheme();
        var isVisible = !initialTheme.includes('highcontrast');
        var isDark = initialTheme.endsWith('-dark');
        var label = isDark ? 'LIGHT' : 'DARK';
        // const iconClass = `sb-icons ${isDark ? 'dark-theme' : 'light-theme'}`;
        setTheme(label);
        setIsVisible(isVisible);
    }, []);
    var handleHash = function () {
        var _a;
        var parts = location.hash.replace(/^#\//, '').split('/');
        var newTheme = parts[0] || 'bootstrap5';
        applyBodyClass(newTheme);
        refreshCurrentControl();
        if (isMobile && themeModeDropDown) {
            var isDark = newTheme.includes('-dark');
            // Update mobile icon
            var mobileModeIcon = document.getElementById('mobile-mode-icon');
            if (mobileModeIcon) {
                mobileModeIcon.className = "sb-icons pane-".concat(isDark ? 'light-theme' : 'dark-theme');
            }
            // Update the Syncfusion dropdown index
            themeModeDropDown.index = isDark ? 1 : 0;
        }
        var isMobileView = ej2_base_1.Browser.isDevice || window.matchMedia('(max-width:550px)').matches;
        (_a = document.getElementById('theme-mode')) === null || _a === void 0 ? void 0 : _a.classList.toggle('hidden', !isMobileView || newTheme.includes('highcontrast'));
    };
    function toggleDarkMode() {
        setTheme(function (prev) { return prev === 'DARK' ? 'LIGHT' : 'DARK'; });
        var parts = location.hash.replace(/^#\//, '').split('/');
        var current = parts[0] || localStorage.getItem('selectedTheme') || 'bootstrap5';
        var samplePath = parts.slice(1).join('/');
        var isDark = current.endsWith('-dark');
        var base = isDark ? current.slice(0, -5) : current;
        var newTheme = isDark ? base : "".concat(base, "-dark");
        persistTheme(newTheme);
        updateHash(newTheme, samplePath);
        handleHash();
    }
    if (isMobile) {
        return React.createElement("span", { style: { display: 'none' } });
    }
    return (isVisible ? (React.createElement("button", { className: "sb-themeswitch-btn", onClick: toggleDarkMode },
        React.createElement("span", { className: "sb-icons ".concat(theme === 'DARK' ? 'light-theme' : 'dark-theme') }),
        theme)) : null);
}
var doControls = [
    "chart", "three-dimension-chart", "three-dimension-circular-chart", "stock-chart", "arc-gauge", "circular-gauge",
    "diagram", "heatmap-chart", "linear-gauge", "maps", "range-navigator", "smith-chart",
    "barcode", "sparkline", "treemap", "bullet-chart", "kanban"
];
var refreshCurrentControl = function () {
    var _a;
    var currentControl = window.location.hash.split('/')[2];
    if (doControls.includes(currentControl)) {
        var demo = document.querySelector('.sb-demo-section');
        if (demo) {
            var controls = demo.getElementsByClassName('e-control e-lib');
            for (var i = 0; i < controls.length; i++) {
                var instance = controls[i].ej2_instances;
                if (((_a = instance === null || instance === void 0 ? void 0 : instance[0]) === null || _a === void 0 ? void 0 : _a.refresh) instanceof Function) {
                    instance[0].refresh();
                }
                if (instance && instance[0] && instance[0].getModuleName() !== 'DashboardLayout')
                    break;
            }
        }
    }
};
// **UPDATED: Render for both mobile and desktop 
(0, client_1.createRoot)(document.getElementById('dark-light-content')).render(React.createElement(ThemeChangeButton, null));
// Show Light/Dark dropdown only on mobile (and hide for highcontrast)
var isMobileView = ej2_base_1.Browser.isDevice || window.matchMedia('(max-width:550px)').matches;
thememode.classList.toggle('hidden', !isMobileView || exports.selectedTheme.includes('highcontrast'));
(0, ej2_base_1.select)('.close-button').addEventListener('click', function () {
    var banner = document.querySelector('.sb-token-header');
    if (banner) {
        banner.classList.add('sb-hide');
    }
});
/**
 * Product Selection Handler - Follows theme dropdown pattern
 * Works in both Desktop and Mobile modes
 */
function handleProductSelection(e) {
    var _a;
    var target = e.target;
    target = (0, ej2_base_1.closest)(target, 'li');
    if (!target)
        return;
    var productText = ((_a = (0, ej2_base_1.select)('.switch-text', target)) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var currentTheme = exports.selectedTheme || 'tailwind3';
    var productUrl = '';
    if (productText.includes('PDF')) {
        productUrl = "https://document.syncfusion.com/demos/pdf-viewer/react/#/".concat(currentTheme, "/pdfviewer/default.html");
    }
    else if (productText.includes('Spreadsheet')) {
        productUrl = "https://document.syncfusion.com/demos/spreadsheet-editor/react/#/".concat(currentTheme, "/spreadsheet/default.html");
    }
    else if (productText.includes('Docx') || productText.includes('DOCX')) {
        productUrl = "https://document.syncfusion.com/demos/docx-editor/react/#/".concat(currentTheme, "/document-editor/default.html");
    }
    if (productUrl) {
        window.open(productUrl, '_blank');
    }
}
