import { StyledPageWrapper } from "../Home/Home.style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const SecondPage = () => (
  <StyledPageWrapper>
    <p>If you see this page - React Router works</p>
    <Link to="/">
      <Button child="click to return to the previous page" />
    </Link>
  </StyledPageWrapper>
);
