import { Route } from 'react-router-dom';
import * as React from 'react';
import Overview from './ai-overview-functional';
import RichTextEditor from './ai-rich-text-editor-functional';
export const inlineaiassistRoutes = (<>
         <Route path='/:theme/inline-ai-assist/ai-overview' Component={Overview}/>
         <Route path='/:theme/inline-ai-assist/ai-rich-text-editor' Component={RichTextEditor}/>

    </>);
export const inlineaiassistCategory = { "ai-overview": { "name": "Overview", "category": "Inline AI Assist" }, "ai-rich-text-editor": { "name": "Rich Text Editor", "category": "Inline AI Assist" }, "defaultSample": "inline-ai-assist/ai-overview" };
