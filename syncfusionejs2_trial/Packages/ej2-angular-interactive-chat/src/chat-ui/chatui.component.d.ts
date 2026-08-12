import { ElementRef, ViewContainerRef, Renderer2, Injector, QueryList } from '@angular/core';
import { IComponentBase } from '@syncfusion/ej2-angular-base';
import { ChatUI } from '@syncfusion/ej2-interactive-chat';
import { MessagesDirective } from './messages.directive';
import * as i0 from "@angular/core";
export declare const inputs: string[];
export declare const outputs: string[];
export declare const twoWays: string[];
/**
 * Represents the Essential JS 2 Angular ChatUI Component.
 * ```html
 * <ejs-chatui></ejs-chatui>
 * ```
 */
export declare class ChatUIComponent extends ChatUI implements IComponentBase {
    private ngEle;
    private srenderer;
    private viewContainerRef;
    private injector;
    containerContext: any;
    tagObjects: any;
    attachmentRemoved: any;
    attachmentUploadFailure: any;
    attachmentUploadSuccess: any;
    beforeAttachmentUpload: any;
    created: any;
    mentionSelect: any;
    messageSend: any;
    userTyping: any;
    childMessages: QueryList<MessagesDirective>;
    tags: string[];
    /**
     * Specifies the template for rendering suggestion items in the Chat UI component.
     * Defines the content or layout used to render suggestion items, and can be either a string or a function.
     * The template context includes the index and suggestion text.
     *
     * {% codeBlock src='chat-ui/suggestionTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    suggestionTemplate: any;
    /**
     * Specifies the template for the footer area in the Chat UI component.
     * Defines the content or layout used to render the footer, which can be provided as a string or a function.
     *
     * {% codeBlock src='chat-ui/footerTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    footerTemplate: any;
    /**
     * Specifies the template for rendering the empty state of the Chat UI component.
     * This property can accept either a string or a function to customize the appearance when there are no messages to display in the chat.
     *
     * {% codeBlock src='chat-ui/emptyChatTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    emptyChatTemplate: any;
    /**
     * Specifies the template for rendering individual messages in the Chat UI component.
     * This property can accept either a string or a function to customize the appearance of messages. The template context includes message and index.
     *
     * {% codeBlock src='chat-ui/messageTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    messageTemplate: any;
    /**
     * Template for displaying users currently typing in the chat interface.
     * Accepts a string or function to customize the display format.
     *
     * {% codeBlock src='chat-ui/typingUsersTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    typingUsersTemplate: any;
    /**
     * Defines a custom template for rendering time breaks in the Chat UI component.
     * Accepts a string or function that formats the appearance of date-based separators, allowing customization of how messages are visually grouped by date.
     *
     * {% codeBlock src='chat-ui/timebreakTemplate/index.md' %}{% endcodeBlock %}
     *
     * @default ''
     * @angulartype string | object
     * @reacttype string | function | JSX.Element
     * @vuetype string | function
     * @asptype string
     */
    timeBreakTemplate: any;
    previewTemplate: any;
    attachmentTemplate: any;
    constructor(ngEle: ElementRef, srenderer: Renderer2, viewContainerRef: ViewContainerRef, injector: Injector);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngAfterContentChecked(): void;
    registerEvents: (eventList: string[]) => void;
    addTwoWay: (propList: string[]) => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ChatUIComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ChatUIComponent, "[ejs-chatui], ejs-chatui", never, { "attachmentSettings": "attachmentSettings"; "autoScrollToBottom": "autoScrollToBottom"; "cssClass": "cssClass"; "emptyChatTemplate": "emptyChatTemplate"; "enableAttachments": "enableAttachments"; "enableCompactMode": "enableCompactMode"; "enablePersistence": "enablePersistence"; "enableRtl": "enableRtl"; "footerTemplate": "footerTemplate"; "headerIconCss": "headerIconCss"; "headerText": "headerText"; "headerToolbar": "headerToolbar"; "height": "height"; "loadOnDemand": "loadOnDemand"; "locale": "locale"; "mentionTriggerChar": "mentionTriggerChar"; "mentionUsers": "mentionUsers"; "messageTemplate": "messageTemplate"; "messageToolbarSettings": "messageToolbarSettings"; "messages": "messages"; "placeholder": "placeholder"; "showFooter": "showFooter"; "showHeader": "showHeader"; "showTimeBreak": "showTimeBreak"; "showTimeStamp": "showTimeStamp"; "suggestionTemplate": "suggestionTemplate"; "suggestions": "suggestions"; "timeBreakTemplate": "timeBreakTemplate"; "timeStampFormat": "timeStampFormat"; "typingUsers": "typingUsers"; "typingUsersTemplate": "typingUsersTemplate"; "user": "user"; "width": "width"; }, { "attachmentRemoved": "attachmentRemoved"; "attachmentUploadFailure": "attachmentUploadFailure"; "attachmentUploadSuccess": "attachmentUploadSuccess"; "beforeAttachmentUpload": "beforeAttachmentUpload"; "created": "created"; "mentionSelect": "mentionSelect"; "messageSend": "messageSend"; "userTyping": "userTyping"; }, ["suggestionTemplate", "footerTemplate", "emptyChatTemplate", "messageTemplate", "typingUsersTemplate", "timeBreakTemplate", "previewTemplate", "attachmentTemplate", "childMessages"], ["*"]>;
}
