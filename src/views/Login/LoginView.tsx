import { useTranslation } from "react-i18next";
import Input from "../../components/Input/Input";

import { StyledBoxForm, StyledBoxLogin, StyledBoxPassword } from "./Loginstyle";

export const LoginView = () => {
  const { t } = useTranslation();

  return (
    <StyledBoxForm component='form'>
      <StyledBoxLogin>
        <Input variant='outlined' labelHelperText={t("LoginLabel")} fullWidth />
      </StyledBoxLogin>
      <StyledBoxPassword>
        <Input
          variant='outlined'
          labelHelperText={t("PasswordLabel")}
          fullWidth
        />
      </StyledBoxPassword>
    </StyledBoxForm>
  );
};
