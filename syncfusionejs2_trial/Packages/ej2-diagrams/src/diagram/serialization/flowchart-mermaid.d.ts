import { Diagram } from '../diagram';
/**
 * Converts the flowchart diagram to Mermaid format.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} - The exported flowchart diagram as Mermaid data.
 */
export declare function saveFlowDiagramInMermaidFormat(diagram: Diagram): string;
/**
 * To convert the Mermaid data to flowchart diagram
 * @param {string} data - The Mermaid data to be converted to a flowchart diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void}
 */
export declare function convertMermaidToFlowChart(data: string, diagram: Diagram): void;
