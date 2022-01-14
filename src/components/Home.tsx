import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";

interface Props {}

const StyledButton = styled(Button)`
  background-color: pink;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

const Home = (props: Props) => {
  return (
    <div>
      <Container maxWidth="sm">
        <h1>Home Page</h1>
        <StyledButton variant="contained">Hello</StyledButton>
      </Container>
    </div>
  );
};

export default Home;
