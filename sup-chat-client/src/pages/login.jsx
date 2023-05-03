import { useState,useEffect } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { NavLink, useNavigate, redirect } from "react-router-dom"
import { Chats } from "./chats";
import { UseFetch } from "../CustomHooks/useFetch";
import { Rows } from "../UIkit/Layouts/Line/Line" ;
import { toast } from "../UIkit/utils/sweetAlert";

export const Login = () => {
    const [inputData, setInputData] = useState(null);
    const [resp, isLoading, fetchError] = UseFetch('login', 'post',inputData,[inputData]);
    const isLoggedIn = !isLoading && resp?.status === 200;
    const error = fetchError;

    const submit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');
            setInputData({email, password});
            await toast("success","login successful");
        } catch (error) {
            toast("error", error.message);
        }
        
    }

   const form = (<div className="logIn">
            <h1>Login</h1>
            <form onSubmit={submit} className="">
            <Rows>
                <Input placeholder={"Email"} name="email"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Button type={"submit"} className="">Log In</Button>
                {/* <span>Don't have an account yet? <NavLink to={"/signUp"}>Sign Up</NavLink> </span> */}
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
            </Rows>
            </form>
        </div>)

    return !isLoggedIn && form || <Chats/>
}