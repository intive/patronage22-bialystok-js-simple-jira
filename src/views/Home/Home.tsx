import { StyledPageWrapper } from "./Home.style";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

export const Home = () => (
  <StyledPageWrapper>
    <p>If button is nice and smooth - Material UI works</p>
    <Link to="/second">
      <Button child="Click here to check if React Router works" />
    </Link>
    <p>If colors are black and white - Styled components works</p>
  </StyledPageWrapper>
);
