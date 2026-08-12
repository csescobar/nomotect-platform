define(["require", "exports", "../common/culture-loader", "@syncfusion/ej2-navigations"], function (require, exports, culture_loader_1, ej2_navigations_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.default = function () {
        (0, culture_loader_1.loadCultureFiles)();
        var acrdnObj = new ej2_navigations_1.Accordion({
            enableRtl: true,
            items: [
                { header: 'Athletics', iconCss: 'e-athletics e-acrdn-icons', content: '#athletics', expanded: true },
                { header: 'Water Games', iconCss: 'e-water-game e-acrdn-icons', content: '#water_games' },
                { header: 'Racing', iconCss: 'e-racing-games e-acrdn-icons', content: '#racing_games' },
                { header: 'Indoor Games', iconCss: 'e-indoor-games e-acrdn-icons', content: '#indoor_games' }
            ]
        });
        acrdnObj.appendTo('#Accordion_rtl');
    };
});
