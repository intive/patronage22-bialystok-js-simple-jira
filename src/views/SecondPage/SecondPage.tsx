import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useTranslation } from "react-i18next";

import { Button } from "../../components/Button/Button";
import { Pages } from "../../pages/pages";

export const SecondPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { adding } = bindActionCreators(actionCreators, dispatch);

  return (
    <StyledPageWrapper>
      <p>{t("paragraph3")}</p>
      <Link to={Pages.Home} style={{ textDecoration: "none" }}>
        <Button adding={adding} child={t("button2")} />
      </Link>
    </StyledPageWrapper>
  );
};
