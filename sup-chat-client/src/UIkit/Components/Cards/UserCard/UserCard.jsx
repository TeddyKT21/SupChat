import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import { DropDown } from "../../DropDown/DropDown";
import PersonIcon from '@mui/icons-material/Person';
import "./UserCard.css"
import { useSelector, useDispatch } from "react-redux";
import { UseFetch } from "../../../../CustomHooks/useFetch";
import { useState } from "react";
import { addContact } from "../../../../store/authSlice";

export const UserCard = (user) => {
    //console.log(user);
    const logeedInUser = useSelector(state => state.autlice.user);
    //console.log("state:",logeedInUser)
    const dispatch = useDispatch()
    const options = ['message', 'add contact', 'add to chat'];
    const [isAddContact,setIsAddContact] = useState(false);
    // UseFetch('addContact', 'put',logeedInUser,[isAddContact]);
    const messageAction = ()=>{
        console.log('menu pressed')
    };
    const addContactAction = () =>{
        dispatch(addContact(user));
        setIsAddContact(true);
        console.log("add contact action, friends:",logeedInUser);
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