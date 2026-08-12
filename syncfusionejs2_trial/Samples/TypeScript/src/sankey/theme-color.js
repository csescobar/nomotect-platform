define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loadSankeyChartTheme = void 0;
    function loadSankeyChartTheme(args) {
        var selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
        args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/light/i, 'Light').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    }
    exports.loadSankeyChartTheme = loadSankeyChartTheme;
});
