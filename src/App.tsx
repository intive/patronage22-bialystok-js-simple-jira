import { useState, ChangeEvent } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Counter } from "./components/Counter/Counter";

import Input from "./components/Input/Input";

const App = () => {
  const [field, setField] = useState<string>("");
  const handler = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setField(event.target.value);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Input value={field} onChangeHandler={handler} />
        <Routes>
          <Route index element={<Home />} />
          <Route path='second' element={<SecondPage />} />
        </Routes>
        <Counter />
      </ThemeProvider>
    </>
  );
};

export default App;
