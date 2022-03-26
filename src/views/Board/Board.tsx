import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { API_ADD_NEW_STATUS, API_GET_BOARD_STATUS } from "../../api/contsans";
import { useAlerts } from "../../hooks/useAlerts";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import Ticket from "../../modules/Ticket/Ticket";

import { StyledPageWrapper } from "../Projects/Projects.style";
import { TaskWrapper } from "./Board.style";

import PageHeader from "@modules/PageHeader/PageHeader";
import TasksCard from "@modules/TasksCard";
import { NewItemDialog } from "@modules/NewItemDialog/NewItemDialog";
import { Button } from "@components/Button/Button";
import { AlertError, AlertSuccess } from "@components/Alert/Alert";
import ThreeDotsMenu from "@components/ThreeDotsMenu/ThreeDotsMenu";

let FetchDataAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/boardStatus/mockBoardStatusApi");
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

  useEffect(() => {
    async function fetchStatus() {
      await importApiModule();
      const boardStatus = await FetchDataAPI.getBoardStatusById(boardId);
      setColumns(boardStatus[0]);
      setStatuses(boardStatus[1]);
    }
    fetchStatus();
    fetchIssues();
  }, [isSuccess]);

  const fetchIssues = useCallback(async () => {
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
  }, []);

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
  };

  const handleDeleteTicket = (issueId: string) => {
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
      onClick: () => console.log("column deleted"),
    },
  ];

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={`${t("boardsTitle")} ${board}`}
        menuComponent={<ThreeDotsMenu menuItems={menuOptions} />}
        returnLinkName={t("boardsBackLink")}
        returnLink={`/projects/${projectName}&${projectId}`}
        interactiveElement={
          <Button onClick={() => console.log("button clicked")}>
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
      <TaskWrapper>
        {columns?.map((column: any) => (
          <TasksCard title={column.status.code} key={column.statusId}>
            {filteredIssues[column.statusId]?.map((ticket: any) => {
              return (
                <Ticket
                  title={ticket.name}
                  key={ticket.id}
                  assignedTo={ticket.assignUserId}
                  issueId={ticket.id}
                  handleDeleteTicket={handleDeleteTicket}
                />
              );
            })}
          </TasksCard>
        ))}
      </TaskWrapper>
      <AlertSuccess isOpen={isSuccessAlertActive} alertMsg={message} />
      <AlertError
        isOpen={isErrorAlertActive}
        alertMsg={message}
        handleClose={() => closeErrorAlert()}
      />
    </StyledPageWrapper>
  );
};
