<template>
  <div class="control-section">
    <div align='center'>
        <ejs-chart ref="chart" style='display:block' :theme='theme' :load='load' :axisRangeCalculated='axisRangeCalculated' :pointRender='pointRender' align='center' id='UpdateData' :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :chartArea='chartArea' :width='width'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Column' xName='x' yName='y' :cornerRadius='cornerRadius' columnWidth=0.5> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
<div id="action-description">
    <p>
        This sample demonstrates how the data source for the chart can dynamically update with random values at a set interval.
    </p>
</div>
<div id="description">
    <p>
        In this example, you can see how to render and configure a column chart that displays sales data, with each entry featuring the product name and the corresponding sales percentage. Additionally, the chart can dynamically update with random values using the <code>setData</code> method.
    </p>
    <p style="font-weight: 500"><b>Injecting Module</b></p>
    <p>
        Chart component features are segregated into individual feature-wise modules. To use the column series, we need to inject the
        <code>ColumnSeries</code> module using <code>provide: { chart: [ColumnSeries] }</code> method.
    </p>
    <p>
        More information on the column series can be found in this
        <a target="_blank" href="https://ej2.syncfusion.com/vue/documentation/chart/chart-type/column" aria-label="Navigate to the documentation for Column Chart in Vue Chart component">documentation section</a>.
    </p> 
</div>
  </div>
</template>

<script>
import { Browser } from '@syncfusion/ej2-base';
import { ChartComponent, SeriesDirective, SeriesCollectionDirective, ColumnSeries, Category, DataLabel } from "@syncfusion/ej2-vue-charts";
import { fabricColors, materialColors, bootstrapColors, highContrastColors, fluent2Colors, fluent2HighContrastColors } from './theme-color';

let selectedTheme = location.hash.split("/")[1];
selectedTheme = selectedTheme ? selectedTheme : "Material";
let theme = (selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark").replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default {
  components: {
    'ejs-chart': ChartComponent,
    'e-series-collection': SeriesCollectionDirective,
    'e-series': SeriesDirective
  },
  data: function() {
    return {
        theme: theme,
        seriesData: [
            { x: 'Jewellery', y: 20 },
            { x: 'Shoes', y: 15 },
            { x: 'Footwear', y: 13 },
            { x: 'Pet Services', y: 23 },
            { x: 'Business Clothing', y: 10 },
            { x: 'Office Supplies', y: 8 },
            { x: 'Food', y: 11 }
        ],
        //Initializing Primary X Axis
        primaryXAxis: {
            valueType: 'Category', 
            majorGridLines: { width: 0 },
            labelStyle: { size: Browser.isDevice ? '11px' : '12px' }
        },
        //Initializing Primary Y Axis
        primaryYAxis:
        {
            title: 'Sales in percentage', 
            labelFormat: '{value}%',
            lineStyle: { width: 0 }, 
            majorTickLines: { width: 0 }
        },
        chartArea: {
            border: {
                width: 0
            }
        },
        width : Browser.isDevice ? '100%' : '75%',
        title: "Sales by product",
        cornerRadius: { topLeft: Browser.isDevice ? 10 : 15, topRight: Browser.isDevice ? 10 : 15 }
    };
  },
  provide: {
    chart: [ColumnSeries, Category, DataLabel]
  },
  methods: {
    load: function(args) {
        setInterval(function () {
            let newData = args.chart.series[0].dataSource.map((item) => {
                let value = getRandomInt(10, 90);
                return { x: item.x, y: value };
            });
            if (args.chart.visibleSeries.length > 0) {
                args.chart.series[0].setData(newData);
            }
        }, 3000);
    },
    axisRangeCalculated: function(args) {
        if (args.axis.name === 'primaryYAxis') {
            args.maximum = args.maximum > 100 ? 100 : args.maximum;
            if (args.maximum > 80) {
                args.interval = 10;
            }
        }
    },
    pointRender: function(args) {
        let selectedTheme = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        if (selectedTheme && selectedTheme.indexOf('fabric') > -1) {
            args.fill = fabricColors[args.point.index % 10];
        } else if (selectedTheme === 'material') {
            args.fill = materialColors[args.point.index % 10];
        } else if (selectedTheme === 'highcontrast') {
            args.fill = highContrastColors[args.point.index % 10];
        } else if (selectedTheme === 'fluent2') {
            args.fill = fluent2Colors[args.point.index % 10];
        } else if (selectedTheme === 'fluent2-highcontrast') {
            args.fill = fluent2HighContrastColors[args.point.index % 10];
        } else {
            args.fill = bootstrapColors[args.point.index % 10];
        }
    }
  }
};
</script>