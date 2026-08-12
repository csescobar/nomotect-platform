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
exports.AI_SERVICE_URL = exports.getAIResponse = exports.getUserID = exports.OpenAiModelKanban = exports.getOpenAiModelRTE = exports.serverAIRequest = void 0;
function fingerPrint() {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx_1, size_1, diamondSize, gap, startX, startY, blue, orange, colorMap, drawSquare, drawDiamond, row, col, type, x, y, sha256, visitorID, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    canvas = document.body.appendChild(document.createElement('canvas'));
                    canvas.width = 600;
                    canvas.height = 300;
                    canvas.style.display = "none";
                    ctx_1 = canvas.getContext("2d");
                    size_1 = 24;
                    diamondSize = 28;
                    gap = 4;
                    startX = 30;
                    startY = 30;
                    blue = "#1A3276";
                    orange = "#F28C00";
                    colorMap = [
                        ["blue", "blue", "diamond"],
                        ["blue", "orange", "blue"],
                        ["blue", "blue", "blue"]
                    ];
                    drawSquare = function (x, y, color) {
                        ctx_1.fillStyle = color;
                        ctx_1.fillRect(x, y, size_1, size_1);
                    };
                    drawDiamond = function (centerX, centerY, size, color) {
                        ctx_1.fillStyle = color;
                        ctx_1.beginPath();
                        ctx_1.moveTo(centerX, centerY - size / 2);
                        ctx_1.lineTo(centerX + size / 2, centerY);
                        ctx_1.lineTo(centerX, centerY + size / 2);
                        ctx_1.lineTo(centerX - size / 2, centerY);
                        ctx_1.closePath();
                        ctx_1.fill();
                    };
                    for (row = 0; row < 3; row++) {
                        for (col = 0; col < 3; col++) {
                            type = colorMap[row][col];
                            x = startX + col * (size_1 + gap);
                            y = startY + row * (size_1 + gap);
                            if (type === "blue")
                                drawSquare(x, y, blue);
                            else if (type === "orange")
                                drawSquare(x, y, orange);
                            else if (type === "diamond")
                                drawDiamond(x + size_1 / 2, y + size_1 / 2, diamondSize, orange);
                        }
                    }
                    ctx_1.font = "20px Arial";
                    ctx_1.fillStyle = blue;
                    ctx_1.textBaseline = "middle";
                    ctx_1.fillText("Syncfusion", startX + 3 * (size_1 + gap) + 20, startY + size_1 + gap);
                    ctx_1.globalCompositeOperation = "multiply";
                    ctx_1.fillStyle = "rgb(255,0,255)";
                    ctx_1.beginPath();
                    ctx_1.arc(50, 200, 50, 0, Math.PI * 2);
                    ctx_1.fill();
                    ctx_1.fillStyle = "rgb(0,255,255)";
                    ctx_1.beginPath();
                    ctx_1.arc(100, 200, 50, 0, Math.PI * 2);
                    ctx_1.fill();
                    ctx_1.fillStyle = "rgb(255,255,0)";
                    ctx_1.beginPath();
                    ctx_1.arc(75, 250, 50, 0, Math.PI * 2);
                    ctx_1.fill();
                    ctx_1.fillStyle = "rgb(255,0,255)";
                    ctx_1.beginPath();
                    ctx_1.arc(200, 200, 75, 0, Math.PI * 2, true);
                    ctx_1.arc(200, 200, 25, 0, Math.PI * 2, true);
                    ctx_1.fill("evenodd");
                    sha256 = function (str) {
                        return __awaiter(this, void 0, void 0, function () {
                            var encoder, data, hashBuffer, hashArray;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        encoder = new TextEncoder();
                                        data = encoder.encode(str);
                                        return [4 /*yield*/, crypto.subtle.digest('SHA-256', data)];
                                    case 1:
                                        hashBuffer = _a.sent();
                                        hashArray = Array.from(new Uint8Array(hashBuffer));
                                        return [2 /*return*/, hashArray.map(function (b) { return b.toString(16).padStart(2, '0'); }).join('')];
                                }
                            });
                        });
                    };
                    return [4 /*yield*/, sha256(canvas.toDataURL())];
                case 1:
                    visitorID = _a.sent();
                    document.body.removeChild(canvas); // Clean up the canvas element
                    return [2 /*return*/, visitorID];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, null];
                case 3: return [2 /*return*/];
            }
        });
    });
}
var serverAIRequest = function (settings) { return __awaiter(void 0, void 0, void 0, function () {
    var visitorId, response, result, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fingerPrint()];
            case 1:
                visitorId = _a.sent();
                return [4 /*yield*/, fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            visitorId: visitorId,
                            messages: settings
                        })
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                if (!response.ok) {
                    throw new Error(result.error || 'Network response was not ok');
                }
                result.response = result.response.replace('END_INSERTION', '');
                return [2 /*return*/, result.response];
            case 4:
                error_2 = _a.sent();
                if (error_2.message.includes('token limit')) {
                    document.querySelector('.banner-message').innerHTML = error_2.message;
                    document.querySelector('.sb-token-header').classList.remove('sb-hide');
                }
                else if (error_2.message.includes('Failed to fetch')) {
                    console.warn("To test these samples locally, configure and use your own API key.");
                }
                else {
                    console.error('There was a problem with your fetch operation:', error_2);
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.serverAIRequest = serverAIRequest;
var getOpenAiModelRTE = function (subQuery, promptQuery) { return __awaiter(void 0, void 0, void 0, function () {
    var visitorId, response, result, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fingerPrint()];
            case 1:
                visitorId = _a.sent();
                return [4 /*yield*/, fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/rte', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            visitorId: visitorId,
                            subQuery: subQuery,
                            promptQuery: promptQuery
                        })
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                if (!response.ok) {
                    throw new Error(result.error || 'Network response was not ok');
                }
                return [2 /*return*/, result.response];
            case 4:
                error_3 = _a.sent();
                if (error_3.message.includes('token limit')) {
                    document.querySelector('.banner-message').innerHTML = error_3.message;
                    document.querySelector('.sb-token-header').classList.remove('sb-hide');
                }
                else if (error_3.message.includes('Failed to fetch')) {
                    console.warn("To test these samples locally, configure and use your own API key.");
                }
                else {
                    console.error('There was a problem with your fetch operation:', error_3);
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.getOpenAiModelRTE = getOpenAiModelRTE;
var OpenAiModelKanban = function (promptQuery) { return __awaiter(void 0, void 0, void 0, function () {
    var visitorId, response, result, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fingerPrint()];
            case 1:
                visitorId = _a.sent();
                return [4 /*yield*/, fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/kanban', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            visitorId: visitorId,
                            promptQuery: promptQuery
                        })
                    })];
            case 2:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 3:
                result = _a.sent();
                if (!response.ok) {
                    throw new Error(result.error || 'Network response was not ok');
                }
                result.response = result.response.replace('END_INSERTION', '');
                return [2 /*return*/, result.response];
            case 4:
                error_4 = _a.sent();
                if (error_4.message.includes('token limit')) {
                    document.querySelector('.banner-message').innerHTML = error_4.message;
                    document.querySelector('.sb-token-header').classList.remove('sb-hide');
                }
                else if (error_4.message.includes('Failed to fetch')) {
                    console.warn("To test these samples locally, configure and use your own API key.");
                }
                else {
                    console.error('There was a problem with your fetch operation:', error_4);
                }
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.OpenAiModelKanban = OpenAiModelKanban;
function getUserID() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, fingerPrint()];
        });
    });
}
exports.getUserID = getUserID;
function getFileExtension(fileName) {
    return fileName.split('.').pop().toLowerCase();
}
function isTextFile(fileName) {
    var textExtensions = ['txt', 'md', 'css', 'html', 'json', 'xml', 'js', 'ts', 'jsx', 'tsx', 'py', 'java', 'cpp', 'c', 'h', 'cs', 'rb', 'php', 'csv', 'readme', 'doc', 'docx'];
    var ext = getFileExtension(fileName);
    return textExtensions.includes(ext);
}
function isImageFile(fileName) {
    var imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp', 'svg'];
    var ext = getFileExtension(fileName);
    return imageExtensions.includes(ext);
}
function getFileContext(attachedFiles) {
    return __awaiter(this, void 0, void 0, function () {
        var filePromises, fileContents;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    filePromises = [];
                    fileContents = [];
                    attachedFiles.forEach(function (file) {
                        var promise = new Promise(function (resolve, reject) {
                            if (file.rawFile) {
                                var reader = new FileReader();
                                var fileName_1 = file.name;
                                reader.onload = function (e) {
                                    var fileType = isTextFile(fileName_1) ? 'text' : isImageFile(fileName_1) ? 'image' : 'binary';
                                    fileContents.push({
                                        name: fileName_1,
                                        type: file.type,
                                        fileType: fileType,
                                        content: e.target.result
                                    });
                                    resolve();
                                };
                                reader.onerror = function () {
                                    reject(new Error("Error reading file: ".concat(fileName_1)));
                                };
                                if (isTextFile(fileName_1)) {
                                    reader.readAsText(file.rawFile);
                                }
                                else {
                                    reader.readAsDataURL(file.rawFile);
                                }
                            }
                            else {
                                resolve();
                            }
                        });
                        filePromises.push(promise);
                    });
                    return [4 /*yield*/, Promise.all(filePromises)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, fileContents];
            }
        });
    });
}
function getAIResponse(args, abortController) {
    return __awaiter(this, void 0, void 0, function () {
        var fileContents, aiPrompt, attachedFileContext_1, userID, abortSignal, systemPrompt, requestBody, response, errorData, result, aiResponse, error_5, bannerElement, headerElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 8, , 9]);
                    fileContents = [];
                    aiPrompt = args.prompt;
                    if (!(args.attachedFiles && args.attachedFiles.length > 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, getFileContext(args.attachedFiles)];
                case 1:
                    fileContents = _a.sent();
                    attachedFileContext_1 = 'Attached Files:\n';
                    fileContents.forEach(function (file) {
                        attachedFileContext_1 += "\n--- File: ".concat(file.name, " (Type: ").concat(file.type, ", File Type: ").concat(file.fileType, ") ---\n");
                        if (file.fileType === 'text') {
                            attachedFileContext_1 += file.content + '\n';
                        }
                        else if (file.fileType === 'image') {
                            attachedFileContext_1 += "[Image file: ".concat(file.name, " - Base64 encoded data available]\n");
                            attachedFileContext_1 += file.content + '\n';
                        }
                        else {
                            attachedFileContext_1 += "[Binary file: ".concat(file.name, " - Please process this file]\n");
                            attachedFileContext_1 += file.content.substring(0, 500) + '...\n';
                        }
                    });
                    aiPrompt = attachedFileContext_1 + '\n\nUser Prompt: ' + args.prompt;
                    _a.label = 2;
                case 2: return [4 /*yield*/, getUserID()];
                case 3:
                    userID = _a.sent();
                    if (!userID) {
                        return [2 /*return*/, 'Failed to generate user ID. Please try again later.'];
                    }
                    abortSignal = abortController ? abortController.signal : undefined;
                    systemPrompt = args.systemPrompt || 'You are a helpful assistant.';
                    requestBody = {
                        visitorId: userID,
                        messages: {
                            messages: [
                                { role: 'system', content: systemPrompt },
                                { role: 'user', content: aiPrompt }
                            ]
                        },
                        fileContents: []
                    };
                    if (fileContents && fileContents.length > 0) {
                        requestBody.fileContents = fileContents;
                    }
                    return [4 /*yield*/, fetch('https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net/api/chat', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(requestBody),
                            signal: abortSignal
                        })];
                case 4:
                    response = _a.sent();
                    if (!!response.ok) return [3 /*break*/, 6];
                    return [4 /*yield*/, response.json()];
                case 5:
                    errorData = _a.sent();
                    throw new Error(errorData.error || "HTTP Error ".concat(response.status));
                case 6: return [4 /*yield*/, response.json()];
                case 7:
                    result = _a.sent();
                    if (args.systemPrompt) {
                        return [2 /*return*/, result];
                    }
                    if (result && result.response) {
                        aiResponse = result.response.replace('END_INSERTION', '');
                        return [2 /*return*/, aiResponse];
                    }
                    return [3 /*break*/, 9];
                case 8:
                    error_5 = _a.sent();
                    if (error_5.name === 'AbortError') {
                        return [2 /*return*/, null];
                    }
                    else if (error_5.message && error_5.message.indexOf('token limit') !== -1) {
                        bannerElement = document.querySelector('.banner-message');
                        if (bannerElement) {
                            bannerElement.innerHTML = error_5.message;
                        }
                        headerElement = document.querySelector('.sb-header1');
                        if (headerElement) {
                            headerElement.classList.remove('sb-hide');
                        }
                        return [2 /*return*/, error_5.message];
                    }
                    else if (error_5.message.includes('Failed to fetch')) {
                        console.warn("To test these samples locally, configure and use your own API key.");
                    }
                    return [2 /*return*/, 'We could not reach the AI service; please try again later.'];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.getAIResponse = getAIResponse;
exports.AI_SERVICE_URL = 'https://ai-samples-server-f5hta2h9g5aqhcfg.southindia-01.azurewebsites.net';
