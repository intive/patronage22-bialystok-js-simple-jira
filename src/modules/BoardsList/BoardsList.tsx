import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Grid } from "@mui/material";
import { StyledProjectsList as StyledBoardsList } from "../ProjectsList/ProjectsList.style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { BoardType } from "src/mockData/mocBoardsList";
import { BoardCard } from "@components/BoardCard/BoardCard";

interface BoardsListType {
  boards: BoardType[];
  dltBoardHandler?: any;
  addColumnHandler?: any;
  projectName: any;
}

export const BoardsList = ({
  boards,
  dltBoardHandler,
  addColumnHandler,
  projectName,
}: BoardsListType) => {
  return (
    <StyledBoardsList>
      <Grid container spacing={3}>
        {boards
          ?.filter((item: any) => item.isActive)
          .map((item: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <BoardCard
                menuComponent={
                  <ThreeDotsMenu
                    menuItems={[
                      {
                        id: 0,
                        icon: <ViewWeekOutlinedIcon />,
                        label: "Add column",
                        onClick: () => addColumnHandler(),
                      },
                      {
                        id: 1,
                        icon: <DeleteOutlineIcon />,
                        label: "Delete item",
                        onClick: () => dltBoardHandler(item.id),
                      },
                    ]}
                  />
                }
                projectName={projectName}
                boardName={item.name}
                boardId={item.id}
              />
            </Grid>
          ))}
      </Grid>
    </StyledBoardsList>
  );
};
