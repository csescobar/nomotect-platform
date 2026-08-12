import {  Route } from 'react-router-dom';
import * as React from 'react';
import { AssistivePivot } from './assistive-pivot';
import { SmartPivot } from './smart-pivot';


export const aipivottableRoutes = (
    <>
         <Route  path='/:theme/ai-pivot-table/assistive-pivot' Component={ AssistivePivot }/>
         <Route  path='/:theme/ai-pivot-table/smart-pivot' Component={ SmartPivot }/>

    </>
)

export const aipivottableCategory = {"assistive-pivot":{"name":"Assistive Pivot","category":"Pivot Table"},"smart-pivot":{"name":"Smart Pivot","category":"Pivot Table"},"defaultSample":"ai-pivot-table/assistive-pivot"}