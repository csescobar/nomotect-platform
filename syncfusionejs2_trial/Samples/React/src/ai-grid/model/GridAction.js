"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeGridAction = void 0;
var executeGridAction = function (data, grid, includedProps) {
    if (data.props) {
        grid.setProperties(data.props, false);
    }
};
exports.executeGridAction = executeGridAction;
