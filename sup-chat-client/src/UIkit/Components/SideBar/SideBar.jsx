import { Rows } from "../../Layouts/Line/Line"
import { SearchBar } from "../SearchBar/SearchBar"
import { CardList } from "../Cards/CardList/CardList"
import { UseFetch } from "../../../CustomHooks/useFetch"
import { useState } from "react"
import { ChatCard } from "../Cards/ChatCard/ChatCard"

export const SideBar = () => {
    const text = '';
    const [doSearch, setDoSearch] = useState(false)
    const [resp,isLoading, error] = UseFetch('users','get',{text},[doSearch]);
    if (doSearch){
        setDoSearch(false);
    }
    function onBtnClick(){
        setDoSearch(true);
    }

    return (
        <div className="sideBar">
            <Rows>
                <SearchBar onSearch={onBtnClick}/>
                <CardList items={resp?.users} cardType={ChatCard}/>
            </Rows>
        </div>
    )
}