import { useMemo } from "react";
import Layout from "./components/Layout/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeSettings } from "./theme/theme";

const App = () => {
  const theme = useMemo(() => createTheme(themeSettings()));
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
