import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Alert } from "@mui/material";
import { Button } from "@components/Button/Button";

import PageHeader from "../../modules/PageHeader/PageHeader";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { TaskWrapper } from "./Board.style";
import { StyledPageWrapper } from "../Projects/Projects.style";
import TasksCard from "../../modules/TasksCard";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import Ticket from "../../modules/Ticket/Ticket";

let FetchBoardStatusAPI: any;

async function importApiModule() {
  if (localStorage["USE_MOCK"] === "true") {
    const module = await import("../../api/boardStatus/mockBoardStatusApi");
    FetchBoardStatusAPI = module.default;
  } else {
    const module = await import("../../api/boardStatus/boardStatusApi");
    FetchBoardStatusAPI = module.default;
  }
}

export const Board = () => {
  const [columns, setColumns] = useState<Array<object>>([]);
  const [filteredIssues, setFilteredIssues] = useState<any>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const { boardId, projectName, projectId } = useParams();

  useEffect(() => {
    async function fetchStatus() {
      await importApiModule();
      const boardStatus = await FetchBoardStatusAPI.getBoardStatusById(boardId);
      setColumns(boardStatus);
    }
    fetchStatus();
  }, []);

  useEffect(() => {
    async function fetchIssues() {
      const response = await fetch(
        `https://patronageapi.herokuapp.com/api/issue?BoardId=${boardId}&PageNumber=1&PageSize=15`
      );
      const data = await response.json();
      const issues = data.data.items;

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

  const menuOptions = [
    {
      id: 0,
      icon: <ViewWeekOutlinedIcon />,
      label: `${t("addColumn")}`,
      onClick: () => setIsDialogOpen(!isDialogOpen),
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
        pageTitle={`${t("boardsTitle")}`}
        menuComponent={<ThreeDotsMenu menuItems={menuOptions} />}
        returnLinkName={t("boardsBackLink")}
        returnLink={`/projects/${projectName}&${projectId}`}
        interactiveElement={
          <Button onClick={() => console.log("button clicked")}>
            {t("newIssueBtn")}
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
    </StyledPageWrapper>
  );
};
