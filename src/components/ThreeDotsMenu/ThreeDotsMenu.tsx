import * as React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";

import { StyledMenu } from "./ThreeDotsMenu.style";

interface MenuItemsType {
  id: number;
  icon: JSX.Element;
  label: string;
}
interface ThreeDotsMenuProps {
  menuItems: MenuItemsType[];
}

export default function ThreeDotsMenu({ menuItems }: ThreeDotsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id='basic-button'
        {...(open && { "aria-controls": "basic-menu" })}
        {...(open && { "aria-expanded": true })}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </IconButton>
      <StyledMenu
        elevation={2}
        id='basic-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menuItems.map((item: MenuItemsType) => (
          <MenuItem key={item.id} onClick={handleClose}>
            {item.icon}
            {item.label}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
