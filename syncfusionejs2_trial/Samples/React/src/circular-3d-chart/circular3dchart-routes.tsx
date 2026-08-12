import {  Route } from 'react-router-dom';
import * as React from 'react';
import undefined from './pie-functional';
import DonutSeries from './donut-functional';
import PieWithLegend from './pie-legend-functional';
import Selection from './selection-functional';


export const circular3dchartRoutes = (
    <>
         <Route  path='/:theme/circular-3d-chart/pie' Component={ undefined }/>
         <Route  path='/:theme/circular-3d-chart/donut' Component={ DonutSeries }/>
         <Route  path='/:theme/circular-3d-chart/pie-legend' Component={ PieWithLegend }/>
         <Route  path='/:theme/circular-3d-chart/selection' Component={ Selection }/>

    </>
)

export const circular3dchartCategory = {"pie":{"name":"Pie","category":"Circular 3D"},"donut":{"name":"Donut","category":"Circular 3D"},"pie-legend":{"name":"Pie with Legend","category":"Circular 3D"},"selection":{"name":"Selection","category":"Circular 3D"},"defaultSample":"circular-3d-chart/pie"}