import { useState } from "react";
import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { BoardsList } from "./views/BoardList/BoardsList";
import { Board } from "./views/Board/Board";
import { BoardCard } from "./components/BoardCard/BoardCard";
import Navbar from "./components/Navbar/Navbar";
import { Owl_components } from "./views/Owl/Owl";
import {
  toProject,
  toHome,
  toIssue,
  toBoard,
  toProjects,
} from "./views/routes";
import { IssueDetails } from "./views/IssueDetails/IssueDetails";

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
    <>
      <Navbar />
      {!token ? (
        <Owl_components
        // setToken={setToken}
        />
      ) : (
        <Routes>
          <Route path={toHome} element={<Home />} />
          <Route path={toProjects} element={<Projects />} />
          <Route path='projects/:project' element={<BoardsList />} />
          <Route path='projects/:project/:board' element={<Board />} />
          <Route path={toIssue()} element={<Issue />} />
          <Route path='issue-details' element={<IssueDetails />} />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
