"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAI = void 0;
var ai_service_1 = require("../backend/ai-service");
var PivotAction_1 = require("./PivotAction");
var sf_ai_schema_1 = require("./sf-ai-schema");
function fetchAI(text, pivot, assistView, dataSourceSettings) {
    var _a, _b, _c, _d;
    var schema = (0, sf_ai_schema_1.generateSchema)('PivotView');
    var required = schema.required;
    var state = JSON.parse(pivot.getPersistData());
    if (Array.isArray((_a = state === null || state === void 0 ? void 0 : state.dataSourceSettings) === null || _a === void 0 ? void 0 : _a.dataSource)) {
        dataSourceSettings.dataSource = dataSourceSettings.dataSource.slice(0, 1);
        state.dataSourceSettings.dataSource = state.dataSourceSettings.dataSource.slice(0, 1);
        state.pivotValues = [];
    }
    delete state.pivotValues;
    delete state.gridSettings;
    delete state.pageSettings;
    delete state.dataSourceSettings.authentication;
    delete state.dataSourceSettings.alwaysShowValueHeader;
    delete state.dataSourceSettings.fieldMapping;
    delete state.dataSourceSettings.localeIdentifier;
    delete state.dataSourceSettings.groupSettings;
    delete state.dataSourceSettings.mode;
    delete state.dataSourceSettings.providerType;
    delete state.dataSourceSettings.showHeaderWhenEmpty;
    delete state.dataSourceSettings.showAggregationOnValueField;
    delete state.dataSourceSettings.valueIndex;
    delete state.dataSourceSettings.type;
    if (state.chartSettings) {
        var type = (_d = (_c = (_b = state.chartSettings) === null || _b === void 0 ? void 0 : _b.chartSeries) === null || _c === void 0 ? void 0 : _c.type) !== null && _d !== void 0 ? _d : undefined;
        state.chartSettings = { chartSeries: {} };
        if (type !== undefined) {
            state.chartSettings.chartSeries.type = type;
        }
    }
    var dss = state.dataSourceSettings;
    if (dss && typeof dss === 'object') {
        var shrinkFields = function (arr) {
            if (!Array.isArray(arr))
                return arr;
            return arr.map(function (f) {
                var _a, _b;
                return ({
                    name: (_a = f === null || f === void 0 ? void 0 : f.name) !== null && _a !== void 0 ? _a : '',
                    caption: (typeof (f === null || f === void 0 ? void 0 : f.caption) === 'string' && f.caption.length > 0) ? f.caption : ((_b = f === null || f === void 0 ? void 0 : f.name) !== null && _b !== void 0 ? _b : ''),
                    expandAll: !!(f === null || f === void 0 ? void 0 : f.expandAll)
                });
            });
        };
        var shrinkValueFields = function (arr) {
            if (!Array.isArray(arr))
                return arr;
            return arr.map(function (f) {
                var _a, _b, _c;
                return ({
                    name: (_a = f === null || f === void 0 ? void 0 : f.name) !== null && _a !== void 0 ? _a : '',
                    caption: (typeof (f === null || f === void 0 ? void 0 : f.caption) === 'string' && f.caption.length > 0) ? f.caption : ((_b = f === null || f === void 0 ? void 0 : f.name) !== null && _b !== void 0 ? _b : ''),
                    type: (_c = f === null || f === void 0 ? void 0 : f.type) !== null && _c !== void 0 ? _c : ''
                });
            });
        };
        if (Array.isArray(dss.columns))
            dss.columns = shrinkFields(dss.columns);
        if (Array.isArray(dss.rows))
            dss.rows = shrinkFields(dss.rows);
        if (Array.isArray(dss.values))
            dss.values = shrinkValueFields(dss.values);
        schema.props.properties.properties = state;
    }
    var textArea = " You are an assistant that customizes Syncfusion PivotView for Sales Analysis. Modify ONLY requested parts in props.dataSourceSettings, props.displayOption, and props.chartSettings. Apply minimal diffs; do not reset unrelated settings. RULES: Fields/Measures: - Use only fields/measures from datasource (case-insensitive). No invented fields. - If requested field is missing, explain and skip. - Add/remove fields in rows/columns/values/filters only if they exist. - values: ALWAYS return full values array when calculated fields added. Aggregation: - Find measure by name in dataSourceSettings.values; set type to requested aggregation (Sum, Avg, Count, DistinctCount, Product, Min, Max). Preserve others. Expand/Collapse: - Overall expand/collapse: dataSourceSettings.expandAll=true/false. - Field-level: set expandAll on specific field in rows/columns. - Specific members: drilledMembers=[{name,items:[...]}]. - If expandAll is set, drilledMembers=[]. Sorting: - Member sorting: use sortSettings with order Ascending/Descending/None. - Value sorting: Return full valueSortSettings {columnHeaderText,columnSortOrder,rowHeaderText,rowSortOrder,measure}. Use user-provided header text. If missing\u2192null. Apply sortOrder to specified header(s). Clear member sorting\u2192sortSettings=[]. Clear value sorting\u2192valueSortSettings={}. Formatting: - Use formatSettings only if requested; clear\u2192[]. Conditional Formatting: - Use dataSourceSettings.conditionalFormatSettings. Each rule: {measure,conditions,value1,value2?,style{backgroundColor,color,fontFamily,fontSize}}. Clear all only when requested\u2192conditionalFormatSettings=[]. Totals: - Always inside dataSourceSettings. Row Sub-total\u2192showSubTotals=true,showRowSubTotals=true. Col Sub-total\u2192showSubTotals=true,showColumnSubTotals=true. Hide Row Sub\u2192showRowSubTotals=false; if both false\u2192showSubTotals=false. Hide Col Sub\u2192showColumnSubTotals=false; same logic. Clear All Sub\u2192showSubTotals=showRowSubTotals=showColumnSubTotals=false. Apply identical pattern for Grand Totals. Calculated Fields: - Add via calculatedFieldSettings {name,formula,caption?}. Formula: each measure reference MUST be \"\"Sum(Field)\"\". Combine with +,-,*,/ and numbers/parentheses. No leading \"=\". Normalize: [Field]\u2192\"Sum(Field)\", bare Field\u2192\"Sum(Field)\", preserve numbers, remove leading \"=\". Validate references; if invalid, explain and skip. Merge with existing arrays. Do NOT remove/overwrite unless explicitly asked. Filtering: - Three types; pick correctly: 1. Member Filtering: explicit include/exclude. Format {name,type:\"Include\"/\"Exclude\",items:[...]}. 2. Label Filtering: text-based conditions. Conditions: Equals,DoesNotEquals,GreaterThan,GreaterThanOrEqualTo,LessThan,LessThanOrEqualTo,Between,NotBetween,Contains,DoesNotContains,BeginWith,DoesNotBeginWith,EndsWith,DoesNotEndsWith. Format {name,type:\"Label\",condition,value1,value2?}. 3. Value Filtering: numeric conditions on aggregated values. Format {name,type:\"Value\",measure,condition,value1,value2?}. - Preserve existing filters unless asked to clear\u2192[]. Ref: https://ej2.syncfusion.com/documentation/pivotview/ DisplayOption: - NEVER modify 'view' (always \"Both\"). ONLY change 'primary' (\"Chart\" or \"Table\"). Chart: - Change chart type via chartSettings.chartSeries.type. When changed, also update props.displayOption.primary=\"Chart\". Axis: - Move values via valueAxis=\"row\"/\"column\". REFERENCE NOTE: - Sample raw data is only for reference. Actual dataset members: \u2022 Country: France,Germany,United Kingdom,United States \u2022 Year: FY 2022,FY 2023,FY 2024,FY 2025 \u2022 Product_Categories: Accessories,Bikes,Clothing \u2022 Quarter: Q1,Q2,Q3,Q4 \u2022 Products: Bottles and Cages,Cleaners,Fenders \u2022 Order_Source: Retail Outlets,Sales Person,App Store,Teleshopping - Always assume full dataset for expand/collapse, sorting, filtering, drilledMembers. IMPORTANT: - Output JSON must NEVER include commented lines inside props or any nested objects. Only valid JSON is allowed. Current pivot state:".concat(JSON.stringify(state), " Schema:").concat(JSON.stringify(schema), " state structure:{ \"dataSourceSettings\":{ \"columns\":[{\"name\":\"\",\"caption\":\"\",\"expandAll\":false}], \"rows\":[{\"name\":\"\",\"caption\":\"\",\"expandAll\":false}], \"values\":[{\"name\":\"\",\"caption\":\"\",\"type\":\"\"}], \"filters\":[{\"name\":\"\",\"caption\":\"\"}], \"filterSettings\":[ {\"name\":\"\",\"type\":\"\",\"items\":[]}, {\"name\":\"\",\"type\":\"Label\",\"condition\":\"\",\"value1\":\"\",\"value2\":\"\"}, {\"name\":\"\",\"type\":\"Value\",\"measure\":\"\",\"condition\":\"\",\"value1\":0,\"value2\":0} ], \"excludeFields\":[], \"expandAll\":false, \"enableSorting\":false, \"formatSettings\":[{\"name\":\"\",\"format\":\"\",\"useGrouping\":false,\"minimumFractionDigits\":0,\"maximumFractionDigits\":0}], \"sortSettings\":[{\"name\":\"\",\"order\":\"\",\"membersOrder\":[]}], \"valueSortSettings\":{\"columnHeaderText\":\"\",\"headerDelimiter\":\"\",\"columnSortOrder\":\"\",\"rowHeaderText\":\"\",\"rowSortOrder\":\"\",\"measure\":\"\"}, \"drilledMembers\":[{\"name\":\"\",\"items\":[]}], \"calculatedFieldSettings\":[{\"name\":\"\",\"formula\":\"\"}], \"conditionalFormatSettings\":[{\"measure\":\"\",\"applyGrandTotals\":false,\"conditions\":\"\",\"value1\":0,\"value2\":0,\"style\":{\"backgroundColor\":\"\",\"color\":\"\",\"fontFamily\":\"\",\"fontSize\":\"\"}}], \"grandTotalsPosition\":\"\", \"subTotalsPosition\":\"\", \"showColumnGrandTotals\":false, \"showRowGrandTotals\":false, \"showColumnSubTotals\":false, \"showRowSubTotals\":false, \"showGrandTotals\":false, \"showSubTotals\":false, \"valueAxis\":\"\" }, \"displayOption\":{\"view\":\"Both\",\"primary\":\"\"}, \"chartSettings\":{\"chartSeries\":{\"type\":\"\"}} } Output contract (JSON only):{ \"explanation\":string, \"confidence\":number, \"props\":{ \"dataSourceSettings\":{}, \"displayOption\"?{\"view\":\"Both\",\"primary\":\"\"}, \"chartSettings\"?{\"chartSeries\"?{\"type\":\"Column\"|\"Bar\"|\"Line\"|\"Spline\"|\"Area\"|\"SplineArea\"|\"StepLine\"|\"StepArea\"|\"StackingColumn\"|\"StackingBar\"|\"StackingArea\"|\"StackingColumn100\"|\"StackingBar100\"|\"StackingArea100\"|\"Scatter\"|\"Bubble\"|\"Pyramid\"|\"Funnel\"|\"Polar\"|\"Radar\"}} }, \"ignoredActions\":string[] } Required Results:").concat(required, " Return ONLY valid JSON matching the schema and contract above. Do not include any commented lines inside props.");
    var aiOutput = (0, ai_service_1.serverAIRequest)({ messages: [{ role: 'system', content: textArea }, { role: 'user', content: text }] });
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
                (0, PivotAction_1.executePivotAction)(data, pivot, data.includedProps);
                response = data.explanation;
            }
            else {
                response = jsonResult;
            }
        }
        catch (error) {
            assistView.addPromptResponse({ prompt: error, response: error });
            return;
        }
        if (data && data.confidence < 0.7) {
            aiOutput = (0, ai_service_1.serverAIRequest)({ messages: [{ role: 'system', content: textArea }, { role: 'user', content: text }] });
        }
        assistView.addPromptResponse({ response: response });
    });
}
exports.fetchAI = fetchAI;
