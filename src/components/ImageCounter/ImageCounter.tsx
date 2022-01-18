import { useContext } from "react";
import {ImageCounterContext} from "../../context/imageContext"


export  const ImageCounter = () => {

  
   
const context = useContext(ImageCounterContext);
   

  return (
    <div>
        <h1>{`Image clicked: ${context?.counter}`}</h1>
    </div>
    
  );
};