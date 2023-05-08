import { useState,useEffect } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { NavLink, useNavigate, redirect } from "react-router-dom"
import { Chats } from "./chats";
import { UseFetch } from "../CustomHooks/useFetch";
import { Rows } from "../UIkit/Layouts/Line/Line" ;
import { toast } from "../UIkit/utils/sweetAlert";
import { AuthLayout } from "../UIkit/Layouts/AuthLayout/AuthLayout";
import { useDispatch, useSelector } from "react-redux";
import { logIn , logOut } from "../store/authSlice";

export const Login = () => {
    const dispatch = useDispatch();    
    const [inputData, setInputData] = useState(null);
    console.log(useSelector(state => state));
    const [resp, isLoading, fetchError] = UseFetch('login', 'post',inputData,[inputData]);
    dispatch(logIn(resp?.data));
    const isLoggedIn = !isLoading && resp?.status === 200;
    const error = fetchError;

    const submit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const password = formData.get('password');
            setInputData({email, password});
            if (isLoggedIn) await toast("success","login successful");
            else await toast("error", "login failed");
        } catch (error) {
            toast("error", error.message);
        }
        
    }

   const form = (<div className="logIn">
            <h1>Login</h1>
            <form onSubmit={submit} className="loginForm">
            <Rows>
                <Input placeholder={"Email"} name="email"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Button type={"submit"} className="btn">Log In</Button>
                {/* <span>Don't have an account yet? <NavLink to={"/signUp"}>Sign Up</NavLink> </span> */}
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
            </Rows>
            </form>
        </div>)

    return !isLoggedIn && <AuthLayout>{form}</AuthLayout> || <Chats/>
}