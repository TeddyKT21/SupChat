import { createSlice } from "@reduxjs/toolkit";

export const chatDisplaySlice = createSlice({
  name: "chatDisplaySlice",
  initialState: {
    doDisplay:false
  },
  reducers: {
    setDisplay(state, action) {
      state.doDisplay = action.payload;
    },

  },
});

export const chatDisplayreucer = chatDisplaySlice.reducer;
export const { setDisplay } = chatDisplaySlice.actions;
