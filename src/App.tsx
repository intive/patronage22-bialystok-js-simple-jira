import { Routes, Route, Navigate } from "react-router-dom";
import { Projects } from "./views/Projects/Projects";
import { BoardsListView } from "./views/BoardList/BoardsListView";
import { Board } from "./views/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { toProjects } from "./views/routes";
import { IssueDetails } from "./views/IssueDetails/IssueDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <PrivateRoute>
        <Routes>
          <Route path={toProjects} element={<Projects />} />
          <Route
            path='projects/:projectName&:projectId'
            element={<BoardsListView />}
          />
          <Route
            path='projects/:projectName&:projectId/:board&:boardId'
            element={<Board />}
          />
          <Route
            path='projects/:projectName&:projectId/:board&:boardId/:issue&:issueId'
            element={<IssueDetails />}
          />
          <Route path='*' element={<Navigate to={toProjects} />} />
        </Routes>
      </PrivateRoute>
    </>
  );
};

export default App;
