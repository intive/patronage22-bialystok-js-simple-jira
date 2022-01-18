import React from "react";
import Container from "@mui/material/Container";
import NewProject from "../components/NewProject/NewProject";
import { theme } from "../theme/theme";
import Paper from "@mui/material/Paper";
// const projects = [""];

const Home = () => {
  return (
    <div>
      <Container maxWidth="sm">
        {/* {projects ? (
          projects.map((project, id) => (
            <li key={id}>
              <p>{id}</p>
            </li>
          ))
        ) : ( */}
        <NewProject />
        {/* )} */}
      </Container>
    </div>
  );
};

export default Home;
