import React from "react";
import { InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import FilterListIcon from "@mui/icons-material/FilterList";

export interface SearchBarProps {
  placeholder: string;
  size?: "small" | "medium" | "large";
  inputProps?: object;
  iconButtonProps?: object;
  searchIconProps?: object;
  filterIconProps?: object;
  showSearchIcon?: boolean;
  showFilterIcon?: boolean;
  callBack?: (searchText: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  iconButtonProps = {},
  searchIconProps = {},
  filterIconProps = {},
  showSearchIcon = true,
  showFilterIcon = true,
  callBack,
}) => {
  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const searchText = event.currentTarget.value;
    callBack && callBack(searchText);
  };

  return (
    <InputBase
      placeholder={placeholder}
      onKeyUp={handleKeyUp}
      sx={{
        borderRadius: "4px",
        border: "1px solid #ccc",
        width: "100%",
        color: "#343446",
        display: "flex",
        justifyContent: "flex-end",
      }}
      endAdornment={
        <>
          {showSearchIcon && (
            <IconButton aria-label="search" {...iconButtonProps}>
              <SearchIcon data-testid="search-icon" {...searchIconProps} />
            </IconButton>
          )}
          {showSearchIcon && showFilterIcon && (
            <Box
              sx={{
                width: "2px",
                height: "25px",
                backgroundColor: "#ccc",
                margin: "0px 8px",
              }}
            />
          )}
          {showFilterIcon && (
            <IconButton aria-label="filter" {...iconButtonProps}>
              <FilterListIcon data-testid="filter-icon" {...filterIconProps} />
            </IconButton>
          )}
        </>
      }
      inputProps={{
        style: { paddingLeft: "12px" },
      }}
    />
  );
};

export default SearchBar;
