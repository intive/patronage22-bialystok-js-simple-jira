import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";

interface MenuItemsType {
  id: number;
  icon: JSX.Element;
  label: string;
}

export const mockMenuItems: MenuItemsType[] = [
  { id: 0, icon: <ViewWeekOutlinedIcon />, label: "Add column" },
  { id: 1, icon: <DeleteOutlineIcon />, label: "Delete project" },
];
