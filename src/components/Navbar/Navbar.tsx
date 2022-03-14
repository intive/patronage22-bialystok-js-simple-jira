import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  NavbarWrapper,
  NavbarRightSideWrapper,
  StyledAppBar,
  StyledToolbar,
  StyledIconButton,
  StyledSearchIconButton,
  StyledTitleTypography,
  StyledLogoIconButton,
} from "./Navbar.style";
import Logo from "./Logo";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import Input from "../Input/Input";
import SearchIcon from "@mui/icons-material/Search";
import { useTranslation } from "react-i18next";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";

const Search = styled(Box)(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[50],
  marginLeft: 0,
  padding: "0 20px",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

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
            <Search>
              <StyledSearchIconButton>
                <SearchIcon />
              </StyledSearchIconButton>
              <Input
                placeholder={t("search")}
                value={query}
                withoutBorder={true}
                onChangeHandler={handleChangeQuery}
              />
            </Search>

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
