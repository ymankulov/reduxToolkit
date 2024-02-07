import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducerToolkitSlice from "./reducerToolkitSlice";

// const rootReducer = combineReducers({
//   toolkit: reducerToolkitSlice,
// });

export const store = configureStore({
  reducer: {
    toolkit: reducerToolkitSlice
  },
});
