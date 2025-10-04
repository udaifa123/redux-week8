//------------------useSelector---------------------
// import React from "react";
// import { useSelector,useDispatch } from "react-redux";

// export default function User(){
//     const user=useSelector((state)=>state.user);

//     const dispatch=useDispatch();

//     const changeEmail=()=>{
//         dispatch({type:"UPDATE_EMAIL",payload:"huzaifa@example.com"});
//     };

//     const changeAddress=()=>{
//         dispatch({type:"UPDATE_ADDRESS",payload:"Zaitoon international campus"})
//     };
//     return(
//         <div style={{textAlign:"center",marginTop:"50px"}}>
//             <h2>User Name:{user.name}</h2>
//             <h3>Email:{user.email}</h3>
//             <h3>Address:{user.address}</h3>
//             <button onClick={changeEmail}>Change Email</button>
//             <button onClick={changeAddress}>change</button>

//         </div>
//     );
// }




//==-------------------------------API call with redux--------------------------------
import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchUser } from "./actions";

export default function User(){
    const dispatch=useDispatch();

    const{user,loading,error}=useSelector((state)=>state);

    useEffect(()=>{
        dispatch(fetchUser()); 
    },[dispatch]);

    if(loading)return<h2>Loading...</h2>
    if(error)return<h2>Error:{error}</h2>

    return(
        <div style={{textAlign:"center",marginTop:"20px"}}>
            <h2>User List</h2>
            <ul>
               {user.map((user)=>(
                <li key={user.id}>{user.name} ({user.email})</li>
               ))}
            </ul>

        </div>
    )
    }
