import { useCallback, useEffect, useState } from "react";
import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";
import { useTranslation } from "react-i18next";
import { FetchDataAPI } from "../../api/requestsApi";
import { API_GET_BOARDS_LIST, API_ADD_NEW_BOARD } from "../../api/contsans";
import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";

export const BoardsList = () => {
  const [boardsList, setBoardsList] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const [isAlertProjectSuccessOpen, setIsAlertProjectSuccessOpen] =
    useState(false);
  const [isAlertProjectErrorOpen, setIsAlertProjectErrorOpen] = useState(false);
  const { projectName: projectName, projectId: projectId } = useParams();
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

  const handleAddNewBoard = (inputValue: string) => {
    const date = new Date();
    date.toISOString();
    FetchDataAPI.addData(API_ADD_NEW_BOARD, {
      data: {
        id: 0,
        alias: inputValue,
        name: inputValue,
        description: inputValue,
        projectId: projectId,
        statusId: 0,
        boardId: 1,
        isActive: true,
        createdOn: date,
        modifiedOn: date,
        board_Status: [
          {
            boardId: 0,
            statusId: 0,
          },
        ],
      },
    }).then((res: any) =>
      res.responseCode
        ? setIsAlertProjectSuccessOpen(true)
        : setIsAlertProjectErrorOpen(true)
    );
  };

  const fetchBoards = useCallback(async () => {
    const boards = await FetchDataAPI.getData(API_GET_BOARDS_LIST);
    const boardsByID = boards?.filter(
      (board: any) =>
        board.projectId === Number(projectId) && board.isActive === true
    );
    console.log(boardsByID);
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
      <NewItemDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("boardDialogTitle")}
        dialogHelper={t("boardDialogHelperText")}
        handleAdd={handleAddNewBoard}
      />
      {boardsList.length === 0 ? (
        <EmptyListModule
          secondary
          description={t("emptyBoardsListDescription")}
          buttonText={t("emptyBoardsListButton")}
          addNew={handleAddNewBoard}
          dialogTitle={t("boardDialogTitle")}
          dialogHelper={t("dialogCreateProjectHelperText")}
          isOpen={isDialogOpen}
          setIsOpen={setIsDialogOpen}
        />
      ) : (
        <StyledBoardList>
          <Grid container spacing={3}>
            {boardsList?.map((board: any, id: number) => (
              <Grid key={id} item xs={12} sm={12} md={6} lg={4} xl={3}>
                <BoardCard
                  menuComponent={<ThreeDotsMenu menuItems={menuOpttions} />}
                  boardName={board.name}
                  projectName={`${projectName}`}
                  id={projectId}
                />
              </Grid>
            ))}
          </Grid>
        </StyledBoardList>
      )}
      <AlertSuccess
        isOpen={isAlertProjectSuccessOpen}
        alertMsg={t("NewBoardAddedWithSuccess")}
      />
      <AlertError
        isOpen={isAlertProjectErrorOpen}
        alertMsg={t("NewBoardAddedWithError")}
        handleClose={() => {
          setIsAlertProjectErrorOpen(false);
        }}
      />
    </StyledPageWrapper>
  );
};
