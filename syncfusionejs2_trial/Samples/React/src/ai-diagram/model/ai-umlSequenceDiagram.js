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
exports.convertTextToUmlSequenceDiagram = void 0;
var ai_service_1 = require("../backend/ai-service");
var attempts = 0;
function convertTextToUmlSequenceDiagram(inputText, diagram) {
    return __awaiter(this, void 0, void 0, function () {
        var options, jsonResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    showLoading();
                    options = {
                        messages: [
                            {
                                role: 'system',
                                content: 'You are an assistant responsible for generating Mermaid syntax for UML sequence diagrams in response to user queries.'
                            },
                            {
                                role: 'user',
                                content: "\n                    Generate only the Mermaid UML sequence diagrams code for the process titled \"".concat(inputText, "\".\n                    based on the guidelines below. The output should strictly adhere to these rules and must not include any markdown code fences, blank space or the string 'mermaid' at the beginning\n                    1.\tStart with sequenceDiagram.\n                    2.\tDeclare all participants with actor or participant; user types must be actor.\n                    3.\tUse specific arrows only: ->>, -), --), and for self-messages also ->>.\n                    4.\tMark activations (activate) and deactivations (deactivate) for all interactions.\n                    5.\tInclude at least one alt, opt, or loop block.\n                    6.\tAdd at least one create and destroy message.\n                    7.\tInclude at least 10 interaction steps, building a complex flow.\n                    8.\tFollow proper indentation and do not add extra comments or markdown syntax.\n\n                    Basic simple examples for your context, but you try to create a complex diagram with all the given elements:\n\n                    Example 1: All Types of Messages\n                    sequenceDiagram\n                    actor Client\n                    participant Server\n                    Client ->> Server: Sync Request\n                    Server -) Client: Async Notification\n                    Client -->> Server: Reply Message\n                    Client ->> Client: Self Check\n                    Server ->> Client: Delete Record\n\n                    Example 2: With Activations\n                    sequenceDiagram\n                    participant User\n                    participant Service\n                    User ->> Service: Start Process\n                    activate Service\n                    Service -->> User: Process Acknowledged\n                    deactivate Service\n\n                    Example 3: With Fragments\n                    sequenceDiagram\n                    participant User\n                    participant System\n                    alt Successful Login\n                        User ->> System: Enter Credentials\n                        activate System\n                        System -->> User: Login Successful\n                        deactivate System\n                    else Failed Login\n                        loop Retry up to 3 times\n                            User ->> System: Re-enter Credentials\n                        end\n                    end\n\n                    Example 4: With Create/Destroy Messages\n                    sequenceDiagram\n                    actor Admin\n                    create participant Worker as DataProcessor\n                    Admin -) Worker: Initialize Service\n                    activate Worker\n                    Worker ->> Admin: Service Ready\n                    deactivate Worker\n                    destroy Worker\n\n                    Return only the structured Mermaid sequence diagram syntax.\n              \n                    Note: Please ensure the generated code matches the title \"").concat(inputText, "\" and follows the guidelines & format given above.\n                    Provide only the Mermaid UML sequence diagram code, without any additional explanations, comments, or text.\n                    ")
                            }
                        ],
                    };
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, (0, ai_service_1.serverAIRequest)(options)];
                case 2:
                    jsonResponse = _a.sent();
                    if (jsonResponse) {
                        diagram.model = { fragments: [], messages: [], participants: [] };
                        diagram.loadDiagramFromMermaid(jsonResponse);
                        diagram.dataBind();
                    }
                    hideLoading();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    hideLoading();
                    if (attempts < 2) {
                        convertTextToUmlSequenceDiagram(inputText, diagram);
                    }
                    attempts++;
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.convertTextToUmlSequenceDiagram = convertTextToUmlSequenceDiagram;
;
// Function to show loading indicator
function showLoading() {
    document.getElementById('loadingContainer').style.display = 'block';
}
// Function to hide loading indicator
function hideLoading() {
    document.getElementById('loadingContainer').style.display = 'none';
}
