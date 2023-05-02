import { useState,useEffect } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { NavLink, useNavigate, redirect } from "react-router-dom"
import { Chats } from "./chats";
import { UseFetch } from "../CustomHooks/useFetch";

export const SignUp = () => {
    const [inputData, setInputData] = useState(null);
    const [resp, isLoading, fetchError] = UseFetch('signUp', 'post',inputData,[inputData]);
    const isSignedUp = !isLoading && [200,201].includes(resp?.status)
    const error = fetchError;

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const username = formData.get('username')
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        password === confirmPassword ? setInputData({email, password, username}): console.log('passwords do not match !')      
    }

   const form = (<div>
            <h1>Sign Up</h1>
            <form onSubmit={submit} className="">
                <Input placeholder={"Email"} name="email"/>
                <Input placeholder={"username"} name="username"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Input type={"password"} placeholder={"Confirm Password"} name="confirmPassword"/>
                <Button type={"submit"} className="">Log In</Button>
                {/* <span>Already have an account? <NavLink to={"/login"}> Login </NavLink> </span> */}
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
            </form>
        </div>)

    return !isSignedUp && form || <Chats/>
}