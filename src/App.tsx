import { useState } from "react";
import { Routes, Route, useParams, Navigate, Link } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { BoardsList } from "./views/BoardList/BoardsList";
import { Board } from "./views/Board/Board";
import { BoardCard } from "./components/BoardCard/BoardCard";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import {
  toProject,
  toHome,
  toIssue,
  toBoard,
  toProjects,
} from "./views/routes";
import { IssueDetails } from "./views/IssueDetails/IssueDetails";
import { Owl_components } from "./views/Owl/Owl";
import { LoginView } from "./views/Login/LoginView";

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
          <Route
            path={toHome}
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path='login' element={<LoginView />} />
          <Route
            path={toProjects}
            element={
              <PrivateRoute>
                <Projects />
              </PrivateRoute>
            }
          />
          <Route
            path={toProject()}
            element={
              <PrivateRoute>
                <Boards />
              </PrivateRoute>
            }
          />
          <Route
            path={toBoard()}
            element={
              <PrivateRoute>
                <Board />
              </PrivateRoute>
            }
          />
          <Route
            path={toIssue()}
            element={
              <PrivateRoute>
                <Issue />
              </PrivateRoute>
            }
          />
          <Route
            path='issue-details'
            element={
              <PrivateRoute>
                <IssueDetails />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      )}
    </>
  );
};

export default App;
