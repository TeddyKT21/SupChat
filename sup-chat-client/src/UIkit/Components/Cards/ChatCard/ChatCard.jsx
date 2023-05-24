import { Line, Saparate, Rows } from "../../../Layouts/Line/Line";
import GroupsIcon from "@mui/icons-material/Groups";
import "./ChatCard.css";
import { useDispatch } from "react-redux";
import { setSelectedChat } from "../../../../store/userSlice";
import { useEffect, useState } from "react";
import { setDisplay } from "../../../../store/chatDisplaySlice";
import { DropDown } from "../../DropDown/DropDown";

export const ChatCard = (chat, key) => {
  const [dots, setDots] = useState(".");
  const dispatch = useDispatch();
  const isTyping =
    Array.isArray(chat.typingUsers) && chat.typingUsers.length > 0;
  const lastMessage = chat.messages?.slice(-1)[0]
    ? chat.messages?.slice(-1)[0]
    : { dateTime: new Date(), text: "last message" };
  const date = new Date(lastMessage.dateTime);
  const timeStr = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const options = ["details", "exit chat"];

  useEffect(() => {
    let typingInterval;
    if (isTyping) {
      typingInterval = setInterval(() => {
        setDots((prevDots) => {
          return prevDots.length < 3 ? prevDots + "." : "";
        });
      }, 500);
    } else {
      setDots(".");
    }

    return () => clearInterval(typingInterval);
  }, [isTyping]);
  const infoAction = () => {
    dispatch(setDisplay(true));
  };
  const leaveAction = () => {};

  const onClick = () => {
    dispatch(setDisplay(false));
    dispatch(setSelectedChat(chat));
  };
  return (
    <div className="ChatCard" onClick={onClick} key={key}>
      <Rows>
        <Saparate>
          <Line>
            <div className="image">
              <GroupsIcon />
            </div>
            <div>
              {chat.name.length > 15
                ? chat.name.substring(0, 15) + "..."
                : chat.name}
            </div>
          </Line>
          <div>{timeStr}</div>
          <DropDown options={options} actions={[infoAction, leaveAction]} />
        </Saparate>
        <div>{isTyping ? `Typing${dots}` : lastMessage.text}</div>
      </Rows>
    </div>
  );
};

//{
//   typingUserNames.length > 0 ? (
//     <p>{typingUserNames.join(", ")} is typing...</p>
//   ) : (
//     <p>{chat.messages[chat.messages.length - 1].text}</p>
//   );
// }
