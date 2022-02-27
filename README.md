# Redux toolkit

"The official, opinionated, batteries-included toolset for efficient Redux development"

## Example usage

- [example store](https://github.com/intive/patronage22-bialystok-js-simple-jira/blob/P2022-1143/src/state/storeWithToolkit.ts)
- [example slice](https://github.com/intive/patronage22-bialystok-js-simple-jira/blob/P2022-1143/src/views/SecondPage/countSlice.ts)
- [example slice with redux-thunk](https://github.com/intive/patronage22-bialystok-js-simple-jira/blob/P2022-1143/src/views/Projects/projectsSlice.ts)

## What's included?

https://redux.js.org/redux-toolkit/overview#whats-included

- configureStore
- createReducer
- createAction
- createSlice
- createAsyncThunk
- createEntityAdapter
- createSelector

## Why use toolkit?

https://redux.js.org/redux-toolkit/overview#why-you-should-use-redux-toolkit

- do more work with less code
- redux-thunk included
- redux dev tools extension configured

- 'createSlice' simplifies creating actions, action-creators and reducer
- 'createSlice' automatically creates actions and returns them in property 'actions'
- 'slice' is a part of app state, f.ex. every feature has its own slice
- thanks to 'immer' library we can write reducers code without worrying about Immutability
- 'nanoid' out of the box

and much more...

Checkout full description on [redux-toolkit website](https://redux-toolkit.js.org/) and learn how to [use it with typescript](https://redux-toolkit.js.org/tutorials/typescript)
