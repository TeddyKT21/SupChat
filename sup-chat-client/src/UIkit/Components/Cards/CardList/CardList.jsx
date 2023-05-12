import { Rows } from "../../../Layouts/Line/Line";
import { Fragment, createElement } from "react";
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
        {items?.map((item) => <Fragment key={item._id}> <Card {...item} /> </Fragment> )}
      </Rows>
    </div>
  );
};