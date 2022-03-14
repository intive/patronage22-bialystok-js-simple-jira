import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";

export const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 4,
    boxShadow: theme.customShadows.tertiary,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.grey["500"],
    marginRight: 4,
  },
  "& .MuiTypography-root": {
    color: theme.palette.grey["600"],
  },
  "& .MuiList-root": {
    padding: 0,
  },
  "& .MuiButtonBase-root": {
    padding: "6px 8px 6px 8px",
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "& .MuiSvgIcon-root": {
    color: theme.palette.grey[500],
  },
  padding: 0,
}));
