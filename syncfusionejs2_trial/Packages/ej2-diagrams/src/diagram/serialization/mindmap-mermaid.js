import { randomId } from '../utility/base-util';
var bangShape = 'M0 0 a15.470625686645507,15.470625686645507 1 0,0 25.78437614440918,-3.7200001525878905 a15.470625686645507,15.470625686645507 1 0,0 25.78437614440918,0 a15.470625686645507,15.470625686645507 1 0,0 25.78437614440918,0 a15.470625686645507,15.470625686645507 1 0,0 25.78437614440918,3.7200001525878905 a15.470625686645507,15.470625686645507 1 0,0 15.470625686645507,12.276000503540038 a12.376500549316406,12.376500549316406 1 0,0 0,12.648000518798828 a15.470625686645507,15.470625686645507 1 0,0 -15.470625686645507,12.276000503540038 a15.470625686645507,15.470625686645507 1 0,0 -25.78437614440918,5.580000228881835 a15.470625686645507,15.470625686645507 1 0,0 -25.78437614440918,0 a15.470625686645507,15.470625686645507 1 0,0 -25.78437614440918,0 a15.470625686645507,15.470625686645507 1 0,0 -25.78437614440918,-5.580000228881835 a15.470625686645507,15.470625686645507 1 0,0 -10.313750457763673,-12.276000503540038 a12.376500549316406,12.376500549316406 1 0,0 0,-12.648000518798828 a15.470625686645507,15.470625686645507 1 0,0 10.313750457763673,-12.276000503540038 H0 V0 Z';
var cloudShape = 'M0 0 a16.18875045776367,16.18875045776367 0 0,1 26.981250762939453,-10.792500305175782 a37.77375106811523,37.77375106811523 1 0,1 43.17000122070313,-10.792500305175782 a26.981250762939453,26.981250762939453 1 0,1 37.77375106811523,21.585000610351564 a16.18875045776367,16.18875045776367 1 0,1 16.18875045776367,13.020000534057615 a21.585000610351564,21.585000610351564 1 0,1 -16.18875045776367,24.180000991821288 a26.981250762939453,16.18875045776367 1 0,1 -26.981250762939453,16.18875045776367 a37.77375106811523,37.77375106811523 1 0,1 -53.962501525878906,0 a16.18875045776367,16.18875045776367 1 0,1 -26.981250762939453,-16.18875045776367 a16.18875045776367,16.18875045776367 1 0,1 -10.792500305175782,-13.020000534057615 a21.585000610351564,21.585000610351564 1 0,1 10.792500305175782,-24.180000991821288 H0 V0 Z';
var mermaidNodeBaseCollection = [];
/**
 * Converts the diagram to Mermaid format and saves it.
 * If the diagram has a 'MindMap' layout, it will generate a Mermaid mind map.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} - The Mermaid formatted string representing the diagram.
 */
export function saveMindmapDiagramInMermaidFormat(diagram) {
    var mermaidData = '';
    var dataSourceCollection = [];
    if (diagram.layout && diagram.layout.type === 'MindMap') {
        dataSourceCollection.push('mindmap');
        if (diagram.nodes.length > 0) {
            var rootNode = diagram.nodes.filter(function (node) { return node.inEdges.length === 0; })[0];
            var content = convertMindmapToMermaid(rootNode, 0, diagram);
            dataSourceCollection.push(content);
            var outConnectors = rootNode.outEdges;
            updateTextDataSource(dataSourceCollection, outConnectors, 1, diagram);
            dataSourceCollection = dataSourceCollection.filter(function (data) { return data.trim() !== ''; });
            mermaidData = dataSourceCollection.join('\n');
        }
    }
    return mermaidData;
}
/**
 * Creates a text data source for sub-level children in a Mermaid diagram.
 * @param {string[]} dataSource - The data source to be updated.
 * @param {string[]} outEdges - The out edges of the current node.
 * @param {number} level - The level of the current node.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void} - Creates a text data source for sub-level children in a Mermaid diagram.
 */
function updateTextDataSource(dataSource, outEdges, level, diagram) {
    var count = 0;
    while (count < outEdges.length) {
        var connector = diagram.getObject(outEdges[parseInt(count.toString(), 10)]);
        var targetNode = diagram.getObject(connector.targetID);
        var content = convertMindmapToMermaid(targetNode, level, diagram);
        dataSource.push(content);
        var childOutConnectors = targetNode.outEdges;
        if (childOutConnectors.length > 0) {
            updateTextDataSource(dataSource, childOutConnectors, level + 1, diagram);
        }
        count++;
    }
}
/**
 * Returns the text data source for the specified node in Mermaid format.
 * @param {NodeModel} node - The node for which the Mermaid data is to be generated.
 * @param {number} level - The level of the node in the diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {string} - The text data source for the specified node in Mermaid format.
 */
function convertMindmapToMermaid(node, level, diagram) {
    var nodeId = node.id;
    var spaceCount = (level + 1) * 2;
    var spaces = ' '.repeat(spaceCount);
    var annotationContent = node.annotations.length > 0
        ? node.annotations[0].content
        : '';
    var content = spaces + annotationContent;
    var spaceWithNodeId = spaces + nodeId;
    if (node.shape && node.shape.type === 'Basic') {
        var basicShape = node.shape;
        if (basicShape.shape === 'Rectangle') {
            content = spaceWithNodeId + '[' + annotationContent + ']';
        }
        else if (basicShape.shape === 'Ellipse') {
            content = spaceWithNodeId + '((' + annotationContent + '))';
        }
        else if (basicShape.shape === 'Hexagon') {
            content = spaceWithNodeId + '{{' + annotationContent + '}}';
        }
    }
    else if (node.shape && node.shape.type === 'Flow') {
        var flowShape = node.shape;
        if (flowShape.shape === 'Terminator') {
            content = spaceWithNodeId + '(' + annotationContent + ')';
        }
    }
    else if (node.shape && node.shape.type === 'Path') {
        var pathShape = node.shape;
        if (pathShape.data === bangShape) {
            content = spaceWithNodeId + '))' + annotationContent + '((';
        }
        else if (pathShape.data === cloudShape) {
            content = spaceWithNodeId + ')' + annotationContent + '(';
        }
    }
    return content;
}
/**
 * Counts the number of leading spaces in the specified string.
 * @param {string} word The string to check for leading spaces.
 * @returns { number } The number of leading spaces.
 */
function countLeadingSpaces(word) {
    var i = 0;
    var length = word.length;
    // Loop through the string to count leading spaces
    while (i < length && word.charAt(i) === ' ') {
        i++;
    }
    // Return the number of leading spaces
    return i;
}
/**
 * Converts Mermaid data to Mindmap diagram
 * @param {string} data - The Mermaid data to be converted to a mindmap diagram.
 * @param {Diagram} diagram - The diagram instance.
 * @returns {void}
 */
export function convertMermaidToMindmap(data, diagram) {
    if (data && diagram.layout && diagram.layout.type === 'MindMap' && diagram.mindMapChartModule) {
        // Pre-process data to accumulate lines based on bracket depth
        var allLines = data.split(/\r?\n/);
        var processedLines = [];
        var bracketDepth = 0;
        var accumulatedLine = '';
        var accumulatedLeadingSpace = 0;
        for (var i = 0; i < allLines.length; i++) {
            var line = allLines[parseInt(i.toString(), 10)];
            var trimmedLine = line.trim();
            if (trimmedLine.length === 0) {
                continue;
            }
            // Count leading spaces only on first accumulated line
            if (accumulatedLine === '') {
                accumulatedLeadingSpace = countLeadingSpaces(line);
            }
            // Count bracket depth changes
            for (var j = 0; j < line.length; j++) {
                var char = line.charAt(j);
                if ('([{'.indexOf(char) !== -1) {
                    bracketDepth++;
                }
                else if (')]}'.indexOf(char) !== -1) {
                    bracketDepth--;
                }
            }
            accumulatedLine += (accumulatedLine ? '\n' : '') + line;
            // Process when bracket depth returns to 0
            if (bracketDepth === 0 && accumulatedLine.trim().length > 0) {
                processedLines.push({ line: accumulatedLine, leadingSpace: accumulatedLeadingSpace });
                accumulatedLine = '';
            }
        }
        // Process any remaining accumulated line
        if (accumulatedLine.trim().length > 0) {
            processedLines.push({ line: accumulatedLine, leadingSpace: accumulatedLeadingSpace });
        }
        diagram.clear();
        mermaidNodeBaseCollection = [];
        var dataStack = [];
        var root = null;
        var previousItem = { text: '', children: [], currentLevel: 0, branch: 'Left' };
        var spaceAndItsLevels = [];
        var startLevel = 1;
        var haveBackticks = false;
        var isEndBackticks = false;
        var canCreateMindMap = false;
        if (processedLines.length > 0) {
            var _loop_1 = function (index) {
                var processedItem = processedLines[parseInt(index.toString(), 10)];
                var word = processedItem.line;
                var level = 0;
                var text = '';
                var levelChar = ' ';
                var leadingWhiteSpace = processedItem.leadingSpace;
                var isStartBackticks = word.includes('"`');
                isEndBackticks = word.includes('`"');
                haveBackticks = isStartBackticks ? true : haveBackticks;
                canCreateMindMap = (!haveBackticks && !canCreateMindMap) ? leadingWhiteSpace === 0 && index > 0 : canCreateMindMap;
                if (haveBackticks && isEndBackticks && !isStartBackticks) {
                    previousItem.text += '\n' + word;
                    haveBackticks = false;
                    return "continue";
                }
                if (!isStartBackticks && haveBackticks) {
                    previousItem.text += '\n' + word;
                    return "continue";
                }
                haveBackticks = isEndBackticks ? false : haveBackticks;
                if (word.length > 0 && ((/\s/.test(word[0]) && index > 0) || (leadingWhiteSpace === 0))) {
                    var spaceIndex = spaceAndItsLevels.findIndex(function (space) {
                        return space.space === leadingWhiteSpace.toString();
                    });
                    if (spaceIndex !== -1) {
                        for (var i = spaceAndItsLevels.length - 1; i >= 0; i--) {
                            var currentSpace = spaceAndItsLevels[parseInt(i.toString(), 10)];
                            var currentKey = parseFloat(currentSpace.space);
                            if (currentKey > leadingWhiteSpace) {
                                spaceAndItsLevels.splice(i, 1); // Remove the element at index i
                            }
                            else if (currentKey < leadingWhiteSpace) {
                                spaceAndItsLevels.push({ space: leadingWhiteSpace.toString(), level: currentSpace.level + 1 });
                                level = currentSpace.level + 1;
                                break;
                            }
                            else if (currentKey === leadingWhiteSpace) {
                                level = currentSpace.level;
                                break;
                            }
                        }
                    }
                    else {
                        if (spaceAndItsLevels.length === 0) {
                            spaceAndItsLevels.push({ space: leadingWhiteSpace.toString(), level: startLevel });
                            level = startLevel;
                        }
                        else {
                            for (var i = spaceAndItsLevels.length - 1; i >= 0; i--) {
                                var currentElement = spaceAndItsLevels[parseInt(i.toString(), 10)];
                                var currentKey = parseFloat(currentElement.space);
                                if (currentKey > leadingWhiteSpace) {
                                    spaceAndItsLevels.splice(i, 1); // Remove the element at index i
                                }
                                else {
                                    var lastElement = spaceAndItsLevels[spaceAndItsLevels.length - 1];
                                    spaceAndItsLevels.push({ space: leadingWhiteSpace.toString(), level: lastElement.level + 1 });
                                    break;
                                }
                            }
                            level = spaceAndItsLevels[spaceAndItsLevels.length - 1].level;
                        }
                    }
                    text = word.trim().replace(/^[+-]/, '');
                    levelChar = ' ';
                }
                var currentItem = {
                    text: text,
                    branch: undefined,
                    children: [],
                    currentLevel: index === 0 ? 0 : level - 1
                };
                if (dataStack.length > 0) {
                    while (dataStack.length >= level) {
                        if (dataStack.length === 0) {
                            break;
                        }
                        dataStack.pop();
                    }
                    if (dataStack.length > 0) {
                        dataStack[dataStack.length - 1].children.push(currentItem);
                    }
                }
                else {
                    root = currentItem;
                }
                dataStack.push(currentItem);
                previousItem = currentItem;
            };
            for (var index = 0; index < processedLines.length; index++) {
                _loop_1(index);
            }
            // Create dataSource
            var hierarchyDataSource = dataStack[0];
            if (hierarchyDataSource.text === 'mindmap' || canCreateMindMap) {
                if (canCreateMindMap) {
                    var nodeDetails = getNodeDetails(hierarchyDataSource);
                    var nodeObj = {
                        id: nodeDetails.nodeId,
                        shape: nodeDetails.nodeShapeData,
                        annotations: [
                            { content: nodeDetails.annotationContent }
                        ]
                    };
                    mermaidNodeBaseCollection.push(nodeObj);
                    createDataSource(hierarchyDataSource.children, hierarchyDataSource, nodeObj.id, diagram);
                }
                else {
                    var hierarchyData = hierarchyDataSource.children[0];
                    var nodeData = getNodeDetails(hierarchyData);
                    var node = {
                        id: nodeData.nodeId,
                        shape: nodeData.nodeShapeData,
                        annotations: [
                            { content: nodeData.annotationContent }
                        ]
                    };
                    mermaidNodeBaseCollection.push(node);
                    createDataSource(hierarchyData.children, hierarchyData, node.id, diagram);
                }
                diagram.addElements(mermaidNodeBaseCollection);
                diagram.doLayout();
            }
        }
    }
}
/**
 * Creates a data source for the Mermaid diagram based on the provided hierarchy data.
 * @param { HierarchyData[] } data The list of hierarchy data to process.
 * @param { HierarchyData } parent The parent hierarchy data.
 * @param { string } parentId The ID of the parent node.
 * @param { Diagram } diagram - The diagram instance.
 * @returns { void }
 */
function createDataSource(data, parent, parentId, diagram) {
    var index = 0;
    while (index < data.length) {
        var child = data[parseInt(index.toString(), 10)];
        var nodeData = getNodeDetails(child);
        var node = {
            id: nodeData.nodeId,
            shape: nodeData.nodeShapeData,
            annotations: [
                { content: nodeData.annotationContent }
            ]
        };
        var connector = {
            sourceID: parentId,
            targetID: node.id
        };
        mermaidNodeBaseCollection.push(node);
        mermaidNodeBaseCollection.push(connector);
        createDataSource(child.children, child, node.id, diagram);
        index++;
    }
}
/**
 * Retrieves the node details based on the provided hierarchy data for a mermaid diagram.
 * @param { HierarchyData } hierarchyData The hierarchy data.
 * @returns { NodeData } The node details.
 */
function getNodeDetails(hierarchyData) {
    var pattern = /^(.*?)\s*([\\[\\(\\{][\s\S]*?[\]\\)\\}]|[)\\(][\s\S]*|[)\\{][\s\S]*|[)\\(][^{}()\\[\]]*$)/;
    var annotationContent = hierarchyData.text;
    var match = annotationContent.match(pattern);
    var nodeId = randomId();
    var annotationText = hierarchyData.text;
    var shape = { type: 'Basic', shape: 'Rectangle' };
    if (match) {
        nodeId = match[1] ? match[1] : nodeId;
        var content = match[2].trim().replace(/["`]/g, '');
        var firstCharacter = content.charAt(0);
        if (firstCharacter === '[') {
            annotationText = content.slice(1, -1);
        }
        else if (firstCharacter === '(') {
            if (content.startsWith('((')) {
                annotationText = content.slice(2, -1);
            }
            else {
                annotationText = content.slice(1, -1);
            }
            shape = content.startsWith('((') ?
                { type: 'Basic', shape: 'Ellipse' } :
                { type: 'Flow', shape: 'Terminator' };
        }
        else if (firstCharacter === ')') {
            if (content.startsWith('))')) {
                annotationText = content.slice(2, -2);
            }
            else {
                annotationText = content.slice(1, -1);
            }
            shape = content.startsWith('))') ?
                { type: 'Path', data: bangShape } :
                { type: 'Path', data: cloudShape };
        }
        else if (firstCharacter === '{') {
            annotationText = content.slice(2, -1);
            shape = { type: 'Basic', shape: 'Hexagon' };
        }
    }
    return {
        nodeId: nodeId,
        annotationContent: annotationText,
        nodeShapeData: shape
    };
}
