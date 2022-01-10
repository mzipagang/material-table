import React from "react";
import MaterialTable from "../src";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme();
const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MaterialTable
          columns={[
            {
              title: "First Name",
              field: "firstName",
            },
            {
              title: "Last Name",
              field: "lastName",
            },
            {
                title: "Position",
                field: "position",
            },
          ]}
          data={[
            {
              firstName: "Mark",
              lastName: "Zipagang",
              position: "Being awesome i mean"
            },
          ]}
        />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
