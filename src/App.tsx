import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="second" element={<SecondPage />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
