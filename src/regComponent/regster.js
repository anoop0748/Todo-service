import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './regster.css'
import axios from 'axios'




function Register_comp (){
    const Url = 'https://todo-backend-service.onrender.com/register'
    const [reg_user,set_reg_user] = useState("");
    const [reg_password,set_reg_password] = useState("");
    const [reg_con_password,set_reg_con_password] = useState("");
    const navigate = useNavigate()


    async function regUser(){
        console.log(reg_password,reg_con_password)
        if(reg_password.match(reg_con_password) ){
            let data = {
                user_name: reg_user,
                password:reg_password
            }
            console.log(data)
            let res = await axios.post(Url,data);
            console.log(res.status)
            if(res.status === 200){
                navigate('/login')
            }
        }
        else{
            return alert('Please Enter both password same')
        }
    }
    return(
        <>
        <div className="reg_main_cont">
            <div className="reg_cont">
                <div><h2>Register</h2></div>
                <div><input type='text' placeholder="User Name" onChange={(e)=>{set_reg_user(e.target.value)}}/></div>
                <div><input type='password' placeholder="Password" onChange={(e)=>{set_reg_password(e.target.value)}}/></div>
                <div><input type='password' placeholder="Confirm Password" onChange={(e)=>{set_reg_con_password(e.target.value)}}/></div>
                <div><button onClick={regUser}>Register</button></div>
                <div><Link to={'/login'}><h6>Member Login</h6></Link></div>
            </div>
        </div>
        </>
      
    )
}

export default Register_comp;