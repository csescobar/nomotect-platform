import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './sample.css';

export class Adornments extends SampleBase<{}, {}> {
    public maskedObj: MaskedTextBoxComponent;
    public dropdownObj: DropDownListComponent;
    private blurHandler(): void {
        let valueSpan: HTMLElement = document.querySelector('#maskvalue') as HTMLElement;
        valueSpan.textContent = this.dropdownObj.value + ' ' +  this.maskedObj.value;
    }
    private handleSendClick(): void {
        let valueSpan: HTMLElement = document.querySelector('#maskvalue') as HTMLElement;
        valueSpan.textContent = this.dropdownObj.value + ' ' +  this.maskedObj.value;
    }
    render(): JSX.Element {
        return (
            <div className='control-pane'>
                <div className="col-lg-8 control-section">
                    <div className="content-wrapper">
                        <div className="mask-row">
                            <MaskedTextBoxComponent ref={(scope) => {this.maskedObj = scope}} mask='000-000-0000' promptChar='#' cssClass='e-prepend-mask' placeholder='Enter phone number' floatLabelType='Auto' prependTemplate={this.prependTemplate} appendTemplate={this.appendTemplate} blur={this.blurHandler}></MaskedTextBoxComponent>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 property-section">
                    <PropertyPane title='Properties'>
                        <table id="property" title="Properties" className="multiline-property">
                            <tbody>
                                <tr>
                                    <td className="left-side">Phone number: </td>
                                    <td>
                                        <span id="maskvalue"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </PropertyPane>
                </div>
                <div id="action-description">
                    <p>
                        This example highlights adornment support in the Syncfusion MaskedTextBox. Adornments let you place custom elements before or after the masked input by using the <code>prependTemplate</code> and <code>appendTemplate</code> properties such as prefixes, suffix labels, or action icons to provide context, guide entry, and offer quick actions, while preserving mask validation and float label behavior.
                    </p>
                </div>
                <div id="description">
                    <p>
                        This sample illustrates adornment integration in the Syncfusion MaskedTextBox via a prefixed country-code selector and a suffixed send icon. Country selection (+91, +1, +44) triggers reactive mask reconfiguration for the phone field, while preserving float-label state, input-validation invariants, and a consistent interaction model.
                    </p>
                </div>
            </div>
        );
    }
    private prependTemplate(): JSX.Element {
        return (
            <div>
                <DropDownListComponent ref={(scope) => {this.dropdownObj = scope}} value={'+91'}  dataSource={['+91', '+1', '+44']} width={'60px'} />
            </div>
        );
    }
    private appendTemplate(): JSX.Element {
        return (
            <div>
                <span className="e-input-separator"></span><span id="sendIcon" className="e-icons e-send" onClick={this.handleSendClick}></span>
            </div>
        );
    }
}
