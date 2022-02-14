import { useState } from "react";

import {
  StyledLoginTextField,
  StyledLoginInputLabel,
  StyledFormControl,
  StyledBoxLogin,
  StyledBoxPassword,
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
      <StyledBoxLogin>
        <StyledLoginInputLabel htmlFor='login-login-input'>
          {LoginLabel}
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setLogin(e.target.value)}
          id='login-login-input'
        />
      </StyledBoxLogin>
      <StyledBoxPassword>
        <StyledLoginInputLabel htmlFor='login-password-input'>
          {PasswordLabel}
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setPassword(e.target.value)}
          id='login-password-input'
          type='password'
        />
      </StyledBoxPassword>
    </StyledFormControl>
  );
};
