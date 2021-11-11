import { useState } from "react"
import axios from "axios";
import store from "./store";
import {useHistory} from "react-router-dom";

function Signup(){
    const [usrname1,setUsername]=useState("");
    const [Password1,setPassword]=useState("");
    const history= useHistory();
    const SignupUser=()=>{


/// here i dont need to check i just need to add to json file if already exists then dont add or change use name 

        axios.post("/Signup",{username:usrname1,password:Password1 }).then((res)=>{
            console.log("Sigunp success");
            store.dispatch({type:"SigunpSuccess"});
            history.push("/Login");


        }).catch((err)=>{
            console.log("Sigunp fail");
            store.dispatch({type:"SigunpFail"});
        })
    };
    



    return (<div>
        <h1>Sign up</h1> 
        <input type='username' placeholder="enter username" onChange={(e)=>setUsername(e.target.value)} /><br/>
        <input type='Password' placeholder="enter Password" onChange={(e)=>setPassword(e.target.value)} /><br/>
        <button onClick={SignupUser}>Signup</button>
      



    </div>)
    
    }
    export default Signup;