import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';

export class SmartRiskAssessor extends SampleBase<{}, {}> {

    render() {
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <img src={'src/ai-gantt/images/risk-assessor.gif'} width='100%' alt="Showcase Text to MindMap Gif" height='100%'></img>
                </div>
                <div id="action-description">
                    <p>This sample demonstrates how to identify tasks at risk based on their duration and dependencies within the
                        React
                        Gantt Chart. Tasks that are determined to be critical are highlighted by dynamically changing their taskbar
                        colors, making it easy to visualize potential risks in your project timeline.
                    </p>
                    <p>To explore this and more Syncfusion React Smart AI integrations locally, check out our <a target='_blank'
                        href='' aria-label="Navigate to explore the syncfusion React AI Demos repository">GitHub
                        repository</a>.</p>
                </div>

                <div id="description">
                    <p>
                        This action identifies tasks that are at risk by analyzing their duration and dependencies, then highlights
                        these tasks by applying distinctive colors to their taskbars.
                    </p>
                </div>
            </div>
        )
    }
}