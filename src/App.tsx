import { Routes, Route, useParams, Navigate } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Projects } from "./views/Projects/Projects";
import { BoardsList } from "./views/BoardList/BoardsList";
import { Board } from "./views/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { toHome, toIssue, toProjects } from "./views/routes";
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
  return (
    <>
      <Navbar />

      <PrivateRoute>
        <Routes>
          <Route path={toHome} element={<Home />} />
          <Route path={toProjects} element={<Projects />} />
          <Route path='projects/:project' element={<BoardsList />} />
          <Route path='projects/:project/:board&:boardID' element={<Board />} />
          <Route path={toIssue()} element={<Issue />} />
          <Route path='issue-details' element={<IssueDetails />} />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      </PrivateRoute>
    </>
  );
};

export default App;
