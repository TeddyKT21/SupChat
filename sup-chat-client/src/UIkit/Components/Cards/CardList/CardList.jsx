import { Rows } from "../../../Layouts/Line/Line";
import { createElement } from "react";
export const CardList = ({items, cardType}) => {
    return (
        <div className="cardList">
            <Rows>
                {items?.map(item => createElement(cardType, item))}
            </Rows>  
        </div>
    )
}