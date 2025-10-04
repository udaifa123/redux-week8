//----------------------------redux thunk------------------------------
// export const incrementAsync=()=>{
//         return(dispatch)=>{
//             setTimeout(()=>{
//                 dispatch({type:"INCREMENT"});
//             },1000);
//         };
// };

// export const setCountAsync=(newCount)=>{
//     return(dispatch)=>{
//         setTimeout(()=>{
//             dispatch({type:"SET_COUNT",payload:newCount});
//         },1000)
//     };
// };





//-------------------------API call with redux-------------------------------
// import axios from "axios";

// export const fetchUser=()=>{
//     return async(dispatch)=>{
//         dispatch({type:"FETCH_USERS_REQUEST"});

//         try{
//             const response=await axios.get("https://jsonplaceholder.typicode.com/users");
//             dispatch({type:"FETCH_USERS_SUCCESS",payload:response.data});
//         }catch(error){
//             dispatch({type:"FETCH_USERS_FAILURE",payload:error.message});
//         }
//     };
// };



//--------------------update reducer------------------------
import axios  from "axios";
export const fetchData=()=>{
    return async(dispatch)=>{
        dispatch({type:"API_REQUEST"});

        try{
            const response=await axios.get("https://jsonplaceholder.typicode.com/users/1");
            dispatch({type:"API_SUCCESS",payload:response.data});
        }catch(error){
            dispatch({type:"API_FAILURE",payload:error.message});
        }
    };
};


