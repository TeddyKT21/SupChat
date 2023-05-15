import { Rows } from "../../Layouts/Line/Line";
import { SearchBar } from "../SearchBar/SearchBar";
import { CardList } from "../Cards/CardList/CardList";
import { UseFetch } from "../../../CustomHooks/useFetch";
import { useState } from "react";
import { SideBarDropDown } from "./SideBarDropDown/SideBarDropDown";
import { useSelector } from "react-redux";
import { Saparate } from "../../Layouts/Line/Line";
import "./SideBar.css";

export const SideBar = () => {
    const url = useSelector(state => state.SideBarDisplaySlice.url);
    const cardType = useSelector(state => state.SideBarDisplaySlice.cardType);
    const {data, isLoading, error} = useSelector(state => state.SideBarDisplaySlice);
    console.log('sidebar data: ',data);

    function onBtnClick(){
        
        // setDoSearch(true);
    }

    return (
        <div className="sideBar">
            <Rows>
                <Saparate>
                    <SideBarDropDown/>
                </Saparate>    
                <SearchBar onSearch={onBtnClick}/>
                { !isLoading && !error && <CardList items={data} cardType={cardType}/>}
            </Rows>
        </div>
    )
}