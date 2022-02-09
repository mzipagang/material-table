import "./utils/polyfill";
import React from "react";
import { defaultProps } from "./default-props";
import { propTypes } from "./prop-types";
import MaterialTable from "./material-table";
import withStyles from "@mui/styles/withStyles";

MaterialTable.defaultProps = defaultProps;
MaterialTable.propTypes = propTypes;

export { MaterialTable as MTable };

const styles = (theme) => ({
  paginationRoot: {
    width: "100%",
  },
  paginationToolbar: {
    padding: 0,
    width: "100%",
  },
  paginationCaption: {
    display: "none",
  },
  paginationSelectRoot: {
    margin: 0,
  },
  outlinedInput: {
    height: "26px",
    minWidth: "30px",
    padding: 0,
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
      borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
      borderRadius: 0,
    },
    "& input": {
      padding: "4px 0 5px",
      minWidth: "50px",
    },
    "& .MuiIcon-root": {
      fontSize: "0.75rem !important",
    },
  },
  tablePagination: {
    "& .MuiTablePagination-selectLabel": {
      display: "none",
    },
    "& .MuiTablePagination-displayedRows": {
      display: "none",
    },
    "& .MuiTablePagination-select": {
      margin: "0px",
    },
  },
});

export default withStyles(styles, { withTheme: true })((props) => (
  <MaterialTable {...props} ref={props.tableRef} />
));
export * from "./components";
