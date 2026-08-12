import * as React from 'react';
import { SampleBase } from '../common/sample-base';
export class SmartPredictiveScheduling extends SampleBase {
    render() {
        return (<div className='control-pane'>
                <div className='control-section'>
                    <img src={'src/ai-gantt/images/predictive-scheduling.gif'} width='100%' alt="Showcase Text to MindMap Gif" height='100%'></img>
                </div>
                <div id="action-description">
                    <p>This sample demonstrates the predictive scheduling feature in the Syncfusion React Gantt Chart. It showcases
                        how
                        AI is utilized to forecast and schedule tasks based on historical data. The Gantt Chart displays taskbars with
                        baselines, representing both the predicted schedule and the actual task timelines. The AI-driven prediction uses
                        five years of historical task data alongside the current year's tasks to generate a comprehensive and accurate
                        schedule, allowing users to visualize potential project timelines and adjust accordingly.
                    </p>
                    <p>To explore this and more Syncfusion React Smart AI integrations locally, check out our <a target='_blank' href='https://github.com/syncfusion/smart-ai-samples/tree/master/react/' aria-label="Navigate to explore the syncfusion React AI Demos repository">GitHub
                        repository</a>.</p>
                </div>

                <div id="description">
                    <p>
                        This action predicts and generates a task schedule by analyzing five years of historical <strong>TaskCollection</strong> data
                        along with the current year's <strong>TaskCollection</strong>. The AI model processes this data to forecast future tasks,
                        creating a predictive task collection. This collection is then visualized on the Gantt Chart, with baselines
                        indicating the predicted start and end dates of each task, allowing users to compare the projected schedule with
                        the actual progress.
                    </p>
                </div>
            </div>);
    }
}
