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
    const url = useSelector(store => store.SideBarFetchSlice.url);
    const cardType = useSelector(store => store.SideBarFetchSlice.cardType);
    const data = useSelector(store => store.SideBarFetchSlice.data);
    const isLoading = false;
    const error = false;
    // const text = '';
    // const [doSearch, setDoSearch] = useState(false)
    // const [resp,isLoading, error] = UseFetch(url,method,{text},[doSearch,cardType]);

    // console.log(resp?.data); 
    // if (doSearch){
    //     setDoSearch(false);
    // }

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