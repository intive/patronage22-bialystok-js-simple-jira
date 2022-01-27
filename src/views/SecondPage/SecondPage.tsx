import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { StyledButton } from "../../components/Button/StyledButton";

export const SecondPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const clickHandler = () => {
    console.log("Button works");
  };

  return (
    <StyledPageWrapper>
      <p>{t("paragraph3")}</p>
      <Link to='/' style={{ textDecoration: "none" }}>
        {t("button2")}
      </Link>
      <Button size='long' clickHandler={clickHandler}>
        Works?
      </Button>

      <StyledButton variant='contained'>Styled Button</StyledButton>
    </StyledPageWrapper>
  );
};
