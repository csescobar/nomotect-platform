import { Route } from 'react-router-dom';
import * as React from 'react';
import Overview from './ai-overview-functional';
import Default from './ai-default-functional';
import CustomViews from './ai-custom-views-functional';
import Streaming from './ai-streaming-functional';
import Attachments from './ai-attachments-functional';
import GenerativeUI from './ai-generative-ui-functional';
import Thinking from './ai-thinking-functional';
import Template from './ai-template-functional';
import SpeechToText from './ai-speech-to-text-functional';
import TextToSpeech from './ai-text-to-speech-functional';
import NotionAIClone from './ai-notion-ai-clone-functional';
import ClaudeClone from './ai-claude-clone-functional';
import GeminiClone from './ai-gemini-clone-functional';
import Dialog from './ai-dialog-functional';
import AIAssistIntegrations from './ai-models-functional';
export const aiassistviewRoutes = (<>
         <Route path='/:theme/ai-assistview/ai-overview' Component={Overview}/>
         <Route path='/:theme/ai-assistview/ai-default' Component={Default}/>
         <Route path='/:theme/ai-assistview/ai-custom-views' Component={CustomViews}/>
         <Route path='/:theme/ai-assistview/ai-streaming' Component={Streaming}/>
         <Route path='/:theme/ai-assistview/ai-attachments' Component={Attachments}/>
         <Route path='/:theme/ai-assistview/ai-generative-ui' Component={GenerativeUI}/>
         <Route path='/:theme/ai-assistview/ai-thinking' Component={Thinking}/>
         <Route path='/:theme/ai-assistview/ai-template' Component={Template}/>
         <Route path='/:theme/ai-assistview/ai-speech-to-text' Component={SpeechToText}/>
         <Route path='/:theme/ai-assistview/ai-text-to-speech' Component={TextToSpeech}/>
         <Route path='/:theme/ai-assistview/ai-notion-ai-clone' Component={NotionAIClone}/>
         <Route path='/:theme/ai-assistview/ai-claude-clone' Component={ClaudeClone}/>
         <Route path='/:theme/ai-assistview/ai-gemini-clone' Component={GeminiClone}/>
         <Route path='/:theme/ai-assistview/ai-dialog' Component={Dialog}/>
         <Route path='/:theme/ai-assistview/ai-models' Component={AIAssistIntegrations}/>

    </>);
export const aiassistviewCategory = { "ai-overview": { "name": "Overview", "category": "AI AssistView" }, "ai-default": { "name": "Default Functionalities", "category": "AI AssistView" }, "ai-custom-views": { "name": "Custom Views", "category": "AI AssistView" }, "ai-streaming": { "name": "Streaming Response", "category": "AI AssistView" }, "ai-attachments": { "name": "File Attachments", "category": "Integration" }, "ai-generative-ui": { "name": "Generative UI Responses", "category": "AI AssistView" }, "ai-thinking": { "name": "Chain of Thoughts", "category": "AI AssistView" }, "ai-template": { "name": "Template", "category": "AI AssistView" }, "ai-speech-to-text": { "name": "Speech to Text", "category": "Speech" }, "ai-text-to-speech": { "name": "Text to Speech", "category": "Speech" }, "ai-notion-ai-clone": { "name": "Notion AI-like", "category": "UI Customization" }, "ai-claude-clone": { "name": "Claude AI-like", "category": "UI Customization" }, "ai-gemini-clone": { "name": "Gemini AI-like", "category": "UI Customization" }, "ai-dialog": { "name": "Notes Assistant", "category": "Use Cases" }, "ai-models": { "name": "Multiple AI Conversation", "category": "Use Cases" }, "defaultSample": "ai-assistview/ai-overview" };
