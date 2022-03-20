import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";
import { API_GET_BOARDS_LIST, API_ADD_NEW_BOARD } from "../../api/contsans";

import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";

import { StyledBoardList, StyledPageWrapper } from "./BoardsList.style";

import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { Button } from "@components/Button/Button";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import Content from "@components/Content/Content";

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/boards/mockBoardsApi");
    FetchDataAPI = module.default;
  } else {
    const module = await import("../../api/requestsApi");
    FetchDataAPI = module.default;
  }
}

export const BoardsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [boardsList, setBoardsList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertBoardSuccessOpen, setisAlertBoardSuccessOpen] = useState(false);
  const [isAlertBoardErrorOpen, setisAlertBoardErrorOpen] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const { projectName: projectName, projectId: projectId } = useParams();
  const { t } = useTranslation();

  const menuOptions = [
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
    }).then((res: any) => {
      if (res.responseCode) {
        setisAlertBoardSuccessOpen(true);
        setIsSuccess(!isSuccess);
      } else {
        setisAlertBoardErrorOpen(true);
      }
    });
  };

  const fetchProjects = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(API_GET_BOARDS_LIST).then((res: any) => {
      console.log(res);
      const boardsByID = res?.data.filter(
        (board: any) =>
          board.projectId === Number(projectId) && board.isActive === true
      );
      if (boardsByID.length === 0) {
        setIsListEmpty(true);
      } else {
        setIsListEmpty(false);
        setBoardsList(boardsByID);
      }
    });
    setIsDialogOpen(false);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProjects();
    cleainingSuccessAlerts(setisAlertBoardSuccessOpen);
  }, [isSuccess]);

  return (
    <>
      <Content isLoading={isLoading}>
        <StyledPageWrapper>
          <PageHeader
            returnLinkName={t("projectsBackLink")}
            returnLink={"/projects"}
            pageTitle={`${t("projectBoards")} ${projectName}`}
            interactiveElement={
              <Button onClick={() => setIsDialogOpen(true)}>
                {t("newBoardBtn")}
              </Button>
            }
          />
          <NewItemDialog
            isOpen={isDialogOpen}
            setIsOpen={setIsDialogOpen}
            dialogTitle={t("boardDialogTitle")}
            dialogHelper={t("boardDialogHelperText")}
            handleAdd={handleAddNewBoard}
          />
          {isListEmpty ? (
            <EmptyListModule
              secondary={+true}
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
                      menuComponent={<ThreeDotsMenu menuItems={menuOptions} />}
                      boardName={board.name}
                      projectName={`${projectName}`}
                      projectId={projectId}
                      boardId={board.id}
                    />
                  </Grid>
                ))}
              </Grid>
            </StyledBoardList>
          )}
        </StyledPageWrapper>
      </Content>
      <AlertSuccess
        isOpen={isAlertBoardSuccessOpen}
        alertMsg={t("NewBoardAddedWithSuccess")}
      />
      <AlertError
        isOpen={isAlertBoardErrorOpen}
        alertMsg={t("NewBoardAddedWithError")}
        handleClose={() => {
          setisAlertBoardErrorOpen(false);
        }}
      />
    </>
  );
};
