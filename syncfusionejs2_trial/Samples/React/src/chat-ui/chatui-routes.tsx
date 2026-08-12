import {  Route } from 'react-router-dom';
import * as React from 'react';
import Default from './default-functional';
import LoadOnDemand from './load-on-demand-functional';
import Attachments from './attachments-functional';
import Template from './template-functional';
import API from './api-functional';
import ChatIntegration from './chat-integration-functional';


export const chatuiRoutes = (
    <>
         <Route  path='/:theme/chat-ui/default' Component={ Default }/>
         <Route  path='/:theme/chat-ui/load-on-demand' Component={ LoadOnDemand }/>
         <Route  path='/:theme/chat-ui/attachments' Component={ Attachments }/>
         <Route  path='/:theme/chat-ui/template' Component={ Template }/>
         <Route  path='/:theme/chat-ui/api' Component={ API }/>
         <Route  path='/:theme/chat-ui/chat-integration' Component={ ChatIntegration }/>

    </>
)

export const chatuiCategory = {"default":{"name":"Default Functionalities","category":"Chat UI"},"load-on-demand":{"name":"Load On-demand","category":"Chat UI"},"attachments":{"name":"File Attachments","category":"Chat UI"},"template":{"name":"Template","category":"Chat UI"},"api":{"name":"API","category":"Chat UI"},"chat-integration":{"name":"Use Case","category":"Chat UI"},"defaultSample":"chat-ui/default"}