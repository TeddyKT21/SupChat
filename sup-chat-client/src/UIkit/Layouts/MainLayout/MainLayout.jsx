import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ChatArea } from "../../Components/ChatArea/ChatArea";
import { SpeedDialOptions } from "../../Components/Button/SpeedDial/SpeedDialOptions";
import "./MainLayout.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { AddChat } from "../../../pages/addChat";
import { connectSocket, disconnectSocket } from "../../../services/socket";
import { logOut ,fetchUser} from "../../../store/userSlice";
import { ChatInfo } from "../../Components/ChatInfo/ChatInfo";
import { Profile } from "../../../pages/profile";

export const MainLayout = () => {
  const [view, setView] = useState('sidebar');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userSlice.user);
  const doDisplay = useSelector((state) => state.chatDisplaySlice.doDisplay);
  console.log('do display:', doDisplay)
  const selectedChat = useSelector((state) => state.userSlice.selectedChat);
  useEffect(() => {
    if (user) {
      connectSocket(user);
    }
    return () => {
      disconnectSocket();
    };
  }, [user]);

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
        {doDisplay && selectedChat ? <ChatInfo chat={selectedChat} /> : <ChatArea />}
        {/* {(doDisplay && selectedChat) || currentView === "chat" ? <ChatInfo chat={selectedChat} /> : <ChatArea />} */}
      </LayoutLine>
    </div>
  );
};
