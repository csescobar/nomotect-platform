import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { updateSampleSection } from '../common/sample-base';
import { PropertyPane } from '../common/property-pane';
import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './sample.css';
const Adornments = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const maskTextboxObj = useRef(null);
    const dropdownObj = useRef(null);
    const [customValue, setCustomValue] = useState('');
    const blurHandler = () => {
        setCustomValue(dropdownObj.current.value + ' ' + maskTextboxObj.current.value);
    };
    const prependTemplate = () => {
        return (<>
            <DropDownListComponent ref={dropdownObj} value={'+91'} dataSource={['+91', '+1', '+44']} width={'60px'}/>
        </>);
    };
    const appendTemplate = () => {
        const sendClick = () => {
            setCustomValue(dropdownObj.current.value + ' ' + maskTextboxObj.current.value);
        };
        return (<>
            <span className="e-input-separator"></span><span id="sendIcon" className="e-icons e-send" onClick={sendClick}></span>
        </>);
    };
    return (<div className='control-pane'>
            <div className="col-lg-8 control-section">
                <div className="content-wrapper">
                    <div className="mask-row">
                        <MaskedTextBoxComponent ref={maskTextboxObj} mask='000-000-0000' promptChar='#' cssClass='e-prepend-mask' placeholder='Enter phone number' floatLabelType='Auto' prependTemplate={prependTemplate} appendTemplate={appendTemplate} blur={blurHandler}></MaskedTextBoxComponent>
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
                                    <span id="maskvalue">{customValue}</span>
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
        </div>);
};
export default Adornments;
