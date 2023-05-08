import { Rows } from "../../Layouts/Line/Line";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardList } from "../Cards/CardList/CardList";
import { UseFetch } from "../../../CustomHooks/useFetch";
import { useState, useEffect } from "react";
import { ChatCard } from "../Cards/ChatCard/ChatCard";
import { UserCard } from "../Cards/UserCard/UserCard";
import { SideBarDropDown } from "./SideBarDropDown/SideBarDropDown";
import { useSelector } from "react-redux";
import { Saparate } from "../../Layouts/Line/Line";
import "./SideBar.css";

export const SideBar = () => {
    const url = useSelector(store => store.SideBarFetchSlice.url);
    const cardType = useSelector(store => store.SideBarFetchSlice.cardType);
    const method = useSelector(store => store.SideBarFetchSlice.method);
    const text = '';
    const [doSearch, setDoSearch] = useState(false)
    const [resp,isLoading, error, reset] = UseFetch(url,method,{text},[doSearch,cardType]);
    useEffect(()=> reset(),[doSearch,cardType]);

    console.log(resp?.data); 
    if (doSearch){
        setDoSearch(false);
    }

    function onBtnClick(){
        
        setDoSearch(true);
    }

    return (
        <div className="sideBar">
            <Rows>
                <Saparate>
                    <SideBarDropDown/>
                </Saparate>    
                <SearchBar onSearch={onBtnClick}/>
                { !isLoading && !error && <CardList items={resp?.data} cardType={cardType}/>}
            </Rows>
        </div>
    )
}