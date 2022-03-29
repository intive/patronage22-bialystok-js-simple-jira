import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";
import {
  API_GET_BOARDS_LIST,
  API_ADD_NEW_BOARD,
  API_DELETE_BOARD,
} from "../../api/contsans";

import { StyledPageWrapper } from "./BoardsListView.style";

import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import PageHeader from "@modules/PageHeader/PageHeader";
import { Button } from "@components/Button/Button";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import Content from "@components/Content/Content";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
import { deleteBoard } from "../../api/boards/deleteBoard";
import { BoardsList } from "@modules/BoardsList/BoardsList";

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

export const BoardsListView = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [boardsList, setBoardsList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertBoardSuccessOpen, setisAlertBoardSuccessOpen] = useState(false);
  const [isAlertBoardErrorOpen, setisAlertBoardErrorOpen] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isDeleteBoardDialogOpen, setIsDeleteBoardDialogOpen] = useState(false);
  const [isDeleteBoardSuccessOpen, setIsDeleteBoardSuccessOpen] =
    useState(false);
  const [isDeleteBoardErrorOpen, setIsDeleteBoardErrorOpen] = useState(false);
  const [currentBoard, setCurrentBoard] = useState("");
  const { projectName: projectName, projectId: projectId } = useParams();
  const { t } = useTranslation();

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

  const fetchBoards = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(API_GET_BOARDS_LIST).then((res: any) => {
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
    fetchBoards();
    cleainingSuccessAlerts(setisAlertBoardSuccessOpen);
    cleainingSuccessAlerts(setIsDeleteBoardSuccessOpen);
  }, [isSuccess]);

  const handelDeleteBoard = (currentBoard: string) => {
    console.log(API_DELETE_BOARD + currentBoard);
    FetchDataAPI.deleteData(API_DELETE_BOARD + currentBoard).then(
      (res: any) => {
        if (res.status) {
          setIsDeleteBoardSuccessOpen(true);
          setIsSuccess(!isSuccess);
        } else {
          setIsDeleteBoardErrorOpen(true);
        }
      }
    );
    setIsDeleteBoardDialogOpen(false);
  };
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
          <ConfirmationDialog
            isOpen={isDeleteBoardDialogOpen}
            confirmHandler={() => handelDeleteBoard(currentBoard)}
            handleClose={() => setIsDeleteBoardDialogOpen(false)}
          >
            {t("DltBoardConfirmation")}
          </ConfirmationDialog>
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
            <BoardsList
              boards={boardsList}
              deleteBoardHandler={(boardId: string) => {
                setIsDeleteBoardDialogOpen(true);
                setCurrentBoard(boardId);
              }}
              addColumnHandler={() => console.log("column added")}
            />
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
      <AlertSuccess
        isOpen={isDeleteBoardSuccessOpen}
        alertMsg={t("DltBoardSuccess")}
      />
      <AlertError
        isOpen={isDeleteBoardErrorOpen}
        alertMsg={t("DltBoardError")}
        handleClose={() => {
          setIsDeleteBoardErrorOpen(false);
        }}
      />
    </>
  );
};
