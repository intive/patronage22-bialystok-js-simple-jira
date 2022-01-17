export function stateReducer(state: any, action: any) {
  if (action.type === "INCREMENT_CLICK_COUNT") {
    return {
      ...state,
      clickCount: state.clickCount + 1,
    };
  }
  return state;
}

/// SELECTORS

export const getState = (state: any) => state;
