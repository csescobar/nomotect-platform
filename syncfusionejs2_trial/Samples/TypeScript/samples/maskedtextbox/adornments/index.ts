import { enableRipple } from '@syncfusion/ej2-base';
enableRipple((window as any).ripple);

import { MaskedTextBox } from '@syncfusion/ej2-inputs';


    
    let maskObj: MaskedTextBox = new MaskedTextBox({
        mask: "0000-000-000",
        promptChar: '#',
        placeholder: "Enter phone number",
        floatLabelType: "Auto",
        prependTemplate: '<span id="user" class="e-icons e-user" title="User"></span><span class="e-input-separator"></span>',
        appendTemplate: '<span class="e-input-separator"></span><span id="sendIcon" class="e-icons e-send"></span>'
    });
    maskObj.appendTo('#mask');
