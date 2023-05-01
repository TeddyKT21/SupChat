import { useState } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { Link } from "react-router-dom"
import { login } from "../../../sup-chat-server/src/controllers/user"

import axios from "axios";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {
        e.preventDefault();
        try {
            const resp = await axios.get(`http://localhost:8080/login`);
            const user = await login();
        } catch (error) {
            
        }
    }

    return (
        <div>
            <form onSubmit={submit} className="">
                <Input placeholder={"Email"} onTextChange={setEmail}/>
                <Input type={"password"} placeholder={"Password"} onTextChange={setPassword}/>
                <Button type={"submit"} className="">Log In</Button>
                <span>Don't have an account yet? <Link to={"/signUp"}>Sign Up</Link> </span>
            </form>
        </div>
    )
}