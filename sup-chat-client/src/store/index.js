import { authReducer } from "./authSlice";
import { SideBarFetchReducer } from "./sideBarFetchSlice";
import { chatReducer } from "./chatSlice";
import { messageReducer } from "./messageSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice: authReducer,
  SideBarFetchSlice: SideBarFetchReducer,
  chatSlice: chatReducer,
  messageSlice: messageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
