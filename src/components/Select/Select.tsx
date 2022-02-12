import {
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
} from "./Select.style";
import { SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  value?: string;
  label?: string;
  options: string[];
  handleSelect: (e: SelectChangeEvent<unknown>) => void;
  secondary?: boolean;
  fullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  handleSelect,
  secondary,
  label,
  fullWidth,
  ...props
}) => {
  return (
    <StyledFormControl secondary={secondary}>
      <StyledSelect
        onChange={handleSelect}
        value={value}
        renderValue={(value: any) => value}
        IconComponent={KeyboardArrowDownIcon}
        secondary={secondary}
        placeholder={label}
      >
        {options.map(
          (option) =>
            option !== value && (
              <StyledMenuItem
                value={option}
                key={option}
                secondary={secondary}
                fullWidth={fullWidth}
              >
                {option}
              </StyledMenuItem>
            )
        )}
      </StyledSelect>
    </StyledFormControl>
  );
};
