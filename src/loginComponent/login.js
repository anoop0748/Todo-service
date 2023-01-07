import React, { useState } from "react";
import './login.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Url = 'https://todo-backend-service.onrender.com/login'
function LoginComp (){
    const [user_name,setUser_name] = useState("");
    const [user_password,setUser_password] = useState("");
    const navigate = useNavigate()
   async  function loginAuth (){
        let data={
            user_name: user_name,
            password:user_password
        }
        let res = await axios.post(Url,data);
        if(res.status === 200){
            window.localStorage.setItem("token",res.data.token);
            navigate('/SuccessLogin')
        }
        console.log(res.data.token)
     
    }
    return (
        <>
        <div className="main_cont">
            <div className="login_cont">
                <div><h2>Member login</h2></div>
                <div><input type='text' placeholder="User Name" onChange={(e)=>{setUser_name(e.target.value)}}/></div>
                <div><input type='password' placeholder="Password" onChange={(e)=>{setUser_password(e.target.value)}}/></div>
                <div><button onClick={loginAuth}>LOGIN</button></div>
                <div><h6>Forgot Password ?</h6></div>
            </div>
        </div>
        </>
    )
}

 export default  LoginComp;