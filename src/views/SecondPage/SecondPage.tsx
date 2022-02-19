import { StyledPageWrapper } from "./SecondPage.style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Counter } from "../../components/Counter/Counter";
import CreateIssueDialog from "../../modules/CreateIssueDialog/CreateIssueDialog";
import TasksCard from "../../components/TasksCard";
import NewProjectDialog from "../../components/NewProjectDialog/NewProjectDialog";

//Store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Ticket from "../../components/Ticket/Ticket";
import ProjectCard from "../../components/ProjectCard";
import ThreeDotsMenu from "../../components/ThreeDotsMenu/ThreeDotsMenu";
import { mockMenuItems } from "../../mockData/menuItems";

export const SecondPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const clickHandler = () => {
    console.log("Button works");
    adding();
  };
  const { adding } = bindActionCreators(actionCreators, dispatch);

  const generateKey = (pre: any) => {
    return `${pre}_${new Date().getTime()}`;
  };

  const TicketList = [
    <Ticket title={"Unassigned task"} key={generateKey("task1")} />,
    <Ticket
      title={"Example task"}
      assignedTo={"John Doe"}
      key={generateKey("task2")}
    />,
    <Ticket
      title={"Very long title Very long title Very long title Very long title"}
      assignedTo={"Very long name Very long name Very long name Very long name"}
      key={generateKey("task3")}
    />,
  ];

  return (
    <StyledPageWrapper>
      <p>{t("paragraph3")}</p>
      <CreateIssueDialog />
      <NewProjectDialog />
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button onClick={clickHandler}>{t("button2")}</Button>
      </Link>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button variant='text' onClick={clickHandler}>
          Home
        </Button>
      </Link>
      <Button variant='text' onClick={clickHandler}>
        {t("cancelBtn")}
      </Button>
      <Button disabled={true} onClick={clickHandler}>
        {t("continueBtn")}
      </Button>
      <Link to={Pages.Projects} style={{ textDecoration: "none" }}>
        <Button long onClick={clickHandler}>
          Projects
        </Button>
      </Link>
      <Button onClick={clickHandler}>{t("createIssueBtn")}</Button>
      <Counter />
      {/* temporary divs for component presentation */}
      <div style={{ alignSelf: "center", padding: 20 }}>
        <ProjectCard
          name='Awesome project sdfs adf f sdfsdfsdfasdffasd as dasdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdfasdf s'
          menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
        />
      </div>
      <div style={{ display: "flex", gap: "20px", padding: 20 }}>
        <TasksCard title='to do' />
        <TasksCard title='done' children={TicketList} />
      </div>
    </StyledPageWrapper>
  );
};
