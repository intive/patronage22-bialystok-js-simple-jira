import { StyledHomeWrapper } from "./Home.style";
import { Button } from "../../components/Button/Button";

export const Home = () => (
  <StyledHomeWrapper>
    <p>If button is nice and smooth - Material UI works</p>
    <Button child="Click here to check if React Router works" />
    <p>If colors are black and white - Styled components works</p>
  </StyledHomeWrapper>
);
