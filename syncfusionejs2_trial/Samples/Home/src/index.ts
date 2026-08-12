import * as elasticlunr from "./lib/elasticlunr";
import "../node_modules/es6-promise/dist/es6-promise";
import { Query } from "@syncfusion/ej2-data";
import { Browser, isNullOrUndefined, Ajax, select, registerLicense } from "@syncfusion/ej2-base";
import { AutoComplete } from "@syncfusion/ej2-dropdowns";
import { Toolbar, ItemModel } from "@syncfusion/ej2-navigations";
import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { Popup, Tooltip } from "@syncfusion/ej2-popups";
import templateFuncs from './functional-template';
import { dataSource, ShowCaseItem } from './showcase';

const content: string = "Copyright © 2001 - "+ new Date().getFullYear() +" Syncfusion<sup>®</sup> Inc. All Rights Reserved";
const copyRightDesktop: HTMLElement = document.querySelector('#copyright-desktop').querySelector('a');
copyRightDesktop.innerHTML = content;

registerLicense('{SyncfusionJSLicensekey}');
let carouselInitialized = false;

function encodeHtml(value: string = ''): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getDefaultDemoUrl(item: ShowCaseItem): string {
  if (!item.Platforms || item.Platforms.length === 0) {
    return '';
  }
  const firstPlatform = item.Platforms[0];
  return item.DemoUrls[firstPlatform] || Object.values(item.DemoUrls)[0] || '';
}

function getCarouselCardTemplate(item: ShowCaseItem, index: number): string {
  const cardId = `showcase-card-${index}`;
  const bgColor = item.BgColor ? `style="background:${encodeHtml(item.BgColor)};"` : '';

  return `
    <div class="e-card custom-card showcase-card" ${bgColor}>
      <div class="e-card-header image-container">
        <div class="image-inner">
            <img class="slick-slider-img" alt="${encodeHtml(item.Header)}" src="${encodeHtml(item.ImagePath)}" loading="lazy" />
        </div>
      </div>
      <div class="e-card-content">
        <div class="card-desc">
          <div class="image-header">${encodeHtml(item.Header)}</div>
          <p class="image-desc desc-large">${encodeHtml(item.Content)}</p>
        </div>
        <div id="sample-section">
          <div class="github-section">
            <button id="${cardId}-github" class="e-btn e-outline github-dropdown-btn" type="button">View Demo</button>
          </div>
          <div class="Demo-section">
            <button id="${cardId}-demo" class="e-btn e-outline demo-section-button" type="button">Browse Code</button>
          </div>
        </div>
      </div>
    </div>`;
}

function attachDemoButtonListeners(root: HTMLElement | Document = document): void {
  (root.querySelectorAll('.demo-section-button') as NodeListOf<HTMLButtonElement>).forEach((buttonElement) => {
    const cardId = buttonElement.id;
    const cardIndex = parseInt(cardId.split('-')[2], 10);
    const item = dataSource[cardIndex];

    if (!item) return;

    const dropdownItems = item.Platforms.map((platform: string, index: number) => {
      const items: any = [
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

    const drpDownBtn: DropDownButton = new DropDownButton({
      items: dropdownItems,
      cssClass: 'e-round-corner',
      select: (args: any) => {
        if (args.item && args.item.githubUrl) {
          window.open(args.item.githubUrl, '_blank');
        }
      }
    });

    drpDownBtn.appendTo(buttonElement);
  });
}

function attachGitHubDropdownListeners(root: HTMLElement | Document = document): void {
  (root.querySelectorAll('.github-dropdown-btn') as NodeListOf<HTMLButtonElement>).forEach((buttonElement) => {
    const cardId = buttonElement.id;
    const cardIndex = parseInt(cardId.split('-')[2], 10);
    const item = dataSource[cardIndex];

    if (!item) return;

    const dropdownItems = item.Platforms.map((platform: string, index: number) => {
      const items: any = [
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

    const drpDownBtn: DropDownButton = new DropDownButton({
      items: dropdownItems,
      cssClass: 'e-round-corner',
      select: (args: any) => {
        if (args.item && args.item.demoUrl) {
          window.open(args.item.demoUrl, '_blank');
        }
      }
    });

    drpDownBtn.appendTo(buttonElement);
  });
}

function isMobileLayout(): boolean {
  return window.innerWidth <= 1024;
}
function initializeSlider() {
  if (carouselInitialized) return;

  const containerId = isMobileLayout()
    ? 'carouselmob'
    : 'carouseldesk';

  const container = document.getElementById(containerId);
  if (!container) return;

  // Build cards
  const cardsHtml = dataSource
    .map((item, index) => getCarouselCardTemplate(item, index))
    .join('');

  container.innerHTML = `
    <div class="custom-slider">
      <div class="slider-track">
        ${cardsHtml}
      </div>
      <button class="slider-btn slider-prev">❮</button>
      <button class="slider-btn slider-next">❯</button>
      <div class="slider-indicators"></div>
    </div>
  `;

  const track = container.querySelector('.slider-track') as HTMLElement;
  const prevBtn = container.querySelector('.slider-prev')!;
  const nextBtn = container.querySelector('.slider-next')!;
  const indicatorWrap = container.querySelector('.slider-indicators')!;

  let swipeStartTime = 0;
  let slides = Array.from(track.children) as HTMLElement[];
  let index = 0;
  let visibleCount = 1;
  let slideWidth = 0;
  let gap = 0;
  let animating = false;
  let startX = 0;
  let currentX = 0;
  let isDragging = false;
  let dragDelta = 0;
  const SWIPE_THRESHOLD = 50; // px

  /* Measure CSS layout */
  function measure() {
    const firstSlide = slides[0];
    slideWidth = firstSlide.getBoundingClientRect().width;

    const trackStyle = getComputedStyle(track);
    gap = parseFloat(trackStyle.gap || trackStyle.columnGap || '0');

    const viewportWidth =
      container.querySelector('.custom-slider')!.getBoundingClientRect().width;

    visibleCount = Math.max(
      1,
      Math.round(viewportWidth / (slideWidth + gap))
    );
  }

  /* Setup clones for infinite loop */
  function setupClones() {
    track.querySelectorAll('.clone').forEach(c => c.remove());

    const headClones = slides.slice(0, visibleCount).map(s => {
      const clone = s.cloneNode(true) as HTMLElement;
      clone.classList.add('clone');
      return clone;
    });

    const tailClones = slides.slice(-visibleCount).map(s => {
      const clone = s.cloneNode(true) as HTMLElement;
      clone.classList.add('clone');
      return clone;
    });

    tailClones.reverse().forEach(c => track.prepend(c));
    headClones.forEach(c => track.append(c));

    slides = Array.from(track.children) as HTMLElement[];
    index = visibleCount;
    translate(false);
  }

  /* Movement */
  function translate(animate = true) {
    track.style.transition = animate ? 'transform 0.45s ease' : 'none';
    track.style.transform =
      `translateX(${-(slideWidth + gap) * index}px)`;
  }

  /* Indicators */
  function buildIndicators() {
    indicatorWrap.innerHTML = '';

    const totalPositions =
      slides.length - visibleCount * 2 - visibleCount + 1;

    for (let i = 0; i < totalPositions; i++) {
      const btn = document.createElement('button');
      btn.className = 'slider-indicator';
      btn.onclick = () => {
        index = i + visibleCount;
        translate();
        updateIndicators();
      };
      indicatorWrap.appendChild(btn);
    }

    updateIndicators();
  }

  function updateIndicators() {
    const logicalIndex = index - visibleCount;
    const dots = indicatorWrap.children;
    Array.from(dots).forEach((d, i) => {
      d.classList.toggle('active', i === logicalIndex);
    });
  }

  /* Navigation */
  prevBtn.onclick = () => {
    if (animating) return;
    animating = true;
    index--;
    translate();
  };

  nextBtn.onclick = () => {
    if (animating) return;
    animating = true;
    index++;
    translate();
  };
  

  track.addEventListener('pointerdown', (e: PointerEvent) => {
    
    //Allow swipe only for touch or pen
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;

    if (animating) return;

    isDragging = true;
    startX = e.clientX;
    currentX = startX;
    dragDelta = 0;
    swipeStartTime = performance.now();
    track.style.transition = 'none';
    track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', (e: PointerEvent) => {
    if (!isDragging) return;
    if (e.pointerType !== 'touch' && e.pointerType !== 'pen') return;

    currentX = e.clientX;
    dragDelta = currentX - startX;

    track.style.transform =
      `translateX(${-(slideWidth + gap) * index + dragDelta}px)`;
  });

  function endSwipe(e: PointerEvent) {
    if (!isDragging) return;

    isDragging = false;
    track.releasePointerCapture(e.pointerId);

    track.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)';

    const slideSize = slideWidth + gap;

    //velocity calculation
    const swipeEndTime = performance.now();
    const swipeDuration = swipeEndTime - swipeStartTime;
    const velocity = Math.abs(dragDelta) / swipeDuration; // px/ms

    //base movement from distance
    let movedSlides = Math.round(dragDelta / slideSize);

    //momentum boost (tunable)
    const MOMENTUM_MULTIPLIER = 6;
    if (velocity > 0.5) {
      const momentumSlides = Math.floor(velocity * MOMENTUM_MULTIPLIER);
      movedSlides += dragDelta < 0 ? -momentumSlides : momentumSlides;
    }

    //very fast flick → jump to edge
    const FLING_VELOCITY = 1.2;
    if (velocity > FLING_VELOCITY) {
      index = dragDelta < 0
        ? slides.length - visibleCount * 2   // last real slide
        : visibleCount;                      // first real slide

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
  track.addEventListener('transitionend', () => {
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
window.addEventListener(
  'scroll',
  () => initializeSlider(),
  { once: true }
);
let currentLayoutIsMobile = isMobileLayout();

window.addEventListener('resize', () => {
  const newLayoutIsMobile = isMobileLayout();

  if (newLayoutIsMobile !== currentLayoutIsMobile) {
    currentLayoutIsMobile = newLayoutIsMobile;

    // Clean both containers to avoid stale DOM
    const carouselMob = document.getElementById('carouselmob');
    if (carouselMob) {
      carouselMob.replaceChildren();
    }

    const carouselDesk = document.getElementById('carouseldesk');
    if (carouselDesk) {
      carouselDesk.replaceChildren();
    }

    carouselInitialized = false;
    initializeSlider();
  }
});


const sbMatcher: { [key: string]: string } = {
  typescript: "demos/",
  javascript: "javascript/demos/",
  angular: "angular/demos/",
  react: "react/demos/",
  vue: "vue/demos/"
};
const sbLocation: { [key: string]: string } = {
  "index.html": "Typescript/",
  "": "TypeScript/",
  "angular.html": "Angular/",
  "react.html": "React/",
  "javascript.html": "JavaScript/",
  "vue.html": "Vue/"
};
let toolbarItemCollection: ItemModel[] = [
  {
    template: `   <a class="tab-link" href="./index.html#platform" aria-controls="typescript" role="tab"
        data-toggle="tab">
        JavaScript
    </a>`,
    align: "Center"
  },
  {
    template: `<a class="tab-link" href="./angular.html#platform" aria-controls="angular" role="tab"
        data-toggle="tab">
        Angular
    </a>`,
    align: "Center"
  },
  {
    template: `  <a class="tab-link" href="./react.html#platform" aria-controls="react" role="tab"
        data-toggle="tab">
        React
    </a>`,
    align: "Center"
  },
  {
    template: `<a class="tab-link" href="./vue.html#platform" aria-controls="vue" role="tab" data-toggle="tab">
        Vue
    </a>`,
    align: "Center"
  },
  {
    template: `  <a class="tab-link" href="./javascript.html#platform" aria-controls="javascript" role="tab"
        data-toggle="tab">
        JavaScript (ES5)
    </a>`,
    align: "Center"
  },
  
  
];
let id: number = (window as any).activeId;
if (!isNullOrUndefined(id)) {
  toolbarItemCollection[id].cssClass = "active";
}

let toolbar = new Toolbar({
  height: "72px",
  width: "100%",
  items: toolbarItemCollection
});
toolbar.appendTo("#platform");
const htmlMatch: string[] = ["typescript", "javascript", "vue"];
const ej2Regex: RegExp = /ej2.syncfusion.com/;
const urlRegex: RegExp = /(npmci\.syncfusion\.com|ej2\.syncfusion\.com)(\/)(development\/|production\/)*/;
let platform: string = select("body").getAttribute("data-sb-name");
let curSbPath = sbMatcher[platform];
let href: string = location.href;
let link: string[] = href.match(urlRegex);
let curLink: string =
  (ej2Regex.test(location.origin) ? "https" : "http") +
  "://" +
  (link ? link[0] : "npmci.syncfusion.com/development/") +
  curSbPath;
let searchInstance: any;

let popupEle: any = select("#search-popup");
let mobpopupEle: any = select("#mob-search-popup");

let searchEle: any = select("#search-box");
let mobsearchEle: any = select("#mob-search-box");

let searchPopup: Popup = new Popup(popupEle, {
  offsetY: 5,
  targetType: "relative",
  relateTo: searchEle,
  position: { X: "left", Y: "bottom" },
  collision: { X: "none", Y: "none" }
});
let mobsearchPopup: Popup = new Popup(mobpopupEle, {
  offsetY: 5,
  targetType: "relative",
  relateTo: mobsearchEle,
  position: { X: "left", Y: "bottom" },
  collision: { X: "none", Y: "none" }
});

let searchBox: any = null;
let mobsearchBox: any = null;

let reRouter: any = select("#sb-re-route");
let suffix: string = htmlMatch.indexOf(platform) !== -1 ? ".html" : "";
let listObject: any = {
  fields: { id: "uid", groupBy: "component", text: "name" },
  template:
    '<div class="e-text-content e-icon-wrapper"' +
    (platform !== "react"
      ? 'data="${dir}/${url}" pid="${parentId}"'
      : 'data="${path}"') +
    'uid="${uid}">' +
    '<span class="e-list-text" role="list-item">' +
    "${name}</span></div>",
  groupTemplate:
    '${if(items[0]["component"])}<div class="e-text-content"><span class="e-search-group">${items[0].component}</span>' +
    "</div>${/if}"
};

searchPopup.hide();
mobsearchPopup.hide();

window.onresize = function() {
  if (
    searchPopup &&
    searchPopup.element.className.indexOf("e-popup-close") === -1 &&
    mobsearchPopup &&
    mobsearchPopup.element.className.indexOf("e-popup-close") === -1
  ) {
    searchPopup.hide();
    mobsearchPopup.hide();
  }
  if ((<any>window).searchBox && (<any>window).searchBox.isPopupOpen) {
    (<any>window).searchBox.hidePopup();
  }
  if ((<any>window).mobsearchBox && (<any>window).mobsearchBox.isPopupOpen) {
    (<any>window).mobsearchBox.hidePopup();
  }
  const platformEl = document.getElementById("platform");
   if (platformEl) {
   platformEl.style.top = "-2px";}
};
//To Prevent navigation to product page from mobile app
if (localStorage.getItem("isEJ2App")) {
  (<HTMLAnchorElement>document.querySelector(".header-logo>a")).href = "#";
  (<HTMLAnchorElement>document.querySelector(".header-logo>a")).target = "";
}

function initiateSearch(): void {
  let searchAjax: Ajax;
  let jsPlatform: string[] = ["aspnetcore", "aspnetmvc", "javascript"];
  let extension: string = jsPlatform.indexOf(platform) !== -1 ? "js" : "json";
  searchAjax = new Ajax(
    "./src/json/" + platform + "-search." + extension,
    "GET",
    true
  );

  searchAjax.send().then((result: any) => {
    if (
      platform === "aspnetcore" ||
      platform === "aspnetmvc" ||
      platform === "javascript"
    ) {
      let stringIndex = result.indexOf("{");
      result = result.slice(stringIndex);
    }
    let searchJson: any = JSON.parse(result);
    (elasticlunr as any).clearStopWords();
    let fields: any = {
      groupBy: "doc.component",
      value: "doc.name",
      text: "doc.name"
    };
    searchInstance = (elasticlunr as any).Index.load(searchJson);
    let searchBox: AutoComplete = new AutoComplete({
      filtering: (e: any) => {
          if (e.text && e.text.length < 3) {
            return;
          }
          let val: any = searchInstance.search(e.text, {
            fields: {
              component: { boost: 1 },
              name: { boost: 2 }
            },
            expand: true,
            boolean: "AND"
          });
          let query: Query = new Query().take(10).select("doc");
          let fields: any = searchBox.fields;
          e.updateData(val, query, fields);
        },
      placeholder: "Search components or features",
      noRecordsTemplate:
        '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
      fields: fields,
      popupHeight: "300px",
      suggestionCount: 10,
      highlight: true,
      select: (e: any) => {
        let docPath = e.itemData.path
          ? e.itemData.path.replace(":theme/", "")
          : e.itemData.doc
          ? e.itemData.doc.path
          : null;
        let demoPath = docPath
          ? docPath
          : e.itemData.doc.dir + "/" + e.itemData.doc.url;
        if (location.href.indexOf("Home") !== -1) {
          curLink =
            location.origin + "/" + sbLocation[location.href.split("/")[4].split("#")[0]];
          reRouter.href = curLink + "#/tailwind3/" + demoPath + suffix;
        } else if (location.href.indexOf("aspnetmvc") !== -1) {
          reRouter.href =
            "https://ej2.syncfusion.com/aspnetmvc/" +
            demoPath +
            "#/tailwind3" +
            suffix;
        } else if (location.href.indexOf("aspnetcore") !== -1) {
          reRouter.href =
            "https://ej2.syncfusion.com/aspnetcore/" +
            demoPath +
            "#/tailwind3" +
            suffix;
        } else {
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
    (<any>window).searchBox = searchBox;
    searchBox.appendTo("#search-box");
    let mobsearchBox: AutoComplete = new AutoComplete({
      filtering: (e: any) => {
          if (e.text && e.text.length < 3) {
            return;
          }
          let val: any = searchInstance.search(e.text, {
            fields: {
              component: { boost: 1 },
              name: { boost: 2 }
            },
            expand: true,
            boolean: "AND"
          });
          let query: Query = new Query().take(10).select("doc");
          let fields: any = mobsearchBox.fields;
          e.updateData(val, query, fields);
        },
      placeholder: "Search components or features",
      noRecordsTemplate:
        '<div class="search-no-record">We’re sorry. We cannot find any matches for your search term.</div>',
      fields: fields,
      popupHeight: "300px",
      suggestionCount: 10,
      highlight: true,
      select: (e: any) => {
        let docPath = e.itemData.path
          ? e.itemData.path.replace(":theme/", "")
          : e.itemData.doc
          ? e.itemData.doc.path
          : null;
        let demoPath = docPath
          ? docPath
          : e.itemData.doc.dir + "/" + e.itemData.doc.url;
        if (location.href.indexOf("Home") !== -1) {
          curLink =
            location.origin + "/" + sbLocation[location.href.split("/")[4].split("#")[0]];
          reRouter.href = curLink + "#/tailwind3/" + demoPath + suffix;
        } else if (location.href.indexOf("aspnetmvc") !== -1) {
          reRouter.href =
            "https://ej2.syncfusion.com/aspnetmvc/" +
            demoPath +
            "#/tailwind3" +
            suffix;
        } else if (location.href.indexOf("aspnetcore") !== -1) {
          reRouter.href =
            "https://ej2.syncfusion.com/aspnetcore/" +
            demoPath +
            "#/tailwind3" +
            suffix;
        } else {
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
    (<any>window).mobsearchBox = mobsearchBox;
    mobsearchBox.appendTo("#mob-search-box");
  });

  let classname_array: string[] = [
    ".typescriptbtn",
    ".angularbtn",
    ".javascriptbtn",
    ".reactbtn",
    ".netcorebtn",
    ".netmvcbtn",
    ".vuebtn",
    ".blazorbtn"
  ];
  let content: string[] = [
    "TypeScript",
    "Angular",
    "JavaScript (ES5)",
    "React",
    "ASP.NET Core",
    "ASP.NET MVC",
    "Vue",
    "Blazor"
  ];
  for (let i: number = 0; i < classname_array.length; i++) {
    let element: any = document.querySelectorAll(classname_array[i]);
    for (let j: number = 0; j < element.length; j++) {
      new Tooltip(
        { content: content[i], position: "BottomCenter" },
        element[j]
      );
    }
  }
  document.getElementById("mob-search").classList.add("mb-search");
  document.getElementById("mbSearch").classList.add("search-hide");
}

initiateSearch();
