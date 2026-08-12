import { loadCultureFiles } from '../common/culture-loader';
import { Timeline, ItemModel } from '@syncfusion/ej2-layouts';

/**
 *  Sample for orientation
 */
(window as any).default = (): void => {
    loadCultureFiles();
    const content: ItemModel[] = [
        { content: '2021' },
        { content: '2022' },
        { content: '2023' },
        { content: '2024' }
    ];
    
    const orientationTimeline: Timeline = new Timeline({
        items: content,
        orientation: 'horizontal'
    });
    orientationTimeline.appendTo('#orientation');

    (window as any).updateOrientation = (args: any) => {
        orientationTimeline.orientation = args.value;
    };
};
