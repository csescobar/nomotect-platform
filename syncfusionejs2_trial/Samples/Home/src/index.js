"use strict";
exports.__esModule = true;
var elasticlunr = require("./lib/elasticlunr");
require("../node_modules/es6-promise/dist/es6-promise");
var ej2_data_1 = require("@syncfusion/ej2-data");
var ej2_base_1 = require("@syncfusion/ej2-base");
var ej2_dropdowns_1 = require("@syncfusion/ej2-dropdowns");
var ej2_navigations_1 = require("@syncfusion/ej2-navigations");
var ej2_splitbuttons_1 = require("@syncfusion/ej2-splitbuttons");
var ej2_popups_1 = require("@syncfusion/ej2-popups");
var showcase_1 = require("./showcase");
var content = "Copyright © 2001 - " + new Date().getFullYear() + " Syncfusion<sup>®</sup> Inc. All Rights Reserved";
var copyRightDesktop = document.querySelector('#copyright-desktop').querySelector('a');
copyRightDesktop.innerHTML = content;
ej2_base_1.registerLicense('{SyncfusionJSLicensekey}');
var carouselInitialized = false;
function encodeHtml(value) {
    if (value === void 0) { value = ''; }
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
function getDefaultDemoUrl(item) {
    if (!item.Platforms || item.Platforms.length === 0) {
        return '';
    }
    var firstPlatform = item.Platforms[0];
    return item.DemoUrls[firstPlatform] || Object.values(item.DemoUrls)[0] || '';
}
function getCarouselCardTemplate(item, index) {
    var cardId = "showcase-card-" + index;
    var bgColor = item.BgColor ? "style=\"background:" + encodeHtml(item.BgColor) + ";\"" : '';
    return "\n    <div class=\"e-card custom-card showcase-card\" " + bgColor + ">\n      <div class=\"e-card-header image-container\">\n        <div class=\"image-inner\">\n            <img class=\"slick-slider-img\" alt=\"" + encodeHtml(item.Header) + "\" src=\"" + encodeHtml(item.ImagePath) + "\" loading=\"lazy\" />\n        </div>\n      </div>\n      <div class=\"e-card-content\">\n        <div class=\"card-desc\">\n          <div class=\"image-header\">" + encodeHtml(item.Header) + "</div>\n          <p class=\"image-desc desc-large\">" + encodeHtml(item.Content) + "</p>\n        </div>\n        <div id=\"sample-section\">\n          <div class=\"github-section\">\n            <button id=\"" + cardId + "-github\" class=\"e-btn e-outline github-dropdown-btn\" type=\"button\">View Demo</button>\n          </div>\n          <div class=\"Demo-section\">\n            <button id=\"" + cardId + "-demo\" class=\"e-btn e-outline demo-section-button\" type=\"button\">Browse Code</button>\n          </div>\n        </div>\n      </div>\n    </div>";
}
function attachDemoButtonListeners(root) {
    if (root === void 0) { root = document; }
    root.querySelectorAll('.demo-section-button').forEach(function (buttonElement) {
        var cardId = buttonElement.id;
        var cardIndex = parseInt(cardId.split('-')[2], 10);
        var item = showcase_1.dataSource[cardIndex];
        if (!item)
            return;
        var dropdownItems = item.Platforms.map(function (platform, index) {
            var items = [
                {
                    text: platform,
                    iconCss: 'e-icons e-mouse-pointer',
                    githubUrl: item.GitHubLink[platform]
                }
            ];
            if (index < item.Platforms.length - 1) {
                items.push({ separator: true });
            }
            return items;
        }).flat();
        var drpDownBtn = new ej2_splitbuttons_1.DropDownButton({
            items: dropdownItems,
            cssClass: 'e-round-corner',
            select: function (args) {
                if (args.item && args.item.githubUrl) {
                    window.open(args.item.githubUrl, '_blank');
                }
            }
        });
        drpDownBtn.appendTo(buttonElement);
    });
}
function attachGitHubDropdownListeners(root) {
    if (root === void 0) { root = document; }
    root.querySelectorAll('.github-dropdown-btn').forEach(function (buttonElement) {
        var cardId = buttonElement.id;
        var cardIndex = parseInt(cardId.split('-')[2], 10);
        var item = showcase_1.dataSource[cardIndex];
        if (!item)
            return;
        var dropdownItems = item.Platforms.map(function (platform, index) {
            var items = [
                {
                    text: platform,
                    iconCss: 'e-icons e-mouse-pointer',
                    demoUrl: item.DemoUrls[platform]
                }
            ];
            if (index < item.Platforms.length - 1) {
                items.push({ separator: true });
            }
            return items;
        }).flat();
        var drpDownBtn = new ej2_splitbuttons_1.DropDownButton({
            items: dropdownItems,
            cssClass: 'e-round-corner',
            select: function (args) {
                if (args.item && args.item.demoUrl) {
                    window.open(args.item.demoUrl, '_blank');
                }
            }
        });
        drpDownBtn.appendTo(buttonElement);
    });
}
function isMobileLayout() {
    return window.innerWidth <= 1024;
}
function initializeSlider() {
    if (carouselInitialized)
        return;
    var containerId = isMobileLayout()
        ? 'carouselmob'
        : 'carouseldesk';
    var container = document.getElementById(containerId);
    if (!container)
        return;
    // Build cards
    var cardsHtml = showcase_1.dataSource
        .map(function (item, index) { return getCarouselCardTemplate(item, index); })
        .join('');
    container.innerHTML = "\n    <div class=\"custom-slider\">\n      <div class=\"slider-track\">\n        " + cardsHtml + "\n      </div>\n      <button class=\"slider-btn slider-prev\">\u276E</button>\n      <button class=\"slider-btn slider-next\">\u276F</button>\n      <div class=\"slider-indicators\"></div>\n    </div>\n  ";
    var track = container.querySelector('.slider-track');
    var prevBtn = container.querySelector('.slider-prev');
    var nextBtn = container.querySelector('.slider-next');
    var indicatorWrap = container.querySelector('.slider-indicators');
    var swipeStartTime = 0;
    var slides = Array.from(track.children);
    var index = 0;
    var visibleCount = 1;
    var slideWidth = 0;
    var gap = 0;
    var animating = false;
    var startX = 0;
    var currentX = 0;
    var isDragging = false;
    var dragDelta = 0;
    var SWIPE_THRESHOLD = 50; // px
    /* Measure CSS layout */
    function measure() {
        var firstSlide = slides[0];
        slideWidth = firstSlide.getBoundingClientRect().width;
        var trackStyle = getComputedStyle(track);
        gap = parseFloat(trackStyle.gap || trackStyle.columnGap || '0');
        var viewportWidth = container.querySelector('.custom-slider').getBoundingClientRect().width;
        visibleCount = Math.max(1, Math.round(viewportWidth / (slideWidth + gap)));
    }
    /* Setup clones for infinite loop */
    function setupClones() {
        track.querySelectorAll('.clone').forEach(function (c) { return c.remove(); });
        var headClones = slides.slice(0, visibleCount).map(function (s) {
            var clone = s.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });
        var tailClones = slides.slice(-visibleCount).map(function (s) {
            var clone = s.cloneNode(true);
            clone.classList.add('clone');
            return clone;
        });
        tailClones.reverse().forEach(function (c) { return track.prepend(c); });
        headClones.forEach(function (c) { return track.append(c); });
        slides = Array.from(track.children);
        index = visibleCount;
        translate(false);
    }
    /* Movement */
    function translate(animate) {
        if (animate === void 0) { animate = true; }
        track.style.transition = animate ? 'transform 0.45s ease' : 'none';
        track.style.transform =
            "translateX(" + -(slideWidth + gap) * index + "px)";
    }
    /* Indicators */
    function buildIndicators() {
        indicatorWrap.innerHTML = '';
        var totalPositions = slides.length - visibleCount * 2 - visibleCount + 1;
        var _loop_1 = function (i) {
            var btn = document.createElement('button');
            btn.className = 'slider-indicator';
            btn.onclick = function () {
                index = i + visibleCount;
                translate();
                updateIndicators();
            };
            indicatorWrap.appendChild(btn);
        };
        for (var i = 0; i < totalPositions; i++) {
            _loop_1(i);
        }
        updateIndicators();
    }
    function updateIndicators() {
        var logicalIndex = index - visibleCount;
        var dots = indicatorWrap.children;
        Array.from(dots).forEach(function (d, i) {
            d.classList.toggle('active', i === logicalIndex);
        });
    }
    /* Navigation */
    prevBtn.onclick = function () {
        if (animating)
            return;
        animating = true;
        index--;
        translate();
    };
    nextBtn.onclick = function () {
        if (animating)
            return;
        animating = true;
        index++;
        translate();
    };
    track.addEventListener('pointerdown', function (e) {
        //Allow swipe only for touch or pen
        if (e.pointerType !== 'touch' && e.pointerType !== 'pen')
            return;
        if (animating)
            return;
        isDragging = true;
        startX = e.clientX;
        currentX = startX;
        dragDelta = 0;
        swipeStartTime = performance.now();
        track.style.transition = 'none';
        track.setPointerCapture(e.pointerId);
    });
    track.addEventListener('pointermove', function (e) {
        if (!isDragging)
            return;
        if (e.pointerType !== 'touch' && e.pointerType !== 'pen')
            return;
        currentX = e.clientX;
        dragDelta = currentX - startX;
        track.style.transform =
            "translateX(" + (-(slideWidth + gap) * index + dragDelta) + "px)";
    });
    function endSwipe(e) {
        if (!isDragging)
            return;
        isDragging = false;
        track.releasePointerCapture(e.pointerId);
        track.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';
        var slideSize = slideWidth + gap;
        //velocity calculation
        var swipeEndTime = performance.now();
        var swipeDuration = swipeEndTime - swipeStartTime;
        var velocity = Math.abs(dragDelta) / swipeDuration; // px/ms
        //base movement from distance
        var movedSlides = Math.round(dragDelta / slideSize);
        //momentum boost (tunable)
        var MOMENTUM_MULTIPLIER = 6;
        if (velocity > 0.5) {
            var momentumSlides = Math.floor(velocity * MOMENTUM_MULTIPLIER);
            movedSlides += dragDelta < 0 ? -momentumSlides : momentumSlides;
        }
        //very fast flick → jump to edge
        var FLING_VELOCITY = 1.2;
        if (velocity > FLING_VELOCITY) {
            index = dragDelta < 0
                ? slides.length - visibleCount * 2 // last real slide
                : visibleCount; // first real slide
            translate();
            return;
        }
        //normal snap
        if (Math.abs(dragDelta) > SWIPE_THRESHOLD || velocity > 0.5) {
            index -= movedSlides;
        }
        translate();
    }
    track.addEventListener('pointerup', endSwipe);
    track.addEventListener('pointercancel', endSwipe);
    track.addEventListener('transitionend', function () {
        animating = false;
        if (index >= slides.length - visibleCount) {
            index = visibleCount;
            translate(false);
        }
        if (index < visibleCount) {
            index = slides.length - visibleCount * 2;
            translate(false);
        }
        updateIndicators();
    });
    /* Init */
    measure();
    setupClones();
    buildIndicators();
    attachDemoButtonListeners(container);
    attachGitHubDropdownListeners(container);
    carouselInitialized = true;
}
window.addEventListener('scroll', function () { return initializeSlider(); }, { once: true });
var currentLayoutIsMobile = isMobileLayout();
window.addEventListener('resize', function () {
    var newLayoutIsMobile = isMobileLayout();
    if (newLayoutIsMobile !== currentLayoutIsMobile) {
        currentLayoutIsMobile = newLayoutIsMobile;
        // Clean both containers to avoid stale DOM
        var carouselMob = document.getElementById('carouselmob');
        if (carouselMob) {
            carouselMob.replaceChildren();
        }
        var carouselDesk = document.getElementById('carouseldesk');
        if (carouselDesk) {
            carouselDesk.replaceChildren();
        }
        carouselInitialized = false;
        initializeSlider();
    }
});
var sbMatcher = {
    typescript: "demos/",
    javascript: "javascript/demos/",
    angular: "angular/demos/",
    react: "react/demos/",
    vue: "vue/demos/"
};
var sbLocation = {
    "index.html": "Typescript/",
    "": "TypeScript/",
    "angular.html": "Angular/",
    "react.html": "React/",
    "javascript.html": "JavaScript/",
    "vue.html": "Vue/"
};
var toolbarItemCollection = [
    {
        template: "   <a class=\"tab-link\" href=\"./index.html#platform\" aria-controls=\"typescript\" role=\"tab\"\n        data-toggle=\"tab\">\n        JavaScript\n    </a>",
        align: "Center"
    },
    {
        template: "<a class=\"tab-link\" href=\"./angular.html#platform\" aria-controls=\"angular\" role=\"tab\"\n        data-toggle=\"tab\">\n        Angular\n    </a>",
        align: "Center"
    },
    {
        template: "  <a class=\"tab-link\" href=\"./react.html#platform\" aria-controls=\"react\" role=\"tab\"\n        data-toggle=\"tab\">\n        React\n    </a>",
        align: "Center"
    },
    {
        template: "<a class=\"tab-link\" href=\"./vue.html#platform\" aria-controls=\"vue\" role=\"tab\" data-toggle=\"tab\">\n        Vue\n    </a>",
        align: "Center"
    },
    {
        template: "  <a class=\"tab-link\" href=\"./javascript.html#platform\" aria-controls=\"javascript\" role=\"tab\"\n        data-toggle=\"tab\">\n        JavaScript (ES5)\n    </a>",
        align: "Center"
    },
];
var id = window.activeId;
if (!ej2_base_1.isNullOrUndefined(id)) {
    toolbarItemCollection[id].cssClass = "active";
}
var toolbar = new ej2_navigations_1.Toolbar({
    height: "72px",
    width: "100%",
    items: toolbarItemCollection
});
toolbar.appendTo("#platform");
var htmlMatch = ["typescript", "javascript", "vue"];
var ej2Regex = /ej2.syncfusion.com/;
var urlRegex = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development\/|production\/)*/;
var platform = ej2_base_1.select("body").getAttribute("data-sb-name");
var curSbPath = sbMatcher[platform];
var href = location.href;
var link = href.match(urlRegex);
var curLink = (ej2Regex.test(location.origin) ? "https" : "http") +
    "://" +
    (link ? link[0] : "npmci.syncfusion.com/development/") +
    curSbPath;
var searchInstance;
var popupEle = ej2_base_1.select("#search-popup");
var mobpopupEle = ej2_base_1.select("#mob-search-popup");
var searchEle = ej2_base_1.select("#search-box");
var mobsearchEle = ej2_base_1.select("#mob-search-box");
var searchPopup = new ej2_popups_1.Popup(popupEle, {
    offsetY: 5,
    targetType: "relative",
    relateTo: searchEle,
    position: { X: "left", Y: "bottom" },
    collision: { X: "none", Y: "none" }
});
var mobsearchPopup = new ej2_popups_1.Popup(mobpopupEle, {
    offsetY: 5,
    targetType: "relative",
    relateTo: mobsearchEle,
    position: { X: "left", Y: "bottom" },
    collision: { X: "none", Y: "none" }
});
var searchBox = null;
var mobsearchBox = null;
var reRouter = ej2_base_1.select("#sb-re-route");
var suffix = htmlMatch.indexOf(platform) !== -1 ? ".html" : "";
var listObject = {
    fields: { id: "uid", groupBy: "component", text: "name" },
    template: '<div class="e-text-content e-icon-wrapper"' +
        (platform !== "react"
            ? 'data="${dir}/${url}" pid="${parentId}"'
            : 'data="${path}"') +
        'uid="${uid}">' +
        '<span class="e-list-text" role="list-item">' +
        "${name}</span></div>",
    groupTemplate: '${if(items[0]["component"])}<div class="e-text-content"><span class="e-search-group">${items[0].component}</span>' +
        "</div>${/if}"
};
searchPopup.hide();
mobsearchPopup.hide();
window.onresize = function () {
    if (searchPopup &&
        searchPopup.element.className.indexOf("e-popup-close") === -1 &&
        mobsearchPopup &&
        mobsearchPopup.element.className.indexOf("e-popup-close") === -1) {
        searchPopup.hide();
        mobsearchPopup.hide();
    }
    if (window.searchBox && window.searchBox.isPopupOpen) {
        window.searchBox.hidePopup();
    }
    if (window.mobsearchBox && window.mobsearchBox.isPopupOpen) {
        window.mobsearchBox.hidePopup();
    }
    var platformEl = document.getElementById("platform");
    if (platformEl) {
        platformEl.style.top = "-2px";
    }
};
//To Prevent navigation to product page from mobile app
if (localStorage.getItem("isEJ2App")) {
    document.querySelector(".header-logo>a").href = "#";
    document.querySelector(".header-logo>a").target = "";
}
function initiateSearch() {
    var searchAjax;
    var jsPlatform = ["aspnetcore", "aspnetmvc", "javascript"];
    var extension = jsPlatform.indexOf(platform) !== -1 ? "js" : "json";
    searchAjax = new ej2_base_1.Ajax("./src/json/" + platform + "-search." + extension, "GET", true);
    searchAjax.send().then(function (result) {
        if (platform === "aspnetcore" ||
            platform === "aspnetmvc" ||
            platform === "javascript") {
            var stringIndex = result.indexOf("{");
            result = result.slice(stringIndex);
        }
        var searchJson = JSON.parse(result);
        elasticlunr.clearStopWords();
        var fields = {
            groupBy: "doc.component",
            value: "doc.name",
            text: "doc.name"
        };
        searchInstance = elasticlunr.Index.load(searchJson);
        var searchBox = new ej2_dropdowns_1.AutoComplete({
            filtering: function (e) {
                if (e.text && e.text.length < 3) {
                    return;
                }
                var val = searchInstance.search(e.text, {
                    fields: {
                        component: { boost: 1 },
                        name: { boost: 2 }
                    },
                    expand: true,
                    boolean: "AND"
                });
                var query = new ej2_data_1.Query().take(10).select("doc");
                var fields = searchBox.fields;
                e.updateData(val, query, fields);
            },
            placeholder: "Search components or features",
            noRecordsTemplate: '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
            fields: fields,
            popupHeight: "300px",
            suggestionCount: 10,
            highlight: true,
            select: function (e) {
                var docPath = e.itemData.path
                    ? e.itemData.path.replace(":theme/", "")
                    : e.itemData.doc
                        ? e.itemData.doc.path
                        : null;
                var demoPath = docPath
                    ? docPath
                    : e.itemData.doc.dir + "/" + e.itemData.doc.url;
                if (location.href.indexOf("Home") !== -1) {
                    curLink =
                        location.origin + "/" + sbLocation[location.href.split("/")[4].split("#")[0]];
                    reRouter.href = curLink + "#/tailwind3/" + demoPath + suffix;
                }
                else if (location.href.indexOf("aspnetmvc") !== -1) {
                    reRouter.href =
                        "https://ej2.syncfusion.com/aspnetmvc/" +
                            demoPath +
                            "#/tailwind3" +
                            suffix;
                }
                else if (location.href.indexOf("aspnetcore") !== -1) {
                    reRouter.href =
                        "https://ej2.syncfusion.com/aspnetcore/" +
                            demoPath +
                            "#/tailwind3" +
                            suffix;
                }
                else {
                    reRouter.href =
                        "https://ej2.syncfusion.com/" +
                            curSbPath +
                            "#/tailwind3/" +
                            demoPath +
                            suffix;
                }
                reRouter.click();
            }
        });
        window.searchBox = searchBox;
        searchBox.appendTo("#search-box");
        var mobsearchBox = new ej2_dropdowns_1.AutoComplete({
            filtering: function (e) {
                if (e.text && e.text.length < 3) {
                    return;
                }
                var val = searchInstance.search(e.text, {
                    fields: {
                        component: { boost: 1 },
                        name: { boost: 2 }
                    },
                    expand: true,
                    boolean: "AND"
                });
                var query = new ej2_data_1.Query().take(10).select("doc");
                var fields = mobsearchBox.fields;
                e.updateData(val, query, fields);
            },
            placeholder: "Search components or features",
            noRecordsTemplate: '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
            fields: fields,
            popupHeight: "300px",
            suggestionCount: 10,
            highlight: true,
            select: function (e) {
                var docPath = e.itemData.path
                    ? e.itemData.path.replace(":theme/", "")
                    : e.itemData.doc
                        ? e.itemData.doc.path
                        : null;
                var demoPath = docPath
                    ? docPath
                    : e.itemData.doc.dir + "/" + e.itemData.doc.url;
                if (location.href.indexOf("Home") !== -1) {
                    curLink =
                        location.origin + "/" + sbLocation[location.href.split("/")[4].split("#")[0]];
                    reRouter.href = curLink + "#/tailwind3/" + demoPath + suffix;
                }
                else if (location.href.indexOf("aspnetmvc") !== -1) {
                    reRouter.href =
                        "https://ej2.syncfusion.com/aspnetmvc/" +
                            demoPath +
                            "#/tailwind3" +
                            suffix;
                }
                else if (location.href.indexOf("aspnetcore") !== -1) {
                    reRouter.href =
                        "https://ej2.syncfusion.com/aspnetcore/" +
                            demoPath +
                            "#/tailwind3" +
                            suffix;
                }
                else {
                    reRouter.href =
                        "https://ej2.syncfusion.com/" +
                            curSbPath +
                            "#/tailwind3/" +
                            demoPath +
                            suffix;
                }
                reRouter.click();
            }
        });
        window.mobsearchBox = mobsearchBox;
        mobsearchBox.appendTo("#mob-search-box");
    });
    var classname_array = [
        ".typescriptbtn",
        ".angularbtn",
        ".javascriptbtn",
        ".reactbtn",
        ".netcorebtn",
        ".netmvcbtn",
        ".vuebtn",
        ".blazorbtn"
    ];
    var content = [
        "TypeScript",
        "Angular",
        "JavaScript (ES5)",
        "React",
        "ASP.NET Core",
        "ASP.NET MVC",
        "Vue",
        "Blazor"
    ];
    for (var i = 0; i < classname_array.length; i++) {
        var element = document.querySelectorAll(classname_array[i]);
        for (var j = 0; j < element.length; j++) {
            new ej2_popups_1.Tooltip({ content: content[i], position: "BottomCenter" }, element[j]);
        }
    }
    document.getElementById("mob-search").classList.add("mb-search");
    document.getElementById("mbSearch").classList.add("search-hide");
}
initiateSearch();
