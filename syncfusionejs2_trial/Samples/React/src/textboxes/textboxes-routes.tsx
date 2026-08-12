import {  Route } from 'react-router-dom';
import * as React from 'react';
import Default from './default-functional';
import Multiline from './multiline-functional';
import Adornments from './adornments-functional';


export const textboxesRoutes = (
    <>
         <Route  path='/:theme/textboxes/default' Component={ Default }/>
         <Route  path='/:theme/textboxes/multiline' Component={ Multiline }/>
         <Route  path='/:theme/textboxes/adornments' Component={ Adornments }/>

    </>
)

export const textboxesCategory = {"default":{"name":"Default Functionalities","category":"TextBox"},"multiline":{"name":"Multiline TextBox","category":"TextBox"},"adornments":{"name":"Adornments","category":"TextBox"},"defaultSample":"textboxes/default"}