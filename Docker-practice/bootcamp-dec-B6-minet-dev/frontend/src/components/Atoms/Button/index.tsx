import React from "react";
import MuiButton, { ButtonProps } from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import { theme } from "../../../theme/theme";

export interface Props extends ButtonProps {
  children?: string | React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ children, variant, onClick, ...rest }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiButton variant={variant} onClick={onClick} {...rest}>
        {children}
      </MuiButton>
    </ThemeProvider>
  );
};

export default Button;
