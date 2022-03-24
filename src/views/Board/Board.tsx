import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { API_ADD_NEW_STATUS, API_GET_BOARD_STATUS } from "../../api/contsans";
import { cleainingSuccessAlerts } from "../../scripts/cleaningSuccessAlerts";

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

  const [columns, setColumns] = useState<Array<object>>([]);
  const [statuses, setStatuses] = useState<Statuses[]>([]);
  const [filteredIssues, setFilteredIssues] = useState<any>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const { boardId, projectName, projectId, board } = useParams();

  useEffect(() => {
    async function fetchStatus() {
      await importApiModule();
      const boardStatus = await FetchDataAPI.getBoardStatusById(boardId);
      setColumns(boardStatus[0]);
      setStatuses(boardStatus[1]);
    }
    fetchStatus();
    cleainingSuccessAlerts(setisAlertStatusSuccessOpen);
  }, [isSuccess]);

  const [isAlertStatusSuccessOpen, setisAlertStatusSuccessOpen] =
    useState(false);
  const [isAlertStatusErrorOpen, setisAlertStatusErrorOpen] = useState(false);

  useEffect(() => {
    async function fetchIssues() {
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
    }
    fetchIssues();
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
              setisAlertStatusSuccessOpen(true);
              setIsSuccess(!isSuccess);
            } else {
              setisAlertStatusErrorOpen(true);
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
          setisAlertStatusSuccessOpen(true);
          setIsSuccess(!isSuccess);
        } else {
          setisAlertStatusErrorOpen(true);
        }
      });
    }
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
          setBoardNumberAlert(true);
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
                />
              );
            })}
          </TasksCard>
        ))}
      </TaskWrapper>
      <AlertSuccess
        isOpen={isAlertStatusSuccessOpen}
        alertMsg={t("NewBoardAddedWithSuccess")}
      />
      <AlertError
        isOpen={isAlertStatusErrorOpen}
        alertMsg={t("NewBoardAddedWithError")}
        handleClose={() => {
          setisAlertStatusErrorOpen(false);
        }}
      />
      <AlertError
        isOpen={boardNumberAlert}
        alertMsg={t("columnAlertNumber")}
        handleClose={() => {
          setBoardNumberAlert(false);
        }}
      />
    </StyledPageWrapper>
  );
};
