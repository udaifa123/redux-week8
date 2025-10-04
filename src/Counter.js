//useselector-------------------------------
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";

// export default function Counter() {
//   const count = useSelector((state) => state.count);
//   const dispatch = useDispatch();

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Count: {count}</h2>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>➕</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>➖</button>
//     </div>
//   );
// }




//--------------------------redux thunk-----------------------------
// import React from "react";
// import { useSelector,useDispatch } from "react-redux";
// import { incrementAsync,setCountAsync } from "./actions";

// export default function Counter(){
//   const count=useSelector((state)=>state.count);
//   const dispatch=useDispatch();


//   return(
//     <div style={{textAlign:"center",marginTop:"200px",backgroundColor:"black",color:"white",borderRadius:"40px",padding:"60px"}}>
//       <h1>Count:{count}</h1>
//       <button onClick={()=>dispatch({type:"INCREMENT"})}>➕</button>
//       <button onClick={()=>dispatch({type:"DECREMENT"})}>➖</button>
//       <button onClick={()=>dispatch(incrementAsync())}>Increment Async</button>
//       <button onClick={()=>dispatch(setCountAsync(100))}>Set Count Async</button>

//     </div>
//   )
// }