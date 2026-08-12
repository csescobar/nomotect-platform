"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Visible Digital Signature sample
 */
var React = require("react");
var react_1 = require("react");
var ej2_react_pdfviewer_1 = require("@syncfusion/ej2-react-pdfviewer");
var ej2_react_inputs_1 = require("@syncfusion/ej2-react-inputs");
var ej2_react_buttons_1 = require("@syncfusion/ej2-react-buttons");
var ej2_react_notifications_1 = require("@syncfusion/ej2-react-notifications");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var ej2_react_navigations_1 = require("@syncfusion/ej2-react-navigations");
var base_1 = require("@syncfusion/ej2/base");
var ej2_react_calendars_1 = require("@syncfusion/ej2-react-calendars");
var sample_base_1 = require("../common/sample-base");
require("./pdf.component.css");
var ImageList = function (_a, ref) {
    var imageUrlsProp = _a.imageUrlsProp, selectedIndexProp = _a.selectedIndexProp;
    var _b = (0, react_1.useState)(selectedIndexProp), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var _c = (0, react_1.useState)(imageUrlsProp), imageUrls = _c[0], setImageUrls = _c[1];
    var handleImageClick = function (index) {
        setSelectedIndex(index);
    };
    var handleImageDelete = function (args, index) {
        args.stopPropagation();
        setImageUrls(function (images) {
            var updatedImages = images.filter(function (_, i) { return i !== index; });
            return updatedImages;
        });
        if (selectedIndex >= index) {
            setSelectedIndex(selectedIndex - 1);
        }
    };
    React.useImperativeHandle(ref, function () { return ({
        addImageUrls: function (url) {
            setImageUrls(function (prev) { return __spreadArray(__spreadArray([], prev, true), [url], false); });
            setSelectedIndex(imageUrls.length);
        },
        getSelectedImageUrl: function () {
            var imageUrl = selectedIndex < imageUrls.length ? imageUrls[selectedIndex] : imageUrls[0];
            return imageUrl;
        },
        updateSelectedIndex: function (index) {
            setSelectedIndex(index);
        }
    }); });
    return (imageUrls.length > 0 &&
        React.createElement("div", { className: "e-pv-visible-sign-uploaded-images" }, imageUrls.map(function (src, index) { return (React.createElement("div", { key: index, className: "e-pv-visible-sign-image-wrapper ".concat(selectedIndex === index ? 'selected' : ''), onClick: function () { return handleImageClick(index); } },
            index != 0 &&
                React.createElement(ej2_react_buttons_1.ButtonComponent, { iconCss: 'e-icons e-close', cssClass: 'e-round e-small', className: 'e-pv-visible-sign-image-delete', onClick: function (args) { return handleImageDelete(args, index); } }),
            React.createElement("img", { src: src, alt: "Signature ".concat(index) }))); })));
};
var ForwardedImageList = React.forwardRef(ImageList);
var VisibleDigitalSignature = function () {
    var displayModes = ['Image only', 'With signer details', 'Signer details only'];
    var digestAlgorithms = ['SHA1', 'SHA256', 'SHA384', 'SHA512', 'RIPEMD160'];
    var x = (0, react_1.useRef)(24);
    var y = (0, react_1.useRef)(12);
    var height = (0, react_1.useRef)(120);
    var width = (0, react_1.useRef)(200);
    var signatureType = (0, react_1.useRef)("CAdES");
    var displayMode = (0, react_1.useRef)(displayModes[1]);
    var digestAlgorithm = (0, react_1.useRef)(digestAlgorithms[1]);
    var signatureField = (0, react_1.useRef)("Signature Field 1");
    var imageListRef = (0, react_1.useRef)(null);
    var _a = (0, react_1.useState)(true), showSignatureImages = _a[0], setShowSignatureImages = _a[1];
    var _b = (0, react_1.useState)(false), successVisible = _b[0], setSuccessVisible = _b[1];
    var _c = (0, react_1.useState)(false), errorVisible = _c[0], setErrorVisible = _c[1];
    var _d = (0, react_1.useState)(false), warningVisible = _d[0], setWarningVisible = _d[1];
    var _e = (0, react_1.useState)(true), downloadVisibility = _e[0], setDownloadVisibility = _e[1];
    var _f = (0, react_1.useState)(true), signDocVisibility = _f[0], setSignDocVisibility = _f[1];
    var _g = (0, react_1.useState)(0), activeTab = _g[0], setActiveTab = _g[1];
    var _h = (0, react_1.useState)({
        signer: true,
        reason: true,
        location: true,
        date: true
    }), checkboxStates = _h[0], setCheckboxStates = _h[1];
    var defaultSignImage = "data:image/png;base64,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";
    var fileName = (0, react_1.useRef)("visibleDigitalSignature");
    var documentData = (0, react_1.useRef)("");
    var viewer = (0, react_1.useRef)(null);
    var uploaderObj;
    var displayModeDropDownObj;
    var msgWarning = "The document has been digitally signed and at least one signature has problem ";
    var msgError = "The document has been digitally signed, but it has been modified since it was signed and at least one signature is invalid";
    var msgSuccess = "The document has been digitally signed and all the signatures are valid";
    var pdfviewerApiPath = {
        saveUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Save',
        removeUrl: 'https://services.syncfusion.com/react/production/api/FileUploader/Remove'
    };
    (0, react_1.useEffect)(function () {
        (0, sample_base_1.updateSampleSection)();
        if (!(0, base_1.isNullOrUndefined)(viewer) && !(0, base_1.isNullOrUndefined)(viewer.current)) {
            viewer.current.documentLoad = function (args) { return __awaiter(void 0, void 0, void 0, function () {
                var _a, _b, postData, options, apiUrl, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            setSignDocVisibility(true);
                            fileName.current = args.documentName;
                            _c.label = 1;
                        case 1:
                            _c.trys.push([1, 5, , 6]);
                            if (!!(documentData != null && documentData.current.length > 0)) return [3 /*break*/, 4];
                            _a = documentData;
                            _b = blobToBase64;
                            return [4 /*yield*/, viewer.current.saveAsBlob()];
                        case 2: return [4 /*yield*/, _b.apply(void 0, [_c.sent()])];
                        case 3:
                            _a.current = _c.sent();
                            _c.label = 4;
                        case 4:
                            postData = {
                                documentData: documentData.current
                            };
                            options = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(postData)
                            };
                            apiUrl = 'https://services.syncfusion.com/react/production/api/pdfviewer/ValidateSignature';
                            fetch(apiUrl, options)
                                .then(function (response) { return response.json(); })
                                .then(function (body) {
                                if (body.successVisible || body.warningVisible || body.errorVisible) {
                                    setSignDocVisibility(false);
                                }
                                if (!body.downloadVisibility) {
                                    setDownloadVisibility(false);
                                }
                                if ((body.successVisible)) {
                                    setTimeout(function () {
                                        msgSuccess = body.message;
                                        setSuccessVisible(true);
                                    }, 1000);
                                    setTimeout(function () {
                                        setSuccessVisible(false);
                                    }, 5000);
                                }
                                if ((body.warningVisible)) {
                                    msgWarning = body.message;
                                    setWarningVisible(true);
                                }
                                if (body.errorVisible) {
                                    msgError = body.message;
                                    setErrorVisible(false);
                                }
                            });
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _c.sent();
                            console.error('Error reading blob', error_1.message);
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
        }
    }, []);
    var blobToBase64 = function (blob) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () { return resolve(reader.result); };
            reader.onerror = reject;
            reader.readAsDataURL(blob);
        });
    };
    var formatDate = function (inputDate) {
        var month = String(inputDate.getMonth() + 1).padStart(2, '0');
        var date = String(inputDate.getDate()).padStart(2, '0');
        var year = String(inputDate.getFullYear()).slice(-2);
        return "".concat(month, "-").concat(date, "-").concat(year);
    };
    var textBoxValues = (0, react_1.useRef)({
        signer: 'James Carter',
        reason: 'I am the Author',
        location: 'Austin',
        date: formatDate(new Date())
    });
    var tabHeaders = [
        { key: 0, text: 'Create new' },
        { key: 1, text: 'Existing Field' }
    ];
    var renderTabHeader = function () { return (React.createElement("div", null,
        React.createElement("div", { className: 'e-pv-visible-sign-header-title' },
            React.createElement("div", { className: 'e-pv-visible-sign-group-title' }, "Signature Field")),
        React.createElement("div", { className: "e-pv-visible-sign-tab-header" }, tabHeaders.map(function (header) { return (React.createElement("div", { key: header.key, onClick: function () { return setActiveTab(header.key); }, className: "e-pv-visible-sign-tab-header-item".concat(activeTab === header.key ? ' active' : '') },
            React.createElement("div", { className: 'e-pv-visible-sign-tab-header-item-text' }, header.text))); })))); };
    var handleCheckboxChange = function (field, checked) {
        setCheckboxStates(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[field] = checked, _a)));
        });
    };
    var handleTextFieldChange = function (field, value) {
        if (field == 'date') {
            value = formatDate(new Date(value));
        }
        textBoxValues.current[field] = value;
    };
    var onFileSelect = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            uploaderObj.upload(args.filesData);
            args.cancel = true;
            return [2 /*return*/];
        });
    }); };
    var onFileSuccess = function (args) { return __awaiter(void 0, void 0, void 0, function () {
        var fileData, imageBase64;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    fileData = args.file.rawFile;
                    if (!(fileData instanceof Blob)) return [3 /*break*/, 2];
                    return [4 /*yield*/, blobToBase64(fileData)];
                case 1:
                    imageBase64 = _b.sent();
                    (_a = imageListRef.current) === null || _a === void 0 ? void 0 : _a.addImageUrls(imageBase64);
                    uploaderObj.clearAll();
                    return [3 /*break*/, 3];
                case 2:
                    console.error('Unexpected file data type:', typeof fileData);
                    _b.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var browseOpen = function (args) {
        var browseButton = (0, base_1.select)('#e-pv-visible-sign-image-uploader .e-file-select-wrap button', document);
        if (!(0, base_1.isNullOrUndefined)(browseButton)) {
            browseButton.click();
        }
        args.preventDefault();
    };
    var handleSignImagesVisibility = function (args) {
        setShowSignatureImages(args.checked);
        if (args.checked) {
            displayModeDropDownObj.value = displayModes[1];
        }
        else {
            displayModeDropDownObj.value = displayModes[2];
        }
    };
    var renderSignatureImageGroup = function () { return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'e-pv-visible-sign-signature-image-group' },
            React.createElement("div", { className: "e-pv-visible-sign-signature-image-header" },
                React.createElement(ej2_react_buttons_1.CheckBoxComponent, { label: "Signature image", checked: showSignatureImages, change: function (args) { return handleSignImagesVisibility(args); } })),
            showSignatureImages && (React.createElement(React.Fragment, null,
                React.createElement("div", { id: 'e-pv-visible-sign-image-uploader', style: { display: 'none' } },
                    React.createElement(ej2_react_inputs_1.UploaderComponent, { ref: function (scope) { uploaderObj = scope; }, id: "signature-image-uploader", allowedExtensions: ".jpg,.jpeg,.png", dropArea: ".e-pv-visible-sign-tab-panel", asyncSettings: pdfviewerApiPath, success: onFileSuccess, showFileList: false, selected: onFileSelect, multiple: false })),
                React.createElement(ej2_react_buttons_1.ButtonComponent, { cssClass: 'e-outline e-primary', onClick: browseOpen, style: { float: 'right' } }, "Add Signature")))),
        showSignatureImages &&
            React.createElement(ForwardedImageList, { imageUrlsProp: [defaultSignImage], selectedIndexProp: 0, ref: imageListRef }))); };
    var renderSignatureDescription = function () { return (React.createElement("div", { className: 'e-pv-visible-sign-group' },
        React.createElement("div", { className: "e-pv-visible-sign-group-title", style: { marginBottom: '6px' } },
            React.createElement("span", null, "Signature Description")),
        React.createElement("table", { className: 'e-pv-visible-sign-inner-table' },
            React.createElement("tbody", null, ['signer', 'reason', 'location', 'date'].map(function (field) { return (React.createElement("tr", { key: field },
                React.createElement("td", null,
                    React.createElement(ej2_react_buttons_1.CheckBoxComponent, { checked: checkboxStates[field], change: function (e) { return handleCheckboxChange(field, e.checked); }, label: "Show ".concat(field) })),
                React.createElement("td", null, field == 'date' ?
                    React.createElement(ej2_react_calendars_1.DatePickerComponent, { placeholder: "Enter ".concat(field), value: new Date(textBoxValues.current[field]), format: 'MM-dd-yy', inputFormats: ['dd-MM-yy', 'MM-dd-yy'], enabled: checkboxStates[field], allowEdit: false, max: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()), showClearButton: false, change: function (e) { return handleTextFieldChange(field, e.value); } })
                    :
                        React.createElement(ej2_react_inputs_1.TextBoxComponent, { placeholder: "Enter ".concat(field), value: textBoxValues.current[field], enabled: checkboxStates[field], change: function (e) { return handleTextFieldChange(field, e.value); } })))); }))))); };
    var renderDropdowns = function () { return (React.createElement("div", { className: 'e-pv-visible-sign-group' },
        React.createElement("table", { className: 'e-pv-visible-sign-inner-table' },
            React.createElement("tbody", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: 'e-pv-visible-sign-dropdown-label' },
                            React.createElement("span", null, "Display mode"))),
                    React.createElement("td", null,
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { ref: function (scope) { displayModeDropDownObj = scope; }, enabled: showSignatureImages, dataSource: displayModes, value: displayMode.current, change: function (args) { displayMode.current = args.value; }, placeholder: "Select display mode" }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: 'e-pv-visible-sign-dropdown-label' },
                            React.createElement("span", null, "Signature Type"))),
                    React.createElement("td", null,
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ['CAdES', 'CMS'], value: signatureType.current, change: function (args) { signatureType.current = args.value; }, placeholder: "Select signature type" }))),
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("div", { className: 'e-pv-visible-sign-dropdown-label' },
                            React.createElement("span", null, "Digest Algorithm"))),
                    React.createElement("td", null,
                        React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: digestAlgorithms, value: digestAlgorithm.current, change: function (args) { digestAlgorithm.current = args.value; }, placeholder: "Select Digest Algorithm" }))))))); };
    var createContent = function (index) { return (React.createElement("div", { className: 'e-pv-visible-sign-tab' },
        React.createElement("div", { className: 'e-pv-visible-sign-tab-content' },
            index === 0 ? createNewContent() : existingFieldContent(),
            React.createElement("hr", null),
            renderSignatureImageGroup(),
            React.createElement("hr", null),
            renderSignatureDescription(),
            React.createElement("hr", null),
            renderDropdowns()))); };
    var createNewContent = function () { return (React.createElement("div", null,
        React.createElement("div", { className: "e-pv-visible-sign-group" },
            React.createElement("div", { className: "e-pv-visible-sign-group-title" },
                React.createElement("span", null, "Position")),
            React.createElement("table", { className: 'e-pv-visible-sign-position-table' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-text-content' },
                                React.createElement("span", null, "X"),
                                React.createElement("div", { className: 'e-pv-visible-sign-input-item' },
                                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { showSpinButton: false, placeholder: "24", format: '###.##', min: 0, change: function (args) { x.current = args.value; }, value: x.current })))),
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-text-content' },
                                React.createElement("span", null, "Y"),
                                React.createElement("div", { className: 'e-pv-visible-sign-input-item' },
                                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { showSpinButton: false, placeholder: "12", format: '###.##', min: 0, change: function (args) { y.current = args.value; }, value: y.current })))))))),
        React.createElement("div", { className: "e-pv-visible-sign-group", style: { marginTop: '6px' } },
            React.createElement("div", { className: "e-pv-visible-sign-group-title" },
                React.createElement("span", null, "Size")),
            React.createElement("table", { className: 'e-pv-visible-sign-size-table' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-text-content' },
                                React.createElement("span", null, "Width"),
                                React.createElement("div", { className: 'e-pv-visible-sign-input-item' },
                                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { placeholder: "200", format: '###.##', min: 0, change: function (args) { width.current = args.value; }, value: width.current })))),
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-text-content' },
                                React.createElement("span", null, "Height"),
                                React.createElement("div", { className: 'e-pv-visible-sign-input-item' },
                                    React.createElement(ej2_react_inputs_1.NumericTextBoxComponent, { placeholder: "120", format: '###.##', min: 0, change: function (args) { height.current = args.value; }, value: height.current })))))))))); };
    var existingFieldContent = function () { return (React.createElement("div", null,
        React.createElement("div", { className: 'e-pv-visible-sign-group' },
            React.createElement("table", { className: 'e-pv-visible-sign-inner-table' },
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-dropdown-label' },
                                React.createElement("span", null, "Existing Field"))),
                        React.createElement("td", null,
                            React.createElement("div", { className: 'e-pv-visible-sign-text-content' },
                                React.createElement(ej2_react_dropdowns_1.DropDownListComponent, { dataSource: ['Signature Field 1'], value: signatureField.current, placeholder: "Select existing field" }))))))))); };
    var renderSignDocumentButton = function () { return (React.createElement("div", { className: "e-pv-visible-sign-tab-content-footer" },
        React.createElement(ej2_react_buttons_1.ButtonComponent, { id: 'visibleSign_button_signDocument', cssClass: "e-primary", disabled: !signDocVisibility, onClick: function () { signDocument(); } }, "Sign Document"))); };
    var signDocument = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            viewer.current.saveAsBlob()
                .then(function (blob) {
                var fileReader = new FileReader();
                fileReader.readAsDataURL(blob);
                fileReader.onload = function (event) {
                    var pdfData = event.target ? event.target.result : '';
                    var request = new XMLHttpRequest();
                    var jsonObject = getRequestBody(pdfData);
                    var requestData = JSON.stringify(jsonObject);
                    request.open('POST', 'https://services.syncfusion.com/react/production/api/pdfviewer/AddVisibleSignature', true);
                    request.setRequestHeader('Content-type', 'application/json charset=UTF-8');
                    request.onload = function () {
                        if (request.status === 200) {
                            documentData.current = request.responseText;
                            viewer.current.load(request.responseText, null);
                            viewer.current.fileName = fileName.current;
                            viewer.current.downloadFileName = fileName.current;
                            setSignDocVisibility(false);
                        }
                    };
                    request.onerror = function () {
                        console.error('Error in server', request.statusText);
                    };
                    request.send(requestData);
                };
                fileReader.onerror = function () {
                    console.error('Error reading blob as base 64', fileReader.error);
                };
            })
                .catch(function (error) {
                console.error('Error converting blob', error);
            });
            return [2 /*return*/];
        });
    }); };
    var getRequestBody = function (pdfData) {
        var _a;
        var jsonObject = {
            pdfdata: pdfData,
            signatureType: signatureType.current.toUpperCase(),
            displayMode: displayMode.current.toUpperCase(),
            digestAlgorithm: digestAlgorithm.current.toUpperCase()
        };
        if (showSignatureImages && displayMode.current != displayModes[2]) {
            var selectedImageData = (_a = imageListRef.current) === null || _a === void 0 ? void 0 : _a.getSelectedImageUrl();
            jsonObject['imagedata'] = selectedImageData;
        }
        if (checkboxStates['signer']) {
            jsonObject['signerName'] = textBoxValues.current['signer'];
        }
        if (checkboxStates['reason']) {
            jsonObject['reason'] = textBoxValues.current['reason'];
        }
        if (checkboxStates['location']) {
            jsonObject['location'] = textBoxValues.current['location'];
        }
        if (checkboxStates['date']) {
            jsonObject['date'] = textBoxValues.current['date'];
        }
        if (activeTab === 0) { // Create new
            jsonObject['isSignatureField'] = false;
            jsonObject['signatureBounds'] = JSON.stringify({
                x: x.current,
                y: y.current,
                height: height.current,
                width: width.current
            });
        }
        else { // choose existing
            jsonObject['isSignatureField'] = true;
        }
        return jsonObject;
    };
    var toolbarClickHandler = function (args) {
        if (args.item.id === 'visibleSign_download') {
            viewer.current.download();
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: 'row' },
            React.createElement("div", { className: 'control-section col-lg-8', style: { height: '610px' } },
                React.createElement("div", { className: "e-pv-visible-sign-pdfviewer-tab-container" },
                    React.createElement("div", { className: 'e-pv-visible-sign-toolbar' },
                        React.createElement(ej2_react_navigations_1.ToolbarComponent, { clicked: toolbarClickHandler },
                            React.createElement(ej2_react_navigations_1.ItemsDirective, null,
                                React.createElement(ej2_react_navigations_1.ItemDirective, { prefixIcon: 'e-icons e-download', tooltipText: "Download", id: 'visibleSign_download', disabled: downloadVisibility, align: "Right", cssClass: 'e-pv-download-document-container' })))),
                    React.createElement("div", { className: 'e-pv-visible-sign-message' },
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_success", content: msgSuccess, visible: successVisible, severity: "Success" }),
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_warning", content: msgWarning, visible: warningVisible, showCloseIcon: true, severity: "Warning" }),
                        React.createElement(ej2_react_notifications_1.MessageComponent, { id: "msg_error", content: msgError, visible: errorVisible, showCloseIcon: true, severity: "Error" })),
                    React.createElement("div", { className: 'e-pv-visible-sign-pdfviewer-container' },
                        React.createElement(ej2_react_pdfviewer_1.PdfViewerComponent, { ref: viewer, enableAnnotationToolbar: false, enableFormDesignerToolbar: false, enableNavigationToolbar: false, enableToolbar: false, zoomMode: 'FitToPage', documentPath: 'https://cdn.syncfusion.com/content/pdf/visible-digital-signature.pdf', resourceUrl: 'https://cdn.syncfusion.com/ej2/27.2.2/dist/ej2-pdfviewer-lib', style: { height: '100%', width: '100%' } },
                            React.createElement(ej2_react_pdfviewer_1.Inject, { services: [
                                    ej2_react_pdfviewer_1.Toolbar, ej2_react_pdfviewer_1.Magnification, ej2_react_pdfviewer_1.Navigation, ej2_react_pdfviewer_1.Annotation, ej2_react_pdfviewer_1.LinkAnnotation,
                                    ej2_react_pdfviewer_1.BookmarkView, ej2_react_pdfviewer_1.ThumbnailView, ej2_react_pdfviewer_1.Print, ej2_react_pdfviewer_1.TextSelection, ej2_react_pdfviewer_1.TextSearch,
                                    ej2_react_pdfviewer_1.FormFields, ej2_react_pdfviewer_1.FormDesigner
                                ] }))))),
            React.createElement("div", { className: "col-lg-4 e-pv-visible-sign-tab-panel" },
                renderTabHeader(),
                createContent(activeTab),
                renderSignDocumentButton())),
        React.createElement("div", { id: "action-description" },
            React.createElement("p", null, "This sample demonstrates how to add visible digital signatures with customizable appearance options, including a signature image, signer details, and digital signature settings.")),
        React.createElement("div", { id: "description" },
            React.createElement("p", null, "In this demo, users can either create a new signature or sign an existing form field. Once all required inputs are provided, clicking the \"Sign Document\" button programmatically applies a certified visual digital signature and refreshes the viewer to display the signed document."),
            React.createElement("br", null),
            React.createElement("p", null, "After signing, the following message is displayed to indicate a successful and valid signature:"),
            React.createElement("p", null,
                "\u201CThe document has been digitally signed and all the signatures are valid.\u201D",
                React.createElement("br", null),
                "This message confirms that the document has been signed without any issues and that all digital signatures are valid."),
            React.createElement("br", null),
            React.createElement("p", null,
                "More information on the PDF Viewer instantiation can be found on this\u00A0",
                React.createElement("a", { target: "_blank", href: "https://ej2.syncfusion.com/react/documentation/pdfviewer/getting-started" }, "documentation section"),
                "."))));
};
exports.default = VisibleDigitalSignature;
