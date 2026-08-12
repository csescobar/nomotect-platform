"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executePivotAction = void 0;
var datasource_1 = require("../datasource");
var executePivotAction = function (data, pivot, includedProps) {
    if (data.props) {
        if (data.props.dataSourceSettings) {
            data.props.dataSourceSettings.dataSource = datasource_1.pivotProductData;
        }
        else {
            data.props.dataSourceSettings = { dataSource: datasource_1.pivotProductData };
        }
        if (data.props.displayOption) {
            pivot.setProperties(data.props, true);
            pivot.refresh();
        }
        else {
            pivot.setProperties(data.props, false);
        }
    }
};
exports.executePivotAction = executePivotAction;
