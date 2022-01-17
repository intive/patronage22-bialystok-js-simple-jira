import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3B3B3B", //9
    },
    secondary: {
      main: "#515151", //8
    },
    error: {
      main: "#626262", //7
    },
    warning: {
      main: "#7E7E7E", //6
    },
    info: {
      main: "#9E9E9E", //5
    },
    success: {
      main: "#B1B1B1", //4
    },
    text: {
      primary: "#CFCFCF", //3
      secondary: "#E1E1E1", //2
      disabled: "#F7F7F7", //1
    },
  },
});
