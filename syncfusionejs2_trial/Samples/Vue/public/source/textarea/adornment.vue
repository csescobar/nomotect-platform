<template>
    <div>
        <div class="col-lg-8 control-section adornment-textarea">
            <div class="content-wrapper">
                <div class="multiline-row">
                    <ejs-textarea id="iconTextarea" floatLabelType="Auto" cssClass="e-outline" placeholder="Edit the Textarea" :prependTemplate="'prependTemplate'" :appendTemplate="'appendTemplate'">
                        <template v-slot:prependTemplate>
                            <span class="e-icons e-bold"></span>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-italic"></span>
                            <span class="e-input-separator"></span>
                        </template>
                        <template v-slot:appendTemplate>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-save"></span>
                            <span class="e-input-separator"></span>
                            <span class="e-icons e-trash"></span>
                        </template>
                    </ejs-textarea>
                </div>
            </div>
        </div>  

        <div class="col-lg-4 property-section adornment-textarea">
            <table id="property" title="Properties" class="multiline-property">
                <tr>
                    <td class="left-side">Flow Direction</td>
                    <td>
                        <div>
                            <ejs-radiobutton label='Horizontal' value='Horizontal' name='flow' checked="true" :change="onHortFlowChange"></ejs-radiobutton>
                            <ejs-radiobutton label='Vertical' value='Vertical' name='flow' :change="onVertFlowChange"></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="left-side">Orientation Direction</td>
                    <td>
                        <div>
                            <ejs-radiobutton label='Horizontal' value='Horizontal' name='orientation' checked="true" :change="onHortOrentChange"></ejs-radiobutton>
                            <ejs-radiobutton label='Vertical' value='Vertical' name='orientation' :change="onVertOrentChange"></ejs-radiobutton>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <div id="action-description">
            <p>This example demonstrates the adornments enhance a textarea with prefix/suffix elements, icons, text, or buttons that provide context or quick actions. Flow and orientation can be configured for horizontal or vertical layouts.</p>
        </div>
        <div id="description">
            <p>
                This sample showcases TextArea adornments using <code>prependTemplate</code> and <code>appendTemplate</code> to add bold/italic (prefix) and save/delete (suffix) icons. Radio buttons let you switch <code>adornmentFlow</code> and <code>adornmentOrientation</code> between Horizontal and Vertical, and the layout updates dynamically via dataBind.
            </p>
        </div>
    </div>
</template>

<style>
    .adornment-textarea .content-wrapper div.multiline-row {
        max-width: 250px;
        margin: 0 auto;
        padding: 40px 0px 0px;
    }
    .adornment-textarea .multiline-property .left-side {
        font-size: 14px;
        padding: 8px;
    }
    .adornment-textarea.control-section {
        padding-top: 0 !important;
    }
    .adornment-textarea .multiline-property div {
        padding: 10px !important;
    }
</style>


<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';
import { RadioButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { getComponent } from '@syncfusion/ej2-base';

export default {
    data: function() {
        
    },
    components: { 
        'ejs-textarea': TextAreaComponent,
        'ejs-radiobutton': RadioButtonComponent
    },
    mounted: function() {
        
    },
    methods: {
        onHortFlowChange: function(args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentFlow = args.value;
            textAreaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textAreaObj.dataBind();
        },
        onVertFlowChange: function(args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentFlow = args.value;
            textAreaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            textAreaObj.dataBind();
        },
        onHortOrentChange: function(args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentOrientation = args.value;
            textAreaObj.appendTemplate = '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>';
            textAreaObj.dataBind();
        },
        onVertOrentChange: function(args) {
            var textAreaObj = getComponent(document.getElementById('iconTextarea'), 'textarea');
            textAreaObj.adornmentOrientation = args.value;
            textAreaObj.appendTemplate = '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            textAreaObj.dataBind();
        }
	}
};

</script>
