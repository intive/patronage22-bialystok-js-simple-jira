import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  API_ADD_NEW_STATUS,
  API_GET_BOARD_STATUS,
  API_ISSUE,
  API_REMOVE_BOARD,
  API_UPDATE_TICKET,
} from "../../api/contsans";
import { useAlerts } from "../../hooks/useAlerts";

import { DragDropContext } from "react-beautiful-dnd";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import Ticket from "../../modules/Ticket/Ticket";

import { StyledPageWrapper } from "../Projects/Projects.style";
import { TaskWrapper } from "./Board.style";

import PageHeader from "@modules/PageHeader/PageHeader";
import TasksCard from "@modules/TasksCard/TasksCard";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { Button } from "@components/Button/Button";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";
import { usePrevLocation } from "src/hooks/usePrevLocation";

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

interface Statuses {
  id: number;
  code: string;
  board_Status: boolean | null;
}

export const Board = () => {
  const { t } = useTranslation();
  const {
    isSuccessAlertActive,
    isErrorAlertActive,
    message,
    openAlert,
    closeErrorAlert,
  } = useAlerts();

  const [columns, setColumns] = useState<Array<object>>([]);
  const [statuses, setStatuses] = useState<Statuses[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<any>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { boardId, projectName, projectId, board } = useParams();
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const prevLocation = usePrevLocation();
  const fetchStatus = async () => {
    await importApiModule();
    const boardStatus = await FetchDataAPI.getBoardStatusById(boardId);
    setColumns(boardStatus[0]);
    setStatuses(boardStatus[1]);
  };

  const fetchIssues = async () => {
    await importApiModule();
    const issues = await FetchDataAPI.getIssuesByBoardStatusId(boardId);

    const filterIssuesByStatusId = () => {
      const issuesFilteredByStatusId: any = {};

      issues.reduce((_: any, issue: any) => {
        if (!issuesFilteredByStatusId[issue.statusId]) {
          issuesFilteredByStatusId[issue.statusId] = [];
          issuesFilteredByStatusId[issue.statusId].push(issue);
        } else {
          issuesFilteredByStatusId[issue.statusId].push(issue);
        }
      }, issuesFilteredByStatusId);

      return issuesFilteredByStatusId;
    };

    setFilteredIssues(filterIssuesByStatusId());
  };

  const handleAddNewColumn = (inputValue: string) => {
    const index = statuses.find(
      (status) => status.code.toLowerCase() === inputValue.toLowerCase()
    );

    if (index == undefined) {
      FetchDataAPI.addData(`${API_ADD_NEW_STATUS}${inputValue}`).then(
        (res: any) => {
          FetchDataAPI.addData(API_GET_BOARD_STATUS, {
            boardId: boardId,
            statusId: res.data,
          }).then((res: any) => {
            if (res.responseCode) {
              openAlert("success", t("NewBoardAddedWithSuccess"));
              setIsSuccess(!isSuccess);
            } else {
              openAlert("error", t("NewBoardAddedWithError"));
            }
          });
        }
      );
    } else {
      FetchDataAPI.addData(API_GET_BOARD_STATUS, {
        boardId: boardId,
        statusId: index.id,
      }).then((res: any) => {
        if (res.responseCode) {
          openAlert("success", t("NewBoardAddedWithSuccess"));
          setIsSuccess(!isSuccess);
        } else {
          openAlert("error", t("NewBoardAddedWithError"));
        }
      });
    }
    fetchIssues();
  };

  const handleDeleteTicket = (issueId?: string) => {
    async function deleteIssue() {
      const response = await FetchDataAPI.deleteIssue(issueId);
      if (response.status === 200) {
        openAlert("success", t("IssueDeletedSuccess"));
        setIsSuccess(!isSuccess);
      } else {
        openAlert("error", t("IssueDeletedError"));
      }
    }
    deleteIssue();
    fetchIssues();
  };
  const dltBoardHandler = async (id: string | undefined) => {
    await FetchDataAPI.deleteData(`${API_REMOVE_BOARD}${id}`).then(
      (res: any) => {
        if (res.ok) {
          openAlert("success", t("DeleteBoardSuccessMsg"));
          setTimeout(() => {
            navigate(prevLocation);
          }, 1500);
        } else {
          openAlert("error", t("DeleteBoardErrorMsg"));
        }
      }
    );
  };
  const handleCreateIssue = async (
    projectId: string | undefined,
    boardID: string | undefined
  ) => {
    //TODO:move this function to CreateIssueDialog; for now I use static data to add Issue.
    const mockIssueItem = {
      data: {
        alias: "banana 1",
        name: "banana 1",
        description: "banana 1",
        projectId: projectId,
        boardId: boardID,
        statusId: 1,
        assignUserId: null,
        // createdOn: "2022-04-05T10:41:33.300Z",
      },
    };

    const res = await FetchDataAPI.addData(API_ISSUE, mockIssueItem);
    console.log(res);
  };

  const menuOptions = [
    {
      id: 0,
      icon: <ViewWeekOutlinedIcon />,
      label: `${t("addColumn")}`,
      onClick: () => {
        if (columns?.length < 5 || columns == undefined) {
          setIsDialogOpen(!isDialogOpen);
        } else {
          openAlert("error", t("columnAlertNumber"));
        }
      },
    },
    {
      id: 1,
      icon: <DeleteOutlineIcon />,
      label: `${t("deleteBoard")}`,
      onClick: () => dltBoardHandler(boardId),
    },
  ];

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    } else if (destination.droppableID === source.droppableId) {
      return;
    } else {
      const newIssues = Object.assign({}, filteredIssues);
      columns.map((column: any) => {
        if (!filteredIssues[column.statusId]) {
          newIssues[column.statusId] = [];
          setFilteredIssues(newIssues);
        }
      });

      newIssues[source.droppableId].forEach((issue: any, index: number) => {
        if (issue.id === Number(draggableId)) {
          newIssues[source.droppableId].splice(index, 1);
          newIssues[destination.droppableId].push(issue);
        }
      });

      setFilteredIssues(newIssues);

      FetchDataAPI.updateTicket(`${API_UPDATE_TICKET}${draggableId}`, {
        statusId: {
          data: destination.droppableId,
        },
      });
    }
  };

  useEffect(() => {
    fetchStatus();
    fetchIssues();
    return () => {
      setState({});
    };
  }, [isSuccess]);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={`${t("boardsTitle")} ${board}`}
        menuComponent={<ThreeDotsMenu menuItems={menuOptions} />}
        returnLinkName={t("boardsBackLink")}
        returnLink={`/projects/${projectName}&${projectId}`}
        interactiveElement={
          <Button onClick={() => handleCreateIssue(projectId, boardId)}>
            {t("newIssueBtn")}
          </Button>
        }
      />
      <NewItemDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("dialogCreateStatusTitle")}
        dialogHelper={t("dialogCreateStatusHelperText")}
        handleAdd={handleAddNewColumn}
      />
      <DragDropContext onDragEnd={onDragEnd}>
        <TaskWrapper>
          {columns?.map((column: any) => (
            <TasksCard
              title={column.status.code}
              key={column.statusId}
              id={column.statusId}
            >
              {filteredIssues[column.statusId]?.map(
                (ticket: any, index: number) => {
                  return (
                    <Ticket
                      title={ticket.name}
                      key={ticket.id}
                      assignedTo={ticket.assignUserId}
                      issueId={ticket.id}
                      index={index}
                      handleDeleteTicket={handleDeleteTicket}
                    />
                  );
                }
              )}
            </TasksCard>
          ))}
        </TaskWrapper>
      </DragDropContext>
      <AlertSuccess isOpen={isSuccessAlertActive} alertMsg={message} />
      <AlertError
        isOpen={isErrorAlertActive}
        alertMsg={message}
        handleClose={() => closeErrorAlert()}
      />
    </StyledPageWrapper>
  );
};
