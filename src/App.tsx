import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/mainTheme";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Home } from "./views/Home/Home";
import { SecondPage } from "./views/SecondPage/SecondPage";
import { Counter } from "./components/Counter/Counter";
import { Select } from "./components/Select/Select";
import { SelectChangeEvent } from "@mui/material";

const App = () => {
  const [selectValue, setSelectValue] = useState("en");
  const { i18n } = useTranslation();

  const handleChangeLang = (e: SelectChangeEvent<unknown>) => {
    const value = e.target.value as string;
    setSelectValue(value);
    i18n.changeLanguage(value);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Select
          value={selectValue}
          options={["en", "pl"]}
          handleSelect={handleChangeLang}
        />
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
