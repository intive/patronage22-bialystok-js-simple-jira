import { StyledPageWrapper } from "./Home.style";
import { Button } from "../../components/Button/Button";

export const Home = () => {
  const clickHandler = () => {
    console.log("Button works");
  };

  return (
    <StyledPageWrapper>
      Home Page
      <Button size='long' variant='text' clickHandler={clickHandler}>
        Works?
      </Button>
    </StyledPageWrapper>
  );
};
