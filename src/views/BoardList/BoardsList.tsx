import { useCallback, useEffect, useState } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import {
  API_BOARD_LIST,
  API_PROJECT_BY_ID,
  API_ADD_NEW_BOARD,
} from "../../api/constans";
import {
  useSingleDataRequest,
  useDataRequest,
  doFetch,
} from "src/hooks/useRequest";
import { BoardList, ProjectByID } from "../../api/interfaces";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { mockBoardsList } from "../../mockData/mocBoardsList";
import { useParams } from "react-router-dom";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";
import { Alert } from "@mui/material";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import NewBoardDialog from "@modules/NewBoardDialog/NewBoardDialog";

let FetchBoardsAPI: any;

async function importApiModule() {
  const module = await import("../../api/boards/boardsApi");
  FetchBoardsAPI = module.default;
}

export const BoardsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  //   const [projectName, setProjectName] = useState<string>();
  const [boardsList, setBoardsList] = useState(mockBoardsList);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const { project: projectName } = useParams();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const [boardAddedSuccess, setBoardAddedSuccess] = useState(false);
  const [boardAddedError, setBoardAddedError] = useState(false);
  const [open, setOpen] = useState(false);
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

  const handleAddNewBoard = (boardName: string) => {
    if (boardsList.find((board) => board.name === boardName.toLowerCase())) {
      setBoardNameAlert(true);
    } else {
      boardsList.length < 5
        ? setBoardsList([...boardsList, { name: boardName.toLowerCase() }])
        : setBoardNumberAlert(true);
    }
  };

  //   const name = useSingleDataRequest(`${API_PROJECT_BY_ID}/${projectID}`, "GET");
  const boards = useDataRequest(API_BOARD_LIST, "GET");

  const fetchBoards = useCallback(async () => {
    await importApiModule();
    const boards = await FetchBoardsAPI.getBoards();
    setBoardsList(boards);
    setIsLoading(false);
  }, [boardsList]);

  useEffect(() => {
    fetchBoards();
  }, [isCreateDialogOpen]);

  //   useEffect(() => {
  //     setProjectName(name?.name);
  //   }, [name]);

  useEffect(() => {
    const boardsByID = boards?.filter(
      (board) => board.projectId === Number(projectID)
    );
    boardsByID && setBoardsList(boardsByID);
  }, [boards]);

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={`${t("projectBoards")} ${projectName}`}
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
        <NewProjectDialog
          isOpen={isCreateDialogOpen}
          setIsOpen={setIsCreateDialogOpen}
          dialogTitle={t("createNewBoard")}
          dialogHelper={t("boardDialogHelperText")}
          handleClick={handleAddNewBoard}
        />
        <Grid container spacing={3}>
          {boardsList?.map((board: any, id: number) => (
            <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
              <BoardCard
                menuComponent={<ThreeDotsMenu menuItems={menuOpttions} />}
                boardName={board.name}
                projectName={`${projectName}`}
              />
            </Grid>
          ))}
        </Grid>
      </StyledBoardList>
    </StyledPageWrapper>
  );
};
