import { StyledPageWrapper } from "./Home.style";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
//Store
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

export const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { adding } = bindActionCreators(actionCreators, dispatch);

  const clickHandler = () => {
    console.log("Button works");
    adding();
  };

  return (
    <StyledPageWrapper>
      <p>{t("paragraph1")}</p>
      <Link to={Pages.Secondary} style={{ textDecoration: "none" }}>
        <Button clickHandler={clickHandler} children={t("button1")} />
      </Link>
      <p>{t("paragraph2")}</p>
    </StyledPageWrapper>
  );
};
