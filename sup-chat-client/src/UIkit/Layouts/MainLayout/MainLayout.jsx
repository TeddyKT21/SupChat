import { LayoutLine } from "../Line/Line";
import { SideBar } from "../../Components/SideBar/SideBar";
import { ChatArea } from "../../Components/ChatArea/ChatArea";
import { Button } from "../../Components/Button/Button";
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

export const MainLayout = () => {
  const [addChatForm, setAddChatForm] = useState(false);
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
      <Button onClick={() => setAddChatForm(!addChatForm)} className="addBtn">
        {addChatForm ? <ArrowBackIosNewIcon /> : <AddIcon />}
      </Button>
      <LayoutLine>
        {addChatForm ? (
          <AddChat closeCb = {() => setAddChatForm(false)}/>
        ) : (
          <SideBar  />
        )}
        {doDisplay ? (<ChatInfo chat = {selectedChat}/>) : (<ChatArea />)}
      </LayoutLine>
    </div>
  );
};
