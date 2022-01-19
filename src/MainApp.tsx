import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import BasicButton from './BasicButton';
import Home from './Home';
import Second from './Second';
import React, { Suspense } from 'react';

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function MainApp() {
  return (
    <Suspense fallback="loading">
      <BrowserRouter>
          <div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="second">
                <BasicButton />
              </Link>
            </nav>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/second" element={<Second />} />
            </Routes >
          </div>
        </BrowserRouter> 
    </Suspense>
  );
}