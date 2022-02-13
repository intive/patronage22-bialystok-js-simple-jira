import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Counter } from "../../components/Counter/Counter";
import NewProjectDialog from "../../components/NewProjectDialog/NewProjectDialog";
import { SyntheticEvent } from "react";
import TasksCard from "../../components/TasksCard";
import Navbar from "../../components/Navbar/Navbar";

//Store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

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
      <p>{t("paragraph3")}</p>
      <NewProjectDialog />
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
      {/* temporary div for component presentation */}
      <div style={{ alignSelf: "stretch", padding: 20 }}>
        <TasksCard title='to do' />
      </div>
    </StyledPageWrapper>
  );
};
