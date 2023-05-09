import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    chat: null,
  },
  reducers: {
    setChat(state, action) {
      state.chat = action.payload;
      console.log("new active chat: ", action.payload);
    },
    sendMessage(state, action) {
      state.chat.messages.push(action.payload);
    },
  },
});

export const chatReducer = chatSlice.reducer;
export const { setChat, sendMessage } = chatSlice.actions;
