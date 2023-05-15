import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import { DropDown } from "../../DropDown/DropDown";
import PersonIcon from '@mui/icons-material/Person';
import "./UserCard.css"
import { useSelector, useDispatch } from "react-redux";
import { UseFetch } from "../../../../CustomHooks/useFetch";
import { useState, useRef } from "react";
import { addContact, addNewChat } from "../../../../store/userSlice";

export const UserCard = (user) => {
    //console.log(user);
    const loggedInUser = useSelector(state => state.authSlice.user);
    //console.log("state:",logeedInUser)
    const dispatch = useDispatch()
    const options = ['message', 'add contact', 'add to chat'];

    const [isAddContact,setIsAddContact] = useState(false);
    const [isAddChat, setIsAddChat] = useState(false);

    const newChat = useRef({});

    UseFetch('addContact', 'put',loggedInUser,[isAddContact],isAddContact);
    UseFetch('addNewChat', 'post', newChat.current,[isAddChat],isAddChat);
    const messageAction = ()=>{
        console.log('message action pressed');
         newChat.current = {
            participants: [loggedInUser, user],
            messages: [],
            admins:[loggedInUser],
            name:`chat with ${user.username}`,
            description: ""
        };
        dispatch(addNewChat(newChat.current));
        setIsAddChat(true);

    };
    const addContactAction = () =>{
        dispatch(addContact(user));
        setIsAddContact(true);
    };
    const addToChatAction = () =>{
        console.log('menu pressed')
    };
    return (
        <div className="UserCard">
            <Rows>
                <Saparate>
                    <div className="image"> 
                        {user.imageUrl ? <img src={user.imageUrl} alt={user.username}/> : <PersonIcon/>}
                    </div>
                    <Line>
                        <div>{user.username}</div>
                        <DropDown 
                         options={options}
                         actions={[ messageAction, addContactAction, addToChatAction ]}/>
                        </Line>
                </Saparate>
                <div>{user.email}</div>
            </Rows>
        </div>
    )
}