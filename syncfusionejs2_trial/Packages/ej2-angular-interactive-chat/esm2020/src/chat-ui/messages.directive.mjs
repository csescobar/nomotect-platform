import { Directive, ContentChildren } from '@angular/core';
import { ComplexBase, ArrayBase, setValue } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
let input = ['attachedFile', 'author', 'id', 'isForwarded', 'isPinned', 'mentionUsers', 'replyTo', 'status', 'text', 'timeStamp', 'timeStampFormat'];
let outputs = [];
/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui>
 *   <e-messages>
 *     <e-message>
 *     </e-message>
 *    </e-messages>
 * </ejs-chatui>
 * ```
 */
export class MessageDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs);
        this.directivePropList = input;
    }
}
MessageDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MessageDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
MessageDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MessageDirective, selector: "ejs-chatui>e-messages>e-message", inputs: { attachedFile: "attachedFile", author: "author", id: "id", isForwarded: "isForwarded", isPinned: "isPinned", mentionUsers: "mentionUsers", replyTo: "replyTo", status: "status", text: "text", timeStamp: "timeStamp", timeStampFormat: "timeStampFormat" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MessageDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chatui>e-messages>e-message',
                    inputs: input,
                    outputs: outputs,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Message Array Directive
 * @private
 */
export class MessagesDirective extends ArrayBase {
    constructor() {
        super('messages');
    }
}
MessagesDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MessagesDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
MessagesDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: MessagesDirective, selector: "ejs-chatui>e-messages", queries: [{ propertyName: "children", predicate: MessageDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: MessagesDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-chatui>e-messages',
                    queries: {
                        children: new ContentChildren(MessageDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NoYXQtdWkvbWVzc2FnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7QUFJaEYsSUFBSSxLQUFLLEdBQWEsQ0FBQyxjQUFjLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztBQUMvSixJQUFJLE9BQU8sR0FBYSxFQUFFLENBQUM7QUFDM0I7Ozs7Ozs7Ozs7R0FVRztBQVNILE1BQU0sT0FBTyxnQkFBaUIsU0FBUSxXQUE2QjtJQTBFL0QsWUFBb0IsZ0JBQWlDO1FBQ2pELEtBQUssRUFBRSxDQUFDO1FBRFEscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFpQjtRQUVqRCxRQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztJQUNuQyxDQUFDOzs2R0EvRVEsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFSNUIsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsaUNBQWlDO29CQUMzQyxNQUFNLEVBQUUsS0FBSztvQkFDYixPQUFPLEVBQUUsT0FBTztvQkFDaEIsT0FBTyxFQUFFLEVBRVI7aUJBQ0o7O0FBbUZEOzs7R0FHRztBQU9ILE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUE0QjtJQUMvRDtRQUNJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN0QixDQUFDOzs4R0FIUSxpQkFBaUI7a0dBQWpCLGlCQUFpQixzRkFIUSxnQkFBZ0I7MkZBR3pDLGlCQUFpQjtrQkFON0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxPQUFPLEVBQUU7d0JBQ0wsUUFBUSxFQUFFLElBQUksZUFBZSxDQUFDLGdCQUFnQixDQUFDO3FCQUNsRDtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgQ29udGVudENoaWxkcmVuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21wbGV4QmFzZSwgQXJyYXlCYXNlLCBzZXRWYWx1ZSB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1hbmd1bGFyLWJhc2UnO1xuXG5cblxubGV0IGlucHV0OiBzdHJpbmdbXSA9IFsnYXR0YWNoZWRGaWxlJywgJ2F1dGhvcicsICdpZCcsICdpc0ZvcndhcmRlZCcsICdpc1Bpbm5lZCcsICdtZW50aW9uVXNlcnMnLCAncmVwbHlUbycsICdzdGF0dXMnLCAndGV4dCcsICd0aW1lU3RhbXAnLCAndGltZVN0YW1wRm9ybWF0J107XG5sZXQgb3V0cHV0czogc3RyaW5nW10gPSBbXTtcbi8qKlxuICogUmVwcmVzZW50cyB0aGUgRXNzZW50aWFsIEpTIDIgQW5ndWxhciBDaGF0VUkgQ29tcG9uZW50LlxuICogYGBgaHRtbFxuICogPGVqcy1jaGF0dWk+IFxuICogICA8ZS1tZXNzYWdlcz5cbiAqICAgICA8ZS1tZXNzYWdlPlxuICogICAgIDwvZS1tZXNzYWdlPlxuICogICAgPC9lLW1lc3NhZ2VzPlxuICogPC9lanMtY2hhdHVpPlxuICogYGBgXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnZWpzLWNoYXR1aT5lLW1lc3NhZ2VzPmUtbWVzc2FnZScsXG4gICAgaW5wdXRzOiBpbnB1dCxcbiAgICBvdXRwdXRzOiBvdXRwdXRzLCAgICBcbiAgICBxdWVyaWVzOiB7XG5cbiAgICB9XG59KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEaXJlY3RpdmUgZXh0ZW5kcyBDb21wbGV4QmFzZTxNZXNzYWdlRGlyZWN0aXZlPiB7XG4gICAgcHVibGljIGRpcmVjdGl2ZVByb3BMaXN0OiBhbnk7XG5cdFxuXG5cbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBsaXN0IG9mIGZpbGVzIGF0dGFjaGVkIHdpdGhpbiB0aGUgQ2hhdCBVSS4gXG4gICAgICogVGhpcyBwcm9wZXJ0eSBhY2NlcHRzIGFuIGFycmF5IG9mIEZpbGVJbmZvIG9iamVjdHMgdGhhdCByZXByZXNlbnQgdGhlIGZpbGVzIHRvIGJlIGF0dGFjaGVkLiBcbiAgICAgKiBCeSBwcm92aWRpbmcgdGhlc2UgZmlsZXMsIHRoZXkgd2lsbCBiZSByZW5kZXJlZCBkdXJpbmcgdGhlIGluaXRpYWwgcmVuZGVyaW5nIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBhdHRhY2hlZEZpbGU6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBhdXRob3Igb2YgdGhlIG1lc3NhZ2UgaW4gdGhlIENoYXQgVUkgY29tcG9uZW50LiBcbiAgICAgKiBUaGlzIHByb3BlcnR5IHJlZmVyZW5jZXMgYSBgVXNlck1vZGVsYCBvYmplY3QgdGhhdCBjb250YWlucyBkZXRhaWxzIGFib3V0IHRoZSB1c2VyIHdobyBzZW50IHRoZSBtZXNzYWdlLlxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cbiAgICBwdWJsaWMgYXV0aG9yOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB0aGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIGVhY2ggbWVzc2FnZSBzZW50IGluIHRoZSBDaGF0IFVJIGNvbXBvbmVudC4gXG4gICAgICogUmVwcmVzZW50cyBhIHN0cmluZyB0aGF0IHVuaXF1ZWx5IGlkZW50aWZpZXMgYSBtZXNzYWdlIGZvciB0cmFja2luZyBhbmQgbWFuYWdpbmcgaW5kaXZpZHVhbCBtZXNzYWdlcyB3aXRoaW4gdGhlIGNoYXQuXG4gICAgICogQGRlZmF1bHQgJycnXG4gICAgICovXG4gICAgcHVibGljIGlkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFNwZWNpZmllcyB3aGV0aGVyIHRoZSBtZXNzYWdlIGhhcyBiZWVuIGZvcndhcmRlZC4gXG4gICAgICogV2hlbiBzZXQgdG8gdHJ1ZSwgdGhlIG1lc3NhZ2UgaXMgdmlzdWFsbHkgbWFya2VkIGFzIGZvcndhcmRlZC5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHB1YmxpYyBpc0ZvcndhcmRlZDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgd2hldGhlciB0aGUgbWVzc2FnZSBpcyBwaW5uZWQuIFxuICAgICAqIFdoZW4gc2V0IHRvIHRydWUsIHRoZSBtZXNzYWdlIHdpbGwgYmUgdmlzdWFsbHkgaGlnaGxpZ2h0ZWQgYW5kIGNhbiBhcHBlYXIgaW4gdGhlIHBpbm5lZCBtZXNzYWdlcyBzZWN0aW9uLlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgcHVibGljIGlzUGlubmVkOiBhbnk7XG4gICAgLyoqIFxuICAgICAqIFJlcHJlc2VudHMgYW4gYXJyYXkgb2YgdXNlcnMgbWVudGlvbmVkIGluIHRoZSBtZXNzYWdlLiBcbiAgICAgKiBUaGlzIGZpZWxkIGNvbnRhaW5zIHRoZSBsaXN0IG9mIHVzZXJzIHJlZmVyZW5jZWQgdmlhIHRoZSBAbWVudGlvbiBmZWF0dXJlIGluIHRoZSBtZXNzYWdlIHRleHQsIHBvcHVsYXRlZCB3aGVuIG1lbnRpb25zIGFyZSBzZWxlY3RlZCBmcm9tIHRoZSBzdWdnZXN0aW9uIHBvcHVwLiBcbiAgICAgKiBUaGUgZmllbGQgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIGFuIGVtcHR5IGFycmF5IGlmIG5vIG1lbnRpb25zIGFyZSBpbmNsdWRlZCBpbiB0aGUgbWVzc2FnZS5cbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuICAgIHB1YmxpYyBtZW50aW9uVXNlcnM6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIG1lc3NhZ2Ugd2hlbiB0aGlzIG1lc3NhZ2UgaXMgYSByZXBseS4gXG4gICAgICogQ29udGFpbnMgdGhlIGBNZXNzYWdlUmVwbHlNb2RlbGAgb2YgdGhlIG1lc3NhZ2UgYmVpbmcgcmVwbGllZCB0by5cbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG4gICAgcHVibGljIHJlcGx5VG86IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBzdGF0dXMgb2YgdGhlIG1lc3NhZ2UgaW4gdGhlIENoYXQgVUkgY29tcG9uZW50LiBcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbWVzc2FnZSwgc3VjaCBhcyBzZW50LCByZWNlaXZlZCwgb3IgcmVhZC4gSXQgaGVscHMgaW4gdHJhY2tpbmcgdGhlIG1lc3NhZ2VzIHdpdGhpbiB0aGUgY2hhdCBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0dXM6IGFueTtcbiAgICAvKiogXG4gICAgICogUmVwcmVzZW50cyB0aGUgY29udGVudCBvZiB0aGUgbWVzc2FnZSBzZW50IGJ5IGEgdXNlciBpbiB0aGUgQ2hhdCBVSSBjb21wb25lbnQuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdGV4dDogYW55O1xuICAgIC8qKiBcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHRpbWVzdGFtcCBvZiB3aGVuIHRoZSBtZXNzYWdlIHdhcyBzZW50LiBcbiAgICAgKiBUaGlzIHByb3BlcnR5IGhvbGRzIGEgYERhdGVgIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGV4YWN0IHRpbWUgdGhlIG1lc3NhZ2Ugd2FzIGNyZWF0ZWQsIHByb3ZpZGluZyBjb250ZXh0IHRvIHRoZSBjb252ZXJzYXRpb24gZmxvdy5cbiAgICAgKiBAZGVmYXVsdCAnJ1xuICAgICAqL1xuICAgIHB1YmxpYyB0aW1lU3RhbXA6IGFueTtcbiAgICAvKiogXG4gICAgICogU3BlY2lmaWVzIHRoZSBmb3JtYXQgb2YgdGhlIHRpbWVzdGFtcCBmb3IgZGlzcGxheWluZyB0aGUgbWVzc2FnZSdzIHNlbmRpbmcgdGltZS4gXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGZvcm1hdCBpcyBzZXQgYmFzZWQgb24gdGhlIGN1bHR1cmUgb2YgdGhlIGFwcGxpY2F0aW9uLiBcbiAgICAgKiBZb3UgY2FuIGN1c3RvbWl6ZSB0aGUgZm9ybWF0IHVzaW5nIGEgc3BlY2lmaWMgcGF0dGVybiwgc3VjaCBhcyBcIidkZC9NTS95eXl5IGhoOm1tJ1wiIGluIHN0cmluZyBmb3JtYXQuXG4gICAgICogQGRlZmF1bHQgJydcbiAgICAgKi9cbiAgICBwdWJsaWMgdGltZVN0YW1wRm9ybWF0OiBhbnk7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6Vmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBzZXRWYWx1ZSgnY3VycmVudEluc3RhbmNlJywgdGhpcywgdGhpcy52aWV3Q29udGFpbmVyUmVmKTtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cyhvdXRwdXRzKTtcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVQcm9wTGlzdCA9IGlucHV0O1xuICAgIH1cbn1cblxuLyoqXG4gKiBNZXNzYWdlIEFycmF5IERpcmVjdGl2ZVxuICogQHByaXZhdGVcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdlanMtY2hhdHVpPmUtbWVzc2FnZXMnLFxuICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgY2hpbGRyZW46IG5ldyBDb250ZW50Q2hpbGRyZW4oTWVzc2FnZURpcmVjdGl2ZSlcbiAgICB9LFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlc0RpcmVjdGl2ZSBleHRlbmRzIEFycmF5QmFzZTxNZXNzYWdlc0RpcmVjdGl2ZT4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignbWVzc2FnZXMnKTtcbiAgICB9XG59Il19