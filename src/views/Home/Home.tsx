import { StyledPageWrapper } from "./Home.style";
import { Button } from "../../components/Button/Button";
import { Pages } from "../pages";

export const Home = () => {
  const clickHandler = () => {
    console.log("Button works");
  };

  return (
    <StyledPageWrapper>
      <p>{t("paragraph1")}</p>
      <Link to={Pages.Secondary} style={{ textDecoration: "none" }}>
        <Button adding={adding} child={t("button1")} />
      </Link>
      <p>{t("paragraph2")}</p>
    </StyledPageWrapper>
  );
};
