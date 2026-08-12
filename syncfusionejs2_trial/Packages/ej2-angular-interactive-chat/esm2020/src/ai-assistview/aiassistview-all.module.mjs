import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AIAssistViewModule } from './aiassistview.module';
import { AssistThinking } from '@syncfusion/ej2-interactive-chat';
import * as i0 from "@angular/core";
export const AssistThinkingService = { provide: 'Interactive-ChatAssistThinking', useValue: AssistThinking };
/**
 * NgModule definition for the AIAssistView component with providers.
 */
export class AIAssistViewAllModule {
}
AIAssistViewAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AIAssistViewAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, imports: [CommonModule, AIAssistViewModule], exports: [AIAssistViewModule] });
AIAssistViewAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, providers: [
        AssistThinkingService
    ], imports: [[CommonModule, AIAssistViewModule], AIAssistViewModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: AIAssistViewAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, AIAssistViewModule],
                    exports: [
                        AIAssistViewModule
                    ],
                    providers: [
                        AssistThinkingService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlhc3Npc3R2aWV3LWFsbC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWktYXNzaXN0dmlldy9haWFzc2lzdHZpZXctYWxsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGtDQUFrQyxDQUFBOztBQUcvRCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBa0IsRUFBRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBQyxDQUFDO0FBRTNIOztHQUVHO0FBVUgsTUFBTSxPQUFPLHFCQUFxQjs7a0hBQXJCLHFCQUFxQjttSEFBckIscUJBQXFCLFlBUnBCLFlBQVksRUFBRSxrQkFBa0IsYUFFdEMsa0JBQWtCO21IQU1iLHFCQUFxQixhQUpwQjtRQUNOLHFCQUFxQjtLQUN4QixZQU5RLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDLEVBRXZDLGtCQUFrQjsyRkFNYixxQkFBcUI7a0JBVGpDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGtCQUFrQixDQUFDO29CQUMzQyxPQUFPLEVBQUU7d0JBQ0wsa0JBQWtCO3FCQUNyQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04scUJBQXFCO3FCQUN4QjtpQkFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBWYWx1ZVByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVmlld0RpcmVjdGl2ZSwgVmlld3NEaXJlY3RpdmUgfSBmcm9tICcuL3ZpZXdzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBSUFzc2lzdFZpZXdDb21wb25lbnQgfSBmcm9tICcuL2FpYXNzaXN0dmlldy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQUlBc3Npc3RWaWV3TW9kdWxlIH0gZnJvbSAnLi9haWFzc2lzdHZpZXcubW9kdWxlJztcbmltcG9ydCB7QXNzaXN0VGhpbmtpbmd9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1pbnRlcmFjdGl2ZS1jaGF0J1xuXG5cbmV4cG9ydCBjb25zdCBBc3Npc3RUaGlua2luZ1NlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdJbnRlcmFjdGl2ZS1DaGF0QXNzaXN0VGhpbmtpbmcnLCB1c2VWYWx1ZTogQXNzaXN0VGhpbmtpbmd9O1xuXG4vKipcbiAqIE5nTW9kdWxlIGRlZmluaXRpb24gZm9yIHRoZSBBSUFzc2lzdFZpZXcgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFJQXNzaXN0Vmlld01vZHVsZV0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBBSUFzc2lzdFZpZXdNb2R1bGVcbiAgICBdLFxuICAgIHByb3ZpZGVyczpbXG4gICAgICAgIEFzc2lzdFRoaW5raW5nU2VydmljZVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQUlBc3Npc3RWaWV3QWxsTW9kdWxlIHsgfSJdfQ==