import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { useTranslation } from "react-i18next";

import Container from "./components/Container";
import NavBar from "./components/Header";
import TextPage from "./pages/TextPage";
import ButtonPage from "./pages/ButtonPage";

import { getState } from "./reducers/reducers";

export default function App(): any {
  const { t } = useTranslation();
  const { clickCount } = useSelector(getState);
  return (
    <Container>
      <NavBar />
      {t("clickCount")} {clickCount}
      <Routes>
        <Route
          path='text'
          element={
            <TextPage text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex animi possimus laboriosam dignissimos porro, quasi provident tenetur eligendi saepe! Animi at aliquam modi dolorum error nisi dicta aut, fugit dolores.' />
          }
        />
        <Route path='/' element={<ButtonPage text={t("clickMe")} />} />
      </Routes>
    </Container>
  );
}
