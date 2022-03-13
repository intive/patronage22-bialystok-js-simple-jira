import { useTranslation } from "react-i18next";
import Input from "../../components/Input/Input";

import {
  StyledBoxForm,
  StyledBoxLogin,
  StyledBoxPassword,
  StyledBoxContainer,
} from "./LoginView.style";

import { useGetExampleToken } from "src/hooks/useGetExampleToken";
import useForm from "src/hooks/useForm";
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
