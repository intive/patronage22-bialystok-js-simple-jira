import { useEffect, useState } from "react";
import PageHeader from "../../modules/PageHeader/PageHeader";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { TaskWrapper } from "./Board.style";
import { StyledPageWrapper } from "../Projects/Projects.style";
import { mockBoards } from "../../mockData/mockBoards";
import { useTranslation } from "react-i18next";
import TasksCard from "../../modules/TasksCard";
import NewProjectDialog from "@modules/NewProjectDialog/NewProjectDialog";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ViewWeekOutlinedIcon from "@mui/icons-material/ViewWeekOutlined";
import { Alert } from "@mui/material";

export const Board = () => {
  const [boards, setBoards] = useState(mockBoards);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { t } = useTranslation();
  const [boardNumberAlert, setBoardNumberAlert] = useState(false);
  const [boardNameAlert, setBoardNameAlert] = useState(false);

  const menuOptions = [
    {
      id: 0,
      icon: <ViewWeekOutlinedIcon />,
      label: "Add column",
      onClick: () => setIsDialogOpen(!isDialogOpen),
    },
    {
      id: 1,
      icon: <DeleteOutlineIcon />,
      label: "Delete project",
      onClick: () => console.log("project deleted"),
    },
  ];

  const handleAddNewBoard = (boardName: string) => {
    if (boards.find((board) => board.name === boardName.toLowerCase())) {
      setBoardNameAlert(true);
    } else {
      boards.length < 5
        ? setBoards([...boards, { name: boardName.toLowerCase() }])
        : setBoardNumberAlert(true);
    }
  };

  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={t("boardsTitle")}
        buttonText={t("newIssueBtn")}
        buttonHandler={() => console.log("button clicked")}
        menuComponent={<ThreeDotsMenu menuItems={menuOptions} />}
        returnLink={t("boardsBackLink")}
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
      <NewProjectDialog
        isOpen={isDialogOpen}
        setIsOpen={setIsDialogOpen}
        dialogTitle={t("boardDialogTitle")}
        dialogHelper={t("boardDialogHelperText")}
        handleClick={handleAddNewBoard}
        board
      />
      <TaskWrapper>
        {boards.map((project) => (
          <TasksCard title={project.name} key={project.name} />
        ))}
      </TaskWrapper>
    </StyledPageWrapper>
  );
};
