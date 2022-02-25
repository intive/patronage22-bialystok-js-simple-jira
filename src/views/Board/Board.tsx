import PageHeader from "../../components/PageHeader/PageHeader";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { TaskWrapper } from "./Board.style";
import { StyledPageWrapper } from "../Projects/Projects.style";
import { mockMenuItems } from "../../mockData/menuItems";
import { mockBoards } from "../../mockData/mockBoards";
import { useTranslation } from "react-i18next";
import TasksCard from "../../components/TasksCard";
import { useState } from "react";

export const Board = () => {
  const [boards, setBoards] = useState(mockBoards);
  const { t } = useTranslation();
  return (
    <StyledPageWrapper>
      <PageHeader
        pageTitle={t("boardsTitle")}
        buttonText={t("newIssueBtn")}
        buttonHandler={() => console.log("works")}
        menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
        returnLink
      />
      <TaskWrapper>
        {boards.map((project) => (
          <TasksCard title={project.name} key={project.name} />
        ))}
      </TaskWrapper>
    </StyledPageWrapper>
  );
};
