import * as React from 'react';
import { useRef, useEffect } from 'react';
import { updateSampleSection } from '../common/sample-base';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './sample.css';
const Adornments = () => {
    useEffect(() => {
        updateSampleSection();
    }, []);
    const appendTextboxObj = useRef(null);
    const iconTextboxObj = useRef(null);
    const prependTemplate = () => {
        return (<>
            <DropDownListComponent value={'Mr.'} dataSource={['Mr.', 'Mrs.']} width={'65px'}/>
        </>);
    };
    const appendTemplate = () => {
        const handleClick = (e) => {
            let textIcon = e.target;
            if (textIcon) {
                if (appendTextboxObj.current.type === 'text') {
                    appendTextboxObj.current.type = 'Password';
                    textIcon.className = 'e-icons e-eye-slash';
                }
                else {
                    appendTextboxObj.current.type = 'text';
                    textIcon.className = 'e-icons e-eye';
                }
            }
        };
        return (<>
            <span className="e-input-separator"></span><span id="text-icon" className="e-icons e-eye" onClick={handleClick}></span>
        </>);
    };
    const prependIconTemplate = () => {
        return (<>
            <span className="e-icons e-user"></span><span className="e-input-separator"></span>
        </>);
    };
    const appendIconTemplate = () => {
        const handleDeleteClick = () => {
            iconTextboxObj.current.value = '';
        };
        return (<>
            <span>.com</span><span className="e-input-separator"></span><span className="e-icons e-trash" onClick={handleDeleteClick}></span>
        </>);
    };
    return (<div className='control-pane'>
        <div className='col-lg-12 control-section adornment-textbox'>
            <div className="content-wrapper sample-icon">
                <div className="row">
                    <TextBoxComponent placeholder="Enter your Name" cssClass="e-prepend-textbox" floatLabelType="Auto" prependTemplate={prependTemplate}/>
                </div>
                <div className="row">
                    <TextBoxComponent ref={appendTextboxObj} placeholder="Password" cssClass="e-outline" floatLabelType="Auto" appendTemplate={appendTemplate}/>
                </div>
                <div className="row">
                    <TextBoxComponent ref={iconTextboxObj} placeholder="Enter the Mail Address" cssClass="e-outline e-icon-textbox" floatLabelType="Auto" prependTemplate={prependIconTemplate} appendTemplate={appendIconTemplate}/>
                </div>
            </div>
        </div>
        <div id="action-description">
            <p> This example demonstrates the adornment capabilities of the Syncfusion TextBox component. Adornments are custom elements that can be added by using the <code>prependTemplate</code> and <code>appendTemplate</code> properties of the textbox to provide additional functionality or visual cues. This feature allows for enhanced user interaction, such as a dropdown for prefixes or clickable icons to toggle password visibility or clear input.</p>
        </div>
        <div id="description">
            <p>This sample demonstrates the adornment feature of the Syncfusion React TextBox, showcasing how to integrate custom elements or icons at both the beginning and end of the input field</p>
            <ul>
                <li>The first textbox illustrates a prepended dropdown for selecting titles (Mr., Mrs.).</li>
                <li>The second textbox features an appended eye icon, allowing users to toggle password visibility.</li>
                <li>The third textbox combines a prepended user icon with an appended ".com" text and a trash icon that clears the input when clicked.</li>
            </ul>
            <p>These examples highlight the flexibility and enhanced user experience provided by TextBox adornments.</p>
        </div>
    </div>);
};
export default Adornments;
