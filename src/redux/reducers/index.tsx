 import { } from 'react-redux';

export type CounterReducerAction = {
    type: string,
}


const initialState = {
    count: 0
};


export const counterReducer = (state = initialState, action: CounterReducerAction) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state, count: state.count + 1
            }
        case 'RESET':
            return {
                ...state, count: 0
            }
        default:
            return state;   
    }
}