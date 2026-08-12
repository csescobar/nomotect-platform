import { loadCultureFiles } from '../common/culture-loader';
import { Sankey, SankeyHighlight, SankeyLegend, SankeyLoadedEventArgs, SankeyTooltip, SankeyExport } from '@syncfusion/ej2-charts';
import { loadSankeyChartTheme } from './theme-color';
import { Browser } from '@syncfusion/ej2/base';

Sankey.Inject(SankeyHighlight, SankeyLegend, SankeyTooltip, SankeyExport);

/**
 * Sample demonstrating Sankey chart in Right-to-Left (RTL) mode
 * showing global supply chain freight shipments by mode and region
 */
(window as any).default = (): void => {
    loadCultureFiles();

    const nodes = [
        { id: 'Books' },
        { id: 'Clothing' },
        { id: 'Electronics' },
        { id: 'Furniture' },
        { id: 'Jewelry' },
        { id: 'Toys' },
        { id: 'Air' },
        { id: 'Ground' },
        { id: 'Sea' },
        { id: 'Asia' },
        { id: 'Europe' },
        { id: 'North America' },
        { id: 'South America' },
        { id: 'Delayed' },
        { id: 'Delivered' },
        { id: 'In Transit' }
    ];

    const links = [
        { sourceId: 'Books', targetId: 'Air', value: 18 },
        { sourceId: 'Books', targetId: 'Ground', value: 12 },
        { sourceId: 'Clothing', targetId: 'Air', value: 25 },
        { sourceId: 'Clothing', targetId: 'Ground', value: 15 },
        { sourceId: 'Clothing', targetId: 'Sea', value: 20 },
        { sourceId: 'Electronics', targetId: 'Air', value: 35 },
        { sourceId: 'Electronics', targetId: 'Ground', value: 22 },
        { sourceId: 'Electronics', targetId: 'Sea', value: 18 },
        { sourceId: 'Furniture', targetId: 'Ground', value: 28 },
        { sourceId: 'Furniture', targetId: 'Sea', value: 25 },
        { sourceId: 'Jewelry', targetId: 'Air', value: 12 },
        { sourceId: 'Jewelry', targetId: 'Ground', value: 8 },
        { sourceId: 'Toys', targetId: 'Ground', value: 15 },
        { sourceId: 'Toys', targetId: 'Sea', value: 22 },
        { sourceId: 'Air', targetId: 'Asia', value: 40 },
        { sourceId: 'Air', targetId: 'Europe', value: 30 },
        { sourceId: 'Air', targetId: 'North America', value: 20 },
        { sourceId: 'Ground', targetId: 'Europe', value: 35 },
        { sourceId: 'Ground', targetId: 'North America', value: 30 },
        { sourceId: 'Ground', targetId: 'South America', value: 15 },
        { sourceId: 'Ground', targetId: 'Asia', value: 20 },
        { sourceId: 'Sea', targetId: 'Asia', value: 25 },
        { sourceId: 'Sea', targetId: 'Europe', value: 15 },
        { sourceId: 'Sea', targetId: 'North America', value: 30 },
        { sourceId: 'Sea', targetId: 'South America', value: 15 },
        { sourceId: 'Asia', targetId: 'Delayed', value: 35 },
        { sourceId: 'Asia', targetId: 'Delivered', value: 40 },
        { sourceId: 'Asia', targetId: 'In Transit', value: 10 },
        { sourceId: 'Europe', targetId: 'Delivered', value: 65 },
        { sourceId: 'Europe', targetId: 'In Transit', value: 15 },
        { sourceId: 'North America', targetId: 'Delivered', value: 50 },
        { sourceId: 'North America', targetId: 'In Transit', value: 30 },
        { sourceId: 'South America', targetId: 'Delayed', value: 10 },
        { sourceId: 'South America', targetId: 'In Transit', value: 20 }
    ];

    const sankey: Sankey = new Sankey({
        width: '95%',
        height: '450px',
        title: 'Supply Chain Management',
        subTitle: 'Source: OECD‑ITF Global Freight Data',
        enableRtl: true,
        orientation: 'Horizontal',
        background: 'transparent',
        margin: { left: 20, right: 20, top: 20, bottom: 20 },
        nodes: nodes,
        links: links,
        linkStyle: {
            opacity: 0.4,
            curvature: 0.5,
            colorType: 'Source'
        },
        labelSettings: {
            visible: Browser.isDevice ? false : true,
        },
        tooltip: {
            enable: true,
            sankeyNodeTemplate: '${name}: ${value}k shipments',
            sankeyLinkTemplate: '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments'
        },
        legendSettings: {
            visible: true
        },
        load: (args: SankeyLoadedEventArgs) => {
            loadSankeyChartTheme(args);
        }
    });

    sankey.appendTo('#sankey-right-to-left');
};