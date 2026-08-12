import { Route } from 'react-router-dom';
import * as React from 'react';
import { SmartFileManager } from './smart-filemanager';
export const aifilemanagerRoutes = (<>
         <Route path='/:theme/ai-filemanager/smart-filemanager' Component={SmartFileManager}/>

    </>);
export const aifilemanagerCategory = { "smart-filemanager": { "name": "Smart FileManager", "category": "File Manager" }, "defaultSample": "ai-filemanager/smart-filemanager" };
