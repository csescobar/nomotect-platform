import * as i0 from '@angular/core';
import { Directive, ContentChildren, Component, ChangeDetectionStrategy, ContentChild, NgModule } from '@angular/core';
import { ComplexBase, setValue, ArrayBase, ComponentBase, Template, ComponentMixins } from '@syncfusion/ej2-angular-base';
import { __decorate } from 'tslib';
import { AIAssistView, AssistThinking, ChatUI, InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
export * from '@syncfusion/ej2-interactive-chat';
import { CommonModule } from '@angular/common';

let input$1 = ['iconCss', 'name', 'type', 'viewTemplate'];
let outputs$4 = [];
/**
 * Represents the Essential JS 2 Angular AIAssistView Component.
 * ```html
 * <ejs-aiassistview>
 *   <e-views>
 *     <e-view>
 *      </e-view>
 *    </e-views>
 * </ejs-aiassistview>
 * ```
 */
class ViewDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$4);
        this.directivePropList = input$1;
    }
}
ViewDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewDirective, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Directive });
ViewDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ViewDirective, selector: "ejs-aiassistview>e-views>e-view", inputs: { iconCss: "iconCss", name: "name", type: "type", viewTemplate: "viewTemplate" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-aiassistview>e-views>e-view',
                    inputs: input$1,
                    outputs: outputs$4,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * View Array Directive
 * @private
 */
class ViewsDirective extends ArrayBase {
    constructor() {
        super('views');
    }
}
ViewsDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewsDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ViewsDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.3", type: ViewsDirective, selector: "ejs-aiassistview>e-views", queries: [{ propertyName: "children", predicate: ViewDirective }], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ViewsDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ejs-aiassistview>e-views',
                    queries: {
                        children: new ContentChildren(ViewDirective)
                    },
                }]
        }], ctorParameters: function () { return []; } });

const inputs$2 = ['activeView', 'attachmentSettings', 'bannerTemplate', 'blockTemplate', 'cssClass', 'enableAttachments', 'enablePersistence', 'enableRtl', 'enableScrollToBottom', 'enableStreaming', 'footerTemplate', 'footerToolbarSettings', 'height', 'itemTemplate', 'locale', 'prompt', 'promptIconCss', 'promptItemTemplate', 'promptPlaceholder', 'promptSuggestionItemTemplate', 'promptSuggestions', 'promptSuggestionsHeader', 'promptToolbarSettings', 'prompts', 'responseIconCss', 'responseItemTemplate', 'responseToolbarSettings', 'showClearButton', 'showHeader', 'speechToTextSettings', 'textToSpeechSettings', 'toolbarSettings', 'views', 'width'];
const outputs$3 = ['attachmentRemoved', 'attachmentUploadFailure', 'attachmentUploadSuccess', 'beforeAttachmentUpload', 'created', 'editableContextClicked', 'promptChanged', 'promptRequest', 'stopRespondingClick', 'promptChange'];
const twoWays$2 = ['prompt'];
/**
 * Represents the Essential JS 2 Angular AIAssistView Component.
 * ```html
 * <ejs-aiassistview></ejs-aiassistview>
 * ```
 */
let AIAssistViewComponent = class AIAssistViewComponent extends AIAssistView {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['views'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try {
            let mod = this.injector.get('Interactive-ChatAssistThinking');
            if (this.injectedModules.indexOf(mod) === -1) {
                this.injectedModules.push(mod);
            }
        }
        catch { }
        this.registerEvents(outputs$3);
        this.addTwoWay.call(this, twoWays$2);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childViews;
        this.containerContext.ngAfterContentChecked(this);
    }
};
AIAssistViewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
AIAssistViewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: AIAssistViewComponent, selector: "[ejs-aiassistview], ejs-aiassistview", inputs: { activeView: "activeView", attachmentSettings: "attachmentSettings", bannerTemplate: "bannerTemplate", blockTemplate: "blockTemplate", cssClass: "cssClass", enableAttachments: "enableAttachments", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableScrollToBottom: "enableScrollToBottom", enableStreaming: "enableStreaming", footerTemplate: "footerTemplate", footerToolbarSettings: "footerToolbarSettings", height: "height", itemTemplate: "itemTemplate", locale: "locale", prompt: "prompt", promptIconCss: "promptIconCss", promptItemTemplate: "promptItemTemplate", promptPlaceholder: "promptPlaceholder", promptSuggestionItemTemplate: "promptSuggestionItemTemplate", promptSuggestions: "promptSuggestions", promptSuggestionsHeader: "promptSuggestionsHeader", promptToolbarSettings: "promptToolbarSettings", prompts: "prompts", responseIconCss: "responseIconCss", responseItemTemplate: "responseItemTemplate", responseToolbarSettings: "responseToolbarSettings", showClearButton: "showClearButton", showHeader: "showHeader", speechToTextSettings: "speechToTextSettings", textToSpeechSettings: "textToSpeechSettings", toolbarSettings: "toolbarSettings", views: "views", width: "width" }, outputs: { attachmentRemoved: "attachmentRemoved", attachmentUploadFailure: "attachmentUploadFailure", attachmentUploadSuccess: "attachmentUploadSuccess", beforeAttachmentUpload: "beforeAttachmentUpload", created: "created", editableContextClicked: "editableContextClicked", promptChanged: "promptChanged", promptRequest: "promptRequest", stopRespondingClick: "stopRespondingClick", promptChange: "promptChange" }, queries: [{ propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "promptItemTemplate", first: true, predicate: ["promptItemTemplate"], descendants: true }, { propertyName: "responseItemTemplate", first: true, predicate: ["responseItemTemplate"], descendants: true }, { propertyName: "promptSuggestionItemTemplate", first: true, predicate: ["promptSuggestionItemTemplate"], descendants: true }, { propertyName: "bannerTemplate", first: true, predicate: ["bannerTemplate"], descendants: true }, { propertyName: "childViews", first: true, predicate: ViewsDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], AIAssistViewComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], AIAssistViewComponent.prototype, "promptItemTemplate", void 0);
__decorate([
    Template()
], AIAssistViewComponent.prototype, "responseItemTemplate", void 0);
__decorate([
    Template()
], AIAssistViewComponent.prototype, "promptSuggestionItemTemplate", void 0);
__decorate([
    Template()
], AIAssistViewComponent.prototype, "bannerTemplate", void 0);
AIAssistViewComponent = __decorate([
    ComponentMixins([ComponentBase])
], AIAssistViewComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-aiassistview], ejs-aiassistview',
                    inputs: inputs$2,
                    outputs: outputs$3,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childViews: new ContentChild(ViewsDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], promptItemTemplate: [{
                type: ContentChild,
                args: ['promptItemTemplate']
            }], responseItemTemplate: [{
                type: ContentChild,
                args: ['responseItemTemplate']
            }], promptSuggestionItemTemplate: [{
                type: ContentChild,
                args: ['promptSuggestionItemTemplate']
            }], bannerTemplate: [{
                type: ContentChild,
                args: ['bannerTemplate']
            }] } });

/**
 * NgModule definition for the AIAssistView component.
 */
class AIAssistViewModule {
}
AIAssistViewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AIAssistViewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewModule, declarations: [AIAssistViewComponent,
        ViewDirective,
        ViewsDirective], imports: [CommonModule], exports: [AIAssistViewComponent,
        ViewDirective,
        ViewsDirective] });
AIAssistViewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        AIAssistViewComponent,
                        ViewDirective,
                        ViewsDirective
                    ],
                    exports: [
                        AIAssistViewComponent,
                        ViewDirective,
                        ViewsDirective
                    ]
                }]
        }] });

const AssistThinkingService = { provide: 'Interactive-ChatAssistThinking', useValue: AssistThinking };
/**
 * NgModule definition for the AIAssistView component with providers.
 */
class AIAssistViewAllModule {
}
AIAssistViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AIAssistViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, imports: [CommonModule, AIAssistViewModule], exports: [AIAssistViewModule] });
AIAssistViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, providers: [
        AssistThinkingService
    ], imports: [[CommonModule, AIAssistViewModule], AIAssistViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AIAssistViewModule],
                    exports: [
                        AIAssistViewModule
                    ],
                    providers: [
                        AssistThinkingService
                    ]
                }]
        }] });

let input = ['attachedFile', 'author', 'id', 'isForwarded', 'isPinned', 'mentionUsers', 'replyTo', 'status', 'text', 'timeStamp', 'timeStampFormat'];
let outputs$2 = [];
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
class MessageDirective extends ComplexBase {
    constructor(viewContainerRef) {
        super();
        this.viewContainerRef = viewContainerRef;
        setValue('currentInstance', this, this.viewContainerRef);
        this.registerEvents(outputs$2);
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
                    outputs: outputs$2,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; } });
/**
 * Message Array Directive
 * @private
 */
class MessagesDirective extends ArrayBase {
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

const inputs$1 = ['attachmentSettings', 'autoScrollToBottom', 'cssClass', 'emptyChatTemplate', 'enableAttachments', 'enableCompactMode', 'enablePersistence', 'enableRtl', 'footerTemplate', 'headerIconCss', 'headerText', 'headerToolbar', 'height', 'loadOnDemand', 'locale', 'mentionTriggerChar', 'mentionUsers', 'messageTemplate', 'messageToolbarSettings', 'messages', 'placeholder', 'showFooter', 'showHeader', 'showTimeBreak', 'showTimeStamp', 'suggestionTemplate', 'suggestions', 'timeBreakTemplate', 'timeStampFormat', 'typingUsers', 'typingUsersTemplate', 'user', 'width'];
const outputs$1 = ['attachmentRemoved', 'attachmentUploadFailure', 'attachmentUploadSuccess', 'beforeAttachmentUpload', 'created', 'mentionSelect', 'messageSend', 'userTyping'];
const twoWays$1 = [''];
/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui></ejs-chatui>
 * ```
 */
let ChatUIComponent = class ChatUIComponent extends ChatUI {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = ['messages'];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs$1);
        this.addTwoWay.call(this, twoWays$1);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.tagObjects[0].instance = this.childMessages;
        this.containerContext.ngAfterContentChecked(this);
    }
};
ChatUIComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
ChatUIComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: ChatUIComponent, selector: "[ejs-chatui], ejs-chatui", inputs: { attachmentSettings: "attachmentSettings", autoScrollToBottom: "autoScrollToBottom", cssClass: "cssClass", emptyChatTemplate: "emptyChatTemplate", enableAttachments: "enableAttachments", enableCompactMode: "enableCompactMode", enablePersistence: "enablePersistence", enableRtl: "enableRtl", footerTemplate: "footerTemplate", headerIconCss: "headerIconCss", headerText: "headerText", headerToolbar: "headerToolbar", height: "height", loadOnDemand: "loadOnDemand", locale: "locale", mentionTriggerChar: "mentionTriggerChar", mentionUsers: "mentionUsers", messageTemplate: "messageTemplate", messageToolbarSettings: "messageToolbarSettings", messages: "messages", placeholder: "placeholder", showFooter: "showFooter", showHeader: "showHeader", showTimeBreak: "showTimeBreak", showTimeStamp: "showTimeStamp", suggestionTemplate: "suggestionTemplate", suggestions: "suggestions", timeBreakTemplate: "timeBreakTemplate", timeStampFormat: "timeStampFormat", typingUsers: "typingUsers", typingUsersTemplate: "typingUsersTemplate", user: "user", width: "width" }, outputs: { attachmentRemoved: "attachmentRemoved", attachmentUploadFailure: "attachmentUploadFailure", attachmentUploadSuccess: "attachmentUploadSuccess", beforeAttachmentUpload: "beforeAttachmentUpload", created: "created", mentionSelect: "mentionSelect", messageSend: "messageSend", userTyping: "userTyping" }, queries: [{ propertyName: "suggestionTemplate", first: true, predicate: ["suggestionTemplate"], descendants: true }, { propertyName: "footerTemplate", first: true, predicate: ["footerTemplate"], descendants: true }, { propertyName: "emptyChatTemplate", first: true, predicate: ["emptyChatTemplate"], descendants: true }, { propertyName: "messageTemplate", first: true, predicate: ["messageTemplate"], descendants: true }, { propertyName: "typingUsersTemplate", first: true, predicate: ["typingUsersTemplate"], descendants: true }, { propertyName: "timeBreakTemplate", first: true, predicate: ["timeBreakTemplate"], descendants: true }, { propertyName: "previewTemplate", first: true, predicate: ["previewTemplate"], descendants: true }, { propertyName: "attachmentTemplate", first: true, predicate: ["attachmentTemplate"], descendants: true }, { propertyName: "childMessages", first: true, predicate: MessagesDirective, descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], ChatUIComponent.prototype, "suggestionTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "footerTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "emptyChatTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "messageTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "typingUsersTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "timeBreakTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "previewTemplate", void 0);
__decorate([
    Template()
], ChatUIComponent.prototype, "attachmentTemplate", void 0);
ChatUIComponent = __decorate([
    ComponentMixins([ComponentBase])
], ChatUIComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[ejs-chatui], ejs-chatui',
                    inputs: inputs$1,
                    outputs: outputs$1,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {
                        childMessages: new ContentChild(MessagesDirective)
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { suggestionTemplate: [{
                type: ContentChild,
                args: ['suggestionTemplate']
            }], footerTemplate: [{
                type: ContentChild,
                args: ['footerTemplate']
            }], emptyChatTemplate: [{
                type: ContentChild,
                args: ['emptyChatTemplate']
            }], messageTemplate: [{
                type: ContentChild,
                args: ['messageTemplate']
            }], typingUsersTemplate: [{
                type: ContentChild,
                args: ['typingUsersTemplate']
            }], timeBreakTemplate: [{
                type: ContentChild,
                args: ['timeBreakTemplate']
            }], previewTemplate: [{
                type: ContentChild,
                args: ['previewTemplate']
            }], attachmentTemplate: [{
                type: ContentChild,
                args: ['attachmentTemplate']
            }] } });

/**
 * NgModule definition for the ChatUI component.
 */
class ChatUIModule {
}
ChatUIModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChatUIModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIModule, declarations: [ChatUIComponent,
        MessageDirective,
        MessagesDirective], imports: [CommonModule], exports: [ChatUIComponent,
        MessageDirective,
        MessagesDirective] });
ChatUIModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        ChatUIComponent,
                        MessageDirective,
                        MessagesDirective
                    ],
                    exports: [
                        ChatUIComponent,
                        MessageDirective,
                        MessagesDirective
                    ]
                }]
        }] });

/**
 * NgModule definition for the ChatUI component with providers.
 */
class ChatUIAllModule {
}
ChatUIAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ChatUIAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIAllModule, imports: [CommonModule, ChatUIModule], exports: [ChatUIModule] });
ChatUIAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIAllModule, providers: [], imports: [[CommonModule, ChatUIModule], ChatUIModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: ChatUIAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, ChatUIModule],
                    exports: [
                        ChatUIModule
                    ],
                    providers: []
                }]
        }] });

const inputs = ['commandSettings', 'cssClass', 'editorTemplate', 'enablePersistence', 'enableRtl', 'enableStreaming', 'inlineToolbarSettings', 'locale', 'placeholder', 'popupHeight', 'popupWidth', 'prompt', 'prompts', 'relateTo', 'responseMode', 'responseSettings', 'responseTemplate', 'target', 'zIndex'];
const outputs = ['close', 'created', 'open', 'promptRequest'];
const twoWays = [''];
/**
 * Represents the Essential JS 2 Angular InlineAIAssist Component.
 * ```html
 * <ejs-inlineaiassist></ejs-inlineaiassist>
 * ```
 */
let InlineAIAssistComponent = class InlineAIAssistComponent extends InlineAIAssist {
    constructor(ngEle, srenderer, viewContainerRef, injector) {
        super();
        this.ngEle = ngEle;
        this.srenderer = srenderer;
        this.viewContainerRef = viewContainerRef;
        this.injector = injector;
        this.tags = [''];
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
        this.containerContext = new ComponentBase();
    }
    ngOnInit() {
        this.containerContext.ngOnInit(this);
    }
    ngAfterViewInit() {
        this.containerContext.ngAfterViewInit(this);
    }
    ngOnDestroy() {
        this.containerContext.ngOnDestroy(this);
    }
    ngAfterContentChecked() {
        this.containerContext.ngAfterContentChecked(this);
    }
};
InlineAIAssistComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Component });
InlineAIAssistComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.3", type: InlineAIAssistComponent, selector: "ejs-inlineaiassist", inputs: { commandSettings: "commandSettings", cssClass: "cssClass", editorTemplate: "editorTemplate", enablePersistence: "enablePersistence", enableRtl: "enableRtl", enableStreaming: "enableStreaming", inlineToolbarSettings: "inlineToolbarSettings", locale: "locale", placeholder: "placeholder", popupHeight: "popupHeight", popupWidth: "popupWidth", prompt: "prompt", prompts: "prompts", relateTo: "relateTo", responseMode: "responseMode", responseSettings: "responseSettings", responseTemplate: "responseTemplate", target: "target", zIndex: "zIndex" }, outputs: { close: "close", created: "created", open: "open", promptRequest: "promptRequest" }, queries: [{ propertyName: "editorTemplate", first: true, predicate: ["editorTemplate"], descendants: true }, { propertyName: "responseTemplate", first: true, predicate: ["responseTemplate"], descendants: true }], usesInheritance: true, ngImport: i0, template: `<ng-content ></ng-content>`, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush });
__decorate([
    Template()
], InlineAIAssistComponent.prototype, "editorTemplate", void 0);
__decorate([
    Template()
], InlineAIAssistComponent.prototype, "responseTemplate", void 0);
InlineAIAssistComponent = __decorate([
    ComponentMixins([ComponentBase])
], InlineAIAssistComponent);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ejs-inlineaiassist',
                    inputs: inputs,
                    outputs: outputs,
                    template: `<ng-content ></ng-content>`,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    queries: {}
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i0.Injector }]; }, propDecorators: { editorTemplate: [{
                type: ContentChild,
                args: ['editorTemplate']
            }], responseTemplate: [{
                type: ContentChild,
                args: ['responseTemplate']
            }] } });

/**
 * NgModule definition for the InlineAIAssist component.
 */
class InlineAIAssistModule {
}
InlineAIAssistModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InlineAIAssistModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistModule, declarations: [InlineAIAssistComponent], imports: [CommonModule], exports: [InlineAIAssistComponent] });
InlineAIAssistModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        InlineAIAssistComponent
                    ],
                    exports: [
                        InlineAIAssistComponent
                    ]
                }]
        }] });

/**
 * NgModule definition for the InlineAIAssist component with providers.
 */
class InlineAIAssistAllModule {
}
InlineAIAssistAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
InlineAIAssistAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistAllModule, imports: [CommonModule, InlineAIAssistModule], exports: [InlineAIAssistModule] });
InlineAIAssistAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistAllModule, providers: [], imports: [[CommonModule, InlineAIAssistModule], InlineAIAssistModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: InlineAIAssistAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, InlineAIAssistModule],
                    exports: [
                        InlineAIAssistModule
                    ],
                    providers: []
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { AIAssistViewAllModule, AIAssistViewComponent, AIAssistViewModule, AssistThinkingService, ChatUIAllModule, ChatUIComponent, ChatUIModule, InlineAIAssistAllModule, InlineAIAssistComponent, InlineAIAssistModule, MessageDirective, MessagesDirective, ViewDirective, ViewsDirective };
//# sourceMappingURL=syncfusion-ej2-angular-interactive-chat.mjs.map
