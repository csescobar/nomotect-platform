"use strict";
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
exports.executeGridAction = void 0;
var executeGridAction = function (data, grid) {
    var _a, _b;
    if (data.filter && data.filter.length) {
        data.filter.forEach(function (filter) {
            grid.filterByColumn(filter.field, filter.operator, filter.value);
        });
    }
    if (data.clearFilter) {
        if (data.clearFilter.length === 0) {
            grid.clearFiltering();
        }
        else {
            grid.clearFiltering(data.clearFilter);
        }
    }
    if (data.sort && data.sort.length) {
        data.sort.forEach(function (sort) {
            grid.sortColumn(sort.field, sort.direction, true);
        });
    }
    else if (data.clearSort) {
        grid.clearSorting();
    }
    if (data.page && data.page.pageNumber && data.page.pageSize) {
        grid.goToPage(data.page.pageNumber);
    }
    if (data.group && data.group.length) {
        var groupColumns = __spreadArray([], ((_a = grid.groupSettings.columns) !== null && _a !== void 0 ? _a : []), true);
        if (groupColumns.indexOf(data.group[0]) === -1) {
            grid.groupColumn(data.group[0]);
        }
    }
    if (data.clearGroup) {
        if (data.clearGroup.length === 0) {
            grid.clearGrouping();
        }
        else {
            var groupColumns = __spreadArray([], ((_b = grid.groupSettings.columns) !== null && _b !== void 0 ? _b : []), true);
            if (groupColumns.indexOf(data.clearGroup[0]) !== -1) {
                grid.ungroupColumn(data.clearGroup[0]);
            }
        }
    }
};
exports.executeGridAction = executeGridAction;
