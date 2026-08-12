"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var React = require("react");
function AIToast() {
    var toastInstance;
    function contentTemplate() {
        return (React.createElement("div", { className: 'ai-toast-content-child', style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '12px 16px',
                color: '#333',
                fontSize: '14px',
                lineHeight: '1.5',
                width: '400px'
            } },
            React.createElement("div", { style: { flex: 1, paddingRight: '8px' } },
                React.createElement("div", { style: { fontWeight: '700', fontSize: '14px', marginBottom: '6px', letterSpacing: '0.5px' } }, "Explore AI Demos"),
                "You can now explore our ",
                React.createElement("strong", null, "Smart AI demos"),
                " with limited AI token usage. Additionally, you can try out our ",
                React.createElement("strong", null,
                    React.createElement("a", { href: "https://github.com/syncfusion/smart-ai-samples/tree/master/react", target: "_blank", style: { color: '#007bff', textDecoration: 'none' } }, "Syncfusion Smart AI Samples")),
                " locally by using your own API key"),
            React.createElement("button", { onClick: function () { return toastInstance.hide(); }, style: {
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    padding: '0',
                    marginTop: '2px',
                    color: '#666'
                }, "aria-label": "Close" }, "\u2715")));
    }
    function toastCreated() {
        toastInstance.show();
    }
    return (React.createElement(ej2_react_notifications_1.ToastComponent, { className: 'ai-toast', width: 420, ref: function (toast) { return toastInstance = toast; }, content: contentTemplate, created: toastCreated.bind(this), position: { X: "Right", Y: "Top" }, timeOut: 0, newestOnTop: true }));
}
exports.default = AIToast;
;
