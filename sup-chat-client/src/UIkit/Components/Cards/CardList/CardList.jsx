import { Rows } from "../../../Layouts/Line/Line";
import { createElement } from "react";
import { ChatCard } from "../ChatCard/ChatCard";
import { UserCard } from "../UserCard/UserCard";
import { MessageCard } from "../MessageCard/MessageCard";
import "./CardList.css";


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
        {items?.map((item) => <Card key ={item._id} {...item} />)}
      </Rows>
    </div>
  );
};