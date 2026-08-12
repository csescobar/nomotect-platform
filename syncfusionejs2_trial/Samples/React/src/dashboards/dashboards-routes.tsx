import {  Route } from 'react-router-dom';
import * as React from 'react';
import { HealthcareDashboard } from './healthcare-dashboard';
import { EcommerceMarketingDashboard } from './ecommerce-marketing-dashboard';
import { InsuranceDashboard } from './insurance-dashboard';
import { HRManagementDashboard } from './hr-management-dashboard';
import { FinanceDashboard } from './finance-dashboard';
import { CustomerSupportDashboard } from './customer-support-dashboard';


export const dashboardsRoutes = (
    <>
         <Route  path='/:theme/dashboards/healthcare-dashboard' Component={ HealthcareDashboard }/>
         <Route  path='/:theme/dashboards/ecommerce-marketing-dashboard' Component={ EcommerceMarketingDashboard }/>
         <Route  path='/:theme/dashboards/insurance-dashboard' Component={ InsuranceDashboard }/>
         <Route  path='/:theme/dashboards/hr-management-dashboard' Component={ HRManagementDashboard }/>
         <Route  path='/:theme/dashboards/finance-dashboard' Component={ FinanceDashboard }/>
         <Route  path='/:theme/dashboards/customer-support-dashboard' Component={ CustomerSupportDashboard }/>

    </>
)

export const dashboardsCategory = {"healthcare-dashboard":{"name":"Healthcare Sales Dashboard","category":"Dashboards"},"ecommerce-marketing-dashboard":{"name":"E-Commerce Marketing Dashboard","category":"Dashboards"},"insurance-dashboard":{"name":"Insurance Dashboard","category":"Dashboards"},"hr-management-dashboard":{"name":"HR Management Dashboard","category":"Dashboards"},"finance-dashboard":{"name":"Finance Dashboard","category":"Dashboards"},"customer-support-dashboard":{"name":"Customer Support Dashboard","category":"Dashboards"},"defaultSample":"dashboards/healthcare-dashboard"}