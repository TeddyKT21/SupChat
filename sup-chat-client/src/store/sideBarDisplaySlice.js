import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChatCard } from "../UIkit/Components/Cards/ChatCard/ChatCard";
import { customFetch } from "../UIkit/utils/customFetch";

export const fetchUsers = createAsyncThunk('SideBarDisplaySlice/fetchUsers',async () => await customFetch('data/users', 'get'));

export const SideBarDisplaySlice = createSlice({
  name: "SideBarDisplaySlice",
  initialState: {
    cardType: "ChatCard",
    data: [],
    isLoading: false,
    error: null,
    users: []
  },
  reducers: {
    updateDisplayParams(state, action) {
      console.log("updating params", action);
      state.cardType = action.payload.cardType;
      state.data = action.payload.data;
    },
  },
  extraReducers: (builder) =>{
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.cardType = 'UserCard';
        state.users = action.payload;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error.message;
      })
    }
});

export const SideBarDisplayReducer = SideBarDisplaySlice.reducer;
export const { updateDisplayParams } = SideBarDisplaySlice.actions;
