import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Select } from "./components/Select/Select";
import { Owl_componentsInput } from "./views/OwlInput/OwlInput";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Select />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<SecondPage />} />

        <Route path='owlinput' element={<Owl_componentsInput />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
