import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Counter } from "../../components/Counter/Counter";
import TasksCard from "../../components/TasksCard";
import Navbar from "../../components/Navbar/Navbar";
//Store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
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

  return (
    <StyledPageWrapper>
      <Navbar />
      <p>{t("paragraph3")}</p>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button onClick={clickHandler}>{t("button2")}</Button>
      </Link>
      <p>Buttons SX</p>
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
      <Button long onClick={clickHandler}>
        New Project
      </Button>
      <Button onClick={clickHandler}>{t("createIssueBtn")}</Button>
      <Counter />
      {/* temporary divs for component presentation */}
      <div style={{ alignSelf: "stretch", padding: 20 }}>
        <ProjectCard
          name='Awesome project sdfs adf f sdfsdfsdfasdffasd as dasdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdfasdf s'
          menuComponent={<ThreeDotsMenu menuItems={mockMenuItems} />}
        />
      </div>
      <div style={{ alignSelf: "stretch", padding: 20 }}>
        <TasksCard title='to do' />
      </div>
    </StyledPageWrapper>
  );
};
