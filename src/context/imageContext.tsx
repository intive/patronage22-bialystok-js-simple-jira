import React, { useState, createContext, FC } from 'react';




export const ImageCounterContext = createContext<number>(0);




 export const ImageCounterProvider: FC = ({ children }) => {

  const [imageCounter, setImageCounter] = useState<number>(0);

  return (
    <ImageCounterContext.Provider value={[imageCounter, setImageCounter]}>
      {children}
    </ImageCounterContext.Provider>
  );
}