import { Route } from 'react-router-dom';
import * as React from 'react';
import Overview from './overview-functional';
import PasteSettings from './pasteSettings-functional';
import API from './api-functional';
import Events from './events-functional';
import TemplateGallery from './template-functional';
import MarkdownBlocks from './markdown-functional';
import AskAIAssistant from './ai-ask-assistant-functional';
export const blockeditorRoutes = (<>
         <Route path='/:theme/block-editor/overview' Component={Overview}/>
         <Route path='/:theme/block-editor/pasteSettings' Component={PasteSettings}/>
         <Route path='/:theme/block-editor/api' Component={API}/>
         <Route path='/:theme/block-editor/events' Component={Events}/>
         <Route path='/:theme/block-editor/template' Component={TemplateGallery}/>
         <Route path='/:theme/block-editor/markdown' Component={MarkdownBlocks}/>
         <Route path='/:theme/block-editor/ai-ask-assistant' Component={AskAIAssistant}/>

    </>);
export const blockeditorCategory = { "overview": { "name": "Overview", "category": "Block Editor" }, "pasteSettings": { "name": "Paste Cleanup", "category": "Block Editor" }, "api": { "name": "API", "category": "Block Editor" }, "events": { "name": "Events", "category": "Block Editor" }, "template": { "name": "Template Gallery", "category": "Use Cases" }, "markdown": { "name": "Markdown Blocks", "category": "Use Cases" }, "ai-ask-assistant": { "name": "Ask AI Assistant", "category": "Smart AI Solutions" }, "defaultSample": "block-editor/overview" };
