/**
 * Provides either constructed internal model equivalent mermaid data
 * or user provided mermaid data used for constructing sequence diagram
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} sequence diagram equivalent mermaid data
 */
export function saveSequenceDiagramAsMermaid(diagram) {
    var model = diagram.model;
    if (!model.isLoadedFromMermaid) {
        return model.generateMermaidFromModel();
    }
    else {
        return model.mermaidData;
    }
}
/**
 * Checks if the input string represents a sequence diagram
 * @param {string} input - The input string to check
 * @returns {boolean} True if the input is a sequence diagram
 */
export function isSequenceDiagram(input) {
    // Split the input string into an array of lines, removing any empty lines
    var lines = input.split(/\r?\n/).filter(function (line) { return line.trim().length > 0; });
    // Check if the first line equals "sequenceDiagram" (case-sensitive)
    return lines.length > 0 && lines[0].trim() === 'sequenceDiagram';
}
/**
 * Generates a UML sequence diagram from the provided mermaid text.
 * @param {string} mermaidText - The mermaid syntax defining the sequence diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void}
 */
export function loadSequenceDiagramFromMermaid(mermaidText, diagram) {
    diagram.model = {};
    // parse the mermaid data
    diagram.model.parse(mermaidText, diagram);
    // initialize the parsed nodes & connectors of sequence diagram
    diagram.initLayerObjects();
    // protect property change in between rendering nodes and connectors
    diagram.protectPropertyChange(true);
    // position the nodes & connect connectors to draw sequence diagram.
    diagram.model.loadDiagramFromMermaid(mermaidText, diagram);
    // refresh diagram layer to render the sequence diagram.
    diagram.refreshDiagramLayer();
    // disable protect property change
    diagram.protectPropertyChange(false);
    // fit to page to focus the sequence diagram content
    diagram.fitToPage({
        mode: 'Page', region: 'Content', margin: { left: 10, top: 10, right: 10, bottom: 10 },
        canZoomIn: true, canZoomOut: true
    });
}
