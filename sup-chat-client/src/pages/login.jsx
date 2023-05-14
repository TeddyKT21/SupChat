import { useState,React } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../UIkit/Components/Input/Input/Input";
import { Button } from "../UIkit/Components/Button/Button";
import { UseFetch } from "../CustomHooks/useFetch";
import { Rows } from "../UIkit/Layouts/Line/Line" ;
import { toast } from "../UIkit/utils/sweetAlert";
import { AuthLayout } from "../UIkit/Layouts/AuthLayout/AuthLayout";
import { fetchUser, logIn , logOut } from "../store/authSlice";

export const Login = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const [inputData, setInputData] = useState(null);
    const {user,error,loading} = useSelector(state => state.authSlice);
    if (inputData) dispatch(fetchUser(inputData));

    if (user) {
        toast("success","login successful");
        navigate("/chats");
    }
    if(!user && inputData) toast("error", "login failed");

    const submit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        if (email !== inputData?.email || password !== inputData?.password){
            setInputData({email, password});
        }
    }

   const form = (<div className="logIn">
            <h1>Login</h1>
            <form onSubmit={submit} className="loginForm">
            <Rows>
                <Input placeholder={"Email"} name="email"/>
                <Input type={"password"} placeholder={"Password"} name="password"/>
                <Button type={"submit"} className="btn">Log In</Button>
                <span style={{color:"red"}}>{error && "invalid fields"}</span>
            </Rows>
            </form>
        </div>)

    return  !user && !loading && <AuthLayout>{form}</AuthLayout> || loading && <div>loading...</div>

   
}