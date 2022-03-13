import React from "react";
import { useTranslation } from "react-i18next";
import Input from "../Input/Input";
import useForm from "../../hooks/useForm";
import { useGetExampleToken } from "src/hooks/useGetExampleToken";
import {
  StyledBoxForm,
  StyledBoxLogin,
  StyledBoxPassword,
} from "./LoginView.style";

enum InputNames {
  LOGIN = "login",
  PASSWORD = "password",
}

const INITIAL_VALUES = {
  [InputNames.LOGIN]: "",
  [InputNames.PASSWORD]: "",
};

const validate = () => ({});

export const LoginView = () => {
  const { t } = useTranslation();
  const getExampleToken = useGetExampleToken();

  const { values, handleChange, handleSubmit } = useForm(
    INITIAL_VALUES,
    () => getExampleToken(values),
    validate
  );

  const handleKeypress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <StyledBoxForm onKeyPress={handleKeypress} component='form'>
      <StyledBoxLogin>
        <Input
          name={InputNames.LOGIN}
          value={values.login}
          variant='outlined'
          labelHelperText={t("LoginLabel")}
          onChangeHandler={handleChange}
          fullWidth
        />
      </StyledBoxLogin>
      <StyledBoxPassword>
        <Input
          name={InputNames.PASSWORD}
          onKeyPress={(e) => {}}
          onChangeHandler={handleChange}
          value={values.password}
          variant='outlined'
          labelHelperText={t("PasswordLabel")}
          fullWidth
        />
      </StyledBoxPassword>
    </StyledBoxForm>
  );
};
