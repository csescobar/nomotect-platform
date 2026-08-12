import { loadCultureFiles } from '../common/culture-loader';
import { OtpInput } from "@syncfusion/ej2/inputs";
import { ProgressButton } from '@syncfusion/ej2/splitbuttons';
import { Toast } from '@syncfusion/ej2/notifications';

(window as any).default = (): void => {
    loadCultureFiles();

    let basic: OtpInput = new OtpInput({
        input: () => {
            (basic.value.toString().length == 4) ? progress.click() : basic.cssClass = 'e-warning';
        }
    });
    basic.appendTo('#basicOtp');

    let progress: ProgressButton = new ProgressButton({
        content: "Validate",
        enableProgress: true,
        duration: 1500,
        animationSettings: {
            effect: 'ZoomOut',
            duration: 10,
            easing: 'linear'
        },
        spinSettings: {
            position: 'Center'
        },
        end: () => {
            Validate();
        }
    });
    progress.appendTo('#validate');

    let otpMessagevalue: number = Math.floor(Math.random() * 8999 + 1000);
    let toast: Toast = new Toast({
        content: 'Please use the OTP: ' + otpMessagevalue + ' to continue.',
        title: 'Verification code',
        height: 100,
        width: 270,
        position: { X: 'Right', Y: 'Top' },
        timeOut: 0,
        showCloseButton: true,
        target: '.control-section'
    });
    toast.appendTo('#otp-message');
    toast.show();

    let resend: HTMLElement = document.getElementById('resendBtn');
    resend.addEventListener('click', () => {
        toast.hide('All');
        otpMessagevalue = Math.floor(Math.random() * 8999 + 1000);
        toast.content = 'Please use the OTP: ' + otpMessagevalue + ' to continue.';
        toast.show();
        basic.cssClass='';
        basic.value = '';
        progress.disabled = false;
    });

    function Validate() {
        if (basic.value == otpMessagevalue) {
            basic.cssClass = 'e-success';
            toast.hide('All');
            progress.disabled = true;
        }
        else { basic.cssClass = 'e-error'; }
    }
};
