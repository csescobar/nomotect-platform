<template>
    <div class="control-section">
      <div align='center'>
        <ejs-chart
          id="container"
          :primaryXAxis="primaryXAxis"
          :primaryYAxis="primaryYAxis"
          :series="series"
          :tooltip="tooltip"
          :crosshair="crosshair"
          :title="title"
          :chartArea="chartArea"
          :width="width"
          :theme="theme"
        >
        </ejs-chart>
      </div>
      <div id="action-description">
        <p>
          This sample demonstrates the crosshair with snap-to-data functionality in charts. Hover over the chart or tap on it in touch-enabled devices to view the crosshair and its tooltip snapping directly to the nearest data point.
        </p>
      </div>
      <div id="description">
        <p>
          The crosshair in charts helps users examine data values with precision by using a vertical and horizontal line. When the <code>snapToData</code> property is enabled, the crosshair aligns directly to the nearest data point, making it easy to pinpoint exact values on hover or tap.
          Enable this feature by setting <code>snapToData: true</code> in the <code>crosshairSettings</code> configuration.
        </p>
        <p style="font-weight: 500"><b>Injecting Module</b></p>
        <p>
          Chart component features are segregated into individual feature-wise modules. To use Crosshair, we need to inject
          <code>Crosshair</code> module using <code>provide: { chart: [Crosshair] }</code> method.
        </p>
        <p>
          More information on the Crosshair can be found in this
          <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/cross-hair-and-track-ball/" aria-label="Navigate to the documentation for Crosshair in Vue Chart component">documentation section</a>.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  import { Browser } from '@syncfusion/ej2-base';
  import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Crosshair } from "@syncfusion/ej2-vue-charts";
  
  let selectedTheme = location.hash.split("/")[1];
  selectedTheme = selectedTheme ? selectedTheme : "Fluent2";
  let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');
  
  export default {
    components: {
      'ejs-chart': ChartComponent,
      'e-series-collection': SeriesCollectionDirective,
      'e-series': SeriesDirective
    },
    data() {
      return {
        primaryXAxis: {
          interval: 1,
          crosshairTooltip: { enable: true },
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          title: 'Year'
        },
        primaryYAxis: {
          title: "Price (24 Karat per Ounce)",
          labelFormat: '${value}',
          crosshairTooltip: { enable: true },
          minimum: 1000,
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 }
        },
        series: [{
          dataSource: [
          { x: 2015, y: 1160.06 },
                { x: 2016, y: 1250.74 },
                { x: 2017, y: 1257.12 },
                { x: 2018, y: 1268.93 },
                { x: 2019, y: 1393.34 },
                { x: 2020, y: 1770.35 },
                { x: 2021, y: 1798.53 },
                { x: 2022, y: 1800.79 },
                { x: 2023, y: 1923.48 },
                { x: 2024, y: 2003.10 }
          ],
          width: 2,
          xName: "x",
          yName: "y",
          name: "India",
          marker: { visible: true, isFilled: true },
          type: "Line",
          animation: { enable: false },
        }],
        tooltip: {
          enable: false,
          shared: false
        },
        crosshair: {
          enable: true,
          snapToData: true,
          dashArray: '5,5'
        },
        title: "Historical Gold Prices in USA: 2015 to 2024",
        chartArea: {
          border: { width: 0 }
        },
        width: Browser.isDevice ? '100%' : '75%',
        theme: theme
      };
    },
    provide: {
      chart: [LineSeries, Crosshair]
    }
  };
  </script>
  
  <style scoped>
  #control-container {
    padding: 0px !important;
  }
  </style>
  