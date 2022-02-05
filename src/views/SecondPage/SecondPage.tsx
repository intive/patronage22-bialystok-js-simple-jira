import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Counter } from "../../components/Counter/Counter";
import { SyntheticEvent } from "react";
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
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button clickHandler={clickHandler}>{t("button2")}</Button>
      </Link>
      <p>Buttons SX</p>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button variant='text' clickHandler={clickHandler}>
          Home
        </Button>
      </Link>
      <Button variant='text' clickHandler={clickHandler}>
        {t("cancelBtn")}
      </Button>
      <Button clickHandler={clickHandler}>{t("continueBtn")}</Button>
      <Button long clickHandler={clickHandler}>
        New Project
      </Button>
      <Button clickHandler={clickHandler}>{t("createIssueBtn")}</Button>
      <Counter />
    </StyledPageWrapper>
  );
};
