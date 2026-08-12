import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Component, createRef } from 'react';
import { useEffect, useRef, useState } from 'react';
import { SampleBase, updateSampleSection } from '../common/sample-base';
import './chatgpt-ui.css';
import * as data from './promptResponseData.json';
import { AIAssistViewComponent } from '@syncfusion/ej2-react-interactive-chat';
import { SidebarComponent } from '@syncfusion/ej2-react-navigations';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ToastComponent } from '@syncfusion/ej2-react-notifications';
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
import {
  getAzureOpenAIAssist
} from './ai-services';
import { marked } from 'marked';

type AssistantResponse = { prompt: string; response: string; suggestions?: string[] };

export class AIAssistant extends SampleBase<{}, {
  selectedConvId: string | number | '';
  isFirstPrompt: boolean;
  isMobile: boolean;
  convListData: any[];
}> {
  // Refs for manipulating Syncfusion components directly
  aiAssistViewRef = createRef<AIAssistViewComponent>();
  sidebarRef = createRef<SidebarComponent>();
  toastRef = createRef<ToastComponent>();
  convListRef = createRef<ListViewComponent>();
  utilListRef = createRef<ListViewComponent>();
  aiToastRef = createRef<ToastComponent>();

  assistantResponses: AssistantResponse[] = (data as any).assistantResponses || [];
  assistantSuggestions: string[] = (data as any).assistantSuggestions || [];

  // Conversation selection and layout state
  state = {
    selectedConvId: '' as string | number | '',
    isFirstPrompt: false,
    isMobile: false,
    convListData: [] as any[]
  };

  // Azure OpenAI configuration used by the execute handler
  private azureApiKey = 'FiTq9VefhNpb0f0VGMgvs9msBGPaM6h6VrdJQ1FnwbvPqLgixXxuJQQJ99AKACYeBjFXJ3w3AAABACOGopNw';
  private azureEndpoint = 'https://azure-testresource.openai.azure.com';
  private azureDeployment = 'gpt-4o-mini';
  private azureApiVersion = '2024-07-01-preview';

  // Sidebar utility options shown above the conversation list
  leftpanelistData = [
    { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
    { text: 'Search chat', class: 'e-icons e-search' },
    { text: 'Library', class: 'e-icons e-reading-view' },
    { text: 'New project', class: 'e-icons e-add-notes' }
  ];

  // Static banner rendered when no prompts exist in the current conversation
  bannerTemplate: string = `
    <div class="banner-content e-no-content">
      <div class="e-icons e-assistview-icon"></div>
      <h3 class="ai-assist-banner-subtitle">Hello, I'm Your Digital Assistant!</h3>
    </div>
  `;

  // Upload endpoints for attachments within the chat interface
  attachmentSettings = {
    saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
    removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
  };

  componentDidMount(): void {
    // Ensure local storage entry exists and prime conversation list data
    this.checkInitialLocalStorage();
    this.setState({ convListData: this.getLeftPaneData() }, () => {
      // attach delete handler for conversation list
      const host = (this.convListRef.current as any)?.element as HTMLElement | undefined;
      if (host) {
        host.addEventListener('click', this.onConvDeleteClick as any);
      }
    });

    // Configure responsive sidebar behaviour and handle layout changes
    this.setSidebarConfig();
    window.addEventListener('resize', this.handleResize, { passive: true });
    // Show initial informational toast about AI demo capabilities
    this.aiToastRef.current.show({
      content: `<div class="ai-toast-content"><div class="ai-toast-title">Explore AI Demos</div><span>You can now explore our <strong>AI Demos</strong> with limited AI token usage. Additionally, you can try out our <strong>Syncfusion AI Assistview samples</strong> locally by using your own API key</span></div>`,
    });
  }

  componentWillUnmount(): void {
    // Clean up event listeners attached during mount
    window.removeEventListener('resize', this.handleResize);
    const host = (this.convListRef.current as any)?.element as HTMLElement | undefined;
    if (host) host.removeEventListener('click', this.onConvDeleteClick as any);
  }

  handleResize = () => {
    // React to window size changes and recompute sidebar mode
    const mobile = window.innerWidth <= 680;
    if (mobile !== this.state.isMobile) this.setSidebarConfig();
    this.setState({ isMobile: mobile });
  };

  onConvDeleteClick = (e: Event) => {
    // Remove a conversation when the trash icon is clicked
    const target = e.target as HTMLElement | null;
    const btn = target?.closest('.delete-btn') as HTMLElement | null;
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();

    const convList = this.convListRef.current as any;
    const li = btn.closest('li') as HTMLElement;
    const item = convList.getItemData(li) as { id: string | number };

    const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
    delete app[String(item.id)];
    localStorage.setItem('aiassist-view', JSON.stringify(app));

    const ds = ((convList.dataSource as Array<{ id: string | number }>)).filter(d => d.id !== item.id);
    convList.dataSource = ds;
    convList.dataBind();
    this.setState({ convListData: ds });

    if (this.state.selectedConvId === item.id) {
      this.setState({ selectedConvId: '' });
      const ai = this.aiAssistViewRef.current;
      if (ai) {
        ai.prompts = [];
        ai.promptSuggestions = this.assistantSuggestions;
      }
      this.updateBannerStyle();
    }
  };

  getDate = (): number => Date.now();

  checkInitialLocalStorage = (isClear = false): void => {
    // Seed storage for conversation history if missing or explicitly cleared
    if (isClear || !localStorage.getItem('aiassist-view')) {
      localStorage.setItem('aiassist-view', JSON.stringify({}));
    }
  };

  getLeftPaneData = () => {
    // Convert persisted conversation map into ListView-compatible items
    const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
    const keys = Object.keys(appData);
    const items: any[] = [];
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const numericKey = parseInt(key, 10);
      const convData = appData[key];
      if (convData) {
        const name = (convData.name || '').split('\n')[0];
        items.push({
          text: name,
          id: numericKey,
          numericId: numericKey
        });
      }
    }
    items.sort((a, b) => b.numericId - a.numericId);
    return items;
  };

  refreshConversationList = (): void => {
    // Reload sidebar conversation entries from storage
    this.setState({ convListData: this.getLeftPaneData() });
  };

  setSidebarConfig = (): void => {
    // Switch sidebar mode between push/over and maintain state.isMobile
    const mobile = window.innerWidth <= 680;
    const sidebar = this.sidebarRef.current;
    if (!sidebar) {
      this.setState({ isMobile: mobile });
      return;
    }
    sidebar.enableDock = false;
    sidebar.type = mobile ? 'Over' : 'Push';
    sidebar.showBackdrop = mobile;
    sidebar.dataBind();
    setTimeout(() => (mobile ? sidebar.hide() : sidebar.show()), 100);
    this.setState({ isMobile: mobile });
  };

  updateBannerStyle = (): void => {
    // Toggle the welcome banner visibility based on prompt history
    const bannerElem = document.querySelector('.banner-content') as HTMLElement;
    if (!bannerElem) return;
    const prompts = this.aiAssistViewRef.current?.prompts || [];
    bannerElem.style.display = prompts.length > 0 ? 'none' : 'block';
  };

  updateAIAssistViewData = (id: string | number): void => {
    // Load prompts and suggestions into the AI view when conversation changes
    const ai = this.aiAssistViewRef.current;
    if (!ai) return;
    if (id) {
      const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      const convData = appData[String(id)];
      if (convData) {
        ai.prompts = convData.prompts || [];
        ai.promptSuggestions = convData.promptSuggestions || this.assistantSuggestions;
      }
    } else {
      ai.prompts = [];
      ai.promptSuggestions = this.assistantSuggestions;
    }
  };

  loadNewAIAssist = (): void => {
    // Only reset UI and mark first prompt. Do not create storage/list entry here.
    const ai = this.aiAssistViewRef.current;
    this.setState({ selectedConvId: '', isFirstPrompt: true }, () => {
      if (ai) {
        ai.prompts = [];
        ai.promptSuggestions = this.assistantSuggestions;
      }
      this.updateBannerStyle();
      // Deselect any selected conversation item
      const sel = (this.convListRef.current as any)?.getSelectedItems?.();
      if (sel && sel.item) {
        (this.convListRef.current as any).unselectItem(sel.item);
      }
    });
  };

  checkAndUpdateLocalStorage = (prompt: string): void => {
    // Persist conversation data, creating a new entry after the first prompt
    const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
    const curConvDate = this.getDate();
    const ai = this.aiAssistViewRef.current;

    const prompts: any[] = [];
    const orgPrompts = ai?.prompts || [];
    for (let i = 0; i < orgPrompts.length; i++) {
      prompts.push({
        prompt: orgPrompts[i].prompt || '',
        response: orgPrompts[i].response || ''
      });
    }

    const pSuggestions: string[] = [];
    const orgPSuggestions = ai?.promptSuggestions || [];
    for (let j = 0; j < orgPSuggestions.length; j++) {
      pSuggestions.push(orgPSuggestions[j]);
    }

    if (this.state.selectedConvId) {
      const convData = appData[String(this.state.selectedConvId)];
      if (convData) {
        const ds: any[] = (this.convListRef.current as any)?.dataSource as any[];
        if (ds) {
          for (let k = 0; k < ds.length; k++) {
            const item = ds[k];
            if (item && item.id === this.state.selectedConvId) {
              item.text = convData.name;
              break;
            }
          }
          (this.convListRef.current as any)?.dataBind();
        }
        convData.prompts = prompts;
        convData.promptSuggestions = pSuggestions;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
      }
    } else {
      // Create conversation ONLY after first prompt is sent
      const newId = String(curConvDate);
      const convData = {
        name: prompt,
        prompts,
        promptSuggestions: pSuggestions
      };
      appData[newId] = convData;
      localStorage.setItem('aiassist-view', JSON.stringify(appData));
      this.setState({ selectedConvId: newId }, () => {
        this.refreshConversationList();
        setTimeout(() => (this.convListRef.current as any)?.selectItem({ index: 0 }), 0);
      });
    }
  };

  updateConversationName = (prompt: string): void => {
    // Reset first prompt flag and refresh list after initial prompt storage
    if (this.state.isFirstPrompt && this.state.selectedConvId) {
      this.setState({ isFirstPrompt: false }, () => {
        const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        localStorage.setItem('aiassist-view', JSON.stringify(app));
        this.refreshConversationList();
      });
    }
  };

  execute = async (prompt: string): Promise<void> => {
    // Primary message handler: clears suggestions, fetches response, and persists state
    this.updateBannerStyle();
    try {
      const ai = this.aiAssistViewRef.current;
      if (ai) ai.promptSuggestions = [];
      const finalResult: string[] = [];

      setTimeout(() => {
        const suggestionsObj = this.assistantResponses.find(resp => resp.prompt === prompt);
        const suggestionResult = suggestionsObj ? suggestionsObj.suggestions || this.assistantSuggestions : this.assistantSuggestions;
        for (let i = 0; i < suggestionResult.length; i++) {
          if (suggestionResult[i]) {
            finalResult.push(suggestionResult[i].replace('- ', '').replace('* ', '').trim());
          }
        }
      }, 1000);

      setTimeout(async () => {
        const text = await getAzureOpenAIAssist({
          messages: prompt,
        });
        this.aiAssistViewRef.current?.addPromptResponse(marked.parse(text));
        if (this.aiAssistViewRef.current) this.aiAssistViewRef.current.promptSuggestions = finalResult;
        this.checkAndUpdateLocalStorage(prompt);
        this.updateConversationName(prompt);
      }, 1000);
    } catch {
      const fallback =
        "⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.";
      this.aiAssistViewRef.current?.addPromptResponse(fallback);
      if (this.aiAssistViewRef.current) this.aiAssistViewRef.current.promptSuggestions = [];
      this.updateConversationName(prompt);
    }
  };

  onConvSelect = (args: any) => {
    // Load stored conversation when a user selects it in the ListView
    if (args.isInteracted) {
      const data = args.data;
      this.setState({ selectedConvId: data.id }, () => {
        this.updateAIAssistViewData(data.id);
        this.updateBannerStyle();
      });
    }
  };

  onUtilSelect = (args: any) => {
    // Handle interactions with the utility menu (New Chat, Search, etc.)
    // Deselect any selected conversation item
    const sel = (this.convListRef.current as any)?.getSelectedItems?.();
    if (sel && sel.item) {
      (this.convListRef.current as any).unselectItem(sel.item);
    }
    const data = args.data;
    if (data && data.id === 'new-chat') {
      this.loadNewAIAssist(); // Only reset UI; do not touch storage or list
    } else if (data) {
      this.toastRef.current?.show({
        content: `<div class="toast-content"><span><b>${data.text}</b> clicked</span></div>`
      } as any);
    }
  };

  onSidebarOpen = (): void => {
    document.getElementById('close').style.display = "none";
  }

  onSidebarClose = (): void => {
    setTimeout(() => {
        document.getElementById('close').style.display = 'block';
    }, 300);
  }

  render(): React.ReactNode {
    const { isMobile, convListData } = this.state;

    return (
      <div className="control-pane">
        <div className="control-section">
          <div>
            <div id="chatgpt">
              <div>
                <div className="ai-assist-header">
                  <ButtonComponent
                    id="close"
                    title="Expand Navigation"
                    iconCss="e-icons e-menu"
                    cssClass="e-flat"
                    onClick={() => this.sidebarRef.current?.toggle()}
                  />
                </div>
                <AIAssistViewComponent
                  id="aiAssistView"
                  ref={this.aiAssistViewRef}
                  promptSuggestions={this.assistantSuggestions}
                  enableAttachments={true}
                  attachmentSettings={this.attachmentSettings}
                  promptRequest={(args) => {
                    this.updateBannerStyle();
                    this.execute(args.prompt);
                  }}
                  bannerTemplate={this.bannerTemplate}
                  showHeader={false}
                  width="auto"
                />
              </div>
            </div>
          </div>
        </div>

        <SidebarComponent
          ref={this.sidebarRef}
          width="250px"
          target="#chatgpt"
          type="Push"
          enableDock={false}
          enableGestures={false}
          showBackdrop={false}
          className="left-content"
          open={this.onSidebarOpen}
          close={this.onSidebarClose}
        >
          <div style={{ overflow: 'auto' }}>
            <div className="assistantToolbar">
              <div className="header-left">
                <span id="icon-assist" className="header-icon e-icons e-assistview-icon"></span>
                <span className="header-title">AI Assist</span>
              </div>
              <ButtonComponent
                id="toggle-btn-close"
                title="Collapse Navigation"
                cssClass="e-flat"
                iconCss={isMobile ? 'e-icons e-close' : 'e-icons e-menu'}
                onClick={() => this.sidebarRef.current?.toggle()}
              />
            </div>

            <ListViewComponent
              id="left-pane-listview"
              ref={this.utilListRef}
              dataSource={this.leftpanelistData}
              template={'<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>'}
              select={this.onUtilSelect}
            />

            <div className="assistant-sidebar-content" style={{ marginTop: 10, height: 235 }}>
              <div className="header-conversation">Chats</div>

              <ListViewComponent
                id="assistant-listview-grp"
                ref={this.convListRef}
                dataSource={convListData}
                fields={{ id: 'id', text: 'text' }}
                template={
                  '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>'
                }
                select={this.onConvSelect}
              />
            </div>

            <div className="sign-in">
              <span className="e-icons e-user"></span>
              <span className="user-name">User</span>
              <ButtonComponent id="upgrade">Upgrade</ButtonComponent>
            </div>
          </div>
        </SidebarComponent>

        <ToastComponent
          id="toast"
          ref={this.toastRef}
          position={{ X: 'Right', Y: 'Top' }}
          timeOut={1500}
          showCloseButton={true}
          target=".e-views"
        />
        <ToastComponent
          id="ai-toast"
          ref={this.aiToastRef}
          position={{ X: 'Right', Y: 'Top' }}
          timeOut={3000}
          showCloseButton={true}
          target=".e-view"
        />
        <div id="action-description">
          <p>This sample demonstrates a AI chat assistant with conversation management. Users can create new conversations and
            receive AI-generated responses with relevant suggestions.</p>
        </div>
        <div id="description">
          <p>The AI AssistView component in this example showcases integration of an AI usage with conversation history
            management which include's:</p>
          <ul>
            <li>Sidebar with organized conversation history</li>
            <li>New Chat action to start a fresh conversation</li>
            <li>Customizable banner interface using <code>bannerTemplate</code> for guidance messages</li>
            <li>Intelligent follow-up suggestions after each responses via <code>promptSuggestions</code></li>
            <li>Attachment with configurable upload endpoints</li>
            <li>LocalStorage persistence for prompts and suggestions to retain history across sessions</li>
            <li>Responsive sidebar behavior with toggle buttons for desktop and mobile</li>
            <li>Toast notifications for non-chat sidebar actions</li>
          </ul>
        </div>
      </div>
    );
  }
}