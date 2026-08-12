import { Route } from 'react-router-dom';
import * as React from 'react';
import AIAssistant from './ai-assistant-functional';
export const airichtexteditorRoutes = (<>
         <Route path='/:theme/ai-rich-text-editor/ai-assistant' Component={AIAssistant}/>

    </>);
export const airichtexteditorCategory = { "ai-assistant": { "name": "AI Assistant", "category": "Rich Text Editor" }, "defaultSample": "ai-rich-text-editor/ai-assistant" };
