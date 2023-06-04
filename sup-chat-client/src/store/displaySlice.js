import { createSlice } from "@reduxjs/toolkit";
import { chatDisplaySlice } from "./chatDisplaySlice";

export const displaySlice = createSlice({
    name:'displaySlice',
    initialState:{
        display: 'chat',
        selectedUser: null,
        selectedChat:null,
    },
    reducers:{
        viewChatInfo(state,action){
            state.selectedChat = action.payload;
            state.display = 'chatInfo';
        },
        viewUserInfo(state,action){
            state.selectedUser = action.payload
            state.display = 'userInfo';
        },
        viewChatMessages(state,action){
            state.selectedChat = action.payload;
            state.display = 'chat';
        },
    }
})

export const displayReducer = displaySlice.reducer;
export const { viewChatMessages, viewChatInfo, viewUserInfo } = displaySlice.actions;