import FormControl from "@mui/material/FormControl";
import { StyledSelect, StyledMenuItem } from "./Select.style";
import { SelectChangeEvent } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface SelectProps {
  value: string;
  options: string[];
  handleSelect: (e: SelectChangeEvent<unknown>) => void;
}

export const Select: React.FC<SelectProps> = ({
  value,
  options,
  handleSelect,
}) => {
  return (
    <FormControl>
      <StyledSelect
        onChange={handleSelect}
        value={value}
        renderValue={(value: any) => value}
        IconComponent={KeyboardArrowDownIcon}
      >
        {options.map(
          (option) =>
            option !== value && (
              <StyledMenuItem value={option} key={option}>
                {option}
              </StyledMenuItem>
            )
        )}
      </StyledSelect>
    </FormControl>
  );
};
