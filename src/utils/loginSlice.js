import { createSlice } from "@reduxjs/toolkit";

let loginSlice=createSlice({
    name:"login",
    initialState:{
        islogin:{}
    },
    reducers:{
        sendToLogin:(state,action)=>{
            state.islogin=action.payload

        }
    }

})

export const{sendToLogin}=loginSlice.actions
export default loginSlice.reducer