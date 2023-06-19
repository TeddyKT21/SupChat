
import { Rows } from "../../Layouts/Line/Line";
import { Loading } from "../Loading/Loading";
import "./UserInfo.css";
import PersonIcon from '@mui/icons-material/Person';
import { useSelector, useDispatch } from "react-redux";


export const UserInfo = () => {
    const user = useSelector(state => state.displaySlice.selectedUser);
    return(<div className="UserInfo">
        <Rows>
        {user.imageUrl && !user.imageUrl.toLowerCase().split('/').includes('undefined') ? (
              <img src={`http://localhost:8080${user.imageUrl}`} alt={user.username} />
            ) : (
              <PersonIcon />
            )}
            <h1>
                {user.username}
            </h1>
            <h2>
                {user.email}
            </h2>
            <h3>
               joined the site at {user.createdAt}
            </h3>
        </Rows>
    </div>)
}