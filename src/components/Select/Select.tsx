import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import { StyledSelect, SelectWrapper } from "./Select.style";
import { useTranslation } from "react-i18next";

// interface SelectProps {
//   switch: () => void;
// }

export const Select = () => {
  const [lang, setLang] = useState("en");
  const { t, i18n } = useTranslation();

  const handleChangeLang = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <SelectWrapper>
      <p>{t("paragraph5")}</p>
      <Box sx={{ maxWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id='lang-changer'>Language</InputLabel>
          <StyledSelect
            labelId='ang-changer'
            id='demo-simple-select'
            label='Language'
            value={lang}
            onChange={handleChangeLang}
          >
            <MenuItem value={"en"}>english</MenuItem>
            <MenuItem value={"pl"}>polski</MenuItem>
          </StyledSelect>
        </FormControl>
      </Box>
    </SelectWrapper>
  );
};
