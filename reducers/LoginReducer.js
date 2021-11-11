let initialState ={
    count : 0
}
function LoginReducer(state=initialState, action){
    if(action.type === "loginSuccess"){
        return {
            ...state,
            loginSuccess: true,
        };
    }
    if(action.type === "loginFail"){
        return {
            ...state,
            loginSuccess: false,
        };
    }
}    

export default LoginReducer;