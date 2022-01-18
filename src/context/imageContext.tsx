import React, { useState, createContext, FC, Dispatch, SetStateAction } from 'react';


type ImageCounterContext = {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export const ImageCounterContext = createContext<ImageCounterContext | undefined>(undefined);


export const ImageCounterProvider: FC = ({ children }) => {

  const [imageCounter, setImageCounter] = useState<number>(0);

  return (
    <ImageCounterContext.Provider value={{
      counter: imageCounter, 
      setCounter: setImageCounter
      }}>
      {children}
    </ImageCounterContext.Provider> 
  );
}