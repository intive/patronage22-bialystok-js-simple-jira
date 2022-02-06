import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Select } from "./components/Select/Select";
import Input from "./components/Input/Input";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Input value='' />
      {/* <Select /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<SecondPage />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
