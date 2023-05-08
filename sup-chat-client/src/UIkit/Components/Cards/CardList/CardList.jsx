import { Rows } from "../../../Layouts/Line/Line";
import { createElement } from "react";
import { ChatCard } from "../ChatCard/ChatCard";
import { UserCard } from "../UserCard/UserCard";
import { MessageCard } from "../MessageCard/MessageCard";


const componentMap = {
  ChatCard,
  UserCard,
  MessageCard,
};

export const CardList = ({items, cardType}) => {
  const Card = componentMap[cardType];
  return (
    <div className="cardList">
      <Rows>
        {items?.map((item) => {
            return(<div key ={item._id}>
                <Card {...item} />
            </div>)
        }
        )}
      </Rows>
    </div>
  );
};