import { Rows } from "../../../Layouts/Line/Line";
import { createElement } from "react";

export const CardList = ({items, cardType}) => {
  return (
    <div className="cardList">
      <Rows>
        {items?.map((item) => {
            return(<div key ={item._id}>
                {createElement(cardType, item)}
            </div>)
        }
        )}
      </Rows>
    </div>
  );
};