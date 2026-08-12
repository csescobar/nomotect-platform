import { loadCultureFiles } from '../common/culture-loader';
import { Timeline, ItemModel } from '@syncfusion/ej2-layouts';

/**
 *  Sample for opposite content
 */
(window as any).default = (): void => {
    loadCultureFiles();
    
    const opposite: ItemModel[] = [
        { oppositeContent: '09:30 am', content: 'Ordered'},
        { oppositeContent: '10:30 am', content: 'Processing'},
        { oppositeContent: '11:30 am', content: 'Shipped'},
        { oppositeContent: '12:30 pm', content: 'Delivered'}
    ];
    
    const oppositeTimeline: Timeline = new Timeline({
        items: opposite,
    });
    oppositeTimeline.appendTo('#opposite-content-timeline');
};
