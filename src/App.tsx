import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Select } from "./components/Select/Select";
import PageHeader from "./components/PageHeader/PageHeader";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <PageHeader pageTitle={"Projects"} buttonText={"New project"} />
      {/* <Select /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='second' element={<SecondPage />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
