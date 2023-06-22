import { createTheme } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    caption1?: React.CSSProperties;
    caption2?: React.CSSProperties;
  }

  interface PaletteColor {
    50?: string;
    100?: string;
    300?: string;
    500?: string;
    700?: string;
    900?: string;
    A100?: string;
    hover?: string;
    disabled?: string;
  }
  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    300?: string;
    500?: string;
    700?: string;
    900?: string;
    A100?: string;
    hover?: string;
    disabled?: string;
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
  interface ButtonPropsVariantOverrides {
    caption1: true;
    caption2: true;
    hover: true;
    disabled: true;
  }
}

export const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    h2: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    h3: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    h4: {
      fontFamily: "Graphik Regular",
      fontSize: "40px",
      lineHeight: "54px",
    },
    h5: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    h6: {
      fontFamily: "Graphik Regular",
      fontSize: "24px",
      lineHeight: "34px",
    },
    subtitle1: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    subtitle2: {
      fontFamily: "Graphik Regular",
      fontSize: "20px",
      lineHeight: "28px",
    },
    body1: {
      fontFamily: "Graphik Regular",
      fontSize: "16px",
      lineHeight: "22px",
    },
    body2: {
      fontFamily: "Graphik Regular",
      fontSize: "16px",
      lineHeight: "22px",
    },
    button: {
      fontFamily: "Graphik Regular",
      fontSize: "14px",
      lineHeight: "42px",
      textTransform: "none",
    },
    caption1: {
      fontFamily: "Graphik Medium",
      fontSize: "14px",
      lineHeight: "16px",
    },
    caption2: {
      fontFamily: "Graphik Regular",
      fontSize: "14px",
      lineHeight: "16px",
    },
    overline: {
      fontFamily: "Graphik Regular",
      fontSize: "12px",
      lineHeight: "14px",
    },
    // fontFamily: 'Graphik Semi-bold',
    // fontSize: "30px",
    // lineHeight: "50px",
  },
  spacing: [4, 8, 12, 16, 20, 24, 32],
  palette: {
    primary: {
      100: "#FAFCFF",
      300: "#CCE3FF",
      main: "#0052FF",
      hover: "#002EB7",
      disabled: "#00177A",
    },
    success: {
      main: "#46BF31",
      light: "#E9F7EC",
      500: "#20B03F",
    },
    warning: {
      main: "#FFA74F",
      light: "#FFF6ED",
    },
    error: {
      main: "#B71A33",
      light: "#F3E6EB",
    },

    text: {
      primary: "#B2B2B9",
      secondary: "#7D7D89",
      disabled: "#343446",
    },
    grey: {
      50: "#F2F2F7",
      100: "#ECECF7",
      300: "#B4B4CF",
      500: "#4B4B60",
      700: "#252545",
      900: "#0E0E2E",
      A100: "#FFFFFF",
    },
  },
});
