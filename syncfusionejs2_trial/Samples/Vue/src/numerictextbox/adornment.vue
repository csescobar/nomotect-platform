<template>
    <div>
        <div class="col-lg-12 control-section adornment-numeric">
            <div class="content-wrapper">
                <div class="row custom-margin">
                    <ejs-numerictextbox id="prepend" value="1" floatLabelType="Auto" cssClass="e-prepend-numeric" placeholder="Enter the price" :prependTemplate="'prependTemplate'" :change="onPriceChange">
                        <template v-slot:prependTemplate>
                            <ejs-dropdownlist :dataSource="items" width="60px" value="$" >
                            </ejs-dropdownlist>
                        </template>
                    </ejs-numerictextbox>
                </div>
                <div class="row custom-margin">
                    <ejs-numerictextbox id="append" value="5" floatLabelType="Auto" cssClass="e-outline" placeholder="Enter the kg" :appendTemplate="'appendTemplate'" :change="onKgChange">
                        <template v-slot:appendTemplate>
                            <span>kg</span>
                        </template>
                    </ejs-numerictextbox>
                </div>
                <div class="row custom-margin custom-margin-row">
                    <ejs-numerictextbox id="iconTemplate" value="10" floatLabelType="Auto" cssClass="e-filled" placeholder="Enter the Number" :showSpinButton="showSpinButtons" :prependTemplate="'prependIconTemplate'" :appendTemplate="'appendIconTemplate'">
                        <template v-slot:prependIconTemplate>
                            <span id="reset" class="e-icons e-reset" title="Reset"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendIconTemplate>
                            <span class="e-input-separator"></span>
                            <span id="subract" class="e-icons e-horizontal-line"></span>
                            <span class="e-input-separator"></span>
                            <span id="plus" class="e-icons e-plus"></span>
                        </template>
                    </ejs-numerictextbox>
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
    </div>
</template>

<style>
    .adornment-numeric .content-wrapper {
        width: 35% !important;
        margin: 0 auto;
        min-width: 185px;
    }
    .adornment-numeric .custom-margin {
        margin: 25px 0;
    }
    .fluent2 .adornment-numeric .custom-margin-row,
    .fluent2-dark .adornment-numeric .custom-margin-row,
    .tailwind3 .adornment-numeric .custom-margin-row,
    .tailwind3-dark .adornment-numeric .custom-margin-row,
    .fluent2-highcontrast .adornment-numeric .custom-margin-row {
        margin: 50px 0;
    }
    .adornment-numeric .e-prepend-numeric .e-prepend-template {
        padding: 0 !important;
    }
    .adornment-numeric .e-prepend-numeric .e-prepend-template .e-control-wrapper.e-ddl {
        padding-left: 10px;
    }
    .adornment-numeric .e-prepend-numeric .e-prepend-template .e-ddl-icon {
        display: none;
    }
    .adornment-numeric .e-prepend-numeric input {
        height: 32px !important;
    }
    .e-bigger .adornment-numeric .e-prepend-numeric input {
        height: 38px !important;
    }
</style>

<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        return { 
            items: [
                { text: '$' },
                { text: '€' },
                { text: '₹' }
            ],
            showSpinButtons: false
        }
    },
    components: { 
        'ejs-numerictextbox': NumericTextBoxComponent,
        'ejs-dropdownlist': DropDownListComponent
    },
    mounted: function() {
        var resetSpan = document.querySelector('#reset');
        if (resetSpan) {
            resetSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = 0;
                iconNumeric.dataBind();
            });
        }
        var subractSpan = document.querySelector('#subract');
        if (subractSpan) {
            subractSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = iconNumeric.value - 1;
                iconNumeric.dataBind();
            });
        }
        var plusSpan = document.querySelector('#plus');
        if (plusSpan) {
            plusSpan.addEventListener('click', function() {
                var iconNumeric = getComponent(document.getElementById('iconTemplate'), 'numerictextbox');
                iconNumeric.value = iconNumeric.value + 1;
                iconNumeric.dataBind();
            });
        }
    },
    methods: {
        onPriceChange: function() {
            var prependNumericObj = getComponent(document.getElementById('prepend'), 'numerictextbox');
            var appendNumericObj = getComponent(document.getElementById('append'), 'numerictextbox');
            appendNumericObj.value = prependNumericObj.value * 5;
            appendNumericObj.dataBind();
        },
        onKgChange: function() {
            var prependNumericObj = getComponent(document.getElementById('prepend'), 'numerictextbox');
            var appendNumericObj = getComponent(document.getElementById('append'), 'numerictextbox');
            prependNumericObj.value = appendNumericObj.value / 5;
            prependNumericObj.dataBind();
        }
	}
};

</script>
