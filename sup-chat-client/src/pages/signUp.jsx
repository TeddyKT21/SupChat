import { useState,useEffect } from "react";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { Chats } from "./chats";
import { UseFetch } from "../CustomHooks/useFetch";
import { Rows } from "../UIkit/Layouts/Line/Line" ;
import { toast } from "../UIkit/utils/sweetAlert";
import { AuthLayout } from "../UIkit/Layouts/AuthLayout/AuthLayout";
import { useNavigate } from "react-router-dom"

export const SignUp = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState(null);
    const [resp, isLoading, fetchError] = UseFetch('signUp', 'post',inputData,[inputData]);
    if(inputData && [200,201].includes(resp?.status)){
        toast("success","sign up successful");
        navigate('/login');
    }
    const isSignedUp = !isLoading && [200,201].includes(resp?.status)
    const error = fetchError;
    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const username = formData.get('username')
        const password = formData.get('password');
        const confirmPassword = formData.get('confirmPassword');
        if(password === confirmPassword) {
            setInputData({email, password, username});
        } else {
            console.log('passwords do not match !'); 
            toast("error", 'passwords do not match !');
        }   
        
    }

   const form = (<div className="signUp">
            <h1>Sign Up</h1>
            <form onSubmit={submit} className="signUpForm">
                <Rows>
                <Input placeholder={"Email"} name="email"/>
                <Input placeholder={"username"} name="username"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Input type={"password"} placeholder={"Confirm Password"} name="confirmPassword"/>
                {/* <span>Already have an account? <NavLink to={"/login"}> Login </NavLink> </span> */}
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
                </Rows>
                <Button type={"submit"} className="btn">Sign Up</Button>
            </form>
        </div>)

    return !isSignedUp && <AuthLayout>{form}</AuthLayout>
}