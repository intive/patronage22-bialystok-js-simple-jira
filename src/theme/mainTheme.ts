import { createTheme } from "@mui/material/styles";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    capitalHeader: true;
    ticketHeader: true;
    ticketText: true;
  }
}

declare module "@mui/material/styles" {
  interface Theme {
    customShadows: {
      primary: string;
      secondary: string;
    };
  }

  interface ThemeOptions {
    customShadows?: {
      primary?: string;
      secondary?: string;
    };
  }
}

let theme = createTheme({
  palette: {
    secondary: {
      main: "#0d0d0d",
    },
    grey: {
      "50": "#F7F7F7",
      "100": "#E1E1E1",
      "200": "#CFCFCF",
      "300": "#B1B1B1",
      "400": "#9E9E9E",
      "500": "#7E7E7E",
      "600": "#626262",
      "700": "#515151",
      "800": "#3B3B3B",
      "900": "#222222",
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
});

theme = createTheme(theme, {
  palette: {
    text: {
      primary: theme.palette.grey[900],
      secondary: "#ffffff",
    },
  },
  typography: {
    capitalHeader: {
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: "24px",
      textTransform: "uppercase",
    },
    ticketHeader: {
      fontFamily: "'Roboto', sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "24px",
      display: "inline-block",
    },
    ticketText: {
      fontFamily: "'Roboto', sans-serif",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "12px",
      lineHeight: "16px",
      display: "inline-block",
    },
  },
  customShadows: {
    primary: "0px 1px 3px rgba(98, 98, 98, 0.24)",
    secondary: "0px 8px 16px rgba(98, 98, 98, 0.24)",
  },
  // spacing: 8,
});

export { theme };
