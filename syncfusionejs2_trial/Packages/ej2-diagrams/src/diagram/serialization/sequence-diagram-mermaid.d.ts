import { Diagram } from '../diagram';
/**
 * Provides either constructed internal model equivalent mermaid data
 * or user provided mermaid data used for constructing sequence diagram
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} sequence diagram equivalent mermaid data
 */
export declare function saveSequenceDiagramAsMermaid(diagram: Diagram): string;
/**
 * Checks if the input string represents a sequence diagram
 * @param {string} input - The input string to check
 * @returns {boolean} True if the input is a sequence diagram
 */
export declare function isSequenceDiagram(input: string): boolean;
/**
 * Generates a UML sequence diagram from the provided mermaid text.
 * @param {string} mermaidText - The mermaid syntax defining the sequence diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void}
 */
export declare function loadSequenceDiagramFromMermaid(mermaidText: string, diagram: Diagram): void;
