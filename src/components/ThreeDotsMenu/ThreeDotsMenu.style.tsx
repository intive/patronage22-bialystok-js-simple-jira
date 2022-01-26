import { styled } from "@mui/system";
import Menu from "@mui/material/Menu";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    padding: "10px 8px",
    color: theme.palette.grey["600"],
    borderRadius: 4,
    boxShadow: "0px 1px 2px rgb(98 98 98 / 0.24)",
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.grey["500"],
    marginRight: 4,
  },
  "& .MuiList-root": {
    padding: 0,
  },
  "& .MuiButtonBase-root": {
    padding: 2,
  },
  "& .MuiButtonBase-root:not(:last-of-type)": {
    marginBottom: 8,
  },
}));
