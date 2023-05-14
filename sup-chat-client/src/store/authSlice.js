import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { customFetch } from "../UIkit/utils/customFetch";


export const fetchUser = createAsyncThunk('authSlice/fetchUser',async (data) => await customFetch('login', 'post', data));
export const createUser = createAsyncThunk('authSlice/createUser',async (data) => await customFetch('signUp', 'post', data));


export const authSlice = createSlice({
  name: "authSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
    error:null,
    loading: false,
    isSignedUp: false,
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
      // console.log("adding a contact... ", action.payload);
      // console.log("state friends:", state.user.friends);
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
      console.log("sendMessage authSlice:", action.payload);
      action.payload.dateTime = action.payload.dateTime.toDateString();
      // console.log(
      //   "after adding message",
      //   useSelector((state) => state.chat)
      // );
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
      .addCase(createUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.isSignedUp = true;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error.message;
      });
  }
});

export const authReducer = authSlice.reducer;
export const { logIn, logOut, addContact, addNewChat, setSelectedChat, sendMessage } = authSlice.actions;
