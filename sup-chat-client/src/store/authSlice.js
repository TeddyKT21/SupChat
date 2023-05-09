import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logOut(state, action) {
      state.isLoggedIn = false;
      state.user = null;
    },
    addContact(state, action) {
      state.user.friends.push(action.payload);
      // console.log("adding a contact... ", action.payload);
      // console.log("state friends:", state.user.friends);
    },
    addNewChat(state, action) {
      console.log("added chat:", action.payload);
      state.user.chats.push(action.payload);
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut, addContact, addNewChat } = authSlice.actions;
