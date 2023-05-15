import { userReducer } from "./userSlice";
import { SideBarDisplayReducer } from "./sideBarDisplaySlice";
import { messageReducer } from "./messageSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { signUpReducer } from "./signUpSlice";

const rootReducer = combineReducers({
  userSlice: userReducer,
  SideBarDisplaySlice: SideBarDisplayReducer,
  messageSlice: messageReducer,
  signUpSlice: signUpReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export { store };
