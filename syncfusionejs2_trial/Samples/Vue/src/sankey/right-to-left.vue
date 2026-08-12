<template>
  <div class="control-section">
    <div align="center">
    <ejs-sankey
      id="sankey-rtl"
      ref="sankey"
      title="Supply Chain Management"
      subTitle="Source: OECD-ITF Global Freight Data"
      :enable-rtl="enableRtl"
      orientation="Horizontal"
      :width="width"
      :height="height"
      background="transparent"
      :margin="margin"
      :border="border"
      :linkStyle="linkStyle"
      :labelSettings="labelSettings"
      :legendSettings="legendSettings"
      :tooltip="tooltip"
      :load="load"
    >
      <e-sankey-nodes>
        <!-- Product Categories -->
        <e-sankey-node id="Books" />
        <e-sankey-node id="Clothing" />
        <e-sankey-node id="Electronics" />
        <e-sankey-node id="Furniture" />
        <e-sankey-node id="Jewelry" />
        <e-sankey-node id="Toys" />

        <!-- Transport Modes -->
        <e-sankey-node id="Air" />
        <e-sankey-node id="Ground" />
        <e-sankey-node id="Sea" />

        <!-- Regions -->
        <e-sankey-node id="Asia" />
        <e-sankey-node id="Europe" />
        <e-sankey-node id="North America" />
        <e-sankey-node id="South America" />

        <!-- Delivery Status -->
        <e-sankey-node id="Delayed" />
        <e-sankey-node id="Delivered" />
        <e-sankey-node id="In Transit" />
      </e-sankey-nodes>

      <e-sankey-links>
        <!-- Category → Transport Mode -->
        <e-sankey-link source-id="Books"      target-id="Air"    :value="18" />
        <e-sankey-link source-id="Books"      target-id="Ground" :value="12" />

        <e-sankey-link source-id="Clothing"   target-id="Air"    :value="25" />
        <e-sankey-link source-id="Clothing"   target-id="Ground" :value="15" />
        <e-sankey-link source-id="Clothing"   target-id="Sea"    :value="20" />

        <e-sankey-link source-id="Electronics" target-id="Air"    :value="35" />
        <e-sankey-link source-id="Electronics" target-id="Ground" :value="22" />
        <e-sankey-link source-id="Electronics" target-id="Sea"    :value="18" />

        <e-sankey-link source-id="Furniture"  target-id="Ground" :value="28" />
        <e-sankey-link source-id="Furniture"  target-id="Sea"    :value="25" />

        <e-sankey-link source-id="Jewelry"    target-id="Air"    :value="12" />
        <e-sankey-link source-id="Jewelry"    target-id="Ground" :value="8" />

        <e-sankey-link source-id="Toys"       target-id="Ground" :value="15" />
        <e-sankey-link source-id="Toys"       target-id="Sea"    :value="22" />

        <!-- Transport Mode → Region -->
        <e-sankey-link source-id="Air"   target-id="Asia"         :value="40" />
        <e-sankey-link source-id="Air"   target-id="Europe"       :value="30" />
        <e-sankey-link source-id="Air"   target-id="North America" :value="20" />

        <e-sankey-link source-id="Ground" target-id="Asia"         :value="20" />
        <e-sankey-link source-id="Ground" target-id="Europe"       :value="35" />
        <e-sankey-link source-id="Ground" target-id="North America" :value="30" />
        <e-sankey-link source-id="Ground" target-id="South America" :value="15" />

        <e-sankey-link source-id="Sea"   target-id="Asia"         :value="25" />
        <e-sankey-link source-id="Sea"   target-id="Europe"       :value="15" />
        <e-sankey-link source-id="Sea"   target-id="North America" :value="30" />
        <e-sankey-link source-id="Sea"   target-id="South America" :value="15" />

        <!-- Region → Delivery Status -->
        <e-sankey-link source-id="Asia"         target-id="Delayed"   :value="35" />
        <e-sankey-link source-id="Asia"         target-id="Delivered" :value="40" />
        <e-sankey-link source-id="Asia"         target-id="In Transit" :value="10" />

        <e-sankey-link source-id="Europe"       target-id="Delivered" :value="65" />
        <e-sankey-link source-id="Europe"       target-id="In Transit" :value="15" />

        <e-sankey-link source-id="North America" target-id="Delivered" :value="50" />
        <e-sankey-link source-id="North America" target-id="In Transit" :value="30" />

        <e-sankey-link source-id="South America" target-id="Delayed"   :value="10" />
        <e-sankey-link source-id="South America" target-id="In Transit" :value="20" />
      </e-sankey-links>
    </ejs-sankey>
    </div>

    <div id="action-description">
      <p>
        Explore supply chain flows with a right‑to‑left (RTL) Sankey chart using illustrative values in thousand shipments (k). It maps product categories to transport modes, world regions, and delivery status, with flow direction and labels aligned for RTL reading.
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
</template>

<script>
import {
  SankeyComponent,
  SankeyLegend,
  SankeyTooltip,
  SankeyNodesCollectionDirective,
  SankeyNodeDirective,
  SankeyLinksCollectionDirective,
  SankeyLinkDirective,
  SankeyExport
} from "@syncfusion/ej2-vue-charts"
import { loadSankeyChartTheme } from './theme-color'
import { Browser } from "@syncfusion/ej2-base";

export default {
  name: 'SankeyRtl',

  components: {
    'ejs-sankey': SankeyComponent,
    'e-sankey-nodes': SankeyNodesCollectionDirective,
    'e-sankey-node': SankeyNodeDirective,
    'e-sankey-links': SankeyLinksCollectionDirective,
    'e-sankey-link': SankeyLinkDirective
  },

  provide: {
    sankey: [SankeyLegend, SankeyTooltip, SankeyExport]
  },

  data() {
    return {
      enableRtl: true,
      orientation: 'Horizontal',

      width: '95%',
      height: '450px',

      margin: { left: 20, right: 20, top: 20, bottom: 20 },
      border: { color: '#E0E0E0', width: 0 },

      linkStyle: {
        opacity: 0.4,
        curvature: 0.5,
        colorType: 'Source'
      },

      labelSettings: {
        visible: Browser.isDevice ? false : true
      },

      legendSettings: {
        visible: true,
        position: 'Bottom'
      },

      tooltip: {
        enable: true,
        sankeyNodeTemplate: '${name}: ${value}k shipments',
        sankeyLinkTemplate: '${start.name}: ${start.out}k → ${target.name}: ${target.in}k shipments'
      }
    }
  },

  methods: {
    load(args) {
      loadSankeyChartTheme(args)
    }
  }
}
</script>

<style scoped>
#sankey-rtl {
  display: block;
  margin: 0 auto;
}
</style>