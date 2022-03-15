import { List as MuiList } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

//Quick solution for component refactor

interface ListType {
  dense?: boolean;
  children: any[];
}

export const List = ({ dense = true, children }: ListType) => {
  return (
    <MuiList dense={dense}>
      {children &&
        children.map((item: any) => (
          <ListItem key={item}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
    </MuiList>
  );
};
