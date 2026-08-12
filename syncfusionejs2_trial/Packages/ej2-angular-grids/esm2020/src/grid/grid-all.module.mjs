import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from './grid.module';
import { Filter, Page, Selection, Sort, Group, Reorder, RowDD, DetailRow, Toolbar, Aggregate, Search, VirtualScroll, Edit, Resize, ExcelExport, PdfExport, CommandColumn, ContextMenu, Freeze, ColumnMenu, ColumnChooser, ForeignKey, InfiniteScroll, LazyLoadGroup, DomVirtualization } from '@syncfusion/ej2-grids';
import * as i0 from "@angular/core";
export const FilterService = { provide: 'GridsFilter', useValue: Filter };
export const PageService = { provide: 'GridsPage', useValue: Page };
export const SelectionService = { provide: 'GridsSelection', useValue: Selection };
export const SortService = { provide: 'GridsSort', useValue: Sort };
export const GroupService = { provide: 'GridsGroup', useValue: Group };
export const ReorderService = { provide: 'GridsReorder', useValue: Reorder };
export const RowDDService = { provide: 'GridsRowDD', useValue: RowDD };
export const DetailRowService = { provide: 'GridsDetailRow', useValue: DetailRow };
export const ToolbarService = { provide: 'GridsToolbar', useValue: Toolbar };
export const AggregateService = { provide: 'GridsAggregate', useValue: Aggregate };
export const SearchService = { provide: 'GridsSearch', useValue: Search };
export const VirtualScrollService = { provide: 'GridsVirtualScroll', useValue: VirtualScroll };
export const EditService = { provide: 'GridsEdit', useValue: Edit };
export const ResizeService = { provide: 'GridsResize', useValue: Resize };
export const ExcelExportService = { provide: 'GridsExcelExport', useValue: ExcelExport };
export const PdfExportService = { provide: 'GridsPdfExport', useValue: PdfExport };
export const CommandColumnService = { provide: 'GridsCommandColumn', useValue: CommandColumn };
export const ContextMenuService = { provide: 'GridsContextMenu', useValue: ContextMenu };
export const FreezeService = { provide: 'GridsFreeze', useValue: Freeze };
export const ColumnMenuService = { provide: 'GridsColumnMenu', useValue: ColumnMenu };
export const ColumnChooserService = { provide: 'GridsColumnChooser', useValue: ColumnChooser };
export const ForeignKeyService = { provide: 'GridsForeignKey', useValue: ForeignKey };
export const InfiniteScrollService = { provide: 'GridsInfiniteScroll', useValue: InfiniteScroll };
export const LazyLoadGroupService = { provide: 'GridsLazyLoadGroup', useValue: LazyLoadGroup };
export const DomVirtualizationService = { provide: 'GridsDomVirtualization', useValue: DomVirtualization };
/**
 * NgModule definition for the Grid component with providers.
 */
export class GridAllModule {
}
GridAllModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
GridAllModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, imports: [CommonModule, GridModule], exports: [GridModule] });
GridAllModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, providers: [
        FilterService,
        PageService,
        SelectionService,
        SortService,
        GroupService,
        ReorderService,
        RowDDService,
        DetailRowService,
        ToolbarService,
        AggregateService,
        SearchService,
        VirtualScrollService,
        EditService,
        ResizeService,
        ExcelExportService,
        PdfExportService,
        CommandColumnService,
        ContextMenuService,
        FreezeService,
        ColumnMenuService,
        ColumnChooserService,
        ForeignKeyService,
        InfiniteScrollService,
        LazyLoadGroupService,
        DomVirtualizationService
    ], imports: [[CommonModule, GridModule], GridModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.3", ngImport: i0, type: GridAllModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, GridModule],
                    exports: [
                        GridModule
                    ],
                    providers: [
                        FilterService,
                        PageService,
                        SelectionService,
                        SortService,
                        GroupService,
                        ReorderService,
                        RowDDService,
                        DetailRowService,
                        ToolbarService,
                        AggregateService,
                        SearchService,
                        VirtualScrollService,
                        EditService,
                        ResizeService,
                        ExcelExportService,
                        PdfExportService,
                        CommandColumnService,
                        ContextMenuService,
                        FreezeService,
                        ColumnMenuService,
                        ColumnChooserService,
                        ForeignKeyService,
                        InfiniteScrollService,
                        LazyLoadGroupService,
                        DomVirtualizationService
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1hbGwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2dyaWQvZ3JpZC1hbGwubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQU0vQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHVCQUF1QixDQUFBOztBQUduVCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQWtCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDeEYsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFrQixFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLENBQUM7QUFDakcsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFrQixFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDO0FBQ2xGLE1BQU0sQ0FBQyxNQUFNLFlB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ciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFN0YWNrZWRDb2x1bW5EaXJlY3RpdmUsIFN0YWNrZWRDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGFja2VkLWNvbHVtbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uRGlyZWN0aXZlLCBDb2x1bW5zRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVDb2x1bW5EaXJlY3RpdmUsIEFnZ3JlZ2F0ZUNvbHVtbnNEaXJlY3RpdmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZS1jb2x1bW5zLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBBZ2dyZWdhdGVEaXJlY3RpdmUsIEFnZ3JlZ2F0ZXNEaXJlY3RpdmUgfSBmcm9tICcuL2FnZ3JlZ2F0ZXMuZGlyZWN0aXZlJztcbmltcG9ydCB7IEdyaWRDb21wb25lbnQgfSBmcm9tICcuL2dyaWQuY29tcG9uZW50JztcbmltcG9ydCB7IEdyaWRNb2R1bGUgfSBmcm9tICcuL2dyaWQubW9kdWxlJztcbmltcG9ydCB7RmlsdGVyLCBQYWdlLCBTZWxlY3Rpb24sIFNvcnQsIEdyb3VwLCBSZW9yZGVyLCBSb3dERCwgRGV0YWlsUm93LCBUb29sYmFyLCBBZ2dyZWdhdGUsIFNlYXJjaCwgVmlydHVhbFNjcm9sbCwgRWRpdCwgUmVzaXplLCBFeGNlbEV4cG9ydCwgUGRmRXhwb3J0LCBDb21tYW5kQ29sdW1uLCBDb250ZXh0TWVudSwgRnJlZXplLCBDb2x1bW5NZW51LCBDb2x1bW5DaG9vc2VyLCBGb3JlaWduS2V5LCBJbmZpbml0ZVNjcm9sbCwgTGF6eUxvYWRHcm91cCwgRG9tVmlydHVhbGl6YXRpb259IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1ncmlkcydcblxuXG5leHBvcnQgY29uc3QgRmlsdGVyU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzRmlsdGVyJywgdXNlVmFsdWU6IEZpbHRlcn07XG5leHBvcnQgY29uc3QgUGFnZVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1BhZ2UnLCB1c2VWYWx1ZTogUGFnZX07XG5leHBvcnQgY29uc3QgU2VsZWN0aW9uU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzU2VsZWN0aW9uJywgdXNlVmFsdWU6IFNlbGVjdGlvbn07XG5leHBvcnQgY29uc3QgU29ydFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1NvcnQnLCB1c2VWYWx1ZTogU29ydH07XG5leHBvcnQgY29uc3QgR3JvdXBTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNHcm91cCcsIHVzZVZhbHVlOiBHcm91cH07XG5leHBvcnQgY29uc3QgUmVvcmRlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1Jlb3JkZXInLCB1c2VWYWx1ZTogUmVvcmRlcn07XG5leHBvcnQgY29uc3QgUm93RERTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNSb3dERCcsIHVzZVZhbHVlOiBSb3dERH07XG5leHBvcnQgY29uc3QgRGV0YWlsUm93U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzRGV0YWlsUm93JywgdXNlVmFsdWU6IERldGFpbFJvd307XG5leHBvcnQgY29uc3QgVG9vbGJhclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1Rvb2xiYXInLCB1c2VWYWx1ZTogVG9vbGJhcn07XG5leHBvcnQgY29uc3QgQWdncmVnYXRlU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzQWdncmVnYXRlJywgdXNlVmFsdWU6IEFnZ3JlZ2F0ZX07XG5leHBvcnQgY29uc3QgU2VhcmNoU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzU2VhcmNoJywgdXNlVmFsdWU6IFNlYXJjaH07XG5leHBvcnQgY29uc3QgVmlydHVhbFNjcm9sbFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc1ZpcnR1YWxTY3JvbGwnLCB1c2VWYWx1ZTogVmlydHVhbFNjcm9sbH07XG5leHBvcnQgY29uc3QgRWRpdFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0VkaXQnLCB1c2VWYWx1ZTogRWRpdH07XG5leHBvcnQgY29uc3QgUmVzaXplU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzUmVzaXplJywgdXNlVmFsdWU6IFJlc2l6ZX07XG5leHBvcnQgY29uc3QgRXhjZWxFeHBvcnRTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNFeGNlbEV4cG9ydCcsIHVzZVZhbHVlOiBFeGNlbEV4cG9ydH07XG5leHBvcnQgY29uc3QgUGRmRXhwb3J0U2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzUGRmRXhwb3J0JywgdXNlVmFsdWU6IFBkZkV4cG9ydH07XG5leHBvcnQgY29uc3QgQ29tbWFuZENvbHVtblNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0NvbW1hbmRDb2x1bW4nLCB1c2VWYWx1ZTogQ29tbWFuZENvbHVtbn07XG5leHBvcnQgY29uc3QgQ29udGV4dE1lbnVTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNDb250ZXh0TWVudScsIHVzZVZhbHVlOiBDb250ZXh0TWVudX07XG5leHBvcnQgY29uc3QgRnJlZXplU2VydmljZTogVmFsdWVQcm92aWRlciA9IHsgcHJvdmlkZTogJ0dyaWRzRnJlZXplJywgdXNlVmFsdWU6IEZyZWV6ZX07XG5leHBvcnQgY29uc3QgQ29sdW1uTWVudVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0NvbHVtbk1lbnUnLCB1c2VWYWx1ZTogQ29sdW1uTWVudX07XG5leHBvcnQgY29uc3QgQ29sdW1uQ2hvb3NlclNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0NvbHVtbkNob29zZXInLCB1c2VWYWx1ZTogQ29sdW1uQ2hvb3Nlcn07XG5leHBvcnQgY29uc3QgRm9yZWlnbktleVNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0ZvcmVpZ25LZXknLCB1c2VWYWx1ZTogRm9yZWlnbktleX07XG5leHBvcnQgY29uc3QgSW5maW5pdGVTY3JvbGxTZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNJbmZpbml0ZVNjcm9sbCcsIHVzZVZhbHVlOiBJbmZpbml0ZVNjcm9sbH07XG5leHBvcnQgY29uc3QgTGF6eUxvYWRHcm91cFNlcnZpY2U6IFZhbHVlUHJvdmlkZXIgPSB7IHByb3ZpZGU6ICdHcmlkc0xhenlMb2FkR3JvdXAnLCB1c2VWYWx1ZTogTGF6eUxvYWRHcm91cH07XG5leHBvcnQgY29uc3QgRG9tVmlydHVhbGl6YXRpb25TZXJ2aWNlOiBWYWx1ZVByb3ZpZGVyID0geyBwcm92aWRlOiAnR3JpZHNEb21WaXJ0dWFsaXphdGlvbicsIHVzZVZhbHVlOiBEb21WaXJ0dWFsaXphdGlvbn07XG5cbi8qKlxuICogTmdNb2R1bGUgZGVmaW5pdGlvbiBmb3IgdGhlIEdyaWQgY29tcG9uZW50IHdpdGggcHJvdmlkZXJzLlxuICovXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEdyaWRNb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgR3JpZE1vZHVsZVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgRmlsdGVyU2VydmljZSxcbiAgICAgICAgUGFnZVNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGlvblNlcnZpY2UsXG4gICAgICAgIFNvcnRTZXJ2aWNlLFxuICAgICAgICBHcm91cFNlcnZpY2UsXG4gICAgICAgIFJlb3JkZXJTZXJ2aWNlLFxuICAgICAgICBSb3dERFNlcnZpY2UsXG4gICAgICAgIERldGFpbFJvd1NlcnZpY2UsXG4gICAgICAgIFRvb2xiYXJTZXJ2aWNlLFxuICAgICAgICBBZ2dyZWdhdGVTZXJ2aWNlLFxuICAgICAgICBTZWFyY2hTZXJ2aWNlLFxuICAgICAgICBWaXJ0dWFsU2Nyb2xsU2VydmljZSxcbiAgICAgICAgRWRpdFNlcnZpY2UsXG4gICAgICAgIFJlc2l6ZVNlcnZpY2UsXG4gICAgICAgIEV4Y2VsRXhwb3J0U2VydmljZSxcbiAgICAgICAgUGRmRXhwb3J0U2VydmljZSxcbiAgICAgICAgQ29tbWFuZENvbHVtblNlcnZpY2UsXG4gICAgICAgIENvbnRleHRNZW51U2VydmljZSxcbiAgICAgICAgRnJlZXplU2VydmljZSxcbiAgICAgICAgQ29sdW1uTWVudVNlcnZpY2UsXG4gICAgICAgIENvbHVtbkNob29zZXJTZXJ2aWNlLFxuICAgICAgICBGb3JlaWduS2V5U2VydmljZSxcbiAgICAgICAgSW5maW5pdGVTY3JvbGxTZXJ2aWNlLFxuICAgICAgICBMYXp5TG9hZEdyb3VwU2VydmljZSxcbiAgICAgICAgRG9tVmlydHVhbGl6YXRpb25TZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkQWxsTW9kdWxlIHsgfSJdfQ==