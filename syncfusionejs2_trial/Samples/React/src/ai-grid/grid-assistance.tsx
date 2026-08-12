import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { SampleBase } from '../common/sample-base';
import { updateAISampleSection } from '../common/sample-base';
import { GridAIAssistance } from './ai-grid-assistance';
/* custom code start*/
import AIToast from '../common/ai-toast';
/* custom code end*/
export class GridAssistance extends SampleBase<{}, {}> {
     componentDidMount() {
          updateAISampleSection(); 
    }

    render() {
        return (
            <div className='control-pane'>
                <div className='control-section'>
                    <GridAIAssistance/>
                </div>
                <div id="action-description">
                    <p>This demo highlights the <b>Syncfusion React DataGrid component</b>, enhanced with conversational capabilities through the integrated <b>Syncfusion React AI Assist View component</b>. 
                    The grid data operations such as sorting, filtering, and searching can be performed using natural language input, offering a streamlined alternative to traditional UI interactions.</p>
                </div>
                <div id='description'>
                    <p>The Syncufusion React AI Assist View component is embedded directly within the grid interface, enabling intelligent prompt processing, contextual suggestions, and adaptive responses. 
                        This integration makes working with data in the grid easier, faster, and more natural, especially for handling complex datasets and enabling adaptable processes.
                    </p>
                </div>
                <AIToast/> 
            </div>
        )
    }
}