import { pivotProductData } from '../datasource';
export const executePivotAction = (data, pivot, includedProps) => {
    if (data.props) {
        if (data.props.dataSourceSettings) {
            data.props.dataSourceSettings.dataSource = pivotProductData;
        }
        else {
            data.props.dataSourceSettings = { dataSource: pivotProductData };
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
