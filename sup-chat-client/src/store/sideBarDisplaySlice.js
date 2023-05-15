import { createSlice } from "@reduxjs/toolkit";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";

export const SideBarDisplaySlice = createSlice({
  name: "SideBarDisplaySlice",
  initialState: {
    cardType: "ChatCard",
    data: []
  },
  reducers: {
    updateDisplayParams(state, action) {
      console.log("updating params", action);
      state.cardType = action.payload.cardType;
      state.data = action.payload.data;
    },
  },
});

export const SideBarDisplayReducer = SideBarDisplaySlice.reducer;
export const { updateDisplayParams } = SideBarDisplaySlice.actions;
