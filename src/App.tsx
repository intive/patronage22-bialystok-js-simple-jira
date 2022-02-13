import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Select } from "./components/Select/Select";
import { Projects } from "./views/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { Owl_components } from "./views/Owl/Owl";


const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Select />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<SecondPage />} />
        <Route path='projects' element={<Projects />} />
        <Route path='owl' element={<Owl_components />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
