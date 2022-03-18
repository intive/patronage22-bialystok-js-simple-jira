import { useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../../modules/PageHeader/PageHeader";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { TaskWrapper } from "./Board.style";
import { StyledPageWrapper } from "../Projects/Projects.style";
import { mockBoards } from "../../mockData/mockBoardColumns";
import { useTranslation } from "react-i18next";
import TasksCard from "../../modules/TasksCard";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { Alert } from "@mui/material";
import { Button } from "@components/Button/Button";

export const Board = () => {
  const [boards, setBoards] = useState(mockBoards);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);
  const { projectName: projectName, projectId: projectId } = useParams();

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
        {boards.map((project) => (
          <TasksCard title={project.name} key={project.name} />
        ))}
      </TaskWrapper>
    </StyledPageWrapper>
  );
};
