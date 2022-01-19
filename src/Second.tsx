import React from 'react';

// the hook
import { useTranslation } from 'react-i18next';

export default function Second () {
  const { t } = useTranslation();

  return(    
    <h1>{t("Second page text")}</h1>
  ) 

}