import { useEffect, useState } from "react"
import { DropDown } from "../../DropDown/DropDown"
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, updateDisplayParams } from "../../../../store/sideBarDisplaySlice"

export const SideBarDropDown = ({ searchTerm }) => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.userSlice.user?.friends);
    const chats = useSelector(state => state.userSlice.user?.chats);
    const user = useSelector(state => state.userSlice.user);
    
    useEffect(()=>{dispatch(updateDisplayParams(contactsDisplayParams))}, [contacts]);
    
    useEffect(()=>{dispatch(updateDisplayParams(chatDisplayParams))}, [chats]);
    
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
        () => dispatch(fetchUsers({user:{_id:user._id}, text:searchTerm || '..................'})),
        () => dispatch(updateDisplayParams(chatDisplayParams)),
        () => dispatch(updateDisplayParams(contactsDisplayParams))
    ];
    return (
        <div className="sideBarDropDown">
            <DropDown options={options} actions={actions}/>
        </div>
    )
}