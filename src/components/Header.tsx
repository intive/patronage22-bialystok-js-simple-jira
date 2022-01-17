import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import { useTranslation } from "react-i18next";

import SelectLanguage from "./SelectLanguage";

const StyledBox = styled(Box)`
  background: #bdc3c7;
  display: flex;
  align-items: center;
`;

const StyledTabs = styled(Tabs)`
  margin-right: auto;
`;

export default function Header(): any {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number
  ): void => {
    setValue(newValue);
  };
  return (
    <StyledBox sx={{ width: "100%" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label='nav tabs example'
      >
        <Tab component={Link} label={t("button")} to='/' />
        <Tab component={Link} label={t("text")} to='/text' />
      </StyledTabs>
      <StyledBox sx={{ paddingRight: "8px" }}>
        <Typography>{t("language")}</Typography>
        <SelectLanguage />
      </StyledBox>
    </StyledBox>
  );
}
