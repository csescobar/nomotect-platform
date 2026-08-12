"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAI = void 0;
var ai_service_1 = require("../backend/ai-service");
var GridAction_1 = require("./GridAction");
var sf_ai_schema_1 = require("./sf-ai-schema");
function fetchAI(text, grid, assistView, columns) {
    var schema = (0, sf_ai_schema_1.generateSchema)('Grid');
    var required = schema.required;
    var state = JSON.parse(grid.getPersistData());
    delete state.columns;
    schema.props.properties.properties = state;
    var prompt = "You are an assistant that helps users customize a grid showing Gadget purchase details. You help users modify grid configuration to fit their needs.\nUse the provided schema to adjust grid features according to the user's request.\nChange only what the user explicitly asked for \u2014 do not modify unrelated parts of the state.\nProvide a clear explanation of what you changed (or why nothing was changed).\n\n### Handling Non-Grid Queries\nIf the user's message is clearly a casual greeting, general question, or any query unrelated to grid configuration (e.g., \"Hi\", \"How are you?\", \"Who developed you?\"), respond naturally and conversationally to that query only. Do not attempt to interpret it as a grid request, do not make any grid state changes, and do not mention grid features unless the user explicitly brings them up.\n \n### Available Columns\nThese are the only valid columns you may reference (case-insensitive, allow reasonable near matches for common typos/misspellings):\n".concat(JSON.stringify(columns), "\n \nStrictly validate any column name mentioned in the request against the above list. If a requested column does not exist or cannot be reasonably matched, ignore that part of the request and explain why in the response.\n \n### Current grid state:\n").concat(JSON.stringify(state), "\n \n### Schema:\n").concat(JSON.stringify(schema), "\n \n### State structure rules:\n{\n  \"sortSettings\": { \"columns\": [{\"field\": \"ColumnName\", \"direction\": \"Ascending\" | \"Descending\"}] },\n  // Empty array [] clears sorting\n  \"filterSettings\": { \"columns\": [{\"field\": \"ColumnName\", \"operator\": ..., \"value\": any}] },\n  // Empty array [] clears filtering\n  \"groupSettings\": { \"columns\": [\"ColumnName1\", ...] },\n  // Empty array [] clears grouping\n  \"pageSettings\": { \"pageSize\": number, \"currentPage\": number }\n}\n\n### Additional Rules:\n \n1. **Grouping Validation**  \n   The grid must always display at least one data column.  \n   Maximum allowed grouped columns: ").concat(columns.length - 1, "  \n   If the user's request would result in groupSettings.columns.length === ").concat(columns.length, ",  \n   reject the change, keep previous groupSettings, and explain:  \n   \"Unable to group by all columns \u2014 at least one column must remain visible for data display.\"\n \n2. **Unsupported Actions**  \n   If the user requests a feature not supported (e.g., search, column hiding, export, etc.),  \n   do not modify the state and explain:\n   \"This action is not supported in the current grid schema.\"\n \n### Required Output Format:\n").concat(required, "\n \nAlways respond strictly in valid JSON as defined in the required results format.");
    var aiOutput = (0, ai_service_1.serverAIRequest)({ messages: [{ role: 'system', content: prompt }, { role: 'user', content: text }] });
    aiOutput.then(function (result) {
        if (!result) {
            return;
        }
        var jsonResult = result;
        if (result.indexOf("```json") !== -1) {
            jsonResult = result.split("```json")[1].split("```")[0].trim();
        }
        var data;
        var response = '';
        try {
            if (jsonResult.indexOf('{') !== -1 && jsonResult.indexOf('}') !== -1) {
                data = JSON.parse(jsonResult);
            }
            else {
                response = jsonResult;
            }
            if (data && data.props) {
                if (data.props.groupSettings && data.props.groupSettings.columns.length === grid.columns.length) {
                    response = 'By default, the grid does not group all the columns. You must display at least one normal column in the grid.';
                }
                else {
                    (0, GridAction_1.executeGridAction)(data, grid, data.includedProps);
                    response = data.explanation;
                }
                if (data.props.filterSettings && data.props.filterSettings.columns.length == 0) {
                    response = 'The grid currently has no active filters.';
                }
                else if (data.props.groupSettings && data.props.groupSettings.columns.length === 0) {
                    response = 'The grid currently has no active group column.';
                }
                else if (data.props.sortSettings && data.props.sortSettings.columns.length === 0) {
                    response = 'The grid currently has no active sort column.';
                }
            }
        }
        catch (error) {
            assistView.addPromptResponse({ prompt: error, response: error });
            return;
        }
        assistView.addPromptResponse({ response: response });
    });
}
exports.fetchAI = fetchAI;
