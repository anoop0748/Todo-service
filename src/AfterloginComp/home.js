import React, { useEffect, useState } from "react";
import './home.css'
import axios from "axios";


function TodoUser (){
     const Url = "https:todo-backend-service.onrender.com/successfulLogin"
     const [user_n,set_user_n] = useState("")
     let token = window.localStorage.getItem('token')
      const [todo,set_todo] = useState("")
      let data = []
     function getData(){
         fetch(Url,{
             method:"get",
             headers:{
                 Authorization: token   
             }
         }).then((res)=>res.json())
         .then((data)=>{
            console.log(data.dataInDB[0].user_name)
            set_user_n(data.dataInDB[0].user_name)
         })
     } 
       
     useEffect(()=>{
       getData()
     },[])
    
 async function addtodo(){
   let inp_data = {
     activity:todo,
     status:"pending",
     time_taken:"",
     action:"Start"
   }
 
  
   let res = await axios.post(Url,inp_data,{

     headers:{
         Authorization: token,
         'content-type':'application/json;charset= UTF-8'
     }
   });
  
 }  

    return (
        <>
            <div className="td_main_cont">
                 <div className="td_header"> {user_n}</div>
             <div className="td_body">
                    <div className="td_sideBar">
                        <div>To Do List </div> 
                         <div> History</div> 
                         <div></div> 
                        <div>LogOut</div> 
                    </div>
                    <div className="td_right_section">
                        <div >
                            <input type='text' onBlur={(e)=>{set_todo(e.target.value)}}/>
                            <button onClick={addtodo} >Add new activity</button>
                             </div>
                         <div>
                             <table>
                                <thead>
                                    <td>Activity</td>
                                    <td>Status</td>
                                     <td>Time Taken</td>
                                     <td>Action</td>
                                </thead>
                                <tbody>
                                    {/* {data?.map((val,i)=>{
                                         return (
                                             <tr key={i}>
                                                 <td>{val.activity}</td>
                                                 <td>{val.status}</td>
                                                 <td>{val.time_taken}</td>
                                                 <td>{val.action}</td>
                                             </tr>
                                         )
                                     })} */}
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



