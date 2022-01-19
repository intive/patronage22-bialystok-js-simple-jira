import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

export default function Home () {
  const { t } = useTranslation();

  return(    
    <h1>{t("Home page text")}</h1>
  ) 

}