ej.base.enableRipple(window.ripple)
/**
 *  Adornments TextBox sample
 */

    var prependTextbox = new ej.inputs.TextBox({
        placeholder: 'Enter your Name',
        floatLabelType: 'Auto',
        cssClass: 'e-prepend-textbox',
        prependTemplate: '<span class="e-icons e-user"></span><span class="e-input-separator"></span>',
    });
    prependTextbox.appendTo('#prepend');

    var appendTextbox = new ej.inputs.TextBox({
        placeholder: 'Password',
        floatLabelType: 'Auto',
        cssClass: 'e-eye-icon',
        appendTemplate: '<span class="e-input-separator"></span><span id="text-icon" class="e-icons e-eye"></span>',
        created: function() {
            var textIcon = document.querySelector('#text-icon');
            if (textIcon) {
                textIcon.addEventListener('click', function() {
                    if (appendTextbox.type === 'text') {
                        appendTextbox.type = 'Password';
                        textIcon.className = 'e-icons e-eye-slash';
                    } else {
                        appendTextbox.type = 'text';
                        textIcon.className = 'e-icons e-eye';
                    }
                    appendTextbox.dataBind();
                });
            }
        }
    });
    appendTextbox.appendTo('#append');

    var iconTextbox = new ej.inputs.TextBox({
        placeholder: 'Enter the Mail Address',
        floatLabelType: 'Auto',
        cssClass: 'e-icon-textbox',
        prependTemplate: '<span class="e-icons e-people"></span><span class="e-input-separator"></span>',
        appendTemplate: '<span>.com</span><span class="e-input-separator"></span><span id="delete-text" class="e-icons e-trash"></span>',
        created: function() {
            var deleteIcon = document.querySelector('#delete-text');
            if (deleteIcon) {
                deleteIcon.addEventListener('click', function() {
                    iconTextbox.value = '';
                    iconTextbox.dataBind();
                });
            }
        }
    });
    iconTextbox.appendTo('#iconTextbox');

