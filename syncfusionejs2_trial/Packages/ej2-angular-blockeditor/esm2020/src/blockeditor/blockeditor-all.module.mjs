import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockEditorModule } from './blockeditor.module';
import { Collaboration, VersionHistory } from '@syncfusion/ej2-blockeditor';
import * as i0 from "@angular/core";
export const CollaborationService = { provide: 'BlockEditorCollaboration', useValue: Collaboration };
export const VersionHistoryService = { provide: 'BlockEditorVersionHistory', useValue: VersionHistory };
/**
 * NgModule definition for the BlockEditor component with providers.
 */
export class BlockEditorAllModule {
}
BlockEditorAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
BlockEditorAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorAllModule, imports: [CommonModule, BlockEditorModule], exports: [BlockEditorModule] });
BlockEditorAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorAllModule, providers: [
        CollaborationService,
        VersionHistoryService
    ], imports: [[CommonModule, BlockEditorModule], BlockEditorModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: BlockEditorAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, BlockEditorModule],
                    exports: [
                        BlockEditorModule
                    ],
                    providers: [
                        CollaborationService,
                        VersionHistoryService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2tlZGl0b3ItYWxsLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9ibG9ja2VkaXRvci9ibG9ja2VkaXRvci1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFFLGNBQWMsRUFBQyxNQUFNLDZCQUE2QixDQUFBOztBQUd6RSxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBa0IsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0FBQ25ILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFrQixFQUFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFDLENBQUM7QUFFdEg7O0dBRUc7QUFXSCxNQUFNLE9BQU8sb0JBQW9COztpSEFBcEIsb0JBQW9CO2tIQUFwQixvQkFBb0IsWUFUbkIsWUFBWSxFQUFFLGlCQUFpQixhQUVyQyxpQkFBaUI7a0hBT1osb0JBQW9CLGFBTG5CO1FBQ04sb0JBQW9CO1FBQ3BCLHFCQUFxQjtLQUN4QixZQVBRLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDLEVBRXRDLGlCQUFpQjsyRkFPWixvQkFBb0I7a0JBVmhDLFFBQVE7bUJBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO29CQUMxQyxPQUFPLEVBQUU7d0JBQ0wsaUJBQWlCO3FCQUNwQjtvQkFDRCxTQUFTLEVBQUM7d0JBQ04sb0JBQW9CO3dCQUNwQixxQkFBcUI7cUJBQ3hCO2lCQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFZhbHVlUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBCbG9ja0VkaXRvckNvbXBvbmVudCB9IGZyb20gJy4vYmxvY2tlZGl0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IEJsb2NrRWRpdG9yTW9kdWxlIH0gZnJvbSAnLi9ibG9ja2VkaXRvci5tb2R1bGUnO1xuaW1wb3J0IHtDb2xsYWJvcmF0aW9uLCBWZXJzaW9uSGlzdG9yeX0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWJsb2NrZWRpdG9yJ1xuXG5cbmV4cG9ydCBjb25zdCBDb2xsYWJvcmF0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0Jsb2NrRWRpdG9yQ29sbGFib3JhdGlvbicsIHVzZVZhbHVlOiBDb2xsYWJvcmF0aW9ufTtcbmV4cG9ydCBjb25zdCBWZXJzaW9uSGlzdG9yeVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdCbG9ja0VkaXRvclZlcnNpb25IaXN0b3J5JywgdXNlVmFsdWU6IFZlcnNpb25IaXN0b3J5fTtcblxuLyoqXG4gKiBOZ01vZHVsZSBkZWZpbml0aW9uIGZvciB0aGUgQmxvY2tFZGl0b3IgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEJsb2NrRWRpdG9yTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEJsb2NrRWRpdG9yTW9kdWxlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6W1xuICAgICAgICBDb2xsYWJvcmF0aW9uU2VydmljZSxcbiAgICAgICAgVmVyc2lvbkhpc3RvcnlTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBCbG9ja0VkaXRvckFsbE1vZHVsZSB7IH0iXX0=