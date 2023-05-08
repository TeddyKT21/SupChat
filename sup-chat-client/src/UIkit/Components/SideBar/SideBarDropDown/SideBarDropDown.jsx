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
    console.log('in sidebar dropdown');
    const userFetchParams = {
        cardType: 'UserCard',
        method: "get",
        url: "data/users",
    }
    const chatFetchParams = {
        cardType: 'ChatCard',
        method: "get",
        url: "data/chats",
    }
    const contactsFetchParams = {
        cardType: 'UserCard',
        method: "get",
        url: "data/users",
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