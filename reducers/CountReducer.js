let initialState={
    count:0,
    loginSucess: true ,
    SignupSucess:false,
    user:"none"
}


function CounterReducer(state=initialState,action){
 if ( action.type === "INCREMENT"){
     return {
         ...state, // means current state or inital state
         count: state.count +1, // from the above state what we ant to change
     }
 }
 if ( action.type === "DECREMENT"){
    return {
        ...state, // means current state or inital state
        count: state.count - 1, // from the above state what we ant to change
    }
 }
 if ( action.type === "RESET"){
    return {
        ...state, // means current state or inital state
        count: 0, // from the above state what we ant to change
    }

    }

    if (action.type==="loginSucess"){
        return{
            ...state,
            loginSucess:true,
            user:action.user
        }
    }
    if (action.type==="loginFail"){
        return{
            ...state,
            loginSucess:false
        }
    }

    if (action.type==="SignupSucess"){
        return{
            ...state,
            SignupSucess:true
        }
    }
    if (action.type==="SignupFail"){
        return{
            ...state,
            SignupSucess:false
        }
    }

}

export default CounterReducer;