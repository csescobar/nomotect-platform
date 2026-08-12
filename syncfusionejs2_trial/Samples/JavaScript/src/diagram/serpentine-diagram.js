/*jslint esversion: 6 */

/**
 * Medical Research Breakthroughs Timeline - Dynamic Serpentine Layout
 */
this.default = function () {
  // Domain data: medical breakthroughs displayed as timeline nodes in a serpentine layout
  const medicalBreakthroughs = [
    { id: '1', year: '1796', title: 'Smallpox Vaccine', description: 'Edward Jenner develops the first successful vaccine using cowpox, marking a historic milestone in immunology.' },
    { id: '2', year: '1846', title: 'First Use of Anesthesia', description: 'William T. G. Morton demonstrates ether anesthesia publicly, revolutionizing surgical procedures by enabling pain-free operations.' },
    { id: '3', year: '1865', title: 'Germ Theory of Disease', description: 'Louis Pasteur proves microorganisms cause disease, establishing the foundation of modern microbiology.' },
    { id: '4', year: '1882', title: 'Discovery of the Tuberculosis Bacterium', description: 'Robert Koch identifies Mycobacterium tuberculosis, paving the way for accurate TB diagnosis and effective treatment.' },
    { id: '5', year: '1895', title: 'Discovery of X-Rays', description: 'Wilhelm Röntgen discovers X-rays, transforming medical imaging and diagnostic practices worldwide.' },
    { id: '6', year: '1901', title: 'Classification of Blood Types', description: 'Karl Landsteiner classifies major blood groups (A, B, O), enabling safe and reliable blood transfusions.' },
    { id: '7', year: '1921', title: 'Discovery of Insulin', description: 'Frederick Banting and Charles Best isolate insulin, turning diabetes into a manageable chronic condition.' },
    { id: '8', year: '1923', title: 'Diphtheria Vaccine Developed', description: 'Widespread use of the diphtheria toxoid vaccine begins, drastically reducing deaths from the disease.' },
    { id: '9', year: '1928', title: 'Discovery of Penicillin', description: 'Alexander Fleming discovers the first true antibiotic, heralding the antibiotic era.' },
    { id: '10', year: '1935', title: 'Sulfonamides Introduced', description: 'Sulfonamides, the first synthetic antibiotics, are introduced to effectively treat diverse bacterial infections.' },
    { id: '11', year: '1953', title: 'DNA Structure Identified', description: 'James Watson and Francis Crick reveal the double-helix structure of DNA, laying the groundwork for modern genetics.' },
    { id: '12', year: '1955', title: 'Polio Vaccine Approved', description: 'Jonas Salk’s IPV is approved as safe and effective, drastically reducing global polio cases.' },
    { id: '13', year: '1960', title: 'Introduction of Oral Contraceptives', description: 'The FDA approves the first oral contraceptive pill, revolutionizing reproductive health and social norms.' },
    { id: '14', year: '1967', title: 'First Human Heart Transplant', description: 'Dr. Christiaan Barnard performs the first successful human heart transplant, redefining cardiac surgery.' },
    { id: '15', year: '1971', title: 'CT Scan Invented', description: 'Godfrey Hounsfield and Allan Cormack invent CT scanning, dramatically improving internal medical imaging.' },
    { id: '16', year: '1978', title: 'Birth of First IVF Baby', description: 'Louise Brown becomes the first baby born through IVF, marking a breakthrough in reproductive medicine.' },
    { id: '17', year: '1980', title: 'Smallpox Eradicated', description: 'WHO declares smallpox eradicated, a historic triumph of global vaccination efforts.' },
    { id: '18', year: '1983', title: 'HIV Identified', description: 'Luc Montagnier and Robert Gallo identify HIV as the virus responsible for AIDS.' },
    { id: '19', year: '1990', title: 'Launch of Human Genome Project', description: 'The Human Genome Project launches, aiming to map all human genes and revolutionize personalized medicine.' },
    { id: '20', year: '1996', title: 'Introduction of HAART for HIV', description: 'HAART becomes the standard HIV treatment, transforming it into a manageable chronic condition.' }
  ];

  // Palette used to cycle node fill colors
  const PALETTE = ['#2E86C1', '#2A6F1C', '#C25107', '#8E44AD', '#C0392B', '#40566d', '#8E7302'];

  // Layout constants
  const NODE_SIZE = 110;
  const H_GAP = 60;
  const V_GAP = 150;

  const BASE_MARGIN = 50;
  const CURVE_RADIUS = H_GAP * 1.5;
  const CURVE_BOW = 70;
  const CURVE_PADDING = CURVE_RADIUS + 2 * CURVE_BOW;
  const TOTAL_MARGIN = BASE_MARGIN + CURVE_PADDING;

  const INITIAL_Y = 80;

  // Connector visual constants
  const CONNECTOR_STROKE_WIDTH = 12;
  const DECORATOR_WIDTH = 20;
  const DECORATOR_HEIGHT = 30;
  const DECORATOR_PIVOT_INNER = 0.25;
  const DECORATOR_PIVOT_OUTER = 0.25;

  // Custom decorator path
  const DECORATOR_PATH = 'M 16 16 c -8 1 -7 1 -11 3 C 7 16 7 13 5 10 c 4 2 3 2 11 3 z';

  // Scrollable diagram area
  const area = new ej.diagrams.Rect(0, 0, 1500, 1500);

  // Diagram setup
  const diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    scrollSettings: {
      scrollableArea: area,
      padding: { right: 50, bottom: 50 }
    },
    tool: ej.diagrams.DiagramTools.ZoomPan,
    nodes: [],
    connectors: []
  });
  diagram.appendTo('#serpentineDiagram');

  // Initial zoom alignment (0.75)
  {
    const INITIAL_ZOOM = 0.65;
    requestAnimationFrame(() => {
      const currentZoom = diagram.scrollSettings.currentZoom || INITIAL_ZOOM;
      const focusPoint = {
        x: diagram.scrollSettings.viewPortWidth / 2,
        y: diagram.scrollSettings.viewPortHeight / 2
      };
      if (Math.abs(currentZoom - INITIAL_ZOOM) > 0.001) {
        diagram.zoom(INITIAL_ZOOM / currentZoom, focusPoint);
      }
      diagram.scrollSettings.horizontalOffset = 0;
      diagram.scrollSettings.verticalOffset = 0;
      renderSerpentineLayout();
    });
  }

  // Zoom buttons
  const ZOOM_FACTORS = {
    'zoom-065': 0.65,
    'zoom-075': 0.75,
    'zoom-085': 0.85,
    'zoom-1': 1
  };
  const buttonRegistry = {};

  Object.keys(ZOOM_FACTORS).forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const btn = new ej.buttons.Button({
      content: el.textContent || '',
      isPrimary: ZOOM_FACTORS[id] === 0.65
    });
    btn.appendTo('#' + id);
    buttonRegistry[id] = btn;

    el.addEventListener('click', () => {
      const currentZoom = diagram.scrollSettings.currentZoom || 0.65;
      const targetZoom = ZOOM_FACTORS[id];
      const zoomFactor = targetZoom / currentZoom;

      const focusPoint = {
        x: diagram.scrollSettings.viewPortWidth / 2,
        y: diagram.scrollSettings.viewPortHeight / 2
      };
      diagram.zoom(zoomFactor, focusPoint);

      renderSerpentineLayout();

      diagram.scrollSettings.horizontalOffset = 0;
      diagram.scrollSettings.verticalOffset = 0;
      diagram.dataBind();

      Object.keys(buttonRegistry).forEach((key) => {
        const btnInstance = buttonRegistry[key];
        if (btnInstance && typeof btnInstance.setProperties === 'function') {
          btnInstance.setProperties({ isPrimary: key === id });
        }
      });
    });
  });

  // Helper to create a decorator (custom cap)
  function createDecorator(color, pivotX) {
    return {
      shape: 'Custom',
      width: DECORATOR_WIDTH,
      height: DECORATOR_HEIGHT,
      pivot: { x: pivotX },
      pathData: DECORATOR_PATH,
      style: { fill: color, strokeColor: color }
    };
  }

  // Core layout rendering
  function renderSerpentineLayout() {
    const container = diagram.element;
    if (!container) return;

    const zoom = diagram.scrollSettings.currentZoom || 1;
    const effectiveWidth = container.clientWidth / zoom;

    const nodes = [];
    const connectors = [];

    let currentX = TOTAL_MARGIN + NODE_SIZE / 2;
    let currentY = INITIAL_Y;
    let direction = 1; // 1 = LTR, -1 = RTL

    medicalBreakthroughs.forEach((breakthrough, index) => {
      const exceedsRight = direction === 1 && currentX + NODE_SIZE / 2 > effectiveWidth - TOTAL_MARGIN;
      const exceedsLeft = direction === -1 && currentX - NODE_SIZE / 2 < TOTAL_MARGIN;

      if (exceedsRight || exceedsLeft) {
        currentY += V_GAP;
        direction = direction === 1 ? -1 : 1;
        if (direction === 1) {
          currentX = TOTAL_MARGIN + NODE_SIZE / 2;
        } else {
          currentX = effectiveWidth - TOTAL_MARGIN - NODE_SIZE / 2;
        }
      }

      const color = PALETTE[index % PALETTE.length];
      const node = {
        id: `breakthrough_${breakthrough.id}`,
        offsetX: currentX,
        offsetY: currentY,
        width: NODE_SIZE,
        height: NODE_SIZE,
        shape: { type: 'Basic', shape: 'Ellipse' },
        style: { fill: color, strokeColor: 'white', strokeWidth: 4 },
        annotations: [
          { content: breakthrough.year, offset: { y: 0.3 }, style: { color: 'white', fontSize: 16, bold: true } },
          { content: breakthrough.title, width: 80, offset: { y: 0.65 }, style: { color: 'white', fontSize: 12, textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' } }
        ],
        ports: [
          { id: 'port_left', offset: { x: 0, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden },
          { id: 'port_right', offset: { x: 1, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Hidden }
        ],
        constraints: (ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip) & ~ej.diagrams.NodeConstraints.Select,
        tooltip: {
          content: `<p style="font-size: small;"><b>${breakthrough.title} (${breakthrough.year})</b><br/><br/>${breakthrough.description}</p>`,
          position: 'BottomCenter',
          relativeMode: 'Object',
          width: 200
        }
      };

      nodes.push(node);
      currentX += direction * (NODE_SIZE + H_GAP);
    });

    for (let i = 0; i < nodes.length - 1; i++) {
      const sourceNode = nodes[i];
      const targetNode = nodes[i + 1];
      const rowChanged = sourceNode.offsetY !== targetNode.offsetY;

      let sourcePortId, targetPortId;

      if (rowChanged) {
        const nextRowStartsOnRight = sourceNode.offsetX < targetNode.offsetX;
        sourcePortId = nextRowStartsOnRight ? 'port_right' : 'port_left';
        targetPortId = sourcePortId;
      } else {
        const leftToRight = sourceNode.offsetX < targetNode.offsetX;
        sourcePortId = leftToRight ? 'port_right' : 'port_left';
        targetPortId = leftToRight ? 'port_left' : 'port_right';
      }

      const color = sourceNode.style.fill;

      const connector = {
        id: `connector_${i + 1}`,
        sourceID: sourceNode.id,
        targetID: targetNode.id,
        sourcePortID: sourcePortId,
        targetPortID: targetPortId,
        style: { strokeColor: color, strokeWidth: CONNECTOR_STROKE_WIDTH },
        targetDecorator: createDecorator(color, rowChanged ? 0 : DECORATOR_PIVOT_INNER),
        sourceDecorator: createDecorator(color, DECORATOR_PIVOT_OUTER),
        constraints: ej.diagrams.ConnectorConstraints.Default & ~ej.diagrams.ConnectorConstraints.Select,
      };

      if (rowChanged) {
        connector.type = 'Bezier';
        const goingRight = sourceNode.offsetX < targetNode.offsetX;
        const sign = goingRight ? 1.3 : -1.3;
        const controlX = sourceNode.offsetX + sign * (NODE_SIZE / 2 + CURVE_RADIUS + 2 * CURVE_BOW);

        connector.segments = [{
          type: 'Bezier',
          point1: { x: controlX, y: sourceNode.offsetY + 5 },
          point2: { x: controlX, y: targetNode.offsetY - 15 }
        }];
      } else {
        connector.type = 'Straight';
      }

      connectors.push(connector);
    }

    diagram.nodes = nodes;
    diagram.connectors = connectors;
    diagram.dataBind();
  }

  // Debounced resize
  let resizeRaf = 0;
  window.addEventListener('resize', () => {
    if (resizeRaf) cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      renderSerpentineLayout();
    });
  });

  // Initial render
  setTimeout(renderSerpentineLayout, 0);
};