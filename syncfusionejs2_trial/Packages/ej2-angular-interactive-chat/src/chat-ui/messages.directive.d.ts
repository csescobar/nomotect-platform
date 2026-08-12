import { ViewContainerRef } from '@angular/core';
import { ComplexBase, ArrayBase } from '@syncfusion/ej2-angular-base';
import * as i0 from "@angular/core";
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
export declare class MessageDirective extends ComplexBase<MessageDirective> {
    private viewContainerRef;
    directivePropList: any;
    /**
     * Specifies the list of files attached within the Chat UI.
     * This property accepts an array of FileInfo objects that represent the files to be attached.
     * By providing these files, they will be rendered during the initial rendering of the component.
     * @default null
     */
    attachedFile: any;
    /**
     * Specifies the author of the message in the Chat UI component.
     * This property references a `UserModel` object that contains details about the user who sent the message.
     * @default null
     */
    author: any;
    /**
     * Specifies the unique identifier for each message sent in the Chat UI component.
     * Represents a string that uniquely identifies a message for tracking and managing individual messages within the chat.
     * @default '''
     */
    id: any;
    /**
     * Specifies whether the message has been forwarded.
     * When set to true, the message is visually marked as forwarded.
     * @default false
     */
    isForwarded: any;
    /**
     * Specifies whether the message is pinned.
     * When set to true, the message will be visually highlighted and can appear in the pinned messages section.
     * @default false
     */
    isPinned: any;
    /**
     * Represents an array of users mentioned in the message.
     * This field contains the list of users referenced via the @mention feature in the message text, populated when mentions are selected from the suggestion popup.
     * The field is optional and defaults to an empty array if no mentions are included in the message.
     * @default []
     */
    mentionUsers: any;
    /**
     * Specifies the reference to the original message when this message is a reply.
     * Contains the `MessageReplyModel` of the message being replied to.
     * @default null
     */
    replyTo: any;
    /**
     * Specifies the status of the message in the Chat UI component.
     * Represents the current status of the message, such as sent, received, or read. It helps in tracking the messages within the chat component.
     * @default null
     */
    status: any;
    /**
     * Represents the content of the message sent by a user in the Chat UI component.
     * @default ''
     */
    text: any;
    /**
     * Specifies the timestamp of when the message was sent.
     * This property holds a `Date` object that represents the exact time the message was created, providing context to the conversation flow.
     * @default ''
     */
    timeStamp: any;
    /**
     * Specifies the format of the timestamp for displaying the message's sending time.
     * By default, the format is set based on the culture of the application.
     * You can customize the format using a specific pattern, such as "'dd/MM/yyyy hh:mm'" in string format.
     * @default ''
     */
    timeStampFormat: any;
    constructor(viewContainerRef: ViewContainerRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MessageDirective, "ejs-chatui>e-messages>e-message", never, { "attachedFile": "attachedFile"; "author": "author"; "id": "id"; "isForwarded": "isForwarded"; "isPinned": "isPinned"; "mentionUsers": "mentionUsers"; "replyTo": "replyTo"; "status": "status"; "text": "text"; "timeStamp": "timeStamp"; "timeStampFormat": "timeStampFormat"; }, {}, never>;
}
/**
 * Message Array Directive
 * @private
 */
export declare class MessagesDirective extends ArrayBase<MessagesDirective> {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<MessagesDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<MessagesDirective, "ejs-chatui>e-messages", never, {}, {}, ["children"]>;
}
