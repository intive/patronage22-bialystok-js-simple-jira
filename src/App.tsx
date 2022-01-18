import { Container } from "@mui/material";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import TextPage from "./pages/TextPage";

export default function App() {
  return (
    <HashRouter>
      <Container maxWidth="sm">
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
      </Container>
    </HashRouter>
  );
}