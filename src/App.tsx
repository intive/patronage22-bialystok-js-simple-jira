import { Button } from "@mui/material";
import {
  HashRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import TextPage from "./pages/TextPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="text"
          element={<TextPage />}
        />
      </Routes>
    </HashRouter>
  );
}