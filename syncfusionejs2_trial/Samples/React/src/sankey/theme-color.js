"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadChartTheme = exports.loadSankeyChartTheme = void 0;
function normalizeThemeToken(raw) {
    return (raw.charAt(0).toUpperCase() + raw.slice(1))
        .replace(/-dark/i, 'Dark')
        .replace(/contrast/i, 'Contrast')
        .replace(/-highContrast/i, 'HighContrast');
}
function loadSankeyChartTheme(args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    args.chart.theme = normalizeThemeToken(selectedTheme);
}
exports.loadSankeyChartTheme = loadSankeyChartTheme;
function loadChartTheme(args) {
    var selectedTheme = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Tailwind3';
    args.chart.theme = normalizeThemeToken(selectedTheme);
}
exports.loadChartTheme = loadChartTheme;
