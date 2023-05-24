import { Fragment } from "react"
import { MessageCard } from "../Cards/MessageCard/MessageCard"
import { useSelector } from "react-redux";
import "./MessageList.css";

export const MessageList = ({messages}) => {
    const user = useSelector(state => state.userSlice.user);

    // const style =
    //   user.username === messages.user.username
    //     ? "userMessage"
    //     : "otherUserMessage";

    return (
      <div className="messageList">
        {messages?.map((message) => (
          <Fragment key={message._id}>
            <MessageCard
              message={message}
              className={
                message.userId === user._id ? "mymessage" : "othermessage"
              }
            />
            {/* className={style} */}
          </Fragment>
        ))}
      </div>
    );
}