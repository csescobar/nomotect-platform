<template>
    <div>
        <div class="col-lg-8 control-section adornment-mask">
            <div class="content-wrapper">
                <div class="mask-row">
                    <ejs-maskedtextbox id="maskTextbox" mask="0000-000-000" promptChar="#" floatLabelType="Auto" cssClass="e-prepend-mask" placeholder="Enter phone number" :blur="blurHandler" :prependTemplate="'prependTemplate'" :appendTemplate="'appendTemplate'">
                        <template v-slot:prependTemplate>
                            <ejs-dropdownlist id="dropdownlist" :dataSource="items" width="60px" value="+91" >
                            </ejs-dropdownlist>
                        </template>
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span id="sendIcon" class="e-icons e-send"></span>
                        </template>
                    </ejs-maskedtextbox>
                </div>
            </div>
        </div>

        <div class="col-lg-4 property-section adornment-mask">
            <table id="property" title="Properties" class="multiline-property">
                <tr>
                    <td class="left-side">Phone number: </td>
                    <td>
                        <span id="maskvalue"></span>
                    </td>
                </tr>
            </table>
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
</template>

<style>
    .adornment-mask .content-wrapper div.mask-row {
        max-width: 250px;
        margin: 0 auto;
        padding: 40px 0px 0px;
    }
    .adornment-mask .multiline-property .left-side {
        font-size: 14px;
        padding: 8px !important;
    }
    .adornment-mask .e-prepend-mask .e-prepend-template {
        padding: 0 !important;
    }
    .adornment-mask .e-prepend-mask .e-prepend-template .e-control-wrapper.e-ddl {
        padding-left: 10px;
    }
    .adornment-mask .e-prepend-mask .e-prepend-template .e-ddl-icon {
        display: none;
    }
    .adornment-mask .e-prepend-mask input {
        height: 32px !important;
    }
    .e-bigger .adornment-mask .e-prepend-mask input {
        height: 38px !important;
    }
</style>


<script>
import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return { 
            items: [
                { text: '+91' },
                { text: '+1' },
                { text: '+44' }
            ],
        }
    },
    components: { 
        'ejs-maskedtextbox': MaskedTextBoxComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    mounted: function() {
        var sendSpan = document.querySelector('#sendIcon');
        if(sendSpan) {
            sendSpan.addEventListener('click', function() {
                var maskObj = getComponent(document.getElementById('maskTextbox'), 'maskedtextbox');
                var dropdownObj = getComponent(document.getElementById('dropdownlist'), 'dropdownlist');
                var valueSpan = document.querySelector('#maskvalue');
                valueSpan.textContent = dropdownObj.value + ' ' + maskObj.value;
            });
        }
    },
    methods: {
        blurHandler: function() {
            var maskObj = getComponent(document.getElementById('maskTextbox'), 'maskedtextbox');
            var dropdownObj = getComponent(document.getElementById('dropdownlist'), 'dropdownlist');
            var valueSpan = document.querySelector('#maskvalue');
            valueSpan.textContent = dropdownObj.value + ' ' + maskObj.value;
        },
	}
};

</script>
