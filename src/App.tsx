import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Projects } from "./views/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import { Owl_components } from "./views/Owl/Owl";
import { Owl_componentsInput } from "./views/OwlInput/OwlInput";
import { Select } from "./components/Select/Select";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <div style={{ position: "absolute", bottom: "50px", right: "50px" }}>
        <Select />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<SecondPage />} />
        <Route path='projects' element={<Projects />} />
        <Route path='owl' element={<Owl_components />} />
        <Route path='owlinput' element={<Owl_componentsInput />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
