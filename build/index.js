"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
var _exportNames = {
  MTable: true,
};
Object.defineProperty(exports, "MTable", {
  enumerable: true,
  get: function get() {
    return _materialTable.default;
  },
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);

require("./utils/polyfill");

var _react = _interopRequireDefault(require("react"));

var _defaultProps = require("./default-props");

var _propTypes = require("./prop-types");

var _materialTable = _interopRequireDefault(require("./material-table"));

var _withStyles = _interopRequireDefault(require("@mui/styles/withStyles"));

var _components = require("./components");

Object.keys(_components).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _components[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _components[key];
    },
  });
});
_materialTable.default.defaultProps = _defaultProps.defaultProps;
_materialTable.default.propTypes = _propTypes.propTypes;

var styles = function styles(theme) {
  return {
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
    tableBodyRoot: {
      "& tr:nth-of-type(even)": {
        background: "#fafafa",
      },
      "& tr:hover": {
        background: "#D3E2F8",
      },
    },
    tableCellHead: {
      "&. MuiTableCell-head": {
        lineHeight: ".9rem",
        backgroundClip: "padding-box",
      },
    },
    outlinedInput: {
      "& .MuiOutlinedInput-root": {
        height: "26px",
        minWidth: "30px",
        padding: 0,
      },
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
  };
};

var _default = (0, _withStyles.default)(styles, {
  withTheme: true,
})(function (props) {
  return /*#__PURE__*/ _react.default.createElement(
    _materialTable.default,
    (0, _extends2.default)({}, props, {
      ref: props.tableRef,
    })
  );
});

exports.default = _default;
