import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";

export const StyledSelect = styled(Select)({
  maxHeight: "50px",
  "& ul .MuiList-root-fZzEFe": {
    paddingTop: "0",
    backgroundColor: "red",
  },
});

export const SelectWrapper = styled("div")({
  position: "absolute",
  top: "15%",
  right: "5%",
});
