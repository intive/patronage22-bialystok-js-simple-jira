import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import { theme } from "./theme/theme";
import Paper from "@mui/material/Paper";
import ToggleButtonComponent from "./components/ToggleButton/ToggleButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const App = (): JSX.Element => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const themeDark = React.useMemo(
    () => createTheme({ palette: { mode } }, theme),
    [mode]
  );

  return (
    <ThemeProvider theme={themeDark}>
      <Paper sx={{ height: "100vh" }}>
        <Nav>
          <ToggleButtonComponent toggle={setMode} mode={mode}>
            <DarkModeIcon fontSize="medium" />
          </ToggleButtonComponent>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Paper>
    </ThemeProvider>
  );
};
export default App;
