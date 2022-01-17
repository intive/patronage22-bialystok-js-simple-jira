import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { useTranslation } from "react-i18next";
import availableLanguages from "../i18n";

export default function BasicSelect() {
  const { i18n } = useTranslation();
  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <Select
          labelId='lang-label'
          id='lang'
          value={i18n.language}
          onChange={handleChange}
        >
          {availableLanguages.map((language) => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
