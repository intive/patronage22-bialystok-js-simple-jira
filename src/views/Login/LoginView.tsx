import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Input from "@components/Input/Input";
import { useGetExampleToken } from "src/hooks/useGetExampleToken";
import useForm from "src/hooks/useForm";
import {
  StyledBoxForm,
  StyledBoxLogin,
  StyledBoxPassword,
  StyledBoxContainer,
} from "./LoginView.style";

enum InputNames {
  LOGIN = "login",
  PASSWORD = "password",
}

const INITIAL_VALUES = {
  [InputNames.LOGIN]: "",
  [InputNames.PASSWORD]: "",
};

const validate = (values: typeof INITIAL_VALUES) =>
  !values.login || !values.password ? { isFieldEmpty: true } : {};

export const LoginView = () => {
  const { t } = useTranslation();
  const getExampleToken = useGetExampleToken();

  const { values, handleChange, handleSubmit, errors } = useForm(
    INITIAL_VALUES,
    () => getExampleToken(values),
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
          />
        </StyledBoxPassword>
      </StyledBoxForm>
    </StyledBoxContainer>
  );
};
