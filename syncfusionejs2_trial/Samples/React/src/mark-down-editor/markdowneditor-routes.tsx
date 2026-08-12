import {  Route } from 'react-router-dom';
import * as React from 'react';
import MarkDown from './markdown-editor-functional';
import Preview from './markdown-editor-preview-functional';
import CustomFormat from './markdown-editor-custom-format-functional';


export const markdowneditorRoutes = (
    <>
         <Route  path='/:theme/mark-down-editor/markdown-editor' Component={ MarkDown }/>
         <Route  path='/:theme/mark-down-editor/markdown-editor-preview' Component={ Preview }/>
         <Route  path='/:theme/mark-down-editor/markdown-editor-custom-format' Component={ CustomFormat }/>

    </>
)

export const markdowneditorCategory = {"markdown-editor":{"name":"Overview","category":"Markdown Editor"},"markdown-editor-preview":{"name":"Preview","category":"Markdown Editor"},"markdown-editor-custom-format":{"name":"Custom Format","category":"Markdown Editor"},"defaultSample":"mark-down-editor/markdown-editor"}