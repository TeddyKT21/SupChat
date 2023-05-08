import { createSlice } from "@reduxjs/toolkit";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";

export const SideBarFetchSlice = createSlice({
  name: "SideBarFetchSlice",
  initialState: {
    cardType: "ChatCard",
    method: "get",
    url: "data/chats",
  },
  reducers: {
    updateFetchParams(state, action) {
      console.log("updating params", action);
      state.cardType = action.payload.cardType;
      state.method = action.payload.method;
      state.url = action.payload.url;
    },
  },
});

export const SideBarFetchReducer = SideBarFetchSlice.reducer;
export const { updateFetchParams } = SideBarFetchSlice.actions;
