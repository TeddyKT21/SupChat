import { signUpReducer } from "./signUpSlice";
import { userReducer } from "./userSlice";
import { SideBarDisplayReducer } from "./sideBarDisplaySlice";
import { messageReducer } from "./messageSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

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
