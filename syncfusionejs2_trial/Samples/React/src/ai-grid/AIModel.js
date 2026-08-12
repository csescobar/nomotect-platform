"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAI = void 0;
var ai_service_1 = require("../common/ai-service");
var GridAction_1 = require("./GridAction");
function fetchAI(text, grid, dialog, assistView, columns) {
    var textArea = "Convert the following natural language query into a JSON object representing Syncfusion Query operations.\n\n    Rules:\n    - Output only the JSON object, with no extra text.\n    - Available columns: ".concat(JSON.stringify(columns), ".\n    - Sort direction must be either \"Ascending\" or \"Descending\".\n    \n    Action Handling:\n    - Include only actions explicitly mentioned in the query: filter, sort, page, group, clearFilter, clearSort, clearGroup.\n    - Supported filter operators: startswith, endswith, contains, doesnotstartwith, doesnotendwith, doesnotcontain, equal, notequal, greaterthan, greaterthanorequal, lessthan, lessthanorequal, isnull, isnotnull, isempty, isnotempty, between, in, notin.\n    - If the query involves only filtering, include only the \"filter\" key.\n    - If the query involves only sorting, include only the \"sort\" key.\n    - For clear actions:\n    - Use clearFilter: [] to clear all filters.\n    - Use clearSort: [] to clear all sorting.\n    - Use clearGroup: [] to clear all grouping.\n    - To clear specific fields, include them as arrays: clearFilter: [\"field1\"], clearSort: [\"field2\"], clearGroup: [\"field3\"].\n    \n    Supported Operations:\n    - filter: [{ field, operator, value (array for \"in\"/\"notin\", otherwise single value), ignoreCase }]\n    - sort: [{ field, direction }] // columns not available return []\n    - page: { pageNumber }  // for page navigation not pagesize\n    - group: [fields] - return group: [] if the columns not available.\n    \n    Additional Requirement:\n    - sort/group/filter only by available columns.\n    - Include a \"message\" field describing the interpreted query action and expected behavior.\n    - Handled actions: paging, filtering, sorting, grouping.\n    - If the action is not handled by this schema, need to clearly explain the action not handled in this schema and how to achieve it in Syncfusion React Grid. Dont explain the JSON structure.\n    User Input: ").concat(text);
    var aiOutput = (0, ai_service_1.serverAIRequest)({ messages: [{ role: 'user', content: textArea }] });
    aiOutput.then(function (result) {
        if (!result) {
            return;
        }
        var jsonResult = result;
        if (result.indexOf("```json") !== -1) {
            jsonResult = result.split("```json")[1].split("```")[0].trim();
        }
        var data;
        try {
            data = JSON.parse(jsonResult);
            (0, GridAction_1.executeGridAction)(data, grid);
        }
        catch (error) {
            assistView.addPromptResponse({ prompt: error, response: error });
            return;
        }
        assistView.addPromptResponse({ response: data.message });
    });
}
exports.fetchAI = fetchAI;
