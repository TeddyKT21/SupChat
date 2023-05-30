import { useEffect, useState } from "react";
import { fetchUserList } from "../../../store/chatDisplaySlice";
import { Line, Saparate, Rows } from "../../Layouts/Line/Line";
import { Loading } from "../Loading/Loading";
import "./ChatInfo.css";
import { ParticipantList } from "./ParticipantList/ParticipantList";
import GroupsIcon from "@mui/icons-material/Groups";
import { useSelector, useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import { SetDialog } from "../SetDialog/SetDialog";
import { Button } from "../Button/Button";
import { ConfirmDialog } from "../ConfirmDialog/ConfirmDialog";
import { emitUpdateChat } from "../../../services/socket";
import { updateChat } from "../../../store/userSlice";
export const ChatInfo = (chat) => {
  chat = chat.chat;
  const dispatch = useDispatch();
  const participants = useSelector(
    (state) => state.chatDisplaySlice.participantList
  );
  const [editedChat, saveChat] = useState(chat);
  const [dialogData, setDialogData] = useState({ open: false });
  const [didChange, setChange] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  console.log("did change: ", didChange);

  const error = useSelector((state) => state.chatDisplaySlice.error);
  const isLoading = useSelector((state) => state.chatDisplaySlice.isLoading);

  const user_id = useSelector((state) => state?.userSlice?.user?._id);
  const isAdmin = chat?.admins?.includes(user_id);

  if ((!participants || participants.length === 0) && !error && !isLoading){
    dispatch(fetchUserList(chat.participants));
  }
  if (isLoading){
    return (
      <div className="ChatInfo">
        <Loading />
      </div>
    );  }
  if (error) {
  }
  return (
    <div className="ChatInfo">
      <SetDialog
        startOpen={dialogData.open}
        action={() => setChange(true)}
        close={() => setDialogData({ ...dialogData, open: false })}
        data={dialogData}
        object={editedChat}
        setObject={saveChat}
      />
      <ConfirmDialog
        close={() => setOpenConfirm(false)}
        startOpen={openConfirm}
        action={() => {
          emitUpdateChat(editedChat);
          dispatch(updateChat(editedChat));
        }}
      />

      <Rows>
        <Saparate>
          <div className="imageDetails">
            <GroupsIcon />
          </div>
          {isAdmin && (
            <Button
              onClick={() => setDialogData({ open: true, field: "image" })}
            >
              <EditIcon />
            </Button>
          )}
        </Saparate>
        <Saparate>
          <h1>{editedChat.name}</h1>
          {isAdmin && (
            <Button
              onClick={() => setDialogData({ open: true, field: "name" })}
            >
              <EditIcon />
            </Button>
          )}
        </Saparate>
        <Saparate>
          <h3>{editedChat.description} </h3>
          {isAdmin && (
            <Button
              onClick={() =>
                setDialogData({ open: true, field: "description" })
              }
            >
              <EditIcon />
            </Button>
          )}
        </Saparate>
        <Saparate>
          <Rows>
            <h3>participants: </h3>
            <ParticipantList
              participants={participants}
              admins={chat.admins}
            ></ParticipantList>
          </Rows>
        </Saparate>
        <div>created at :{chat.createdAt}</div>
        {didChange && (
          <Button onClick={() => setOpenConfirm(true)}> save </Button>
        )}
      </Rows>
    </div>
  );
};
