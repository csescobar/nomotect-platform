import { ComplexBase, applyMixins, ComponentBase } from '@syncfusion/ej2-react-base';
export { Inject } from '@syncfusion/ej2-react-base';
import { createElement, Component } from 'react';
import { AIAssistView, ChatUI, InlineAIAssist } from '@syncfusion/ej2-interactive-chat';
export * from '@syncfusion/ej2-interactive-chat';

/**
 * Represents the React AIAssistView Component
 * ```tsx
 * <AIAssistViewComponent>
 *    <ViewsDirective>
 *      <ViewDirective>
*      </ViewDirective>
 *    </ViewsDirective>
 * </AIAssistViewComponent>
 * ```
 */
class ViewDirective extends ComplexBase {
}
ViewDirective.moduleName = 'view';
class ViewsDirective extends ComplexBase {
}
ViewsDirective.propertyName = 'views';
ViewsDirective.moduleName = 'views';

/**
 * Represents the React AIAssistView Component
 * ```tsx
 * <AIAssistViewComponent></AIAssistViewComponent>
 * ```
 */
class AIAssistViewComponent extends AIAssistView {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = true;
        this.directivekeys = { 'views': 'view' };
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = false;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(AIAssistViewComponent, [ComponentBase, Component]);

/**
 * Represents the React ChatUI Component
 * ```tsx
 * <ChatUIComponent>
 *    <MessagesDirective>
 *      <MessageDirective>
*      </MessageDirective>
 *    </MessagesDirective>
 * </ChatUIComponent>
 * ```
 */
class MessageDirective extends ComplexBase {
}
MessageDirective.moduleName = 'message';
class MessagesDirective extends ComplexBase {
}
MessagesDirective.propertyName = 'messages';
MessagesDirective.moduleName = 'messages';

/**
 * Represents the React ChatUI Component
 * ```tsx
 * <ChatUIComponent></ChatUIComponent>
 * ```
 */
class ChatUIComponent extends ChatUI {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.directivekeys = { 'messages': 'message' };
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = false;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(ChatUIComponent, [ComponentBase, Component]);

/**
 * Represents the React InlineAIAssist Component
 * ```tsx
 * <InlineAIAssistComponent></InlineAIAssistComponent>
 * ```
 */
class InlineAIAssistComponent extends InlineAIAssist {
    constructor(props) {
        super(props);
        this.initRenderCalled = false;
        this.checkInjectedModules = false;
        this.statelessTemplateProps = null;
        this.templateProps = null;
        this.immediateRender = false;
        this.isReactMock = true;
        this.portals = [];
    }
    render() {
        this.isReactMock = false;
        if (((this.element && !this.initRenderCalled) || this.refreshing) && !this.isReactForeceUpdate) {
            super.render();
            this.initRenderCalled = true;
        }
        else {
            return createElement('div', this.getDefaultAttributes(), [].concat(this.props.children, this.portals));
        }
    }
}
applyMixins(InlineAIAssistComponent, [ComponentBase, Component]);

export { AIAssistViewComponent, ChatUIComponent, InlineAIAssistComponent, MessageDirective, MessagesDirective, ViewDirective, ViewsDirective };
//# sourceMappingURL=ej2-react-interactive-chat.es2015.js.map
