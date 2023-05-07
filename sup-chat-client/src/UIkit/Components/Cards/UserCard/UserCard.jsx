import { Line, Saparate,Rows } from "../../../Layouts/Line/Line"
import { DropDown } from "../../DropDown/DropDown";
import PersonIcon from '@mui/icons-material/Person';
import "./UserCard.css"

export const UserCard = (user) => {
    console.log(user);
    const options = ['message', 'add contact', 'add to chat'];
    const messageAction = ()=>{
        console.log('menu pressed')
    };
    const addContactAction = () =>{
        console.log("add contact action");
        //user.friends.push();
    }
    const addToChatAction = () =>{
        console.log('menu pressed')
    }
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