import { useEffect, useState } from "react";
import { fetchUserList } from "../../../store/chatDisplaySlice";
import { Line, Saparate, Rows } from "../../Layouts/Line/Line";
import { Loading } from "../Loading/Loading";
import "./ChatInfo.css";
import { ParticipantList } from "./ParticipantList/ParticipantList";
import GroupsIcon from "@mui/icons-material/Groups";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CollectionsIcon from "@mui/icons-material/Collections";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Button, Drawer } from "@mui/material";
export const ChatInfo = (chat) => {
  chat = chat.chat;
  const dispatch = useDispatch();
  const participants = useSelector(state => state.chatDisplaySlice.participantList);
  const error = useSelector(state => state.chatDisplaySlice.error);
  const isLoading = useSelector(state => state.chatDisplaySlice.isLoading);
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log('participants from selector : ', participants)

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  }

  if ((!participants || participants.length === 0) && !error && !isLoading){
    dispatch(fetchUserList(chat.participants));
  }
  if (isLoading){
    return (
      <div className="ChatInfo">
        <Loading />
      </div>
    );
  }
  if (error){
  }
  return (
    <div className="ChatInfo">
      <Rows>
        <Badge
          color="secondary"
          style={{ fontSize: 40 }}
          badgeContent={<CameraAltIcon />}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          onClick={handleDrawerOpen}
        >
          <GroupsIcon className="imageDetails" />
        </Badge>
        <Drawer anchor="bottom" open={drawerOpen} onClose={handleDrawerClose}>
          <div className="cameraDrawer">
            <CameraAltIcon style={{ fontSize: 40 }} />
            <CollectionsIcon style={{fontSize: 40}}/>
          </div>
        </Drawer>
        <h1>{chat.name}</h1>
        <h3>{chat.description} </h3>
        <h3>participants: </h3>
        <ParticipantList
          participants={participants}
          admins={chat.admins}
        ></ParticipantList>
        <div>created at :{chat.createdAt}</div>
      </Rows>
    </div>
  );
};
