ej.base.enableRipple(window.ripple)
/**
 * Sample for Axis label template
 */

var olympicsGoldData = [
  { Country: 'USA', Count: 40 },
  { Country: 'China', Count: 40 },
  { Country: 'Great Britain', Count: 14 },
  { Country: 'France', Count: 16 },
  { Country: 'Australia', Count: 18 },
  { Country: 'Japan', Count: 20 },
  { Country: 'Italy', Count: 12 },
  { Country: 'Netherlands', Count: 15 },
  { Country: 'Germany', Count: 12 },
  { Country: 'South Korea', Count: 13 }
];
var olympicsSilverData = [
  { Country: 'USA', Count: 44 },
  { Country: 'China', Count: 27 },
  { Country: 'Great Britain', Count: 22 },
  { Country: 'France', Count: 26 },
  { Country: 'Australia', Count: 19 },
  { Country: 'Japan', Count: 12 },
  { Country: 'Italy', Count: 13 },
  { Country: 'Netherlands', Count: 7 },
  { Country: 'Germany', Count: 13 },
  { Country: 'South Korea', Count: 9 }
];
var olympicsBronzeData = [
  { Country: 'USA', Count: 42 },
  { Country: 'China', Count: 24 },
  { Country: 'Great Britain', Count: 29 },
  { Country: 'France', Count: 22 },
  { Country: 'Australia', Count: 16 },
  { Country: 'Japan', Count: 13 },
  { Country: 'Italy', Count: 15 },
  { Country: 'Netherlands', Count: 12 },
  { Country: 'Germany', Count: 8 },
  { Country: 'South Korea', Count: 10 }
];


  var chart = new ej.charts.Chart({
    title: "Olympic medal standings 2024",
    subTitle: 'Source: www.olympics.com',
    titleStyle: { textOverflow: 'Wrap' },
    subTitleStyle: { textOverflow: 'Wrap' },
    width: ej.base.Browser.isDevice ? '100%' : '75%', isTransposed: true,
    legendSettings: { visible: true },
    tooltip: { enable: true },
    chartArea: { border: { width: 0 } },
    annotations: [
      {
        content: '<img style="margin-top:15px;height:150px;width:220px;opacity:0.5" src="//ej2.syncfusion.com/javascript/demos/src/chart/images/medals.png" alt="Medals" />', x: 'Netherlands', y: ej.base.Browser.isDevice ? '90' : '110', coordinateUnits: 'Point'
      }
    ],
    primaryXAxis: {
      valueType: 'Category',
      majorGridLines: { width: 0 }, lineStyle: { width: 0 },
      majorTickLines: { width: 0 }, isInversed: true,
      labelTemplate: '#AxisLabelTemplate'
    },

    primaryYAxis: {
      visible: false, maximum: 130
    },

    series: [
      {
        dataSource: olympicsGoldData,
        xName: 'Country', fill: '#FFD700', legendShape: 'Rectangle',
        yName: 'Count', name: 'Gold',
        type: 'StackingColumn', marker: { dataLabel: { visible: true, position: 'Middle' } }
      },
      {
        dataSource: olympicsSilverData,
        xName: 'Country', fill: '#C0C0C0', legendShape: 'Rectangle',
        yName: 'Count', name: 'Silver',
        type: 'StackingColumn', marker: { dataLabel: { visible: true, position: 'Middle' } }
      },
      {
        dataSource: olympicsBronzeData,
        xName: 'Country', fill: '#CD7F32', legendShape: 'Rectangle',
        yName: 'Count', name: 'Bronze',
        type: 'StackingColumn', marker: { dataLabel: { visible: true, position: 'Middle' } }
      }
    ],
    load: function (args) {
      var selectedTheme = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Fluent2';
      args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
        selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
    },
    loaded: function (args) {
      var isDark = args.chart.theme.includes('Dark') || args.chart.theme.includes('HighContrast');
      var labels = document.querySelectorAll('#labelTemplate');
      for (var i = 0; i < labels.length; i++) {
        var el = labels[i];
        el.classList.remove('dark-bg');
        el.classList.remove('light-bg');
        el.classList.add(isDark ? 'dark-bg' : 'light-bg');
      }
    }
  });
  chart.appendTo('#axisLabelTemplateContainer');
