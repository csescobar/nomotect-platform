"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSchema = void 0;
var generateSchema = function (componentType) { return ({
    "title": "Syncfusion Universal AI Response",
    "type": "object",
    "props": {
        "componentType": { "type": "string", "const": componentType },
        "properties": {
            "type": "object",
            "properties": {},
            "description": "Only the props you want to change. Can be any valid Syncfusion prop."
        },
    },
    "includedProps": {
        "type": "array",
        "items": { "type": "string" },
        "default": ["dataSourceSettings", "displayOption"],
        "description": 'This actions only handled in this schema'
    },
    "ignoreProps": {
        "type": "array",
        "items": { "type": "string" },
        "default": ["dataSource", "height", "width", "locale", "enableRtl", "cssClass", "created", "destroyed"],
        "description": 'This actions were not handled in this schema'
    },
    "explanation": { "type": "string", "description": "User actions for included or ignored props" },
    "confidence": { "type": "Float", "minimum": 0, "maximum": 1 },
    "required": ["props", "explanation", "includedProps", "ignoredProps", "confidence"],
    "additionalProperties": true
}); };
exports.generateSchema = generateSchema;
