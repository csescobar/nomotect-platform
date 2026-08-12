import { loadCultureFiles } from '../common/culture-loader';
import { AdornmentsDirection, TextArea } from '@syncfusion/ej2-inputs';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

/**
 *   Adornments TextArea sample
 */
(window as any).default = (): void => {
    loadCultureFiles();
    let textArea: TextArea = new TextArea({
        placeholder: 'Edit the Textarea',
        cssClass: 'e-outline',
        floatLabelType: 'Auto',
        appendTemplate: '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>',
        prependTemplate: '<span class="e-icons e-bold"></span><span class="e-input-separator"></span><span class="e-icons e-italic"></span><span class="e-input-separator"></span>'
    });
    textArea.appendTo('#icontemplate');

    let flowOrientationList: DropDownList = new DropDownList({
        index: 0,
        popupHeight: '200px',
        change: () => {
            const val = flowOrientationList.value as AdornmentsDirection;
            textArea.adornmentFlow = val;
            textArea.appendTemplate = (val === 'Horizontal')
                ? '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>'
                : '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            textArea.dataBind();
        }
    });
    flowOrientationList.appendTo('#flow-orientation');

    let orientOrientationList: DropDownList = new DropDownList({
        index: 0,
        popupHeight: '200px',
        change: () => {
            const val = orientOrientationList.value as AdornmentsDirection;
            textArea.adornmentOrientation = val;
            textArea.appendTemplate = (val === 'Horizontal')
                ? '<span class="e-input-separator"></span><span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span>'
                : '<span class="e-icons e-save"></span><span class="e-input-separator"></span><span class="e-icons e-trash"></span><span class="e-input-separator"></span>';
            textArea.dataBind();
        }
    });
    orientOrientationList.appendTo('#orient-orientation');
};