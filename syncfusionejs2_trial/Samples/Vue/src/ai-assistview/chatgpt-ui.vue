<template>
  <div class="control-section">
    <div>
      <div id="chatgpt">
        <div>
          <div class="ai-assist-header">
            <button id="close" title="Expand Navigation"></button>
          </div>
          <ejs-aiassistview
            id="aiAssistView"
            ref="aiAssistView"
            :promptSuggestions="assistantSuggestions"
            :promptRequest="onPromptRequest"
            bannerTemplate="bannerTemplate"
            :enableAttachments="true"
            :attachmentSettings="attachmentSettings"
            :showHeader="false"
            width="auto"
          >
            <template v-slot:bannerTemplate="{ data }">
              <div class="banner-content e-no-content">
                <div class="e-icons e-assistview-icon"></div>
                <h3 class="ai-assist-banner-subtitle">
                  Hello, I'm Your Digital Assistant!
                </h3>
              </div>
            </template>
          </ejs-aiassistview>
        </div>
      </div>
    </div>
    <aside class="left-content" ref="leftContent">
      <div style="overflow: auto">
        <div class="assistantToolbar">
          <div class="header-left">
            <span
              id="icon-assist"
              class="header-icon e-icons e-assistview-icon"
            ></span>
            <span class="header-title">AI Assist</span>
          </div>
          <button id="toggle-btn-close" title="Collapse Navigation"></button>
        </div>

        <!-- Left pane actions list -->
        <ejs-listview
          id="left-pane-listview"
          ref="leftPaneList"
          :dataSource="leftPanelListData"
          :template="leftListTemplate"
        ></ejs-listview>

        <!-- Conversations list -->
        <div
          class="assistant-sidebar-content"
          style="margin-top: 10px; height: 235px"
        >
          <div class="header-conversation">Chats</div>
          <ejs-listview
            id="assistant-listview-grp"
            ref="convList"
            :dataSource="conversationList"
            :fields="convListFields"
            :template="convListTemplate"
            @select="onConversationSelect"
          ></ejs-listview>
        </div>

        <!-- Footer -->
        <div class="sign-in">
          <span class="e-icons e-user"></span>
          <span class="user-name">User</span>
          <button id="upgrade">Upgrade</button>
        </div>
      </div>
    </aside>

    <ejs-toast
      id="toast"
      ref="toast"
      :position="toastPosition"
      :timeOut="1500"
      :showCloseButton="true"
      target=".e-views"
    ></ejs-toast>

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
            <li>Attachment support with configurable upload endpoints</li>
            <li>LocalStorage persistence for prompts and suggestions to retain history across sessions</li>
            <li>Responsive sidebar behavior with toggle buttons for desktop and mobile</li>
            <li>Toast notifications for non-chat sidebar actions</li>
        </ul>
    </div>
  </div>
</template>

<script>
import { AIAssistViewComponent } from '@syncfusion/ej2-vue-interactive-chat';
import { Sidebar } from '@syncfusion/ej2-navigations';
import { ListViewComponent } from '@syncfusion/ej2-vue-lists';
import { Button } from '@syncfusion/ej2-buttons';
import { ToastComponent } from '@syncfusion/ej2-vue-notifications';

// Mock data imports should match your TS promptResponseData
import assistantData from './promptResponseData.json'; // { assistantSuggestions, assistantResponses }

export default {
  name: 'AiAssistant',
  components: {
    'ejs-aiassistview': AIAssistViewComponent,
    'ejs-listview': ListViewComponent,
    'ejs-toast': ToastComponent,
  },
  data() {
    return {
      // Data aligned with TS sample
      assistantSuggestions: assistantData.assistantSuggestions || [],
      assistantResponses: assistantData.assistantResponses || [],

      // Sidebar and responsive state
      sidebarObj: null,
      isMobile: false,

      // State management
      selectedConvId: '',
      isFirstPrompt: false,

      // Left pane actions
      leftPanelListData: [
        { text: 'New chat', class: 'e-icons e-rename', id: 'new-chat' },
        { text: 'Search chat', class: 'e-icons e-search' },
        { text: 'Library', class: 'e-icons e-reading-view' },
        { text: 'New project', class: 'e-icons e-add-notes' },
      ],
      leftListTemplate:
        '<div class="e-list-wrapper"><span class="${class}"></span><span class="e-list-content">${text}</span></div>',

      // Conversations list
      conversationList: [],
      convListFields: { id: 'id', text: 'text' },
      convListTemplate:
        '<div class="e-text-content"><span class="e-list-text">${text}</span><span class="e-icons e-trash delete-btn" title="Delete Conversation"></span></div>',

      // Attachments
      attachmentSettings: {
        saveUrl:
          'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl:
          'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
      },

      // Toast
      toastPosition: { X: 'right', Y: 'Top' },
    };
  },
  mounted() {
    this.initializeApp();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize, { passive: true });
    window.removeEventListener('resize', this.setIcon);
    const convHost = document.getElementById('assistant-listview-grp');
    convHost &&
      convHost.removeEventListener('click', this.onConvDeleteClick, true);
  },
  methods: {
    // App init
    initializeApp() {
      this.checkInitialLocalStorage();
      // Build list data from storage
      this.refreshConversationList();

      // Sidebar instantiate and configure like TS sample
      this.sidebarObj = new Sidebar({
        width: '250px',
        target: '#chatgpt',
        type: 'Push',
        enableGestures: false,
        showBackdrop: true,
        open: this.onSidebarOpen,
      });
      // Attach to aside element
      this.sidebarObj.appendTo(this.$refs.leftContent);

      // Buttons similar to TS sample
      new Button({ iconCss: 'e-icons e-menu', cssClass: 'e-flat' }, '#close');
      new Button({}, '#upgrade');
      this.toggleBtn = new Button({ cssClass: 'e-flat' }, '#toggle-btn-close');

      // Wire toggle events
      const closeBtn = document.getElementById('close');
      const toggleBtn = document.getElementById('toggle-btn-close');
      closeBtn &&
        closeBtn.addEventListener('click', () => this.sidebarObj.toggle());
      toggleBtn &&
        toggleBtn.addEventListener('click', () => {
          closeBtn.style.display = 'none';
          this.sidebarObj.toggle();
          setTimeout(() => {
            closeBtn.style.display = 'block';
          }, 300);
        });

      // Responsive config
      this.setSidebarConfig();
      window.addEventListener('resize', this.onResize, { passive: true });
      this.setIcon();
      window.addEventListener('resize', this.setIcon);

      // Left pane actions click handling
      const leftHost = document.getElementById('left-pane-listview');
      leftHost &&
        leftHost.addEventListener('click', (e) => {
          const target = e.target;
          const li = target && target.closest('li.e-list-item');
          if (!li) return;
          const list = this.$refs.leftPaneList?.ej2Instances;
          if (!list) return;
          const data = list.getItemData(li);
          if (!data) return;
          if (data.id === 'new-chat') {
            this.loadNewAIAssist();
          } else {
            this.$refs.toast?.show({
              content: `<div class="toast-content"></span> <span><b>${data.text}</b> clicked</span></div>`,
            });
          }
          // Unselect conversation list when left actions clicked
          const convList = this.$refs.convList?.ej2Instances;
          const sel = convList?.getSelectedItems?.();
          sel?.item && convList.unselectItem(sel.item);
        });

      // Conversation delete handling on icon click
      const convHost = document.getElementById('assistant-listview-grp');
      if (convHost) {
        convHost.addEventListener('click', this.onConvDeleteClick, true);
      }
    },

    // Responsive behavior copied from TS
    setSidebarConfig() {
      this.isMobile = window.innerWidth <= 680;
      if (this.isMobile) {
        this.sidebarObj.enableDock = false;
        this.sidebarObj.type = 'Over';
        this.sidebarObj.showBackdrop = true;
        setTimeout(() => this.sidebarObj.hide(), 100);
      } else {
        this.sidebarObj.enableDock = false;
        this.sidebarObj.type = 'Push';
        this.sidebarObj.showBackdrop = false;
        setTimeout(() => this.sidebarObj.show(), 100);
      }
      this.sidebarObj.dataBind();
    },
    onResize() {
      const newIsMobile = window.innerWidth <= 680;
      if (newIsMobile !== this.isMobile) {
        this.isMobile = newIsMobile;
        this.setSidebarConfig();
      }
    },
    onSidebarOpen(args) {
      document.getElementById('close').style.display = "none";
    },
    setIcon() {
      if (!this.toggleBtn) return;
      this.toggleBtn.iconCss =
        window.innerWidth <= 680 ? 'e-icons e-close' : 'e-icons e-menu';
      this.toggleBtn.dataBind();
    },

    // AIAssistView
    onPromptRequest(args) {
      this.updateBannerStyle();
      this.execute(args.prompt);
    },
    updateBannerStyle() {
      const bannerElem = document.querySelector('.banner-content');
      const ai = this.$refs.aiAssistView?.ej2Instances;
      if (!bannerElem || !ai) return;
      bannerElem.style.display = ai.prompts.length > 0 ? 'none' : 'block';
    },

    // Storage utilities matched to TS
    checkInitialLocalStorage(isClear) {
      if (isClear || !localStorage.getItem('aiassist-view')) {
        localStorage.setItem('aiassist-view', JSON.stringify({}));
      }
    },
    getLeftPaneData() {
      const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      const keys = Object.keys(appData);
      const items = [];
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const numericKey = parseInt(key, 10);
        const convData = appData[key];
        const name = (convData.name || '').split('\n')[0];
        items.push({ text: name, id: numericKey, numericId: numericKey });
      }
      items.sort((a, b) => b.numericId - a.numericId);
      return items;
    },
    refreshConversationList() {
      this.conversationList = this.getLeftPaneData();
      const convList = this.$refs.convList?.ej2Instances;
      if (convList) {
        convList.dataSource = this.conversationList;
        convList.dataBind();
      }
    },
    updateAIAssistViewData(id) {
      const ai = this.$refs.aiAssistView?.ej2Instances;
      if (!ai) return;
      if (id) {
        const appData = JSON.parse(
          localStorage.getItem('aiassist-view') || '{}'
        );
        const convData = appData[id.toString()];
        ai.prompts = convData?.prompts || [];
        ai.promptSuggestions =
          convData?.promptSuggestions || this.assistantSuggestions;
      } else {
        ai.prompts = [];
        ai.promptSuggestions = this.assistantSuggestions;
      }
    },

    // Conversation selection and deletion
    onConversationSelect(args) {
      if (args.event) {
        // Unselect left actions list when conversation selected
        const leftList = this.$refs.leftPaneList?.ej2Instances;
        const sel = leftList?.getSelectedItems?.();
        sel?.item && leftList.unselectItem(sel.item);

        const data = args?.data;
        this.selectedConvId = data?.id;
        this.updateAIAssistViewData(this.selectedConvId);
        this.updateBannerStyle();
      }
    },
    resetAssistView() {
        const ai = this.$refs.aiAssistView?.ej2Instances;
        if (!ai) return;
        // Forcefully clear UI: state + immediate re-render
        ai.setProperties(
          { prompts: [], promptSuggestions: this.assistantSuggestions },
          true
        );
        ai.dataBind();
        // Extra safety: ensure visual re-render in all themes/versions
        if (typeof ai.refresh === 'function') ai.refresh();
        this.updateBannerStyle();
      },
    
      onConvDeleteClick(e) {
        const target = e.target;
        const btn = target && target.closest('.delete-btn');
        if (!btn) return;
        e.preventDefault();
        e.stopPropagation();
    
        const convList = this.$refs.convList?.ej2Instances;
        const li = btn.closest('li');
        if (!convList || !li) return;
    
        const item = convList.getItemData(li);
        const wasCurrent = String(this.selectedConvId) === String(item.id);
    
        // Update storage
        const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        delete app[String(item.id)];
        localStorage.setItem('aiassist-view', JSON.stringify(app));
    
        // Remove from ListView without auto-selecting another item
        convList.removeItem(li);
        const ds = (convList.dataSource || []).filter((d) => d.id !== item.id);
        convList.dataSource = ds;
        convList.dataBind();
    
        // Clear any selection left in the list
        const sel = convList.getSelectedItems?.();
        if (sel?.item) convList.unselectItem(sel.item);
    
        // If the deleted item was the current conversation, reset AssistView UI
        if (wasCurrent) {
          this.selectedConvId = '';
          this.resetAssistView();
        }
      },

    // Conversation creation/update logic
    loadNewAIAssist() {
      this.selectedConvId = '';
      this.isFirstPrompt = true;
      const ai = this.$refs.aiAssistView?.ej2Instances;
      if (ai) {
        ai.prompts = [];
        ai.promptSuggestions = this.assistantSuggestions;
      }
      this.updateBannerStyle();
    },
    checkAndUpdateLocalStorage(prompt) {
      const ai = this.$refs.aiAssistView?.ej2Instances;
      if (!ai) return;
      const appData = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
      const curConvDate = Date.now();
      const prompts = [];
      for (let i = 0; i < ai.prompts.length; i++) {
        const tPrompt = {
          prompt: ai.prompts[i].prompt || '',
          response: ai.prompts[i].response || '',
        };
        prompts.push(tPrompt);
      }
      const pSuggestions = [];
      for (let j = 0; j < (ai.promptSuggestions || []).length; j++) {
        pSuggestions.push(ai.promptSuggestions[j]);
      }
      if (this.selectedConvId) {
        const convData = appData[this.selectedConvId];
        if (convData && convData.name === convData.name) {
          const convList = this.$refs.convList?.ej2Instances;
          const ds = convList?.dataSource || [];
          for (let k = 0; k < ds.length; k++) {
            if (ds[k].id === this.selectedConvId) {
              ds[k].text = convData.name;
              break;
            }
          }
          convList?.dataBind();
        }
        if (appData[this.selectedConvId]) {
          appData[this.selectedConvId].prompts = prompts;
          appData[this.selectedConvId].promptSuggestions = pSuggestions;
        }
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
      } else {
        this.selectedConvId = curConvDate.toString();
        const convData = {
          name: prompt,
          prompts: prompts,
          promptSuggestions: pSuggestions,
        };
        appData[curConvDate] = convData;
        localStorage.setItem('aiassist-view', JSON.stringify(appData));
        this.refreshConversationList();
        // Select first item
        this.$nextTick(() => {
          this.$refs.convList?.ej2Instances?.selectItem(0);
        });
      }
    },
    updateConversationName(prompt) {
      if (this.isFirstPrompt && this.selectedConvId) {
        const app = JSON.parse(localStorage.getItem('aiassist-view') || '{}');
        const convData = app[this.selectedConvId];
        if (convData && convData.name === 'New Conversation') {
          convData.name = prompt.slice(0, 40).trim();
          localStorage.setItem('aiassist-view', JSON.stringify(app));
          const convList = this.$refs.convList?.ej2Instances;
          const ds = convList?.dataSource || [];
          const listItem = ds.find((it) => it.id === this.selectedConvId);
          if (listItem) {
            listItem.text = convData.name;
            convList.dataBind();
          }
          this.refreshConversationList();
        }
        this.isFirstPrompt = false;
      }
    },

    // AI request/response mirroring TS behavior
    async getResult(prompt) {
      const found = (this.assistantResponses || []).find(
        (r) => r.prompt === prompt
      );
      const result =
        found?.response ||
        "I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.";
      return result;
    },
    async execute(prompt) {
      try {
        const ai = this.$refs.aiAssistView?.ej2Instances;
        if (!ai) return;

        ai.promptSuggestions = [];
        const finalResult = [];
        let result = '';

        setTimeout(() => {
          const suggestionsObj = (this.assistantResponses || []).find(
            (resp) => resp.prompt === prompt
          );
          const suggestionResult = suggestionsObj
            ? suggestionsObj.suggestions || this.assistantSuggestions
            : this.assistantSuggestions;
          for (let i = 0; i < suggestionResult.length; i++) {
            if (suggestionResult[i]) {
              finalResult.push(
                suggestionResult[i].replace('- ', '').replace('* ', '').trim()
              );
            }
          }
        }, 1000);

        setTimeout(async () => {
          result = await this.getResult(prompt);
          ai.addPromptResponse(result);
          ai.promptSuggestions = finalResult;
          this.checkAndUpdateLocalStorage(prompt);
          this.updateConversationName(prompt);
        }, 1000);
      } catch (error) {
        const ai = this.$refs.aiAssistView?.ej2Instances;
        const fallback =
          "I apologize, but I'm experiencing some difficulty processing your request at this moment, which might be due to the complexity of your query or a technical limitation on my end, so I would greatly appreciate it if you could rephrase your question or provide additional context that might help me better understand what you're looking for.";
        ai?.addPromptResponse(fallback);
        if (ai) ai.promptSuggestions = [];
        this.updateConversationName(prompt);
      }
    },
  },
};
</script>

<style>
/* Core container styles aligned with TS sample */
#chatgpt {
  height: 500px;
  width: auto;
  margin: 0 auto;
}

#chatgpt .ai-assist-header {
  position: absolute;
  z-index: 1000;
  display: flex;
  align-items: center;
  padding: 9px;
}

#chatgpt .left-content .assistantToolbar .header-left {
  display: flex;
  align-items: center;
  cursor: default;
}

#chatgpt .left-content .assistantToolbar {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 16px;
  align-items: center;
}

.material3 #chatgpt .left-content .assistantToolbar {
  background-color: #ededed;
}

#chatgpt .left-content .assistantToolbar .header-left .header-icon {
  font-size: 20px;
  margin-right: 8px;
}

#chatgpt .left-content .assistantToolbar .header-left .header-title {
  padding-top: 5px;
  font-size: 14px;
  font-weight: 500;
}

#chatgpt .e-content-animation {
  height: 100%;
}

#chatgpt .left-content .e-listview:not(.e-list-template) .e-list-item {
  padding-left: 10px;
}

.fluent2 #chatgpt .left-content .e-listview .e-list-text,
.fluent2-highcontrast #chatgpt .left-content .e-listview .e-list-text {
  padding-left: 0;
}

.fluent2-highcontrast #chatgpt .left-content,
.fluent2-highcontrast #chatgpt .left-content .assistantToolbar,
.fluent2-highcontrast #chatgpt .left-content .sign-in {
  background-color: #000;
}

#chatgpt .left-content #left-pane-listview .e-list-item {
  display: flex;
  padding-left: 10px;
  border-bottom: unset;
}

#chatgpt .heading {
  height: 30px;
  display: flex;
  align-items: center;
  background-color: #fafafa;
  padding: 20px;
  font-size: larger;
}

#chatgpt .left-content .sign-in {
  width: 100%;
  display: flex;
  gap: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #f1f1f1;
  padding: 10px 9px;
  z-index: 1;
  align-items: center;
}

#chatgpt .left-content .sign-in .e-user {
  border: 1px solid #d5d5d5;
  padding: 8px;
  border-radius: 50%;
}

#chatgpt .left-content .sign-in #upgrade {
  margin-left: 30%;
}

#chatgpt .left-content .sign-in .user-name {
  font-size: 14px;
  font-weight: 400;
}

#chatgpt .left-content .e-listview {
  border: none;
}

#chatgpt .left-content .e-list-wrapper {
  display: flex;
  gap: 10px;
  align-items: center;
}

#chatgpt .left-content .e-assistview-icon {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}

#chatgpt .left-content .e-list-wrapper .e-icons {
  margin-top: 3px;
}

#chatgpt .left-content .assistant-sidebar-content .header-conversation {
  margin-left: 14px;
  font-size: 16px;
  font-weight: 400;
}

#chatgpt .left-content #assistant-listview-grp {
  padding: 5px;
}

#chatgpt .left-content #assistant-listview-grp .e-list-group-item,
#chatgpt .left-content #assistant-listview-grp .e-list-item {
  margin: 0;
  border-bottom: unset;
}

#chatgpt .left-content {
  padding: 0 5px 0 5px;
  background-color: #fafafa;
  border: 1px solid #d1d1d1;
  /* border-right: none; */
}

#assistant-listview-grp .e-list-item {
  padding-right: 24px;
}

#assistant-listview-grp .e-list-item .delete-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 120ms ease-in-out;
  border: 0;
  padding: 4px;
  cursor: pointer;
}

#assistant-listview-grp .e-list-item.e-hover .delete-btn,
#assistant-listview-grp .e-list-item:focus-within .delete-btn {
  opacity: 1;
  pointer-events: auto;
}

#chatgpt .banner-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 330px;
  text-align: center;
}

#chatgpt .banner-content.e-no-content {
  height: 25vh;
}

#chatgpt .banner-content .e-assistview-icon:before {
  font-size: 40px;
}

@media screen and (max-width: 680px) {
  #chatgpt {
    width: 100%;
    margin: 0;
  }

  .heading {
    margin-left: 50px;
  }

  .e-sidebar-container .e-main-content.e-content-animation {
    margin-left: 0 !important;
  }

  #close {
    display: block;
  }
}

@media screen and (min-width: 681px) {
  #close {
    display: none;
  }
}
</style>