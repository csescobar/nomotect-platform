import * as React from 'react';
import { useEffect, useRef } from 'react';
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarItemClickedEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import { updateSampleSection } from '../common/sample-base';
import { Browser } from '@syncfusion/ej2/base';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject as ChartInject, LineSeries, DateTime, Legend, Tooltip, Category, StackingColumnSeries, Selection, Highlight } from '@syncfusion/ej2-react-charts';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import * as data from './promptResponseData.json';
import './generative-ui.css';

const GenerativeUI = () => {
  useEffect(() => {
    updateSampleSection();
  }, []);

  const generativeSuggestions: string[] = data["generativeSuggestions"];
  const chartBlockData: any = data["chartBlockData"];
  const cardBlockData: any = data["cardBlockData"];
  const gridBlockData: any = data["gridBlockData"];
  const promptsData: any = data["promptsData"];

  const assistInstance = useRef<AIAssistViewComponent>(null);

  const toolbarItemClicked = (args: ToolbarItemClickedEventArgs) => {
    if (args.item.iconCss === 'e-icons e-refresh') {
      assistInstance.current.prompts = [];
      assistInstance.current.promptSuggestions = generativeSuggestions;
    }
  };

  const assistViewToolbarSettings: ToolbarSettingsModel = {
    items: [{ iconCss: 'e-icons e-refresh', align: 'Right' }],
    itemClicked: toolbarItemClicked
  };

  const bannerTemplate: string = `<div class="banner-content">
    <div class="e-icons e-assistview-icon"></div>
    <h3>AI Assistance Generative UI</h3>
    <i>Render interactive tools such as weather cards, charts, data grids etc directly inside AI responses.</i>
  </div>`;

  const ChartTemplate = (args: any) => (
    <ChartComponent
      id="generativeChart"
      primaryXAxis={{
        title: 'Years',
        interval: Browser.isDevice ? 2 : 1,
        labelIntersectAction: 'Rotate45',
        valueType: 'Category',
        majorGridLines: { width: 0 },
        minorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
      }}
      primaryYAxis={{
        title: 'Growth (in Billion)',
        minimum: -3,
        maximum: 3,
        interval: 1,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        majorGridLines: { width: 1 },
        minorGridLines: { width: 1 },
        minorTickLines: { width: 0 },
        labelFormat: '{value}B',
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, enableHighlight: true }}
      legendSettings={{ enableHighlight: true }}
      width="100%"
      height="300px"
      title="Annual Growth GDP in France"
    >
      <ChartInject services={[LineSeries, DateTime, Legend, Tooltip, StackingColumnSeries, Category, Selection, Highlight]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={args.privateConsumptionData} xName="x" yName="y" name="Private Consumption" type="StackingColumn" />
        <SeriesDirective dataSource={args.governmentConsumptionData} xName="x" yName="y" name="Government Consumption" type="StackingColumn" />
        <SeriesDirective dataSource={args.investmentData} xName="x" yName="y" name="Investment" type="StackingColumn" />
        <SeriesDirective dataSource={args.foreignTradeData} xName="x" yName="y" name="Net Foreign Trade" type="StackingColumn" />
        <SeriesDirective dataSource={args.gdpData} xName="x" yName="y" name="GDP" width={2} marker={{ visible: true, width: 7, height: 7 }} type="Line" />
      </SeriesCollectionDirective>
    </ChartComponent>
  );

  const GridTemplate = (args: any) => (
    <GridComponent
      dataSource={args.gridData}
      allowPaging={false}
      pageSettings={{ pageSize: 8 }}
      width="100%"
    >
      <ColumnsDirective>
        <ColumnDirective field="Region" headerText="Region" width={150} textAlign="Center" />
        <ColumnDirective field="Sales" headerText="Sales %" width={120} textAlign="Center" />
        <ColumnDirective field="Growth" headerText="Growth %" width={120} textAlign="Center" />
        <ColumnDirective field="Status" headerText="Status" width={130} textAlign="Center" />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  );

  const registerToolUIs = (): void => {
    assistInstance.current.registerToolUI({
      toolName: 'weather-card',
      template: `<div tabindex="0" class="e-card" id="weather_card" role="button">
                        <div class="e-card-header">
                            <div class="e-card-header-caption">
                                <div class="e-card-header-title">Today</div>
                                <div class="e-card-sub-title"> New York - Scattered Showers.</div>
                            </div>
                        </div>
                        <div class="e-card-header weather_report">
                            <div class="e-card-header-image"></div>
                            <div class="e-card-header-caption">
                                <div class="e-card-header-title">1º / -4º</div>
                                <div class="e-card-sub-title">Chance for snow: 100%</div>
                            </div>
                        </div>
                    </div>`
    });

    assistInstance.current.registerToolUI({
      toolName: 'chart-tool',
      template: ChartTemplate,
    });

    assistInstance.current.registerToolUI({
      toolName: 'sales-grid',
      template: GridTemplate,
    });
  };

  const onCreated = (): void => {
    registerToolUIs();
    assistInstance.current.prompts = promptsData;
  };

  const promptRequest = (args: PromptRequestEventArgs) => {
    setTimeout(() => {
      if (args.prompt === 'What is the weather in New York?') {
        assistInstance.current.addPromptResponse({ blocks: cardBlockData });
      } else if (args.prompt === "What are France's GDP growth trends?") {
        assistInstance.current.addPromptResponse({ blocks: chartBlockData });
      } else if (args.prompt === 'How do smartphone sales perform across regions?') {
        assistInstance.current.addPromptResponse({ blocks: gridBlockData });
      } else {
        const response: string = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
        assistInstance.current.addPromptResponse(response);
      }
    }, 1000);
  };

  return (
    <div className='control-pane'>
      <div className="control-section">
        <div className="generative-aiassistview">
          <AIAssistViewComponent
            id="aiAssistView"
            bannerTemplate={bannerTemplate}
            promptSuggestionsHeader="Suggested Prompts"
            promptSuggestions={generativeSuggestions}
            enableStreaming={true}
            showClearButton={true}
            toolbarSettings={assistViewToolbarSettings}
            promptRequest={promptRequest}
            created={onCreated}
            ref={assistInstance}
          />
        </div>
      </div>

      <div id="action-description">
        <p>This sample demonstrates rendering interactive UI tools like weather cards, charts, and grids within AI responses for enhanced data visualization.</p>
      </div>
      <div id="description">
        <p>This sample demonstrates registering custom UI tools like weather cards, charts, and grids in responses.</p>
        <ul>
          <li>The <code>addPromptResponse</code> method adds AI responses to the AIAssistView by accepting a blocks array that defines content structure. Tools are registered using <code>registerToolUI()</code>, which defines a template and handler function for rendering.</li>
          <li>Tool registration - Three registered tools deliver rich content: <code>weather-card</code> for forecast displays, <code>chart-tool</code> for GDP growth visualization, and <code>sales-grid</code> for regional performance data.</li>
          <li><a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#bannertemplate">bannerTemplate</a> - Customizes the initial banner content with icon and heading.</li>
          <li><a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptsuggestions">promptSuggestions</a> - Provides predefined prompts for weather forecasts, sales analysis, and economic trend data.</li>
          <li><a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#promptrequest">promptRequest</a> - Handles prompt execution and dynamically renders custom tools.</li>
          <li><a target="_blank" href="https://ej2.syncfusion.com/react/documentation/api/ai-assistview#enablestreaming">enableStreaming</a> - Enables real-time response streaming with simulated delay.</li>
        </ul>
      </div>
    </div>
  );
};

export default GenerativeUI;