import { useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../Input/Input";

import {
  StyledLoginTextField,
  StyledLoginInputLabel,
  StyledBoxForm,
  StyledBoxLogin,
  StyledBoxPassword,
} from "./LoginComponent.style";

interface LoginProps {
  LoginLabel: string;
  PasswordLabel: string;
}

export const LoginComponent = ({ LoginLabel, PasswordLabel }: LoginProps) => {
  const { t } = useTranslation();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledBoxForm component='form'>
      <StyledBoxLogin>
        <Input
          variant='outlined'
          labelHelperText={t("LoginHelperText")}
          fullWidth
        />
      </StyledBoxLogin>
      <StyledBoxPassword>
        <Input
          variant='outlined'
          labelHelperText={t("PasswordHelperText")}
          fullWidth
        />
      </StyledBoxPassword>
    </StyledBoxForm>
  );
};