import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "messageTextSlice",
  initialState: {
    messageText: "",
  },
  reducers: {
    setMessageText(state, action) {
      state.messageText = action.payload;
    },
  },
});

export const messageReducer = messageSlice.reducer;
export const { setMessageText } = messageSlice.actions;
