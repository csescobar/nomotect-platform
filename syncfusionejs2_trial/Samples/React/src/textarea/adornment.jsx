import * as React from 'react';
import { PropertyPane } from '../common/property-pane';
import { TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import { SampleBase } from '../common/sample-base';
import './sample.css';
export class Adornments extends SampleBase {
    textareaObj;
    horizontalFlowChange(args) {
        this.textareaObj.adornmentFlow = args.value;
        this.textareaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    }
    verticalFlowChange(args) {
        this.textareaObj.adornmentFlow = args.value;
        this.textareaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    }
    horizontalOrentChange(args) {
        this.textareaObj.adornmentOrientation = args.value;
        this.textareaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    }
    verticalOrentChange(args) {
        this.textareaObj.adornmentOrientation = args.value;
        this.textareaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    }
    render() {
        return (<div className='control-pane'>
            <div className='control-section'>
                <div className="col-lg-8 control-section multiline">
                    <div className="content-wrapper">
                        <div className="multiline-row">
                            <TextAreaComponent ref={(scope) => { this.textareaObj = scope; }} cssClass='e-outline' placeholder="Edit the Textarea" floatLabelType="Auto" prependTemplate={this.prependTemplate} appendTemplate={this.appendTemplate}/>
                        </div>
                    </div>
                </div>  

                <div className="col-lg-4 property-section">
                    <PropertyPane title='Properties'>
                        <table id="property" title="Properties" className="multiline-property">
                            <tbody>
                                <tr>
                                    <td className="left-side">Flow Direction</td>
                                    <td>
                                        <div>
                                            <RadioButtonComponent value='Horizontal' name="flow" checked={true} change={this.horizontalFlowChange}/>
                                            <RadioButtonComponent value='Vertical' name="flow" change={this.verticalFlowChange}/>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-side">Orientation Direction</td>
                                    <td>
                                        <div>
                                            <RadioButtonComponent value='Horizontal' name="orientation" checked={true} change={this.horizontalOrentChange}/>
                                            <RadioButtonComponent value='Vertical' name="orientation" change={this.verticalOrentChange}/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div>
            </div>
            <div id="action-description">
                <p>This example demonstrates the adornments enhance a textarea with prefix/suffix elements, icons, text, or buttons that provide context or quick actions. Flow and orientation can be configured for horizontal or vertical layouts.</p>
            </div>
            <div id="description">
                <p>
                    This sample showcases TextArea adornments using <code>prependTemplate</code> and <code>appendTemplate</code> to add bold/italic (prefix) and save/delete (suffix) icons. Radio buttons let you switch <code>adornmentFlow</code> and <code>adornmentOrientation</code> between Horizontal and Vertical, and the layout updates dynamically via dataBind.
                </p>
            </div>
        </div>);
    }
    prependTemplate() {
        return (<div>
                <span className="e-icons e-bold"></span><span className="e-input-separator"></span><span className="e-icons e-italic"></span><span className="e-input-separator"></span>
            </div>);
    }
    appendTemplate() {
        return (<div>
                <span className="e-input-separator"></span><span className="e-icons e-save"></span><span className="e-input-separator"></span><span className="e-icons e-trash"></span>
            </div>);
    }
}
