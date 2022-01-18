import React from 'react';
import {BrowserRouter , Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import { HomePage } from './pages/HomePage';
import { ImagePage } from './pages/ImagePage';
import { ImageCounterProvider } from './context/imageContext';

import {store} from './redux/store'

import './App.css';

function App() {
  return (
    <Provider store={store}>
    <ImageCounterProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/image" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
    </ImageCounterProvider>
    </Provider>
  );
}

export default App;
