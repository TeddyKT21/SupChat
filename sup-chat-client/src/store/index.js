import { authReducer } from "./userSlice";
import { SideBarDisplayReducer } from "./sideBarDisplaySlice";
import { chatReducer } from "./chatSlice";
import { messageReducer } from "./messageSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  authSlice: authReducer,
  SideBarDisplaySlice: SideBarDisplayReducer,
  chatSlice: chatReducer,
  messageSlice: messageReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
