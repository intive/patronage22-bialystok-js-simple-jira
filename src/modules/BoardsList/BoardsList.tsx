import { Grid } from "@mui/material";
import { BoardType } from "src/mockData/mocBoardsList";
import { StyledBoardListView } from "./BoardsList.style";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export interface BoardListType {
  boards: BoardType[];
  deleteBoardHandler: any;
  addColumnHandler: any;
}

export const BoardsList = ({
  boards,
  deleteBoardHandler,
  addColumnHandler,
}: BoardListType) => {
  const { t } = useTranslation();
  const { projectName: projectName, projectId: projectId } = useParams();

  return (
    <StyledBoardListView>
      <Grid container spacing={3}>
        {boards?.map((board: any, id: number) => (
          <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
            <BoardCard
              menuComponent={
                <ThreeDotsMenu
                  menuItems={[
                    {
                      id: 0,
                      icon: <ViewWeekOutlinedIcon />,
                      label: `${t("addColumn")}`,
                      onClick: () => console.log("column added"),
                    },
                    {
                      id: 1,
                      icon: <DeleteOutlineIcon />,
                      label: `${t("deleteBoard")}`,
                      onClick: () => {
                        deleteBoardHandler(board.id);
                      },
                    },
                  ]}
                />
              }
              boardName={board.name}
              projectName={`${projectName}`}
              projectId={board.projectId}
              boardId={board.id}
            />
          </Grid>
        ))}
      </Grid>
    </StyledBoardListView>
  );
};
