import { authReducer } from "./authSlice";
import { SideBarFetchReducer } from "./sideBarFetchSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice: authReducer,
  SideBarFetchSlice: SideBarFetchReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
