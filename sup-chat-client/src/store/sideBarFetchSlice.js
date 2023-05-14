import { createSlice } from "@reduxjs/toolkit";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";

export const SideBarFetchSlice = createSlice({
  name: "SideBarFetchSlice",
  initialState: {
    cardType: "ChatCard",
    data: []
  },
  reducers: {
    updateFetchParams(state, action) {
      console.log("updating params", action);
      state.cardType = action.payload.cardType;
      state.data = action.payload.data;
    },
  },
});

export const SideBarFetchReducer = SideBarFetchSlice.reducer;
export const { updateFetchParams } = SideBarFetchSlice.actions;
