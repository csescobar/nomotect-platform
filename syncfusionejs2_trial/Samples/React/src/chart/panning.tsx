import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  SplineAreaSeries, DataLabel, Category, ChartAnnotation, ILoadedEventArgs,
  ChartTheme, IAxisLabelRenderEventArgs, IAnnotationRenderEventArgs, AnnotationDirective, AnnotationsDirective
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { SampleBase } from "../common/sample-base";

const SAMPLE_CSS = `
#control-container {
    padding: 0px !important;
}

#button-container {
    padding: 5px;
    width: 65%;
    background-color: rgb(237, 236, 236);
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
}

.custom-button {
    flex-grow: 1;
    flex-basis: 0;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 5px;
    justify-content: center;
    background-color: rgb(237, 236, 236);
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    position: relative;
}

.custom-button:not(:last-child):not(.active)::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 1px;
    height: 80%;
    background-color: rgba(0, 0, 0, 0.2);
}

.custom-button.no-line::after {
    display: none;
}

.custom-button img {
    width: 30px;
    height: 30px;
}

.custom-button:hover {
    background-color: #dbdada;
}

.day,
.temp {
    font-size: 13px;
}

.custom-button.active {
    background-color: white !important;
    box-shadow: 0 0 0 2px rgb(237, 236, 236);
    z-index: 2;
}
`;

const chartData = [
  { x: 1, xValue: '1 am', y: 20 }, { x: 2, xValue: '4 am', y: 20 }, { x: 3, xValue: '7 am', y: 20 },
  { x: 4, xValue: '10 am', y: 21 }, { x: 5, xValue: '1 pm', y: 21 }, { x: 6, xValue: '4 pm', y: 24 },
  { x: 7, xValue: '1 am', y: 19 }, { x: 8, xValue: '4 am', y: 20 }, { x: 9, xValue: '7 am', y: 20 },
  { x: 10, xValue: '10 am', y: 21 }, { x: 11, xValue: '1 pm', y: 24 }, { x: 12, xValue: '4 pm', y: 24 },
  { x: 13, xValue: '1 am', y: 21 }, { x: 14, xValue: '4 am', y: 21 }, { x: 15, xValue: '7 am', y: 21 },
  { x: 16, xValue: '10 am', y: 22 }, { x: 17, xValue: '1 pm', y: 23 }, { x: 18, xValue: '4 pm', y: 24 },
  { x: 19, xValue: '1 am', y: 20 }, { x: 20, xValue: '4 am', y: 19 }, { x: 21, xValue: '7 am', y: 19 },
  { x: 22, xValue: '10 am', y: 18 }, { x: 23, xValue: '1 pm', y: 19 }, { x: 24, xValue: '4 pm', y: 19 },
  { x: 25, xValue: '1 am', y: 16 }, { x: 26, xValue: '4 am', y: 15 }, { x: 27, xValue: '7 am', y: 14 },
  { x: 28, xValue: '10 am', y: 15 }, { x: 29, xValue: '1 pm', y: 16 }, { x: 30, xValue: '4 pm', y: 18 }
];

export class UpdateDataSource extends SampleBase<{}, {}> {
  private chartInstance: ChartComponent | null = null;
  private image: string = 'sunny_image';
  private count: number = 25;
  private day: string = 'Friday';

  public render() {
    return (
      <div className='control-pane'  style={{ textAlign: "center" }}>
        <style>
          {SAMPLE_CSS}
        </style>
        <div className='control-section'  style={{ textAlign: "center" }}>
          <ChartComponent id='container'
           style={{ textAlign: "center" }}
            ref={(chart) => this.chartInstance = chart}
            primaryXAxis={{
              interval: 1,
              zoomFactor: 0.2,
              zoomPosition: 0,
              majorGridLines: { width: 0 },
              labelFormat: 'xValue',
              enableAutoIntervalOnZooming: false,
              labelPlacement: 'BetweenTicks'
            }}
            primaryYAxis={{
              majorGridLines: { width: 0 },
              visible: false
            }}
            titleStyle={{ textAlignment: 'Far', size: '20px' }}
            chartArea={{ border: { width: 0 } }} load={this.load.bind(this)} height={'60%'} width={Browser.isDevice ? '100%' : '75%'} title='USA, Texas'
            axisLabelRender={this.axisLabelRender.bind(this)}
            annotationRender={this.annotationRender.bind(this)}
          >
            <Inject services={[SplineAreaSeries, DataLabel, Category, ChartAnnotation]} />
            <AnnotationsDirective>
              <AnnotationDirective
                content={'<div id="chart_image"><img src="src/chart/images/cloudy.png" alt="Cloud Picture" style="width: 41px; height: 41px"/></div>'}
                coordinateUnits={'Pixel'}
                region={'Chart'}
                x={'10%'}
                y={'15%'}
              ></AnnotationDirective>
              <AnnotationDirective
                content={'<div id="days" style="font-size: 11px;">Friday, 01:00 am</div>'}
                coordinateUnits={'Pixel'}
                region={'Chart'}
                x={'90%'}
                y={'15%'}
              ></AnnotationDirective>
            </AnnotationsDirective>
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={chartData}
                xName={'x'}
                yName={'y'}
                opacity={0.5}
                width={2}
                border={{ width: 2 }}
                type={'SplineArea'}
                marker={{ visible: false, dataLabel: { visible: true } }}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
        <div id="button-container"  style={{ textAlign: "center" }}>
          <button id="friday" className="custom-button" onClick={() => this.updateChart('friday', 'sunny_image', 24, 'Friday', 0, 0.2)}>
            <div className="day">Fri</div>
            <img src="src/chart/images/sunny_image.png" alt="Friday" />
            <div className="temp">24°C - 19°C</div>
          </button>
          <button id="saturday" className="custom-button" onClick={() => this.updateChart('saturday', 'sunny_image', 20, 'Saturday', 0.1, 0.3)}>
            <div className="day">Sat</div>
            <img src="src/chart/images/sunny_image.png" alt="Saturday" />
            <div className="temp">20°C - 25°C</div>
          </button>
          <button id="sunday" className="custom-button" onClick={() => this.updateChart('sunday', 'cloudy', 18, 'Sunday', 0.2, 0.4)}>
            <div className="day">Sun</div>
            <img src="src/chart/images/cloudy.png" alt="Sunday" />
            <div className="temp">18°C - 24°C</div>
          </button>
          <button id="monday" className="custom-button" onClick={() => this.updateChart('monday', 'cloudy', 14, 'Monday', 0.3, 0.5)}>
            <div className="day">Mon</div>
            <img src="src/chart/images/cloudy.png" alt="Monday" />
            <div className="temp">14°C - 19°C</div>
          </button>
          <button id="tuesday" className="custom-button" onClick={() => this.updateChart('tuesday', 'rainy', 14, 'Tuesday', 0.4, 0.6)}>
            <div className="day">Tue</div>
            <img src="src/chart/images/rainy.png" alt="Tuesday" />
            <div className="temp">14°C - 19°C</div>
          </button>
        </div>
      </div>
    );
  }

  private updateChart(buttonId: string, img: string, tempCount: number, chartDay: string, zoomPos: number, zoomFactor: number) {
    this.image = img;
    this.count = tempCount;
    this.day = chartDay;
    if (this.chartInstance) {
      this.chartInstance.primaryXAxis.zoomPosition = zoomPos;
      this.chartInstance.primaryXAxis.zoomFactor = zoomFactor;
      this.chartInstance.refresh();
    }
    document.querySelectorAll('.custom-button').forEach(button => button.classList.remove('active'));
    const selectedButton = document.getElementById(buttonId) as HTMLElement;
    selectedButton.classList.add('active');
  }

  private load(args: ILoadedEventArgs): void {
    let selectedTheme: string = location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme : 'Material';
    args.chart.theme = (selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast').replace(/-highContrast/i, 'HighContrast') as ChartTheme;
  }

  private annotationRender(args: IAnnotationRenderEventArgs): void {
    if (args.content.id === 'container_Annotation_0') {
      args.content.innerHTML = `<div id="chart_cloud" align="center"><img src="src/chart/images/${this.image}.png" alt="Cloud Picture" style="width: 41px; height: 41px"/><b align="center" style="font-size: 23px">${this.count}</b><b>°C | </b><b>°F</b></div>`;
    } else {
      args.content.innerHTML = `<div id="days" style="font-size: 8px;">${this.day}, 01:00 am</div>`;
    }
  }

  private axisLabelRender(args: IAxisLabelRenderEventArgs) {
    if (args.axis.name === 'primaryXAxis') {
      args.text = chartData[args.value - 1]['xValue'];
    }
  }
}
