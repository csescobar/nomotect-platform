import { loadCultureFiles } from '../common/culture-loader';
import { AIAssistView, PromptRequestEventArgs, ToolbarItemClickedEventArgs } from "@syncfusion/ej2-interactive-chat";
import { Browser } from '@syncfusion/ej2/base';
import { Chart } from '@syncfusion/ej2/charts';
import { Grid } from '@syncfusion/ej2/grids';
import { generativeSuggestions, chartBlockData, cardBlockData, gridBlockData, promptsData } from './promptResponseData';

/**
 * Generative UI sample
 */
(window as any).default = (): void => {
    loadCultureFiles();

    const assistViewToolbarSettings: any = {
        items: [ { iconCss: 'e-icons e-refresh', align: 'Right' } ],
        itemClicked: toolbarItemClicked
    };

    const aiAssistViewInst = new AIAssistView({
        bannerTemplate: '#bannerContent',
        promptSuggestionsHeader: "Suggested Prompts",
        promptSuggestions: generativeSuggestions,
        enableStreaming: true,
        showClearButton: true,
        prompts: promptsData,
        toolbarSettings: assistViewToolbarSettings,
        promptRequest: onPromptRequest
    });

    // Registering generative tool UI
    aiAssistViewInst.registerToolUI({
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
    //Registering chart component
    aiAssistViewInst.registerToolUI({
        toolName: 'chart-tool',
        template: '<div class="chartContainer"></div>',
        handler: function (container, args) {
            var chart = new Chart({
                primaryXAxis: {
                    title: 'Years',
                    interval: Browser.isDevice ? 2 : 1,
                    labelIntersectAction: 'Rotate45',
                    valueType: 'Category',
                    majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
                    majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
                    lineStyle: { width: 0 },
                },
                primaryYAxis: {
                    title: 'Growth (in Billion)',
                    minimum: -3,
                    maximum: 3,
                    interval: 1,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
                    minorGridLines: { width: 1 }, minorTickLines: { width: 0 },
                    labelFormat: '{value}B',
                },
                chartArea: {
                    border: {
                        width: 0
                    }
                },
                series: [
                    {
                        type: 'StackingColumn',
                        dataSource: (args as any).privateConsumptionData,
                        xName: 'x', yName: 'y', name: 'Private Consumption',
                    }, {
                        type: 'StackingColumn',
                        dataSource: (args as any).governmentConsumptionData,
                        xName: 'x', yName: 'y', name: 'Government Consumption',
                    }, {
                        type: 'StackingColumn',
                        dataSource: (args as any).investmentData,
                        xName: 'x', yName: 'y', name: 'Investment',
                    }, {
                        type: 'StackingColumn',
                        dataSource: (args as any).foreignTradeData,
                        xName: 'x', yName: 'y', name: 'Net Foreign Trade'
                    }, {
                        type: 'Line',
                        dataSource: (args as any).gdpData,
                        xName: 'x', yName: 'y', name: 'GDP',
                        width: 2,
                        marker: {
                            visible: true,
                            width: 7,
                            height: 7
                        },
                    }
                ],
                width:'75%',
                title: 'Annual Growth GDP in France',
                tooltip: {
                    enable: true, enableHighlight: true
                }, legendSettings: { enableHighlight: true },

            });
            const chartElement: HTMLElement = container.querySelector('.chartContainer');
            chart.appendTo(chartElement);
        }
    });
    // Registering grid component
    aiAssistViewInst.registerToolUI({
        toolName: 'sales-grid',
        template: '<div class="gridContainer"></div>',
        handler: function (container, args) {
            const data = (args as any).gridData;
            const grid = new Grid({
                dataSource: data,
                columns: [
                    { field: 'Region', headerText: 'Region', width: 150, textAlign: 'Center' },
                    { field: 'Sales', headerText: 'Sales %', width: 120, textAlign: 'Center' },
                    { field: 'Growth', headerText: 'Growth %', width: 120, textAlign: 'Center' },
                    { field: 'Status', headerText: 'Status', width: 130, textAlign: 'Center' }
                ],
                allowPaging: false,
                pageSettings: {
                    pageSize: 8
                },
                width: 'min-content'
            });
            const gridElement: HTMLElement = container.querySelector('.gridContainer');
            grid.appendTo(gridElement);
        }
    });

    aiAssistViewInst.appendTo('#aiAssistView');

    function onPromptRequest(args: PromptRequestEventArgs) {
        setTimeout(function () {
            if (args.prompt === 'What is the weather in New York?') {
                aiAssistViewInst.addPromptResponse({ blocks: cardBlockData });
            }
            else if (args.prompt === 'What are France\'s GDP growth trends?') {
                aiAssistViewInst.addPromptResponse({ blocks: chartBlockData });
            }
            else if (args.prompt === 'How do smartphone sales perform across regions?') {
                aiAssistViewInst.addPromptResponse({ blocks: gridBlockData });
            }
            else {
                const response: string = "For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.";
                aiAssistViewInst.addPromptResponse(response);
            }
        }, 1000);
    }

    function toolbarItemClicked(args: ToolbarItemClickedEventArgs) {
        if (args.item.iconCss === 'e-icons e-refresh') {
            aiAssistViewInst.prompts = [];
            aiAssistViewInst.promptSuggestions = generativeSuggestions;
        }
    }
};
