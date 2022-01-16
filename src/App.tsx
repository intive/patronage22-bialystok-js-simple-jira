import React from 'react';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { ImagePage } from './pages/ImagePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
