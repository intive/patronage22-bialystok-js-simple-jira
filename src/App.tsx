import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./components/About";

const StyledButton = styled(Button)`
  background-color: pink;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Container maxWidth="sm">
              <StyledButton variant="contained">Hello</StyledButton>
            </Container>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
