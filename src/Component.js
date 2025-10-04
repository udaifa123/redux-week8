// import React,{useEffect} from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { fetchData } from "./actions";

// export default function SimpleComponent(){
//     const dispatch=useDispatch();
//     const{data,loading,error}=useSelector(state=>state);

//     useEffect(()=>{
//         dispatch(fetchData());
//     },[dispatch]);

//     if(loading)return<h2>Loading...</h2>;
//     if(error)return<h2>Error:{error}</h2>;

//     return(
//         <div style={{textAlign:"center",marginTop:"50px"}}>
//             {data ? (
//                 <div>
//                     <h2>{data.name}</h2>
//                     <p>{data.email}</p>

//         </div>
//             ):(
//                 <h2>No data</h2>
//             )}
//     </div>
//     );
// }