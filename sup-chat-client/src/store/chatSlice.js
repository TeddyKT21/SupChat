import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

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
      console.log("sendMessage chatSlice:", action.payload);
      action.payload.dateTime = action.payload.dateTime.toDateString();
      // console.log(
      //   "after adding message",
      //   useSelector((state) => state.chat)
      // );
      state.chat.messages.push(action.payload);
    },
  },
});

export const chatReducer = chatSlice.reducer;
export const { setChat, sendMessage } = chatSlice.actions;
