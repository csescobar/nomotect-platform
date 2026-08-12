import { Diagram } from '../diagram';
/**
 * Converts the diagram to Mermaid format and saves it.
 * If the diagram has a 'MindMap' layout, it will generate a Mermaid mind map.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} - The Mermaid formatted string representing the diagram.
 */
export declare function saveMindmapDiagramInMermaidFormat(diagram: Diagram): string;
/**
 * Converts Mermaid data to Mindmap diagram
 * @param {string} data - The Mermaid data to be converted to a mindmap diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void}
 */
export declare function convertMermaidToMindmap(data: string, diagram: Diagram): void;
