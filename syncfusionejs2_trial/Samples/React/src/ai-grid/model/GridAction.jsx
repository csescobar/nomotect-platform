export const executeGridAction = (data, grid, includedProps) => {
    if (data.props) {
        grid.setProperties(data.props, false);
    }
};
