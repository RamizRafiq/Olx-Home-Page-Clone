// import { act } from "@testing-library/react";

const INITIALIZE_STATE={
users:[],
current_user:{}
}

const mystate =(state=INITIALIZE_STATE,action)=>{
    // console.log("Action",action)
    switch(action.type){
    case "SET USER":
        return({
...state,
current_user:action.payload
        })

        case "SETFIREBASEUSERS":
            return({
                ...state,
                users:action.payload
            })
        default :
        break;
    }

    return state;
} 
export default mystate;