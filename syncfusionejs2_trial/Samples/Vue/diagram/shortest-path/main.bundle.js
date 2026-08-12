/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Samples/diagram/shortest-path/main.js":
/*!***********************************************!*\
  !*** ./Samples/diagram/shortest-path/main.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ \"./Samples/diagram/shortest-path/App.vue\");\n\n\n\n(0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount('#app');\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/main.js?");

/***/ }),

/***/ "./Samples/diagram/shortest-path/App.vue":
/*!***********************************************!*\
  !*** ./Samples/diagram/shortest-path/App.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_vue_vue_type_template_id_03ce7f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=03ce7f7a */ \"./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a\");\n/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ \"./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js\");\n/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ \"./node_modules/vue-loader/dist/exportHelper.js\");\n\n\n\n\n;\nconst __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], [['render',_App_vue_vue_type_template_id_03ce7f7a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',\"Samples/diagram/shortest-path/App.vue\"]])\n/* hot reload */\nif (false) {}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @syncfusion/ej2-vue-diagrams */ \"./node_modules/@syncfusion/ej2-vue-diagrams/index.js\");\n/* harmony import */ var _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @syncfusion/ej2-vue-buttons */ \"./node_modules/@syncfusion/ej2-vue-buttons/index.js\");\n\n\n\n\nconst dashIntervals = new Map();\n\n// Constants for colors and styles\nconst nodeHighlightFill = '#6495ED';\nconst nodeHighlightStroke = '#4472C4';\nconst nodeDefaultFill = 'white';\nconst nodeDefaultStroke = '#333333';\nconst nodeErrorFill = '#FF6565';\nconst nodeErrorStroke = '#EE3636';\nconst connectorHighlightStroke = '#4472C4';\nconst connectorDefaultStroke = '#333333';\n\n\nlet diagram;\nlet graph = new Map();\nlet selectedNode = 'A';\nlet highlightedNodes = [];\nlet highlightedConnectors = [];\nlet isDirectedGraph = true;\nlet previousNode = null;\n\nbuildGraph();\nconst nodes = [\n  createNode('A', 75, 75),\n  createNode('B', 384, 300),\n  createNode('C', 700, 200),\n  createNode('D', 100, 300),\n  createNode('E', 825, 20),\n  createNode('F', 90, 440),\n  createNode('G', 460, 660),\n  createNode('H', 270, 530),\n  createNode('I', 750, 350),\n  createNode('J', 1000, 450),\n  createNode('K', 750, 450),\n  createNode('L', 929, 210),\n  createNode('X', 420, 100),\n  createNode('Y', 850, 620)\n];\nconst connectors = [\n  createConnector('A', 'B'),\n  createConnector('A', 'D'),\n  createConnector('A', 'X'),\n  createConnector('B', 'D'),\n  createConnector('B', 'H'),\n  createConnector('B', 'X'),\n  createConnector('C', 'L'),\n  createConnector('C', 'X'),\n  createConnector('D', 'F'),\n  createConnector('E', 'X'),\n  createConnector('G', 'H'),\n  createConnector('G', 'Y'),\n  createConnector('H', 'F'),\n  createConnector('I', 'J'),\n  createConnector('I', 'K'),\n  createConnector('I', 'L'),\n  createConnector('J', 'L'),\n  createConnector('K', 'Y'),\n  createConnector('B', 'K'),\n  createConnector('B', 'C'),\n  createConnector('G', 'K'),\n  createConnector('H', 'I')\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  components: {\n    'ejs-diagram': _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramComponent,\n    'ejs-switch': _syncfusion_ej2_vue_buttons__WEBPACK_IMPORTED_MODULE_1__.SwitchComponent\n  },\n  data: function () {\n    return {\n      onGraphTypeChanged: onGraphTypeChanged,\n      nodes: nodes,\n      connectors: connectors,\n      snapSettings: { constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.SnapConstraints.None },\n      constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramConstraints.Default & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.DiagramConstraints.UndoRedo,\n      diagramCreated: false,\n      onMouseEnter: onMouseEnter,\n      onMouseLeave: onMouseLeave,\n      onNodeClicked: onNodeClicked,\n    };\n  },\n  methods:{\n     onDiagramCreated() {\n      this.diagramCreated = true;\n      this.$refs.diagram.ej2Instances.fitToPage();\n    },\n\n    onDiagramLoad() {\n      if (this.diagramCreated) {\n        setTimeout(() => this.$refs.diagram.ej2Instances.fitToPage(), 100);\n      }\n    }\n  },\n  mounted: function () {\n    this.$nextTick(() => {\n      diagram = this.$refs.diagram.ej2Instances;\n      diagram.fitToPage();\n    });\n  },\n});\n\nfunction createNode(id, x, y) {\n  const isSelected = id === 'A';\n  return {\n    id: id,\n    offsetX: x,\n    offsetY: y,\n    width: 50,\n    height: 50,\n    constraints: (_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Default | _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Tooltip) & ~_syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.NodeConstraints.Select,\n    tooltip: {\n      openOn: 'Custom',\n      relativeMode: 'Object'\n    },\n    shape: {\n      type: 'Basic',\n      shape: 'Ellipse'\n    },\n    style: isSelected ? {\n      strokeColor: nodeHighlightStroke,\n      strokeWidth: 3,\n      fill: nodeHighlightFill\n    } : {\n      fill: nodeDefaultFill,\n    },\n    annotations: [{\n      content: id,\n      constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.AnnotationConstraints.ReadOnly,\n      style: {\n        color: 'black',\n        fontSize: 16\n      }\n    }]\n  };\n}\n\nfunction createConnector(sourceId, targetId) {\n  return {\n    id: `${sourceId}${targetId}`,\n    sourceID: sourceId,\n    targetID: targetId,\n    type: 'Straight',\n    style: {\n      strokeColor: connectorDefaultStroke,\n      strokeWidth: 2,\n      strokeDashArray: '5,5'\n    },\n    annotations: [{\n      content: '',\n      style: {\n        color: 'white',\n        fontSize: 12,\n        bold: true,\n        fill: 'transparent'\n      },\n      offset: 0.5,\n      constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.AnnotationConstraints.ReadOnly,\n      alignment: 'Center',\n      width: 20,\n      height: 20\n    }],\n    constraints: _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.ConnectorConstraints.ReadOnly,\n    targetDecorator: {\n      shape: 'Arrow'\n    }\n  };\n}\n\nfunction buildGraph() {\n  const nodeIds = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'X', 'Y'];\n\n  // Initialize graph\n  nodeIds.forEach(nodeId => {\n    graph.set(nodeId, []);\n  });\n\n  const edges = [\n    { from: 'A', to: 'B' }, { from: 'A', to: 'D' }, { from: 'A', to: 'X' },\n    { from: 'B', to: 'D' }, { from: 'B', to: 'H' }, { from: 'B', to: 'X' },\n    { from: 'B', to: 'C' }, { from: 'B', to: 'K' }, { from: 'C', to: 'L' },\n    { from: 'C', to: 'X' }, { from: 'D', to: 'F' }, { from: 'E', to: 'X' },\n    { from: 'F', to: 'H' }, { from: 'G', to: 'H' }, { from: 'G', to: 'Y' },\n    { from: 'G', to: 'K' }, { from: 'H', to: 'I' }, { from: 'I', to: 'J' },\n    { from: 'I', to: 'K' }, { from: 'I', to: 'L' }, { from: 'J', to: 'L' },\n    { from: 'K', to: 'Y' }\n  ];\n\n  // Build bidirectional adjacency list\n  edges.forEach(edge => {\n    graph.get(edge.from)?.push(edge.to);\n    graph.get(edge.to)?.push(edge.from);\n  });\n}\n\nfunction onGraphTypeChanged(args) {\n  isDirectedGraph = args.checked;\n\n  diagram.connectors.forEach(connector => {\n    // Update stroke style & decorator\n    if (isDirectedGraph) {\n      connector.targetDecorator.shape = 'Arrow';\n      connector.style.strokeWidth = 2;\n      connector.style.strokeDashArray = '5,5';\n      connector.style.strokeColor = connectorDefaultStroke;\n    }\n    else {\n      connector.targetDecorator.shape = 'None';\n      connector.style.strokeColor = connectorDefaultStroke;\n      connector.style.strokeDashArray = '';\n      connector.style.strokeWidth = 2;\n      // Stop animation for undirected graph\n      removeConnectorDash(connector.id + '_path');\n    }\n  });\n\n  diagram.dataBind();\n}\n\nfunction onMouseEnter(args) {\n  if (args.actualObject && args.actualObject instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.Node) {\n    const hoverNode = args.actualObject;\n    previousNode = hoverNode;\n\n    if (hoverNode.id !== selectedNode) {\n      removeStepNumbers();\n      resetStyles();\n      const path = findShortestPath(selectedNode, hoverNode.id);\n\n      if (path.length > 0) {\n        const pathString = path.map(p => getNodeLabel(p)).join(\" → \");\n        // Update tooltip\n        hoverNode.tooltip.content = pathString;\n        diagram.showTooltip(hoverNode);\n        highlightNodes(path);\n        addStepNumbersToConnectors(path);\n        highlightPath(path);\n      }\n      else {\n        hoverNode.tooltip.content = 'No path found';\n        diagram.showTooltip(hoverNode);\n        // Show error state\n        hoverNode.style.fill = nodeErrorFill;\n        hoverNode.style.strokeColor = nodeErrorStroke;\n        if (!highlightedNodes.some((node) => node.id === hoverNode.id)) {\n          highlightedNodes.push(hoverNode);\n        }\n        const rootNode = diagram.getObject(selectedNode);\n        if (rootNode) {\n          rootNode.style.fill = nodeErrorFill;\n          rootNode.style.strokeColor = nodeErrorStroke;\n        }\n      }\n      diagram.dataBind();\n    }\n  }\n}\n\nfunction onMouseLeave() {\n  if (previousNode) {\n    diagram.hideTooltip(previousNode);\n\n    const selectedNodeObj = diagram.getObject(selectedNode);\n    if (selectedNodeObj) {\n      selectedNodeObj.style.strokeColor = nodeHighlightStroke;\n      selectedNodeObj.style.fill = nodeHighlightFill;\n      selectedNodeObj.style.strokeWidth = 4;\n    }\n\n    resetStyles();\n    removeStepNumbers();\n    diagram.dataBind();\n  }\n}\n\nfunction onNodeClicked(args) {\n  if (args.element && args.element instanceof _syncfusion_ej2_vue_diagrams__WEBPACK_IMPORTED_MODULE_0__.Node) {\n    const clickedNode = args.element;\n\n    previousSelectedNodeUpdated();\n    selectedNode = clickedNode.id;\n\n    clickedNode.style.strokeColor = nodeHighlightStroke;\n    clickedNode.style.strokeWidth = 3;\n\n    resetStyles();\n    removeStepNumbers();\n    diagram.dataBind();\n  }\n}\n\nfunction previousSelectedNodeUpdated() {\n  const previousSelectedNode = diagram.nodes.find((node) => node.id === selectedNode);\n  if (previousSelectedNode) {\n    previousSelectedNode.style.strokeColor = nodeDefaultStroke;\n    previousSelectedNode.style.strokeWidth = 2;\n    previousSelectedNode.style.fill = nodeDefaultFill;\n  }\n}\n\nfunction resetStyles() {\n  // Reset highlighted connectors\n  highlightedConnectors.forEach(connector => {\n    connector.style.strokeColor = connectorDefaultStroke;\n    connector.style.strokeWidth = 2;\n    if (isDirectedGraph) {\n      connector.style.strokeDashArray = '5,5';\n      removeMovingDash(connector.id + '_path');\n    }\n  });\n  highlightedConnectors = [];\n\n  // Reset highlighted nodes\n  highlightedNodes.forEach(node => {\n    if (node.id !== selectedNode) {\n      node.style.fill = nodeDefaultFill;\n      node.style.strokeColor = nodeDefaultStroke;\n      node.style.strokeWidth = 2;\n    }\n  });\n  highlightedNodes = [];\n}\n\nfunction getNeighbors(nodeId, directed) {\n  if (!directed) {\n    // For undirected graph, return all connected nodes\n    return graph.get(nodeId) || [];\n  } else {\n    // For directed graph, only return nodes that this node points to\n    const neighbors = [];\n    const outgoingConnectors = diagram.connectors.filter((connector) => connector.sourceID === nodeId);\n    outgoingConnectors.forEach(connector => {\n      if (connector.targetID) {\n        neighbors.push(connector.targetID);\n      }\n    });\n    return neighbors;\n  }\n}\n\nfunction findShortestPath(start, end) {\n  if (!graph.has(start) || !graph.has(end)) {\n    return { path: [], distance: 0 };\n  }\n\n  if (start === end) {\n    return { path: [start], distance: 0 };\n  }\n\n  const queue = [start];\n  const visited = new Set([start]);\n  const previous = new Map();\n  const distances = new Map();\n  distances.set(start, 0);\n\n  while (queue.length > 0) {\n    const current = queue.shift();\n    const neighbors = getNeighbors(current, isDirectedGraph);\n\n    for (const neighbor of neighbors) {\n      if (!visited.has(neighbor)) {\n        visited.add(neighbor);\n        previous.set(neighbor, current);\n        distances.set(neighbor, distances.get(current) + 1);\n        queue.push(neighbor);\n\n        if (neighbor === end) {\n          break;\n        }\n      }\n    }\n\n    if (visited.has(end)) {\n      break;\n    }\n  }\n\n  const path = [];\n  if (visited.has(end)) {\n    let currentNode = end;\n    while (currentNode !== undefined) {\n      path.unshift(currentNode);\n      currentNode = previous.get(currentNode);\n    }\n  }\n\n  return path;\n}\n\nfunction highlightNodes(path) {\n  path.forEach(nodeId => {\n    const node = diagram.getObject(nodeId);\n    if (node) {\n      node.style.fill = nodeHighlightFill;\n      node.style.strokeColor = nodeHighlightStroke;\n      node.style.strokeWidth = 3;\n      highlightedNodes.push(node);\n    }\n  });\n}\n\nfunction findConnector(sourceId, targetId) {\n  return diagram.connectors.find((connector) =>\n    (connector.sourceID === sourceId && connector.targetID === targetId) ||\n    (!isDirectedGraph && connector.sourceID === targetId && connector.targetID === sourceId)\n  );\n}\n\nfunction highlightPath(path) {\n  for (let i = 0; i < path.length - 1; i++) {\n    const connector = findConnector(path[i], path[i + 1]);\n    if (connector) {\n      connector.style.strokeColor = connectorHighlightStroke;\n      connector.style.strokeWidth = 4;\n      highlightedConnectors.push(connector);\n\n      if (isDirectedGraph) {\n        connector.style.strokeDashArray = '8,4';\n        applyMovingDash(connector.id + '_path');\n      }\n    }\n  }\n}\n\nfunction addStepNumbersToConnectors(path) {\n  for (let i = 0; i < path.length - 1; i++) {\n    const connector = findConnector(path[i], path[i + 1]);\n    if (connector && connector.annotations && connector.annotations.length > 0) {\n      connector.annotations[0].content = (i + 1).toString();\n      connector.annotations[0].style.fill = nodeHighlightStroke;\n    }\n  }\n}\n\nfunction removeStepNumbers() {\n  diagram.connectors.forEach(connector => {\n    if (connector.annotations && connector.annotations.length > 0) {\n      connector.annotations[0].content = '';\n      connector.annotations[0].style.fill = 'transparent';\n    }\n  });\n}\n\nfunction getNodeLabel(nodeId) {\n  const node = diagram.nodes.find(n => n.id === nodeId);\n  return node?.annotations?.[0]?.content ?? nodeId;\n}\n\nfunction applyMovingDash(pathId) {\n  // Wait for the path to exist in the DOM\n  const applyAnimationInterval = setInterval(() => {\n    const element = document.getElementById(pathId);\n    if (element && typeof element.setAttribute === 'function') {\n      let offset = 0;\n      // Store the interval reference for this pathId\n      const interval = setInterval(() => {\n        // Double-check element still exists before setAttribute\n        if (element && typeof element.setAttribute === 'function') {\n          offset -= 1;\n          element.setAttribute('stroke-dashoffset', offset.toString());\n        }\n      }, 50);\n      dashIntervals.set(pathId, interval);\n      clearInterval(applyAnimationInterval);\n    }\n  }, 10);\n}\n\nfunction removeMovingDash(pathId) {\n  // Wait for the path to exist in the DOM for cleanup\n  const removeAnimationInterval = setInterval(() => {\n    const element = document.getElementById(pathId);\n    if (element && typeof element.removeAttribute === 'function') {\n      // Clear dash animation interval if it exists\n      const interval = dashIntervals.get(pathId);\n      if (interval) {\n        clearInterval(interval);\n        dashIntervals.delete(pathId);\n      }\n      element.removeAttribute('stroke-dashoffset');\n      clearInterval(removeAnimationInterval);\n    }\n  }, 10);\n}\n\nfunction removeConnectorDash(pathId) {\n  const element = document.querySelector(`[id='${pathId}']`);\n  if (element && typeof element.removeAttribute === 'function') {\n    const interval = dashIntervals.get(pathId);\n    if (interval) {\n      clearInterval(interval);\n      dashIntervals.delete(pathId);\n    }\n    if (typeof element.removeAttribute === 'function') {\n      element.removeAttribute('stroke-dashoffset');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/App.vue?./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ }),

/***/ "./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js":
/*!***********************************************************************!*\
  !*** ./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=script&lang=js */ \"./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=script&lang=js\");\n \n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/App.vue?");

/***/ }),

/***/ "./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a":
/*!*****************************************************************************!*\
  !*** ./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_03ce7f7a__WEBPACK_IMPORTED_MODULE_0__.render)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_7_use_0_App_vue_vue_type_template_id_03ce7f7a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./App.vue?vue&type=template&id=03ce7f7a */ \"./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a\");\n\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/App.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[7].use[0]!./Samples/diagram/shortest-path/App.vue?vue&type=template&id=03ce7f7a ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\n\nconst _hoisted_1 = { class: \"col-lg-12 control-section\" }\nconst _hoisted_2 = {\n  id: \"wrapper-diagram\",\n  style: {\"width\":\"100%\"}\n}\nconst _hoisted_3 = { style: {\"display\":\"flex\",\"justify-content\":\"center\",\"align-items\":\"center\",\"margin\":\"20px\"} }\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_ejs_switch = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-switch\")\n  const _component_ejs_diagram = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ejs-diagram\")\n\n  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [\n    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_switch, {\n          id: \"graphSwitch\",\n          checked: true,\n          change: _ctx.onGraphTypeChanged\n        }, null, 8 /* PROPS */, [\"change\"]),\n        _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"label\", {\n          for: \"graphSwitch\",\n          class: \"switch-label\",\n          style: {\"margin-left\":\"10px\",\"font-size\":\"18px\",\"font-weight\":\"500\"}\n        }, \"Directed Graph\", -1 /* HOISTED */))\n      ]),\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ejs_diagram, {\n        style: {\"display\":\"block\"},\n        ref: \"diagram\",\n        id: \"diagram\",\n        width: '100%',\n        height: '700px',\n        nodes: _ctx.nodes,\n        connectors: _ctx.connectors,\n        constraints: _ctx.constraints,\n        snapSettings: _ctx.snapSettings,\n        mouseEnter: _ctx.onMouseEnter,\n        mouseLeave: _ctx.onMouseLeave,\n        click: _ctx.onNodeClicked,\n        load: $options.onDiagramLoad,\n        created: $options.onDiagramCreated\n      }, null, 8 /* PROPS */, [\"nodes\", \"connectors\", \"constraints\", \"snapSettings\", \"mouseEnter\", \"mouseLeave\", \"click\", \"load\", \"created\"])\n    ]),\n    _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"action-description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" This sample demonstrates an interactive shortest path algorithm visualization using the \"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n          href: \"https://www.syncfusion.com/vue-components/vue-diagram\",\n          target: \"_blank\"\n        }, \"Vue Diagram\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" component, featuring a dynamic graph where users select source and destination nodes to view animated optimal paths. \")\n      ])\n    ], -1 /* HOISTED */)),\n    _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", { id: \"description\" }, [\n      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, [\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Users can interactively find the shortest path by selecting a \"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"source\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" node and hovering over a \"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"destination.\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" The optimal path is dynamically highlighted using animated, dashed connectors and numerical labels. Tooltip instantly display the path sequence or show a \"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"b\", null, \"\\\"No path found\\\"\"),\n        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" warning. A toggle allows seamless switching between directed and undirected graph modes. \")\n      ])\n    ], -1 /* HOISTED */))\n  ]))\n}\n\n//# sourceURL=webpack://ej2-diagrams-vue-samples/./Samples/diagram/shortest-path/App.vue?./node_modules/vue-loader/dist/templateLoader.js??ruleSet%5B1%5D.rules%5B2%5D!./node_modules/vue-loader/dist/index.js??ruleSet%5B1%5D.rules%5B7%5D.use%5B0%5D");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"diagram/shortest-path/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkej2_diagrams_vue_samples"] = self["webpackChunkej2_diagrams_vue_samples"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./Samples/diagram/shortest-path/main.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;