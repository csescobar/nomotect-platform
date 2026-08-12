import {  Route } from 'react-router-dom';
import * as React from 'react';
import Default from './default-functional';
import Orientation from './orientation-functional';
import Print from './print-export-functional';


export const sankeyRoutes = (
    <>
         <Route  path='/:theme/sankey/default' Component={ Default }/>
         <Route  path='/:theme/sankey/orientation' Component={ Orientation }/>
         <Route  path='/:theme/sankey/print-export' Component={ Print }/>

    </>
)

export const sankeyCategory = {"default":{"name":"Default","category":"Sankey"},"orientation":{"name":"Vertical Mode","category":"Sankey"},"print-export":{"name":"Print and Export","category":"Sankey"},"defaultSample":"sankey/default"}