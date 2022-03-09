import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Projects } from "./views/Projects/Projects";
import { Board } from "./views/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import { Owl_components } from "./views/Owl/Owl";
import { Owl_componentsInput } from "./views/OwlInput/OwlInput";
import { LoginView } from "./views/Login/LoginView";

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='second' element={<SecondPage />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:name' element={<Board />} />
        <Route path='owl' element={<Owl_components />} />
        <Route path='owlinput' element={<Owl_componentsInput />} />
        <Route path='login' element={<LoginView />} />
      </Routes>
    </ThemeProvider>
  </>
);

export default App;
