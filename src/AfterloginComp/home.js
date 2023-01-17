import { React, useEffect, useState } from "react";
import './home.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TodoUser (){
     const Url = "https:todo-backend-service.onrender.com/successfulLogin"
     const navigate = useNavigate()
     const [user_n,set_user_n] = useState("")
     let token = window.localStorage.getItem('token')
     console.log(token)
      const [todo,set_todo] = useState("")
      let [data ,set_data] = useState([])
     async function getData(){
         await fetch(Url,{
             method:"get",
             headers:{
                 Authorization: token   
             }
         }).then((res)=>res.json())
         .then((data)=>{
            console.log(data.dataInDB[0].user_name)
            set_user_n(data.dataInDB[0].user_name)
            set_data(data.dataInDB[0].todo_list)
         })
     } 
       
     useEffect(()=>{
        if(!token){
            navigate('/login')
        }
       getData()
     },[])
    function logout(){
        window.localStorage.clear();
        navigate('/login')
    }
 async function addtodo(){
   let inp_data = {
     activity:todo,
     status:"pending",
     time_taken:"",
     action:"Start"
   }
 
//   data.push(inp_data)
   let res = await axios.post(Url,inp_data,{

     headers:{
         Authorization: token,
         'content-type':'application/json;charset= UTF-8'
     }
   });
   if(res.status === 200){
    getData()
   }
  
 }  

    return (
        <>
            <div className="td_main_cont">
                 <div className="td_header"> <h3>{user_n}</h3></div>
             <div className="td_body">
                    <div className="td_sideBar">
                        <div>
                            <h2>To Do List</h2>
                            <h5> History</h5> 
                            </div> 
                         <div></div> 
                        <button onClick={logout}>LogOut</button> 
                    </div>
                    <div className="td_right_section">
                        <div >
                            <input type='text' onBlur={(e)=>{set_todo(e.target.value)}}/>
                            <button onClick={addtodo} >Add new activity</button>
                             </div>
                         <div id="table_cont">
                             <table>
                                <thead>
                                    <tr>
                                    <th>Activity</th>
                                    <th>Status</th>
                                     <th>Time Taken</th>
                                     <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((val,i)=>{
                                         return (
                                             <tr key={i}>
                                                 <td>{val.activity}</td>
                                                 <td>{val.status}</td>
                                                 <td>{val.time_taken}</td>
                                                 <td>{val.action}</td>
                                             </tr>
                                         )
                                     })}
                                </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
             </div>
            
        </>
    )
}


 export default TodoUser;



