import { Rows } from "../../Layouts/Line/Line"
import { SearchBar } from "../SearchBar/SearchBar"
import { CardList } from "../Cards/CardList/CardList"
import { UseFetch } from "../../../CustomHooks/useFetch"
import { useState } from "react"
import { ChatCard } from "../Cards/ChatCard/ChatCard"
import { UserCard } from "../Cards/UserCard/UserCard"

export const SideBar = () => {
    const text = '';
    const [doSearch, setDoSearch] = useState(false)
    const [resp,isLoading, error] = UseFetch('data/users','get',{text},[doSearch]);
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
                <SearchBar onSearch={onBtnClick}/>
                <CardList items={resp?.data} cardType={UserCard}/>
            </Rows>
        </div>
    )
}