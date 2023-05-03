import { Line } from "../../Layouts/Line/Line";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input/Input";
import "./SearchBar.css";
import React, { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  let [text, setText] = useState("");
  return (
    <div className="searchBar">
          <Line>
            <Input onTextChange={setText} placeholder={"Search..."} name={"search"}/>
            <Button onClick={() => onSearch(text)}>
              Search
            </Button>
          </Line>
    </div>
  );
};