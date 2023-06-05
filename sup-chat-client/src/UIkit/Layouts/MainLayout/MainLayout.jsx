import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ChatArea } from "../../Components/ChatArea/ChatArea";
import { Button } from "../../Components/Button/Button";
import { SpeedDialOptions } from "../../Components/Button/SpeedDial/SpeedDialOptions";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AddIcon from "@mui/icons-material/Add";
import "./MainLayout.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { AddChat } from "../../../pages/addChat";
import { connectSocket, disconnectSocket } from "../../../services/socket";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logOut ,fetchUser} from "../../../store/userSlice";

import { ChatInfo } from "../../Components/ChatInfo/ChatInfo";
import { Profile } from "../../../pages/profile";
import { UserInfo } from "../../Components/UserInfo/UserInfo";

export const MainLayout = () => {
  const [view, setView] = useState('sidebar');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);
  const doDisplayChat = useSelector((state) => state.chatDisplaySlice.doDisplay);
  const display = useSelector((state) => state.displaySlice.display);
  console.log('do display:', doDisplayChat)
  const selectedChat = useSelector((state) => state.userSlice.selectedChat);
  useEffect(() => {
    if (user) {
      connectSocket(user);
    }
    return () => {
      disconnectSocket();
    };
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (!storedToken) {
      console.log("NO Token Found. Redirecting to login page...");
      dispatch(logOut());
      navigate("/login");
    } else  {
      //console.log("Token Found:", storedToken);
      dispatch(fetchUser({token: storedToken}));
    }
  }, [navigate, dispatch]);


  return (
    <div className="MainLayout">
      <SpeedDialOptions setView={setView} />
      <LayoutLine>
        {view === "chat" && <AddChat closeCb={() => setView("sidebar")} />}
        {view === "sidebar" && <SideBar />}
        {view === "profile" && <Profile user={user}/>}
        {display === 'chatInfo' && selectedChat && <ChatInfo chat={selectedChat} />}
        {display === 'chat' && selectedChat && < ChatArea />}
        {display === 'userInfo' && <UserInfo />}
      </LayoutLine>
    </div>
  );
};
