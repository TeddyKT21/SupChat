import { useState,useEffect } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { Chats } from "./chats";
import { UseFetch } from "../CustomHooks/useFetch";
import { Rows } from "../UIkit/Layouts/Line/Line" ;
import { toast } from "../UIkit/utils/sweetAlert";

export const SignUp = () => {
    const [inputData, setInputData] = useState(null);
    const [resp, isLoading, fetchError] = UseFetch('signUp', 'post',inputData,[inputData]);
    const isSignedUp = !isLoading && [200,201].includes(resp?.status)
    const error = fetchError;

    const submit = async (e) => {
        e.preventDefault();
        try{
            const formData = new FormData(e.target);
            const email = formData.get('email');
            const username = formData.get('username')
            const password = formData.get('password');
            const confirmPassword = formData.get('confirmPassword');
            if(password === confirmPassword) {
                setInputData({email, password, username})
                await toast("success","sign up successful");
            } else {
                console.log('passwords do not match !')    
            }   
        } catch (error) {
            console.log(error);
            toast("error", error.message);
        }
    }

   const form = (<div className="signUp">
            <h1>Sign Up</h1>
            <form onSubmit={submit} className="">
                <Rows>
                <Input placeholder={"Email"} name="email"/>
                <Input placeholder={"username"} name="username"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Input type={"password"} placeholder={"Confirm Password"} name="confirmPassword"/>
                <Button type={"submit"} className="">Sign Up</Button>
                {/* <span>Already have an account? <NavLink to={"/login"}> Login </NavLink> </span> */}
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
                </Rows>
            </form>
        </div>)

    return !isSignedUp && form || <Chats/>
}