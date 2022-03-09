import { BaseTextFieldProps } from "@mui/material";
import { ChangeEventHandler } from "react";
import {
  StyledTextField,
  StyledInputLabel,
  StyledTextFieldWithoutBorder,
} from "./Input.style";

export interface Input extends BaseTextFieldProps {
  labelHelperText?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  withoutBorder?: boolean;
}

const Input = ({
  labelHelperText,
  onChangeHandler,
  variant,
  withoutBorder = false,
  ...extraProps
}: Input) => {
  return (
    <>
      <StyledInputLabel htmlFor='styled-text-input' className={variant}>
        {labelHelperText}
      </StyledInputLabel>
      {withoutBorder ? (
        <StyledTextFieldWithoutBorder
          onChange={onChangeHandler}
          id='styled-text-input'
          variant={variant}
          {...extraProps}
        />
      ) : (
        <StyledTextField
          onChange={onChangeHandler}
          id='styled-text-input'
          variant={variant}
          {...extraProps}
        />
      )}
    </>
  );
};

export default Input;
