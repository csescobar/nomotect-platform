import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { updateSampleSection } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import { AdornmentsDirection, TextAreaComponent } from '@syncfusion/ej2-react-inputs';
import { ChangeArgs, RadioButtonComponent } from '@syncfusion/ej2-react-buttons';
import './sample.css';

const Adornments = () => {
    useEffect(() => {
        updateSampleSection();
    }, [])
    const textareaObj = useRef<TextAreaComponent>(null);
    const horizontalFlowChange = (args: ChangeArgs) => {
        textareaObj.current!.adornmentFlow = args.value as AdornmentsDirection;
        textareaObj.current!.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    const verticalFlowChange = (args: ChangeArgs) => {
        textareaObj.current!.adornmentFlow = args.value as AdornmentsDirection;
        textareaObj.current!.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    const horizontalOrentChange = (args: ChangeArgs) => {
        textareaObj.current!.adornmentOrientation = args.value as AdornmentsDirection;
        textareaObj.current!.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
    };
    const verticalOrentChange = (args: ChangeArgs) => {
        textareaObj.current!.adornmentOrientation = args.value as AdornmentsDirection;
        textareaObj.current!.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
    };
    const prependTemplate = () => {
        return (<>
            <span className="e-icons e-bold"></span><span className="e-input-separator"></span><span className="e-icons e-italic"></span><span className="e-input-separator"></span>
        </>);
    }
    const appendTemplate = () => {
        return (<>
            <span className="e-input-separator"></span><span className="e-icons e-save"></span><span className="e-input-separator"></span><span className="e-icons e-trash"></span>
        </>);
    }
    return (
        <div className='control-pane'>
            <div className='control-section'>
                <div className="col-lg-8 multiline">
                    <div className="content-wrapper">
                        <div className="multiline-row">
                            <TextAreaComponent cssClass='e-outline' placeholder="Edit the Textarea" floatLabelType="Auto" prependTemplate={prependTemplate} appendTemplate={appendTemplate} />
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
                                            <RadioButtonComponent value='Horizontal' name="flow" checked={true} change={horizontalFlowChange} />
                                            <RadioButtonComponent value='Vertical' name="flow" change={verticalFlowChange} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="left-side">Orientation Direction</td>
                                    <td>
                                        <div>
                                            <RadioButtonComponent value='Horizontal' name="orientation" checked={true} change={horizontalOrentChange} />
                                            <RadioButtonComponent value='Vertical' name="orientation" change={verticalOrentChange}/>
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
        </div>
    );
}
export default Adornments;