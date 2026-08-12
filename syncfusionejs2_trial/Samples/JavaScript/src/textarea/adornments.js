/**
 * Sample for Textarea adornments functionalities.
 */
this.default = function () {
    var textArea = new ej.inputs.TextArea({
        placeholder: 'Add a comment',
        cssClass: 'e-outline',
        resizeMode: 'None',
        floatLabelType: 'Auto',
        appendTemplate: '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>',
        prependTemplate: '<span class="e-icons e-bold"></span><span class="e-input-separator"></span><span class="e-icons e-italic"></span><span class="e-input-separator"></span>'
    });
    textArea.appendTo('#icontemplate');

    var flowOrientationList = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function() {
            textArea.adornmentFlow = flowOrientationList.value;
            textArea.appendTemplate = (flowOrientationList.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textArea.dataBind();
        }
    });
    flowOrientationList.appendTo('#flow-orientation');

    var orientOrientationList = new ej.dropdowns.DropDownList({
        index: 0,
        popupHeight: '200px',
        change: function() {
            textArea.adornmentOrientation = orientOrientationList.value;
            textArea.appendTemplate = (orientOrientationList.value === 'Horizontal') ?
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>' :
                '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textArea.dataBind();
        }
    });
    orientOrientationList.appendTo('#orient-orientation');
};