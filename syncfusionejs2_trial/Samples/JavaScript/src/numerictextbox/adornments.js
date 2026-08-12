this.default = function () {
    var prependNumeric = new ej.inputs.NumericTextBox({
        floatLabelType: "Auto",
        value: 1,
        placeholder: 'Enter the price',
        prependTemplate: '<span id="menu" class="e-icons e-menu" title="Menu"></span><span class="e-input-separator"></span><span id="search" class="e-icons e-search" title="Search"></span><span class="e-input-separator"></span>',
        change: function() {
            appendNumeric.value = prependNumeric.value * 5;
            appendNumeric.dataBind();
        }
    });
    prependNumeric.appendTo('#prepend');
    var appendNumeric = new ej.inputs.NumericTextBox({
        placeholder: 'Enter the kg',
        step: 1,
        value: 5,
        floatLabelType: "Auto",
        appendTemplate: '<span>kg</span>',
        change: function() {
            prependNumeric.value = appendNumeric.value / 5;
            prependNumeric.dataBind();
        }
    });
    appendNumeric.appendTo('#append');
    var iconNumeric = new ej.inputs.NumericTextBox({
        floatLabelType: "Auto",
        placeholder: 'Enter the Number',
        value: 10,
        showSpinButton: false,
        prependTemplate: '<span id="reset" class="e-icons e-reset" title="Reset"></span><span class="e-input-separator"></span>',
        appendTemplate: '<span class="e-input-separator"></span><span id="subract" class="e-icons e-horizontal-line"></span><span class="e-input-separator"></span><span id="plus" class="e-icons e-plus"></span>',
        created: function() {
            var resetSpan = document.querySelector('#reset');
            if (resetSpan) {
                resetSpan.addEventListener('click', function() {
                    iconNumeric.value = null;
                    iconNumeric.dataBind();
                });
            }
            var subractSpan = document.querySelector('#subract');
            if (subractSpan) {
                subractSpan.addEventListener('click', function() {
                    iconNumeric.value = iconNumeric.value - 1;
                    iconNumeric.dataBind();
                });
            }
            var plusSpan = document.querySelector('#plus');
            if (plusSpan) {
                plusSpan.addEventListener('click', function() {
                    iconNumeric.value = iconNumeric.value + 1;
                    iconNumeric.dataBind();
                });
            }
        }
    });
    iconNumeric.appendTo('#icontemplate');
};