import { Rows } from "../../../Layouts/Line/Line"
import { SearchBar } from "../../SearchBar/SearchBar"
import { UseFetch } from "../../../../CustomHooks/useFetch"
import { useEffect, useState } from "react"
import { DropDown } from "../../DropDown/DropDown"
import { useDispatch, useSelector } from "react-redux";
import { updateDisplayParams } from "../../../../store/sideBarDisplaySlice"
import { UserCard } from "../../Cards/UserCard/UserCard"
import { ChatCard } from "../../Cards/ChatCard/ChatCard"

export const SideBarDropDown = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.userSlice.user?.friends);
    const chats = useSelector(state => state.userSlice.user?.chats);
    
    useEffect(()=>{dispatch(updateDisplayParams(userDisplayParams))}, [contacts]);
    
    useEffect(()=>{dispatch(updateDisplayParams(chatDisplayParams))}, [chats]);
    
    console.log('in sidebar dropdown');
    const userDisplayParams = {
        cardType: 'UserCard',
        data: contacts,
    }
    const chatDisplayParams = {
        cardType: 'ChatCard',
        data: chats,
    }
    const contactsDisplayParams = {
        cardType: 'UserCard',
        data: contacts,
    }

    const options = ['users', 'chats', 'contacts']
    const actions =[
        () => dispatch(updateDisplayParams(userDisplayParams)),
        () => dispatch(updateDisplayParams(chatDisplayParams)),
        () => dispatch(updateDisplayParams(contactsDisplayParams))
    ];
    return (
        <div className="sideBarDropDown">
            <DropDown options={options} actions={actions}/>
        </div>
    )
}