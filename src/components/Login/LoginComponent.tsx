import { BaseTextFieldProps, Box } from "@mui/material";
import { useState } from "react";

import {
  StyledLoginTextField,
  StyledLoginInputLabel,
  StyledFormControl,
  StyledBox,
} from "./LoginComponent.style";

interface InputLogin extends BaseTextFieldProps {
  // value: string;
  // rows?: number;
  // required?: boolean;
  // labelText?: string;
  // onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

export const LoginComponent = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <StyledFormControl>
      <StyledBox>
        <StyledLoginInputLabel htmlFor='styled-text-inputOne'>
          Login
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setLogin(e.target.value)}
          id='styled-text-inputOne'
        />
      </StyledBox>
      <Box>
        <StyledLoginInputLabel htmlFor='styled-text-inputTwo'>
          Password
        </StyledLoginInputLabel>
        <StyledLoginTextField
          onChange={(e) => setPassword(e.target.value)}
          id='styled-text-inputTwo'
          type='password'
        />
      </Box>
    </StyledFormControl>
  );
};
