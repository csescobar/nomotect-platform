import {  Route } from 'react-router-dom';
import * as React from 'react';
import Overview from './ai-overview-functional';
import RichTextEditor from './ai-rich-text-editor-functional';


export const inlineaipromptRoutes = (
    <>
         <Route  path='/:theme/inline-ai-prompt/ai-overview' Component={ Overview }/>
         <Route  path='/:theme/inline-ai-prompt/ai-rich-text-editor' Component={ RichTextEditor }/>

    </>
)

export const inlineaipromptCategory = {"ai-overview":{"name":"Overview","category":"Inline AI Prompt"},"ai-rich-text-editor":{"name":"Rich-Text-editor","category":"Inline AI Prompt"},"defaultSample":"inline-ai-prompt/ai-overview"}