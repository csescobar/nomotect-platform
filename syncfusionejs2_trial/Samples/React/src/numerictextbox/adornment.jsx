import * as React from 'react';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { SampleBase } from '../common/sample-base';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './sample.css';
export class Adornments extends SampleBase {
    prependNumericObj;
    appendNumericObj;
    iconNumericObj;
    priceChange() {
        this.appendNumericObj.value = this.prependNumericObj.value * 5;
    }
    kgChange() {
        this.prependNumericObj.value = this.appendNumericObj.value / 5;
    }
    handleResetClick() {
        this.iconNumericObj.value = 0;
    }
    handleSubractClick() {
        this.iconNumericObj.value = this.iconNumericObj.value - 1;
    }
    handlePlusClick() {
        this.iconNumericObj.value = this.iconNumericObj.value + 1;
    }
    render() {
        return (<div className='control-pane'>
            <div className="col-lg-12 control-section">
                <div className="content-wrapper sample-numeric-icon">
                    <div className="row custom-margin">
                        <NumericTextBoxComponent ref={(scope) => { this.prependNumericObj = scope; }} floatLabelType='Auto' cssClass='e-prepend-numeric' value={1} placeholder='Enter the price' prependTemplate={this.prependTemplate} change={this.priceChange}/>
                    </div>
                    <div className="row custom-margin">
                        <NumericTextBoxComponent ref={(scope) => { this.appendNumericObj = scope; }} floatLabelType='Auto' cssClass='e-outline' step={1} value={5} placeholder='Enter the kg' appendTemplate={this.appendTemplate} change={this.kgChange}/>
                    </div>
                    <div className="row custom-margin-row">
                        <NumericTextBoxComponent ref={(scope) => { this.iconNumericObj = scope; }} floatLabelType='Auto' cssClass='e-filled' placeholder='Enter the Number' value={10} showSpinButton={false} prependTemplate={this.prependIconTemplate} appendTemplate={this.appendIconTemplate}/>
                    </div>
                </div>
            </div>
            <div id="action-description">
                <p>This example highlights adornment support in the Syncfusion Numeric TextBox. Adornments let you place custom elements before or after the input by using the <code>prependTemplate</code> and <code>appendTemplate</code> properties of Numeric Textbox such as currency symbols, unit labels, dropdowns, or action icons to provide context, trigger actions, and improve input clarity and efficiency.</p>
            </div>
            <div id="description">
                <p>
                    This sample demonstrates adornment support in the Syncfusion Numeric TextBox by adding custom elements or icons before and after the input. It includes a prepended currency dropdown for price, an appended “kg” label, and icon actions to reset, decrement, or increment values, with the first two fields synchronized.
                </p>
            </div>
        </div>);
    }
    prependTemplate() {
        return (<div>
                <DropDownListComponent value={'$'} dataSource={['$', '€', '₹']} width={'60px'}/>
            </div>);
    }
    appendTemplate() {
        return (<div>
                <span>kg</span>
            </div>);
    }
    prependIconTemplate() {
        return (<div>
                <span className="e-icons e-reset" title="Reset" onClick={this.handleResetClick}></span><span className="e-input-separator"></span>
            </div>);
    }
    appendIconTemplate() {
        return (<div>
                <span className="e-input-separator"></span><span className="e-icons e-horizontal-line" onClick={this.handleSubractClick}></span><span className="e-input-separator"></span><span className="e-icons e-plus" onClick={this.handlePlusClick}></span>
            </div>);
    }
}
