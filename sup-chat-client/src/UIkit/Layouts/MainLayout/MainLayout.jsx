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

export const MainLayout = () => {
  const [addChatForm, setAddChatForm] = useState(false);
  const navigate = useNavigate();
  const token = useSelector((state) => state.userSlice.token);
  const loading = useSelector((state) => state.userSlice.loading);
  const user = useSelector((state) => state.userSlice.user);
  useEffect(() => {
    if (user) {
      connectSocket(user);
    }
    return () => {
      disconnectSocket();
    };
  }, []);

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
        {addChatForm ? <ArrowBackIosNewIcon /> : <AddIcon />}
      </Button>
      <LayoutLine>
        {addChatForm ? (
          <AddChat />
        ) : (
          <SideBar  />
        )}
        <ChatArea messages={[]} />
      </LayoutLine>
    </div>
  );
};
