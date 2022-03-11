import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Input from "../../components/Input/Input";

import { StyledBoxForm, StyledBoxLogin, StyledBoxPassword } from "./Loginstyle";

import { getLocalStorage, setLocalStorage } from "src/utils/localStorage";

export const LoginView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (!login || !password) {
        return window.alert(t("LoginError"));
      }
      const localStoragePathname = getLocalStorage("authRoute");
      setLocalStorage("authRequired", false);

      if (localStoragePathname !== null) {
        console.log(localStoragePathname);
        return navigate(localStoragePathname);
      }
    }
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <StyledBoxForm component='form' onKeyDown={handleOnKeyDown}>
      <StyledBoxLogin>
        <Input
          variant='outlined'
          labelHelperText={t("LoginLabel")}
          fullWidth
          onChangeHandler={handleLoginChange}
        />
      </StyledBoxLogin>
      <StyledBoxPassword>
        <Input
          variant='outlined'
          labelHelperText={t("PasswordLabel")}
          fullWidth
          value={password}
          type='password'
          onChangeHandler={handlePasswordChange}
        />
      </StyledBoxPassword>
    </StyledBoxForm>
  );
};
