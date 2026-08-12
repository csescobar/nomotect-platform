/**
 * Sample for Textarea adornments functionalities.
 */
this.default = function () {
    var textArea = new ej.inputs.TextArea({
        placeholder: 'Edit the Textarea',
        cssClass: 'e-outline',
        floatLabelType: 'Auto',
        appendTemplate: '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>',
        prependTemplate: '<span class="e-icons e-bold"></span><span class="e-input-separator"></span><span class="e-icons e-italic"></span><span class="e-input-separator"></span>'
    });
    textArea.appendTo('#icontemplate');

    var flowHortRadiobtn = new ej.buttons.RadioButton({ label: 'Horizontal', value: 'Horizontal', name: 'flow', checked: true, change: function(args) {
        textArea.adornmentFlow = args.value;
        textArea.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
        textArea.dataBind();
    }});
    flowHortRadiobtn.appendTo('#flow-horizontal');

    var flowVertRadiobtn = new ej.buttons.RadioButton({ label: 'Vertical', value: 'Vertical', name: 'flow', change: function(args) {
        textArea.adornmentFlow = args.value;
        textArea.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
        textArea.dataBind();
    }});
    flowVertRadiobtn.appendTo('#flow-vertical');

    var orentHortRadiobtn = new ej.buttons.RadioButton({ label: 'Horizontal', value: 'Horizontal', name: 'orientation', checked: true, change: function(args) {
        textArea.adornmentOrientation = args.value;
        textArea.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
        textArea.dataBind();
    }});
    orentHortRadiobtn.appendTo('#orient-horizontal');

    var orentVertRadiobtn = new ej.buttons.RadioButton({ label: 'Vertical', value: 'Vertical', name: 'orientation', change: function(args) {
        textArea.adornmentOrientation = args.value;
        textArea.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
        textArea.dataBind();
    } });
    orentVertRadiobtn.appendTo('#orient-vertical');
};