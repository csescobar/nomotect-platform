import { loadCultureFiles } from '../common/culture-loader';
import { Timeline, ItemModel } from '@syncfusion/ej2-layouts';

/**
 *  Sample for position
 */
(window as any).default = (): void => {
    loadCultureFiles();
    const content: ItemModel[] = [
        { content: 'Ordered' },
        { content: 'Processing' },
        { content: 'Shipped' },
        { content: 'Delivered' }
    ];
    
    const positionTimeline: Timeline = new Timeline({
        items: content,
        align: 'before'
    });
    positionTimeline.appendTo('#position');

    (window as any).updatePosition = (args: any) => {
        positionTimeline.align = args.value;
    };
};
