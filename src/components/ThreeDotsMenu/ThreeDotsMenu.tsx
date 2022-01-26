import * as React from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";

import { StyledMenu } from "./ThreeDotsMenu.style";

interface MenuItemsType {
  id: number;
  icon: JSX.Element;
  label: string;
}

const mockMenuItems: MenuItemsType[] = [
  { id: 0, icon: <ViewWeekOutlinedIcon />, label: "Add column" },
  { id: 1, icon: <DeleteOutlineIcon />, label: "Delete project" },
];

interface ThreeDotsMenuProps {
  menuItems?: MenuItemsType[];
}

export default function ThreeDotsMenu({
  menuItems = mockMenuItems,
}: ThreeDotsMenuProps) {
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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup='true'
        aria-expanded={open ? "true" : undefined}
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
        {menuItems &&
          menuItems.map((item) => (
            <MenuItem key={item.id} onClick={handleClose}>
              {item.icon}
              {item.label}
            </MenuItem>
          ))}
      </StyledMenu>
    </div>
  );
}
