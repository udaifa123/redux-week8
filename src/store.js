//---------------------useSelector------------------------
// import { createStore } from "redux";

// const initialState = { count: 0 };

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, count: state.count + 1 };
//     case "DECREMENT":
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// export const store = createStore(counterReducer);



//-----------------------------useSelector-----------------------------
// import {createStore} from "redux";

// const initialState={
//   user:{
//     name:"Udaifa",
//     email:"udaifa@example.com",
//     address:"ZIAS KANNUR"
//   },
// };

// function userReducer(state=initialState,action){
//   switch(action.type){
//     case 'UPDATE_EMAIL':
//       return{
//         ...state,
//         user:{...state.user,email:action.payload},

          
//       };
//        case 'UPDATE_ADDRESS':
//         return{
//           ...state,
//           user:{...state.user,address:action.payload}
//         }

//       default :
//       return state;
//   }
// }
// export const store=createStore(userReducer);



//------------------------------redux thunk--------------------------
// import {createStore,applyMiddleware} from "redux";
// import { thunk } from "redux-thunk";
// const initialState={count:0}

// function counterReducer(state=initialState,action){
//     switch(action.type){
//       case "INCREMENT":
//         return{...state,count:state.count+1};
//       case "DECREMENT":
//         return{...state,count:state.count-1};
//       case "SET_COUNT":
//         return{...state,count:action.payload};
//       default:
//         return state;
//     }
// }

// export const store=createStore(counterReducer,applyMiddleware(thunk));



//---------------------------API call with redux----------------------------------
import {createStore,applyMiddleware} from "redux";
import { thunk } from "redux-thunk";

const initialState={
  users:[],
  loading:false,
  error:null,
};

function userReducer(state=initialState,action){
  switch(action.type){
    case "FETCH_USERS_REQUEST":
      return{...state,loading:true,error:null};
    case "FETCH_USERS_SUCCESS":
      return{...state,loading:false,users:action.payload};
    case "FETCH_USERS_FAILURE":
      return{...state,loading:false,error:action.payload};
    default :
    return state;
  }
}
export const store=createStore(userReducer,applyMiddleware(thunk));



//-------------------updated reducers--------------------------
// import {createStore,applyMiddleware}from "redux";
// import { thunk } from "redux-thunk";

// const initialState={
//     data:null,
//     loading:false,
//     error:null,
    
// };

// function simpleReducer(state=initialState,action){
//   switch(action.type){
//     case "API_REQUEST":
//       return{...state,loading:true,error:null};
//     case "API_SUCCESS":
//       return{...state,loading:false,data:action.payload};
//     case "API_FAILURE":
//       return{...state,loading:false,error:action.payload};
//     default:
//       return state;
//   }
// }

// export default store=createStore(reducer,applyMiddleware(thunk));