import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import { DropDown } from "../../DropDown/DropDown";
import PersonIcon from '@mui/icons-material/Person';
import "./UserCard.css"
import { useSelector, useDispatch } from "react-redux";
import { UseFetch } from "../../../../CustomHooks/useFetch";
import { useState, useRef, useEffect } from "react";
import { addContact, addNewChat } from "../../../../store/userSlice";
import { emitNewChat } from "../../../../services/socket";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { customFetch } from "../../../utils/customFetch";

export const UserCard = (user) => {
    //console.log(user);
    const loggedInUser = useSelector(state => state.userSlice.user);
    //console.log("loggedInUser:", loggedInUser);
    const dispatch = useDispatch()
    const options = ['message', 'add contact', 'add to chat'];
    // const [isAddContact,setIsAddContact] = useState(false);                             //version 1
    const newChat = useRef({});
    const storedToken = localStorage.getItem("token");
    
    // useEffect(() => {
    //   if (isAddContact) {
    //     customFetch("addContact", "put", { token: storedToken, user: loggedInUser });   //version 1
    //   }
    // }, [isAddContact, loggedInUser, storedToken]);

    const messageAction = ()=>{
        console.log('message action pressed');
         newChat.current = {
            participants: [loggedInUser, user],
            messages: [],
            admins:[loggedInUser],
            name:`private chat`,
            description: "",
            createdAt: Date.now()
        };
        emitNewChat(newChat.current);

    };
    const addContactAction = () =>{
      // setIsAddContact(true);                                                         //version 1
      
        if(storedToken)
        {
          dispatch(addContact(user));
          const updatedUser = {
            ...loggedInUser,
            friends: [...loggedInUser.friends, user]             //version 2
          };
          customFetch("addContact", "put", {token: storedToken, user: updatedUser});
        }

    };
    const addToChatAction = () =>{
        console.log('menu pressed')
    };
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            {user.imageUrl ? (
              <img src={user.imageUrl} alt={user.username} />
            ) : (
              <PersonIcon />
            )}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={user.username} secondary={user.email}/>
        <DropDown options={options} actions={[messageAction, addContactAction, addToChatAction]}/>
      </ListItem>
      // <div className="UserCard">
      //     <Rows>
      //         <Saparate>
      //             <div className="image">
      //                 {user.imageUrl ? <img src={user.imageUrl} alt={user.username}/> : <PersonIcon/>}
      //             </div>
      //             <Line>
      //                 <div>{user.username}</div>
      //                 <DropDown
      //                  options={options}
      //                  actions={[ messageAction, addContactAction, addToChatAction ]}/>
      //                 </Line>
      //         </Saparate>
      //         <div>{user.email}</div>
      //     </Rows>
      // </div>
    );
}