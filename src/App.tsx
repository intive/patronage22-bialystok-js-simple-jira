import { useState } from "react";
import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import { Home } from "./views/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { Owl_components } from "./views/Owl/Owl";
import Navbar from "./components/Navbar/Navbar";
import { theme } from "./theme/mainTheme";
import { toBoards, toHome, toIssue, toIssues, toProjects } from "./routes";

const Boards = () => {
  const { projectID } = useParams();

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Project/Boards list</h1>
      {!!projectID && (
        <>
          <p>Project: {projectID}</p>
          <Link to={toBoards({ projectID })} />
        </>
      )}
    </div>
  );
};

const Issues = () => {
  const { projectID, boardID } = useParams();

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Board/Issues</h1>
      {!!projectID && !!boardID && (
        <>
          <p>Project: {projectID}</p>
          <p>Board: {boardID}</p>
        </>
      )}
    </div>
  );
};

const Issue = () => {
  const { projectID, boardID, issueID } = useParams();

  return (
    <div style={{ marginTop: 100 }}>
      <h1>Issue page</h1>
      {!!projectID && !!boardID && !!issueID && (
        <>
          <p>Project: {projectID}</p>
          <p>Board: {boardID}</p>
          <p>Issue: {issueID}</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  const [token, setToken] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {!token ? (
        <Owl_components
        // setToken={setToken}
        />
      ) : (
        <Routes>
          <Route path={toHome} element={<Home />} />
          <Route path={toProjects} element={<Projects />} />
          <Route path={toBoards()} element={<Boards />} />
          <Route path={toIssues()} element={<Issues />} />
          <Route path={toIssue()} element={<Issue />} />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
