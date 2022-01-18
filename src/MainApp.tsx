import React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import BasicButton from './BasicButton';
import Home from './Home';
import Second from './Second';

// the hook
// import { useTranslation } from 'react-i18next';

export default function MainApp () {
  // const { t, i18n } = useTranslation();
  // return <h1>{t('Welcome to React')}</h1>
  return(    
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
    
  ) 

}