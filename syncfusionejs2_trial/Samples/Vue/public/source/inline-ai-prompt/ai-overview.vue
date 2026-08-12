<template>
  <div class="col-lg-12 control-section">
    <div class="overview-inlineAIPrompt">
      <div class="email-container">
        <div class="email-composer e-card">
          <h3 class="demo-title">📧 Email Draft Assistant</h3>

          <div class="email-field e-card-content">
            <label class="field-label">To:</label>
            <input type="text" class="field-input e-input" value="team@company.com" readonly />
          </div>

          <div class="email-field e-card-content">
            <label class="field-label">Subject:</label>
            <input type="text" class="field-input e-input" value="Project Update - Q1 Deliverables" readonly />
          </div>

          <div class="email-field-vertical e-card-content">
            <div class="message-header">
              <ejs-button
                ref="aiAssistantBtn"
                icon-css="e-icons e-ai-chat"
                :is-primary="true"
              >
                AI Assistant
              </ejs-button>
            </div>

            <div ref="emailContent" class="email-body" contenteditable="true">
              <p>Dear Team,</p>
              <p>I hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.</p>
              <p>As we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.</p>
              <p>Thank you for your continued dedication and hard work on this project.</p>
              <p>Best regards,<br>Project Management Team</p>
            </div>

            <ejs-button
              ref="sparkleBtn"
              icon-css="e-icons e-ai-chat"
              :is-primary="true"
              css-class="e-round e-small"
              style="display: none; position: absolute;"
            ></ejs-button>
          </div>

          <div class="email-actions e-card-content">
            <button class="e-btn e-primary" ref="sendEmailBtn">Send Email</button>
          </div>
        </div>
      </div>

      <ejs-inline-ai-prompt
        id="inlinePrompt"
        ref="inlinePrompt"
        :command-settings="commandSettings"
        :relate-to="relateToElement"
        :prompt-request="onPromptRequest"
        :response-settings="responseSettings"
        @open="onOpen"
        @close="onClose"
      />
    </div>
  </div>

  <div id="action-description">
    <p>This sample demonstrates the overview functionalities of the Inline AI Prompt component in an email draft assistant scenario. Users can access AI assistance in two ways: hover over any paragraph to see a sparkle button for inline editing, or click the AI Assistant button to enhance the entire email content.</p>
  </div>

  <div id="description">
    <p>In this example, the Inline AI Prompt component showcases the following key features:</p>
    <ul>
      <li><code>commandSettings</code> - Defines predefined AI commands (Summarize, Fix Grammar, Make Professional, Make Friendly)</li>
      <li><code>relateTo</code> - Positions the popup relative to the element provided in the relateTo property</li>
      <li><code>promptRequest</code> - Processes AI requests and adds responses</li>
      <li><code>responseSettings</code> - Handles Accept and Reject actions for AI responses</li>
      <li><code>showPopup</code> - Programmatically opens the AI prompt popup</li>
      <li><code>open</code> and <code>close</code> - Events for tracking popup state</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { InlineAIPromptComponent as EjsInlineAiPrompt } from '@syncfusion/ej2-vue-interactive-chat';
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { getUserID, AI_SERVICE_URL } from '../common/ai-service';

const aiAssistantBtn = ref(null);
const sparkleBtn = ref(null);
const sendEmailBtn = ref(null);
const emailContent = ref(null);
const inlinePrompt = ref(null);

const relateToElement = ref(null);
const selectedCommandText = ref('');
const currentHoveredParagraph = ref(null);
const isGlobalRequest = ref(false);
const isPopupOpen = ref(false);

const initialEmailContent = `<p>Dear Team,</p>
<p>I hope this email finds you well. I wanted to provide you with an update on our current project status. We successfully completed Phase 1 last week, and I'm pleased to share that all deliverables were met according to schedule. The client presentation went well and they expressed satisfaction with our progress.</p>
<p>As we move forward into Phase 2, I would appreciate it if everyone could submit their progress reports by Friday. Additionally, we should schedule a team meeting next week to discuss the upcoming timeline and address any questions or concerns you may have.</p>
<p>Thank you for your continued dedication and hard work on this project.</p>
<p>Best regards,<br>Project Management Team</p>`;

const commandSettings = {
  commands: [
    { id: 'summarize', label: 'Summarize', tooltip: 'Create a brief summary', prompt: 'Summarize the main points', iconCss: 'e-icons e-collapse-2' },
    { id: 'fix-grammar', label: 'Fix Grammar', tooltip: 'Correct grammar and spelling', prompt: 'Fix grammar, spelling, and punctuation errors', iconCss: 'e-icons e-grammar-check' },
    { id: 'make-professional', label: 'Make Professional', tooltip: 'Transform to formal business tone', prompt: 'Rewrite this in a professional, formal business tone', iconCss: 'e-icons e-annotation-edit' },
    { id: 'make-friendly', label: 'Make Friendly', tooltip: 'Make the tone more casual and friendly', prompt: 'Rewrite this in a friendly, casual tone', iconCss: 'e-icons e-ai-chat' }
  ],
  itemSelect: (args) => {
    selectedCommandText.value = args.command.label;
  }
};

const responseSettings = {
  itemSelect: (args) => {
    const instance = inlinePrompt.value?.ej2Instances;
    if (!instance) return;

    if (args.command.label === 'Accept') {
      const lastResponse = instance.prompts?.[instance.prompts.length - 1]?.response;
      if (!lastResponse) return;

      if (isGlobalRequest.value && emailContent.value) {
        emailContent.value.innerHTML = lastResponse;
        attachHoverEventsToParagraphs();
      } else if (currentHoveredParagraph.value) {
        currentHoveredParagraph.value.innerHTML = lastResponse;
      }
      instance.hidePopup();
    } else if (args.command.label === 'Discard') {
      instance.hidePopup();
    }
  }
};

const onPromptRequest = async (args) => {
  const instance = inlinePrompt.value?.ej2Instances;
  if (!instance || !args) return;

  let contentToProcess = '';

  if (isGlobalRequest.value) {
    contentToProcess = emailContent.value ? emailContent.value.innerText : '';
  } else if (currentHoveredParagraph.value) {
    contentToProcess = currentHoveredParagraph.value.innerText;
  }

  const abortController = new AbortController();

  try {
    const userID = await getUserID();

    const response = await fetch(AI_SERVICE_URL + '/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        visitorId: userID,
        messages: {
          messages: [
            { role: 'system', content: 'You are a helpful assistant.' },
            { role: 'user', content: (args?.prompt || '') + contentToProcess }
          ]
        }
      }),
      signal: abortController.signal
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP Error ${response.status}`);
    }

    const result = await response.json();

    let aiResponse = '';

    if (result && result.response) {
      aiResponse = result.response.replace('END_INSERTION', '');
      instance.addResponse(aiResponse);
    }

  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('AI Request aborted by user.');
      return;
    }

    console.error('AI request failed:', error);

    setTimeout(() => {
      instance.addResponse('We could not reach the AI service; please try again later.');
      selectedCommandText.value = '';
    }, 1000);
  }
};

const onOpen = () => {
  isPopupOpen.value = true;
};

const onClose = () => {
  isPopupOpen.value = false;
  selectedCommandText.value = '';
  isGlobalRequest.value = false;
};

const attachHoverEventsToParagraphs = () => {
  emailContent.value?.querySelectorAll(':scope > p').forEach(attachHoverEvent);
};

const attachHoverEvent = (paragraph) => {
  paragraph.addEventListener('mouseenter', () => {
    if (isPopupOpen.value || !paragraph.parentElement?.classList.contains('email-body')) return;

    currentHoveredParagraph.value = paragraph;

    const containerRect = paragraph.parentElement.parentElement.getBoundingClientRect();
    const paraRect = paragraph.getBoundingClientRect();
    const btnHeight = 30;
    const top = (paraRect.top - containerRect.top) + (paraRect.height / 2) - (btnHeight / 2);

    const sparkleEl = sparkleBtn.value?.$el;
    if (sparkleEl) {
      sparkleEl.style.position = 'absolute';
      sparkleEl.style.left = '20px';
      sparkleEl.style.top = `${top}px`;
      sparkleEl.style.display = 'block';
    }
  });
};

const initializeEvents = () => {
  const aiBtnEl = aiAssistantBtn.value?.$el;
  if (aiBtnEl) {
    aiBtnEl.addEventListener('click', () => {
      isGlobalRequest.value = true;
      relateToElement.value = aiBtnEl;
      nextTick(() => inlinePrompt.value?.ej2Instances?.showPopup());
    });
  }

  const sparkleEl = sparkleBtn.value?.$el;
  if (sparkleEl) {
    sparkleEl.addEventListener('mouseenter', () => { sparkleEl.style.display = 'block'; });
    sparkleEl.addEventListener('mouseleave', () => { sparkleEl.style.display = 'none'; });
    sparkleEl.addEventListener('click', () => {
      if (currentHoveredParagraph.value) {
        isGlobalRequest.value = false;
        relateToElement.value = currentHoveredParagraph.value;
        nextTick(() => inlinePrompt.value?.ej2Instances?.showPopup());
      }
    });
  }

  const sendBtnEl = sendEmailBtn.value;
  if (sendBtnEl) {
    sendBtnEl.addEventListener('click', () => {
      if (emailContent.value) {
        emailContent.value.innerHTML = initialEmailContent;
        attachHoverEventsToParagraphs();
        const sparkleEl = sparkleBtn.value?.$el;
        if (sparkleEl) sparkleEl.style.display = 'none';
      }
    });
  }

  if (emailContent.value) {
    emailContent.value.addEventListener('input', () => {
      const sparkleEl = sparkleBtn.value?.$el;
      if (sparkleEl) sparkleEl.style.display = 'none';
    });

    emailContent.value.addEventListener('mouseleave', (e) => {
      const sparkleEl = sparkleBtn.value?.$el;
      if (sparkleEl && e.relatedTarget !== sparkleEl && !sparkleEl.matches(':hover')) {
        sparkleEl.style.display = 'none';
      }
    });
  }
};

onMounted(() => {
  initializeEvents();
  attachHoverEventsToParagraphs();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeName === 'P') attachHoverEvent(node);
      });
    });
  });

  if (emailContent.value) {
    observer.observe(emailContent.value, { childList: true, subtree: true });
  }
});
</script>

<style>
.overview-inlineAIPrompt .email-container:has(.e-rtl).email-container,
.overview-inlineAIPrompt .email-container:has(.e-rtl) .e-input {
    direction: rtl;
    text-align: right;
}

.overview-inlineAIPrompt #sparkleBtn,
.e-bigger .overview-inlineAIPrompt #sparkleBtn {
    max-height: 30px;
    max-width: 30px;
    padding: 6px;
    line-height: 100%;
}

.e-bigger .overview-inlineAIPrompt #sparkleBtn .e-btn .e-btn-icon {
    font-size: 16px;
}

.overview-inlineAIPrompt .e-card:hover,
.overview-inlineAIPrompt .e-card-content:hover {
    background: none;
}

.overview-inlineAIPrompt .demo-title {
    margin: 0 0 15px 10px;
}

.overview-inlineAIPrompt .email-composer {
    border-radius: 12px;
    padding: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.overview-inlineAIPrompt .email-field {
    display: flex;
    align-items: center;
    gap: 12px;
}

.overview-inlineAIPrompt .email-field-vertical {
    display: flex;
    flex-direction: column;
    position: relative;
}

.overview-inlineAIPrompt .field-label {
    font-weight: 600;
    min-width: 80px;
}

.overview-inlineAIPrompt .email-body {
    min-height: 300px;
    margin-top: 15px;
    padding: 10px 15px 10px 40px;
    border: 1px solid;
    border-radius: 8px;
    font-size: 15px;
    line-height: 1.7;
}

.overview-inlineAIPrompt .email-body > p {
    padding: 10px;
    border-radius: 6px;
    position: relative;
    cursor: text;
}

.overview-inlineAIPrompt .email-body > p:hover {
    background: #f8f9fa;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.e-bigger.e-dark-mode .overview-inlineAIPrompt .email-body > p:hover,
.e-dark-mode .overview-inlineAIPrompt .email-body > p:hover,
.fluent2-highcontrast .overview-inlineAIPrompt .email-body > p:hover {
    background: rgba(255, 255, 255, 0.08);
}

.overview-inlineAIPrompt .email-actions,
.e-bigger .overview-inlineAIPrompt .email-actions {
    display: flex;
    justify-content: flex-end;
    padding-top: 0;
    padding-bottom: 0;
}
</style>