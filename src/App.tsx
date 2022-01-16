import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Container from "./components/Container";
import NavBar from "./components/Header";
import TextPage from "./pages/TextPage";
import ButtonPage from "./pages/ButtonPage";

export default function App(): any {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route
          path='text'
          element={
            <TextPage text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi possimus laboriosam dignissimos porro, quasi provident tenetur eligendi saepe! Animi at aliquam modi dolorum error nisi dicta aut, fugit dolores.' />
          }
        />
        <Route path='/' element={<ButtonPage text='Click me!' />} />
      </Routes>
    </Container>
  );
}
