import FormControl from "@mui/material/FormControl";
import {
  StyledSelect,
  StyledMenuItem,
  StyledFormControl,
} from "./Select.style";
import { InputLabel, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  value?: string;
  label?: string;
  options: string[];
  handleSelect: (e: SelectChangeEvent<unknown>) => void;
  secondary?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  handleSelect,
  secondary,
  label,
}) => {
  return (
    <StyledFormControl>
      {label && <InputLabel id={`${label}'-label'`}>{label}</InputLabel>}
      <StyledSelect
        onChange={handleSelect}
        value={value}
        renderValue={(value: any) => value}
        IconComponent={KeyboardArrowDownIcon}
        secondary={secondary}
        label={label}
      >
        {options.map(
          (option) =>
            option !== value && (
              <StyledMenuItem value={option} key={option} secondary={secondary}>
                {option}
              </StyledMenuItem>
            )
        )}
      </StyledSelect>
    </StyledFormControl>
  );
};
