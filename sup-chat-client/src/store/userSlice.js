import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import { customFetch } from "../UIkit/utils/customFetch";

// export const fetchUser = createAsyncThunk(
//   "userSlice/fetchUser",
//   async (data) => await customFetch("login", "post", data)
// );

export const fetchUser = createAsyncThunk(
  "userSlice/fetchUser",
  async (data) => {
    console.log("Data: ", data);
    if (data.email && data.password) {
      // If email and password are present, use login endpoint
      return await customFetch("login", "post", data);
    } else if (data.token) {
      // If token is present, use getUserByToken endpoint
      return await customFetch("getUserByToken", "post", data);
    } else {
      // Handle invalid data
      console.log("Failed fetchUser");
    }
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false,
    selectedChat: null,
    token: null,
  },
  reducers: {
    logOut(state, action) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.loading = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    addContact(state, action) {
      state.user.friends.push(action.payload);
    },
    addNewChat(state, action) {
      console.log("added chat:", action.payload);
      action.payload.typingUsers = [];
      state.user.chats.push(action.payload);
      state.selectedChat = action.payload;
    },
    setSelectedChat(state, action) {
      state.selectedChat = state.user.chats.find(
        (chat) => chat._id === action.payload._id
      );
      if (state.selectedChat && !state.selectedChat.typingUsers) {
        state.selectedChat.typingUsers = [];
      }
      console.log("new active chat: ", action.payload);
    },
    sendMessage(state, action) {
      console.log("sendMessage userSlice :", action.payload);
      const selectedChat = state.user.chats.find(
        (chat) => chat._id === state.selectedChat._id
      );
      selectedChat.messages.push(action.payload);
      state.selectedChat = selectedChat;
    },
    reciveMessage(state, action) {
      const message = action.payload.message;
      const chat = state.user.chats.find(
        (chat) => chat._id === action.payload.chat_id
      );
      console.log("adding message : ", action.payload);
      chat.messages.push(message);
      if (!chat.typingUsers) {
        chat.typingUsers = [];
      }
      state.selectedChat = chat;
    },
    leaveChat(state, action) {
      const chatToLeave = action.payload;
      if (chatToLeave == state.selectedChat) {
        state.selectedChat = null;
      }
      state.user.chats = state.user.chats.filter(
        (chat) => chat._id !== chatToLeave._id
      );
      console.log("current chats: ", state.user.chats);
    },
    removeFromChatRoom(state, action) {
      console.log('in remove from chatroom with: ',action.payload);
      const chat = state.user.chats.find(c => c._id == action.payload.chat._id);
      chat.participants = chat.participants.filter(p => p !== action.payload.user._id);
      chat.admins = chat.admins.filter(p => p !== action.payload.user._id);
    },
    typing(state, action) {
      const chat = state.user.chats.find(
        (chat) => chat._id === action.payload.chatId
      );

      if (
        chat &&
        action.payload.userId &&
        !chat.typingUsers.includes(action.payload.userId)
      ) {
        chat.typingUsers.push(action.payload.userId);
      }
    },
    stoppedTyping(state, action) {
      const chatIndex = state.user.chats.findIndex(
        (chat) => chat._id === action.payload.chatId
      );
      if (chatIndex !== -1 && action.payload.userId) {
        const updatedChat = { ...state.user.chats[chatIndex] };
        const typingUserIndex = updatedChat.typingUsers.findIndex(
          (userId) => userId === action.payload.userId
        );
        if (typingUserIndex !== -1) {
          updatedChat.typingUsers.splice(typingUserIndex, 1);
        }
        state.user.chats[chatIndex] = updatedChat;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.error = null;
        console.log("waiting for server to return user");
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log("State: ", state);
        console.log("Action: ", action);
        state.loading = false;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token);
        console.log("Action Payload: ", action.payload);
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log("user found !");
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = "email or password invalid !";
        console.log("user not found !");
      });
  },
});

export const userReducer = userSlice.reducer;
export const {
  logIn,
  logOut,
  addContact,
  addNewChat,
  setSelectedChat,
  sendMessage,
  reciveMessage,
  leaveChat,
  typing,
  stoppedTyping,
  removeFromChatRoom,
} = userSlice.actions;
