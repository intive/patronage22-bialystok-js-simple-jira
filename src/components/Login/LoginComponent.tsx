import { Box } from "@mui/material";
import { useState } from "react";

import {
  StyledLoginTextField,
  StyledLoginInputLabel,
  StyledFormControl,
  StyledBox,
} from "./LoginComponent.style";

interface LoginProps {
  LoginLabel: string;
  PasswordLabel: string;
}

export const LoginComponent = ({ LoginLabel, PasswordLabel }: LoginProps) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledFormControl>
      <StyledBox>
        <StyledLoginInputLabel htmlFor='login-login-input'>
          {LoginLabel}
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setLogin(e.target.value)}
          id='login-login-input'
        />
      </StyledBox>
      <Box>
        <StyledLoginInputLabel htmlFor='login-password-input'>
          {PasswordLabel}
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setPassword(e.target.value)}
          id='login-password-input'
          type='password'
        />
      </Box>
    </StyledFormControl>
  );
};
