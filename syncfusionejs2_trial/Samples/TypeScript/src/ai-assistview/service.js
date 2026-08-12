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
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getdeepSeekAIAssit = exports.getGeminiAIAssit = exports.getAzureOpenAIAssist = void 0;
    function getAzureOpenAIAssist(req) {
        var _a, _b, _c, _d, _e, _f, _g;
        return __awaiter(this, void 0, void 0, function () {
            var apiKey, endpoint, deployment, prompt, _h, apiVersion, url, res, data, apiMsg;
            return __generator(this, function (_j) {
                switch (_j.label) {
                    case 0:
                        apiKey = req.apiKey, endpoint = req.endpoint, deployment = req.deployment, prompt = req.prompt, _h = req.apiVersion, apiVersion = _h === void 0 ? '2024-07-01-preview' : _h;
                        url = endpoint.replace(/\/$/, '') +
                            "/openai/deployments/".concat(encodeURIComponent(deployment), "/chat/completions") +
                            "?api-version=".concat(encodeURIComponent(apiVersion));
                        return [4, fetch(url, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
                                body: JSON.stringify({
                                    messages: [{ role: 'user', content: prompt }],
                                    temperature: 0.7,
                                    max_tokens: 200
                                })
                            })];
                    case 1:
                        res = _j.sent();
                        return [4, res.json().catch(function () { return ({}); })];
                    case 2:
                        data = _j.sent();
                        if (!res.ok) {
                            apiMsg = ((_b = (_a = data) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.message) || "HTTP ".concat(res.status, " ").concat(res.statusText);
                            throw new Error(apiMsg);
                        }
                        return [2, ((_g = (_f = (_e = (_d = (_c = data) === null || _c === void 0 ? void 0 : _c.choices) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e.message) === null || _f === void 0 ? void 0 : _f.content) === null || _g === void 0 ? void 0 : _g.trim()) || 'No response received.'];
                }
            });
        });
    }
    exports.getAzureOpenAIAssist = getAzureOpenAIAssist;
    function getGeminiAIAssit(apiKey, model, prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = "https://generativelanguage.googleapis.com/v1beta/models/".concat(encodeURIComponent(model)) +
                            ":generateContent?key=".concat(encodeURIComponent(apiKey));
                        return [4, fetch(url, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    contents: [{ parts: [{ text: prompt }] }]
                                })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error('API request failed');
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data.candidates[0].content.parts[0].text];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2];
                }
            });
        });
    }
    exports.getGeminiAIAssit = getGeminiAIAssit;
    function getdeepSeekAIAssit(apiKey, prompt) {
        return __awaiter(this, void 0, void 0, function () {
            var url, response, data, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        url = 'https://api.deepseek.com/chat/completions';
                        return [4, fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Authorization': "Bearer ".concat(apiKey),
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    model: 'deepseek-reasoner',
                                    messages: [{ role: 'user', content: prompt }]
                                })
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error('API request failed');
                        return [4, response.json()];
                    case 2:
                        data = _a.sent();
                        return [2, data.choices[0].message.content];
                    case 3:
                        error_2 = _a.sent();
                        throw error_2;
                    case 4: return [2];
                }
            });
        });
    }
    exports.getdeepSeekAIAssit = getdeepSeekAIAssit;
});
