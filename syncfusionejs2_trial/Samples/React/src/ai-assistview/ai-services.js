"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getdeepSeekAIAssit = exports.getGeminiAIAssit = exports.getAzureOpenAIAssist = void 0;
var getAzureOpenAIAssist = function (settings) { return __awaiter(void 0, void 0, void 0, function () {
    var response, result, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            messages: settings
                        })
                    })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                result = _a.sent();
                if (!response.ok) {
                    throw new Error(result.error || 'Network response was not ok');
                }
                result.response = result.response.replace('END_INSERTION', '');
                return [2 /*return*/, result.response];
            case 3:
                error_1 = _a.sent();
                if (error_1.message.includes('token limit')) {
                    document.querySelector('.banner-message').innerHTML = error_1.message;
                    document.querySelector('.sb-header1').classList.remove('sb-hide');
                }
                else {
                    throw new Error('⚠️ Something went wrong while connecting to the OpenAI service. Please check your API key.');
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAzureOpenAIAssist = getAzureOpenAIAssist;
var getGeminiAIAssit = function (apiKey, model, prompt) { return __awaiter(void 0, void 0, void 0, function () {
    var url, response, data, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                if (!apiKey)
                    throw new Error('Gemini API key is required.');
                if (!model)
                    throw new Error('Gemini model is required.');
                url = "https://generativelanguage.googleapis.com/v1beta/models/".concat(encodeURIComponent(model)) +
                    ":generateContent?key=".concat(encodeURIComponent(apiKey));
                return [4 /*yield*/, fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            contents: [{ role: 'user', parts: [{ text: prompt || 'Hi' }] }]
                        })
                    })];
            case 1:
                response = _b.sent();
                if (!response.ok)
                    throw new Error('API request failed');
                return [4 /*yield*/, response.json()];
            case 2:
                data = _b.sent();
                return [2 /*return*/, data.candidates[0].content.parts[0].text];
            case 3:
                _a = _b.sent();
                throw new Error('⚠️ Something went wrong while connecting to the Gemini service. Please check your API key.');
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getGeminiAIAssit = getGeminiAIAssit;
var getdeepSeekAIAssit = function (deepseekApiKey, prompt) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                return [4 /*yield*/, fetch('https://api.deepseek.com/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: "Bearer ".concat(deepseekApiKey),
                        },
                        body: JSON.stringify({
                            model: 'deepseek-chat',
                            messages: [{ role: 'user', content: prompt }],
                            max_tokens: 200,
                            stream: false,
                        })
                    })];
            case 1:
                response = _b.sent();
                if (!response.ok)
                    throw new Error('API request failed');
                return [4 /*yield*/, response.json()];
            case 2:
                data = _b.sent();
                return [2 /*return*/, data.choices[0].message.content];
            case 3:
                _a = _b.sent();
                throw new Error('⚠️ Something went wrong while connecting to the DeepSeek service. Please check your API key.');
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getdeepSeekAIAssit = getdeepSeekAIAssit;
