/** Right-to-Left sample for Sankey */
import * as React from 'react';
import { SankeyComponent, SankeyNodesCollectionDirective, SankeyNodeDirective, SankeyLinksCollectionDirective, SankeyLinkDirective, Inject, SankeyTooltip, SankeyLegend, SankeyHighlight, SankeyNodeModel, SankeyLinkModel, SankeyExport } from '@syncfusion/ej2-react-charts';
import { SampleBase } from '../common/sample-base';
import { loadSankeyChartTheme } from './theme-color';
import { Browser } from '@syncfusion/ej2/base';

const SAMPLE_CSS = `
  .control-fluid { padding: 0 !important; }
  #sankey-right-to-left { text-align: center; }
`;

const nodes: SankeyNodeModel[] = [
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

const links: SankeyLinkModel[] = [
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

export class RightToLeft extends SampleBase<{}, {}> {
  public onLoaded = (): void => {
    const element = document.getElementById('sankey-right-to-left');
    if (element) element.setAttribute('title', '');
  };

  public load = (args): void => {
    loadSankeyChartTheme(args);
  };

  render() {
    return (
      <div className="control-pane">
        <style>{SAMPLE_CSS}</style>

        <div className="control-section">
          <SankeyComponent
            id="sankey-right-to-left"
            width="95%"
            height="450"
            title= 'Supply Chain Management'
            subTitle= 'Source: OECD‑ITF Global Freight Data'
            enableRtl={true}
            orientation="Horizontal"
            background="transparent"
            margin={{ left: 20, right: 20, top: 20, bottom: 20 }}
            border={{ color: '#E0E0E0', width: 0 }}
            linkStyle={{ opacity: 0.4, curvature: 0.5, colorType: 'Source' }}
            labelSettings={{ visible: Browser.isDevice ? false : true }}
            tooltip={{ enable: true, sankeyNodeTemplate: '${name}: ${value}k shipments', sankeyLinkTemplate: Browser.isDevice ? '${start.name}: ${start.out}k <br/> → ${target.name}: ${target.in}k shipments' :  '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments' }}
            legendSettings={{ visible: true }}
            load={this.load}
            loaded={this.onLoaded}
          >
            <Inject services={[SankeyTooltip, SankeyLegend, SankeyHighlight, SankeyExport]} />

            <SankeyNodesCollectionDirective>
              {nodes.map((node) => (
                <SankeyNodeDirective key={node.id} id={node.id} color={node.color} />
              ))}
            </SankeyNodesCollectionDirective>

            <SankeyLinksCollectionDirective>
              {links.map((link, i) => (
                <SankeyLinkDirective key={`${link.sourceId}-${link.targetId}-${i}`} {...link} />
              ))}
            </SankeyLinksCollectionDirective>
          </SankeyComponent>
        </div>

        <div id="action-description">
        <p>
            Explore supply chain flows with a right‑to‑left (RTL) Sankey chart using illustrative values in thousand shipments (k). It maps product
            categories to transport modes, world regions, and delivery status, with flow direction and labels aligned for RTL reading.
        </p>
      </div>

        <div id="description">
          <p>
            This RTL Sankey visualizes shipments (k) from product categories through Air, Ground, and Sea to regions and
            final status (Delivered, Delayed, In Transit).
            Hover or tap nodes and links to see precise shipment counts; the layout supports right‑to‑left interfaces.
          </p>
          <p><strong>Key features:</strong></p>
          <ul>
            <li>Right‑to‑left rendering for localized UIs</li>
            <li>End‑to‑end flow from category → mode → region → status</li>
            <li>Interactive tooltips showing values in thousand shipments</li>
          </ul> 
        </div>
      </div>
    );
  }
}

export default RightToLeft;