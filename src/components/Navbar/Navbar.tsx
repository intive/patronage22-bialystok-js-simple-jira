import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  NavbarWrapper,
  NavbarRightSideWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledSearchIconButton,
  StyledTitleTypography,
  StyledLogoIconButton,
  StyledSearchField,
} from "./Navbar.style";
import Logo from "./Logo";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import { useTranslation } from "react-i18next";
import { InputAdornment } from "@mui/material";

export default function Navbar() {
  const [query, setQuery] = React.useState("");
  const handleChangeQuery = (event: any) => {
    setQuery(event.target.value);
  };
  const { t, i18n } = useTranslation();

  return (
    <Box>
      <StyledAppBar>
        <StyledToolbar>
          <NavbarWrapper>
            <StyledLogoIconButton>
              <Logo />
            </StyledLogoIconButton>
            <StyledTitleTypography variant='h6' noWrap>
              {t("taskManagementTool")}
            </StyledTitleTypography>
          </NavbarWrapper>
          <NavbarRightSideWrapper>
            <StyledSearchField
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <StyledSearchIconButton>
                      <SearchIcon />
                    </StyledSearchIconButton>
                  </InputAdornment>
                ),
              }}
              inputProps={{
                "aria-label": "query",
              }}
              placeholder={t("search")}
              value={query}
              onChange={handleChangeQuery}
            />
            <NavbarWrapper>
              <StyledIconButton>
                <DarkModeTwoToneIcon />
              </StyledIconButton>
              <StyledIconButton>
                <LogoutIcon />
              </StyledIconButton>
            </NavbarWrapper>
          </NavbarRightSideWrapper>
        </StyledToolbar>
      </StyledAppBar>
    </Box>
  );
}
