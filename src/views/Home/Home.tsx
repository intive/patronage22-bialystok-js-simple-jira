import { StyledPageWrapper } from "./Home.style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button/Button";

export const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { adding } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledPageWrapper>
      <p>{t("paragraph1")}</p>
      <Link to="/second">
        <Button adding={adding} child={t("button1")} />
      </Link>
      <p>{t("paragraph2")}</p>
    </StyledPageWrapper>
  );
};