import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Input from "@components/Input/Input";
import useForm from "src/hooks/useForm";
import {
  StyledBoxForm,
  StyledBoxLogin,
  StyledBoxPassword,
  StyledBoxContainer,
} from "./LoginView.style";
import { AuthContext, logIn } from "src/contexts/authentication";

enum InputNames {
  LOGIN = "login",
  PASSWORD = "password",
}

export const INITIAL_VALUES = {
  [InputNames.LOGIN]: "",
  [InputNames.PASSWORD]: "",
};

const validate = (values: typeof INITIAL_VALUES) =>
  !values.login || !values.password ? { isFieldEmpty: true } : {};

export const LoginView = () => {
  const { t } = useTranslation();
  const { dispatch } = useContext(AuthContext);

  const { values, handleChange, handleSubmit, errors } = useForm(
    INITIAL_VALUES,
    () => dispatch(logIn(values)),
    validate
  );

  const isFieldEmpty = errors.isFieldEmpty;

  const handleKeypress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  useEffect(() => {
    if (isFieldEmpty) {
      alert(t("LoginError"));
    }
  }, [isFieldEmpty]);

  return (
    <StyledBoxContainer>
      <StyledBoxForm component='form' onKeyDown={handleKeypress}>
        <StyledBoxLogin>
          <Input
            name={InputNames.LOGIN}
            value={values.login}
            onChangeHandler={handleChange}
            variant='outlined'
            labelHelperText={t("LoginLabel")}
            fullWidth
            role='login'
          />
        </StyledBoxLogin>
        <StyledBoxPassword>
          <Input
            name={InputNames.PASSWORD}
            value={values.password}
            onChangeHandler={handleChange}
            variant='outlined'
            type='password'
            labelHelperText={t("PasswordLabel")}
            fullWidth
            role='password'
          />
        </StyledBoxPassword>
      </StyledBoxForm>
    </StyledBoxContainer>
  );
};
