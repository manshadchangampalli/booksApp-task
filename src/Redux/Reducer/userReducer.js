const preState={}
export const userReducer = (state=preState,action) =>{
    switch (action.type) {
        case "SET_USER":
            return action.payload
        default:
            return state
    }
}