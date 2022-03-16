import { useCallback, useEffect, useState } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import NewBoardDialog from "@modules/NewBoardDialog/NewBoardDialog";

let FetchBoardsAPI: any;

async function importApiModule() {
  const module = await import("../../api/boards/boardsApi");
  FetchBoardsAPI = module.default;
}

export const BoardsList = () => {
  const [boardsList, setBoardsList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const { projectID: projectID } = useParams();

  const { t } = useTranslation();

  const menuOpttions = [
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
      onClick: () => console.log("board deleted"),
    },
  ];

  const fetchBoards = useCallback(async () => {
    await importApiModule();
    const boards = await FetchBoardsAPI.getBoards();
    const boardsByID = boards?.filter(
      (board: any) =>
        board.projectId === Number(projectID) && board.isActive === true
    );
    boardsByID && setBoardsList(boardsByID);
  }, [boardsList]);

  useEffect(() => {
    fetchBoards();
  }, [isDialogOpen]);

  return (
    <StyledPageWrapper>
      <PageHeader
        returnLinkName={t("projectsBackLink")}
        returnLink={"/projects"}
        pageTitle={`${t("projectBoards")}`}
        interactiveElement={
          <Button onClick={() => setIsDialogOpen(true)}>
            {t("newBoardBtn")}
          </Button>
        }
      />
      {boardNumberAlert && (
        <Alert onClose={() => setBoardNumberAlert(false)} severity='error'>
          {t("boardAlertNumber")}
        </Alert>
      )}
      {boardNameAlert && (
        <Alert onClose={() => setBoardNameAlert(false)} severity='error'>
          {t("boardAlertName")}
        </Alert>
      )}
      <NewBoardDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("boardDialogTitle")}
        dialogHelper={t("boardDialogHelperText")}
      />
      <StyledBoardList>
        <Grid container spacing={3}>
          {boardsList?.map((board: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <BoardCard
                menuComponent={<ThreeDotsMenu menuItems={menuOpttions} />}
                boardName={board.name}
                projectName={`${projectID}`}
              />
            </Grid>
          ))}
        </Grid>
      </StyledBoardList>
    </StyledPageWrapper>
  );
};
