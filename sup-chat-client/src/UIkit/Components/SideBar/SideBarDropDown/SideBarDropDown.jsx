import { Rows } from "../../../Layouts/Line/Line"
import { SearchBar } from "../../SearchBar/SearchBar"
import { UseFetch } from "../../../../CustomHooks/useFetch"
import { useState } from "react"
import { DropDown } from "../../DropDown/DropDown"
import { useDispatch, useSelector } from "react-redux";
import { updateFetchParams } from "../../../../store/sideBarFetchSlice"
import { UserCard } from "../../Cards/UserCard/UserCard"
import { ChatCard } from "../../Cards/ChatCard/ChatCard"

export const SideBarDropDown = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.authSlice.user?.friends);
    const chats = useSelector(state => state.authSlice.user?.chats);
    console.log('in sidebar dropdown');
    const userFetchParams = {
        cardType: 'UserCard',
        data: contacts,
    }
    const chatFetchParams = {
        cardType: 'ChatCard',
        data: chats,
    }
    const contactsFetchParams = {
        cardType: 'UserCard',
        data: contacts,
    }

    const options = ['users', 'chats', 'contacts']
    const actions =[
        () => dispatch(updateFetchParams(userFetchParams)),
        () => dispatch(updateFetchParams(chatFetchParams)),
        () => dispatch(updateFetchParams(contactsFetchParams))
    ];
    return (
        <div className="sideBarDropDown">
            <DropDown options={options} actions={actions}/>
        </div>
    )
}