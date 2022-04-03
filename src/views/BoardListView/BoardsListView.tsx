import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAlerts } from "../../hooks/useAlerts";
import {
  API_GET_BOARDS_LIST,
  API_ADD_NEW_BOARD,
  API_REMOVE_BOARD,
} from "../../api/contsans";

import { StyledPageWrapper } from "./BoardsListView.style";

import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import PageHeader from "@modules/PageHeader/PageHeader";
import { Button } from "@components/Button/Button";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import Content from "@components/Content/Content";
import { ConfirmationDialog } from "@modules/ConfirmationDialog/ConfirmationDialog";
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
  const {
    isSuccessAlertActive,
    isErrorAlertActive,
    message,
    openAlert,
    closeErrorAlert,
  } = useAlerts();
  const [isLoading, setIsLoading] = useState(true);
  const [boardsList, setBoardsList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isDltDialogOpen, setIsDltDialogOpen] = useState(false);
  const { projectName, projectId } = useParams();
  const { t } = useTranslation();

  useEffect(() => {
    fetchBoards();
  }, [isSuccess]);

  const handleAddNewBoard = (inputValue: string) => {
    FetchDataAPI.addData(API_ADD_NEW_BOARD, {
      data: {
        alias: inputValue,
        name: inputValue,
        description: inputValue,
        projectId: projectId,
      },
    }).then((res: any) => {
      if (res.responseCode) {
        openAlert("success", t("NewBoardAddedWithSuccess"));
        setIsSuccess(!isSuccess);
      } else {
        openAlert("error", t("NewBoardAddedWithError"));
      }
    });
  };

  const dltBoardHandler = async (id: number) => {
    await FetchDataAPI.deleteData(`${API_REMOVE_BOARD}${id}`).then(
      (res: any) => {
        if (res.status) {
          openAlert("success", t("DeleteBoardSuccessMsg"));
          setIsSuccess(!isSuccess);
        } else {
          openAlert("error", t("DeleteBoardErrorMsg"));
        }
      }
    );
    fetchBoards();
  };

  //BUG:When going back from Board view ProjectId gets undefined & we don't get Boards data
  const fetchBoards = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(
      `${API_GET_BOARDS_LIST}?ProjectId=${projectId}&PageSize=20`
    ).then((res: any) => {
      const boardList = res.data.items;
      setIsListEmpty(boardList.length === 0);
      boardList && setBoardsList(boardList);
    });
    setIsDialogOpen(false);
    setIsLoading(false);
  }, []);

  return (
    <>
      <Content isLoading={isLoading}>
        <StyledPageWrapper>
          <ConfirmationDialog
            confirmHandler={() => {
              dltBoardHandler(current);
              setIsDltDialogOpen(false);
            }}
            isOpen={isDltDialogOpen}
            handleClose={() => setIsDltDialogOpen(false)}
          >
            {t("deleteBoardWarning")}
          </ConfirmationDialog>
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
            <BoardsList
              boards={boardsList}
              dltBoardHandler={(boardId: any) => {
                setCurrent(boardId);
                setIsDltDialogOpen(true);
              }}
              projectName={projectName}
            />
          )}
        </StyledPageWrapper>
      </Content>
      <AlertSuccess isOpen={isSuccessAlertActive} alertMsg={message} />
      <AlertError
        isOpen={isErrorAlertActive}
        alertMsg={message}
        handleClose={() => closeErrorAlert()}
      />
    </>
  );
};
