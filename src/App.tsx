import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Nav from "./components/Nav/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
import { theme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
