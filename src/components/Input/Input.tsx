import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import { StyledTextField, StyledInputLabel } from "./Input.style";

export interface Input extends BaseTextFieldProps {
  labelHelperText?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}

const Input = ({
  labelHelperText,
  onChangeHandler,
  variant,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel htmlFor='styled-text-input' className={variant}>
        {labelHelperText}
      </StyledInputLabel>
      <StyledTextField
        onChange={onChangeHandler}
        id='styled-text-input'
        variant={variant}
        {...extraProps}
      />
    </>
  );
};

export default Input;
