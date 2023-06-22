import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MuiTextfield, { TextFieldProps } from "@mui/material/TextField";

export interface Props extends Omit<TextFieldProps, "variant"> {
  id: string;
  label: string;
  type: "text" | "password" | "email";
}

const TextFieldComponent: React.FC<Props> = ({ id, label, type, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleInputType = (): "text" | "password" => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return "text";
  };

  return (
    <MuiTextfield
      id={id}
      label={label}
      type={handleInputType()}
      InputProps={{
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton onClick={toggleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      {...rest}
    />
  );
};

export default TextFieldComponent;
