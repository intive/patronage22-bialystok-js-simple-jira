import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";
import {
  API_GET_BOARDS_LIST,
  API_ADD_NEW_BOARD,
  API_REMOVE_BOARD,
  API_DELETE_A_PROJECT,
} from "../../api/contsans";

import Grid from "@mui/material/Grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";

import { StyledBoardListView, StyledPageWrapper } from "./BoardsListView.style";

import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { EmptyListModule } from "@modules/EmptyListModule/EmptyListModule";
import PageHeader from "@modules/PageHeader/PageHeader";
import { BoardCard } from "@components/BoardCard/BoardCard";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
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
  const [isLoading, setIsLoading] = useState(true);
  const [boardsList, setBoardsList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [current, setCurrent] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertBoardSuccessOpen, setisAlertBoardSuccessOpen] = useState(false);
  const [isAlertBoardErrorOpen, setisAlertBoardErrorOpen] = useState(false);
  const [isDeleteBoardError, setIsDeleteBoardError] = useState(false);
  const [isDeleteBoardSuccess, setIsDeleteBoardSuccess] = useState(false);
  const [isListEmpty, setIsListEmpty] = useState(false);
  const [isDltDialogOpen, setIsDltDialogOpen] = useState(false);
  const { projectName: projectName, projectId: projectId } = useParams();
  const { t } = useTranslation();

  const menuOptions = [
    {
      id: 0,
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

  const dltBoardHandler = async (id: number) => {
    await FetchDataAPI.deleteData(`${API_REMOVE_BOARD}${id}`).then(
      (res: any) => {
        console.log(res.status);
        if (res.status) {
          setIsDeleteBoardSuccess(true);
          setIsSuccess(!isSuccess);
        } else {
          setIsDeleteBoardError(true);
        }
      }
    );

    fetchBoards();
  };

  const fetchBoards = useCallback(async () => {
    await importApiModule();
    FetchDataAPI.getData(`${API_GET_BOARDS_LIST}?ProjectId=${projectId}`).then(
      (res: any) => {
        const boardList = res.data.items;
        if (boardList.length === 0) {
          setIsListEmpty(true);
        } else {
          setIsListEmpty(false);
          setBoardsList(boardList);
        }
      }
    );
    setIsDialogOpen(false);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBoards();
    cleainingSuccessAlerts(setisAlertBoardSuccessOpen);
    cleainingSuccessAlerts(setIsDeleteBoardSuccess);
  }, [isSuccess]);

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
              // addColumnHandler={}
              projectName={projectName}
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
        isOpen={isDeleteBoardSuccess}
        alertMsg={t("DeleteBoardSuccessMsg")}
      />
      <AlertError
        isOpen={isDeleteBoardError}
        alertMsg={t("DeleteBoardErrorMsg")}
        handleClose={() => {
          setIsDeleteBoardError(false);
        }}
      />
    </>
  );
};
