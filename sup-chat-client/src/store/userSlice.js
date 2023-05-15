import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../UIkit/utils/customFetch";

export const fetchUser = createAsyncThunk('userSlice/fetchUser',async (data) => await customFetch('login', 'post', data));

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
    error:null,
    loading: false,
    selectedChat: null
  },
  reducers: {
    logOut(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.loading = false;
    },
    addContact(state, action) {
      state.user.friends.push(action.payload);
    },
    addNewChat(state, action) {
      console.log("added chat:", action.payload);
      state.user.chats.push(action.payload);
    },
    setSelectedChat(state, action) {
      state.selectedChat = state.user.chats.find(chat => chat._id === action.payload._id);
      console.log("new active chat: ", action.payload);
    },
    sendMessage(state, action) {
      console.log("sendMessage userSlice :", action.payload);
      const selectedChat = state.user.chats.find(chat => chat._id === state.selectedChat._id);
      selectedChat.messages.push(action.payload);
      state.selectedChat = selectedChat;
    },
  },
  extraReducers: (builder) =>{
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error.message;
      })
  }
});

export const userReducer = userSlice.reducer;
export const { logIn, logOut, addContact, addNewChat, setSelectedChat, sendMessage } = userSlice.actions;
