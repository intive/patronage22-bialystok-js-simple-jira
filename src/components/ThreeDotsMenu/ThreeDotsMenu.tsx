import * as React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

import { StyledMenu, StyledIconButton } from "./ThreeDotsMenu.style";

interface ItemType {
  id: number;
  icon: JSX.Element;
  label: string;
  onClick: any;
}
interface ThreeDotsMenuProps {
  menuItems: ItemType[];
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
      <StyledIconButton
        id='three-dots-menu-button'
        {...(open && { "aria-controls": "three-dots-menu" })}
        {...(open && { "aria-expanded": true })}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </StyledIconButton>
      <StyledMenu
        elevation={2}
        id='three-dots-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "three-dots-menu-button",
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
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            onClick={() => {
              handleClose(), item.onClick();
            }}
          >
            {item.icon}
            <Typography>{item.label}</Typography>
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
}
