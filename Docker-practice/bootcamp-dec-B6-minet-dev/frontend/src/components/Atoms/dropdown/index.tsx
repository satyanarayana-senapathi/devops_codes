import React from "react";
import { Theme, SxProps, MenuItem } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Select, { SelectChangeEvent } from "@mui/material/Select";
interface Props {
  Menu: string[];
  sx?: SxProps<Theme>;
  mock: (arg0:string)=>void
}
export const Dropdown = (props: Props) => {
  const [active, setActive] = React.useState(props.Menu[0]);

  function onChangehandle(event: SelectChangeEvent) {
    setActive(event.target.value);
    props.mock(event.target.value)
  }

  return (
    <Select
      data-testid="select"
      value={active}
      onChange={onChangehandle}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      IconComponent={ExpandMoreIcon}
      sx={props.sx}
    >
      {props.Menu.map((item) => (
        <MenuItem key={item} value={item} sx={{color:"text.disabled"}}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};
