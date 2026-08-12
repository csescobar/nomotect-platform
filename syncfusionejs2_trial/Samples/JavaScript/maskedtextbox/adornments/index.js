ej.base.enableRipple(window.ripple)

    var countryLabel;
    var maskObj = new ej.inputs.MaskedTextBox({
        mask: "0000-000-000",
        promptChar: '#',
        placeholder: "Enter phone number",
        floatLabelType: "Auto",
        prependTemplate: '<span id="user" class="e-icons e-user" title="User"></span><span class="e-input-separator"></span>',
        appendTemplate: '<span class="e-input-separator"></span><span id="sendIcon" class="e-icons e-send"></span>'
    });
    maskObj.appendTo('#mask');
