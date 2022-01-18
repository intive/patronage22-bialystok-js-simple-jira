import { INCREMENT, RESET } from "../actionTypes/actionTypes";


export const increment = () => {
    return {
      type: INCREMENT,
    };
  };
  
 
  
  export const reset = () => {
    return {
      type: RESET,
    };
  };
  