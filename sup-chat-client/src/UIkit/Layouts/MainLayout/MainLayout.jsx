import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar"
import { ChatArea } from "../../Components/ChatArea/ChatArea"
import { ChatCard } from "../../Components/Cards/ChatCard/ChatCard"
import { Button } from "../../Components/Button/Button";
import "./MainLayout.css";
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AddChat } from "../../../pages/addChat";
//import { loading } from "../../../store/userSlice";



export const MainLayout = ({url,cardType,}) => {
    const [addChatForm, setAddChatForm] = useState(false);

    const navigate = useNavigate();
    const token = useSelector(state => state.userSlice.token);
    const loading = useSelector(state => state.userSlice.loading);

    useEffect(() => {
      console.log("In Check Token");
      if (!token && !loading) {
        console.log("NOOO Token!!!!!!!");
        navigate("/login");
      } else {
        console.log("Token Found!!!");
      }
    }, [token, loading, navigate]);
    
    
    return (
      <div className="MainLayout">
        <Button onClick={() => setAddChatForm(!addChatForm)} className="addBtn">
          {addChatForm ? "<" : "+"}
        </Button>
        <LayoutLine>
          {addChatForm ? <AddChat/> : <SideBar url="data/chats" cardType={ChatCard} />}
          <ChatArea messages={[]} />
        </LayoutLine>
      </div>
    );
}